# 工作面板 Design System

**工作面板**（Work Panel）is an AI-assisted project command center: a Slack-style
team channel fused with a project whiteboard for progress, milestones, and
retrospectives. It's being built by a project/product manager standing up a new
team's operating system — the first release centers on four "mechanisms":
进度机制 (progress), 人员机制 (people/roles), 项目管理机制 (project management
process), and 复盘机制 (retrospective). An AI teammate posts into the channel to
narrate progress, nudge stalled work, and keep the team's momentum ("氛围感")
visible — closer to a bot-augmented Slack than a static Gantt chart.

This is a **from-scratch design system** — no existing codebase, Figma file, or
brand assets were provided. Everything here (palette, type, components, and the
web app recreation) was designed for this project rather than extracted from a
real source. If a Figma file, repo, or brand guide becomes available later,
this system should be rebuilt against it — see "Caveats" below.

## Sources
None supplied. If real materials exist, attach:
- Figma link (component library / product screens)
- Codebase (web app repo)
- Existing brand guide, logo files, product screenshots

## Product surfaces in this system
- **Web app** (`ui_kits/workpanel-app/`) — the primary surface: project
  whiteboard (progress/milestones), channel view with AI teammate, retrospective
  view. Desktop-first, dense-but-calm information design.

## Content fundamentals
Copy is written in **Simplified Chinese**, first-person plural for the product
("我们"), direct address for the user's own actions, first-person singular ("我")
reserved for the AI teammate's messages so it reads as a participant, not a
system alert.

- **Register**: crisp and efficient — short sentences, verb-forward status words
  (进行中 / 已完成 / 已延期 / 待复盘), not "创意标语" marketing language. This is an
  internal operating tool; copy should read like a good project manager talking,
  not like a landing page.
- **Mechanism-first vocabulary**: features are framed as mechanisms/processes,
  not just tools — "进度机制" (progress mechanism) rather than "进度条功能"
  (progress bar feature). Section headers and empty states name the mechanism,
  not the UI element.
- **AI teammate voice**: warmer and more conversational than the chrome around
  it. It observes, summarizes, and nudges — e.g. "本周进度过半，3 个任务待跟进，要不要现在复盘一下？"
  — never commands. Sparing emoji (✅ 🎉) are acceptable *only* in AI-authored
  messages to mark a milestone or celebrate completion; UI chrome, labels, and
  buttons never use emoji.
- **Status labels are short nouns/verb-phrases**, always 2–4 characters:
  进行中 · 已完成 · 已延期 · 待复盘 · 待确认 · 已归档.
- **Milestones read as `里程碑 · <name>`**, e.g. "里程碑 · 阶段一验收" — consistent
  prefix so they're scannable in a dense timeline.
- Avoid: exclamation-heavy copy, emoji in navigation/buttons, English loanwords
  where a plain Chinese term exists, passive-voice status updates.

## Visual foundations
Direction: warm, editorial, paper-like — a calm "linen desk" register that
avoids both cold corporate blue and the bluish-purple gradient look common to
AI products.

- **Color**: cream paper ground (`--surface-app` `#FAFAF8`) with near-black ink
  text (`#1A1A1A`), not pure white/black. One accent — terracotta (`#B0574B`) —
  carries all primary actions and brand moments; a second, narrower accent —
  ochre (`#C08A2E`) — is reserved *only* for progress fills and milestone
  markers, so "something is progressing" always reads as a distinct color from
  "do this action." Semantic success/danger/info colors are muted, not
  saturated. No purple, no blue-dominant palette.
- **Type**: serif display (Noto Serif SC) for headlines and section titles
  gives editorial warmth; UI/body text is a plain sans (Noto Sans SC) for dense
  legibility; mono (IBM Plex Mono) marks timestamps, IDs, and numeric data only.
  See "Substituted fonts" below.
- **Spacing**: 4px base scale (4/8/12/16/24/32/48/64…). Cards lean on generous
  internal padding (24px) over dense packing — breathing room reads as
  calm/mechanism-driven rather than cramped/urgent.
- **Backgrounds**: flat cream/paper color, no photography, no full-bleed hero
  imagery, no hand-drawn illustration, no repeating texture/pattern, no
  gradients anywhere in UI chrome. The one exception is the marketing/deck
  template, which may use a single large display-serif headline on flat color
  as its "hero," never an image.
