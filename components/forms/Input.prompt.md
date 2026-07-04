Input is a labeled single-line text field with optional hint/error copy and a leading icon slot.

```jsx
<Input label="项目名称" placeholder="例如：Q3 上线冲刺" />
<Input label="搜索" icon={<SearchIcon />} placeholder="搜索任务、成员或里程碑" />
<Input label="截止日期" error="请选择一个未来日期" />
```

Focus uses a terracotta ring (`--shadow-focus-ring`), never a blue browser default. Error state tints border + hint text with the danger color; hint and error never show at once.
