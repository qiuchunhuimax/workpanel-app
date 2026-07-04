Tabs switches between views within the same context (whiteboard views: 看板/时间线/里程碑). Panel content is rendered by the parent, keyed off `active`.

```jsx
<Tabs tabs={[{key:'board',label:'看板'},{key:'timeline',label:'时间线'},{key:'milestones',label:'里程碑'}]}
  active={view} onChange={setView} />
```

Underline indicator only — no pill/background for the active tab. Use for 2–5 destinations; more than that, use a Select.
