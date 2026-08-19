const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-CiyRHnwJ.js","./vendor-react-W17ZXJuc.js","./index-BZ3MqzPW.js","./vendor-query-DnQJzhNT.js","./vendor-router-B7ckJHSd.js","./index-Cseopq5I.css"])))=>i.map(i=>d[i]);
var Yr=e=>{throw TypeError(e)};var Xr=(e,t,n)=>t.has(e)||Yr("Cannot "+n);var F=(e,t,n)=>(Xr(e,t,"read from private field"),n?n.call(e):t.get(e)),jn=(e,t,n)=>t.has(e)?Yr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Dt=(e,t,n,r)=>(Xr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{e as W,B as qe,u as Do,a as xt,d as zi,A as st,_ as Vi}from"./index-BZ3MqzPW.js";import{r as i,j as s,R as Qe,h as _o,u as Gi,o as Wi,s as qi,m as Ki,n as Yi,p as Xi,q as Qi,t as Ji,v as Zi,w as ea,i as Lo,G as Oo,H as Fo,A as ta,B as $o,x as Bo,M as na,y as ra,z as Qr,I as oa,k as sa,J as ia,E as aa,d as la,N as ca,X as An,O as Jr,W as Uo,Q as ua,V as da,Y as Ho,Z as fa,_ as Zr,$ as ha,D as pa}from"./vendor-react-W17ZXJuc.js";import{a as ln,c as ma,u as ga}from"./vendor-query-DnQJzhNT.js";import{i as eo,g as va,D as ba,l as xa,s as ya,p as wa,c as ka,t as Sa,d as Ca,a as to,r as Ea,e as no,b as Ra,f as Jt,h as Mn,j as Nn,k as Pa,m as Ia,n as ro,C as Ta,o as oo,O as ja,q as Aa,u as Ma,v as Na,w as Da,x as _a,y as La,z as Dn,A as Oa,B as Fa,E as $a,F as Ba,G as Ua,H as Ha,I as za,J as Va,K as Ga,L as Wa,M as qa,N as Ka,P as Ya,Q as Xa,R as Qa}from"./ChatPanel-CGMP6ZVk.js";import{C as Ja,S as Za}from"./ServiceDisabledModal-efPGmofl.js";import{e as z,h as el,R as tl,L as so,I as nl,S as io,a as ao,b as lo,c as co,f as uo,g as fo,d as _n}from"./Select-CWZc9x6Y.js";import{P as rl,a as ol}from"./PublicUrlRow-ABfPqslR.js";import{e as sl,u as il,c as al,L as ll}from"./vendor-router-B7ckJHSd.js";const gt=20*1024*1024;function cl(e){return e==="application/pdf"||/^(image|audio|video)\//.test(e)}const zo=/^text\//,ul=new Set(["application/json","application/xml","application/x-yaml","application/yaml","application/javascript","application/typescript"]);function dl(e){return zo.test(e)||ul.has(e)}async function fl(e){const t=await e.arrayBuffer();try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch{return null}}function hl(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error??new Error("read failed")),r.readAsDataURL(e)})}let ho=0;async function pl(e){const t=e.type,n=e.name||"file";if(cl(t)){const o=await hl(e),a=o.indexOf(",");return{id:String(ho++),name:n,mimeType:t,size:e.size,kind:"inline",data:a>=0?o.slice(a+1):""}}const r=dl(t);if(r||!t||t==="application/octet-stream"){const o=await fl(e);if(o!==null)return{id:String(ho++),name:n,mimeType:zo.test(t)?t:"text/plain",size:e.size,kind:"text",text:o};if(r)return{error:`"${n}" is declared as ${t} but isn't valid UTF-8 — Gemini only supports UTF-8 text attachments.`}}return{error:`"${n}" is a format Gemini can't read (${t||"unknown binary type"}).`}}function it(e){return e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/(1024*1024)).toFixed(1)}MB`}const ml='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',gl=`# aero-database: persistent storage for aero pages

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
`,vl=`# Aero HTML Slides Style Guide

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
`,bl=`# aero-ai: calling Gemini from inside an aero page

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
`,Vo=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:ml,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:gl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:vl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:bl,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]}];async function po(e){const t=[...Vo],n=new Set(t.map(a=>a.name)),r=a=>a.access==="owner"?0:a.access==="manager"?1:2,o=[...e].sort((a,l)=>r(a)-r(l)||l.updatedAt-a.updatedAt);for(const a of o){if(!a.content.trim())continue;let l=a.name;for(let u=2;n.has(l);u++)l=`${a.name}-${u}`;n.add(l);let c=[];if(!eo(a.id))try{c=await va(a.id)}catch{}t.push({name:l,description:a.description,content:a.content,source:"remote",id:eo(a.id)?void 0:a.id,files:a.files,envSchema:a.envSchema,envSet:c,allowedHosts:a.allowedHosts})}return t}function xl(e,t){return e?e.basedOnUpdatedAt!==t.updated_at&&e.html!==t.html?{html:t.html,supersededLocal:e.html}:{html:e.html,supersededLocal:null}:{html:t.html,supersededLocal:null}}const Zt="⬤ ";let Ln=!1;function yl(){if(Ln||!document.title||document.title.startsWith(Zt))return;Ln=!0,document.title=Zt+document.title;const e=()=>{document.hidden||(document.title.startsWith(Zt)&&(document.title=document.title.slice(Zt.length)),Ln=!1,document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)}let mo=!1;function wl(){mo||typeof Notification>"u"||(mo=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function go(e){if(!document.hidden)return;const t=e.ok?"Aero finished your request":"Aero hit an error",n=e.ok?"The page has been updated — come take a look.":e.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const r=new Notification(t,{body:n,tag:"aero-turn-done"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>r.close(),8e3);return}catch{}yl()}const kl=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,Sl=`<script>(function(){
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
})();<\/script>`,Cl=`<script>(function(){
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
})();<\/script>`,El=`<script>(function(){
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
})();<\/script>`,Rl=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+kl.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,Pl=`<script>(function(){
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
})();<\/script>`;function vo(e,t){const n=El+Sl+Cl+(t!=null&&t.screenshot?Rl:"")+Pl,r=e.match(/<head[^>]*>/i);if(!r)return n+e;const o=r.index+r[0].length;return e.slice(0,o)+n+e.slice(o)}var Il=Object.defineProperty,sr=(e,t)=>Il(e,"name",{value:t,configurable:!0});function Vn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}sr(Vn,"setRef");function Go(...e){return t=>{let n=!1;const r=e.map(o=>{const a=Vn(o,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Vn(e[o],null)}}}}sr(Go,"composeRefs");function q(...e){return i.useCallback(Go(...e),e)}sr(q,"useComposedRefs");var Tl=Object.defineProperty,ve=(e,t)=>Tl(e,"name",{value:t,configurable:!0});function jl(e,t){const n=i.createContext(t);n.displayName=e+"Context";const r=ve(a=>{const{children:l,...c}=a,u=i.useMemo(()=>c,Object.values(c));return s.jsx(n.Provider,{value:u,children:l})},"Provider");r.displayName=e+"Provider";function o(a,l={}){const{optional:c=!1}=l,u=i.useContext(n);if(u)return u;if(t!==void 0)return t;if(!c)throw new Error(`\`${a}\` must be used within \`${e}\``)}return ve(o,"useContext"),[r,o]}ve(jl,"createContext");function Le(e,t=[]){let n=[];function r(a,l){const c=i.createContext(l);c.displayName=a+"Context";const u=n.length;n=[...n,l];const f=ve(h=>{var E;const{scope:p,children:v,...m}=h,b=((E=p==null?void 0:p[e])==null?void 0:E[u])||c,w=i.useMemo(()=>m,Object.values(m));return s.jsx(b.Provider,{value:w,children:v})},"Provider");f.displayName=a+"Provider";function g(h,p,v={}){var E;const{optional:m=!1}=v,b=((E=p==null?void 0:p[e])==null?void 0:E[u])||c,w=i.useContext(b);if(w)return w;if(l!==void 0)return l;if(!m)throw new Error(`\`${h}\` must be used within \`${a}\``)}return ve(g,"useContext"),[f,g]}ve(r,"createContext");const o=ve(()=>{const a=n.map(l=>i.createContext(l));return ve(function(c){const u=(c==null?void 0:c[e])||a;return i.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])},"useScope")},"createScope");return o.scopeName=e,[r,Wo(o,...t)]}ve(Le,"createContextScope");function Wo(...e){const t=e[0];if(e.length===1)return t;const n=ve(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return ve(function(a){const l=r.reduce((c,{useScope:u,scopeName:f})=>{const h=u(a)[`__scope${f}`];return{...c,...h}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return n.scopeName=t.scopeName,n}ve(Wo,"composeContextScopes");var Al=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Ml=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Nl=Object.defineProperty,Dl=(e,t)=>Nl(e,"name",{value:t,configurable:!0}),bo=Qe[" useEffectEvent ".trim().toString()],xo=Qe[" useInsertionEffect ".trim().toString()];function qo(e){if(typeof bo=="function")return bo(e);const t=i.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof xo=="function"?xo(()=>{t.current=e}):Ml(()=>{t.current=e}),i.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Dl(qo,"useEffectEvent");var _l=Object.defineProperty,Ft=(e,t)=>_l(e,"name",{value:t,configurable:!0}),Ll=Qe[" useInsertionEffect ".trim().toString()]||Al;function ir({prop:e,defaultProp:t,onChange:n=Ft(()=>{},"onChange"),caller:r}){const[o,a,l]=Ko({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:o,f=i.useCallback(g=>{var h;if(c){const p=Yo(g)?g(e):g;p!==e&&((h=l.current)==null||h.call(l,p))}else a(g)},[c,e,a,l]);return[u,f]}Ft(ir,"useControllableState");function Ko({defaultProp:e,onChange:t}){const[n,r]=i.useState(e),o=i.useRef(n),a=i.useRef(t);return Ll(()=>{a.current=t},[t]),i.useEffect(()=>{var l;o.current!==n&&((l=a.current)==null||l.call(a,n),o.current=n)},[n,o]),[n,r,a]}Ft(Ko,"useUncontrolledState");function Yo(e){return typeof e=="function"}Ft(Yo,"isFunction");var yo=Symbol("RADIX:SYNC_STATE");function Ol(e,t,n,r){const{prop:o,defaultProp:a,onChange:l,caller:c}=t,u=o!==void 0,f=qo(l),g=[{...n,state:a}];r&&g.push(r);const[h,p]=i.useReducer((w,E)=>{if(E.type===yo)return{...w,state:E.state};const y=e(w,E);return u&&!Object.is(y.state,w.state)&&f(y.state),y},...g),v=h.state,m=i.useRef(v);i.useEffect(()=>{m.current!==v&&(m.current=v,u||f(v))},[v,m,u]);const b=i.useMemo(()=>o!==void 0?{...h,state:o}:h,[h,o]);return i.useEffect(()=>{u&&!Object.is(o,h.state)&&p({type:yo,state:o})},[o,h.state,u]),[b,p]}Ft(Ol,"useControllableStateReducer");var Fl=Object.defineProperty,we=(e,t)=>Fl(e,"name",{value:t,configurable:!0});function Xo(e){const t=i.forwardRef((n,r)=>{let{children:o,...a}=n,l=null,c=!1;const u=[];Gn(o)&&typeof en=="function"&&(o=en(o._payload)),i.Children.forEach(o,p=>{var v;if(es(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Gn(b)&&typeof en=="function"&&(b=en(b._payload)),l=Bl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=i.cloneElement(l,void 0,u):!c&&i.Children.count(o)===1&&i.isValidElement(o)&&(l=o);const f=l?Zo(l):void 0,g=q(r,f);if(!l){if(o||o===0)throw new Error(c?zl(e):Hl(e));return o}const h=Jo(a,l.props??{});return l.type!==i.Fragment&&(h.ref=r?g:f),i.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}we(Xo,"createSlot");var Qo=Symbol.for("radix.slottable");function $l(e){const t=we(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Qo,t}we($l,"createSlottable");var Bl=we((e,t)=>{if("child"in e.props){const n=e.props.child;return i.isValidElement(n)?i.cloneElement(n,void 0,e.props.children(n.props.children)):null}return i.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Jo(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...c)=>{const u=a(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}we(Jo,"mergeProps");function Zo(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}we(Zo,"getElementRef");function es(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Qo}we(es,"isSlottable");var Ul=Symbol.for("react.lazy");function Gn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Ul&&"_payload"in e&&ts(e._payload)}we(Gn,"isLazyComponent");function ts(e){return typeof e=="object"&&e!==null&&"then"in e}we(ts,"isPromiseLike");var Hl=we(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),zl=we(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),en=Qe[" use ".trim().toString()],Vl=Object.defineProperty,Gl=(e,t)=>Vl(e,"name",{value:t,configurable:!0}),Wl=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pe=Wl.reduce((e,t)=>{const n=Xo(`Primitive.${t}`),r=i.forwardRef((o,a)=>{const{asChild:l,...c}=o,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(u,{...c,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ar(e,t){e&&_o.flushSync(()=>e.dispatchEvent(t))}Gl(ar,"dispatchDiscreteCustomEvent");var ql=Object.defineProperty,ke=(e,t)=>ql(e,"name",{value:t,configurable:!0});function yt(e){const t=i.forwardRef((n,r)=>{let{children:o,...a}=n,l=null,c=!1;const u=[];Wn(o)&&typeof tn=="function"&&(o=tn(o._payload)),i.Children.forEach(o,p=>{var v;if(ss(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Wn(b)&&typeof tn=="function"&&(b=tn(b._payload)),l=Yl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=i.cloneElement(l,void 0,u):!c&&i.Children.count(o)===1&&i.isValidElement(o)&&(l=o);const f=l?os(l):void 0,g=q(r,f);if(!l){if(o||o===0)throw new Error(c?Jl(e):Ql(e));return o}const h=rs(a,l.props??{});return l.type!==i.Fragment&&(h.ref=r?g:f),i.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}ke(yt,"createSlot");var ns=Symbol.for("radix.slottable");function Kl(e){const t=ke(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=ns,t}ke(Kl,"createSlottable");var Yl=ke((e,t)=>{if("child"in e.props){const n=e.props.child;return i.isValidElement(n)?i.cloneElement(n,void 0,e.props.children(n.props.children)):null}return i.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function rs(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...c)=>{const u=a(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}ke(rs,"mergeProps");function os(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}ke(os,"getElementRef");function ss(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===ns}ke(ss,"isSlottable");var Xl=Symbol.for("react.lazy");function Wn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Xl&&"_payload"in e&&is(e._payload)}ke(Wn,"isLazyComponent");function is(e){return typeof e=="object"&&e!==null&&"then"in e}ke(is,"isPromiseLike");var Ql=ke(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Jl=ke(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),tn=Qe[" use ".trim().toString()],Zl=Object.defineProperty,re=(e,t)=>Zl(e,"name",{value:t,configurable:!0});function as(e){const t=e+"CollectionProvider",[n,r]=Le(t),[o,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=re(b=>{const{scope:w,children:E}=b,y=i.useRef(null),x=i.useRef(new Map).current;return s.jsx(o,{scope:w,itemMap:x,collectionRef:y,children:E})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=yt(c),f=i.forwardRef((b,w)=>{const{scope:E,children:y}=b,x=a(c,E),S=q(w,x.collectionRef);return s.jsx(u,{ref:S,children:y})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=yt(g),v=i.forwardRef((b,w)=>{const{scope:E,children:y,...x}=b,S=i.useRef(null),R=q(w,S),P=a(g,E);return i.useEffect(()=>(P.itemMap.set(S,{ref:S,...x}),()=>void P.itemMap.delete(S))),s.jsx(p,{[h]:"",ref:R,children:y})});v.displayName=g;function m(b){const w=a(e+"CollectionConsumer",b);return i.useCallback(()=>{const y=w.collectionRef.current;if(!y)return[];const x=Array.from(y.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((P,j)=>x.indexOf(P.ref.current)-x.indexOf(j.ref.current))},[w.collectionRef,w.itemMap])}return re(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}re(as,"createCollection");var wo=new WeakMap,Q,me,On=(me=class extends Map{constructor(n){super(n);jn(this,Q);Dt(this,Q,[...super.keys()]),wo.set(this,!0)}set(n,r){return wo.get(this)&&(this.has(n)?F(this,Q)[F(this,Q).indexOf(n)]=n:F(this,Q).push(n)),super.set(n,r),this}insert(n,r,o){const a=this.has(r),l=F(this,Q).length,c=lr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||a&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(a?0:1);c<0&&u++;const h=[...F(this,Q)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),a&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const a=new me(this);return a.insert(n,r,o),a}before(n){const r=F(this,Q).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const a=F(this,Q).indexOf(n);return a===-1?this:this.insert(a,r,o)}after(n){let r=F(this,Q).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const a=F(this,Q).indexOf(n);return a===-1?this:this.insert(a+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Dt(this,Q,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,Q).splice(F(this,Q).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=on(F(this,Q),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=on(F(this,Q),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,Q).indexOf(n)}keyAt(n){return on(F(this,Q),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let a=o+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.at(a)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let a=o+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.keyAt(a)}find(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return a;o++}}findIndex(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return o;o++}return-1}filter(n,r){const o=[];let a=0;for(const l of this)Reflect.apply(n,r,[l,a,this])&&o.push(l),a++;return new me(o)}map(n,r){const o=[];let a=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,a,this])]),a++;return new me(o)}reduce(...n){const[r,o]=n;let a=0,l=o??this.at(0);for(const c of this)a===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,a,this]),a++;return l}reduceRight(...n){const[r,o]=n;let a=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?a=c:a=Reflect.apply(r,this,[a,c,l,this])}return a}toSorted(n){const r=[...this.entries()].sort(n);return new me(r)}toReversed(){const n=new me;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),a=this.get(o);n.set(o,a)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new me(r)}slice(n,r){const o=new me;let a=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(a=r-1);for(let l=n;l<=a;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const a of this){if(!Reflect.apply(n,r,[a,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return!0;o++}return!1}},Q=new WeakMap,re(me,"OrderedDict"),me);function on(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=ls(e,t);return n===-1?void 0:e[n]}re(on,"at");function ls(e,t){const n=e.length,r=lr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}re(ls,"toSafeIndex");function lr(e){return e!==e||e===0?0:Math.trunc(e)}re(lr,"toSafeInteger");function ec(e){const t=e+"CollectionProvider",[n,r]=Le(t),[o,a]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new On,setItemMap:re(()=>{},"setItemMap")}),l=re(({state:x,...S})=>x?s.jsx(u,{...S,state:x}):s.jsx(c,{...S}),"CollectionProvider");l.displayName=t;const c=re(x=>{const S=w();return s.jsx(u,{...x,state:S})},"CollectionInit");c.displayName=t+"Init";const u=re(x=>{const{scope:S,children:R,state:P}=x,j=i.useRef(null),[_,I]=i.useState(null),A=q(j,I),[G,N]=P;return i.useEffect(()=>{if(!_)return;const O=ds(()=>{});return O.observe(_,{childList:!0,subtree:!0}),()=>{O.disconnect()}},[_]),s.jsx(o,{scope:S,itemMap:G,setItemMap:N,collectionRef:A,collectionRefObject:j,collectionElement:_,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=yt(f),h=i.forwardRef((x,S)=>{const{scope:R,children:P}=x,j=a(f,R),_=q(S,j.collectionRef);return s.jsx(g,{ref:_,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=yt(p),b=i.forwardRef((x,S)=>{const{scope:R,children:P,...j}=x,_=i.useRef(null),[I,A]=i.useState(null),G=q(S,_,A),N=a(p,R),{setItemMap:O}=N,K=i.useRef(j);cs(K.current,j)||(K.current=j);const X=K.current;return i.useEffect(()=>{const ce=X;return O(M=>I?M.has(I)?M.set(I,{...ce,element:I}).toSorted(qn):(M.set(I,{...ce,element:I}),M.toSorted(qn)):M),()=>{O(M=>!I||!M.has(I)?M:(M.delete(I),new On(M)))}},[I,X,O]),s.jsx(m,{[v]:"",ref:G,children:P})});b.displayName=p;function w(){return i.useState(new On)}re(w,"useInitCollection");function E(x){const{itemMap:S}=a(e+"CollectionConsumer",x);return S}return re(E,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:E,useInitCollection:w}]}re(ec,"createCollection");function cs(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}re(cs,"shallowEqual");function us(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}re(us,"isElementPreceding");function qn(e,t){return!e[1].element||!t[1].element?0:us(e[1].element,t[1].element)?-1:1}re(qn,"sortByDocumentPosition");function ds(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}re(ds,"getChildListObserver");var tc=Object.defineProperty,nc=(e,t)=>tc(e,"name",{value:t,configurable:!0}),rc=i.createContext(void 0);function fs(e){const t=i.useContext(rc);return e||t||"ltr"}nc(fs,"useDirection");var oc=Object.defineProperty,sc=(e,t)=>oc(e,"name",{value:t,configurable:!0});function Xe(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}sc(Xe,"useCallbackRef");var ic=Object.defineProperty,ne=(e,t)=>ic(e,"name",{value:t,configurable:!0}),Kn="dismissableLayer.update",ac="dismissableLayer.pointerDownOutside",lc="dismissableLayer.focusOutside",ko,hs=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),cc=i.forwardRef(ne(function(t,n){const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:u,onDismiss:f,...g}=t,h=i.useContext(hs),[p,v]=i.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=i.useState({}),w=q(n,v),E=Array.from(h.layers),[y]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),x=y?E.indexOf(y):-1,S=p?E.indexOf(p):-1,R=h.layersWithOutsidePointerEventsDisabled.size>0,P=S>=x,j=i.useRef(!1),_=ps(N=>{l==null||l(N),u==null||u(N),N.defaultPrevented||f==null||f()},{ownerDocument:m,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:j,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:i.useCallback(N=>{if(!(N instanceof Node))return!1;const O=[...h.branches].some(K=>K.contains(N));return P&&!O},[h.branches,P])}),I=ms(N=>{if(o&&j.current)return;const O=N.target;[...h.branches].some(X=>X.contains(O))||(c==null||c(N),u==null||u(N),N.defaultPrevented||f==null||f())},m),A=p?S===E.length-1:!1,G=Xe(N=>{N.key==="Escape"&&(a==null||a(N),!N.defaultPrevented&&f&&(N.preventDefault(),f()))});return i.useEffect(()=>{if(A)return m.addEventListener("keydown",G,{capture:!0}),()=>m.removeEventListener("keydown",G,{capture:!0})},[m,A,G]),i.useEffect(()=>{if(p)return r&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(ko=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(p)),h.layers.add(p),Yn(),()=>{r&&(h.layersWithOutsidePointerEventsDisabled.delete(p),h.layersWithOutsidePointerEventsDisabled.size===0&&(m.body.style.pointerEvents=ko))}},[p,m,r,h]),i.useEffect(()=>()=>{p&&(h.layers.delete(p),h.layersWithOutsidePointerEventsDisabled.delete(p),Yn())},[p,h]),i.useEffect(()=>{const N=ne(()=>b({}),"handleUpdate");return document.addEventListener(Kn,N),()=>document.removeEventListener(Kn,N)},[]),s.jsx(Pe.div,{...g,ref:w,style:{pointerEvents:R?P?"auto":"none":void 0,...t.style},onFocusCapture:z(t.onFocusCapture,I.onFocusCapture),onBlurCapture:z(t.onBlurCapture,I.onBlurCapture),onPointerDownCapture:z(t.onPointerDownCapture,_.onPointerDownCapture)})},"DismissableLayer"));function uc(){const e=i.useContext(hs),[t,n]=i.useState(null);return i.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}ne(uc,"useDismissableLayerSurface");var dc=ne(()=>!0,"IS_TRUE");function ps(e,t){const{ownerDocument:n=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:a,shouldHandlePointerDownOutside:l=dc}=t,c=Xe(e),u=i.useRef(!1),f=i.useRef(!1),g=i.useRef(new Map),h=i.useRef(()=>{});return i.useEffect(()=>{function p(){f.current=!1,o.current=!1,g.current.clear()}ne(p,"resetOutsideInteraction");function v(){return Array.from(g.current.values()).some(Boolean)}ne(v,"isOutsideInteractionIntercepted");function m(x){if(!f.current)return;const S=x.target;S instanceof Node&&[...a].some(P=>P.contains(S))||g.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{f.current&&h.current()},0)}ne(m,"handleInteractionCapture");function b(x){f.current&&g.current.set(x.type,!1)}ne(b,"handleInteractionBubble");const w=ne(x=>{if(x.target&&!u.current){let S=function(){n.removeEventListener("click",h.current);const P=v();p(),P||cr(ac,c,R,{discrete:!0})};if(ne(S,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){n.removeEventListener("click",h.current),p(),u.current=!1;return}const R={originalEvent:x};f.current=!0,o.current=r&&x.button===0,g.current.clear(),!r||x.button!==0?S():(n.removeEventListener("click",h.current),h.current=S,n.addEventListener("click",h.current,{once:!0}))}else n.removeEventListener("click",h.current),p();u.current=!1},"handlePointerDown"),E=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const x of E)n.addEventListener(x,m,!0),n.addEventListener(x,b);const y=window.setTimeout(()=>{n.addEventListener("pointerdown",w)},0);return()=>{window.clearTimeout(y),n.removeEventListener("pointerdown",w),n.removeEventListener("click",h.current);for(const x of E)n.removeEventListener(x,m,!0),n.removeEventListener(x,b)}},[n,c,r,o,a,l]),{onPointerDownCapture:ne(()=>u.current=!0,"onPointerDownCapture")}}ne(ps,"usePointerDownOutside");function ms(e,t=globalThis==null?void 0:globalThis.document){const n=Xe(e),r=i.useRef(!1);return i.useEffect(()=>{const o=ne(a=>{a.target&&!r.current&&cr(lc,n,{originalEvent:a},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:ne(()=>r.current=!0,"onFocusCapture"),onBlurCapture:ne(()=>r.current=!1,"onBlurCapture")}}ne(ms,"useFocusOutside");function Yn(){const e=new CustomEvent(Kn);document.dispatchEvent(e)}ne(Yn,"dispatchUpdate");function cr(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?ar(o,a):o.dispatchEvent(a)}ne(cr,"handleAndDispatchCustomEvent");var fc=Object.defineProperty,ur=(e,t)=>fc(e,"name",{value:t,configurable:!0}),nn=0,Re=null;function hc(e){return dr(),e.children}ur(hc,"FocusGuards");function dr(){i.useEffect(()=>{Re||(Re={start:Xn(),end:Xn()});const{start:e,end:t}=Re;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),nn++,()=>{nn===1&&(Re==null||Re.start.remove(),Re==null||Re.end.remove(),Re=null),nn=Math.max(0,nn-1)}},[])}ur(dr,"useFocusGuards");function Xn(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}ur(Xn,"createFocusGuard");var pc=Object.defineProperty,de=(e,t)=>pc(e,"name",{value:t,configurable:!0}),Fn="focusScope.autoFocusOnMount",$n="focusScope.autoFocusOnUnmount",So={bubbles:!1,cancelable:!0},mc=i.forwardRef(de(function(t,n){const{loop:r=!1,trapped:o=!1,onMountAutoFocus:a,onUnmountAutoFocus:l,...c}=t,[u,f]=i.useState(null),g=Xe(a),h=Xe(l),p=i.useRef(null),v=q(n,f),m=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(o){let w=function(S){if(m.paused||!u)return;const R=S.target;u.contains(R)?p.current=R:De(p.current,{select:!0})},E=function(S){if(m.paused||!u)return;const R=S.relatedTarget;R!==null&&(u.contains(R)||De(p.current,{select:!0}))},y=function(S){if(document.activeElement===document.body)for(const P of S)P.removedNodes.length>0&&De(u)};de(w,"handleFocusIn"),de(E,"handleFocusOut"),de(y,"handleMutations"),document.addEventListener("focusin",w),document.addEventListener("focusout",E);const x=new MutationObserver(y);return u&&x.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",E),x.disconnect()}}},[o,u,m.paused]),i.useEffect(()=>{if(u){Co.add(m);const w=document.activeElement;if(!u.contains(w)){const y=new CustomEvent(Fn,So);u.addEventListener(Fn,g),u.dispatchEvent(y),y.defaultPrevented||(gs(ws(fr(u)),{select:!0}),document.activeElement===w&&De(u))}return()=>{u.removeEventListener(Fn,g),setTimeout(()=>{const y=new CustomEvent($n,So);u.addEventListener($n,h),u.dispatchEvent(y),y.defaultPrevented||De(w??document.body,{select:!0}),u.removeEventListener($n,h),Co.remove(m)},0)}}},[u,g,h,m]);const b=i.useCallback(w=>{if(!r&&!o||m.paused)return;const E=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,y=document.activeElement;if(E&&y){const x=w.currentTarget,[S,R]=vs(x);S&&R?!w.shiftKey&&y===R?(w.preventDefault(),r&&De(S,{select:!0})):w.shiftKey&&y===S&&(w.preventDefault(),r&&De(R,{select:!0})):y===x&&w.preventDefault()}},[r,o,m.paused]);return s.jsx(Pe.div,{tabIndex:-1,...c,ref:v,onKeyDown:b})},"FocusScope"));function gs(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(De(r,{select:t}),document.activeElement!==n)return}de(gs,"focusFirst");function vs(e){const t=fr(e),n=Qn(t,e),r=Qn(t.reverse(),e);return[n,r]}de(vs,"getTabbableEdges");function fr(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:de(r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}de(fr,"getTabbableCandidates");function Qn(e,t){const n=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):bs(r,{upTo:t})))return r}de(Qn,"findVisible");function bs(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}de(bs,"isHidden");function xs(e){return e instanceof HTMLInputElement&&"select"in e}de(xs,"isSelectableInput");function De(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&xs(e)&&t&&e.select()}}de(De,"focus");var Co=ys();function ys(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Jn(e,t),e.unshift(t)},remove(t){var n;e=Jn(e,t),(n=e[0])==null||n.resume()}}}de(ys,"createFocusScopesStack");function Jn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}de(Jn,"arrayRemove");function ws(e){return e.filter(t=>t.tagName!=="A")}de(ws,"removeLinks");var gc=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},vc=Object.defineProperty,bc=(e,t)=>vc(e,"name",{value:t,configurable:!0}),xc=Qe[" useId ".trim().toString()]||(()=>{}),yc=0;function cn(e){const[t,n]=i.useState(xc());return gc(()=>{e||n(r=>r??String(yc++))},[e]),e||(t?`radix-${t}`:"")}bc(cn,"useId");var sn=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},wc=Object.defineProperty,kc=(e,t)=>wc(e,"name",{value:t,configurable:!0});function ks(e){const[t,n]=i.useState(void 0);return sn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const a=o[0];let l,c;if("borderBoxSize"in a){const u=a.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}kc(ks,"useSize");var Sc=Object.defineProperty,Ke=(e,t)=>Sc(e,"name",{value:t,configurable:!0}),Ss="Popper",[Cs,Es]=Le(Ss),[Cc,Rs]=Cs(Ss),Ec=Ke(e=>{const{__scopePopper:t,children:n}=e,[r,o]=i.useState(null),[a,l]=i.useState(void 0);return s.jsx(Cc,{scope:t,anchor:r,onAnchorChange:o,placementState:a,setPlacementState:l,children:n})},"Popper"),Rc="PopperAnchor",Pc=i.forwardRef(Ke(function(t,n){const{__scopePopper:r,virtualRef:o,...a}=t,l=Rs(Rc,r),c=i.useRef(null),u=l.onAnchorChange,f=i.useCallback(b=>{c.current=b,b&&u(b)},[u]),g=q(n,f),h=i.useRef(null);i.useEffect(()=>{if(!o)return;const b=h.current;h.current=o.current,b!==h.current&&u(h.current)});const p=l.placementState&&dn(l.placementState),v=p==null?void 0:p[0],m=p==null?void 0:p[1];return o?null:s.jsx(Pe.div,{"data-radix-popper-side":v,"data-radix-popper-align":m,...a,ref:g})},"PopperAnchor")),Ps="PopperContent",[Ic,Od]=Cs(Ps),Tc=i.forwardRef(Ke(function(t,n){var Fe,se,$e,ct,ut,St,dt;const{__scopePopper:r,side:o="bottom",sideOffset:a=0,align:l="center",alignOffset:c=0,arrowPadding:u=0,avoidCollisions:f=!0,collisionBoundary:g=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:v=!1,updatePositionStrategy:m="optimized",onPlaced:b,...w}=t,E=Rs(Ps,r),[y,x]=i.useState(null),S=q(n,x),[R,P]=i.useState(null),j=ks(R),_=(j==null?void 0:j.width)??0,I=(j==null?void 0:j.height)??0,A=o+(l!=="center"?"-"+l:""),G=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},N=Array.isArray(g)?g:[g],O=N.length>0,K={padding:G,boundary:N.filter(Is),altBoundary:O},{refs:X,floatingStyles:ce,placement:M,isPositioned:Ie,middlewareData:ie}=Gi({strategy:"fixed",placement:A,whileElementsMounted:Ke((...Ze)=>Zi(...Ze,{animationFrame:m==="always"}),"whileElementsMounted"),elements:{reference:E.anchor},middleware:[Wi({mainAxis:a+I,alignmentAxis:c}),f&&qi({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Ki():void 0,...K}),f&&Yi({...K}),Xi({...K,apply:Ke(({elements:Ze,rects:Ct,availableWidth:Be,availableHeight:pn})=>{const{width:mn,height:Et}=Ct.reference,Ue=Ze.floating.style;Ue.setProperty("--radix-popper-available-width",`${Be}px`),Ue.setProperty("--radix-popper-available-height",`${pn}px`),Ue.setProperty("--radix-popper-anchor-width",`${mn}px`),Ue.setProperty("--radix-popper-anchor-height",`${Et}px`)},"apply")}),R&&Qi({element:R,padding:u}),jc({arrowWidth:_,arrowHeight:I}),v&&Ji({strategy:"referenceHidden",...K,boundary:O?K.boundary:void 0})]}),T=E.setPlacementState;sn(()=>(T(M),()=>{T(void 0)}),[M,T]);const[L,ue]=dn(M),ae=Xe(b);sn(()=>{Ie&&(ae==null||ae())},[Ie,ae]);const Oe=(Fe=ie.arrow)==null?void 0:Fe.x,pe=(se=ie.arrow)==null?void 0:se.y,Je=(($e=ie.arrow)==null?void 0:$e.centerOffset)!==0,[be,Z]=i.useState();return sn(()=>{y&&Z(window.getComputedStyle(y).zIndex)},[y]),s.jsx("div",{ref:X.setFloating,"data-radix-popper-content-wrapper":"",style:{...ce,transform:Ie?ce.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:be,"--radix-popper-transform-origin":[(ct=ie.transformOrigin)==null?void 0:ct.x,(ut=ie.transformOrigin)==null?void 0:ut.y].join(" "),...((St=ie.hide)==null?void 0:St.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:s.jsx(Ic,{scope:r,placedSide:L,placedAlign:ue,onArrowChange:P,arrowX:Oe,arrowY:pe,shouldHideArrow:Je,children:s.jsx(Pe.div,{"data-side":L,"data-align":ue,...w,ref:S,style:{...w.style,animation:Ie?(dt=w.style)==null?void 0:dt.animation:"none"}})})})},"PopperContent"));function Is(e){return e!==null}Ke(Is,"isNotNull");var jc=Ke(e=>({name:"transformOrigin",options:e,fn(t){var w,E,y;const{placement:n,rects:r,middlewareData:o}=t,l=((w=o.arrow)==null?void 0:w.centerOffset)!==0,c=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[f,g]=dn(n),h={start:"0%",center:"50%",end:"100%"}[g],p=(((E=o.arrow)==null?void 0:E.x)??0)+c/2,v=(((y=o.arrow)==null?void 0:y.y)??0)+u/2;let m="",b="";return f==="bottom"?(m=l?h:`${p}px`,b=`${-u}px`):f==="top"?(m=l?h:`${p}px`,b=`${r.floating.height+u}px`):f==="right"?(m=`${-u}px`,b=l?h:`${v}px`):f==="left"&&(m=`${r.floating.width+u}px`,b=l?h:`${v}px`),{data:{x:m,y:b}}}}),"transformOrigin");function dn(e){const[t,n="center"]=e.split("-");return[t,n]}Ke(dn,"getSideAndAlignFromPlacement");var Ac=Ec,Mc=Pc,Nc=Tc,Dc=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},_c=Object.defineProperty,Lc=(e,t)=>_c(e,"name",{value:t,configurable:!0}),Oc=i.forwardRef(Lc(function(t,n){var u;const{container:r,...o}=t,[a,l]=i.useState(!1);Dc(()=>l(!0),[]);const c=r||a&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?_o.createPortal(s.jsx(Pe.div,{...o,ref:n}),c):null},"Portal")),Eo=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Fc=Object.defineProperty,_e=(e,t)=>Fc(e,"name",{value:t,configurable:!0});function Ts(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}_e(Ts,"useStateMachine");var hr=_e(e=>{const{present:t,children:n}=e,r=js(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),a=As(r.ref,Ms(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:a}):null},"Presence");function js(e){const[t,n]=i.useState(),r=i.useRef(null),o=i.useRef(e),a=i.useRef("none"),l=i.useRef(void 0),c=e?"mounted":"unmounted",[u,f]=Ts(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{u==="mounted"?(a.current=l.current??bt(r.current),l.current=void 0):a.current="none"},[u]),Eo(()=>{const g=r.current,h=o.current;if(h!==e){const v=a.current,m=bt(g);e?(l.current=m,f("MOUNT")):m==="none"||(g==null?void 0:g.display)==="none"?f("UNMOUNT"):f(h&&v!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),Eo(()=>{if(t){let g;const h=t.ownerDocument.defaultView??window,p=_e(m=>{const w=bt(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&w&&(f("ANIMATION_END"),!o.current)){const E=t.style.animationFillMode;t.style.animationFillMode="forwards",g=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=E)})}},"handleAnimationEnd"),v=_e(m=>{m.target===t&&(a.current=bt(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(g),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:i.useCallback(g=>{if(g){const h=getComputedStyle(g);r.current=h,l.current=bt(h)}else r.current=null;n(g)},[])}}_e(js,"usePresence");function Zn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}_e(Zn,"setRef");function As(...e){const t=i.useRef(e);return t.current=e,i.useCallback(n=>{const r=t.current;let o=!1;const a=r.map(l=>{const c=Zn(l,n);return!o&&typeof c=="function"&&(o=!0),c});if(o)return()=>{for(let l=0;l<a.length;l++){const c=a[l];typeof c=="function"?c():Zn(r[l],null)}}},[])}_e(As,"useStableComposedRefs");function bt(e){return(e==null?void 0:e.animationName)||"none"}_e(bt,"getAnimationName");function Ms(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}_e(Ms,"getElementRef");var $c=Object.defineProperty,Se=(e,t)=>$c(e,"name",{value:t,configurable:!0});function Lt(e){const t=i.forwardRef((n,r)=>{let{children:o,...a}=n,l=null,c=!1;const u=[];er(o)&&typeof rn=="function"&&(o=rn(o._payload)),i.Children.forEach(o,p=>{var v;if(Ls(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;er(b)&&typeof rn=="function"&&(b=rn(b._payload)),l=Uc(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=i.cloneElement(l,void 0,u):!c&&i.Children.count(o)===1&&i.isValidElement(o)&&(l=o);const f=l?_s(l):void 0,g=q(r,f);if(!l){if(o||o===0)throw new Error(c?Vc(e):zc(e));return o}const h=Ds(a,l.props??{});return l.type!==i.Fragment&&(h.ref=r?g:f),i.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}Se(Lt,"createSlot");var Ns=Symbol.for("radix.slottable");function Bc(e){const t=Se(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Ns,t}Se(Bc,"createSlottable");var Uc=Se((e,t)=>{if("child"in e.props){const n=e.props.child;return i.isValidElement(n)?i.cloneElement(n,void 0,e.props.children(n.props.children)):null}return i.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Ds(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...c)=>{const u=a(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}Se(Ds,"mergeProps");function _s(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}Se(_s,"getElementRef");function Ls(e){return i.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Ns}Se(Ls,"isSlottable");var Hc=Symbol.for("react.lazy");function er(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Hc&&"_payload"in e&&Os(e._payload)}Se(er,"isLazyComponent");function Os(e){return typeof e=="object"&&e!==null&&"then"in e}Se(Os,"isPromiseLike");var zc=Se(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Vc=Se(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),rn=Qe[" use ".trim().toString()],Gc=Object.defineProperty,oe=(e,t)=>Gc(e,"name",{value:t,configurable:!0});function Fs(e){const t=e+"CollectionProvider",[n,r]=Le(t),[o,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=oe(b=>{const{scope:w,children:E}=b,y=i.useRef(null),x=i.useRef(new Map).current;return s.jsx(o,{scope:w,itemMap:x,collectionRef:y,children:E})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=Lt(c),f=i.forwardRef((b,w)=>{const{scope:E,children:y}=b,x=a(c,E),S=q(w,x.collectionRef);return s.jsx(u,{ref:S,children:y})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=Lt(g),v=i.forwardRef((b,w)=>{const{scope:E,children:y,...x}=b,S=i.useRef(null),R=q(w,S),P=a(g,E);return i.useEffect(()=>(P.itemMap.set(S,{ref:S,...x}),()=>void P.itemMap.delete(S))),s.jsx(p,{[h]:"",ref:R,children:y})});v.displayName=g;function m(b){const w=a(e+"CollectionConsumer",b);return i.useCallback(()=>{const y=w.collectionRef.current;if(!y)return[];const x=Array.from(y.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((P,j)=>x.indexOf(P.ref.current)-x.indexOf(j.ref.current))},[w.collectionRef,w.itemMap])}return oe(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}oe(Fs,"createCollection");var Ro=new WeakMap,J,ge,Bn=(ge=class extends Map{constructor(n){super(n);jn(this,J);Dt(this,J,[...super.keys()]),Ro.set(this,!0)}set(n,r){return Ro.get(this)&&(this.has(n)?F(this,J)[F(this,J).indexOf(n)]=n:F(this,J).push(n)),super.set(n,r),this}insert(n,r,o){const a=this.has(r),l=F(this,J).length,c=pr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||a&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(a?0:1);c<0&&u++;const h=[...F(this,J)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),a&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const a=new ge(this);return a.insert(n,r,o),a}before(n){const r=F(this,J).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const a=F(this,J).indexOf(n);return a===-1?this:this.insert(a,r,o)}after(n){let r=F(this,J).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const a=F(this,J).indexOf(n);return a===-1?this:this.insert(a+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Dt(this,J,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,J).splice(F(this,J).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=an(F(this,J),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=an(F(this,J),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,J).indexOf(n)}keyAt(n){return an(F(this,J),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let a=o+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.at(a)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let a=o+r;return a<0&&(a=0),a>=this.size&&(a=this.size-1),this.keyAt(a)}find(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return a;o++}}findIndex(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return o;o++}return-1}filter(n,r){const o=[];let a=0;for(const l of this)Reflect.apply(n,r,[l,a,this])&&o.push(l),a++;return new ge(o)}map(n,r){const o=[];let a=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,a,this])]),a++;return new ge(o)}reduce(...n){const[r,o]=n;let a=0,l=o??this.at(0);for(const c of this)a===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,a,this]),a++;return l}reduceRight(...n){const[r,o]=n;let a=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?a=c:a=Reflect.apply(r,this,[a,c,l,this])}return a}toSorted(n){const r=[...this.entries()].sort(n);return new ge(r)}toReversed(){const n=new ge;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),a=this.get(o);n.set(o,a)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new ge(r)}slice(n,r){const o=new ge;let a=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(a=r-1);for(let l=n;l<=a;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const a of this){if(!Reflect.apply(n,r,[a,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const a of this){if(Reflect.apply(n,r,[a,o,this]))return!0;o++}return!1}},J=new WeakMap,oe(ge,"OrderedDict"),ge);function an(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=$s(e,t);return n===-1?void 0:e[n]}oe(an,"at");function $s(e,t){const n=e.length,r=pr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}oe($s,"toSafeIndex");function pr(e){return e!==e||e===0?0:Math.trunc(e)}oe(pr,"toSafeInteger");function Wc(e){const t=e+"CollectionProvider",[n,r]=Le(t),[o,a]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Bn,setItemMap:oe(()=>{},"setItemMap")}),l=oe(({state:x,...S})=>x?s.jsx(u,{...S,state:x}):s.jsx(c,{...S}),"CollectionProvider");l.displayName=t;const c=oe(x=>{const S=w();return s.jsx(u,{...x,state:S})},"CollectionInit");c.displayName=t+"Init";const u=oe(x=>{const{scope:S,children:R,state:P}=x,j=i.useRef(null),[_,I]=i.useState(null),A=q(j,I),[G,N]=P;return i.useEffect(()=>{if(!_)return;const O=Hs(()=>{});return O.observe(_,{childList:!0,subtree:!0}),()=>{O.disconnect()}},[_]),s.jsx(o,{scope:S,itemMap:G,setItemMap:N,collectionRef:A,collectionRefObject:j,collectionElement:_,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=Lt(f),h=i.forwardRef((x,S)=>{const{scope:R,children:P}=x,j=a(f,R),_=q(S,j.collectionRef);return s.jsx(g,{ref:_,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=Lt(p),b=i.forwardRef((x,S)=>{const{scope:R,children:P,...j}=x,_=i.useRef(null),[I,A]=i.useState(null),G=q(S,_,A),N=a(p,R),{setItemMap:O}=N,K=i.useRef(j);Bs(K.current,j)||(K.current=j);const X=K.current;return i.useEffect(()=>{const ce=X;return O(M=>I?M.has(I)?M.set(I,{...ce,element:I}).toSorted(tr):(M.set(I,{...ce,element:I}),M.toSorted(tr)):M),()=>{O(M=>!I||!M.has(I)?M:(M.delete(I),new Bn(M)))}},[I,X,O]),s.jsx(m,{[v]:"",ref:G,children:P})});b.displayName=p;function w(){return i.useState(new Bn)}oe(w,"useInitCollection");function E(x){const{itemMap:S}=a(e+"CollectionConsumer",x);return S}return oe(E,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:E,useInitCollection:w}]}oe(Wc,"createCollection");function Bs(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}oe(Bs,"shallowEqual");function Us(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}oe(Us,"isElementPreceding");function tr(e,t){return!e[1].element||!t[1].element?0:Us(e[1].element,t[1].element)?-1:1}oe(tr,"sortByDocumentPosition");function Hs(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}oe(Hs,"getChildListObserver");var qc=Object.defineProperty,Kc=(e,t)=>qc(e,"name",{value:t,configurable:!0});function zs(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Kc(zs,"useCallbackRef");var Yc=Object.defineProperty,Xc=(e,t)=>Yc(e,"name",{value:t,configurable:!0}),Qc=i.createContext(void 0);function Vs(e){const t=i.useContext(Qc);return e||t||"ltr"}Xc(Vs,"useDirection");var Jc=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},Zc=Object.defineProperty,mr=(e,t)=>Zc(e,"name",{value:t,configurable:!0}),Un=!1;function Gs(){const[e,t]=i.useState(Un);return i.useEffect(()=>{Un||(Un=!0,t(!0))},[]),e}mr(Gs,"useIsHydrated");var Ws=Qe[" useSyncExternalStore ".trim().toString()];function qs(){return()=>{}}mr(qs,"subscribe");function Ks(){return Ws(qs,()=>!0,()=>!1)}mr(Ks,"useIsHydratedModern");var eu=typeof Ws=="function"?Ks:Gs,tu=Object.defineProperty,at=(e,t)=>tu(e,"name",{value:t,configurable:!0}),Hn="rovingFocusGroup.onEntryFocus",nu={bubbles:!1,cancelable:!0},fn="RovingFocusGroup",[nr,Ys,ru]=Fs(fn),[ou,Xs]=Le(fn,[ru]),[su,iu]=ou(fn),au=i.forwardRef(at(function(t,n){return s.jsx(nr.Provider,{scope:t.__scopeRovingFocusGroup,children:s.jsx(nr.Slot,{scope:t.__scopeRovingFocusGroup,children:s.jsx(lu,{...t,ref:n})})})},"RovingFocusGroup")),lu=i.forwardRef(at(function(t,n){const{__scopeRovingFocusGroup:r,orientation:o,loop:a=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:f,onEntryFocus:g,preventScrollOnEntryFocus:h=!1,...p}=t,v=i.useRef(null),m=q(n,v),b=Vs(l),[w,E]=ir({prop:c,defaultProp:u??null,onChange:f,caller:fn}),[y,x]=i.useState(!1),S=zs(g),R=Ys(r),P=i.useRef(!1),[j,_]=i.useState(0);return i.useEffect(()=>{const I=v.current;if(I)return I.addEventListener(Hn,S),()=>I.removeEventListener(Hn,S)},[S]),s.jsx(su,{scope:r,orientation:o,dir:b,loop:a,currentTabStopId:w,onItemFocus:i.useCallback(I=>E(I),[E]),onItemShiftTab:i.useCallback(()=>x(!0),[]),onFocusableItemAdd:i.useCallback(()=>_(I=>I+1),[]),onFocusableItemRemove:i.useCallback(()=>_(I=>I-1),[]),children:s.jsx(Pe.div,{tabIndex:y||j===0?-1:0,"data-orientation":o,...p,ref:m,style:{outline:"none",...t.style},onMouseDown:z(t.onMouseDown,()=>{P.current=!0}),onFocus:z(t.onFocus,I=>{const A=!P.current;if(I.target===I.currentTarget&&A&&!y){const G=new CustomEvent(Hn,nu);if(I.currentTarget.dispatchEvent(G),!G.defaultPrevented){const N=R().filter(M=>M.focusable),O=N.find(M=>M.active),K=N.find(M=>M.id===w),ce=[O,K,...N].filter(Boolean).map(M=>M.ref.current);gr(ce,h)}}P.current=!1}),onBlur:z(t.onBlur,()=>x(!1))})})},"RovingFocusGroupImpl")),cu="RovingFocusGroupItem",uu=i.forwardRef(at(function(t,n){const{__scopeRovingFocusGroup:r,focusable:o=!0,active:a=!1,tabStopId:l,children:c,...u}=t,f=cn(),g=l||f,h=iu(cu,r),p=h.currentTabStopId===g,v=Ys(r),{onFocusableItemAdd:m,onFocusableItemRemove:b,currentTabStopId:w}=h,E=eu();return Jc(()=>{if(!(!E||!o))return m(),()=>b()},[E,o,m,b]),i.useEffect(()=>{if(!(E||!o))return m(),()=>b()},[E,o,m,b]),s.jsx(nr.ItemSlot,{scope:r,id:g,focusable:o,active:a,children:s.jsx(Pe.span,{tabIndex:p?0:-1,"data-orientation":h.orientation,...u,ref:n,onMouseDown:z(t.onMouseDown,y=>{o?h.onItemFocus(g):y.preventDefault()}),onFocus:z(t.onFocus,()=>h.onItemFocus(g)),onKeyDown:z(t.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){h.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const x=Js(y,h.orientation,h.dir);if(x!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let R=v().filter(P=>P.focusable).map(P=>P.ref.current);if(x==="last")R.reverse();else if(x==="prev"||x==="next"){x==="prev"&&R.reverse();const P=R.indexOf(y.currentTarget);R=h.loop?Zs(R,P+1):R.slice(P+1)}setTimeout(()=>gr(R))}}),children:typeof c=="function"?c({isCurrentTabStop:p,hasTabStop:w!=null}):c})})},"RovingFocusGroupItem")),du={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Qs(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}at(Qs,"getDirectionAwareKey");function Js(e,t,n){const r=Qs(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return du[r]}at(Js,"getFocusIntent");function gr(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}at(gr,"focusFirst");function Zs(e,t){return e.map((n,r)=>e[(t+r)%e.length])}at(Zs,"wrapArray");var fu=au,hu=uu,pu=Object.defineProperty,V=(e,t)=>pu(e,"name",{value:t,configurable:!0}),mu=["Enter"," "],gu=["ArrowDown","PageUp","Home"],ei=["ArrowUp","PageDown","End"],vu=[...gu,...ei],hn="Menu",[rr,bu,xu]=as(hn),[lt,ti]=Le(hn,[xu,Es,Xs]),vr=Es(),ni=Xs(),[yu,$t]=lt(hn),[wu,br]=lt(hn),ku=V(e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:a,modal:l=!0}=e,c=vr(t),[u,f]=i.useState(null),g=i.useRef(!1),h=Xe(a),p=fs(o);return i.useEffect(()=>{const v=V(()=>{g.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},"handleKeyDown"),m=V(()=>g.current=!1,"handlePointer");return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),i.useEffect(()=>{if(!n)return;const v=V(()=>h(!1),"handleBlur");return window.addEventListener("blur",v),()=>window.removeEventListener("blur",v)},[n,h]),s.jsx(Ac,{...c,children:s.jsx(yu,{scope:t,open:n,onOpenChange:h,content:u,onContentChange:f,children:s.jsx(wu,{scope:t,onClose:i.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:g,dir:p,modal:l,children:r})})})},"Menu"),Su=i.forwardRef(V(function(t,n){const{__scopeMenu:r,...o}=t,a=vr(r);return s.jsx(Mc,{...a,...o,ref:n})},"MenuAnchor")),ri="MenuPortal",[Cu,Eu]=lt(ri,{forceMount:void 0}),Ru=V(e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,a=$t(ri,t);return s.jsx(Cu,{scope:t,forceMount:n,children:s.jsx(hr,{present:n||a.open,children:s.jsx(Oc,{asChild:!0,container:o,children:r})})})},"MenuPortal"),Ye="MenuContent",[Pu,oi]=lt(Ye),Iu=i.forwardRef(V(function(t,n){const r=Eu(Ye,t.__scopeMenu),{forceMount:o=r.forceMount,...a}=t,l=$t(Ye,t.__scopeMenu),c=br(Ye,t.__scopeMenu);return s.jsx(rr.Provider,{scope:t.__scopeMenu,children:s.jsx(hr,{present:o||l.open,children:s.jsx(rr.Slot,{scope:t.__scopeMenu,children:c.modal?s.jsx(Tu,{...a,ref:n}):s.jsx(ju,{...a,ref:n})})})})},"MenuContent")),Tu=i.forwardRef(V(function(t,n){const r=$t(Ye,t.__scopeMenu),o=i.useRef(null),a=q(n,o);return i.useEffect(()=>{const l=o.current;if(l)return el(l)},[]),s.jsx(si,{...t,ref:a,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:z(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentModal")),ju=i.forwardRef(V(function(t,n){const r=$t(Ye,t.__scopeMenu);return s.jsx(si,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentNonModal")),Au=yt("MenuContent.ScrollLock"),si=i.forwardRef(V(function(t,n){const{__scopeMenu:r,loop:o=!1,trapFocus:a,onOpenAutoFocus:l,onCloseAutoFocus:c,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,disableOutsideScroll:b,...w}=t,E=$t(Ye,r),y=br(Ye,r),x=vr(r),S=ni(r),R=bu(r),[P,j]=i.useState(null),_=i.useRef(null),I=q(n,_,E.onContentChange),A=i.useRef(0),G=i.useRef(""),N=i.useRef(0),O=i.useRef(null),K=i.useRef("right"),X=i.useRef(0),ce=b?tl:i.Fragment,M=b?{as:Au,allowPinchZoom:!0}:void 0,Ie=V(T=>{var Z,Fe;const L=G.current+T,ue=R().filter(se=>!se.disabled),ae=document.activeElement,Oe=(Z=ue.find(se=>se.ref.current===ae))==null?void 0:Z.textValue,pe=ue.map(se=>se.textValue),Je=ui(pe,L,Oe),be=(Fe=ue.find(se=>se.textValue===Je))==null?void 0:Fe.ref.current;V((function se($e){G.current=$e,window.clearTimeout(A.current),$e!==""&&(A.current=window.setTimeout(()=>se(""),1e3))}),"updateSearch")(L),be&&setTimeout(()=>be.focus())},"handleTypeaheadSearch");i.useEffect(()=>()=>window.clearTimeout(A.current),[]),dr();const ie=i.useCallback(T=>{var ue,ae;return K.current===((ue=O.current)==null?void 0:ue.side)&&fi(T,(ae=O.current)==null?void 0:ae.area)},[]);return s.jsx(Pu,{scope:r,searchRef:G,onItemEnter:i.useCallback(T=>{ie(T)&&T.preventDefault()},[ie]),onItemLeave:i.useCallback(T=>{var L;ie(T)||((L=_.current)==null||L.focus(),j(null))},[ie]),onTriggerLeave:i.useCallback(T=>{ie(T)&&T.preventDefault()},[ie]),pointerGraceTimerRef:N,onPointerGraceIntentChange:i.useCallback(T=>{O.current=T},[]),children:s.jsx(ce,{...M,children:s.jsx(mc,{asChild:!0,trapped:a,onMountAutoFocus:z(l,T=>{var L;T.preventDefault(),(L=_.current)==null||L.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:s.jsx(cc,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,children:s.jsx(fu,{asChild:!0,...S,dir:y.dir,orientation:"vertical",loop:o,currentTabStopId:P,onCurrentTabStopIdChange:j,onEntryFocus:z(f,T=>{y.isUsingKeyboardRef.current||T.preventDefault()}),preventScrollOnEntryFocus:!0,children:s.jsx(Nc,{role:"menu","aria-orientation":"vertical","data-state":ai(E.open),"data-radix-menu-content":"",dir:y.dir,...x,...w,ref:I,style:{outline:"none",...w.style},onKeyDown:z(w.onKeyDown,T=>{const ue=T.target.closest("[data-radix-menu-content]")===T.currentTarget,ae=T.ctrlKey||T.altKey||T.metaKey,Oe=T.key.length===1;ue&&(T.key==="Tab"&&T.preventDefault(),!ae&&Oe&&Ie(T.key));const pe=_.current;if(T.target!==pe||!vu.includes(T.key))return;T.preventDefault();const be=R().filter(Z=>!Z.disabled).map(Z=>Z.ref.current);ei.includes(T.key)&&be.reverse(),li(be)}),onBlur:z(t.onBlur,T=>{T.currentTarget.contains(T.target)||(window.clearTimeout(A.current),G.current="")}),onPointerMove:z(t.onPointerMove,un(T=>{const L=T.target,ue=X.current!==T.clientX;if(T.currentTarget.contains(L)&&ue){const ae=T.clientX>X.current?"right":"left";K.current=ae,X.current=T.clientX}}))})})})})})})},"MenuContentImpl")),or="MenuItem",Po="menu.itemSelect",Mu=i.forwardRef(V(function(t,n){const{disabled:r=!1,onSelect:o,...a}=t,l=i.useRef(null),c=br(or,t.__scopeMenu),u=oi(or,t.__scopeMenu),f=q(n,l),g=i.useRef(!1),h=V(()=>{const p=l.current;if(!r&&p){const v=new CustomEvent(Po,{bubbles:!0,cancelable:!0});p.addEventListener(Po,m=>o==null?void 0:o(m),{once:!0}),ar(p,v),v.defaultPrevented?g.current=!1:c.onClose()}},"handleSelect");return s.jsx(Nu,{...a,ref:f,disabled:r,onClick:z(t.onClick,h),onPointerDown:p=>{var v;(v=t.onPointerDown)==null||v.call(t,p),g.current=!0},onPointerUp:z(t.onPointerUp,p=>{var v;g.current||(v=p.currentTarget)==null||v.click()}),onKeyDown:z(t.onKeyDown,p=>{r||p.target!==p.currentTarget||u.searchRef.current!==""&&p.key===" "||mu.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})},"MenuItem")),Nu=i.forwardRef(V(function(t,n){const{__scopeMenu:r,disabled:o=!1,textValue:a,...l}=t,c=oi(or,r),u=ni(r),f=i.useRef(null),g=q(n,f),[h,p]=i.useState(!1),[v,m]=i.useState("");return i.useEffect(()=>{const b=f.current;b&&m((b.textContent??"").trim())},[l.children]),s.jsx(rr.ItemSlot,{scope:r,disabled:o,textValue:a??v,children:s.jsx(hu,{asChild:!0,...u,focusable:!o,children:s.jsx(Pe.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...l,ref:g,onPointerMove:z(t.onPointerMove,un(b=>{o?c.onItemLeave(b):(c.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:z(t.onPointerLeave,un(b=>c.onItemLeave(b))),onFocus:z(t.onFocus,()=>p(!0)),onBlur:z(t.onBlur,()=>p(!1))})})})},"MenuItemImpl")),Du=i.forwardRef(V(function(t,n){const{checked:r=!1,onCheckedChange:o,...a}=t;return s.jsx(Lu,{scope:t.__scopeMenu,checked:r,children:s.jsx(Mu,{role:"menuitemcheckbox","aria-checked":Ot(r)?"mixed":r,...a,ref:n,"data-state":xr(r),onSelect:z(a.onSelect,()=>o==null?void 0:o(Ot(r)?!0:!r),{checkForDefaultPrevented:!1})})})},"MenuCheckboxItem")),_u="MenuRadioGroup",[Fd,$d]=lt(_u,{value:void 0,onValueChange:V(()=>{},"onValueChange")}),ii="MenuItemIndicator",[Lu,Ou]=lt(ii,{checked:!1}),Fu=i.forwardRef(V(function(t,n){const{__scopeMenu:r,forceMount:o,...a}=t,l=Ou(ii,r);return s.jsx(hr,{present:o||Ot(l.checked)||l.checked===!0,children:s.jsx(Pe.span,{...a,ref:n,"data-state":xr(l.checked)})})},"MenuItemIndicator")),$u="MenuSub",[Bd,Ud]=lt($u);function ai(e){return e?"open":"closed"}V(ai,"getOpenState");function Ot(e){return e==="indeterminate"}V(Ot,"isIndeterminate");function xr(e){return Ot(e)?"indeterminate":e?"checked":"unchecked"}V(xr,"getCheckedState");function li(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}V(li,"focusFirst");function ci(e,t){return e.map((n,r)=>e[(t+r)%e.length])}V(ci,"wrapArray");function ui(e,t,n){const o=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,a=n?e.indexOf(n):-1;let l=ci(e,Math.max(a,0));o.length===1&&(l=l.filter(f=>f!==n));const u=l.find(f=>f.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}V(ui,"getNextMatch");function di(e,t){const{x:n,y:r}=e;let o=!1;for(let a=0,l=t.length-1;a<t.length;l=a++){const c=t[a],u=t[l],f=c.x,g=c.y,h=u.x,p=u.y;g>r!=p>r&&n<(h-f)*(r-g)/(p-g)+f&&(o=!o)}return o}V(di,"isPointInPolygon");function fi(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return di(n,t)}V(fi,"isPointerInGraceArea");function un(e){return t=>t.pointerType==="mouse"?e(t):void 0}V(un,"whenMouse");var Bu=ku,Uu=Su,Hu=Ru,zu=Iu,Vu=Du,Gu=Fu,Wu=Object.defineProperty,wt=(e,t)=>Wu(e,"name",{value:t,configurable:!0}),yr="DropdownMenu",[qu,Hd]=Le(yr,[ti]),kt=ti(),[Ku,hi]=qu(yr),Yu=wt(e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:a,onOpenChange:l,modal:c=!0}=e,u=kt(t),f=i.useRef(null),[g,h]=ir({prop:o,defaultProp:a??!1,onChange:l,caller:yr});return s.jsx(Ku,{scope:t,triggerId:cn(),triggerRef:f,contentId:cn(),open:g,onOpenChange:h,onOpenToggle:i.useCallback(()=>h(p=>!p),[h]),modal:c,children:s.jsx(Bu,{...u,open:g,onOpenChange:h,dir:r,modal:c,children:n})})},"DropdownMenu"),Xu="DropdownMenuTrigger",Qu=i.forwardRef(wt(function(t,n){const{__scopeDropdownMenu:r,disabled:o=!1,...a}=t,l=hi(Xu,r),c=kt(r),u=q(n,l.triggerRef);return s.jsx(Uu,{asChild:!0,...c,children:s.jsx(Pe.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...a,ref:u,onPointerDown:z(t.onPointerDown,f=>{!o&&f.button===0&&f.ctrlKey===!1&&(l.onOpenToggle(),l.open||f.preventDefault())}),onKeyDown:z(t.onKeyDown,f=>{o||(["Enter"," "].includes(f.key)&&l.onOpenToggle(),f.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())})})})},"DropdownMenuTrigger")),Ju=wt(e=>{const{__scopeDropdownMenu:t,...n}=e,r=kt(t);return s.jsx(Hu,{...r,...n})},"DropdownMenuPortal"),Zu="DropdownMenuContent",ed=i.forwardRef(wt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,a=hi(Zu,r),l=kt(r),c=i.useRef(!1);return s.jsx(zu,{id:a.contentId,"aria-labelledby":a.triggerId,...l,...o,ref:n,onCloseAutoFocus:z(t.onCloseAutoFocus,u=>{var f;c.current||(f=a.triggerRef.current)==null||f.focus(),c.current=!1,u.preventDefault()}),onInteractOutside:z(t.onInteractOutside,u=>{const f=u.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,h=f.button===2||g;(!a.modal||h)&&(c.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent")),td=i.forwardRef(wt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,a=kt(r);return s.jsx(Vu,{...a,...o,ref:n})},"DropdownMenuCheckboxItem")),nd=i.forwardRef(wt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,a=kt(r);return s.jsx(Gu,{...a,...o,ref:n})},"DropdownMenuItemIndicator")),rd=Yu,od=Qu,sd=Ju,pi=ed,mi=td,id=nd;const ad=rd,ld=od,cd=e=>e.preventDefault(),gi=i.forwardRef(({className:e,align:t="start",...n},r)=>s.jsx(sd,{children:s.jsx(pi,{ref:r,align:t,sideOffset:4,className:W("z-50 overflow-hidden rounded-md border border-border bg-surface p-1 shadow-lg",e),...n})}));gi.displayName=pi.displayName;const vi=i.forwardRef(({className:e,children:t,onSelect:n,...r},o)=>s.jsxs(mi,{ref:o,onSelect:n??cd,className:W("relative flex cursor-pointer select-none items-start rounded-sm py-1.5 pl-7 pr-3","text-[13px] text-fg outline-none data-[highlighted]:bg-surface-muted","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[s.jsx("span",{className:"absolute left-2 top-2 flex h-3.5 w-3.5 items-center justify-center",children:s.jsx(id,{children:s.jsx(ea,{className:"h-3.5 w-3.5"})})}),t]}));vi.displayName=mi.displayName;function ud({url:e,isNew:t,visibility:n,onClose:r}){const o=i.useRef(null),a=i.useRef(null);i.useEffect(()=>{const c=a.current;c&&!c.contains(document.activeElement)&&c.focus()},[]);function l(c){if(c.key==="Escape"){r();return}if(c.key!=="Tab")return;const u=o.current;if(!u)return;const f=u.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(f.length===0)return;const g=f[0],h=f[f.length-1],p=document.activeElement;c.shiftKey&&(p===g||!u.contains(p))?(c.preventDefault(),h.focus()):!c.shiftKey&&(p===h||!u.contains(p))&&(c.preventDefault(),g.focus())}return s.jsx("div",{ref:a,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:l,onMouseDown:c=>{c.target===c.currentTarget&&r()},children:s.jsxs("div",{ref:o,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[s.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[s.jsx(Lo,{className:"h-10 w-10 text-success"}),s.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:t?"Page published":"Update published"}),s.jsx("p",{className:"text-[12px] text-fg-2",children:t?n==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),s.jsx("div",{className:"px-6 py-4",children:s.jsx(rl,{url:e})}),s.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:s.jsx(qe,{autoFocus:!0,onClick:r,children:"Done"})})]})})}function dd({initialAlias:e,busy:t,onCancel:n,onPublish:r}){const[o,a]=i.useState(e),[l,c]=i.useState("public"),[u,f]=i.useState([]),g=i.useRef(null),h=i.useRef(null);i.useEffect(()=>{const v=h.current;v&&!v.contains(document.activeElement)&&v.focus()},[]);function p(v){if(v.key==="Escape"){n();return}if(v.key!=="Tab")return;const m=g.current;if(!m)return;const b=m.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(b.length===0)return;const w=b[0],E=b[b.length-1],y=document.activeElement;v.shiftKey&&(y===w||!m.contains(y))?(v.preventDefault(),E.focus()):!v.shiftKey&&(y===E||!m.contains(y))&&(v.preventDefault(),w.focus())}return s.jsx("div",{ref:h,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:p,onMouseDown:v=>{v.target===v.currentTarget&&!t&&n()},children:s.jsxs("div",{ref:g,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[s.jsxs("div",{className:"border-b border-border px-6 py-4",children:[s.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),s.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),s.jsxs("div",{className:"space-y-4 px-6 py-4",children:[s.jsxs("div",{children:[s.jsx(so,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),s.jsx(nl,{id:"publish-alias",autoFocus:!0,value:o,disabled:t,onChange:v=>a(v.target.value.toLowerCase()),placeholder:"my-app"}),s.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",o.trim()||"<uuid>"]})]}),s.jsxs("div",{children:[s.jsx(so,{children:"Who can open it"}),s.jsx(ol,{visibility:l,onVisibilityChange:c,grants:u,onGrantsChange:f,disabled:t})]})]}),s.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[s.jsx(qe,{variant:"secondary",onClick:n,disabled:t,children:"Cancel"}),s.jsxs(qe,{onClick:()=>r({alias:o.trim(),visibility:l,grants:u}),disabled:t,children:[s.jsx(Oo,{className:"h-3.5 w-3.5"}),t?"Publishing…":"Publish"]})]})]})})}function fd(e,t){return ln({queryKey:["page-history",e],queryFn:()=>xt.getPageHistory(e).then(n=>n.versions),enabled:t,retry:!1})}function Io(e,t){return ln({queryKey:["page-history-version",e,t],queryFn:()=>xt.getPageHistoryVersion(e,t).then(n=>n.html),enabled:t!==null,retry:!1})}function hd({entries:e,isLoading:t,isError:n,isFetching:r,selectedSha:o,onSelect:a,onRefresh:l}){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[s.jsx(Fo,{className:"h-3.5 w-3.5 text-fg-3"}),s.jsx("span",{className:"flex-1",children:"Version history"}),s.jsx("button",{type:"button",onClick:l,disabled:r,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),s.jsxs("div",{className:"scroll-slim flex-1 overflow-y-auto p-1.5",children:[t?s.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,n?s.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,e&&e.length===0?s.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(e??[]).map(c=>{const u=c.sha===o;return s.jsxs("button",{type:"button",onClick:()=>a(c),className:W("block w-full rounded-md px-2.5 py-2 text-left",u?"bg-ink":"hover:bg-surface-muted"),children:[s.jsx("div",{className:W("text-[12px] font-medium",u?"text-white":"text-fg"),children:new Date(c.committed_at).toLocaleString()}),s.jsxs("div",{className:W("truncate text-[11px]",u?"text-white/70":"text-fg-3"),children:[c.message,c.author_email?` — ${c.author_email}`:""]})]},c.sha)})]})]})}function pd({entry:e,canRestore:t,onRestore:n,onExit:r}){const o=Do();return s.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[s.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:e?s.jsxs(s.Fragment,{children:["Viewing version from ",new Date(e.committed_at).toLocaleString(),e.author_email?` (${e.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),s.jsxs(qe,{variant:"secondary",size:"sm",onClick:r,children:[s.jsx(ta,{className:"h-3.5 w-3.5"})," Back to current draft"]}),s.jsx(qe,{size:"sm",disabled:!t,onClick:async()=>{await o({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&n()},children:"Restore this version"})]})}class md{diff(t,n,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);const a=this.castInput(t,r),l=this.castInput(n,r),c=this.removeEmpty(this.tokenize(a,r)),u=this.removeEmpty(this.tokenize(l,r));return this.diffWithOptionsObj(c,u,r,o)}diffWithOptionsObj(t,n,r,o){var a;const l=y=>{if(y=this.postProcess(y,r),o){setTimeout(function(){o(y)},0);return}else return y},c=n.length,u=t.length;let f=1,g=c+u;r.maxEditLength!=null&&(g=Math.min(g,r.maxEditLength));const h=(a=r.timeout)!==null&&a!==void 0?a:1/0,p=Date.now()+h,v=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(v[0],n,t,0,r);if(v[0].oldPos+1>=u&&m+1>=c)return l(this.buildValues(v[0].lastComponent,n,t));let b=-1/0,w=1/0;const E=()=>{for(let y=Math.max(b,-f);y<=Math.min(w,f);y+=2){let x;const S=v[y-1],R=v[y+1];S&&(v[y-1]=void 0);let P=!1;if(R){const _=R.oldPos-y;P=R&&0<=_&&_<c}const j=S&&S.oldPos+1<u;if(!P&&!j){v[y]=void 0;continue}if(!j||P&&S.oldPos<R.oldPos?x=this.addToPath(R,!0,!1,0,r):x=this.addToPath(S,!1,!0,1,r),m=this.extractCommon(x,n,t,y,r),x.oldPos+1>=u&&m+1>=c)return l(this.buildValues(x.lastComponent,n,t))||!0;v[y]=x,x.oldPos+1>=u&&(w=Math.min(w,y-1)),m+1>=c&&(b=Math.max(b,y+1))}f++};if(o)(function y(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);E()||y()},0)})();else for(;f<=g&&Date.now()<=p;){const y=E();if(y)return y}}addToPath(t,n,r,o,a){const l=t.lastComponent;return l&&!a.oneChangePerToken&&l.added===n&&l.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:l.count+1,added:n,removed:r,previousComponent:l.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:r,previousComponent:l}}}extractCommon(t,n,r,o,a){const l=n.length,c=r.length;let u=t.oldPos,f=u-o,g=0;for(;f+1<l&&u+1<c&&this.equals(r[u+1],n[f+1],a);)f++,u++,g++,a.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return g&&!a.oneChangePerToken&&(t.lastComponent={count:g,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,f}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const o=[];let a;for(;t;)o.push(t),a=t.previousComponent,delete t.previousComponent,t=a;o.reverse();const l=o.length;let c=0,u=0,f=0;for(;c<l;c++){const g=o[c];if(g.removed)g.value=this.join(r.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=n.slice(u,u+g.count);h=h.map(function(p,v){const m=r[f+v];return m.length>p.length?m:p}),g.value=this.join(h)}else g.value=this.join(n.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}class gd extends md{constructor(){super(...arguments),this.tokenize=xd}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const vd=new gd;function bd(e,t,n){return vd.diff(e,t,n)}function xd(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let o=0;o<r.length;o++){const a=r[o];o%2&&!t.newlineIsToken?n[n.length-1]+=a:n.push(a)}return n}function yd(e,t){const n=[];let r=0;for(const o of bd(e,t)){const a=o.added?"added":o.removed?"removed":"context",l=o.value.split(`
`);l.length>0&&l[l.length-1]===""&&l.pop();for(const c of l)n.push({key:r++,kind:a,text:c})}return n}function zn({oldText:e,newText:t,oldLabel:n,newLabel:r}){const o=i.useMemo(()=>yd(e,t),[e,t]),a=o.every(l=>l.kind==="context");return s.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[s.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[s.jsxs("span",{className:"text-no-strong",children:["− ",n]}),s.jsxs("span",{className:"text-success",children:["+ ",r]})]}),s.jsx("div",{className:"scroll-slim flex-1 overflow-auto",children:a?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):s.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:o.map(l=>s.jsxs("div",{className:W("flex whitespace-pre px-3",l.kind==="added"&&"bg-status-soft",l.kind==="removed"&&"bg-no-soft",l.kind==="context"&&"text-fg-2"),children:[s.jsx("span",{className:W("mr-2 shrink-0 select-none",l.kind==="added"&&"text-success",l.kind==="removed"&&"text-no-strong",l.kind==="context"&&"text-fg-3"),children:l.kind==="added"?"+":l.kind==="removed"?"−":" "}),s.jsx("span",{children:l.text||" "})]},l.key))})})]})}const wd=i.lazy(()=>Vi(()=>import("./CodeEditor-CiyRHnwJ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>({default:e.CodeEditor}))),vt=`<!doctype html>
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
`,_t=[];function To(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(2)}M`}function jo(e,t,n){const r=JSON.stringify(e).length,o=t.reduce((a,l)=>{var c,u;return a+(l.kind==="inline"?((c=l.data)==null?void 0:c.length)??0:((u=l.text)==null?void 0:u.length)??0)},0);return r+o+n.length}const kd=["off","low","medium","high"],bi="medium",Ao={off:0,low:4096,medium:12288,high:24576};function Mo(e,t){let n=Ao[e]??Ao[bi];return e==="off"&&t.includes("pro")&&(n=128),{thinkingConfig:{thinkingBudget:n,...e==="off"?{}:{includeThoughts:!0}}}}const Sd=.75,Cd=.85,No=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function Ed(e,t,n){if(n){const r=Math.max(0,Math.ceil((n.deadline-Date.now())/1e3));return`rate-limited — retry ${n.attempt} of ${n.max} in ${r}s…`}if(e)switch(e.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${e.detail?` (${e.detail})`:""}…`;case"grep":return`searching the page${e.detail?` for “${e.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return e.detail?`loading the ${e.detail} skill…`:"loading a skill…";case"action":return`running ${e.detail??"an action"}…`;case"web_search":return e.detail?`searching the web for “${e.detail}”…`:"searching the web…";case"database":return"updating the database…";default:return`using ${e.name}…`}return t>=10?`working… (${t}s — large edits can take a minute)`:t>=3?`working… (${t}s)`:"working…"}function Rd(e){return s.jsxs("div",{children:[s.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:e.name==="screenshot"?s.jsxs(s.Fragment,{children:[s.jsx(fa,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"looked at the page"})]}):e.name==="write"||e.name==="edit"?s.jsxs(s.Fragment,{children:[s.jsx(Bo,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"edited the page"})]}):e.name==="skill"?s.jsxs(s.Fragment,{children:[s.jsx($o,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["loaded the ",s.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"unknown"})," skill"]})]}):e.name==="action"?s.jsxs(s.Fragment,{children:[s.jsx(Zr,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["ran ",s.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"an action"})]})]}):e.name==="console"?s.jsxs(s.Fragment,{children:[s.jsx(Zr,{className:"h-3 w-3 text-fg-3"}),s.jsx("span",{children:"checked the console"})]}):e.name==="grep"?s.jsxs(s.Fragment,{children:[s.jsx(ha,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["searched the page",e.detail?s.jsxs(s.Fragment,{children:[" for ",s.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:e.detail})]}):null]})]}):e.name==="database"?s.jsxs(s.Fragment,{children:[s.jsx(pa,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["updated the database",e.detail?` (${e.detail})`:""]})]}):e.name==="read"?s.jsxs(s.Fragment,{children:[s.jsx(Ho,{className:"h-3 w-3 text-fg-3"}),s.jsxs("span",{children:["read the page",e.detail?` (${e.detail})`:""]})]}):s.jsxs(s.Fragment,{children:[s.jsx(Uo,{className:"h-3 w-3"}),s.jsxs("span",{children:["used ",s.jsx("span",{className:"font-medium text-fg-2",children:e.name}),e.detail?` (${e.detail})`:""]})]})}),e.name==="screenshot"&&e.imageUrl?s.jsx("img",{src:e.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function zd(){var a;const{id:e}=sl(),n=((a=il().state)==null?void 0:a.publishContinuation)===!0,r=i.useRef(0),o=i.useRef(e);return!n&&e!==o.current&&(r.current+=1),o.current=e,s.jsx(Pd,{pageId:e??null},r.current)}function Pd({pageId:e}){var zr,Vr,Gr,Wr,qr,Kr;const t=e??"draft",n=al(),r=ma(),o=Do(),[a,l]=i.useState(!1),[c,u]=i.useState(vt),[f,g]=i.useState(_t),[h,p]=i.useState(""),[v,m]=i.useState(bi),[b,w]=i.useState(()=>[...ba]),E=i.useRef(null),y=()=>{if(nt)return E.current??(E.current=crypto.randomUUID()),E.current},x=i.useRef(null),[S,R]=i.useState(""),[P,j]=i.useState([]),[_,I]=i.useState(!1),[A,G]=i.useState(!1),[N,O]=i.useState(""),[K,X]=i.useState(""),[ce,M]=i.useState(null),[Ie,ie]=i.useState(0),[T,L]=i.useState(null),[ue,ae]=i.useState(!1),[Oe,pe]=i.useState(null),[Je,be]=i.useState(null),[Z,Fe]=i.useState(!1),[se,$e]=i.useState("desktop"),[ct,ut]=i.useState("code"),[St,dt]=i.useState(null),Ze=e!=null&&St!=null,[Ct,Be]=i.useState(null);i.useEffect(()=>{Z||ut("code")},[Z]);const[pn,mn]=i.useState(""),[Et,Ue]=i.useState(null),[xi,wr]=i.useState("public"),[Rt,gn]=i.useState(null),[yi,vn]=i.useState(!1),[wi,kr]=i.useState(!1),[Ce,Pt]=i.useState(null),[ki,bn]=i.useState(!1),[Bt,Ut]=i.useState(0),[Sr,Si]=i.useState(0),ft=i.useMemo(()=>URL.createObjectURL(new Blob([vo(c,{screenshot:!0})],{type:"text/html"})),[c,Sr]),Ht=i.useRef(null);i.useEffect(()=>{Ht.current&&Ht.current!==ft&&URL.revokeObjectURL(Ht.current),Ht.current=ft},[ft]);const[B,Cr]=i.useState(!1),[ee,zt]=i.useState(null),fe=fd(e??"",!!e),le=Io(e??"",B?(ee==null?void 0:ee.sha)??null:null);i.useEffect(()=>{!B||!fe.data||(ee&&!fe.data.some(d=>d.sha===ee.sha)?zt(fe.data[0]??null):!ee&&fe.data.length>0&&zt(fe.data[0]))},[B,ee,fe.data]);function Vt(){Cr(!1),zt(null),xn("preview"),yn("previous")}const[Te,xn]=i.useState("preview"),[He,yn]=i.useState("previous"),Er=B&&ee&&fe.data?fe.data.findIndex(d=>d.sha===ee.sha):-1,It=Er>=0?((zr=fe.data)==null?void 0:zr[Er+1])??null:null,Gt=Io(e??"",B&&Te==="diff"&&He==="previous"?(It==null?void 0:It.sha)??null:null),[Rr,Pr]=i.useState(!1),wn=i.useRef(null);i.useEffect(()=>()=>{wn.current&&clearTimeout(wn.current)},[]);function Ci(){Rr||(Pr(!0),fe.refetch().finally(()=>{wn.current=setTimeout(()=>Pr(!1),2e3)}))}const Tt=i.useMemo(()=>le.data===void 0?null:URL.createObjectURL(new Blob([vo(le.data)],{type:"text/html"})),[le.data]),Wt=i.useRef(null);i.useEffect(()=>{Wt.current&&Wt.current!==Tt&&URL.revokeObjectURL(Wt.current),Wt.current=Tt},[Tt]);const qt=i.useRef(null),Kt=i.useRef([]),Ir=i.useRef(0);i.useEffect(()=>{Kt.current=[],Ir.current=Date.now()},[ft]);const Ei=i.useRef(0),jt=i.useRef(new Map),kn=i.useRef(!1),Tr=i.useRef(B);i.useEffect(()=>{Tr.current=B},[B]),i.useEffect(()=>{kn.current=!1;const d=jt.current;d.forEach(k=>{window.clearTimeout(k.timer),k.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),d.clear()},[ft,Z,B]),i.useEffect(()=>{function d(k){var te;if(k.source!==((te=qt.current)==null?void 0:te.contentWindow))return;const C=k.data;if(!C)return;if(C.type==="aero-dom-ready"){kn.current=!0;return}if(C.type==="aero-dom-op-result"&&typeof C.id=="number"){const $=jt.current.get(C.id);if(!$)return;jt.current.delete(C.id),window.clearTimeout($.timer);const H=typeof C.generation=="number"?C.generation:null;$.resolve(C.ok?{ok:!0,result:C.result,generation:H}:{ok:!1,error:C.error||"the action failed",generation:H});return}if(C.type!=="aero-console"||typeof C.ts=="number"&&C.ts<Ir.current)return;const D=C.level==="info"||C.level==="warn"||C.level==="error"?C.level:"log",U=Kt.current;U.push({level:D,text:typeof C.text=="string"?C.text:"",ts:C.ts??Date.now()}),U.length>300&&U.splice(0,U.length-300)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]);async function Ri(d,k,C){var H;Tr.current&&Vt(),Fe(!1);const D=Date.now()+1e4;for(;!kn.current||!((H=qt.current)!=null&&H.contentWindow);){if(Date.now()>D)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(Y=>setTimeout(Y,50))}const U=qt.current.contentWindow,te=++Ei.current,$=d==="screenshot"?3e4:15e3;return new Promise(Y=>{const mt=window.setTimeout(()=>{jt.current.delete(te),Y({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},$);jt.current.set(te,{resolve:Y,reject:Qt=>Y({ok:!1,error:Qt.message,generation:null}),timer:mt}),U.postMessage({type:"aero-dom-op",id:te,op:d,args:k,generation:C},"*")})}const he=i.useRef(c),je=d=>{he.current=d,u(d)},Ae=i.useRef(vt),ze=i.useRef(null),Yt=i.useRef(_t),Sn=i.useRef(null),jr=i.useRef(null),Ar=i.useRef(null),et=i.useRef(null),Cn=i.useRef(Vo);i.useEffect(()=>{let d=!0;return xa().then(k=>po(k).then(C=>{d&&(Cn.current=C)})).catch(()=>{}),ya().then(k=>po(k).then(C=>{d&&(Cn.current=C)})).catch(()=>{}),()=>{d=!1}},[]);const xe=ln({queryKey:["ai-models"],queryFn:Ya,staleTime:300*1e3,retry:!1,refetchInterval:d=>Xa(d.state.error)}),Mr=ln({queryKey:["zen-models"],queryFn:Qa,staleTime:300*1e3,retry:!1}),tt=Mr.data??[],Ve=!xe.isPending&&!Mr.isPending,Pi=!!((Vr=xe.data)!=null&&Vr.project_id),Ge=tt.find(d=>d.id===h),nt=!!h&&wa(h)==="zen",At=ka(h),rt=nt?Sa((Ge==null?void 0:Ge.reasoning_efforts)??[]):[...kd],Ii=rt.join(",");i.useEffect(()=>{!Ve||rt.length===0||rt.includes(v)||m("off")},[Ii,v,Ve]),i.useEffect(()=>{var d;!Ve||h||p(Ca(((d=xe.data)==null?void 0:d.models)??[],tt))},[Ve,h]);const ye=!!h&&(!Ve||(((Gr=xe.data)==null?void 0:Gr.models)??[]).includes(h)||tt.some(d=>d.id===h));i.useEffect(()=>{let d=!1;return dt(null),Be(null),Pt(null),bn(!1),x.current=null,E.current=null,ze.current=null,(async()=>{const k=await to(t).catch(()=>{});if(d)return;let C=_t;if(k&&(je(k.html),Ae.current=k.html,C=Ea(k.contents),g(C),Yt.current=C,Ut(no(C)),k.model&&p(k.model),k.thinking&&m(k.thinking),w(Ra(k.disabledTools,k.knownTools)),x.current=k.zenSessionId??null),e)try{const D=await xt.getPage(e);if(d)return;Ue(D.url),wr(zi(D.visibility)),dt(D.html),ze.current=D.updated_at;const{html:U,supersededLocal:te}=xl(k,D);je(U),Ae.current=U,k&&te!==null&&(Be(te),Jt({...k,html:U,contents:C,basedOnUpdatedAt:D.updated_at,updatedAt:0}).catch(()=>{}))}catch{d||L("Failed to load page.")}d||l(!0)})(),()=>{d=!0}},[t]);const ot=i.useRef(Date.now());i.useEffect(()=>{if(!A)return;ot.current=Date.now(),ie(0);const d=setInterval(()=>ie(Math.round((Date.now()-ot.current)/1e3)),1e3);return()=>clearInterval(d)},[A]);const Nr=()=>{if(nt)return x.current??(x.current=crypto.randomUUID()),x.current},We=(d,k=b)=>{const C=he.current;return Jt({key:t,pageId:e,html:C,contents:d,model:h||null,thinking:v,disabledTools:k,knownTools:Mn(),zenSessionId:x.current??void 0,basedOnUpdatedAt:ze.current??void 0,updatedAt:0}).then(()=>{Ae.current=C,Yt.current=d}).catch(()=>{})},Ee=i.useRef({sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b});Ee.current={sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b};const Dr=i.useRef(A);Dr.current=A,i.useEffect(()=>()=>{if(he.current===Ae.current&&Ee.current.contents===Yt.current)return;const{sessionKey:d,pageId:k,contents:C,model:D,thinking:U,disabledTools:te}=Ee.current;Jt({key:d,pageId:k,html:he.current,contents:C,model:D||null,thinking:U,disabledTools:te,knownTools:Mn(),zenSessionId:x.current??void 0,basedOnUpdatedAt:ze.current??void 0,updatedAt:0}).catch(()=>{})},[]);const En=!nt,Ti=En&&(P.length>0||f.some(d=>d.parts.some(k=>k.inlineData))),ht=i.useMemo(()=>jo(f,P,S),[f,P,S]),ji=En&&ht>gt,_r=ht/gt>=Sd,Lr=Bt/At>=Cd,Or=Math.max(0,100-Math.round(Bt/At*100)),Fr=At>=1e6?`${Math.round(At/1e6)}M`:`${Math.round(At/1e3)}K`;async function $r(d){var Qt;const k=d===void 0,C=(d??S).trim(),D=k?P:[];if(!C&&D.length===0||A||!ye)return;const U=k?ht:jo(f,D,C);if(En&&U>gt){L(`This message is too large to send (~${it(U)} — Gemini's inline-request limit is ~${it(gt)}). `+(D.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(C.startsWith("/")){const Ne=C.split(/\s+/)[0];if(!Na(No,Ne)){L(`Unknown command: ${Ne} — available: /compact`);return}}const te=Da(C);if(te){R(""),await Ni(te.instructions);return}const $=[_a()];for(const Ne of D)$.push(La(Ne.name,Ne.mimeType)),$.push(Ne.kind==="inline"?{inlineData:{mimeType:Ne.mimeType,data:Ne.data??""}}:{text:Ne.text??""});C&&$.push({text:C});const H=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(C),Y=/\bdeck-container\b|class="slide slide--/.test(he.current);he.current===vt?$.push(Dn(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${H?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):Y?$.push(Dn("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):H&&$.push(Dn("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const mt=[...f,{role:"user",parts:$}];(Qt=Sn.current)==null||Qt.followOutput(),g(mt),k&&(R(""),j([])),wl(),await Br(mt)}async function Br(d){const k=new AbortController;et.current=k,G(!0),O(""),X(""),L(null),ae(!1),pe(null);const C=Ee.current.sessionKey;Pt(null);const D=he.current,U=Date.now(),te=Nr();try{const $=await Ha({model:h,contents:d,html:()=>he.current,skills:Cn.current,pageId:e,consoleLogs:()=>Kt.current,domOp:Ri,generationConfig:Mo(v,h),thinking:v,zenModelInfo:Ge,zenSession:te,hasGoogleProject:Pi,disabledTools:b,signal:k.signal,callbacks:{onText:H=>{ot.current=Date.now(),pe(null),O(Y=>Y+H)},onThought:H=>{ot.current=Date.now(),pe(null),X(Y=>Y+H)},onUsage:H=>{const Y=H.totalTokenCount??H.promptTokenCount;typeof Y=="number"&&Ut(Y)},onTool:(H,Y)=>{ot.current=Date.now(),pe(null),M({name:H,detail:Y})},onHtml:H=>je(H),onContents:H=>{ot.current=Date.now(),M(null),g(H),O(""),X("")},onStreamReset:()=>{O(""),X(""),pe(null)},onRetry:(H,Y,mt)=>{ot.current=Date.now(),pe({attempt:H,max:Y,deadline:Date.now()+mt*1e3})}}});g($),await We($),Date.now()-U>1e4&&go({ok:!0});try{await Mi($,D,C,k.signal)}catch{}}catch($){if($ instanceof DOMException&&$.name==="AbortError")await We(Ee.current.contents);else{const H=$ instanceof st?za($.body):null,Y=$ instanceof st?$.message==="reauth_required"?"Your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":H?H.message:`AI request failed: ${$.message}`:"AI request failed.";H&&be(H),L(Y),ae(!($ instanceof st&&$.message==="reauth_required")),go({ok:!1,error:Y}),await We(d)}}finally{et.current===k&&(et.current=null),G(!1),O(""),X(""),M(null),pe(null)}}function Ai(){var d;(d=et.current)==null||d.abort()}async function Xt(){var d;A||!ye||f.length===0||((d=Sn.current)==null||d.followOutput(),await Br(f))}async function Mi(d,k,C,D){if(Ee.current.sessionKey===C&&!Ee.current.disabledTools.includes(Wa)&&!D.aborted&&he.current!==k&&ro(d)){bn(!0);try{const U=await qa({model:h,request:Ka(d),html:he.current,consoleEntries:Kt.current,zenModelInfo:Ge,zenSession:y(),signal:D});U&&Ee.current.sessionKey===C&&Pt(U)}finally{bn(!1)}}}async function Ni(d){if(A||!ye)return;if(f.length===0){L("Nothing to compact — the conversation is empty.");return}const k=new AbortController;et.current=k,G(!0),kr(!0),L(null);try{const C=await Va({model:h,contents:f,instructions:d||void 0,generationConfig:Mo("off",h),zenSession:Nr(),signal:k.signal});await pt(Ga(C))}catch(C){C instanceof DOMException&&C.name==="AbortError"||L(C instanceof st?`Compaction failed: ${C.message}`:"Compaction failed.")}finally{et.current===k&&(et.current=null),G(!1),kr(!1)}}async function pt(d){g(d),Ut(no(d)),await We(d)}async function Di(d){if(A)return;const k=f;if(!(!await o({title:"Delete from history?",body:d.kind==="tool"||d.kind==="grouped-search"?`Removes ${d.refs.length===1?"this tool call and its result":`these ${d.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:d.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||Dr.current||Ee.current.contents!==k))switch(d.kind){case"user":case"compact":await pt(Ba(f,d.contentIndex));break;case"thought":await pt($a(f,d.refs));break;case"tool":case"grouped-search":await pt(Fa(f,d.refs));break;case"assistant":await pt(Oa(f,d.refs));break}}async function _i(d,k){A||d.kind!=="user"&&d.kind!=="assistant"||Ee.current.contents===f&&await pt(Ua(f,d.refs,k))}const Mt=ga({mutationFn:async d=>{const k=he.current;if(e){const D=await xt.patchPage(e,{html:k});return{id:e,isNew:!1,url:null,html:k,visibility:xi,updatedAt:D.updated_at}}const C=await xt.createPage(k,{alias:(d==null?void 0:d.alias)||null,visibility:(d==null?void 0:d.visibility)??"public",grants:(d==null?void 0:d.grants)??[]});return{id:C.id,isNew:!0,url:C.url,html:k,visibility:(d==null?void 0:d.visibility)??"public",updatedAt:C.updated_at}},onSuccess:async({id:d,isNew:k,url:C,html:D,visibility:U,updatedAt:te})=>{if(L(null),vn(!1),wr(U),Ae.current=D,dt(D),ze.current=te??ze.current,Be(null),r.invalidateQueries({queryKey:["pages"]}),r.invalidateQueries({queryKey:["page",d]}),r.invalidateQueries({queryKey:["page-history",d]}),k)await Jt({key:d,pageId:d,html:he.current,contents:f,model:h||null,thinking:v,disabledTools:b,knownTools:Mn(),zenSessionId:x.current??void 0,basedOnUpdatedAt:ze.current??void 0,updatedAt:0}).catch(()=>{}),await Nn("draft").catch(()=>{}),Ue(C),gn({url:C??`/p/${d}`,id:d,isNew:!0,visibility:U});else{const $=Et??`/p/${d}`;Ue($),gn({url:$,id:d,isNew:!1,visibility:U})}},onError:d=>{d instanceof st&&d.body&&typeof d.body=="object"&&"reason"in d.body?L(`Publish failed: ${d.message} (${String(d.body.reason)})`):d instanceof st?L(`Publish failed: ${d.message}`):L("Publish failed.")}});async function Li(){if(await o({title:"Reset builder",body:e?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Nn(t).catch(()=>{}),g(_t),Yt.current=_t,Ut(0),L(null),Pt(null),x.current=null,E.current=null,e)try{const k=await xt.getPage(e);je(k.html),Ae.current=k.html,ze.current=k.updated_at,Be(null)}catch{L("Failed to reload page.")}else je(vt),Ae.current=vt}async function Oi(){if(he.current!==Ae.current){if(!await o({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;Ae.current=he.current}const d=await to("draft").catch(()=>{});d&&(d.contents.length>0||d.html!==vt)&&await o({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&await Nn("draft").catch(()=>{}),n("/")}async function Fi(d){var D;const k=(D=d.target.files)==null?void 0:D[0];if(d.target.value="",!k)return;const C=await k.text();je(C),L(null),We(f)}async function Rn(d){if(d.length===0)return;if(nt){L("Free models cannot read attachments. Switch to a Google model to attach files.");return}const k=[],C=[];for(const D of d){const U=await pl(D);"error"in U?C.push(U.error):k.push(U)}k.length>0&&j(D=>[...D,...k]),C.length>0&&L(C.join(" "))}function $i(d){const k=Array.from(d.target.files??[]);d.target.value="",Rn(k)}const Pn=i.useMemo(()=>Pa(f),[f]),In=((Wr=xe.data)==null?void 0:Wr.models.length)??0,Bi=xe.isError||!!xe.data&&In===0,Me=Ve&&In===0&&tt.length===0,Ur=Bi&&tt.length>0,Tn=xe.error instanceof st?xe.error.message:void 0,Nt=f[f.length-1],Ui=(Nt==null?void 0:Nt.role)==="user"&&Nt.parts.some(Ia),Hr=!A&&!!Nt&&!ro(f)&&!Ui,Hi=((qr=Pn[Pn.length-1])==null?void 0:qr.kind)==="user";return a?s.jsxs("div",{className:"flex h-[calc(100vh-8.5rem)] min-h-[480px] flex-col gap-3",children:[s.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[s.jsxs(io,{value:ye?h:"",onValueChange:p,disabled:A||!Ve,children:[s.jsx(ao,{className:"h-8 w-auto min-w-[9rem] text-[13px]",children:s.jsx(lo,{placeholder:Ve?"select a model":"loading models…"})}),s.jsxs(co,{children:[In>0?s.jsxs(uo,{children:[s.jsx(fo,{children:"Google"}),(Kr=xe.data)==null?void 0:Kr.models.map(d=>s.jsx(_n,{value:d,children:d},d))]}):null,tt.length>0?s.jsxs(uo,{children:[s.jsx(fo,{children:"Free · opencode zen"}),tt.map(d=>s.jsx(_n,{value:d.id,children:d.name},d.id))]}):null]})]}),s.jsxs(io,{value:rt.includes(v)?v:"off",onValueChange:m,disabled:A||rt.length===0,children:[s.jsxs(ao,{className:"h-8 w-auto text-[13px]",title:rt.length>0?"Thinking level — how much the model reasons before answering":Ge!=null&&Ge.reasoning?"This model reasons but offers no thinking-level control":"This model does not support thinking",children:[s.jsx($o,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),s.jsx(lo,{})]}),s.jsx(co,{children:rt.map(d=>s.jsx(_n,{value:d,children:d},d))})]}),s.jsxs("button",{type:"button",onClick:()=>Fe(d=>!d),disabled:B,className:W("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",Z?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[s.jsx(Bo,{className:"h-3.5 w-3.5"})," Code"]}),s.jsxs("div",{className:W("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(Z||B&&Te!=="preview")&&"opacity-50"),children:[s.jsxs("button",{type:"button",onClick:()=>$e("desktop"),disabled:Z||B&&Te!=="preview",title:"Preview at full width",className:W("inline-flex items-center gap-1 rounded-sm px-2 py-1",se==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[s.jsx(na,{className:"h-3.5 w-3.5"})," Desktop"]}),s.jsxs("button",{type:"button",onClick:()=>$e("mobile"),disabled:Z||B&&Te!=="preview",title:"Preview at phone width",className:W("inline-flex items-center gap-1 rounded-sm px-2 py-1",se==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[s.jsx(ra,{className:"h-3.5 w-3.5"})," Mobile"]})]}),s.jsxs("button",{type:"button",onClick:()=>Si(d=>d+1),disabled:Z||B,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(Qr,{className:"h-3.5 w-3.5"})," Reload"]}),s.jsxs("button",{type:"button",onClick:()=>{var d;return(d=jr.current)==null?void 0:d.click()},disabled:A||B,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(oa,{className:"h-3.5 w-3.5"})," Upload"]}),s.jsx("input",{ref:jr,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:Fi}),s.jsxs("button",{type:"button",onClick:Li,disabled:A||B,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(sa,{className:"h-3.5 w-3.5"})," Reset"]}),e?s.jsxs("button",{type:"button",onClick:Oi,disabled:A||B,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[s.jsx(ia,{className:"h-3.5 w-3.5"})," New"]}):null,e?s.jsxs("button",{type:"button",onClick:()=>B?Vt():Cr(!0),title:"Browse previously published versions of this page",className:W("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",B?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[s.jsx(Fo,{className:"h-3.5 w-3.5"})," History"]}):null,s.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[Et?s.jsxs("a",{href:Et,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",s.jsx(aa,{className:"h-3 w-3"})]}):null,s.jsxs(qe,{size:"sm",onClick:()=>e?Mt.mutate(void 0):vn(!0),disabled:A||Mt.isPending||B,children:[Mt.isPending?s.jsx(la,{className:"h-3.5 w-3.5 animate-spin"}):s.jsx(Oo,{className:"h-3.5 w-3.5"}),e?"Publish update":"Publish"]})]})]}),T&&!B?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[s.jsx("span",{className:"min-w-0 flex-1 break-words",children:T}),ue&&!A?s.jsxs("button",{type:"button",onClick:()=>void Xt(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[s.jsx(Qr,{className:"h-3 w-3"})," Retry"]}):null]}):null,Ct!==null&&!B?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),s.jsxs("button",{type:"button",onClick:()=>{je(Ct),Be(null),We(f)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[s.jsx(ca,{className:"h-3 w-3"})," Keep my local copy"]}),s.jsx("button",{type:"button",onClick:()=>Be(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:s.jsx(An,{className:"h-3 w-3"})})]}):null,(Me||Ur)&&!B?s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[Me?"AI is unavailable — ":"Google models are unavailable — ",Tn==="no_project"?s.jsxs(s.Fragment,{children:["no Code Assist project selected for your account."," ",s.jsx(ll,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):Tn==="reauth_required"?"your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":"could not load models. Try again later.",Ur?" Free models are listed in the model picker and need no Google account.":null]}),Tn==="no_project"?s.jsx(Ja,{}):null]}):null,Hr&&!T&&!Hi&&!B?s.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),s.jsxs("button",{type:"button",onClick:()=>void Xt(),disabled:Me||!ye,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[s.jsx(Jr,{className:"h-3 w-3"})," Resume"]})]}):null,s.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[s.jsx("div",{className:W("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",_&&"ring-2 ring-ink"),onDragOver:d=>{B||(d.preventDefault(),I(!0))},onDragLeave:()=>I(!1),onDrop:d=>{B||(d.preventDefault(),I(!1),Rn(Array.from(d.dataTransfer.files)))},children:B?s.jsx(hd,{entries:fe.data,isLoading:fe.isLoading,isError:fe.isError,isFetching:fe.isFetching||Rr,selectedSha:(ee==null?void 0:ee.sha)??null,onSelect:zt,onRefresh:Ci}):s.jsx(Ta,{ref:Sn,chat:Pn,busy:A,streamText:N,streamThought:K,busyLabel:wi?"compacting conversation…":ki?"reviewing the page…":Ed(ce,Ie,Oe),toolActive:ce!==null,retrying:Oe!==null,busyElapsed:Ie,emptyState:s.jsxs(s.Fragment,{children:["Describe the page you want to build.",s.jsx("br",{}),"Aero edits the HTML and you preview it live.",s.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:Rd,afterMessages:Ce?s.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[Ce.kind==="issues"?s.jsx(da,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):Ce.kind==="pass"?s.jsx(Lo,{className:"h-3.5 w-3.5 shrink-0 text-success"}):s.jsx(Ho,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),s.jsx("span",{className:"min-w-0 flex-1",children:Ce.kind==="issues"?s.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",Ce.findings.length===1?"1 thing":`${Ce.findings.length} things`," ","to check"]}):Ce.kind==="pass"?s.jsxs("span",{className:"text-fg-3",children:[s.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):s.jsxs("span",{className:"text-fg-3",children:[s.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),s.jsx("button",{type:"button",onClick:()=>Pt(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:s.jsx(An,{className:"h-3 w-3"})})]}),Ce.kind==="issues"?s.jsxs(s.Fragment,{children:[s.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:Ce.findings.map((d,k)=>s.jsx("li",{className:"list-disc text-fg-2",children:d},k))}),s.jsx("div",{className:"mt-2 pl-5",children:s.jsxs("button",{type:"button",onClick:()=>void $r(Ma(Ce.findings)),disabled:A||Me||!ye,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[s.jsx(Jr,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:Hr,resumeDisabled:Me||!ye,onResume:()=>void Xt(),onSaveItemEdit:(d,k)=>void _i(d,k),onDeleteItem:d=>void Di(d),input:S,onInputChange:R,onSend:()=>void $r(),onStop:Ai,composerDisabled:A||Me||!ye,sendDisabled:Me||!ye||!S.trim()&&P.length===0||ji,placeholder:Me?"AI unavailable":!ye&&xe.data?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:No,composerMeta:s.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[Ti?s.jsx("span",{className:W("tabular truncate",_r&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${it(ht)} of ${it(gt)} — Gemini rejects requests over ~20MB`,children:_r?`${it(ht)} / ${it(gt)}`:it(ht)}):null,s.jsx("span",{className:W("tabular truncate",Lr&&"font-medium text-no-strong"),title:`Approximate context window usage: ${To(Bt)} of ${Fr} tokens (${Or}% left) — ${nt?"free models are held to a 200K-token context":"all Gemini models have a ~1M-token context"}`,children:Lr?`${To(Bt)} / ${Fr}`:`${Or}% left`})]}),attachmentsBar:P.length>0?s.jsx("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:P.map(d=>s.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[d.kind==="inline"&&d.mimeType.startsWith("image/")?s.jsx("img",{src:`data:${d.mimeType};base64,${d.data}`,alt:d.name,className:"h-7 w-7 shrink-0 object-cover"}):s.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:Aa(d.mimeType)}),s.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:d.name,children:d.name}),s.jsx("button",{type:"button",onClick:()=>j(k=>k.filter(C=>C.id!==d.id)),title:"Remove",className:"text-fg-3 hover:text-fg",children:s.jsx(An,{className:"h-3 w-3"})})]},d.id))}):void 0,composerLeading:s.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[s.jsxs(ad,{children:[s.jsx(ld,{asChild:!0,children:s.jsxs(qe,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:W(oo,"relative"),children:[s.jsx(Uo,{className:"h-3.5 w-3.5"}),b.length>0?s.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),s.jsx(gi,{className:"w-60",children:ja.map(d=>s.jsx(vi,{checked:!d.names.some(k=>b.includes(k)),onCheckedChange:k=>{const C=k?b.filter(D=>!d.names.includes(D)):[...new Set([...b,...d.names])];w(C),We(f,C)},children:s.jsxs("span",{className:"flex flex-col",children:[s.jsx("span",{children:d.label}),s.jsx("span",{className:"text-[11px] text-fg-3",children:d.hint})]})},d.id))})]}),nt?null:s.jsxs(s.Fragment,{children:[s.jsx(qe,{variant:"ghost",size:"sm",onClick:()=>{var d;return(d=Ar.current)==null?void 0:d.click()},disabled:A||Me||!ye,title:"Attach a file (image, PDF, audio, video, or text)",className:oo,children:s.jsx(ua,{className:"h-3.5 w-3.5"})}),s.jsx("input",{ref:Ar,type:"file",multiple:!0,hidden:!0,onChange:$i})]})]}),onPasteFiles:d=>void Rn(d)})}),s.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:B?s.jsxs(s.Fragment,{children:[s.jsx(pd,{entry:ee,canRestore:!!ee&&le.data!==void 0,onRestore:()=>{le.data!==void 0&&(je(le.data),We(f)),Vt()},onExit:Vt}),ee?s.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>xn("preview"),className:W("rounded-sm px-2 py-1",Te==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),s.jsx("button",{type:"button",onClick:()=>xn("diff"),className:W("rounded-sm px-2 py-1",Te==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),Te==="diff"?s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>yn("previous"),className:W("rounded-sm px-2 py-1",He==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),s.jsx("button",{type:"button",onClick:()=>yn("draft"),className:W("rounded-sm px-2 py-1",He==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,Te==="diff"&&ee?He==="previous"&&!It?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):He==="previous"&&Gt.isLoading||le.isLoading?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):He==="previous"&&Gt.isError||le.isError?s.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):He==="previous"&&Gt.data!==void 0&&le.data!==void 0?s.jsx(zn,{oldText:Gt.data,newText:le.data,oldLabel:`Version from ${new Date(It.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):He==="draft"&&le.data!==void 0?s.jsx(zn,{oldText:c,newText:le.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):null:Te==="preview"?le.isLoading?s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):le.isError?s.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):Tt?s.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:s.jsx("iframe",{title:"historic version preview",src:Tt,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:W("h-full bg-white",se==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):s.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):Z?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:s.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[s.jsx("button",{type:"button",onClick:()=>ut("code"),className:W("rounded-sm px-2 py-1",ct==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),s.jsx("button",{type:"button",onClick:()=>ut("diff"),disabled:!Ze,title:Ze?void 0:"Diff becomes available once this page has been published",className:W("rounded-sm px-2 py-1 disabled:opacity-50",ct==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),ct==="diff"&&Ze?s.jsx(zn,{oldText:St,newText:c,oldLabel:"Last published version",newLabel:"Current draft"}):s.jsx(i.Suspense,{fallback:s.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:s.jsx(wd,{value:c,onChange:je,language:"html",className:"flex-1 overflow-auto"})})]}):s.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:s.jsx("iframe",{ref:qt,title:"preview",src:ft,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:W("h-full bg-white",se==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},Sr)})})]}),yi?s.jsx(dd,{initialAlias:pn,busy:Mt.isPending,onCancel:()=>vn(!1),onPublish:d=>{mn(d.alias),Mt.mutate(d)}}):null,Rt?s.jsx(ud,{url:Rt.url,isNew:Rt.isNew,visibility:Rt.visibility,onClose:()=>{const d=Rt;gn(null),d.isNew&&n(`/builder/${d.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,Je?s.jsx(Za,{info:Je,onEnabled:()=>{be(null),L(null),Xt()},onClose:()=>be(null)}):null]}):s.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{zd as BuilderPage};
