Toast is a transient, corner-anchored notification — for AI-teammate nudges and system confirmations ("已归档", "里程碑已达成").

```jsx
<Toast tone="success" title="里程碑已达成" description="阶段一验收已完成，AI 已生成复盘草稿" onClose={dismiss} />
```

Fixed 360px width; stack multiple with 8px gaps. Reserve `danger` tone for failures the user must notice, not routine status changes.
