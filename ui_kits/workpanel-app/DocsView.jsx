function DocsView() {
  const { Avatar, Tag, Button, Dialog, Input, Select, IconButton } = window.DesignSystem_3175a1;
  const { documentCategories } = window.WorkpanelData;
  const [docs, setDocs] = React.useState(window.WorkpanelData.documents);
  const [filter, setFilter] = React.useState('全部');
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState(documentCategories[0]);

  const filtered = filter === '全部' ? docs : docs.filter(d => d.category === filter);

  const upload = () => {
    if (!name.trim()) return;
    setDocs([{ id: 'local-' + Date.now(), name, category, icon: 'file-text', uploader: '沈亦舟', time: '刚刚', size: '— ' }, ...docs]);
    setName('');
    setUploadOpen(false);
  };

  return (
    <div>
      <div className="wp-docs-head">
        <div className="wp-docs-filters">
          {['全部', ...documentCategories].map(c => (
            <button key={c} className={`wp-docs-filter ${filter === c ? 'wp-docs-filter--active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <Button variant="primary" icon={<img src={window.WP_ICON('upload')} style={{ width: 16, height: 16 }} alt="" />} onClick={() => setUploadOpen(true)}>上传文档</Button>
      </div>
      <div className="wp-docs-list">
        {filtered.map(d => (
          <div className="wp-doc-row" key={d.id}>
            <img className="wp-doc-row__icon" src={window.WP_ICON(d.icon)} alt="" />
            <div className="wp-doc-row__body">
              <span className="wp-doc-row__name">{d.name}</span>
              <div className="wp-doc-row__meta">
                <Tag>{d.category}</Tag>
                <span>{d.uploader} 上传 · {d.time} · {d.size}</span>
              </div>
            </div>
            <Avatar name={d.uploader} size="sm" />
            <IconButton icon={<img src={window.WP_ICON('download')} alt="" />} aria-label="下载" size="sm" />
          </div>
        ))}
        {filtered.length === 0 ? <div className="wp-docs-empty">暂无该分类的文档</div> : null}
      </div>
      <Dialog
        open={uploadOpen}
        title="上传文档"
        onClose={() => setUploadOpen(false)}
        footer={<><Button variant="secondary" onClick={() => setUploadOpen(false)}>取消</Button><Button variant="primary" onClick={upload}>上传</Button></>}
      >
        <div className="wp-doc-upload">
          <div className="wp-doc-dropzone">
            <img src={window.WP_ICON('upload-cloud')} alt="" />
            <span>拖拽文件到此处，或点击选择文件</span>
          </div>
          <Input label="文档名称" placeholder="例如：本周例会纪要 - 7 月第 2 周" value={name} onChange={e => setName(e.target.value)} />
          <Select label="分类" value={category} onChange={e => setCategory(e.target.value)}>
            {documentCategories.map(c => <option key={c}>{c}</option>)}
          </Select>
        </div>
      </Dialog>
    </div>
  );
}

window.DocsView = DocsView;
