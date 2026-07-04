Tooltip shows a short label above an icon-only control or truncated text on hover — pure CSS, no positioning library.

```jsx
<Tooltip label="标记为已完成">
  <IconButton icon={<CheckIcon />} aria-label="标记为已完成" />
</Tooltip>
```

Keep labels to one short phrase; it appears above the trigger and is not keyboard-dismissible, so never put essential-only information in it.
