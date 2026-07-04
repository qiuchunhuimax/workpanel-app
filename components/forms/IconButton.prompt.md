IconButton is a single-glyph square button — for toolbars, card actions, and message composer controls where a label would be redundant. Always pass `aria-label`.

```jsx
<IconButton icon={<BellIcon />} aria-label="通知" />
<IconButton icon={<MoreHorizontalIcon />} size="sm" outline aria-label="更多" />
```

Sizes: `sm` 28px / `md` 36px / `lg` 44px (all ≥ 44px hit target once padding/touch area is considered on mobile contexts). `outline` adds a hairline border for toolbar contexts on a plain background.
