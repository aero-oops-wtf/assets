import{r as k,j as o,ac as G,T as $,ad as X,a6 as Y,ae as J,af as F,F as q,U as K,W as Q,ag as Z,x as ee,X as te,L as W,ah as ne,ai as ae}from"./vendor-react-DmkRXUEG.js";import{l as ie,G as oe,aY as se,aZ as re,a5 as le,a_ as de,a$ as ce,b0 as ue,b1 as he,aD as T,b2 as me,b3 as pe,b4 as ge,av as fe,ao as U,V as be,W as we,a0 as ye,a1 as L,a2 as ve,aS as _e,b5 as ke,b6 as xe,b7 as Ee,b8 as Ae,b9 as Ie,ba as Te,bb as De,bc as Pe}from"./LoadFailed-CAVZAvtF.js";import{z as Le,av as Re,Z as Oe,E as S,aw as Se,_ as t,c as P,u as Ce,B as H}from"./index-CJ9gzKbY.js";import{a as Ve,b as je,f as Me,e as C,c as Ne}from"./workspaceDb-CJMMCk9G.js";const Be=new Set(["image/png","image/jpeg"]),ze=100*1024,Fe=.9,qe=.8;function We(e){return Be.has(e.type)&&e.size>=ze}async function Ue(e){try{const n=await createImageBitmap(e);try{const a=new OffscreenCanvas(n.width,n.height);a.getContext("2d").drawImage(n,0,0);const i=await a.convertToBlob({type:"image/webp",quality:Fe});return i.type!=="image/webp"||i.size>e.size*qe?e:new File([i],`${e.name||"image"}.webp`,{type:"image/webp",lastModified:e.lastModified})}finally{n.close()}}catch{return e}}function Et(e,n){const a=!!e&&ie(e),i=a&&Le(n),s=a&&Re(n),r=i||s;return{openAi:a,takesImages:i,takesPdf:s,takesFiles:r,attachLabel:i&&s?"an image or PDF":s?"a PDF":"an image",accept:[i&&"image/*",s&&"application/pdf"].filter(Boolean).join(","),requestLimit:a?Oe:oe,inlineLimitApplies:!a||r}}function At(e,n,a){if(!n.openAi)return null;if(!n.takesFiles)return`${a} cannot read attachments. Switch models to attach files.`;const i=r=>n.takesImages&&r.type.startsWith("image/")||n.takesPdf&&r.type==="application/pdf";return e.every(i)?null:`Only ${n.takesImages&&n.takesPdf?"images and PDFs":n.takesPdf?"PDFs":"images"} are sent to ${a}. Other file types need a Google model.`}function He(e){return de(e)?ce:ue(e)?he:We(e)?Ue:null}function It(e,n){const[a,i]=k.useState([]),[s,r]=k.useState([]);async function l(d){if(d.length===0)return;const c=n(d);if(c){e(c);return}const b=[],u=[];for(const m of d){let g=m;const h=He(m);if(h){r(y=>[...y,m.name]);try{g=await h(m)}catch(y){u.push(y.message);continue}finally{r(y=>{const E=y.indexOf(m.name);return E<0?y:[...y.slice(0,E),...y.slice(E+1)]})}}else if(se(m)){u.push(`"${m.name}" is the pre-2007 .ppt format. Save it as .pptx first.`);continue}else if(re(m)){u.push(`"${m.name}" is a binary Excel workbook. Save it as .xlsx first.`);continue}const w=await le(g);"error"in w?u.push(w.error):b.push(w)}b.length>0&&i(m=>[...m,...b]),u.length>0&&e(u.join(" "))}return{attachments:a,converting:s,stage:l,remove:d=>i(c=>c.filter(b=>b.id!==d)),clear:()=>i([])}}const Ge='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## The aero stylesheet\n\nAero serves its styling as one file. Link it in the `<head>` of every new page, before your own `<style>`:\n\n```html\n<link rel="stylesheet" href="/aero-ui.css">\n```\n\nIt declares the design tokens on `:root`, gives plain elements the aero look (page background and text, headings, links, inputs, selects, textareas, checkboxes, `<dialog>` and its backdrop, focus rings, scrollbars) and provides the classes below. So:\n\n- Do not declare the tokens, a palette or a type scale yourself, and do not restyle what the file already styles: take every colour, radius and shadow from these tokens with `var()`.\n- Write CSS only for the page\'s own layout and for what the classes do not cover. Your own rules always win over the file (it sits in a cascade layer), so adjusting a component takes one small rule.\n- An existing page that does not link it yet: add the link when you restyle the page, and then delete the page\'s own copies of the tokens and of whatever the classes cover. For any other change, leave its styling as it is.\n\nTokens: ink `--ink` (headings, body text, primary buttons), `--ink-700` (its hover), `--ink-500`, `--ink-300` (light dividers); action, for clickable things only, `--action`, `--action-700` (hover), `--action-300`, `--action-soft`; status, for true things only, `--status`, `--status-700` (text on a soft blue background), `--status-300`, `--status-soft`; surfaces `--paper` (the warm page ground), `--surface` (cards), `--sunken` (table headers, footers, inset rows), `--muted` (hover fills); cool zinc neutrals `--border`, `--border-strong`, `--fg` (text), `--fg-2` (secondary copy), `--fg-3` (muted labels, placeholders); `--danger`, `--danger-strong`, `--danger-soft`, `--warning`, `--warning-strong`, `--warning-soft`. Radii `--r-xs` 6px (tight tags), `--r-sm` 8px, `--r-md` 10px (buttons, inputs, selects: keep these equal), `--r-lg` 16px (panels, cards), `--r-xl` 24px (modals). Shadows `--shadow-xs`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-focus`, near-neutral, never pure black or coloured. Fonts `--sans`, `--mono`; easing `--ease`.\n\n| Class | What it gives you |\n| --- | --- |\n| `page` | the centred content column (max 1200px) with the page gutters |\n| `stack`, `row` | a vertical flex column with a 16px gap; a wrapping, centred horizontal row with a 12px gap |\n| `grid-cards` | the responsive card grid (auto-fill, 280px minimum, 24px gap) |\n| `card`, `card-hover` | a white surface with border, radius, shadow and 20px padding; add `card-hover` only to a card that is itself a click target |\n| `btn`, plus `btn-primary`, `btn-accent`, `btn-danger` or `btn-ghost`; sizes `btn-sm`, `btn-icon` | buttons: a plain `btn` is the secondary one, `btn-primary` is ink, `btn-accent` is orange |\n| `chip`, plus `chip-live`, `chip-idle`, `chip-warning` or `chip-danger` | pills for tags and states: `chip-live` is blue with a haloed dot, `chip-idle` has a plain grey dot |\n| `alert`, plus `alert-status`, `alert-warning` or `alert-danger` | notices: `alert-status` is blue, for what is true (saved, connected, done) |\n| `field` around a label, a control and an optional `hint` or `error` | a form field |\n| `tabs` around `tab` buttons, the current one with `aria-selected="true"` | tabs, the current one underlined in orange |\n| `table-wrap` around a table; `num` on number cells | a data table in a framed scrolling box, with mono column labels on a sunken header row |\n| `empty` holding an `empty-title`, a sentence and a button | an empty state |\n| `display`, `lede`, `eyebrow` | the display heading, the lede sentence under it, and the mono micro-label |\n| `inverted` | an ink panel with white mono type |\n| `grid-bg` | the signature backdrop: a fixed, faded 28px ink grid behind the page |\n| `muted`, `mono`, `num`, `sr-only` | muted text, mono type, tabular digits, screen-reader-only text |\n\n## Typography\n\n- The stylesheet sets the body in `--sans` (Inter, falling back to the system\'s sans) and code in `--mono` (JetBrains Mono, falling back to the system\'s). Both degrade cleanly. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px in `--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `display`, tight and heavy, not a big soft heading.\n- **Mono micro-labels** are the other signature: `eyebrow`, for section labels, table column headers, timestamps and counts. The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `num`.\n\n## Surfaces & layout\n\n- The page ground is `--paper`; content sits on `card`s.\n- Give a page an **editorial header**: an `eyebrow` (optionally `LABEL · 04` with the separator in `--action`), then a `display` heading, then one `lede` sentence, then a `row` of small `chip`s. Follow it with an `<hr>`.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): a `grid-cards` grid inside a `page` column.\n- Data-dense apps (tables, admin, finance): a flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop: an empty `<div class="grid-bg"></div>` as the body\'s first child.\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `inverted`.\n\n## Components\n\n- Buttons: `btn-primary` (ink) is the usual main action. Use **at most one** `btn-accent` (orange) per view, for its single primary call to action; a second one makes both meaningless. Everything else is a plain `btn`, or `btn-ghost` in toolbars.\n- Danger: `btn-danger` for a destructive action, which the page confirms before it acts.\n- Inputs and selects need no class: the stylesheet gives them the aero look, a 10px radius matching the buttons\', and an orange focus ring. Never put a pill button next to an input; pills are reserved for chips.\n- Chips: neutral `chip` for tags; `chip-live` for live, active, connected; `chip-idle` for the inactive counterpart.\n- Tables: `table-wrap`, with `eyebrow`-style column labels already applied to `<th>`.\n- Modals: a `<dialog>` opened with `showModal()`. The stylesheet draws it and its blurred backdrop; Escape closes it natively, and a click on the backdrop should close it too.\n- Empty states: `empty`, with one primary action.\n\n## Logo & favicon\n\nWhen one mark serves as both the favicon and an in-page logo, define the SVG **once** — never a hardcoded `data:image/svg+xml` in `<head>` plus a separate inline `<svg>` in the body. The two copies drift, and the stale one is always the one you are not looking at.\n\n1. Define it once as a hidden `<symbol>` at the top of `<body>`:\n\n```html\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n  <symbol id="logo" viewBox="0 0 32 32"><!-- paths --></symbol>\n</svg>\n```\n\n2. Draw it in the page with `<use>`, sized in CSS — repeat it as often as you like, it costs nothing:\n\n```html\n<svg class="logo" aria-hidden="true"><use href="#logo"/></svg>\n```\n\n3. Build the favicon from that same symbol on load. A `<link rel="icon">` cannot point at an in-document `#id`, so serialize the symbol into a data URI:\n\n```html\n<script>\n  const sym = document.getElementById(\'logo\');\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${sym.getAttribute(\'viewBox\')}">${sym.innerHTML}</svg>`;\n  document.head.append(Object.assign(document.createElement(\'link\'), {\n    rel: \'icon\', href: \'data:image/svg+xml,\' + encodeURIComponent(svg),\n  }));\n<\/script>\n```\n\nThe favicon renders in its own isolated document: `currentColor`, `var(--ink)`, `var(--action)` and the page stylesheet do **not** reach it. Give the symbol\'s shapes literal colors (`fill="#0B0B0B"`, `fill="#D85A30"`), or the tab icon comes out a flat black silhouette with the accent gone.\n\n## Motion & polish\n\n- Transitions ≤ 250ms with `var(--ease)`; only transform/opacity/color — no layout-thrashing animations.\n- Lift only cards that are themselves click targets (`card-hover`). Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` in any animation you add: disable drifting and entrance animations and pulsing dots.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas. A game\'s play area is the one exception: the world inside it may be dark, while the page around it stays light.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',$e=`# aero-database: persistent storage for aero pages

Every aero page gets its own database, served by aero itself at
\`/api/db/{page}/...\` — **no Firebase config, no API keys, no external SDK**.
Auth rides the visitor's existing aero cookie (or an automatic anonymous
guest cookie), so there is nothing to configure inside the page.

Load this skill whenever the user wants an app that **stores data**: to-do
lists, sign-up sheets, polls, leaderboards, comment walls, small games with
saved state, etc.

## How to use it in a generated page

Include the client and bind to the current page:

\`\`\`html
<script src="/aero-db.js"><\/script>
<script>
  const db = AeroDB.current(); // infers the page from its /p/{slug} URL
  const todos = db.table('todos');
<\/script>
\`\`\`

API (all methods return Promises; rows are \`{id, data, createTime, updateTime}\`):

\`\`\`js
await todos.add({ title: 'buy milk', done: false });   // create, auto id
await todos.get(id);                                   // one row or null
await todos.list({                                     // query
  eq: { done: false },      // equality filters
  mine: true,               // only rows THIS visitor created
  orderBy: '-createTime',   // '-' = descending (see Query limits below)
  limit: 50, offset: 0,
});
await todos.set(id, { title: 'x', done: true });       // full replace
await todos.patch(id, { done: true });                 // merge fields
await todos.delete(id);
await db.whoami();          // { kind: 'user'|'guest', id }
\`\`\`

Geo tables (configured with \`geo: true\`, see below) additionally support
"near a point" queries:

\`\`\`js
await spots.list({
  near: { lat: 1.3521, lng: 103.8198, radiusMeters: 500 },
  limit: 50,
});
// → rows within 500 m, NEAREST FIRST, each with row._distanceMeters
\`\`\`

Every row is stamped server-side with \`_owner\` (the creator's email, or an
anonymous per-page id for guests). You can read it, but never set it —
use it to show "your posts" or attribute entries.

## An app's rows are people's work: never wipe them

Once an app is published, its tables hold what people typed into it, and
every change you make to the page's code runs against those rows the next
time anyone opens the app. The preview cannot show you what a change does to
them, because its tables are simulated and start empty (see "Constraints and
gotchas" below). Think it through before you change anything that reads,
writes or seeds data, and keep to these rules:

- **Never delete, clear, reset or overwrite rows when the page loads.** No
  "data version" in the code that wipes the tables and reloads them when it
  changes, no clear-then-reseed, no \`set()\` or \`delete()\` over rows that
  already exist. An app built this way deletes every row its users entered
  the first time someone opens it after a publish.
- **Seed only an empty table.** Starter or sample rows baked into the page
  may be written only when a \`list()\` that succeeded found no rows at all. A
  read that failed is not an empty table: seeding after one writes a second
  copy of every row into a table in use. To bring new items into a table in
  use, read every row first with \`listAll\` below (one \`list()\` returns at
  most 200), add only the items that are missing, matched by a stable key,
  and leave every row already there as it is, including fields people have
  edited.
- **Use stable ids.** Let \`add()\` make the id, or derive it from something
  that never changes, such as a code or a reference number. Never use a
  position in a list (\`'item-' + index\`): inserting one item shifts every
  later id onto a different row.
- **Never rename a table or a field that holds data.** The old rows stay
  under the old name and the app looks empty. Keep the old name, or read
  both.
- **Check before a risky change, and ask.** Call \`database {op:
  'list_tables'}\` first: each table's \`rows\` is how many rows it holds
  (\`null\`, with \`rows_error\`, when the count failed: then you don't know, so
  treat the table as holding data). If what the user asks for would delete or
  rewrite rows (starting fresh, a reimport that replaces a list, dropping a
  table, changing what a row means), tell them how many rows it affects and
  wait for their go-ahead before you write the code.
- **Rows that are lost stay lost.** Aero has no way to restore a table, so
  these rules are the only protection. If rows are gone anyway, tell the user
  at once and plainly; never try to rebuild them from what the page shows or
  what you remember, which would pass guesses off as people's data.

Every row of a table, for deciding what is already there:

\`\`\`js
// The API clamps an offset above 10,000 to 10,000, so the loop stops there by itself
// rather than reading the same page forever: up to 10,200 rows.
async function listAll(table) {
  const all = [];
  for (let offset = 0; offset <= 10000; offset += 200) {
    const page = await table.list({ limit: 200, offset });
    all.push(...page);
    if (page.length < 200) break;
  }
  return all;
}
\`\`\`

## Access model — IMPORTANT, configure it YOURSELF with the \`database\` tool

Who can do what is configured **per table**. Do not ask the user to do
this — most users don't know what a database or a permission is. After
building (or changing) a data-backed page, call the \`database\` tool:

- \`{op: 'configure_table', table, read_access, write_access, geo?}\` —
  creates the table if needed and sets its access in one call. \`geo: true\`
  makes it a location table (see "Geo tables" below); include it on EVERY
  configure_table call for that table — omitting it resets the flag.
- \`{op: 'list_tables'}\` — check current state first when unsure; each
  table comes with \`rows\`, how many rows it holds
- \`{op: 'set_grant', email, grant_class: 'viewer'|'editor'}\` /
  \`{op: 'remove_grant', email}\` — when the user names specific people

Then just tell the user in plain words what you set up (e.g. "anyone with
the link can submit, only you can see the responses"). Fall back to
describing manual steps (Apps → page → Database panel) only if the tool
reports the page isn't published yet or the user isn't the owner.

Writes by the owner auto-create a table as fully private; anything
involving other people needs these flags:

| Table setting | Effect |
|---|---|
| read: \`private\` | only the owner + people granted viewer/editor |
| read: \`authed\` | any signed-in aero user, no grant needed |
| read: \`public\` | anyone with the page link can read |
| write: \`none\` | only the owner + editors |
| write: \`own\` | anyone may ADD rows and edit/delete THEIR OWN rows |
| write: \`any\` | anyone may edit ANY row (shared boards — vandalism-proof it yourself) |
| write: \`authed-own\` | \`own\`, restricted to signed-in aero users |
| write: \`authed-any\` | \`any\`, restricted to signed-in aero users |

"Anyone" above really does mean anyone: an anonymous visitor gets a guest
identity automatically and satisfies \`public\`/\`own\`/\`any\` exactly like a
signed-in user does.

These flags control how open a table is **within a page the visitor can
already reach** — they don't override page visibility. On a *private* page
everyone below viewer is refused before the table flags are even consulted,
so \`authed\` and \`public\` admit nobody new there. A members-only app wants a
public page with \`authed*\` tables, not a private page.

**Members-only apps: use the \`authed\` values, not a login check in the
page.** They are enforced by the API — an anonymous visitor gets a 401 no
matter what the page's JavaScript does. A \`whoami()\`-and-redirect gate is
just UX: the tables still have to be \`own\`/\`any\` for the app to work, so
anyone can skip the page and write straight to the API. On an \`authed\`
table, catch the 401 and send the visitor to
\`/login?next=\` + \`encodeURIComponent(location.pathname)\`.

Pick per use case:
- **Poll / opinion box / sign-up**: read \`public\` (or \`private\` for a
  blind box), write \`own\`.
- **Per-player game state / personal notes**: read \`public\`, write \`own\`,
  always query with \`mine: true\`.
- **Shared collaborative state** (one board everyone mutates): write \`any\`.
- **Owner-curated content** (read-only catalog): read \`public\`, write \`none\`.
- **Members-only** (any aero user, no anonymous visitors): read \`authed\`,
  write \`authed-own\` — or read \`public\` + write \`authed-any\` for something
  open to browse but contributable only by signed-in users.

The owner can also grant specific people \`viewer\` or \`editor\` on the whole
page database (Database tab → Grants). Grants only ever ADD rights on top
of the table's public flags: a \`viewer\` can read private tables, and — like
any visitor — can still write to tables marked \`own\`/\`any\`. To make a
table read-only for everyone but the owner/editors, set write: \`none\`.

**After generating a data-backed page, ALWAYS configure every table it
uses via the \`database\` tool before finishing your reply** — until access
is set, other visitors get 401/403. If the page isn't published yet, tell
the user to publish, and configure the tables in your next turn.

## Constraints and gotchas

- **Signed-in visitors must have an aero account** for grant-based access;
  public tables work for anyone, including fully anonymous visitors.
- A \`401\` means the visitor isn't signed in and the table isn't open to
  guests (\`private\` or an \`authed\` value); a \`403\` means signed in but no
  access. Handle both with a friendly message — on \`authed\` tables the 401
  is the expected "please sign in" path, so link to \`/login?next=…\`.
- **Queries are equality + one orderBy only** (no ranges, no OR — the one
  exception is \`near\` on geo tables, see below). Combining \`eq\` filters
  WITH \`orderBy\` on a *different* field may fail with an index error —
  prefer filtering OR ordering, or sort client-side after fetching.
- \`mine: true\` + \`orderBy\` counts as filter+order (same caveat).
- No realtime: poll with \`setInterval\` (5s+ is polite) if the app needs
  live-ish updates.
- Rows are JSON objects, max 256 KB. Table names: \`^[a-z0-9][a-z0-9_-]{0,62}$\`
  (\`tables\`, \`grants\`, \`whoami\` are reserved).
- \`AeroDB\` works on the published page and in the builder preview. On the
  published page, \`AeroDB.current()\` binds to the page whose \`/p/{slug}\` URL
  it was loaded at, which holds after the app moves its own address with
  \`history.pushState\` (though a reload of a pushed path finds no page: keep
  routes in the query string or the \`#hash\`), and
  \`AeroDB.page('alias-or-uuid')\` to a page by its alias or uuid.
  In the preview every table is simulated, whichever you bind to: it lives in
  memory, starts empty, and is cleared whenever the preview reloads (every
  edit), and \`whoami()\` answers \`{ kind: 'user', id: 'you (preview)', ... }\`.
  Use it to try the page's flows; write no preview-only branch for it. The
  real tables (configured above) are what the published page uses, so their
  access settings, and a geo table's \`geo: true\`, are only tested there.
  An empty preview table also hides what your code does to a table that
  already holds rows: that is what "never wipe them" above is for.
- Guest identity is a browser cookie: clearing cookies makes a visitor a
  new guest (their old rows stay, editable by no one but editors/owner).

## Geo tables — "show me what's near me"

Configure the table with \`geo: true\`, store coordinates as **top-level
numeric \`lat\` and \`lng\` fields**, and query with \`near\`:

- **Writes must carry \`lat\` and \`lng\` together, or neither.** A write with
  exactly one of them is rejected (400) — the server derives a private
  index field from the pair, so they can only change in lockstep. This
  includes \`patch()\`: to move a pin, patch both. Rows without coordinates
  are allowed; they just never match \`near\` queries.
- \`lat\` must be within ±90, \`lng\` within ±180, both plain numbers (not
  nested in an object).
- \`near: {lat, lng, radiusMeters}\` returns rows within the radius sorted
  nearest-first, each with a top-level \`_distanceMeters\`. \`radiusMeters\`
  is capped at 50,000 (50 km). **\`offset\` is not supported with \`near\`**
  (it 400s) — to see different rows, change the radius.
- **\`near\` cannot combine with \`eq\`, \`mine\`, or \`orderBy\`** — it 400s.
  The result set is already small and distance-sorted; filter or re-sort
  it client-side instead.
- Rows written **before** the table had \`geo: true\` are invisible to
  \`near\` until they are next written (the index field is computed on
  write). Enable geo when creating the table, not as an afterthought.
- The response may carry \`partial: true\` (surfaced on the returned array
  as \`rows.partial\`) when there are more rows near the point than one call
  may read — a very busy area at a wide radius. Some rows inside the radius
  are then missing — **possibly nearer ones than those returned**. Never
  label a partial result "the nearest N"; show what you got and offer a
  smaller radius.
- To clear a pin you must \`set()\` the row without \`lat\`/\`lng\` — patching
  them to \`null\` is rejected, since they must always be a valid pair.

### Location privacy — think before making a geo table public

Rows carry \`_owner\` (a signed-in visitor's **email address**), and \`near\`
lets anyone who can read the table ask "what is at this spot".

- Pinning **places** (parking spots, water fountains, shops) on a
  \`read_access: 'public'\` table is fine — that's the example below.
- Anything derived from a **visitor's own live location** (check-ins,
  "who's nearby", delivery tracking) should NOT be a public geo table:
  it publishes precise coordinates next to identifiable emails, queryable
  by any anonymous visitor. Use \`read_access: 'private'\`, or round the
  coordinates to ~3 decimals (about 100 m) before storing them.
- When in doubt, ask the user before making a location table public.

## Worked example — "QR codes near me" (crowdsourced pins)

Public is right here because the stored coordinate is a **fixed sticker's**
location, not a person's — the device position is only used to pick the
spot being pinned, and to search. A "where is everyone right now" app is
the other case in the warning above.

\`\`\`html
<script src="/aero-db.js"><\/script>
<script>
  const spots = AeroDB.current().table('spots');

  function showNearby() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const rows = await spots.list({
        near: { lat: pos.coords.latitude, lng: pos.coords.longitude,
                radiusMeters: 800 },
        limit: 20,
      });
      // Nearest first; row._distanceMeters is already computed.
      render(rows.map(r => r.data.code + ' — ' +
                           Math.round(r._distanceMeters) + ' m'));
      if (rows.partial) note('Busy area — some spots may be missing. Try a smaller radius.');
    });
  }

  async function addSpot(code) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      await spots.add({ code,
        lat: pos.coords.latitude, lng: pos.coords.longitude });
      showNearby();
    });
  }

  showNearby();
<\/script>
\`\`\`

Then configure it yourself (note \`geo: true\`):

\`\`\`
database {op: 'configure_table', table: 'spots', read_access: 'public', write_access: 'own', geo: true}
\`\`\`

## Minimal worked example — anonymous feedback wall

\`\`\`html
<script src="/aero-db.js"><\/script>
<script>
  const wall = AeroDB.current().table('posts');

  async function refresh() {
    const rows = await wall.list({ orderBy: '-createTime', limit: 100 });
    render(rows); // your DOM code; use row.id as the key
  }

  async function submit(text) {
    try {
      await wall.add({ text });
      await refresh();
    } catch (e) {
      alert(e.status === 401 ? 'This wall is not open to the public yet.' : e.message);
    }
  }

  refresh();
  setInterval(refresh, 10000);
<\/script>
\`\`\`

Then configure it yourself:

\`\`\`
database {op: 'configure_table', table: 'posts', read_access: 'public', write_access: 'own'}
\`\`\`

…and tell the user: *"Anyone with the link can post and edit their own
messages; only you can remove other people's posts."*
`,Xe=`# Aero HTML Slides Style Guide

Use this skill whenever the user asks to generate slides, a presentation, a slide deck, or pitches in HTML. It outlines the exact visual layout catalogue, brand assets, and interactive scripting needed to produce highly polished, self-contained aero-branded presentations.

---

## 1. Brand Tokens & Design Mixture

The deck blends the aero brand identity with modern application design. The identity has exactly **two grounds and one accent**: warm paper, ink, and the orange from the logo's crossbar. Everything else is a neutral. **Paste this complete \`:root\` block verbatim into every deck** — every token referenced later in this guide is defined here; never invent ad-hoc colors or reference an undefined variable:

\`\`\`css
:root {
  /* Ink — near-black, from the logo tile */
  --ink: #0B0B0B;         /* dark slides, headings, solid bars */
  --ink-700: #26262A;     /* gradient partner on dark slides */
  --ink-500: #52525B;
  --ink-300: #A1A1AA;

  /* Action (orange) — the single accent: rails, stripes, indicators */
  --action: #D85A30;
  --action-700: #C24E27;
  --action-300: #ECA88F;  /* borders on tinted surfaces */
  --action-soft: #FDF3EF; /* tinted background */

  /* Status (blue) — reserved for things that are TRUE (live, shipped, passing) */
  --status: #2E6BE6;
  --status-700: #1D4CA6;
  --status-300: #9DBAF7;
  --status-soft: #EFF4FE;

  /* Surfaces — warm paper against cool neutrals */
  --paper: #FCFCF9;       /* light slide background (warm) */
  --surface: #FFFFFF;     /* cards sitting on paper */
  --sunken: #FAFAF8;      /* table headers, footers, inset rows */
  --muted: #F4F4F5;       /* hover fills */

  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */
  --border: #E4E4E7;
  --border-strong: #D4D4D8;
  --fg: #0B0B0B;          /* default text */
  --fg-2: #52525B;        /* secondary copy */
  --fg-3: #71717A;        /* muted labels, eyebrows */

  --danger: #DC2626;  --warning: #D97706;

  /* Typography */
  --font-sans: Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace;

  /* Radii — 10px is the control radius; buttons and inputs must match */
  --r-xs: 6px;  --r-sm: 8px;  --r-md: 10px;  --r-lg: 16px;  --r-xl: 24px;

  /* Shadows — near-neutral ink, never pitch black and never colored */
  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);
  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);
  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);
  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);
}
\`\`\`

**Color discipline — the two rules that matter most:**

- **Orange is the only accent.** Brand stripes, underline rails, bullet markers, the progress bar, section numbers. In an app \`--action\` means "clickable"; a deck has nothing to click, so here it means "emphasis" — which makes restraint the whole game. One accent moment per slide.
- **Blue means true, never decorative.** Reserve \`--status\` for indicators asserting a fact: live, shipped, passing, connected. Never use it as a second accent, and never swap the two roles.

Two grounds only — \`--paper\` and \`--ink\`. There is no third background color: a slide that needs to feel different becomes an inverted ink panel, not a new hue. Never set body copy on an orange background.

Typography rules: display headings are tight and heavy — \`letter-spacing: -.04em; font-weight: 800; line-height: .95\`. Mono eyebrow labels are the other signature, and the wide tracking is what makes them read as instrument labels rather than shrunken body copy:

\`\`\`css
.eyebrow {
  font-family: var(--font-mono); font-size: .7rem; font-weight: 500;
  letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);
}
\`\`\`

Numbers in tables, metrics, and counters always use \`var(--font-mono)\` paired with \`font-variant-numeric: tabular-nums\`.

---

## 2. Interactive Navigation Engine (Pure HTML/CSS/JS)

The entire presentation is a **single HTML file** — one document, no build step, nothing to unzip. Ordinary external resources are fine; the deck is a web page, not an air-gapped artifact.

**First question: does a deck need this at all?** Slides are text, boxes, rules, and the occasional chart. Native HTML, CSS, and inline SVG cover all of it. Do not reach for a canvas/diagram/whiteboard engine, a 3D library, or an animation framework to lay out a bullet list — it bloats the file, slows the first paint, and buys nothing over a \`<div>\`. The best dependency is the one you didn't add.

**Second question: what happens when the request fails?** A deck is presented live, on a network you don't control, sometimes with no network at all. Sort by blast radius:

| Failure mode | Verdict |
|---|---|
| **Invisible** — web fonts. Blocked or offline, text falls back to the system stack and nothing else changes. | Fine, load freely |
| **Cosmetic** — a decorative image or icon set, where a missing box is survivable. | Acceptable with a sensible fallback |
| **Catastrophic** — anything the layout or navigation needs: a CSS framework, the deck's own JS, the logo. | Must be inlined |

That last row is the one hard rule. No Tailwind (or any utility CSS) from a CDN — a blocked stylesheet leaves you presenting unstyled HTML in front of a room. The navigation script in section 5 and the logo \`<symbol>\` in section 3 are inlined for the same reason.

Fonts, being the invisible-failure case, load from jsdelivr — reachable on locked-down corporate networks where other CDNs are not:

\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/index.min.css">
\`\`\`

If a chart genuinely needs a plotting library, inline the minified source into a \`<script>\` rather than linking it — and consider first whether a hand-written SVG bar or line chart would be smaller and sharper. It usually is.

**Mandatory marker**: the root wrapper MUST keep the class name \`deck-container\`, and each slide MUST keep the \`slide\` base class — the builder uses these markers to recognize the document as a slide deck on follow-up edits and re-load this skill. Never rename them.

The skeleton structure is:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Presentation Title]</title>
  <!-- Fonts: the only permitted external request. Degrades to system fonts. -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/jetbrains-mono@5/index.min.css">
  <style>
    /* Insert tokens, resets, layout definitions, slide controls, print layouts */
  </style>
</head>
<body>
  <div class="deck-container">
    <!-- Click Hotspots (Left 8%, Right 8%) -->
    <div class="hotspot hotspot--prev" onclick="changeSlide(-1)"></div>
    <div class="hotspot hotspot--next" onclick="changeSlide(1)"></div>

    <!-- SLIDES GO HERE -->
    <div class="slide slide--dark active" data-layout="dark" id="slide-1">...</div>
    <div class="slide slide--light" data-layout="light" id="slide-2">...</div>
    
    <!-- Control overlay (Glass backdrop-filter) -->
    <div class="control-overlay dark-slide" id="control-panel">
      <button class="control-btn" onclick="changeSlide(-1)">&lt;</button>
      <div class="slide-counter" id="counter-text">1 / [Total]</div>
      <button class="control-btn" onclick="changeSlide(1)">&gt;</button>
      <button class="control-btn" onclick="togglePlay()" id="play-btn">▶</button>
      <button class="control-btn" onclick="toggleFullscreen()">⛶</button>
    </div>

    <!-- Bottom progress rail -->
    <div class="progress-rail"><div class="progress-bar" id="progress-indicator"></div></div>
  </div>
  <script>
    /* Embed arrow/space/page navigation key listeners, swipe listener, URL hash sync, autoplay */
  <\/script>
</body>
</html>
\`\`\`

---

## 3. Brand Asset: The Aero Logo

The logo is a dependency, not a nicety — a deck missing its mark looks broken in a way missing fonts never do — so it is inlined, never fetched. Inline it **exactly once** as a hidden \`<symbol>\` at the top of \`<body>\`, then reference it everywhere with \`<use>\`. The mark is a rounded tile carrying an "A" crossed by an orange bar. It ships in two variants which are **not** recolorings of one another — \`currentColor\` cannot swap between them, so both must be defined:

| Variant | Composition | Use on |
|---|---|---|
| \`aero-logo\` | solid ink tile, white "A" | \`--ink\` slides (title, divider, closing) |
| \`aero-logo-invert\` | hairline outlined tile, ink "A" | \`--paper\` slides (agenda, content, tables) |

On an ink slide the solid tile blends into the background and the white "A" plus orange crossbar carry the mark — that is intended, not a bug. The orange crossbar is byte-identical in both variants; it is the one element that never changes.

### A. Define once (hidden, first child of \`<body>\`)
\`\`\`xml
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <!-- Solid ink tile, white "A" — for --ink slides -->
  <symbol id="aero-logo" viewBox="0 0 64 64">
    <path d="M50 0H14C6.26801 0 0 6.26801 0 14V50C0 57.732 6.26801 64 14 64H50C57.732 64 64 57.732 64 50V14C64 6.26801 57.732 0 50 0Z" fill="#0B0B0B"/>
    <path d="M20 37H52" fill="none" stroke="#D85A30" stroke-width="5" stroke-linecap="round"/>
    <path d="M32 16L17 48" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    <path d="M32 16L47 48" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
  </symbol>
  <!-- Hairline tile, ink "A" — for --paper slides -->
  <symbol id="aero-logo-invert" viewBox="0 0 65 65">
    <path d="M50.25 0.25H14.25C6.51801 0.25 0.25 6.51801 0.25 14.25V50.25C0.25 57.982 6.51801 64.25 14.25 64.25H50.25C57.982 64.25 64.25 57.982 64.25 50.25V14.25C64.25 6.51801 57.982 0.25 50.25 0.25Z" fill="none" stroke="black" stroke-width="0.5"/>
    <path d="M20.25 37.25H52.25" fill="none" stroke="#D85A30" stroke-width="5" stroke-linecap="round"/>
    <path d="M32.25 16.25L17.25 48.25" fill="none" stroke="#0B0B0B" stroke-width="5" stroke-linecap="round"/>
    <path d="M32.25 16.25L47.25 48.25" fill="none" stroke="#0B0B0B" stroke-width="5" stroke-linecap="round"/>
  </symbol>
</svg>
\`\`\`

Every path carries an explicit \`fill\` — including the stroke-only ones. This matters: in the standalone \`.svg\` files the \`fill="none"\` sits on the root \`<svg>\` element and cascades down, but that root does not come along when the paths move into a \`<symbol>\`. Drop the explicit \`fill="none"\` and SVG's default \`fill: black\` takes over, filling the outlined tile solid black.

### B. Reference everywhere with \`<use>\`
\`\`\`html
<!-- On --ink slides (title, divider, closing): -->
<svg width="40" height="40"><use href="#aero-logo"/></svg>

<!-- On --paper slides (agenda, content, tables): -->
<svg width="40" height="40"><use href="#aero-logo-invert"/></svg>
\`\`\`

Each \`<symbol>\` carries its own \`viewBox\` — 64 for the solid tile, 65 for the outlined one, which needs the extra half-pixel of margin so its hairline stroke isn't clipped at the edges. Because the symbol supplies it, the outer \`<svg>\` needs only \`width\` and \`height\`; do not copy a \`viewBox\` onto it, or the two variants will scale differently.

The mark is square (1:1) — size it with equal width and height, and never stretch it to a wordmark's proportions. Never paste a \`<symbol>\` more than once, and never duplicate the raw paths per slide: every slide header, footer, and decoration must go through \`<use>\`.

---

## 4. Visual Layout Catalogue

Compose presentations using a structural sequence of layout pages. Every slide sits on one of the two grounds — \`--paper\` or \`--ink\` — and carries at most one orange accent moment.

### Layout 0 — Title Slide (Class: \`slide--dark\` + custom grid)
Full-bleed \`--ink\` slide. Used as Slide 1 ONLY.
* Left Panel (~65% width):
  * **Brand Stripe**: \`width: 4.5rem; height: 6px; background-color: var(--action); border-radius: 99px; margin-bottom: 2rem;\`
  * **Main Title**: \`font-size: 3.4rem; font-weight: 800; letter-spacing: -.04em; line-height: .95; color: #fff;\`
  * **Subtitle**: \`font-size: 1.4rem; color: var(--action); font-weight: 500;\`
  * **Metadata (Presenter/Date)**: \`.eyebrow\` at bottom left, \`color: rgba(255,255,255,.55)\`.
* Right Panel (~30% width):
  * Background: \`background: linear-gradient(135deg, var(--ink-700) 0%, #000000 100%);\`
  * Left-bordered with a \`4px solid var(--action)\` line.
  * Contains \`<use href="#aero-logo"/>\` centered — against ink the tile recedes and the white "A" carries the panel.

### Layout 7 — Agenda Slide (Class: \`slide--light\`)
Paper slide mapping the presentation sections.
* **Header**: \`--paper\` ground, ink title, an orange divider rail beneath it.
* **Body**: an \`.agenda-grid\` of \`.agenda-item\` cards:
  * \`.agenda-num\` circle: \`width: 2.8rem; height: 2.8rem; border-radius: 50%; background-color: var(--ink); border: 3px solid var(--action); color: #fff; font-family: var(--font-mono); display: flex; align-items: center; justify-content: center;\`
  * \`.agenda-text\`: bold ink label, \`font-size: 1.3rem;\`.

### Layout 2 — Title and Content (Class: \`slide--light\` + list)
General content or detail page.
* **Header**: ink title text, orange underline rail.
* **Numbered section rule** (optional, the editorial signature): \`001 ──── Section title ──────── 4 TOTAL\`, the number in mono bold \`var(--fg-3)\` and a \`1px var(--border)\` hairline filling the gap.
* **Body**: \`.bullet-list\`:
  * \`list-style: none;\`
  * \`li\`: \`position: relative; padding-left: 1.8rem; font-size: 1.3rem; font-weight: 500; color: var(--fg);\`
  * Custom bullet \`.bullet-list li::before\`: a small square — \`width: 10px; height: 10px; background-color: var(--action); border-radius: 3px;\`
  * Sub-bullets (\`ul li\`): muted \`var(--fg-3)\` labels with smaller circular points.

### Layout 4 — Two Content (Class: \`slide--light\` + grid)
Double column comparison card grid (comparisons, pros/cons, metrics).
* **Body**: \`display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;\`
* **Column Cards** (\`.column-card\`):
  * \`background: var(--surface); border: 1px solid var(--border); border-radius: var(--r-lg);\`
  * Hover: \`transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--border-strong);\`
  * Headings (\`h3\`): \`font-size: 1.4rem; color: var(--fg); font-weight: 700;\` paired with standard SVG outline icons.
  * A card stating something *live* may carry a \`--status\` dot with a soft halo (\`box-shadow: 0 0 0 3px rgba(46,107,230,.16)\`) — this is the one place blue belongs.

### Layout 5 — Structured Data Table (Class: \`slide--light\` + table)
Tabular data matrices.
* **Body**: \`.data-table\` styled natively:
  * \`border-collapse: separate; border-spacing: 0; border: 1px solid var(--border); border-radius: var(--r-md); overflow: hidden;\`
  * Header cells (\`th\`): \`background-color: var(--sunken); border-bottom: 1px solid var(--border); padding: 1.1rem 1.5rem;\` with \`.eyebrow\` column labels at \`.65rem\`.
  * Data rows (\`td\`): \`background-color: var(--surface); border-bottom: 1px solid var(--border);\` with zebra striping via \`tr:nth-child(even) td { background-color: var(--sunken); }\`
  * Metrics and figures: \`text-align: right\` in \`var(--font-mono)\` with \`font-variant-numeric: tabular-nums\`.

### Layout 12 — Divider / Transition Slide (Class: \`slide--divider\`)
Full-bleed \`--ink\` divider used between sections to chunk the deck. It is an inverted panel rather than a third color — the break registers because the ground flips, and the ghost logo makes it unmistakably aero.
* Background: solid \`var(--ink)\`, optionally overlaid with a 28px grid of \`rgba(255,255,255,.12)\` hairlines.
* Content:
  * \`.eyebrow\` label \`"NEXT SECTION"\` in \`var(--action)\`.
  * Massive heading: \`font-size: 3.2rem; font-weight: 800; letter-spacing: -.04em; color: #fff;\`
* Right Panel decoration: an oversized \`<use href="#aero-logo"/>\` positioned absolute at \`right: 4.5rem; opacity: .15;\`.

### Layout 14 — Final Closing Slide (Class: \`slide--dark\`)
Closing thank-you page.
* Background: solid \`var(--ink)\`.
* Content:
  * Large centered white \`"Thank You"\` heading (\`font-size: 4rem; font-weight: 800; letter-spacing: -.04em;\`).
  * Sub-branding line in \`var(--action)\`.
  * Contact and link lines in \`rgba(255,255,255,.7)\`.
  * Micro-disclaimer footer: \`border-top: 1px solid rgba(255,255,255,.1); padding-top: 1.5rem;\` set as an \`.eyebrow\`.

---

## 5. Scripted Interactivity Engine

Every presentation generated **must embed this exact Vanilla Javascript script** inside body to handle navigation and full-screen logic natively:

\`\`\`html
<script>
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIdx = 0;
  let playInterval = null;

  function init() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#')) {
      const page = parseInt(hash.substring(1));
      if (page >= 1 && page <= totalSlides) {
        currentIdx = page - 1;
      }
    }
    showSlide(currentIdx);
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Update Progress Indicator
    const percent = ((index + 1) / totalSlides) * 100;
    document.getElementById('progress-indicator').style.width = percent + '%';

    // Update Counter Text
    document.getElementById('counter-text').innerText = \`\${index + 1} / \${totalSlides}\`;

    // Adjust Control panel theme based on slide layout
    const currentSlide = slides[index];
    const layout = currentSlide.getAttribute('data-layout');
    const controlPanel = document.getElementById('control-panel');
    if (layout === 'dark' || layout === 'divider') {
      controlPanel.classList.add('dark-slide');
    } else {
      controlPanel.classList.remove('dark-slide');
    }

    // Set URL Hash
    window.location.hash = index + 1;
  }

  function changeSlide(direction) {
    currentIdx = (currentIdx + direction + totalSlides) % totalSlides;
    showSlide(currentIdx);
  }

  function toggleFullscreen() {
    const container = document.querySelector('.deck-container');
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error(\`Error attempting to enable full-screen mode: \${err.message}\`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  function togglePlay() {
    const playBtn = document.getElementById('play-btn');
    if (playInterval === null) {
      playInterval = setInterval(() => { changeSlide(1); }, 4000);
      playBtn.innerText = "⏸";
    } else {
      clearInterval(playInterval);
      playInterval = null;
      playBtn.innerText = "▶";
    }
  }

  // Keyboard Event Handlers
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case ' ':
      case 'Enter':
      case 'PageDown':
        e.preventDefault();
        changeSlide(1);
        break;
      case 'ArrowLeft':
      case 'Backspace':
      case 'PageUp':
        e.preventDefault();
        changeSlide(-1);
        break;
      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;
    }
  });

  // Touch Swipe Handler (Left/Right Swipes)
  let touchStartX = 0;
  let touchEndX = 0;
  const container = document.querySelector('.deck-container');
  
  container.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  container.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) changeSlide(1);
    if (touchEndX > touchStartX + swipeThreshold) changeSlide(-1);
  }

  window.onload = init;
<\/script>
\`\`\`

---

## 6. Output Directive (Aero's Code Generation Contract)

When the user asks you to create a slide presentation:
1. **Act autonomously**: Never ask for design assets or templates; everything you need is defined right here.
2. **Structure properly**: Build a balanced deck structure containing: Title Slide (Slide 1) → Agenda (Slide 2) → Content Layouts with Dividers before major changes → Structured Table slides where relevant → Final Closing slide (Last).
3. **Save completely self-contained**: Generate the slide file as a single self-contained HTML file using these rules. Suggest uploading it to the **aero-oops-wtf** portal (\`/{uuid_or_alias}\`) so the user can easily host their interactive deck!
`,Ye=`# aero-ai: calling AI models from inside an aero page

Aero pages can call AI models directly, served by aero itself at
\`/api/app-ai/...\` — **no API key, no config**. Every call runs as the
*visitor currently looking at the page*, on their own models (their
Antigravity models, and their Google Code Assist ones if they have Code
Assist) and their own quota — never the page author's. (\`AeroAI.decide\` is
the one exception, below.)

Load this skill whenever the page itself needs to call an LLM at runtime
(chat, generate-on-demand text/content, summarize visitor input, structured
extraction, etc.), or needs fast closed-set answers about something (sort,
route, tag, check or grade it: a yes/no, a pick from a list, a score) — NOT
for pages that were merely built by an AI; that's every aero page and needs
nothing from this skill.

## How to use it in a generated page

Include the client:

\`\`\`html
<script src="/aero-ai.js"><\/script>
\`\`\`

List available models, then generate:

\`\`\`js
const { models } = await AeroAI.models();          // string[]; models[0] is the visitor's default

const res = await AeroAI.generateContent({
  model: models[0],
  contents: 'Write a haiku about the ocean.',       // shorthand for a single user turn
});
console.log(res.text);
\`\`\`

Full request shape (multi-turn, system prompt, progressive rendering):

\`\`\`js
const res = await AeroAI.generateContent({
  model: models[0],
  systemInstruction: 'You are a terse, upbeat trivia host.',
  contents: [
    { role: 'user', parts: [{ text: 'Give me a science trivia question.' }] },
    { role: 'model', parts: [{ text: 'What planet has the most moons?' }] },
    { role: 'user', parts: [{ text: 'Saturn?' }] },
  ],
  onText: (delta) => appendToChatBubble(delta),     // optional: stream tokens as they arrive
});
// res: { text, parts, functionCalls, usageMetadata }
\`\`\`

\`AeroAI.generateContent\` is non-streaming from the caller's point of view —
it resolves once with the full result — but takes an optional \`onText\`
(and \`onThought\`) callback if you want to render tokens as they arrive
while still getting the final aggregated \`res\` at the end. If the answer
breaks off partway it rejects instead, with what arrived already passed to
\`onText\`: show the error, and don't keep the partial text as the answer.

## An assistant that can use the page: \`AeroAI.agent\`

\`AeroAI.agent(opts)\` is \`generateContent\` in a loop over the page's own
tools: the ones it offers AI agents through WebMCP (see the
\`aero-agent-tools\` skill). The model calls tools as it needs them, each
result goes back to it, and it resolves with the answer once the model stops
calling. Use it for a chat box that can act in the page ("add lunch, 12
dollars", "what did I spend on food?"), not for plain text generation.

\`\`\`js
let history = [];
async function send(text) {
  history.push({ role: 'user', parts: [{ text }] });
  const { models } = await AeroAI.models();
  const run = await AeroAI.agent({
    model: models[0],
    systemInstruction: 'You help the visitor keep this expense list. Use the tools to read and change it.',
    contents: history,
    onText: (delta) => appendToReply(delta),
    onToolCall: ({ name }) => showStatus(\`Using \${name}…\`),
  });
  history = run.contents;  // keeps the tool calls, so the next message has them
  return run.text;
}
\`\`\`

- \`opts\` takes what \`generateContent\` takes (\`model\`, \`contents\`,
  \`systemInstruction\`, \`generationConfig\`, \`onText\`, \`onThought\`), plus
  \`onToolCall({name, args})\` and \`onToolResult({name, args, result | error})\`
  for showing what it does, \`confirm\`, \`maxSteps\` (model rounds, default 10)
  and \`signal\`.
- It resolves \`{ text, contents, toolCalls }\`. Pass \`contents\` back as the
  next call's \`contents\`, with the visitor's new message added. \`stopped:
  'max_steps'\` means the model still wanted tools when it ran out of rounds.
- A tool marked \`consequentialHint\` asks the visitor first, with the
  browser's \`confirm()\` unless you pass \`confirm({ name, args, title,
  description })\` returning a boolean or a Promise of one, to ask in your
  own dialog. A no goes back to the model as the visitor's answer.
- A form tool without \`toolautosubmit\` fills the form and waits for the
  visitor to submit it, so show that state (\`onToolCall\`) rather than a
  spinner that never ends.
- It works in every browser: \`/aero-ai.js\` brings a stand-in for WebMCP
  where the browser has none. Load \`/aero-ai.js\` before the script that
  registers the page's tools.

## Fast decisions: \`AeroAI.decide\`

\`AeroAI.decide\` answers closed-set questions about one input in a single call
that usually takes well under a second: a yes/no (\`noul\`), a pick from a list
(\`choice\`), or a score on a rubric (\`score\`), each with probabilities. It runs
on Jev, a model that scores the options you give it and writes no text.

Use it when the page has to sort, route, tag, check or grade something: which
team a request goes to, whether a message is urgent, whether a form is
complete, how a review reads. Do not use it for anything that needs words back
(a summary, a reply, a value pulled out of a document): that is
\`generateContent\`.

It does not run on the visitor's models, so there is no \`model\` to pick and no
\`AeroAI.models()\` call first. It runs on a free tier that every aero page
shares: it costs the visitor nothing, but a page that calls in a loop can use
it up for the others, and opencode's free tier can run out for the day, after
which every call fails with a message that says so until it resets. The model
is free for a limited time. Call it on an action or a debounced input, never on
every keystroke.

\`\`\`js
const res = await AeroAI.decide({
  input: requestText, // a string, or an object or array of structured state
  questions: {
    team: {
      type: 'choice',
      instructions: 'Which team should handle this request?',
      criteria: {
        billing: 'Charges, invoices, refunds or payment problems.',
        shipping: 'Delivery delays or lost packages.',
        other: 'Anything else, or not enough detail to tell.',
      },
    },
    urgent: {
      type: 'noul',
      instructions: 'Does this request need action today?',
      criteria: {
        true: 'Something is broken now, or a deadline is today.',
        false: 'A question, a request for later, or something already fixed.',
      },
    },
    frustration: {
      type: 'score',
      instructions: 'How frustrated is the customer?',
      criteria: ['Calm', 'Frustrated', 'Very angry'],
    },
  },
});
const { team, urgent, frustration } = res.answers;
team.choice;         // the option with the highest probability, e.g. 'billing'
team.probabilities;  // one probability per option, adding up to about 1
urgent.noul;         // the probability of yes, from 0 to 1
frustration.score;   // the expected level, e.g. 1.7; probabilities and a legend come with it
\`\`\`

Rules:

- **Put the whole question in \`instructions\`.** A question's id is for your
  code and is never sent to the model, so write the complete question even when
  the id seems self-explanatory. Give every \`choice\` option a description (one
  without is read by its name alone), a yes/no \`criteria\` with \`true\` and
  \`false\` saying what counts as each, and make a score's levels concrete.
- **One snap judgment per question.** "Does this message convey urgency?" is a
  good question; "analyze this and decide what to do" is not. When a judgment
  rests on several factors, ask about each and combine the answers in your own
  code, so the weights are yours to change.
- **Read each kind of answer for what it is.**
  - A yes/no answers with \`noul\`, the probability of yes, and has no
    \`confidence\`: the value is it. Start at above 0.7 for yes and below 0.3 for
    no, and give the band between them an outcome of its own ("unsure")
    instead of rounding it to a side.
  - A \`choice\` always picks one option, even when none fits. Act on the
    probability of the option your code will act on (route to billing only
    when \`team.probabilities.billing\` is above 0.9, say), not on \`confidence\`,
    and add an \`other\` option, or a companion yes/no ("does any of these
    fit?"), whenever the list may not cover every input.
  - A \`score\` is the expected level and can fall between two (1.7). When the
    decision hangs on one level, use that level's probability. Look at
    \`confidence\` first when you need to know the answer is settled at all.
  - An answer can also be \`{ type: 'refusal', message }\`, for a question the
    model declined: check \`type\` before reading a value.
- **The input is one thing; ask everything about it in one call.** A string
  suits a message or passage. For related parts (a ticket, an order, a policy)
  pass an object with named fields, and name a part in a question with
  backticks and a path: \`\`Does \`ticket.messages[0].text\` ask for a refund?\`\`.
  To judge 50 items, make 50 calls, a few at a time, not one call holding all
  50.
- **Limits.** Text only: there is no way to send an image. The input plus any
  one question must fit in about 32,000 tokens (roughly 120,000 characters),
  and the input plus all the questions in 64,000. A \`choice\` takes 1 to 255
  options and a \`score\` 1 to 10 levels. \`decide\` checks the questions before
  sending anything and names the one that is wrong.
- **It runs in the builder preview too**, like every \`AeroAI\` call (see "In the
  builder preview"), so try your questions there on real inputs. Never write an
  answer, a probability or a confidence yourself, as a placeholder or as a
  fallback: a number you made up looks exactly like the model's.
- It rejects with an Error whose message says what went wrong. Show it. A
  visitor who is not signed in is sent to \`/login\` and back, as with the other
  methods.

## Rules

- Four methods: \`AeroAI.models()\`, \`AeroAI.generateContent(opts)\`,
  \`AeroAI.agent(opts)\` for a model that uses the page's tools, and
  \`AeroAI.decide(opts)\` for fast closed-set answers (below). There is no
  separate streaming-only entry point — use the \`onText\` callback for
  progressive UI.
- \`model\` is required and must be one of the ids \`AeroAI.models()\` returned
  — don't hardcode a model id without calling \`models()\` first: the models
  are the visitor's own, so they vary per visitor. \`models[0]\` is their
  default (Gemini Flash when they have it); take it unless the page needs
  something specific.
- If the visitor isn't signed in yet (or has no model to run: neither
  Antigravity nor Code Assist connected), \`AeroAI\` redirects the browser to
  \`/login\` and back to the current page automatically — you don't need to check auth state or show
  your own sign-in prompt first. Just call \`AeroAI.models()\` /
  \`AeroAI.generateContent()\` directly; expect the page to navigate away and
  reload if a redirect happens.
- \`contents\` alternates \`role: 'user'\` / \`role: 'model'\` turns; a plain
  string is shorthand for one user turn with no history.
- \`res.functionCalls\` is \`[{name, args}]\` if you passed your own \`tools\`
  (Gemini function-calling \`functionDeclarations\`) and the model chose to
  call one — you're responsible for executing it and sending the result
  back as a \`role: 'user'\` turn with a \`functionResponse\` part if you want
  a follow-up reply. For the page's own actions, register them as WebMCP
  tools and use \`AeroAI.agent\` instead, which does that loop for you.
- Every call costs the *visitor's* own quota (\`decide\` runs on a free tier
  shared by every page instead, below). Don't call it in a tight loop
  (e.g. on every keystroke) — gate it behind an explicit action (button
  click, debounced input, etc.).

## In the builder preview

AeroAI runs in the builder preview as it does on the published page. The
preview sends every \`AeroAI\` call through the Builder with your own session,
so \`models\` and \`generateContent\` answer there with your own models and
quota, as they will for each visitor with theirs, and \`decide\` answers on the
same free tier it will use for them. Write no preview-only branch and no stand-in content: try the real
thing while you build.

- Every edit reloads the preview and runs the page again, so call AI when the
  visitor acts (a button, a submitted form), never on page load: a page that
  calls on load calls on every edit, and the preview stops sending after 40
  AI calls a minute.
- Never write an answer, a sample conversation or "example output" yourself:
  text you compose is not what the model would say, whatever label it
  carries, and a visitor will read it as the AI's. If the user asks for a
  realistic example answer in the draft, ask the question in the preview
  instead.
- A failed call is a failure, in the preview and on the published page
  alike: show its message with a Retry button, never canned content in place
  of the answer. Don't add a fallback written from memory (facts, lists, an
  "offline mode") for when the AI can't be reached either: a plausible answer
  that nothing checked is worse than an honest error.
- In the preview a call that needs sign-in, or an account connected,
  rejects with an error that says what is missing instead of going to
  \`/login\`. Show its message like any other failure.

## Minimal worked example — one-shot Q&A box

\`\`\`html
<script src="/aero-ai.js"><\/script>
<script>
  let modelId;
  async function ask() {
    const q = document.getElementById('q').value.trim();
    if (!q) return;
    const out = document.getElementById('out');
    out.textContent = 'Thinking…';
    try {
      if (!modelId) {
        const { models } = await AeroAI.models();
        modelId = models[0];
      }
      const res = await AeroAI.generateContent({ model: modelId, contents: q });
      out.textContent = res.text;
    } catch (e) {
      // A real failure: say so. Asking again retries.
      out.textContent = \`Couldn't get an answer (\${e.message}). Try again.\`;
    }
  }
<\/script>
\`\`\`
`,Je="# aero-agent-tools: a page that AI agents can use\n\nEvery app page Aero builds offers what it can do to AI agents as tools, through WebMCP: a browser API with which a page says \"here is what I can do, and what each thing takes\". An agent then calls the page's own code instead of guessing at clicks. Three kinds of agent use the tools:\n\n- an agent in the visitor's browser, Chrome's own or an extension's. Aero's site is in Chrome's WebMCP origin trial, so a published page has the real API in desktop Chrome while the trial runs;\n- the page's own assistant, `AeroAI.agent()` from `/aero-ai.js`, which runs the visitor's own model over the page's tools in every browser (see the end of this skill);\n- Aero's Chat, which can open the user's own app beside the conversation and work in it through its tools.\n\nLoad this skill before the first draft of an app page — one with a form, a button that does something, or data it keeps — and before adding or changing a form or an action on one. Not for a page that only shows content (an article, a landing page whose buttons are links) or a slide deck.\n\n## Which API\n\nThe first time in a conversation, also read the guides: `skill` with `name: \"modern-web-guidance\"` and `guide: \"agentic-forms,agentic-javascript-tools\"`. This skill says what differs for Aero pages.\n\n- A self-contained `<form>` (search, filter, add an item, sign up): declare it with `toolname` and `tooldescription` on the `<form>`. The browser builds the input schema from the form's controls, so give every control a `name` and a `<label>` (or `toolparamdescription`). Add `toolautosubmit` for a read-only or easily undone action. Leave it off for one that sends, buys, deletes or publishes: the browser then fills the form and waits for the visitor to submit it, which needs a submit button.\n- Everything else the page does — an action behind a button, reading the page's data, a move in a game — register in script with `document.modelContext.registerTool()`.\n\nA form tool's result comes from its `submit` listener: when `event.agentInvoked`, call `event.preventDefault()` and `event.respondWith(promise)` with what the action produced (the saved item, the results), before any `await`. `preventDefault()` without `respondWith()` is an error to the agent, and a submit that nothing handles navigates away.\n\n## Rules for every tool\n\n- Feature-detect: put every `registerTool` call inside `if (document.modelContext) { … }`. Forms need nothing: a browser without WebMCP ignores the attributes.\n- Names are made of `A-Z a-z 0-9 _ . -`, at most 128 characters, unique on the page: a verb and its object, such as `add_expense` or `list_expenses`.\n- The description says what the tool does and when to use it. The input schema says the rest: a `description` on every parameter, `enum` for a fixed set of choices, `minimum`/`maximum` for a range. Don't repeat the schema in the description.\n- The browser checks nothing against `inputSchema` and fills in no defaults: check the input in `execute`, and apply defaults there.\n- Return a failure as a value, such as `return { error: 'No expense with id 42.' }`, and never `throw`: an agent learns only that a thrown tool failed, never why.\n- Return once the page shows the change, and return what changed (the saved row with its id, the new total), so the agent can carry on without another call.\n- `annotations: { readOnlyHint: true }` on a tool that only reads. `annotations: { consequentialHint: true }` on one that deletes, sends, pays or publishes, so that an agent asks the visitor first. Keep the page's own confirmation for those as well: the hint does not enforce anything.\n- Long work takes `signal` from `execute`'s second argument and passes it on, as in `fetch(url, { signal })`, so that a cancelled call stops.\n- Register what the page always offers once, at start-up. For what comes and goes (the actions of an open dialog), register with `{ signal }` from an `AbortController` and abort it to remove the tool. Never register one name twice.\n- A tool returns nothing the page would not show this visitor anyway: no secrets, no other people's private data.\n- An Aero page is one HTML file with no build step, so use `document.modelContext` directly. The guides' React, Angular and Vue integrations and the `webmcp-types` package are for projects built with those; follow them only for a page that loads that framework itself.\n\n## Example\n\n```html\n<form id=\"add\" toolname=\"add_expense\" tooldescription=\"Record an expense.\" toolautosubmit>\n  <label>What for <input name=\"note\" required></label>\n  <label>Amount in SGD <input name=\"amount\" type=\"number\" min=\"0.01\" step=\"0.01\" required></label>\n  <button>Add</button>\n</form>\n<script>\n  document.getElementById('add').addEventListener('submit', (event) => {\n    event.preventDefault();\n    const saved = saveExpense(new FormData(event.target)); // a Promise of the saved row\n    if (event.agentInvoked) event.respondWith(saved);\n    saved.then(render);\n  });\n\n  if (document.modelContext) {\n    document.modelContext.registerTool({\n      name: 'list_expenses',\n      description: 'The expenses recorded so far, newest first, with their total.',\n      inputSchema: {\n        type: 'object',\n        properties: {\n          limit: { type: 'number', minimum: 1, maximum: 100, description: 'How many to return; 20 when left out.' },\n        },\n      },\n      execute: ({ limit }) => {\n        const n = Number.isInteger(limit) ? Math.min(Math.max(limit, 1), 100) : 20;\n        return { expenses: expenses.slice(0, n), total: totalOf(expenses) };\n      },\n      annotations: { readOnlyHint: true },\n    });\n    document.modelContext.registerTool({\n      name: 'delete_expense',\n      description: 'Delete one expense.',\n      inputSchema: {\n        type: 'object',\n        properties: { id: { type: 'string', description: 'The id list_expenses gives it.' } },\n        required: ['id'],\n      },\n      execute: async ({ id }) => {\n        if (typeof id !== 'string' || !id) return { error: 'Pass the id of the expense to delete.' };\n        if (!(await removeExpense(id))) return { error: `No expense with id ${id}.` };\n        render();\n        return { deleted: id, total: totalOf(expenses) };\n      },\n      annotations: { consequentialHint: true },\n    });\n  }\n<\/script>\n```\n\n## Testing in the Builder's preview\n\nThe Builder's preview has WebMCP in every browser: a stand-in that behaves as Chrome does. After adding or changing a tool:\n\n1. `list_page_tools`: check that every tool is there, with the name, description and schema you meant. A form missing from the list lacks `toolname` or `tooldescription`.\n2. `call_page_tool`: call each tool with realistic input, then with a bad one, and read what an agent would get back: a result, or an `error` it can act on. A result carrying `thrown` means the tool threw, so return the error instead. One carrying `would_submit` means nothing handled the form's submit.\n\n## The page's own assistant\n\nTo give the page a chat box that can use these tools, load the `aero-ai` skill and use `AeroAI.agent()`. It runs the visitor's own model over the page's tools, asks the visitor before a tool marked `consequentialHint`, and works in every browser, because `/aero-ai.js` brings a stand-in for WebMCP where the browser has none. A page with an assistant must load `/aero-ai.js` before the script that registers its tools.\n",Ke='# Modern web guidance\n\nGuides to the modern web platform: the native HTML elements, CSS features and browser APIs that now do what pages used to hand-build in JavaScript, each with the fallback that keeps a page working in browsers that lack it. Written by the Chrome, Edge, Firefox and MDN teams and tested against coding agents — [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); here with cross-references reworded and the experimental-API guides left out.\n\nYour training data is full of older patterns: a `<div>` modal with a hand-written focus trap, a tooltip placed by JavaScript, `100vh`, scroll listeners. Read the guide before writing one of those.\n\n## Reading guides\n\n1. Pick from the list below by description: a guide for each UI pattern or capability the change involves (a dialog, a form, a menu, an animation, a layout). Prefer the specific guide to the broad one. The broad ones (`html`, `css`, `css-layout`, `forms`, `accessibility`, `performance`, `security`) are for a new page\'s overall structure, or a review of a whole page.\n2. Read them with this same tool: `skill` with `name: "modern-web-guidance"` and `guide` set to their ids, comma-separated — for example `guide: "dialog,light-dismiss-a-dialog"`. At most four per call; one to three usually covers a change. Only the ids listed below exist.\n3. Build with what they say: the native element or API, the DO and DON\'T rules, and the fallback for browsers that lack the feature.\n4. Before you finish, check the page against each guide you read.\n\nA guide that names another as `` `some-id` (guide) `` means another guide in this list; read it only if the task needs it. A name in backticks without "(guide)" is a guide left out here: don\'t ask for it. Don\'t re-read a guide that is still in this conversation. If no guide matches the task, carry on without one.\n\n## Browser support\n\nAnyone can open a published page, in any browser. A feature that is Baseline Widely available needs no fallback. For anything newer, do what the guide says for browsers without it — feature detection, `@supports`, progressive enhancement — so the page still works; prefer a few lines of fallback to a polyfill or a library. When the user names their own target ("latest Chrome only", "must work on Safari 16"), follow theirs.\n\nGuides for experimental APIs — origin trials, and features only one browser has shipped, such as Chrome\'s built-in AI — are left out on purpose. Don\'t build on those APIs unless the user asks for one by name.\n\nWebMCP is the exception. Aero\'s own site is in its origin trial, so its three guides (`webmcp`, `agentic-forms`, `agentic-javascript-tools`) are here, and every app page uses it: the `aero-agent-tools` skill says how.\n\n## With the aero look\n\nThe guides decide the mechanism: which element, which API, which fallback. The look — colours, type, spacing, radii, shadows, motion timing — still comes from `aero-app-style`.\n\nThat look is light-only unless the user asks for a dark mode. Where a guide sets `color-scheme: light dark`, adds a `prefers-color-scheme: dark` block or a theme toggle, leave that part out unless they asked.\n\n## On an aero page\n\nAn app is served at its own address, `/p/{slug}`, and nowhere else. Where a guide moves the address to a path of its own with `history.pushState` (`stack-drill-down` (guide) pushes one per level, and `/` at the top), put the route in the query string or the `#hash` instead: a reload asks aero for the pushed path, and finds no page there.\n',Qe="## Guides\n\n### accessibility\n\n- `accessibility`: Actionable coding guidelines for building accessible web applications, covering semantic HTML, focus management, forms, media, and testing. Use this skill when auditing or implementing accessibility features, keyboard navigation, or ARIA.\n- `accessible-error-announcement`: Synchronize programmatic accessibility states (like aria-invalid) with the visual :user-invalid state to ensure screen reader users receive error feedback only after interaction, mirroring the visual experience.\n- `accessible-generated-content`: Use CSS generated content (`::before`/`::after`) in ways that stay accessible, including alternative text for decorative content.\n- `respect-os-text-scale`: Respect the operating system's text scale preference for a page so font sizes, layout, and rem-based measurements follow the user's accessibility settings.\n\n### css\n\n- `animate-to-intrinsic-sizes`: Smoothly animate interactive components (like accordions, menus, and expanding cards) to and from their natural dimensions.\n- `atrule-support-conditionals`: Conditionally apply certain CSS rules or declarations only if a certain at-rule is supported by the browser.\n- `calculate-with-intrinsic-sizes`: Calculate the size of an element based on its intrinsic size, while ensuring it fits within given design constraints.\n- `child-state-based-styling`: Build a component that changes its styling based on the state of one of its child elements. For example, a component that renders in light or dark mode based on whether a theme toggle is checked (or not).\n- `content-based-styling`: Build a component that changes its layout based on whether it contains specific child elements (or not). For example, if the component contains an image, use a multi-column layout, otherwise default to a single-column layout.\n- `css`: Action-oriented guidelines for modern CSS architecture, including the cascade, selectors, scoping, nesting, and design tokens. Use this guide when authoring styles or managing design systems.\n- `css-layout`: Modern CSS layouts such as flexbox, grid, subgrid, container queries, anchor positioning, and intrinsic sizing. Use this skill when architecting responsive UI components or page layouts.\n- `design-token-reactivity`: Define higher-order design tokens, like density modes (compact, comfortable, spacious) or themes and have descendant components react to changes directly and in component-appropriate ways.\n- `dynamic-sibling-styling`: Create dynamic visual spectrums or layout arrangements that automatically adapt to the number of elements in a group.\n- `fluid-scaling`: Scale items like font size, spacing, and media sizes smoothly based on the parent container's size rather than using fixed breakpoints\n- `individual-transform-properties`: Animate or override individual CSS transform properties (e.g. translate, rotate, scale) independently of other transform properties on a single element.\n- `overflow-clipping-control`: Adjust the visible clipping boundary of an element to align with the content edge, padding edge, or border edge—or a specified offset from any of these—offering finer-grained control over how content is clipped.\n- `reduce-style-repetition`: Reduce excessive style repetition by encapsulating complex or dynamic styling logic into reusable functions (such as a function that computes a gradient based on a set of input parameters).\n- `responsive-design`: Build UI that adapts to container and viewport size, including container queries, dynamic viewport units, aspect ratios, and responsive typography.\n- `selector-atrule-combinations`: Target elements based on the intersection or union of selectors and conditional @-rules while minimizing repetition.\n- `size-aware-styling`: Build a component whose styles can be conditionally dependent on its own width or height, rather than the width or height of the viewport. For example a card component that can change its layouts depending on how large it is, or a call-to-action button that can conditionally display helper text based on its width.\n- `style-parent-with-has`: Style parent elements of a form field (e.g. labels or fieldsets) when the field is invalid.\n- `usage-aware-component-variations`: Build components that adapt visual logic based on semantic context using CSS container style queries.\n\n### forms\n\n- `animated-select-picker`: Create a custom select component whose dropdown is animated. For example, the menu fades or slides into view, or the options animate upon selection.\n- `autofill-address-form`: Build an address form with correct autocomplete attributes and autofill support.\n- `autofill-highlight-inputs`: Customize the styling of form fields that have been autofilled and not edited by the user\n- `autofill-payment-form`: Build a payment form that collects card details with correct autocomplete values and autofill support.\n- `autofill-sign-in-form`: Build a sign-in form with correct autocomplete values and autofill support.\n- `autofill-sign-up-form`: Build a sign-up form with correct autocomplete values and autofill support.\n- `brand-consistent-forms`: Match checkboxes, radio buttons, range sliders, and progress bars to your site's color palette without replacing them with custom components.\n- `branded-select-styling`: Create custom select elements whose button, picker, arrow icon, and checkmark all seamlessly match your brand or design system's typography, colors, spacing, and border treatments.\n- `custom-select-picker-layouts`: Create custom select pickers whose options are positioned in unique or interesting ways, rather than the traditional stacked list of options.\n- `form-fields-automatically-fit-contents`: Allow form fields to grow and shrink to fit the user input, e.g. as the user types or selects a different option. Apply maximum and minimum size limits to create dynamic and responsive form fields that conform with the page design.\n- `forms`: Best practices for building accessible, secure, and user-friendly web forms. Use this guide when creating or modifying forms, inputs, and submission flows.\n- `ime-safe-enter-submit`: Implement Enter-to-submit in textareas and single-line inputs (chat, search, inline rename) safely for IME (Input Method Editor) users to prevent submitting incomplete text.\n- `required-field-feedback`: Provide error message for required form fields that were skipped or left empty *only* after user interaction, to avoid preemptive errors and ensure feedback is timely and contextually relevant to the user's flow.\n- `rich-media-picker`: Create a custom select component whose options can contain complex HTML formatting (e.g. images, icons, and other rich formatting) rather than just plain text.\n- `select-menu-interaction`: Validate that a non-default option has been chosen in a select menu only after the user has interacted with the control.\n- `slider`: Style a native range slider with custom track, thumb, fill, and focus states while preserving native functionality and accessibility.\n- `sms-otp-form`: Verify user phone numbers and one-time passcodes delivered over SMS with automatic code extraction and accessible form input.\n- `switch`: Build an accessible switch with the native HTML switch attribute, falling back to a styled checkbox when not supported.\n- `validate-input-after-interaction`: Show form field validation feedback (e.g. password complexity or email format requirements) only after the user has finished their initial interaction, avoiding premature errors on page load or while the user is typing.\n\n### html\n\n- `accessible-web-components`: Make custom elements accessible by default, setting roles and ARIA state via the ElementInternals ARIA mixin, managing focus with delegatesFocus, and keeping ARIA relationships within a single shadow root.\n- `custom-elements`: Define, register, and manage the lifecycle of autonomous custom elements, covering constructor rules, lifecycle callbacks, upgrade timing, attribute/property reflection, and naming conventions.\n- `form-associated-custom-elements`: Make a custom control participate natively in forms with formAssociated and ElementInternals, submitting its own value, integrating with constraint validation, and reacting to reset, disable, and state-restore.\n- `html`: Action-oriented guidelines for modern HTML architecture, semantics, native interactive APIs (Dialog, Popover, Details), focus management, and resource prioritization. Use this guide when structuring web documents, implementing native overlays, or optimizing resource loading order.\n- `prerendering-custom-elements`: Server-render a custom element, then hydrate it in place without re-rendering or a flash of unstyled content.\n- `shadow-dom`: Encapsulate a component's DOM and styles with Shadow DOM, construct the tree efficiently with HTML templates, and project consumer content with slots.\n- `styling-web-components`: Style across the shadow boundary with :host selectors, inherited and custom properties for theming, ::slotted and ::part, and cascade layers and container queries inside components.\n- `web-components`: Orientation and cross-cutting principles for authoring and using Web Components, covering Custom Elements, Shadow DOM, templates and slots, Declarative Shadow DOM, styling across the shadow boundary, Form-Associated Custom Elements, and accessibility requirements. Use this guide when building reusable UI components, design systems, or server-rendered custom elements.\n\n### js\n\n- `calculate-event-differentials`: Calculate elapsed or remaining time between dates and times, balance duration units, and format human-readable localized durations using Temporal.Duration and Intl.DurationFormat.\n- `capture-location-agnostic-data`: Model location-agnostic calendar dates, wall-clock times, partial dates (recurring birthdays, credit card expirations), and recurring monthly intervals without time zone drift using Temporal Plain types.\n- `coordinate-global-events`: Schedule future meetings or events by explicitly binding them to a geographical IANA time zone so that event times remain accurate regardless of Daylight Saving Time (DST) transitions, \"skipped\" or \"repeated\" hours during clock changes.\n- `sort-high-precision-timestamps`: Parse, sort, and measure intervals between sub-millisecond or nanosecond ISO 8601 timestamps without Date truncation collisions using Temporal.Instant.\n- `support-global-calendar-systems`: Display and calculate dates in non-Gregorian calendar systems (e.g., Islamic, Hebrew, or Chinese) accurately for international users.\n\n### performance\n\n- `batch-analytics-events`: Debounce and batch multiple analytics, telemetry, and Core Web Vitals events together in a single beacon to minimize network contention and reduce server load, while still delivering real-time updates.\n- `break-up-long-tasks`: Break up heavy synchronous processing (complex computations and/or long loops) or DOM updates to improve Interaction to Next Paint (INP) responsiveness and let the browser handle user input and repaint the screen.\n- `calculate-total-foreground-time`: Calculate the total time a user actually spent viewing a page, excluding periods when the tab was in the background.\n- `conditional-async-dependencies`: Conditionally load or initialize async dependencies (such as importing polyfills for missing web features) without requiring complex orchestration across all of a page's script dependencies.\n- `defer-rendering-heavy-content`: Reduce rendering times in content-heavy web pages (e.g. pages with long feeds, lots of articles, or complex dashboards), by deferring rendering for any content that is not immediately visible to the user.\n- `defer-work-until-scroll-ends`: Defer expensive operations like DOM updates, data fetching, analytics tracking, or layout recalculation until after scrolling completes to maintain smooth scroll performance.\n- `deliver-optimized-decorative-images`: Deliver optimized decorative images (such as backgrounds, UI icons, or complex masks) by simultaneously providing next-generation image formats (like AVIF or WebP) alongside multiple pixel densities (like 1x and 2x) so the browser can dynamically negotiate the best combination of file size and visual quality for the user's device capabilities.\n- `deprioritize-background-fetches`: Deprioritize background data fetches made with the Fetch API to prevent network contention with user-initiated requests.\n- `detect-initial-visibility-state`: Reliably determine whether a page was initially loaded in the background, even in cases where the script is loaded asynchronously after the user foregrounded the page.\n- `efficient-background-processing`: Conserve system resources and battery life by pausing background JavaScript execution (such as `<canvas>` animations, WebGL rendering, or high-frequency WebSocket data polling) when the component is off-screen and then resume them just-in-time when they scroll back into view.\n- `faster-spa-view-transitions`: Enable faster transitions back to previously visited views in a Single-Page Application (SPA) by preserving their structural DOM state instead of destroying and rebuilding them on every navigation.\n- `flicker-free-client-side-ab-testing`: Deliver and render A/B tests, multi-variate tests, or other experiments using client-side JavaScript to alter or inject HTML, CSS, and JavaScript without the original content showing first before flickering or flashing to show the experiment content.\n- `full-session-analytics`: Reliably track analytics, Core Web Vitals, errors, and telemetry data across the user's entire page visit, and defer sending of the data until the user leaves the page.\n- `identify-heavy-scripts`: Identify the scripts most responsible for long animation frames\n- `identify-inp-causes`: Identify slow-running JavaScript and other causes of poor Interaction to Next Paint (INP) responsiveness.\n- `improve-next-page-load-performance`: Improve page load performance by prefetching or prerendering pages that the user is likely to visit next.\n- `interaction-paint-timing`: Measure the time it takes for user interactions and client-side navigations to render new contentful updates on screen.\n- `interactions-in-complex-layouts`: Make interactions snappier and more responsive (reducing Interaction to Next Paint (INP) scores) by avoiding layout re-calculations in complex layouts, such as data-heavy dashboards or spreadsheet-style grids.\n- `lazy-load-video-and-audio`: Defer downloading offscreen video and audio assets, including video poster images and preloaded media data, until the media player approaches the viewport to conserve bandwidth and reduce network contention during initial page load.\n- `optimize-image-priority`: Optimize the loading priority of Largest Contentful Paint (LCP) candidate images and deprioritize non-critical images to reduce critical resource load delays.\n- `optimize-preload-priority`: Optimize the relative priority of preloaded content to reduce critical resource load delays.\n- `optimize-script-priority`: Optimize the loading priority of scripts by boosting critical asynchronous scripts and deprioritizing non-essential or late-body scripts to improve sequencing and reduce delays.\n- `performance`: Actionable guidelines for optimizing modern web applications. Use this guide when auditing performance, optimizing loading metrics, fixing slow interactions and optimizing Core Web Vitals (LCP, INP, CLS)\n- `resolution-optimized-pseudo-elements`: Use resolution-optimized images in CSS pseudo-elements (such as `::before` and `::after`) to reduce the number of DOM nodes.\n- `schedule-tasks-by-priority`: Schedule tasks with different priorities to ensure critical work runs first while background work is deferred.\n\n### privacy\n\n- `privacy`: Action-oriented guidelines for web developers to implement privacy by design, data minimization, third-party audits, and secure data handling. Use this skill when designing applications, integrating third-party services, handling user data, or configuring security headers.\n\n### pwa\n\n- `install-web-app`: Install web applications from a page using browser-controlled consent UI.\n- `migrate-web-app-origin`: Transfer an installed web app to a new origin while preserving user configuration and OS-level shortcuts.\n\n### security\n\n- `local-network-access`: Access resources on a user's local network or loopback interface from a public web application.\n- `passkey-authentication`: Authenticate a returning user with a passkey for primary sign-in.\n- `passkey-conditional-create`: Silently register a passkey for an existing user after a successful password login.\n- `passkey-management`: Let users view and manage the passkeys registered to their account.\n- `passkey-reauthentication`: Verify a signed-in user's identity using their existing passkeys before a sensitive action.\n- `passkey-registration`: Register a passkey for an existing user account.\n- `passkeys`: Comprehensive orientation and cross-cutting principles for implementing WebAuthn and Passkeys in web applications. Use this guide when handling passkey registration, authentication, management, or reauthentication.\n- `quick-sign-ins`: Authenticate returning users in place with their saved passkeys or passwords before navigating to a sign-in page or interrupting their workflow.\n- `sanitize-untrusted-html`: Safely parse and display untrusted HTML content from user input by removing unsafe elements and attributes.\n- `secure-external-subresources`: Verify the cryptographic integrity of external scripts, stylesheets, fonts, and images loaded from third-party origins, and control whether those requests send credentials or referrer URLs.\n- `security`: Preventative security guidelines for web developers (XSS, CSP, Cookies, Cross-Origin Isolation). Use this skill to guide the process of auditing, testing, and deploying security policies safely.\n- `trusted-types`: Prevent DOM-based XSS attacks by defining a Trusted Types policy to sanitize untrusted HTML, using the policy when writing to DOM sinks like innerHTML, and enforcing Trusted Types via Content Security Policy.\n- `validate-origins`: Compare and validate web origins and sites safely across cross-document messages and URLs without error-prone string parsing.\n\n### ui-atoms\n\n- `carousel-slide-effects`: Create a carousel of slides with images or other visual elements, where each slide animates as they enter/center/exit their scroller. For example, the slides may fade-in/fade-out, rotate, get bigger or smaller, etc.\n- `component-specific-light-dark-theme`: Force certain elements to be in light mode or dark mode (e.g. code blocks, media players, etc) independently of the page's color-scheme.\n- `icons`: Display and manage icons that can be set and parameterized from CSS, are fast to load, crisp at any resolution and are properly exposed to (or hidden from) assistive technologies.\n- `position-aware-tooltips`: Build tooltips and popovers with directional arrows (or other visual styling) that automatically point the correct way when the element flips to a fallback position.\n- `pull-to-reveal`: Build a pull-to-reveal feature that would enable the user to pull down on the screen to reveal more content, like a search bar.\n- `responsive-table`: Build a data table that presents tabular data with proper header semantics, and remains readable and navigable on small screens and with assistive technologies.\n- `scroll-position-aware-elements`: Build floating buttons or widgets (back-to-top, scroll-to-bottom, chat launchers, etc.) that appear and disappear based on whether the user has scrolled at all.\n- `scroll-progress-indicator`: Create a scroll progress bar, stepped progress tracker, or any visual affordance that communicates how far through a page or section the user has scrolled.\n- `scrollability-affordance-hints`: Build scroll shadows or fading edges that appear only when there's actually more content to scroll to in that direction.\n- `shrinking-header-on-scroll`: Smoothly animate a fixed header or full-page cover on scroll to dynamically shrink, gain shadows, and transform its layout over a predefined scroll distance.\n- `single-line-overflow`: Show text that must stay on one line, such as a tab label, table cell, navigation item, or file name, in a space it may not fit, without breaking the layout or losing the text.\n- `state-aware-sticky-headers`: Build sticky section headers or navbars that visually transform when they're actually \"stuck\" at the top, changing their color scheme or gaining a shadow.\n- `viewport-aware-dropdowns`: Position dropdowns, flyouts, or contextual action panels tethered to a trigger button so they automatically flip axes at viewport edges instead of getting clipped.\n\n### ui-behaviors\n\n- `anchor-positioning-tab-underline`: Transition an element seamlessly between two target element positions. For example, moving a selected tab underline between the previously selected tab and the currently selected tab.\n- `animate-element-entry-exit`: Smoothly hide/show elements as they are added/removed from the DOM or as their display values are toggled.\n- `animate-to-from-top-layer`: Animate elements such as dialogs, popovers, and tooltips as they're entering/exiting the top layer.\n- `carousel-snap-highlights`: Visually highlight the currently snapped non-interactive item in scroll-snapping carousels, galleries, or full-page swipe experiences. For example, expanding a card when snapped, or revealing hidden content.\n- `consistent-cross-document-transitions`: Ensure critical page state is loaded and stable before initiating a cross-document view transition. This means critical CSS styles are loaded and applied, critical JavaScript is loaded and run, and the HTML visible for the user's initial view of the page has been parsed before the transition runs.\n- `cross-document-transitions`: Create smooth, seamless transitions between full page navigations, such as cross-fades, custom reveal effects, or morphing of content from one page to the next.\n- `custom-button-actions`: Declaratively connect a button to any element to trigger custom, application-specific actions using declarative button commands, invoker commands, button commands, custom commands, or declarative toggle actions.\n- `declarative-dialog-popover-control`: Toggle the visibility of a dialog or popover from a button without writing JavaScript.\n- `directional-navigation-transitions`: Animate visual state changes to reflect the direction of a user's navigational flow, such as sliding new content in from the right when advancing forward or from the left when returning to a previous screen.\n- `drag`: Support dragging to move a floating element around the page.\n- `drag-and-drop`: Support dragging to rearrange the children of a container along one axis (horizontal or vertical) while preserving their state and accessible order.\n- `dynamic-sibling-animations`: Stagger animation or transition timing across sibling elements so each one starts after a computed delay based on its position in the sibling list.\n- `dynamic-sort`: Best practices for handling dynamic user-triggered reordering of a container's children (e.g. list items, table rows, or a card grid), with optional animated reordering that respects user preferences, good screen reader UX, and optimal performance for large lists.\n- `group-element-transitions`: Smoothly rearrange and animate list items, cards, or grid elements into their new positions simultaneously when adding, removing, shuffling, or reordering—such as removing a product from a shopping cart.\n- `highlight-text-ranges`: Highlight arbitrary text ranges on a page such as search results, spelling errors, or collaborative editing cursors.\n- `interactive-content-reveal`: Create interactive reveal effects, such as a spotlight that follows the user's pointer to uncover details within an image or UI section.\n- `interest-triggered-action-previews`: Show a live preview of a button's effect when a user signals interest (e.g. hovering, focusing, or long-pressing) but before they commit to clicking.\n- `interest-triggered-tooltips`: Show a tooltip or supplemental information when a user hovers over, focuses on, or long-presses an interactive element, without requiring a click.\n- `light-dismiss-a-dialog`: Create a modal dialog that can be closed via light dismiss (i.e. clicking or tapping outside of the dialog)\n- `motion`: Animate UI with CSS transitions, animations, scroll-driven animations, and view transitions while keeping motion on the compositor and respecting reduced-motion preferences.\n- `move-dom-element-without-losing-state`: Move or reparent a DOM element without losing important element state, such as interactivity states (:focus/:active), `<iframe>` loading state, animation/transition state, etc\n- `parallax-scroll-effects`: Create scroll-based effects (such as parallax) where foreground and background layers move at different rates, creating a sense of depth as the user scrolls.\n- `persistent-top-layer-ui`: Keep a modal dialog, fullscreen element, or native popover visibly open and functionally active when its underlying DOM node is moved or reparented in the DOM.\n- `physics-based-easing`: Create custom, physics-based animation and transition effects, like bounce and spring, that feel more natural and engaging than traditional easing curves.\n- `platform-controls-dismiss-dialog`: Create a modal dialog that can be closed via standard platform-specific user actions, such as pressing the `Esc` key on desktop platforms, or a \"back\" or \"dismiss\" gesture on mobile platforms\n- `prevent-page-scroll-under-modal-dialog`: Prevent the underlying page from scrolling while a modal dialog is open.\n- `same-document-transitions`: Visually connect persisting elements across different page states or navigations in a Single Page Application (SPA) (e.g. expanding a product thumbnail into a full-bleed hero image) by smoothly morphing their size, position, or other styling properties.\n- `scoped-component-transitions`: Animate state changes inside a single component (a card, list, panel, or other subtree) while the rest of the page remains interactive, and other transitions run concurrently.\n- `scroll-completion-effects`: Trigger visual effects, animations, or focus changes on a target element only after a smooth programmatic scroll to that element has finished.\n- `scroll-entry-exit-effects`: Create fade-in, scale-up, or other complex reveal-type effects on elements as they enter and exit the scrollport (or viewport) while the user is scrolling.\n- `scroll-snap-realtime-feedback`: Provide real-time visual feedback in linked UI elements while a user scrolls through snap-aligned content, before the scroll gesture completes.\n- `scroll-snap-state-sync`: Synchronize navigation indicators, linked content panels, and analytics tracking with the actively snapped item in a scrollable container.\n- `scroll-target-on-load`: Build a scrollable list of elements (e.g. a carousel of images or a chat conversation thread) that can be displayed with a particular element scrolled into view on the initial render.\n- `scrollytelling`: Animate visual properties on a target element — such as fading a backdrop, shifting a background color, or to create scrollytelling experiences — driven entirely by the scrollport position of a completely different element.\n- `search-hidden-content`: Hide content from view using patterns such as accordions, tabs, and \"Read more\" sections, while ensuring the hidden text reveals itself during native \"Find in page\" searches, allows search engine indexing, supports URL fragment deep links, and maintains ARIA accessibility.\n- `sortable-table`: Progressively enhance a data table with behaviors that allow users to sort rows by clicking on column headers.\n- `spatial-navigation`: Implement accessible spatial navigation using arrow keys that works correctly in different layout modes (grid etc)\n- `swipe-to-remove`: Let users act on items in a list (remove, archive, mark as read, etc.) with a horizontal swipe gesture, so they can process entries quickly without tapping a separate control.\n- `swipe-to-reveal`: Let users swipe horizontally on a list item or content pane to reveal contextual action buttons or a side menu without automatically triggering an action.\n\n### ui-components\n\n- `accordion`: Build an accordion component with animation, optional exclusive (one-open-at-a-time) behavior, and brand-consistent styling.\n- `app-menus`: Build an application menu bar where several top-level menus (such as File, Edit, and View) act as a single keyboard stop and switch between each other on hover or arrow keys.\n- `breadcrumbs`: Build a breadcrumb trail that shows the user's location within a site hierarchy and lets them navigate to ancestor pages.\n- `card`: Build a card component that adapts its presentation to its own available space and contents.\n- `carousel`: Build a carousel component that displays a set of items in a horizontal or vertical layout.\n- `checkbox`: Style checkboxes, including custom icons, layout, colors, check/uncheck animations, while preserving native functionality and accessibility.\n- `copy-button`: Build a copy button that copies text from arbitrary elements to the clipboard.\n- `dark-mode-toggle`: Build a dark mode toggle component that allows users to override their system color scheme preference for the current site.\n- `dialog`: Build a modal or non-modal dialog component that is accessible, manages focus appropriately, and can be dismissed the way users expect on each platform.\n- `hovercard`: Build a hovercard component that displays an interactive structured preview of the page a certain type of link (e.g. a user profile) will navigate to when hovered over.\n- `menu`: Build a menu component that displays a list of options or actions, with support for nested submenus.\n- `navbar`: Build a site navigation bar that adapts across screen sizes and indicates the current page.\n- `navigation-drawer`: Create a navigation drawer component that, when triggered from a menu button, slides in from the side overlaid on top of existing page content, and slides out when dismissed (by swiping away, tapping outside, or pressing escape).\n- `persistent-app-tours`: Create persistent onboarding walkthroughs using tethered native overlays that stay open during user interaction.\n- `persistent-toast-notifications`: Create non-intrusive toast and overlay notifications for persistent, stackable messaging and state communication.\n- `progress`: Build a styled progress bar that communicates completion of a task or process, in both determinate and indeterminate states.\n- `progress-ring`: Build a progress ring component that visually represents the completion status of a task or process, with support for content in the center and brand-consistent styling.\n- `scrollspy`: Highlight the currently visible section of a page in a navigation menu\n- `spinner`: Build a loading spinner that communicates busy state to all users, respects reduced-motion preferences, and animates efficiently.\n- `stack-drill-down`: Build full-screen hierarchical navigation that lets users drill down into nested views and swipe or navigate back to return, with browser history kept in sync.\n- `tabs`: Build a responsive tabbed interface with good UX when not all tabs fit on screen.\n- `toolbar`: Build a toolbar component that displays a set of controls for performing actions.\n\n### user-experience\n\n- `content-first-noise-reduction`: Maximize content and reduce noise by removing blocking popups, keeping persistent navigation compact, and moving secondary content behind on-demand disclosure.\n- `form-factor-adaptation`: Adapt layouts, controls, and text to any device or container so touch targets stay usable, content fits its space, and nothing collides with system UI.\n- `natural-interactions`: Implement natural interactions with clear hover, focus, and press feedback, motion that opens from its trigger, swipeable content, and keyboard-reachable actions.\n\n### visual-design\n\n- `adapt-scrollbar-to-contrast-preferences`: Enhance scrollbar visibility for users who prefer high-contrast interfaces\n- `browser-ui-theming`: Theme browser-generated UI such as text selection, scrollbars, form controls, and pickers with CSS instead of re-creating it with custom elements.\n- `color`: Color guidance for the web, including contrast requirements, light and dark color schemes, Forced Colors Mode, and generating tints and shades from a base color.\n- `complex-shapes`: Clip elements and their content to any free-form shape, like a symbol, brush stroke, or organic texture for more expressive designs.\n- `contrast-color`: Select a readable text color with sufficient contrast on a dynamic background color.\n- `customize-scrollbar-color-and-thickness`: Customize the color or thickness of a scrollbar\n- `dark-mode`: Implement dark mode support in a way that respects the user's light/dark theme preference and adapts browser UI (e.g. scrollbars, form controls, etc)\n- `equal-width-text-lines`: Make every line of a multi-line heading or lockup span the same width, as in poster-style or stacked-headline typography. Unlike justified text, the text itself is sized to the width rather than the spacing stretched\n- `improve-text-layout-and-legibility`: Improve the layout and legibility of short standalone text content, such as headings no longer than a few lines, by enabling the browser to apply evenly balanced line breaks when wrapping text.\n- `precise-text-alignment`: Achieve precise vertical alignment with text of any font. For example, exactly equal visual padding above and below text, or aligning text perfectly flush with adjacent icons or images.\n- `shaped-cutouts`: Combine multiple shapes to create complex cutouts or 'knockout' effects in elements, such as adding a notch to an element.\n- `soft-edge-content-fade`: Apply a transparency gradient to content edges to indicate further scrollable areas or to obscure payment-walled text.\n- `typography`: Typography best practices for the web, including font sizing units, line height, text wrapping and balancing, and fluid type that scales with the viewport.\n- `visual-effects`: Visual effects with CSS such as layered shadows, blend modes, gradients with predictable color interpolation, and patterns like stripes, checkerboards, dots, and pie charts built from gradients alone.\n- `visually-stable-font-fallbacks`: Define font styles such that text remains readable and visually consistent in the event that there's a swap between the preferred font and one of the fallbacks (or vice versa).\n- `visually-stable-mixed-fonts`: Define font styles such that text remains readable and visually consistent in situations where multiple fonts are used to render a single block of text.\n- `visually-texture-content`: Apply realistic weathering and texture patterns to elements to give them an organic, aged, or physical material appearance.\n\n### wasm\n\n- `cpp-on-the-web`: Compile C/C++ to WebAssembly using Emscripten\n\n### webmcp\n\n- `agentic-forms`: Expose client-side functionality as tools to AI agents by annotating standard HTML forms with WebMCP attributes.\n- `agentic-javascript-tools`: Programmatically register client-side JavaScript functions as tools for AI agents using the WebMCP Imperative API.\n- `webmcp`: Use this guide to implement WebMCP in browser applications, exposing client-side functionality as tools to AI agents via declarative or imperative APIs.\n",Ze="# Pixel games\n\nPixel-art games and toys on a `<canvas>`: a small fixed resolution scaled up crisp, a game loop, keyboard and touch input, sprites and pixel text drawn in code, and effects from [pixelfx](https://github.com/patch-gg/pixelfx): 244 pixel-art effects by Patch, MIT-licensed, each a small ES module with no dependencies. Fire, explosions, magic, hits, pickups, weather, critters and UI, drawn in code, so any of them can be recoloured, mirrored, rotated and reseeded.\n\n## The page\n\n- A game is an app page. `aero-app-style` styles everything around the play area: title, score panel, buttons, instructions. `aero-agent-tools` applies too, so register the game's actions as tools: start, restart, a move, reading the score. Leaderboards and saved progress use `aero-database`.\n- The play area is the game's own world and may be dark. pixelfx's glow is additive light: on a light background it clamps to white and vanishes. The page around the play area stays light, as `aero-app-style` says; its light-only rule is about the page, not the world inside the canvas.\n- Make it original: your own characters, names and levels. Never recreate a specific existing game, or its characters, sprites, logos, levels or music, even renamed. If the user asks for one, build an original game in the same genre and tell them that's what you did.\n\n## Canvas and loop\n\nPick one low resolution and draw everything in it, 1 unit = 1 pixel: 320×180 (16:9) unless the game wants another shape. pixelfx effects are drawn for a 24×38 px character, so size your sprites to match, or the effects will dwarf them or get lost on them. Scale the canvas up by a whole number of device pixels, and never let the browser smooth it.\n\n```html\n<div class=\"stage\" id=\"stage\"><canvas id=\"game\" width=\"320\" height=\"180\" tabindex=\"0\" aria-label=\"Game\"></canvas></div>\n<style>\n  .stage { display: grid; place-items: center; width: 100%; aspect-ratio: 16 / 9; background: #14121c; border-radius: var(--r-lg); overflow: hidden; }\n  #game { image-rendering: pixelated; outline: none; }\n</style>\n```\n\nGames are ES modules, `<script type=\"module\">`, importing pixelfx from jsDelivr pinned to one commit. Keep the commit exactly as written here, in every pixelfx URL: the effect list below describes that commit.\n\n```js\nimport { createFrame, clearFrame, painterFor, createFx, composite, hex, PAL }\n  from 'https://cdn.jsdelivr.net/gh/patch-gg/pixelfx@5294518ce7c72e48b6100a744596e0acf57f2826/src/core/index.js';\nimport * as hitSpark from 'https://cdn.jsdelivr.net/gh/patch-gg/pixelfx@5294518ce7c72e48b6100a744596e0acf57f2826/src/fx/impacts/hit-spark.js';\n\nconst W = 320, H = 180, BG = '#14121c';\nconst stage = document.getElementById('stage'), canvas = document.getElementById('game');\nconst ctx = canvas.getContext('2d');\nconst frame = createFrame(W, H), img = new ImageData(W, H);\n\nfunction fit() { // the largest whole number of device pixels per game pixel\n  const dpr = devicePixelRatio || 1;\n  const k = Math.max(1, Math.floor(Math.min(stage.clientWidth / W, stage.clientHeight / H) * dpr)) / dpr;\n  canvas.style.width = `${W * k}px`;\n  canvas.style.height = `${H * k}px`;\n}\nnew ResizeObserver(fit).observe(stage);\n\nconst effects = new Set();\nconst play = (mod, o) => { const fx = createFx(mod, o); effects.add(fx); return fx; };\n\nlet last = performance.now(), paused = true, freeze = 0, shake = 0;\nfunction tick(now) {\n  const dt = Math.min(0.05, (now - last) / 1000);\n  last = now;\n  if (freeze > 0) freeze -= dt; // hit-stop: everything holds still\n  else if (!paused) {\n    update(dt); // the game's own state; speeds in px per second, times dt\n    for (const fx of effects) { fx.update(dt); if (fx.done()) effects.delete(fx); }\n  }\n  if (shake > 0) shake -= dt;\n  render();\n  requestAnimationFrame(tick);\n}\nrequestAnimationFrame(tick);\ndocument.addEventListener('visibilitychange', () => { if (document.hidden) paused = true; });\n\nfunction render() {\n  clearFrame(frame);\n  drawWorld(painterFor(frame)); // background, tiles, scenery\n  for (const fx of effects) fx.draw(frame, 'back'); // what goes behind characters\n  drawActors(painterFor(frame)); // player, enemies, pickups\n  for (const fx of effects) fx.draw(frame, 'front');\n  drawHud(painterFor(frame)); // score, lives, in pixel text\n  composite(frame, img.data, hex(BG)); // colour over the background, light added on top\n  const s = shake > 0 ? 2 : 0, j = () => Math.round((Math.random() * 2 - 1) * s);\n  ctx.fillStyle = BG;\n  ctx.fillRect(0, 0, W, H);\n  ctx.putImageData(img, j(), j());\n}\n```\n\n- Call `painterFor(frame)` again for each of your own drawing passes, as above: it resets the painter, which every `fx.draw` moves.\n- A scrolling world: set `frame.ox` and `frame.oy` to the camera's top-left, in whole pixels, before drawing. Then everything, effects included, is placed in world pixels.\n- A game that is paused, or hasn't started, shows a start screen and starts on the first key or tap. Never restart on its own after the tab comes back.\n\n## Drawing your own\n\nPainter colours are packed numbers: `hex('#ffcc00')`. Sprite palettes are the exception and take `'#rrggbb'` strings.\n\n- `p.sprite(rows, pal, x, y, { flip, a, scale })`: rows of characters, each mapped to a colour by `pal`, `.` for empty, top-left at `(x, y)`. Keep each sprite's rows and palette in constants, and give animation frames their own rows.\n- `p.rect(x, y, w, h, c)`, `p.line(x0, y0, x1, y1, c)`, `p.circle(cx, cy, r, c)`, `p.disc(cx, cy, r, c, a)` (truly translucent), `p.glow(x, y, r, c, k)` (light, for lamps and pickups).\n- `p.text(str, x, y, c, { font: 'mini' | 'big', scale, align: 'left' | 'center' | 'right', outline: c, shadow: c })`: pixel text in a 3×5 or 5×7 font, upper-case letters, digits and common punctuation. `p.measure(str, opts)` gives `[w, h]`.\n- Positions can be fractional. The painter puts them on whole pixels, so motion stays crisp.\n\n## Input\n\n- Keyboard: keep a set of held keys from `keydown`/`keyup` on the canvas, read it in `update`. Arrows and WASD to move, Space or Enter to act. Call `preventDefault()` for those keys only while the canvas has focus, so the page still scrolls otherwise, and focus the canvas when the game starts.\n- Touch: on phones, show on-screen buttons under the play area (`@media (pointer: coarse)`), driven by pointer events into the same held-keys set, with `touch-action: none` on them.\n- Release every held key on `blur`, or a key let go in another tab stays pressed.\n\n## Effects\n\n```js\nplay(hitSpark, { x: enemy.x, y: enemy.y - 20, flip: hero.x > enemy.x, seed: Math.random() * 1e6 | 0 });\n```\n\n- `x`, `y`: the effect's anchor, in frame (or world) pixels: the feet, the point of impact, the base of a torch, the muzzle. Each effect's guide says how far it reaches from there.\n- `flip`: face left. Directional effects face right. `angle` (radians) aims one any other way.\n- `seed`: a different take on the same effect. Give each spawn its own, or repeats look stamped.\n- `palette`: the main colour ramp, dark to bright, any length. Use one of `PAL`'s ramps (`fire ember lava smoke dust ice water electric volt poison holy heal arcane shadow blood earth stone gold leaf wood metal bone neon cyber matrix candy night`) or the scene's own: `{ palette: PAL.ice }` burns a fire blue.\n- `light`: glow strength, 1 by default. Use 0.3 to 0.6 when many effects play at once.\n- Each effect's own options are listed in its guide (a `text`, a `count`, a `reach`, extra colour ramps).\n- One-shots end on their own: `fx.done()` turns true, and the loop above drops them. Loops play until `fx.stop()`, which fades them out over 0.3 s.\n- To move one, a projectile in flight or an aura that follows the player, write to its options each tick: `fx.options.x = bullet.x; fx.options.y = bullet.y; fx.options.flip = bullet.vx < 0`.\n\n### Hits that land\n\nA hit is sold by what happens around it more than by the effect: hold everything still for a moment on contact, then shake.\n\n```js\nfunction hit(x, y, heavy) {\n  play(hitSpark, { x, y, seed: Math.random() * 1e6 | 0 });\n  freeze = heavy ? 0.12 : 0.05; // 0.03 to 0.2 s, longer for heavier blows\n  shake = heavy ? 0.2 : 0.1;\n}\n```\n\nEffects with a character (every `moves` effect, and many in melee, arcane, holy and others) carry an act: a wind-up before the effect's t = 0, hits with a freeze, a recovery. Their guide entry lists the timing, and `actTiming(mod)` returns it at runtime (`windup`, `recovery`, `hits` with `t` and `freeze`). For the game's own character, start its attack pose `windup` seconds before you create the effect, and at each hit's `t` set `freeze`.\n\n`createAct(mod, { x, y })` plays the act with pixelfx's stock character, a grey training dummy, and a straw target: `act.update(dt)`, `act.draw(frame)` (`{ target: false }` leaves the target out), `act.shake` (`[sx, sy]`, pixels to throw the picture), `act.done()`. Use it for a training yard or a showcase, never as the game's hero.\n\n### Effects on your own character\n\nEffects whose guide says \"Wraps a character\" (statuses like burning or frozen, heals, shields, blinks) draw on a character's silhouette. Without an `actor` they draw on the stock dummy, which in a game shows up as a stranger. Pass your character's sprite, and place the effect at its feet:\n\n```js\nfunction actorOf(rows, pal) {\n  const h = rows.length, w = rows[0].length, data = new Uint8Array(w * h), pixels = new Uint32Array(w * h);\n  rows.forEach((r, y) => [...r].forEach((ch, x) => {\n    if (ch !== '.' && ch !== ' ') { data[y * w + x] = 1; pixels[y * w + x] = hex(pal[ch]); }\n  }));\n  const x = -Math.floor(w / 2), y = -h;\n  return { mask: { w, h, data }, pixels, x, y, w, h, head: [0, y], chest: [0, Math.round(y * 0.7)] };\n}\nconst frozen = play(frozenFx, { x: hero.x, y: hero.feetY, actor: actorOf(HERO_ROWS, HERO_PAL) });\n```\n\nThose whose guide adds \"Draws the body itself\" (frozen recolours it, blink-out dissolves it) paint your character for you for part of their run. While one plays, draw your own sprite with `a: actorAlphaOf(mod, fx.t, fx.options)` (from the core), which is 0 while the effect shows the body. Follow the character by writing `fx.options.x` and `fx.options.y`.\n\n## Checking your work\n\n- After `write`, read the `console` field. A failed import names its URL: check the id against the guide, and that the commit is the one above.\n- `screenshot` shows one moment of the game, canvas included. To see it playing, start it through the page's own tools (`call_page_tool`) or `click`, then capture. An effect in a screenshot is one frame, not its motion.\n- Judge it at the size it plays: can you tell the player from the scenery? Are the effects in proportion to the characters? Does the glow show?\n\n| You see | Fix |\n|---|---|\n| blurry or uneven pixels | whole-number scale from `fit()`, `image-rendering: pixelated`, nothing drawn with `ctx` except `putImageData` |\n| effects tower over the characters, or are lost on them | size sprites to the 24×38 stock character, or pick a resolution where they read |\n| hits feel floaty | `freeze` on contact and a short `shake`, a 1 to 2 frame white flash on whatever was hit |\n| repeats look stamped | a new `seed` per spawn; `flip` at random for symmetric effects |\n| no glow, or washed out | a dark play area and a dark `composite` background; `light` 0.3 to 0.6 when busy |\n| colours fight the scene | `palette` from the scene's own ramp, or a `PAL` ramp in the same family |\n| a loop that pops off | `fx.stop()` and let it fade, rather than deleting it |\n| a stranger standing in for the player | pass `actor` to effects that wrap a character |\n\n## Picking effects\n\nPick from the categories below by their names. Then read the categories you need with this same tool: `skill` with `name: \"pixel-game\"` and `guide` set to category ids, for example `guide: \"impacts,pickups\"`. At most four per call. Each guide gives every effect in its category: what it does, one-shot or loop and how long, how far it reaches from its anchor, its act timing, and its own options. An effect's id is `<category>/<name>`, imported from `https://cdn.jsdelivr.net/gh/patch-gg/pixelfx@5294518ce7c72e48b6100a744596e0acf57f2826/src/fx/<id>.js`. Only the ids in the guides exist. Don't re-read a guide that is still in this conversation.\n",et=`## Effects

### moves: whole attacks, wind-up to recovery, chained from the effects below

arrow-shot, dash-strike, earth-stomp, fireball-throw, ground-pound, holy-smite, ice-lance-throw, lightning-call, meteor-call, pistol-shots, rocket-launcher, sword-combo

### fire: torches, breath, pillars, walls of flame

brazier, campfire, candle, fire-breath, fire-ring, fire-tornado, fireball, flame-pillar, flamethrower, meteor, spirit-flame, torch

### explosions: blasts, smoke, fireworks, mushroom clouds

barrel-explosion, big-explosion, cartoon-pow, dirt-explosion, firework-burst, firework-rocket, grenade, implosion, nuke, plasma-explosion, small-explosion, smoke-bomb

### water: splashes, falls, fountains, waves

bubbles, drip, fountain, geyser, rain-splash, ripples, splash, water-jet, water-orb, waterfall, wave-crash, whirlpool

### ice: spikes, novas, freezing, shattering

blizzard-vortex, freeze, frost-breath, frost-nova, ice-crystal, ice-lance, ice-shatter, ice-spikes, icicle-fall, snowflake-burst

### lightning: strikes, arcs, coils, storms

ball-lightning, chain-lightning, charge-up, electrified, lightning-strike, plasma-ball, spark-arc, storm-cloud, tesla-coil, thunderclap, zap-hit

### scifi: holograms, shields, scanners, warps

emp-blast, energy-core, force-field, glitch, hologram, jetpack, laser-grid, scanner, teleporter-pad, tractor-beam, warp-in, warp-out

### melee: slashes, smears, cleaves, combos

claw-swipe, dagger-flurry, double-slash, hammer-smash, heavy-cleave, scythe-reap, spear-sweep, spin-slash, sword-slash, thrust, uppercut, whip-crack

### impacts: hit sparks, shockwaves, landings

blunt-hit, bullet-impact, crit-hit, ground-slam, heavy-landing, hit-flash, hit-spark, impact-frame, parry, ricochet, shield-block

### projectiles: bullets, rockets, lasers, arrows

arrow, bullet-tracer, cannonball, energy-disc, flare, homing-missile, laser-bolt, magic-missile, muzzle-pistol, muzzle-shotgun, muzzle-smg, plasma-shot, rocket

### spawn: poofs, portals, souls, shatters

coin-drop, disintegrate, dissolve-burn, egg-hatch, poof, respawn-beam, shatter-death, soul-rise, spawn-portal, summon-rise

### arcane: portals, runes, missiles, beams

arcane-beam, arcane-missiles, arcane-orb, blink-in, blink-out, magic-circle-cast, mana-burst, portal, rune-circle, spell-charge, star-fall, time-stop

### holy: heals, halos, pillars of light

blessing, divine-shield, feather-burst, halo, heal-aoe, heal, holy-pillar, resurrection, smite, sunburst

### shadow: curses, voids, tendrils, souls

black-hole, curse, dark-explosion, eclipse, grasping-hands, hex-sigil, life-steal, necro-skulls, shadow-flames, shadow-tendrils, soul-drain, void-orb

### status: burning, frozen, poisoned, asleep

bleeding, burning, charmed, confused, cursed, frozen, haste, petrified, poisoned, rage, sleep, slowed, stunned

### nature: poison, vines, thorns, quakes

acid-splash, boulder, earth-spike, healing-bloom, leaf-storm, poison-cloud, quake, root-snare, spore-burst, thorns, tornado, toxic-puddle, vine-whip

### weather: rain, snow, fog, aurora

aurora, blizzard, cherry-blossoms, clouds, falling-leaves, fireflies, fog, god-rays, rain, shooting-stars, snow, storm

### ui: level ups, numbers, toasts, countdowns

achievement, coin-collect, combo-counter, confetti, countdown, crit-number, damage-number, exclamation, health-bar-hit, heart-lost, level-up, quest-complete

### pickups: coins, gems, chests, potions

chest-open, coin-spin, collect-burst, crystal-shard, gem-spin, heart-pickup, key-glint, loot-beam, potion, power-star, xp-orb

### transitions: wipes, irises, dissolves

blinds, burn-away, crt-off, diamond-wipe, glitch-wipe, iris, pixel-dissolve, shatter-wipe, slash-wipe, star-iris

### critters: slimes, bats, ghosts, frogs

bat, bird, butterfly, eyeball, fish-school, flying-skull, frog, ghost, jellyfish, slime, snake, wisp
`,tt=new Map(Object.entries(Object.assign({"../skills/modern-web-guidance/guides/accessibility/accessibility.md":()=>t(()=>import("./accessibility-DdHe_aK6.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/accessibility/accessible-error-announcement.md":()=>t(()=>import("./accessible-error-announcement-C4Ai0jml.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/accessibility/accessible-generated-content.md":()=>t(()=>import("./accessible-generated-content-CjSaOGTm.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/accessibility/respect-os-text-scale.md":()=>t(()=>import("./respect-os-text-scale-DSH65ikZ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/animate-to-intrinsic-sizes.md":()=>t(()=>import("./animate-to-intrinsic-sizes-BfurC-dg.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/atrule-support-conditionals.md":()=>t(()=>import("./atrule-support-conditionals-CmkKqpuM.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/calculate-with-intrinsic-sizes.md":()=>t(()=>import("./calculate-with-intrinsic-sizes-BIM7wVUP.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/child-state-based-styling.md":()=>t(()=>import("./child-state-based-styling-ComW4Hb6.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/content-based-styling.md":()=>t(()=>import("./content-based-styling-CfsjfNAK.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/css-layout.md":()=>t(()=>import("./css-layout-BzxDyMzp.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/css.md":()=>t(()=>import("./css-C8IkNfK1.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/design-token-reactivity.md":()=>t(()=>import("./design-token-reactivity-B466_cQk.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/dynamic-sibling-styling.md":()=>t(()=>import("./dynamic-sibling-styling-DJduNsfh.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/fluid-scaling.md":()=>t(()=>import("./fluid-scaling-CVfTA-7m.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/individual-transform-properties.md":()=>t(()=>import("./individual-transform-properties-CCDL67QR.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/overflow-clipping-control.md":()=>t(()=>import("./overflow-clipping-control-Dk7DTxYa.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/reduce-style-repetition.md":()=>t(()=>import("./reduce-style-repetition-DqoKQ57z.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/responsive-design.md":()=>t(()=>import("./responsive-design-BnDlkNpx.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/selector-atrule-combinations.md":()=>t(()=>import("./selector-atrule-combinations-BbKSLI9P.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/size-aware-styling.md":()=>t(()=>import("./size-aware-styling-BvWO4aCA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/style-parent-with-has.md":()=>t(()=>import("./style-parent-with-has-D3AuH1ex.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/css/usage-aware-component-variations.md":()=>t(()=>import("./usage-aware-component-variations-BjDn5qRZ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/animated-select-picker.md":()=>t(()=>import("./animated-select-picker-p4Cm19Mp.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/autofill-address-form.md":()=>t(()=>import("./autofill-address-form-CXR7vT6E.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/autofill-highlight-inputs.md":()=>t(()=>import("./autofill-highlight-inputs-CxgU2wwT.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/autofill-payment-form.md":()=>t(()=>import("./autofill-payment-form-CDAesP2e.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/autofill-sign-in-form.md":()=>t(()=>import("./autofill-sign-in-form-zUNlw3Aa.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/autofill-sign-up-form.md":()=>t(()=>import("./autofill-sign-up-form-CVluKvMq.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/brand-consistent-forms.md":()=>t(()=>import("./brand-consistent-forms-BjYcD9lk.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/branded-select-styling.md":()=>t(()=>import("./branded-select-styling-mMOai-C7.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/custom-select-picker-layouts.md":()=>t(()=>import("./custom-select-picker-layouts-CruZmGI8.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/form-fields-automatically-fit-contents.md":()=>t(()=>import("./form-fields-automatically-fit-contents-8hzhdRIA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/forms.md":()=>t(()=>import("./forms-CfDY0eIs.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/ime-safe-enter-submit.md":()=>t(()=>import("./ime-safe-enter-submit-CXhIzwV8.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/required-field-feedback.md":()=>t(()=>import("./required-field-feedback-CojOY7Ge.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/rich-media-picker.md":()=>t(()=>import("./rich-media-picker-CVh212tb.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/select-menu-interaction.md":()=>t(()=>import("./select-menu-interaction-zSj-7JfQ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/slider.md":()=>t(()=>import("./slider-CC7gxI4W.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/sms-otp-form.md":()=>t(()=>import("./sms-otp-form-DvVrmm5w.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/switch.md":()=>t(()=>import("./switch-D_fG_E2R.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/forms/validate-input-after-interaction.md":()=>t(()=>import("./validate-input-after-interaction-CCUaBxu7.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/accessible-web-components.md":()=>t(()=>import("./accessible-web-components-D37F1aPE.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/custom-elements.md":()=>t(()=>import("./custom-elements-DRZ37pkE.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/form-associated-custom-elements.md":()=>t(()=>import("./form-associated-custom-elements-wdTfO-jT.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/html.md":()=>t(()=>import("./html-DUTWvd-o.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/prerendering-custom-elements.md":()=>t(()=>import("./prerendering-custom-elements-qpYJRSdq.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/shadow-dom.md":()=>t(()=>import("./shadow-dom-CU37VGQl.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/styling-web-components.md":()=>t(()=>import("./styling-web-components-Dyszr0nb.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/html/web-components.md":()=>t(()=>import("./web-components-zXpRrzFs.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/js/calculate-event-differentials.md":()=>t(()=>import("./calculate-event-differentials-xQDilcqc.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/js/capture-location-agnostic-data.md":()=>t(()=>import("./capture-location-agnostic-data-94u5JlVp.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/js/coordinate-global-events.md":()=>t(()=>import("./coordinate-global-events-DoKFeXp-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/js/sort-high-precision-timestamps.md":()=>t(()=>import("./sort-high-precision-timestamps-DhV9jNK2.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/js/support-global-calendar-systems.md":()=>t(()=>import("./support-global-calendar-systems-B7jnEqk3.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/batch-analytics-events.md":()=>t(()=>import("./batch-analytics-events-Cu2OGplz.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/break-up-long-tasks.md":()=>t(()=>import("./break-up-long-tasks-DWbEtQyh.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/calculate-total-foreground-time.md":()=>t(()=>import("./calculate-total-foreground-time--KObpnCX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/conditional-async-dependencies.md":()=>t(()=>import("./conditional-async-dependencies-B_aZEUyr.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/defer-rendering-heavy-content.md":()=>t(()=>import("./defer-rendering-heavy-content-DTNPeAiX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/defer-work-until-scroll-ends.md":()=>t(()=>import("./defer-work-until-scroll-ends-DiMZuhfd.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/deliver-optimized-decorative-images.md":()=>t(()=>import("./deliver-optimized-decorative-images-APukhK8z.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/deprioritize-background-fetches.md":()=>t(()=>import("./deprioritize-background-fetches-BK6R48FY.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/detect-initial-visibility-state.md":()=>t(()=>import("./detect-initial-visibility-state-lROyvc0T.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/efficient-background-processing.md":()=>t(()=>import("./efficient-background-processing-BZEDyz8-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/faster-spa-view-transitions.md":()=>t(()=>import("./faster-spa-view-transitions-aGre43OT.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/flicker-free-client-side-ab-testing.md":()=>t(()=>import("./flicker-free-client-side-ab-testing-CqQ8F7rO.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/full-session-analytics.md":()=>t(()=>import("./full-session-analytics-BvNxl37g.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/identify-heavy-scripts.md":()=>t(()=>import("./identify-heavy-scripts-IUvBVVGA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/identify-inp-causes.md":()=>t(()=>import("./identify-inp-causes-CGspbJJF.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/improve-next-page-load-performance.md":()=>t(()=>import("./improve-next-page-load-performance-BiKldKwo.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/interaction-paint-timing.md":()=>t(()=>import("./interaction-paint-timing-CnPkhj4t.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/interactions-in-complex-layouts.md":()=>t(()=>import("./interactions-in-complex-layouts-CfN_R5AF.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/lazy-load-video-and-audio.md":()=>t(()=>import("./lazy-load-video-and-audio-C4zUUrbQ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/optimize-image-priority.md":()=>t(()=>import("./optimize-image-priority-DNKQw_ZI.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/optimize-preload-priority.md":()=>t(()=>import("./optimize-preload-priority-BJGroqpQ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/optimize-script-priority.md":()=>t(()=>import("./optimize-script-priority-DFr3jdpe.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/performance.md":()=>t(()=>import("./performance-Bc8r-Pd-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/resolution-optimized-pseudo-elements.md":()=>t(()=>import("./resolution-optimized-pseudo-elements-BxKGhJwJ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/performance/schedule-tasks-by-priority.md":()=>t(()=>import("./schedule-tasks-by-priority-CU0cn-NF.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/privacy/privacy.md":()=>t(()=>import("./privacy-C8eBgRp0.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/pwa/install-web-app.md":()=>t(()=>import("./install-web-app-CvodTFx5.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/pwa/migrate-web-app-origin.md":()=>t(()=>import("./migrate-web-app-origin-BR5zG8eL.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/local-network-access.md":()=>t(()=>import("./local-network-access-wnWMMhvU.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkey-authentication.md":()=>t(()=>import("./passkey-authentication-CbUGu_bj.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkey-conditional-create.md":()=>t(()=>import("./passkey-conditional-create-BNzduup_.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkey-management.md":()=>t(()=>import("./passkey-management-BMZ3fiXs.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkey-reauthentication.md":()=>t(()=>import("./passkey-reauthentication-DmcmGmw1.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkey-registration.md":()=>t(()=>import("./passkey-registration-DlkDwI9c.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/passkeys.md":()=>t(()=>import("./passkeys-B8hEVMsv.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/quick-sign-ins.md":()=>t(()=>import("./quick-sign-ins-C9VO8kB8.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/sanitize-untrusted-html.md":()=>t(()=>import("./sanitize-untrusted-html-DuxDZmOM.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/secure-external-subresources.md":()=>t(()=>import("./secure-external-subresources-BzyLOZih.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/security.md":()=>t(()=>import("./security-C3C16KLu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/trusted-types.md":()=>t(()=>import("./trusted-types-CmKYsR3w.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/security/validate-origins.md":()=>t(()=>import("./validate-origins-CQKOJAHD.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/carousel-slide-effects.md":()=>t(()=>import("./carousel-slide-effects-BlP7lPs6.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/component-specific-light-dark-theme.md":()=>t(()=>import("./component-specific-light-dark-theme-BCO42j0S.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/icons.md":()=>t(()=>import("./icons-CS590wfu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/position-aware-tooltips.md":()=>t(()=>import("./position-aware-tooltips-DxpaNUwo.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/pull-to-reveal.md":()=>t(()=>import("./pull-to-reveal-Cxrv7XvY.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/responsive-table.md":()=>t(()=>import("./responsive-table-Dl3GlfP3.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/scroll-position-aware-elements.md":()=>t(()=>import("./scroll-position-aware-elements-BniMlAOc.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/scroll-progress-indicator.md":()=>t(()=>import("./scroll-progress-indicator-CA9SIYyv.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/scrollability-affordance-hints.md":()=>t(()=>import("./scrollability-affordance-hints-ZJLShBOP.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/shrinking-header-on-scroll.md":()=>t(()=>import("./shrinking-header-on-scroll-Dv-R84uw.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/single-line-overflow.md":()=>t(()=>import("./single-line-overflow-CoWqLh78.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/state-aware-sticky-headers.md":()=>t(()=>import("./state-aware-sticky-headers-BPdcSr2K.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-atoms/viewport-aware-dropdowns.md":()=>t(()=>import("./viewport-aware-dropdowns-DGaxqPdD.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/anchor-positioning-tab-underline.md":()=>t(()=>import("./anchor-positioning-tab-underline-DARZgmpV.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/animate-element-entry-exit.md":()=>t(()=>import("./animate-element-entry-exit-nY-i2_6B.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/animate-to-from-top-layer.md":()=>t(()=>import("./animate-to-from-top-layer-9jX140OS.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/carousel-snap-highlights.md":()=>t(()=>import("./carousel-snap-highlights-eb3bkt8q.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/consistent-cross-document-transitions.md":()=>t(()=>import("./consistent-cross-document-transitions-PDbOQOLX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/cross-document-transitions.md":()=>t(()=>import("./cross-document-transitions-BdZgUTdk.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/custom-button-actions.md":()=>t(()=>import("./custom-button-actions-qso3MNL_.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/declarative-dialog-popover-control.md":()=>t(()=>import("./declarative-dialog-popover-control-BiMaCu2c.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/directional-navigation-transitions.md":()=>t(()=>import("./directional-navigation-transitions-BnM0IcMp.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/drag-and-drop.md":()=>t(()=>import("./drag-and-drop-BCCkXriG.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/drag.md":()=>t(()=>import("./drag-fnFFtsnu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/dynamic-sibling-animations.md":()=>t(()=>import("./dynamic-sibling-animations-C4F7Mh0N.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/dynamic-sort.md":()=>t(()=>import("./dynamic-sort-CzqT3YXA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/group-element-transitions.md":()=>t(()=>import("./group-element-transitions-C6L75ezX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/highlight-text-ranges.md":()=>t(()=>import("./highlight-text-ranges-CkknigiA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/interactive-content-reveal.md":()=>t(()=>import("./interactive-content-reveal-CLD9WPJj.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/interest-triggered-action-previews.md":()=>t(()=>import("./interest-triggered-action-previews-DWOQKStW.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/interest-triggered-tooltips.md":()=>t(()=>import("./interest-triggered-tooltips-sT48pQ5x.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/light-dismiss-a-dialog.md":()=>t(()=>import("./light-dismiss-a-dialog-CCfdAZwC.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/motion.md":()=>t(()=>import("./motion-CJeELZLA.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/move-dom-element-without-losing-state.md":()=>t(()=>import("./move-dom-element-without-losing-state-ZPGzi94v.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/parallax-scroll-effects.md":()=>t(()=>import("./parallax-scroll-effects-WtgbmUWw.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/persistent-top-layer-ui.md":()=>t(()=>import("./persistent-top-layer-ui-DN6vCz57.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/physics-based-easing.md":()=>t(()=>import("./physics-based-easing-B6kCmOVt.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/platform-controls-dismiss-dialog.md":()=>t(()=>import("./platform-controls-dismiss-dialog-Dznz3GTQ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/prevent-page-scroll-under-modal-dialog.md":()=>t(()=>import("./prevent-page-scroll-under-modal-dialog-fHX0sGch.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/same-document-transitions.md":()=>t(()=>import("./same-document-transitions-BQd3Z90w.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scoped-component-transitions.md":()=>t(()=>import("./scoped-component-transitions-_Y3dFALt.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scroll-completion-effects.md":()=>t(()=>import("./scroll-completion-effects-CfwDk0aL.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scroll-entry-exit-effects.md":()=>t(()=>import("./scroll-entry-exit-effects-Ctk0UFH9.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scroll-snap-realtime-feedback.md":()=>t(()=>import("./scroll-snap-realtime-feedback-BvfUxd0i.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scroll-snap-state-sync.md":()=>t(()=>import("./scroll-snap-state-sync-CQVSpamW.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scroll-target-on-load.md":()=>t(()=>import("./scroll-target-on-load-DBCaE6Kz.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/scrollytelling.md":()=>t(()=>import("./scrollytelling-CaCcicV3.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/search-hidden-content.md":()=>t(()=>import("./search-hidden-content-DgibeoYj.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/sortable-table.md":()=>t(()=>import("./sortable-table-Abw7sV4V.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/spatial-navigation.md":()=>t(()=>import("./spatial-navigation-ZVQXbeI1.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/swipe-to-remove.md":()=>t(()=>import("./swipe-to-remove-Dhb7MYAa.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-behaviors/swipe-to-reveal.md":()=>t(()=>import("./swipe-to-reveal-Bewu2GMI.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/accordion.md":()=>t(()=>import("./accordion-DNOP8dzE.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/app-menus.md":()=>t(()=>import("./app-menus-BNNVfNeg.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/breadcrumbs.md":()=>t(()=>import("./breadcrumbs-BJnw6aNJ.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/card.md":()=>t(()=>import("./card-DFihSXqX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/carousel.md":()=>t(()=>import("./carousel-CNpLMTEK.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/checkbox.md":()=>t(()=>import("./checkbox-CqEMVNUE.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/copy-button.md":()=>t(()=>import("./copy-button-8wp4KXzT.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/dark-mode-toggle.md":()=>t(()=>import("./dark-mode-toggle-DfWVLMhv.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/dialog.md":()=>t(()=>import("./dialog-B8c-RQip.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/hovercard.md":()=>t(()=>import("./hovercard-BOvcMVu9.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/menu.md":()=>t(()=>import("./menu-fVnKTUOR.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/navbar.md":()=>t(()=>import("./navbar-Bjbf7mHP.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/navigation-drawer.md":()=>t(()=>import("./navigation-drawer-D0B9yBHX.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/persistent-app-tours.md":()=>t(()=>import("./persistent-app-tours-nVFlJi_7.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/persistent-toast-notifications.md":()=>t(()=>import("./persistent-toast-notifications-y5NMqG1I.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/progress-ring.md":()=>t(()=>import("./progress-ring-cjQo_zGu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/progress.md":()=>t(()=>import("./progress-kX3pske5.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/scrollspy.md":()=>t(()=>import("./scrollspy-tRu43Oh9.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/spinner.md":()=>t(()=>import("./spinner-D6qYqcll.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/stack-drill-down.md":()=>t(()=>import("./stack-drill-down-BXe9wIJi.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/tabs.md":()=>t(()=>import("./tabs-BloHKZde.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/ui-components/toolbar.md":()=>t(()=>import("./toolbar-DaA76h2B.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/user-experience/content-first-noise-reduction.md":()=>t(()=>import("./content-first-noise-reduction-BxEYOOt-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/user-experience/form-factor-adaptation.md":()=>t(()=>import("./form-factor-adaptation-DHK5TQR-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/user-experience/natural-interactions.md":()=>t(()=>import("./natural-interactions-WmtBM2C1.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/adapt-scrollbar-to-contrast-preferences.md":()=>t(()=>import("./adapt-scrollbar-to-contrast-preferences-DgIhzsor.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/browser-ui-theming.md":()=>t(()=>import("./browser-ui-theming-DHwcbFhx.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/color.md":()=>t(()=>import("./color-BUfen3zS.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/complex-shapes.md":()=>t(()=>import("./complex-shapes-Do1vJcGu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/contrast-color.md":()=>t(()=>import("./contrast-color-Ds6DWy0-.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/customize-scrollbar-color-and-thickness.md":()=>t(()=>import("./customize-scrollbar-color-and-thickness-ChDL_Nbw.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/dark-mode.md":()=>t(()=>import("./dark-mode-CHfq5PHt.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/equal-width-text-lines.md":()=>t(()=>import("./equal-width-text-lines-Dvt7fZBW.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/improve-text-layout-and-legibility.md":()=>t(()=>import("./improve-text-layout-and-legibility-DFr4e-q_.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/precise-text-alignment.md":()=>t(()=>import("./precise-text-alignment-__JLBKkB.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/shaped-cutouts.md":()=>t(()=>import("./shaped-cutouts-AiqkePgK.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/soft-edge-content-fade.md":()=>t(()=>import("./soft-edge-content-fade-BhAkL3aR.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/typography.md":()=>t(()=>import("./typography-Bw9vJYs6.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/visual-effects.md":()=>t(()=>import("./visual-effects-DX5TRghG.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/visually-stable-font-fallbacks.md":()=>t(()=>import("./visually-stable-font-fallbacks-D6iZhU83.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/visually-stable-mixed-fonts.md":()=>t(()=>import("./visually-stable-mixed-fonts-BKdXUpN7.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/visual-design/visually-texture-content.md":()=>t(()=>import("./visually-texture-content-C2aSsmSu.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/wasm/cpp-on-the-web.md":()=>t(()=>import("./cpp-on-the-web-Bn2P2OFp.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/webmcp/agentic-forms.md":()=>t(()=>import("./agentic-forms-DiZJycVg.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/webmcp/agentic-javascript-tools.md":()=>t(()=>import("./agentic-javascript-tools-BDCuW9Cr.js"),[],import.meta.url).then(e=>e.default),"../skills/modern-web-guidance/guides/webmcp/webmcp.md":()=>t(()=>import("./webmcp-DD2unrQO.js"),[],import.meta.url).then(e=>e.default)})).map(([e,n])=>[e.slice(e.lastIndexOf("/")+1,-3),n])),nt=new Map(Object.entries(Object.assign({"../skills/pixel-game/guides/arcane.md":()=>t(()=>import("./arcane-4Kaftyqi.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/critters.md":()=>t(()=>import("./critters-B-ntks8s.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/explosions.md":()=>t(()=>import("./explosions-CwNpWnc0.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/fire.md":()=>t(()=>import("./fire-DDfqrsDz.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/holy.md":()=>t(()=>import("./holy-kD9LeO5j.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/ice.md":()=>t(()=>import("./ice-DyRc5WCy.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/impacts.md":()=>t(()=>import("./impacts-DSU39eS9.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/lightning.md":()=>t(()=>import("./lightning-_DFJhrsx.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/melee.md":()=>t(()=>import("./melee-BP7EQng9.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/moves.md":()=>t(()=>import("./moves-DpbHPzIx.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/nature.md":()=>t(()=>import("./nature-CEs2FvbO.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/pickups.md":()=>t(()=>import("./pickups-BkBRvHsO.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/projectiles.md":()=>t(()=>import("./projectiles-09kDg4YH.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/scifi.md":()=>t(()=>import("./scifi-BGZpOv8B.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/shadow.md":()=>t(()=>import("./shadow-CKrRPAdt.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/spawn.md":()=>t(()=>import("./spawn-Dws1X1vu.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/status.md":()=>t(()=>import("./status-DEb0GjaT.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/transitions.md":()=>t(()=>import("./transitions-CiYmRhRb.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/ui.md":()=>t(()=>import("./ui-BqahapPA.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/water.md":()=>t(()=>import("./water-Rx-pjfS8.js"),[],import.meta.url).then(e=>e.default),"../skills/pixel-game/guides/weather.md":()=>t(()=>import("./weather-B-S6Q2m2.js"),[],import.meta.url).then(e=>e.default)})).map(([e,n])=>[e.slice(e.lastIndexOf("/")+1,-3),n])),at=[{name:"aero-app-style",description:"The unified aero visual style guide: the shared stylesheet /aero-ui.css (design tokens, components), typography, layout, motion. REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:Ge,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state. Also REQUIRED before changing a page that already loads /aero-db.js: its tables hold people's real data, which a code change can destroy.",content:$e,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:Xe,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-ai",description:"Calling Aero's built-in AI SDK (/aero-ai.js) from a published page, on the visitor's own models — chat, generation, structured output, an assistant that uses the page's own tools, fast yes/no, choice and score decisions (AeroAI.decide), and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:Ye,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-agent-tools",description:"Making a page usable by AI agents with WebMCP: its forms declared as tools, its other actions registered with document.modelContext.registerTool, and testing them in the preview. REQUIRED before the first draft of an app page (one with a form, a button that does something, or data it keeps) and before adding or changing a form or an action on one; not for a page that only shows content, or slides.",content:Je,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"modern-web-guidance",description:"Native HTML, CSS and browser-API patterns with browser-support fallbacks, from the Chrome, Edge, Firefox and MDN teams — dialogs, popovers, menus, tabs, forms, validation, animation, scroll effects, layout, dark mode, accessibility, performance, security. REQUIRED before a new page's first draft (not a slide deck) and before adding or reworking an interactive pattern; not for copy, colour or content tweaks.",content:`${Ke}
${Qe}`,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0,readGuide:e=>{var n;return((n=tt.get(e))==null?void 0:n())??Promise.resolve(void 0)}},{name:"pixel-game",description:"Pixel-art browser games on a canvas: a low-res play area scaled up crisp, the game loop, keyboard and touch input, sprites and pixel text drawn in code, and 244 ready-made pixel effects from the pixelfx library (fire, explosions, magic, hits, pickups, weather, critters, UI) with recolouring, hit-stop and screen shake. REQUIRED before building an arcade, action or pixel-art game or toy, and before adding effects to one; not for quizzes, word or card games without an animated play area.",content:`${Ze}
${et}`,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0,readGuide:e=>{var n;return((n=nt.get(e))==null?void 0:n())??Promise.resolve(void 0)}}];async function Tt(e){const n=[...at],a=new Set(n.map(r=>r.name)),i=r=>r.access==="owner"?0:r.access==="manager"?1:2,s=[...e].sort((r,l)=>i(r)-i(l)||l.updatedAt-r.updatedAt);for(const r of s){if(!r.content.trim())continue;let l=r.name;for(let c=2;a.has(l);c++)l=`${r.name}-${c}`;a.add(l);let d=[];if(!S(r.id))try{d=await Se(r.id)}catch{}n.push({name:l,description:r.description,content:r.content,source:"remote",id:S(r.id)?void 0:r.id,files:r.files,envSchema:r.envSchema,envSet:d,allowedHosts:r.allowedHosts})}return n}const D="⬤ ";let R=!1;function it(){if(R||!document.title||document.title.startsWith(D))return;R=!0,document.title=D+document.title;const e=()=>{document.hidden||(document.title.startsWith(D)&&(document.title=document.title.slice(D.length)),R=!1,document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)}let V=!1;function Dt(){V||typeof Notification>"u"||(V=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function Pt(e){if(!document.hidden)return;const n=e.ok?"Aero finished your request":"Aero hit an error",a=e.ok?e.done??"The page has been updated — come take a look.":e.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const i=new Notification(n,{body:a,tag:"aero-turn-done"});i.onclick=()=>{window.focus(),i.close()},setTimeout(()=>i.close(),8e3);return}catch{}it()}class ot{diff(n,a,i={}){let s;typeof i=="function"?(s=i,i={}):"callback"in i&&(s=i.callback);const r=this.castInput(n,i),l=this.castInput(a,i),d=this.removeEmpty(this.tokenize(r,i)),c=this.removeEmpty(this.tokenize(l,i));return this.diffWithOptionsObj(d,c,i,s)}diffWithOptionsObj(n,a,i,s){var r;const l=p=>{if(p=this.postProcess(p,i),s){setTimeout(function(){s(p)},0);return}else return p},d=a.length,c=n.length;let b=1,u=d+c;i.maxEditLength!=null&&(u=Math.min(u,i.maxEditLength));const m=(r=i.timeout)!==null&&r!==void 0?r:1/0,g=Date.now()+m,h=[{oldPos:-1,lastComponent:void 0}];let w=this.extractCommon(h[0],a,n,0,i);if(h[0].oldPos+1>=c&&w+1>=d)return l(this.buildValues(h[0].lastComponent,a,n));let y=-1/0,E=1/0;const x=()=>{for(let p=Math.max(y,-b);p<=Math.min(E,b);p+=2){let v;const f=h[p-1],_=h[p+1];f&&(h[p-1]=void 0);let A=!1;if(_){const O=_.oldPos-p;A=_&&0<=O&&O<d}const I=f&&f.oldPos+1<c;if(!A&&!I){h[p]=void 0;continue}if(!I||A&&f.oldPos<_.oldPos?v=this.addToPath(_,!0,!1,0,i):v=this.addToPath(f,!1,!0,1,i),w=this.extractCommon(v,a,n,p,i),v.oldPos+1>=c&&w+1>=d)return l(this.buildValues(v.lastComponent,a,n))||!0;h[p]=v,v.oldPos+1>=c&&(E=Math.min(E,p-1)),w+1>=d&&(y=Math.max(y,p+1))}b++};if(s)(function p(){setTimeout(function(){if(b>u||Date.now()>g)return s(void 0);x()||p()},0)})();else for(;b<=u&&Date.now()<=g;){const p=x();if(p)return p}}addToPath(n,a,i,s,r){const l=n.lastComponent;return l&&!r.oneChangePerToken&&l.added===a&&l.removed===i?{oldPos:n.oldPos+s,lastComponent:{count:l.count+1,added:a,removed:i,previousComponent:l.previousComponent}}:{oldPos:n.oldPos+s,lastComponent:{count:1,added:a,removed:i,previousComponent:l}}}extractCommon(n,a,i,s,r){const l=a.length,d=i.length;let c=n.oldPos,b=c-s,u=0;for(;b+1<l&&c+1<d&&this.equals(i[c+1],a[b+1],r);)b++,c++,u++,r.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return u&&!r.oneChangePerToken&&(n.lastComponent={count:u,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=c,b}equals(n,a,i){return i.comparator?i.comparator(n,a):n===a||!!i.ignoreCase&&n.toLowerCase()===a.toLowerCase()}removeEmpty(n){const a=[];for(let i=0;i<n.length;i++)n[i]&&a.push(n[i]);return a}castInput(n,a){return n}tokenize(n,a){return Array.from(n)}join(n){return n.join("")}postProcess(n,a){return n}get useLongestToken(){return!1}buildValues(n,a,i){const s=[];let r;for(;n;)s.push(n),r=n.previousComponent,delete n.previousComponent,n=r;s.reverse();const l=s.length;let d=0,c=0,b=0;for(;d<l;d++){const u=s[d];if(u.removed)u.value=this.join(i.slice(b,b+u.count)),b+=u.count;else{if(!u.added&&this.useLongestToken){let m=a.slice(c,c+u.count);m=m.map(function(g,h){const w=i[b+h];return w.length>g.length?w:g}),u.value=this.join(m)}else u.value=this.join(a.slice(c,c+u.count));c+=u.count,u.added||(b+=u.count)}}return s}}class st extends ot{constructor(){super(...arguments),this.tokenize=lt}equals(n,a,i){return i.ignoreWhitespace?((!i.newlineIsToken||!n.includes(`
`))&&(n=n.trim()),(!i.newlineIsToken||!a.includes(`
`))&&(a=a.trim())):i.ignoreNewlineAtEof&&!i.newlineIsToken&&(n.endsWith(`
`)&&(n=n.slice(0,-1)),a.endsWith(`
`)&&(a=a.slice(0,-1))),super.equals(n,a,i)}}const rt=new st;function j(e,n,a){return rt.diff(e,n,a)}function lt(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const a=[],i=e.split(/(\n|\r\n)/);i[i.length-1]||i.pop();for(let s=0;s<i.length;s++){const r=i[s];s%2&&!n.newlineIsToken?a[a.length-1]+=r:a.push(r)}return a}function dt(e,n,a,i,s,r,l){let d;l?typeof l=="function"?d={callback:l}:d=l:d={},typeof d.context>"u"&&(d.context=4);const c=d.context;if(d.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(d.callback){const{callback:u}=d;j(a,i,Object.assign(Object.assign({},d),{callback:m=>{const g=b(m);u(g)}}))}else return b(j(a,i,d));function b(u){if(!u)return;u.push({value:"",lines:[]});function m(p){return p.map(function(v){return" "+v})}const g=[];let h=0,w=0,y=[],E=1,x=1;for(let p=0;p<u.length;p++){const v=u[p],f=v.lines||ct(v.value);if(v.lines=f,v.added||v.removed){if(!h){const _=u[p-1];h=E,w=x,_&&(y=c>0?m(_.lines.slice(-c)):[],h-=y.length,w-=y.length)}for(const _ of f)y.push((v.added?"+":"-")+_);v.added?x+=f.length:E+=f.length}else{if(h)if(f.length<=c*2&&p<u.length-2)for(const _ of m(f))y.push(_);else{const _=Math.min(f.length,c);for(const I of m(f.slice(0,_)))y.push(I);const A={oldStart:h,oldLines:E-h+_,newStart:w,newLines:x-w+_,lines:y};g.push(A),h=0,w=0,y=[]}E+=f.length,x+=f.length}}for(const p of g)for(let v=0;v<p.lines.length;v++)p.lines[v].endsWith(`
`)?p.lines[v]=p.lines[v].slice(0,-1):(p.lines.splice(v+1,0,"\\ No newline at end of file"),v++);return{oldFileName:e,newFileName:n,oldHeader:s,newHeader:r,hunks:g}}}function ct(e){const n=e.endsWith(`
`),a=e.split(`
`).map(i=>i+`
`);return n?a.pop():a.push(a.pop().slice(0,-1)),a}function Lt(e){const n=pe(),[a,i]=k.useState(null),[s,r]=k.useState(null),[l,d]=k.useState(null),c=k.useRef(e);c.current=e,k.useEffect(()=>{if(!n)return;let h=!0;return i(null),r(null),d(null),(async()=>{const w=await Ve(e).catch(()=>{})??null,y=w?await T(w).catch(()=>"prompt"):null;h&&(i(w),r(y))})(),()=>{h=!1}},[e,n]);const b=k.useCallback(async()=>{d(null);try{const h=await me();if(!h||c.current!==e||(await je(e,h),c.current!==e))return;i(h),r(await T(h))}catch(h){d(h instanceof Error?h.message:String(h))}},[e]),u=k.useCallback(async()=>{d(null);try{await Me(e)}catch(h){c.current===e&&d(`detaching it failed (${h instanceof Error?h.message:String(h)})`);return}c.current===e&&(i(null),r(null))},[e]),m=k.useCallback(async()=>{if(!a)return!1;let h;try{h=await T(a,!0)}catch{h=await T(a).catch(()=>"prompt")}return c.current===e&&r(h),h==="granted"},[a,e]),g=k.useCallback(async()=>a&&await m()?a:null,[a,m]);return{supported:n,folder:a,access:s,error:l,attach:b,detach:u,allow:m,forTurn:g}}const ut={list_dir:"listed",read_file:"read",grep_files:"searched files for",write_file:"wrote",edit_file:"edited",delete_path:"deleted",move_path:"moved"},ht={list_dir:q,read_file:F,grep_files:J,write_file:Y,edit_file:X,delete_path:$,move_path:G},M=1e6;function mt({name:e,detail:n,result:a}){const i=ht[e]??F,s=typeof(a==null?void 0:a.error)=="string"?a.error:null,r=e==="write_file"&&(a==null?void 0:a.created)===!0?"created":ut[e]??e,l=typeof(a==null?void 0:a.change_id)=="string"?a.change_id:null;return o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",title:s??void 0,children:[o.jsx(i,{className:P("h-3 w-3 shrink-0",s?"text-fg-3":"text-action")}),o.jsxs("span",{className:"min-w-0 truncate",children:[r," ",o.jsx("span",{className:"font-medium text-fg-2",children:n??""}),s?o.jsx("span",{className:"text-no-strong",children:" (failed)"}):null]})]}),l?o.jsx(gt,{changeId:l}):null]})}async function pt(e){return e?new TextDecoder("utf-8",{ignoreBOM:!0}).decode(await e.arrayBuffer()):""}function gt({changeId:e}){const n=Ce(),[a,i]=k.useState(void 0),[s,r]=k.useState(null),[l,d]=k.useState(!1),[c,b]=k.useState(!1),[u,m]=k.useState(null);if(k.useEffect(()=>{let E=!0;return C(e).then(x=>E&&i(x??null)).catch(()=>E&&i(null)),()=>{E=!1}},[e]),a===void 0)return null;if(a===null)return o.jsx("div",{className:"pl-[18px] text-[11px] text-fg-3",children:"This change can no longer be undone."});const g=a;async function h(){var E;if(l){d(!1);return}if(!s&&(g.op==="write"||g.op==="edit"))try{r({before:await pt((E=g.before[0])==null?void 0:E.data),after:g.after??""})}catch(x){m(`Could not read the old text: ${x instanceof Error?x.message:String(x)}`);return}d(!0)}async function w(E){b(!0),m(null);try{if(await T(g.root,!0)!=="granted"){m("Aero needs access to the folder to undo this.");return}const x=await ge(g,Ne,E);if("conflict"in x){await n({title:"Undo anyway?",body:x.conflict,confirmLabel:"Undo anyway",variant:"danger"})&&await w(!0);return}if("error"in x){m(x.error);return}i(await C(e)??{...g,undoneAt:Date.now()})}catch(x){m(x instanceof Error?x.message:String(x))}finally{b(!1)}}const y=g.op!=="move";return o.jsxs("div",{className:"space-y-1 pl-[18px] text-[11px]",children:[o.jsxs("div",{className:"flex items-center gap-3 text-fg-3",children:[y?o.jsx("button",{type:"button",onClick:()=>void h(),className:"hover:text-fg",children:l?"Hide changes":"Show changes"}):null,g.undoneAt?o.jsx("span",{children:"Undone"}):o.jsxs("button",{type:"button",disabled:c,onClick:()=>void w(!1),className:"inline-flex items-center gap-1 hover:text-fg disabled:opacity-50",children:[o.jsx(K,{className:"h-3 w-3"})," Undo"]}),u?o.jsx("span",{className:"text-no-strong",children:u}):null]}),l&&g.op==="delete"?o.jsx(ft,{change:g}):null,l&&s?o.jsx(bt,{before:s.before,after:s.after}):null]})}function ft({change:e}){var i;const n=e.before.slice(0,12),a=((i=e.dirs)==null?void 0:i.length)??0;return o.jsxs("div",{className:"rounded-md border border-border bg-surface px-2 py-1.5 text-fg-2",children:[a>0?o.jsxs("div",{className:"text-fg-3",children:[e.before.length," files in ",a," ",a===1?"folder":"folders",":"]}):null,n.map(s=>o.jsx("div",{className:"truncate font-mono",children:s.path},s.path)),e.before.length>n.length?o.jsxs("div",{className:"text-fg-3",children:["and ",e.before.length-n.length," more"]}):null]})}function bt({before:e,after:n}){const a=e.length>M||n.length>M,i=k.useMemo(()=>a?[]:dt("","",e,n,"","",{context:2}).hunks,[e,n,a]);return a?o.jsx("div",{className:"text-fg-3",children:"Too large to show the changes here."}):i.length===0?o.jsx("div",{className:"text-fg-3",children:"No differences."}):o.jsx("div",{className:"max-h-72 overflow-auto rounded-md border border-border bg-surface font-mono leading-5",children:i.map((s,r)=>o.jsxs("div",{className:"min-w-max",children:[o.jsxs("div",{className:"bg-surface-muted px-2 text-fg-3",children:["@@ -",s.oldStart,",",s.oldLines," +",s.newStart,",",s.newLines," @@"]}),s.lines.map((l,d)=>o.jsx("div",{className:P("whitespace-pre px-2",l.startsWith("+")&&"bg-success/10",l.startsWith("-")&&"bg-no-soft",!l.startsWith("+")&&!l.startsWith("-")&&"text-fg-2"),children:l||" "},d))]},r))})}const N=6;function wt(e){const n=e==null?void 0:e.calls;return Array.isArray(n)?n.filter(a=>typeof a=="object"&&a!==null&&typeof a.tool=="string"):[]}function B({call:e}){return fe.includes(e.tool)?o.jsx(mt,{name:e.tool,detail:e.detail,result:{...e.error?{error:e.error}:{},...e.change_id?{change_id:e.change_id}:{},...e.created?{created:!0}:{}}}):o.jsxs("div",{className:"flex min-w-0 items-center gap-1.5 text-[11px] text-fg-3",title:e.error,children:[o.jsx(Q,{className:"h-3 w-3 shrink-0"}),o.jsx("span",{className:"shrink-0 font-medium text-fg-2",children:e.tool}),e.detail?o.jsx("span",{className:"min-w-0 truncate",children:e.detail}):null,e.error?o.jsx("span",{className:"shrink-0 text-no-strong",children:"(failed)"}):null]})}function Rt({result:e}){const n=wt(e);if(n.length===0)return null;const a=n.slice(N);return o.jsxs("div",{className:"mt-1 space-y-0.5 border-l border-border pl-2",children:[n.slice(0,N).map((i,s)=>o.jsx(B,{call:i},s)),a.length>0?o.jsxs("details",{children:[o.jsxs("summary",{className:"cursor-pointer text-[11px] text-fg-3",children:[a.length," more call",a.length===1?"":"s"]}),o.jsx("div",{className:"mt-0.5 space-y-0.5",children:a.map((i,s)=>o.jsx(B,{call:i},s))})]}):null]})}function Ot({workspace:e,disabled:n,linkedPath:a,menuItems:i}){if(!e.supported)return null;const{folder:s,access:r,error:l}=e;if(!s)return o.jsx(H,{variant:"ghost",size:"sm",onClick:()=>void e.attach(),disabled:n,title:l?`Could not attach the folder: ${l}`:"Attach a folder from your computer for Aero to work in","aria-label":"Attach a folder",className:U,children:o.jsx(Z,{className:"h-3.5 w-3.5"})});const d=r!=="granted";let c=d?`Aero needs your OK to use “${s.name}” again; Chrome asks when you send`:`Aero can read and change files in “${s.name}”`;return l&&(c=`Could not change the folder: ${l}. ${c}`),a&&(c=`${c}. This app's page is linked to ${a}`),o.jsxs(be,{children:[o.jsx(we,{asChild:!0,children:o.jsxs("button",{type:"button",disabled:n,title:c,"aria-label":c,className:"relative inline-flex h-7 min-w-7 shrink-0 items-center justify-center gap-1 rounded-md px-1.5 text-fg-2 hover:bg-surface-muted hover:text-fg disabled:opacity-50",children:[o.jsx(q,{className:P("h-3.5 w-3.5 shrink-0",d?"text-fg-3":"text-action")}),a?o.jsx(ee,{className:"h-3 w-3 shrink-0 text-fg-3","aria-hidden":!0}):null,d?o.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-info"}):null]})}),o.jsxs(ye,{align:"start",className:"w-64",children:[o.jsxs("div",{className:"px-2 pb-1.5 pt-1 text-[11px] leading-snug text-fg-3",children:[d?`Aero needs your OK to use “${s.name}” again. Chrome asks when you send a message, or now:`:`Aero can list, read, search and change the files in “${s.name}”. Each change can be undone from the chat.`,a?` This app's page is linked to ${a}: every change to the page is written there.`:null]}),l?o.jsxs("div",{className:"px-2 pb-1.5 text-[11px] leading-snug text-no-strong",children:["Could not change the folder: ",l]}):null,d?o.jsx(L,{className:"pl-2",onSelect:()=>void e.allow(),children:"Allow access"}):null,i,o.jsx(ve,{}),o.jsx(L,{className:"pl-2",onSelect:()=>void e.attach(),children:"Change folder…"}),o.jsx(L,{className:"pl-2",onSelect:()=>void e.detach(),children:"Detach"})]})]})}function St({attachments:e,converting:n,onRemove:a}){return e.length===0&&n.length===0?null:o.jsxs("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:[e.map(i=>o.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[i.kind==="inline"&&i.mimeType.startsWith("image/")?o.jsx(_e,{src:`data:${i.mimeType};base64,${i.data}`,name:i.name,className:"h-7 w-7 object-cover",buttonClassName:"shrink-0 cursor-zoom-in"}):o.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:ke(i.mimeType)}),o.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:i.name,children:i.name}),o.jsx("button",{type:"button",onClick:()=>a(i.id),title:"Remove",className:"text-fg-3 hover:text-fg",children:o.jsx(te,{className:"h-3 w-3"})})]},i.id)),n.map((i,s)=>o.jsxs("div",{className:"flex items-center gap-1.5 rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[o.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:o.jsx(W,{className:"h-3.5 w-3.5 animate-spin"})}),o.jsxs("span",{className:"max-w-[8rem] truncate text-fg-2",title:i,children:["Converting ",i,"…"]})]},`converting-${s}`))]})}const z={idle:"Dictate (speech to text)",starting:"Starting the microphone…",recording:"Stop and transcribe",transcribing:"Transcribing… click to cancel"};function yt(e){const n=Math.floor(e/1e3);return`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function Ct({codeAssistModels:e,disabled:n,onText:a,onError:i}){const s=xe(e),r=Ee(e),[l,d]=k.useState("idle"),[c,b]=k.useState(0),u=k.useRef(null),m=k.useRef(null),g=k.useRef(!0),h=k.useRef(!1),w=k.useRef({onText:a,onError:i});w.current={onText:a,onError:i},k.useEffect(()=>(g.current=!0,()=>{var f,_;g.current=!1,(f=u.current)==null||f.cancel(),u.current=null,(_=m.current)==null||_.abort()}),[]);function y(f){h.current=!0,w.current.onError(f)}async function E(){h.current&&(h.current=!1,w.current.onError(null)),d("starting");try{const f=await De();if(!g.current)return f.cancel();u.current=f,b(0),d("recording")}catch(f){if(!g.current)return;d("idle"),y(Pe(f))}}async function x(){const f=u.current;if(!f)return;u.current=null;const _=new AbortController;m.current=_,d("transcribing");try{const A=await f.stop();if(!g.current||_.signal.aborted||!A)return;const I=await Te(A,_.signal);g.current&&!_.signal.aborted&&w.current.onText(I)}catch(A){g.current&&!_.signal.aborted&&y(A instanceof Error&&A.message?A.message:"Could not transcribe that clip.")}finally{m.current===_&&(m.current=null),g.current&&d("idle")}}if(k.useEffect(()=>{if(l!=="recording")return;const f=Date.now(),_=setInterval(()=>b(Date.now()-f),250),A=setTimeout(()=>void x(),Ae);return()=>{clearInterval(_),clearTimeout(A)}},[l]),!Ie())return null;const p=l==="recording",v=l==="idle"&&r?`${z.idle}: ${r}`:z[l];return o.jsx(H,{type:"button",variant:"ghost",size:"sm",onClick:()=>{var f;l==="idle"?E():l==="recording"?x():l==="transcribing"&&((f=m.current)==null||f.abort())},disabled:l==="starting"||l==="idle"&&(n||!s),"aria-label":v,title:v,className:P(p?"h-7 shrink-0 gap-1.5 px-2 text-no-strong":U),children:l==="transcribing"||l==="starting"?o.jsx(W,{className:"h-3.5 w-3.5 animate-spin"}):p?o.jsxs(o.Fragment,{children:[o.jsx(ne,{className:"h-3 w-3 animate-pulse fill-current"}),o.jsx("span",{className:"text-[11px] tabular-nums",children:yt(c)})]}):o.jsx(ae,{className:"h-3.5 w-3.5"})})}export{St as A,at as B,Ct as D,Rt as P,Ot as W,Et as a,mt as b,At as c,Lt as d,j as e,Tt as m,Pt as n,Dt as r,dt as s,It as u};
