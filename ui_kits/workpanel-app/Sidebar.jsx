const ICON = name => `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;

function Sidebar({ active, onNavigate, project, onBack }) {
  const items = [
    { key: 'board', label: '白板', icon: 'layout-grid' },
    { key: 'people', label: '人员', icon: 'users' },
    { key: 'channel', label: '讨论', icon: 'message-circle' },
    { key: 'docs', label: '文档', icon: 'folder' },
    { key: 'retro', label: '复盘', icon: 'rotate-ccw' },
    { key: 'mechanism', label: '机制设置', icon: 'settings' },
  ];
  const { currentUser } = window.WorkpanelData;
  return (
    <div className="wp-shell-sidebar">
      <button type="button" className="wp-shell-back" onClick={onBack}>
        <img src={ICON('arrow-left')} alt="" />所有项目
      </button>
      <div className="wp-shell-brand">{project.name}</div>
      <div className="wp-shell-workspace">{project.workspace}</div>
      <div className="wp-shell-nav">
        {items.map(it => (
          <button
            key={it.key}
            className={`wp-shell-nav__item ${active === it.key ? 'wp-shell-nav__item--active' : ''}`}
            onClick={() => onNavigate(it.key)}
          >
            <img src={ICON(it.icon)} alt="" />
            {it.label}
          </button>
        ))}
      </div>
      <div className="wp-shell-spacer"></div>
      <div className="wp-shell-user">
        <window.DesignSystem_3175a1.Avatar name={currentUser.name} status="online" />
        <div>
          <div className="wp-shell-user__name">{currentUser.name}</div>
          <div className="wp-shell-user__role">{currentUser.role}</div>
        </div>
      </div>
    </div>
  );
}

window.Sidebar = Sidebar;
window.WP_ICON = ICON;
