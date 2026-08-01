const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-DBzrWBRq.js","./vendor-react-CT4r9AGQ.js","./index-CgGZ272x.js","./vendor-query-z2phk0OY.js","./vendor-router-CZq-5LoR.js","./index-CoQ6HnbY.css"])))=>i.map(i=>d[i]);
var Lr=e=>{throw TypeError(e)};var Or=(e,t,n)=>t.has(e)||Lr("Cannot "+n);var F=(e,t,n)=>(Or(e,t,"read from private field"),n?n.call(e):t.get(e)),bn=(e,t,n)=>t.has(e)?Lr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ct=(e,t,n,r)=>(Or(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);import{e as Q,B as Be,u as bo,a as ht,d as Cs,A as Je,_ as Es}from"./index-CgGZ272x.js";import{r as s,j as a,R as Ve,h as xo,u as Rs,o as Ps,s as Is,m as Ts,n as Ms,p as As,q as js,t as Ns,v as Ds,w as _s,i as Ls,G as yo,H as wo,A as Os,B as So,x as ko,y as Fr,z as Fs,k as $s,I as Bs,E as Hs,d as Us,J as zs,W as Co,M as Vs,X as Gs,N as Ws,O as $r,Q as qs,D as Ks,V as Ys}from"./vendor-react-CT4r9AGQ.js";import{a as Jt,c as Xs,u as Qs}from"./vendor-query-z2phk0OY.js";import{i as Br,g as Zs,l as Js,s as ea,p as ta,c as na,t as ra,d as oa,a as Hr,e as Ur,b as xn,f as yn,h as ia,j as sa,C as aa,k as zr,O as la,m as ca,n as ua,o as da,q as fa,r as ha,u as wn,v as pa,w as ma,x as ga,y as va,z as ba,A as xa,B as ya,D as wa,E as Sa,F as ka,G as Ca}from"./ChatPanel-C4c0afD-.js";import{C as Ea,S as Ra}from"./ServiceDisabledModal-CAZzKyR_.js";import{e as $,h as Pa,R as Ia,L as Vr,I as Ta,S as Gr,a as Wr,b as qr,c as Kr,f as Yr,g as Xr,d as Sn}from"./Select-DPO1NJLP.js";import{P as Ma,a as Aa}from"./PublicUrlRow-WgjoOPOs.js";import{e as ja,u as Na,c as Da,L as _a}from"./vendor-router-CZq-5LoR.js";const Et=20*1024*1024;function La(e){return e==="application/pdf"||/^(image|audio|video)\//.test(e)}const Eo=/^text\//,Oa=new Set(["application/json","application/xml","application/x-yaml","application/yaml","application/javascript","application/typescript"]);function Fa(e){return Eo.test(e)||Oa.has(e)}async function $a(e){const t=await e.arrayBuffer();try{return new TextDecoder("utf-8",{fatal:!0}).decode(t)}catch{return null}}function Ba(e){return new Promise((t,n)=>{const r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>n(r.error??new Error("read failed")),r.readAsDataURL(e)})}let Qr=0;async function Ha(e){const t=e.type,n=e.name||"file";if(La(t)){const o=await Ba(e),i=o.indexOf(",");return{id:String(Qr++),name:n,mimeType:t,size:e.size,kind:"inline",data:i>=0?o.slice(i+1):""}}const r=Fa(t);if(r||!t||t==="application/octet-stream"){const o=await $a(e);if(o!==null)return{id:String(Qr++),name:n,mimeType:Eo.test(t)?t:"text/plain",size:e.size,kind:"text",text:o};if(r)return{error:`"${n}" is declared as ${t} but isn't valid UTF-8 — Gemini only supports UTF-8 text attachments.`}}return{error:`"${n}" is a format Gemini can't read (${t||"unknown binary type"}).`}}function et(e){return e<1024?`${e}B`:e<1024*1024?`${(e/1024).toFixed(1)}KB`:`${(e/(1024*1024)).toFixed(1)}MB`}const Ua='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',za=`# aero-database: persistent storage for aero pages

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

Every row is stamped server-side with \`_owner\` (the creator's email, or an
anonymous per-page id for guests). You can read it, but never set it —
use it to show "your posts" or attribute entries.

## Access model — IMPORTANT, configure it YOURSELF with the \`database\` tool

Who can do what is configured **per table**. Do not ask the user to do
this — most users don't know what a database or a permission is. After
building (or changing) a data-backed page, call the \`database\` tool:

- \`{op: 'configure_table', table, read_access, write_access}\` — creates
  the table if needed and sets its access in one call
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
| read: \`public\` | anyone with the page link can read |
| write: \`none\` | only the owner + editors |
| write: \`own\` | anyone may ADD rows and edit/delete THEIR OWN rows |
| write: \`any\` | anyone may edit ANY row (shared boards — vandalism-proof it yourself) |

Pick per use case:
- **Poll / opinion box / sign-up**: read \`public\` (or \`private\` for a
  blind box), write \`own\`.
- **Per-player game state / personal notes**: read \`public\`, write \`own\`,
  always query with \`mine: true\`.
- **Shared collaborative state** (one board everyone mutates): write \`any\`.
- **Owner-curated content** (read-only catalog): read \`public\`, write \`none\`.

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
- A \`401\` means the visitor isn't signed in and the table isn't public; a
  \`403\` means signed in but no access. Handle both with a friendly message.
- **Queries are equality + one orderBy only** (no ranges, no OR). Combining
  \`eq\` filters WITH \`orderBy\` on a *different* field may fail with an index
  error — prefer filtering OR ordering, or sort client-side after fetching.
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
`,Va=`# Aero HTML Slides Style Guide

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
`,Ga=`# aero-ai: calling Gemini from inside an aero page

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
`,Ro=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:Ua,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:za,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:Va,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:Ga,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]}];async function Zr(e){const t=[...Ro],n=new Set(t.map(i=>i.name)),r=i=>i.access==="owner"?0:i.access==="manager"?1:2,o=[...e].sort((i,l)=>r(i)-r(l)||l.updatedAt-i.updatedAt);for(const i of o){if(!i.content.trim())continue;let l=i.name;for(let u=2;n.has(l);u++)l=`${i.name}-${u}`;n.add(l);let c=[];if(!Br(i.id))try{c=await Zs(i.id)}catch{}t.push({name:l,description:i.description,content:i.content,source:"remote",id:Br(i.id)?void 0:i.id,files:i.files,envSchema:i.envSchema,envSet:c,allowedHosts:i.allowedHosts})}return t}const Vt="⬤ ";let kn=!1;function Wa(){if(kn||!document.title||document.title.startsWith(Vt))return;kn=!0,document.title=Vt+document.title;const e=()=>{document.hidden||(document.title.startsWith(Vt)&&(document.title=document.title.slice(Vt.length)),kn=!1,document.removeEventListener("visibilitychange",e))};document.addEventListener("visibilitychange",e)}let Jr=!1;function qa(){Jr||typeof Notification>"u"||(Jr=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function eo(e){if(!document.hidden)return;const t=e.ok?"Aero finished your request":"Aero hit an error",n=e.ok?"The page has been updated — come take a look.":e.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const r=new Notification(t,{body:n,tag:"aero-turn-done"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>r.close(),8e3);return}catch{}Wa()}const Ka=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,Ya=`<script>(function(){
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
})();<\/script>`,Xa=`<script>(function(){
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
})();<\/script>`,Qa=`<script>(function(){
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
})();<\/script>`,Za=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Ka.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,Ja=`<script>(function(){
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
})();<\/script>`;function to(e,t){const n=Qa+Ya+Xa+(t!=null&&t.screenshot?Za:"")+Ja,r=e.match(/<head[^>]*>/i);if(!r)return n+e;const o=r.index+r[0].length;return e.slice(0,o)+n+e.slice(o)}var el=Object.defineProperty,Wn=(e,t)=>el(e,"name",{value:t,configurable:!0});function An(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}Wn(An,"setRef");function Po(...e){return t=>{let n=!1;const r=e.map(o=>{const i=An(o,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let o=0;o<r.length;o++){const i=r[o];typeof i=="function"?i():An(e[o],null)}}}}Wn(Po,"composeRefs");function V(...e){return s.useCallback(Po(...e),e)}Wn(V,"useComposedRefs");var tl=Object.defineProperty,pe=(e,t)=>tl(e,"name",{value:t,configurable:!0});function nl(e,t){const n=s.createContext(t);n.displayName=e+"Context";const r=pe(i=>{const{children:l,...c}=i,u=s.useMemo(()=>c,Object.values(c));return a.jsx(n.Provider,{value:u,children:l})},"Provider");r.displayName=e+"Provider";function o(i,l={}){const{optional:c=!1}=l,u=s.useContext(n);if(u)return u;if(t!==void 0)return t;if(!c)throw new Error(`\`${i}\` must be used within \`${e}\``)}return pe(o,"useContext"),[r,o]}pe(nl,"createContext");function Ne(e,t=[]){let n=[];function r(i,l){const c=s.createContext(l);c.displayName=i+"Context";const u=n.length;n=[...n,l];const f=pe(h=>{var k;const{scope:p,children:v,...m}=h,b=((k=p==null?void 0:p[e])==null?void 0:k[u])||c,y=s.useMemo(()=>m,Object.values(m));return a.jsx(b.Provider,{value:y,children:v})},"Provider");f.displayName=i+"Provider";function g(h,p,v={}){var k;const{optional:m=!1}=v,b=((k=p==null?void 0:p[e])==null?void 0:k[u])||c,y=s.useContext(b);if(y)return y;if(l!==void 0)return l;if(!m)throw new Error(`\`${h}\` must be used within \`${i}\``)}return pe(g,"useContext"),[f,g]}pe(r,"createContext");const o=pe(()=>{const i=n.map(l=>s.createContext(l));return pe(function(c){const u=(c==null?void 0:c[e])||i;return s.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])},"useScope")},"createScope");return o.scopeName=e,[r,Io(o,...t)]}pe(Ne,"createContextScope");function Io(...e){const t=e[0];if(e.length===1)return t;const n=pe(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return pe(function(i){const l=r.reduce((c,{useScope:u,scopeName:f})=>{const h=u(i)[`__scope${f}`];return{...c,...h}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope");return n.scopeName=t.scopeName,n}pe(Io,"composeContextScopes");var rl=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},ol=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},il=Object.defineProperty,sl=(e,t)=>il(e,"name",{value:t,configurable:!0}),no=Ve[" useEffectEvent ".trim().toString()],ro=Ve[" useInsertionEffect ".trim().toString()];function To(e){if(typeof no=="function")return no(e);const t=s.useRef(()=>{throw new Error("Cannot call an event handler while rendering.")});return typeof ro=="function"?ro(()=>{t.current=e}):ol(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}sl(To,"useEffectEvent");var al=Object.defineProperty,It=(e,t)=>al(e,"name",{value:t,configurable:!0}),ll=Ve[" useInsertionEffect ".trim().toString()]||rl;function qn({prop:e,defaultProp:t,onChange:n=It(()=>{},"onChange"),caller:r}){const[o,i,l]=Mo({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:o,f=s.useCallback(g=>{var h;if(c){const p=Ao(g)?g(e):g;p!==e&&((h=l.current)==null||h.call(l,p))}else i(g)},[c,e,i,l]);return[u,f]}It(qn,"useControllableState");function Mo({defaultProp:e,onChange:t}){const[n,r]=s.useState(e),o=s.useRef(n),i=s.useRef(t);return ll(()=>{i.current=t},[t]),s.useEffect(()=>{var l;o.current!==n&&((l=i.current)==null||l.call(i,n),o.current=n)},[n,o]),[n,r,i]}It(Mo,"useUncontrolledState");function Ao(e){return typeof e=="function"}It(Ao,"isFunction");var oo=Symbol("RADIX:SYNC_STATE");function cl(e,t,n,r){const{prop:o,defaultProp:i,onChange:l,caller:c}=t,u=o!==void 0,f=To(l),g=[{...n,state:i}];r&&g.push(r);const[h,p]=s.useReducer((y,k)=>{if(k.type===oo)return{...y,state:k.state};const x=e(y,k);return u&&!Object.is(x.state,y.state)&&f(x.state),x},...g),v=h.state,m=s.useRef(v);s.useEffect(()=>{m.current!==v&&(m.current=v,u||f(v))},[v,m,u]);const b=s.useMemo(()=>o!==void 0?{...h,state:o}:h,[h,o]);return s.useEffect(()=>{u&&!Object.is(o,h.state)&&p({type:oo,state:o})},[o,h.state,u]),[b,p]}It(cl,"useControllableStateReducer");var ul=Object.defineProperty,be=(e,t)=>ul(e,"name",{value:t,configurable:!0});function jo(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];jn(o)&&typeof Gt=="function"&&(o=Gt(o._payload)),s.Children.forEach(o,p=>{var v;if(Lo(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;jn(b)&&typeof Gt=="function"&&(b=Gt(b._payload)),l=fl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?_o(l):void 0,g=V(r,f);if(!l){if(o||o===0)throw new Error(c?ml(e):pl(e));return o}const h=Do(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}be(jo,"createSlot");var No=Symbol.for("radix.slottable");function dl(e){const t=be(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=No,t}be(dl,"createSlottable");var fl=be((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function Do(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}be(Do,"mergeProps");function _o(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}be(_o,"getElementRef");function Lo(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===No}be(Lo,"isSlottable");var hl=Symbol.for("react.lazy");function jn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===hl&&"_payload"in e&&Oo(e._payload)}be(jn,"isLazyComponent");function Oo(e){return typeof e=="object"&&e!==null&&"then"in e}be(Oo,"isPromiseLike");var pl=be(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),ml=be(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Gt=Ve[" use ".trim().toString()],gl=Object.defineProperty,vl=(e,t)=>gl(e,"name",{value:t,configurable:!0}),bl=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ee=bl.reduce((e,t)=>{const n=jo(`Primitive.${t}`),r=s.forwardRef((o,i)=>{const{asChild:l,...c}=o,u=l?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Kn(e,t){e&&xo.flushSync(()=>e.dispatchEvent(t))}vl(Kn,"dispatchDiscreteCustomEvent");var xl=Object.defineProperty,xe=(e,t)=>xl(e,"name",{value:t,configurable:!0});function pt(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];Nn(o)&&typeof Wt=="function"&&(o=Wt(o._payload)),s.Children.forEach(o,p=>{var v;if(Ho(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Nn(b)&&typeof Wt=="function"&&(b=Wt(b._payload)),l=wl(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?Bo(l):void 0,g=V(r,f);if(!l){if(o||o===0)throw new Error(c?Cl(e):kl(e));return o}const h=$o(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}xe(pt,"createSlot");var Fo=Symbol.for("radix.slottable");function yl(e){const t=xe(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=Fo,t}xe(yl,"createSlottable");var wl=xe((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function $o(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}xe($o,"mergeProps");function Bo(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}xe(Bo,"getElementRef");function Ho(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Fo}xe(Ho,"isSlottable");var Sl=Symbol.for("react.lazy");function Nn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Sl&&"_payload"in e&&Uo(e._payload)}xe(Nn,"isLazyComponent");function Uo(e){return typeof e=="object"&&e!==null&&"then"in e}xe(Uo,"isPromiseLike");var kl=xe(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),Cl=xe(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Wt=Ve[" use ".trim().toString()],El=Object.defineProperty,ne=(e,t)=>El(e,"name",{value:t,configurable:!0});function zo(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=ne(b=>{const{scope:y,children:k}=b,x=s.useRef(null),w=s.useRef(new Map).current;return a.jsx(o,{scope:y,itemMap:w,collectionRef:x,children:k})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=pt(c),f=s.forwardRef((b,y)=>{const{scope:k,children:x}=b,w=i(c,k),S=V(y,w.collectionRef);return a.jsx(u,{ref:S,children:x})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=pt(g),v=s.forwardRef((b,y)=>{const{scope:k,children:x,...w}=b,S=s.useRef(null),R=V(y,S),P=i(g,k);return s.useEffect(()=>(P.itemMap.set(S,{ref:S,...w}),()=>void P.itemMap.delete(S))),a.jsx(p,{[h]:"",ref:R,children:x})});v.displayName=g;function m(b){const y=i(e+"CollectionConsumer",b);return s.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const w=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(y.itemMap.values()).sort((P,A)=>w.indexOf(P.ref.current)-w.indexOf(A.ref.current))},[y.collectionRef,y.itemMap])}return ne(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}ne(zo,"createCollection");var io=new WeakMap,Y,de,Cn=(de=class extends Map{constructor(n){super(n);bn(this,Y);Ct(this,Y,[...super.keys()]),io.set(this,!0)}set(n,r){return io.get(this)&&(this.has(n)?F(this,Y)[F(this,Y).indexOf(n)]=n:F(this,Y).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=F(this,Y).length,c=Yn(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(i?0:1);c<0&&u++;const h=[...F(this,Y)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],y=p;p=this.get(b),this.delete(b),this.set(b,y)}return this}with(n,r,o){const i=new de(this);return i.insert(n,r,o),i}before(n){const r=F(this,Y).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=F(this,Y).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=F(this,Y).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=F(this,Y).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Ct(this,Y,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,Y).splice(F(this,Y).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=Xt(F(this,Y),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=Xt(F(this,Y),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,Y).indexOf(n)}keyAt(n){return Xt(F(this,Y),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new de(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new de(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new de(r)}toReversed(){const n=new de;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new de(r)}slice(n,r){const o=new de;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},Y=new WeakMap,ne(de,"OrderedDict"),de);function Xt(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=Vo(e,t);return n===-1?void 0:e[n]}ne(Xt,"at");function Vo(e,t){const n=e.length,r=Yn(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}ne(Vo,"toSafeIndex");function Yn(e){return e!==e||e===0?0:Math.trunc(e)}ne(Yn,"toSafeInteger");function Rl(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Cn,setItemMap:ne(()=>{},"setItemMap")}),l=ne(({state:w,...S})=>w?a.jsx(u,{...S,state:w}):a.jsx(c,{...S}),"CollectionProvider");l.displayName=t;const c=ne(w=>{const S=y();return a.jsx(u,{...w,state:S})},"CollectionInit");c.displayName=t+"Init";const u=ne(w=>{const{scope:S,children:R,state:P}=w,A=s.useRef(null),[I,T]=s.useState(null),q=V(A,T),[H,j]=P;return s.useEffect(()=>{if(!I)return;const L=qo(()=>{});return L.observe(I,{childList:!0,subtree:!0}),()=>{L.disconnect()}},[I]),a.jsx(o,{scope:S,itemMap:H,setItemMap:j,collectionRef:q,collectionRefObject:A,collectionElement:I,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=pt(f),h=s.forwardRef((w,S)=>{const{scope:R,children:P}=w,A=i(f,R),I=V(S,A.collectionRef);return a.jsx(g,{ref:I,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=pt(p),b=s.forwardRef((w,S)=>{const{scope:R,children:P,...A}=w,I=s.useRef(null),[T,q]=s.useState(null),H=V(S,I,q),j=i(p,R),{setItemMap:L}=j,U=s.useRef(A);Go(U.current,A)||(U.current=A);const Z=U.current;return s.useEffect(()=>{const ae=Z;return L(N=>T?N.has(T)?N.set(T,{...ae,element:T}).toSorted(Dn):(N.set(T,{...ae,element:T}),N.toSorted(Dn)):N),()=>{L(N=>!T||!N.has(T)?N:(N.delete(T),new Cn(N)))}},[T,Z,L]),a.jsx(m,{[v]:"",ref:H,children:P})});b.displayName=p;function y(){return s.useState(new Cn)}ne(y,"useInitCollection");function k(w){const{itemMap:S}=i(e+"CollectionConsumer",w);return S}return ne(k,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:k,useInitCollection:y}]}ne(Rl,"createCollection");function Go(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}ne(Go,"shallowEqual");function Wo(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}ne(Wo,"isElementPreceding");function Dn(e,t){return!e[1].element||!t[1].element?0:Wo(e[1].element,t[1].element)?-1:1}ne(Dn,"sortByDocumentPosition");function qo(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}ne(qo,"getChildListObserver");var Pl=Object.defineProperty,Il=(e,t)=>Pl(e,"name",{value:t,configurable:!0}),Tl=s.createContext(void 0);function Ko(e){const t=s.useContext(Tl);return e||t||"ltr"}Il(Ko,"useDirection");var Ml=Object.defineProperty,Al=(e,t)=>Ml(e,"name",{value:t,configurable:!0});function ze(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}Al(ze,"useCallbackRef");var jl=Object.defineProperty,te=(e,t)=>jl(e,"name",{value:t,configurable:!0}),_n="dismissableLayer.update",Nl="dismissableLayer.pointerDownOutside",Dl="dismissableLayer.focusOutside",so,Yo=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set,dismissableSurfaces:new Set}),_l=s.forwardRef(te(function(t,n){const{disableOutsidePointerEvents:r=!1,deferPointerDownOutside:o=!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:c,onInteractOutside:u,onDismiss:f,...g}=t,h=s.useContext(Yo),[p,v]=s.useState(null),m=(p==null?void 0:p.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,b]=s.useState({}),y=V(n,v),k=Array.from(h.layers),[x]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),w=x?k.indexOf(x):-1,S=p?k.indexOf(p):-1,R=h.layersWithOutsidePointerEventsDisabled.size>0,P=S>=w,A=s.useRef(!1),I=Xo(j=>{l==null||l(j),u==null||u(j),j.defaultPrevented||f==null||f()},{ownerDocument:m,deferPointerDownOutside:o,isDeferredPointerDownOutsideRef:A,dismissableSurfaces:h.dismissableSurfaces,shouldHandlePointerDownOutside:s.useCallback(j=>{if(!(j instanceof Node))return!1;const L=[...h.branches].some(U=>U.contains(j));return P&&!L},[h.branches,P])}),T=Qo(j=>{if(o&&A.current)return;const L=j.target;[...h.branches].some(Z=>Z.contains(L))||(c==null||c(j),u==null||u(j),j.defaultPrevented||f==null||f())},m),q=p?S===k.length-1:!1,H=ze(j=>{j.key==="Escape"&&(i==null||i(j),!j.defaultPrevented&&f&&(j.preventDefault(),f()))});return s.useEffect(()=>{if(q)return m.addEventListener("keydown",H,{capture:!0}),()=>m.removeEventListener("keydown",H,{capture:!0})},[m,q,H]),s.useEffect(()=>{if(p)return r&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(so=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(p)),h.layers.add(p),Ln(),()=>{r&&(h.layersWithOutsidePointerEventsDisabled.delete(p),h.layersWithOutsidePointerEventsDisabled.size===0&&(m.body.style.pointerEvents=so))}},[p,m,r,h]),s.useEffect(()=>()=>{p&&(h.layers.delete(p),h.layersWithOutsidePointerEventsDisabled.delete(p),Ln())},[p,h]),s.useEffect(()=>{const j=te(()=>b({}),"handleUpdate");return document.addEventListener(_n,j),()=>document.removeEventListener(_n,j)},[]),a.jsx(Ee.div,{...g,ref:y,style:{pointerEvents:R?P?"auto":"none":void 0,...t.style},onFocusCapture:$(t.onFocusCapture,T.onFocusCapture),onBlurCapture:$(t.onBlurCapture,T.onBlurCapture),onPointerDownCapture:$(t.onPointerDownCapture,I.onPointerDownCapture)})},"DismissableLayer"));function Ll(){const e=s.useContext(Yo),[t,n]=s.useState(null);return s.useEffect(()=>{if(t)return e.dismissableSurfaces.add(t),()=>{e.dismissableSurfaces.delete(t)}},[t,e.dismissableSurfaces]),n}te(Ll,"useDismissableLayerSurface");var Ol=te(()=>!0,"IS_TRUE");function Xo(e,t){const{ownerDocument:n=globalThis==null?void 0:globalThis.document,deferPointerDownOutside:r=!1,isDeferredPointerDownOutsideRef:o,dismissableSurfaces:i,shouldHandlePointerDownOutside:l=Ol}=t,c=ze(e),u=s.useRef(!1),f=s.useRef(!1),g=s.useRef(new Map),h=s.useRef(()=>{});return s.useEffect(()=>{function p(){f.current=!1,o.current=!1,g.current.clear()}te(p,"resetOutsideInteraction");function v(){return Array.from(g.current.values()).some(Boolean)}te(v,"isOutsideInteractionIntercepted");function m(w){if(!f.current)return;const S=w.target;S instanceof Node&&[...i].some(P=>P.contains(S))||g.current.set(w.type,!0),w.type==="click"&&window.setTimeout(()=>{f.current&&h.current()},0)}te(m,"handleInteractionCapture");function b(w){f.current&&g.current.set(w.type,!1)}te(b,"handleInteractionBubble");const y=te(w=>{if(w.target&&!u.current){let S=function(){n.removeEventListener("click",h.current);const P=v();p(),P||Xn(Nl,c,R,{discrete:!0})};if(te(S,"handleAndDispatchPointerDownOutsideEvent"),!l(w.target)){n.removeEventListener("click",h.current),p(),u.current=!1;return}const R={originalEvent:w};f.current=!0,o.current=r&&w.button===0,g.current.clear(),!r||w.button!==0?S():(n.removeEventListener("click",h.current),h.current=S,n.addEventListener("click",h.current,{once:!0}))}else n.removeEventListener("click",h.current),p();u.current=!1},"handlePointerDown"),k=["pointerup","mousedown","mouseup","touchstart","touchend","click"];for(const w of k)n.addEventListener(w,m,!0),n.addEventListener(w,b);const x=window.setTimeout(()=>{n.addEventListener("pointerdown",y)},0);return()=>{window.clearTimeout(x),n.removeEventListener("pointerdown",y),n.removeEventListener("click",h.current);for(const w of k)n.removeEventListener(w,m,!0),n.removeEventListener(w,b)}},[n,c,r,o,i,l]),{onPointerDownCapture:te(()=>u.current=!0,"onPointerDownCapture")}}te(Xo,"usePointerDownOutside");function Qo(e,t=globalThis==null?void 0:globalThis.document){const n=ze(e),r=s.useRef(!1);return s.useEffect(()=>{const o=te(i=>{i.target&&!r.current&&Xn(Dl,n,{originalEvent:i},{discrete:!1})},"handleFocus");return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:te(()=>r.current=!0,"onFocusCapture"),onBlurCapture:te(()=>r.current=!1,"onBlurCapture")}}te(Qo,"useFocusOutside");function Ln(){const e=new CustomEvent(_n);document.dispatchEvent(e)}te(Ln,"dispatchUpdate");function Xn(e,t,n,{discrete:r}){const o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Kn(o,i):o.dispatchEvent(i)}te(Xn,"handleAndDispatchCustomEvent");var Fl=Object.defineProperty,Qn=(e,t)=>Fl(e,"name",{value:t,configurable:!0}),qt=0,Ce=null;function $l(e){return Zn(),e.children}Qn($l,"FocusGuards");function Zn(){s.useEffect(()=>{Ce||(Ce={start:On(),end:On()});const{start:e,end:t}=Ce;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),qt++,()=>{qt===1&&(Ce==null||Ce.start.remove(),Ce==null||Ce.end.remove(),Ce=null),qt=Math.max(0,qt-1)}},[])}Qn(Zn,"useFocusGuards");function On(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}Qn(On,"createFocusGuard");var Bl=Object.defineProperty,ce=(e,t)=>Bl(e,"name",{value:t,configurable:!0}),En="focusScope.autoFocusOnMount",Rn="focusScope.autoFocusOnUnmount",ao={bubbles:!1,cancelable:!0},Hl=s.forwardRef(ce(function(t,n){const{loop:r=!1,trapped:o=!1,onMountAutoFocus:i,onUnmountAutoFocus:l,...c}=t,[u,f]=s.useState(null),g=ze(i),h=ze(l),p=s.useRef(null),v=V(n,f),m=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(o){let y=function(S){if(m.paused||!u)return;const R=S.target;u.contains(R)?p.current=R:Ae(p.current,{select:!0})},k=function(S){if(m.paused||!u)return;const R=S.relatedTarget;R!==null&&(u.contains(R)||Ae(p.current,{select:!0}))},x=function(S){if(document.activeElement===document.body)for(const P of S)P.removedNodes.length>0&&Ae(u)};ce(y,"handleFocusIn"),ce(k,"handleFocusOut"),ce(x,"handleMutations"),document.addEventListener("focusin",y),document.addEventListener("focusout",k);const w=new MutationObserver(x);return u&&w.observe(u,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",k),w.disconnect()}}},[o,u,m.paused]),s.useEffect(()=>{if(u){lo.add(m);const y=document.activeElement;if(!u.contains(y)){const x=new CustomEvent(En,ao);u.addEventListener(En,g),u.dispatchEvent(x),x.defaultPrevented||(Zo(ri(Jn(u)),{select:!0}),document.activeElement===y&&Ae(u))}return()=>{u.removeEventListener(En,g),setTimeout(()=>{const x=new CustomEvent(Rn,ao);u.addEventListener(Rn,h),u.dispatchEvent(x),x.defaultPrevented||Ae(y??document.body,{select:!0}),u.removeEventListener(Rn,h),lo.remove(m)},0)}}},[u,g,h,m]);const b=s.useCallback(y=>{if(!r&&!o||m.paused)return;const k=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,x=document.activeElement;if(k&&x){const w=y.currentTarget,[S,R]=Jo(w);S&&R?!y.shiftKey&&x===R?(y.preventDefault(),r&&Ae(S,{select:!0})):y.shiftKey&&x===S&&(y.preventDefault(),r&&Ae(R,{select:!0})):x===w&&y.preventDefault()}},[r,o,m.paused]);return a.jsx(Ee.div,{tabIndex:-1,...c,ref:v,onKeyDown:b})},"FocusScope"));function Zo(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Ae(r,{select:t}),document.activeElement!==n)return}ce(Zo,"focusFirst");function Jo(e){const t=Jn(e),n=Fn(t,e),r=Fn(t.reverse(),e);return[n,r]}ce(Jo,"getTabbableEdges");function Jn(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:ce(r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;n.nextNode();)t.push(n.currentNode);return t}ce(Jn,"getTabbableCandidates");function Fn(e,t){const n=typeof t.checkVisibility=="function"&&t.checkVisibility({checkVisibilityCSS:!0});for(const r of e)if(!(n?!r.checkVisibility({checkVisibilityCSS:!0}):ei(r,{upTo:t})))return r}ce(Fn,"findVisible");function ei(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}ce(ei,"isHidden");function ti(e){return e instanceof HTMLInputElement&&"select"in e}ce(ti,"isSelectableInput");function Ae(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&ti(e)&&t&&e.select()}}ce(Ae,"focus");var lo=ni();function ni(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=$n(e,t),e.unshift(t)},remove(t){var n;e=$n(e,t),(n=e[0])==null||n.resume()}}}ce(ni,"createFocusScopesStack");function $n(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}ce($n,"arrayRemove");function ri(e){return e.filter(t=>t.tagName!=="A")}ce(ri,"removeLinks");var Ul=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},zl=Object.defineProperty,Vl=(e,t)=>zl(e,"name",{value:t,configurable:!0}),Gl=Ve[" useId ".trim().toString()]||(()=>{}),Wl=0;function en(e){const[t,n]=s.useState(Gl());return Ul(()=>{e||n(r=>r??String(Wl++))},[e]),e||(t?`radix-${t}`:"")}Vl(en,"useId");var Qt=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},ql=Object.defineProperty,Kl=(e,t)=>ql(e,"name",{value:t,configurable:!0});function oi(e){const[t,n]=s.useState(void 0);return Qt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,c;if("borderBoxSize"in i){const u=i.borderBoxSize,f=Array.isArray(u)?u[0]:u;l=f.inlineSize,c=f.blockSize}else l=e.offsetWidth,c=e.offsetHeight;n({width:l,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}Kl(oi,"useSize");var Yl=Object.defineProperty,He=(e,t)=>Yl(e,"name",{value:t,configurable:!0}),ii="Popper",[si,ai]=Ne(ii),[Xl,li]=si(ii),Ql=He(e=>{const{__scopePopper:t,children:n}=e,[r,o]=s.useState(null),[i,l]=s.useState(void 0);return a.jsx(Xl,{scope:t,anchor:r,onAnchorChange:o,placementState:i,setPlacementState:l,children:n})},"Popper"),Zl="PopperAnchor",Jl=s.forwardRef(He(function(t,n){const{__scopePopper:r,virtualRef:o,...i}=t,l=li(Zl,r),c=s.useRef(null),u=l.onAnchorChange,f=s.useCallback(b=>{c.current=b,b&&u(b)},[u]),g=V(n,f),h=s.useRef(null);s.useEffect(()=>{if(!o)return;const b=h.current;h.current=o.current,b!==h.current&&u(h.current)});const p=l.placementState&&nn(l.placementState),v=p==null?void 0:p[0],m=p==null?void 0:p[1];return o?null:a.jsx(Ee.div,{"data-radix-popper-side":v,"data-radix-popper-align":m,...i,ref:g})},"PopperAnchor")),ci="PopperContent",[ec,ud]=si(ci),tc=s.forwardRef(He(function(t,n){var Pe,le,Ie,rt,Mt,At,ot;const{__scopePopper:r,side:o="bottom",sideOffset:i=0,align:l="center",alignOffset:c=0,arrowPadding:u=0,avoidCollisions:f=!0,collisionBoundary:g=[],collisionPadding:h=0,sticky:p="partial",hideWhenDetached:v=!1,updatePositionStrategy:m="optimized",onPlaced:b,...y}=t,k=li(ci,r),[x,w]=s.useState(null),S=V(n,w),[R,P]=s.useState(null),A=oi(R),I=(A==null?void 0:A.width)??0,T=(A==null?void 0:A.height)??0,q=o+(l!=="center"?"-"+l:""),H=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},j=Array.isArray(g)?g:[g],L=j.length>0,U={padding:H,boundary:j.filter(ui),altBoundary:L},{refs:Z,floatingStyles:ae,placement:N,isPositioned:we,middlewareData:_}=Rs({strategy:"fixed",placement:q,whileElementsMounted:He((...Ge)=>Ds(...Ge,{animationFrame:m==="always"}),"whileElementsMounted"),elements:{reference:k.anchor},middleware:[Ps({mainAxis:i+T,alignmentAxis:c}),f&&Is({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?Ts():void 0,...U}),f&&Ms({...U}),As({...U,apply:He(({elements:Ge,rects:jt,availableWidth:Nt,availableHeight:We})=>{const{width:vt,height:sn}=jt.reference,_e=Ge.floating.style;_e.setProperty("--radix-popper-available-width",`${Nt}px`),_e.setProperty("--radix-popper-available-height",`${We}px`),_e.setProperty("--radix-popper-anchor-width",`${vt}px`),_e.setProperty("--radix-popper-anchor-height",`${sn}px`)},"apply")}),R&&js({element:R,padding:u}),nc({arrowWidth:I,arrowHeight:T}),v&&Ns({strategy:"referenceHidden",...U,boundary:L?U.boundary:void 0})]}),M=k.setPlacementState;Qt(()=>(M(N),()=>{M(void 0)}),[N,M]);const[J,ie]=nn(N),K=ze(b);Qt(()=>{we&&(K==null||K())},[we,K]);const De=(Pe=_.arrow)==null?void 0:Pe.x,Re=(le=_.arrow)==null?void 0:le.y,me=((Ie=_.arrow)==null?void 0:Ie.centerOffset)!==0,[Se,he]=s.useState();return Qt(()=>{x&&he(window.getComputedStyle(x).zIndex)},[x]),a.jsx("div",{ref:Z.setFloating,"data-radix-popper-content-wrapper":"",style:{...ae,transform:we?ae.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Se,"--radix-popper-transform-origin":[(rt=_.transformOrigin)==null?void 0:rt.x,(Mt=_.transformOrigin)==null?void 0:Mt.y].join(" "),...((At=_.hide)==null?void 0:At.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:a.jsx(ec,{scope:r,placedSide:J,placedAlign:ie,onArrowChange:P,arrowX:De,arrowY:Re,shouldHideArrow:me,children:a.jsx(Ee.div,{"data-side":J,"data-align":ie,...y,ref:S,style:{...y.style,animation:we?(ot=y.style)==null?void 0:ot.animation:"none"}})})})},"PopperContent"));function ui(e){return e!==null}He(ui,"isNotNull");var nc=He(e=>({name:"transformOrigin",options:e,fn(t){var y,k,x;const{placement:n,rects:r,middlewareData:o}=t,l=((y=o.arrow)==null?void 0:y.centerOffset)!==0,c=l?0:e.arrowWidth,u=l?0:e.arrowHeight,[f,g]=nn(n),h={start:"0%",center:"50%",end:"100%"}[g],p=(((k=o.arrow)==null?void 0:k.x)??0)+c/2,v=(((x=o.arrow)==null?void 0:x.y)??0)+u/2;let m="",b="";return f==="bottom"?(m=l?h:`${p}px`,b=`${-u}px`):f==="top"?(m=l?h:`${p}px`,b=`${r.floating.height+u}px`):f==="right"?(m=`${-u}px`,b=l?h:`${v}px`):f==="left"&&(m=`${r.floating.width+u}px`,b=l?h:`${v}px`),{data:{x:m,y:b}}}}),"transformOrigin");function nn(e){const[t,n="center"]=e.split("-");return[t,n]}He(nn,"getSideAndAlignFromPlacement");var rc=Ql,oc=Jl,ic=tc,sc=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},ac=Object.defineProperty,lc=(e,t)=>ac(e,"name",{value:t,configurable:!0}),cc=s.forwardRef(lc(function(t,n){var u;const{container:r,...o}=t,[i,l]=s.useState(!1);sc(()=>l(!0),[]);const c=r||i&&((u=globalThis==null?void 0:globalThis.document)==null?void 0:u.body);return c?xo.createPortal(a.jsx(Ee.div,{...o,ref:n}),c):null},"Portal")),co=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},uc=Object.defineProperty,je=(e,t)=>uc(e,"name",{value:t,configurable:!0});function di(e,t){return s.useReducer((n,r)=>t[n][r]??n,e)}je(di,"useStateMachine");var er=je(e=>{const{present:t,children:n}=e,r=fi(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),i=hi(r.ref,pi(o));return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:i}):null},"Presence");function fi(e){const[t,n]=s.useState(),r=s.useRef(null),o=s.useRef(e),i=s.useRef("none"),l=s.useRef(void 0),c=e?"mounted":"unmounted",[u,f]=di(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{u==="mounted"?(i.current=l.current??ft(r.current),l.current=void 0):i.current="none"},[u]),co(()=>{const g=r.current,h=o.current;if(h!==e){const v=i.current,m=ft(g);e?(l.current=m,f("MOUNT")):m==="none"||(g==null?void 0:g.display)==="none"?f("UNMOUNT"):f(h&&v!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),co(()=>{if(t){let g;const h=t.ownerDocument.defaultView??window,p=je(m=>{const y=ft(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&y&&(f("ANIMATION_END"),!o.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",g=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},"handleAnimationEnd"),v=je(m=>{m.target===t&&(i.current=ft(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",v),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{h.clearTimeout(g),t.removeEventListener("animationstart",v),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:s.useCallback(g=>{if(g){const h=getComputedStyle(g);r.current=h,l.current=ft(h)}else r.current=null;n(g)},[])}}je(fi,"usePresence");function Bn(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}je(Bn,"setRef");function hi(...e){const t=s.useRef(e);return t.current=e,s.useCallback(n=>{const r=t.current;let o=!1;const i=r.map(l=>{const c=Bn(l,n);return!o&&typeof c=="function"&&(o=!0),c});if(o)return()=>{for(let l=0;l<i.length;l++){const c=i[l];typeof c=="function"?c():Bn(r[l],null)}}},[])}je(hi,"useStableComposedRefs");function ft(e){return(e==null?void 0:e.animationName)||"none"}je(ft,"getAnimationName");function pi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}je(pi,"getElementRef");var dc=Object.defineProperty,ye=(e,t)=>dc(e,"name",{value:t,configurable:!0});function Rt(e){const t=s.forwardRef((n,r)=>{let{children:o,...i}=n,l=null,c=!1;const u=[];Hn(o)&&typeof Kt=="function"&&(o=Kt(o._payload)),s.Children.forEach(o,p=>{var v;if(bi(p)){c=!0;const m=p;let b="child"in m.props?m.props.child:m.props.children;Hn(b)&&typeof Kt=="function"&&(b=Kt(b._payload)),l=hc(m,b),u.push((v=l==null?void 0:l.props)==null?void 0:v.children)}else u.push(p)}),l?l=s.cloneElement(l,void 0,u):!c&&s.Children.count(o)===1&&s.isValidElement(o)&&(l=o);const f=l?vi(l):void 0,g=V(r,f);if(!l){if(o||o===0)throw new Error(c?gc(e):mc(e));return o}const h=gi(i,l.props??{});return l.type!==s.Fragment&&(h.ref=r?g:f),s.cloneElement(l,h)});return t.displayName=`${e}.Slot`,t}ye(Rt,"createSlot");var mi=Symbol.for("radix.slottable");function fc(e){const t=ye(n=>"child"in n?n.children(n.child):n.children,"Slottable");return t.displayName=`${e}.Slottable`,t.__radixId=mi,t}ye(fc,"createSlottable");var hc=ye((e,t)=>{if("child"in e.props){const n=e.props.child;return s.isValidElement(n)?s.cloneElement(n,void 0,e.props.children(n.props.children)):null}return s.isValidElement(t)?t:null},"getSlottableElementFromSlottable");function gi(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...c)=>{const u=i(...c);return o(...c),u}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}ye(gi,"mergeProps");function vi(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}ye(vi,"getElementRef");function bi(e){return s.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===mi}ye(bi,"isSlottable");var pc=Symbol.for("react.lazy");function Hn(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===pc&&"_payload"in e&&xi(e._payload)}ye(Hn,"isLazyComponent");function xi(e){return typeof e=="object"&&e!==null&&"then"in e}ye(xi,"isPromiseLike");var mc=ye(e=>`${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,"createSlotError"),gc=ye(e=>`${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,"createSlottableError"),Kt=Ve[" use ".trim().toString()],vc=Object.defineProperty,re=(e,t)=>vc(e,"name",{value:t,configurable:!0});function yi(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=re(b=>{const{scope:y,children:k}=b,x=s.useRef(null),w=s.useRef(new Map).current;return a.jsx(o,{scope:y,itemMap:w,collectionRef:x,children:k})},"CollectionProvider");l.displayName=t;const c=e+"CollectionSlot",u=Rt(c),f=s.forwardRef((b,y)=>{const{scope:k,children:x}=b,w=i(c,k),S=V(y,w.collectionRef);return a.jsx(u,{ref:S,children:x})});f.displayName=c;const g=e+"CollectionItemSlot",h="data-radix-collection-item",p=Rt(g),v=s.forwardRef((b,y)=>{const{scope:k,children:x,...w}=b,S=s.useRef(null),R=V(y,S),P=i(g,k);return s.useEffect(()=>(P.itemMap.set(S,{ref:S,...w}),()=>void P.itemMap.delete(S))),a.jsx(p,{[h]:"",ref:R,children:x})});v.displayName=g;function m(b){const y=i(e+"CollectionConsumer",b);return s.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const w=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(y.itemMap.values()).sort((P,A)=>w.indexOf(P.ref.current)-w.indexOf(A.ref.current))},[y.collectionRef,y.itemMap])}return re(m,"useCollection"),[{Provider:l,Slot:f,ItemSlot:v},m,r]}re(yi,"createCollection");var uo=new WeakMap,X,fe,Pn=(fe=class extends Map{constructor(n){super(n);bn(this,X);Ct(this,X,[...super.keys()]),uo.set(this,!0)}set(n,r){return uo.get(this)&&(this.has(n)?F(this,X)[F(this,X).indexOf(n)]=n:F(this,X).push(n)),super.set(n,r),this}insert(n,r,o){const i=this.has(r),l=F(this,X).length,c=tr(n);let u=c>=0?c:l+c;const f=u<0||u>=l?-1:u;if(f===this.size||i&&f===this.size-1||f===-1)return this.set(r,o),this;const g=this.size+(i?0:1);c<0&&u++;const h=[...F(this,X)];let p,v=!1;for(let m=u;m<g;m++)if(u===m){let b=h[m];h[m]===r&&(b=h[m+1]),i&&this.delete(r),p=this.get(b),this.set(r,o)}else{!v&&h[m-1]===r&&(v=!0);const b=h[v?m:m-1],y=p;p=this.get(b),this.delete(b),this.set(b,y)}return this}with(n,r,o){const i=new fe(this);return i.insert(n,r,o),i}before(n){const r=F(this,X).indexOf(n)-1;if(!(r<0))return this.entryAt(r)}setBefore(n,r,o){const i=F(this,X).indexOf(n);return i===-1?this:this.insert(i,r,o)}after(n){let r=F(this,X).indexOf(n);if(r=r===-1||r===this.size-1?-1:r+1,r!==-1)return this.entryAt(r)}setAfter(n,r,o){const i=F(this,X).indexOf(n);return i===-1?this:this.insert(i+1,r,o)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return Ct(this,X,[]),super.clear()}delete(n){const r=super.delete(n);return r&&F(this,X).splice(F(this,X).indexOf(n),1),r}deleteAt(n){const r=this.keyAt(n);return r!==void 0?this.delete(r):!1}at(n){const r=Zt(F(this,X),n);if(r!==void 0)return this.get(r)}entryAt(n){const r=Zt(F(this,X),n);if(r!==void 0)return[r,this.get(r)]}indexOf(n){return F(this,X).indexOf(n)}keyAt(n){return Zt(F(this,X),n)}from(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.at(i)}keyFrom(n,r){const o=this.indexOf(n);if(o===-1)return;let i=o+r;return i<0&&(i=0),i>=this.size&&(i=this.size-1),this.keyAt(i)}find(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return i;o++}}findIndex(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return o;o++}return-1}filter(n,r){const o=[];let i=0;for(const l of this)Reflect.apply(n,r,[l,i,this])&&o.push(l),i++;return new fe(o)}map(n,r){const o=[];let i=0;for(const l of this)o.push([l[0],Reflect.apply(n,r,[l,i,this])]),i++;return new fe(o)}reduce(...n){const[r,o]=n;let i=0,l=o??this.at(0);for(const c of this)i===0&&n.length===1?l=c:l=Reflect.apply(r,this,[l,c,i,this]),i++;return l}reduceRight(...n){const[r,o]=n;let i=o??this.at(-1);for(let l=this.size-1;l>=0;l--){const c=this.at(l);l===this.size-1&&n.length===1?i=c:i=Reflect.apply(r,this,[i,c,l,this])}return i}toSorted(n){const r=[...this.entries()].sort(n);return new fe(r)}toReversed(){const n=new fe;for(let r=this.size-1;r>=0;r--){const o=this.keyAt(r),i=this.get(o);n.set(o,i)}return n}toSpliced(...n){const r=[...this.entries()];return r.splice(...n),new fe(r)}slice(n,r){const o=new fe;let i=this.size-1;if(n===void 0)return o;n<0&&(n=n+this.size),r!==void 0&&r>0&&(i=r-1);for(let l=n;l<=i;l++){const c=this.keyAt(l),u=this.get(c);o.set(c,u)}return o}every(n,r){let o=0;for(const i of this){if(!Reflect.apply(n,r,[i,o,this]))return!1;o++}return!0}some(n,r){let o=0;for(const i of this){if(Reflect.apply(n,r,[i,o,this]))return!0;o++}return!1}},X=new WeakMap,re(fe,"OrderedDict"),fe);function Zt(e,t){if("at"in Array.prototype)return Array.prototype.at.call(e,t);const n=wi(e,t);return n===-1?void 0:e[n]}re(Zt,"at");function wi(e,t){const n=e.length,r=tr(t),o=r>=0?r:n+r;return o<0||o>=n?-1:o}re(wi,"toSafeIndex");function tr(e){return e!==e||e===0?0:Math.trunc(e)}re(tr,"toSafeInteger");function bc(e){const t=e+"CollectionProvider",[n,r]=Ne(t),[o,i]=n(t,{collectionElement:null,collectionRef:{current:null},collectionRefObject:{current:null},itemMap:new Pn,setItemMap:re(()=>{},"setItemMap")}),l=re(({state:w,...S})=>w?a.jsx(u,{...S,state:w}):a.jsx(c,{...S}),"CollectionProvider");l.displayName=t;const c=re(w=>{const S=y();return a.jsx(u,{...w,state:S})},"CollectionInit");c.displayName=t+"Init";const u=re(w=>{const{scope:S,children:R,state:P}=w,A=s.useRef(null),[I,T]=s.useState(null),q=V(A,T),[H,j]=P;return s.useEffect(()=>{if(!I)return;const L=Ci(()=>{});return L.observe(I,{childList:!0,subtree:!0}),()=>{L.disconnect()}},[I]),a.jsx(o,{scope:S,itemMap:H,setItemMap:j,collectionRef:q,collectionRefObject:A,collectionElement:I,children:R})},"CollectionProviderImpl");u.displayName=t+"Impl";const f=e+"CollectionSlot",g=Rt(f),h=s.forwardRef((w,S)=>{const{scope:R,children:P}=w,A=i(f,R),I=V(S,A.collectionRef);return a.jsx(g,{ref:I,children:P})});h.displayName=f;const p=e+"CollectionItemSlot",v="data-radix-collection-item",m=Rt(p),b=s.forwardRef((w,S)=>{const{scope:R,children:P,...A}=w,I=s.useRef(null),[T,q]=s.useState(null),H=V(S,I,q),j=i(p,R),{setItemMap:L}=j,U=s.useRef(A);Si(U.current,A)||(U.current=A);const Z=U.current;return s.useEffect(()=>{const ae=Z;return L(N=>T?N.has(T)?N.set(T,{...ae,element:T}).toSorted(Un):(N.set(T,{...ae,element:T}),N.toSorted(Un)):N),()=>{L(N=>!T||!N.has(T)?N:(N.delete(T),new Pn(N)))}},[T,Z,L]),a.jsx(m,{[v]:"",ref:H,children:P})});b.displayName=p;function y(){return s.useState(new Pn)}re(y,"useInitCollection");function k(w){const{itemMap:S}=i(e+"CollectionConsumer",w);return S}return re(k,"useCollection"),[{Provider:l,Slot:h,ItemSlot:b},{createCollectionScope:r,useCollection:k,useInitCollection:y}]}re(bc,"createCollection");function Si(e,t){if(e===t)return!0;if(typeof e!="object"||typeof t!="object"||e==null||t==null)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!Object.prototype.hasOwnProperty.call(t,o)||e[o]!==t[o])return!1;return!0}re(Si,"shallowEqual");function ki(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}re(ki,"isElementPreceding");function Un(e,t){return!e[1].element||!t[1].element?0:ki(e[1].element,t[1].element)?-1:1}re(Un,"sortByDocumentPosition");function Ci(e){return new MutationObserver(n=>{for(const r of n)if(r.type==="childList"){e();return}})}re(Ci,"getChildListObserver");var xc=Object.defineProperty,yc=(e,t)=>xc(e,"name",{value:t,configurable:!0});function Ei(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>((...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)}),[])}yc(Ei,"useCallbackRef");var wc=Object.defineProperty,Sc=(e,t)=>wc(e,"name",{value:t,configurable:!0}),kc=s.createContext(void 0);function Ri(e){const t=s.useContext(kc);return e||t||"ltr"}Sc(Ri,"useDirection");var Cc=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},Ec=Object.defineProperty,nr=(e,t)=>Ec(e,"name",{value:t,configurable:!0}),In=!1;function Pi(){const[e,t]=s.useState(In);return s.useEffect(()=>{In||(In=!0,t(!0))},[]),e}nr(Pi,"useIsHydrated");var Ii=Ve[" useSyncExternalStore ".trim().toString()];function Ti(){return()=>{}}nr(Ti,"subscribe");function Mi(){return Ii(Ti,()=>!0,()=>!1)}nr(Mi,"useIsHydratedModern");var Rc=typeof Ii=="function"?Mi:Pi,Pc=Object.defineProperty,tt=(e,t)=>Pc(e,"name",{value:t,configurable:!0}),Tn="rovingFocusGroup.onEntryFocus",Ic={bubbles:!1,cancelable:!0},rn="RovingFocusGroup",[zn,Ai,Tc]=yi(rn),[Mc,ji]=Ne(rn,[Tc]),[Ac,jc]=Mc(rn),Nc=s.forwardRef(tt(function(t,n){return a.jsx(zn.Provider,{scope:t.__scopeRovingFocusGroup,children:a.jsx(zn.Slot,{scope:t.__scopeRovingFocusGroup,children:a.jsx(Dc,{...t,ref:n})})})},"RovingFocusGroup")),Dc=s.forwardRef(tt(function(t,n){const{__scopeRovingFocusGroup:r,orientation:o,loop:i=!1,dir:l,currentTabStopId:c,defaultCurrentTabStopId:u,onCurrentTabStopIdChange:f,onEntryFocus:g,preventScrollOnEntryFocus:h=!1,...p}=t,v=s.useRef(null),m=V(n,v),b=Ri(l),[y,k]=qn({prop:c,defaultProp:u??null,onChange:f,caller:rn}),[x,w]=s.useState(!1),S=Ei(g),R=Ai(r),P=s.useRef(!1),[A,I]=s.useState(0);return s.useEffect(()=>{const T=v.current;if(T)return T.addEventListener(Tn,S),()=>T.removeEventListener(Tn,S)},[S]),a.jsx(Ac,{scope:r,orientation:o,dir:b,loop:i,currentTabStopId:y,onItemFocus:s.useCallback(T=>k(T),[k]),onItemShiftTab:s.useCallback(()=>w(!0),[]),onFocusableItemAdd:s.useCallback(()=>I(T=>T+1),[]),onFocusableItemRemove:s.useCallback(()=>I(T=>T-1),[]),children:a.jsx(Ee.div,{tabIndex:x||A===0?-1:0,"data-orientation":o,...p,ref:m,style:{outline:"none",...t.style},onMouseDown:$(t.onMouseDown,()=>{P.current=!0}),onFocus:$(t.onFocus,T=>{const q=!P.current;if(T.target===T.currentTarget&&q&&!x){const H=new CustomEvent(Tn,Ic);if(T.currentTarget.dispatchEvent(H),!H.defaultPrevented){const j=R().filter(N=>N.focusable),L=j.find(N=>N.active),U=j.find(N=>N.id===y),ae=[L,U,...j].filter(Boolean).map(N=>N.ref.current);rr(ae,h)}}P.current=!1}),onBlur:$(t.onBlur,()=>w(!1))})})},"RovingFocusGroupImpl")),_c="RovingFocusGroupItem",Lc=s.forwardRef(tt(function(t,n){const{__scopeRovingFocusGroup:r,focusable:o=!0,active:i=!1,tabStopId:l,children:c,...u}=t,f=en(),g=l||f,h=jc(_c,r),p=h.currentTabStopId===g,v=Ai(r),{onFocusableItemAdd:m,onFocusableItemRemove:b,currentTabStopId:y}=h,k=Rc();return Cc(()=>{if(!(!k||!o))return m(),()=>b()},[k,o,m,b]),s.useEffect(()=>{if(!(k||!o))return m(),()=>b()},[k,o,m,b]),a.jsx(zn.ItemSlot,{scope:r,id:g,focusable:o,active:i,children:a.jsx(Ee.span,{tabIndex:p?0:-1,"data-orientation":h.orientation,...u,ref:n,onMouseDown:$(t.onMouseDown,x=>{o?h.onItemFocus(g):x.preventDefault()}),onFocus:$(t.onFocus,()=>h.onItemFocus(g)),onKeyDown:$(t.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){h.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const w=Di(x,h.orientation,h.dir);if(w!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let R=v().filter(P=>P.focusable).map(P=>P.ref.current);if(w==="last")R.reverse();else if(w==="prev"||w==="next"){w==="prev"&&R.reverse();const P=R.indexOf(x.currentTarget);R=h.loop?_i(R,P+1):R.slice(P+1)}setTimeout(()=>rr(R))}}),children:typeof c=="function"?c({isCurrentTabStop:p,hasTabStop:y!=null}):c})})},"RovingFocusGroupItem")),Oc={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ni(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}tt(Ni,"getDirectionAwareKey");function Di(e,t,n){const r=Ni(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Oc[r]}tt(Di,"getFocusIntent");function rr(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}tt(rr,"focusFirst");function _i(e,t){return e.map((n,r)=>e[(t+r)%e.length])}tt(_i,"wrapArray");var Fc=Nc,$c=Lc,Bc=Object.defineProperty,B=(e,t)=>Bc(e,"name",{value:t,configurable:!0}),Hc=["Enter"," "],Uc=["ArrowDown","PageUp","Home"],Li=["ArrowUp","PageDown","End"],zc=[...Uc,...Li],on="Menu",[Vn,Vc,Gc]=zo(on),[nt,Oi]=Ne(on,[Gc,ai,ji]),or=ai(),Fi=ji(),[Wc,Tt]=nt(on),[qc,ir]=nt(on),Kc=B(e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:i,modal:l=!0}=e,c=or(t),[u,f]=s.useState(null),g=s.useRef(!1),h=ze(i),p=Ko(o);return s.useEffect(()=>{const v=B(()=>{g.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},"handleKeyDown"),m=B(()=>g.current=!1,"handlePointer");return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),s.useEffect(()=>{if(!n)return;const v=B(()=>h(!1),"handleBlur");return window.addEventListener("blur",v),()=>window.removeEventListener("blur",v)},[n,h]),a.jsx(rc,{...c,children:a.jsx(Wc,{scope:t,open:n,onOpenChange:h,content:u,onContentChange:f,children:a.jsx(qc,{scope:t,onClose:s.useCallback(()=>h(!1),[h]),isUsingKeyboardRef:g,dir:p,modal:l,children:r})})})},"Menu"),Yc=s.forwardRef(B(function(t,n){const{__scopeMenu:r,...o}=t,i=or(r);return a.jsx(oc,{...i,...o,ref:n})},"MenuAnchor")),$i="MenuPortal",[Xc,Qc]=nt($i,{forceMount:void 0}),Zc=B(e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,i=Tt($i,t);return a.jsx(Xc,{scope:t,forceMount:n,children:a.jsx(er,{present:n||i.open,children:a.jsx(cc,{asChild:!0,container:o,children:r})})})},"MenuPortal"),Ue="MenuContent",[Jc,Bi]=nt(Ue),eu=s.forwardRef(B(function(t,n){const r=Qc(Ue,t.__scopeMenu),{forceMount:o=r.forceMount,...i}=t,l=Tt(Ue,t.__scopeMenu),c=ir(Ue,t.__scopeMenu);return a.jsx(Vn.Provider,{scope:t.__scopeMenu,children:a.jsx(er,{present:o||l.open,children:a.jsx(Vn.Slot,{scope:t.__scopeMenu,children:c.modal?a.jsx(tu,{...i,ref:n}):a.jsx(nu,{...i,ref:n})})})})},"MenuContent")),tu=s.forwardRef(B(function(t,n){const r=Tt(Ue,t.__scopeMenu),o=s.useRef(null),i=V(n,o);return s.useEffect(()=>{const l=o.current;if(l)return Pa(l)},[]),a.jsx(Hi,{...t,ref:i,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:$(t.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentModal")),nu=s.forwardRef(B(function(t,n){const r=Tt(Ue,t.__scopeMenu);return a.jsx(Hi,{...t,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})},"MenuRootContentNonModal")),ru=pt("MenuContent.ScrollLock"),Hi=s.forwardRef(B(function(t,n){const{__scopeMenu:r,loop:o=!1,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:c,disableOutsidePointerEvents:u,onEntryFocus:f,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,disableOutsideScroll:b,...y}=t,k=Tt(Ue,r),x=ir(Ue,r),w=or(r),S=Fi(r),R=Vc(r),[P,A]=s.useState(null),I=s.useRef(null),T=V(n,I,k.onContentChange),q=s.useRef(0),H=s.useRef(""),j=s.useRef(0),L=s.useRef(null),U=s.useRef("right"),Z=s.useRef(0),ae=b?Ia:s.Fragment,N=b?{as:ru,allowPinchZoom:!0}:void 0,we=B(M=>{var he,Pe;const J=H.current+M,ie=R().filter(le=>!le.disabled),K=document.activeElement,De=(he=ie.find(le=>le.ref.current===K))==null?void 0:he.textValue,Re=ie.map(le=>le.textValue),me=Wi(Re,J,De),Se=(Pe=ie.find(le=>le.textValue===me))==null?void 0:Pe.ref.current;B((function le(Ie){H.current=Ie,window.clearTimeout(q.current),Ie!==""&&(q.current=window.setTimeout(()=>le(""),1e3))}),"updateSearch")(J),Se&&setTimeout(()=>Se.focus())},"handleTypeaheadSearch");s.useEffect(()=>()=>window.clearTimeout(q.current),[]),Zn();const _=s.useCallback(M=>{var ie,K;return U.current===((ie=L.current)==null?void 0:ie.side)&&Ki(M,(K=L.current)==null?void 0:K.area)},[]);return a.jsx(Jc,{scope:r,searchRef:H,onItemEnter:s.useCallback(M=>{_(M)&&M.preventDefault()},[_]),onItemLeave:s.useCallback(M=>{var J;_(M)||((J=I.current)==null||J.focus(),A(null))},[_]),onTriggerLeave:s.useCallback(M=>{_(M)&&M.preventDefault()},[_]),pointerGraceTimerRef:j,onPointerGraceIntentChange:s.useCallback(M=>{L.current=M},[]),children:a.jsx(ae,{...N,children:a.jsx(Hl,{asChild:!0,trapped:i,onMountAutoFocus:$(l,M=>{var J;M.preventDefault(),(J=I.current)==null||J.focus({preventScroll:!0})}),onUnmountAutoFocus:c,children:a.jsx(_l,{asChild:!0,disableOutsidePointerEvents:u,onEscapeKeyDown:g,onPointerDownOutside:h,onFocusOutside:p,onInteractOutside:v,onDismiss:m,children:a.jsx(Fc,{asChild:!0,...S,dir:x.dir,orientation:"vertical",loop:o,currentTabStopId:P,onCurrentTabStopIdChange:A,onEntryFocus:$(f,M=>{x.isUsingKeyboardRef.current||M.preventDefault()}),preventScrollOnEntryFocus:!0,children:a.jsx(ic,{role:"menu","aria-orientation":"vertical","data-state":zi(k.open),"data-radix-menu-content":"",dir:x.dir,...w,...y,ref:T,style:{outline:"none",...y.style},onKeyDown:$(y.onKeyDown,M=>{const ie=M.target.closest("[data-radix-menu-content]")===M.currentTarget,K=M.ctrlKey||M.altKey||M.metaKey,De=M.key.length===1;ie&&(M.key==="Tab"&&M.preventDefault(),!K&&De&&we(M.key));const Re=I.current;if(M.target!==Re||!zc.includes(M.key))return;M.preventDefault();const Se=R().filter(he=>!he.disabled).map(he=>he.ref.current);Li.includes(M.key)&&Se.reverse(),Vi(Se)}),onBlur:$(t.onBlur,M=>{M.currentTarget.contains(M.target)||(window.clearTimeout(q.current),H.current="")}),onPointerMove:$(t.onPointerMove,tn(M=>{const J=M.target,ie=Z.current!==M.clientX;if(M.currentTarget.contains(J)&&ie){const K=M.clientX>Z.current?"right":"left";U.current=K,Z.current=M.clientX}}))})})})})})})},"MenuContentImpl")),Gn="MenuItem",fo="menu.itemSelect",ou=s.forwardRef(B(function(t,n){const{disabled:r=!1,onSelect:o,...i}=t,l=s.useRef(null),c=ir(Gn,t.__scopeMenu),u=Bi(Gn,t.__scopeMenu),f=V(n,l),g=s.useRef(!1),h=B(()=>{const p=l.current;if(!r&&p){const v=new CustomEvent(fo,{bubbles:!0,cancelable:!0});p.addEventListener(fo,m=>o==null?void 0:o(m),{once:!0}),Kn(p,v),v.defaultPrevented?g.current=!1:c.onClose()}},"handleSelect");return a.jsx(iu,{...i,ref:f,disabled:r,onClick:$(t.onClick,h),onPointerDown:p=>{var v;(v=t.onPointerDown)==null||v.call(t,p),g.current=!0},onPointerUp:$(t.onPointerUp,p=>{var v;g.current||(v=p.currentTarget)==null||v.click()}),onKeyDown:$(t.onKeyDown,p=>{r||p.target!==p.currentTarget||u.searchRef.current!==""&&p.key===" "||Hc.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})},"MenuItem")),iu=s.forwardRef(B(function(t,n){const{__scopeMenu:r,disabled:o=!1,textValue:i,...l}=t,c=Bi(Gn,r),u=Fi(r),f=s.useRef(null),g=V(n,f),[h,p]=s.useState(!1),[v,m]=s.useState("");return s.useEffect(()=>{const b=f.current;b&&m((b.textContent??"").trim())},[l.children]),a.jsx(Vn.ItemSlot,{scope:r,disabled:o,textValue:i??v,children:a.jsx($c,{asChild:!0,...u,focusable:!o,children:a.jsx(Ee.div,{role:"menuitem","data-highlighted":h?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0,...l,ref:g,onPointerMove:$(t.onPointerMove,tn(b=>{o?c.onItemLeave(b):(c.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:$(t.onPointerLeave,tn(b=>c.onItemLeave(b))),onFocus:$(t.onFocus,()=>p(!0)),onBlur:$(t.onBlur,()=>p(!1))})})})},"MenuItemImpl")),su=s.forwardRef(B(function(t,n){const{checked:r=!1,onCheckedChange:o,...i}=t;return a.jsx(lu,{scope:t.__scopeMenu,checked:r,children:a.jsx(ou,{role:"menuitemcheckbox","aria-checked":Pt(r)?"mixed":r,...i,ref:n,"data-state":sr(r),onSelect:$(i.onSelect,()=>o==null?void 0:o(Pt(r)?!0:!r),{checkForDefaultPrevented:!1})})})},"MenuCheckboxItem")),au="MenuRadioGroup",[dd,fd]=nt(au,{value:void 0,onValueChange:B(()=>{},"onValueChange")}),Ui="MenuItemIndicator",[lu,cu]=nt(Ui,{checked:!1}),uu=s.forwardRef(B(function(t,n){const{__scopeMenu:r,forceMount:o,...i}=t,l=cu(Ui,r);return a.jsx(er,{present:o||Pt(l.checked)||l.checked===!0,children:a.jsx(Ee.span,{...i,ref:n,"data-state":sr(l.checked)})})},"MenuItemIndicator")),du="MenuSub",[hd,pd]=nt(du);function zi(e){return e?"open":"closed"}B(zi,"getOpenState");function Pt(e){return e==="indeterminate"}B(Pt,"isIndeterminate");function sr(e){return Pt(e)?"indeterminate":e?"checked":"unchecked"}B(sr,"getCheckedState");function Vi(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}B(Vi,"focusFirst");function Gi(e,t){return e.map((n,r)=>e[(t+r)%e.length])}B(Gi,"wrapArray");function Wi(e,t,n){const o=t.length>1&&Array.from(t).every(f=>f===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let l=Gi(e,Math.max(i,0));o.length===1&&(l=l.filter(f=>f!==n));const u=l.find(f=>f.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}B(Wi,"getNextMatch");function qi(e,t){const{x:n,y:r}=e;let o=!1;for(let i=0,l=t.length-1;i<t.length;l=i++){const c=t[i],u=t[l],f=c.x,g=c.y,h=u.x,p=u.y;g>r!=p>r&&n<(h-f)*(r-g)/(p-g)+f&&(o=!o)}return o}B(qi,"isPointInPolygon");function Ki(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return qi(n,t)}B(Ki,"isPointerInGraceArea");function tn(e){return t=>t.pointerType==="mouse"?e(t):void 0}B(tn,"whenMouse");var fu=Kc,hu=Yc,pu=Zc,mu=eu,gu=su,vu=uu,bu=Object.defineProperty,mt=(e,t)=>bu(e,"name",{value:t,configurable:!0}),ar="DropdownMenu",[xu,md]=Ne(ar,[Oi]),gt=Oi(),[yu,Yi]=xu(ar),wu=mt(e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:i,onOpenChange:l,modal:c=!0}=e,u=gt(t),f=s.useRef(null),[g,h]=qn({prop:o,defaultProp:i??!1,onChange:l,caller:ar});return a.jsx(yu,{scope:t,triggerId:en(),triggerRef:f,contentId:en(),open:g,onOpenChange:h,onOpenToggle:s.useCallback(()=>h(p=>!p),[h]),modal:c,children:a.jsx(fu,{...u,open:g,onOpenChange:h,dir:r,modal:c,children:n})})},"DropdownMenu"),Su="DropdownMenuTrigger",ku=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,disabled:o=!1,...i}=t,l=Yi(Su,r),c=gt(r),u=V(n,l.triggerRef);return a.jsx(hu,{asChild:!0,...c,children:a.jsx(Ee.button,{type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":o?"":void 0,disabled:o,...i,ref:u,onPointerDown:$(t.onPointerDown,f=>{!o&&f.button===0&&f.ctrlKey===!1&&(l.onOpenToggle(),l.open||f.preventDefault())}),onKeyDown:$(t.onKeyDown,f=>{o||(["Enter"," "].includes(f.key)&&l.onOpenToggle(),f.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(f.key)&&f.preventDefault())})})})},"DropdownMenuTrigger")),Cu=mt(e=>{const{__scopeDropdownMenu:t,...n}=e,r=gt(t);return a.jsx(pu,{...r,...n})},"DropdownMenuPortal"),Eu="DropdownMenuContent",Ru=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=Yi(Eu,r),l=gt(r),c=s.useRef(!1);return a.jsx(mu,{id:i.contentId,"aria-labelledby":i.triggerId,...l,...o,ref:n,onCloseAutoFocus:$(t.onCloseAutoFocus,u=>{var f;c.current||(f=i.triggerRef.current)==null||f.focus(),c.current=!1,u.preventDefault()}),onInteractOutside:$(t.onInteractOutside,u=>{const f=u.detail.originalEvent,g=f.button===0&&f.ctrlKey===!0,h=f.button===2||g;(!i.modal||h)&&(c.current=!0)}),style:{...t.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})},"DropdownMenuContent")),Pu=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=gt(r);return a.jsx(gu,{...i,...o,ref:n})},"DropdownMenuCheckboxItem")),Iu=s.forwardRef(mt(function(t,n){const{__scopeDropdownMenu:r,...o}=t,i=gt(r);return a.jsx(vu,{...i,...o,ref:n})},"DropdownMenuItemIndicator")),Tu=wu,Mu=ku,Au=Cu,Xi=Ru,Qi=Pu,ju=Iu;const Nu=Tu,Du=Mu,_u=e=>e.preventDefault(),Zi=s.forwardRef(({className:e,align:t="start",...n},r)=>a.jsx(Au,{children:a.jsx(Xi,{ref:r,align:t,sideOffset:4,className:Q("z-50 overflow-hidden rounded-md border border-border bg-surface p-1 shadow-lg",e),...n})}));Zi.displayName=Xi.displayName;const Ji=s.forwardRef(({className:e,children:t,onSelect:n,...r},o)=>a.jsxs(Qi,{ref:o,onSelect:n??_u,className:Q("relative flex cursor-pointer select-none items-start rounded-sm py-1.5 pl-7 pr-3","text-[13px] text-fg outline-none data-[highlighted]:bg-surface-muted","data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[a.jsx("span",{className:"absolute left-2 top-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(ju,{children:a.jsx(_s,{className:"h-3.5 w-3.5"})})}),t]}));Ji.displayName=Qi.displayName;function Lu({url:e,isNew:t,visibility:n,onClose:r}){const o=s.useRef(null),i=s.useRef(null);s.useEffect(()=>{const c=i.current;c&&!c.contains(document.activeElement)&&c.focus()},[]);function l(c){if(c.key==="Escape"){r();return}if(c.key!=="Tab")return;const u=o.current;if(!u)return;const f=u.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(f.length===0)return;const g=f[0],h=f[f.length-1],p=document.activeElement;c.shiftKey&&(p===g||!u.contains(p))?(c.preventDefault(),h.focus()):!c.shiftKey&&(p===h||!u.contains(p))&&(c.preventDefault(),g.focus())}return a.jsx("div",{ref:i,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:l,onMouseDown:c=>{c.target===c.currentTarget&&r()},children:a.jsxs("div",{ref:o,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[a.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[a.jsx(Ls,{className:"h-10 w-10 text-success"}),a.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:t?"Page published":"Update published"}),a.jsx("p",{className:"text-[12px] text-fg-2",children:t?n==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),a.jsx("div",{className:"px-6 py-4",children:a.jsx(Ma,{url:e})}),a.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:a.jsx(Be,{autoFocus:!0,onClick:r,children:"Done"})})]})})}function Ou({initialAlias:e,busy:t,onCancel:n,onPublish:r}){const[o,i]=s.useState(e),[l,c]=s.useState("public"),[u,f]=s.useState([]),g=s.useRef(null),h=s.useRef(null);s.useEffect(()=>{const v=h.current;v&&!v.contains(document.activeElement)&&v.focus()},[]);function p(v){if(v.key==="Escape"){n();return}if(v.key!=="Tab")return;const m=g.current;if(!m)return;const b=m.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(b.length===0)return;const y=b[0],k=b[b.length-1],x=document.activeElement;v.shiftKey&&(x===y||!m.contains(x))?(v.preventDefault(),k.focus()):!v.shiftKey&&(x===k||!m.contains(x))&&(v.preventDefault(),y.focus())}return a.jsx("div",{ref:h,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:p,onMouseDown:v=>{v.target===v.currentTarget&&!t&&n()},children:a.jsxs("div",{ref:g,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[a.jsxs("div",{className:"border-b border-border px-6 py-4",children:[a.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),a.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),a.jsxs("div",{className:"space-y-4 px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(Vr,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),a.jsx(Ta,{id:"publish-alias",autoFocus:!0,value:o,disabled:t,onChange:v=>i(v.target.value.toLowerCase()),placeholder:"my-app"}),a.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",o.trim()||"<uuid>"]})]}),a.jsxs("div",{children:[a.jsx(Vr,{children:"Who can open it"}),a.jsx(Aa,{visibility:l,onVisibilityChange:c,grants:u,onGrantsChange:f,disabled:t})]})]}),a.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[a.jsx(Be,{variant:"secondary",onClick:n,disabled:t,children:"Cancel"}),a.jsxs(Be,{onClick:()=>r({alias:o.trim(),visibility:l,grants:u}),disabled:t,children:[a.jsx(yo,{className:"h-3.5 w-3.5"}),t?"Publishing…":"Publish"]})]})]})})}function Fu(e,t){return Jt({queryKey:["page-history",e],queryFn:()=>ht.getPageHistory(e).then(n=>n.versions),enabled:t,retry:!1})}function ho(e,t){return Jt({queryKey:["page-history-version",e,t],queryFn:()=>ht.getPageHistoryVersion(e,t).then(n=>n.html),enabled:t!==null,retry:!1})}function $u({entries:e,isLoading:t,isError:n,isFetching:r,selectedSha:o,onSelect:i,onRefresh:l}){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[a.jsx(wo,{className:"h-3.5 w-3.5 text-fg-3"}),a.jsx("span",{className:"flex-1",children:"Version history"}),a.jsx("button",{type:"button",onClick:l,disabled:r,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),a.jsxs("div",{className:"scroll-slim flex-1 overflow-y-auto p-1.5",children:[t?a.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,n?a.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,e&&e.length===0?a.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(e??[]).map(c=>{const u=c.sha===o;return a.jsxs("button",{type:"button",onClick:()=>i(c),className:Q("block w-full rounded-md px-2.5 py-2 text-left",u?"bg-ink":"hover:bg-surface-muted"),children:[a.jsx("div",{className:Q("text-[12px] font-medium",u?"text-white":"text-fg"),children:new Date(c.committed_at).toLocaleString()}),a.jsxs("div",{className:Q("truncate text-[11px]",u?"text-white/70":"text-fg-3"),children:[c.message,c.author_email?` — ${c.author_email}`:""]})]},c.sha)})]})]})}function Bu({entry:e,canRestore:t,onRestore:n,onExit:r}){const o=bo();return a.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[a.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:e?a.jsxs(a.Fragment,{children:["Viewing version from ",new Date(e.committed_at).toLocaleString(),e.author_email?` (${e.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),a.jsxs(Be,{variant:"secondary",size:"sm",onClick:r,children:[a.jsx(Os,{className:"h-3.5 w-3.5"})," Back to current draft"]}),a.jsx(Be,{size:"sm",disabled:!t,onClick:async()=>{await o({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&n()},children:"Restore this version"})]})}class Hu{diff(t,n,r={}){let o;typeof r=="function"?(o=r,r={}):"callback"in r&&(o=r.callback);const i=this.castInput(t,r),l=this.castInput(n,r),c=this.removeEmpty(this.tokenize(i,r)),u=this.removeEmpty(this.tokenize(l,r));return this.diffWithOptionsObj(c,u,r,o)}diffWithOptionsObj(t,n,r,o){var i;const l=x=>{if(x=this.postProcess(x,r),o){setTimeout(function(){o(x)},0);return}else return x},c=n.length,u=t.length;let f=1,g=c+u;r.maxEditLength!=null&&(g=Math.min(g,r.maxEditLength));const h=(i=r.timeout)!==null&&i!==void 0?i:1/0,p=Date.now()+h,v=[{oldPos:-1,lastComponent:void 0}];let m=this.extractCommon(v[0],n,t,0,r);if(v[0].oldPos+1>=u&&m+1>=c)return l(this.buildValues(v[0].lastComponent,n,t));let b=-1/0,y=1/0;const k=()=>{for(let x=Math.max(b,-f);x<=Math.min(y,f);x+=2){let w;const S=v[x-1],R=v[x+1];S&&(v[x-1]=void 0);let P=!1;if(R){const I=R.oldPos-x;P=R&&0<=I&&I<c}const A=S&&S.oldPos+1<u;if(!P&&!A){v[x]=void 0;continue}if(!A||P&&S.oldPos<R.oldPos?w=this.addToPath(R,!0,!1,0,r):w=this.addToPath(S,!1,!0,1,r),m=this.extractCommon(w,n,t,x,r),w.oldPos+1>=u&&m+1>=c)return l(this.buildValues(w.lastComponent,n,t))||!0;v[x]=w,w.oldPos+1>=u&&(y=Math.min(y,x-1)),m+1>=c&&(b=Math.max(b,x+1))}f++};if(o)(function x(){setTimeout(function(){if(f>g||Date.now()>p)return o(void 0);k()||x()},0)})();else for(;f<=g&&Date.now()<=p;){const x=k();if(x)return x}}addToPath(t,n,r,o,i){const l=t.lastComponent;return l&&!i.oneChangePerToken&&l.added===n&&l.removed===r?{oldPos:t.oldPos+o,lastComponent:{count:l.count+1,added:n,removed:r,previousComponent:l.previousComponent}}:{oldPos:t.oldPos+o,lastComponent:{count:1,added:n,removed:r,previousComponent:l}}}extractCommon(t,n,r,o,i){const l=n.length,c=r.length;let u=t.oldPos,f=u-o,g=0;for(;f+1<l&&u+1<c&&this.equals(r[u+1],n[f+1],i);)f++,u++,g++,i.oneChangePerToken&&(t.lastComponent={count:1,previousComponent:t.lastComponent,added:!1,removed:!1});return g&&!i.oneChangePerToken&&(t.lastComponent={count:g,previousComponent:t.lastComponent,added:!1,removed:!1}),t.oldPos=u,f}equals(t,n,r){return r.comparator?r.comparator(t,n):t===n||!!r.ignoreCase&&t.toLowerCase()===n.toLowerCase()}removeEmpty(t){const n=[];for(let r=0;r<t.length;r++)t[r]&&n.push(t[r]);return n}castInput(t,n){return t}tokenize(t,n){return Array.from(t)}join(t){return t.join("")}postProcess(t,n){return t}get useLongestToken(){return!1}buildValues(t,n,r){const o=[];let i;for(;t;)o.push(t),i=t.previousComponent,delete t.previousComponent,t=i;o.reverse();const l=o.length;let c=0,u=0,f=0;for(;c<l;c++){const g=o[c];if(g.removed)g.value=this.join(r.slice(f,f+g.count)),f+=g.count;else{if(!g.added&&this.useLongestToken){let h=n.slice(u,u+g.count);h=h.map(function(p,v){const m=r[f+v];return m.length>p.length?m:p}),g.value=this.join(h)}else g.value=this.join(n.slice(u,u+g.count));u+=g.count,g.added||(f+=g.count)}}return o}}class Uu extends Hu{constructor(){super(...arguments),this.tokenize=Gu}equals(t,n,r){return r.ignoreWhitespace?((!r.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!r.newlineIsToken||!n.includes(`
`))&&(n=n.trim())):r.ignoreNewlineAtEof&&!r.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),n.endsWith(`
`)&&(n=n.slice(0,-1))),super.equals(t,n,r)}}const zu=new Uu;function Vu(e,t,n){return zu.diff(e,t,n)}function Gu(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let o=0;o<r.length;o++){const i=r[o];o%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function Wu(e,t){const n=[];let r=0;for(const o of Vu(e,t)){const i=o.added?"added":o.removed?"removed":"context",l=o.value.split(`
`);l.length>0&&l[l.length-1]===""&&l.pop();for(const c of l)n.push({key:r++,kind:i,text:c})}return n}function Mn({oldText:e,newText:t,oldLabel:n,newLabel:r}){const o=s.useMemo(()=>Wu(e,t),[e,t]),i=o.every(l=>l.kind==="context");return a.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[a.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[a.jsxs("span",{className:"text-no-strong",children:["− ",n]}),a.jsxs("span",{className:"text-success",children:["+ ",r]})]}),a.jsx("div",{className:"scroll-slim flex-1 overflow-auto",children:i?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):a.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:o.map(l=>a.jsxs("div",{className:Q("flex whitespace-pre px-3",l.kind==="added"&&"bg-status-soft",l.kind==="removed"&&"bg-no-soft",l.kind==="context"&&"text-fg-2"),children:[a.jsx("span",{className:Q("mr-2 shrink-0 select-none",l.kind==="added"&&"text-success",l.kind==="removed"&&"text-no-strong",l.kind==="context"&&"text-fg-3"),children:l.kind==="added"?"+":l.kind==="removed"?"−":" "}),a.jsx("span",{children:l.text||" "})]},l.key))})})]})}const qu=s.lazy(()=>Es(()=>import("./CodeEditor-DBzrWBRq.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(e=>({default:e.CodeEditor}))),dt=`<!doctype html>
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
`,Yt=[];function po(e){return e<1e3?String(e):e<1e6?`${(e/1e3).toFixed(e<1e4?1:0)}k`:`${(e/1e6).toFixed(2)}M`}function Ku(e,t,n){const r=JSON.stringify(e).length,o=t.reduce((i,l)=>{var c,u;return i+(l.kind==="inline"?((c=l.data)==null?void 0:c.length)??0:((u=l.text)==null?void 0:u.length)??0)},0);return r+o+n.length}const Yu=["off","low","medium","high"],es="medium",mo={off:0,low:4096,medium:12288,high:24576};function go(e,t){let n=mo[e]??mo[es];return e==="off"&&t.includes("pro")&&(n=128),{thinkingConfig:{thinkingBudget:n,...e==="off"?{}:{includeThoughts:!0}}}}const Xu=.75,Qu=.85,vo=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function Zu(e,t,n){if(n){const r=Math.max(0,Math.ceil((n.deadline-Date.now())/1e3));return`rate-limited — retry ${n.attempt} of ${n.max} in ${r}s…`}if(e)switch(e.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${e.detail?` (${e.detail})`:""}…`;case"grep":return`searching the page${e.detail?` for “${e.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return e.detail?`loading the ${e.detail} skill…`:"loading a skill…";case"action":return`running ${e.detail??"an action"}…`;case"web_search":return e.detail?`searching the web for “${e.detail}”…`:"searching the web…";case"database":return"updating the database…";default:return`using ${e.name}…`}return t>=10?`working… (${t}s — large edits can take a minute)`:t>=3?`working… (${t}s)`:"working…"}function Ju(e){return a.jsxs("div",{children:[a.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:e.name==="screenshot"?a.jsxs(a.Fragment,{children:[a.jsx(Ws,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"looked at the page"})]}):e.name==="write"||e.name==="edit"?a.jsxs(a.Fragment,{children:[a.jsx(ko,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"edited the page"})]}):e.name==="skill"?a.jsxs(a.Fragment,{children:[a.jsx(So,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["loaded the ",a.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"unknown"})," skill"]})]}):e.name==="action"?a.jsxs(a.Fragment,{children:[a.jsx($r,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["ran ",a.jsx("span",{className:"font-medium text-fg-2",children:e.detail??"an action"})]})]}):e.name==="console"?a.jsxs(a.Fragment,{children:[a.jsx($r,{className:"h-3 w-3 text-fg-3"}),a.jsx("span",{children:"checked the console"})]}):e.name==="grep"?a.jsxs(a.Fragment,{children:[a.jsx(qs,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["searched the page",e.detail?a.jsxs(a.Fragment,{children:[" for ",a.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:e.detail})]}):null]})]}):e.name==="database"?a.jsxs(a.Fragment,{children:[a.jsx(Ks,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["updated the database",e.detail?` (${e.detail})`:""]})]}):e.name==="read"?a.jsxs(a.Fragment,{children:[a.jsx(Ys,{className:"h-3 w-3 text-fg-3"}),a.jsxs("span",{children:["read the page",e.detail?` (${e.detail})`:""]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Co,{className:"h-3 w-3"}),a.jsxs("span",{children:["used ",a.jsx("span",{className:"font-medium text-fg-2",children:e.name}),e.detail?` (${e.detail})`:""]})]})}),e.name==="screenshot"&&e.imageUrl?a.jsx("img",{src:e.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function gd(){var i;const{id:e}=ja(),n=((i=Na().state)==null?void 0:i.publishContinuation)===!0,r=s.useRef(0),o=s.useRef(e);return!n&&e!==o.current&&(r.current+=1),o.current=e,a.jsx(ed,{pageId:e??null},r.current)}function ed({pageId:e}){var Mr,Ar,jr,Nr,Dr,_r;const t=e??"draft",n=Da(),r=Xs(),o=bo(),[i,l]=s.useState(!1),[c,u]=s.useState(dt),[f,g]=s.useState(Yt),[h,p]=s.useState(""),[v,m]=s.useState(es),[b,y]=s.useState([]),k=s.useRef(null),[x,w]=s.useState(""),[S,R]=s.useState([]),[P,A]=s.useState(!1),[I,T]=s.useState(!1),[q,H]=s.useState(""),[j,L]=s.useState(""),[U,Z]=s.useState(null),[ae,N]=s.useState(0),[we,_]=s.useState(null),[M,J]=s.useState(!1),[ie,K]=s.useState(null),[De,Re]=s.useState(null),[me,Se]=s.useState(!1),[he,Pe]=s.useState("code"),[le,Ie]=s.useState(null),rt=e!=null&&le!=null;s.useEffect(()=>{me||Pe("code")},[me]);const[Mt,At]=s.useState(""),[ot,Ge]=s.useState(null),[jt,Nt]=s.useState("public"),[We,vt]=s.useState(null),[sn,_e]=s.useState(!1),[ts,lr]=s.useState(!1),[Dt,_t]=s.useState(0),[cr,ns]=s.useState(0),it=s.useMemo(()=>URL.createObjectURL(new Blob([to(c,{screenshot:!0})],{type:"text/html"})),[c,cr]),Lt=s.useRef(null);s.useEffect(()=>{Lt.current&&Lt.current!==it&&URL.revokeObjectURL(Lt.current),Lt.current=it},[it]);const[z,ur]=s.useState(!1),[ee,Ot]=s.useState(null),ue=Fu(e??"",!!e),se=ho(e??"",z?(ee==null?void 0:ee.sha)??null:null);s.useEffect(()=>{!z||!ue.data||(ee&&!ue.data.some(d=>d.sha===ee.sha)?Ot(ue.data[0]??null):!ee&&ue.data.length>0&&Ot(ue.data[0]))},[z,ee,ue.data]);function Ft(){ur(!1),Ot(null),an("preview"),ln("previous")}const[st,an]=s.useState("preview"),[Le,ln]=s.useState("previous"),dr=z&&ee&&ue.data?ue.data.findIndex(d=>d.sha===ee.sha):-1,bt=dr>=0?((Mr=ue.data)==null?void 0:Mr[dr+1])??null:null,$t=ho(e??"",z&&st==="diff"&&Le==="previous"?(bt==null?void 0:bt.sha)??null:null),[fr,hr]=s.useState(!1),cn=s.useRef(null);s.useEffect(()=>()=>{cn.current&&clearTimeout(cn.current)},[]);function rs(){fr||(hr(!0),ue.refetch().finally(()=>{cn.current=setTimeout(()=>hr(!1),2e3)}))}const xt=s.useMemo(()=>se.data===void 0?null:URL.createObjectURL(new Blob([to(se.data)],{type:"text/html"})),[se.data]),Bt=s.useRef(null);s.useEffect(()=>{Bt.current&&Bt.current!==xt&&URL.revokeObjectURL(Bt.current),Bt.current=xt},[xt]);const Ht=s.useRef(null),un=s.useRef([]),pr=s.useRef(0);s.useEffect(()=>{un.current=[],pr.current=Date.now()},[it]);const os=s.useRef(0),yt=s.useRef(new Map),dn=s.useRef(!1),mr=s.useRef(z);s.useEffect(()=>{mr.current=z},[z]),s.useEffect(()=>{dn.current=!1;const d=yt.current;d.forEach(C=>{window.clearTimeout(C.timer),C.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),d.clear()},[it,me,z]),s.useEffect(()=>{function d(C){var D;if(C.source!==((D=Ht.current)==null?void 0:D.contentWindow))return;const E=C.data;if(!E)return;if(E.type==="aero-dom-ready"){dn.current=!0;return}if(E.type==="aero-dom-op-result"&&typeof E.id=="number"){const W=yt.current.get(E.id);if(!W)return;yt.current.delete(E.id),window.clearTimeout(W.timer);const oe=typeof E.generation=="number"?E.generation:null;W.resolve(E.ok?{ok:!0,result:E.result,generation:oe}:{ok:!1,error:E.error||"the action failed",generation:oe});return}if(E.type!=="aero-console"||typeof E.ts=="number"&&E.ts<pr.current)return;const G=E.level==="info"||E.level==="warn"||E.level==="error"?E.level:"log",O=un.current;O.push({level:G,text:typeof E.text=="string"?E.text:"",ts:E.ts??Date.now()}),O.length>300&&O.splice(0,O.length-300)}return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[]);async function is(d,C,E){var oe;mr.current&&Ft(),Se(!1);const G=Date.now()+1e4;for(;!dn.current||!((oe=Ht.current)!=null&&oe.contentWindow);){if(Date.now()>G)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(kt=>setTimeout(kt,50))}const O=Ht.current.contentWindow,D=++os.current,W=d==="screenshot"?3e4:15e3;return new Promise(kt=>{const Ss=window.setTimeout(()=>{yt.current.delete(D),kt({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},W);yt.current.set(D,{resolve:kt,reject:ks=>kt({ok:!1,error:ks.message,generation:null}),timer:Ss}),O.postMessage({type:"aero-dom-op",id:D,op:d,args:C,generation:E},"*")})}const ge=s.useRef(c),Oe=d=>{ge.current=d,u(d)},Te=s.useRef(dt),Ut=s.useRef(Yt),fn=s.useRef(null),gr=s.useRef(null),vr=s.useRef(null),qe=s.useRef(null),hn=s.useRef(Ro);s.useEffect(()=>{let d=!0;return Js().then(C=>Zr(C).then(E=>{d&&(hn.current=E)})).catch(()=>{}),ea().then(C=>Zr(C).then(E=>{d&&(hn.current=E)})).catch(()=>{}),()=>{d=!1}},[]);const ve=Jt({queryKey:["ai-models"],queryFn:ka,staleTime:300*1e3,retry:!1}),br=Jt({queryKey:["zen-models"],queryFn:Ca,staleTime:300*1e3,retry:!1}),Ke=br.data??[],Fe=!ve.isPending&&!br.isPending,ss=!!((Ar=ve.data)!=null&&Ar.project_id),Ye=Ke.find(d=>d.id===h),at=!!h&&ta(h)==="zen",wt=na(h),Xe=at?ra((Ye==null?void 0:Ye.reasoning_efforts)??[]):[...Yu],as=Xe.join(",");s.useEffect(()=>{!Fe||Xe.length===0||Xe.includes(v)||m("off")},[as,v,Fe]),s.useEffect(()=>{var d;!Fe||h||p(oa(((d=ve.data)==null?void 0:d.models)??[],Ke))},[Fe,h]);const ke=!!h&&(!Fe||(((jr=ve.data)==null?void 0:jr.models)??[]).includes(h)||Ke.some(d=>d.id===h));s.useEffect(()=>{let d=!1;return Ie(null),k.current=null,(async()=>{const C=await Hr(t).catch(()=>{});if(!d){if(C&&(Oe(C.html),Te.current=C.html,g(C.contents),Ut.current=C.contents,_t(Ur(C.contents)),C.model&&p(C.model),C.thinking&&m(C.thinking),y(C.disabledTools??[]),k.current=C.zenSessionId??null),e)try{const E=await ht.getPage(e);if(d)return;Ge(E.url),Nt(Cs(E.visibility)),Ie(E.html),C||(Oe(E.html),Te.current=E.html)}catch{d||_("Failed to load page.")}d||l(!0)}})(),()=>{d=!0}},[t]);const Qe=s.useRef(Date.now());s.useEffect(()=>{if(!I)return;Qe.current=Date.now(),N(0);const d=setInterval(()=>N(Math.round((Date.now()-Qe.current)/1e3)),1e3);return()=>clearInterval(d)},[I]);const xr=()=>{if(at)return k.current??(k.current=crypto.randomUUID()),k.current},Ze=(d,C=b)=>{const E=ge.current;return xn({key:t,pageId:e,html:E,contents:d,model:h||null,thinking:v,disabledTools:C,zenSessionId:k.current??void 0,updatedAt:0}).then(()=>{Te.current=E,Ut.current=d}).catch(()=>{})},lt=s.useRef({sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b});lt.current={sessionKey:t,pageId:e,contents:f,model:h,thinking:v,disabledTools:b};const yr=s.useRef(I);yr.current=I,s.useEffect(()=>()=>{if(ge.current===Te.current&&lt.current.contents===Ut.current)return;const{sessionKey:d,pageId:C,contents:E,model:G,thinking:O,disabledTools:D}=lt.current;xn({key:d,pageId:C,html:ge.current,contents:E,model:G||null,thinking:O,disabledTools:D,zenSessionId:k.current??void 0,updatedAt:0}).catch(()=>{})},[]);const wr=!at,ls=wr&&(S.length>0||f.some(d=>d.parts.some(C=>C.inlineData))),ct=s.useMemo(()=>Ku(f,S,x),[f,S,x]),Sr=wr&&ct>Et,kr=ct/Et>=Xu,Cr=Dt/wt>=Qu,Er=Math.max(0,100-Math.round(Dt/wt*100)),Rr=wt>=1e6?`${Math.round(wt/1e6)}M`:`${Math.round(wt/1e3)}K`;async function cs(){var W;const d=x.trim();if(!d&&S.length===0||I||!ke)return;if(Sr){_(`This message is too large to send (~${et(ct)} — Gemini's inline-request limit is ~${et(Et)}). Remove an attachment, or run /compact first.`);return}if(d.startsWith("/")){const oe=d.split(/\s+/)[0];if(!ua(vo,oe)){_(`Unknown command: ${oe} — available: /compact`);return}}const C=da(d);if(C){w(""),await ds(C.instructions);return}const E=[fa()];for(const oe of S)E.push(ha(oe.name,oe.mimeType)),E.push(oe.kind==="inline"?{inlineData:{mimeType:oe.mimeType,data:oe.data??""}}:{text:oe.text??""});d&&E.push({text:d});const G=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(d),O=/\bdeck-container\b|class="slide slide--/.test(ge.current);ge.current===dt?E.push(wn(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${G?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):O?E.push(wn("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):G&&E.push(wn("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const D=[...f,{role:"user",parts:E}];(W=fn.current)==null||W.followOutput(),g(D),w(""),R([]),qa(),await Pr(D)}async function Pr(d){const C=new AbortController;qe.current=C,T(!0),H(""),L(""),_(null),J(!1),K(null);const E=Date.now(),G=xr();try{const O=await xa({model:h,contents:d,html:()=>ge.current,skills:hn.current,pageId:e,consoleLogs:()=>un.current,domOp:is,generationConfig:go(v,h),thinking:v,zenModelInfo:Ye,zenSession:G,hasGoogleProject:ss,disabledTools:b,signal:C.signal,callbacks:{onText:D=>{Qe.current=Date.now(),K(null),H(W=>W+D)},onThought:D=>{Qe.current=Date.now(),K(null),L(W=>W+D)},onUsage:D=>{const W=D.totalTokenCount??D.promptTokenCount;typeof W=="number"&&_t(W)},onTool:(D,W)=>{Qe.current=Date.now(),K(null),Z({name:D,detail:W})},onHtml:D=>Oe(D),onContents:D=>{Qe.current=Date.now(),Z(null),g(D),H(""),L("")},onRetry:(D,W,oe)=>{Qe.current=Date.now(),K({attempt:D,max:W,deadline:Date.now()+oe*1e3})}}});g(O),await Ze(O),Date.now()-E>1e4&&eo({ok:!0})}catch(O){if(O instanceof DOMException&&O.name==="AbortError")await Ze(lt.current.contents);else{const D=O instanceof Je?ya(O.body):null,W=O instanceof Je?O.message==="reauth_required"?"Your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":D?D.message:`AI request failed: ${O.message}`:"AI request failed.";D&&Re(D),_(W),J(!(O instanceof Je&&O.message==="reauth_required")),eo({ok:!1,error:W}),await Ze(d)}}finally{qe.current===C&&(qe.current=null),T(!1),H(""),L(""),Z(null),K(null)}}function us(){var d;(d=qe.current)==null||d.abort()}async function zt(){var d;I||!ke||f.length===0||((d=fn.current)==null||d.followOutput(),await Pr(f))}async function ds(d){if(I||!ke)return;if(f.length===0){_("Nothing to compact — the conversation is empty.");return}const C=new AbortController;qe.current=C,T(!0),lr(!0),_(null);try{const E=await wa({model:h,contents:f,instructions:d||void 0,generationConfig:go("off",h),zenSession:xr(),signal:C.signal});await ut(Sa(E))}catch(E){E instanceof DOMException&&E.name==="AbortError"||_(E instanceof Je?`Compaction failed: ${E.message}`:"Compaction failed.")}finally{qe.current===C&&(qe.current=null),T(!1),lr(!1)}}async function ut(d){g(d),_t(Ur(d)),await Ze(d)}async function fs(d){if(I)return;const C=f;if(!(!await o({title:"Delete from history?",body:d.kind==="tool"||d.kind==="grouped-search"?`Removes ${d.refs.length===1?"this tool call and its result":`these ${d.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:d.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||yr.current||lt.current.contents!==C))switch(d.kind){case"user":case"compact":await ut(va(f,d.contentIndex));break;case"thought":await ut(ga(f,d.refs));break;case"tool":case"grouped-search":await ut(ma(f,d.refs));break;case"assistant":await ut(pa(f,d.refs));break}}async function hs(d,C){I||d.kind!=="user"&&d.kind!=="assistant"||lt.current.contents===f&&await ut(ba(f,d.refs,C))}const St=Qs({mutationFn:async d=>{const C=ge.current;if(e)return await ht.patchPage(e,{html:C}),{id:e,isNew:!1,url:null,html:C,visibility:jt};const E=await ht.createPage(C,{alias:(d==null?void 0:d.alias)||null,visibility:(d==null?void 0:d.visibility)??"public",grants:(d==null?void 0:d.grants)??[]});return{id:E.id,isNew:!0,url:E.url,html:C,visibility:(d==null?void 0:d.visibility)??"public"}},onSuccess:async({id:d,isNew:C,url:E,html:G,visibility:O})=>{if(_(null),_e(!1),Nt(O),Te.current=G,Ie(G),r.invalidateQueries({queryKey:["pages"]}),r.invalidateQueries({queryKey:["page",d]}),r.invalidateQueries({queryKey:["page-history",d]}),C)await xn({key:d,pageId:d,html:ge.current,contents:f,model:h||null,updatedAt:0}).catch(()=>{}),await yn("draft").catch(()=>{}),Ge(E),vt({url:E??`/p/${d}`,id:d,isNew:!0,visibility:O});else{const D=ot??`/p/${d}`;Ge(D),vt({url:D,id:d,isNew:!1,visibility:O})}},onError:d=>{d instanceof Je&&d.body&&typeof d.body=="object"&&"reason"in d.body?_(`Publish failed: ${d.message} (${String(d.body.reason)})`):d instanceof Je?_(`Publish failed: ${d.message}`):_("Publish failed.")}});async function ps(){if(await o({title:"Reset builder",body:e?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await yn(t).catch(()=>{}),g(Yt),Ut.current=Yt,_t(0),_(null),k.current=null,e)try{const C=await ht.getPage(e);Oe(C.html),Te.current=C.html}catch{_("Failed to reload page.")}else Oe(dt),Te.current=dt}async function ms(){if(ge.current!==Te.current){if(!await o({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;Te.current=ge.current}const d=await Hr("draft").catch(()=>{});d&&(d.contents.length>0||d.html!==dt)&&await o({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&await yn("draft").catch(()=>{}),n("/")}async function gs(d){var G;const C=(G=d.target.files)==null?void 0:G[0];if(d.target.value="",!C)return;const E=await C.text();Oe(E),_(null),Ze(f)}async function pn(d){if(d.length===0)return;if(at){_("Free models cannot read attachments. Switch to a Google model to attach files.");return}const C=[],E=[];for(const G of d){const O=await Ha(G);"error"in O?E.push(O.error):C.push(O)}C.length>0&&R(G=>[...G,...C]),E.length>0&&_(E.join(" "))}function vs(d){const C=Array.from(d.target.files??[]);d.target.value="",pn(C)}const mn=s.useMemo(()=>ia(f),[f]),gn=((Nr=ve.data)==null?void 0:Nr.models.length)??0,bs=ve.isError||!!ve.data&&gn===0,$e=Fe&&gn===0&&Ke.length===0,Ir=bs&&Ke.length>0,vn=ve.error instanceof Je?ve.error.message:void 0,Me=f[f.length-1],xs=(Me==null?void 0:Me.role)==="model"&&!Me.parts.some(d=>d.functionCall),ys=(Me==null?void 0:Me.role)==="user"&&Me.parts.some(sa),Tr=!I&&!!Me&&!xs&&!ys,ws=((Dr=mn[mn.length-1])==null?void 0:Dr.kind)==="user";return i?a.jsxs("div",{className:"flex h-[calc(100vh-8.5rem)] min-h-[480px] flex-col gap-3",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsxs(Gr,{value:ke?h:"",onValueChange:p,disabled:I||!Fe,children:[a.jsx(Wr,{className:"h-8 w-auto min-w-[9rem] text-[13px]",children:a.jsx(qr,{placeholder:Fe?"select a model":"loading models…"})}),a.jsxs(Kr,{children:[gn>0?a.jsxs(Yr,{children:[a.jsx(Xr,{children:"Google"}),(_r=ve.data)==null?void 0:_r.models.map(d=>a.jsx(Sn,{value:d,children:d},d))]}):null,Ke.length>0?a.jsxs(Yr,{children:[a.jsx(Xr,{children:"Free · opencode zen"}),Ke.map(d=>a.jsx(Sn,{value:d.id,children:d.name},d.id))]}):null]})]}),a.jsxs(Gr,{value:Xe.includes(v)?v:"off",onValueChange:m,disabled:I||Xe.length===0,children:[a.jsxs(Wr,{className:"h-8 w-auto text-[13px]",title:Xe.length>0?"Thinking level — how much the model reasons before answering":Ye!=null&&Ye.reasoning?"This model reasons but offers no thinking-level control":"This model does not support thinking",children:[a.jsx(So,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),a.jsx(qr,{})]}),a.jsx(Kr,{children:Xe.map(d=>a.jsx(Sn,{value:d,children:d},d))})]}),a.jsxs("button",{type:"button",onClick:()=>Se(d=>!d),disabled:z,className:Q("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",me?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[a.jsx(ko,{className:"h-3.5 w-3.5"})," Code"]}),a.jsxs("button",{type:"button",onClick:()=>ns(d=>d+1),disabled:me||z,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(Fr,{className:"h-3.5 w-3.5"})," Reload"]}),a.jsxs("button",{type:"button",onClick:()=>{var d;return(d=gr.current)==null?void 0:d.click()},disabled:I||z,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(Fs,{className:"h-3.5 w-3.5"})," Upload"]}),a.jsx("input",{ref:gr,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:gs}),a.jsxs("button",{type:"button",onClick:ps,disabled:I||z,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx($s,{className:"h-3.5 w-3.5"})," Reset"]}),e?a.jsxs("button",{type:"button",onClick:ms,disabled:I||z,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[a.jsx(Bs,{className:"h-3.5 w-3.5"})," New"]}):null,e?a.jsxs("button",{type:"button",onClick:()=>z?Ft():ur(!0),title:"Browse previously published versions of this page",className:Q("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",z?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[a.jsx(wo,{className:"h-3.5 w-3.5"})," History"]}):null,a.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[ot?a.jsxs("a",{href:ot,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",a.jsx(Hs,{className:"h-3 w-3"})]}):null,a.jsxs(Be,{size:"sm",onClick:()=>e?St.mutate(void 0):_e(!0),disabled:I||St.isPending||z,children:[St.isPending?a.jsx(Us,{className:"h-3.5 w-3.5 animate-spin"}):a.jsx(yo,{className:"h-3.5 w-3.5"}),e?"Publish update":"Publish"]})]})]}),we&&!z?a.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[a.jsx("span",{className:"min-w-0 flex-1 break-words",children:we}),M&&!I?a.jsxs("button",{type:"button",onClick:()=>void zt(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[a.jsx(Fr,{className:"h-3 w-3"})," Retry"]}):null]}):null,($e||Ir)&&!z?a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[$e?"AI is unavailable — ":"Google models are unavailable — ",vn==="no_project"?a.jsxs(a.Fragment,{children:["no Code Assist project selected for your account."," ",a.jsx(_a,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):vn==="reauth_required"?"your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":"could not load models. Try again later.",Ir?" Free models are listed in the model picker and need no Google account.":null]}),vn==="no_project"?a.jsx(Ea,{}):null]}):null,Tr&&!we&&!ws&&!z?a.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[a.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),a.jsxs("button",{type:"button",onClick:()=>void zt(),disabled:$e||!ke,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[a.jsx(zs,{className:"h-3 w-3"})," Resume"]})]}):null,a.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[a.jsx("div",{className:Q("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",P&&"ring-2 ring-ink"),onDragOver:d=>{z||(d.preventDefault(),A(!0))},onDragLeave:()=>A(!1),onDrop:d=>{z||(d.preventDefault(),A(!1),pn(Array.from(d.dataTransfer.files)))},children:z?a.jsx($u,{entries:ue.data,isLoading:ue.isLoading,isError:ue.isError,isFetching:ue.isFetching||fr,selectedSha:(ee==null?void 0:ee.sha)??null,onSelect:Ot,onRefresh:rs}):a.jsx(aa,{ref:fn,chat:mn,busy:I,streamText:q,streamThought:j,busyLabel:ts?"compacting conversation…":Zu(U,ae,ie),toolActive:U!==null,retrying:ie!==null,busyElapsed:ae,emptyState:a.jsxs(a.Fragment,{children:["Describe the page you want to build.",a.jsx("br",{}),"Aero edits the HTML and you preview it live.",a.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:Ju,canResume:Tr,resumeDisabled:$e||!ke,onResume:()=>void zt(),onSaveItemEdit:(d,C)=>void hs(d,C),onDeleteItem:d=>void fs(d),input:x,onInputChange:w,onSend:()=>void cs(),onStop:us,composerDisabled:I||$e||!ke,sendDisabled:$e||!ke||!x.trim()&&S.length===0||Sr,placeholder:$e?"AI unavailable":!ke&&ve.data?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:vo,composerMeta:a.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[ls?a.jsx("span",{className:Q("tabular truncate",kr&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${et(ct)} of ${et(Et)} — Gemini rejects requests over ~20MB`,children:kr?`${et(ct)} / ${et(Et)}`:et(ct)}):null,a.jsx("span",{className:Q("tabular truncate",Cr&&"font-medium text-no-strong"),title:`Approximate context window usage: ${po(Dt)} of ${Rr} tokens (${Er}% left) — ${at?"free models are held to a 200K-token context":"all Gemini models have a ~1M-token context"}`,children:Cr?`${po(Dt)} / ${Rr}`:`${Er}% left`})]}),attachmentsBar:S.length>0?a.jsx("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:S.map(d=>a.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[d.kind==="inline"&&d.mimeType.startsWith("image/")?a.jsx("img",{src:`data:${d.mimeType};base64,${d.data}`,alt:d.name,className:"h-7 w-7 shrink-0 object-cover"}):a.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:ca(d.mimeType)}),a.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:d.name,children:d.name}),a.jsx("button",{type:"button",onClick:()=>R(C=>C.filter(E=>E.id!==d.id)),title:"Remove",className:"text-fg-3 hover:text-fg",children:a.jsx(Gs,{className:"h-3 w-3"})})]},d.id))}):void 0,composerLeading:a.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[a.jsxs(Nu,{children:[a.jsx(Du,{asChild:!0,children:a.jsxs(Be,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:Q(zr,"relative"),children:[a.jsx(Co,{className:"h-3.5 w-3.5"}),b.length>0?a.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),a.jsx(Zi,{className:"w-60",children:la.map(d=>a.jsx(Ji,{checked:!d.names.some(C=>b.includes(C)),onCheckedChange:C=>{const E=C?b.filter(G=>!d.names.includes(G)):[...new Set([...b,...d.names])];y(E),Ze(f,E)},children:a.jsxs("span",{className:"flex flex-col",children:[a.jsx("span",{children:d.label}),a.jsx("span",{className:"text-[11px] text-fg-3",children:d.hint})]})},d.id))})]}),at?null:a.jsxs(a.Fragment,{children:[a.jsx(Be,{variant:"ghost",size:"sm",onClick:()=>{var d;return(d=vr.current)==null?void 0:d.click()},disabled:I||$e||!ke,title:"Attach a file (image, PDF, audio, video, or text)",className:zr,children:a.jsx(Vs,{className:"h-3.5 w-3.5"})}),a.jsx("input",{ref:vr,type:"file",multiple:!0,hidden:!0,onChange:vs})]})]}),onPasteFiles:d=>void pn(d)})}),a.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:z?a.jsxs(a.Fragment,{children:[a.jsx(Bu,{entry:ee,canRestore:!!ee&&se.data!==void 0,onRestore:()=>{se.data!==void 0&&(Oe(se.data),Ze(f)),Ft()},onExit:Ft}),ee?a.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>an("preview"),className:Q("rounded-sm px-2 py-1",st==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),a.jsx("button",{type:"button",onClick:()=>an("diff"),className:Q("rounded-sm px-2 py-1",st==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),st==="diff"?a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>ln("previous"),className:Q("rounded-sm px-2 py-1",Le==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),a.jsx("button",{type:"button",onClick:()=>ln("draft"),className:Q("rounded-sm px-2 py-1",Le==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,st==="diff"&&ee?Le==="previous"&&!bt?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):Le==="previous"&&$t.isLoading||se.isLoading?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):Le==="previous"&&$t.isError||se.isError?a.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):Le==="previous"&&$t.data!==void 0&&se.data!==void 0?a.jsx(Mn,{oldText:$t.data,newText:se.data,oldLabel:`Version from ${new Date(bt.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):Le==="draft"&&se.data!==void 0?a.jsx(Mn,{oldText:c,newText:se.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(ee.committed_at).toLocaleString()}`}):null:st==="preview"?se.isLoading?a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):se.isError?a.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):xt?a.jsx("iframe",{title:"historic version preview",src:xt,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:"h-full w-full flex-1 bg-white"}):a.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):me?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:a.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[a.jsx("button",{type:"button",onClick:()=>Pe("code"),className:Q("rounded-sm px-2 py-1",he==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),a.jsx("button",{type:"button",onClick:()=>Pe("diff"),disabled:!rt,title:rt?void 0:"Diff becomes available once this page has been published",className:Q("rounded-sm px-2 py-1 disabled:opacity-50",he==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),he==="diff"&&rt?a.jsx(Mn,{oldText:le,newText:c,oldLabel:"Last published version",newLabel:"Current draft"}):a.jsx(s.Suspense,{fallback:a.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:a.jsx(qu,{value:c,onChange:Oe,language:"html",className:"flex-1 overflow-auto"})})]}):a.jsx("iframe",{ref:Ht,title:"preview",src:it,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:"h-full w-full flex-1 bg-white"},cr)})]}),sn?a.jsx(Ou,{initialAlias:Mt,busy:St.isPending,onCancel:()=>_e(!1),onPublish:d=>{At(d.alias),St.mutate(d)}}):null,We?a.jsx(Lu,{url:We.url,isNew:We.isNew,visibility:We.visibility,onClose:()=>{const d=We;vt(null),d.isNew&&n(`/builder/${d.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,De?a.jsx(Ra,{info:De,onEnabled:()=>{Re(null),_(null),zt()},onClose:()=>Re(null)}):null]}):a.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{gd as BuilderPage};
