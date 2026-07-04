function ProjectsView({ onOpen }) {
  const { Badge, Avatar, ProgressBar } = window.DesignSystem_3175a1;
  const { projects, members, currentUser } = window.WorkpanelData;

  return (
    <div className="wp-projects">
      <div className="wp-projects__topbar">
        <span className="wp-shell-brand wp-projects__brand">工作面板</span>
        <div className="wp-shell-user wp-projects__user">
          <window.DesignSystem_3175a1.Avatar name={currentUser.name} status="online" />
          <div>
            <div className="wp-shell-user__name">{currentUser.name}</div>
            <div className="wp-shell-user__role">{currentUser.role}</div>
          </div>
        </div>
      </div>
      <div className="wp-projects__body">
        <div className="wp-projects__head">
          <span className="wp-projects__title">我的项目</span>
          <span className="wp-projects__count">{projects.length} 个项目</span>
        </div>
        <div className="wp-projects__grid">
          {projects.map(p => (
            <div className="wp-project-card" key={p.id} onClick={() => onOpen(p.id)}>
              <div className="wp-project-card__head">
                <span className="wp-project-card__name">{p.name}</span>
                <Badge tone={p.status.tone}>{p.status.label}</Badge>
              </div>
              <p className="wp-project-card__desc">{p.desc}</p>
              <ProgressBar value={p.progress} showPercent={false} />
              <div className="wp-project-card__foot">
                <div className="wp-project-card__avatars">
                  {p.memberIds.map(id => { const m = members.find(mm => mm.id === id); return m ? <Avatar key={id} name={m.name} size="sm" /> : null; })}
                </div>
                <span className="wp-project-card__updated">更新于 {p.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.ProjectsView = ProjectsView;
