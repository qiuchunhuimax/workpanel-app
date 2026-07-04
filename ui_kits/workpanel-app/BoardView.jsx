const WP_COLUMN_TONE = { todo: 'neutral', doing: 'info', review: 'warning', done: 'success' };

function BoardView() {
  const { Badge, ProgressBar, Tag, Avatar, Dialog, Button, Card, Input, Checkbox } = window.DesignSystem_3175a1;
  const { members, nextMeeting } = window.WorkpanelData;
  const [milestones, setMilestones] = React.useState(window.WorkpanelData.milestones);
  const [selected, setSelected] = React.useState(milestones.find(m => m.status.label === '进行中')?.id || milestones[0].id);
  const [openTask, setOpenTask] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(null);
  const [newItem, setNewItem] = React.useState('');
  const milestone = milestones.find(m => m.id === selected);

  const openEdit = () => {
    setDraft({ ...milestone, keyItems: [...milestone.keyItems], participantIds: [...milestone.participantIds] });
    setEditing(true);
  };
  const saveEdit = () => {
    setMilestones(milestones.map(m => m.id === draft.id ? { ...m, ...draft } : m));
    setEditing(false);
  };
  const toggleParticipant = (id) => {
    setDraft(d => ({ ...d, participantIds: d.participantIds.includes(id) ? d.participantIds.filter(p => p !== id) : [...d.participantIds, id] }));
  };
  const addKeyItem = () => {
    if (!newItem.trim()) return;
    setDraft(d => ({ ...d, keyItems: [...d.keyItems, newItem.trim()] }));
    setNewItem('');
  };
  const removeKeyItem = (i) => setDraft(d => ({ ...d, keyItems: d.keyItems.filter((_, idx) => idx !== i) }));

  return (
    <div>
      <div className="wp-milestone-strip">
        {milestones.map(m => (
          <Card key={m.id} interactive onClick={() => setSelected(m.id)} className={`wp-milestone-card ${m.id === selected ? 'wp-milestone-card--active' : ''}`}>
            <div className="wp-milestone-card__head">
              <span className="wp-milestone-card__name">{m.name}</span>
              <Badge tone={m.status.tone}>{m.status.label}</Badge>
            </div>
            <ProgressBar value={m.progress} showPercent={false} />
            <span className="wp-milestone-card__due">截止 {m.due}</span>
          </Card>
        ))}
      </div>
      <div className="wp-board-meta">
        <div className="wp-board-meta__left">
          <span className="wp-board-meta__milestone">{milestone.name} 的看板</span>
          <span className="wp-board-meta__meeting"><img src={window.WP_ICON('calendar-clock')} alt="" />下次例会：{nextMeeting.label}</span>
        </div>
        <Button variant="secondary" size="sm" icon={<img src={window.WP_ICON('settings-2')} style={{ width: 14, height: 14 }} alt="" />} onClick={openEdit}>里程碑设置</Button>
      </div>
      <div className="wp-milestone-brief">
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">目标</span><span className="wp-milestone-brief__value">{milestone.goal}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">时间计划</span><span className="wp-milestone-brief__value">{milestone.startDate} – {milestone.endDate}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">重点事项</span><span className="wp-milestone-brief__value wp-milestone-brief__tags">{milestone.keyItems.map(k => <Tag key={k}>{k}</Tag>)}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">参与人员</span><span className="wp-milestone-brief__value wp-milestone-brief__people">{milestone.participantIds.map(id => { const p = members.find(m => m.id === id); return p ? <span key={id} className="wp-milestone-brief__person"><Avatar name={p.name} size="sm" />{p.name}</span> : null; })}</span></div>
      </div>
      <div className="wp-board">
        {milestone.columns.map(col => (
          <div className="wp-board-col" key={col.key}>
            <div className="wp-board-col__head">
              <span>{col.label}</span>
              <span className="wp-board-col__count">{col.tasks.length}</span>
            </div>
            {col.tasks.length === 0 ? <div className="wp-board-col__empty">暂无任务</div> : null}
            {col.tasks.map(t => (
              <div className="wp-task-card" key={t.id} onClick={() => setOpenTask({ ...t, columnLabel: col.label, columnTone: WP_COLUMN_TONE[col.key], milestoneName: milestone.name })}>
                <span className="wp-task-card__title">{t.title}</span>
                <div className="wp-task-card__tags">
                  {t.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <div className="wp-task-card__meta">
                  <Avatar name={t.owner} size="sm" />
                  <span className="wp-task-card__due">{t.due}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Dialog
        open={!!openTask}
        title={openTask ? openTask.title : ''}
        onClose={() => setOpenTask(null)}
        footer={<><Button variant="secondary" onClick={() => setOpenTask(null)}>关闭</Button><Button variant="primary" onClick={() => setOpenTask(null)}>标记为已完成</Button></>}
      >
        {openTask ? (
          <div className="wp-task-detail">
            <div className="wp-task-detail__row">
              <Badge tone={openTask.columnTone}>{openTask.columnLabel}</Badge>
              {openTask.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <p className="wp-task-detail__desc">{openTask.desc}</p>
            <div className="wp-task-detail__meta">
              <div className="wp-task-detail__meta-item"><span className="wp-task-detail__meta-label">负责人</span><span className="wp-task-detail__meta-value"><Avatar name={openTask.owner} size="sm" />{openTask.owner}</span></div>
              <div className="wp-task-detail__meta-item"><span className="wp-task-detail__meta-label">截止日期</span><span className="wp-task-detail__meta-value">{openTask.due}</span></div>
              <div className="wp-task-detail__meta-item"><span className="wp-task-detail__meta-label">所属里程碑</span><span className="wp-task-detail__meta-value">{openTask.milestoneName}</span></div>
            </div>
          </div>
        ) : null}
      </Dialog>
      <Dialog
        open={editing}
        title={draft ? `${draft.name} · 里程碑设置` : ''}
        onClose={() => setEditing(false)}
        footer={<><Button variant="secondary" onClick={() => setEditing(false)}>取消</Button><Button variant="primary" onClick={saveEdit}>保存</Button></>}
      >
        {draft ? (
          <div className="wp-milestone-form">
            <div className="wp-milestone-form__row">
              <Input label="开始日期" value={draft.startDate} onChange={e => setDraft({ ...draft, startDate: e.target.value })} />
              <Input label="截止日期" value={draft.endDate} onChange={e => setDraft({ ...draft, endDate: e.target.value })} />
            </div>
            <Input label="目标" value={draft.goal} onChange={e => setDraft({ ...draft, goal: e.target.value })} />
            <div className="wp-milestone-form__field">
              <span className="wp-field__label">重点事项</span>
              <div className="wp-milestone-form__chips">
                {draft.keyItems.map((k, i) => <Tag key={i} removable onRemove={() => removeKeyItem(i)}>{k}</Tag>)}
              </div>
              <div className="wp-milestone-form__addrow">
                <Input placeholder="新增重点事项" value={newItem} onChange={e => setNewItem(e.target.value)} onKeyDown={e => e.key === 'Enter' && addKeyItem()} />
                <Button variant="secondary" size="sm" onClick={addKeyItem}>添加</Button>
              </div>
            </div>
            <div className="wp-milestone-form__field">
              <span className="wp-field__label">参与人员</span>
              <div className="wp-milestone-form__people">
                {members.map(m => (
                  <Checkbox key={m.id} label={`${m.name} · ${m.role}`} checked={draft.participantIds.includes(m.id)} onChange={() => toggleParticipant(m.id)} />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Dialog>
    </div>
  );
}

window.BoardView = BoardView;
