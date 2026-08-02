const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-CMP_bZXg.js","./vendor-react-DRiZfQPp.js","./index-DzCTaqTd.js","./vendor-query-H7OKXOFD.js","./vendor-router-D-ljs26-.js","./index-SKhiqiXX.css"])))=>i.map(i=>d[i]);
var Or=e=>{throw TypeError(e)};var Fr=(e,t,n)=>t.has(e)||Or("Cannot "+n);var F=(e,t,n)=>(Fr(e,t,"read from private field"),n?n.call(e):t.get(e)),yn=(e,t,n)=>t.has(e)?Or("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Rt=(e,t,n,r)=>(Fr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{e as V,B as He,u as yo,a as ht,d as Rs,A as Je,_ as Ps}from"./index-DzCTaqTd.js";import{r as s,j as a,R as Ge,h as wo,u as Is,o as Ts,s as Ms,m as As,n as js,p as Ns,q as Ds,t as _s,v as Ls,w as Os,i as Fs,G as xo,H as ko,A as $s,B as So,x as Co,M as Bs,y as Hs,z as $r,I as Us,k as zs,J as Vs,E as Gs,d as Ws,N as qs,W as Eo,O as Ks,X as Ys,Q as Xs,V as Br,Y as Qs,D as Zs,Z as Js}from"./vendor-react-DRiZfQPp.js";import{a as Jt,c as ea,u as ta}from"./vendor-query-H7OKXOFD.js";import{i as Hr,g as na,l as ra,s as oa,p as ia,c as sa,t as aa,d as la,a as Ur,r as ca,e as zr,b as wn,f as xn,h as ua,j as da,C as fa,k as Vr,O as ha,m as pa,n as ma,o as ga,q as va,u as ba,v as kn,w as ya,x as wa,y as xa,z as ka,A as Sa,B as Ca,D as Ea,E as Ra,F as Pa,G as Ia,H as Ta}from"./ChatPanel-DXz3rGwt.js";import{C as Ma,S as Aa}from"./ServiceDisabledModal-CZCqZNWT.js";import{e as B,h as ja,R as Na,L as Gr,I as Da,S as Wr,a as qr,b as Kr,c as Yr,f as Xr,g as Qr,d as Sn}from"./Select-DUEPk8ho.js";import{P as _a,a as La}from"./PublicUrlRow-XSTnWqdR.js";import{e as Oa,u as Fa,c as $a,L as Ba}from"./vendor-router-D-ljs26-.js";const Pt=20*1024*1024;function Ha(e){return e==="application/pdf"||/^(image|audio|video)\//.test(e)}const Ro=/^text\//,Ua=new Set(["application/json","application/xml","application/x-yaml","application/yaml","application/javascript","application/typescript"]);function za(e){return Ro.test(e)||Ua.has(e)}async function Va(e){const t=await e.arrayBuffer();try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch{return null}}function Ga(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error??new Error("read failed")),r.readAsDataURL(e)})}let Zr=0;async function Wa(e){const t=e.type,n=e.name||"file";if(Ha(t)){const o=await Ga(e),i=o.indexOf(",");return{id:String(Zr++),name:n,mimeType:t,size:e.size,kind:"inline",data:i>=0?o.slice(i+1):""}}const r=za(t);if(r||!t||t==="application/octet-stream"){const o=await Va(e);if(o!==null)return{id:String(Zr++),name:n,mimeType:Ro.test(t)?t:"text/plain",size:e.size,kind:"text",text:o};if(r)return{error:`"${n}" is declared as ${t} but isn't valid UTF-8 — Gemini only supports UTF-8 text attachments.`}}return{error:`"${n}" is a format Gemini can't read (${t||"unknown binary type"}).`}}function et(e){return e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/(1024*1024)).toFixed(1)}MB`}const qa='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',Ka=`# aero-database: persistent storage for aero pages

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
`,Ya=`# Aero HTML Slides Style Guide

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
`,Xa=`# aero-ai: calling Gemini from inside an aero page

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
`,Po=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:qa,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:Ka,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:Ya,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:Xa,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]}];async function Jr(e){const t=[...Po],n=new Set(t.map(i=>i.name)),r=i=>i.access==="owner"?0:i.access==="manager"?1:2,o=[...e].sort((i,l)=>r(i)-r(l)||l.updatedAt-i.updatedAt);for(const i of o){if(!i.content.trim())continue;let l=i.name;for(let u=2;n.has(l);u++)l=`${i.name}-${u}`;n.add(l);let c=[];if(!Hr(i.id))try{c=await na(i.id)}catch{}t.push({name:l,description:i.description,content:i.content,source:"remote",id:Hr(i.id)?void 0:i.id,files:i.files,envSchema:i.envSchema,envSet:c,allowedHosts:i.allowedHosts})}return t}const Vt="⬤ ";let Cn=!1;function Qa(){if(Cn||!document.title||document.title.startsWith(Vt))return;Cn=!0,document.title=Vt+document.title;const e=()=>{document.hidden||(document.title.startsWith(Vt)&&(document.title=document.title.slice(Vt.length)),Cn=!1,document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)}let eo=!1;function Za(){eo||typeof Notification>"u"||(eo=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function to(e){if(!document.hidden)return;const t=e.ok?"Aero finished your request":"Aero hit an error",n=e.ok?"The page has been updated — come take a look.":e.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const r=new Notification(t,{body:n,tag:"aero-turn-done"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>r.close(),8e3);return}catch{}Qa()}const Ja=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,el=`<script>(function(){
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
})();<\/script>`,tl=`<script>(function(){
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
})();<\/script>`,nl=`<script>(function(){
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
})();<\/script>`,rl=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Ja.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,ol=`<script>(function(){
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
})();<\/script>`;function no(e,t){const n=nl+el+tl+(t!=null&&t.screenshot?rl:"")+ol,r=e.match(/<head[^>]*>/i);if(!r)return n+e;const o=r.index+r[0].length;return e.slice(0,o)+n+e.slice(o)}var il=Object.defineProperty,qn=(e,t)=>il(e,"name",{value:t,configurable:!0});function jn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}qn(jn,"setRef");function Io(...e){return t=>{let n=!1;const r=e.map(o=>{const i=jn(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():jn(e[o],null)}}}}qn(Io,"composeRefs");function G(...e){return s.useCallback(Io(...e),e)}qn(G,"useComposedRefs");var sl=Object.defineProperty,me=(e,t)=>sl(e,"name",{value:t,configurable:!0});function al(e,t){const n=s.createContext(t);n.displayName=e+"Context";const r=me(i=>{const{children:l,...c}=i,u=s.useMemo(()=>c,Object.values(c));return a.jsx(n.Provider,{value:u,children:l})},"Provider");r.displayName=e+"Provider";function o(i,l={}){const{optional:c=!1}=l,u=s.useContext(n);if(u)return u;if(t!==void 0)return t;if(!c)throw new Error(`\`${i}\` must be used within \`${e}\``)}return me(o,"useContext"),[r,o]}me(al,"createContext");function Ne(e,t=[]){let n=[];function r(i,l){const c=s.createContext(l);c.displayName=i+"Context";const u=n.length;n=[...n,l];const f=me(h=>{var S;const{scope:p,children:v,...m}=h,b=((S=p==null?void 0:p[e])==null?void 0:S[u])||c,w=s.useMemo(()=>m,Object.values(m));return a.jsx(b.Provider,{value:w,children:v})},"Provider");f.displayName=i+"Provider";function g(h,p,v={}){var S;const{optional:m=!1}=v,b=((S=p==null?void 0:p[e])==null?void 0:S[u])||c,w=s.useContext(b);if(w)return w;if(l!==void 0)return l;if(!m)throw new Error(`\`${h}\` must be used within \`${i}\``)}return me(g,"useContext"),[f,g]}me(r,"createContext");const o=me(()=>{const i=n.map(l=>s.createContext(l));return me(function(c){const u=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])},"useScope")},"createScope");return o.scopeName=e,[r,To(o,...t)]}me(Ne,"createContextScope");function To(...e){const t=e[0];if(e.length===1)return t;const n=me(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return me(function(i){const l=r.reduce((c,{useScope:u,scopeName:f})=>{const h=u(i)[`__scope${f}`];return{...c,...h}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return n.scopeName=t.scopeName,n}me(To,"composeContextScopes");var ll=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},cl=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},ul=Object.defineProperty,dl=(e,t)=>ul(e,"name",{value:t,configurable:!0}),ro=Ge[" useEffectEvent ".trim().toString()],oo=Ge[" useInsertionEffect ".trim().toString()];function Mo(e){if(typeof ro=="function")return ro(e);const t=s.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof oo=="function"?oo(()=>{t.current=e}):cl(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}dl(Mo,"useEffectEvent");var fl=Object.defineProperty,Mt=(e,t)=>fl(e,"name",{value:t,configurable:!0}),hl=Ge[" useInsertionEffect ".trim().toString()]||ll;function Kn({prop:e,defaultProp:t,onChange:n=Mt(()=>{},"onChange"),caller:r}){const[o,i,l]=Ao({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:o,f=s.useCallback(g=>{var h;if(c){const p=jo(g)?g(e):g;p!==e&&((h=l.current)==null||h.call(l,p))}else i(g)},[c,e,i,l]);return[u,f]}Mt(Kn,"useControllableState");function Ao({defaultProp:e,onChange:t}){const[n,r]=s.useState(e),o=s.useRef(n),i=s.useRef(t);return hl(()=>{i.current=t},[t]),s.useEffect(()=>{var l;o.current!==n&&((l=i.current)==null||l.call(i,n),o.current=n)},[n,o]),[n,r,i]}Mt(Ao,"useUncontrolledState");function jo(e){return typeof e=="function"}Mt(jo,"isFunction");var io=Symbol("RADIX:SYNC_STATE");function pl(e,t,n,r){const{prop:o,defaultProp:i,onChange:l,caller:c}=t,u=o!==void 0,f=Mo(l),g=[{...n,state:i}];r&&g.push(r);const[h,p]=s.useReducer((w,S)=>{if(S.type===io)return{...w,state:S.state};const y=e(w,S);return u&&!Object.is(y.state,w.state)&&f(y.state),y},...g),v=h.state,m=s.useRef(v);s.useEffect(()=>{m.current!==v&&(m.current=v,u||f(v))},[v,m,u]);const b=s.useMemo(()=>o!==void 0?{...h,state:o}:h,[h,o]);return s.useEffect(()=>{u&&!Object.is(o,h.state)&&p({type:io,state:o})},[o,h.state,u]),[b,p]}Mt(pl,"useControllableStateReducer");var ml=Object.defineProperty,be=(e,t)=>ml(e,"name",{value:t,configurable:!0});function No(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];Nn(o)&&typeof Gt=="function"&&(o=Gt(o._payload)),s.Children.forEach(o,p=>{var v;if(Oo(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Nn(b)&&typeof Gt=="function"&&(b=Gt(b._payload)),l=vl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?Lo(l):void 0,g=G(r,f);if(!l){if(o||o===0)throw new Error(c?wl(e):yl(e));return o}const h=_o(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}be(No,"createSlot");var Do=Symbol.for("radix.slottable");function gl(e){const t=be(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Do,t}be(gl,"createSlottable");var vl=be((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function _o(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}be(_o,"mergeProps");function Lo(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}be(Lo,"getElementRef");function Oo(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Do}be(Oo,"isSlottable");var bl=Symbol.for("react.lazy");function Nn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===bl&&"_payload"in e&&Fo(e._payload)}be(Nn,"isLazyComponent");function Fo(e){return typeof e=="object"&&e!==null&&"then"in e}be(Fo,"isPromiseLike");var yl=be(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),wl=be(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Gt=Ge[" use ".trim().toString()],xl=Object.defineProperty,kl=(e,t)=>xl(e,"name",{value:t,configurable:!0}),Sl=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ee=Sl.reduce((e,t)=>{const n=No(`Primitive.${t}`),r=s.forwardRef((o,i)=>{const{asChild:l,...c}=o,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Yn(e,t){e&&wo.flushSync(()=>e.dispatchEvent(t))}kl(Yn,"dispatchDiscreteCustomEvent");var Cl=Object.defineProperty,ye=(e,t)=>Cl(e,"name",{value:t,configurable:!0});function pt(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];Dn(o)&&typeof Wt=="function"&&(o=Wt(o._payload)),s.Children.forEach(o,p=>{var v;if(Uo(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Dn(b)&&typeof Wt=="function"&&(b=Wt(b._payload)),l=Rl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?Ho(l):void 0,g=G(r,f);if(!l){if(o||o===0)throw new Error(c?Tl(e):Il(e));return o}const h=Bo(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}ye(pt,"createSlot");var $o=Symbol.for("radix.slottable");function El(e){const t=ye(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=$o,t}ye(El,"createSlottable");var Rl=ye((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Bo(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}ye(Bo,"mergeProps");function Ho(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}ye(Ho,"getElementRef");function Uo(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===$o}ye(Uo,"isSlottable");var Pl=Symbol.for("react.lazy");function Dn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Pl&&"_payload"in e&&zo(e._payload)}ye(Dn,"isLazyComponent");function zo(e){return typeof e=="object"&&e!==null&&"then"in e}ye(zo,"isPromiseLike");var Il=ye(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Tl=ye(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Wt=Ge[" use ".trim().toString()],Ml=Object.defineProperty,ne=(e,t)=>Ml(e,"name",{value:t,configurable:!0});function Vo(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=ne(b=>{const{scope:w,children:S}=b,y=s.useRef(null),x=s.useRef(new Map).current;return a.jsx(o,{scope:w,itemMap:x,collectionRef:y,children:S})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=pt(c),f=s.forwardRef((b,w)=>{const{scope:S,children:y}=b,x=i(c,S),k=G(w,x.collectionRef);return a.jsx(u,{ref:k,children:y})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=pt(g),v=s.forwardRef((b,w)=>{const{scope:S,children:y,...x}=b,k=s.useRef(null),R=G(w,k),P=i(g,S);return s.useEffect(()=>(P.itemMap.set(k,{ref:k,...x}),()=>void P.itemMap.delete(k))),a.jsx(p,{[h]:"",ref:R,children:y})});v.displayName=g;function m(b){const w=i(e+"CollectionConsumer",b);return s.useCallback(()=>{const y=w.collectionRef.current;if(!y)return[];const x=Array.from(y.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((P,A)=>x.indexOf(P.ref.current)-x.indexOf(A.ref.current))},[w.collectionRef,w.itemMap])}return ne(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}ne(Vo,"createCollection");var so=new WeakMap,X,he,En=(he=class extends Map{constructor(n){super(n);yn(this,X);Rt(this,X,[...super.keys()]),so.set(this,!0)}set(n,r){return so.get(this)&&(this.has(n)?F(this,X)[F(this,X).indexOf(n)]=n:F(this,X).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=F(this,X).length,c=Xn(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(i?0:1);c<0&&u++;const h=[...F(this,X)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const i=new he(this);return i.insert(n,r,o),i}before(n){const r=F(this,X).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=F(this,X).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=F(this,X).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=F(this,X).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Rt(this,X,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,X).splice(F(this,X).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=Xt(F(this,X),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=Xt(F(this,X),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,X).indexOf(n)}keyAt(n){return Xt(F(this,X),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new he(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new he(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new he(r)}toReversed(){const n=new he;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new he(r)}slice(n,r){const o=new he;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},X=new WeakMap,ne(he,"OrderedDict"),he);function Xt(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=Go(e,t);return n===-1?void 0:e[n]}ne(Xt,"at");function Go(e,t){const n=e.length,r=Xn(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}ne(Go,"toSafeIndex");function Xn(e){return e!==e||e===0?0:Math.trunc(e)}ne(Xn,"toSafeInteger");function Al(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new En,setItemMap:ne(()=>{},"setItemMap")}),l=ne(({state:x,...k})=>x?a.jsx(u,{...k,state:x}):a.jsx(c,{...k}),"CollectionProvider");l.displayName=t;const c=ne(x=>{const k=w();return a.jsx(u,{...x,state:k})},"CollectionInit");c.displayName=t+"Init";const u=ne(x=>{const{scope:k,children:R,state:P}=x,A=s.useRef(null),[I,T]=s.useState(null),K=G(A,T),[U,j]=P;return s.useEffect(()=>{if(!I)return;const L=Ko(()=>{});return L.observe(I,{childList:!0,subtree:!0}),()=>{L.disconnect()}},[I]),a.jsx(o,{scope:k,itemMap:U,setItemMap:j,collectionRef:K,collectionRefObject:A,collectionElement:I,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=pt(f),h=s.forwardRef((x,k)=>{const{scope:R,children:P}=x,A=i(f,R),I=G(k,A.collectionRef);return a.jsx(g,{ref:I,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=pt(p),b=s.forwardRef((x,k)=>{const{scope:R,children:P,...A}=x,I=s.useRef(null),[T,K]=s.useState(null),U=G(k,I,K),j=i(p,R),{setItemMap:L}=j,z=s.useRef(A);Wo(z.current,A)||(z.current=A);const Z=z.current;return s.useEffect(()=>{const le=Z;return L(N=>T?N.has(T)?N.set(T,{...le,element:T}).toSorted(_n):(N.set(T,{...le,element:T}),N.toSorted(_n)):N),()=>{L(N=>!T||!N.has(T)?N:(N.delete(T),new En(N)))}},[T,Z,L]),a.jsx(m,{[v]:"",ref:U,children:P})});b.displayName=p;function w(){return s.useState(new En)}ne(w,"useInitCollection");function S(x){const{itemMap:k}=i(e+"CollectionConsumer",x);return k}return ne(S,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:S,useInitCollection:w}]}ne(Al,"createCollection");function Wo(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}ne(Wo,"shallowEqual");function qo(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}ne(qo,"isElementPreceding");function _n(e,t){return!e[1].element||!t[1].element?0:qo(e[1].element,t[1].element)?-1:1}ne(_n,"sortByDocumentPosition");function Ko(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}ne(Ko,"getChildListObserver");var jl=Object.defineProperty,Nl=(e,t)=>jl(e,"name",{value:t,configurable:!0}),Dl=s.createContext(void 0);function Yo(e){const t=s.useContext(Dl);return e||t||"ltr"}Nl(Yo,"useDirection");var _l=Object.defineProperty,Ll=(e,t)=>_l(e,"name",{value:t,configurable:!0});function Ve(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Ll(Ve,"useCallbackRef");var Ol=Object.defineProperty,te=(e,t)=>Ol(e,"name",{value:t,configurable:!0}),Ln="dismissableLayer.update",Fl="dismissableLayer.pointerDownOutside",$l="dismissableLayer.focusOutside",ao,Xo=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),Bl=s.forwardRef(te(function(t,n){const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:u,onDismiss:f,...g}=t,h=s.useContext(Xo),[p,v]=s.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=s.useState({}),w=G(n,v),S=Array.from(h.layers),[y]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),x=y?S.indexOf(y):-1,k=p?S.indexOf(p):-1,R=h.layersWithOutsidePointerEventsDisabled.size>0,P=k>=x,A=s.useRef(!1),I=Qo(j=>{l==null||l(j),u==null||u(j),j.defaultPrevented||f==null||f()},{ownerDocument:m,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:A,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:s.useCallback(j=>{if(!(j instanceof Node))return!1;const L=[...h.branches].some(z=>z.contains(j));return P&&!L},[h.branches,P])}),T=Zo(j=>{if(o&&A.current)return;const L=j.target;[...h.branches].some(Z=>Z.contains(L))||(c==null||c(j),u==null||u(j),j.defaultPrevented||f==null||f())},m),K=p?k===S.length-1:!1,U=Ve(j=>{j.key==="Escape"&&(i==null||i(j),!j.defaultPrevented&&f&&(j.preventDefault(),f()))});return s.useEffect(()=>{if(K)return m.addEventListener("keydown",U,{capture:!0}),()=>m.removeEventListener("keydown",U,{capture:!0})},[m,K,U]),s.useEffect(()=>{if(p)return r&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(ao=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(p)),h.layers.add(p),On(),()=>{r&&(h.layersWithOutsidePointerEventsDisabled.delete(p),h.layersWithOutsidePointerEventsDisabled.size===0&&(m.body.style.pointerEvents=ao))}},[p,m,r,h]),s.useEffect(()=>()=>{p&&(h.layers.delete(p),h.layersWithOutsidePointerEventsDisabled.delete(p),On())},[p,h]),s.useEffect(()=>{const j=te(()=>b({}),"handleUpdate");return document.addEventListener(Ln,j),()=>document.removeEventListener(Ln,j)},[]),a.jsx(Ee.div,{...g,ref:w,style:{pointerEvents:R?P?"auto":"none":void 0,...t.style},onFocusCapture:B(t.onFocusCapture,T.onFocusCapture),onBlurCapture:B(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:B(t.onPointerDownCapture,I.onPointerDownCapture)})},"DismissableLayer"));function Hl(){const e=s.useContext(Xo),[t,n]=s.useState(null);return s.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}te(Hl,"useDismissableLayerSurface");var Ul=te(()=>!0,"IS_TRUE");function Qo(e,t){const{ownerDocument:n=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:i,shouldHandlePointerDownOutside:l=Ul}=t,c=Ve(e),u=s.useRef(!1),f=s.useRef(!1),g=s.useRef(new Map),h=s.useRef(()=>{});return s.useEffect(()=>{function p(){f.current=!1,o.current=!1,g.current.clear()}te(p,"resetOutsideInteraction");function v(){return Array.from(g.current.values()).some(Boolean)}te(v,"isOutsideInteractionIntercepted");function m(x){if(!f.current)return;const k=x.target;k instanceof Node&&[...i].some(P=>P.contains(k))||g.current.set(x.type,!0),x.type==="click"&&window.setTimeout(()=>{f.current&&h.current()},0)}te(m,"handleInteractionCapture");function b(x){f.current&&g.current.set(x.type,!1)}te(b,"handleInteractionBubble");const w=te(x=>{if(x.target&&!u.current){let k=function(){n.removeEventListener("click",h.current);const P=v();p(),P||Qn(Fl,c,R,{discrete:!0})};if(te(k,"handleAndDispatchPointerDownOutsideEvent"),!l(x.target)){n.removeEventListener("click",h.current),p(),u.current=!1;return}const R={originalEvent:x};f.current=!0,o.current=r&&x.button===0,g.current.clear(),!r||x.button!==0?k():(n.removeEventListener("click",h.current),h.current=k,n.addEventListener("click",h.current,{once:!0}))}else n.removeEventListener("click",h.current),p();u.current=!1},"handlePointerDown"),S=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const x of S)n.addEventListener(x,m,!0),n.addEventListener(x,b);const y=window.setTimeout(()=>{n.addEventListener("pointerdown",w)},0);return()=>{window.clearTimeout(y),n.removeEventListener("pointerdown",w),n.removeEventListener("click",h.current);for(const x of S)n.removeEventListener(x,m,!0),n.removeEventListener(x,b)}},[n,c,r,o,i,l]),{onPointerDownCapture:te(()=>u.current=!0,"onPointerDownCapture")}}te(Qo,"usePointerDownOutside");function Zo(e,t=globalThis==null?void 0:globalThis.document){const n=Ve(e),r=s.useRef(!1);return s.useEffect(()=>{const o=te(i=>{i.target&&!r.current&&Qn($l,n,{originalEvent:i},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:te(()=>r.current=!0,"onFocusCapture"),onBlurCapture:te(()=>r.current=!1,"onBlurCapture")}}te(Zo,"useFocusOutside");function On(){const e=new CustomEvent(Ln);document.dispatchEvent(e)}te(On,"dispatchUpdate");function Qn(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Yn(o,i):o.dispatchEvent(i)}te(Qn,"handleAndDispatchCustomEvent");var zl=Object.defineProperty,Zn=(e,t)=>zl(e,"name",{value:t,configurable:!0}),qt=0,Ce=null;function Vl(e){return Jn(),e.children}Zn(Vl,"FocusGuards");function Jn(){s.useEffect(()=>{Ce||(Ce={start:Fn(),end:Fn()});const{start:e,end:t}=Ce;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),qt++,()=>{qt===1&&(Ce==null||Ce.start.remove(),Ce==null||Ce.end.remove(),Ce=null),qt=Math.max(0,qt-1)}},[])}Zn(Jn,"useFocusGuards");function Fn(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Zn(Fn,"createFocusGuard");var Gl=Object.defineProperty,ce=(e,t)=>Gl(e,"name",{value:t,configurable:!0}),Rn="focusScope.autoFocusOnMount",Pn="focusScope.autoFocusOnUnmount",lo={bubbles:!1,cancelable:!0},Wl=s.forwardRef(ce(function(t,n){const{loop:r=!1,trapped:o=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...c}=t,[u,f]=s.useState(null),g=Ve(i),h=Ve(l),p=s.useRef(null),v=G(n,f),m=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(o){let w=function(k){if(m.paused||!u)return;const R=k.target;u.contains(R)?p.current=R:Ae(p.current,{select:!0})},S=function(k){if(m.paused||!u)return;const R=k.relatedTarget;R!==null&&(u.contains(R)||Ae(p.current,{select:!0}))},y=function(k){if(document.activeElement===document.body)for(const P of k)P.removedNodes.length>0&&Ae(u)};ce(w,"handleFocusIn"),ce(S,"handleFocusOut"),ce(y,"handleMutations"),document.addEventListener("focusin",w),document.addEventListener("focusout",S);const x=new MutationObserver(y);return u&&x.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",w),document.removeEventListener("focusout",S),x.disconnect()}}},[o,u,m.paused]),s.useEffect(()=>{if(u){co.add(m);const w=document.activeElement;if(!u.contains(w)){const y=new CustomEvent(Rn,lo);u.addEventListener(Rn,g),u.dispatchEvent(y),y.defaultPrevented||(Jo(oi(er(u)),{select:!0}),document.activeElement===w&&Ae(u))}return()=>{u.removeEventListener(Rn,g),setTimeout(()=>{const y=new CustomEvent(Pn,lo);u.addEventListener(Pn,h),u.dispatchEvent(y),y.defaultPrevented||Ae(w??document.body,{select:!0}),u.removeEventListener(Pn,h),co.remove(m)},0)}}},[u,g,h,m]);const b=s.useCallback(w=>{if(!r&&!o||m.paused)return;const S=w.key==="Tab"&&!w.altKey&&!w.ctrlKey&&!w.metaKey,y=document.activeElement;if(S&&y){const x=w.currentTarget,[k,R]=ei(x);k&&R?!w.shiftKey&&y===R?(w.preventDefault(),r&&Ae(k,{select:!0})):w.shiftKey&&y===k&&(w.preventDefault(),r&&Ae(R,{select:!0})):y===x&&w.preventDefault()}},[r,o,m.paused]);return a.jsx(Ee.div,{tabIndex:-1,...c,ref:v,onKeyDown:b})},"FocusScope"));function Jo(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ae(r,{select:t}),document.activeElement!==n)return}ce(Jo,"focusFirst");function ei(e){const t=er(e),n=$n(t,e),r=$n(t.reverse(),e);return[n,r]}ce(ei,"getTabbableEdges");function er(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ce(r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}ce(er,"getTabbableCandidates");function $n(e,t){const n=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):ti(r,{upTo:t})))return r}ce($n,"findVisible");function ti(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}ce(ti,"isHidden");function ni(e){return e instanceof HTMLInputElement&&"select"in e}ce(ni,"isSelectableInput");function Ae(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ni(e)&&t&&e.select()}}ce(Ae,"focus");var co=ri();function ri(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Bn(e,t),e.unshift(t)},remove(t){var n;e=Bn(e,t),(n=e[0])==null||n.resume()}}}ce(ri,"createFocusScopesStack");function Bn(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}ce(Bn,"arrayRemove");function oi(e){return e.filter(t=>t.tagName!=="A")}ce(oi,"removeLinks");var ql=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Kl=Object.defineProperty,Yl=(e,t)=>Kl(e,"name",{value:t,configurable:!0}),Xl=Ge[" useId ".trim().toString()]||(()=>{}),Ql=0;function en(e){const[t,n]=s.useState(Xl());return ql(()=>{e||n(r=>r??String(Ql++))},[e]),e||(t?`radix-${t}`:"")}Yl(en,"useId");var Qt=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Zl=Object.defineProperty,Jl=(e,t)=>Zl(e,"name",{value:t,configurable:!0});function ii(e){const[t,n]=s.useState(void 0);return Qt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,c;if("borderBoxSize"in i){const u=i.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}Jl(ii,"useSize");var ec=Object.defineProperty,Ue=(e,t)=>ec(e,"name",{value:t,configurable:!0}),si="Popper",[ai,li]=Ne(si),[tc,ci]=ai(si),nc=Ue(e=>{const{__scopePopper:t,children:n}=e,[r,o]=s.useState(null),[i,l]=s.useState(void 0);return a.jsx(tc,{scope:t,anchor:r,onAnchorChange:o,placementState:i,setPlacementState:l,children:n})},"Popper"),rc="PopperAnchor",oc=s.forwardRef(Ue(function(t,n){const{__scopePopper:r,virtualRef:o,...i}=t,l=ci(rc,r),c=s.useRef(null),u=l.onAnchorChange,f=s.useCallback(b=>{c.current=b,b&&u(b)},[u]),g=G(n,f),h=s.useRef(null);s.useEffect(()=>{if(!o)return;const b=h.current;h.current=o.current,b!==h.current&&u(h.current)});const p=l.placementState&&nn(l.placementState),v=p==null?void 0:p[0],m=p==null?void 0:p[1];return o?null:a.jsx(Ee.div,{"data-radix-popper-side":v,"data-radix-popper-align":m,...i,ref:g})},"PopperAnchor")),ui="PopperContent",[ic,md]=ai(ui),sc=s.forwardRef(Ue(function(t,n){var _e,se,Pe,vt,rt,ot,jt;const{__scopePopper:r,side:o="bottom",sideOffset:i=0,align:l="center",alignOffset:c=0,arrowPadding:u=0,avoidCollisions:f=!0,collisionBoundary:g=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:v=!1,updatePositionStrategy:m="optimized",onPlaced:b,...w}=t,S=ci(ui,r),[y,x]=s.useState(null),k=G(n,x),[R,P]=s.useState(null),A=ii(R),I=(A==null?void 0:A.width)??0,T=(A==null?void 0:A.height)??0,K=o+(l!=="center"?"-"+l:""),U=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},j=Array.isArray(g)?g:[g],L=j.length>0,z={padding:U,boundary:j.filter(di),altBoundary:L},{refs:Z,floatingStyles:le,placement:N,isPositioned:xe,middlewareData:_}=Is({strategy:"fixed",placement:K,whileElementsMounted:Ue((...bt)=>Ls(...bt,{animationFrame:m==="always"}),"whileElementsMounted"),elements:{reference:S.anchor},middleware:[Ts({mainAxis:i+T,alignmentAxis:c}),f&&Ms({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?As():void 0,...z}),f&&js({...z}),Ns({...z,apply:Ue(({elements:bt,rects:it,availableWidth:yt,availableHeight:sn})=>{const{width:Nt,height:We}=it.reference,Le=bt.floating.style;Le.setProperty("--radix-popper-available-width",`${yt}px`),Le.setProperty("--radix-popper-available-height",`${sn}px`),Le.setProperty("--radix-popper-anchor-width",`${Nt}px`),Le.setProperty("--radix-popper-anchor-height",`${We}px`)},"apply")}),R&&Ds({element:R,padding:u}),ac({arrowWidth:I,arrowHeight:T}),v&&_s({strategy:"referenceHidden",...z,boundary:L?z.boundary:void 0})]}),M=S.setPlacementState;Qt(()=>(M(N),()=>{M(void 0)}),[N,M]);const[J,ie]=nn(N),Y=Ve(b);Qt(()=>{xe&&(Y==null||Y())},[xe,Y]);const De=(_e=_.arrow)==null?void 0:_e.x,Re=(se=_.arrow)==null?void 0:se.y,ue=((Pe=_.arrow)==null?void 0:Pe.centerOffset)!==0,[ke,fe]=s.useState();return Qt(()=>{y&&fe(window.getComputedStyle(y).zIndex)},[y]),a.jsx("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...le,transform:xe?le.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ke,"--radix-popper-transform-origin":[(vt=_.transformOrigin)==null?void 0:vt.x,(rt=_.transformOrigin)==null?void 0:rt.y].join(" "),...((ot=_.hide)==null?void 0:ot.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:a.jsx(ic,{scope:r,placedSide:J,placedAlign:ie,onArrowChange:P,arrowX:De,arrowY:Re,shouldHideArrow:ue,children:a.jsx(Ee.div,{"data-side":J,"data-align":ie,...w,ref:k,style:{...w.style,animation:xe?(jt=w.style)==null?void 0:jt.animation:"none"}})})})},"PopperContent"));function di(e){return e!==null}Ue(di,"isNotNull");var ac=Ue(e=>({name:"transformOrigin",options:e,fn(t){var w,S,y;const{placement:n,rects:r,middlewareData:o}=t,l=((w=o.arrow)==null?void 0:w.centerOffset)!==0,c=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[f,g]=nn(n),h={start:"0%",center:"50%",end:"100%"}[g],p=(((S=o.arrow)==null?void 0:S.x)??0)+c/2,v=(((y=o.arrow)==null?void 0:y.y)??0)+u/2;let m="",b="";return f==="bottom"?(m=l?h:`${p}px`,b=`${-u}px`):f==="top"?(m=l?h:`${p}px`,b=`${r.floating.height+u}px`):f==="right"?(m=`${-u}px`,b=l?h:`${v}px`):f==="left"&&(m=`${r.floating.width+u}px`,b=l?h:`${v}px`),{data:{x:m,y:b}}}}),"transformOrigin");function nn(e){const[t,n="center"]=e.split("-");return[t,n]}Ue(nn,"getSideAndAlignFromPlacement");var lc=nc,cc=oc,uc=sc,dc=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},fc=Object.defineProperty,hc=(e,t)=>fc(e,"name",{value:t,configurable:!0}),pc=s.forwardRef(hc(function(t,n){var u;const{container:r,...o}=t,[i,l]=s.useState(!1);dc(()=>l(!0),[]);const c=r||i&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?wo.createPortal(a.jsx(Ee.div,{...o,ref:n}),c):null},"Portal")),uo=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},mc=Object.defineProperty,je=(e,t)=>mc(e,"name",{value:t,configurable:!0});function fi(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}je(fi,"useStateMachine");var tr=je(e=>{const{present:t,children:n}=e,r=hi(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=pi(r.ref,mi(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null},"Presence");function hi(e){const[t,n]=s.useState(),r=s.useRef(null),o=s.useRef(e),i=s.useRef("none"),l=s.useRef(void 0),c=e?"mounted":"unmounted",[u,f]=fi(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{u==="mounted"?(i.current=l.current??ft(r.current),l.current=void 0):i.current="none"},[u]),uo(()=>{const g=r.current,h=o.current;if(h!==e){const v=i.current,m=ft(g);e?(l.current=m,f("MOUNT")):m==="none"||(g==null?void 0:g.display)==="none"?f("UNMOUNT"):f(h&&v!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),uo(()=>{if(t){let g;const h=t.ownerDocument.defaultView??window,p=je(m=>{const w=ft(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&w&&(f("ANIMATION_END"),!o.current)){const S=t.style.animationFillMode;t.style.animationFillMode="forwards",g=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=S)})}},"handleAnimationEnd"),v=je(m=>{m.target===t&&(i.current=ft(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(g),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(g=>{if(g){const h=getComputedStyle(g);r.current=h,l.current=ft(h)}else r.current=null;n(g)},[])}}je(hi,"usePresence");function Hn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}je(Hn,"setRef");function pi(...e){const t=s.useRef(e);return t.current=e,s.useCallback(n=>{const r=t.current;let o=!1;const i=r.map(l=>{const c=Hn(l,n);return!o&&typeof c=="function"&&(o=!0),c});if(o)return()=>{for(let l=0;l<i.length;l++){const c=i[l];typeof c=="function"?c():Hn(r[l],null)}}},[])}je(pi,"useStableComposedRefs");function ft(e){return(e==null?void 0:e.animationName)||"none"}je(ft,"getAnimationName");function mi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}je(mi,"getElementRef");var gc=Object.defineProperty,we=(e,t)=>gc(e,"name",{value:t,configurable:!0});function It(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];Un(o)&&typeof Kt=="function"&&(o=Kt(o._payload)),s.Children.forEach(o,p=>{var v;if(yi(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Un(b)&&typeof Kt=="function"&&(b=Kt(b._payload)),l=bc(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?bi(l):void 0,g=G(r,f);if(!l){if(o||o===0)throw new Error(c?xc(e):wc(e));return o}const h=vi(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}we(It,"createSlot");var gi=Symbol.for("radix.slottable");function vc(e){const t=we(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=gi,t}we(vc,"createSlottable");var bc=we((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function vi(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}we(vi,"mergeProps");function bi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}we(bi,"getElementRef");function yi(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===gi}we(yi,"isSlottable");var yc=Symbol.for("react.lazy");function Un(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===yc&&"_payload"in e&&wi(e._payload)}we(Un,"isLazyComponent");function wi(e){return typeof e=="object"&&e!==null&&"then"in e}we(wi,"isPromiseLike");var wc=we(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),xc=we(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Kt=Ge[" use ".trim().toString()],kc=Object.defineProperty,re=(e,t)=>kc(e,"name",{value:t,configurable:!0});function xi(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=re(b=>{const{scope:w,children:S}=b,y=s.useRef(null),x=s.useRef(new Map).current;return a.jsx(o,{scope:w,itemMap:x,collectionRef:y,children:S})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=It(c),f=s.forwardRef((b,w)=>{const{scope:S,children:y}=b,x=i(c,S),k=G(w,x.collectionRef);return a.jsx(u,{ref:k,children:y})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=It(g),v=s.forwardRef((b,w)=>{const{scope:S,children:y,...x}=b,k=s.useRef(null),R=G(w,k),P=i(g,S);return s.useEffect(()=>(P.itemMap.set(k,{ref:k,...x}),()=>void P.itemMap.delete(k))),a.jsx(p,{[h]:"",ref:R,children:y})});v.displayName=g;function m(b){const w=i(e+"CollectionConsumer",b);return s.useCallback(()=>{const y=w.collectionRef.current;if(!y)return[];const x=Array.from(y.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((P,A)=>x.indexOf(P.ref.current)-x.indexOf(A.ref.current))},[w.collectionRef,w.itemMap])}return re(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}re(xi,"createCollection");var fo=new WeakMap,Q,pe,In=(pe=class extends Map{constructor(n){super(n);yn(this,Q);Rt(this,Q,[...super.keys()]),fo.set(this,!0)}set(n,r){return fo.get(this)&&(this.has(n)?F(this,Q)[F(this,Q).indexOf(n)]=n:F(this,Q).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=F(this,Q).length,c=nr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(i?0:1);c<0&&u++;const h=[...F(this,Q)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],w=p;p=this.get(b),this.delete(b),this.set(b,w)}return this}with(n,r,o){const i=new pe(this);return i.insert(n,r,o),i}before(n){const r=F(this,Q).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=F(this,Q).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=F(this,Q).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=F(this,Q).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Rt(this,Q,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,Q).splice(F(this,Q).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=Zt(F(this,Q),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=Zt(F(this,Q),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,Q).indexOf(n)}keyAt(n){return Zt(F(this,Q),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new pe(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new pe(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new pe(r)}toReversed(){const n=new pe;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new pe(r)}slice(n,r){const o=new pe;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},Q=new WeakMap,re(pe,"OrderedDict"),pe);function Zt(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=ki(e,t);return n===-1?void 0:e[n]}re(Zt,"at");function ki(e,t){const n=e.length,r=nr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}re(ki,"toSafeIndex");function nr(e){return e!==e||e===0?0:Math.trunc(e)}re(nr,"toSafeInteger");function Sc(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new In,setItemMap:re(()=>{},"setItemMap")}),l=re(({state:x,...k})=>x?a.jsx(u,{...k,state:x}):a.jsx(c,{...k}),"CollectionProvider");l.displayName=t;const c=re(x=>{const k=w();return a.jsx(u,{...x,state:k})},"CollectionInit");c.displayName=t+"Init";const u=re(x=>{const{scope:k,children:R,state:P}=x,A=s.useRef(null),[I,T]=s.useState(null),K=G(A,T),[U,j]=P;return s.useEffect(()=>{if(!I)return;const L=Ei(()=>{});return L.observe(I,{childList:!0,subtree:!0}),()=>{L.disconnect()}},[I]),a.jsx(o,{scope:k,itemMap:U,setItemMap:j,collectionRef:K,collectionRefObject:A,collectionElement:I,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=It(f),h=s.forwardRef((x,k)=>{const{scope:R,children:P}=x,A=i(f,R),I=G(k,A.collectionRef);return a.jsx(g,{ref:I,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=It(p),b=s.forwardRef((x,k)=>{const{scope:R,children:P,...A}=x,I=s.useRef(null),[T,K]=s.useState(null),U=G(k,I,K),j=i(p,R),{setItemMap:L}=j,z=s.useRef(A);Si(z.current,A)||(z.current=A);const Z=z.current;return s.useEffect(()=>{const le=Z;return L(N=>T?N.has(T)?N.set(T,{...le,element:T}).toSorted(zn):(N.set(T,{...le,element:T}),N.toSorted(zn)):N),()=>{L(N=>!T||!N.has(T)?N:(N.delete(T),new In(N)))}},[T,Z,L]),a.jsx(m,{[v]:"",ref:U,children:P})});b.displayName=p;function w(){return s.useState(new In)}re(w,"useInitCollection");function S(x){const{itemMap:k}=i(e+"CollectionConsumer",x);return k}return re(S,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:S,useInitCollection:w}]}re(Sc,"createCollection");function Si(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}re(Si,"shallowEqual");function Ci(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}re(Ci,"isElementPreceding");function zn(e,t){return!e[1].element||!t[1].element?0:Ci(e[1].element,t[1].element)?-1:1}re(zn,"sortByDocumentPosition");function Ei(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}re(Ei,"getChildListObserver");var Cc=Object.defineProperty,Ec=(e,t)=>Cc(e,"name",{value:t,configurable:!0});function Ri(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Ec(Ri,"useCallbackRef");var Rc=Object.defineProperty,Pc=(e,t)=>Rc(e,"name",{value:t,configurable:!0}),Ic=s.createContext(void 0);function Pi(e){const t=s.useContext(Ic);return e||t||"ltr"}Pc(Pi,"useDirection");var Tc=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Mc=Object.defineProperty,rr=(e,t)=>Mc(e,"name",{value:t,configurable:!0}),Tn=!1;function Ii(){const[e,t]=s.useState(Tn);return s.useEffect(()=>{Tn||(Tn=!0,t(!0))},[]),e}rr(Ii,"useIsHydrated");var Ti=Ge[" useSyncExternalStore ".trim().toString()];function Mi(){return()=>{}}rr(Mi,"subscribe");function Ai(){return Ti(Mi,()=>!0,()=>!1)}rr(Ai,"useIsHydratedModern");var Ac=typeof Ti=="function"?Ai:Ii,jc=Object.defineProperty,tt=(e,t)=>jc(e,"name",{value:t,configurable:!0}),Mn="rovingFocusGroup.onEntryFocus",Nc={bubbles:!1,cancelable:!0},rn="RovingFocusGroup",[Vn,ji,Dc]=xi(rn),[_c,Ni]=Ne(rn,[Dc]),[Lc,Oc]=_c(rn),Fc=s.forwardRef(tt(function(t,n){return a.jsx(Vn.Provider,{scope:t.__scopeRovingFocusGroup,children:a.jsx(Vn.Slot,{scope:t.__scopeRovingFocusGroup,children:a.jsx($c,{...t,ref:n})})})},"RovingFocusGroup")),$c=s.forwardRef(tt(function(t,n){const{__scopeRovingFocusGroup:r,orientation:o,loop:i=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:f,onEntryFocus:g,preventScrollOnEntryFocus:h=!1,...p}=t,v=s.useRef(null),m=G(n,v),b=Pi(l),[w,S]=Kn({prop:c,defaultProp:u??null,onChange:f,caller:rn}),[y,x]=s.useState(!1),k=Ri(g),R=ji(r),P=s.useRef(!1),[A,I]=s.useState(0);return s.useEffect(()=>{const T=v.current;if(T)return T.addEventListener(Mn,k),()=>T.removeEventListener(Mn,k)},[k]),a.jsx(Lc,{scope:r,orientation:o,dir:b,loop:i,currentTabStopId:w,onItemFocus:s.useCallback(T=>S(T),[S]),onItemShiftTab:s.useCallback(()=>x(!0),[]),onFocusableItemAdd:s.useCallback(()=>I(T=>T+1),[]),onFocusableItemRemove:s.useCallback(()=>I(T=>T-1),[]),children:a.jsx(Ee.div,{tabIndex:y||A===0?-1:0,"data-orientation":o,...p,ref:m,style:{outline:"none",...t.style},onMouseDown:B(t.onMouseDown,()=>{P.current=!0}),onFocus:B(t.onFocus,T=>{const K=!P.current;if(T.target===T.currentTarget&&K&&!y){const U=new CustomEvent(Mn,Nc);if(T.currentTarget.dispatchEvent(U),!U.defaultPrevented){const j=R().filter(N=>N.focusable),L=j.find(N=>N.active),z=j.find(N=>N.id===w),le=[L,z,...j].filter(Boolean).map(N=>N.ref.current);or(le,h)}}P.current=!1}),onBlur:B(t.onBlur,()=>x(!1))})})},"RovingFocusGroupImpl")),Bc="RovingFocusGroupItem",Hc=s.forwardRef(tt(function(t,n){const{__scopeRovingFocusGroup:r,focusable:o=!0,active:i=!1,tabStopId:l,children:c,...u}=t,f=en(),g=l||f,h=Oc(Bc,r),p=h.currentTabStopId===g,v=ji(r),{onFocusableItemAdd:m,onFocusableItemRemove:b,currentTabStopId:w}=h,S=Ac();return Tc(()=>{if(!(!S||!o))return m(),()=>b()},[S,o,m,b]),s.useEffect(()=>{if(!(S||!o))return m(),()=>b()},[S,o,m,b]),a.jsx(Vn.ItemSlot,{scope:r,id:g,focusable:o,active:i,children:a.jsx(Ee.span,{tabIndex:p?0:-1,"data-orientation":h.orientation,...u,ref:n,onMouseDown:B(t.onMouseDown,y=>{o?h.onItemFocus(g):y.preventDefault()}),onFocus:B(t.onFocus,()=>h.onItemFocus(g)),onKeyDown:B(t.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){h.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const x=_i(y,h.orientation,h.dir);if(x!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let R=v().filter(P=>P.focusable).map(P=>P.ref.current);if(x==="last")R.reverse();else if(x==="prev"||x==="next"){x==="prev"&&R.reverse();const P=R.indexOf(y.currentTarget);R=h.loop?Li(R,P+1):R.slice(P+1)}setTimeout(()=>or(R))}}),children:typeof c=="function"?c({isCurrentTabStop:p,hasTabStop:w!=null}):c})})},"RovingFocusGroupItem")),Uc={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Di(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}tt(Di,"getDirectionAwareKey");function _i(e,t,n){const r=Di(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Uc[r]}tt(_i,"getFocusIntent");function or(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}tt(or,"focusFirst");function Li(e,t){return e.map((n,r)=>e[(t+r)%e.length])}tt(Li,"wrapArray");var zc=Fc,Vc=Hc,Gc=Object.defineProperty,H=(e,t)=>Gc(e,"name",{value:t,configurable:!0}),Wc=["Enter"," "],qc=["ArrowDown","PageUp","Home"],Oi=["ArrowUp","PageDown","End"],Kc=[...qc,...Oi],on="Menu",[Gn,Yc,Xc]=Vo(on),[nt,Fi]=Ne(on,[Xc,li,Ni]),ir=li(),$i=Ni(),[Qc,At]=nt(on),[Zc,sr]=nt(on),Jc=H(e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:l=!0}=e,c=ir(t),[u,f]=s.useState(null),g=s.useRef(!1),h=Ve(i),p=Yo(o);return s.useEffect(()=>{const v=H(()=>{g.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},"handleKeyDown"),m=H(()=>g.current=!1,"handlePointer");return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),s.useEffect(()=>{if(!n)return;const v=H(()=>h(!1),"handleBlur");return window.addEventListener("blur",v),()=>window.removeEventListener("blur",v)},[n,h]),a.jsx(lc,{...c,children:a.jsx(Qc,{scope:t,open:n,onOpenChange:h,content:u,onContentChange:f,children:a.jsx(Zc,{scope:t,onClose:s.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:g,dir:p,modal:l,children:r})})})},"Menu"),eu=s.forwardRef(H(function(t,n){const{__scopeMenu:r,...o}=t,i=ir(r);return a.jsx(cc,{...i,...o,ref:n})},"MenuAnchor")),Bi="MenuPortal",[tu,nu]=nt(Bi,{forceMount:void 0}),ru=H(e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=At(Bi,t);return a.jsx(tu,{scope:t,forceMount:n,children:a.jsx(tr,{present:n||i.open,children:a.jsx(pc,{asChild:!0,container:o,children:r})})})},"MenuPortal"),ze="MenuContent",[ou,Hi]=nt(ze),iu=s.forwardRef(H(function(t,n){const r=nu(ze,t.__scopeMenu),{forceMount:o=r.forceMount,...i}=t,l=At(ze,t.__scopeMenu),c=sr(ze,t.__scopeMenu);return a.jsx(Gn.Provider,{scope:t.__scopeMenu,children:a.jsx(tr,{present:o||l.open,children:a.jsx(Gn.Slot,{scope:t.__scopeMenu,children:c.modal?a.jsx(su,{...i,ref:n}):a.jsx(au,{...i,ref:n})})})})},"MenuContent")),su=s.forwardRef(H(function(t,n){const r=At(ze,t.__scopeMenu),o=s.useRef(null),i=G(n,o);return s.useEffect(()=>{const l=o.current;if(l)return ja(l)},[]),a.jsx(Ui,{...t,ref:i,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:B(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentModal")),au=s.forwardRef(H(function(t,n){const r=At(ze,t.__scopeMenu);return a.jsx(Ui,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentNonModal")),lu=pt("MenuContent.ScrollLock"),Ui=s.forwardRef(H(function(t,n){const{__scopeMenu:r,loop:o=!1,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:c,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,disableOutsideScroll:b,...w}=t,S=At(ze,r),y=sr(ze,r),x=ir(r),k=$i(r),R=Yc(r),[P,A]=s.useState(null),I=s.useRef(null),T=G(n,I,S.onContentChange),K=s.useRef(0),U=s.useRef(""),j=s.useRef(0),L=s.useRef(null),z=s.useRef("right"),Z=s.useRef(0),le=b?Na:s.Fragment,N=b?{as:lu,allowPinchZoom:!0}:void 0,xe=H(M=>{var fe,_e;const J=U.current+M,ie=R().filter(se=>!se.disabled),Y=document.activeElement,De=(fe=ie.find(se=>se.ref.current===Y))==null?void 0:fe.textValue,Re=ie.map(se=>se.textValue),ue=qi(Re,J,De),ke=(_e=ie.find(se=>se.textValue===ue))==null?void 0:_e.ref.current;H((function se(Pe){U.current=Pe,window.clearTimeout(K.current),Pe!==""&&(K.current=window.setTimeout(()=>se(""),1e3))}),"updateSearch")(J),ke&&setTimeout(()=>ke.focus())},"handleTypeaheadSearch");s.useEffect(()=>()=>window.clearTimeout(K.current),[]),Jn();const _=s.useCallback(M=>{var ie,Y;return z.current===((ie=L.current)==null?void 0:ie.side)&&Yi(M,(Y=L.current)==null?void 0:Y.area)},[]);return a.jsx(ou,{scope:r,searchRef:U,onItemEnter:s.useCallback(M=>{_(M)&&M.preventDefault()},[_]),onItemLeave:s.useCallback(M=>{var J;_(M)||((J=I.current)==null||J.focus(),A(null))},[_]),onTriggerLeave:s.useCallback(M=>{_(M)&&M.preventDefault()},[_]),pointerGraceTimerRef:j,onPointerGraceIntentChange:s.useCallback(M=>{L.current=M},[]),children:a.jsx(le,{...N,children:a.jsx(Wl,{asChild:!0,trapped:i,onMountAutoFocus:B(l,M=>{var J;M.preventDefault(),(J=I.current)==null||J.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:a.jsx(Bl,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,children:a.jsx(zc,{asChild:!0,...k,dir:y.dir,orientation:"vertical",loop:o,currentTabStopId:P,onCurrentTabStopIdChange:A,onEntryFocus:B(f,M=>{y.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:a.jsx(uc,{role:"menu","aria-orientation":"vertical","data-state":Vi(S.open),"data-radix-menu-content":"",dir:y.dir,...x,...w,ref:T,style:{outline:"none",...w.style},onKeyDown:B(w.onKeyDown,M=>{const ie=M.target.closest("[data-radix-menu-content]")===M.currentTarget,Y=M.ctrlKey||M.altKey||M.metaKey,De=M.key.length===1;ie&&(M.key==="Tab"&&M.preventDefault(),!Y&&De&&xe(M.key));const Re=I.current;if(M.target!==Re||!Kc.includes(M.key))return;M.preventDefault();const ke=R().filter(fe=>!fe.disabled).map(fe=>fe.ref.current);Oi.includes(M.key)&&ke.reverse(),Gi(ke)}),onBlur:B(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(K.current),U.current="")}),onPointerMove:B(t.onPointerMove,tn(M=>{const J=M.target,ie=Z.current!==M.clientX;if(M.currentTarget.contains(J)&&ie){const Y=M.clientX>Z.current?"right":"left";z.current=Y,Z.current=M.clientX}}))})})})})})})},"MenuContentImpl")),Wn="MenuItem",ho="menu.itemSelect",cu=s.forwardRef(H(function(t,n){const{disabled:r=!1,onSelect:o,...i}=t,l=s.useRef(null),c=sr(Wn,t.__scopeMenu),u=Hi(Wn,t.__scopeMenu),f=G(n,l),g=s.useRef(!1),h=H(()=>{const p=l.current;if(!r&&p){const v=new CustomEvent(ho,{bubbles:!0,cancelable:!0});p.addEventListener(ho,m=>o==null?void 0:o(m),{once:!0}),Yn(p,v),v.defaultPrevented?g.current=!1:c.onClose()}},"handleSelect");return a.jsx(uu,{...i,ref:f,disabled:r,onClick:B(t.onClick,h),onPointerDown:p=>{var v;(v=t.onPointerDown)==null||v.call(t,p),g.current=!0},onPointerUp:B(t.onPointerUp,p=>{var v;g.current||(v=p.currentTarget)==null||v.click()}),onKeyDown:B(t.onKeyDown,p=>{r||p.target!==p.currentTarget||u.searchRef.current!==""&&p.key===" "||Wc.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})},"MenuItem")),uu=s.forwardRef(H(function(t,n){const{__scopeMenu:r,disabled:o=!1,textValue:i,...l}=t,c=Hi(Wn,r),u=$i(r),f=s.useRef(null),g=G(n,f),[h,p]=s.useState(!1),[v,m]=s.useState("");return s.useEffect(()=>{const b=f.current;b&&m((b.textContent??"").trim())},[l.children]),a.jsx(Gn.ItemSlot,{scope:r,disabled:o,textValue:i??v,children:a.jsx(Vc,{asChild:!0,...u,focusable:!o,children:a.jsx(Ee.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...l,ref:g,onPointerMove:B(t.onPointerMove,tn(b=>{o?c.onItemLeave(b):(c.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:B(t.onPointerLeave,tn(b=>c.onItemLeave(b))),onFocus:B(t.onFocus,()=>p(!0)),onBlur:B(t.onBlur,()=>p(!1))})})})},"MenuItemImpl")),du=s.forwardRef(H(function(t,n){const{checked:r=!1,onCheckedChange:o,...i}=t;return a.jsx(hu,{scope:t.__scopeMenu,checked:r,children:a.jsx(cu,{role:"menuitemcheckbox","aria-checked":Tt(r)?"mixed":r,...i,ref:n,"data-state":ar(r),onSelect:B(i.onSelect,()=>o==null?void 0:o(Tt(r)?!0:!r),{checkForDefaultPrevented:!1})})})},"MenuCheckboxItem")),fu="MenuRadioGroup",[gd,vd]=nt(fu,{value:void 0,onValueChange:H(()=>{},"onValueChange")}),zi="MenuItemIndicator",[hu,pu]=nt(zi,{checked:!1}),mu=s.forwardRef(H(function(t,n){const{__scopeMenu:r,forceMount:o,...i}=t,l=pu(zi,r);return a.jsx(tr,{present:o||Tt(l.checked)||l.checked===!0,children:a.jsx(Ee.span,{...i,ref:n,"data-state":ar(l.checked)})})},"MenuItemIndicator")),gu="MenuSub",[bd,yd]=nt(gu);function Vi(e){return e?"open":"closed"}H(Vi,"getOpenState");function Tt(e){return e==="indeterminate"}H(Tt,"isIndeterminate");function ar(e){return Tt(e)?"indeterminate":e?"checked":"unchecked"}H(ar,"getCheckedState");function Gi(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}H(Gi,"focusFirst");function Wi(e,t){return e.map((n,r)=>e[(t+r)%e.length])}H(Wi,"wrapArray");function qi(e,t,n){const o=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let l=Wi(e,Math.max(i,0));o.length===1&&(l=l.filter(f=>f!==n));const u=l.find(f=>f.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}H(qi,"getNextMatch");function Ki(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,l=t.length-1;i<t.length;l=i++){const c=t[i],u=t[l],f=c.x,g=c.y,h=u.x,p=u.y;g>r!=p>r&&n<(h-f)*(r-g)/(p-g)+f&&(o=!o)}return o}H(Ki,"isPointInPolygon");function Yi(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return Ki(n,t)}H(Yi,"isPointerInGraceArea");function tn(e){return t=>t.pointerType==="mouse"?e(t):void 0}H(tn,"whenMouse");var vu=Jc,bu=eu,yu=ru,wu=iu,xu=du,ku=mu,Su=Object.defineProperty,mt=(e,t)=>Su(e,"name",{value:t,configurable:!0}),lr="DropdownMenu",[Cu,wd]=Ne(lr,[Fi]),gt=Fi(),[Eu,Xi]=Cu(lr),Ru=mt(e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:l,modal:c=!0}=e,u=gt(t),f=s.useRef(null),[g,h]=Kn({prop:o,defaultProp:i??!1,onChange:l,caller:lr});return a.jsx(Eu,{scope:t,triggerId:en(),triggerRef:f,contentId:en(),open:g,onOpenChange:h,onOpenToggle:s.useCallback(()=>h(p=>!p),[h]),modal:c,children:a.jsx(vu,{...u,open:g,onOpenChange:h,dir:r,modal:c,children:n})})},"DropdownMenu"),Pu="DropdownMenuTrigger",Iu=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,disabled:o=!1,...i}=t,l=Xi(Pu,r),c=gt(r),u=G(n,l.triggerRef);return a.jsx(bu,{asChild:!0,...c,children:a.jsx(Ee.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...i,ref:u,onPointerDown:B(t.onPointerDown,f=>{!o&&f.button===0&&f.ctrlKey===!1&&(l.onOpenToggle(),l.open||f.preventDefault())}),onKeyDown:B(t.onKeyDown,f=>{o||(["Enter"," "].includes(f.key)&&l.onOpenToggle(),f.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())})})})},"DropdownMenuTrigger")),Tu=mt(e=>{const{__scopeDropdownMenu:t,...n}=e,r=gt(t);return a.jsx(yu,{...r,...n})},"DropdownMenuPortal"),Mu="DropdownMenuContent",Au=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=Xi(Mu,r),l=gt(r),c=s.useRef(!1);return a.jsx(wu,{id:i.contentId,"aria-labelledby":i.triggerId,...l,...o,ref:n,onCloseAutoFocus:B(t.onCloseAutoFocus,u=>{var f;c.current||(f=i.triggerRef.current)==null||f.focus(),c.current=!1,u.preventDefault()}),onInteractOutside:B(t.onInteractOutside,u=>{const f=u.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,h=f.button===2||g;(!i.modal||h)&&(c.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent")),ju=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=gt(r);return a.jsx(xu,{...i,...o,ref:n})},"DropdownMenuCheckboxItem")),Nu=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=gt(r);return a.jsx(ku,{...i,...o,ref:n})},"DropdownMenuItemIndicator")),Du=Ru,_u=Iu,Lu=Tu,Qi=Au,Zi=ju,Ou=Nu;const Fu=Du,$u=_u,Bu=e=>e.preventDefault(),Ji=s.forwardRef(({className:e,align:t="start",...n},r)=>a.jsx(Lu,{children:a.jsx(Qi,{ref:r,align:t,sideOffset:4,className:V("z-50 overflow-hidden rounded-md border border-border bg-surface p-1 shadow-lg",e),...n})}));Ji.displayName=Qi.displayName;const es=s.forwardRef(({className:e,children:t,onSelect:n,...r},o)=>a.jsxs(Zi,{ref:o,onSelect:n??Bu,className:V("relative flex cursor-pointer select-none items-start rounded-sm py-1.5 pl-7 pr-3","text-[13px] text-fg outline-none data-[highlighted]:bg-surface-muted","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[a.jsx("span",{className:"absolute left-2 top-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(Ou,{children:a.jsx(Os,{className:"h-3.5 w-3.5"})})}),t]}));es.displayName=Zi.displayName;function Hu({url:e,isNew:t,visibility:n,onClose:r}){const o=s.useRef(null),i=s.useRef(null);s.useEffect(()=>{const c=i.current;c&&!c.contains(document.activeElement)&&c.focus()},[]);function l(c){if(c.key==="Escape"){r();return}if(c.key!=="Tab")return;const u=o.current;if(!u)return;const f=u.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(f.length===0)return;const g=f[0],h=f[f.length-1],p=document.activeElement;c.shiftKey&&(p===g||!u.contains(p))?(c.preventDefault(),h.focus()):!c.shiftKey&&(p===h||!u.contains(p))&&(c.preventDefault(),g.focus())}return a.jsx("div",{ref:i,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:l,onMouseDown:c=>{c.target===c.currentTarget&&r()},children:a.jsxs("div",{ref:o,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[a.jsx(Fs,{className:"h-10 w-10 text-success"}),a.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:t?"Page published":"Update published"}),a.jsx("p",{className:"text-[12px] text-fg-2",children:t?n==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),a.jsx("div",{className:"px-6 py-4",children:a.jsx(_a,{url:e})}),a.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:a.jsx(He,{autoFocus:!0,onClick:r,children:"Done"})})]})})}function Uu({initialAlias:e,busy:t,onCancel:n,onPublish:r}){const[o,i]=s.useState(e),[l,c]=s.useState("public"),[u,f]=s.useState([]),g=s.useRef(null),h=s.useRef(null);s.useEffect(()=>{const v=h.current;v&&!v.contains(document.activeElement)&&v.focus()},[]);function p(v){if(v.key==="Escape"){n();return}if(v.key!=="Tab")return;const m=g.current;if(!m)return;const b=m.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(b.length===0)return;const w=b[0],S=b[b.length-1],y=document.activeElement;v.shiftKey&&(y===w||!m.contains(y))?(v.preventDefault(),S.focus()):!v.shiftKey&&(y===S||!m.contains(y))&&(v.preventDefault(),w.focus())}return a.jsx("div",{ref:h,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:p,onMouseDown:v=>{v.target===v.currentTarget&&!t&&n()},children:a.jsxs("div",{ref:g,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[a.jsxs("div",{className:"border-b border-border px-6 py-4",children:[a.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),a.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),a.jsxs("div",{className:"space-y-4 px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(Gr,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),a.jsx(Da,{id:"publish-alias",autoFocus:!0,value:o,disabled:t,onChange:v=>i(v.target.value.toLowerCase()),placeholder:"my-app"}),a.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",o.trim()||"<uuid>"]})]}),a.jsxs("div",{children:[a.jsx(Gr,{children:"Who can open it"}),a.jsx(La,{visibility:l,onVisibilityChange:c,grants:u,onGrantsChange:f,disabled:t})]})]}),a.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[a.jsx(He,{variant:"secondary",onClick:n,disabled:t,children:"Cancel"}),a.jsxs(He,{onClick:()=>r({alias:o.trim(),visibility:l,grants:u}),disabled:t,children:[a.jsx(xo,{className:"h-3.5 w-3.5"}),t?"Publishing…":"Publish"]})]})]})})}function zu(e,t){return Jt({queryKey:["page-history",e],queryFn:()=>ht.getPageHistory(e).then(n=>n.versions),enabled:t,retry:!1})}function po(e,t){return Jt({queryKey:["page-history-version",e,t],queryFn:()=>ht.getPageHistoryVersion(e,t).then(n=>n.html),enabled:t!==null,retry:!1})}function Vu({entries:e,isLoading:t,isError:n,isFetching:r,selectedSha:o,onSelect:i,onRefresh:l}){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[a.jsx(ko,{className:"h-3.5 w-3.5 text-fg-3"}),a.jsx("span",{className:"flex-1",children:"Version history"}),a.jsx("button",{type:"button",onClick:l,disabled:r,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),a.jsxs("div",{className:"scroll-slim flex-1 overflow-y-auto p-1.5",children:[t?a.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,n?a.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,e&&e.length===0?a.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(e??[]).map(c=>{const u=c.sha===o;return a.jsxs("button",{type:"button",onClick:()=>i(c),className:V("block w-full rounded-md px-2.5 py-2 text-left",u?"bg-ink":"hover:bg-surface-muted"),children:[a.jsx("div",{className:V("text-[12px] font-medium",u?"text-white":"text-fg"),children:new Date(c.committed_at).toLocaleString()}),a.jsxs("div",{className:V("truncate text-[11px]",u?"text-white/70":"text-fg-3"),children:[c.message,c.author_email?` — ${c.author_email}`:""]})]},c.sha)})]})]})}function Gu({entry:e,canRestore:t,onRestore:n,onExit:r}){const o=yo();return a.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[a.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:e?a.jsxs(a.Fragment,{children:["Viewing version from ",new Date(e.committed_at).toLocaleString(),e.author_email?` (${e.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),a.jsxs(He,{variant:"secondary",size:"sm",onClick:r,children:[a.jsx($s,{className:"h-3.5 w-3.5"})," Back to current draft"]}),a.jsx(He,{size:"sm",disabled:!t,onClick:async()=>{await o({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&n()},children:"Restore this version"})]})}class Wu{diff(t,n,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);const i=this.castInput(t,r),l=this.castInput(n,r),c=this.removeEmpty(this.tokenize(i,r)),u=this.removeEmpty(this.tokenize(l,r));return this.diffWithOptionsObj(c,u,r,o)}diffWithOptionsObj(t,n,r,o){var i;const l=y=>{if(y=this.postProcess(y,r),o){setTimeout(function(){o(y)},0);return}else return y},c=n.length,u=t.length;let f=1,g=c+u;r.maxEditLength!=null&&(g=Math.min(g,r.maxEditLength));const h=(i=r.timeout)!==null&&i!==void 0?i:1/0,p=Date.now()+h,v=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(v[0],n,t,0,r);if(v[0].oldPos+1>=u&&m+1>=c)return l(this.buildValues(v[0].lastComponent,n,t));let b=-1/0,w=1/0;const S=()=>{for(let y=Math.max(b,-f);y<=Math.min(w,f);y+=2){let x;const k=v[y-1],R=v[y+1];k&&(v[y-1]=void 0);let P=!1;if(R){const I=R.oldPos-y;P=R&&0<=I&&I<c}const A=k&&k.oldPos+1<u;if(!P&&!A){v[y]=void 0;continue}if(!A||P&&k.oldPos<R.oldPos?x=this.addToPath(R,!0,!1,0,r):x=this.addToPath(k,!1,!0,1,r),m=this.extractCommon(x,n,t,y,r),x.oldPos+1>=u&&m+1>=c)return l(this.buildValues(x.lastComponent,n,t))||!0;v[y]=x,x.oldPos+1>=u&&(w=Math.min(w,y-1)),m+1>=c&&(b=Math.max(b,y+1))}f++};if(o)(function y(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);S()||y()},0)})();else for(;f<=g&&Date.now()<=p;){const y=S();if(y)return y}}addToPath(t,n,r,o,i){const l=t.lastComponent;return l&&!i.oneChangePerToken&&l.added===n&&l.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:l.count+1,added:n,removed:r,previousComponent:l.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:r,previousComponent:l}}}extractCommon(t,n,r,o,i){const l=n.length,c=r.length;let u=t.oldPos,f=u-o,g=0;for(;f+1<l&&u+1<c&&this.equals(r[u+1],n[f+1],i);)f++,u++,g++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return g&&!i.oneChangePerToken&&(t.lastComponent={count:g,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,f}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const l=o.length;let c=0,u=0,f=0;for(;c<l;c++){const g=o[c];if(g.removed)g.value=this.join(r.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=n.slice(u,u+g.count);h=h.map(function(p,v){const m=r[f+v];return m.length>p.length?m:p}),g.value=this.join(h)}else g.value=this.join(n.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}class qu extends Wu{constructor(){super(...arguments),this.tokenize=Xu}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const Ku=new qu;function Yu(e,t,n){return Ku.diff(e,t,n)}function Xu(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let o=0;o<r.length;o++){const i=r[o];o%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function Qu(e,t){const n=[];let r=0;for(const o of Yu(e,t)){const i=o.added?"added":o.removed?"removed":"context",l=o.value.split(`
`);l.length>0&&l[l.length-1]===""&&l.pop();for(const c of l)n.push({key:r++,kind:i,text:c})}return n}function An({oldText:e,newText:t,oldLabel:n,newLabel:r}){const o=s.useMemo(()=>Qu(e,t),[e,t]),i=o.every(l=>l.kind==="context");return a.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[a.jsxs("span",{className:"text-no-strong",children:["− ",n]}),a.jsxs("span",{className:"text-success",children:["+ ",r]})]}),a.jsx("div",{className:"scroll-slim flex-1 overflow-auto",children:i?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):a.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:o.map(l=>a.jsxs("div",{className:V("flex whitespace-pre px-3",l.kind==="added"&&"bg-status-soft",l.kind==="removed"&&"bg-no-soft",l.kind==="context"&&"text-fg-2"),children:[a.jsx("span",{className:V("mr-2 shrink-0 select-none",l.kind==="added"&&"text-success",l.kind==="removed"&&"text-no-strong",l.kind==="context"&&"text-fg-3"),children:l.kind==="added"?"+":l.kind==="removed"?"−":" "}),a.jsx("span",{children:l.text||" "})]},l.key))})})]})}const Zu=s.lazy(()=>Ps(()=>import("./CodeEditor-CMP_bZXg.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>({default:e.CodeEditor}))),dt=`<!doctype html>
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
`,Yt=[];function mo(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(2)}M`}function Ju(e,t,n){const r=JSON.stringify(e).length,o=t.reduce((i,l)=>{var c,u;return i+(l.kind==="inline"?((c=l.data)==null?void 0:c.length)??0:((u=l.text)==null?void 0:u.length)??0)},0);return r+o+n.length}const ed=["off","low","medium","high"],ts="medium",go={off:0,low:4096,medium:12288,high:24576};function vo(e,t){let n=go[e]??go[ts];return e==="off"&&t.includes("pro")&&(n=128),{thinkingConfig:{thinkingBudget:n,...e==="off"?{}:{includeThoughts:!0}}}}const td=.75,nd=.85,bo=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function rd(e,t,n){if(n){const r=Math.max(0,Math.ceil((n.deadline-Date.now())/1e3));return`rate-limited — retry ${n.attempt} of ${n.max} in ${r}s…`}if(e)switch(e.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${e.detail?` (${e.detail})`:""}…`;case"grep":return`searching the page${e.detail?` for “${e.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return e.detail?`loading the ${e.detail} skill…`:"loading a skill…";case"action":return`running ${e.detail??"an action"}…`;case"web_search":return e.detail?`searching the web for “${e.detail}”…`:"searching the web…";case"database":return"updating the database…";default:return`using ${e.name}…`}return t>=10?`working… (${t}s — large edits can take a minute)`:t>=3?`working… (${t}s)`:"working…"}function od(e){return a.jsxs("div",{children:[a.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:e.name==="screenshot"?a.jsxs(a.Fragment,{children:[a.jsx(Xs,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"looked at the page"})]}):e.name==="write"||e.name==="edit"?a.jsxs(a.Fragment,{children:[a.jsx(Co,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"edited the page"})]}):e.name==="skill"?a.jsxs(a.Fragment,{children:[a.jsx(So,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["loaded the ",a.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"unknown"})," skill"]})]}):e.name==="action"?a.jsxs(a.Fragment,{children:[a.jsx(Br,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["ran ",a.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"an action"})]})]}):e.name==="console"?a.jsxs(a.Fragment,{children:[a.jsx(Br,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"checked the console"})]}):e.name==="grep"?a.jsxs(a.Fragment,{children:[a.jsx(Qs,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["searched the page",e.detail?a.jsxs(a.Fragment,{children:[" for ",a.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:e.detail})]}):null]})]}):e.name==="database"?a.jsxs(a.Fragment,{children:[a.jsx(Zs,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["updated the database",e.detail?` (${e.detail})`:""]})]}):e.name==="read"?a.jsxs(a.Fragment,{children:[a.jsx(Js,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["read the page",e.detail?` (${e.detail})`:""]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Eo,{className:"h-3 w-3"}),a.jsxs("span",{children:["used ",a.jsx("span",{className:"font-medium text-fg-2",children:e.name}),e.detail?` (${e.detail})`:""]})]})}),e.name==="screenshot"&&e.imageUrl?a.jsx("img",{src:e.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function xd(){var i;const{id:e}=Oa(),n=((i=Fa().state)==null?void 0:i.publishContinuation)===!0,r=s.useRef(0),o=s.useRef(e);return!n&&e!==o.current&&(r.current+=1),o.current=e,a.jsx(id,{pageId:e??null},r.current)}function id({pageId:e}){var Ar,jr,Nr,Dr,_r,Lr;const t=e??"draft",n=$a(),r=ea(),o=yo(),[i,l]=s.useState(!1),[c,u]=s.useState(dt),[f,g]=s.useState(Yt),[h,p]=s.useState(""),[v,m]=s.useState(ts),[b,w]=s.useState([]),S=s.useRef(null),[y,x]=s.useState(""),[k,R]=s.useState([]),[P,A]=s.useState(!1),[I,T]=s.useState(!1),[K,U]=s.useState(""),[j,L]=s.useState(""),[z,Z]=s.useState(null),[le,N]=s.useState(0),[xe,_]=s.useState(null),[M,J]=s.useState(!1),[ie,Y]=s.useState(null),[De,Re]=s.useState(null),[ue,ke]=s.useState(!1),[fe,_e]=s.useState("desktop"),[se,Pe]=s.useState("code"),[vt,rt]=s.useState(null),ot=e!=null&&vt!=null;s.useEffect(()=>{ue||Pe("code")},[ue]);const[jt,bt]=s.useState(""),[it,yt]=s.useState(null),[sn,Nt]=s.useState("public"),[We,Le]=s.useState(null),[ns,an]=s.useState(!1),[rs,cr]=s.useState(!1),[Dt,_t]=s.useState(0),[ur,os]=s.useState(0),st=s.useMemo(()=>URL.createObjectURL(new Blob([no(c,{screenshot:!0})],{type:"text/html"})),[c,ur]),Lt=s.useRef(null);s.useEffect(()=>{Lt.current&&Lt.current!==st&&URL.revokeObjectURL(Lt.current),Lt.current=st},[st]);const[$,dr]=s.useState(!1),[ee,Ot]=s.useState(null),de=zu(e??"",!!e),ae=po(e??"",$?(ee==null?void 0:ee.sha)??null:null);s.useEffect(()=>{!$||!de.data||(ee&&!de.data.some(d=>d.sha===ee.sha)?Ot(de.data[0]??null):!ee&&de.data.length>0&&Ot(de.data[0]))},[$,ee,de.data]);function Ft(){dr(!1),Ot(null),ln("preview"),cn("previous")}const[Ie,ln]=s.useState("preview"),[Oe,cn]=s.useState("previous"),fr=$&&ee&&de.data?de.data.findIndex(d=>d.sha===ee.sha):-1,wt=fr>=0?((Ar=de.data)==null?void 0:Ar[fr+1])??null:null,$t=po(e??"",$&&Ie==="diff"&&Oe==="previous"?(wt==null?void 0:wt.sha)??null:null),[hr,pr]=s.useState(!1),un=s.useRef(null);s.useEffect(()=>()=>{un.current&&clearTimeout(un.current)},[]);function is(){hr||(pr(!0),de.refetch().finally(()=>{un.current=setTimeout(()=>pr(!1),2e3)}))}const xt=s.useMemo(()=>ae.data===void 0?null:URL.createObjectURL(new Blob([no(ae.data)],{type:"text/html"})),[ae.data]),Bt=s.useRef(null);s.useEffect(()=>{Bt.current&&Bt.current!==xt&&URL.revokeObjectURL(Bt.current),Bt.current=xt},[xt]);const Ht=s.useRef(null),dn=s.useRef([]),mr=s.useRef(0);s.useEffect(()=>{dn.current=[],mr.current=Date.now()},[st]);const ss=s.useRef(0),kt=s.useRef(new Map),fn=s.useRef(!1),gr=s.useRef($);s.useEffect(()=>{gr.current=$},[$]),s.useEffect(()=>{fn.current=!1;const d=kt.current;d.forEach(E=>{window.clearTimeout(E.timer),E.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),d.clear()},[st,ue,$]),s.useEffect(()=>{function d(E){var D;if(E.source!==((D=Ht.current)==null?void 0:D.contentWindow))return;const C=E.data;if(!C)return;if(C.type==="aero-dom-ready"){fn.current=!0;return}if(C.type==="aero-dom-op-result"&&typeof C.id=="number"){const q=kt.current.get(C.id);if(!q)return;kt.current.delete(C.id),window.clearTimeout(q.timer);const oe=typeof C.generation=="number"?C.generation:null;q.resolve(C.ok?{ok:!0,result:C.result,generation:oe}:{ok:!1,error:C.error||"the action failed",generation:oe});return}if(C.type!=="aero-console"||typeof C.ts=="number"&&C.ts<mr.current)return;const W=C.level==="info"||C.level==="warn"||C.level==="error"?C.level:"log",O=dn.current;O.push({level:W,text:typeof C.text=="string"?C.text:"",ts:C.ts??Date.now()}),O.length>300&&O.splice(0,O.length-300)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]);async function as(d,E,C){var oe;gr.current&&Ft(),ke(!1);const W=Date.now()+1e4;for(;!fn.current||!((oe=Ht.current)!=null&&oe.contentWindow);){if(Date.now()>W)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(Et=>setTimeout(Et,50))}const O=Ht.current.contentWindow,D=++ss.current,q=d==="screenshot"?3e4:15e3;return new Promise(Et=>{const Cs=window.setTimeout(()=>{kt.current.delete(D),Et({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},q);kt.current.set(D,{resolve:Et,reject:Es=>Et({ok:!1,error:Es.message,generation:null}),timer:Cs}),O.postMessage({type:"aero-dom-op",id:D,op:d,args:E,generation:C},"*")})}const ge=s.useRef(c),Fe=d=>{ge.current=d,u(d)},Te=s.useRef(dt),Ut=s.useRef(Yt),hn=s.useRef(null),vr=s.useRef(null),br=s.useRef(null),qe=s.useRef(null),pn=s.useRef(Po);s.useEffect(()=>{let d=!0;return ra().then(E=>Jr(E).then(C=>{d&&(pn.current=C)})).catch(()=>{}),oa().then(E=>Jr(E).then(C=>{d&&(pn.current=C)})).catch(()=>{}),()=>{d=!1}},[]);const ve=Jt({queryKey:["ai-models"],queryFn:Ia,staleTime:300*1e3,retry:!1}),yr=Jt({queryKey:["zen-models"],queryFn:Ta,staleTime:300*1e3,retry:!1}),Ke=yr.data??[],$e=!ve.isPending&&!yr.isPending,ls=!!((jr=ve.data)!=null&&jr.project_id),Ye=Ke.find(d=>d.id===h),at=!!h&&ia(h)==="zen",St=sa(h),Xe=at?aa((Ye==null?void 0:Ye.reasoning_efforts)??[]):[...ed],cs=Xe.join(",");s.useEffect(()=>{!$e||Xe.length===0||Xe.includes(v)||m("off")},[cs,v,$e]),s.useEffect(()=>{var d;!$e||h||p(la(((d=ve.data)==null?void 0:d.models)??[],Ke))},[$e,h]);const Se=!!h&&(!$e||(((Nr=ve.data)==null?void 0:Nr.models)??[]).includes(h)||Ke.some(d=>d.id===h));s.useEffect(()=>{let d=!1;return rt(null),S.current=null,(async()=>{const E=await Ur(t).catch(()=>{});if(!d){if(E){Fe(E.html),Te.current=E.html;const C=ca(E.contents);g(C),Ut.current=C,_t(zr(C)),E.model&&p(E.model),E.thinking&&m(E.thinking),w(E.disabledTools??[]),S.current=E.zenSessionId??null}if(e)try{const C=await ht.getPage(e);if(d)return;yt(C.url),Nt(Rs(C.visibility)),rt(C.html),E||(Fe(C.html),Te.current=C.html)}catch{d||_("Failed to load page.")}d||l(!0)}})(),()=>{d=!0}},[t]);const Qe=s.useRef(Date.now());s.useEffect(()=>{if(!I)return;Qe.current=Date.now(),N(0);const d=setInterval(()=>N(Math.round((Date.now()-Qe.current)/1e3)),1e3);return()=>clearInterval(d)},[I]);const wr=()=>{if(at)return S.current??(S.current=crypto.randomUUID()),S.current},Ze=(d,E=b)=>{const C=ge.current;return wn({key:t,pageId:e,html:C,contents:d,model:h||null,thinking:v,disabledTools:E,zenSessionId:S.current??void 0,updatedAt:0}).then(()=>{Te.current=C,Ut.current=d}).catch(()=>{})},lt=s.useRef({sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b});lt.current={sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b};const xr=s.useRef(I);xr.current=I,s.useEffect(()=>()=>{if(ge.current===Te.current&&lt.current.contents===Ut.current)return;const{sessionKey:d,pageId:E,contents:C,model:W,thinking:O,disabledTools:D}=lt.current;wn({key:d,pageId:E,html:ge.current,contents:C,model:W||null,thinking:O,disabledTools:D,zenSessionId:S.current??void 0,updatedAt:0}).catch(()=>{})},[]);const kr=!at,us=kr&&(k.length>0||f.some(d=>d.parts.some(E=>E.inlineData))),ct=s.useMemo(()=>Ju(f,k,y),[f,k,y]),Sr=kr&&ct>Pt,Cr=ct/Pt>=td,Er=Dt/St>=nd,Rr=Math.max(0,100-Math.round(Dt/St*100)),Pr=St>=1e6?`${Math.round(St/1e6)}M`:`${Math.round(St/1e3)}K`;async function ds(){var q;const d=y.trim();if(!d&&k.length===0||I||!Se)return;if(Sr){_(`This message is too large to send (~${et(ct)} — Gemini's inline-request limit is ~${et(Pt)}). Remove an attachment, or run /compact first.`);return}if(d.startsWith("/")){const oe=d.split(/\s+/)[0];if(!ma(bo,oe)){_(`Unknown command: ${oe} — available: /compact`);return}}const E=ga(d);if(E){x(""),await hs(E.instructions);return}const C=[va()];for(const oe of k)C.push(ba(oe.name,oe.mimeType)),C.push(oe.kind==="inline"?{inlineData:{mimeType:oe.mimeType,data:oe.data??""}}:{text:oe.text??""});d&&C.push({text:d});const W=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(d),O=/\bdeck-container\b|class="slide slide--/.test(ge.current);ge.current===dt?C.push(kn(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${W?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):O?C.push(kn("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):W&&C.push(kn("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const D=[...f,{role:"user",parts:C}];(q=hn.current)==null||q.followOutput(),g(D),x(""),R([]),Za(),await Ir(D)}async function Ir(d){const E=new AbortController;qe.current=E,T(!0),U(""),L(""),_(null),J(!1),Y(null);const C=Date.now(),W=wr();try{const O=await Ca({model:h,contents:d,html:()=>ge.current,skills:pn.current,pageId:e,consoleLogs:()=>dn.current,domOp:as,generationConfig:vo(v,h),thinking:v,zenModelInfo:Ye,zenSession:W,hasGoogleProject:ls,disabledTools:b,signal:E.signal,callbacks:{onText:D=>{Qe.current=Date.now(),Y(null),U(q=>q+D)},onThought:D=>{Qe.current=Date.now(),Y(null),L(q=>q+D)},onUsage:D=>{const q=D.totalTokenCount??D.promptTokenCount;typeof q=="number"&&_t(q)},onTool:(D,q)=>{Qe.current=Date.now(),Y(null),Z({name:D,detail:q})},onHtml:D=>Fe(D),onContents:D=>{Qe.current=Date.now(),Z(null),g(D),U(""),L("")},onRetry:(D,q,oe)=>{Qe.current=Date.now(),Y({attempt:D,max:q,deadline:Date.now()+oe*1e3})}}});g(O),await Ze(O),Date.now()-C>1e4&&to({ok:!0})}catch(O){if(O instanceof DOMException&&O.name==="AbortError")await Ze(lt.current.contents);else{const D=O instanceof Je?Ea(O.body):null,q=O instanceof Je?O.message==="reauth_required"?"Your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":D?D.message:`AI request failed: ${O.message}`:"AI request failed.";D&&Re(D),_(q),J(!(O instanceof Je&&O.message==="reauth_required")),to({ok:!1,error:q}),await Ze(d)}}finally{qe.current===E&&(qe.current=null),T(!1),U(""),L(""),Z(null),Y(null)}}function fs(){var d;(d=qe.current)==null||d.abort()}async function zt(){var d;I||!Se||f.length===0||((d=hn.current)==null||d.followOutput(),await Ir(f))}async function hs(d){if(I||!Se)return;if(f.length===0){_("Nothing to compact — the conversation is empty.");return}const E=new AbortController;qe.current=E,T(!0),cr(!0),_(null);try{const C=await Ra({model:h,contents:f,instructions:d||void 0,generationConfig:vo("off",h),zenSession:wr(),signal:E.signal});await ut(Pa(C))}catch(C){C instanceof DOMException&&C.name==="AbortError"||_(C instanceof Je?`Compaction failed: ${C.message}`:"Compaction failed.")}finally{qe.current===E&&(qe.current=null),T(!1),cr(!1)}}async function ut(d){g(d),_t(zr(d)),await Ze(d)}async function ps(d){if(I)return;const E=f;if(!(!await o({title:"Delete from history?",body:d.kind==="tool"||d.kind==="grouped-search"?`Removes ${d.refs.length===1?"this tool call and its result":`these ${d.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:d.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||xr.current||lt.current.contents!==E))switch(d.kind){case"user":case"compact":await ut(ka(f,d.contentIndex));break;case"thought":await ut(xa(f,d.refs));break;case"tool":case"grouped-search":await ut(wa(f,d.refs));break;case"assistant":await ut(ya(f,d.refs));break}}async function ms(d,E){I||d.kind!=="user"&&d.kind!=="assistant"||lt.current.contents===f&&await ut(Sa(f,d.refs,E))}const Ct=ta({mutationFn:async d=>{const E=ge.current;if(e)return await ht.patchPage(e,{html:E}),{id:e,isNew:!1,url:null,html:E,visibility:sn};const C=await ht.createPage(E,{alias:(d==null?void 0:d.alias)||null,visibility:(d==null?void 0:d.visibility)??"public",grants:(d==null?void 0:d.grants)??[]});return{id:C.id,isNew:!0,url:C.url,html:E,visibility:(d==null?void 0:d.visibility)??"public"}},onSuccess:async({id:d,isNew:E,url:C,html:W,visibility:O})=>{if(_(null),an(!1),Nt(O),Te.current=W,rt(W),r.invalidateQueries({queryKey:["pages"]}),r.invalidateQueries({queryKey:["page",d]}),r.invalidateQueries({queryKey:["page-history",d]}),E)await wn({key:d,pageId:d,html:ge.current,contents:f,model:h||null,updatedAt:0}).catch(()=>{}),await xn("draft").catch(()=>{}),yt(C),Le({url:C??`/p/${d}`,id:d,isNew:!0,visibility:O});else{const D=it??`/p/${d}`;yt(D),Le({url:D,id:d,isNew:!1,visibility:O})}},onError:d=>{d instanceof Je&&d.body&&typeof d.body=="object"&&"reason"in d.body?_(`Publish failed: ${d.message} (${String(d.body.reason)})`):d instanceof Je?_(`Publish failed: ${d.message}`):_("Publish failed.")}});async function gs(){if(await o({title:"Reset builder",body:e?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await xn(t).catch(()=>{}),g(Yt),Ut.current=Yt,_t(0),_(null),S.current=null,e)try{const E=await ht.getPage(e);Fe(E.html),Te.current=E.html}catch{_("Failed to reload page.")}else Fe(dt),Te.current=dt}async function vs(){if(ge.current!==Te.current){if(!await o({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;Te.current=ge.current}const d=await Ur("draft").catch(()=>{});d&&(d.contents.length>0||d.html!==dt)&&await o({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&await xn("draft").catch(()=>{}),n("/")}async function bs(d){var W;const E=(W=d.target.files)==null?void 0:W[0];if(d.target.value="",!E)return;const C=await E.text();Fe(C),_(null),Ze(f)}async function mn(d){if(d.length===0)return;if(at){_("Free models cannot read attachments. Switch to a Google model to attach files.");return}const E=[],C=[];for(const W of d){const O=await Wa(W);"error"in O?C.push(O.error):E.push(O)}E.length>0&&R(W=>[...W,...E]),C.length>0&&_(C.join(" "))}function ys(d){const E=Array.from(d.target.files??[]);d.target.value="",mn(E)}const gn=s.useMemo(()=>ua(f),[f]),vn=((Dr=ve.data)==null?void 0:Dr.models.length)??0,ws=ve.isError||!!ve.data&&vn===0,Be=$e&&vn===0&&Ke.length===0,Tr=ws&&Ke.length>0,bn=ve.error instanceof Je?ve.error.message:void 0,Me=f[f.length-1],xs=(Me==null?void 0:Me.role)==="model"&&!Me.parts.some(d=>d.functionCall),ks=(Me==null?void 0:Me.role)==="user"&&Me.parts.some(da),Mr=!I&&!!Me&&!xs&&!ks,Ss=((_r=gn[gn.length-1])==null?void 0:_r.kind)==="user";return i?a.jsxs("div",{className:"flex h-[calc(100vh-8.5rem)] min-h-[480px] flex-col gap-3",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsxs(Wr,{value:Se?h:"",onValueChange:p,disabled:I||!$e,children:[a.jsx(qr,{className:"h-8 w-auto min-w-[9rem] text-[13px]",children:a.jsx(Kr,{placeholder:$e?"select a model":"loading models…"})}),a.jsxs(Yr,{children:[vn>0?a.jsxs(Xr,{children:[a.jsx(Qr,{children:"Google"}),(Lr=ve.data)==null?void 0:Lr.models.map(d=>a.jsx(Sn,{value:d,children:d},d))]}):null,Ke.length>0?a.jsxs(Xr,{children:[a.jsx(Qr,{children:"Free · opencode zen"}),Ke.map(d=>a.jsx(Sn,{value:d.id,children:d.name},d.id))]}):null]})]}),a.jsxs(Wr,{value:Xe.includes(v)?v:"off",onValueChange:m,disabled:I||Xe.length===0,children:[a.jsxs(qr,{className:"h-8 w-auto text-[13px]",title:Xe.length>0?"Thinking level — how much the model reasons before answering":Ye!=null&&Ye.reasoning?"This model reasons but offers no thinking-level control":"This model does not support thinking",children:[a.jsx(So,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),a.jsx(Kr,{})]}),a.jsx(Yr,{children:Xe.map(d=>a.jsx(Sn,{value:d,children:d},d))})]}),a.jsxs("button",{type:"button",onClick:()=>ke(d=>!d),disabled:$,className:V("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",ue?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[a.jsx(Co,{className:"h-3.5 w-3.5"})," Code"]}),a.jsxs("div",{className:V("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(ue||$&&Ie!=="preview")&&"opacity-50"),children:[a.jsxs("button",{type:"button",onClick:()=>_e("desktop"),disabled:ue||$&&Ie!=="preview",title:"Preview at full width",className:V("inline-flex items-center gap-1 rounded-sm px-2 py-1",fe==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[a.jsx(Bs,{className:"h-3.5 w-3.5"})," Desktop"]}),a.jsxs("button",{type:"button",onClick:()=>_e("mobile"),disabled:ue||$&&Ie!=="preview",title:"Preview at phone width",className:V("inline-flex items-center gap-1 rounded-sm px-2 py-1",fe==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[a.jsx(Hs,{className:"h-3.5 w-3.5"})," Mobile"]})]}),a.jsxs("button",{type:"button",onClick:()=>os(d=>d+1),disabled:ue||$,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx($r,{className:"h-3.5 w-3.5"})," Reload"]}),a.jsxs("button",{type:"button",onClick:()=>{var d;return(d=vr.current)==null?void 0:d.click()},disabled:I||$,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(Us,{className:"h-3.5 w-3.5"})," Upload"]}),a.jsx("input",{ref:vr,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:bs}),a.jsxs("button",{type:"button",onClick:gs,disabled:I||$,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(zs,{className:"h-3.5 w-3.5"})," Reset"]}),e?a.jsxs("button",{type:"button",onClick:vs,disabled:I||$,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(Vs,{className:"h-3.5 w-3.5"})," New"]}):null,e?a.jsxs("button",{type:"button",onClick:()=>$?Ft():dr(!0),title:"Browse previously published versions of this page",className:V("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",$?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[a.jsx(ko,{className:"h-3.5 w-3.5"})," History"]}):null,a.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[it?a.jsxs("a",{href:it,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",a.jsx(Gs,{className:"h-3 w-3"})]}):null,a.jsxs(He,{size:"sm",onClick:()=>e?Ct.mutate(void 0):an(!0),disabled:I||Ct.isPending||$,children:[Ct.isPending?a.jsx(Ws,{className:"h-3.5 w-3.5 animate-spin"}):a.jsx(xo,{className:"h-3.5 w-3.5"}),e?"Publish update":"Publish"]})]})]}),xe&&!$?a.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[a.jsx("span",{className:"min-w-0 flex-1 break-words",children:xe}),M&&!I?a.jsxs("button",{type:"button",onClick:()=>void zt(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[a.jsx($r,{className:"h-3 w-3"})," Retry"]}):null]}):null,(Be||Tr)&&!$?a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[Be?"AI is unavailable — ":"Google models are unavailable — ",bn==="no_project"?a.jsxs(a.Fragment,{children:["no Code Assist project selected for your account."," ",a.jsx(Ba,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):bn==="reauth_required"?"your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":"could not load models. Try again later.",Tr?" Free models are listed in the model picker and need no Google account.":null]}),bn==="no_project"?a.jsx(Ma,{}):null]}):null,Mr&&!xe&&!Ss&&!$?a.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[a.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),a.jsxs("button",{type:"button",onClick:()=>void zt(),disabled:Be||!Se,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[a.jsx(qs,{className:"h-3 w-3"})," Resume"]})]}):null,a.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[a.jsx("div",{className:V("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",P&&"ring-2 ring-ink"),onDragOver:d=>{$||(d.preventDefault(),A(!0))},onDragLeave:()=>A(!1),onDrop:d=>{$||(d.preventDefault(),A(!1),mn(Array.from(d.dataTransfer.files)))},children:$?a.jsx(Vu,{entries:de.data,isLoading:de.isLoading,isError:de.isError,isFetching:de.isFetching||hr,selectedSha:(ee==null?void 0:ee.sha)??null,onSelect:Ot,onRefresh:is}):a.jsx(fa,{ref:hn,chat:gn,busy:I,streamText:K,streamThought:j,busyLabel:rs?"compacting conversation…":rd(z,le,ie),toolActive:z!==null,retrying:ie!==null,busyElapsed:le,emptyState:a.jsxs(a.Fragment,{children:["Describe the page you want to build.",a.jsx("br",{}),"Aero edits the HTML and you preview it live.",a.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:od,canResume:Mr,resumeDisabled:Be||!Se,onResume:()=>void zt(),onSaveItemEdit:(d,E)=>void ms(d,E),onDeleteItem:d=>void ps(d),input:y,onInputChange:x,onSend:()=>void ds(),onStop:fs,composerDisabled:I||Be||!Se,sendDisabled:Be||!Se||!y.trim()&&k.length===0||Sr,placeholder:Be?"AI unavailable":!Se&&ve.data?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:bo,composerMeta:a.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[us?a.jsx("span",{className:V("tabular truncate",Cr&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${et(ct)} of ${et(Pt)} — Gemini rejects requests over ~20MB`,children:Cr?`${et(ct)} / ${et(Pt)}`:et(ct)}):null,a.jsx("span",{className:V("tabular truncate",Er&&"font-medium text-no-strong"),title:`Approximate context window usage: ${mo(Dt)} of ${Pr} tokens (${Rr}% left) — ${at?"free models are held to a 200K-token context":"all Gemini models have a ~1M-token context"}`,children:Er?`${mo(Dt)} / ${Pr}`:`${Rr}% left`})]}),attachmentsBar:k.length>0?a.jsx("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:k.map(d=>a.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[d.kind==="inline"&&d.mimeType.startsWith("image/")?a.jsx("img",{src:`data:${d.mimeType};base64,${d.data}`,alt:d.name,className:"h-7 w-7 shrink-0 object-cover"}):a.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:pa(d.mimeType)}),a.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:d.name,children:d.name}),a.jsx("button",{type:"button",onClick:()=>R(E=>E.filter(C=>C.id!==d.id)),title:"Remove",className:"text-fg-3 hover:text-fg",children:a.jsx(Ys,{className:"h-3 w-3"})})]},d.id))}):void 0,composerLeading:a.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[a.jsxs(Fu,{children:[a.jsx($u,{asChild:!0,children:a.jsxs(He,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:V(Vr,"relative"),children:[a.jsx(Eo,{className:"h-3.5 w-3.5"}),b.length>0?a.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),a.jsx(Ji,{className:"w-60",children:ha.map(d=>a.jsx(es,{checked:!d.names.some(E=>b.includes(E)),onCheckedChange:E=>{const C=E?b.filter(W=>!d.names.includes(W)):[...new Set([...b,...d.names])];w(C),Ze(f,C)},children:a.jsxs("span",{className:"flex flex-col",children:[a.jsx("span",{children:d.label}),a.jsx("span",{className:"text-[11px] text-fg-3",children:d.hint})]})},d.id))})]}),at?null:a.jsxs(a.Fragment,{children:[a.jsx(He,{variant:"ghost",size:"sm",onClick:()=>{var d;return(d=br.current)==null?void 0:d.click()},disabled:I||Be||!Se,title:"Attach a file (image, PDF, audio, video, or text)",className:Vr,children:a.jsx(Ks,{className:"h-3.5 w-3.5"})}),a.jsx("input",{ref:br,type:"file",multiple:!0,hidden:!0,onChange:ys})]})]}),onPasteFiles:d=>void mn(d)})}),a.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:$?a.jsxs(a.Fragment,{children:[a.jsx(Gu,{entry:ee,canRestore:!!ee&&ae.data!==void 0,onRestore:()=>{ae.data!==void 0&&(Fe(ae.data),Ze(f)),Ft()},onExit:Ft}),ee?a.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>ln("preview"),className:V("rounded-sm px-2 py-1",Ie==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),a.jsx("button",{type:"button",onClick:()=>ln("diff"),className:V("rounded-sm px-2 py-1",Ie==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),Ie==="diff"?a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>cn("previous"),className:V("rounded-sm px-2 py-1",Oe==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),a.jsx("button",{type:"button",onClick:()=>cn("draft"),className:V("rounded-sm px-2 py-1",Oe==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,Ie==="diff"&&ee?Oe==="previous"&&!wt?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):Oe==="previous"&&$t.isLoading||ae.isLoading?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):Oe==="previous"&&$t.isError||ae.isError?a.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):Oe==="previous"&&$t.data!==void 0&&ae.data!==void 0?a.jsx(An,{oldText:$t.data,newText:ae.data,oldLabel:`Version from ${new Date(wt.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):Oe==="draft"&&ae.data!==void 0?a.jsx(An,{oldText:c,newText:ae.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):null:Ie==="preview"?ae.isLoading?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):ae.isError?a.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):xt?a.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:a.jsx("iframe",{title:"historic version preview",src:xt,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:V("h-full bg-white",fe==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):ue?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>Pe("code"),className:V("rounded-sm px-2 py-1",se==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),a.jsx("button",{type:"button",onClick:()=>Pe("diff"),disabled:!ot,title:ot?void 0:"Diff becomes available once this page has been published",className:V("rounded-sm px-2 py-1 disabled:opacity-50",se==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),se==="diff"&&ot?a.jsx(An,{oldText:vt,newText:c,oldLabel:"Last published version",newLabel:"Current draft"}):a.jsx(s.Suspense,{fallback:a.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:a.jsx(Zu,{value:c,onChange:Fe,language:"html",className:"flex-1 overflow-auto"})})]}):a.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:a.jsx("iframe",{ref:Ht,title:"preview",src:st,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:V("h-full bg-white",fe==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},ur)})})]}),ns?a.jsx(Uu,{initialAlias:jt,busy:Ct.isPending,onCancel:()=>an(!1),onPublish:d=>{bt(d.alias),Ct.mutate(d)}}):null,We?a.jsx(Hu,{url:We.url,isNew:We.isNew,visibility:We.visibility,onClose:()=>{const d=We;Le(null),d.isNew&&n(`/builder/${d.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,De?a.jsx(Aa,{info:De,onEnabled:()=>{Re(null),_(null),zt()},onClose:()=>Re(null)}):null]}):a.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{xd as BuilderPage};
