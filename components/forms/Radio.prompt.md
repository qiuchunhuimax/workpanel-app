Radio is one option in a mutually-exclusive group — share the same `name` across the group.

```jsx
<Radio name="mechanism" label="按周复盘" checked={cadence==='week'} onChange={() => setCadence('week')} />
<Radio name="mechanism" label="按里程碑复盘" checked={cadence==='milestone'} onChange={() => setCadence('milestone')} />
```

18px ring, terracotta dot when selected. Use for 2–5 mutually exclusive choices; past that, prefer Select.
