Avatar shows a person or the AI teammate in the channel, task assignee lists, and member rosters.

```jsx
<Avatar name="李婉婷" status="online" />
<Avatar ai name="AI" />
```

Falls back to initials (last 1–2 characters of `name`) when no `src` image is given — never a generic person silhouette. `ai` swaps the fill to terracotta so the AI teammate is instantly distinguishable from human members in the channel.
