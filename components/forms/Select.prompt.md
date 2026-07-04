Select is a styled native dropdown — for short, fixed option lists (status, assignee, mechanism type). Pass `<option>` children directly.

```jsx
<Select label="状态">
  <option>进行中</option>
  <option>已完成</option>
  <option>已延期</option>
</Select>
```

Uses the platform `<select>` for accessibility/keyboard behavior; only the chrome (border, chevron, focus ring) is restyled to match Input.
