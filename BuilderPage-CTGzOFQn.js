const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-Dn_26xS5.js","./vendor-react-D7Jwy12s.js","./index-CCteI0Ce.js","./vendor-query-DIHL6ezE.js","./vendor-router-D7EprJLW.js","./index-BDK4gIiU.css"])))=>i.map(i=>d[i]);
import{_ as zn,B as te,e as E,u as Vn,a as xe,d as Dr,A as ve}from"./index-CCteI0Ce.js";import{r as l,j as e,k as Gn,G as Wn,H as Yn,A as Pr,n as Xn,M as Ir,o as Fr,R as wn,p as Br,l as _r,q as Hr,E as Or,e as xn,s as $r,X as jt,t as yn,W as Kn,u as Ur,v as qr,w as Qn,x as zr,B as Vr,y as kn,z as Gr,D as Wr}from"./vendor-react-D7Jwy12s.js";import{a as Jn,c as Yr,u as Xr}from"./vendor-query-DIHL6ezE.js";import{u as Kr,p as Sn,z as Qr,M as Jr,Z as Zr,s as ea,a as Tt,g as Cn,b as ta}from"./ModelPicker-GdqFnURq.js";import{i as jn,g as na,u as ra,a as aa,D as oa,l as sa,s as ia,c as la,b as Tn,r as ca,e as En,d as da,f as Qe,h as Et,j as Nt,t as ua,k as ha,m as Nn,C as fa,n as pa,o as ma,p as An,q as ga,O as ba,v as va,w as Ln,x as At,y as wa,z as xa,A as ya,B as ka,E as Lt,F as Mn,G as Sa,H as Ca,I as ja,J as Ta,K as Ea,L as Na,M as Aa,N as La,P as Ma,Q as Ra,R as Da,S as Pa,T as Ia,U as Fa,V as Ba}from"./DropdownMenu-CnGTNRZ5.js";import{f as de,s as _a,G as Ha}from"./attachments-Cy_niY_k.js";import{C as Oa}from"./CloudShellHint-BL6WqpDH.js";import{P as $a,a as Ua}from"./PublicUrlRow-BVx-QFOw.js";import{L as Rn,I as qa}from"./Select-C32rdtnH.js";import{S as za}from"./ServiceDisabledModal-D-HSqxcb.js";import{e as Va,u as Ga,c as Wa,L as Ya}from"./vendor-router-D7EprJLW.js";const Xa=/\.(pptx|ppsx|pptm|potx)$/i,Ka=/^application\/vnd\.openxmlformats-officedocument\.presentationml\./,Qa=/\.(ppt|pps|pot)$/i,Ja="application/vnd.ms-powerpoint";function Zn(t){return Xa.test(t.name)||Ka.test(t.type)}function Za(t){return Qa.test(t.name)||t.type===Ja&&!Zn(t)}async function eo(t){const{parse:r}=await zn(async()=>{const{parse:s}=await import("./index-BOZyaZjj.js");return{parse:s}},[],import.meta.url);let o;try{o=await r(await t.arrayBuffer(),{imageMode:"none",videoMode:"none",audioMode:"none"})}catch(s){throw new Error(`"${t.name}" couldn't be read as a PowerPoint file.`,{cause:s})}if(o.slides.length===0)throw new Error(`"${t.name}" has no slides.`);let a;try{a=to(o,t.name)}catch(s){throw new Error(`"${t.name}" couldn't be converted to text.`,{cause:s})}return new File([a],`${t.name}.md`,{type:"text/markdown"})}function to(t,r){const{width:o,height:a}=t.size,s=t.slides.length,h=[`# ${r}`,"",`${s} slide${s===1?"":"s"}, ${Math.round(o)}×${Math.round(a)} pt. Text extracted from PowerPoint in reading order; images are noted by name and size only.`],f={images:new Set,titled:!1};return t.slides.forEach((d,m)=>{h.push("",`## Slide ${m+1}`,""),f.titled=!1;const c=Pt(d.elements,f);h.push(c.length>0?c.map(T=>T.join(`
`)).join(`

`):"(empty)");const p=It(d.note);p.length>0&&h.push("",`> Notes: ${p[0]}`,...p.slice(1).map(T=>`> ${T}`))}),h.join(`
`)+`
`}const no=/^(slide number|footer|date) placeholder/i;function Pt(t,r){const o=[];for(const a of ao(t))switch(a.type){case"text":case"shape":{if(no.test(a.name))break;const s=It(a.content);if(s.length===0)break;!r.titled&&/^title\b/i.test(a.name)&&(r.titled=!0,s[0]=`### ${s[0].replace(/\*\*/g,"")}`),o.push(s);break}case"group":o.push(...Pt(a.elements,r));break;case"table":{const s=oo(a.data);s.length>0&&o.push(s);break}case"chart":o.push(so(a));break;case"diagram":a.textList.length>0?o.push(["Diagram:",...a.textList.map(s=>`- ${s}`)]):o.push(...Pt(a.elements,r));break;case"image":{if(r.images.has(a.ref))break;r.images.add(a.ref);const s=a.ref.split("/").pop()??a.ref;o.push([`[image: ${s}, ${Math.round(a.width)}×${Math.round(a.height)} pt]`]);break}case"math":a.latex?o.push([`$${a.latex}$`]):a.text&&o.push([a.text]);break;case"video":case"audio":o.push([`[${a.type}]`]);break}return o}const ro=20;function ao(t){const r=[...t].sort((a,s)=>a.top-s.top),o=[];for(let a=0;a<r.length;){let s=a+1;for(;s<r.length&&r[s].top-r[a].top<ro;)s++;o.push(...r.slice(a,s).sort((h,f)=>h.left-f.left)),a=s}return o}function er(t){return t.reduce((r,o)=>o.length>r?o.length:r,0)}function oo(t){const r=t.map(s=>s.map(h=>It(h.text).join(" ").replace(/\*\*([ \t]*)\*\*/g,"$1").replace(/\|/g,"\\|"))),o=er(r);if(r.length===0||o===0)return[];const a=s=>`| ${[...s,...Array(o-s.length).fill("")].join(" | ")} |`;return[a(r[0]),`|${" --- |".repeat(o)}`,...r.slice(1).map(a)]}function so(t){var f;const r=t.chartType.replace(/Chart$/,"");if(io(t)){const d=t.data.map(p=>p.map(String));if(d.length===0)return[`Chart (${r}): no data`];const m=er(d),c=["x","y","size"].slice(0,m);return[`Chart (${r}):`,`| ${c.join(" | ")} |`,`|${" --- |".repeat(m)}`,...d.map(p=>`| ${p.join(" | ")} |`)]}const o=r==="bar"&&t.barDir==="col"?"column":r,a=t.grouping&&!/^(clustered|standard)$/.test(t.grouping)?`, ${t.grouping}`:"";if(t.data.length===0)return[`Chart (${o}${a}): no data`];const s=[];for(const d of t.data)for(const m of d.values){const c=((f=d.xlabels)==null?void 0:f[m.x])??m.x;s.includes(c)||s.push(c)}const h=t.data.map(d=>{const m=new Map(d.values.map(c=>{var p;return[((p=d.xlabels)==null?void 0:p[c.x])??c.x,c.y]}));return[d.key,...s.map(c=>m.has(c)?String(m.get(c)):"")]});return[`Chart (${o}${a}):`,`| | ${s.join(" | ")} |`,`|${" --- |".repeat(s.length+1)}`,...h.map(d=>`| ${d.join(" | ")} |`)]}function io(t){return t.chartType==="scatterChart"||t.chartType==="bubbleChart"}const Dn=2;function It(t){var d,m;if(!t)return[];const r=t.replace(/<li\b[^>]*>\s*<p\b/g,"<p data-li "),o=[],a=/<p\b([^>]*)>([\s\S]*?)<\/p>/g;let s;for(;(s=a.exec(r))!==null;){const c=s[1]??"",p=Number(((d=/margin-left:\s*(-?[\d.]+)pt/.exec(c))==null?void 0:d[1])??0),T=Number(((m=/text-indent:\s*(-?[\d.]+)pt/.exec(c))==null?void 0:m[1])??0);o.push({text:Pn(s[2]??""),bullet:/data-li/.test(c)||T<0,margin:p})}o.length===0&&o.push({text:Pn(r),bullet:!1,margin:0});const h=[];for(const c of o)!c.bullet||!c.text.trim()||h.some(p=>Math.abs(p-c.margin)<Dn)||h.push(c.margin);h.sort((c,p)=>c-p);const f=[];for(const c of o){const p=c.text.split(`
`).map(v=>v.trim()).filter(Boolean);if(p.length===0)continue;if(!c.bullet){f.push(...p);continue}const T=h.findIndex(v=>Math.abs(v-c.margin)<Dn),M="  ".repeat(Math.max(0,T));f.push(`${M}- ${p[0]}`,...p.slice(1).map(v=>`${M}  ${v}`))}return f}function Pn(t){let r=t.replace(/<br\s*\/?>/gi,`
`);return r=r.replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,(o,a,s)=>{const h=Mt(s).trim();if(!h)return"";const f=h.replace(/[[\]]/g,"\\$&"),d=In(a).replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${f}](${d})`}),r=r.replace(/<(span|b|strong)\b([^>]*)>([\s\S]*?)<\/\1>/gi,(o,a,s,h)=>{const f=a!=="span"||/font-weight:\s*(bold|[6-9]00)/.test(s),d=Mt(h);if(!f)return d;const m=/^(?:\s|&nbsp;)*/.exec(d)[0],c=/(?:\s|&nbsp;)*$/.exec(d)[0],p=d.slice(m.length,d.length-c.length);return p?`${m}**${p}**${c}`:d}),In(Mt(r)).replace(/[ \t ]+/g," ").replace(/\*\*([ \t]*)\*\*/g,"$1")}function Mt(t){return t.replace(/<[^>]+>/g,"")}const lo={"&nbsp;":" ","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&apos;":"'"};function In(t){return t.replace(/&(nbsp|lt|gt|quot|#39|apos);/g,r=>lo[r]??r).replace(/&#(\d+);/g,(r,o)=>String.fromCodePoint(Number(o))).replace(/&#x([0-9a-f]+);/gi,(r,o)=>String.fromCodePoint(parseInt(o,16))).replace(/&amp;/g,"&")}const co='# Aero app style guide\n\nFollow this guide whenever you create a new page or restyle an existing one. It produces the unified aero visual identity: calm, light, editorial — warm paper, near-black ink, one orange accent.\n\n## The two accent roles (most important rule)\n\nAero has exactly two accent colors and they are **not interchangeable**:\n\n- **`--action` (orange)** — things the user can *click*: primary buttons, links, active tabs, focus rings.\n- **`--status` (blue)** — things that are *true*: live, active, connected, saved, success.\n\nNever use orange for a status indicator, never blue for a button. Use **at most one** `--action`-filled button per view — it is the single primary call-to-action, and a second one makes both meaningless. Everything else is ink or neutral.\n\n## Design tokens\n\nDeclare these as CSS variables on `:root` and use them everywhere (never hardcode ad-hoc colors):\n\n```css\n:root {\n  /* Ink — near-black, from the aero logo tile */\n  --ink: #0B0B0B;         /* headings, body text, primary buttons */\n  --ink-700: #26262A;     /* primary button hover */\n  --ink-500: #52525B;\n  --ink-300: #A1A1AA;     /* light dividers, de-emphasized glyphs */\n\n  /* Action (orange) — clickable things only */\n  --action: #D85A30;\n  --action-700: #C24E27;  /* hover */\n  --action-300: #ECA88F;  /* borders on tinted surfaces */\n  --action-soft: #FDF3EF; /* tinted background */\n\n  /* Status (blue) — true things only */\n  --status: #2E6BE6;\n  --status-700: #1D4CA6;  /* text on a soft blue background */\n  --status-300: #9DBAF7;\n  --status-soft: #EFF4FE;\n\n  /* Surfaces — warm paper against cool neutrals */\n  --paper: #FCFCF9;       /* page background (warm) */\n  --surface: #FFFFFF;     /* cards */\n  --sunken: #FAFAF8;      /* table headers, footers, inset rows */\n  --muted: #F4F4F5;       /* hover fills */\n\n  /* Neutrals (cool zinc — the contrast against warm paper is deliberate) */\n  --border: #E4E4E7;\n  --border-strong: #D4D4D8;\n  --fg: #0B0B0B;          /* default text */\n  --fg-2: #52525B;        /* secondary copy */\n  --fg-3: #71717A;        /* muted labels, placeholders */\n\n  /* Danger / warning */\n  --danger: #DC2626;  --danger-strong: #B91C1C;  --danger-soft: #FEF2F2;\n  --warning: #D97706;\n\n  /* Radius — 10px is the control radius; buttons and inputs must match */\n  --r-xs: 6px;   /* chips, tight tags */\n  --r-sm: 8px;\n  --r-md: 10px;  /* buttons, inputs, selects — keep these equal */\n  --r-lg: 16px;  /* panels, notifications */\n  --r-xl: 24px;  /* cards, modals */\n\n  /* Shadows — near-neutral, and they fall further down than out */\n  --shadow-xs: 0 1px 1px rgba(11,11,11,.04);\n  --shadow-sm: 0 1px 0 0 rgba(11,11,11,.04), 0 2px 6px rgba(11,11,11,.05);\n  --shadow-md: 0 1px 0 0 rgba(11,11,11,.04), 0 12px 24px -12px rgba(11,11,11,.10);\n  --shadow-lg: 0 1px 0 0 rgba(11,11,11,.04), 0 24px 48px -24px rgba(11,11,11,.14);\n  --shadow-focus: 0 0 0 3px rgba(216,90,48,.18);\n}\n```\n\n## Typography\n\n- Sans: `Inter, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial, sans-serif`\n- Mono (code, data, micro-labels): `"JetBrains Mono", ui-monospace, "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`\n- Both degrade cleanly to system fonts. To actually load them, use jsdelivr (see Third-party libraries) rather than Google Fonts, which some corporate networks block:\n  ```html\n  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/inter@5/index.min.css">\n  ```\n- Body 14px `--fg-2`→`--fg`; secondary 12–13px `--fg-2`/`--fg-3`.\n- **Display headings** are the signature: `font-size: clamp(28px, 4vw, 44px); line-height: .95; letter-spacing: -.04em; font-weight: 800`. Tight and heavy — not a big soft heading.\n- **Mono micro-labels** are the other signature — section labels, table column headers, timestamps, counts:\n  ```css\n  .eyebrow {\n    font-family: var(--mono); font-size: 11px; font-weight: 500;\n    letter-spacing: .14em; text-transform: uppercase; color: var(--fg-3);\n  }\n  ```\n  The wide tracking is what makes them read as instrument labels instead of shrunken body copy.\n- Weights: 400 body, 500 mono labels/nav, 600–700 subheadings, 800 display.\n- Numbers in tables, prices, metrics, timers: `font-variant-numeric: tabular-nums`.\n\n## Surfaces & layout\n\n- Page background `--paper`, content on `--surface` cards with 1px `--border`, `--r-lg`/`--r-xl` radius and `--shadow-md`.\n- Give a page an **editorial header**: mono eyebrow (optionally `LABEL · 04` with the separator in `--action`), then a display heading, then one lede sentence, then a row of small outlined chips. Follow it with a `1px --border` rule.\n- **Numbered section rules** for structure: `001 ──── Section title ──────── 4 TOTAL`, with the number in mono bold `--fg-3` and a hairline filling the gap.\n- Content apps (notes, dashboards, tools): responsive card grid — `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px`; page gutter 16px (24/32px at ≥640/1024px).\n- Data-dense apps (tables, admin, finance): flat 2–3 panel split layout (sidebar / main / detail), compact 8–12px padding, 13–14px text, no floating cards.\n- Optional signature backdrop — a fixed, `pointer-events: none` 28px ink grid, faded out at the edges so it never competes with content:\n  ```css\n  .grid-bg {\n    position: fixed; inset: 0; pointer-events: none; opacity: .35;\n    background-image:\n      linear-gradient(to right, rgba(11,11,11,.05) 1px, transparent 1px),\n      linear-gradient(to bottom, rgba(11,11,11,.05) 1px, transparent 1px);\n    background-size: 28px 28px;\n    mask-image: radial-gradient(ellipse at center, black 60%, transparent 85%);\n  }\n  ```\n- **Inverted panels** as a counterweight for a "just shipped / here\'s your result" moment: `background: var(--ink); color: #fff;` with `rgba(255,255,255,.35)` grid lines at `.12` opacity, mono type inside.\n\n## Components\n\n- **Primary button**: ink — `background: var(--ink); color: #fff; border-radius: var(--r-md); font-weight: 600;` hover → `--ink-700`.\n- **Accent button** (one per view, the main CTA): `background: var(--action); color: #fff;` hover → `--action-700`.\n- **Secondary button**: `--surface` with 1px `--border` and `--fg-2` text; hover → `--border-strong` border + `--fg` text.\n- **Danger button**: `--danger` background with white text, or `--danger-soft` + `--danger-strong` for a quieter variant.\n- **Inputs/selects**: white, 1px `--border`, `--r-md`, placeholder `--fg-3`; focus → border `--action` + `box-shadow: var(--shadow-focus)`; never use the default outline.\n- **Buttons and inputs must share `--r-md`.** A pill button next to a 10px input looks unfinished — pills are reserved for chips and badges.\n- **Chips/badges**: `border-radius: 9999px`, 11px medium text, 1px border. Neutral = `--border` + `--fg-2`. Live/active = `--status-300` border + `--status-soft` background + `--status-700` text, with a 5–6px `--status` dot carrying a soft halo (`box-shadow: 0 0 0 3px rgba(46,107,230,.16)`) so "live" actually looks live. Inactive = a plain `--border-strong` dot, no halo.\n- **Tables**: `--sunken` header row with mono `.eyebrow` column labels at 10px; rows `padding: 14px 20px`, 1px `--border` between, hover → `--sunken`.\n- **Modals**: centered, `--r-xl`, `--shadow-lg`, backdrop `rgba(11,11,11,.45)` with `backdrop-filter: blur(4px)`; close on backdrop click and Escape.\n- **Empty states**: centered, one-line title (18–20px, 700), one muted sentence, one primary action.\n\n## Logo & favicon\n\nWhen one mark serves as both the favicon and an in-page logo, define the SVG **once** — never a hardcoded `data:image/svg+xml` in `<head>` plus a separate inline `<svg>` in the body. The two copies drift, and the stale one is always the one you are not looking at.\n\n1. Define it once as a hidden `<symbol>` at the top of `<body>`:\n\n```html\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">\n  <symbol id="logo" viewBox="0 0 32 32"><!-- paths --></symbol>\n</svg>\n```\n\n2. Draw it in the page with `<use>`, sized in CSS — repeat it as often as you like, it costs nothing:\n\n```html\n<svg class="logo" aria-hidden="true"><use href="#logo"/></svg>\n```\n\n3. Build the favicon from that same symbol on load. A `<link rel="icon">` cannot point at an in-document `#id`, so serialize the symbol into a data URI:\n\n```html\n<script>\n  const sym = document.getElementById(\'logo\');\n  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${sym.getAttribute(\'viewBox\')}">${sym.innerHTML}</svg>`;\n  document.head.append(Object.assign(document.createElement(\'link\'), {\n    rel: \'icon\', href: \'data:image/svg+xml,\' + encodeURIComponent(svg),\n  }));\n<\/script>\n```\n\nThe favicon renders in its own isolated document: `currentColor`, `var(--ink)`, `var(--action)` and the page stylesheet do **not** reach it. Give the symbol\'s shapes literal colors (`fill="#0B0B0B"`, `fill="#D85A30"`), or the tab icon comes out a flat black silhouette with the accent gone.\n\n## Motion & polish\n\n- Transitions ≤ 250ms, `cubic-bezier(.2,.7,.2,1)`; only transform/opacity/color — no layout-thrashing animations.\n- Hover on cards that are themselves click targets: `transform: translateY(-2px)` + `--shadow-lg`. Don\'t lift static cards.\n- Respect `prefers-reduced-motion: reduce` → disable drifting/entrance animations and pulsing dots.\n- Custom scrollbar: thin, `--border-strong` thumb on transparent track, rounded.\n\n## Hard rules\n\n- Light theme only (unless the user explicitly asks for dark): never dark backgrounds as the page base. Inverted panels are accents, not the canvas.\n- **Orange means clickable; blue means true.** Never swap them, and never use orange as a body-text color or as a background for body copy.\n- Neutral/ink-tinted shadows only — no pure-black and no colored shadows.\n- Keep the palette to ink + neutrals + the two accents. If you need to distinguish many categories, prefer distinct icons or labels over inventing new hues.\n- Every interactive element needs visible hover and focus states.\n\n## Third-party libraries\n\n- You may load libraries from `https://cdn.jsdelivr.net`\n- Packages are available as `https://cdn.jsdelivr.net/npm/<package>@<version>/<file>`.\n- After adding a CDN dependency, check the `console` tool output for errors.\n',uo=`# aero-database: persistent storage for aero pages

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
`,ho=`# Aero HTML Slides Style Guide

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
`,fo=`# aero-ai: calling Gemini from inside an aero page

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
`,tr=[{name:"aero-app-style",description:"The unified aero visual style guide (design tokens, typography, layout, components, motion). REQUIRED before writing the first draft of a new page, and whenever the user asks to restyle a page or align it with the aero look.",content:co,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-database",description:"Persistent storage for Aero pages via the built-in AeroDB client (/aero-db.js) — tables, queries, per-visitor rows, anonymous submissions. REQUIRED whenever the page needs to save, load, or share data: to-do lists, polls, sign-ups, leaderboards, comments, game state.",content:uo,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-slides",description:"Aero HTML Slides style guide and template system. REQUIRED whenever the user asks to generate slides, a slide deck, or presentations in aero visual style.",content:ho,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]},{name:"aero-ai",description:"Calling Aero's built-in Gemini AI SDK (/aero-ai.js) from a published page — chat, generation, structured output, and the visitor sign-in redirect it requires. REQUIRED whenever the page itself needs to call an LLM at runtime (not just be built by one).",content:fo,source:"builtin",files:[],envSchema:[],envSet:[],allowedHosts:[]}];async function Fn(t){const r=[...tr],o=new Set(r.map(h=>h.name)),a=h=>h.access==="owner"?0:h.access==="manager"?1:2,s=[...t].sort((h,f)=>a(h)-a(f)||f.updatedAt-h.updatedAt);for(const h of s){if(!h.content.trim())continue;let f=h.name;for(let m=2;o.has(f);m++)f=`${h.name}-${m}`;o.add(f);let d=[];if(!jn(h.id))try{d=await na(h.id)}catch{}r.push({name:f,description:h.description,content:h.content,source:"remote",id:jn(h.id)?void 0:h.id,files:h.files,envSchema:h.envSchema,envSet:d,allowedHosts:h.allowedHosts})}return r}function po(t,r){return t?t.basedOnUpdatedAt!==r.updated_at&&t.html!==r.html?{html:r.html,supersededLocal:t.html}:{html:t.html,supersededLocal:null}:{html:r.html,supersededLocal:null}}const Je="⬤ ";let Rt=!1;function mo(){if(Rt||!document.title||document.title.startsWith(Je))return;Rt=!0,document.title=Je+document.title;const t=()=>{document.hidden||(document.title.startsWith(Je)&&(document.title=document.title.slice(Je.length)),Rt=!1,document.removeEventListener("visibilitychange",t))};document.addEventListener("visibilitychange",t)}let Bn=!1;function go(){Bn||typeof Notification>"u"||(Bn=!0,Notification.permission==="default"&&Notification.requestPermission().catch(()=>{}))}function _n(t){if(!document.hidden)return;const r=t.ok?"Aero finished your request":"Aero hit an error",o=t.ok?"The page has been updated — come take a look.":t.error??"The request failed. You can retry from the builder.";if(typeof Notification<"u"&&Notification.permission==="granted")try{const a=new Notification(r,{body:o,tag:"aero-turn-done"});a.onclick=()=>{window.focus(),a.close()},setTimeout(()=>a.close(),8e3);return}catch{}mo()}const bo=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,vo=`/**
 * Aero's DOM engine — flatten a document into a numbered map of what's on
 * screen, and act on it the way a user would.
 *
 * ONE copy, TWO hosts, because the logic is fiddly enough that two would
 * drift: which elements are worth an index, hit-testing what is actually on
 * top, the W3C pointer order that makes delegated handlers fire, and the
 * prototype-setter dance that makes React notice a typed value. Fixing any
 * of those in one copy and not the other is a bug nobody would see.
 *
 *   1. The Builder's preview iframe. frontend/src/lib/previewShim.ts imports
 *      this file's source with Vite's \`?raw\` and splices it into the
 *      previewed document as an inline script, wrapping \`act()\` in a
 *      postMessage transport. Nothing in this file may contain the string
 *      that closes a script element, or it would end that script early.
 *      That iframe is sandboxed
 *      WITHOUT allow-same-origin, so the parent cannot touch its document at
 *      all and everything must cross as messages.
 *   2. A real tab. background.js injects this file with
 *      \`chrome.scripting.executeScript({files})\` and then calls \`act()\` in a
 *      second injection. \`executeScript\` is not page eval, so no CSP or
 *      Trusted Types policy applies — which is the only reason this can run
 *      on pages that refuse evaluated source.
 *
 * The two differ in exactly one behaviour, \`mode\`: see \`guards\`.
 *
 * State (\`selectorMap\`, \`generation\`) is closure-scoped in the IIFE below and
 * lasts as long as the document — \`window.__aeroDom\` exposes only \`act\` and
 * \`currentGeneration\`, and is also the re-injection guard. Both hosts inject
 * this more than once into the same document, so re-running it would reset
 * the selector map mid-turn.
 *
 * Indexes come from a map rebuilt on every read, tagged with a \`generation\`;
 * an indexed op carrying a stale generation is refused rather than acted on —
 * without that check a second action in the same model turn would silently
 * hit whatever element inherited that index.
 *
 * Scoped to a single same-realm document on purpose: no cross-frame
 * coordinate translation, and no addressing scheme beyond those indices.
 */
(function(){
// Idempotent: both hosts may inject this more than once into the same
// document, and re-running it would reset the selector map mid-turn.
if(window.__aeroDom)return;

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
// block this document's JS thread (modal dialogs) — and, in 'record' mode,
// the things that would destroy it (navigation, form submit) — for
// recorders. The agent gets told what would have happened.
//
// 'record' is the preview: navigating there tears down the document the
// agent is building, taking the selector map with it, so it is reported
// instead of performed. 'allow' is a real tab, where navigating IS the
// point and the caller handles the document going away. The dialog
// recorders run in BOTH modes regardless — a real alert() blocks the
// frame's JS thread, which would hang the op rather than merely lose it.
//
// What confirm() answers differs by mode, though. In the preview a yes lets
// the agent exercise the flow it is building. On a real page confirm() is
// the site's own last check before something irreversible — "Delete this
// record?" — and the agent has been told never to take such a step without
// asking the user. So there it answers Cancel: the recoverable outcome. The
// model reads the recorded dialog, tells the user, and asks. prompt() is
// dismissed the same way for the same reason.
function guards(mode){
  var real=mode==='allow';
  var fx={dialogs:[]};
  var oa=window.alert,oc=window.confirm,op=window.prompt;
  window.alert=function(m){fx.dialogs.push({kind:'alert',message:clean(m).slice(0,300)});};
  window.confirm=function(m){fx.dialogs.push({kind:'confirm',message:clean(m).slice(0,300),answered:!real});return !real;};
  window.prompt=function(m){fx.dialogs.push({kind:'prompt',message:clean(m).slice(0,300),answered:real?null:''});return real?null:'';};
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
  var recording=mode!=='allow';
  if(recording){
    document.addEventListener('submit',onSubmit,true);
    document.addEventListener('click',onClick,true);
  }
  return {fx:fx,remove:function(){
    if(recording){
      document.removeEventListener('submit',onSubmit,true);
      document.removeEventListener('click',onClick,true);
    }
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

async function withHighlight(el,fn,mode){
  el.scrollIntoView({block:'center',inline:'nearest',behavior:'auto'});
  await waitMs(90);
  var off=highlight(el);
  await waitMs(380);
  var g=guards(mode);
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
/**
 * Run one op and return its result. Throws on a bad index, a stale
 * generation, or an op the element can't take — the caller reports the
 * message.
 *
 * \`mode\` is 'record' (preview: report navigation instead of performing it)
 * or 'allow' (real tab). \`generation\` is the snapshot the caller pinned; it
 * is required for any op addressing an element by index, and undefined for
 * a plain read.
 */
async function act(op,args,generation_,mode){
  args=args||{};
  var indexed=(op==='click'||op==='input_text'||op==='select_dropdown');
  var wantsIndex=indexed||(op==='scroll'&&typeof args.index==='number');
  var el=null;
  if(wantsIndex){
    // No pinned generation means the caller has not actually seen a page
    // map yet, so any index it supplies is a guess.
    if(typeof generation_!=='number'){
      throw new Error('read the page first — call read_page_state to get element numbers');
    }
    if(generation_!==generation)throw staleError();
    if(typeof args.index!=='number')throw new Error("missing numeric 'index'");
    el=selectorMap.get(args.index);
    if(!el||!el.isConnected)throw staleError();
  }
  var effects=null,note=null;
  if(op==='read_page_state'){
    // nothing to do; snapshot is taken below
  }else if(op==='click'){
    effects=await withHighlight(el,function(){return doClick(el);},mode);
  }else if(op==='input_text'){
    effects=await withHighlight(el,function(){return doInput(el,String(args.text==null?'':args.text));},mode);
  }else if(op==='select_dropdown'){
    effects=await withHighlight(el,function(){return doSelect(el,args.option);},mode);
  }else if(op==='scroll'){
    note=await doScroll(args.direction,args.amount,el);
  }else{
    throw new Error('unknown op: '+op);
  }
  await waitMs(120);
  var res={page_state:buildTree()};
  if(effects)res.effects=effects;
  if(note)res.note=note;
  return res;
}

window.__aeroDom={
  act:act,
  /** The current snapshot's generation, for callers reporting staleness. */
  currentGeneration:function(){return generation;},
};
})();
`,wo=`<script>(function(){
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
})();<\/script>`,xo=`<script>(function(){
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
})();<\/script>`,yo=`<script>(function(){
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
})();<\/script>`,ko=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+bo.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,So="<script>"+vo+`(function(){
// Transport only. The DOM work lives in chrome-extension/dom-engine.js,
// which the line above has already installed as window.__aeroDom.
async function handle(msg){
  var out;
  try{
    if(msg.op==='screenshot'){
      // Replies with its own result shape: no page_state, and — deliberately
      // — no read, which would bump the generation and strand any element
      // indices the model pinned earlier this turn. Preview-only; a real tab
      // is captured by the browser, not from inside the page.
      if(!window.__aeroCaptureScreenshot)throw new Error('screenshot capture is not available in this preview');
      out={type:'aero-dom-op-result',id:msg.id,ok:true,result:await window.__aeroCaptureScreenshot(),generation:window.__aeroDom.currentGeneration()};
      try{parent.postMessage(out,'*');}catch(e){}
      return;
    }
    var res=await window.__aeroDom.act(msg.op,msg.args,msg.generation,'record');
    out={type:'aero-dom-op-result',id:msg.id,ok:true,result:res,generation:window.__aeroDom.currentGeneration()};
  }catch(e){
    out={type:'aero-dom-op-result',id:msg.id,ok:false,error:(e&&e.message)||String(e),generation:window.__aeroDom.currentGeneration()};
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
})();<\/script>`;function Hn(t,r){const o=yo+wo+xo+(r!=null&&r.screenshot?ko:"")+So,a=t.match(/<head[^>]*>/i);if(!a)return o+t;const s=a.index+a[0].length;return t.slice(0,s)+o+t.slice(s)}function Co({url:t,isNew:r,visibility:o,onClose:a}){const s=l.useRef(null),h=l.useRef(null);l.useEffect(()=>{const d=h.current;d&&!d.contains(document.activeElement)&&d.focus()},[]);function f(d){if(d.key==="Escape"){a();return}if(d.key!=="Tab")return;const m=s.current;if(!m)return;const c=m.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(c.length===0)return;const p=c[0],T=c[c.length-1],M=document.activeElement;d.shiftKey&&(M===p||!m.contains(M))?(d.preventDefault(),T.focus()):!d.shiftKey&&(M===T||!m.contains(M))&&(d.preventDefault(),p.focus())}return e.jsx("div",{ref:h,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:f,onMouseDown:d=>{d.target===d.currentTarget&&a()},children:e.jsxs("div",{ref:s,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[e.jsx(Gn,{className:"h-10 w-10 text-success"}),e.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:r?"Page published":"Update published"}),e.jsx("p",{className:"text-[12px] text-fg-2",children:r?o==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx($a,{url:t})}),e.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:e.jsx(te,{autoFocus:!0,onClick:a,children:"Done"})})]})})}function jo({initialAlias:t,busy:r,onCancel:o,onPublish:a}){const[s,h]=l.useState(t),[f,d]=l.useState("public"),[m,c]=l.useState([]),p=l.useRef(null),T=l.useRef(null);l.useEffect(()=>{const v=T.current;v&&!v.contains(document.activeElement)&&v.focus()},[]);function M(v){if(v.key==="Escape"){o();return}if(v.key!=="Tab")return;const S=p.current;if(!S)return;const _=S.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(_.length===0)return;const I=_[0],ne=_[_.length-1],x=document.activeElement;v.shiftKey&&(x===I||!S.contains(x))?(v.preventDefault(),ne.focus()):!v.shiftKey&&(x===ne||!S.contains(x))&&(v.preventDefault(),I.focus())}return e.jsx("div",{ref:T,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:M,onMouseDown:v=>{v.target===v.currentTarget&&!r&&o()},children:e.jsxs("div",{ref:p,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"border-b border-border px-6 py-4",children:[e.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),e.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),e.jsxs("div",{className:"space-y-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(Rn,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),e.jsx(qa,{id:"publish-alias",autoFocus:!0,value:s,disabled:r,onChange:v=>h(v.target.value.toLowerCase()),placeholder:"my-app"}),e.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",s.trim()||"<uuid>"]})]}),e.jsxs("div",{children:[e.jsx(Rn,{children:"Who can open it"}),e.jsx(Ua,{visibility:f,onVisibilityChange:d,grants:m,onGrantsChange:c,disabled:r})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[e.jsx(te,{variant:"secondary",onClick:o,disabled:r,children:"Cancel"}),e.jsxs(te,{onClick:()=>a({alias:s.trim(),visibility:f,grants:m}),disabled:r,children:[e.jsx(Wn,{className:"h-3.5 w-3.5"}),r?"Publishing…":"Publish"]})]})]})})}function To(t,r){return Jn({queryKey:["page-history",t],queryFn:()=>xe.getPageHistory(t).then(o=>o.versions),enabled:r,retry:!1})}function On(t,r){return Jn({queryKey:["page-history-version",t,r],queryFn:()=>xe.getPageHistoryVersion(t,r).then(o=>o.html),enabled:r!==null,retry:!1})}function Eo({entries:t,isLoading:r,isError:o,isFetching:a,selectedSha:s,onSelect:h,onRefresh:f}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[e.jsx(Yn,{className:"h-3.5 w-3.5 text-fg-3"}),e.jsx("span",{className:"flex-1",children:"Version history"}),e.jsx("button",{type:"button",onClick:f,disabled:a,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),e.jsxs("div",{className:"scroll-slim flex-1 overflow-y-auto p-1.5",children:[r?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,o?e.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,t&&t.length===0?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(t??[]).map(d=>{const m=d.sha===s;return e.jsxs("button",{type:"button",onClick:()=>h(d),className:E("block w-full rounded-md px-2.5 py-2 text-left",m?"bg-ink":"hover:bg-surface-muted"),children:[e.jsx("div",{className:E("text-[12px] font-medium",m?"text-white":"text-fg"),children:new Date(d.committed_at).toLocaleString()}),e.jsxs("div",{className:E("truncate text-[11px]",m?"text-white/70":"text-fg-3"),children:[d.message,d.author_email?` — ${d.author_email}`:""]})]},d.sha)})]})]})}function No({entry:t,canRestore:r,onRestore:o,onExit:a}){const s=Vn();return e.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[e.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:t?e.jsxs(e.Fragment,{children:["Viewing version from ",new Date(t.committed_at).toLocaleString(),t.author_email?` (${t.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),e.jsxs(te,{variant:"secondary",size:"sm",onClick:a,children:[e.jsx(Pr,{className:"h-3.5 w-3.5"})," Back to current draft"]}),e.jsx(te,{size:"sm",disabled:!r,onClick:async()=>{await s({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&o()},children:"Restore this version"})]})}class Ao{diff(r,o,a={}){let s;typeof a=="function"?(s=a,a={}):"callback"in a&&(s=a.callback);const h=this.castInput(r,a),f=this.castInput(o,a),d=this.removeEmpty(this.tokenize(h,a)),m=this.removeEmpty(this.tokenize(f,a));return this.diffWithOptionsObj(d,m,a,s)}diffWithOptionsObj(r,o,a,s){var h;const f=x=>{if(x=this.postProcess(x,a),s){setTimeout(function(){s(x)},0);return}else return x},d=o.length,m=r.length;let c=1,p=d+m;a.maxEditLength!=null&&(p=Math.min(p,a.maxEditLength));const T=(h=a.timeout)!==null&&h!==void 0?h:1/0,M=Date.now()+T,v=[{oldPos:-1,lastComponent:void 0}];let S=this.extractCommon(v[0],o,r,0,a);if(v[0].oldPos+1>=m&&S+1>=d)return f(this.buildValues(v[0].lastComponent,o,r));let _=-1/0,I=1/0;const ne=()=>{for(let x=Math.max(_,-c);x<=Math.min(I,c);x+=2){let F;const J=v[x-1],z=v[x+1];J&&(v[x-1]=void 0);let ye=!1;if(z){const Se=z.oldPos-x;ye=z&&0<=Se&&Se<d}const ke=J&&J.oldPos+1<m;if(!ye&&!ke){v[x]=void 0;continue}if(!ke||ye&&J.oldPos<z.oldPos?F=this.addToPath(z,!0,!1,0,a):F=this.addToPath(J,!1,!0,1,a),S=this.extractCommon(F,o,r,x,a),F.oldPos+1>=m&&S+1>=d)return f(this.buildValues(F.lastComponent,o,r))||!0;v[x]=F,F.oldPos+1>=m&&(I=Math.min(I,x-1)),S+1>=d&&(_=Math.max(_,x+1))}c++};if(s)(function x(){setTimeout(function(){if(c>p||Date.now()>M)return s(void 0);ne()||x()},0)})();else for(;c<=p&&Date.now()<=M;){const x=ne();if(x)return x}}addToPath(r,o,a,s,h){const f=r.lastComponent;return f&&!h.oneChangePerToken&&f.added===o&&f.removed===a?{oldPos:r.oldPos+s,lastComponent:{count:f.count+1,added:o,removed:a,previousComponent:f.previousComponent}}:{oldPos:r.oldPos+s,lastComponent:{count:1,added:o,removed:a,previousComponent:f}}}extractCommon(r,o,a,s,h){const f=o.length,d=a.length;let m=r.oldPos,c=m-s,p=0;for(;c+1<f&&m+1<d&&this.equals(a[m+1],o[c+1],h);)c++,m++,p++,h.oneChangePerToken&&(r.lastComponent={count:1,previousComponent:r.lastComponent,added:!1,removed:!1});return p&&!h.oneChangePerToken&&(r.lastComponent={count:p,previousComponent:r.lastComponent,added:!1,removed:!1}),r.oldPos=m,c}equals(r,o,a){return a.comparator?a.comparator(r,o):r===o||!!a.ignoreCase&&r.toLowerCase()===o.toLowerCase()}removeEmpty(r){const o=[];for(let a=0;a<r.length;a++)r[a]&&o.push(r[a]);return o}castInput(r,o){return r}tokenize(r,o){return Array.from(r)}join(r){return r.join("")}postProcess(r,o){return r}get useLongestToken(){return!1}buildValues(r,o,a){const s=[];let h;for(;r;)s.push(r),h=r.previousComponent,delete r.previousComponent,r=h;s.reverse();const f=s.length;let d=0,m=0,c=0;for(;d<f;d++){const p=s[d];if(p.removed)p.value=this.join(a.slice(c,c+p.count)),c+=p.count;else{if(!p.added&&this.useLongestToken){let T=o.slice(m,m+p.count);T=T.map(function(M,v){const S=a[c+v];return S.length>M.length?S:M}),p.value=this.join(T)}else p.value=this.join(o.slice(m,m+p.count));m+=p.count,p.added||(c+=p.count)}}return s}}class Lo extends Ao{constructor(){super(...arguments),this.tokenize=Do}equals(r,o,a){return a.ignoreWhitespace?((!a.newlineIsToken||!r.includes(`
`))&&(r=r.trim()),(!a.newlineIsToken||!o.includes(`
`))&&(o=o.trim())):a.ignoreNewlineAtEof&&!a.newlineIsToken&&(r.endsWith(`
`)&&(r=r.slice(0,-1)),o.endsWith(`
`)&&(o=o.slice(0,-1))),super.equals(r,o,a)}}const Mo=new Lo;function Ro(t,r,o){return Mo.diff(t,r,o)}function Do(t,r){r.stripTrailingCr&&(t=t.replace(/\r\n/g,`
`));const o=[],a=t.split(/(\n|\r\n)/);a[a.length-1]||a.pop();for(let s=0;s<a.length;s++){const h=a[s];s%2&&!r.newlineIsToken?o[o.length-1]+=h:o.push(h)}return o}function Po(t,r){const o=[];let a=0;for(const s of Ro(t,r)){const h=s.added?"added":s.removed?"removed":"context",f=s.value.split(`
`);f.length>0&&f[f.length-1]===""&&f.pop();for(const d of f)o.push({key:a++,kind:h,text:d})}return o}function Dt({oldText:t,newText:r,oldLabel:o,newLabel:a}){const s=l.useMemo(()=>Po(t,r),[t,r]),h=s.every(f=>f.kind==="context");return e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[e.jsxs("span",{className:"text-no-strong",children:["− ",o]}),e.jsxs("span",{className:"text-success",children:["+ ",a]})]}),e.jsx("div",{className:"scroll-slim flex-1 overflow-auto",children:h?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):e.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:s.map(f=>e.jsxs("div",{className:E("flex whitespace-pre px-3",f.kind==="added"&&"bg-status-soft",f.kind==="removed"&&"bg-no-soft",f.kind==="context"&&"text-fg-2"),children:[e.jsx("span",{className:E("mr-2 shrink-0 select-none",f.kind==="added"&&"text-success",f.kind==="removed"&&"text-no-strong",f.kind==="context"&&"text-fg-3"),children:f.kind==="added"?"+":f.kind==="removed"?"−":" "}),e.jsx("span",{children:f.text||" "})]},f.key))})})]})}const Io=l.lazy(()=>zn(()=>import("./CodeEditor-Dn_26xS5.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(t=>({default:t.CodeEditor}))),we=`<!doctype html>
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
`,Ie=[];function $n(t){return t<1e3?String(t):t<1e6?`${(t/1e3).toFixed(t<1e4?1:0)}k`:`${(t/1e6).toFixed(2)}M`}function Un(t,r,o){const a=JSON.stringify(t).length,s=r.reduce((h,f)=>{var d,m;return h+(f.kind==="inline"?((d=f.data)==null?void 0:d.length)??0:((m=f.text)==null?void 0:m.length)??0)},0);return a+s+o.length}const Fo=.75,Bo=.85,qn=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function _o(t,r,o){if(o){const a=Math.max(0,Math.ceil((o.deadline-Date.now())/1e3));return`rate-limited — retry ${o.attempt} of ${o.max} in ${a}s…`}if(t)switch(t.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${t.detail?` (${t.detail})`:""}…`;case"grep":return`searching the page${t.detail?` for “${t.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return t.detail?`loading the ${t.detail} skill…`:"loading a skill…";case"action":return`running ${t.detail??"an action"}…`;case"web_search":return t.detail?`searching the web for “${t.detail}”…`:"searching the web…";case"database":return"updating the database…";default:return`using ${t.name}…`}return r>=10?`working… (${r}s — large edits can take a minute)`:r>=3?`working… (${r}s)`:"working…"}function Ho(t){return e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:t.name==="screenshot"?e.jsxs(e.Fragment,{children:[e.jsx(zr,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"looked at the page"})]}):t.name==="write"||t.name==="edit"?e.jsxs(e.Fragment,{children:[e.jsx(Xn,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"edited the page"})]}):t.name==="skill"?e.jsxs(e.Fragment,{children:[e.jsx(Vr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["loaded the ",e.jsx("span",{className:"font-medium text-fg-2",children:t.detail??"unknown"})," skill"]})]}):t.name==="action"?e.jsxs(e.Fragment,{children:[e.jsx(kn,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran ",e.jsx("span",{className:"font-medium text-fg-2",children:t.detail??"an action"})]})]}):t.name==="console"?e.jsxs(e.Fragment,{children:[e.jsx(kn,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"checked the console"})]}):t.name==="grep"?e.jsxs(e.Fragment,{children:[e.jsx(Gr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["searched the page",t.detail?e.jsxs(e.Fragment,{children:[" for ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:t.detail})]}):null]})]}):t.name==="database"?e.jsxs(e.Fragment,{children:[e.jsx(Wr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["updated the database",t.detail?` (${t.detail})`:""]})]}):t.name==="read"?e.jsxs(e.Fragment,{children:[e.jsx(Qn,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the page",t.detail?` (${t.detail})`:""]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Kn,{className:"h-3 w-3"}),e.jsxs("span",{children:["used ",e.jsx("span",{className:"font-medium text-fg-2",children:t.name}),t.detail?` (${t.detail})`:""]})]})}),t.name==="screenshot"&&t.imageUrl?e.jsx("img",{src:t.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function Jo(){var h;const{id:t}=Va(),o=((h=Ga().state)==null?void 0:h.publishContinuation)===!0,a=l.useRef(0),s=l.useRef(t);return!o&&t!==s.current&&(a.current+=1),s.current=t,e.jsx(Oo,{pageId:t??null},a.current)}function Oo({pageId:t}){var bn,vn;const r=t??"draft",o=Wa(),a=Yr(),s=Vn(),[h,f]=l.useState(!1),[d,m]=l.useState(we),[c,p]=l.useState(Ie),T=Kr(),M=ra(),v=aa(),{model:S,setModel:_,thinking:I,restoreThinking:ne,preferredThinkingRef:x,zenModels:F,zenModelInfo:J,modelsSettled:z,hasGoogleProject:ye,googleModels:ke,modelOffered:Se,modelLabel:Fe,modelReady:H,aiUnavailable:V,googleOut:nr,googleReason:Ze,zenInfoFor:rr}=T,[O,Ft]=l.useState(()=>[...oa]),[re,et]=l.useState(""),ue=l.useRef(null),ar=n=>{if(Sn(n)==="zen")return ue.current??(ue.current=crypto.randomUUID()),ue.current},$=l.useRef(null),[Ce,tt]=l.useState(""),[ae,nt]=l.useState([]),[Be,Bt]=l.useState([]),[or,rt]=l.useState(!1),[N,_e]=l.useState(!1),[sr,je]=l.useState(""),[ir,Te]=l.useState(""),[_t,at]=l.useState(null),[Ht,Ot]=l.useState(0),[ot,A]=l.useState(null),[lr,$t]=l.useState(!1),[Ut,oe]=l.useState(null),[qt,st]=l.useState(null),[G,zt]=l.useState(!1),[He,Vt]=l.useState("desktop"),[it,lt]=l.useState("code"),[Gt,ct]=l.useState(null),dt=t!=null&&Gt!=null,[Wt,he]=l.useState(null);l.useEffect(()=>{G||lt("code")},[G]);const[cr,dr]=l.useState(""),[ut,ht]=l.useState(null),[ur,Yt]=l.useState("public"),[Ee,ft]=l.useState(null),[hr,pt]=l.useState(!1),[fr,Xt]=l.useState(!1),[U,Ne]=l.useState(null),[pr,mt]=l.useState(!1),[Oe,$e]=l.useState(0),[Kt,mr]=l.useState(0),fe=l.useMemo(()=>URL.createObjectURL(new Blob([Hn(d,{screenshot:!0})],{type:"text/html"})),[d,Kt]),Ue=l.useRef(null);l.useEffect(()=>{Ue.current&&Ue.current!==fe&&URL.revokeObjectURL(Ue.current),Ue.current=fe},[fe]);const[y,Qt]=l.useState(!1),[L,qe]=l.useState(null),D=To(t??"",!!t),R=On(t??"",y?(L==null?void 0:L.sha)??null:null);l.useEffect(()=>{!y||!D.data||(L&&!D.data.some(n=>n.sha===L.sha)?qe(D.data[0]??null):!L&&D.data.length>0&&qe(D.data[0]))},[y,L,D.data]);function ze(){Qt(!1),qe(null),gt("preview"),bt("previous")}const[W,gt]=l.useState("preview"),[Z,bt]=l.useState("previous"),Jt=y&&L&&D.data?D.data.findIndex(n=>n.sha===L.sha):-1,Ae=Jt>=0?((bn=D.data)==null?void 0:bn[Jt+1])??null:null,Ve=On(t??"",y&&W==="diff"&&Z==="previous"?(Ae==null?void 0:Ae.sha)??null:null),[Zt,en]=l.useState(!1),vt=l.useRef(null);l.useEffect(()=>()=>{vt.current&&clearTimeout(vt.current)},[]);function gr(){Zt||(en(!0),D.refetch().finally(()=>{vt.current=setTimeout(()=>en(!1),2e3)}))}const Le=l.useMemo(()=>R.data===void 0?null:URL.createObjectURL(new Blob([Hn(R.data)],{type:"text/html"})),[R.data]),Ge=l.useRef(null);l.useEffect(()=>{Ge.current&&Ge.current!==Le&&URL.revokeObjectURL(Ge.current),Ge.current=Le},[Le]);const We=l.useRef(null),Ye=l.useRef([]),tn=l.useRef(0);l.useEffect(()=>{Ye.current=[],tn.current=Date.now()},[fe]);const br=l.useRef(0),Me=l.useRef(new Map),wt=l.useRef(!1),nn=l.useRef(y);l.useEffect(()=>{nn.current=y},[y]),l.useEffect(()=>{wt.current=!1;const n=Me.current;n.forEach(i=>{window.clearTimeout(i.timer),i.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),n.clear()},[fe,G,y]),l.useEffect(()=>{function n(i){var C;if(i.source!==((C=We.current)==null?void 0:C.contentWindow))return;const u=i.data;if(!u)return;if(u.type==="aero-dom-ready"){wt.current=!0;return}if(u.type==="aero-dom-op-result"&&typeof u.id=="number"){const b=Me.current.get(u.id);if(!b)return;Me.current.delete(u.id),window.clearTimeout(b.timer);const w=typeof u.generation=="number"?u.generation:null;b.resolve(u.ok?{ok:!0,result:u.result,generation:w}:{ok:!1,error:u.error||"the action failed",generation:w});return}if(u.type!=="aero-console"||typeof u.ts=="number"&&u.ts<tn.current)return;const g=u.level==="info"||u.level==="warn"||u.level==="error"?u.level:"log",k=Ye.current;k.push({level:g,text:typeof u.text=="string"?u.text:"",ts:u.ts??Date.now()}),k.length>300&&k.splice(0,k.length-300)}return window.addEventListener("message",n),()=>window.removeEventListener("message",n)},[]);async function vr(n,i,u){var w;nn.current&&ze(),zt(!1);const g=Date.now()+1e4;for(;!wt.current||!((w=We.current)!=null&&w.contentWindow);){if(Date.now()>g)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(j=>setTimeout(j,50))}const k=We.current.contentWindow,C=++br.current,b=n==="screenshot"?3e4:15e3;return new Promise(j=>{const q=window.setTimeout(()=>{Me.current.delete(C),j({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},b);Me.current.set(C,{resolve:j,reject:ce=>j({ok:!1,error:ce.message,generation:null}),timer:q}),k.postMessage({type:"aero-dom-op",id:C,op:n,args:i,generation:u},"*")})}const P=l.useRef(d),Y=n=>{P.current=n,m(n)},X=l.useRef(we),ee=l.useRef(null),Xe=l.useRef(Ie),xt=l.useRef(null),rn=l.useRef(null),an=l.useRef(null),se=l.useRef(null),yt=l.useRef(tr);l.useEffect(()=>{let n=!0;return sa().then(i=>Fn(i).then(u=>{n&&(yt.current=u)})).catch(()=>{}),ia().then(i=>Fn(i).then(u=>{n&&(yt.current=u)})).catch(()=>{}),()=>{n=!1}},[]);const ie=!!S&&Sn(S)==="zen",pe=ie&&Qr(J),me=ie?Zr:Ha,Re=la(S),wr=()=>{if(!re)return"Same as builder";const n=Fe(re);return!z||Se(re)?n:`${n} — unavailable`};l.useEffect(()=>{let n=!1;return ct(null),he(null),Ne(null),mt(!1),et(""),$.current=null,ue.current=null,ee.current=null,(async()=>{const i=await Tn(r).catch(()=>{});if(n)return;let u=Ie;if(i&&(Y(i.html),X.current=i.html,u=ca(i.contents),p(u),Xe.current=u,$e(En(u)),i.model&&_(i.model),ne(i.thinking,i.model??S),Ft(da(i.disabledTools,i.knownTools)),et(i.observerModel??""),$.current=i.zenSessionId??null),t)try{const g=await xe.getPage(t);if(n)return;ht(g.url),Yt(Dr(g.visibility)),ct(g.html),ee.current=g.updated_at;const{html:k,supersededLocal:C}=po(i,g);Y(k),X.current=k,i&&C!==null&&(he(C),Qe({...i,html:k,contents:u,basedOnUpdatedAt:g.updated_at,updatedAt:0}).catch(()=>{}))}catch{n||A("Failed to load page.")}n||f(!0)})(),()=>{n=!0}},[r]);const le=l.useRef(Date.now());l.useEffect(()=>{if(!N)return;le.current=Date.now(),Ot(0);const n=setInterval(()=>Ot(Math.round((Date.now()-le.current)/1e3)),1e3);return()=>clearInterval(n)},[N]);const on=()=>{if(ie)return $.current??($.current=crypto.randomUUID()),$.current},K=(n,i=O,u=re)=>{const g=P.current;return Qe({key:r,pageId:t,html:g,contents:n,model:S||null,thinking:x.current,disabledTools:i,knownTools:Et(),observerModel:u||void 0,zenSessionId:$.current??void 0,basedOnUpdatedAt:ee.current??void 0,updatedAt:0}).then(()=>{X.current=g,Xe.current=n}).catch(()=>{})},sn={sessionKey:r,pageId:t,contents:c,model:S,thinking:I,disabledTools:O,observerModel:re,modelsSettled:z,modelOffered:Se,zenInfoFor:rr},B=l.useRef(sn);B.current=sn;const ln=l.useRef(N);ln.current=N,l.useEffect(()=>()=>{if(P.current===X.current&&B.current.contents===Xe.current)return;const{sessionKey:n,pageId:i,contents:u,model:g,thinking:k,disabledTools:C,observerModel:b}=B.current;Qe({key:n,pageId:i,html:P.current,contents:u,model:g||null,thinking:k,disabledTools:C,knownTools:Et(),observerModel:b||void 0,zenSessionId:$.current??void 0,basedOnUpdatedAt:ee.current??void 0,updatedAt:0}).catch(()=>{})},[]);const kt=!ie||pe,xr=kt&&(ae.length>0||c.some(n=>n.parts.some(i=>i.inlineData))),ge=l.useMemo(()=>Un(c,ae,Ce),[c,ae,Ce]),yr=kt&&ge>me,cn=ge/me>=Fo,dn=Oe/Re>=Bo,un=Math.max(0,100-Math.round(Oe/Re*100)),hn=Re>=1e6?`${Math.round(Re/1e6)}M`:`${Math.round(Re/1e3)}K`;async function fn(n){var ce;const i=n===void 0,u=(n??Ce).trim(),g=i?ae:[];if(!u&&g.length===0||N||!H||Be.length>0)return;const k=i?ge:Un(c,g,u);if(kt&&k>me){A(`This message is too large to send (~${de(k)} — the limit for ${Fe} is ~${de(me)}). `+(g.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(u.startsWith("/")){const Q=u.split(/\s+/)[0];if(!ja(qn,Q)){A(`Unknown command: ${Q} — available: /compact`);return}}const C=Ta(u);if(C){tt(""),await Cr(C.instructions);return}const b=[ea()];for(const Q of g)b.push(Ea(Q.name,Q.mimeType)),b.push(Q.kind==="inline"?{inlineData:{mimeType:Q.mimeType,data:Q.data??""}}:{text:Q.text??""});u&&b.push({text:u});const w=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(u),j=/\bdeck-container\b|class="slide slide--/.test(P.current);P.current===we?b.push(Tt(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${w?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):j?b.push(Tt("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):w&&b.push(Tt("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const q=[...c,{role:"user",parts:b}];(ce=xt.current)==null||ce.followOutput(),p(q),i&&(tt(""),nt([])),go(),await pn(q)}async function pn(n){const i=new AbortController;se.current=i,_e(!0),je(""),Te(""),A(null),$t(!1),oe(null);const u=B.current.sessionKey;Ne(null);const g=P.current,k=Date.now(),C=on();try{const b=await Da({model:S,contents:n,html:()=>P.current,skills:yt.current,pageId:t,consoleLogs:()=>Ye.current,domOp:vr,browse:M,generationConfig:Cn(I,S),thinking:I,zenModelInfo:J,zenSession:C,hasGoogleProject:ye,disabledTools:O,signal:i.signal,callbacks:{onText:w=>{le.current=Date.now(),oe(null),je(j=>j+w)},onThought:w=>{le.current=Date.now(),oe(null),Te(j=>j+w)},onUsage:w=>{const j=w.totalTokenCount??w.promptTokenCount;typeof j=="number"&&$e(j)},onTool:(w,j)=>{le.current=Date.now(),oe(null),at({name:w,detail:j})},onHtml:w=>Y(w),onContents:w=>{le.current=Date.now(),at(null),p(w),je(""),Te("")},onStreamReset:()=>{je(""),Te(""),oe(null)},onRetry:(w,j,q)=>{le.current=Date.now(),oe({attempt:w,max:j,deadline:Date.now()+q*1e3})}}});p(b),await K(b),Date.now()-k>1e4&&_n({ok:!0});try{await Sr(b,g,u,i.signal)}catch{}}catch(b){if(b instanceof DOMException&&b.name==="AbortError")await K(B.current.contents);else{const w=b instanceof ve?ta(b.body):null,j=b instanceof ve?b.message==="reauth_required"?"Your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":w?w.message:`AI request failed: ${b.message}`:"AI request failed.";w&&st(w),A(j),$t(!(b instanceof ve&&b.message==="reauth_required")),_n({ok:!1,error:j}),await K(n)}}finally{se.current===i&&(se.current=null),_e(!1),je(""),Te(""),at(null),oe(null)}}function kr(){var n;(n=se.current)==null||n.abort()}async function Ke(){var n;N||!H||c.length===0||((n=xt.current)==null||n.followOutput(),await pn(c))}async function Sr(n,i,u,g){if(B.current.sessionKey!==u||B.current.disabledTools.includes(At)||g.aborted||P.current===i||!Nn(n))return;const{observerModel:k,model:C,modelsSettled:b,modelOffered:w,zenInfoFor:j}=B.current,q=k&&(!b||w(k))?k:C;mt(!0);try{const ce=await Fa({model:q,request:Ba(n),html:P.current,consoleEntries:Ye.current,zenModelInfo:j(q),zenSession:ar(q),signal:g});ce&&B.current.sessionKey===u&&Ne(ce)}finally{mt(!1)}}async function Cr(n){if(N||!H)return;if(c.length===0){A("Nothing to compact — the conversation is empty.");return}const i=new AbortController;se.current=i,_e(!0),Xt(!0),A(null);try{const u=await Pa({model:S,contents:c,instructions:n||void 0,generationConfig:Cn("off",S),zenSession:on(),signal:i.signal});await be(Ia(u))}catch(u){u instanceof DOMException&&u.name==="AbortError"||A(u instanceof ve?`Compaction failed: ${u.message}`:"Compaction failed.")}finally{se.current===i&&(se.current=null),_e(!1),Xt(!1)}}async function be(n){p(n),$e(En(n)),await K(n)}async function jr(n){if(N)return;const i=c;if(!(!await s({title:"Delete from history?",body:n.kind==="tool"||n.kind==="grouped-search"?`Removes ${n.refs.length===1?"this tool call and its result":`these ${n.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:n.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||ln.current||B.current.contents!==i))switch(n.kind){case"user":case"compact":await be(Ma(c,n.contentIndex));break;case"thought":await be(La(c,n.refs));break;case"tool":case"grouped-search":await be(Aa(c,n.refs));break;case"assistant":await be(Na(c,n.refs));break}}async function Tr(n,i){N||n.kind!=="user"&&n.kind!=="assistant"||B.current.contents===c&&await be(Ra(c,n.refs,i))}const De=Xr({mutationFn:async n=>{const i=P.current;if(t){const g=await xe.patchPage(t,{html:i});return{id:t,isNew:!1,url:null,html:i,visibility:ur,updatedAt:g.updated_at}}const u=await xe.createPage(i,{alias:(n==null?void 0:n.alias)||null,visibility:(n==null?void 0:n.visibility)??"public",grants:(n==null?void 0:n.grants)??[]});return{id:u.id,isNew:!0,url:u.url,html:i,visibility:(n==null?void 0:n.visibility)??"public",updatedAt:u.updated_at}},onSuccess:async({id:n,isNew:i,url:u,html:g,visibility:k,updatedAt:C})=>{if(A(null),pt(!1),Yt(k),X.current=g,ct(g),ee.current=C??ee.current,he(null),a.invalidateQueries({queryKey:["pages"]}),a.invalidateQueries({queryKey:["page",n]}),a.invalidateQueries({queryKey:["page-history",n]}),i)await Qe({key:n,pageId:n,html:P.current,contents:c,model:S||null,thinking:I,disabledTools:O,knownTools:Et(),observerModel:re||void 0,zenSessionId:$.current??void 0,basedOnUpdatedAt:ee.current??void 0,updatedAt:0}).catch(()=>{}),await Nt("draft").catch(()=>{}),ht(u),ft({url:u??`/p/${n}`,id:n,isNew:!0,visibility:k});else{const b=ut??`/p/${n}`;ht(b),ft({url:b,id:n,isNew:!1,visibility:k})}},onError:n=>{n instanceof ve&&n.body&&typeof n.body=="object"&&"reason"in n.body?A(`Publish failed: ${n.message} (${String(n.body.reason)})`):n instanceof ve?A(`Publish failed: ${n.message}`):A("Publish failed.")}});async function Er(){if(await s({title:"Reset builder",body:t?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Nt(r).catch(()=>{}),p(Ie),Xe.current=Ie,$e(0),A(null),Ne(null),$.current=null,ue.current=null,t)try{const i=await xe.getPage(t);Y(i.html),X.current=i.html,ee.current=i.updated_at,he(null)}catch{A("Failed to reload page.")}else Y(we),X.current=we}async function Nr(){if(P.current!==X.current){if(!await s({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;X.current=P.current}const n=await Tn("draft").catch(()=>{});n&&(n.contents.length>0||n.html!==we)&&await s({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&await Nt("draft").catch(()=>{}),o("/")}async function Ar(n){var g;const i=(g=n.target.files)==null?void 0:g[0];if(n.target.value="",!i)return;const u=await i.text();Y(u),A(null),K(c)}async function St(n){if(n.length===0)return;if(ie&&!pe){A(`${Fe} cannot read attachments. Switch models to attach files.`);return}if(pe&&n.some(g=>!g.type.startsWith("image/"))){A(`${Fe} accepts images only. Other file types need a Google model.`);return}const i=[],u=[];for(const g of n){let k=g;if(Zn(g)){Bt(b=>[...b,g.name]);try{k=await eo(g)}catch(b){u.push(b.message);continue}finally{Bt(b=>{const w=b.indexOf(g.name);return w<0?b:[...b.slice(0,w),...b.slice(w+1)]})}}else if(Za(g)){u.push(`"${g.name}" is the pre-2007 .ppt format. Save it as .pptx first.`);continue}const C=await _a(k);"error"in C?u.push(C.error):i.push(C)}i.length>0&&nt(g=>[...g,...i]),u.length>0&&A(u.join(" "))}function Lr(n){const i=Array.from(n.target.files??[]);n.target.value="",St(i)}const Ct=l.useMemo(()=>ua(c),[c]),mn=nr&&F.length>0,Pe=c[c.length-1],Mr=(Pe==null?void 0:Pe.role)==="user"&&Pe.parts.some(ha),gn=!N&&!!Pe&&!Nn(c)&&!Mr,Rr=((vn=Ct[Ct.length-1])==null?void 0:vn.kind)==="user";return h?e.jsxs("div",{className:"flex min-h-[480px] flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(Jr,{choice:T,disabled:N}),e.jsxs("button",{type:"button",onClick:()=>zt(n=>!n),disabled:y,className:E("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",G?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(Xn,{className:"h-3.5 w-3.5"})," Code"]}),e.jsxs("div",{className:E("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(G||y&&W!=="preview")&&"opacity-50"),children:[e.jsxs("button",{type:"button",onClick:()=>Vt("desktop"),disabled:G||y&&W!=="preview",title:"Preview at full width",className:E("inline-flex items-center gap-1 rounded-sm px-2 py-1",He==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Ir,{className:"h-3.5 w-3.5"})," Desktop"]}),e.jsxs("button",{type:"button",onClick:()=>Vt("mobile"),disabled:G||y&&W!=="preview",title:"Preview at phone width",className:E("inline-flex items-center gap-1 rounded-sm px-2 py-1",He==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Fr,{className:"h-3.5 w-3.5"})," Mobile"]})]}),e.jsxs("button",{type:"button",onClick:()=>mr(n=>n+1),disabled:G||y,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(wn,{className:"h-3.5 w-3.5"})," Reload"]}),e.jsxs("button",{type:"button",onClick:()=>{var n;return(n=rn.current)==null?void 0:n.click()},disabled:N||y,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Br,{className:"h-3.5 w-3.5"})," Upload"]}),e.jsx("input",{ref:rn,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:Ar}),e.jsxs("button",{type:"button",onClick:Er,disabled:N||y,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(_r,{className:"h-3.5 w-3.5"})," Reset"]}),t?e.jsxs("button",{type:"button",onClick:Nr,disabled:N||y,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Hr,{className:"h-3.5 w-3.5"})," New"]}):null,t?e.jsxs("button",{type:"button",onClick:()=>y?ze():Qt(!0),title:"Browse previously published versions of this page",className:E("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",y?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(Yn,{className:"h-3.5 w-3.5"})," History"]}):null,e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[ut?e.jsxs("a",{href:ut,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",e.jsx(Or,{className:"h-3 w-3"})]}):null,e.jsxs(te,{size:"sm",onClick:()=>t?De.mutate(void 0):pt(!0),disabled:N||De.isPending||y,children:[De.isPending?e.jsx(xn,{className:"h-3.5 w-3.5 animate-spin"}):e.jsx(Wn,{className:"h-3.5 w-3.5"}),t?"Publish update":"Publish"]})]})]}),ot&&!y?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:ot}),lr&&!N?e.jsxs("button",{type:"button",onClick:()=>void Ke(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[e.jsx(wn,{className:"h-3 w-3"})," Retry"]}):null]}):null,Wt!==null&&!y?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),e.jsxs("button",{type:"button",onClick:()=>{Y(Wt),he(null),K(c)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[e.jsx($r,{className:"h-3 w-3"})," Keep my local copy"]}),e.jsx("button",{type:"button",onClick:()=>he(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:e.jsx(jt,{className:"h-3 w-3"})})]}):null,(V||mn)&&!y?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[V?"AI is unavailable — ":"Google models are unavailable — ",Ze==="no_project"?e.jsxs(e.Fragment,{children:["no Code Assist project selected for your account."," ",e.jsx(Ya,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):Ze==="reauth_required"?"your Google credential has expired or is invalid. Sign out and sign in again to reconnect.":"could not load models. Try again later.",mn?" Free models are listed in the model picker and need no Google account.":null]}),Ze==="no_project"?e.jsx(Oa,{}):null]}):null,gn&&!ot&&!Rr&&!y?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),e.jsxs("button",{type:"button",onClick:()=>void Ke(),disabled:V||!H,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(yn,{className:"h-3 w-3"})," Resume"]})]}):null,e.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[e.jsx("div",{className:E("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",or&&"ring-2 ring-ink"),onDragOver:n=>{y||(n.preventDefault(),rt(!0))},onDragLeave:()=>rt(!1),onDrop:n=>{y||(n.preventDefault(),rt(!1),St(Array.from(n.dataTransfer.files)))},children:y?e.jsx(Eo,{entries:D.data,isLoading:D.isLoading,isError:D.isError,isFetching:D.isFetching||Zt,selectedSha:(L==null?void 0:L.sha)??null,onSelect:qe,onRefresh:gr}):e.jsx(fa,{ref:xt,chat:Ct,busy:N,streamText:sr,streamThought:ir,busyLabel:fr?"compacting conversation…":pr?"reviewing the page…":_o(_t,Ht,Ut),toolActive:_t!==null,retrying:Ut!==null,busyElapsed:Ht,emptyState:e.jsxs(e.Fragment,{children:["Describe the page you want to build.",e.jsx("br",{}),"Aero edits the HTML and you preview it live.",e.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:Ho,afterMessages:U?e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[U.kind==="issues"?e.jsx(qr,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):U.kind==="pass"?e.jsx(Gn,{className:"h-3.5 w-3.5 shrink-0 text-success"}):e.jsx(Qn,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),e.jsx("span",{className:"min-w-0 flex-1",children:U.kind==="issues"?e.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",U.findings.length===1?"1 thing":`${U.findings.length} things`," ","to check"]}):U.kind==="pass"?e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),e.jsx("button",{type:"button",onClick:()=>Ne(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:e.jsx(jt,{className:"h-3 w-3"})})]}),U.kind==="issues"?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:U.findings.map((n,i)=>e.jsx("li",{className:"list-disc text-fg-2",children:n},i))}),e.jsx("div",{className:"mt-2 pl-5",children:e.jsxs("button",{type:"button",onClick:()=>void fn(Ca(U.findings)),disabled:N||V||!H,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(yn,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:gn,resumeDisabled:V||!H,onResume:()=>void Ke(),onSaveItemEdit:(n,i)=>void Tr(n,i),onDeleteItem:n=>void jr(n),input:Ce,onInputChange:tt,onSend:()=>void fn(),onStop:kr,composerDisabled:N||V||!H,sendDisabled:V||!H||Be.length>0||!Ce.trim()&&ae.length===0||yr,placeholder:V?"AI unavailable":!H&&z?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:qn,composerMeta:e.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[xr?e.jsx("span",{className:E("tabular truncate",cn&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${de(ge)} of ${de(me)} — requests over that are rejected`,children:cn?`${de(ge)} / ${de(me)}`:de(ge)}):null,e.jsx("span",{className:E("tabular truncate",dn&&"font-medium text-no-strong"),title:`Approximate context window usage: ${$n(Oe)} of ${hn} tokens (${un}% left) — ${ie?"free models are held to a 200K-token context":"all Gemini models have a ~1M-token context"}`,children:dn?`${$n(Oe)} / ${hn}`:`${un}% left`})]}),attachmentsBar:ae.length>0||Be.length>0?e.jsxs("div",{className:"flex flex-wrap gap-1.5 px-3 pt-2.5",children:[ae.map(n=>e.jsxs("div",{className:"flex items-center gap-1.5 overflow-hidden rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[n.kind==="inline"&&n.mimeType.startsWith("image/")?e.jsx("img",{src:`data:${n.mimeType};base64,${n.data}`,alt:n.name,className:"h-7 w-7 shrink-0 object-cover"}):e.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:Sa(n.mimeType)}),e.jsx("span",{className:"max-w-[8rem] truncate text-fg-2",title:n.name,children:n.name}),e.jsx("button",{type:"button",onClick:()=>nt(i=>i.filter(u=>u.id!==n.id)),title:"Remove",className:"text-fg-3 hover:text-fg",children:e.jsx(jt,{className:"h-3 w-3"})})]},n.id)),Be.map((n,i)=>e.jsxs("div",{className:"flex items-center gap-1.5 rounded-md border border-border bg-surface-muted pr-1.5 text-[11px]",children:[e.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center text-fg-3",children:e.jsx(xn,{className:"h-3.5 w-3.5 animate-spin"})}),e.jsxs("span",{className:"max-w-[8rem] truncate text-fg-2",title:n,children:["Converting ",n,"…"]})]},`converting-${i}`))]}):void 0,composerLeading:e.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[e.jsxs(pa,{children:[e.jsx(ma,{asChild:!0,children:e.jsxs(te,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:E(An,"relative"),children:[e.jsx(Kn,{className:"h-3.5 w-3.5"}),O.length>0?e.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),e.jsx(ga,{className:"w-60",children:ba.map(n=>e.jsxs(l.Fragment,{children:[e.jsx(va,{checked:!n.names.some(i=>O.includes(i)),disabled:!!Ln(n.names,{browseAvailable:v}),onCheckedChange:i=>{const u=i?O.filter(g=>!n.names.includes(g)):[...new Set([...O,...n.names])];Ft(u),K(c,u)},children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:n.label}),e.jsx("span",{className:"text-[11px] text-fg-3",children:Ln(n.names,{browseAvailable:v})??n.hint})]})}),n.names.includes(At)&&!O.includes(At)?e.jsxs(wa,{children:[e.jsx(xa,{children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:"Reviewer model"}),e.jsx("span",{className:"text-[11px] text-fg-3",children:wr()})]})}),e.jsx(ya,{className:"max-h-72 w-56 overflow-y-auto",children:e.jsxs(ka,{value:re,onValueChange:i=>{et(i),K(c,O,i)},children:[e.jsx(Lt,{value:"",children:"Same as builder"}),ke.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Mn,{children:"Google"}),ke.map(i=>e.jsx(Lt,{value:i,children:i},i))]}):null,F.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Mn,{children:"Free · opencode zen"}),F.map(i=>e.jsx(Lt,{value:i.id,children:i.name},i.id))]}):null]})})]}):null]},n.id))})]}),ie&&!pe?null:e.jsxs(e.Fragment,{children:[e.jsx(te,{variant:"ghost",size:"sm",onClick:()=>{var n;return(n=an.current)==null?void 0:n.click()},disabled:N||V||!H,title:pe?"Attach an image":"Attach a file (image, PDF, audio, video, PowerPoint, or text)",className:An,children:e.jsx(Ur,{className:"h-3.5 w-3.5"})}),e.jsx("input",{ref:an,type:"file",multiple:!0,hidden:!0,...pe?{accept:"image/*"}:{},onChange:Lr})]})]}),onPasteFiles:n=>void St(n)})}),e.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:y?e.jsxs(e.Fragment,{children:[e.jsx(No,{entry:L,canRestore:!!L&&R.data!==void 0,onRestore:()=>{R.data!==void 0&&(Y(R.data),K(c)),ze()},onExit:ze}),L?e.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>gt("preview"),className:E("rounded-sm px-2 py-1",W==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),e.jsx("button",{type:"button",onClick:()=>gt("diff"),className:E("rounded-sm px-2 py-1",W==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),W==="diff"?e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>bt("previous"),className:E("rounded-sm px-2 py-1",Z==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),e.jsx("button",{type:"button",onClick:()=>bt("draft"),className:E("rounded-sm px-2 py-1",Z==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,W==="diff"&&L?Z==="previous"&&!Ae?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):Z==="previous"&&Ve.isLoading||R.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):Z==="previous"&&Ve.isError||R.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):Z==="previous"&&Ve.data!==void 0&&R.data!==void 0?e.jsx(Dt,{oldText:Ve.data,newText:R.data,oldLabel:`Version from ${new Date(Ae.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(L.committed_at).toLocaleString()}`}):Z==="draft"&&R.data!==void 0?e.jsx(Dt,{oldText:d,newText:R.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(L.committed_at).toLocaleString()}`}):null:W==="preview"?R.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):R.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):Le?e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:e.jsx("iframe",{title:"historic version preview",src:Le,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:E("h-full bg-white",He==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):G?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>lt("code"),className:E("rounded-sm px-2 py-1",it==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),e.jsx("button",{type:"button",onClick:()=>lt("diff"),disabled:!dt,title:dt?void 0:"Diff becomes available once this page has been published",className:E("rounded-sm px-2 py-1 disabled:opacity-50",it==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),it==="diff"&&dt?e.jsx(Dt,{oldText:Gt,newText:d,oldLabel:"Last published version",newLabel:"Current draft"}):e.jsx(l.Suspense,{fallback:e.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:e.jsx(Io,{value:d,onChange:Y,language:"html",className:"flex-1 overflow-auto"})})]}):e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:e.jsx("iframe",{ref:We,title:"preview",src:fe,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:E("h-full bg-white",He==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},Kt)})})]}),hr?e.jsx(jo,{initialAlias:cr,busy:De.isPending,onCancel:()=>pt(!1),onPublish:n=>{dr(n.alias),De.mutate(n)}}):null,Ee?e.jsx(Co,{url:Ee.url,isNew:Ee.isNew,visibility:Ee.visibility,onClose:()=>{const n=Ee;ft(null),n.isNew&&o(`/builder/${n.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,qt?e.jsx(za,{info:qt,onEnabled:()=>{st(null),A(null),Ke()},onClose:()=>st(null)}):null]}):e.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{Jo as BuilderPage};
