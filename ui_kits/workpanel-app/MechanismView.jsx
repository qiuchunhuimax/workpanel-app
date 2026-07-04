function MechanismView() {
  const { Card, Switch, Radio, Select, Input } = window.DesignSystem_3175a1;
  const [cadence, setCadence] = React.useState('week');
  return (
    <div className="wp-mech-grid">
      <Card>
        <div className="wp-mech-card__head">
          <img src={window.WP_ICON('trending-up')} alt="" />
          <span className="wp-mech-card__title">进度机制</span>
        </div>
        <div className="wp-mech-row">
          <Switch label="启用 AI 每日播报" checked={true} onChange={() => {}} />
          <Select label="播报时间"><option>每天 09:00</option><option>每天 18:00</option></Select>
        </div>
      </Card>
      <Card>
        <div className="wp-mech-card__head">
          <img src={window.WP_ICON('users')} alt="" />
          <span className="wp-mech-card__title">人员机制</span>
        </div>
        <div className="wp-mech-row">
          <Input label="角色矩阵负责人" defaultValue="沈亦舟" />
          <Switch label="任务超期自动 @负责人" checked={true} onChange={() => {}} />
        </div>
      </Card>
      <Card>
        <div className="wp-mech-card__head">
          <img src={window.WP_ICON('clipboard-list')} alt="" />
          <span className="wp-mech-card__title">项目管理机制</span>
        </div>
        <div className="wp-mech-row">
          <Select label="看板列结构"><option>待开始 / 进行中 / 待复盘 / 已完成</option></Select>
          <Switch label="需求变更需评审通过" checked={true} onChange={() => {}} />
        </div>
      </Card>
      <Card>
        <div className="wp-mech-card__head">
          <img src={window.WP_ICON('rotate-ccw')} alt="" />
          <span className="wp-mech-card__title">复盘机制</span>
        </div>
        <div className="wp-mech-row">
          <div className="wp-mech-radio-row">
            <Radio name="cadence" label="按周复盘" checked={cadence === 'week'} onChange={() => setCadence('week')} />
            <Radio name="cadence" label="按里程碑复盘" checked={cadence === 'milestone'} onChange={() => setCadence('milestone')} />
          </div>
          <Switch label="AI 自动生成复盘草稿" checked={true} onChange={() => {}} />
        </div>
      </Card>
    </div>
  );
}

window.MechanismView = MechanismView;
