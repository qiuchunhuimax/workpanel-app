// 工作面板 — UI kit fake data (for click-through demo only)
window.WorkpanelData = {
  currentUser: { name: '沈亦舟', role: '项目经理 / 产品经理' },

  // top-level project directory — the app opens here, then drills into one project's workspace
  projects: [
    { id: 'proj1', name: '工作面板 1.0', workspace: '产品与技术组 · Q3 上线冲刺', desc: 'AI 辅助的项目白板、讨论与复盘机制建设', status: { label: '进行中', tone: 'info' }, progress: 46, memberIds: ['u1', 'u2', 'u3', 'u4'], updatedAt: '今天 09:02' },
    { id: 'proj2', name: '内容中台改版', workspace: '内容团队 · 中台重构', desc: '素材库与发布流程的排期协作', status: { label: '进行中', tone: 'info' }, progress: 22, memberIds: ['u1', 'u4'], updatedAt: '昨天 18:40' },
    { id: 'proj3', name: '客户成功 Q2 复盘', workspace: '客户成功组 · 季度复盘', desc: '季度目标复盘与 Q3 规划', status: { label: '已归档', tone: 'neutral' }, progress: 100, memberIds: ['u1', 'u3'], updatedAt: '6 月 20 日' },
  ],

  members: [
    { id: 'u1', name: '沈亦舟', role: '项目经理', status: 'online', responsibility: '统筹四个机制的落地，把关需求范围与排期，主持每周例会与复盘。' },
    { id: 'u2', name: '李婉婷', role: '前端', status: 'online', responsibility: '负责白板、讨论区的前端实现，包括看板拖拽与时间线可视化。' },
    { id: 'u3', name: '陈明浩', role: '后端', status: 'offline', responsibility: '负责 AI 播报服务、通知与数据接口，保障看板与频道的数据同步。' },
    { id: 'u4', name: '王芷若', role: '设计', status: 'online', responsibility: '负责视觉与交互设计，把关 AI 播报文案语气与里程碑通知体验。' },
  ],

  // start/end are day offsets on a Jul 1 – Sep 30 axis (day 1 = Jul 1) used by the monthly timeline view.
  // Each milestone owns its own kanban board — tasks live under the milestone they belong to.
  nextMeeting: { label: '本周五 15:00 · 里程碑 2 例会' },
  milestones: [
    {
      id: 'm1', name: '里程碑 1 · 需求对齐', due: '7 月 3 日', start: 1, end: 3, progress: 100, status: { label: '已完成', tone: 'success' },
      startDate: '7 月 1 日', endDate: '7 月 3 日',
      goal: '对齐产品范围与优先级，冻结需求，形成可执行的开发计划。',
      keyItems: ['需求评审会 3 轮', '范围冻结确认', '角色分工确认'],
      participantIds: ['u1', 'u4'],
      columns: [
        { key: 'todo', label: '待开始', tasks: [] },
        { key: 'doing', label: '进行中', tasks: [] },
        { key: 'review', label: '待复盘', tasks: [] },
        {
          key: 'done', label: '已完成', tasks: [
            { id: 't7', title: '项目章程草案', tags: ['项目管理'], owner: '沈亦舟', due: '6/28', desc: '完成项目章程初稿，明确目标、范围与四个机制的启动方式。' },
            { id: 't8', title: '团队角色分工确认', tags: ['人员'], owner: '沈亦舟', due: '6/30', desc: '与全体成员确认角色分工，写入人员机制。' },
            { id: 't6', title: '需求评审会记录归档', tags: ['项目管理'], owner: '沈亦舟', due: '7/3', desc: '需求评审会记录已归档，同步进复盘文档。' },
          ]
        },
      ],
    },
    {
      id: 'm2', name: '里程碑 2 · 核心功能开发', due: '7 月 24 日', start: 4, end: 24, progress: 62, status: { label: '进行中', tone: 'info' },
      startDate: '7 月 4 日', endDate: '7 月 24 日',
      goal: '完成白板、频道、AI 播报三大核心功能的可用版本，支撑内部试用。',
      keyItems: ['看板拖拽交互', 'AI 播报服务接入', '人员角色矩阵落地'],
      participantIds: ['u1', 'u2', 'u3'],
      columns: [
        {
          key: 'todo', label: '待开始', tasks: [
            { id: 't1', title: '梳理复盘机制模板', tags: ['项目管理'], owner: '沈亦舟', due: '7/8', desc: '整理"计划/实际/差异/下一轮"四栏结构的复盘文档模板，供每个里程碑复用。' },
            { id: 't2', title: '设计里程碑通知文案', tags: ['内容'], owner: '王芷若', due: '7/9', desc: '为 AI 播报设计里程碑达成、超期提醒两类文案的语气和结构。' },
          ]
        },
        {
          key: 'doing', label: '进行中', tasks: [
            { id: 't3', title: '白板看板视图开发', tags: ['前端'], owner: '李婉婷', due: '7/12', desc: '实现看板四列拖拽交互，任务卡片可在待开始/进行中/待复盘/已完成间移动。' },
            { id: 't4', title: 'AI 播报服务接入', tags: ['后端'], owner: '陈明浩', due: '7/14', desc: '接入每日进度播报与超期提醒的后台服务，向讨论区推送 AI 消息。' },
            { id: 't5', title: '人员机制角色矩阵', tags: ['项目管理'], owner: '沈亦舟', due: '7/10', desc: '明确每位成员在四个机制中的角色与责任边界，避免任务无人认领。' },
          ]
        },
        {
          key: 'review', label: '待复盘', tasks: [
            { id: 't9', title: '里程碑 2 周报归档', tags: ['项目管理'], owner: '沈亦舟', due: '7/7', desc: '第一周周报已完成，待归档并同步进复盘文档。' },
          ]
        },
        { key: 'done', label: '已完成', tasks: [] },
      ],
    },
    {
      id: 'm3', name: '里程碑 3 · 联调与验收', due: '8 月 7 日', start: 25, end: 38, progress: 8, status: { label: '待开始', tone: 'neutral' },
      startDate: '7 月 25 日', endDate: '8 月 7 日',
      goal: '完成前后端联调与内部验收，收敛遗留问题。',
      keyItems: ['联调环境搭建', '验收用例编写', '遗留问题清零'],
      participantIds: ['u2', 'u3'],
      columns: [
        { key: 'todo', label: '待开始', tasks: [] },
        { key: 'doing', label: '进行中', tasks: [] },
        { key: 'review', label: '待复盘', tasks: [] },
        { key: 'done', label: '已完成', tasks: [] },
      ],
    },
    {
      id: 'm4', name: '里程碑 4 · 上线复盘', due: '8 月 21 日', start: 39, end: 52, progress: 0, status: { label: '待开始', tone: 'neutral' },
      startDate: '8 月 8 日', endDate: '8 月 21 日',
      goal: '正式上线，并对整个项目周期做一次完整复盘。',
      keyItems: ['上线发布', '全项目复盘会'],
      participantIds: ['u1'],
      columns: [
        { key: 'todo', label: '待开始', tasks: [] },
        { key: 'doing', label: '进行中', tasks: [] },
        { key: 'review', label: '待复盘', tasks: [] },
        { key: 'done', label: '已完成', tasks: [] },
      ],
    },
  ],

  // channel is issue/thread-style — questions and topics anyone can raise and reply to, visible to the whole team.
  // milestoneId links a thread to the milestone it came up during, so the timeline can surface it alongside progress.
  threads: [
    {
      id: 'th1', title: '看板拖拽卡片时，跨列移动要不要弹二次确认？', tag: '前端', status: 'open', milestoneId: 'm2',
      author: '李婉婷', time: '09:15',
      replies: [
        { author: '李婉婷', time: '09:15', text: '担心手滑把"已完成"的任务拖回"进行中"，要不要加一个确认弹窗？' },
        { author: 'AI', ai: true, time: '09:16', text: '过去 2 周看板共发生 47 次拖拽，其中误操作撤销 1 次。加确认弹窗可能会拖慢正常操作。' },
        { author: '沈亦舟', time: '09:20', text: '同意 AI 的判断，先不加确认，只在拖回"待开始"时给一个可撤销的提示条。' },
      ],
    },
    {
      id: 'th2', title: 'AI 播报的语气要不要更简短一些？', tag: '内容', status: 'open', milestoneId: 'm2',
      author: '王芷若', time: '10:30',
      replies: [
        { author: '王芷若', time: '10:30', text: '现在每条播报都比较长，会不会显得啰嗦？想收集一下大家的感觉。' },
        { author: '陈明浩', time: '10:42', text: '我觉得还好，主要是需要一眼看出"要不要做什么"。' },
      ],
    },
    {
      id: 'th3', title: '需求评审会记录归档为什么停留了 4 天？', tag: '项目管理', status: 'closed', milestoneId: 'm1',
      author: 'AI', ai: true, time: '7/1 11:40',
      replies: [
        { author: 'AI', ai: true, time: '7/1 11:40', text: '「需求评审会记录归档」已停留在待复盘 4 天，要不要安排一下？' },
        { author: '沈亦舟', time: '7/1 14:20', text: '本周会议太多，明天上午处理，谢谢提醒。' },
        { author: '沈亦舟', time: '7/3 09:00', text: '已归档，可以关闭了。' },
      ],
    },
  ],

  // retros are keyed by milestone id — a milestone with no entry hasn't reached its retro yet
  retros: {
    m1: {
      aiSummary: 'AI 摘要：里程碑 1 整体延期 2 天完成。差异主要来自需求变更缺少评估环节；建议里程碑 2 增加中期同步以提前暴露变更。',
      planned: ['6 月 30 日前完成全部需求评审并冻结范围', '设计稿 6 月 27 日交付，预留 3 天走查', '零需求变更，直接进入里程碑 2 排期'],
      actual: ['需求于 7 月 2 日完成冻结，延期 2 天', '设计稿如期交付，走查发现 4 处交互问题', '发生 2 次需求变更，均在评审阶段拦截'],
      gaps: ['变更来自客户侧新增场景，事前没有评估流程拦截', '走查问题偏多，说明设计交付前的自查不够', '「冻结」缺少明确的书面确认，团队理解不一致'],
      actions: [
        { text: '新增「需求变更评估」检查点，纳入项目管理机制', owner: '沈亦舟' },
        { text: '设计交付前增加一轮自查清单', owner: '王芷若' },
        { text: '「冻结」改为讨论区内正式确认，AI 自动归档', owner: '全员' },
      ],
    },
  },
  // documents are project materials — meeting minutes from the weekly 例会, PRDs, and other reference files
  documents: [
    { id: 'd1', name: '阶段一需求评审会 - 会议纪要', category: '会议纪要', icon: 'file-text', uploader: '沈亦舟', time: '6 月 29 日', size: '86 KB' },
    { id: 'd2', name: '工作面板 PRD v1.2', category: 'PRD 文档', icon: 'file-type', uploader: '沈亦舟', time: '6 月 25 日', size: '1.2 MB' },
    { id: 'd3', name: '本周例会纪要 - 7 月第 1 周', category: '会议纪要', icon: 'file-text', uploader: '沈亦舟', time: '今天 09:30', size: '64 KB' },
    { id: 'd4', name: 'AI 播报文案风格指南', category: '项目材料', icon: 'file-text', uploader: '王芷若', time: '6 月 27 日', size: '210 KB' },
    { id: 'd5', name: '看板交互走查记录', category: '项目材料', icon: 'file-spreadsheet', uploader: '李婉婷', time: '7 月 1 日', size: '48 KB' },
  ],
  documentCategories: ['会议纪要', 'PRD 文档', '项目材料'],

  // notifications are AI nudges + team mentions surfacing in the topbar bell
  notifications: [
    { id: 'n1', icon: 'sparkles', text: 'AI：里程碑 2 整体进度 62%，比上周提升 14%。', time: '09:02', read: false },
    { id: 'n2', icon: 'at-sign', text: '沈亦舟在「需求评审会记录归档」中提到了你', time: '10:15', read: false },
    { id: 'n3', icon: 'alert-circle', text: 'AI：「需求评审会记录归档」已停留在待复盘 4 天', time: '11:40', read: false },
    { id: 'n4', icon: 'party-popper', text: 'AI：里程碑「里程碑 1 · 需求对齐」已达成', time: '昨天', read: true },
    { id: 'n5', icon: 'message-circle', text: '王芷若在提问「AI 播报的语气要不要更简短一些？」中回复了', time: '昨天', read: true },
  ],
};
