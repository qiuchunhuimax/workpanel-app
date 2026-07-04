const WP_RETRO_COLUMNS = [
  { key: 'planned', label: '原本准备发生什么', tone: 'neutral' },
  { key: 'actual', label: '实际发生了什么', tone: 'info' },
  { key: 'gaps', label: '为什么有差异', tone: 'warning' },
  { key: 'actions', label: '下一轮改什么', tone: 'success' },
];

function RetroView() {
  const { Tabs, Badge, Tag, Avatar } = window.DesignSystem_3175a1;
  const { milestones, retros, members } = window.WorkpanelData;
  const [selected, setSelected] = React.useState(milestones.find(m => retros[m.id])?.id || milestones[0].id);
  const milestone = milestones.find(m => m.id === selected);
  const retro = retros[selected];

  return (
    <div>
      <Tabs
        className="wp-retro-tabs"
        tabs={milestones.map(m => ({ key: m.id, label: m.name.replace(/^里程碑\s*\d+\s*·\s*/, '') }))}
        active={selected}
        onChange={setSelected}
      />
      <div className="wp-retro-head">
        <span className="wp-retro-head__name">{milestone.name}</span>
        <Badge tone={milestone.status.tone}>{milestone.status.label}</Badge>
      </div>
      <div className="wp-milestone-brief">
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">目标</span><span className="wp-milestone-brief__value">{milestone.goal}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">时间计划</span><span className="wp-milestone-brief__value">{milestone.startDate} – {milestone.endDate}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">重点事项</span><span className="wp-milestone-brief__value wp-milestone-brief__tags">{milestone.keyItems.map(k => <Tag key={k}>{k}</Tag>)}</span></div>
        <div className="wp-milestone-brief__row"><span className="wp-milestone-brief__label">参与人员</span><span className="wp-milestone-brief__value wp-milestone-brief__people">{milestone.participantIds.map(id => { const p = members.find(m => m.id === id); return p ? <span key={id} className="wp-milestone-brief__person"><Avatar name={p.name} size="sm" />{p.name}</span> : null; })}</span></div>
      </div>
      {retro ? (
        <div>
          <div className="wp-retro-summary">
            <img src={window.WP_ICON('sparkles')} alt="" />
            <span>{retro.aiSummary}</span>
          </div>
          <div className="wp-board wp-retro-board">
            {WP_RETRO_COLUMNS.map(col => {
              const items = retro[col.key];
              return (
                <div className="wp-board-col" key={col.key}>
                  <div className="wp-board-col__head">
                    <span>{col.label}</span>
                    <span className="wp-board-col__count">{items.length}</span>
                  </div>
                  {items.length === 0 ? <div className="wp-board-col__empty">暂无内容</div> : null}
                  {col.key === 'actions'
                    ? items.map((a, i) => (
                      <div className="wp-task-card" key={i}>
                        <span className="wp-task-card__title">{a.text}</span>
                        <div className="wp-task-card__meta">
                          <Avatar name={a.owner === '全员' ? '全员' : a.owner} size="sm" />
                          <span className="wp-task-card__due">{a.owner}</span>
                        </div>
                      </div>
                    ))
                    : items.map((t, i) => (
                      <div className="wp-task-card wp-task-card--static" key={i}>
                        <span className="wp-task-card__title">{t}</span>
                      </div>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="wp-retro-empty">
          <img src={window.WP_ICON('rotate-ccw')} alt="" />
          <span>该里程碑尚未完成，复盘将在完成后由 AI 自动生成草稿。</span>
        </div>
      )}
    </div>
  );
}

window.RetroView = RetroView;
