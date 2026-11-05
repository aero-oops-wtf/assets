import{r as x,j as i,a6 as z,T as $,a7 as W,a2 as G,a8 as V,a9 as O,F as _,U as X,aa as Y,v as Q,X as J,L as q,ab as K,ac as Z}from"./vendor-react-DzbTGkEP.js";import{k as ee,G as ne,a$ as te,b0 as ae,aa as oe,b1 as se,b2 as re,b3 as ie,b4 as le,b5 as de,aJ as T,b6 as ce,b7 as ue,b8 as he,au as H,_ as pe,$ as ge,a5 as fe,a6 as N,a7 as me,b9 as be,ba as we,bb as ye,bc as ve,bd as xe,be as ke,bf as Ae,bg as Se}from"./LoadFailed-Blo9-YfE.js";import{z as Ce,t as Te,Z as Ie}from"./openrouter-DklVhrsT.js";import{i as L}from"./skillStore-B9toZUEl.js";import{a as Ee,b as Ne,f as je,e as F,c as De}from"./workspaceDb-CJMMCk9G.js";import{c as E,u as Le,B as U}from"./index-DxbtuJV_.js";function sn(a,t){const n=!!a&&ee(a),e=n&&Ce(t),o=n&&Te(t),s=e||o;return{openAi:n,takesImages:e,takesPdf:o,takesFiles:s,attachLabel:e&&o?"an image or PDF":o?"a PDF":"an image",accept:[e&&"image/*",o&&"application/pdf"].filter(Boolean).join(","),requestLimit:n?Ie:ne,inlineLimitApplies:!n||s}}function rn(a,t,n){if(!t.openAi)return null;if(!t.takesFiles)return`${n} cannot read attachments. Switch models to attach files.`;const e=s=>t.takesImages&&s.type.startsWith("image/")||t.takesPdf&&s.type==="application/pdf";return a.every(e)?null:`Only ${t.takesImages&&t.takesPdf?"images and PDFs":t.takesPdf?"PDFs":"images"} are sent to ${n}. Other file types need a Google model.`}function Fe(a){return se(a)?re:ie(a)?le:null}function ln(a,t){const[n,e]=x.useState([]),[o,s]=x.useState([]);async function r(l){if(l.length===0)return;const c=t(l);if(c){a(c);return}const m=[],d=[];for(const h of l){let g=h;const u=Fe(h);if(u){s(w=>[...w,h.name]);try{g=await u(h)}catch(w){d.push(w.message);continue}finally{s(w=>{const A=w.indexOf(h.name);return A<0?w:[...w.slice(0,A),...w.slice(A+1)]})}}else if(te(h)){d.push(`"${h.name}" is the pre-2007 .ppt format. Save it as .pptx first.`);continue}else if(ae(h)){d.push(`"${h.name}" is a binary Excel workbook. Save it as .xlsx first.`);continue}const b=await oe(g);"error"in b?d.push(b.error):m.push(b)}m.length>0&&e(h=>[...h,...m]),d.length>0&&a(d.join(" "))}return{attachments:n,converting:o,stage:r,remove:l=>e(c=>c.filter(m=>m.id!==l)),clear:()=>e([])}}const Be='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Logo & favicon\n\nWhen one mark serves as both the favicon and an in-page logo, define the SVG **once** — never a hardcoded `data:image/svg+xml` in `<head>` plus a separate inline `<svg>` in the body. The two copies drift, and the stale one is always the one you are not looking at.\n\n1. Define it once as a hidden `<symbol>` at the top of `<body>`:\n\n```html\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n  <symbol id="logo" viewBox="0 0 32 32"><!-- paths --></symbol>\n</svg>\n```\n\n2. Draw it in the page with `<use>`, sized in CSS — repeat it as often as you like, it costs nothing:\n\n```html\n<svg class="logo" aria-hidden="true"><use href="#logo"/></svg>\n```\n\n3. Build the favicon from that same symbol on load. A `<link rel="icon">` cannot point at an in-document `#id`, so serialize the symbol into a data URI:\n\n```html\n<script>\n  const sym = document.getElementById(\'logo\');\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${sym.getAttribute(\'viewBox\')}">${sym.innerHTML}</svg>`;\n  document.head.append(Object.assign(document.createElement(\'link\'), {\n    rel: \'icon\', href: \'data:image/svg+xml,\' + encodeURIComponent(svg),\n  }));\n<\/script>\n```\n\nThe favicon renders in its own isolated document: `currentColor`, `var(--ink)`, `var(--action)` and the page stylesheet do **not** reach it. Give the symbol\'s shapes literal colors (`fill="#0B0B0B"`, `fill="#D85A30"`), or the tab icon comes out a flat black silhouette with the accent gone.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',Pe=`# aero-database: persistent storage for aero pages

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

## Access model — IMPORTANT, configure it YOURSELF with the \`database\` tool

Who can do what is configured **per table**. Do not ask the user to do
this — most users don't know what a database or a permission is. After
building (or changing) a data-backed page, call the \`database\` tool:

- \`{op: 'configure_table', table, read_access, write_access, geo?}\` —
  creates the table if needed and sets its access in one call. \`geo: true\`
  makes it a location table (see "Geo tables" below); include it on EVERY
  configure_table call for that table — omitting it resets the flag.
- \`{op: 'list_tables'}\` — check current state first when unsure
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
- \`AeroDB\` works on the published page only. The builder shows your draft in
  a sandboxed \`blob:\` frame, where the root-relative \`/aero-db.js\` cannot
  load, so \`AeroDB\` is undefined there and neither \`AeroDB.current()\` nor
  \`AeroDB.page(...)\` can run. That failed load is expected: keep the tag as
  it is. Check \`const inPreview = !/^https?:$/.test(location.protocol);\`
  before touching \`AeroDB\`, and in the preview show "save & open the page to
  use data features" rather than rows of your own invention. On the
  published page, \`AeroDB.current()\` binds to the page its \`/p/{slug}\` URL
  names, and \`AeroDB.page('alias-or-uuid')\` to a page by its alias or uuid.
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
`,Me=`# Aero HTML Slides Style Guide

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
`,Re=`# aero-ai: calling Gemini from inside an aero page

Aero pages can call Gemini directly, served by aero itself at
\`/api/app-ai/...\` — **no API key, no config**. Every call runs as the
*visitor currently looking at the page*, using their own Google Code
Assist login and their own quota — never the page author's.

Load this skill whenever the page itself needs to call an LLM at runtime
(chat, generate-on-demand text/content, summarize visitor input, structured
extraction, etc.) — NOT for pages that were merely built by an AI; that's
every aero page and needs nothing from this skill.

## How to use it in a generated page

Include the client:

\`\`\`html
<script src="/aero-ai.js"><\/script>
\`\`\`

List available models, then generate:

\`\`\`js
const { models } = await AeroAI.models();          // string[], pick one (e.g. models[0])

const res = await AeroAI.generateContent({
  model: models[0],
  contents: 'Write a haiku about the ocean.',       // shorthand for a single user turn
});
console.log(res.text);
\`\`\`

Full request shape (multi-turn, system prompt, progressive rendering):

\`\`\`js
const res = await AeroAI.generateContent({
  model: 'gemini-3-pro-preview',
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
while still getting the final aggregated \`res\` at the end.

## Rules

- Two methods only: \`AeroAI.models()\` and \`AeroAI.generateContent(opts)\`.
  There is no separate streaming-only entry point — use the \`onText\`
  callback on \`generateContent\` for progressive UI.
- \`model\` is required and must be one of the ids \`AeroAI.models()\` returned
  — don't hardcode a model id without calling \`models()\` first, available
  models vary per visitor's Code Assist plan.
- If the visitor isn't signed in yet (or hasn't picked a Code Assist
  project), \`AeroAI\` redirects the browser to \`/login\` and back to the
  current page automatically — you don't need to check auth state or show
  your own sign-in prompt first. Just call \`AeroAI.models()\` /
  \`AeroAI.generateContent()\` directly; expect the page to navigate away and
  reload if a redirect happens.
- \`contents\` alternates \`role: 'user'\` / \`role: 'model'\` turns; a plain
  string is shorthand for one user turn with no history.
- \`res.functionCalls\` is \`[{name, args}]\` if you passed your own \`tools\`
  (Gemini function-calling \`functionDeclarations\`) and the model chose to
  call one — you're responsible for executing it and sending the result
  back as a \`role: 'user'\` turn with a \`functionResponse\` part if you want
  a follow-up reply.
- Every call costs the *visitor's* Code Assist quota. Don't call it in a
  tight loop (e.g. on every keystroke) — gate it behind an explicit action
  (button click, debounced input, etc.).

## In the builder preview

AeroAI works on the published page only. The builder shows your draft in a
sandboxed \`blob:\` frame, where the root-relative \`/aero-ai.js\` cannot load,
so \`AeroAI\` is undefined there and the console reports the failed load. That
is expected: keep the tag exactly as above. An absolute URL would load the
script, but every call it makes still fails in the preview, and the page
would then be tied to one host.

- Tell the preview from the published page up front, instead of treating
  every failure as the preview:

  \`\`\`js
  const inPreview = !/^https?:$/.test(location.protocol);
  \`\`\`

- In the preview, show an empty state that says answers appear once the page
  is published. Never write an answer, a sample conversation or "example
  output" yourself: text you compose is not what the model would say,
  whatever label it carries, and a visitor will read it as the AI's.
- Anything written for the preview must be unreachable on the published
  page: behind \`inPreview\`, never matched against a visitor's input, and never
  rendered when the page loads for a visitor.
- On the published page a failed call is a failure, not a preview: show its
  message with a Retry button, never canned content in place of the answer.
  Don't add a fallback written from memory (facts, lists, an "offline mode")
  for when the AI can't be reached either: a plausible answer that nothing
  checked is worse than an honest error.
- If the user asks for a realistic example answer in the draft, don't write
  one. Say in your reply that the real answer appears once the page is
  published, and build the layout with the placeholder.

## Minimal worked example — one-shot Q&A box

\`\`\`html
<script src="/aero-ai.js"><\/script>
<script>
  const inPreview = !/^https?:$/.test(location.protocol);
  let modelId;
  async function ask() {
    const q = document.getElementById('q').value.trim();
    if (!q) return;
    const out = document.getElementById('out');
    if (inPreview) {
      out.textContent = 'Answers appear once the page is published.';
      return;
    }
    out.textContent = 'Thinking…';
    try {
      if (!modelId) {
        const { models } = await AeroAI.models();
        modelId = models[0];
      }
      const res = await AeroAI.generateContent({ model: modelId, contents: q });
      out.textContent = res.text;
    } catch (e) {
      // A real failure on the published page: say so. Asking again retries.
      out.textContent = \`Couldn't get an answer (\${e.message}). Try again.\`;
    }
  }
<\/script>
\`\`\`
`,Oe=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:Be,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:Pe,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:Me,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:Re,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[],builderOnly:!0}];async function dn(a){const t=[...Oe],n=new Set(t.map(s=>s.name)),e=s=>s.access==="owner"?0:s.access==="manager"?1:2,o=[...a].sort((s,r)=>e(s)-e(r)||r.updatedAt-s.updatedAt);for(const s of o){if(!s.content.trim())continue;let r=s.name;for(let c=2;n.has(r);c++)r=`${s.name}-${c}`;n.add(r);let l=[];if(!L(s.id))try{l=await de(s.id)}catch{}t.push({name:r,description:s.description,content:s.content,source:"remote",id:L(s.id)?void 0:s.id,files:s.files,envSchema:s.envSchema,envSet:l,allowedHosts:s.allowedHosts})}return t}const I="⬤ ";let j=!1;function _e(){if(j||!document.title||document.title.startsWith(I))return;j=!0,document.title=I+document.title;const a=()=>{document.hidden||(document.title.startsWith(I)&&(document.title=document.title.slice(I.length)),j=!1,document.removeEventListener("visibilitychange",a))};document.addEventListener("visibilitychange",a)}let B=!1;function cn(){B||typeof Notification>"u"||(B=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function un(a){if(!document.hidden)return;const t=a.ok?"Aero finished your request":"Aero hit an error",n=a.ok?a.done??"The page has been updated — come take a look.":a.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const e=new Notification(t,{body:n,tag:"aero-turn-done"});e.onclick=()=>{window.focus(),e.close()},setTimeout(()=>e.close(),8e3);return}catch{}_e()}class qe{diff(t,n,e={}){let o;typeof e=="function"?(o=e,e={}):"callback"in e&&(o=e.callback);const s=this.castInput(t,e),r=this.castInput(n,e),l=this.removeEmpty(this.tokenize(s,e)),c=this.removeEmpty(this.tokenize(r,e));return this.diffWithOptionsObj(l,c,e,o)}diffWithOptionsObj(t,n,e,o){var s;const r=p=>{if(p=this.postProcess(p,e),o){setTimeout(function(){o(p)},0);return}else return p},l=n.length,c=t.length;let m=1,d=l+c;e.maxEditLength!=null&&(d=Math.min(d,e.maxEditLength));const h=(s=e.timeout)!==null&&s!==void 0?s:1/0,g=Date.now()+h,u=[{oldPos:-1,lastComponent:void 0}];let b=this.extractCommon(u[0],n,t,0,e);if(u[0].oldPos+1>=c&&b+1>=l)return r(this.buildValues(u[0].lastComponent,n,t));let w=-1/0,A=1/0;const k=()=>{for(let p=Math.max(w,-m);p<=Math.min(A,m);p+=2){let y;const f=u[p-1],v=u[p+1];f&&(u[p-1]=void 0);let S=!1;if(v){const D=v.oldPos-p;S=v&&0<=D&&D<l}const C=f&&f.oldPos+1<c;if(!S&&!C){u[p]=void 0;continue}if(!C||S&&f.oldPos<v.oldPos?y=this.addToPath(v,!0,!1,0,e):y=this.addToPath(f,!1,!0,1,e),b=this.extractCommon(y,n,t,p,e),y.oldPos+1>=c&&b+1>=l)return r(this.buildValues(y.lastComponent,n,t))||!0;u[p]=y,y.oldPos+1>=c&&(A=Math.min(A,p-1)),b+1>=l&&(w=Math.max(w,p+1))}m++};if(o)(function p(){setTimeout(function(){if(m>d||Date.now()>g)return o(void 0);k()||p()},0)})();else for(;m<=d&&Date.now()<=g;){const p=k();if(p)return p}}addToPath(t,n,e,o,s){const r=t.lastComponent;return r&&!s.oneChangePerToken&&r.added===n&&r.removed===e?{oldPos:t.oldPos+o,lastComponent:{count:r.count+1,added:n,removed:e,previousComponent:r.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:e,previousComponent:r}}}extractCommon(t,n,e,o,s){const r=n.length,l=e.length;let c=t.oldPos,m=c-o,d=0;for(;m+1<r&&c+1<l&&this.equals(e[c+1],n[m+1],s);)m++,c++,d++,s.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return d&&!s.oneChangePerToken&&(t.lastComponent={count:d,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=c,m}equals(t,n,e){return e.comparator?e.comparator(t,n):t===n||!!e.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(t[e]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,e){const o=[];let s;for(;t;)o.push(t),s=t.previousComponent,delete t.previousComponent,t=s;o.reverse();const r=o.length;let l=0,c=0,m=0;for(;l<r;l++){const d=o[l];if(d.removed)d.value=this.join(e.slice(m,m+d.count)),m+=d.count;else{if(!d.added&&this.useLongestToken){let h=n.slice(c,c+d.count);h=h.map(function(g,u){const b=e[m+u];return b.length>g.length?b:g}),d.value=this.join(h)}else d.value=this.join(n.slice(c,c+d.count));c+=d.count,d.added||(m+=d.count)}}return o}}class He extends qe{constructor(){super(...arguments),this.tokenize=ze}equals(t,n,e){return e.ignoreWhitespace?((!e.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!e.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):e.ignoreNewlineAtEof&&!e.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,e)}}const Ue=new He;function P(a,t,n){return Ue.diff(a,t,n)}function ze(a,t){t.stripTrailingCr&&(a=a.replace(/\r\n/g,`
`));const n=[],e=a.split(/(\n|\r\n)/);e[e.length-1]||e.pop();for(let o=0;o<e.length;o++){const s=e[o];o%2&&!t.newlineIsToken?n[n.length-1]+=s:n.push(s)}return n}function $e(a,t,n,e,o,s,r){let l;r?typeof r=="function"?l={callback:r}:l=r:l={},typeof l.context>"u"&&(l.context=4);const c=l.context;if(l.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(l.callback){const{callback:d}=l;P(n,e,Object.assign(Object.assign({},l),{callback:h=>{const g=m(h);d(g)}}))}else return m(P(n,e,l));function m(d){if(!d)return;d.push({value:"",lines:[]});function h(p){return p.map(function(y){return" "+y})}const g=[];let u=0,b=0,w=[],A=1,k=1;for(let p=0;p<d.length;p++){const y=d[p],f=y.lines||We(y.value);if(y.lines=f,y.added||y.removed){if(!u){const v=d[p-1];u=A,b=k,v&&(w=c>0?h(v.lines.slice(-c)):[],u-=w.length,b-=w.length)}for(const v of f)w.push((y.added?"+":"-")+v);y.added?k+=f.length:A+=f.length}else{if(u)if(f.length<=c*2&&p<d.length-2)for(const v of h(f))w.push(v);else{const v=Math.min(f.length,c);for(const C of h(f.slice(0,v)))w.push(C);const S={oldStart:u,oldLines:A-u+v,newStart:b,newLines:k-b+v,lines:w};g.push(S),u=0,b=0,w=[]}A+=f.length,k+=f.length}}for(const p of g)for(let y=0;y<p.lines.length;y++)p.lines[y].endsWith(`
`)?p.lines[y]=p.lines[y].slice(0,-1):(p.lines.splice(y+1,0,"\\ No newline at end of file"),y++);return{oldFileName:a,newFileName:t,oldHeader:o,newHeader:s,hunks:g}}}function We(a){const t=a.endsWith(`
`),n=a.split(`
`).map(e=>e+`
`);return t?n.pop():n.push(n.pop().slice(0,-1)),n}function hn(a){const t=ue(),[n,e]=x.useState(null),[o,s]=x.useState(null),[r,l]=x.useState(null),c=x.useRef(a);c.current=a,x.useEffect(()=>{if(!t)return;let u=!0;return e(null),s(null),l(null),(async()=>{const b=await Ee(a).catch(()=>{})??null,w=b?await T(b).catch(()=>"prompt"):null;u&&(e(b),s(w))})(),()=>{u=!1}},[a,t]);const m=x.useCallback(async()=>{l(null);try{const u=await ce();if(!u||c.current!==a||(await Ne(a,u),c.current!==a))return;e(u),s(await T(u))}catch(u){l(u instanceof Error?u.message:String(u))}},[a]),d=x.useCallback(async()=>{await je(a).catch(()=>{}),c.current===a&&(e(null),s(null),l(null))},[a]),h=x.useCallback(async()=>{if(!n)return!1;let u;try{u=await T(n,!0)}catch{u=await T(n).catch(()=>"prompt")}return s(u),u==="granted"},[n]),g=x.useCallback(async()=>n&&await h()?n:null,[n,h]);return{supported:t,folder:n,access:o,error:r,attach:m,detach:d,allow:h,forTurn:g}}const Ge={list_dir:"listed",read_file:"read",grep_files:"searched files for",write_file:"wrote",edit_file:"edited",delete_path:"deleted",move_path:"moved"},Ve={list_dir:_,read_file:O,grep_files:V,write_file:G,edit_file:W,delete_path:$,move_path:z},M=1e6;function pn({name:a,detail:t,result:n}){const e=Ve[a]??O,o=typeof(n==null?void 0:n.error)=="string"?n.error:null,s=a==="write_file"&&(n==null?void 0:n.created)===!0?"created":Ge[a]??a,r=typeof(n==null?void 0:n.change_id)=="string"?n.change_id:null;return i.jsxs("div",{className:"space-y-1",children:[i.jsxs("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",title:o??void 0,children:[i.jsx(e,{className:E("h-3 w-3 shrink-0",o?"text-fg-3":"text-action")}),i.jsxs("span",{className:"min-w-0 truncate",children:[s," ",i.jsx("span",{className:"font-medium text-fg-2",children:t??""}),o?i.jsx("span",{className:"text-no-strong",children:" (failed)"}):null]})]}),r?i.jsx(Ye,{changeId:r}):null]})}async function Xe(a){return a?new TextDecoder("utf-8",{ignoreBOM:!0}).decode(await a.arrayBuffer()):""}function Ye({changeId:a}){const t=Le(),[n,e]=x.useState(void 0),[o,s]=x.useState(null),[r,l]=x.useState(!1),[c,m]=x.useState(!1),[d,h]=x.useState(null);if(x.useEffect(()=>{let A=!0;return F(a).then(k=>A&&e(k??null)).catch(()=>A&&e(null)),()=>{A=!1}},[a]),n===void 0)return null;if(n===null)return i.jsx("div",{className:"pl-[18px] text-[11px] text-fg-3",children:"This change can no longer be undone."});const g=n;async function u(){var A;if(r){l(!1);return}if(!o&&(g.op==="write"||g.op==="edit"))try{s({before:await Xe((A=g.before[0])==null?void 0:A.data),after:g.after??""})}catch(k){h(`Could not read the old text: ${k instanceof Error?k.message:String(k)}`);return}l(!0)}async function b(A){m(!0),h(null);try{if(await T(g.root,!0)!=="granted"){h("Aero needs access to the folder to undo this.");return}const k=await he(g,De,A);if("conflict"in k){await t({title:"Undo anyway?",body:k.conflict,confirmLabel:"Undo anyway",variant:"danger"})&&await b(!0);return}if("error"in k){h(k.error);return}e(await F(a)??{...g,undoneAt:Date.now()})}catch(k){h(k instanceof Error?k.message:String(k))}finally{m(!1)}}const w=g.op!=="move";return i.jsxs("div",{className:"space-y-1 pl-[18px] text-[11px]",children:[i.jsxs("div",{className:"flex items-center gap-3 text-fg-3",children:[w?i.jsx("button",{type:"button",onClick:()=>void u(),className:"hover:text-fg",children:r?"Hide changes":"Show changes"}):null,g.undoneAt?i.jsx("span",{children:"Undone"}):i.jsxs("button",{type:"button",disabled:c,onClick:()=>void b(!1),className:"inline-flex items-center gap-1 hover:text-fg disabled:opacity-50",children:[i.jsx(X,{className:"h-3 w-3"})," Undo"]}),d?i.jsx("span",{className:"text-no-strong",children:d}):null]}),r&&g.op==="delete"?i.jsx(Qe,{change:g}):null,r&&o?i.jsx(Je,{before:o.before,after:o.after}):null]})}function Qe({change:a}){var e;const t=a.before.slice(0,12),n=((e=a.dirs)==null?void 0:e.length)??0;return i.jsxs("div",{className:"rounded-md border border-border bg-surface px-2 py-1.5 text-fg-2",children:[n>0?i.jsxs("div",{className:"text-fg-3",children:[a.before.length," files in ",n," ",n===1?"folder":"folders",":"]}):null,t.map(o=>i.jsx("div",{className:"truncate font-mono",children:o.path},o.path)),a.before.length>t.length?i.jsxs("div",{className:"text-fg-3",children:["and ",a.before.length-t.length," more"]}):null]})}function Je({before:a,after:t}){const n=a.length>M||t.length>M,e=x.useMemo(()=>n?[]:$e("","",a,t,"","",{context:2}).hunks,[a,t,n]);return n?i.jsx("div",{className:"text-fg-3",children:"Too large to show the changes here."}):e.length===0?i.jsx("div",{className:"text-fg-3",children:"No differences."}):i.jsx("div",{className:"max-h-72 overflow-auto rounded-md border border-border bg-surface font-mono leading-5",children:e.map((o,s)=>i.jsxs("div",{className:"min-w-max",children:[i.jsxs("div",{className:"bg-surface-muted px-2 text-fg-3",children:["@@ -",o.oldStart,",",o.oldLines," +",o.newStart,",",o.newLines," @@"]}),o.lines.map((r,l)=>i.jsx("div",{className:E("whitespace-pre px-2",r.startsWith("+")&&"bg-success/10",r.startsWith("-")&&"bg-no-soft",!r.startsWith("+")&&!r.startsWith("-")&&"text-fg-2"),children:r||" "},l))]},s))})}function gn({workspace:a,disabled:t,linkedPath:n,menuItems:e}){if(!a.supported)return null;const{folder:o,access:s,error:r}=a;if(!o)return i.jsx(U,{variant:"ghost",size:"sm",onClick:()=>void a.attach(),disabled:t,title:r?`Could not attach the folder: ${r}`:"Attach a folder from your computer for Aero to work in","aria-label":"Attach a folder",className:H,children:i.jsx(Y,{className:"h-3.5 w-3.5"})});const l=s!=="granted";let c=l?`Aero needs your OK to use “${o.name}” again; Chrome asks when you send`:`Aero can read and change files in “${o.name}”`;return r&&(c=`Could not change the folder: ${r}`),i.jsxs(pe,{children:[i.jsx(ge,{asChild:!0,children:i.jsxs("button",{type:"button",disabled:t,title:c,className:"relative inline-flex h-7 max-w-[11rem] shrink-0 items-center gap-1 rounded-md px-1.5 text-[11px] text-fg-2 hover:bg-surface-muted hover:text-fg disabled:opacity-50",children:[i.jsx(_,{className:E("h-3.5 w-3.5 shrink-0",l?"text-fg-3":"text-action")}),i.jsx("span",{className:"truncate",children:o.name}),n?i.jsx(Q,{className:"h-3 w-3 shrink-0 text-fg-3","aria-label":`linked to ${n}`}):null,l?i.jsx("span",{className:"h-1.5 w-1.5 shrink-0 rounded-full bg-info"}):null]})}),i.jsxs(fe,{align:"start",className:"w-64",children:[i.jsxs("div",{className:"px-2 pb-1.5 pt-1 text-[11px] leading-snug text-fg-3",children:[l?`Aero needs your OK to use “${o.name}” again. Chrome asks when you send a message, or now:`:`Aero can list, read, search and change the files in “${o.name}”. Each change can be undone from the chat.`,n?` This app's page is linked to ${n}: every change to the page is written there.`:null]}),r?i.jsxs("div",{className:"px-2 pb-1.5 text-[11px] leading-snug text-no-strong",children:["Could not change the folder: ",r]}):null,l?i.jsx(N,{className:"pl-2",onSelect:()=>void a.allow(),children:"Allow access"}):null,e,i.jsx(me,{}),i.jsx(N,{className:"pl-2",onSelect:()=>void a.attach(),children:"Change folder…"}),i.jsx(N,{className:"pl-2",onSelect:()=>void a.detach(),children:"Detach"})]})]})}function fn({attachments:a,converting:t,onRemove:n}){return a.length===0&&t.length===0?null:i.jsxs("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:[a.map(e=>i.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[e.kind==="inline"&&e.mimeType.startsWith("image/")?i.jsx("img",{src:`data:${e.mimeType};base64,${e.data}`,alt:e.name,className:"h-7 w-7 shrink-0 object-cover"}):i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:be(e.mimeType)}),i.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:e.name,children:e.name}),i.jsx("button",{type:"button",onClick:()=>n(e.id),title:"Remove",className:"text-fg-3 hover:text-fg",children:i.jsx(J,{className:"h-3 w-3"})})]},e.id)),t.map((e,o)=>i.jsxs("div",{className:"flex items-center gap-1.5 rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[i.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:i.jsx(q,{className:"h-3.5 w-3.5 animate-spin"})}),i.jsxs("span",{className:"max-w-[8rem] truncate text-fg-2",title:e,children:["Converting ",e,"…"]})]},`converting-${o}`))]})}const R={idle:"Dictate (speech to text)",starting:"Starting the microphone…",recording:"Stop and transcribe",transcribing:"Transcribing… click to cancel"};function Ke(a){const t=Math.floor(a/1e3);return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function mn({codeAssistModels:a,disabled:t,onText:n,onError:e}){const o=we(a),s=ye(a),[r,l]=x.useState("idle"),[c,m]=x.useState(0),d=x.useRef(null),h=x.useRef(null),g=x.useRef(!0),u=x.useRef(!1),b=x.useRef({onText:n,onError:e});b.current={onText:n,onError:e},x.useEffect(()=>(g.current=!0,()=>{var f,v;g.current=!1,(f=d.current)==null||f.cancel(),d.current=null,(v=h.current)==null||v.abort()}),[]);function w(f){u.current=!0,b.current.onError(f)}async function A(){u.current&&(u.current=!1,b.current.onError(null)),l("starting");try{const f=await Ae();if(!g.current)return f.cancel();d.current=f,m(0),l("recording")}catch(f){if(!g.current)return;l("idle"),w(Se(f))}}async function k(){const f=d.current;if(!f)return;d.current=null;const v=new AbortController;h.current=v,l("transcribing");try{const S=await f.stop();if(!g.current||v.signal.aborted||!S)return;const C=await ke(S,v.signal);g.current&&!v.signal.aborted&&b.current.onText(C)}catch(S){g.current&&!v.signal.aborted&&w(S instanceof Error&&S.message?S.message:"Could not transcribe that clip.")}finally{h.current===v&&(h.current=null),g.current&&l("idle")}}if(x.useEffect(()=>{if(r!=="recording")return;const f=Date.now(),v=setInterval(()=>m(Date.now()-f),250),S=setTimeout(()=>void k(),ve);return()=>{clearInterval(v),clearTimeout(S)}},[r]),!xe())return null;const p=r==="recording",y=r==="idle"&&s?`${R.idle}: ${s}`:R[r];return i.jsx(U,{type:"button",variant:"ghost",size:"sm",onClick:()=>{var f;r==="idle"?A():r==="recording"?k():r==="transcribing"&&((f=h.current)==null||f.abort())},disabled:r==="starting"||r==="idle"&&(t||!o),"aria-label":y,title:y,className:E(p?"h-7 shrink-0 gap-1.5 px-2 text-no-strong":H),children:r==="transcribing"||r==="starting"?i.jsx(q,{className:"h-3.5 w-3.5 animate-spin"}):p?i.jsxs(i.Fragment,{children:[i.jsx(K,{className:"h-3 w-3 animate-pulse fill-current"}),i.jsx("span",{className:"text-[11px] tabular-nums",children:Ke(c)})]}):i.jsx(Z,{className:"h-3.5 w-3.5"})})}export{fn as A,Oe as B,mn as D,gn as W,sn as a,pn as b,rn as c,hn as d,P as e,dn as m,un as n,cn as r,$e as s,ln as u};
