const WP_GANTT_MONTHS = [{ label: '7 月', days: 31 }, { label: '8 月', days: 31 }, { label: '9 月', days: 30 }];

function TimelineView() {
  const { Badge, Tag } = window.DesignSystem_3175a1;
  const { milestones, threads } = window.WorkpanelData;
  const totalDays = WP_GANTT_MONTHS.reduce((s, m) => s + m.days, 0);
  let cursor = 0;
  const dividers = WP_GANTT_MONTHS.slice(0, -1).map(m => { cursor += m.days; return (cursor / totalDays) * 100; });

  return (
    <div className="wp-gantt">
      <div className="wp-gantt-months">
        <div className="wp-gantt-months__spacer"></div>
        <div className="wp-gantt-months__track">
          {WP_GANTT_MONTHS.map(m => (
            <span key={m.label} style={{ width: `${(m.days / totalDays) * 100}%` }}>{m.label}</span>
          ))}
        </div>
      </div>
      <div className="wp-gantt-body">
        {milestones.map(m => {
          const left = ((m.start - 1) / totalDays) * 100;
          const width = ((m.end - m.start + 1) / totalDays) * 100;
          const related = threads.filter(t => t.milestoneId === m.id);
          return (
            <div className="wp-gantt-row" key={m.id}>
              <div className="wp-gantt-label">
                <span className="wp-gantt-label__name">{m.name}</span>
                <Badge tone={m.status.tone}>{m.status.label}</Badge>
              </div>
              <div className="wp-gantt-main">
                <div className="wp-gantt-track-wrap">
                  {dividers.map(d => <div className="wp-gantt-divider" key={d} style={{ left: `${d}%` }}></div>)}
                  <div className="wp-gantt-bar" style={{ left: `${left}%`, width: `${width}%` }}>
                    <div className="wp-gantt-fill" style={{ width: `${m.progress}%` }}></div>
                  </div>
                  <span className="wp-gantt-due" style={{ left: `${left + width}%` }}>{m.due}</span>
                </div>
                {related.length > 0 ? (
                  <div className="wp-gantt-issues">
                    {related.map(t => (
                      <div className={`wp-gantt-issue ${t.status === 'closed' ? 'wp-gantt-issue--closed' : ''}`} key={t.id}>
                        <img src={window.WP_ICON(t.status === 'open' ? 'circle-dot' : 'check-circle-2')} alt="" />
                        <span className="wp-gantt-issue__title">{t.title}</span>
                        <Tag>{t.tag}</Tag>
                        <span className="wp-gantt-issue__count">{t.replies.length} 条讨论</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.TimelineView = TimelineView;
