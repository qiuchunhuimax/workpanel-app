/* @ds-bundle: {"format":3,"namespace":"DesignSystem_3175a1","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"09e182a957a2","components/data/Card.jsx":"50e8e073f8fe","components/data/ProgressBar.jsx":"695225dbe6cb","components/feedback/Badge.jsx":"8beb8597e155","components/feedback/Tag.jsx":"4cd257317aaf","components/feedback/Toast.jsx":"5061c4a0375f","components/feedback/Tooltip.jsx":"6dc42a16cf5a","components/forms/Button.jsx":"af409b5a0202","components/forms/Checkbox.jsx":"91d7cce1b617","components/forms/IconButton.jsx":"d41829732c93","components/forms/Input.jsx":"9cf9656bbb14","components/forms/Radio.jsx":"b588d3564252","components/forms/Select.jsx":"bf35cc176bea","components/forms/Switch.jsx":"59bc43df3342","components/navigation/Tabs.jsx":"a88ac09b6e25","components/overlay/Dialog.jsx":"3b615776f0ed","ui_kits/workpanel-app/BoardView.jsx":"a7c36bfd5efa","ui_kits/workpanel-app/ChannelView.jsx":"9784899c04b3","ui_kits/workpanel-app/DocsView.jsx":"4fdcd5f8d8b0","ui_kits/workpanel-app/MechanismView.jsx":"af6ba6d7f2d4","ui_kits/workpanel-app/PeopleView.jsx":"b83863237975","ui_kits/workpanel-app/ProjectsView.jsx":"91ec22a1fb04","ui_kits/workpanel-app/RetroView.jsx":"2ace68ff20df","ui_kits/workpanel-app/Sidebar.jsx":"2d68efef15c5","ui_kits/workpanel-app/TimelineView.jsx":"9127542eaa38","ui_kits/workpanel-app/data.js":"6f165cbeb5d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_3175a1 = window.DesignSystem_3175a1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
function Avatar({
  name,
  src,
  size = 'md',
  ai = false,
  status,
  className = ''
}) {
  const initials = name ? name.trim().slice(-2) : '?';
  return /*#__PURE__*/React.createElement("span", {
    className: `wp-avatar wp-avatar--${size} ${ai ? 'wp-avatar--ai' : ''} ${className}`
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ''
  }) : initials, status ? /*#__PURE__*/React.createElement("span", {
    className: `wp-avatar__status ${status === 'online' ? 'wp-avatar__status--online' : ''}`
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  children,
  interactive = false,
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `wp-card ${interactive ? 'wp-card--interactive' : ''} ${className}`,
    onClick: onClick
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    className: "wp-card__title"
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    className: "wp-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value,
  label,
  showPercent = true,
  className = ''
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: `wp-progress ${className}`
  }, label || showPercent ? /*#__PURE__*/React.createElement("div", {
    className: "wp-progress__meta"
  }, /*#__PURE__*/React.createElement("span", null, label), showPercent ? /*#__PURE__*/React.createElement("span", null, pct, "%") : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "wp-progress__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-progress__fill",
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `wp-badge wp-badge--${tone} ${className}`
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "wp-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  removable = false,
  onRemove,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `wp-tag ${removable ? 'wp-tag--removable' : ''} ${className}`
  }, rest), children, removable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "wp-tag__remove",
    onClick: onRemove,
    "aria-label": "\u79FB\u9664"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  description,
  tone = 'info',
  icon = null,
  onClose,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `wp-toast wp-toast--${tone} ${className}`
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "wp-toast__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "wp-toast__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-toast__title"
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    className: "wp-toast__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "wp-toast__close",
    onClick: onClose,
    "aria-label": "\u5173\u95ED"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `wp-tooltip-wrap ${className}`
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "wp-tooltip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    className: `wp-btn wp-btn--${variant} wp-btn--${size} ${className}`
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "wp-btn__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `wp-check ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "wp-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "4 12 9 17 20 6"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  size = 'md',
  outline = false,
  disabled = false,
  'aria-label': ariaLabel,
  onClick,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    "aria-label": ariaLabel,
    className: `wp-iconbtn wp-iconbtn--${size} ${outline ? 'wp-iconbtn--outline' : ''} ${className}`
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || `wp-input-${Math.random().toString(36).slice(2, 9)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `wp-field ${error ? 'wp-field--error' : ''} ${className}`
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "wp-field__label",
    htmlFor: inputId
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "wp-input-wrap"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "wp-input-wrap__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: `wp-input ${icon ? 'wp-input--with-icon' : ''}`
  }, rest))), error ? /*#__PURE__*/React.createElement("span", {
    className: "wp-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "wp-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  name,
  checked,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `wp-radio ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "wp-radio__dot"
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  id,
  children,
  className = '',
  ...rest
}) {
  const selectId = id || `wp-select-${Math.random().toString(36).slice(2, 9)}`;
  return /*#__PURE__*/React.createElement("div", {
    className: `wp-field ${error ? 'wp-field--error' : ''} ${className}`
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "wp-field__label",
    htmlFor: selectId
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    className: "wp-select"
  }, rest), children), error ? /*#__PURE__*/React.createElement("span", {
    className: "wp-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "wp-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `wp-switch ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "wp-switch__track"
  }), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-tabs__list",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    role: "tab",
    "aria-selected": t.key === active,
    className: `wp-tabs__tab ${t.key === active ? 'wp-tabs__tab--active' : ''}`,
    onClick: () => onChange(t.key)
  }, t.label))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-dialog-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dialog",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-dialog__header"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-dialog__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "wp-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "wp-dialog__footer"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/BoardView.jsx
try { (() => {
const WP_COLUMN_TONE = {
  todo: 'neutral',
  doing: 'info',
  review: 'warning',
  done: 'success'
};
function BoardView() {
  const {
    Badge,
    ProgressBar,
    Tag,
    Avatar,
    Dialog,
    Button,
    Card,
    Input,
    Checkbox
  } = window.DesignSystem_3175a1;
  const {
    members,
    nextMeeting
  } = window.WorkpanelData;
  const [milestones, setMilestones] = React.useState(window.WorkpanelData.milestones);
  const [selected, setSelected] = React.useState(milestones.find(m => m.status.label === '进行中')?.id || milestones[0].id);
  const [openTask, setOpenTask] = React.useState(null);
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(null);
  const [newItem, setNewItem] = React.useState('');
  const milestone = milestones.find(m => m.id === selected);
  const openEdit = () => {
    setDraft({
      ...milestone,
      keyItems: [...milestone.keyItems],
      participantIds: [...milestone.participantIds]
    });
    setEditing(true);
  };
  const saveEdit = () => {
    setMilestones(milestones.map(m => m.id === draft.id ? {
      ...m,
      ...draft
    } : m));
    setEditing(false);
  };
  const toggleParticipant = id => {
    setDraft(d => ({
      ...d,
      participantIds: d.participantIds.includes(id) ? d.participantIds.filter(p => p !== id) : [...d.participantIds, id]
    }));
  };
  const addKeyItem = () => {
    if (!newItem.trim()) return;
    setDraft(d => ({
      ...d,
      keyItems: [...d.keyItems, newItem.trim()]
    }));
    setNewItem('');
  };
  const removeKeyItem = i => setDraft(d => ({
    ...d,
    keyItems: d.keyItems.filter((_, idx) => idx !== i)
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-strip"
  }, milestones.map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.id,
    interactive: true,
    onClick: () => setSelected(m.id),
    className: `wp-milestone-card ${m.id === selected ? 'wp-milestone-card--active' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-card__name"
  }, m.name), /*#__PURE__*/React.createElement(Badge, {
    tone: m.status.tone
  }, m.status.label)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: m.progress,
    showPercent: false
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-card__due"
  }, "\u622A\u6B62 ", m.due)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-board-meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-board-meta__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-board-meta__milestone"
  }, milestone.name, " \u7684\u770B\u677F"), /*#__PURE__*/React.createElement("span", {
    className: "wp-board-meta__meeting"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('calendar-clock'),
    alt: ""
  }), "\u4E0B\u6B21\u4F8B\u4F1A\uFF1A", nextMeeting.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON('settings-2'),
      style: {
        width: 14,
        height: 14
      },
      alt: ""
    }),
    onClick: openEdit
  }, "\u91CC\u7A0B\u7891\u8BBE\u7F6E")), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u76EE\u6807"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value"
  }, milestone.goal)), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u65F6\u95F4\u8BA1\u5212"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value"
  }, milestone.startDate, " \u2013 ", milestone.endDate)), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u91CD\u70B9\u4E8B\u9879"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value wp-milestone-brief__tags"
  }, milestone.keyItems.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k
  }, k)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u53C2\u4E0E\u4EBA\u5458"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value wp-milestone-brief__people"
  }, milestone.participantIds.map(id => {
    const p = members.find(m => m.id === id);
    return p ? /*#__PURE__*/React.createElement("span", {
      key: id,
      className: "wp-milestone-brief__person"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: "sm"
    }), p.name) : null;
  })))), /*#__PURE__*/React.createElement("div", {
    className: "wp-board"
  }, milestone.columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "wp-board-col",
    key: col.key
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-board-col__head"
  }, /*#__PURE__*/React.createElement("span", null, col.label), /*#__PURE__*/React.createElement("span", {
    className: "wp-board-col__count"
  }, col.tasks.length)), col.tasks.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "wp-board-col__empty"
  }, "\u6682\u65E0\u4EFB\u52A1") : null, col.tasks.map(t => /*#__PURE__*/React.createElement("div", {
    className: "wp-task-card",
    key: t.id,
    onClick: () => setOpenTask({
      ...t,
      columnLabel: col.label,
      columnTone: WP_COLUMN_TONE[col.key],
      milestoneName: milestone.name
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-task-card__title"
  }, t.title), /*#__PURE__*/React.createElement("div", {
    className: "wp-task-card__tags"
  }, t.tags.map(tag => /*#__PURE__*/React.createElement(Tag, {
    key: tag
  }, tag))), /*#__PURE__*/React.createElement("div", {
    className: "wp-task-card__meta"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: t.owner,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-task-card__due"
  }, t.due))))))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!openTask,
    title: openTask ? openTask.title : '',
    onClose: () => setOpenTask(null),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setOpenTask(null)
    }, "\u5173\u95ED"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => setOpenTask(null)
    }, "\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210"))
  }, openTask ? /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail__row"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: openTask.columnTone
  }, openTask.columnLabel), openTask.tags.map(tag => /*#__PURE__*/React.createElement(Tag, {
    key: tag
  }, tag))), /*#__PURE__*/React.createElement("p", {
    className: "wp-task-detail__desc"
  }, openTask.desc), /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-label"
  }, "\u8D1F\u8D23\u4EBA"), /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-value"
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: openTask.owner,
    size: "sm"
  }), openTask.owner)), /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-label"
  }, "\u622A\u6B62\u65E5\u671F"), /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-value"
  }, openTask.due)), /*#__PURE__*/React.createElement("div", {
    className: "wp-task-detail__meta-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-label"
  }, "\u6240\u5C5E\u91CC\u7A0B\u7891"), /*#__PURE__*/React.createElement("span", {
    className: "wp-task-detail__meta-value"
  }, openTask.milestoneName)))) : null), /*#__PURE__*/React.createElement(Dialog, {
    open: editing,
    title: draft ? `${draft.name} · 里程碑设置` : '',
    onClose: () => setEditing(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setEditing(false)
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: saveEdit
    }, "\u4FDD\u5B58"))
  }, draft ? /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u5F00\u59CB\u65E5\u671F",
    value: draft.startDate,
    onChange: e => setDraft({
      ...draft,
      startDate: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u622A\u6B62\u65E5\u671F",
    value: draft.endDate,
    onChange: e => setDraft({
      ...draft,
      endDate: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Input, {
    label: "\u76EE\u6807",
    value: draft.goal,
    onChange: e => setDraft({
      ...draft,
      goal: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-field__label"
  }, "\u91CD\u70B9\u4E8B\u9879"), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__chips"
  }, draft.keyItems.map((k, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    removable: true,
    onRemove: () => removeKeyItem(i)
  }, k))), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__addrow"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u65B0\u589E\u91CD\u70B9\u4E8B\u9879",
    value: newItem,
    onChange: e => setNewItem(e.target.value),
    onKeyDown: e => e.key === 'Enter' && addKeyItem()
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: addKeyItem
  }, "\u6DFB\u52A0"))), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-field__label"
  }, "\u53C2\u4E0E\u4EBA\u5458"), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-form__people"
  }, members.map(m => /*#__PURE__*/React.createElement(Checkbox, {
    key: m.id,
    label: `${m.name} · ${m.role}`,
    checked: draft.participantIds.includes(m.id),
    onChange: () => toggleParticipant(m.id)
  }))))) : null));
}
window.BoardView = BoardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/BoardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/ChannelView.jsx
try { (() => {
function ChannelView() {
  const {
    Avatar,
    IconButton,
    Badge,
    Tag,
    Button,
    Dialog,
    Input
  } = window.DesignSystem_3175a1;
  const {
    threads: initialThreads
  } = window.WorkpanelData;
  const [threads, setThreads] = React.useState(initialThreads);
  const [selectedId, setSelectedId] = React.useState(initialThreads[0].id);
  const [reply, setReply] = React.useState('');
  const [newOpen, setNewOpen] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState('');
  const selected = threads.find(t => t.id === selectedId);
  const sendReply = () => {
    if (!reply.trim()) return;
    setThreads(threads.map(t => t.id === selectedId ? {
      ...t,
      replies: [...t.replies, {
        author: '沈亦舟',
        time: '现在',
        text: reply
      }]
    } : t));
    setReply('');
  };
  const createThread = () => {
    if (!newTitle.trim()) return;
    const t = {
      id: 'local-' + Date.now(),
      title: newTitle,
      tag: '综合',
      status: 'open',
      author: '沈亦舟',
      time: '现在',
      replies: []
    };
    setThreads([t, ...threads]);
    setSelectedId(t.id);
    setNewTitle('');
    setNewOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-issues"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-issues-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-issues-list__head"
  }, /*#__PURE__*/React.createElement("span", null, threads.filter(t => t.status === 'open').length, " \u4E2A\u5F85\u89E3\u51B3"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON('plus'),
      style: {
        width: 14,
        height: 14
      },
      alt: ""
    }),
    onClick: () => setNewOpen(true)
  }, "\u63D0\u95EE")), threads.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: `wp-issue-row ${t.id === selectedId ? 'wp-issue-row--active' : ''}`,
    onClick: () => setSelectedId(t.id)
  }, /*#__PURE__*/React.createElement("img", {
    className: "wp-issue-row__status-icon",
    src: window.WP_ICON(t.status === 'open' ? 'circle-dot' : 'check-circle-2'),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-issue-row__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-issue-row__title"
  }, t.title), /*#__PURE__*/React.createElement("div", {
    className: "wp-issue-row__meta"
  }, /*#__PURE__*/React.createElement("span", null, t.author === 'AI' ? 'AI 助手' : t.author, " \u63D0\u51FA \xB7 ", t.time), /*#__PURE__*/React.createElement(Tag, null, t.tag))), /*#__PURE__*/React.createElement("span", {
    className: "wp-issue-row__count"
  }, t.replies.length)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-issue-detail"
  }, selected ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wp-issue-detail__head"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: selected.status === 'open' ? 'info' : 'success'
  }, selected.status === 'open' ? '待解决' : '已解决'), /*#__PURE__*/React.createElement("span", {
    className: "wp-issue-detail__title"
  }, selected.title), /*#__PURE__*/React.createElement(Tag, null, selected.tag)), /*#__PURE__*/React.createElement("div", {
    className: "wp-channel__thread"
  }, selected.replies.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: `wp-msg ${m.ai ? 'wp-msg--ai' : ''}`,
    key: i
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.author,
    ai: !!m.ai,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-msg__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-msg__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-msg__author"
  }, m.ai ? 'AI 助手' : m.author), /*#__PURE__*/React.createElement("span", {
    className: "wp-msg__time"
  }, m.time)), /*#__PURE__*/React.createElement("div", {
    className: "wp-msg__text"
  }, m.text))))), /*#__PURE__*/React.createElement("div", {
    className: "wp-composer"
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "\u56DE\u590D\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6240\u6709\u4EBA\u53EF\u89C1",
    value: reply,
    onChange: e => setReply(e.target.value),
    onKeyDown: e => e.key === 'Enter' && sendReply()
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON('send-horizontal'),
      alt: ""
    }),
    "aria-label": "\u53D1\u9001",
    onClick: sendReply
  }))) : null), /*#__PURE__*/React.createElement(Dialog, {
    open: newOpen,
    title: "\u53D1\u8D77\u4E00\u4E2A\u63D0\u95EE",
    onClose: () => setNewOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setNewOpen(false)
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: createThread
    }, "\u53D1\u5E03\uFF0C\u6240\u6709\u4EBA\u53EF\u89C1"))
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u6807\u9898",
    placeholder: "\u4F8B\u5982\uFF1A\u91CC\u7A0B\u7891\u5EF6\u671F\u540E\uFF0C\u622A\u6B62\u65E5\u671F\u8981\u4E0D\u8981\u81EA\u52A8\u987A\u5EF6\uFF1F",
    value: newTitle,
    onChange: e => setNewTitle(e.target.value)
  })));
}
window.ChannelView = ChannelView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/ChannelView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/DocsView.jsx
try { (() => {
function DocsView() {
  const {
    Avatar,
    Tag,
    Button,
    Dialog,
    Input,
    Select,
    IconButton
  } = window.DesignSystem_3175a1;
  const {
    documentCategories
  } = window.WorkpanelData;
  const [docs, setDocs] = React.useState(window.WorkpanelData.documents);
  const [filter, setFilter] = React.useState('全部');
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [category, setCategory] = React.useState(documentCategories[0]);
  const filtered = filter === '全部' ? docs : docs.filter(d => d.category === filter);
  const upload = () => {
    if (!name.trim()) return;
    setDocs([{
      id: 'local-' + Date.now(),
      name,
      category,
      icon: 'file-text',
      uploader: '沈亦舟',
      time: '刚刚',
      size: '— '
    }, ...docs]);
    setName('');
    setUploadOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-docs-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-docs-filters"
  }, ['全部', ...documentCategories].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `wp-docs-filter ${filter === c ? 'wp-docs-filter--active' : ''}`,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON('upload'),
      style: {
        width: 16,
        height: 16
      },
      alt: ""
    }),
    onClick: () => setUploadOpen(true)
  }, "\u4E0A\u4F20\u6587\u6863")), /*#__PURE__*/React.createElement("div", {
    className: "wp-docs-list"
  }, filtered.map(d => /*#__PURE__*/React.createElement("div", {
    className: "wp-doc-row",
    key: d.id
  }, /*#__PURE__*/React.createElement("img", {
    className: "wp-doc-row__icon",
    src: window.WP_ICON(d.icon),
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-doc-row__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-doc-row__name"
  }, d.name), /*#__PURE__*/React.createElement("div", {
    className: "wp-doc-row__meta"
  }, /*#__PURE__*/React.createElement(Tag, null, d.category), /*#__PURE__*/React.createElement("span", null, d.uploader, " \u4E0A\u4F20 \xB7 ", d.time, " \xB7 ", d.size))), /*#__PURE__*/React.createElement(Avatar, {
    name: d.uploader,
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON('download'),
      alt: ""
    }),
    "aria-label": "\u4E0B\u8F7D",
    size: "sm"
  }))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "wp-docs-empty"
  }, "\u6682\u65E0\u8BE5\u5206\u7C7B\u7684\u6587\u6863") : null), /*#__PURE__*/React.createElement(Dialog, {
    open: uploadOpen,
    title: "\u4E0A\u4F20\u6587\u6863",
    onClose: () => setUploadOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setUploadOpen(false)
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: upload
    }, "\u4E0A\u4F20"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-doc-upload"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-doc-dropzone"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('upload-cloud'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\uFF0C\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6")), /*#__PURE__*/React.createElement(Input, {
    label: "\u6587\u6863\u540D\u79F0",
    placeholder: "\u4F8B\u5982\uFF1A\u672C\u5468\u4F8B\u4F1A\u7EAA\u8981 - 7 \u6708\u7B2C 2 \u5468",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u5206\u7C7B",
    value: category,
    onChange: e => setCategory(e.target.value)
  }, documentCategories.map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c))))));
}
window.DocsView = DocsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/DocsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/MechanismView.jsx
try { (() => {
function MechanismView() {
  const {
    Card,
    Switch,
    Radio,
    Select,
    Input
  } = window.DesignSystem_3175a1;
  const [cadence, setCadence] = React.useState('week');
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-grid"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('trending-up'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-mech-card__title"
  }, "\u8FDB\u5EA6\u673A\u5236")), /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-row"
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "\u542F\u7528 AI \u6BCF\u65E5\u64AD\u62A5",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u64AD\u62A5\u65F6\u95F4"
  }, /*#__PURE__*/React.createElement("option", null, "\u6BCF\u5929 09:00"), /*#__PURE__*/React.createElement("option", null, "\u6BCF\u5929 18:00")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('users'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-mech-card__title"
  }, "\u4EBA\u5458\u673A\u5236")), /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u89D2\u8272\u77E9\u9635\u8D1F\u8D23\u4EBA",
    defaultValue: "\u6C88\u4EA6\u821F"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "\u4EFB\u52A1\u8D85\u671F\u81EA\u52A8 @\u8D1F\u8D23\u4EBA",
    checked: true,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('clipboard-list'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-mech-card__title"
  }, "\u9879\u76EE\u7BA1\u7406\u673A\u5236")), /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-row"
  }, /*#__PURE__*/React.createElement(Select, {
    label: "\u770B\u677F\u5217\u7ED3\u6784"
  }, /*#__PURE__*/React.createElement("option", null, "\u5F85\u5F00\u59CB / \u8FDB\u884C\u4E2D / \u5F85\u590D\u76D8 / \u5DF2\u5B8C\u6210")), /*#__PURE__*/React.createElement(Switch, {
    label: "\u9700\u6C42\u53D8\u66F4\u9700\u8BC4\u5BA1\u901A\u8FC7",
    checked: true,
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('rotate-ccw'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wp-mech-card__title"
  }, "\u590D\u76D8\u673A\u5236")), /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-mech-radio-row"
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "cadence",
    label: "\u6309\u5468\u590D\u76D8",
    checked: cadence === 'week',
    onChange: () => setCadence('week')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "cadence",
    label: "\u6309\u91CC\u7A0B\u7891\u590D\u76D8",
    checked: cadence === 'milestone',
    onChange: () => setCadence('milestone')
  })), /*#__PURE__*/React.createElement(Switch, {
    label: "AI \u81EA\u52A8\u751F\u6210\u590D\u76D8\u8349\u7A3F",
    checked: true,
    onChange: () => {}
  }))));
}
window.MechanismView = MechanismView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/MechanismView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/PeopleView.jsx
try { (() => {
function PeopleView() {
  const {
    Tabs,
    Avatar,
    Badge,
    Tag
  } = window.DesignSystem_3175a1;
  const {
    members,
    milestones
  } = window.WorkpanelData;
  const [selected, setSelected] = React.useState(milestones.find(m => m.status.label === '进行中')?.id || milestones[0].id);
  const milestone = milestones.find(m => m.id === selected);
  const columnTone = {
    todo: 'neutral',
    doing: 'info',
    review: 'warning',
    done: 'success'
  };
  const tasksInMilestone = name => {
    const out = [];
    milestone.columns.forEach(col => {
      col.tasks.forEach(t => {
        if (t.owner === name) out.push({
          ...t,
          columnLabel: col.label,
          columnKey: col.key
        });
      });
    });
    return out;
  };
  const participants = milestone.participantIds.map(id => members.find(m => m.id === id)).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    className: "wp-retro-tabs",
    tabs: milestones.map(m => ({
      key: m.id,
      label: m.name.replace(/^里程碑\s*\d+\s*·\s*/, '')
    })),
    active: selected,
    onChange: setSelected
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-retro-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-retro-head__name"
  }, milestone.name), /*#__PURE__*/React.createElement(Badge, {
    tone: milestone.status.tone
  }, milestone.status.label)), /*#__PURE__*/React.createElement("div", {
    className: "wp-people"
  }, participants.map(m => {
    const tasks = tasksInMilestone(m.name);
    const active = tasks.filter(t => t.columnKey !== 'done');
    return /*#__PURE__*/React.createElement("div", {
      className: "wp-person-card",
      key: m.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-person-card__head"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: m.name,
      size: "lg",
      status: m.status
    }), /*#__PURE__*/React.createElement("div", {
      className: "wp-person-card__id"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wp-person-card__name"
    }, m.name), /*#__PURE__*/React.createElement("span", {
      className: "wp-person-card__role"
    }, m.role)), /*#__PURE__*/React.createElement("span", {
      className: "wp-person-card__count"
    }, active.length, " \u9879\u8FDB\u884C\u4E2D")), /*#__PURE__*/React.createElement("p", {
      className: "wp-person-card__resp"
    }, m.responsibility), /*#__PURE__*/React.createElement("div", {
      className: "wp-person-card__tasks"
    }, tasks.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "wp-person-card__empty"
    }, "\u5728\u672C\u91CC\u7A0B\u7891\u6682\u65E0\u5206\u914D\u4EFB\u52A1") : tasks.map(t => /*#__PURE__*/React.createElement("div", {
      className: "wp-person-task",
      key: t.id
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: columnTone[t.columnKey]
    }, t.columnLabel), /*#__PURE__*/React.createElement("span", {
      className: "wp-person-task__title"
    }, t.title), t.tags.map(tag => /*#__PURE__*/React.createElement(Tag, {
      key: tag
    }, tag)), /*#__PURE__*/React.createElement("span", {
      className: "wp-person-task__due"
    }, t.due)))));
  }), participants.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "wp-person-card__empty"
  }, "\u8BE5\u91CC\u7A0B\u7891\u5C1A\u672A\u6307\u5B9A\u53C2\u4E0E\u4EBA\u5458") : null));
}
window.PeopleView = PeopleView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/PeopleView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/ProjectsView.jsx
try { (() => {
function ProjectsView({
  onOpen
}) {
  const {
    Badge,
    Avatar,
    ProgressBar
  } = window.DesignSystem_3175a1;
  const {
    projects,
    members,
    currentUser
  } = window.WorkpanelData;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-projects__topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-shell-brand wp-projects__brand"
  }, "\u5DE5\u4F5C\u9762\u677F"), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user wp-projects__user"
  }, /*#__PURE__*/React.createElement(window.DesignSystem_3175a1.Avatar, {
    name: currentUser.name,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user__name"
  }, currentUser.name), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user__role"
  }, currentUser.role)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-projects__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-projects__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-projects__title"
  }, "\u6211\u7684\u9879\u76EE"), /*#__PURE__*/React.createElement("span", {
    className: "wp-projects__count"
  }, projects.length, " \u4E2A\u9879\u76EE")), /*#__PURE__*/React.createElement("div", {
    className: "wp-projects__grid"
  }, projects.map(p => /*#__PURE__*/React.createElement("div", {
    className: "wp-project-card",
    key: p.id,
    onClick: () => onOpen(p.id)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-project-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-project-card__name"
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status.tone
  }, p.status.label)), /*#__PURE__*/React.createElement("p", {
    className: "wp-project-card__desc"
  }, p.desc), /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.progress,
    showPercent: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-project-card__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-project-card__avatars"
  }, p.memberIds.map(id => {
    const m = members.find(mm => mm.id === id);
    return m ? /*#__PURE__*/React.createElement(Avatar, {
      key: id,
      name: m.name,
      size: "sm"
    }) : null;
  })), /*#__PURE__*/React.createElement("span", {
    className: "wp-project-card__updated"
  }, "\u66F4\u65B0\u4E8E ", p.updatedAt)))))));
}
window.ProjectsView = ProjectsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/ProjectsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/RetroView.jsx
try { (() => {
const WP_RETRO_COLUMNS = [{
  key: 'planned',
  label: '原本准备发生什么',
  tone: 'neutral'
}, {
  key: 'actual',
  label: '实际发生了什么',
  tone: 'info'
}, {
  key: 'gaps',
  label: '为什么有差异',
  tone: 'warning'
}, {
  key: 'actions',
  label: '下一轮改什么',
  tone: 'success'
}];
function RetroView() {
  const {
    Tabs,
    Badge,
    Tag,
    Avatar
  } = window.DesignSystem_3175a1;
  const {
    milestones,
    retros,
    members
  } = window.WorkpanelData;
  const [selected, setSelected] = React.useState(milestones.find(m => retros[m.id])?.id || milestones[0].id);
  const milestone = milestones.find(m => m.id === selected);
  const retro = retros[selected];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    className: "wp-retro-tabs",
    tabs: milestones.map(m => ({
      key: m.id,
      label: m.name.replace(/^里程碑\s*\d+\s*·\s*/, '')
    })),
    active: selected,
    onChange: setSelected
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-retro-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-retro-head__name"
  }, milestone.name), /*#__PURE__*/React.createElement(Badge, {
    tone: milestone.status.tone
  }, milestone.status.label)), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u76EE\u6807"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value"
  }, milestone.goal)), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u65F6\u95F4\u8BA1\u5212"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value"
  }, milestone.startDate, " \u2013 ", milestone.endDate)), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u91CD\u70B9\u4E8B\u9879"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value wp-milestone-brief__tags"
  }, milestone.keyItems.map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k
  }, k)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-milestone-brief__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__label"
  }, "\u53C2\u4E0E\u4EBA\u5458"), /*#__PURE__*/React.createElement("span", {
    className: "wp-milestone-brief__value wp-milestone-brief__people"
  }, milestone.participantIds.map(id => {
    const p = members.find(m => m.id === id);
    return p ? /*#__PURE__*/React.createElement("span", {
      key: id,
      className: "wp-milestone-brief__person"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: "sm"
    }), p.name) : null;
  })))), retro ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-retro-summary"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('sparkles'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, retro.aiSummary)), /*#__PURE__*/React.createElement("div", {
    className: "wp-board wp-retro-board"
  }, WP_RETRO_COLUMNS.map(col => {
    const items = retro[col.key];
    return /*#__PURE__*/React.createElement("div", {
      className: "wp-board-col",
      key: col.key
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-board-col__head"
    }, /*#__PURE__*/React.createElement("span", null, col.label), /*#__PURE__*/React.createElement("span", {
      className: "wp-board-col__count"
    }, items.length)), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
      className: "wp-board-col__empty"
    }, "\u6682\u65E0\u5185\u5BB9") : null, col.key === 'actions' ? items.map((a, i) => /*#__PURE__*/React.createElement("div", {
      className: "wp-task-card",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "wp-task-card__title"
    }, a.text), /*#__PURE__*/React.createElement("div", {
      className: "wp-task-card__meta"
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: a.owner === '全员' ? '全员' : a.owner,
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wp-task-card__due"
    }, a.owner)))) : items.map((t, i) => /*#__PURE__*/React.createElement("div", {
      className: "wp-task-card wp-task-card--static",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "wp-task-card__title"
    }, t))));
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "wp-retro-empty"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.WP_ICON('rotate-ccw'),
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "\u8BE5\u91CC\u7A0B\u7891\u5C1A\u672A\u5B8C\u6210\uFF0C\u590D\u76D8\u5C06\u5728\u5B8C\u6210\u540E\u7531 AI \u81EA\u52A8\u751F\u6210\u8349\u7A3F\u3002")));
}
window.RetroView = RetroView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/RetroView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/Sidebar.jsx
try { (() => {
const ICON = name => `https://unpkg.com/lucide-static@latest/icons/${name}.svg`;
function Sidebar({
  active,
  onNavigate,
  project,
  onBack
}) {
  const items = [{
    key: 'board',
    label: '白板',
    icon: 'layout-grid'
  }, {
    key: 'people',
    label: '人员',
    icon: 'users'
  }, {
    key: 'channel',
    label: '讨论',
    icon: 'message-circle'
  }, {
    key: 'docs',
    label: '文档',
    icon: 'folder'
  }, {
    key: 'retro',
    label: '复盘',
    icon: 'rotate-ccw'
  }, {
    key: 'mechanism',
    label: '机制设置',
    icon: 'settings'
  }];
  const {
    currentUser
  } = window.WorkpanelData;
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-sidebar"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "wp-shell-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON('arrow-left'),
    alt: ""
  }), "\u6240\u6709\u9879\u76EE"), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-brand"
  }, project.name), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-workspace"
  }, project.workspace), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    className: `wp-shell-nav__item ${active === it.key ? 'wp-shell-nav__item--active' : ''}`,
    onClick: () => onNavigate(it.key)
  }, /*#__PURE__*/React.createElement("img", {
    src: ICON(it.icon),
    alt: ""
  }), it.label))), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user"
  }, /*#__PURE__*/React.createElement(window.DesignSystem_3175a1.Avatar, {
    name: currentUser.name,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user__name"
  }, currentUser.name), /*#__PURE__*/React.createElement("div", {
    className: "wp-shell-user__role"
  }, currentUser.role))));
}
window.Sidebar = Sidebar;
window.WP_ICON = ICON;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/TimelineView.jsx
try { (() => {
const WP_GANTT_MONTHS = [{
  label: '7 月',
  days: 31
}, {
  label: '8 月',
  days: 31
}, {
  label: '9 月',
  days: 30
}];
function TimelineView() {
  const {
    Badge,
    Tag
  } = window.DesignSystem_3175a1;
  const {
    milestones,
    threads
  } = window.WorkpanelData;
  const totalDays = WP_GANTT_MONTHS.reduce((s, m) => s + m.days, 0);
  let cursor = 0;
  const dividers = WP_GANTT_MONTHS.slice(0, -1).map(m => {
    cursor += m.days;
    return cursor / totalDays * 100;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "wp-gantt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-gantt-months"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wp-gantt-months__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wp-gantt-months__track"
  }, WP_GANTT_MONTHS.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.label,
    style: {
      width: `${m.days / totalDays * 100}%`
    }
  }, m.label)))), /*#__PURE__*/React.createElement("div", {
    className: "wp-gantt-body"
  }, milestones.map(m => {
    const left = (m.start - 1) / totalDays * 100;
    const width = (m.end - m.start + 1) / totalDays * 100;
    const related = threads.filter(t => t.milestoneId === m.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-row",
      key: m.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "wp-gantt-label__name"
    }, m.name), /*#__PURE__*/React.createElement(Badge, {
      tone: m.status.tone
    }, m.status.label)), /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-track-wrap"
    }, dividers.map(d => /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-divider",
      key: d,
      style: {
        left: `${d}%`
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-bar",
      style: {
        left: `${left}%`,
        width: `${width}%`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-fill",
      style: {
        width: `${m.progress}%`
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "wp-gantt-due",
      style: {
        left: `${left + width}%`
      }
    }, m.due)), related.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "wp-gantt-issues"
    }, related.map(t => /*#__PURE__*/React.createElement("div", {
      className: `wp-gantt-issue ${t.status === 'closed' ? 'wp-gantt-issue--closed' : ''}`,
      key: t.id
    }, /*#__PURE__*/React.createElement("img", {
      src: window.WP_ICON(t.status === 'open' ? 'circle-dot' : 'check-circle-2'),
      alt: ""
    }), /*#__PURE__*/React.createElement("span", {
      className: "wp-gantt-issue__title"
    }, t.title), /*#__PURE__*/React.createElement(Tag, null, t.tag), /*#__PURE__*/React.createElement("span", {
      className: "wp-gantt-issue__count"
    }, t.replies.length, " \u6761\u8BA8\u8BBA")))) : null));
  })));
}
window.TimelineView = TimelineView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/TimelineView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/workpanel-app/data.js
try { (() => {
// 工作面板 — UI kit fake data (for click-through demo only)
window.WorkpanelData = {
  currentUser: {
    name: '沈亦舟',
    role: '项目经理 / 产品经理'
  },
  // top-level project directory — the app opens here, then drills into one project's workspace
  projects: [{
    id: 'proj1',
    name: '工作面板 1.0',
    workspace: '产品与技术组 · Q3 上线冲刺',
    desc: 'AI 辅助的项目白板、讨论与复盘机制建设',
    status: {
      label: '进行中',
      tone: 'info'
    },
    progress: 46,
    memberIds: ['u1', 'u2', 'u3', 'u4'],
    updatedAt: '今天 09:02'
  }, {
    id: 'proj2',
    name: '内容中台改版',
    workspace: '内容团队 · 中台重构',
    desc: '素材库与发布流程的排期协作',
    status: {
      label: '进行中',
      tone: 'info'
    },
    progress: 22,
    memberIds: ['u1', 'u4'],
    updatedAt: '昨天 18:40'
  }, {
    id: 'proj3',
    name: '客户成功 Q2 复盘',
    workspace: '客户成功组 · 季度复盘',
    desc: '季度目标复盘与 Q3 规划',
    status: {
      label: '已归档',
      tone: 'neutral'
    },
    progress: 100,
    memberIds: ['u1', 'u3'],
    updatedAt: '6 月 20 日'
  }],
  members: [{
    id: 'u1',
    name: '沈亦舟',
    role: '项目经理',
    status: 'online',
    responsibility: '统筹四个机制的落地，把关需求范围与排期，主持每周例会与复盘。'
  }, {
    id: 'u2',
    name: '李婉婷',
    role: '前端',
    status: 'online',
    responsibility: '负责白板、讨论区的前端实现，包括看板拖拽与时间线可视化。'
  }, {
    id: 'u3',
    name: '陈明浩',
    role: '后端',
    status: 'offline',
    responsibility: '负责 AI 播报服务、通知与数据接口，保障看板与频道的数据同步。'
  }, {
    id: 'u4',
    name: '王芷若',
    role: '设计',
    status: 'online',
    responsibility: '负责视觉与交互设计，把关 AI 播报文案语气与里程碑通知体验。'
  }],
  // start/end are day offsets on a Jul 1 – Sep 30 axis (day 1 = Jul 1) used by the monthly timeline view.
  // Each milestone owns its own kanban board — tasks live under the milestone they belong to.
  nextMeeting: {
    label: '本周五 15:00 · 里程碑 2 例会'
  },
  milestones: [{
    id: 'm1',
    name: '里程碑 1 · 需求对齐',
    due: '7 月 3 日',
    start: 1,
    end: 3,
    progress: 100,
    status: {
      label: '已完成',
      tone: 'success'
    },
    startDate: '7 月 1 日',
    endDate: '7 月 3 日',
    goal: '对齐产品范围与优先级，冻结需求，形成可执行的开发计划。',
    keyItems: ['需求评审会 3 轮', '范围冻结确认', '角色分工确认'],
    participantIds: ['u1', 'u4'],
    columns: [{
      key: 'todo',
      label: '待开始',
      tasks: []
    }, {
      key: 'doing',
      label: '进行中',
      tasks: []
    }, {
      key: 'review',
      label: '待复盘',
      tasks: []
    }, {
      key: 'done',
      label: '已完成',
      tasks: [{
        id: 't7',
        title: '项目章程草案',
        tags: ['项目管理'],
        owner: '沈亦舟',
        due: '6/28',
        desc: '完成项目章程初稿，明确目标、范围与四个机制的启动方式。'
      }, {
        id: 't8',
        title: '团队角色分工确认',
        tags: ['人员'],
        owner: '沈亦舟',
        due: '6/30',
        desc: '与全体成员确认角色分工，写入人员机制。'
      }, {
        id: 't6',
        title: '需求评审会记录归档',
        tags: ['项目管理'],
        owner: '沈亦舟',
        due: '7/3',
        desc: '需求评审会记录已归档，同步进复盘文档。'
      }]
    }]
  }, {
    id: 'm2',
    name: '里程碑 2 · 核心功能开发',
    due: '7 月 24 日',
    start: 4,
    end: 24,
    progress: 62,
    status: {
      label: '进行中',
      tone: 'info'
    },
    startDate: '7 月 4 日',
    endDate: '7 月 24 日',
    goal: '完成白板、频道、AI 播报三大核心功能的可用版本，支撑内部试用。',
    keyItems: ['看板拖拽交互', 'AI 播报服务接入', '人员角色矩阵落地'],
    participantIds: ['u1', 'u2', 'u3'],
    columns: [{
      key: 'todo',
      label: '待开始',
      tasks: [{
        id: 't1',
        title: '梳理复盘机制模板',
        tags: ['项目管理'],
        owner: '沈亦舟',
        due: '7/8',
        desc: '整理"计划/实际/差异/下一轮"四栏结构的复盘文档模板，供每个里程碑复用。'
      }, {
        id: 't2',
        title: '设计里程碑通知文案',
        tags: ['内容'],
        owner: '王芷若',
        due: '7/9',
        desc: '为 AI 播报设计里程碑达成、超期提醒两类文案的语气和结构。'
      }]
    }, {
      key: 'doing',
      label: '进行中',
      tasks: [{
        id: 't3',
        title: '白板看板视图开发',
        tags: ['前端'],
        owner: '李婉婷',
        due: '7/12',
        desc: '实现看板四列拖拽交互，任务卡片可在待开始/进行中/待复盘/已完成间移动。'
      }, {
        id: 't4',
        title: 'AI 播报服务接入',
        tags: ['后端'],
        owner: '陈明浩',
        due: '7/14',
        desc: '接入每日进度播报与超期提醒的后台服务，向讨论区推送 AI 消息。'
      }, {
        id: 't5',
        title: '人员机制角色矩阵',
        tags: ['项目管理'],
        owner: '沈亦舟',
        due: '7/10',
        desc: '明确每位成员在四个机制中的角色与责任边界，避免任务无人认领。'
      }]
    }, {
      key: 'review',
      label: '待复盘',
      tasks: [{
        id: 't9',
        title: '里程碑 2 周报归档',
        tags: ['项目管理'],
        owner: '沈亦舟',
        due: '7/7',
        desc: '第一周周报已完成，待归档并同步进复盘文档。'
      }]
    }, {
      key: 'done',
      label: '已完成',
      tasks: []
    }]
  }, {
    id: 'm3',
    name: '里程碑 3 · 联调与验收',
    due: '8 月 7 日',
    start: 25,
    end: 38,
    progress: 8,
    status: {
      label: '待开始',
      tone: 'neutral'
    },
    startDate: '7 月 25 日',
    endDate: '8 月 7 日',
    goal: '完成前后端联调与内部验收，收敛遗留问题。',
    keyItems: ['联调环境搭建', '验收用例编写', '遗留问题清零'],
    participantIds: ['u2', 'u3'],
    columns: [{
      key: 'todo',
      label: '待开始',
      tasks: []
    }, {
      key: 'doing',
      label: '进行中',
      tasks: []
    }, {
      key: 'review',
      label: '待复盘',
      tasks: []
    }, {
      key: 'done',
      label: '已完成',
      tasks: []
    }]
  }, {
    id: 'm4',
    name: '里程碑 4 · 上线复盘',
    due: '8 月 21 日',
    start: 39,
    end: 52,
    progress: 0,
    status: {
      label: '待开始',
      tone: 'neutral'
    },
    startDate: '8 月 8 日',
    endDate: '8 月 21 日',
    goal: '正式上线，并对整个项目周期做一次完整复盘。',
    keyItems: ['上线发布', '全项目复盘会'],
    participantIds: ['u1'],
    columns: [{
      key: 'todo',
      label: '待开始',
      tasks: []
    }, {
      key: 'doing',
      label: '进行中',
      tasks: []
    }, {
      key: 'review',
      label: '待复盘',
      tasks: []
    }, {
      key: 'done',
      label: '已完成',
      tasks: []
    }]
  }],
  // channel is issue/thread-style — questions and topics anyone can raise and reply to, visible to the whole team.
  // milestoneId links a thread to the milestone it came up during, so the timeline can surface it alongside progress.
  threads: [{
    id: 'th1',
    title: '看板拖拽卡片时，跨列移动要不要弹二次确认？',
    tag: '前端',
    status: 'open',
    milestoneId: 'm2',
    author: '李婉婷',
    time: '09:15',
    replies: [{
      author: '李婉婷',
      time: '09:15',
      text: '担心手滑把"已完成"的任务拖回"进行中"，要不要加一个确认弹窗？'
    }, {
      author: 'AI',
      ai: true,
      time: '09:16',
      text: '过去 2 周看板共发生 47 次拖拽，其中误操作撤销 1 次。加确认弹窗可能会拖慢正常操作。'
    }, {
      author: '沈亦舟',
      time: '09:20',
      text: '同意 AI 的判断，先不加确认，只在拖回"待开始"时给一个可撤销的提示条。'
    }]
  }, {
    id: 'th2',
    title: 'AI 播报的语气要不要更简短一些？',
    tag: '内容',
    status: 'open',
    milestoneId: 'm2',
    author: '王芷若',
    time: '10:30',
    replies: [{
      author: '王芷若',
      time: '10:30',
      text: '现在每条播报都比较长，会不会显得啰嗦？想收集一下大家的感觉。'
    }, {
      author: '陈明浩',
      time: '10:42',
      text: '我觉得还好，主要是需要一眼看出"要不要做什么"。'
    }]
  }, {
    id: 'th3',
    title: '需求评审会记录归档为什么停留了 4 天？',
    tag: '项目管理',
    status: 'closed',
    milestoneId: 'm1',
    author: 'AI',
    ai: true,
    time: '7/1 11:40',
    replies: [{
      author: 'AI',
      ai: true,
      time: '7/1 11:40',
      text: '「需求评审会记录归档」已停留在待复盘 4 天，要不要安排一下？'
    }, {
      author: '沈亦舟',
      time: '7/1 14:20',
      text: '本周会议太多，明天上午处理，谢谢提醒。'
    }, {
      author: '沈亦舟',
      time: '7/3 09:00',
      text: '已归档，可以关闭了。'
    }]
  }],
  // retros are keyed by milestone id — a milestone with no entry hasn't reached its retro yet
  retros: {
    m1: {
      aiSummary: 'AI 摘要：里程碑 1 整体延期 2 天完成。差异主要来自需求变更缺少评估环节；建议里程碑 2 增加中期同步以提前暴露变更。',
      planned: ['6 月 30 日前完成全部需求评审并冻结范围', '设计稿 6 月 27 日交付，预留 3 天走查', '零需求变更，直接进入里程碑 2 排期'],
      actual: ['需求于 7 月 2 日完成冻结，延期 2 天', '设计稿如期交付，走查发现 4 处交互问题', '发生 2 次需求变更，均在评审阶段拦截'],
      gaps: ['变更来自客户侧新增场景，事前没有评估流程拦截', '走查问题偏多，说明设计交付前的自查不够', '「冻结」缺少明确的书面确认，团队理解不一致'],
      actions: [{
        text: '新增「需求变更评估」检查点，纳入项目管理机制',
        owner: '沈亦舟'
      }, {
        text: '设计交付前增加一轮自查清单',
        owner: '王芷若'
      }, {
        text: '「冻结」改为讨论区内正式确认，AI 自动归档',
        owner: '全员'
      }]
    }
  },
  // documents are project materials — meeting minutes from the weekly 例会, PRDs, and other reference files
  documents: [{
    id: 'd1',
    name: '阶段一需求评审会 - 会议纪要',
    category: '会议纪要',
    icon: 'file-text',
    uploader: '沈亦舟',
    time: '6 月 29 日',
    size: '86 KB'
  }, {
    id: 'd2',
    name: '工作面板 PRD v1.2',
    category: 'PRD 文档',
    icon: 'file-type',
    uploader: '沈亦舟',
    time: '6 月 25 日',
    size: '1.2 MB'
  }, {
    id: 'd3',
    name: '本周例会纪要 - 7 月第 1 周',
    category: '会议纪要',
    icon: 'file-text',
    uploader: '沈亦舟',
    time: '今天 09:30',
    size: '64 KB'
  }, {
    id: 'd4',
    name: 'AI 播报文案风格指南',
    category: '项目材料',
    icon: 'file-text',
    uploader: '王芷若',
    time: '6 月 27 日',
    size: '210 KB'
  }, {
    id: 'd5',
    name: '看板交互走查记录',
    category: '项目材料',
    icon: 'file-spreadsheet',
    uploader: '李婉婷',
    time: '7 月 1 日',
    size: '48 KB'
  }],
  documentCategories: ['会议纪要', 'PRD 文档', '项目材料'],
  // notifications are AI nudges + team mentions surfacing in the topbar bell
  notifications: [{
    id: 'n1',
    icon: 'sparkles',
    text: 'AI：里程碑 2 整体进度 62%，比上周提升 14%。',
    time: '09:02',
    read: false
  }, {
    id: 'n2',
    icon: 'at-sign',
    text: '沈亦舟在「需求评审会记录归档」中提到了你',
    time: '10:15',
    read: false
  }, {
    id: 'n3',
    icon: 'alert-circle',
    text: 'AI：「需求评审会记录归档」已停留在待复盘 4 天',
    time: '11:40',
    read: false
  }, {
    id: 'n4',
    icon: 'party-popper',
    text: 'AI：里程碑「里程碑 1 · 需求对齐」已达成',
    time: '昨天',
    read: true
  }, {
    id: 'n5',
    icon: 'message-circle',
    text: '王芷若在提问「AI 播报的语气要不要更简短一些？」中回复了',
    time: '昨天',
    read: true
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/workpanel-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
