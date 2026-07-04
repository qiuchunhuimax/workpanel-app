Button triggers a single action — use for confirmations, submissions, and primary CTAs, never more than one `primary` per view.

```jsx
<Button variant="primary" size="md">保存机制</Button>
<Button variant="secondary">取消</Button>
<Button variant="ghost" size="sm">查看详情</Button>
<Button variant="danger">删除项目</Button>
<Button variant="primary" icon={<PlusIcon />}>新建里程碑</Button>
```

Variants: `primary` (terracotta fill, one per view), `secondary` (bordered), `ghost` (text-only, for low-emphasis inline actions), `danger` (destructive actions only). Sizes: `sm` 32px / `md` 40px / `lg` 48px. Never pill-shaped — radius is `--radius-lg` (10px) at every size.
