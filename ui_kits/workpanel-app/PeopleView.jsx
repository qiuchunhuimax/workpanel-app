function PeopleView() {
  const { Tabs, Avatar, Badge, Tag } = window.DesignSystem_3175a1;
  const { members, milestones } = window.WorkpanelData;
  const [selected, setSelected] = React.useState(milestones.find(m => m.status.label === '进行中')?.id || milestones[0].id);
  const milestone = milestones.find(m => m.id === selected);

  const columnTone = { todo: 'neutral', doing: 'info', review: 'warning', done: 'success' };
  const tasksInMilestone = (name) => {
    const out = [];
    milestone.columns.forEach(col => {
      col.tasks.forEach(t => { if (t.owner === name) out.push({ ...t, columnLabel: col.label, columnKey: col.key }); });
    });
    return out;
  };

  const participants = milestone.participantIds.map(id => members.find(m => m.id === id)).filter(Boolean);

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
      <div className="wp-people">
        {participants.map(m => {
          const tasks = tasksInMilestone(m.name);
          const active = tasks.filter(t => t.columnKey !== 'done');
          return (
            <div className="wp-person-card" key={m.id}>
              <div className="wp-person-card__head">
                <Avatar name={m.name} size="lg" status={m.status} />
                <div className="wp-person-card__id">
                  <span className="wp-person-card__name">{m.name}</span>
                  <span className="wp-person-card__role">{m.role}</span>
                </div>
                <span className="wp-person-card__count">{active.length} 项进行中</span>
              </div>
              <p className="wp-person-card__resp">{m.responsibility}</p>
              <div className="wp-person-card__tasks">
                {tasks.length === 0 ? <div className="wp-person-card__empty">在本里程碑暂无分配任务</div> : tasks.map(t => (
                  <div className="wp-person-task" key={t.id}>
                    <Badge tone={columnTone[t.columnKey]}>{t.columnLabel}</Badge>
                    <span className="wp-person-task__title">{t.title}</span>
                    {t.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    <span className="wp-person-task__due">{t.due}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {participants.length === 0 ? <div className="wp-person-card__empty">该里程碑尚未指定参与人员</div> : null}
      </div>
    </div>
  );
}

window.PeopleView = PeopleView;
