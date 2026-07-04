Switch is an instant-effect on/off toggle (no separate save step) — for settings like "AI 每日播报" or notification preferences.

```jsx
<Switch label="启用 AI 每日播报" checked={aiDigest} onChange={e => setAiDigest(e.target.checked)} />
```

Use Switch when the change applies immediately; use Checkbox when it's part of a form submitted later.
