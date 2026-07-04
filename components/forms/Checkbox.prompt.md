Checkbox is a single boolean toggle with a visible label — for task completion, multi-select filters, and settings.

```jsx
<Checkbox label="包含已归档项目" checked={showArchived} onChange={e => setShowArchived(e.target.checked)} />
```

18px box, `--radius-xs` corners, terracotta fill + white check mark when checked. Never used without a `label` — the box alone is not a sufficient hit target or affordance.
