function ChannelView() {
  const { Avatar, IconButton, Badge, Tag, Button, Dialog, Input } = window.DesignSystem_3175a1;
  const { threads: initialThreads } = window.WorkpanelData;
  const [threads, setThreads] = React.useState(initialThreads);
  const [selectedId, setSelectedId] = React.useState(initialThreads[0].id);
  const [reply, setReply] = React.useState('');
  const [newOpen, setNewOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState('');

  const selected = threads.find(t => t.id === selectedId);

  const sendReply = () => {
    if (!reply.trim()) return;
    setThreads(threads.map(t => t.id === selectedId
      ? { ...t, replies: [...t.replies, { author: '沈亦舟', time: '现在', text: reply }] }
      : t));
    setReply('');
  };

  const createThread = () => {
    if (!newTitle.trim()) return;
    const t = { id: 'local-' + Date.now(), title: newTitle, tag: '综合', status: 'open', author: '沈亦舟', time: '现在', replies: [] };
    setThreads([t, ...threads]);
    setSelectedId(t.id);
    setNewTitle('');
    setNewOpen(false);
  };

  return (
    <div className="wp-issues">
      <div className="wp-issues-list">
        <div className="wp-issues-list__head">
          <span>{threads.filter(t => t.status === 'open').length} 个待解决</span>
          <Button variant="primary" size="sm" icon={<img src={window.WP_ICON('plus')} style={{ width: 14, height: 14 }} alt="" />} onClick={() => setNewOpen(true)}>提问</Button>
        </div>
        {threads.map(t => (
          <div key={t.id} className={`wp-issue-row ${t.id === selectedId ? 'wp-issue-row--active' : ''}`} onClick={() => setSelectedId(t.id)}>
            <img className="wp-issue-row__status-icon" src={window.WP_ICON(t.status === 'open' ? 'circle-dot' : 'check-circle-2')} alt="" />
            <div className="wp-issue-row__body">
              <span className="wp-issue-row__title">{t.title}</span>
              <div className="wp-issue-row__meta">
                <span>{t.author === 'AI' ? 'AI 助手' : t.author} 提出 · {t.time}</span>
                <Tag>{t.tag}</Tag>
              </div>
            </div>
            <span className="wp-issue-row__count">{t.replies.length}</span>
          </div>
        ))}
      </div>
      <div className="wp-issue-detail">
        {selected ? (
          <React.Fragment>
            <div className="wp-issue-detail__head">
              <Badge tone={selected.status === 'open' ? 'info' : 'success'}>{selected.status === 'open' ? '待解决' : '已解决'}</Badge>
              <span className="wp-issue-detail__title">{selected.title}</span>
              <Tag>{selected.tag}</Tag>
            </div>
            <div className="wp-channel__thread">
              {selected.replies.map((m, i) => (
                <div className={`wp-msg ${m.ai ? 'wp-msg--ai' : ''}`} key={i}>
                  <Avatar name={m.author} ai={!!m.ai} size="md" />
                  <div className="wp-msg__body">
                    <div className="wp-msg__head">
                      <span className="wp-msg__author">{m.ai ? 'AI 助手' : m.author}</span>
                      <span className="wp-msg__time">{m.time}</span>
                    </div>
                    <div className="wp-msg__text">{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="wp-composer">
              <input
                placeholder="回复这个问题，所有人可见"
                value={reply}
                onChange={e => setReply(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendReply()}
              />
              <IconButton icon={<img src={window.WP_ICON('send-horizontal')} alt="" />} aria-label="发送" onClick={sendReply} />
            </div>
          </React.Fragment>
        ) : null}
      </div>
      <Dialog
        open={newOpen}
        title="发起一个提问"
        onClose={() => setNewOpen(false)}
        footer={<><Button variant="secondary" onClick={() => setNewOpen(false)}>取消</Button><Button variant="primary" onClick={createThread}>发布，所有人可见</Button></>}
      >
        <Input label="标题" placeholder="例如：里程碑延期后，截止日期要不要自动顺延？" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
      </Dialog>
    </div>
  );
}

window.ChannelView = ChannelView;
