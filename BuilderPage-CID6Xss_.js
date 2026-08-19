const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-BBcurUhU.js","./vendor-react-CsVEP5Pi.js","./index-DtnkiqI9.js","./vendor-query-WopZitPk.js","./vendor-router-DS3g9eL6.js","./index-C79Nkf_B.css"])))=>i.map(i=>d[i]);
var lo=e=>{throw TypeError(e)};var co=(e,t,n)=>t.has(e)||lo("Cannot "+n);var U=(e,t,n)=>(co(e,t,"read from private field"),n?n.call(e):t.get(e)),Hn=(e,t,n)=>t.has(e)?lo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ft=(e,t,n,r)=>(co(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{e as G,B as Xe,u as qo,a as kt,d as wa,A as lt,_ as ya}from"./index-DtnkiqI9.js";import{r as a,j as s,R as Je,h as Yo,u as Sa,o as Ca,s as ka,m as Ea,n as Ra,p as Pa,q as Ia,t as Ta,v as Ma,w as ja,x as Na,y as Aa,i as Xo,G as Qo,H as Jo,A as _a,B as Zo,z as es,M as Da,I as Oa,J as uo,N as La,k as Fa,O as $a,E as Ba,d as Ua,Q as Ha,X as zn,V as fo,W as ts,Y as za,Z as Ga,_ as ns,$ as Va,a0 as ho,a1 as Wa,D as Ka}from"./vendor-react-CsVEP5Pi.js";import{a as gn,c as qa,u as Ya}from"./vendor-query-WopZitPk.js";import{i as po,g as Xa,D as Qa,l as Ja,s as Za,p as mo,c as el,t as tl,d as nl,a as go,r as rl,e as vo,b as ol,f as on,h as Gn,j as Vn,k as sl,m as il,n as bo,C as al,o as xo,O as ll,q as Wn,u as cl,v as ul,w as dl,x as fl,y as hl,z as pl,A as Kn,B as ml,E as gl,F as vl,G as bl,H as xl,I as wl,J as yl,K as Sl,L as Cl,M as kl,N as El,P as Rl,Q as Pl,R as Il}from"./ChatPanel-D_t-KV1h.js";import{C as Tl,S as Ml}from"./ServiceDisabledModal-DMjxGGNR.js";import{e as O,h as jl,R as Nl,L as wo,I as Al,S as yo,a as So,b as Co,c as ko,f as Eo,g as Ro,d as qn}from"./Select-DPitceVT.js";import{P as _l,a as Dl}from"./PublicUrlRow-D-38R6Ec.js";import{e as Ol,u as Ll,c as Fl,L as $l}from"./vendor-router-DS3g9eL6.js";const yt=20*1024*1024;function Bl(e){return e==="application/pdf"||/^(image|audio|video)\//.test(e)}const rs=/^text\//,Ul=new Set(["application/json","application/xml","application/x-yaml","application/yaml","application/javascript","application/typescript"]);function Hl(e){return rs.test(e)||Ul.has(e)}async function zl(e){const t=await e.arrayBuffer();try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch{return null}}function Gl(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error??new Error("read failed")),r.readAsDataURL(e)})}let Po=0;async function Vl(e){const t=e.type,n=e.name||"file";if(Bl(t)){const o=await Gl(e),i=o.indexOf(",");return{id:String(Po++),name:n,mimeType:t,size:e.size,kind:"inline",data:i>=0?o.slice(i+1):""}}const r=Hl(t);if(r||!t||t==="application/octet-stream"){const o=await zl(e);if(o!==null)return{id:String(Po++),name:n,mimeType:rs.test(t)?t:"text/plain",size:e.size,kind:"text",text:o};if(r)return{error:`"${n}" is declared as ${t} but isn't valid UTF-8 — Gemini only supports UTF-8 text attachments.`}}return{error:`"${n}" is a format Gemini can't read (${t||"unknown binary type"}).`}}function ct(e){return e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/(1024*1024)).toFixed(1)}MB`}const Wl='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',Kl=`# aero-database: persistent storage for aero pages

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
- \`AeroDB.current()\` only works on the published \`/p/...\` URL. In the builder
  preview it throws — either wrap init in a try/catch that shows "save &
  open the page to use data features", or use \`AeroDB.page('the-alias')\`
  when the page has a known alias.
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
- In dense areas the response may carry \`partial: true\` (surfaced on the
  returned array as \`rows.partial\`): the scan budget was hit, so some rows
  inside the radius are missing — **possibly nearer ones than those
  returned**. Never label a partial result "the nearest N"; show what you
  got and offer a smaller radius.
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
`,ql=`# Aero HTML Slides Style Guide

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
`,Yl=`# aero-ai: calling Gemini from inside an aero page

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
    if (!modelId) {
      const { models } = await AeroAI.models();
      modelId = models[0];
    }
    const res = await AeroAI.generateContent({ model: modelId, contents: q });
    out.textContent = res.text;
  }
<\/script>
\`\`\`
`,os=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:Wl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:Kl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:ql,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:Yl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]}];async function Io(e){const t=[...os],n=new Set(t.map(i=>i.name)),r=i=>i.access==="owner"?0:i.access==="manager"?1:2,o=[...e].sort((i,l)=>r(i)-r(l)||l.updatedAt-i.updatedAt);for(const i of o){if(!i.content.trim())continue;let l=i.name;for(let u=2;n.has(l);u++)l=`${i.name}-${u}`;n.add(l);let c=[];if(!po(i.id))try{c=await Xa(i.id)}catch{}t.push({name:l,description:i.description,content:i.content,source:"remote",id:po(i.id)?void 0:i.id,files:i.files,envSchema:i.envSchema,envSet:c,allowedHosts:i.allowedHosts})}return t}function Xl(e,t){return e?e.basedOnUpdatedAt!==t.updated_at&&e.html!==t.html?{html:t.html,supersededLocal:e.html}:{html:e.html,supersededLocal:null}:{html:t.html,supersededLocal:null}}const sn="⬤ ";let Yn=!1;function Ql(){if(Yn||!document.title||document.title.startsWith(sn))return;Yn=!0,document.title=sn+document.title;const e=()=>{document.hidden||(document.title.startsWith(sn)&&(document.title=document.title.slice(sn.length)),Yn=!1,document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)}let To=!1;function Jl(){To||typeof Notification>"u"||(To=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function Mo(e){if(!document.hidden)return;const t=e.ok?"Aero finished your request":"Aero hit an error",n=e.ok?"The page has been updated — come take a look.":e.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const r=new Notification(t,{body:n,tag:"aero-turn-done"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>r.close(),8e3);return}catch{}Ql()}const Zl=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,ec=`<script>(function(){
function memoryStorage(){
  var m=new Map();
  return {
    getItem:function(k){return m.has(k)?m.get(k):null;},
    setItem:function(k,v){m.set(String(k),String(v));},
    removeItem:function(k){m.delete(k);},
    clear:function(){m.clear();},
    key:function(i){return Array.from(m.keys())[i]??null;},
    get length(){return m.size;}
  };
}
function shim(name){
  try{ window[name].length; return; }catch(e){}
  try{ Object.defineProperty(window,name,{value:memoryStorage(),configurable:true}); }catch(e){}
}
shim('localStorage');
shim('sessionStorage');
})();<\/script>`,tc=`<script>(function(){
document.addEventListener('click',function(e){
  if(e.defaultPrevented)return;
  var t=e.target;
  var a=t&&t.closest?t.closest('a[href]'):null;
  if(!a)return;
  var href=a.getAttribute('href');
  if(!href||href.charAt(0)!=='#')return;
  e.preventDefault();
  if(href==='#'){window.scrollTo({top:0,behavior:'smooth'});return;}
  var id=href.slice(1);
  try{id=decodeURIComponent(id);}catch(err){}
  var el=document.getElementById(id);
  if(!el){try{el=document.querySelector('a[name="'+CSS.escape(id)+'"]');}catch(err){}}
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
});
})();<\/script>`,nc=`<script>(function(){
function send(level,text){
  try{parent.postMessage({type:'aero-console',level:level,text:String(text).slice(0,1000),ts:Date.now()},'*');}catch(e){}
}
function ser(a){
  if(typeof a==='string')return a;
  if(a instanceof Error)return a.stack||String(a);
  if(typeof Element!=='undefined'&&a instanceof Element){
    var h=a.outerHTML;return h?(h.length>200?h.slice(0,200)+'\\u2026':h):'<'+a.tagName.toLowerCase()+'>';
  }
  if(a===window)return '[window]';
  if(a===document)return '[document]';
  if(typeof Event!=='undefined'&&a instanceof Event)return '[Event '+a.type+']';
  try{
    var s=JSON.stringify(a);
    if(s!==undefined&&s!=='{}')return s;
  }catch(e){}
  return Object.prototype.toString.call(a);
}
function fmt(args){
  var out=[];
  for(var i=0;i<args.length;i++){out.push(ser(args[i]));}
  return out.join(' ');
}
['log','info','warn','error','debug'].forEach(function(m){
  var orig=console[m]&&console[m].bind(console);
  console[m]=function(){send(m==='debug'?'log':m,fmt(arguments));if(orig)orig.apply(null,arguments);};
});
window.addEventListener('error',function(e){
  var t=e.target;
  if(t&&t!==window&&(t.src||t.href)){send('error','Failed to load resource: '+(t.src||t.href));return;}
  send('error',(e.message||'Script error')+(e.filename?' ('+e.filename+':'+e.lineno+')':''));
},true);
window.addEventListener('unhandledrejection',function(e){
  var r=e.reason;
  send('error','Unhandled promise rejection: '+(r&&r.stack?r.stack:String(r)));
});
})();<\/script>`,rc=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Zl.replace(/<\/script/gi,"<\\/script")+`
var h2i=module.exports;
var MAX_EDGE=1024;
var PNG_CEILING=1400000;
function pageBg(){
  // The browser paints the viewport with html's background, falling back to
  // body's (CSS background propagation). Mirror that for the areas of the
  // canvas the document doesn't cover, instead of hardcoding white.
  var b=getComputedStyle(document.documentElement).backgroundColor;
  if(!b||b==='transparent'||b==='rgba(0, 0, 0, 0)')b=getComputedStyle(document.body).backgroundColor;
  if(!b||b==='transparent'||b==='rgba(0, 0, 0, 0)')b='#ffffff';
  return b;
}
window.__aeroCaptureScreenshot=async function(){
  if(document.visibilityState==='hidden'){
    throw new Error('cannot capture while the browser tab is in the background — the page only renders when visible. Continue without the screenshot, or ask the user to bring the tab forward first.');
  }
  var bg=pageBg();
  var de=document.documentElement;
  var docW=Math.max(de.scrollWidth,de.clientWidth);
  var docH=Math.max(de.scrollHeight,de.clientHeight);
  var failedImages=0;
  var full;
  try{
    // Full-document render (width/height override html-to-image's default
    // viewport sizing), cropped to the viewport below — the clone carries
    // no scroll offset, so cropping is the only way to honor scroll.
    // pixelRatio pinned to 1: the default is devicePixelRatio, which would
    // double every dimension on a retina display before our own downscale.
    full=await h2i.toCanvas(de,{
      pixelRatio:1,
      backgroundColor:bg,
      width:docW,
      height:docH,
      onImageErrorHandler:function(){failedImages++;}
    });
  }catch(e){
    // html-to-image can reject with a raw Event, which stringifies to the
    // useless '[object Event]'.
    throw new Error((e&&e.message)||(e&&e.type&&('capture failed on a page resource ('+e.type+' event)'))||String(e));
  }
  // html-to-image silently scales its canvas down to fit 16384px per side
  // (skipAutoScale defaults to false — the alternative is Chrome's canvas
  // area ceiling and OOM on huge pages, so the scaling is the safer half).
  // The crop rect below is computed in document coordinates, so map it into
  // canvas coordinates; kx/ky are exactly 1 whenever no clamping happened.
  var kx=full.width/docW;
  var ky=full.height/docH;
  var vw=Math.max(1,Math.min(window.innerWidth,docW));
  var vh=Math.max(1,Math.min(window.innerHeight,docH));
  var sx=Math.max(0,Math.min(window.scrollX,docW-vw));
  var sy=Math.max(0,Math.min(window.scrollY,docH-vh));
  var ratio=Math.min(1,MAX_EDGE/Math.max(vw,vh));
  var ow=Math.max(1,Math.round(vw*ratio));
  var oh=Math.max(1,Math.round(vh*ratio));
  var out=document.createElement('canvas');
  out.width=ow;out.height=oh;
  var ctx=out.getContext('2d');
  ctx.fillStyle=bg;ctx.fillRect(0,0,ow,oh);
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  ctx.drawImage(full,sx*kx,sy*ky,vw*kx,vh*ky,0,0,ow,oh);
  var mime='image/png';
  var dataUrl=out.toDataURL(mime);
  if(dataUrl.length>PNG_CEILING){mime='image/jpeg';dataUrl=out.toDataURL(mime,0.85);}
  var res={image:{mimeType:mime,data:dataUrl.slice(dataUrl.indexOf(',')+1),width:ow,height:oh}};
  if(failedImages>0)res.note=failedImages+' <img> element(s) on the page failed to load into the capture and appear blank (broken URL, or a host that does not send CORS headers). CSS background images can fail the same way without being counted. This is a capture limit, not a page bug.';
  return res;
};
})();<\/script>`,oc=`<script>(function(){
var selectorMap=new Map();
var generation=0;
var seen=new WeakSet();
var firstRead=true;
var BUDGET=5000;
var ATTRS=['id','name','type','role','aria-label','aria-labelledby','placeholder','href','title','alt','for','disabled','required','aria-expanded','aria-checked','aria-selected'];

function waitMs(ms){return new Promise(function(r){setTimeout(r,ms);});}
function clean(s){return String(s==null?'':s).replace(/\\s+/g,' ').trim();}

function hidden(el){
  var cs=getComputedStyle(el);
  if(cs.display==='none')return true;
  if(cs.visibility==='hidden'||cs.visibility==='collapse')return true;
  if(el.getAttribute('aria-hidden')==='true')return true;
  if(el.hasAttribute('inert'))return true;
  return false;
}
function hasBox(el){var r=el.getBoundingClientRect();return r.width>0&&r.height>0;}
function inViewport(el){
  var r=el.getBoundingClientRect();
  return r.bottom>0&&r.right>0&&r.top<innerHeight&&r.left<innerWidth;
}
// Elements buried under a modal/backdrop shouldn't be offered as targets.
function onTop(el){
  var r=el.getBoundingClientRect();
  var x=r.left+r.width/2,y=r.top+r.height/2;
  if(x<0||y<0||x>innerWidth||y>innerHeight)return true;
  var hit=document.elementFromPoint(x,y);
  if(!hit)return true;
  return el.contains(hit)||hit.contains(el);
}
function isScrollable(el){
  var cs=getComputedStyle(el);
  return (/(auto|scroll|overlay)/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight+4)||
         (/(auto|scroll|overlay)/.test(cs.overflowX)&&el.scrollWidth>el.clientWidth+4);
}
var ROLES={button:1,link:1,checkbox:1,radio:1,tab:1,menuitem:1,menuitemcheckbox:1,menuitemradio:1,switch:1,combobox:1,option:1,textbox:1,searchbox:1,slider:1};
// Native controls stay indexable even inside another interactive element
// (an <input> inside a <label>); the fuzzy signals below do not, or every
// <span> inside a button inherits cursor:pointer and gets its own index.
function isNative(el){
  var tag=el.tagName.toLowerCase();
  if(el.disabled)return false;
  if(tag==='a')return el.hasAttribute('href');
  if(tag==='button'||tag==='input'||tag==='textarea'||tag==='select'||tag==='summary')return true;
  if(tag==='label')return el.hasAttribute('for');
  if(el.isContentEditable)return true;
  return false;
}
function isFuzzy(el){
  if(el.disabled)return false;
  var role=el.getAttribute('role');
  if(role&&ROLES[role.toLowerCase()])return true;
  if(el.hasAttribute('onclick'))return true;
  var ti=el.getAttribute('tabindex');
  if(ti!==null&&parseInt(ti,10)>=0)return true;
  if(getComputedStyle(el).cursor==='pointer')return true;
  return false;
}

function attrsOf(el){
  var out='',tag=el.tagName.toLowerCase();
  for(var i=0;i<ATTRS.length;i++){
    var a=ATTRS[i],v=el.getAttribute(a);
    if(v===null||v==='')continue;
    v=clean(v);
    if(v.length>60)v=v.slice(0,60)+'\\u2026';
    out+=' '+a+'="'+v+'"';
  }
  if(tag==='input'||tag==='textarea'||tag==='select'){
    var lv=el.value;
    if(lv)out+=' value="'+clean(lv).slice(0,60)+'"';
    if(el.checked)out+=' checked';
  }
  if(isScrollable(el))out+=' scrollable';
  return out;
}
function ownText(el){
  var s='';
  for(var i=0;i<el.childNodes.length;i++){
    var n=el.childNodes[i];
    if(n.nodeType===3)s+=n.nodeValue;
  }
  return clean(s);
}
function labelOf(el){
  var t=ownText(el);
  if(!t)t=clean(el.textContent);
  return t.length>80?t.slice(0,80)+'\\u2026':t;
}

function buildTree(){
  selectorMap=new Map();
  generation++;
  var entries=[],idx=0;
  function walk(el,depth,inInteractive){
    var tag=el.tagName.toLowerCase();
    if(tag==='script'||tag==='style'||tag==='noscript'||tag==='template'||tag==='head')return;
    if(el.getAttribute('data-aero-shim')==='1')return;
    if(hidden(el))return;
    var act=(isNative(el)||(!inInteractive&&isFuzzy(el))||isScrollable(el))&&hasBox(el)&&onTop(el);
    if(act){
      var i=idx++;
      selectorMap.set(i,el);
      var fresh=!firstRead&&!seen.has(el);
      seen.add(el);
      entries.push({line:(fresh?'*':'')+'['+i+']<'+tag+attrsOf(el)+'>'+labelOf(el),depth:depth,vp:inViewport(el)});
    }else{
      var t=ownText(el);
      if(t)entries.push({line:t.length>120?t.slice(0,120)+'\\u2026':t,depth:depth,vp:inViewport(el)});
    }
    var kids=el.children;
    for(var k=0;k<kids.length;k++)walk(kids[k],depth+1,inInteractive||act);
  }
  if(document.body)walk(document.body,0,false);
  firstRead=false;

  function render(list){
    var out=[];
    for(var i=0;i<list.length;i++){
      var pad='',d=Math.min(list[i].depth,8);
      for(var j=0;j<d;j++)pad+='  ';
      out.push(pad+list[i].line);
    }
    return out.join('\\n');
  }
  var text=render(entries),truncated=false,note;
  if(text.length>BUDGET){
    var vp=[],off=0;
    for(var i=0;i<entries.length;i++){if(entries[i].vp)vp.push(entries[i]);else off++;}
    text=render(vp);
    truncated=true;
    note=off+' off-screen element(s) omitted — scroll to bring them into view';
    if(text.length>BUDGET){
      text=text.slice(0,BUDGET)+'\\n\\u2026(truncated)';
      note='output too large; some on-screen elements omitted too';
    }
  }
  var st={
    title:document.title||'',
    scroll_y:Math.round(scrollY),
    page_height:Math.round(document.documentElement.scrollHeight),
    viewport_height:Math.round(innerHeight),
    interactive_count:idx,
    elements:text
  };
  if(truncated){st.truncated=true;st.note=note;}
  return st;
}

function highlight(el){
  var r=el.getBoundingClientRect();
  var b=document.createElement('div');
  b.setAttribute('data-aero-shim','1');
  b.style.cssText='position:fixed;pointer-events:none;z-index:2147483647;'+
    'border:2px solid #ff5a3c;background:rgba(255,90,60,.14);border-radius:3px;'+
    'box-shadow:0 0 0 2px rgba(255,90,60,.22);transition:opacity .18s ease;'+
    'top:'+r.top+'px;left:'+r.left+'px;width:'+r.width+'px;height:'+r.height+'px;';
  (document.body||document.documentElement).appendChild(b);
  return function(){
    b.style.opacity='0';
    setTimeout(function(){if(b.parentNode)b.parentNode.removeChild(b);},220);
  };
}

// For the duration of one agent action, swap out the things that would
// destroy this document (navigation, form submit) or block its JS thread
// (modal dialogs) for recorders. The agent gets told what would have
// happened, and the preview — along with the selector map — survives.
function guards(){
  var fx={dialogs:[]};
  var oa=window.alert,oc=window.confirm,op=window.prompt;
  window.alert=function(m){fx.dialogs.push({kind:'alert',message:clean(m).slice(0,300)});};
  window.confirm=function(m){fx.dialogs.push({kind:'confirm',message:clean(m).slice(0,300),answered:true});return true;};
  window.prompt=function(m){fx.dialogs.push({kind:'prompt',message:clean(m).slice(0,300),answered:''});return '';};
  function onSubmit(e){
    var f=e.target;
    e.preventDefault();
    var fields={};
    try{
      new FormData(f).forEach(function(v,k){fields[k]=typeof v==='string'?v.slice(0,200):'[file]';});
    }catch(err){}
    fx.would_submit={
      action:f.getAttribute('action')||location.href,
      method:(f.getAttribute('method')||'get').toLowerCase(),
      fields:fields
    };
  }
  function onClick(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a)return;
    var href=a.getAttribute('href')||'';
    if(!href||href.charAt(0)==='#')return;
    if(href.slice(0,11).toLowerCase()==='javascript:')return;
    e.preventDefault();
    fx.would_navigate={href:a.href,target:a.getAttribute('target')||'_self'};
  }
  document.addEventListener('submit',onSubmit,true);
  document.addEventListener('click',onClick,true);
  return {fx:fx,remove:function(){
    document.removeEventListener('submit',onSubmit,true);
    document.removeEventListener('click',onClick,true);
    window.alert=oa;window.confirm=oc;window.prompt=op;
  }};
}

// W3C pointer/mouse order. Dispatching on the hit-tested innermost node is
// what makes delegated handlers (and most component libraries) respond.
async function doClick(el){
  var r=el.getBoundingClientRect();
  var x=r.left+r.width/2,y=r.top+r.height/2;
  var hit=document.elementFromPoint(x,y);
  var t=(hit&&el.contains(hit))?hit:el;
  var po={bubbles:true,cancelable:true,clientX:x,clientY:y,pointerType:'mouse',isPrimary:true};
  var mo={bubbles:true,cancelable:true,clientX:x,clientY:y,button:0};
  t.dispatchEvent(new PointerEvent('pointerover',po));
  t.dispatchEvent(new MouseEvent('mouseover',mo));
  t.dispatchEvent(new PointerEvent('pointerdown',po));
  t.dispatchEvent(new MouseEvent('mousedown',mo));
  try{el.focus({preventScroll:true});}catch(e){}
  t.dispatchEvent(new PointerEvent('pointerup',po));
  t.dispatchEvent(new MouseEvent('mouseup',mo));
  t.click();
  await waitMs(150);
}

function nativeSetter(el){
  var proto=(el.tagName.toLowerCase()==='textarea')?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;
  var d=Object.getOwnPropertyDescriptor(proto,'value');
  return d&&d.set;
}
async function doInput(el,text){
  var tag=el.tagName.toLowerCase();
  if(tag!=='input'&&tag!=='textarea'&&!el.isContentEditable){
    throw new Error('element at that index is a <'+tag+'>, not a text field');
  }
  await doClick(el);
  if(el.isContentEditable){
    if(el.dispatchEvent(new InputEvent('beforeinput',{bubbles:true,cancelable:true,inputType:'insertText',data:text}))){
      el.innerText=text;
      el.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:text}));
    }
    if(el.innerText.trim()!==String(text).trim()){
      // Editors that ignore synthetic events (Slate, Quill) still honour execCommand.
      el.focus();
      var sel=getSelection(),rg=document.createRange();
      rg.selectNodeContents(el);
      sel.removeAllRanges();sel.addRange(rg);
      document.execCommand('delete',false);
      document.execCommand('insertText',false,text);
    }
    el.dispatchEvent(new Event('change',{bubbles:true}));
  }else{
    // React overrides the value setter on the instance; going through the
    // prototype setter is what makes it notice the change.
    var s=nativeSetter(el);
    if(s)s.call(el,text);else el.value=text;
    el.dispatchEvent(new Event('input',{bubbles:true}));
    el.dispatchEvent(new Event('change',{bubbles:true}));
  }
  await waitMs(100);
}

async function doSelect(el,optionText){
  if(el.tagName.toLowerCase()!=='select'){
    throw new Error('element at that index is a <'+el.tagName.toLowerCase()+'>, not a native <select>. '+
      'For a custom dropdown: click it to open, read the page again, then click the option.');
  }
  var opts=Array.prototype.slice.call(el.options);
  var want=clean(optionText),hit=null;
  for(var i=0;i<opts.length&&!hit;i++)if(clean(opts[i].textContent)===want)hit=opts[i];
  for(var i=0;i<opts.length&&!hit;i++)if(clean(opts[i].textContent).toLowerCase()===want.toLowerCase())hit=opts[i];
  if(!hit){
    var names=opts.map(function(o){return '"'+clean(o.textContent)+'"';}).join(', ');
    throw new Error('no option matching "'+want+'". Options: '+names);
  }
  el.value=hit.value;
  el.dispatchEvent(new Event('input',{bubbles:true}));
  el.dispatchEvent(new Event('change',{bubbles:true}));
  await waitMs(100);
}

async function doScroll(dir,amount,el){
  var n=(typeof amount==='number'&&isFinite(amount)&&amount>0)?amount:400;
  var dy=dir==='down'?n:dir==='up'?-n:0;
  var dx=dir==='right'?n:dir==='left'?-n:0;
  if(!dy&&!dx)throw new Error('direction must be one of: up, down, left, right');
  if(el){
    var c=el;
    for(var i=0;c&&i<12;i++){
      var cs=getComputedStyle(c);
      var okY=dy&&/(auto|scroll|overlay)/.test(cs.overflowY)&&c.scrollHeight>c.clientHeight;
      var okX=dx&&/(auto|scroll|overlay)/.test(cs.overflowX)&&c.scrollWidth>c.clientWidth;
      if(okY||okX){
        var before=okY?c.scrollTop:c.scrollLeft;
        if(okY)c.scrollTop=before+dy;else c.scrollLeft=before+dx;
        await waitMs(100);
        var moved=(okY?c.scrollTop:c.scrollLeft)-before;
        return 'scrolled <'+c.tagName.toLowerCase()+'> container by '+Math.round(moved)+'px';
      }
      if(c===document.body||c===document.documentElement)break;
      c=c.parentElement;
    }
    return 'that element has no scrollable container; nothing scrolled';
  }
  var by=scrollY,bx=scrollX;
  scrollBy(dx,dy);
  await waitMs(120);
  var moved=dy?scrollY-by:scrollX-bx;
  if(Math.abs(moved)<1){
    return dy>0?'already at the bottom of the page':dy<0?'already at the top of the page':'cannot scroll further that way';
  }
  return 'scrolled page by '+Math.round(moved)+'px';
}

async function withHighlight(el,fn){
  el.scrollIntoView({block:'center',inline:'nearest',behavior:'auto'});
  await waitMs(90);
  var off=highlight(el);
  await waitMs(380);
  var g=guards();
  var err=null;
  try{await fn();}catch(e){err=e;}
  await waitMs(120);
  g.remove();
  await waitMs(220);
  off();
  if(err)throw err;
  var fx=g.fx;
  if(!fx.dialogs.length)delete fx.dialogs;
  return (fx.dialogs||fx.would_submit||fx.would_navigate)?fx:null;
}

function staleError(){
  return new Error('stale_index: the page changed since that snapshot. Read the page again and use a fresh index.');
}

async function handle(msg){
  var out;
  try{
    var op=msg.op,args=msg.args||{};
    var indexed=(op==='click'||op==='input_text'||op==='select_dropdown');
    var wantsIndex=indexed||(op==='scroll'&&typeof args.index==='number');
    var el=null;
    if(wantsIndex){
      // No pinned generation means the caller has not actually seen a page
      // map yet, so any index it supplies is a guess.
      if(typeof msg.generation!=='number'){
        throw new Error('read the page first — call read_page_state to get element numbers');
      }
      if(msg.generation!==generation)throw staleError();
      if(typeof args.index!=='number')throw new Error('missing numeric \\'index\\'');
      el=selectorMap.get(args.index);
      if(!el||!el.isConnected)throw staleError();
    }
    var effects=null,note=null;
    if(op==='read_page_state'){
      // nothing to do; snapshot is taken below
    }else if(op==='click'){
      effects=await withHighlight(el,function(){return doClick(el);});
    }else if(op==='input_text'){
      effects=await withHighlight(el,function(){return doInput(el,String(args.text==null?'':args.text));});
    }else if(op==='select_dropdown'){
      effects=await withHighlight(el,function(){return doSelect(el,args.option);});
    }else if(op==='scroll'){
      note=await doScroll(args.direction,args.amount,el);
    }else if(op==='screenshot'){
      // Replies early with its own result shape: no page_state, and —
      // deliberately — no buildTree(), which would bump \`generation\` and
      // strand any element indices the model pinned earlier this turn.
      if(!window.__aeroCaptureScreenshot)throw new Error('screenshot capture is not available in this preview');
      out={type:'aero-dom-op-result',id:msg.id,ok:true,result:await window.__aeroCaptureScreenshot(),generation:generation};
      try{parent.postMessage(out,'*');}catch(e){}
      return;
    }else{
      throw new Error('unknown op: '+op);
    }
    await waitMs(120);
    var res={page_state:buildTree()};
    if(effects)res.effects=effects;
    if(note)res.note=note;
    out={type:'aero-dom-op-result',id:msg.id,ok:true,result:res,generation:generation};
  }catch(e){
    out={type:'aero-dom-op-result',id:msg.id,ok:false,error:(e&&e.message)||String(e),generation:generation};
  }
  try{parent.postMessage(out,'*');}catch(e){}
}

window.addEventListener('message',function(e){
  if(e.source!==parent)return;
  var d=e.data;
  if(!d||d.type!=='aero-dom-op')return;
  handle(d);
});
try{parent.postMessage({type:'aero-dom-ready'},'*');}catch(e){}
})();<\/script>`;function jo(e,t){const n=nc+ec+tc+(t!=null&&t.screenshot?rc:"")+oc,r=e.match(/<head[^>]*>/i);if(!r)return n+e;const o=r.index+r[0].length;return e.slice(0,o)+n+e.slice(o)}var sc=Object.defineProperty,xr=(e,t)=>sc(e,"name",{value:t,configurable:!0});function rr(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}xr(rr,"setRef");function ss(...e){return t=>{let n=!1;const r=e.map(o=>{const i=rr(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():rr(e[o],null)}}}}xr(ss,"composeRefs");function V(...e){return a.useCallback(ss(...e),e)}xr(V,"useComposedRefs");var ic=Object.defineProperty,ve=(e,t)=>ic(e,"name",{value:t,configurable:!0});function ac(e,t){const n=a.createContext(t);n.displayName=e+"Context";const r=ve(i=>{const{children:l,...c}=i,u=a.useMemo(()=>c,Object.values(c));return s.jsx(n.Provider,{value:u,children:l})},"Provider");r.displayName=e+"Provider";function o(i,l={}){const{optional:c=!1}=l,u=a.useContext(n);if(u)return u;if(t!==void 0)return t;if(!c)throw new Error(`\`${i}\` must be used within \`${e}\``)}return ve(o,"useContext"),[r,o]}ve(ac,"createContext");function Ge(e,t=[]){let n=[];function r(i,l){const c=a.createContext(l);c.displayName=i+"Context";const u=n.length;n=[...n,l];const f=ve(h=>{var E;const{scope:p,children:g,...m}=h,b=((E=p==null?void 0:p[e])==null?void 0:E[u])||c,w=a.useMemo(()=>m,Object.values(m));return s.jsx(b.Provider,{value:w,children:g})},"Provider");f.displayName=i+"Provider";function v(h,p,g={}){var E;const{optional:m=!1}=g,b=((E=p==null?void 0:p[e])==null?void 0:E[u])||c,w=a.useContext(b);if(w)return w;if(l!==void 0)return l;if(!m)throw new Error(`\`${h}\` must be used within \`${i}\``)}return ve(v,"useContext"),[f,v]}ve(r,"createContext");const o=ve(()=>{const i=n.map(l=>a.createContext(l));return ve(function(c){const u=(c==null?void 0:c[e])||i;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])},"useScope")},"createScope");return o.scopeName=e,[r,is(o,...t)]}ve(Ge,"createContextScope");function is(...e){const t=e[0];if(e.length===1)return t;const n=ve(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return ve(function(i){const l=r.reduce((c,{useScope:u,scopeName:f})=>{const h=u(i)[`__scope${f}`];return{...c,...h}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return n.scopeName=t.scopeName,n}ve(is,"composeContextScopes");var lc=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},cc=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},uc=Object.defineProperty,dc=(e,t)=>uc(e,"name",{value:t,configurable:!0}),No=Je[" useEffectEvent ".trim().toString()],Ao=Je[" useInsertionEffect ".trim().toString()];function as(e){if(typeof No=="function")return No(e);const t=a.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof Ao=="function"?Ao(()=>{t.current=e}):cc(()=>{t.current=e}),a.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}dc(as,"useEffectEvent");var fc=Object.defineProperty,zt=(e,t)=>fc(e,"name",{value:t,configurable:!0}),hc=Je[" useInsertionEffect ".trim().toString()]||lc;function vn({prop:e,defaultProp:t,onChange:n=zt(()=>{},"onChange"),caller:r}){const[o,i,l]=ls({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:o,f=a.useCallback(v=>{var h;if(c){const p=cs(v)?v(e):v;p!==e&&((h=l.current)==null||h.call(l,p))}else i(v)},[c,e,i,l]);return[u,f]}zt(vn,"useControllableState");function ls({defaultProp:e,onChange:t}){const[n,r]=a.useState(e),o=a.useRef(n),i=a.useRef(t);return hc(()=>{i.current=t},[t]),a.useEffect(()=>{var l;o.current!==n&&((l=i.current)==null||l.call(i,n),o.current=n)},[n,o]),[n,r,i]}zt(ls,"useUncontrolledState");function cs(e){return typeof e=="function"}zt(cs,"isFunction");var _o=Symbol("RADIX:SYNC_STATE");function pc(e,t,n,r){const{prop:o,defaultProp:i,onChange:l,caller:c}=t,u=o!==void 0,f=as(l),v=[{...n,state:i}];r&&v.push(r);const[h,p]=a.useReducer((w,E)=>{if(E.type===_o)return{...w,state:E.state};const x=e(w,E);return u&&!Object.is(x.state,w.state)&&f(x.state),x},...v),g=h.state,m=a.useRef(g);a.useEffect(()=>{m.current!==g&&(m.current=g,u||f(g))},[g,m,u]);const b=a.useMemo(()=>o!==void 0?{...h,state:o}:h,[h,o]);return a.useEffect(()=>{u&&!Object.is(o,h.state)&&p({type:_o,state:o})},[o,h.state,u]),[b,p]}zt(pc,"useControllableStateReducer");var mc=Object.defineProperty,Ee=(e,t)=>mc(e,"name",{value:t,configurable:!0});function us(e){const t=a.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];or(o)&&typeof an=="function"&&(o=an(o._payload)),a.Children.forEach(o,p=>{var g;if(ps(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;or(b)&&typeof an=="function"&&(b=an(b._payload)),l=vc(m,b),u.push((g=l==null?void 0:l.props)==null?void 0:g.children)}else u.push(p)}),l?l=a.cloneElement(l,void 0,u):!c&&a.Children.count(o)===1&&a.isValidElement(o)&&(l=o);const f=l?hs(l):void 0,v=V(r,f);if(!l){if(o||o===0)throw new Error(c?wc(e):xc(e));return o}const h=fs(i,l.props??{});return l.type!==a.Fragment&&(h.ref=r?v:f),a.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}Ee(us,"createSlot");var ds=Symbol.for("radix.slottable");function gc(e){const t=Ee(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=ds,t}Ee(gc,"createSlottable");var vc=Ee((e,t)=>{if("child"in e.props){const n=e.props.child;return a.isValidElement(n)?a.cloneElement(n,void 0,e.props.children(n.props.children)):null}return a.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function fs(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}Ee(fs,"mergeProps");function hs(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Ee(hs,"getElementRef");function ps(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ds}Ee(ps,"isSlottable");var bc=Symbol.for("react.lazy");function or(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===bc&&"_payload"in e&&ms(e._payload)}Ee(or,"isLazyComponent");function ms(e){return typeof e=="object"&&e!==null&&"then"in e}Ee(ms,"isPromiseLike");var xc=Ee(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),wc=Ee(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),an=Je[" use ".trim().toString()],yc=Object.defineProperty,Sc=(e,t)=>yc(e,"name",{value:t,configurable:!0}),Cc=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],be=Cc.reduce((e,t)=>{const n=us(`Primitive.${t}`),r=a.forwardRef((o,i)=>{const{asChild:l,...c}=o,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function wr(e,t){e&&Yo.flushSync(()=>e.dispatchEvent(t))}Sc(wr,"dispatchDiscreteCustomEvent");var kc=Object.defineProperty,Re=(e,t)=>kc(e,"name",{value:t,configurable:!0});function Et(e){const t=a.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];sr(o)&&typeof ln=="function"&&(o=ln(o._payload)),a.Children.forEach(o,p=>{var g;if(xs(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;sr(b)&&typeof ln=="function"&&(b=ln(b._payload)),l=Rc(m,b),u.push((g=l==null?void 0:l.props)==null?void 0:g.children)}else u.push(p)}),l?l=a.cloneElement(l,void 0,u):!c&&a.Children.count(o)===1&&a.isValidElement(o)&&(l=o);const f=l?bs(l):void 0,v=V(r,f);if(!l){if(o||o===0)throw new Error(c?Tc(e):Ic(e));return o}const h=vs(i,l.props??{});return l.type!==a.Fragment&&(h.ref=r?v:f),a.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}Re(Et,"createSlot");var gs=Symbol.for("radix.slottable");function Ec(e){const t=Re(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=gs,t}Re(Ec,"createSlottable");var Rc=Re((e,t)=>{if("child"in e.props){const n=e.props.child;return a.isValidElement(n)?a.cloneElement(n,void 0,e.props.children(n.props.children)):null}return a.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function vs(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}Re(vs,"mergeProps");function bs(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Re(bs,"getElementRef");function xs(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===gs}Re(xs,"isSlottable");var Pc=Symbol.for("react.lazy");function sr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Pc&&"_payload"in e&&ws(e._payload)}Re(sr,"isLazyComponent");function ws(e){return typeof e=="object"&&e!==null&&"then"in e}Re(ws,"isPromiseLike");var Ic=Re(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Tc=Re(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),ln=Je[" use ".trim().toString()],Mc=Object.defineProperty,oe=(e,t)=>Mc(e,"name",{value:t,configurable:!0});function ys(e){const t=e+"CollectionProvider",[n,r]=Ge(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=oe(b=>{const{scope:w,children:E}=b,x=a.useRef(null),y=a.useRef(new Map).current;return s.jsx(o,{scope:w,itemMap:y,collectionRef:x,children:E})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=Et(c),f=a.forwardRef((b,w)=>{const{scope:E,children:x}=b,y=i(c,E),k=V(w,y.collectionRef);return s.jsx(u,{ref:k,children:x})});f.displayName=c;const v=e+"CollectionItemSlot",h="data-radix-collection-item",p=Et(v),g=a.forwardRef((b,w)=>{const{scope:E,children:x,...y}=b,k=a.useRef(null),R=V(w,k),I=i(v,E);return a.useEffect(()=>(I.itemMap.set(k,{ref:k,...y}),()=>void I.itemMap.delete(k))),s.jsx(p,{[h]:"",ref:R,children:x})});g.displayName=v;function m(b){const w=i(e+"CollectionConsumer",b);return a.useCallback(()=>{const x=w.collectionRef.current;if(!x)return[];const y=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((I,j)=>y.indexOf(I.ref.current)-y.indexOf(j.ref.current))},[w.collectionRef,w.itemMap])}return oe(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:g},m,r]}oe(ys,"createCollection");var Do=new WeakMap,Z,pe,Xn=(pe=class extends Map{constructor(n){super(n);Hn(this,Z);Ft(this,Z,[...super.keys()]),Do.set(this,!0)}set(n,r){return Do.get(this)&&(this.has(n)?U(this,Z)[U(this,Z).indexOf(n)]=n:U(this,Z).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=U(this,Z).length,c=yr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const v=this.size+(i?0:1);c<0&&u++;const h=[...U(this,Z)];let p,g=!1;for(let m=u;m<v;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!g&&h[m-1]===r&&(g=!0);const b=h[g?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const i=new pe(this);return i.insert(n,r,o),i}before(n){const r=U(this,Z).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=U(this,Z).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=U(this,Z).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=U(this,Z).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Ft(this,Z,[]),super.clear()}delete(n){const r=super.delete(n);return r&&U(this,Z).splice(U(this,Z).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=fn(U(this,Z),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=fn(U(this,Z),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return U(this,Z).indexOf(n)}keyAt(n){return fn(U(this,Z),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new pe(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new pe(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new pe(r)}toReversed(){const n=new pe;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new pe(r)}slice(n,r){const o=new pe;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},Z=new WeakMap,oe(pe,"OrderedDict"),pe);function fn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=Ss(e,t);return n===-1?void 0:e[n]}oe(fn,"at");function Ss(e,t){const n=e.length,r=yr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}oe(Ss,"toSafeIndex");function yr(e){return e!==e||e===0?0:Math.trunc(e)}oe(yr,"toSafeInteger");function jc(e){const t=e+"CollectionProvider",[n,r]=Ge(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Xn,setItemMap:oe(()=>{},"setItemMap")}),l=oe(({state:y,...k})=>y?s.jsx(u,{...k,state:y}):s.jsx(c,{...k}),"CollectionProvider");l.displayName=t;const c=oe(y=>{const k=w();return s.jsx(u,{...y,state:k})},"CollectionInit");c.displayName=t+"Init";const u=oe(y=>{const{scope:k,children:R,state:I}=y,j=a.useRef(null),[A,T]=a.useState(null),X=V(j,T),[W,P]=I;return a.useEffect(()=>{if(!A)return;const $=Es(()=>{});return $.observe(A,{childList:!0,subtree:!0}),()=>{$.disconnect()}},[A]),s.jsx(o,{scope:k,itemMap:W,setItemMap:P,collectionRef:X,collectionRefObject:j,collectionElement:A,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",v=Et(f),h=a.forwardRef((y,k)=>{const{scope:R,children:I}=y,j=i(f,R),A=V(k,j.collectionRef);return s.jsx(v,{ref:A,children:I})});h.displayName=f;const p=e+"CollectionItemSlot",g="data-radix-collection-item",m=Et(p),b=a.forwardRef((y,k)=>{const{scope:R,children:I,...j}=y,A=a.useRef(null),[T,X]=a.useState(null),W=V(k,A,X),P=i(p,R),{setItemMap:$}=P,K=a.useRef(j);Cs(K.current,j)||(K.current=j);const Q=K.current;return a.useEffect(()=>{const de=Q;return $(N=>T?N.has(T)?N.set(T,{...de,element:T}).toSorted(ir):(N.set(T,{...de,element:T}),N.toSorted(ir)):N),()=>{$(N=>!T||!N.has(T)?N:(N.delete(T),new Xn(N)))}},[T,Q,$]),s.jsx(m,{[g]:"",ref:W,children:I})});b.displayName=p;function w(){return a.useState(new Xn)}oe(w,"useInitCollection");function E(y){const{itemMap:k}=i(e+"CollectionConsumer",y);return k}return oe(E,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:E,useInitCollection:w}]}oe(jc,"createCollection");function Cs(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}oe(Cs,"shallowEqual");function ks(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}oe(ks,"isElementPreceding");function ir(e,t){return!e[1].element||!t[1].element?0:ks(e[1].element,t[1].element)?-1:1}oe(ir,"sortByDocumentPosition");function Es(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}oe(Es,"getChildListObserver");var Nc=Object.defineProperty,Ac=(e,t)=>Nc(e,"name",{value:t,configurable:!0}),_c=a.createContext(void 0);function Rs(e){const t=a.useContext(_c);return e||t||"ltr"}Ac(Rs,"useDirection");var Dc=Object.defineProperty,Oc=(e,t)=>Dc(e,"name",{value:t,configurable:!0});function Ne(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Oc(Ne,"useCallbackRef");var Lc=Object.defineProperty,re=(e,t)=>Lc(e,"name",{value:t,configurable:!0}),ar="dismissableLayer.update",Fc="dismissableLayer.pointerDownOutside",$c="dismissableLayer.focusOutside",Oo,Ps=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Bc=a.forwardRef(re(function(t,n){const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:u,onDismiss:f,...v}=t,h=a.useContext(Ps),[p,g]=a.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=a.useState({}),w=V(n,g),E=Array.from(h.layers),[x]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),y=x?E.indexOf(x):-1,k=p?E.indexOf(p):-1,R=h.layersWithOutsidePointerEventsDisabled.size>0,I=k>=y,j=a.useRef(!1),A=Is(P=>{l==null||l(P),u==null||u(P),P.defaultPrevented||f==null||f()},{ownerDocument:m,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:j,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:a.useCallback(P=>{if(!(P instanceof Node))return!1;const $=[...h.branches].some(K=>K.contains(P));return I&&!$},[h.branches,I])}),T=Ts(P=>{if(o&&j.current)return;const $=P.target;[...h.branches].some(Q=>Q.contains($))||(c==null||c(P),u==null||u(P),P.defaultPrevented||f==null||f())},m),X=p?k===E.length-1:!1,W=Ne(P=>{P.key==="Escape"&&(i==null||i(P),!P.defaultPrevented&&f&&(P.preventDefault(),f()))});return a.useEffect(()=>{if(X)return m.addEventListener("keydown",W,{capture:!0}),()=>m.removeEventListener("keydown",W,{capture:!0})},[m,X,W]),a.useEffect(()=>{if(p)return r&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(Oo=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(p)),h.layers.add(p),lr(),()=>{r&&(h.layersWithOutsidePointerEventsDisabled.delete(p),h.layersWithOutsidePointerEventsDisabled.size===0&&(m.body.style.pointerEvents=Oo))}},[p,m,r,h]),a.useEffect(()=>()=>{p&&(h.layers.delete(p),h.layersWithOutsidePointerEventsDisabled.delete(p),lr())},[p,h]),a.useEffect(()=>{const P=re(()=>b({}),"handleUpdate");return document.addEventListener(ar,P),()=>document.removeEventListener(ar,P)},[]),s.jsx(be.div,{...v,ref:w,style:{pointerEvents:R?I?"auto":"none":void 0,...t.style},onFocusCapture:O(t.onFocusCapture,T.onFocusCapture),onBlurCapture:O(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:O(t.onPointerDownCapture,A.onPointerDownCapture)})},"DismissableLayer"));function Uc(){const e=a.useContext(Ps),[t,n]=a.useState(null);return a.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}re(Uc,"useDismissableLayerSurface");var Hc=re(()=>!0,"IS_TRUE");function Is(e,t){const{ownerDocument:n=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:i,shouldHandlePointerDownOutside:l=Hc}=t,c=Ne(e),u=a.useRef(!1),f=a.useRef(!1),v=a.useRef(new Map),h=a.useRef(()=>{});return a.useEffect(()=>{function p(){f.current=!1,o.current=!1,v.current.clear()}re(p,"resetOutsideInteraction");function g(){return Array.from(v.current.values()).some(Boolean)}re(g,"isOutsideInteractionIntercepted");function m(y){if(!f.current)return;const k=y.target;k instanceof Node&&[...i].some(I=>I.contains(k))||v.current.set(y.type,!0),y.type==="click"&&window.setTimeout(()=>{f.current&&h.current()},0)}re(m,"handleInteractionCapture");function b(y){f.current&&v.current.set(y.type,!1)}re(b,"handleInteractionBubble");const w=re(y=>{if(y.target&&!u.current){let k=function(){n.removeEventListener("click",h.current);const I=g();p(),I||Sr(Fc,c,R,{discrete:!0})};if(re(k,"handleAndDispatchPointerDownOutsideEvent"),!l(y.target)){n.removeEventListener("click",h.current),p(),u.current=!1;return}const R={originalEvent:y};f.current=!0,o.current=r&&y.button===0,v.current.clear(),!r||y.button!==0?k():(n.removeEventListener("click",h.current),h.current=k,n.addEventListener("click",h.current,{once:!0}))}else n.removeEventListener("click",h.current),p();u.current=!1},"handlePointerDown"),E=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const y of E)n.addEventListener(y,m,!0),n.addEventListener(y,b);const x=window.setTimeout(()=>{n.addEventListener("pointerdown",w)},0);return()=>{window.clearTimeout(x),n.removeEventListener("pointerdown",w),n.removeEventListener("click",h.current);for(const y of E)n.removeEventListener(y,m,!0),n.removeEventListener(y,b)}},[n,c,r,o,i,l]),{onPointerDownCapture:re(()=>u.current=!0,"onPointerDownCapture")}}re(Is,"usePointerDownOutside");function Ts(e,t=globalThis==null?void 0:globalThis.document){const n=Ne(e),r=a.useRef(!1);return a.useEffect(()=>{const o=re(i=>{i.target&&!r.current&&Sr($c,n,{originalEvent:i},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:re(()=>r.current=!0,"onFocusCapture"),onBlurCapture:re(()=>r.current=!1,"onBlurCapture")}}re(Ts,"useFocusOutside");function lr(){const e=new CustomEvent(ar);document.dispatchEvent(e)}re(lr,"dispatchUpdate");function Sr(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?wr(o,i):o.dispatchEvent(i)}re(Sr,"handleAndDispatchCustomEvent");var zc=Object.defineProperty,Cr=(e,t)=>zc(e,"name",{value:t,configurable:!0}),cn=0,je=null;function Gc(e){return kr(),e.children}Cr(Gc,"FocusGuards");function kr(){a.useEffect(()=>{je||(je={start:cr(),end:cr()});const{start:e,end:t}=je;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),cn++,()=>{cn===1&&(je==null||je.start.remove(),je==null||je.end.remove(),je=null),cn=Math.max(0,cn-1)}},[])}Cr(kr,"useFocusGuards");function cr(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Cr(cr,"createFocusGuard");var Vc=Object.defineProperty,ue=(e,t)=>Vc(e,"name",{value:t,configurable:!0}),Qn="focusScope.autoFocusOnMount",Jn="focusScope.autoFocusOnUnmount",Lo={bubbles:!1,cancelable:!0},Wc=a.forwardRef(ue(function(t,n){const{loop:r=!1,trapped:o=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...c}=t,[u,f]=a.useState(null),v=Ne(i),h=Ne(l),p=a.useRef(null),g=V(n,f),m=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(o){let w=function(k){if(m.paused||!u)return;const R=k.target;u.contains(R)?p.current=R:He(p.current,{select:!0})},E=function(k){if(m.paused||!u)return;const R=k.relatedTarget;R!==null&&(u.contains(R)||He(p.current,{select:!0}))},x=function(k){if(document.activeElement===document.body)for(const I of k)I.removedNodes.length>0&&He(u)};ue(w,"handleFocusIn"),ue(E,"handleFocusOut"),ue(x,"handleMutations"),document.addEventListener("focusin",w),document.addEventListener("focusout",E);const y=new MutationObserver(x);return u&&y.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",E),y.disconnect()}}},[o,u,m.paused]),a.useEffect(()=>{if(u){Fo.add(m);const w=document.activeElement;if(!u.contains(w)){const x=new CustomEvent(Qn,Lo);u.addEventListener(Qn,v),u.dispatchEvent(x),x.defaultPrevented||(Ms(Ds(Er(u)),{select:!0}),document.activeElement===w&&He(u))}return()=>{u.removeEventListener(Qn,v),setTimeout(()=>{const x=new CustomEvent(Jn,Lo);u.addEventListener(Jn,h),u.dispatchEvent(x),x.defaultPrevented||He(w??document.body,{select:!0}),u.removeEventListener(Jn,h),Fo.remove(m)},0)}}},[u,v,h,m]);const b=a.useCallback(w=>{if(!r&&!o||m.paused)return;const E=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,x=document.activeElement;if(E&&x){const y=w.currentTarget,[k,R]=js(y);k&&R?!w.shiftKey&&x===R?(w.preventDefault(),r&&He(k,{select:!0})):w.shiftKey&&x===k&&(w.preventDefault(),r&&He(R,{select:!0})):x===y&&w.preventDefault()}},[r,o,m.paused]);return s.jsx(be.div,{tabIndex:-1,...c,ref:g,onKeyDown:b})},"FocusScope"));function Ms(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(He(r,{select:t}),document.activeElement!==n)return}ue(Ms,"focusFirst");function js(e){const t=Er(e),n=ur(t,e),r=ur(t.reverse(),e);return[n,r]}ue(js,"getTabbableEdges");function Er(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ue(r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}ue(Er,"getTabbableCandidates");function ur(e,t){const n=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):Ns(r,{upTo:t})))return r}ue(ur,"findVisible");function Ns(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}ue(Ns,"isHidden");function As(e){return e instanceof HTMLInputElement&&"select"in e}ue(As,"isSelectableInput");function He(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&As(e)&&t&&e.select()}}ue(He,"focus");var Fo=_s();function _s(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=dr(e,t),e.unshift(t)},remove(t){var n;e=dr(e,t),(n=e[0])==null||n.resume()}}}ue(_s,"createFocusScopesStack");function dr(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}ue(dr,"arrayRemove");function Ds(e){return e.filter(t=>t.tagName!=="A")}ue(Ds,"removeLinks");var Kc=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},qc=Object.defineProperty,Yc=(e,t)=>qc(e,"name",{value:t,configurable:!0}),Xc=Je[" useId ".trim().toString()]||(()=>{}),Qc=0;function Rt(e){const[t,n]=a.useState(Xc());return Kc(()=>{e||n(r=>r??String(Qc++))},[e]),e||(t?`radix-${t}`:"")}Yc(Rt,"useId");var hn=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Jc=Object.defineProperty,Zc=(e,t)=>Jc(e,"name",{value:t,configurable:!0});function Os(e){const[t,n]=a.useState(void 0);return hn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,c;if("borderBoxSize"in i){const u=i.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}Zc(Os,"useSize");var eu=Object.defineProperty,Qe=(e,t)=>eu(e,"name",{value:t,configurable:!0}),Ls="Popper",[Fs,$s]=Ge(Ls),[tu,Bs]=Fs(Ls),nu=Qe(e=>{const{__scopePopper:t,children:n}=e,[r,o]=a.useState(null),[i,l]=a.useState(void 0);return s.jsx(tu,{scope:t,anchor:r,onAnchorChange:o,placementState:i,setPlacementState:l,children:n})},"Popper"),ru="PopperAnchor",ou=a.forwardRef(Qe(function(t,n){const{__scopePopper:r,virtualRef:o,...i}=t,l=Bs(ru,r),c=a.useRef(null),u=l.onAnchorChange,f=a.useCallback(b=>{c.current=b,b&&u(b)},[u]),v=V(n,f),h=a.useRef(null);a.useEffect(()=>{if(!o)return;const b=h.current;h.current=o.current,b!==h.current&&u(h.current)});const p=l.placementState&&bn(l.placementState),g=p==null?void 0:p[0],m=p==null?void 0:p[1];return o?null:s.jsx(be.div,{"data-radix-popper-side":g,"data-radix-popper-align":m,...i,ref:v})},"PopperAnchor")),Us="PopperContent",[su,_f]=Fs(Us),iu=a.forwardRef(Qe(function(t,n){var _e,Y,We,nt,It,ft,ht;const{__scopePopper:r,side:o="bottom",sideOffset:i=0,align:l="center",alignOffset:c=0,arrowPadding:u=0,avoidCollisions:f=!0,collisionBoundary:v=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:g=!1,updatePositionStrategy:m="optimized",onPlaced:b,...w}=t,E=Bs(Us,r),[x,y]=a.useState(null),k=V(n,y),[R,I]=a.useState(null),j=Os(R),A=(j==null?void 0:j.width)??0,T=(j==null?void 0:j.height)??0,X=o+(l!=="center"?"-"+l:""),W=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},P=Array.isArray(v)?v:[v],$=P.length>0,K={padding:W,boundary:P.filter(Hs),altBoundary:$},{refs:Q,floatingStyles:de,placement:N,isPositioned:Ae,middlewareData:ie}=Sa({strategy:"fixed",placement:X,whileElementsMounted:Qe((...pt)=>Ma(...pt,{animationFrame:m==="always"}),"whileElementsMounted"),elements:{reference:E.anchor},middleware:[Ca({mainAxis:i+T,alignmentAxis:c}),f&&ka({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Ea():void 0,...K}),f&&Ra({...K}),Pa({...K,apply:Qe(({elements:pt,rects:mt,availableWidth:Tt,availableHeight:Vt})=>{const{width:Ke,height:kn}=mt.reference,gt=pt.floating.style;gt.setProperty("--radix-popper-available-width",`${Tt}px`),gt.setProperty("--radix-popper-available-height",`${Vt}px`),gt.setProperty("--radix-popper-anchor-width",`${Ke}px`),gt.setProperty("--radix-popper-anchor-height",`${kn}px`)},"apply")}),R&&Ia({element:R,padding:u}),au({arrowWidth:A,arrowHeight:T}),g&&Ta({strategy:"referenceHidden",...K,boundary:$?K.boundary:void 0})]}),M=E.setPlacementState;hn(()=>(M(N),()=>{M(void 0)}),[N,M]);const[te,ae]=bn(N),F=Ne(b);hn(()=>{Ae&&(F==null||F())},[Ae,F]);const et=(_e=ie.arrow)==null?void 0:_e.x,Ve=(Y=ie.arrow)==null?void 0:Y.y,tt=((We=ie.arrow)==null?void 0:We.centerOffset)!==0,[ce,ye]=a.useState();return hn(()=>{x&&ye(window.getComputedStyle(x).zIndex)},[x]),s.jsx("div",{ref:Q.setFloating,"data-radix-popper-content-wrapper":"",style:{...de,transform:Ae?de.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ce,"--radix-popper-transform-origin":[(nt=ie.transformOrigin)==null?void 0:nt.x,(It=ie.transformOrigin)==null?void 0:It.y].join(" "),...((ft=ie.hide)==null?void 0:ft.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:s.jsx(su,{scope:r,placedSide:te,placedAlign:ae,onArrowChange:I,arrowX:et,arrowY:Ve,shouldHideArrow:tt,children:s.jsx(be.div,{"data-side":te,"data-align":ae,...w,ref:k,style:{...w.style,animation:Ae?(ht=w.style)==null?void 0:ht.animation:"none"}})})})},"PopperContent"));function Hs(e){return e!==null}Qe(Hs,"isNotNull");var au=Qe(e=>({name:"transformOrigin",options:e,fn(t){var w,E,x;const{placement:n,rects:r,middlewareData:o}=t,l=((w=o.arrow)==null?void 0:w.centerOffset)!==0,c=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[f,v]=bn(n),h={start:"0%",center:"50%",end:"100%"}[v],p=(((E=o.arrow)==null?void 0:E.x)??0)+c/2,g=(((x=o.arrow)==null?void 0:x.y)??0)+u/2;let m="",b="";return f==="bottom"?(m=l?h:`${p}px`,b=`${-u}px`):f==="top"?(m=l?h:`${p}px`,b=`${r.floating.height+u}px`):f==="right"?(m=`${-u}px`,b=l?h:`${g}px`):f==="left"&&(m=`${r.floating.width+u}px`,b=l?h:`${g}px`),{data:{x:m,y:b}}}}),"transformOrigin");function bn(e){const[t,n="center"]=e.split("-");return[t,n]}Qe(bn,"getSideAndAlignFromPlacement");var zs=nu,lu=ou,cu=iu,uu=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},du=Object.defineProperty,fu=(e,t)=>du(e,"name",{value:t,configurable:!0}),hu=a.forwardRef(fu(function(t,n){var u;const{container:r,...o}=t,[i,l]=a.useState(!1);uu(()=>l(!0),[]);const c=r||i&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?Yo.createPortal(s.jsx(be.div,{...o,ref:n}),c):null},"Portal")),$o=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},pu=Object.defineProperty,ze=(e,t)=>pu(e,"name",{value:t,configurable:!0});function Gs(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}ze(Gs,"useStateMachine");var xn=ze(e=>{const{present:t,children:n}=e,r=Vs(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),i=Ws(r.ref,Ks(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:i}):null},"Presence");function Vs(e){const[t,n]=a.useState(),r=a.useRef(null),o=a.useRef(e),i=a.useRef("none"),l=a.useRef(void 0),c=e?"mounted":"unmounted",[u,f]=Gs(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{u==="mounted"?(i.current=l.current??Ct(r.current),l.current=void 0):i.current="none"},[u]),$o(()=>{const v=r.current,h=o.current;if(h!==e){const g=i.current,m=Ct(v);e?(l.current=m,f("MOUNT")):m==="none"||(v==null?void 0:v.display)==="none"?f("UNMOUNT"):f(h&&g!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),$o(()=>{if(t){let v;const h=t.ownerDocument.defaultView??window,p=ze(m=>{const w=Ct(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&w&&(f("ANIMATION_END"),!o.current)){const E=t.style.animationFillMode;t.style.animationFillMode="forwards",v=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=E)})}},"handleAnimationEnd"),g=ze(m=>{m.target===t&&(i.current=Ct(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",g),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(v),t.removeEventListener("animationstart",g),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:a.useCallback(v=>{if(v){const h=getComputedStyle(v);r.current=h,l.current=Ct(h)}else r.current=null;n(v)},[])}}ze(Vs,"usePresence");function fr(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}ze(fr,"setRef");function Ws(...e){const t=a.useRef(e);return t.current=e,a.useCallback(n=>{const r=t.current;let o=!1;const i=r.map(l=>{const c=fr(l,n);return!o&&typeof c=="function"&&(o=!0),c});if(o)return()=>{for(let l=0;l<i.length;l++){const c=i[l];typeof c=="function"?c():fr(r[l],null)}}},[])}ze(Ws,"useStableComposedRefs");function Ct(e){return(e==null?void 0:e.animationName)||"none"}ze(Ct,"getAnimationName");function Ks(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}ze(Ks,"getElementRef");var mu=Object.defineProperty,Pe=(e,t)=>mu(e,"name",{value:t,configurable:!0});function Bt(e){const t=a.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];hr(o)&&typeof un=="function"&&(o=un(o._payload)),a.Children.forEach(o,p=>{var g;if(Qs(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;hr(b)&&typeof un=="function"&&(b=un(b._payload)),l=vu(m,b),u.push((g=l==null?void 0:l.props)==null?void 0:g.children)}else u.push(p)}),l?l=a.cloneElement(l,void 0,u):!c&&a.Children.count(o)===1&&a.isValidElement(o)&&(l=o);const f=l?Xs(l):void 0,v=V(r,f);if(!l){if(o||o===0)throw new Error(c?wu(e):xu(e));return o}const h=Ys(i,l.props??{});return l.type!==a.Fragment&&(h.ref=r?v:f),a.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}Pe(Bt,"createSlot");var qs=Symbol.for("radix.slottable");function gu(e){const t=Pe(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=qs,t}Pe(gu,"createSlottable");var vu=Pe((e,t)=>{if("child"in e.props){const n=e.props.child;return a.isValidElement(n)?a.cloneElement(n,void 0,e.props.children(n.props.children)):null}return a.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Ys(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}Pe(Ys,"mergeProps");function Xs(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Pe(Xs,"getElementRef");function Qs(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===qs}Pe(Qs,"isSlottable");var bu=Symbol.for("react.lazy");function hr(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===bu&&"_payload"in e&&Js(e._payload)}Pe(hr,"isLazyComponent");function Js(e){return typeof e=="object"&&e!==null&&"then"in e}Pe(Js,"isPromiseLike");var xu=Pe(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),wu=Pe(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),un=Je[" use ".trim().toString()],yu=Object.defineProperty,se=(e,t)=>yu(e,"name",{value:t,configurable:!0});function Zs(e){const t=e+"CollectionProvider",[n,r]=Ge(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=se(b=>{const{scope:w,children:E}=b,x=a.useRef(null),y=a.useRef(new Map).current;return s.jsx(o,{scope:w,itemMap:y,collectionRef:x,children:E})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=Bt(c),f=a.forwardRef((b,w)=>{const{scope:E,children:x}=b,y=i(c,E),k=V(w,y.collectionRef);return s.jsx(u,{ref:k,children:x})});f.displayName=c;const v=e+"CollectionItemSlot",h="data-radix-collection-item",p=Bt(v),g=a.forwardRef((b,w)=>{const{scope:E,children:x,...y}=b,k=a.useRef(null),R=V(w,k),I=i(v,E);return a.useEffect(()=>(I.itemMap.set(k,{ref:k,...y}),()=>void I.itemMap.delete(k))),s.jsx(p,{[h]:"",ref:R,children:x})});g.displayName=v;function m(b){const w=i(e+"CollectionConsumer",b);return a.useCallback(()=>{const x=w.collectionRef.current;if(!x)return[];const y=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((I,j)=>y.indexOf(I.ref.current)-y.indexOf(j.ref.current))},[w.collectionRef,w.itemMap])}return se(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:g},m,r]}se(Zs,"createCollection");var Bo=new WeakMap,ee,me,Zn=(me=class extends Map{constructor(n){super(n);Hn(this,ee);Ft(this,ee,[...super.keys()]),Bo.set(this,!0)}set(n,r){return Bo.get(this)&&(this.has(n)?U(this,ee)[U(this,ee).indexOf(n)]=n:U(this,ee).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=U(this,ee).length,c=Rr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const v=this.size+(i?0:1);c<0&&u++;const h=[...U(this,ee)];let p,g=!1;for(let m=u;m<v;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!g&&h[m-1]===r&&(g=!0);const b=h[g?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const i=new me(this);return i.insert(n,r,o),i}before(n){const r=U(this,ee).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=U(this,ee).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=U(this,ee).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=U(this,ee).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Ft(this,ee,[]),super.clear()}delete(n){const r=super.delete(n);return r&&U(this,ee).splice(U(this,ee).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=pn(U(this,ee),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=pn(U(this,ee),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return U(this,ee).indexOf(n)}keyAt(n){return pn(U(this,ee),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new me(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new me(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new me(r)}toReversed(){const n=new me;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new me(r)}slice(n,r){const o=new me;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},ee=new WeakMap,se(me,"OrderedDict"),me);function pn(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=ei(e,t);return n===-1?void 0:e[n]}se(pn,"at");function ei(e,t){const n=e.length,r=Rr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}se(ei,"toSafeIndex");function Rr(e){return e!==e||e===0?0:Math.trunc(e)}se(Rr,"toSafeInteger");function Su(e){const t=e+"CollectionProvider",[n,r]=Ge(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Zn,setItemMap:se(()=>{},"setItemMap")}),l=se(({state:y,...k})=>y?s.jsx(u,{...k,state:y}):s.jsx(c,{...k}),"CollectionProvider");l.displayName=t;const c=se(y=>{const k=w();return s.jsx(u,{...y,state:k})},"CollectionInit");c.displayName=t+"Init";const u=se(y=>{const{scope:k,children:R,state:I}=y,j=a.useRef(null),[A,T]=a.useState(null),X=V(j,T),[W,P]=I;return a.useEffect(()=>{if(!A)return;const $=ri(()=>{});return $.observe(A,{childList:!0,subtree:!0}),()=>{$.disconnect()}},[A]),s.jsx(o,{scope:k,itemMap:W,setItemMap:P,collectionRef:X,collectionRefObject:j,collectionElement:A,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",v=Bt(f),h=a.forwardRef((y,k)=>{const{scope:R,children:I}=y,j=i(f,R),A=V(k,j.collectionRef);return s.jsx(v,{ref:A,children:I})});h.displayName=f;const p=e+"CollectionItemSlot",g="data-radix-collection-item",m=Bt(p),b=a.forwardRef((y,k)=>{const{scope:R,children:I,...j}=y,A=a.useRef(null),[T,X]=a.useState(null),W=V(k,A,X),P=i(p,R),{setItemMap:$}=P,K=a.useRef(j);ti(K.current,j)||(K.current=j);const Q=K.current;return a.useEffect(()=>{const de=Q;return $(N=>T?N.has(T)?N.set(T,{...de,element:T}).toSorted(pr):(N.set(T,{...de,element:T}),N.toSorted(pr)):N),()=>{$(N=>!T||!N.has(T)?N:(N.delete(T),new Zn(N)))}},[T,Q,$]),s.jsx(m,{[g]:"",ref:W,children:I})});b.displayName=p;function w(){return a.useState(new Zn)}se(w,"useInitCollection");function E(y){const{itemMap:k}=i(e+"CollectionConsumer",y);return k}return se(E,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:E,useInitCollection:w}]}se(Su,"createCollection");function ti(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}se(ti,"shallowEqual");function ni(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}se(ni,"isElementPreceding");function pr(e,t){return!e[1].element||!t[1].element?0:ni(e[1].element,t[1].element)?-1:1}se(pr,"sortByDocumentPosition");function ri(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}se(ri,"getChildListObserver");var Cu=Object.defineProperty,ku=(e,t)=>Cu(e,"name",{value:t,configurable:!0});function oi(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}ku(oi,"useCallbackRef");var Eu=Object.defineProperty,Ru=(e,t)=>Eu(e,"name",{value:t,configurable:!0}),Pu=a.createContext(void 0);function si(e){const t=a.useContext(Pu);return e||t||"ltr"}Ru(si,"useDirection");var Iu=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},Tu=Object.defineProperty,Pr=(e,t)=>Tu(e,"name",{value:t,configurable:!0}),er=!1;function ii(){const[e,t]=a.useState(er);return a.useEffect(()=>{er||(er=!0,t(!0))},[]),e}Pr(ii,"useIsHydrated");var ai=Je[" useSyncExternalStore ".trim().toString()];function li(){return()=>{}}Pr(li,"subscribe");function ci(){return ai(li,()=>!0,()=>!1)}Pr(ci,"useIsHydratedModern");var Mu=typeof ai=="function"?ci:ii,ju=Object.defineProperty,ut=(e,t)=>ju(e,"name",{value:t,configurable:!0}),tr="rovingFocusGroup.onEntryFocus",Nu={bubbles:!1,cancelable:!0},wn="RovingFocusGroup",[mr,ui,Au]=Zs(wn),[_u,di]=Ge(wn,[Au]),[Du,Ou]=_u(wn),Lu=a.forwardRef(ut(function(t,n){return s.jsx(mr.Provider,{scope:t.__scopeRovingFocusGroup,children:s.jsx(mr.Slot,{scope:t.__scopeRovingFocusGroup,children:s.jsx(Fu,{...t,ref:n})})})},"RovingFocusGroup")),Fu=a.forwardRef(ut(function(t,n){const{__scopeRovingFocusGroup:r,orientation:o,loop:i=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:f,onEntryFocus:v,preventScrollOnEntryFocus:h=!1,...p}=t,g=a.useRef(null),m=V(n,g),b=si(l),[w,E]=vn({prop:c,defaultProp:u??null,onChange:f,caller:wn}),[x,y]=a.useState(!1),k=oi(v),R=ui(r),I=a.useRef(!1),[j,A]=a.useState(0);return a.useEffect(()=>{const T=g.current;if(T)return T.addEventListener(tr,k),()=>T.removeEventListener(tr,k)},[k]),s.jsx(Du,{scope:r,orientation:o,dir:b,loop:i,currentTabStopId:w,onItemFocus:a.useCallback(T=>E(T),[E]),onItemShiftTab:a.useCallback(()=>y(!0),[]),onFocusableItemAdd:a.useCallback(()=>A(T=>T+1),[]),onFocusableItemRemove:a.useCallback(()=>A(T=>T-1),[]),children:s.jsx(be.div,{tabIndex:x||j===0?-1:0,"data-orientation":o,...p,ref:m,style:{outline:"none",...t.style},onMouseDown:O(t.onMouseDown,()=>{I.current=!0}),onFocus:O(t.onFocus,T=>{const X=!I.current;if(T.target===T.currentTarget&&X&&!x){const W=new CustomEvent(tr,Nu);if(T.currentTarget.dispatchEvent(W),!W.defaultPrevented){const P=R().filter(N=>N.focusable),$=P.find(N=>N.active),K=P.find(N=>N.id===w),de=[$,K,...P].filter(Boolean).map(N=>N.ref.current);Ir(de,h)}}I.current=!1}),onBlur:O(t.onBlur,()=>y(!1))})})},"RovingFocusGroupImpl")),$u="RovingFocusGroupItem",Bu=a.forwardRef(ut(function(t,n){const{__scopeRovingFocusGroup:r,focusable:o=!0,active:i=!1,tabStopId:l,children:c,...u}=t,f=Rt(),v=l||f,h=Ou($u,r),p=h.currentTabStopId===v,g=ui(r),{onFocusableItemAdd:m,onFocusableItemRemove:b,currentTabStopId:w}=h,E=Mu();return Iu(()=>{if(!(!E||!o))return m(),()=>b()},[E,o,m,b]),a.useEffect(()=>{if(!(E||!o))return m(),()=>b()},[E,o,m,b]),s.jsx(mr.ItemSlot,{scope:r,id:v,focusable:o,active:i,children:s.jsx(be.span,{tabIndex:p?0:-1,"data-orientation":h.orientation,...u,ref:n,onMouseDown:O(t.onMouseDown,x=>{o?h.onItemFocus(v):x.preventDefault()}),onFocus:O(t.onFocus,()=>h.onItemFocus(v)),onKeyDown:O(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){h.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const y=hi(x,h.orientation,h.dir);if(y!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let R=g().filter(I=>I.focusable).map(I=>I.ref.current);if(y==="last")R.reverse();else if(y==="prev"||y==="next"){y==="prev"&&R.reverse();const I=R.indexOf(x.currentTarget);R=h.loop?pi(R,I+1):R.slice(I+1)}setTimeout(()=>Ir(R))}}),children:typeof c=="function"?c({isCurrentTabStop:p,hasTabStop:w!=null}):c})})},"RovingFocusGroupItem")),Uu={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function fi(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}ut(fi,"getDirectionAwareKey");function hi(e,t,n){const r=fi(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Uu[r]}ut(hi,"getFocusIntent");function Ir(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}ut(Ir,"focusFirst");function pi(e,t){return e.map((n,r)=>e[(t+r)%e.length])}ut(pi,"wrapArray");var Hu=Lu,zu=Bu,Gu=Object.defineProperty,L=(e,t)=>Gu(e,"name",{value:t,configurable:!0}),gr=["Enter"," "],Vu=["ArrowDown","PageUp","Home"],mi=["ArrowUp","PageDown","End"],Wu=[...Vu,...mi],Ku={ltr:[...gr,"ArrowRight"],rtl:[...gr,"ArrowLeft"]},qu={ltr:["ArrowLeft"],rtl:["ArrowRight"]},yn="Menu",[Ut,Yu,Xu]=ys(yn),[dt,gi]=Ge(yn,[Xu,$s,di]),Sn=$s(),vi=di(),[bi,Ze]=dt(yn),[Qu,Gt]=dt(yn),Ju=L(e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:l=!0}=e,c=Sn(t),[u,f]=a.useState(null),v=a.useRef(!1),h=Ne(i),p=Rs(o);return a.useEffect(()=>{const g=L(()=>{v.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},"handleKeyDown"),m=L(()=>v.current=!1,"handlePointer");return document.addEventListener("keydown",g,{capture:!0}),()=>{document.removeEventListener("keydown",g,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),a.useEffect(()=>{if(!n)return;const g=L(()=>h(!1),"handleBlur");return window.addEventListener("blur",g),()=>window.removeEventListener("blur",g)},[n,h]),s.jsx(zs,{...c,children:s.jsx(bi,{scope:t,open:n,onOpenChange:h,content:u,onContentChange:f,children:s.jsx(Qu,{scope:t,onClose:a.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:v,dir:p,modal:l,children:r})})})},"Menu"),xi=a.forwardRef(L(function(t,n){const{__scopeMenu:r,...o}=t,i=Sn(r);return s.jsx(lu,{...i,...o,ref:n})},"MenuAnchor")),wi="MenuPortal",[Zu,yi]=dt(wi,{forceMount:void 0}),ed=L(e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=Ze(wi,t);return s.jsx(Zu,{scope:t,forceMount:n,children:s.jsx(xn,{present:n||i.open,children:s.jsx(hu,{asChild:!0,container:o,children:r})})})},"MenuPortal"),ke="MenuContent",[td,Tr]=dt(ke),nd=a.forwardRef(L(function(t,n){const r=yi(ke,t.__scopeMenu),{forceMount:o=r.forceMount,...i}=t,l=Ze(ke,t.__scopeMenu),c=Gt(ke,t.__scopeMenu);return s.jsx(Ut.Provider,{scope:t.__scopeMenu,children:s.jsx(xn,{present:o||l.open,children:s.jsx(Ut.Slot,{scope:t.__scopeMenu,children:c.modal?s.jsx(rd,{...i,ref:n}):s.jsx(od,{...i,ref:n})})})})},"MenuContent")),rd=a.forwardRef(L(function(t,n){const r=Ze(ke,t.__scopeMenu),o=a.useRef(null),i=V(n,o);return a.useEffect(()=>{const l=o.current;if(l)return jl(l)},[]),s.jsx(Mr,{...t,ref:i,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:O(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentModal")),od=a.forwardRef(L(function(t,n){const r=Ze(ke,t.__scopeMenu);return s.jsx(Mr,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentNonModal")),sd=Et("MenuContent.ScrollLock"),Mr=a.forwardRef(L(function(t,n){const{__scopeMenu:r,loop:o=!1,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:c,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:v,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:g,onDismiss:m,disableOutsideScroll:b,...w}=t,E=Ze(ke,r),x=Gt(ke,r),y=Sn(r),k=vi(r),R=Yu(r),[I,j]=a.useState(null),A=a.useRef(null),T=V(n,A,E.onContentChange),X=a.useRef(0),W=a.useRef(""),P=a.useRef(0),$=a.useRef(null),K=a.useRef("right"),Q=a.useRef(0),de=b?Nl:a.Fragment,N=b?{as:sd,allowPinchZoom:!0}:void 0,Ae=L(M=>{var ye,_e;const te=W.current+M,ae=R().filter(Y=>!Y.disabled),F=document.activeElement,et=(ye=ae.find(Y=>Y.ref.current===F))==null?void 0:ye.textValue,Ve=ae.map(Y=>Y.textValue),tt=Mi(Ve,te,et),ce=(_e=ae.find(Y=>Y.textValue===tt))==null?void 0:_e.ref.current;L((function Y(We){W.current=We,window.clearTimeout(X.current),We!==""&&(X.current=window.setTimeout(()=>Y(""),1e3))}),"updateSearch")(te),ce&&setTimeout(()=>ce.focus())},"handleTypeaheadSearch");a.useEffect(()=>()=>window.clearTimeout(X.current),[]),kr();const ie=a.useCallback(M=>{var ae,F;return K.current===((ae=$.current)==null?void 0:ae.side)&&Ni(M,(F=$.current)==null?void 0:F.area)},[]);return s.jsx(td,{scope:r,searchRef:W,onItemEnter:a.useCallback(M=>{ie(M)&&M.preventDefault()},[ie]),onItemLeave:a.useCallback(M=>{var te;ie(M)||((te=A.current)==null||te.focus(),j(null))},[ie]),onTriggerLeave:a.useCallback(M=>{ie(M)&&M.preventDefault()},[ie]),pointerGraceTimerRef:P,onPointerGraceIntentChange:a.useCallback(M=>{$.current=M},[]),children:s.jsx(de,{...N,children:s.jsx(Wc,{asChild:!0,trapped:i,onMountAutoFocus:O(l,M=>{var te;M.preventDefault(),(te=A.current)==null||te.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:s.jsx(Bc,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:v,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:g,onDismiss:m,children:s.jsx(Hu,{asChild:!0,...k,dir:x.dir,orientation:"vertical",loop:o,currentTabStopId:I,onCurrentTabStopIdChange:j,onEntryFocus:O(f,M=>{x.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(cu,{role:"menu","aria-orientation":"vertical","data-state":jr(E.open),"data-radix-menu-content":"",dir:x.dir,...y,...w,ref:T,style:{outline:"none",...w.style},onKeyDown:O(w.onKeyDown,M=>{const ae=M.target.closest("[data-radix-menu-content]")===M.currentTarget,F=M.ctrlKey||M.altKey||M.metaKey,et=M.key.length===1;ae&&(M.key==="Tab"&&M.preventDefault(),!F&&et&&Ae(M.key));const Ve=A.current;if(M.target!==Ve||!Wu.includes(M.key))return;M.preventDefault();const ce=R().filter(ye=>!ye.disabled).map(ye=>ye.ref.current);mi.includes(M.key)&&ce.reverse(),Ii(ce)}),onBlur:O(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(X.current),W.current="")}),onPointerMove:O(t.onPointerMove,Pt(M=>{const te=M.target,ae=Q.current!==M.clientX;if(M.currentTarget.contains(te)&&ae){const F=M.clientX>Q.current?"right":"left";K.current=F,Q.current=M.clientX}}))})})})})})})},"MenuContentImpl")),id=a.forwardRef(L(function(t,n){const{__scopeMenu:r,...o}=t;return s.jsx(be.div,{role:"group",...o,ref:n})},"MenuGroup")),ad=a.forwardRef(L(function(t,n){const{__scopeMenu:r,...o}=t;return s.jsx(be.div,{...o,ref:n})},"MenuLabel")),vr="MenuItem",Uo="menu.itemSelect",Si=a.forwardRef(L(function(t,n){const{disabled:r=!1,onSelect:o,...i}=t,l=a.useRef(null),c=Gt(vr,t.__scopeMenu),u=Tr(vr,t.__scopeMenu),f=V(n,l),v=a.useRef(!1),h=L(()=>{const p=l.current;if(!r&&p){const g=new CustomEvent(Uo,{bubbles:!0,cancelable:!0});p.addEventListener(Uo,m=>o==null?void 0:o(m),{once:!0}),wr(p,g),g.defaultPrevented?v.current=!1:c.onClose()}},"handleSelect");return s.jsx(Ci,{...i,ref:f,disabled:r,onClick:O(t.onClick,h),onPointerDown:p=>{var g;(g=t.onPointerDown)==null||g.call(t,p),v.current=!0},onPointerUp:O(t.onPointerUp,p=>{var g;v.current||(g=p.currentTarget)==null||g.click()}),onKeyDown:O(t.onKeyDown,p=>{r||p.target!==p.currentTarget||u.searchRef.current!==""&&p.key===" "||gr.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})},"MenuItem")),Ci=a.forwardRef(L(function(t,n){const{__scopeMenu:r,disabled:o=!1,textValue:i,...l}=t,c=Tr(vr,r),u=vi(r),f=a.useRef(null),v=V(n,f),[h,p]=a.useState(!1),[g,m]=a.useState("");return a.useEffect(()=>{const b=f.current;b&&m((b.textContent??"").trim())},[l.children]),s.jsx(Ut.ItemSlot,{scope:r,disabled:o,textValue:i??g,children:s.jsx(zu,{asChild:!0,...u,focusable:!o,children:s.jsx(be.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...l,ref:v,onPointerMove:O(t.onPointerMove,Pt(b=>{o?c.onItemLeave(b):(c.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:O(t.onPointerLeave,Pt(b=>c.onItemLeave(b))),onFocus:O(t.onFocus,()=>p(!0)),onBlur:O(t.onBlur,()=>p(!1))})})})},"MenuItemImpl")),ld=a.forwardRef(L(function(t,n){const{checked:r=!1,onCheckedChange:o,...i}=t;return s.jsx(Ei,{scope:t.__scopeMenu,checked:r,children:s.jsx(Si,{role:"menuitemcheckbox","aria-checked":Ht(r)?"mixed":r,...i,ref:n,"data-state":Cn(r),onSelect:O(i.onSelect,()=>o==null?void 0:o(Ht(r)?!0:!r),{checkForDefaultPrevented:!1})})})},"MenuCheckboxItem")),cd="MenuRadioGroup",[ud,dd]=dt(cd,{value:void 0,onValueChange:L(()=>{},"onValueChange")}),fd=a.forwardRef(L(function(t,n){const{value:r,onValueChange:o,...i}=t,l=Ne(o);return s.jsx(ud,{scope:t.__scopeMenu,value:r,onValueChange:l,children:s.jsx(id,{...i,ref:n})})},"MenuRadioGroup")),hd="MenuRadioItem",pd=a.forwardRef(L(function(t,n){const{value:r,...o}=t,i=dd(hd,t.__scopeMenu),l=r===i.value;return s.jsx(Ei,{scope:t.__scopeMenu,checked:l,children:s.jsx(Si,{role:"menuitemradio","aria-checked":l,...o,ref:n,"data-state":Cn(l),onSelect:O(o.onSelect,()=>{var c;return(c=i.onValueChange)==null?void 0:c.call(i,r)},{checkForDefaultPrevented:!1})})})},"MenuRadioItem")),ki="MenuItemIndicator",[Ei,md]=dt(ki,{checked:!1}),gd=a.forwardRef(L(function(t,n){const{__scopeMenu:r,forceMount:o,...i}=t,l=md(ki,r);return s.jsx(xn,{present:o||Ht(l.checked)||l.checked===!0,children:s.jsx(be.span,{...i,ref:n,"data-state":Cn(l.checked)})})},"MenuItemIndicator")),Ri="MenuSub",[vd,Pi]=dt(Ri),bd=L(e=>{const{__scopeMenu:t,children:n,open:r=!1,onOpenChange:o}=e,i=Ze(Ri,t),l=Sn(t),[c,u]=a.useState(null),[f,v]=a.useState(null),h=Ne(o);return a.useEffect(()=>(i.open===!1&&h(!1),()=>h(!1)),[i.open,h]),s.jsx(zs,{...l,children:s.jsx(bi,{scope:t,open:r,onOpenChange:h,content:f,onContentChange:v,children:s.jsx(vd,{scope:t,contentId:Rt(),triggerId:Rt(),trigger:c,onTriggerChange:u,children:n})})})},"MenuSub"),dn="MenuSubTrigger",xd=a.forwardRef(L(function(t,n){const r=Ze(dn,t.__scopeMenu),o=Gt(dn,t.__scopeMenu),i=Pi(dn,t.__scopeMenu),l=Tr(dn,t.__scopeMenu),c=a.useRef(null),{pointerGraceTimerRef:u,onPointerGraceIntentChange:f}=l,v={__scopeMenu:t.__scopeMenu},h=a.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);a.useEffect(()=>h,[h]),a.useEffect(()=>{const g=u.current;return()=>{window.clearTimeout(g),f(null)}},[u,f]);const p=V(n,i.onTriggerChange);return s.jsx(xi,{asChild:!0,...v,children:s.jsx(Ci,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":r.open?i.contentId:void 0,"data-state":jr(r.open),...t,ref:p,onClick:g=>{var m;(m=t.onClick)==null||m.call(t,g),!(t.disabled||g.defaultPrevented)&&(g.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:O(t.onPointerMove,Pt(g=>{l.onItemEnter(g),!g.defaultPrevented&&!t.disabled&&!r.open&&!c.current&&(l.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{r.onOpenChange(!0),h()},100))})),onPointerLeave:O(t.onPointerLeave,Pt(g=>{var b,w;h();const m=(b=r.content)==null?void 0:b.getBoundingClientRect();if(m){const E=(w=r.content)==null?void 0:w.dataset.side,x=E==="right",y=x?-5:5,k=m[x?"left":"right"],R=m[x?"right":"left"];l.onPointerGraceIntentChange({area:[{x:g.clientX+y,y:g.clientY},{x:k,y:m.top},{x:R,y:m.top},{x:R,y:m.bottom},{x:k,y:m.bottom}],side:E}),window.clearTimeout(u.current),u.current=window.setTimeout(()=>l.onPointerGraceIntentChange(null),300)}else{if(l.onTriggerLeave(g),g.defaultPrevented)return;l.onPointerGraceIntentChange(null)}})),onKeyDown:O(t.onKeyDown,g=>{var b;t.disabled||g.target!==g.currentTarget||l.searchRef.current!==""&&g.key===" "||Ku[o.dir].includes(g.key)&&(r.onOpenChange(!0),(b=r.content)==null||b.focus(),g.preventDefault())})})})},"MenuSubTrigger")),wd="MenuSubContent",yd=a.forwardRef(L(function(t,n){const r=yi(ke,t.__scopeMenu),{forceMount:o=r.forceMount,align:i="start",...l}=t,c=Ze(ke,t.__scopeMenu),u=Gt(ke,t.__scopeMenu),f=Pi(wd,t.__scopeMenu),v=a.useRef(null),h=V(n,v);return s.jsx(Ut.Provider,{scope:t.__scopeMenu,children:s.jsx(xn,{present:o||c.open,children:s.jsx(Ut.Slot,{scope:t.__scopeMenu,children:s.jsx(Mr,{id:f.contentId,"aria-labelledby":f.triggerId,...l,ref:h,align:i,side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var g;u.isUsingKeyboardRef.current&&((g=v.current)==null||g.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:O(t.onFocusOutside,p=>{p.target!==f.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:O(t.onEscapeKeyDown,p=>{u.onClose(),p.preventDefault()}),onKeyDown:O(t.onKeyDown,p=>{var b;const g=p.currentTarget.contains(p.target),m=qu[u.dir].includes(p.key);g&&m&&(c.onOpenChange(!1),(b=f.trigger)==null||b.focus(),p.preventDefault())})})})})})},"MenuSubContent"));function jr(e){return e?"open":"closed"}L(jr,"getOpenState");function Ht(e){return e==="indeterminate"}L(Ht,"isIndeterminate");function Cn(e){return Ht(e)?"indeterminate":e?"checked":"unchecked"}L(Cn,"getCheckedState");function Ii(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}L(Ii,"focusFirst");function Ti(e,t){return e.map((n,r)=>e[(t+r)%e.length])}L(Ti,"wrapArray");function Mi(e,t,n){const o=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let l=Ti(e,Math.max(i,0));o.length===1&&(l=l.filter(f=>f!==n));const u=l.find(f=>f.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}L(Mi,"getNextMatch");function ji(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,l=t.length-1;i<t.length;l=i++){const c=t[i],u=t[l],f=c.x,v=c.y,h=u.x,p=u.y;v>r!=p>r&&n<(h-f)*(r-v)/(p-v)+f&&(o=!o)}return o}L(ji,"isPointInPolygon");function Ni(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return ji(n,t)}L(Ni,"isPointerInGraceArea");function Pt(e){return t=>t.pointerType==="mouse"?e(t):void 0}L(Pt,"whenMouse");var Sd=Ju,Cd=xi,kd=ed,Ed=nd,Rd=ad,Pd=ld,Id=fd,Td=pd,Md=gd,jd=bd,Nd=xd,Ad=yd,_d=Object.defineProperty,xe=(e,t)=>_d(e,"name",{value:t,configurable:!0}),Nr="DropdownMenu",[Dd,Df]=Ge(Nr,[gi]),we=gi(),[Od,Ai]=Dd(Nr),Ld=xe(e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:l,modal:c=!0}=e,u=we(t),f=a.useRef(null),[v,h]=vn({prop:o,defaultProp:i??!1,onChange:l,caller:Nr});return s.jsx(Od,{scope:t,triggerId:Rt(),triggerRef:f,contentId:Rt(),open:v,onOpenChange:h,onOpenToggle:a.useCallback(()=>h(p=>!p),[h]),modal:c,children:s.jsx(Sd,{...u,open:v,onOpenChange:h,dir:r,modal:c,children:n})})},"DropdownMenu"),Fd="DropdownMenuTrigger",$d=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,disabled:o=!1,...i}=t,l=Ai(Fd,r),c=we(r),u=V(n,l.triggerRef);return s.jsx(Cd,{asChild:!0,...c,children:s.jsx(be.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...i,ref:u,onPointerDown:O(t.onPointerDown,f=>{!o&&f.button===0&&f.ctrlKey===!1&&(l.onOpenToggle(),l.open||f.preventDefault())}),onKeyDown:O(t.onKeyDown,f=>{o||(["Enter"," "].includes(f.key)&&l.onOpenToggle(),f.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())})})})},"DropdownMenuTrigger")),Bd=xe(e=>{const{__scopeDropdownMenu:t,...n}=e,r=we(t);return s.jsx(kd,{...r,...n})},"DropdownMenuPortal"),Ud="DropdownMenuContent",Hd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=Ai(Ud,r),l=we(r),c=a.useRef(!1);return s.jsx(Ed,{id:i.contentId,"aria-labelledby":i.triggerId,...l,...o,ref:n,onCloseAutoFocus:O(t.onCloseAutoFocus,u=>{var f;c.current||(f=i.triggerRef.current)==null||f.focus(),c.current=!1,u.preventDefault()}),onInteractOutside:O(t.onInteractOutside,u=>{const f=u.detail.originalEvent,v=f.button===0&&f.ctrlKey===!0,h=f.button===2||v;(!i.modal||h)&&(c.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent")),zd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Rd,{...i,...o,ref:n})},"DropdownMenuLabel")),Gd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Pd,{...i,...o,ref:n})},"DropdownMenuCheckboxItem")),Vd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Id,{...i,...o,ref:n})},"DropdownMenuRadioGroup")),Wd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Td,{...i,...o,ref:n})},"DropdownMenuRadioItem")),Kd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Md,{...i,...o,ref:n})},"DropdownMenuItemIndicator")),qd=xe(e=>{const{__scopeDropdownMenu:t,children:n,open:r,onOpenChange:o,defaultOpen:i}=e,l=we(t),[c,u]=vn({prop:r,defaultProp:i??!1,onChange:o,caller:"DropdownMenuSub"});return s.jsx(jd,{...l,open:c,onOpenChange:u,children:n})},"DropdownMenuSub"),Yd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Nd,{...i,...o,ref:n})},"DropdownMenuSubTrigger")),Xd=a.forwardRef(xe(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=we(r);return s.jsx(Ad,{...i,...o,ref:n,style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuSubContent")),Qd=Ld,Jd=$d,_i=Bd,Di=Hd,Oi=zd,Li=Gd,Zd=Vd,Fi=Wd,$i=Kd,ef=qd,Bi=Yd,Ui=Xd;const tf=Qd,nf=Jd,rf=ef,of=Zd,sf=e=>e.preventDefault(),Hi="z-50 rounded-md border border-border bg-surface p-1 shadow-lg",Ar="relative flex cursor-pointer select-none rounded-sm py-1.5 pl-7 pr-3 text-[13px] text-fg outline-none data-[highlighted]:bg-surface-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50",zi=a.forwardRef(({className:e,align:t="start",...n},r)=>s.jsx(_i,{children:s.jsx(Di,{ref:r,align:t,sideOffset:4,className:G(Hi,"overflow-hidden",e),...n})}));zi.displayName=Di.displayName;const Gi=a.forwardRef(({className:e,children:t,onSelect:n,...r},o)=>s.jsxs(Li,{ref:o,onSelect:n??sf,className:G(Ar,"items-start",e),...r,children:[s.jsx("span",{className:"absolute left-2 top-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx($i,{children:s.jsx(ja,{className:"h-3.5 w-3.5"})})}),t]}));Gi.displayName=Li.displayName;const Vi=a.forwardRef(({className:e,children:t,...n},r)=>s.jsxs(Bi,{ref:r,className:G(Ar,"items-center justify-between gap-3 data-[state=open]:bg-surface-muted",e),...n,children:[t,s.jsx(Na,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"})]}));Vi.displayName=Bi.displayName;const Wi=a.forwardRef(({className:e,...t},n)=>s.jsx(_i,{children:s.jsx(Ui,{ref:n,sideOffset:4,className:G(Hi,"overflow-y-auto",e),...t})}));Wi.displayName=Ui.displayName;const mn=a.forwardRef(({className:e,children:t,...n},r)=>s.jsxs(Fi,{ref:r,className:G(Ar,"items-center",e),...n,children:[s.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx($i,{children:s.jsx(Aa,{className:"h-2 w-2 fill-current"})})}),t]}));mn.displayName=Fi.displayName;const br=a.forwardRef(({className:e,...t},n)=>s.jsx(Oi,{ref:n,className:G("px-2 pl-7 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-fg-3",e),...t}));br.displayName=Oi.displayName;function af({url:e,isNew:t,visibility:n,onClose:r}){const o=a.useRef(null),i=a.useRef(null);a.useEffect(()=>{const c=i.current;c&&!c.contains(document.activeElement)&&c.focus()},[]);function l(c){if(c.key==="Escape"){r();return}if(c.key!=="Tab")return;const u=o.current;if(!u)return;const f=u.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(f.length===0)return;const v=f[0],h=f[f.length-1],p=document.activeElement;c.shiftKey&&(p===v||!u.contains(p))?(c.preventDefault(),h.focus()):!c.shiftKey&&(p===h||!u.contains(p))&&(c.preventDefault(),v.focus())}return s.jsx("div",{ref:i,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:l,onMouseDown:c=>{c.target===c.currentTarget&&r()},children:s.jsxs("div",{ref:o,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[s.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[s.jsx(Xo,{className:"h-10 w-10 text-success"}),s.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:t?"Page published":"Update published"}),s.jsx("p",{className:"text-[12px] text-fg-2",children:t?n==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),s.jsx("div",{className:"px-6 py-4",children:s.jsx(_l,{url:e})}),s.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:s.jsx(Xe,{autoFocus:!0,onClick:r,children:"Done"})})]})})}function lf({initialAlias:e,busy:t,onCancel:n,onPublish:r}){const[o,i]=a.useState(e),[l,c]=a.useState("public"),[u,f]=a.useState([]),v=a.useRef(null),h=a.useRef(null);a.useEffect(()=>{const g=h.current;g&&!g.contains(document.activeElement)&&g.focus()},[]);function p(g){if(g.key==="Escape"){n();return}if(g.key!=="Tab")return;const m=v.current;if(!m)return;const b=m.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(b.length===0)return;const w=b[0],E=b[b.length-1],x=document.activeElement;g.shiftKey&&(x===w||!m.contains(x))?(g.preventDefault(),E.focus()):!g.shiftKey&&(x===E||!m.contains(x))&&(g.preventDefault(),w.focus())}return s.jsx("div",{ref:h,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:p,onMouseDown:g=>{g.target===g.currentTarget&&!t&&n()},children:s.jsxs("div",{ref:v,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[s.jsxs("div",{className:"border-b border-border px-6 py-4",children:[s.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),s.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),s.jsxs("div",{className:"space-y-4 px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(wo,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),s.jsx(Al,{id:"publish-alias",autoFocus:!0,value:o,disabled:t,onChange:g=>i(g.target.value.toLowerCase()),placeholder:"my-app"}),s.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",o.trim()||"<uuid>"]})]}),s.jsxs("div",{children:[s.jsx(wo,{children:"Who can open it"}),s.jsx(Dl,{visibility:l,onVisibilityChange:c,grants:u,onGrantsChange:f,disabled:t})]})]}),s.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[s.jsx(Xe,{variant:"secondary",onClick:n,disabled:t,children:"Cancel"}),s.jsxs(Xe,{onClick:()=>r({alias:o.trim(),visibility:l,grants:u}),disabled:t,children:[s.jsx(Qo,{className:"h-3.5 w-3.5"}),t?"Publishing…":"Publish"]})]})]})})}function cf(e,t){return gn({queryKey:["page-history",e],queryFn:()=>kt.getPageHistory(e).then(n=>n.versions),enabled:t,retry:!1})}function Ho(e,t){return gn({queryKey:["page-history-version",e,t],queryFn:()=>kt.getPageHistoryVersion(e,t).then(n=>n.html),enabled:t!==null,retry:!1})}function uf({entries:e,isLoading:t,isError:n,isFetching:r,selectedSha:o,onSelect:i,onRefresh:l}){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[s.jsx(Jo,{className:"h-3.5 w-3.5 text-fg-3"}),s.jsx("span",{className:"flex-1",children:"Version history"}),s.jsx("button",{type:"button",onClick:l,disabled:r,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),s.jsxs("div",{className:"scroll-slim flex-1 overflow-y-auto p-1.5",children:[t?s.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,n?s.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,e&&e.length===0?s.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(e??[]).map(c=>{const u=c.sha===o;return s.jsxs("button",{type:"button",onClick:()=>i(c),className:G("block w-full rounded-md px-2.5 py-2 text-left",u?"bg-ink":"hover:bg-surface-muted"),children:[s.jsx("div",{className:G("text-[12px] font-medium",u?"text-white":"text-fg"),children:new Date(c.committed_at).toLocaleString()}),s.jsxs("div",{className:G("truncate text-[11px]",u?"text-white/70":"text-fg-3"),children:[c.message,c.author_email?` — ${c.author_email}`:""]})]},c.sha)})]})]})}function df({entry:e,canRestore:t,onRestore:n,onExit:r}){const o=qo();return s.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[s.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:e?s.jsxs(s.Fragment,{children:["Viewing version from ",new Date(e.committed_at).toLocaleString(),e.author_email?` (${e.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),s.jsxs(Xe,{variant:"secondary",size:"sm",onClick:r,children:[s.jsx(_a,{className:"h-3.5 w-3.5"})," Back to current draft"]}),s.jsx(Xe,{size:"sm",disabled:!t,onClick:async()=>{await o({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&n()},children:"Restore this version"})]})}class ff{diff(t,n,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);const i=this.castInput(t,r),l=this.castInput(n,r),c=this.removeEmpty(this.tokenize(i,r)),u=this.removeEmpty(this.tokenize(l,r));return this.diffWithOptionsObj(c,u,r,o)}diffWithOptionsObj(t,n,r,o){var i;const l=x=>{if(x=this.postProcess(x,r),o){setTimeout(function(){o(x)},0);return}else return x},c=n.length,u=t.length;let f=1,v=c+u;r.maxEditLength!=null&&(v=Math.min(v,r.maxEditLength));const h=(i=r.timeout)!==null&&i!==void 0?i:1/0,p=Date.now()+h,g=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(g[0],n,t,0,r);if(g[0].oldPos+1>=u&&m+1>=c)return l(this.buildValues(g[0].lastComponent,n,t));let b=-1/0,w=1/0;const E=()=>{for(let x=Math.max(b,-f);x<=Math.min(w,f);x+=2){let y;const k=g[x-1],R=g[x+1];k&&(g[x-1]=void 0);let I=!1;if(R){const A=R.oldPos-x;I=R&&0<=A&&A<c}const j=k&&k.oldPos+1<u;if(!I&&!j){g[x]=void 0;continue}if(!j||I&&k.oldPos<R.oldPos?y=this.addToPath(R,!0,!1,0,r):y=this.addToPath(k,!1,!0,1,r),m=this.extractCommon(y,n,t,x,r),y.oldPos+1>=u&&m+1>=c)return l(this.buildValues(y.lastComponent,n,t))||!0;g[x]=y,y.oldPos+1>=u&&(w=Math.min(w,x-1)),m+1>=c&&(b=Math.max(b,x+1))}f++};if(o)(function x(){setTimeout(function(){if(f>v||Date.now()>p)return o(void 0);E()||x()},0)})();else for(;f<=v&&Date.now()<=p;){const x=E();if(x)return x}}addToPath(t,n,r,o,i){const l=t.lastComponent;return l&&!i.oneChangePerToken&&l.added===n&&l.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:l.count+1,added:n,removed:r,previousComponent:l.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:r,previousComponent:l}}}extractCommon(t,n,r,o,i){const l=n.length,c=r.length;let u=t.oldPos,f=u-o,v=0;for(;f+1<l&&u+1<c&&this.equals(r[u+1],n[f+1],i);)f++,u++,v++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return v&&!i.oneChangePerToken&&(t.lastComponent={count:v,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,f}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const l=o.length;let c=0,u=0,f=0;for(;c<l;c++){const v=o[c];if(v.removed)v.value=this.join(r.slice(f,f+v.count)),f+=v.count;else{if(!v.added&&this.useLongestToken){let h=n.slice(u,u+v.count);h=h.map(function(p,g){const m=r[f+g];return m.length>p.length?m:p}),v.value=this.join(h)}else v.value=this.join(n.slice(u,u+v.count));u+=v.count,v.added||(f+=v.count)}}return o}}class hf extends ff{constructor(){super(...arguments),this.tokenize=gf}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const pf=new hf;function mf(e,t,n){return pf.diff(e,t,n)}function gf(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let o=0;o<r.length;o++){const i=r[o];o%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function vf(e,t){const n=[];let r=0;for(const o of mf(e,t)){const i=o.added?"added":o.removed?"removed":"context",l=o.value.split(`
`);l.length>0&&l[l.length-1]===""&&l.pop();for(const c of l)n.push({key:r++,kind:i,text:c})}return n}function nr({oldText:e,newText:t,oldLabel:n,newLabel:r}){const o=a.useMemo(()=>vf(e,t),[e,t]),i=o.every(l=>l.kind==="context");return s.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[s.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[s.jsxs("span",{className:"text-no-strong",children:["− ",n]}),s.jsxs("span",{className:"text-success",children:["+ ",r]})]}),s.jsx("div",{className:"scroll-slim flex-1 overflow-auto",children:i?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):s.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:o.map(l=>s.jsxs("div",{className:G("flex whitespace-pre px-3",l.kind==="added"&&"bg-status-soft",l.kind==="removed"&&"bg-no-soft",l.kind==="context"&&"text-fg-2"),children:[s.jsx("span",{className:G("mr-2 shrink-0 select-none",l.kind==="added"&&"text-success",l.kind==="removed"&&"text-no-strong",l.kind==="context"&&"text-fg-3"),children:l.kind==="added"?"+":l.kind==="removed"?"−":" "}),s.jsx("span",{children:l.text||" "})]},l.key))})})]})}const bf=a.lazy(()=>ya(()=>import("./CodeEditor-BBcurUhU.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>({default:e.CodeEditor}))),St=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>New page</title>
<style>
  :root { --paper:#FCFCF9; --ink:#0B0B0B; --muted:#71717A; --line:#E4E4E7; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: grid; place-items: center;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    color: var(--ink); background: var(--paper);
    -webkit-font-smoothing: antialiased;
  }
  .grid {
    position: fixed; inset: 0; pointer-events: none; opacity: .35;
    background-image:
      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);
    background-size: 28px 28px;
    -webkit-mask-image: radial-gradient(ellipse at center, #000 60%, transparent 85%);
            mask-image: radial-gradient(ellipse at center, #000 60%, transparent 85%);
  }
  .stage { position: relative; text-align: center; padding: 0 24px; }
  .eyebrow {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    margin-top: 20px;
    font-family: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 11px; font-weight: 500; letter-spacing: .14em;
    text-transform: uppercase; color: var(--muted);
  }
  .eyebrow i { display: block; width: 20px; height: 1px; background: var(--line); }
  h1 {
    margin: 14px 0 0; font-size: 30px; line-height: 1.02;
    letter-spacing: -.035em; font-weight: 800;
  }
  h1 span { font-weight: 600; color: var(--muted); }
  p { margin: 12px 0 0; font-size: 14px; line-height: 1.6; color: var(--muted); }
  @media (prefers-reduced-motion: no-preference) {
    .stage { animation: rise .5s cubic-bezier(.2,.7,.2,1) both; }
    @keyframes rise { from { opacity: 0; transform: translateY(6px); } }
  }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="stage">
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0B0B0B"/>
      <path d="M20 37H52" stroke="#D85A30" stroke-width="5" stroke-linecap="round"/>
      <path d="M32 16L17 48" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
      <path d="M32 16L47 48" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    </svg>
    <div class="eyebrow"><i></i>Blank canvas</div>
    <h1>Ask Aero to <span>build something</span></h1>
    <p>Describe the page you want — it renders here, live.</p>
  </div>
</body>
</html>
`,$t=[];function zo(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(2)}M`}function Go(e,t,n){const r=JSON.stringify(e).length,o=t.reduce((i,l)=>{var c,u;return i+(l.kind==="inline"?((c=l.data)==null?void 0:c.length)??0:((u=l.text)==null?void 0:u.length)??0)},0);return r+o+n.length}const xf=["off","low","medium","high"],Ki="medium",Vo={off:0,low:4096,medium:12288,high:24576};function Wo(e,t){let n=Vo[e]??Vo[Ki];return e==="off"&&t.includes("pro")&&(n=128),{thinkingConfig:{thinkingBudget:n,...e==="off"?{}:{includeThoughts:!0}}}}const wf=.75,yf=.85,Ko=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function Sf(e,t,n){if(n){const r=Math.max(0,Math.ceil((n.deadline-Date.now())/1e3));return`rate-limited — retry ${n.attempt} of ${n.max} in ${r}s…`}if(e)switch(e.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${e.detail?` (${e.detail})`:""}…`;case"grep":return`searching the page${e.detail?` for “${e.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return e.detail?`loading the ${e.detail} skill…`:"loading a skill…";case"action":return`running ${e.detail??"an action"}…`;case"web_search":return e.detail?`searching the web for “${e.detail}”…`:"searching the web…";case"database":return"updating the database…";default:return`using ${e.name}…`}return t>=10?`working… (${t}s — large edits can take a minute)`:t>=3?`working… (${t}s)`:"working…"}function Cf(e){return s.jsxs("div",{children:[s.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:e.name==="screenshot"?s.jsxs(s.Fragment,{children:[s.jsx(Va,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"looked at the page"})]}):e.name==="write"||e.name==="edit"?s.jsxs(s.Fragment,{children:[s.jsx(es,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"edited the page"})]}):e.name==="skill"?s.jsxs(s.Fragment,{children:[s.jsx(Zo,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["loaded the ",s.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"unknown"})," skill"]})]}):e.name==="action"?s.jsxs(s.Fragment,{children:[s.jsx(ho,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["ran ",s.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"an action"})]})]}):e.name==="console"?s.jsxs(s.Fragment,{children:[s.jsx(ho,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"checked the console"})]}):e.name==="grep"?s.jsxs(s.Fragment,{children:[s.jsx(Wa,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["searched the page",e.detail?s.jsxs(s.Fragment,{children:[" for ",s.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:e.detail})]}):null]})]}):e.name==="database"?s.jsxs(s.Fragment,{children:[s.jsx(Ka,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["updated the database",e.detail?` (${e.detail})`:""]})]}):e.name==="read"?s.jsxs(s.Fragment,{children:[s.jsx(ns,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["read the page",e.detail?` (${e.detail})`:""]})]}):s.jsxs(s.Fragment,{children:[s.jsx(ts,{className:"h-3 w-3"}),s.jsxs("span",{children:["used ",s.jsx("span",{className:"font-medium text-fg-2",children:e.name}),e.detail?` (${e.detail})`:""]})]})}),e.name==="screenshot"&&e.imageUrl?s.jsx("img",{src:e.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function Of(){var i;const{id:e}=Ol(),n=((i=Ll().state)==null?void 0:i.publishContinuation)===!0,r=a.useRef(0),o=a.useRef(e);return!n&&e!==o.current&&(r.current+=1),o.current=e,s.jsx(kf,{pageId:e??null},r.current)}function kf({pageId:e}){var ro,oo,so,io,ao;const t=e??"draft",n=Fl(),r=qa(),o=qo(),[i,l]=a.useState(!1),[c,u]=a.useState(St),[f,v]=a.useState($t),[h,p]=a.useState(""),[g,m]=a.useState(Ki),[b,w]=a.useState(()=>[...Qa]),[E,x]=a.useState(""),y=a.useRef(null),k=d=>{if(mo(d)==="zen")return y.current??(y.current=crypto.randomUUID()),y.current},R=a.useRef(null),[I,j]=a.useState(""),[A,T]=a.useState([]),[X,W]=a.useState(!1),[P,$]=a.useState(!1),[K,Q]=a.useState(""),[de,N]=a.useState(""),[Ae,ie]=a.useState(null),[M,te]=a.useState(0),[ae,F]=a.useState(null),[et,Ve]=a.useState(!1),[tt,ce]=a.useState(null),[ye,_e]=a.useState(null),[Y,We]=a.useState(!1),[nt,It]=a.useState("desktop"),[ft,ht]=a.useState("code"),[pt,mt]=a.useState(null),Tt=e!=null&&pt!=null,[Vt,Ke]=a.useState(null);a.useEffect(()=>{Y||ht("code")},[Y]);const[kn,gt]=a.useState(""),[En,Rn]=a.useState(null),[qi,_r]=a.useState("public"),[Mt,Pn]=a.useState(null),[Yi,In]=a.useState(!1),[Xi,Dr]=a.useState(!1),[Ie,jt]=a.useState(null),[Qi,Tn]=a.useState(!1),[Wt,Kt]=a.useState(0),[Or,Ji]=a.useState(0),vt=a.useMemo(()=>URL.createObjectURL(new Blob([jo(c,{screenshot:!0})],{type:"text/html"})),[c,Or]),qt=a.useRef(null);a.useEffect(()=>{qt.current&&qt.current!==vt&&URL.revokeObjectURL(qt.current),qt.current=vt},[vt]);const[z,Lr]=a.useState(!1),[ne,Yt]=a.useState(null),fe=cf(e??"",!!e),le=Ho(e??"",z?(ne==null?void 0:ne.sha)??null:null);a.useEffect(()=>{!z||!fe.data||(ne&&!fe.data.some(d=>d.sha===ne.sha)?Yt(fe.data[0]??null):!ne&&fe.data.length>0&&Yt(fe.data[0]))},[z,ne,fe.data]);function Xt(){Lr(!1),Yt(null),Mn("preview"),jn("previous")}const[De,Mn]=a.useState("preview"),[qe,jn]=a.useState("previous"),Fr=z&&ne&&fe.data?fe.data.findIndex(d=>d.sha===ne.sha):-1,Nt=Fr>=0?((ro=fe.data)==null?void 0:ro[Fr+1])??null:null,Qt=Ho(e??"",z&&De==="diff"&&qe==="previous"?(Nt==null?void 0:Nt.sha)??null:null),[$r,Br]=a.useState(!1),Nn=a.useRef(null);a.useEffect(()=>()=>{Nn.current&&clearTimeout(Nn.current)},[]);function Zi(){$r||(Br(!0),fe.refetch().finally(()=>{Nn.current=setTimeout(()=>Br(!1),2e3)}))}const At=a.useMemo(()=>le.data===void 0?null:URL.createObjectURL(new Blob([jo(le.data)],{type:"text/html"})),[le.data]),Jt=a.useRef(null);a.useEffect(()=>{Jt.current&&Jt.current!==At&&URL.revokeObjectURL(Jt.current),Jt.current=At},[At]);const Zt=a.useRef(null),en=a.useRef([]),Ur=a.useRef(0);a.useEffect(()=>{en.current=[],Ur.current=Date.now()},[vt]);const ea=a.useRef(0),_t=a.useRef(new Map),An=a.useRef(!1),Hr=a.useRef(z);a.useEffect(()=>{Hr.current=z},[z]),a.useEffect(()=>{An.current=!1;const d=_t.current;d.forEach(S=>{window.clearTimeout(S.timer),S.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),d.clear()},[vt,Y,z]),a.useEffect(()=>{function d(S){var J;if(S.source!==((J=Zt.current)==null?void 0:J.contentWindow))return;const C=S.data;if(!C)return;if(C.type==="aero-dom-ready"){An.current=!0;return}if(C.type==="aero-dom-op-result"&&typeof C.id=="number"){const D=_t.current.get(C.id);if(!D)return;_t.current.delete(C.id),window.clearTimeout(D.timer);const H=typeof C.generation=="number"?C.generation:null;D.resolve(C.ok?{ok:!0,result:C.result,generation:H}:{ok:!1,error:C.error||"the action failed",generation:H});return}if(C.type!=="aero-console"||typeof C.ts=="number"&&C.ts<Ur.current)return;const _=C.level==="info"||C.level==="warn"||C.level==="error"?C.level:"log",B=en.current;B.push({level:_,text:typeof C.text=="string"?C.text:"",ts:C.ts??Date.now()}),B.length>300&&B.splice(0,B.length-300)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]);async function ta(d,S,C){var H;Hr.current&&Xt(),We(!1);const _=Date.now()+1e4;for(;!An.current||!((H=Zt.current)!=null&&H.contentWindow);){if(Date.now()>_)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(q=>setTimeout(q,50))}const B=Zt.current.contentWindow,J=++ea.current,D=d==="screenshot"?3e4:15e3;return new Promise(q=>{const Me=window.setTimeout(()=>{_t.current.delete(J),q({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},D);_t.current.set(J,{resolve:q,reject:at=>q({ok:!1,error:at.message,generation:null}),timer:Me}),B.postMessage({type:"aero-dom-op",id:J,op:d,args:S,generation:C},"*")})}const he=a.useRef(c),Oe=d=>{he.current=d,u(d)},Le=a.useRef(St),Ye=a.useRef(null),tn=a.useRef($t),_n=a.useRef(null),zr=a.useRef(null),Gr=a.useRef(null),rt=a.useRef(null),Dn=a.useRef(os);a.useEffect(()=>{let d=!0;return Ja().then(S=>Io(S).then(C=>{d&&(Dn.current=C)})).catch(()=>{}),Za().then(S=>Io(S).then(C=>{d&&(Dn.current=C)})).catch(()=>{}),()=>{d=!1}},[]);const ge=gn({queryKey:["ai-models"],queryFn:Rl,staleTime:300*1e3,retry:!1,refetchInterval:d=>Pl(d.state.error)}),Vr=gn({queryKey:["zen-models"],queryFn:Il,staleTime:300*1e3,retry:!1}),Fe=Vr.data??[],Te=!ge.isPending&&!Vr.isPending,na=!!((oo=ge.data)!=null&&oo.project_id),On=d=>Fe.find(S=>S.id===d),ot=On(h),bt=!!h&&mo(h)==="zen",Dt=el(h),st=bt?tl((ot==null?void 0:ot.reasoning_efforts)??[]):[...xf],ra=st.join(",");a.useEffect(()=>{!Te||st.length===0||st.includes(g)||m("off")},[ra,g,Te]),a.useEffect(()=>{var d;!Te||h||p(nl(((d=ge.data)==null?void 0:d.models)??[],Fe))},[Te,h]);const Ln=d=>{var S;return(((S=ge.data)==null?void 0:S.models)??[]).includes(d)||Fe.some(C=>C.id===d)},oa=d=>{var S;return((S=On(d))==null?void 0:S.name)??d},sa=()=>{if(!E)return"Same as builder";const d=oa(E);return!Te||Ln(E)?d:`${d} — unavailable`},Se=!!h&&(!Te||Ln(h));a.useEffect(()=>{let d=!1;return mt(null),Ke(null),jt(null),Tn(!1),x(""),R.current=null,y.current=null,Ye.current=null,(async()=>{const S=await go(t).catch(()=>{});if(d)return;let C=$t;if(S&&(Oe(S.html),Le.current=S.html,C=rl(S.contents),v(C),tn.current=C,Kt(vo(C)),S.model&&p(S.model),S.thinking&&m(S.thinking),w(ol(S.disabledTools,S.knownTools)),x(S.observerModel??""),R.current=S.zenSessionId??null),e)try{const _=await kt.getPage(e);if(d)return;Rn(_.url),_r(wa(_.visibility)),mt(_.html),Ye.current=_.updated_at;const{html:B,supersededLocal:J}=Xl(S,_);Oe(B),Le.current=B,S&&J!==null&&(Ke(J),on({...S,html:B,contents:C,basedOnUpdatedAt:_.updated_at,updatedAt:0}).catch(()=>{}))}catch{d||F("Failed to load page.")}d||l(!0)})(),()=>{d=!0}},[t]);const it=a.useRef(Date.now());a.useEffect(()=>{if(!P)return;it.current=Date.now(),te(0);const d=setInterval(()=>te(Math.round((Date.now()-it.current)/1e3)),1e3);return()=>clearInterval(d)},[P]);const Wr=()=>{if(bt)return R.current??(R.current=crypto.randomUUID()),R.current},$e=(d,S=b,C=E)=>{const _=he.current;return on({key:t,pageId:e,html:_,contents:d,model:h||null,thinking:g,disabledTools:S,knownTools:Gn(),observerModel:C||void 0,zenSessionId:R.current??void 0,basedOnUpdatedAt:Ye.current??void 0,updatedAt:0}).then(()=>{Le.current=_,tn.current=d}).catch(()=>{})},Kr={sessionKey:t,pageId:e,contents:f,model:h,thinking:g,disabledTools:b,observerModel:E,modelsSettled:Te,modelOffered:Ln,zenInfoFor:On},Ce=a.useRef(Kr);Ce.current=Kr;const qr=a.useRef(P);qr.current=P,a.useEffect(()=>()=>{if(he.current===Le.current&&Ce.current.contents===tn.current)return;const{sessionKey:d,pageId:S,contents:C,model:_,thinking:B,disabledTools:J,observerModel:D}=Ce.current;on({key:d,pageId:S,html:he.current,contents:C,model:_||null,thinking:B,disabledTools:J,knownTools:Gn(),observerModel:D||void 0,zenSessionId:R.current??void 0,basedOnUpdatedAt:Ye.current??void 0,updatedAt:0}).catch(()=>{})},[]);const Fn=!bt,ia=Fn&&(A.length>0||f.some(d=>d.parts.some(S=>S.inlineData))),xt=a.useMemo(()=>Go(f,A,I),[f,A,I]),aa=Fn&&xt>yt,Yr=xt/yt>=wf,Xr=Wt/Dt>=yf,Qr=Math.max(0,100-Math.round(Wt/Dt*100)),Jr=Dt>=1e6?`${Math.round(Dt/1e6)}M`:`${Math.round(Dt/1e3)}K`;async function Zr(d){var at;const S=d===void 0,C=(d??I).trim(),_=S?A:[];if(!C&&_.length===0||P||!Se)return;const B=S?xt:Go(f,_,C);if(Fn&&B>yt){F(`This message is too large to send (~${ct(B)} — Gemini's inline-request limit is ~${ct(yt)}). `+(_.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(C.startsWith("/")){const Ue=C.split(/\s+/)[0];if(!dl(Ko,Ue)){F(`Unknown command: ${Ue} — available: /compact`);return}}const J=fl(C);if(J){j(""),await ua(J.instructions);return}const D=[hl()];for(const Ue of _)D.push(pl(Ue.name,Ue.mimeType)),D.push(Ue.kind==="inline"?{inlineData:{mimeType:Ue.mimeType,data:Ue.data??""}}:{text:Ue.text??""});C&&D.push({text:C});const H=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(C),q=/\bdeck-container\b|class="slide slide--/.test(he.current);he.current===St?D.push(Kn(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${H?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):q?D.push(Kn("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):H&&D.push(Kn("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const Me=[...f,{role:"user",parts:D}];(at=_n.current)==null||at.followOutput(),v(Me),S&&(j(""),T([])),Jl(),await eo(Me)}async function eo(d){const S=new AbortController;rt.current=S,$(!0),Q(""),N(""),F(null),Ve(!1),ce(null);const C=Ce.current.sessionKey;jt(null);const _=he.current,B=Date.now(),J=Wr();try{const D=await wl({model:h,contents:d,html:()=>he.current,skills:Dn.current,pageId:e,consoleLogs:()=>en.current,domOp:ta,generationConfig:Wo(g,h),thinking:g,zenModelInfo:ot,zenSession:J,hasGoogleProject:na,disabledTools:b,signal:S.signal,callbacks:{onText:H=>{it.current=Date.now(),ce(null),Q(q=>q+H)},onThought:H=>{it.current=Date.now(),ce(null),N(q=>q+H)},onUsage:H=>{const q=H.totalTokenCount??H.promptTokenCount;typeof q=="number"&&Kt(q)},onTool:(H,q)=>{it.current=Date.now(),ce(null),ie({name:H,detail:q})},onHtml:H=>Oe(H),onContents:H=>{it.current=Date.now(),ie(null),v(H),Q(""),N("")},onStreamReset:()=>{Q(""),N(""),ce(null)},onRetry:(H,q,Me)=>{it.current=Date.now(),ce({attempt:H,max:q,deadline:Date.now()+Me*1e3})}}});v(D),await $e(D),Date.now()-B>1e4&&Mo({ok:!0});try{await ca(D,_,C,S.signal)}catch{}}catch(D){if(D instanceof DOMException&&D.name==="AbortError")await $e(Ce.current.contents);else{const H=D instanceof lt?yl(D.body):null,q=D instanceof lt?D.message==="reauth_required"?"Your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":H?H.message:`AI request failed: ${D.message}`:"AI request failed.";H&&_e(H),F(q),Ve(!(D instanceof lt&&D.message==="reauth_required")),Mo({ok:!1,error:q}),await $e(d)}}finally{rt.current===S&&(rt.current=null),$(!1),Q(""),N(""),ie(null),ce(null)}}function la(){var d;(d=rt.current)==null||d.abort()}async function nn(){var d;P||!Se||f.length===0||((d=_n.current)==null||d.followOutput(),await eo(f))}async function ca(d,S,C,_){if(Ce.current.sessionKey!==C||Ce.current.disabledTools.includes(Wn)||_.aborted||he.current===S||!bo(d))return;const{observerModel:B,model:J,modelsSettled:D,modelOffered:H,zenInfoFor:q}=Ce.current,Me=B&&(!D||H(B))?B:J;Tn(!0);try{const at=await kl({model:Me,request:El(d),html:he.current,consoleEntries:en.current,zenModelInfo:q(Me),zenSession:k(Me),signal:_});at&&Ce.current.sessionKey===C&&jt(at)}finally{Tn(!1)}}async function ua(d){if(P||!Se)return;if(f.length===0){F("Nothing to compact — the conversation is empty.");return}const S=new AbortController;rt.current=S,$(!0),Dr(!0),F(null);try{const C=await Sl({model:h,contents:f,instructions:d||void 0,generationConfig:Wo("off",h),zenSession:Wr(),signal:S.signal});await wt(Cl(C))}catch(C){C instanceof DOMException&&C.name==="AbortError"||F(C instanceof lt?`Compaction failed: ${C.message}`:"Compaction failed.")}finally{rt.current===S&&(rt.current=null),$(!1),Dr(!1)}}async function wt(d){v(d),Kt(vo(d)),await $e(d)}async function da(d){if(P)return;const S=f;if(!(!await o({title:"Delete from history?",body:d.kind==="tool"||d.kind==="grouped-search"?`Removes ${d.refs.length===1?"this tool call and its result":`these ${d.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:d.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||qr.current||Ce.current.contents!==S))switch(d.kind){case"user":case"compact":await wt(bl(f,d.contentIndex));break;case"thought":await wt(vl(f,d.refs));break;case"tool":case"grouped-search":await wt(gl(f,d.refs));break;case"assistant":await wt(ml(f,d.refs));break}}async function fa(d,S){P||d.kind!=="user"&&d.kind!=="assistant"||Ce.current.contents===f&&await wt(xl(f,d.refs,S))}const Ot=Ya({mutationFn:async d=>{const S=he.current;if(e){const _=await kt.patchPage(e,{html:S});return{id:e,isNew:!1,url:null,html:S,visibility:qi,updatedAt:_.updated_at}}const C=await kt.createPage(S,{alias:(d==null?void 0:d.alias)||null,visibility:(d==null?void 0:d.visibility)??"public",grants:(d==null?void 0:d.grants)??[]});return{id:C.id,isNew:!0,url:C.url,html:S,visibility:(d==null?void 0:d.visibility)??"public",updatedAt:C.updated_at}},onSuccess:async({id:d,isNew:S,url:C,html:_,visibility:B,updatedAt:J})=>{if(F(null),In(!1),_r(B),Le.current=_,mt(_),Ye.current=J??Ye.current,Ke(null),r.invalidateQueries({queryKey:["pages"]}),r.invalidateQueries({queryKey:["page",d]}),r.invalidateQueries({queryKey:["page-history",d]}),S)await on({key:d,pageId:d,html:he.current,contents:f,model:h||null,thinking:g,disabledTools:b,knownTools:Gn(),observerModel:E||void 0,zenSessionId:R.current??void 0,basedOnUpdatedAt:Ye.current??void 0,updatedAt:0}).catch(()=>{}),await Vn("draft").catch(()=>{}),Rn(C),Pn({url:C??`/p/${d}`,id:d,isNew:!0,visibility:B});else{const D=En??`/p/${d}`;Rn(D),Pn({url:D,id:d,isNew:!1,visibility:B})}},onError:d=>{d instanceof lt&&d.body&&typeof d.body=="object"&&"reason"in d.body?F(`Publish failed: ${d.message} (${String(d.body.reason)})`):d instanceof lt?F(`Publish failed: ${d.message}`):F("Publish failed.")}});async function ha(){if(await o({title:"Reset builder",body:e?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Vn(t).catch(()=>{}),v($t),tn.current=$t,Kt(0),F(null),jt(null),R.current=null,y.current=null,e)try{const S=await kt.getPage(e);Oe(S.html),Le.current=S.html,Ye.current=S.updated_at,Ke(null)}catch{F("Failed to reload page.")}else Oe(St),Le.current=St}async function pa(){if(he.current!==Le.current){if(!await o({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;Le.current=he.current}const d=await go("draft").catch(()=>{});d&&(d.contents.length>0||d.html!==St)&&await o({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&await Vn("draft").catch(()=>{}),n("/")}async function ma(d){var _;const S=(_=d.target.files)==null?void 0:_[0];if(d.target.value="",!S)return;const C=await S.text();Oe(C),F(null),$e(f)}async function $n(d){if(d.length===0)return;if(bt){F("Free models cannot read attachments. Switch to a Google model to attach files.");return}const S=[],C=[];for(const _ of d){const B=await Vl(_);"error"in B?C.push(B.error):S.push(B)}S.length>0&&T(_=>[..._,...S]),C.length>0&&F(C.join(" "))}function ga(d){const S=Array.from(d.target.files??[]);d.target.value="",$n(S)}const Bn=a.useMemo(()=>sl(f),[f]),rn=((so=ge.data)==null?void 0:so.models.length)??0,va=ge.isError||!!ge.data&&rn===0,Be=Te&&rn===0&&Fe.length===0,to=va&&Fe.length>0,Un=ge.error instanceof lt?ge.error.message:void 0,Lt=f[f.length-1],ba=(Lt==null?void 0:Lt.role)==="user"&&Lt.parts.some(il),no=!P&&!!Lt&&!bo(f)&&!ba,xa=((io=Bn[Bn.length-1])==null?void 0:io.kind)==="user";return i?s.jsxs("div",{className:"flex h-[calc(100vh-8.5rem)] min-h-[480px] flex-col gap-3",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs(yo,{value:Se?h:"",onValueChange:p,disabled:P||!Te,children:[s.jsx(So,{className:"h-8 w-auto min-w-[9rem] text-[13px]",children:s.jsx(Co,{placeholder:Te?"select a model":"loading models…"})}),s.jsxs(ko,{children:[rn>0?s.jsxs(Eo,{children:[s.jsx(Ro,{children:"Google"}),(ao=ge.data)==null?void 0:ao.models.map(d=>s.jsx(qn,{value:d,children:d},d))]}):null,Fe.length>0?s.jsxs(Eo,{children:[s.jsx(Ro,{children:"Free · opencode zen"}),Fe.map(d=>s.jsx(qn,{value:d.id,children:d.name},d.id))]}):null]})]}),s.jsxs(yo,{value:st.includes(g)?g:"off",onValueChange:m,disabled:P||st.length===0,children:[s.jsxs(So,{className:"h-8 w-auto text-[13px]",title:st.length>0?"Thinking level — how much the model reasons before answering":ot!=null&&ot.reasoning?"This model reasons but offers no thinking-level control":"This model does not support thinking",children:[s.jsx(Zo,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),s.jsx(Co,{})]}),s.jsx(ko,{children:st.map(d=>s.jsx(qn,{value:d,children:d},d))})]}),s.jsxs("button",{type:"button",onClick:()=>We(d=>!d),disabled:z,className:G("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",Y?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[s.jsx(es,{className:"h-3.5 w-3.5"})," Code"]}),s.jsxs("div",{className:G("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(Y||z&&De!=="preview")&&"opacity-50"),children:[s.jsxs("button",{type:"button",onClick:()=>It("desktop"),disabled:Y||z&&De!=="preview",title:"Preview at full width",className:G("inline-flex items-center gap-1 rounded-sm px-2 py-1",nt==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[s.jsx(Da,{className:"h-3.5 w-3.5"})," Desktop"]}),s.jsxs("button",{type:"button",onClick:()=>It("mobile"),disabled:Y||z&&De!=="preview",title:"Preview at phone width",className:G("inline-flex items-center gap-1 rounded-sm px-2 py-1",nt==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[s.jsx(Oa,{className:"h-3.5 w-3.5"})," Mobile"]})]}),s.jsxs("button",{type:"button",onClick:()=>Ji(d=>d+1),disabled:Y||z,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(uo,{className:"h-3.5 w-3.5"})," Reload"]}),s.jsxs("button",{type:"button",onClick:()=>{var d;return(d=zr.current)==null?void 0:d.click()},disabled:P||z,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(La,{className:"h-3.5 w-3.5"})," Upload"]}),s.jsx("input",{ref:zr,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:ma}),s.jsxs("button",{type:"button",onClick:ha,disabled:P||z,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(Fa,{className:"h-3.5 w-3.5"})," Reset"]}),e?s.jsxs("button",{type:"button",onClick:pa,disabled:P||z,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx($a,{className:"h-3.5 w-3.5"})," New"]}):null,e?s.jsxs("button",{type:"button",onClick:()=>z?Xt():Lr(!0),title:"Browse previously published versions of this page",className:G("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",z?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[s.jsx(Jo,{className:"h-3.5 w-3.5"})," History"]}):null,s.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[En?s.jsxs("a",{href:En,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",s.jsx(Ba,{className:"h-3 w-3"})]}):null,s.jsxs(Xe,{size:"sm",onClick:()=>e?Ot.mutate(void 0):In(!0),disabled:P||Ot.isPending||z,children:[Ot.isPending?s.jsx(Ua,{className:"h-3.5 w-3.5 animate-spin"}):s.jsx(Qo,{className:"h-3.5 w-3.5"}),e?"Publish update":"Publish"]})]})]}),ae&&!z?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[s.jsx("span",{className:"min-w-0 flex-1 break-words",children:ae}),et&&!P?s.jsxs("button",{type:"button",onClick:()=>void nn(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[s.jsx(uo,{className:"h-3 w-3"})," Retry"]}):null]}):null,Vt!==null&&!z?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),s.jsxs("button",{type:"button",onClick:()=>{Oe(Vt),Ke(null),$e(f)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[s.jsx(Ha,{className:"h-3 w-3"})," Keep my local copy"]}),s.jsx("button",{type:"button",onClick:()=>Ke(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:s.jsx(zn,{className:"h-3 w-3"})})]}):null,(Be||to)&&!z?s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[Be?"AI is unavailable — ":"Google models are unavailable — ",Un==="no_project"?s.jsxs(s.Fragment,{children:["no Code Assist project selected for your account."," ",s.jsx($l,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):Un==="reauth_required"?"your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":"could not load models. Try again later.",to?" Free models are listed in the model picker and need no Google account.":null]}),Un==="no_project"?s.jsx(Tl,{}):null]}):null,no&&!ae&&!xa&&!z?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),s.jsxs("button",{type:"button",onClick:()=>void nn(),disabled:Be||!Se,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[s.jsx(fo,{className:"h-3 w-3"})," Resume"]})]}):null,s.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[s.jsx("div",{className:G("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",X&&"ring-2 ring-ink"),onDragOver:d=>{z||(d.preventDefault(),W(!0))},onDragLeave:()=>W(!1),onDrop:d=>{z||(d.preventDefault(),W(!1),$n(Array.from(d.dataTransfer.files)))},children:z?s.jsx(uf,{entries:fe.data,isLoading:fe.isLoading,isError:fe.isError,isFetching:fe.isFetching||$r,selectedSha:(ne==null?void 0:ne.sha)??null,onSelect:Yt,onRefresh:Zi}):s.jsx(al,{ref:_n,chat:Bn,busy:P,streamText:K,streamThought:de,busyLabel:Xi?"compacting conversation…":Qi?"reviewing the page…":Sf(Ae,M,tt),toolActive:Ae!==null,retrying:tt!==null,busyElapsed:M,emptyState:s.jsxs(s.Fragment,{children:["Describe the page you want to build.",s.jsx("br",{}),"Aero edits the HTML and you preview it live.",s.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:Cf,afterMessages:Ie?s.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[Ie.kind==="issues"?s.jsx(Ga,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):Ie.kind==="pass"?s.jsx(Xo,{className:"h-3.5 w-3.5 shrink-0 text-success"}):s.jsx(ns,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),s.jsx("span",{className:"min-w-0 flex-1",children:Ie.kind==="issues"?s.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",Ie.findings.length===1?"1 thing":`${Ie.findings.length} things`," ","to check"]}):Ie.kind==="pass"?s.jsxs("span",{className:"text-fg-3",children:[s.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):s.jsxs("span",{className:"text-fg-3",children:[s.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),s.jsx("button",{type:"button",onClick:()=>jt(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:s.jsx(zn,{className:"h-3 w-3"})})]}),Ie.kind==="issues"?s.jsxs(s.Fragment,{children:[s.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:Ie.findings.map((d,S)=>s.jsx("li",{className:"list-disc text-fg-2",children:d},S))}),s.jsx("div",{className:"mt-2 pl-5",children:s.jsxs("button",{type:"button",onClick:()=>void Zr(ul(Ie.findings)),disabled:P||Be||!Se,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[s.jsx(fo,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:no,resumeDisabled:Be||!Se,onResume:()=>void nn(),onSaveItemEdit:(d,S)=>void fa(d,S),onDeleteItem:d=>void da(d),input:I,onInputChange:j,onSend:()=>void Zr(),onStop:la,composerDisabled:P||Be||!Se,sendDisabled:Be||!Se||!I.trim()&&A.length===0||aa,placeholder:Be?"AI unavailable":!Se&&ge.data?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:Ko,composerMeta:s.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[ia?s.jsx("span",{className:G("tabular truncate",Yr&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${ct(xt)} of ${ct(yt)} — Gemini rejects requests over ~20MB`,children:Yr?`${ct(xt)} / ${ct(yt)}`:ct(xt)}):null,s.jsx("span",{className:G("tabular truncate",Xr&&"font-medium text-no-strong"),title:`Approximate context window usage: ${zo(Wt)} of ${Jr} tokens (${Qr}% left) — ${bt?"free models are held to a 200K-token context":"all Gemini models have a ~1M-token context"}`,children:Xr?`${zo(Wt)} / ${Jr}`:`${Qr}% left`})]}),attachmentsBar:A.length>0?s.jsx("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:A.map(d=>s.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[d.kind==="inline"&&d.mimeType.startsWith("image/")?s.jsx("img",{src:`data:${d.mimeType};base64,${d.data}`,alt:d.name,className:"h-7 w-7 shrink-0 object-cover"}):s.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:cl(d.mimeType)}),s.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:d.name,children:d.name}),s.jsx("button",{type:"button",onClick:()=>T(S=>S.filter(C=>C.id!==d.id)),title:"Remove",className:"text-fg-3 hover:text-fg",children:s.jsx(zn,{className:"h-3 w-3"})})]},d.id))}):void 0,composerLeading:s.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[s.jsxs(tf,{children:[s.jsx(nf,{asChild:!0,children:s.jsxs(Xe,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:G(xo,"relative"),children:[s.jsx(ts,{className:"h-3.5 w-3.5"}),b.length>0?s.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),s.jsx(zi,{className:"w-60",children:ll.map(d=>{var S;return s.jsxs(a.Fragment,{children:[s.jsx(Gi,{checked:!d.names.some(C=>b.includes(C)),onCheckedChange:C=>{const _=C?b.filter(B=>!d.names.includes(B)):[...new Set([...b,...d.names])];w(_),$e(f,_)},children:s.jsxs("span",{className:"flex flex-col",children:[s.jsx("span",{children:d.label}),s.jsx("span",{className:"text-[11px] text-fg-3",children:d.hint})]})}),d.names.includes(Wn)&&!b.includes(Wn)?s.jsxs(rf,{children:[s.jsx(Vi,{children:s.jsxs("span",{className:"flex flex-col",children:[s.jsx("span",{children:"Reviewer model"}),s.jsx("span",{className:"text-[11px] text-fg-3",children:sa()})]})}),s.jsx(Wi,{className:"max-h-72 w-56 overflow-y-auto",children:s.jsxs(of,{value:E,onValueChange:C=>{x(C),$e(f,b,C)},children:[s.jsx(mn,{value:"",children:"Same as builder"}),rn>0?s.jsxs(s.Fragment,{children:[s.jsx(br,{children:"Google"}),(S=ge.data)==null?void 0:S.models.map(C=>s.jsx(mn,{value:C,children:C},C))]}):null,Fe.length>0?s.jsxs(s.Fragment,{children:[s.jsx(br,{children:"Free · opencode zen"}),Fe.map(C=>s.jsx(mn,{value:C.id,children:C.name},C.id))]}):null]})})]}):null]},d.id)})})]}),bt?null:s.jsxs(s.Fragment,{children:[s.jsx(Xe,{variant:"ghost",size:"sm",onClick:()=>{var d;return(d=Gr.current)==null?void 0:d.click()},disabled:P||Be||!Se,title:"Attach a file (image, PDF, audio, video, or text)",className:xo,children:s.jsx(za,{className:"h-3.5 w-3.5"})}),s.jsx("input",{ref:Gr,type:"file",multiple:!0,hidden:!0,onChange:ga})]})]}),onPasteFiles:d=>void $n(d)})}),s.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:z?s.jsxs(s.Fragment,{children:[s.jsx(df,{entry:ne,canRestore:!!ne&&le.data!==void 0,onRestore:()=>{le.data!==void 0&&(Oe(le.data),$e(f)),Xt()},onExit:Xt}),ne?s.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>Mn("preview"),className:G("rounded-sm px-2 py-1",De==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),s.jsx("button",{type:"button",onClick:()=>Mn("diff"),className:G("rounded-sm px-2 py-1",De==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),De==="diff"?s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>jn("previous"),className:G("rounded-sm px-2 py-1",qe==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),s.jsx("button",{type:"button",onClick:()=>jn("draft"),className:G("rounded-sm px-2 py-1",qe==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,De==="diff"&&ne?qe==="previous"&&!Nt?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):qe==="previous"&&Qt.isLoading||le.isLoading?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):qe==="previous"&&Qt.isError||le.isError?s.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):qe==="previous"&&Qt.data!==void 0&&le.data!==void 0?s.jsx(nr,{oldText:Qt.data,newText:le.data,oldLabel:`Version from ${new Date(Nt.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(ne.committed_at).toLocaleString()}`}):qe==="draft"&&le.data!==void 0?s.jsx(nr,{oldText:c,newText:le.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(ne.committed_at).toLocaleString()}`}):null:De==="preview"?le.isLoading?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):le.isError?s.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):At?s.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:s.jsx("iframe",{title:"historic version preview",src:At,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:G("h-full bg-white",nt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):Y?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>ht("code"),className:G("rounded-sm px-2 py-1",ft==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),s.jsx("button",{type:"button",onClick:()=>ht("diff"),disabled:!Tt,title:Tt?void 0:"Diff becomes available once this page has been published",className:G("rounded-sm px-2 py-1 disabled:opacity-50",ft==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),ft==="diff"&&Tt?s.jsx(nr,{oldText:pt,newText:c,oldLabel:"Last published version",newLabel:"Current draft"}):s.jsx(a.Suspense,{fallback:s.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:s.jsx(bf,{value:c,onChange:Oe,language:"html",className:"flex-1 overflow-auto"})})]}):s.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:s.jsx("iframe",{ref:Zt,title:"preview",src:vt,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:G("h-full bg-white",nt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},Or)})})]}),Yi?s.jsx(lf,{initialAlias:kn,busy:Ot.isPending,onCancel:()=>In(!1),onPublish:d=>{gt(d.alias),Ot.mutate(d)}}):null,Mt?s.jsx(af,{url:Mt.url,isNew:Mt.isNew,visibility:Mt.visibility,onClose:()=>{const d=Mt;Pn(null),d.isNew&&n(`/builder/${d.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,ye?s.jsx(Ml,{info:ye,onEnabled:()=>{_e(null),F(null),nn()},onClose:()=>_e(null)}):null]}):s.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{Of as BuilderPage};
