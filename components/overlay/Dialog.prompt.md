Dialog is a centered modal for a single focused decision (create milestone, confirm delete) — not for browsing or multi-step flows.

```jsx
<Dialog open={open} title="删除里程碑？" onClose={close}
  footer={<><Button variant="secondary" onClick={close}>取消</Button><Button variant="danger" onClick={confirm}>删除</Button></>}>
  此操作无法撤销，相关任务将保留但失去里程碑关联。
</Dialog>
```

Scrim click closes; content click does not (via `stopPropagation`). Keep body copy to 1–2 sentences.
