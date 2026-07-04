Card is the base content container — task cards, milestone cards, settings sections. 1px hairline border + soft shadow, 24px padding, 14px radius.

```jsx
<Card title="阶段一 · 需求对齐" interactive onClick={openDetail}>
  3 个任务 · 截止 7 月 10 日
</Card>
```

Never stack a colored left-border accent on Card — status belongs on a Badge inside it, not on the card chrome.