- **Animation**: calm and efficient — short (120–280ms) ease-out fades and
  small upward rises on entry; no spring/bounce easing anywhere (mechanism-first
  tone, not playful). Reduced-motion is respected everywhere.
- **Hover**: background steps one tone darker/warmer (paper → paper-100,
  terracotta 500 → 600); never opacity-only. Text links darken, don't
  underline-on-hover-only (already underlined or not per context).
- **Press**: `scale(0.98)` on the pressed element, no color flash.
- **Borders & shadow**: cards and inputs carry a 1px hairline border
  (`--border-subtle` / `--border-default`) as the primary separator; box-shadow
  is a soft, warm-tinted, low-opacity accent on top of the border (never
  shadow-only elevation, never hard/dark drop shadows).
- **Corner radii**: modest — 8–14px for cards/inputs/buttons. Full pill radius
  is reserved for tags, badges, and avatars only; buttons and cards are never
  pill-shaped.
- **Transparency/blur**: none in the base UI kit. Reserve backdrop-blur (if
  ever needed) for a single modal scrim, not layered throughout the UI.
- **Imagery**: none provided; none invented. If/when product photography or
  illustration is added, keep it warm-neutral (not cool/blue-graded), minimal
  grain acceptable, no saturated color-graded stock photography.

## Iconography
No icon set was supplied. Substituted with **[Lucide](https://lucide.dev)**
(1.5px stroke, 20/24px grid) loaded from CDN — the closest open match to a
clean line-icon system that suits dense UI. No icon font, no PNG icon set, no
emoji-as-icon anywhere in the UI kit. Emoji is used *only* inside AI-authored
chat copy (see Content fundamentals), never as a UI glyph. Flagged: replace
the CDN link with a self-hosted sprite/icon font if the real product has one.

## Substituted fonts (flagged — please confirm or replace)
No brand font files were supplied. Standing in, loaded from Google Fonts CDN
(`tokens/fonts.css`):
- **Noto Serif SC** → `--font-display`
- **Noto Sans SC** → `--font-body`
- **IBM Plex Mono** → `--font-mono`

If real brand fonts exist, drop the files in `assets/fonts/`, replace the
`@import` in `tokens/fonts.css` with self-hosted `@font-face` rules, and the
`--font-*` custom properties will pick them up everywhere with no other
changes needed.

## Caveats / open questions
- No logo was supplied — a plain-type wordmark ("工作面板" in `--font-display`)
  stands in wherever a mark would go (see `guidelines/wordmark.html`). Do not
  treat this as a real logo.
- No source codebase, Figma file, or existing brand guide — every visual and
  content decision above is a proposed starting point, not an extraction from
  a real product. Please review and correct anything that doesn't match your
  actual product vision.
- Fonts and icons are CDN substitutions (see above) — flag if you have the
  real assets.

## Index
- `styles.css` — global stylesheet entry point (import list only)
- `tokens/` — colors, typography, spacing, radius, shadow, motion, fonts, base reset
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups)
- `components/` — reusable React primitives (see below)
- `ui_kits/workpanel-app/` — the 工作面板 web app recreation
- `SKILL.md` — portable skill manifest for use in Claude Code

### Components
- `components/forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
- `components/feedback/` — Badge, Tag, Tooltip, Toast
- `components/overlay/` — Dialog
- `components/navigation/` — Tabs
- `components/data/` — Card, Avatar, ProgressBar

#### Intentional additions
No source defined a component inventory (from-scratch run), so the set above
is the standard primitive kit sized to this product — plus two additions
specific to 工作面板's mechanism focus:
- **ProgressBar** — progress/milestone tracking is the product's core concept.
- **Avatar** — required for the channel/chat surface (team + AI teammate identity).

### UI kit screens (`ui_kits/workpanel-app/`)
Interactive click-through of the four core surfaces, navigable from the left
rail: **白板** (Kanban board + milestone strip / timeline), **频道** (Slack-style
channel with a visually distinct AI teammate), **复盘** (retrospective — AI
summary + went-well / to-improve / action items), **机制设置** (the four
mechanisms — progress / people / project-management / retro — as toggles).

