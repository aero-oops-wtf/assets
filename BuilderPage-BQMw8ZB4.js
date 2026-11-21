const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-CPpJP2va.js","./vendor-react-CVovBV3t.js","./index-BVpBwgBH.js","./vendor-query-DDCh7Fh8.js","./vendor-router-CX62Kryf.js","./index-ClyUSLoW.css"])))=>i.map(i=>d[i]);
import{u as rn,B as ce,c as C,b as Le,a5 as xo,a6 as ko,ar as So,E as Eo,I as To,m as er,j as jo,q as wt,a as Me,t as Jt,w as Ao,as as bt,_ as Co,x as No,at as Ro}from"./index-BVpBwgBH.js";import{r as o,j as e,e as Sr,G as Er,a0 as Tr,a1 as _o,a2 as jr,a3 as Mo,a4 as Lo,s as tr,a5 as Oo,h as Po,l as Io,a6 as Do,c as Fo,L as qo,a7 as Bo,X as nr,t as rr,W as Ar,y as Uo,i as Ho,a as Cr,a8 as $o,a9 as or,M as Wo,Y as Kt,aa as zo,ab as Go,D as Vo}from"./vendor-react-CVovBV3t.js";import{a as Nr,u as Yo,b as Jo}from"./vendor-query-DDCh7Fh8.js";import{az as on,aA as Ko,aB as Xo,aC as Qo,u as Zo,aD as ea,m as ta,r as na,k as ra,aE as oa,aF as Xt,aj as ar,ak as aa,t as ia,i as sa,al as ir,L as la,M as ca,C as ua,V as da,W as ha,am as sr,a0 as fa,aG as pa,a2 as ma,a3 as Je,ae as ga,ah as lr,aH as Qt,aI as va,aJ as wa,aK as ba,aL as ya,aM as Ke,aN as xa,a1 as cr,z as me,o as ur,aO as ka,an as Sa,ap as dr,q as Ea,v as Ta,w as ja,aq as Aa,ar as Ca,A as Na,B as Ra,D as _a,E as Ma,as as La,at as Rr,aP as _r,av as Oa,aw as Pa,F as hr,H as Ia,I as Da,aQ as fr,K as Fa,ay as qa,N as pr,aR as Ba,aS as Ua,aT as Ha,aU as $a}from"./LoadFailed-DPvn2290.js";import{a as Wa,b as za,u as Ga}from"./useBrowseAvailable-WTFW4tmy.js";import{u as Va}from"./useVaultUnavailable-CDmZbNgI.js";import{s as Ya,e as Ja,d as Ka,B as Xa,m as mr,a as Qa,u as Za,W as ei,D as ti,A as ni,r as ri,b as oi,n as gr,c as ai}from"./DictationButton-2XbJPtFo.js";import{s as ii,e as si,c as li,i as ci}from"./chatExport-xJgs8FYV.js";import{l as ui,s as di,m as hi,r as fi,d as vr,f as pi,c as mi}from"./workspaceDb-CJMMCk9G.js";import{c as gi,P as vi,a as wi}from"./aeroLinks-BV8rY17S.js";import{C as bi}from"./CloudShellHint-BPslfHrb.js";import{L as wr,I as yi}from"./Input-ijKJpX05.js";import{S as xi}from"./ServiceDisabledModal-Cw7v4LNv.js";import{c as ki,b as Si,u as Mr,L as Ei}from"./vendor-router-CX62Kryf.js";import"./Select-BhWGRNB4.js";import"./saveBytes-WKddV2BN.js";function Ti(n,r){return n?n.basedOnUpdatedAt!==r.updated_at&&n.html!==r.html?{html:r.html,supersededLocal:n.html}:{html:n.html,supersededLocal:null}:{html:r.html,supersededLocal:null}}async function Oe(n){const r=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(r)].map(s=>s.toString(16).padStart(2,"0")).join("")}async function an(n,r,s){const l=await Ko(n,r,s);return"error"in l?{kind:"failed",error:l.error}:{kind:"wrote",link:{path:r,revision:l.revision,hash:await Oe(s)}}}async function br(n,r,s){const l=await on(n,r.path);if("missing"in l)return{kind:"gone"};if("error"in l)return{kind:"failed",error:l.error};const c=await Oe(s),d=l.revision===r.revision?r.hash:await Oe(l.text),h=c!==r.hash;return d!==r.hash?h?d===c?{kind:"same",link:{path:r.path,revision:l.revision,hash:c}}:{kind:"conflict",text:l.text}:{kind:"loaded",link:{path:r.path,revision:l.revision,hash:d},text:l.text}:h?an(n,r.path,s):{kind:"same",link:{...r,revision:l.revision}}}async function Zt(n,r,s,l){if(s==="page")return an(n,r,l);const c=await on(n,r);return"missing"in c?{kind:"gone"}:"error"in c?{kind:"failed",error:c.error}:{kind:"loaded",link:{path:r,revision:c.revision,hash:await Oe(c.text)},text:c.text}}async function ji(n,r,s,l){const c=await on(n,r);return"error"in c?{kind:"failed",error:c.error}:"missing"in c||c.text.trim()===""?an(n,r,s):c.text===s?{kind:"same",link:{path:r,revision:c.revision,hash:await Oe(s)}}:l?{kind:"loaded",link:{path:r,revision:c.revision,hash:await Oe(c.text)},text:c.text}:{kind:"choose"}}const yr=4e3;function Ai(n,r){if(n===r)return"";const s=[];for(const c of Ya("","",n,r,"","",{context:2}).hunks)s.push(`@@ -${c.oldStart},${c.oldLines} +${c.newStart},${c.newLines} @@`,...c.lines);const l=s.join(`
`);return l.length<=yr?l:`${l.slice(0,yr)}
… (cut here; read the page for the rest)`}const Ci=600;function Ni(n){const{folderKey:r,folder:s,access:l,html:c,htmlRef:d,setHtml:h,isBlank:m,busy:A,onError:R}=n,y=rn(),[O,_]=o.useState(null),x=o.useRef(O),f=o.useRef(Promise.resolve()),L=o.useRef(null),ae=o.useRef(A);ae.current=A;const ee=o.useRef(!1),F=o.useRef(r);F.current=r,o.useEffect(()=>{let p=!0;return x.current=null,_(null),L.current=null,ee.current=!1,ui(r).then(g=>{p&&(x.current=g,_(g))}).catch(()=>{}),()=>{p=!1}},[r]);async function ve(p){const g=x.current;g&&p&&g.path===p.path&&g.revision===p.revision&&g.hash===p.hash||(x.current=p,_(p),await di(r,p).catch(()=>{}))}async function ie(p,g,b){if(F.current!==r)return!1;switch(g.kind){case"same":case"wrote":return await ve(g.link),!1;case"loaded":return L.current??(L.current={path:b,before:d.current}),h(g.text),await ve(g.link),!0;case"conflict":{const U=await y({title:`${b} changed in two places`,body:`${b} changed on disk, and this page changed in Aero, since they were last the same. Keep Aero's page and write it over the file, or use the file? Closing this uses the file, which holds your own edit; Aero's changes are still in the chat.`,confirmLabel:"Keep Aero's page",cancelLabel:"Use the file"});return F.current!==r?!1:ie(p,await Zt(p,b,U?"page":"file",d.current),b)}case"gone":return await ve(null),R(`${b} is no longer in the workspace folder, so this app's page is not linked to it any more.`),!1;case"failed":return R(`Could not keep ${b} in step with the page: ${g.error}`),!1}}function we(p){const g=f.current.then(p,p);return f.current=g.catch(()=>{}),g}function Pe(p){return we(async()=>{if(F.current!==r)return!1;const g=x.current,b=p??(l==="granted"?s:null);if(!g||!b)return!1;const U=d.current;let B=await br(b,g,U);return B.kind==="loaded"&&d.current!==U&&(B=await br(b,g,d.current)),ae.current&&(B.kind==="loaded"||B.kind==="conflict")?(ee.current=!0,!1):ie(b,B,g.path)})}async function Qe(){if(!s||!window.showOpenFilePicker)return;let p;try{if(await Xo(s,!0)!=="granted")return;[p]=await window.showOpenFilePicker({startIn:s,types:[{description:"Web page",accept:{"text/html":[".html",".htm"]}}]})}catch(U){const B=U==null?void 0:U.name;if(B==="AbortError")return;R(B==="SecurityError"||B==="NotAllowedError"?"Access to the folder is allowed now. Choose “Link the page to a file” again to pick the file.":`Could not open the file: ${U.message}`);return}if(!p)return;const g=await s.resolve(p);if(!g){R(`Pick a file inside “${s.name}”, this app's workspace folder.`);return}const b=g.join("/");await we(async()=>{if(F.current!==r)return!1;const U=await ji(s,b,d.current,m());if(U.kind!=="choose")return ie(s,U,b);const B=await y({title:`Use ${b} as this app's page?`,body:`The page and ${b} are different. Using the file replaces the page with it, and from then on each keeps the other in step.`,confirmLabel:"Use the file",cancelLabel:"No"});if(F.current!==r)return!1;if(B)return ie(s,await Zt(s,b,"file",d.current),b);const et=await y({title:`Write this app's page over ${b}?`,body:`${b} is replaced with the page, and from then on every change to the page is written to it.`,confirmLabel:"Write over the file",cancelLabel:"Cancel",variant:"danger"});return F.current!==r?!1:et?ie(s,await Zt(s,b,"page",d.current),b):!1})}async function q(){await we(async()=>{F.current===r&&await ve(null)})}function yt(){const p=L.current;if(L.current=null,!p)return null;const g=Ai(p.before,d.current);return g?{path:p.path,changes:g}:null}function be(){const p=L.current;return p&&p.before!==d.current?p.path:null}const ye=o.useRef(Pe);ye.current=Pe;const Ze=O==null?void 0:O.path;return o.useEffect(()=>{if(!Ze||!s||l!=="granted")return;const p=setTimeout(()=>void ye.current(),Ci);return()=>clearTimeout(p)},[c,Ze,s,l]),o.useEffect(()=>{const p=()=>void ye.current();return window.addEventListener("focus",p),()=>window.removeEventListener("focus",p)},[]),o.useEffect(()=>{A||!ee.current||(ee.current=!1,ye.current())},[A]),{link:O,current:()=>x.current,linkTo:Qe,unlink:q,sync:Pe,takeOutsideEdit:yt,pendingOutsideEdit:be}}const Ri=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,_i=`/**
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
`,Mi=`/*
 * What /aero-ai.js and /aero-db.js use instead of fetch in the Builder's
 * preview: they look for \`window.__AeroPreview\` on every request (see
 * aeroFetch in public/aero-ai.js and request in public/aero-db.js).
 *
 * The preview is a sandboxed blob: document (previewShim.ts). It holds no
 * session, and a root-relative path does not even resolve in it, so neither
 * SDK could reach Aero, and every page that used them carried a preview-only
 * branch and showed a "publish to try this" state while it was built. Now:
 *
 *  - /api/app-ai/* is posted to the Builder page around the preview, which
 *    checks each request against an allowlist and sends it with the builder's
 *    own session (previewBridge.ts), and the answer streams back. AeroAI
 *    really runs, as it would on their published page. Only the live
 *    preview's messages are read, so in the history view these answer 501
 *    here instead of hanging.
 *  - /api/db/* is answered here, from memory, in the server's own shapes and
 *    by its rules (src/api/database.rs): the preview must not touch the
 *    page's real tables. Rows last until the preview reloads, which is every
 *    edit. The first use tells the Builder, which says the data is simulated.
 *  - Anything else answers 404: the SDKs ask for nothing else.
 *
 * Plain script, injected as text ahead of the page's own scripts, with its
 * config set just before it:
 * \`window.__AeroPreviewConfig = { origin, relay, token, replyTag }\`.
 * \`token\` is this load's secret: every message to the Builder carries it, so
 * a site the frame navigates to, which keeps the same window, cannot have
 * requests sent with the builder's session. \`replyTag\` marks the Builder's
 * replies to this load, so a reply meant for the previous document is not
 * taken for one of this one's. It is not the token: replies go to whatever
 * document the frame holds by then, so a reply carrying the token would hand
 * it to a site the frame navigated to while an answer streamed.
 */
(function () {
  'use strict';

  var config = window.__AeroPreviewConfig || {};
  var ORIGIN = String(config.origin || '');
  var RELAY = !!config.relay;
  var TOKEN = String(config.token || '');
  var REPLY_TAG = String(config.replyTag || '');
  // This document's own name among the preview's, on every request and on the
  // goodbye below, so the Builder stops only its relays when it goes. A
  // remounted frame loads the same address with the same secret, so the
  // secret alone cannot tell the two documents apart.
  var DOC = Math.random().toString(36).slice(2) + Date.now().toString(36);
  var BYE = 'aero-preview-bye';
  var FETCH = 'aero-preview-fetch';
  var REPLY = 'aero-preview-fetch-reply';
  var DB_USED = 'aero-preview-db';

  function json(status, body) {
    return new Response(JSON.stringify(body), { status: status, headers: { 'Content-Type': 'application/json' } });
  }

  // ── AeroAI: relayed to the Builder ───────────────────────────────────────

  var pending = {};
  var nextId = 1;

  window.addEventListener('message', function (e) {
    if (e.source !== window.parent) return;
    var d = e.data;
    if (!d || d.type !== REPLY || d.tag !== REPLY_TAG || !pending[d.id]) return;
    var p = pending[d.id];
    if (d.head) p.head(d.head);
    else if (typeof d.chunk === 'string') p.chunk(d.chunk);
    else if (d.done) p.done();
    else if (d.error !== undefined) p.error(d.error);
  });

  /** One request carried to the Builder; resolves with a Response whose body
   *  streams as the Builder reads Aero's. */
  function relay(path, init) {
    return new Promise(function (resolve, reject) {
      var id = nextId++;
      var controller;
      var answered = false;
      var encoder = new TextEncoder();
      var stream = new ReadableStream({
        start: function (c) {
          controller = c;
        },
      });
      pending[id] = {
        head: function (h) {
          answered = true;
          // These statuses may not carry a body; Response refuses one.
          var empty = h.status === 204 || h.status === 205 || h.status === 304;
          resolve(
            new Response(empty ? null : stream, {
              status: h.status,
              statusText: h.statusText || '',
              headers: h.contentType ? { 'Content-Type': h.contentType } : {},
            }),
          );
        },
        chunk: function (text) {
          try {
            controller.enqueue(encoder.encode(text));
          } catch (_) {
            /* the page stopped reading */
          }
        },
        done: function () {
          delete pending[id];
          try {
            controller.close();
          } catch (_) {
            /* already closed */
          }
        },
        error: function (message) {
          delete pending[id];
          // A network failure, as fetch reports one: a TypeError.
          var err = new TypeError(String(message || 'the Builder could not relay this request'));
          if (!answered) return reject(err);
          try {
            controller.error(err);
          } catch (_) {
            /* already closed */
          }
        },
      };
      window.parent.postMessage(
        {
          type: FETCH,
          token: TOKEN,
          doc: DOC,
          id: id,
          path: String(path),
          method: (init && init.method) || 'GET',
          body: init && typeof init.body === 'string' ? init.body : undefined,
        },
        '*',
      );
    });
  }

  // Going (a navigation, a reload, the frame removed): the Builder stops what
  // this document asked for, which would otherwise stream on into whatever
  // the frame holds next. pagehide fires in every one of those cases; the
  // frame's load event, counted from outside, could not tell a navigation
  // from a remount or from the previous document's late load.
  if (RELAY) {
    window.addEventListener('pagehide', function () {
      try {
        window.parent.postMessage({ type: BYE, token: TOKEN, doc: DOC }, '*');
      } catch (_) {
        /* no Builder around this document */
      }
    });
  }

  // ── AeroDB: simulated, in memory ─────────────────────────────────────────

  var DB = '/api/db/';
  // Who \`whoami\` says the preview's visitor is, and the \`_owner\` its rows get.
  // Plainly not a real account.
  var ME = { kind: 'user', id: 'you (preview)', class: 'owner', isAdmin: false };
  var TABLE = /^[a-z0-9][a-z0-9_-]{0,62}$/;
  var DOC_ID = /^[A-Za-z0-9_-]{1,128}$/;
  var MAX_ROW_BYTES = 256 * 1024;
  var MAX_RADIUS_M = 50000;
  var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var tables = {};
  var told = false;

  function tellBuilder() {
    if (told) return;
    told = true;
    try {
      // With this load's secret, so the Builder ignores one from the previous
      // document or from a site the frame navigated to.
      window.parent.postMessage({ type: DB_USED, token: TOKEN }, '*');
    } catch (_) {
      /* no Builder around this document */
    }
  }

  /** Twenty letters and digits, the shape of the ids Firestore gives rows. */
  function newId() {
    var s = '';
    for (var i = 0; i < 20; i++) s += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    return s;
  }

  /** Rows leave as copies, as they would from a server: a page that changes
   *  one it was given changes nothing here. */
  function copy(v) {
    return JSON.parse(JSON.stringify(v));
  }

  /** A write's body as the server reads it: a JSON object within the per-row
   *  cap, else the server's own refusal. */
  function objectBody(init) {
    var raw = init && typeof init.body === 'string' ? init.body : '';
    if (new TextEncoder().encode(raw).length > MAX_ROW_BYTES) return json(413, { error: 'payload_too_large' });
    try {
      var v = JSON.parse(raw);
      if (v !== null && typeof v === 'object' && !Array.isArray(v)) return v;
    } catch (_) {
      /* falls through to the refusal */
    }
    return json(400, { error: 'body_must_be_json_object' });
  }

  /** Server-managed fields a write may not set (\`strip_owner\`, and the geo
   *  index the server keeps beside lat and lng). */
  function stripManaged(body) {
    delete body._owner;
    delete body._geohash;
  }

  /** Store \`value\` under \`key\` as an own field. Defined, not assigned:
   *  assigning a \`__proto__\` field would run the prototype setter instead of
   *  storing a field, as the server stores any name it is sent. */
  function put(obj, key, value) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, writable: true, configurable: true });
  }

  function own(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  /** A query value as Rust's \`str::parse::<u32>\` reads it, or null, for which
   *  the server keeps its default. */
  function u32(value) {
    if (value === null || !/^\\+?\\d+$/.test(value)) return null;
    var n = Number(value);
    return n <= 4294967295 ? n : null;
  }

  // Firestore orders values of different types by type first: null, then
  // booleans, numbers, strings, arrays and maps.
  function rank(v) {
    if (v === null) return 0;
    if (typeof v === 'boolean') return 1;
    if (typeof v === 'number') return 2;
    if (typeof v === 'string') return 3;
    return Array.isArray(v) ? 4 : 5;
  }

  function compare(x, y) {
    var rx = rank(x);
    var ry = rank(y);
    if (rx !== ry) return rx < ry ? -1 : 1;
    if (rx >= 4) {
      x = JSON.stringify(x);
      y = JSON.stringify(y);
    }
    if (x === y) return 0;
    return x < y ? -1 : 1;
  }

  function byId(a, b) {
    return compare(a.id, b.id);
  }

  /**
   * The list query, read as \`parse_list_params\` (src/api/database.rs) reads
   * it, so a page cannot behave one way here and another once published. The
   * server walks the pairs in order: a later \`limit\`, \`offset\`, \`order_by\` or
   * \`mine\` replaces an earlier one, a \`limit\` or \`offset\` that is not a whole
   * number leaves the earlier value (else the defaults, 50 and 0), and an
   * empty field name, in \`order_by=-\` or \`eq.=1\`, is ignored. \`limit\` is
   * clamped to 1..200, \`offset\` capped at 10,000, \`mine\` is \`true\` or \`1\`,
   * every \`eq.<field>\` must match, its value read as JSON where it parses, and
   * \`near.*\` is collected for \`near\` below.
   */
  function listParams(q) {
    var p = { limit: 50, offset: 0, mine: false, order: null, eq: [], near: [] };
    q.forEach(function (value, key) {
      if (key === 'limit') {
        var n = u32(value);
        if (n !== null) p.limit = Math.min(200, Math.max(1, n));
      } else if (key === 'offset') {
        var o = u32(value);
        if (o !== null) p.offset = Math.min(10000, o);
      } else if (key === 'order_by') {
        var desc = value.charAt(0) === '-';
        var field = desc ? value.slice(1) : value;
        if (field) p.order = { field: field, desc: desc };
      } else if (key === 'mine') {
        p.mine = value === 'true' || value === '1';
      } else if (key.indexOf('eq.') === 0 && key.length > 3) {
        var want;
        try {
          want = JSON.parse(value);
        } catch (_) {
          want = value;
        }
        p.eq.push({ field: key.slice(3), want: JSON.stringify(want) });
      } else if (key.indexOf('near.') === 0) {
        p.near.push([key.slice(5), value]);
      }
    });
    return p;
  }

  /** Every \`eq\` matched, and \`mine\` when asked: the server's filters. */
  function matches(row, p) {
    if (p.mine && row.data._owner !== ME.id) return false;
    return p.eq.every(function (e) {
      return own(row.data, e.field) && JSON.stringify(row.data[e.field]) === e.want;
    });
  }

  function list(rows, p) {
    var out = rows.filter(function (r) {
      return matches(r, p);
    });
    if (p.order) {
      var f = p.order.field;
      // Firestore leaves out rows without the field it orders by, so the
      // stand-in does too. Own fields only: \`order_by=constructor\` must find
      // no rows, as on the server, not every row's inherited one.
      out = out.filter(function (r) {
        return own(r.data, f) && r.data[f] !== undefined;
      });
      out.sort(function (a, b) {
        var c = compare(a.data[f], b.data[f]);
        return (p.order.desc ? -c : c) || byId(a, b);
      });
    } else {
      // Firestore answers an unordered query in document-id order, which for
      // its random ids is no order a page should rely on: neither does this.
      out.sort(byId);
    }
    return out.slice(p.offset, p.offset + p.limit);
  }

  /** Great-circle distance in meters, as the server's \`geo::haversine_m\`. */
  function haversine(lat1, lng1, lat2, lng2) {
    var rad = Math.PI / 180;
    var dp = (lat2 - lat1) * rad;
    var dl = (lng2 - lng1) * rad;
    var a = Math.sin(dp / 2) * Math.sin(dp / 2) + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dl / 2) * Math.sin(dl / 2);
    return 2 * 6371000 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  /**
   * \`near.lat\`, \`near.lng\`, \`near.radius_m\`: as the server checks them
   * (\`parse_near\`, \`near_query\`), strictly, and alone, then the rows within
   * the radius nearest first, each with \`_distanceMeters\`. Every simulated
   * table answers it: the preview has no table settings, so whether the
   * published table has \`geo: true\` is only tested there.
   */
  function near(rows, p) {
    var got = {};
    for (var i = 0; i < p.near.length; i++) {
      var k = p.near[i][0];
      if (k !== 'lat' && k !== 'lng' && k !== 'radius_m') {
        return json(400, { error: 'invalid_near', reason: 'unknown near.* parameter (expected near.lat, near.lng, near.radius_m)' });
      }
      if (own(got, k)) return json(400, { error: 'invalid_near', reason: 'duplicate near.* parameter' });
      // What Rust's \`str::parse::<f64>\` takes: no spaces, no hex.
      var raw = p.near[i][1];
      var n = /^[+-]?(\\d+\\.?\\d*|\\.\\d+)([eE][+-]?\\d+)?$/.test(raw) ? Number(raw) : NaN;
      if (!isFinite(n)) return json(400, { error: 'invalid_near', reason: 'near.* values must be finite numbers' });
      got[k] = n;
    }
    if (!own(got, 'lat') || !own(got, 'lng') || !own(got, 'radius_m')) {
      return json(400, { error: 'invalid_near', reason: 'near requires all of near.lat, near.lng, near.radius_m' });
    }
    if (got.lat < -90 || got.lat > 90) return json(400, { error: 'invalid_near', reason: 'near.lat out of range (-90..90)' });
    if (got.lng < -180 || got.lng > 180) return json(400, { error: 'invalid_near', reason: 'near.lng out of range (-180..180)' });
    if (got.radius_m <= 0) return json(400, { error: 'invalid_near', reason: 'near.radius_m must be positive' });
    if (got.radius_m > MAX_RADIUS_M) return json(400, { error: 'invalid_near', reason: 'near.radius_m too large (max 50000)' });
    if (p.eq.length > 0 || p.mine || p.order) {
      return json(400, {
        error: 'near_exclusive',
        reason: 'near cannot combine with eq, mine, or order_by — filter the returned rows client-side',
      });
    }
    if (p.offset > 0) {
      return json(400, { error: 'invalid_near', reason: 'offset is not supported with near — use a smaller radius_m instead' });
    }
    var hits = [];
    rows.forEach(function (r) {
      var lat = r.data.lat;
      var lng = r.data.lng;
      if (typeof lat !== 'number' || typeof lng !== 'number') return;
      var d = haversine(got.lat, got.lng, lat, lng);
      if (d <= got.radius_m) hits.push({ d: d, row: r });
    });
    hits.sort(function (a, b) {
      return a.d - b.d || byId(a.row, b.row);
    });
    return json(200, {
      rows: hits.slice(0, p.limit).map(function (h) {
        var row = copy(h.row);
        // Top-level, not inside data: data round-trips through PUT.
        row._distanceMeters = Math.round(h.d * 10) / 10;
        return row;
      }),
    });
  }

  /** One /api/db request, answered as the server would: rows are
   *  {id, data, createTime, updateTime}, with \`_owner\` in data. */
  function db(path, init) {
    tellBuilder();
    var url = new URL(path, 'https://preview.invalid');
    var parts = url.pathname.slice(DB.length).split('/').map(decodeURIComponent);
    var table = parts[1];
    var id = parts[2];
    var method = String((init && init.method) || 'GET').toUpperCase();
    if (parts.length > 3 || !table) return json(404, { error: 'not_found' });
    if (table === 'whoami' && id === undefined && method === 'GET') return json(200, ME);
    // Table settings and grants are the published page's: the preview has none.
    if (table === 'tables' || table === 'grants') return json(404, { error: 'not_found' });
    if (!TABLE.test(table)) {
      return json(400, { error: 'invalid_table', reason: 'table name must match ^[a-z0-9][a-z0-9_-]{0,62}$' });
    }
    if (table === 'whoami') return json(400, { error: 'invalid_table', reason: 'table name is reserved' });
    if (id !== undefined && !DOC_ID.test(id)) return json(400, { error: 'invalid_doc_id' });

    var key = parts[0] + '/' + table;
    var rows = tables[key] || (tables[key] = []);
    var now = new Date().toISOString();
    var body;

    if (id === undefined) {
      if (method === 'GET') {
        var p = listParams(url.searchParams);
        if (p.near.length > 0) return near(rows, p);
        return json(200, { rows: list(rows, p).map(copy) });
      }
      if (method !== 'POST') return json(405, { error: 'method_not_allowed' });
      body = objectBody(init);
      if (body instanceof Response) return body;
      stripManaged(body);
      body._owner = ME.id;
      var doc = { id: newId(), data: body, createTime: now, updateTime: now };
      rows.push(doc);
      return json(201, copy(doc));
    }

    var at = -1;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].id === id) {
        at = i;
        break;
      }
    }
    if (method === 'GET') return at < 0 ? json(404, { error: 'not_found' }) : json(200, copy(rows[at]));
    if (method === 'DELETE') {
      if (at < 0) return json(404, { error: 'not_found' });
      rows.splice(at, 1);
      return json(200, { ok: true });
    }
    if (method !== 'PUT' && method !== 'PATCH') return json(405, { error: 'method_not_allowed' });
    body = objectBody(init);
    if (body instanceof Response) return body;
    stripManaged(body);
    if (method === 'PUT') {
      // A replace keeps the row's owner; only a create takes the caller's.
      body._owner = at < 0 ? ME.id : rows[at].data._owner;
      if (at < 0) {
        rows.push({ id: id, data: body, createTime: now, updateTime: now });
        return json(200, copy(rows[rows.length - 1]));
      }
      rows[at] = { id: id, data: body, createTime: rows[at].createTime, updateTime: now };
      return json(200, copy(rows[at]));
    }
    // The server reads and checks the body before it looks for the row.
    if (Object.keys(body).length === 0) return json(400, { error: 'empty_patch' });
    if (at < 0) return json(404, { error: 'not_found' });
    for (var k in body) put(rows[at].data, k, body[k]);
    rows[at].updateTime = now;
    return json(200, copy(rows[at]));
  }

  window.__AeroPreview = {
    origin: ORIGIN,
    fetch: function (input, init) {
      var path = String(input);
      if (path.indexOf(DB) === 0) {
        try {
          return Promise.resolve(db(path, init));
        } catch (e) {
          return Promise.resolve(json(400, { error: String((e && e.message) || e) }));
        }
      }
      if (path.indexOf('/api/app-ai/') === 0) {
        if (!RELAY) {
          return Promise.resolve(
            json(501, { error: 'AeroAI runs in the live preview and on the published page, not in this view of an older version.' }),
          );
        }
        return relay(path, init);
      }
      return Promise.resolve(json(404, { error: 'the builder preview answers only AeroAI and AeroDB requests' }));
    },
  };
})();
`,Li=`/**
 * AeroAI — tiny AI client for aero-hosted pages.
 *
 * Include from any hosted page:
 *
 *   <script src="/aero-ai.js"><\/script>
 *   <script>
 *     const { models } = await AeroAI.models();
 *     const res = await AeroAI.generateContent({ model: models[0], contents: 'Write a haiku about the ocean.' });
 *     console.log(res.text);
 *   <\/script>
 *
 * There is NO API key here and no config: requests go same-origin to aero's
 * /api/app-ai/* and ride the VISITOR's own session cookie — every call uses
 * the models of the person currently looking at the page, their own
 * Antigravity models and their Code Assist ones, and their own quota, never
 * the page author's and never aero's own. If they aren't signed in, any
 * AeroAI call redirects the browser to /login and back to the current page
 * automatically — the page author doesn't need to handle that case. A
 * signed-in visitor with no model to run (neither connected) lands on the
 * same page, which tells them what is missing and links back here.
 *
 * \`AeroAI.decide\` is the one exception: it answers closed-set questions about
 * one input (a yes/no, a pick from a list, a score on a rubric) fast, with a
 * probability for each, and writes no text. Neither of those models serves a
 * decision model, so it runs on a free tier shared by every page and costs the
 * visitor none of their quota. See \`decide\` below.
 *
 * \`systemInstruction\` is NOT overridden server-side for this endpoint (only
 * the builder's own agent gets that) — set it yourself to shape the
 * assistant's behavior for your page.
 *
 * In the Builder's preview it works too, on the builder's own session: see
 * aeroFetch below.
 *
 * \`AeroAI.agent\` runs a model over the tools the page offers AI agents through
 * WebMCP (\`document.modelContext\`, and \`toolname\` forms): see \`agent\` below.
 * Where the browser has no WebMCP, loading this file puts a stand-in there
 * first (\`installWebMcpStandIn\`), so the page's tools and its own agent work in
 * every browser. An agent outside the page (Chrome's, an extension's, Aero's
 * Chat) needs the browser's real API, which only that sees.
 */
(function () {
  'use strict';

  /**
   * Every request to aero goes through here. On a published page it is plain
   * fetch. In the Builder's preview, a sandboxed blob: document with no
   * session, where a root-relative URL does not even resolve, the preview code
   * (frontend/src/lib/previewAero.js) puts \`window.__AeroPreview\` in place
   * first: it carries the request to the Builder page around the preview,
   * which checks it against an allowlist and sends it with the builder's own
   * session. Read on every call, not once, so the order the scripts load in
   * does not matter.
   */
  function aeroFetch(url, init) {
    var preview = window.__AeroPreview;
    return preview ? preview.fetch(url, init) : fetch(url, init);
  }

  /**
   * Aero answered that the visitor must sign in, or connect the account the
   * model needs (\`res\`, a 401 or 409). On a page aero serves: send them to sign-in and
   * back, and never resolve, since the navigation replaces the page; the login
   * page then says what is missing. In the Builder's preview there is no page
   * to send: reject with what aero answered instead, read from its body.
   * Callers \`return\` it either way.
   */
  function redirectToLogin(res) {
    if (window.__AeroPreview) {
      var status = res.status;
      return res
        .json()
        .catch(function () {
          return null;
        })
        .then(function (data) {
          throw new Error('AeroAI in the builder preview: aero answered ' + status + ': ' + previewSignInAdvice(status, data && data.error));
        });
    }
    // Include the hash too — a hosted page may use hash-based routing or
    // stash in-page state there (e.g. \`#/chat/123\`), and losing it would
    // strand the visitor on the page's root after signing back in.
    var next = window.location.pathname + window.location.search + window.location.hash;
    window.location.href = '/login?next=' + encodeURIComponent(next);
    return new Promise(function () {});
  }

  /** What a sign-in answer means in the preview, where the builder is signed in to aero around it. */
  function previewSignInAdvice(status, reason) {
    if (reason === 'not_connected') return "the account this model needs isn't connected. Connect Antigravity or Code Assist on aero's Settings tab, then reload the preview.";
    if (reason === 'no_project') return "your Code Assist has no project chosen. Choose one on aero's Settings tab, then reload the preview.";
    if (reason === 'reauth_required') return "your Code Assist login has expired or is invalid. Reconnect it on aero's Settings tab, then reload the preview.";
    return 'your aero session has ended. Sign in to aero again, then reload the preview.';
  }

  /** Statuses that mean "not signed in", or the model's account not connected / no project chosen. */
  function needsLogin(status) {
    return status === 401 || status === 409;
  }

  var RETRYABLE = { 429: true, 503: true };
  var MAX_RETRIES = 3;
  var DEFAULT_RETRY_DELAY_SECS = 10;
  var MAX_RETRY_DELAY_SECS = 30;

  function sleep(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  /**
   * Pull Google's suggested retry delay out of the forwarded error body, if
   * present. \`detail\` is Google's body as it came, and because this route
   * streams (\`?alt=sse\`) that can be a one-element array \`[{"error":{…}}]\` as
   * well as a bare object; reading only the object form silently fell back to
   * the default delay for every array.
   */
  function retryDelaySecs(body) {
    try {
      var detail = Array.isArray(body.detail) ? body.detail[0] : body.detail;
      var details = detail.error.details;
      for (var i = 0; i < details.length; i++) {
        var d = details[i];
        if (typeof d['@type'] === 'string' && d['@type'].indexOf('RetryInfo') !== -1) {
          var m = /^(\\d+(?:\\.\\d+)?)s$/.exec(d.retryDelay || '');
          if (m) return Math.min(Math.ceil(Number(m[1])), MAX_RETRY_DELAY_SECS);
        }
      }
    } catch (_) {
      /* shape not present */
    }
    return null;
  }

  /** GET /api/app-ai/models, redirecting to login first if needed. */
  async function models() {
    for (;;) {
      var res = await aeroFetch('/api/app-ai/models', { credentials: 'same-origin' });
      if (res.ok) return res.json();
      if (needsLogin(res.status)) return redirectToLogin(res);
      var data = await res.json().catch(function () { return null; });
      var err = new Error((data && data.error) || 'request failed (' + res.status + ')');
      err.status = res.status;
      err.body = data;
      throw err;
    }
  }

  /**
   * One non-streaming generateContent call — internally consumes the
   * server's SSE stream and resolves once it's complete.
   *
   * opts: {
   *   model: string,                                 required
   *   contents: string | Array<{role, parts}>,        required — a plain
   *                                                    string is shorthand
   *                                                    for a single user turn
   *   systemInstruction?: string | { role, parts },
   *   tools?: unknown[],
   *   generationConfig?: object,
   *   onText?: (delta: string) => void,               progressive text, if
   *                                                    you want to render
   *                                                    while it streams
   *   onThought?: (delta: string) => void,
   * }
   *
   * Resolves: { text, parts, functionCalls, usageMetadata }
   *   - text: all non-thought text, concatenated
   *   - parts: raw response parts (text + functionCall), in order
   *   - functionCalls: [{name, args}], convenience extract of parts
   *   - usageMetadata: token counts, if Google reported them
   */
  async function generateContent(opts) {
    if (!opts || !opts.model) throw new Error('AeroAI.generateContent: opts.model is required');
    if (!opts.contents) throw new Error('AeroAI.generateContent: opts.contents is required');

    var contents =
      typeof opts.contents === 'string'
        ? [{ role: 'user', parts: [{ text: opts.contents }] }]
        : opts.contents;
    var systemInstruction =
      typeof opts.systemInstruction === 'string'
        ? { role: 'user', parts: [{ text: opts.systemInstruction }] }
        : opts.systemInstruction;

    var body = {
      model: opts.model,
      request: Object.assign(
        { contents: contents },
        systemInstruction ? { systemInstruction: systemInstruction } : {},
        opts.tools ? { tools: opts.tools } : {},
        opts.generationConfig ? { generationConfig: opts.generationConfig } : {},
      ),
    };

    var res;
    for (var attempt = 0; ; attempt++) {
      res = await aeroFetch('/api/app-ai/v1internal:streamGenerateContent', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok && res.body) break;
      if (needsLogin(res.status)) return redirectToLogin(res);

      var data = await res.json().catch(function () { return null; });
      // The Builder preview's own refusal (its cap on calls a minute) is not
      // retried: no wait lifts it while the page keeps calling, and the
      // retries would only hold back the message that says why.
      var fromPreview = !!(data && data.from === 'builder-preview');
      if (RETRYABLE[res.status] && !fromPreview && attempt < MAX_RETRIES) {
        await sleep((retryDelaySecs(data) || DEFAULT_RETRY_DELAY_SECS) * 1000);
        continue;
      }
      var err = new Error((data && data.error) || res.status + ' ' + res.statusText);
      err.status = res.status;
      err.body = data;
      throw err;
    }

    var parts = [];
    var textAcc = '';
    var thoughtAcc = '';

    function flushText() {
      if (textAcc) {
        parts.push({ text: textAcc });
        textAcc = '';
      }
    }
    function flushThought() {
      if (thoughtAcc) {
        parts.push({ text: thoughtAcc, thought: true });
        thoughtAcc = '';
      }
    }

    var usageMetadata;
    function handleEvent(payload) {
      var v;
      try {
        v = JSON.parse(payload);
      } catch (_) {
        return;
      }
      var response = v.response || v;
      if (response.usageMetadata) usageMetadata = response.usageMetadata;
      var chunkParts =
        response.candidates && response.candidates[0] && response.candidates[0].content
          ? response.candidates[0].content.parts
          : null;
      if (!chunkParts) return;
      for (var i = 0; i < chunkParts.length; i++) {
        var p = chunkParts[i];
        if (p.functionCall) {
          flushThought();
          flushText();
          parts.push(p);
        } else if (p.thought) {
          flushText();
          if (p.text) {
            thoughtAcc += p.text;
            if (opts.onThought) opts.onThought(p.text);
          }
        } else if (p.text !== undefined) {
          flushThought();
          textAcc += p.text;
          if (opts.onText) opts.onText(p.text);
        }
      }
    }

    var reader = res.body.getReader();
    var decoder = new TextDecoder();
    var buf = '';
    for (;;) {
      var chunk = await reader.read();
      if (chunk.done) break;
      buf += decoder.decode(chunk.value, { stream: true });
      for (;;) {
        var nl = buf.indexOf('\\n');
        if (nl < 0) break;
        var line = buf.slice(0, nl).replace(/\\r$/, '');
        buf = buf.slice(nl + 1);
        if (line.indexOf('data:') === 0) handleEvent(line.slice(5).trimStart());
      }
    }
    var rest = buf.trim();
    if (rest.indexOf('data:') === 0) handleEvent(rest.slice(5).trimStart());
    flushThought();
    flushText();

    var text = '';
    var functionCalls = [];
    for (var j = 0; j < parts.length; j++) {
      if (parts[j].functionCall) functionCalls.push(parts[j].functionCall);
      else if (!parts[j].thought && parts[j].text) text += parts[j].text;
    }

    return { text: text, parts: parts, functionCalls: functionCalls, usageMetadata: usageMetadata };
  }

  /* webmcp-standin:start */
  /**
   * WebMCP where the browser has none: \`document.modelContext\`, with Chrome's
   * own behaviour as measured in Chrome 158 (Nov 2026), for the page's own
   * agent (\`AeroAI.agent\`) to use. \`bun scripts/webmcp-conformance.ts\` measures
   * it against Chrome again: run it after changing this, or when Chrome
   * changes WebMCP. Chrome 157 differs in two ways: every error is an
   * UnknownError with its own message, and a tool without an inputSchema or
   * annotations lacks the member instead of having it null.
   *
   * The Builder's preview runs these same bytes, spliced in by
   * frontend/src/lib/previewShim.ts from between the two marker comments
   * around this function. So the function must stand alone: it may use nothing
   * else in this file, and nothing else here may rely on it.
   *
   * What it mirrors, so a page that works here works in Chrome and the other
   * way round:
   *   - registerTool: \`description\` and \`execute\` required (TypeError), a
   *     name of 1-128 of [A-Za-z0-9_.-] (InvalidStateError "Invalid tool
   *     name"), unique ("Duplicate tool name"), unregistered by aborting
   *     \`options.signal\`; \`toolchange\` fires on every change.
   *   - getTools: imperative tools and every \`<form toolname tooldescription>\`,
   *     sorted by name, with \`inputSchema\` and \`annotations\` null where there
   *     are none. A form's schema is built from its controls the way Chrome
   *     builds it (\`formSchema\`).
   *   - executeTool: an object input (TypeError otherwise); the tool runs in a
   *     later task, never during the call; the result as text, a string as it
   *     is and anything else as JSON. Failures are the draft's errors with
   *     Chrome's generic messages (\`failure\`): a tool no longer registered is a
   *     NotFoundError, and a throw or an unserializable result an
   *     OperationError, what was thrown kept on \`.thrown\` for the preview to
   *     show the builder. Cancelling rejects with the signal's reason and fires
   *     \`toolcancel\`. \`toolactivated\` fires once the tool has run, or the form
   *     been filled and submitted, even when that failed.
   *   - a form: unknown parameters and invalid values are a DataError; failed
   *     constraint validation, no submit button to wait on, preventDefault()
   *     without respondWith(), and a response that rejects are an
   *     OperationError. The submit event carries \`agentInvoked\` and
   *     \`respondWith\`; a submit nothing handles navigates and resolves null.
   *     Without \`toolautosubmit\`, the form is filled and waits for the visitor
   *     to submit it, and a reset or removal meanwhile is an AbortError.
   *
   * What it leaves out: tools in other frames, \`exposedTo\` beyond checking it,
   * the \`:tool-form-active\` CSS states, and anything Chrome adds later.
   *
   * opts.force   replace the browser's own: the Builder preview, a sandboxed
   *              frame where Chrome's refuses every tool (permissions policy).
   * opts.preview never navigate: a form submit nothing handles calls
   *              opts.onFormNavigate(form) and resolves null, and a form
   *              without \`toolautosubmit\` is submitted at once rather than
   *              waiting for a visitor, since the builder testing it is the
   *              only one there.
   */
  function installWebMcpStandIn(opts) {
    opts = opts || {};
    if (!opts.force && 'modelContext' in document) return null;

    var NAME = /^[A-Za-z0-9_.-]{1,128}$/;
    var NAVIGATED = {};
    var registered = new Map();
    var mc = new EventTarget();

    var handlers = {};
    ['toolchange', 'toolactivated', 'toolcancel'].forEach(function (type) {
      Object.defineProperty(mc, 'on' + type, {
        enumerable: true,
        configurable: true,
        get: function () {
          return handlers[type] || null;
        },
        set: function (fn) {
          if (handlers[type]) mc.removeEventListener(type, handlers[type]);
          handlers[type] = typeof fn === 'function' ? fn : null;
          if (handlers[type]) mc.addEventListener(type, handlers[type]);
        },
      });
    });

    function fire(type, toolName) {
      var ev = new Event(type);
      if (toolName !== undefined) ev.toolName = toolName;
      mc.dispatchEvent(ev);
    }
    function changed() {
      setTimeout(function () {
        fire('toolchange');
      }, 0);
    }
    // Chrome 158's: one fixed message for each of the draft's error names.
    var FAILED = {
      NotFoundError: 'The requested tool was not found or is not accessible.',
      DataError: 'Failed to parse tool input arguments.',
      OperationError: 'Tool execution failed.',
      AbortError: 'Tool execution aborted.',
    };
    function failure(name) {
      return new DOMException(FAILED[name], name);
    }
    function copy(v) {
      return v === undefined ? undefined : JSON.parse(JSON.stringify(v));
    }
    function encode(v) {
      return typeof v === 'string' ? v : String(JSON.stringify(v));
    }
    function secureOrigin(o) {
      try {
        var u = new URL(String(o));
        return (
          u.protocol === 'https:' ||
          (u.protocol === 'http:' && /^(localhost|127\\.0\\.0\\.1|\\[::1\\])$/.test(u.hostname))
        );
      } catch (e) {
        return false;
      }
    }
    function checkOrigins(list, message) {
      if (list === undefined) return;
      for (var i = 0; i < list.length; i++) {
        if (!secureOrigin(list[i])) throw new DOMException(message, 'SecurityError');
      }
    }
    // An attribute as written, '' when absent. Chrome passes the page's own
    // wording through untouched, spaces and line breaks included.
    function attr(el, name) {
      var v = el.getAttribute(name);
      return v === null ? '' : v;
    }

    // ---- forms ----

    function forms() {
      var out = [];
      var seen = {};
      Array.prototype.forEach.call(document.querySelectorAll('form[toolname]'), function (f) {
        // Not trimmed: " add " is an invalid name, as in Chrome. A description
        // need only be there, even empty.
        var name = attr(f, 'toolname');
        if (!NAME.test(name) || !f.hasAttribute('tooldescription') || seen[name] || registered.has(name)) return;
        seen[name] = true;
        out.push({ name: name, description: attr(f, 'tooldescription'), form: f });
      });
      return out;
    }

    // A label's text without the controls inside it, trimmed at the ends only:
    // "Name" for <label>Name <input name="name"></label>.
    function labelText(c) {
      var label = c.labels && c.labels[0];
      if (!label) return '';
      var copyOf = label.cloneNode(true);
      Array.prototype.forEach.call(
        copyOf.querySelectorAll('input, select, textarea, button, meter, output, progress'),
        function (el) {
          el.remove();
        },
      );
      return copyOf.textContent.trim();
    }
    // One control: its own toolparamdescription, else its label, else its
    // aria-description.
    function describe(c) {
      return attr(c, 'toolparamdescription') || labelText(c) || attr(c, 'aria-description');
    }
    // A group of radios or checkboxes: its fieldset's toolparamdescription,
    // and nothing else. A lone radio or checkbox is described as one control.
    function describeGroup(controls) {
      if (controls.length === 1) return describe(controls[0]);
      var set = controls[0].closest('fieldset[toolparamdescription]');
      return set ? set.getAttribute('toolparamdescription') : '';
    }
    // Each choice titled with its text: an option's own, however empty, and a
    // radio's or checkbox's label, which it goes without when it has none.
    function choice(pairs, fromLabels) {
      return {
        type: 'string',
        anyOf: pairs.map(function (p) {
          var option = { type: 'string', const: p[0] };
          if (p[1] || !fromLabels) option.title = p[1];
          return option;
        }),
        enum: pairs.map(function (p) {
          return p[0];
        }),
      };
    }

    var SKIP = { hidden: 1, file: 1, submit: 1, reset: 1, button: 1, image: 1 };
    var DATE_NOTE = "Dates MUST be provided in 'YYYY-MM-DD' format.";
    var FORMATS = {
      time: '^([01][0-9]|2[0-3]):[0-5][0-9]$',
      'datetime-local': '^[0-9]{4}-(0[1-9]|1[0-2])-[0-9]{2}T([01][0-9]|2[0-3]):[0-5][0-9]$',
      color: '^#[0-9a-zA-Z]{6}$',
    };

    function formSchema(form) {
      var fields = {};
      var order = [];
      Array.prototype.forEach.call(form.elements, function (c) {
        var tag = c.tagName;
        if (tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') return;
        if (!c.name || c.disabled) return;
        var type = tag === 'INPUT' ? String(c.type || 'text').toLowerCase() : tag.toLowerCase();
        if (SKIP[type]) return;
        if (!fields[c.name]) {
          fields[c.name] = { type: type, controls: [] };
          order.push(c.name);
        }
        fields[c.name].controls.push(c);
      });
      var properties = {};
      var required = [];
      order.forEach(function (name) {
        var f = fields[name];
        var c = f.controls[0];
        var p;
        var description = describe(c);
        if (f.type === 'radio') {
          f.kind = 'radio';
          p = choice(
            f.controls.map(function (r) {
              return [r.value, labelText(r)];
            }),
            true,
          );
          description = describeGroup(f.controls);
        } else if (f.type === 'checkbox' && f.controls.length > 1) {
          f.kind = 'checkboxes';
          p = {
            type: 'array',
            items: choice(
              f.controls.map(function (b) {
                return [b.value, labelText(b)];
              }),
              true,
            ),
            uniqueItems: true,
          };
          description = describeGroup(f.controls);
        } else if (f.type === 'checkbox') {
          f.kind = 'checkbox';
          p = { type: 'boolean' };
        } else if (f.type === 'select') {
          var options = Array.prototype.map.call(c.options, function (o) {
            return [o.value, o.textContent];
          });
          f.kind = c.multiple ? 'multiselect' : 'select';
          p = c.multiple ? { type: 'array', items: choice(options), uniqueItems: true } : choice(options);
        } else if (f.type === 'number' || f.type === 'range') {
          f.kind = 'value';
          p = { type: 'number' };
          var min = c.getAttribute('min');
          var max = c.getAttribute('max');
          var step = c.getAttribute('step');
          if (min !== null && min !== '' && isFinite(min)) p.minimum = Number(min);
          if (max !== null && max !== '' && isFinite(max)) p.maximum = Number(max);
          if (step === null || step === '') p.multipleOf = 1;
          else if (step.toLowerCase() !== 'any' && isFinite(step)) p.multipleOf = Number(step);
        } else if (f.type === 'date') {
          f.kind = 'value';
          p = { type: 'string', format: 'date' };
          description = description ? description + ' (' + DATE_NOTE + ')' : DATE_NOTE;
        } else {
          f.kind = 'value';
          p = { type: 'string' };
          if (FORMATS[f.type]) p.format = FORMATS[f.type];
          var pattern = c.getAttribute('pattern');
          if (pattern) p.pattern = pattern;
        }
        if (description) p.description = description;
        if (
          f.controls.some(function (x) {
            return x.required;
          })
        ) {
          required.push(name);
        }
        properties[name] = p;
      });
      return { schema: { type: 'object', properties: properties, required: required }, fields: fields };
    }

    function touched(c) {
      c.dispatchEvent(new Event('input', { bubbles: true }));
      c.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function fill(fields, args) {
      Object.keys(args).forEach(function (key) {
        var f = fields[key];
        var v = args[key];
        var bad = failure('DataError');
        if (f.kind === 'radio') {
          var hit = f.controls.filter(function (r) {
            return r.value === String(v);
          })[0];
          if (!hit) throw bad;
          hit.checked = true;
          touched(hit);
        } else if (f.kind === 'checkbox') {
          if (typeof v !== 'boolean') throw bad;
          f.controls[0].checked = v;
          touched(f.controls[0]);
        } else if (f.kind === 'checkboxes') {
          if (!Array.isArray(v)) throw bad;
          var all = f.controls.map(function (b) {
            return b.value;
          });
          var want = v.map(String);
          if (
            want.some(function (w) {
              return all.indexOf(w) < 0;
            })
          ) {
            throw bad;
          }
          f.controls.forEach(function (b) {
            var on = want.indexOf(b.value) >= 0;
            if (b.checked !== on) {
              b.checked = on;
              touched(b);
            }
          });
        } else if (f.kind === 'select' || f.kind === 'multiselect') {
          var s = f.controls[0];
          var offered = Array.prototype.map.call(s.options, function (o) {
            return o.value;
          });
          var list = f.kind === 'select' ? [String(v)] : Array.isArray(v) ? v.map(String) : null;
          if (
            !list ||
            list.some(function (w) {
              return offered.indexOf(w) < 0;
            })
          ) {
            throw bad;
          }
          Array.prototype.forEach.call(s.options, function (o) {
            o.selected = list.indexOf(o.value) >= 0;
          });
          touched(s);
        } else {
          f.controls[0].value = v === null || v === undefined ? '' : String(v);
          touched(f.controls[0]);
        }
      });
    }

    // The submit event a form tool sends: Chrome's agentInvoked and
    // respondWith(), which only works while the event is being dispatched.
    function agentEvent(ev, respond) {
      var open = true;
      Object.defineProperty(ev, 'agentInvoked', { value: true, configurable: true });
      Object.defineProperty(ev, 'respondWith', {
        configurable: true,
        value: function (p) {
          if (!open) throw new DOMException('respondWith() was called after the submit event was dispatched', 'InvalidStateError');
          respond(
            Promise.resolve(p).then(null, function () {
              throw failure('OperationError');
            }),
          );
        },
      });
      return function () {
        open = false;
      };
    }
    function settle(ev, responded) {
      if (responded) return responded;
      // preventDefault() without respondWith(): nothing will answer.
      if (ev.defaultPrevented) throw failure('OperationError');
      return NAVIGATED;
    }
    function navigate(form) {
      if (opts.preview) {
        if (opts.onFormNavigate) opts.onFormNavigate(form);
      } else {
        HTMLFormElement.prototype.submit.call(form);
      }
      return NAVIGATED;
    }

    function submitNow(form) {
      var responded = null;
      var ev =
        typeof SubmitEvent === 'function'
          ? new SubmitEvent('submit', { bubbles: true, cancelable: true })
          : new Event('submit', { bubbles: true, cancelable: true });
      var close = agentEvent(ev, function (p) {
        responded = p;
      });
      try {
        form.dispatchEvent(ev);
      } finally {
        close();
      }
      var out = settle(ev, responded);
      return out === NAVIGATED ? navigate(form) : out;
    }

    // Without \`toolautosubmit\` the visitor submits: the form is filled, and
    // their own submit event is the one the page answers.
    function awaitVisitor(form, signal) {
      return new Promise(function (resolve, reject) {
        function onSubmit(ev) {
          var responded = null;
          var close = agentEvent(ev, function (p) {
            responded = p;
          });
          done();
          setTimeout(function () {
            close();
            try {
              resolve(settle(ev, responded));
            } catch (e) {
              reject(e);
            }
          }, 0);
        }
        function onAbort() {
          done();
          reject(signal.reason);
        }
        // Chrome cancels the call when the form is reset or leaves the page.
        function onReset(ev) {
          if (ev.defaultPrevented) return;
          done();
          reject(failure('AbortError'));
        }
        var removal = new MutationObserver(function () {
          if (form.isConnected) return;
          done();
          reject(failure('AbortError'));
        });
        function done() {
          form.removeEventListener('submit', onSubmit, true);
          form.removeEventListener('reset', onReset);
          signal.removeEventListener('abort', onAbort);
          removal.disconnect();
        }
        form.addEventListener('submit', onSubmit, true);
        form.addEventListener('reset', onReset);
        signal.addEventListener('abort', onAbort);
        removal.observe(document, { childList: true, subtree: true });
      });
    }

    function runForm(form, args, signal) {
      var built = formSchema(form);
      Object.keys(args).forEach(function (k) {
        if (!Object.prototype.hasOwnProperty.call(built.fields, k)) throw failure('DataError');
      });
      var auto = form.hasAttribute('toolautosubmit') || opts.preview;
      // Without toolautosubmit the visitor submits, so there must be a button.
      if (
        !auto &&
        !Array.prototype.some.call(form.elements, function (e) {
          return e.type === 'submit' || e.type === 'image';
        })
      ) {
        throw failure('OperationError');
      }
      fill(built.fields, args);
      if (!form.checkValidity()) throw failure('OperationError');
      return auto ? submitNow(form) : awaitVisitor(form, signal);
    }

    // ---- the API ----

    mc.registerTool = function (tool, options) {
      return new Promise(function (resolve) {
        var prefix = "Failed to execute 'registerTool' on 'ModelContext': ";
        if (!tool || typeof tool !== 'object') throw new TypeError(prefix + 'parameter 1 is not of type ModelContextTool.');
        ['name', 'description'].forEach(function (k) {
          if (tool[k] === undefined) {
            throw new TypeError(prefix + "Failed to read the '" + k + "' property from 'ModelContextTool': Required member is undefined.");
          }
        });
        if (typeof tool.execute !== 'function') {
          throw new TypeError(prefix + "Failed to read the 'execute' property from 'ModelContextTool': The provided value is not a function.");
        }
        var name = String(tool.name);
        if (!NAME.test(name)) throw new DOMException('Invalid tool name', 'InvalidStateError');
        var taken =
          registered.has(name) ||
          forms().some(function (f) {
            return f.name === name;
          });
        if (taken) throw new DOMException('Duplicate tool name', 'InvalidStateError');
        checkOrigins(options && options.exposedTo, 'Only secure origins are allowed in the exposedTo list.');
        var signal = options && options.signal;
        if (signal && signal.aborted) return resolve();
        // Chrome lists annotations only for a tool registered with some, and
        // then all four.
        var a = tool.annotations;
        var entry = {
          name: name,
          title: tool.title === undefined ? '' : String(tool.title),
          description: String(tool.description),
          inputSchema: copy(tool.inputSchema),
          annotations:
            a === undefined || a === null
              ? undefined
              : {
                  consequentialHint: !!a.consequentialHint,
                  debugging: !!a.debugging,
                  readOnlyHint: !!a.readOnlyHint,
                  untrustedContentHint: !!a.untrustedContentHint,
                },
          execute: tool.execute,
        };
        registered.set(name, entry);
        if (signal) {
          signal.addEventListener('abort', function () {
            if (registered.get(name) !== entry) return;
            registered.delete(name);
            changed();
          });
        }
        changed();
        resolve();
      });
    };

    mc.getTools = function (options) {
      return new Promise(function (resolve) {
        checkOrigins(options && options.fromOrigins, 'Only secure origins are allowed in the fromOrigins list.');
        var list = [];
        registered.forEach(function (t) {
          list.push({
            name: t.name,
            title: t.title,
            description: t.description,
            inputSchema: t.inputSchema === undefined ? null : copy(t.inputSchema),
            annotations: t.annotations ? copy(t.annotations) : null,
          });
        });
        forms().forEach(function (f) {
          list.push({
            name: f.name,
            title: '',
            description: f.description,
            inputSchema: formSchema(f.form).schema,
            annotations: null,
          });
        });
        list.forEach(function (row) {
          row.origin = location.origin;
          row.window = window;
        });
        list.sort(function (x, y) {
          return x.name < y.name ? -1 : x.name > y.name ? 1 : 0;
        });
        resolve(list);
      });
    };

    mc.executeTool = function (tool, input, options) {
      return new Promise(function (resolve, reject) {
        if (input === null || typeof input !== 'object' || Array.isArray(input)) {
          throw new TypeError("Failed to execute 'executeTool' on 'ModelContext': parameter 2 is not of type 'object'.");
        }
        var outer = options && options.signal;
        if (outer && outer.aborted) throw outer.reason;
        var name = tool && tool.name;
        var args = copy(input);
        var ctl = new AbortController();
        var finished = false;
        function finish(ok, value) {
          if (finished) return;
          finished = true;
          if (outer) outer.removeEventListener('abort', onAbort);
          (ok ? resolve : reject)(value);
        }
        function onAbort() {
          ctl.abort(outer.reason);
          fire('toolcancel', name);
          finish(false, outer.reason);
        }
        if (outer) outer.addEventListener('abort', onAbort);
        // Chrome runs the tool in a later task, never during executeTool().
        setTimeout(function () {
          if (finished) return;
          var entry = registered.get(name);
          var form = entry
            ? null
            : forms().filter(function (f) {
                return f.name === name;
              })[0];
          if (!entry && !form) return finish(false, failure('NotFoundError'));
          var run;
          try {
            run = entry ? entry.execute(args, { signal: ctl.signal }) : runForm(form.form, args, ctl.signal);
          } catch (e) {
            run = Promise.reject(e);
          }
          // Once the tool has run, or the form been filled and submitted,
          // whether or not that worked.
          fire('toolactivated', name);
          Promise.resolve(run).then(
            function (v) {
              var text;
              try {
                text = v === NAVIGATED ? null : encode(v);
              } catch (e) {
                return finish(false, failure('OperationError'));
              }
              finish(true, text);
            },
            function (e) {
              if (ctl.signal.aborted) return finish(false, ctl.signal.reason);
              if (form) return finish(false, e);
              var err = failure('OperationError');
              err.thrown = e;
              finish(false, err);
            },
          );
        }, 0);
      });
    };

    try {
      Object.defineProperty(document, 'modelContext', { value: mc, configurable: true, enumerable: true });
    } catch (e) {
      return null;
    }
    return mc;
  }
  /* webmcp-standin:end */

  // Before the page's own scripts, which register their tools after loading
  // this file: where the browser has WebMCP this does nothing.
  installWebMcpStandIn();

  /** Up to 64 of [A-Za-z0-9_-], starting with a letter or \`_\`: what every model behind AeroAI accepts as a function name. */
  function functionName(name, used) {
    var base = String(name).replace(/[^A-Za-z0-9_-]/g, '_');
    if (!/^[A-Za-z_]/.test(base)) base = '_' + base;
    base = base.slice(0, 64);
    var out = base;
    for (var n = 2; used[out]; n++) out = base.slice(0, 64 - String(n).length - 1) + '_' + n;
    used[out] = true;
    return out;
  }

  /** A tool's result for the model: the JSON it holds, or the text as it came. */
  function parseResult(raw) {
    if (typeof raw !== 'string') return raw;
    try {
      return JSON.parse(raw);
    } catch (_) {
      return raw;
    }
  }

  function aborted(signal) {
    return signal.reason !== undefined ? signal.reason : new DOMException('The operation was aborted.', 'AbortError');
  }

  /**
   * A model that can use the page: it answers the conversation, calling the
   * tools the page registered with WebMCP, and every form with \`toolname\`, as
   * it needs to, then resolves with its answer.
   *
   * opts: {
   *   model, contents, systemInstruction?, generationConfig?   as generateContent
   *   onText?, onThought?                                       for each round
   *   onToolCall?:   ({ name, args }) => void                   as a tool starts
   *   onToolResult?: ({ name, args, result?, error? }) => void  as it ends
   *   confirm?: ({ name, args, title, description }) => boolean | Promise<boolean>
   *                  asked before a tool marked consequentialHint runs; the
   *                  default is the browser's confirm()
   *   maxSteps?: number                                         model rounds, default 10
   *   signal?: AbortSignal                                      stops between steps and cancels a running tool
   * }
   *
   * Resolves: { text, contents, toolCalls, stopped? }
   *   - contents: the conversation with this turn's calls and results, to
   *     pass back as \`contents\` with the visitor's next message
   *   - toolCalls: [{ name, args, result } | { name, args, error }]
   *   - stopped: 'max_steps' when the model still wanted tools at the limit;
   *     those calls are answered with an error, so \`contents\` stays valid
   *
   * The tools are read again each round, so one that appears after an action
   * is there for the next. A tool's error comes back to the model as a value,
   * for it to recover from.
   */
  async function agent(opts) {
    if (!opts || !opts.model) throw new Error('AeroAI.agent: opts.model is required');
    if (!opts.contents) throw new Error('AeroAI.agent: opts.contents is required');
    var contents =
      typeof opts.contents === 'string'
        ? [{ role: 'user', parts: [{ text: opts.contents }] }]
        : opts.contents.slice();
    var maxSteps = opts.maxSteps > 0 ? Math.floor(opts.maxSteps) : 10;
    var signal = opts.signal;
    var toolCalls = [];
    var mc = document.modelContext;

    for (var step = 1; ; step++) {
      if (signal && signal.aborted) throw aborted(signal);
      var tools = mc && typeof mc.getTools === 'function' ? await mc.getTools() : [];
      var byName = {};
      var used = {};
      var declarations = tools.map(function (t) {
        var fn = functionName(t.name, used);
        byName[fn] = t;
        return {
          name: fn,
          description: t.title ? t.title + ': ' + t.description : t.description,
          parametersJsonSchema: t.inputSchema || { type: 'object', properties: {} },
        };
      });
      var res = await generateContent({
        model: opts.model,
        contents: contents,
        systemInstruction: opts.systemInstruction,
        generationConfig: opts.generationConfig,
        tools: declarations.length ? [{ functionDeclarations: declarations }] : undefined,
        onText: opts.onText,
        onThought: opts.onThought,
      });
      contents.push({ role: 'model', parts: res.parts });
      if (res.functionCalls.length === 0) {
        return { text: res.text, contents: contents, toolCalls: toolCalls };
      }

      var last = step >= maxSteps;
      var responses = [];
      for (var i = 0; i < res.functionCalls.length; i++) {
        var call = res.functionCalls[i];
        var tool = byName[call.name];
        var args = call.args || {};
        // Assigned here, not just declared: \`var\` keeps the last call's value.
        var outcome = null;
        if (last) {
          outcome = { error: 'Stopped: this turn reached its limit of ' + maxSteps + ' steps. Answer with what you have.' };
        } else if (!tool) {
          outcome = { error: 'There is no tool called ' + call.name + ' on this page.' };
        } else {
          if (tool.annotations && tool.annotations.consequentialHint) {
            var ask = { name: tool.name, args: args, title: tool.title || '', description: tool.description };
            var ok = opts.confirm
              ? await opts.confirm(ask)
              : window.confirm('Let the assistant do this?\\n\\n' + (tool.title || tool.name) + ': ' + tool.description);
            if (!ok) outcome = { error: 'The visitor declined this action. Do not try it again unless they ask.' };
          }
          if (!outcome) {
            if (opts.onToolCall) opts.onToolCall({ name: tool.name, args: args });
            try {
              outcome = { result: parseResult(await mc.executeTool(tool, args, signal ? { signal: signal } : undefined)) };
            } catch (e) {
              if (signal && signal.aborted) throw aborted(signal);
              outcome = { error: (e && e.message) || String(e) };
            }
            if (opts.onToolResult) opts.onToolResult(Object.assign({ name: tool.name, args: args }, outcome));
          }
        }
        toolCalls.push(Object.assign({ name: tool ? tool.name : call.name, args: args }, outcome));
        responses.push({ functionResponse: { name: call.name, response: outcome } });
      }
      contents.push({ role: 'user', parts: responses });
      if (last) return { text: res.text, contents: contents, toolCalls: toolCalls, stopped: 'max_steps' };
    }
  }

  // ── decide: yes/no, choice and score answers, on a free tier ────────────
  //
  // Unlike every call above, this one does not run on the visitor's models: neither Antigravity nor Code Assist serves a decision model, so aero asks Jev on opencode zen's free tier (src/api/decide.rs) and the visitor spends none of their own quota. That tier is shared by every page and has a daily allowance, so a call can fail for that alone; its message says so.

  /** Statuses worth waiting out: a rate limit, and TypeSafe's "overloaded" (529). */
  var DECIDE_RETRYABLE = { 429: true, 503: true, 529: true };

  /** zen's answer for a spent free allowance: daily, so hours rather than a busy moment, and not worth the short retries. */
  function isFreeLimit(data) {
    return !!(data && data.error && typeof data.error === 'object' && data.error.type === 'FreeUsageLimitError');
  }

  /** The words for a spent allowance, with how long it lasts when aero passed on \`Retry-After\` (the Builder preview does not). */
  function freeLimitMessage(res) {
    var secs = Number(res.headers.get('retry-after'));
    var hours = Math.max(1, Math.round(secs / 3600));
    var wait = !(secs > 0)
      ? ''
      : secs < 90
        ? ' It resets in a minute.'
        : secs < 3600
          ? ' It resets in about ' + Math.round(secs / 60) + ' minutes.'
          : ' It resets in about ' + hours + (hours === 1 ? ' hour.' : ' hours.');
    return "the free decision model's daily limit is used up." + wait;
  }

  /**
   * The words to show for a failed call. aero's own errors are a string; zen's
   * own are an object with a message; what it passes on from TypeSafe comes as
   * \`detail\`, a string, a list that names each field refused, or an object with
   * an \`error_type\` and sometimes a message. Measured 16 Nov 2026 through zen:
   * an input past the context limit answered \`{ error_type: 'max_tokens_exceeded' }\`
   * and nothing else, and a question TypeSafe refused answered "Invalid request."
   * or a bare "Upstream request failed: Endpoint is unavailable." with no field
   * named, which is why \`questionProblem\` checks the questions before sending.
   */
  function decideErrorText(data, res) {
    if (data && typeof data.error === 'string') return data.error;
    if (data && data.error && typeof data.error.message === 'string') return data.error.message;
    var detail = data && data.detail;
    if (typeof detail === 'string') return detail;
    if (Array.isArray(detail)) {
      var lines = detail
        .map(function (e) {
          var where = e && Array.isArray(e.loc) ? e.loc.filter(function (p) { return p !== 'body'; }).join('.') : '';
          return (where ? where + ': ' : '') + ((e && e.msg) || '');
        })
        .filter(Boolean);
      if (lines.length) return lines.join('; ');
    }
    if (detail && typeof detail === 'object') {
      if (detail.error_type === 'max_tokens_exceeded') {
        return 'the input is too long. The model reads about 32,000 tokens (roughly 120,000 characters) of input and any one question together, and 64,000 for the input and all the questions.';
      }
      if (typeof detail.message === 'string') return detail.message + (detail.error_type ? ' (' + detail.error_type + ')' : '');
      if (typeof detail.error_type === 'string') return detail.error_type;
    }
    return res.status + ' ' + res.statusText;
  }

  /**
   * What a question may not be, by TypeSafe's published schema (its OpenAPI,
   * 16 Nov 2026), or null. Said here because refused over the wire it reaches
   * the page as "Invalid request." with no field named. \`box\` is left out: it
   * finds things in an image, and no image goes through \`decide\`.
   */
  function questionProblem(id, q) {
    var where = 'questions.' + id + ': ';
    if (!q || typeof q !== 'object' || Array.isArray(q)) return where + 'a question is an object with a type';
    var c = q.criteria;
    if (q.type === 'noul') {
      return c == null || (typeof c === 'object' && !Array.isArray(c))
        ? null
        : where + 'a yes/no question\\'s criteria is an object with "true" and "false"';
    }
    if (q.type === 'choice') {
      var options = c && typeof c === 'object' && !Array.isArray(c) ? Object.keys(c).length : 0;
      return options >= 1 && options <= 255 ? null : where + 'a choice takes 1 to 255 options, as an object in criteria';
    }
    if (q.type === 'score') {
      return Array.isArray(c) && c.length >= 1 && c.length <= 10 ? null : where + 'a score takes 1 to 10 levels, as an array in criteria';
    }
    return where + 'type must be "noul", "choice" or "score"';
  }

  /** Text, or a JSON object or array, and not empty. */
  function hasInput(input) {
    if (typeof input === 'string') return input.trim() !== '';
    return !!input && typeof input === 'object' && Object.keys(input).length > 0;
  }

  /**
   * Answer closed-set questions about one input, in one call that usually takes under a second. It writes no text.
   *
   * opts: {
   *   input: string | object | array,               required, not empty. Text, or JSON for structured state, whose
   *                                                 fields a question can name in backticks
   *   questions: { [id: string]: Question },        required, at least one
   * }
   * Question:
   *   { type: 'noul', instructions, criteria?: { true, false } }              yes/no; criteria say what counts as each
   *   { type: 'choice', instructions, criteria: { [option]: description } }   1 to 255 options
   *   { type: 'score', instructions, criteria: [level0, level1, ...] }        1 to 10 levels, level 0 first
   *
   * Resolves with the model's own answer: { model, answers: { [id]: Answer }, usage }
   *   noul:   { type, noul }                                      noul is P(yes), from 0 to 1. No confidence: the value is it
   *   choice: { type, choice, probabilities, confidence }
   *   score:  { type, score, probabilities, legend, confidence }  score is the expected level and can fall between two
   * An answer can also be { type: 'refusal', message } for a question the model declined: check \`type\`.
   */
  async function decide(opts) {
    if (!opts || !hasInput(opts.input)) {
      throw new Error('AeroAI.decide: opts.input is required, as text or a JSON object or array, and not empty');
    }
    var questions = opts.questions;
    if (!questions || typeof questions !== 'object' || Array.isArray(questions) || Object.keys(questions).length === 0) {
      throw new Error('AeroAI.decide: opts.questions must be an object of questions keyed by id, with at least one');
    }
    var ids = Object.keys(questions);
    for (var i = 0; i < ids.length; i++) {
      var problem = questionProblem(ids[i], questions[ids[i]]);
      if (problem) throw new Error('AeroAI.decide: ' + problem);
    }
    var body = JSON.stringify({ input: opts.input, questions: questions });
    for (var attempt = 0; ; attempt++) {
      var res = await aeroFetch('/api/app-ai/decide', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });
      // Only a 401 sends the visitor to sign in: the call uses no account of theirs, so there is no 409 to read as "connect one".
      if (res.status === 401) return redirectToLogin(res);
      var data = await res.json().catch(function () { return null; });
      if (res.ok && data) return data;
      // A success with no JSON body is something in between answering for aero (a proxy's page, say): say so rather than hand the page a null.
      if (res.ok) {
        var bare = new Error('AeroAI.decide: aero answered ' + res.status + ' without a JSON body; something between the page and aero may have answered instead.');
        bare.status = res.status;
        throw bare;
      }
      var free = isFreeLimit(data);
      // The Builder preview's own refusal (its cap on calls a minute) is not retried either, as for generateContent.
      var fromPreview = !!(data && data.from === 'builder-preview');
      if (DECIDE_RETRYABLE[res.status] && !free && !fromPreview && attempt < MAX_RETRIES) {
        var asked = Number(res.headers.get('retry-after'));
        await sleep((asked > 0 ? Math.min(Math.ceil(asked), MAX_RETRY_DELAY_SECS) : DEFAULT_RETRY_DELAY_SECS) * 1000);
        continue;
      }
      var err = new Error('AeroAI.decide: ' + (free ? freeLimitMessage(res) : decideErrorText(data, res)));
      err.status = res.status;
      err.body = data;
      throw err;
    }
  }

  window.AeroAI = { models: models, generateContent: generateContent, agent: agent, decide: decide };
})();
`,Oi=`<script>(function(){
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
})();<\/script>`,Pi=`<script>(function(){
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
})();<\/script>`,Ii=`<script>(function(){
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
})();<\/script>`;function Di(n,r,s,l){return`<script>window.__AeroPreviewConfig=${JSON.stringify({origin:n,relay:r,token:s,replyTag:l}).replace(/</g,"\\u003c")};<\/script><script>${Mi.replace(/<\/script/gi,"<\\/script")}<\/script>`}const en="/* webmcp-standin:start */",Fi="/* webmcp-standin:end */";function qi(n){const r=n.indexOf(en),s=n.indexOf(Fi);if(r<0||s<r||n.indexOf(en,r+1)>=0)throw new Error("aero-ai.js must hold exactly one webmcp-standin:start … end block");return n.slice(r+en.length,s)}const Bi=`<script>(function(){
`+qi(Li).replace(/<\/script/gi,"<\\/script")+`
var navigation=null;
installWebMcpStandIn({force:true,preview:true,onFormNavigate:function(f){
  navigation={action:f.getAttribute('action')||location.href,method:(f.getAttribute('method')||'get').toLowerCase()};
}});
var MAX_TOOLS=100,MAX_TEXT=2000,MAX_RESULT=12000;
function clip(s,n){s=String(s);return s.length>n?s.slice(0,n)+'... ['+(s.length-n)+' more chars]':s;}
function api(){
  var m=document.modelContext;
  return m&&typeof m.getTools==='function'&&typeof m.executeTool==='function'?m:null;
}
var GONE='The page replaced document.modelContext, so its tools cannot be reached.';
function formOf(name){
  var all=document.querySelectorAll('form[toolname]');
  for(var i=0;i<all.length;i++){if(all[i].getAttribute('toolname')===name)return all[i];}
  return null;
}
async function list(){
  var m=api();
  if(!m)return {tools:[],note:GONE};
  var tools=await m.getTools();
  var out={tools:tools.slice(0,MAX_TOOLS).map(function(t){
    var row={name:t.name};
    if(t.title)row.title=t.title;
    row.description=clip(t.description,MAX_TEXT);
    if(t.inputSchema!=null)row.input_schema=t.inputSchema;
    var f=formOf(t.name);
    if(f)row.form={autosubmit:f.hasAttribute('toolautosubmit')};
    else if(t.annotations)row.annotations=t.annotations;
    return row;
  })};
  if(tools.length>MAX_TOOLS)out.note='Showing '+MAX_TOOLS+' of '+tools.length+' tools.';
  if(!tools.length)out.note='The page offers no tools: it registers none with document.modelContext.registerTool and has no <form> with both toolname and tooldescription.';
  return out;
}
async function call(a){
  var m=api();
  if(!m)return {error:GONE};
  var name=String(a.name||'');
  var tools=await m.getTools();
  var tool=tools.filter(function(t){return t.name===name;})[0];
  if(!tool)return {error:'The page has no tool named "'+name+'".',available:tools.map(function(t){return t.name;})};
  var input=a.args==null?{}:a.args;
  var timeout=Number(a.timeout)||30000;
  var form=formOf(name);
  var dialogs=[];
  var oa=window.alert,oc=window.confirm,op=window.prompt;
  window.alert=function(x){dialogs.push({kind:'alert',message:clip(x,300)});};
  window.confirm=function(x){dialogs.push({kind:'confirm',message:clip(x,300),answered:true});return true;};
  window.prompt=function(x){dialogs.push({kind:'prompt',message:clip(x,300),answered:''});return '';};
  navigation=null;
  var ctl=new AbortController(),timer,res;
  try{
    var raw=await Promise.race([
      m.executeTool(tool,input,{signal:ctl.signal}),
      new Promise(function(_,reject){timer=setTimeout(function(){
        ctl.abort();
        reject(new Error('the tool did not finish within '+Math.round(timeout/1000)+'s, so the call was cancelled'));
      },timeout);})
    ]);
    var value=raw;
    if(typeof raw==='string'){try{value=JSON.parse(raw);}catch(e){}}
    var text=typeof value==='string'?value:JSON.stringify(value);
    res=text!==undefined&&text.length>MAX_RESULT?{ok:true,result:clip(text,MAX_RESULT)}:{ok:true,result:value};
  }catch(e){
    res={error:(e&&e.message)||String(e)};
    if(e&&e.name&&e.name!=='Error')res.error_name=e.name;
    if(e&&e.thrown!==undefined){
      res.thrown=clip((e.thrown&&(e.thrown.stack||e.thrown.message))||String(e.thrown),1500);
      res.hint='The tool threw. An agent gets only the generic error above, never what was thrown: return { error: "..." } from execute for a failure the agent should read.';
    }
  }finally{
    clearTimeout(timer);
    window.alert=oa;window.confirm=oc;window.prompt=op;
  }
  if(navigation){
    res.would_submit=navigation;
    res.note='Nothing handled the submit, so on the published page the form submits for real and the agent gets null. Handle it: event.preventDefault() and event.respondWith(result) in a submit listener, when event.agentInvoked.';
  }else if(form&&!form.hasAttribute('toolautosubmit')){
    res.note='No toolautosubmit: on the published page the browser fills this form and waits for the visitor to submit it. The preview submitted it for you.';
  }
  if(dialogs.length)res.dialogs=dialogs;
  return res;
}
window.__aeroPageTools=function(op,args){return op==='list_page_tools'?list():call(args||{});};
})();<\/script>`,Ui=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Ri.replace(/<\/script/gi,"<\\/script")+`
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
// html-to-image reads every stylesheet's rules to embed the page's web fonts,
// and a sheet from another origin (a CDN's font or library CSS) cannot be
// read from this opaque-origin document. It says so through console.error,
// which the console shim hands to the agent's console tool and the observer,
// and both took the sheet for broken. So its notes about such sheets are
// dropped while a capture runs, and nothing else is. Installed once, with a
// count, rather than swapped in and out per capture: two captures that
// overlapped would restore each other's function and leave the filter on for
// good. The wording is html-to-image's own, pinned by previewShim.test.ts.
var capturing=0;
var H2I_SHEET_NOTE=/^Error (inlining remote css file|while reading CSS rules from|loading remote stylesheet|loading remote css)/;
var consoleError=console.error;
console.error=function(m){
  if(capturing>0&&typeof m==='string'&&H2I_SHEET_NOTE.test(m))return;
  return consoleError.apply(console,arguments);
};
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
  capturing++;
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
  }finally{
    capturing--;
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
})();<\/script>`,Hi="<script>"+_i+`
`+Qo+`
(function(){
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
    if(msg.op==='bash'){
      // Preview-only, like screenshot, and for the same reason it replies with
      // its own shape: it must not read the page, which would bump the
      // generation and strand the element indices the model already holds.
      // msg.generation is ignored for that reason too. A code error is a
      // successful op — the error IS the result — so only a misuse of the
      // call itself falls through to the catch below.
      if(!window.__aeroExec)throw new Error('code execution is not available in this preview');
      var a=msg.args||{};
      out={type:'aero-dom-op-result',id:msg.id,ok:true,result:await window.__aeroExec.run(a.command,a.timeout),generation:window.__aeroDom.currentGeneration()};
      try{parent.postMessage(out,'*');}catch(e){}
      return;
    }
    if(msg.op==='list_page_tools'||msg.op==='call_page_tool'){
      // The page's WebMCP tools (WEBMCP_SHIM). Like bash: preview-only, and
      // no read of the page, which would strand the element indices the
      // model holds.
      if(!window.__aeroPageTools)throw new Error('page tools are not available in this preview');
      out={type:'aero-dom-op-result',id:msg.id,ok:true,result:await window.__aeroPageTools(msg.op,msg.args||{}),generation:window.__aeroDom.currentGeneration()};
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
})();<\/script>`;function xr(n,r){const s=(r==null?void 0:r.origin)??(typeof location>"u"?void 0:location.origin);s&&(n=gi(n,s));const l=Ii+Oi+Bi+Di(s??"",(r==null?void 0:r.relay)===!0,(r==null?void 0:r.relayToken)??"",(r==null?void 0:r.replyTag)??"")+Pi+(r!=null&&r.screenshot?Ui:"")+Hi,c=n.match(/<head[^>]*>/i);if(!c)return l+n;const d=c.index+c[0].length;return n.slice(0,d)+l+n.slice(d)}const $i="aero-preview-fetch",Wi="aero-preview-fetch-reply",zi="aero-preview-bye",Gi="aero-preview-db",Lr=40;function Vi(n,r,s){if(typeof r!="string"||!r.startsWith("/")||r.startsWith("//"))return null;let l;try{l=new URL(r,s)}catch{return null}if(l.origin!==s)return null;const c=l.pathname;return n==="GET"&&c==="/api/app-ai/models"||n==="POST"&&c==="/api/app-ai/v1internal:streamGenerateContent"||n==="POST"&&c==="/api/app-ai/decide"?l.href:null}function Yi(n,r,s){const l=n;if((l==null?void 0:l.type)!==zi)return!1;if(l.token!==r)return!0;const c=String(l.doc??"");for(const[d,h]of s)h===c&&(d.abort(),s.delete(d));return!0}function Ji(n=Lr){const r=[];return s=>{for(;r.length>0&&s-r[0]>=6e4;)r.shift();return r.length>=n?!1:(r.push(s),!0)}}async function Ki(n,r,s){const l=y=>{try{n.postMessage({type:Wi,id:r.id,tag:s.replyTag,...y},"*")}catch{}},c=(y,O)=>{l({head:{status:y,statusText:"",contentType:"application/json"}}),l({chunk:JSON.stringify({error:O,from:"builder-preview"})}),l({done:!0})},d=String(r.method||"GET").toUpperCase();if(r.body!==void 0&&typeof r.body!="string")return c(400,"The Builder preview sends a request body only as a string of JSON.");const h=Vi(d,r.path,s.origin);if(!h)return c(403,`The Builder preview sends only AeroAI's own requests to Aero, and ${d} ${String(r.path).slice(0,80)} is not one.`);if(!s.allow(Date.now()))return c(429,`The Builder preview sends at most ${Lr} AeroAI requests a minute. Is the page calling AI on every load, or in a loop?`);let m;try{m=await(s.fetchImpl??fetch)(h,{method:d,credentials:"same-origin",headers:d==="POST"&&r.body!==void 0?{Accept:"application/json","Content-Type":"application/json"}:{Accept:"application/json"},body:d==="POST"?r.body:void 0,signal:s.signal})}catch(y){return l({error:y instanceof Error?y.message:String(y)})}if(l({head:{status:m.status,statusText:m.statusText,contentType:m.headers.get("content-type")??""}}),!m.body)return l({done:!0});const A=m.body.getReader(),R=new TextDecoder;try{for(;;){const{done:O,value:_}=await A.read();if(O)break;const x=R.decode(_,{stream:!0});x&&l({chunk:x})}const y=R.decode();y&&l({chunk:y}),l({done:!0})}catch(y){A.cancel().catch(()=>{}),l({error:y instanceof Error?y.message:String(y)})}}function Xi({url:n,isNew:r,visibility:s,onClose:l}){const c=o.useRef(null),d=o.useRef(null);o.useEffect(()=>{const m=d.current;m&&!m.contains(document.activeElement)&&m.focus()},[]);function h(m){if(m.key==="Escape"){l();return}if(m.key!=="Tab")return;const A=c.current;if(!A)return;const R=A.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(R.length===0)return;const y=R[0],O=R[R.length-1],_=document.activeElement;m.shiftKey&&(_===y||!A.contains(_))?(m.preventDefault(),O.focus()):!m.shiftKey&&(_===O||!A.contains(_))&&(m.preventDefault(),y.focus())}return e.jsx("div",{ref:d,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:h,onMouseDown:m=>{m.target===m.currentTarget&&l()},children:e.jsxs("div",{ref:c,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[e.jsx(Sr,{className:"h-10 w-10 text-success"}),e.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:r?"Page published":"Update published"}),e.jsx("p",{className:"text-[12px] text-fg-2",children:r?s==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx(vi,{url:n})}),e.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:e.jsx(ce,{autoFocus:!0,onClick:l,children:"Done"})})]})})}function Qi({initialAlias:n,busy:r,onCancel:s,onPublish:l}){const[c,d]=o.useState(n),[h,m]=o.useState("public"),[A,R]=o.useState([]),y=o.useRef(null),O=o.useRef(null);o.useEffect(()=>{const x=O.current;x&&!x.contains(document.activeElement)&&x.focus()},[]);function _(x){if(x.key==="Escape"){s();return}if(x.key!=="Tab")return;const f=y.current;if(!f)return;const L=f.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(L.length===0)return;const ae=L[0],ee=L[L.length-1],F=document.activeElement;x.shiftKey&&(F===ae||!f.contains(F))?(x.preventDefault(),ee.focus()):!x.shiftKey&&(F===ee||!f.contains(F))&&(x.preventDefault(),ae.focus())}return e.jsx("div",{ref:O,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:_,onMouseDown:x=>{x.target===x.currentTarget&&!r&&s()},children:e.jsxs("div",{ref:y,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"border-b border-border px-6 py-4",children:[e.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),e.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),e.jsxs("div",{className:"space-y-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(wr,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),e.jsx(yi,{id:"publish-alias",autoFocus:!0,value:c,disabled:r,onChange:x=>d(x.target.value.toLowerCase()),placeholder:"my-app"}),e.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",c.trim()||"<uuid>"]})]}),e.jsxs("div",{children:[e.jsx(wr,{children:"Who can open it"}),e.jsx(wi,{visibility:h,onVisibilityChange:m,grants:A,onGrantsChange:R,disabled:r})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[e.jsx(ce,{variant:"secondary",onClick:s,disabled:r,children:"Cancel"}),e.jsxs(ce,{onClick:()=>l({alias:c.trim(),visibility:h,grants:A}),disabled:r,children:[e.jsx(Er,{className:"h-3.5 w-3.5"}),r?"Publishing…":"Publish"]})]})]})})}function Zi(n,r){return Nr({queryKey:["page-history",n],queryFn:()=>Le.getPageHistory(n).then(s=>s.versions),enabled:r,retry:!1})}function kr(n,r){return Nr({queryKey:["page-history-version",n,r],queryFn:()=>Le.getPageHistoryVersion(n,r).then(s=>s.html),enabled:r!==null,retry:!1})}function es({entries:n,isLoading:r,isError:s,isFetching:l,selectedSha:c,onSelect:d,onRefresh:h}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[e.jsx(Tr,{className:"h-3.5 w-3.5 text-fg-3"}),e.jsx("span",{className:"flex-1",children:"Version history"}),e.jsx("button",{type:"button",onClick:h,disabled:l,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-1.5",children:[r?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,s?e.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,n&&n.length===0?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(n??[]).map(m=>{const A=m.sha===c;return e.jsxs("button",{type:"button",onClick:()=>d(m),className:C("block w-full rounded-md px-2.5 py-2 text-left",A?"bg-ink":"hover:bg-surface-muted"),children:[e.jsx("div",{className:C("text-[12px] font-medium",A?"text-white":"text-fg"),children:new Date(m.committed_at).toLocaleString()}),e.jsxs("div",{className:C("truncate text-[11px]",A?"text-white/70":"text-fg-3"),children:[m.message,m.author_email?` — ${m.author_email}`:""]})]},m.sha)})]})]})}function ts({entry:n,canRestore:r,onRestore:s,onExit:l}){const c=rn();return e.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[e.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:n?e.jsxs(e.Fragment,{children:["Viewing version from ",new Date(n.committed_at).toLocaleString(),n.author_email?` (${n.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),e.jsxs(ce,{variant:"secondary",size:"sm",onClick:l,children:[e.jsx(_o,{className:"h-3.5 w-3.5"})," Back to current draft"]}),e.jsx(ce,{size:"sm",disabled:!r,onClick:async()=>{await c({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&s()},children:"Restore this version"})]})}function ns(n,r){const s=[];let l=0;for(const c of Ja(n,r)){const d=c.added?"added":c.removed?"removed":"context",h=c.value.split(`
`);h.length>0&&h[h.length-1]===""&&h.pop();for(const m of h)s.push({key:l++,kind:d,text:m})}return s}function tn({oldText:n,newText:r,oldLabel:s,newLabel:l}){const c=o.useMemo(()=>ns(n,r),[n,r]),d=c.every(h=>h.kind==="context");return e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[e.jsxs("span",{className:"text-no-strong",children:["− ",s]}),e.jsxs("span",{className:"text-success",children:["+ ",l]})]}),e.jsx("div",{className:"flex-1 overflow-auto",children:d?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):e.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:c.map(h=>e.jsxs("div",{className:C("flex whitespace-pre px-3",h.kind==="added"&&"bg-status-soft",h.kind==="removed"&&"bg-no-soft",h.kind==="context"&&"text-fg-2"),children:[e.jsx("span",{className:C("mr-2 shrink-0 select-none",h.kind==="added"&&"text-success",h.kind==="removed"&&"text-no-strong",h.kind==="context"&&"text-fg-3"),children:h.kind==="added"?"+":h.kind==="removed"?"−":" "}),e.jsx("span",{children:h.text||" "})]},h.key))})})]})}const rs=o.lazy(()=>Co(()=>import("./CodeEditor-CPpJP2va.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(n=>({default:n.CodeEditor}))),ge=`<!doctype html>
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
`,Xe=[],os=.75,as=.85,nn=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"},{name:"export",aliases:[],hint:"",description:"Save the conversation as a Markdown file"}];function is(n,r,s){if(s){const l=Math.max(0,Math.ceil((s.deadline-Date.now())/1e3));return`rate-limited — retry ${s.attempt} of ${s.max} in ${l}s…`}if(n&&Rr.includes(n.name))return Oa(n.name,n.detail);if(n)switch(n.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${n.detail?` (${n.detail})`:""}…`;case"grep":return`searching the page${n.detail?` for “${n.detail}”`:""}…`;case"console":return"checking the console…";case"skill":{const{skill:l,guides:c}=_r(n.detail);return c?`reading the ${c} guide${c.includes(",")?"s":""}…`:l?`loading the ${l} skill…`:"loading a skill…"}case"action":return`running ${n.detail??"an action"}…`;case"web_search":return n.detail?`searching the web for “${n.detail}”…`:"searching the web…";case"read_url":return n.detail?`reading ${n.detail}…`:"reading a web page…";case"database":return"updating the database…";case"bash":return"running code in the preview…";case"list_page_tools":return"listing the page’s tools…";case"call_page_tool":return n.detail?`calling the page’s ${n.detail} tool…`:"calling a page tool…";default:return`using ${n.name}…`}return r>=10?`working… (${r}s — large edits can take a minute)`:r>=3?`working… (${r}s)`:"working…"}function ss(n,r){if(Rr.includes(n.name))return e.jsx(oi,{name:n.name,detail:n.detail,result:r});const{skill:s,guides:l}=n.name==="skill"?_r(n.detail):{};return e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:n.name==="screenshot"?e.jsxs(e.Fragment,{children:[e.jsx($o,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"looked at the page"})]}):n.name==="write"||n.name==="edit"?e.jsxs(e.Fragment,{children:[e.jsx(jr,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"edited the page"})]}):l===""?e.jsxs(e.Fragment,{children:[e.jsx(or,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read no ",e.jsx("span",{className:"font-medium text-fg-2",children:s})," guides"]})]}):l?e.jsxs(e.Fragment,{children:[e.jsx(or,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the ",e.jsx("span",{className:"font-medium text-fg-2",children:l})," guide",l.includes(",")?"s":""]})]}):n.name==="skill"?e.jsxs(e.Fragment,{children:[e.jsx(Wo,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["loaded the ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"unknown"})," skill"]})]}):n.name==="action"?e.jsxs(e.Fragment,{children:[e.jsx(Kt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"an action"})]})]}):n.name==="console"?e.jsxs(e.Fragment,{children:[e.jsx(Kt,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"checked the console"})]}):n.name==="bash"?e.jsxs(e.Fragment,{children:[e.jsx(Kt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran code in the preview",n.detail?e.jsxs(e.Fragment,{children:[": ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="list_page_tools"||n.name==="call_page_tool"?e.jsxs(e.Fragment,{children:[e.jsx(zo,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:n.name==="list_page_tools"?"listed the page’s tools":e.jsxs(e.Fragment,{children:["called the page’s"," ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail??"a"})," ","tool"]})})]}):n.name==="grep"?e.jsxs(e.Fragment,{children:[e.jsx(Go,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["searched the page",n.detail?e.jsxs(e.Fragment,{children:[" for ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="database"?e.jsxs(e.Fragment,{children:[e.jsx(Vo,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["updated the database",n.detail?` (${n.detail})`:""]})]}):n.name==="read"?e.jsxs(e.Fragment,{children:[e.jsx(Cr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the page",n.detail?` (${n.detail})`:""]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Ar,{className:"h-3 w-3"}),e.jsxs("span",{children:["used ",e.jsx("span",{className:"font-medium text-fg-2",children:n.name}),n.detail?` (${n.detail})`:""]})]})}),n.name==="screenshot"&&n.imageUrl?e.jsx("img",{src:n.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function Ts(){var h;const{id:n}=ki(),r=Si(),s=((h=r.state)==null?void 0:h.publishContinuation)===!0,l=o.useRef(0),c=o.useRef(n);!s&&n!==c.current&&(l.current+=1),c.current=n;const d=Mr();return o.useEffect(()=>{s&&d({pathname:r.pathname,search:r.search,hash:r.hash},{replace:!0,state:null})},[s,d,r.pathname,r.search,r.hash]),e.jsx(ls,{pageId:n??null},l.current)}function ls({pageId:n}){var Vn,Yn,Jn;const r=n??"draft",s=`builder:${r}`,l=Ka(s),c=Mr(),d=Yo(),h=rn(),[m,A]=o.useState(!1),[R,y]=o.useState(null),O=o.useRef(R);O.current=R;const[_,x]=o.useState(ge),[f,L]=o.useState(Xe),ae=Zo(),ee=Wa(),F=za(),ve=Ga(),ie=o.useSyncExternalStore(xo,ko),we=o.useMemo(()=>So(ie),[ie]),Pe=Va(),Qe={browseAvailable:ve,workspaceAvailable:!!l.folder,mcpAvailable:Pe===null},{model:q,setModel:yt,thinking:be,restoreThinking:ye,preferredThinkingRef:Ze,zenModels:p,zenModelInfo:g,modelsSettled:b,searchModel:U,codeAssistModels:B,aeroModels:et,antigravityModels:sn,modelOffered:ln,modelLabel:xt,modelReady:G,aiUnavailable:Y,googleUnavailable:cn,fallbackNote:Or,googleReason:Ie,zenInfoFor:Pr}=ae,[J,un]=o.useState(()=>[...ea]),[ue,kt]=o.useState(""),xe=o.useRef(null),Ir=t=>{if(pr(t)==="zen")return xe.current??(xe.current=Ro()),xe.current},te=o.useRef(null),[De,tt]=o.useState(""),[Dr,St]=o.useState(!1),[j,nt]=o.useState(!1),[Fr,Fe]=o.useState(""),[qr,qe]=o.useState(""),[Br,Et]=o.useState(null),[Ur,dn]=o.useState(0),[Tt,T]=o.useState(null),[Hr,jt]=o.useState(!1),[$r,de]=o.useState(null),[hn,At]=o.useState(null),[K,fn]=o.useState(!1),[rt,pn]=o.useState("desktop"),[Ct,Nt]=o.useState("code"),[mn,Rt]=o.useState(null),_t=n!=null&&mn!=null,[gn,ke]=o.useState(null);o.useEffect(()=>{K||Nt("code")},[K]);const[Wr,zr]=o.useState(""),[Mt,Lt]=o.useState(null),[Gr,vn]=o.useState("public"),[Be,Ot]=o.useState(null),[Vr,Pt]=o.useState(!1),[Yr,wn]=o.useState(!1),[X,Ue]=o.useState(null),[Jr,It]=o.useState(!1),[Se,ot]=o.useState(0),[bn,Dt]=o.useState(!1),[yn,xn]=o.useState(0),[Ft,at]=o.useState("live"),it=o.useRef(0),{previewUrl:Ee,relayToken:qt,replyTag:Bt}=o.useMemo(()=>{const t=crypto.randomUUID(),i=crypto.randomUUID();return{previewUrl:URL.createObjectURL(new Blob([xr(_,{screenshot:!0,relay:!0,relayToken:t,replyTag:i})],{type:"text/html"})),relayToken:t,replyTag:i}},[_,yn]),st=o.useRef(null);o.useEffect(()=>{st.current&&st.current!==Ee&&URL.revokeObjectURL(st.current),st.current=Ee},[Ee]);const[v,kn]=o.useState(!1),[P,lt]=o.useState(null),H=Zi(n??"",!!n),D=kr(n??"",v?(P==null?void 0:P.sha)??null:null);o.useEffect(()=>{!v||!H.data||(P&&!H.data.some(t=>t.sha===P.sha)?lt(H.data[0]??null):!P&&H.data.length>0&&lt(H.data[0]))},[v,P,H.data]);function ct(){kn(!1),lt(null),Ut("preview"),Ht("previous")}const[ne,Ut]=o.useState("preview"),[se,Ht]=o.useState("previous"),Sn=v&&P&&H.data?H.data.findIndex(t=>t.sha===P.sha):-1,He=Sn>=0?((Vn=H.data)==null?void 0:Vn[Sn+1])??null:null,ut=kr(n??"",v&&ne==="diff"&&se==="previous"?(He==null?void 0:He.sha)??null:null),[En,Tn]=o.useState(!1),$t=o.useRef(null);o.useEffect(()=>()=>{$t.current&&clearTimeout($t.current)},[]);function Kr(){En||(Tn(!0),H.refetch().finally(()=>{$t.current=setTimeout(()=>Tn(!1),2e3)}))}const $e=o.useMemo(()=>D.data===void 0?null:URL.createObjectURL(new Blob([xr(D.data)],{type:"text/html"})),[D.data]),dt=o.useRef(null);o.useEffect(()=>{dt.current&&dt.current!==$e&&URL.revokeObjectURL(dt.current),dt.current=$e},[$e]);const We=o.useRef(null),[he]=o.useState(()=>new Map),[jn]=o.useState(()=>Ji()),[Xr,An]=o.useState(!1),ht=o.useRef(qt),Cn=o.useRef(Bt);o.useLayoutEffect(()=>{ht.current=qt,Cn.current=Bt,An(!1)},[qt,Bt]);const ft=o.useRef([]),Nn=o.useRef(0);o.useEffect(()=>{ft.current=[],Nn.current=Date.now()},[Ee]);const Qr=o.useRef(0),ze=o.useRef(new Map),Te=o.useRef(!1),Rn=o.useRef(v);o.useEffect(()=>{Rn.current=v},[v]),o.useEffect(()=>{Te.current=!1;const t=ze.current;return t.forEach(i=>{window.clearTimeout(i.timer),i.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),t.clear(),()=>{for(const i of he.keys())i.abort();he.clear()}},[Ee,K,v,Ft,he]);function Zr(){Te.current=!1;const t=++it.current,i=a=>new Promise(u=>window.setTimeout(u,a));(async()=>{for(let a=0;a<5;a++){if(at("restarting"),await i(2e3),it.current!==t)return;xn(u=>u+1),at("live");for(let u=0;u<3e3&&!Te.current;u+=100)await i(100);if(it.current!==t||Te.current||!We.current)return}at("stuck")})()}o.useEffect(()=>{function t(i){var M;if(Yi(i.data,ht.current,he)||i.source!==((M=We.current)==null?void 0:M.contentWindow))return;const a=i.data;if(!a)return;if(a.type===$i&&typeof a.id=="number"){if(a.token!==ht.current)return;const E=new AbortController;he.set(E,String(a.doc??"")),Ki(i.source,i.data,{origin:window.location.origin,allow:jn,replyTag:Cn.current,signal:E.signal}).finally(()=>he.delete(E));return}if(a.type===Gi){a.token===ht.current&&An(!0);return}if(a.type==="aero-dom-ready"){Te.current=!0;return}if(a.type==="aero-dom-op-result"&&typeof a.id=="number"){const E=ze.current.get(a.id);if(!E)return;ze.current.delete(a.id),window.clearTimeout(E.timer);const $=typeof a.generation=="number"?a.generation:null;E.resolve(a.ok?{ok:!0,result:a.result,generation:$}:{ok:!1,error:a.error||"the action failed",generation:$});return}if(a.type!=="aero-console"||typeof a.ts=="number"&&a.ts<Nn.current)return;const u=a.level==="info"||a.level==="warn"||a.level==="error"?a.level:"log",k=ft.current;k.push({level:u,text:typeof a.text=="string"?a.text:"",ts:a.ts??Date.now()}),k.length>300&&k.splice(0,k.length-300)}return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[he,jn]);async function eo(t,i,a){var $;Rn.current&&ct(),fn(!1);const u=Date.now()+1e4;for(;!Te.current||!(($=We.current)!=null&&$.contentWindow);){if(Date.now()>u)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(S=>setTimeout(S,50))}const k=We.current.contentWindow,M=++Qr.current,E=t==="bash"?Ba(i.timeout)+5e3:t==="call_page_tool"?Ua(i.timeout)+5e3:t==="screenshot"?3e4:15e3;return new Promise(S=>{const w=window.setTimeout(()=>{if(ze.current.delete(M),t==="bash"){Zr(),S({ok:!1,error:"the page stopped responding while running the command — most likely a loop that never yields. The preview is being restarted, which takes a few seconds, and anything the page held in memory is reset. Run something smaller, or fix the loop.",generation:null});return}S({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},E);ze.current.set(M,{resolve:S,reject:N=>S({ok:!1,error:N.message,generation:null}),timer:w}),k.postMessage({type:"aero-dom-op",id:M,op:t,args:i,generation:a},"*")})}const I=o.useRef(_),Q=t=>{I.current=t,x(t)},Z=Ni({folderKey:s,folder:l.folder,access:l.access,html:_,htmlRef:I,setHtml:Q,isBlank:()=>I.current===ge,busy:j,onError:T}),re=o.useRef(ge),le=o.useRef(null),pt=o.useRef(Xe),mt=o.useRef(null),_n=o.useRef(null),Mn=o.useRef(null),fe=o.useRef(null),je=o.useRef(!1),Wt=o.useRef(Xa);o.useEffect(()=>{let t=!0;return Eo().then(i=>mr(i).then(a=>{t&&(Wt.current=a)})).catch(()=>{}),To().then(i=>mr(i).then(a=>{t&&(Wt.current=a)})).catch(()=>{}),()=>{t=!1}},[]);const Ln=Qa(q,g),{openAi:to,takesFiles:zt,attachLabel:no,accept:ro,requestLimit:Ae,inlineLimitApplies:Gt}=Ln,{attachments:Ce,converting:Vt,stage:Yt,remove:On}=Za(t=>T(t),t=>ai(t,Ln,xt(q))),Ge=ta(q,g),oo=()=>{if(!ue)return"Same as builder";const t=xt(ue);return!b||ln(ue)?t:`${t} — unavailable`};o.useEffect(()=>{let t=!1;return Rt(null),ke(null),Ue(null),It(!1),kt(""),te.current=null,xe.current=null,le.current=null,y(null),(async()=>{let i;try{i=await er(r)}catch(u){t||(y(u instanceof Error?u.message:String(u)),A(!0));return}if(t)return;let a=Xe;if(i&&(Q(i.html),re.current=i.html,a=na(i.contents),L(a),pt.current=a,ot(ra(a)),Dt(!1),i.model&&yt(i.model),ye(i.thinking,i.model??q),un(oa(i.disabledTools,i.knownTools)),kt(i.observerModel??""),te.current=i.zenSessionId??null),n)try{const u=await Le.getPage(n);if(t)return;Lt(u.url),vn(jo(u.visibility)),Rt(u.html),le.current=u.updated_at;const{html:k,supersededLocal:M}=Ti(i,u);Q(k),re.current=k,i&&M!==null&&(ke(M),wt({...i,html:k,contents:a,basedOnUpdatedAt:u.updated_at,updatedAt:0}).catch(()=>{}))}catch{t||T("Failed to load page.")}t||A(!0)})(),()=>{t=!0}},[r]);const pe=o.useRef(Date.now());o.useEffect(()=>{if(!j)return;pe.current=Date.now(),dn(0);const t=setInterval(()=>dn(Math.round((Date.now()-pe.current)/1e3)),1e3);return()=>clearInterval(t)},[j]);const Pn=()=>{if(pr(q)==="zen")return te.current=No(te.current),te.current},oe=(t,i=J,a=ue)=>{if(R!==null)return Promise.resolve();const u=I.current;return wt({key:r,pageId:n,html:u,contents:t,model:q||null,thinking:Ze.current,disabledTools:i,knownTools:Xt(),observerModel:a||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).then(()=>{re.current=u,pt.current=t}).catch(()=>{})},In={sessionKey:r,pageId:n,contents:f,model:q,thinking:be,disabledTools:J,observerModel:ue,modelsSettled:b,modelOffered:ln,zenInfoFor:Pr},z=o.useRef(In);z.current=In;const Dn=o.useRef(j);Dn.current=j,o.useEffect(()=>()=>{if(O.current!==null||I.current===re.current&&z.current.contents===pt.current)return;const{sessionKey:t,pageId:i,contents:a,model:u,thinking:k,disabledTools:M,observerModel:E}=z.current;wt({key:t,pageId:i,html:I.current,contents:a,model:u||null,thinking:k,disabledTools:M,knownTools:Xt(),observerModel:E||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).catch(()=>{})},[]);const ao=Gt&&(Ce.length>0||f.some(t=>t.parts.some(i=>i.inlineData))),Ne=o.useMemo(()=>ar(f,Ce,De),[f,Ce,De]),io=Gt&&Ne>Ae,Fn=Ne/Ae>=os,qn=Se/Ge>=as,Bn=Math.max(0,100-Math.round(Se/Ge*100)),Un=Ea(Ge),Hn=bn?Se:void 0,gt=aa(Hn,Ge);async function $n(t){var Qn,Zn;const i=t===void 0,a=(t??De).trim(),u=i?Ce:[];if(i&&ci(a)){tt(""),zn();return}if(!a&&u.length===0||j||!G||Vt.length>0||je.current)return;const k=i?Ne:ar(f,u,a);if(Gt&&k>Ae){T(`This message is too large to send (~${me(k)} — the limit for ${xt(q)} is ~${me(Ae)}). `+(u.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(a.startsWith("/")){const W=a.split(/\s+/)[0];if(!Ta(nn,W)){T(`Unknown command: ${W} — available: ${nn.map(yo=>`/${yo.name}`).join(", ")}`);return}}const M=ja(a);if(M){tt(""),await co(M.instructions);return}if(gt){T(gt);return}je.current=!0;let E,$,S=null;try{E=await l.forTurn(),E&&await Z.sync(E),S=Z.takeOutsideEdit(),$=E?await Aa(E,(Qn=Z.current())==null?void 0:Qn.path):null}finally{je.current=!1}const w=z.current.contents,N=dr(w,$),V=[Ao()];N&&V.push(N),S&&V.push(bt(`The page was changed outside Aero since your last turn: \`${S.path}\`, the file it is linked to, was edited, and the page now holds that version. What changed:
\`\`\`diff
${S.changes}
\`\`\`
Read the page before you edit it.`));for(const W of u)V.push(Ca(W.name,W.mimeType)),V.push(W.kind==="inline"?{inlineData:{mimeType:W.mimeType,data:W.data??""}}:{text:W.text??""});a&&V.push({text:a});const Kn=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(a),bo=/\bdeck-container\b|class="slide slide--/.test(I.current);I.current===ge?V.push(bt(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, ${Kn?"load the `aero-slides` skill":"load the `aero-app-style` and `modern-web-guidance` skills and read the guides the page needs"}, then write the first draft directly with \`write\`.`)):bo?V.push(bt("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):Kn&&V.push(bt("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const Xn=[...w,{role:"user",parts:V}];if((Zn=mt.current)==null||Zn.followOutput(),L(Xn),i){tt(W=>W.trim()===a?"":W);for(const W of u)On(W.id)}ri(),await Wn(Xn,E)}async function Wn(t,i){const a=new AbortController;fe.current=a,nt(!0),Fe(""),qe(""),T(null),jt(!1),de(null);const u=z.current.sessionKey;Ue(null);const k=I.current,M=Date.now(),E=Pn();let $=t;try{const S=await Pa({model:q,contents:t,html:()=>I.current,skills:Wt.current,pageId:n,consoleLogs:()=>ft.current,domOp:eo,browse:ee,confirmTool:F,workspace:i?{root:i,owner:`builder:${u}`,log:mi}:void 0,generationConfig:hr(be,q),thinking:be,zenModelInfo:g,zenSession:E,searchModel:U,disabledTools:J,signal:a.signal,callbacks:{onText:w=>{pe.current=Date.now(),de(null),Fe(N=>N+w)},onThought:w=>{pe.current=Date.now(),de(null),qe(N=>N+w)},onUsage:w=>{const N=w.totalTokenCount??w.promptTokenCount;typeof N=="number"&&(ot(N),Dt(!0))},onTool:(w,N)=>{pe.current=Date.now(),de(null),Et({name:w,detail:N})},onHtml:w=>Q(w),onContents:w=>{$=w,pe.current=Date.now(),Et(null),L(w),Fe(""),qe("")},onStreamReset:()=>{Fe(""),qe(""),de(null)},onRetry:(w,N,V)=>{pe.current=Date.now(),de({attempt:w,max:N,deadline:Date.now()+V*1e3})}}});L(S),await oe(S),Date.now()-M>1e4&&gr({ok:!0});try{await lo(S,k,u,a.signal)}catch{}}catch(S){if(S instanceof DOMException&&S.name==="AbortError")await oe($);else{const w=S instanceof Me?Ia(S.body):null,N=S instanceof Me?S.message==="reauth_required"?"Your Code Assist login has expired or is invalid. Reconnect it in Settings.":w?w.message:`AI request failed: ${S.message}`:"AI request failed.";w&&At(w),T(N),jt(!(S instanceof Me&&S.message==="reauth_required")),gr({ok:!1,error:N}),await oe($)}}finally{fe.current===a&&(fe.current=null),nt(!1),Fe(""),qe(""),Et(null),de(null)}}function so(){var t;(t=fe.current)==null||t.abort()}async function vt(){var t;if(!(j||!G||f.length===0)){if(gt){T(gt);return}if(!je.current){je.current=!0;try{(t=mt.current)==null||t.followOutput();const i=await l.forTurn();if(i&&await Z.sync(i),z.current.contents!==f)return;let a=null;const u=Z.pendingOutsideEdit();if(u?a=`${u} was edited outside Aero since the last turn`:!i&&dr(f,null)&&(a="Aero no longer has the workspace folder"),a){T(`${a}. Send a message instead of retrying, so Aero is told.`);return}await Wn(f,i)}finally{je.current=!1}}}}async function lo(t,i,a,u){if(z.current.sessionKey!==a||z.current.disabledTools.includes(Qt)||u.aborted||I.current===i||!ir(t))return;const{observerModel:k,model:M,modelsSettled:E,modelOffered:$,zenInfoFor:S}=z.current,w=k&&(!E||$(k))?k:M;It(!0);try{const N=await Ha({model:w,request:$a(t),html:I.current,consoleEntries:ft.current,zenModelInfo:S(w),zenSession:Ir(w),signal:u});N&&z.current.sessionKey===a&&Ue(N)}finally{It(!1)}}async function co(t){if(j||!G)return;if(f.length===0){T("Nothing to compact — the conversation is empty.");return}const i=new AbortController;fe.current=i,nt(!0),wn(!0),T(null);try{const a=await Da({model:q,profile:fr,contents:f,instructions:t||void 0,limit:Ge,tokens:Hn,generationConfig:hr("off",q),zenSession:Pn(),signal:i.signal});await Re(Fa(a,fr))}catch(a){a instanceof DOMException&&a.name==="AbortError"||T(a instanceof Me?`Compaction failed: ${a.message}`:"Compaction failed.")}finally{fe.current===i&&(fe.current=null),nt(!1),wn(!1)}}function zn(){if(_e.length===0){T("Nothing to export — the conversation is empty.");return}T(null);const t=new DOMParser().parseFromString(I.current,"text/html").title.trim()||"Builder conversation",i=new Date;ii(li(_e,f,{title:t,exportedAt:i}),si(t,i))}async function Re(t){L(t),ot(qa(Se,bn,f,t)),await oe(t)}async function uo(t){if(j)return;const i=f;if(!(!await h({title:"Delete from history?",body:t.kind==="tool"||t.kind==="grouped-search"?`Removes ${t.refs.length===1?"this tool call and its result":`these ${t.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:t.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||Dn.current||z.current.contents!==i))switch(t.kind){case"user":case"compact":await Re(Ma(f,t.contentIndex));break;case"thought":await Re(_a(f,t.refs));break;case"tool":case"grouped-search":await Re(Ra(f,t.refs));break;case"assistant":await Re(Na(f,t.refs));break}}async function ho(t,i){j||t.kind!=="user"&&t.kind!=="assistant"||z.current.contents===f&&await Re(La(f,t.refs,i))}const Ve=Jo({mutationFn:async t=>{const i=I.current;if(n){const u=await Le.patchPage(n,{html:i});return{id:n,isNew:!1,url:null,html:i,visibility:Gr,updatedAt:u.updated_at}}const a=await Le.createPage(i,{alias:(t==null?void 0:t.alias)||null,visibility:(t==null?void 0:t.visibility)??"public",grants:(t==null?void 0:t.grants)??[]});return{id:a.id,isNew:!0,url:a.url,html:i,visibility:(t==null?void 0:t.visibility)??"public",updatedAt:a.updated_at}},onSuccess:async({id:t,isNew:i,url:a,html:u,visibility:k,updatedAt:M})=>{if(T(null),Pt(!1),vn(k),re.current=u,Rt(u),le.current=M??le.current,ke(null),d.invalidateQueries({queryKey:["pages"]}),d.invalidateQueries({queryKey:["page",t]}),d.invalidateQueries({queryKey:["page-history",t]}),i)await wt({key:t,pageId:t,html:I.current,contents:f,model:q||null,thinking:be,disabledTools:J,knownTools:Xt(),observerModel:ue||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).catch(()=>{}),await Jt("draft").catch(()=>{}),await hi("builder:draft",`builder:${t}`).catch(()=>{}),await fi("builder:draft",`builder:${t}`).catch(()=>{}),Lt(a),Ot({url:a??`/p/${t}`,id:t,isNew:!0,visibility:k});else{const E=Mt??`/p/${t}`;Lt(E),Ot({url:E,id:t,isNew:!1,visibility:k})}},onError:t=>{t instanceof Me&&t.body&&typeof t.body=="object"&&"reason"in t.body?T(`Publish failed: ${t.message} (${String(t.body.reason)})`):t instanceof Me?T(`Publish failed: ${t.message}`):T("Publish failed.")}});async function fo(){if(await h({title:"Reset builder",body:n?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Jt(r).catch(()=>{}),await vr(s).catch(()=>{}),L(Xe),pt.current=Xe,ot(0),Dt(!1),T(null),Ue(null),te.current=null,xe.current=null,n)try{const i=await Le.getPage(n);Q(i.html),re.current=i.html,le.current=i.updated_at,ke(null)}catch{T("Failed to reload page.")}else Q(ge),re.current=ge}async function po(){if(I.current!==re.current){if(!await h({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;re.current=I.current}const t=await er("draft").catch(()=>{});t&&(t.contents.length>0||t.html!==ge)&&await h({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&(await Jt("draft").catch(()=>{}),await pi("builder:draft").catch(()=>{}),await vr("builder:draft").catch(()=>{})),c("/")}async function mo(t){var u;const i=(u=t.target.files)==null?void 0:u[0];if(t.target.value="",!i)return;const a=await i.text();Q(a),T(null),oe(f)}function go(t){const i=Array.from(t.target.files??[]);t.target.value="",Yt(i)}const _e=o.useMemo(()=>ia(f),[f]),Ye=f[f.length-1],vo=(Ye==null?void 0:Ye.role)==="user"&&Ye.parts.some(sa),Gn=!j&&!!Ye&&!ir(f)&&!vo,wo=((Yn=_e[_e.length-1])==null?void 0:Yn.kind)==="user";return m?R!==null?e.jsx(la,{what:"This page's chat and draft",reason:R}):e.jsxs("div",{className:"flex min-h-[480px] flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(ca,{choice:ae,disabled:j}),e.jsxs("button",{type:"button",onClick:()=>fn(t=>!t),disabled:v,className:C("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",K?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(jr,{className:"h-3.5 w-3.5"})," Code"]}),e.jsxs("div",{className:C("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(K||v&&ne!=="preview")&&"opacity-50"),children:[e.jsxs("button",{type:"button",onClick:()=>pn("desktop"),disabled:K||v&&ne!=="preview",title:"Preview at full width",className:C("inline-flex items-center gap-1 rounded-sm px-2 py-1",rt==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Mo,{className:"h-3.5 w-3.5"})," Desktop"]}),e.jsxs("button",{type:"button",onClick:()=>pn("mobile"),disabled:K||v&&ne!=="preview",title:"Preview at phone width",className:C("inline-flex items-center gap-1 rounded-sm px-2 py-1",rt==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Lo,{className:"h-3.5 w-3.5"})," Mobile"]})]}),e.jsxs("button",{type:"button",onClick:()=>{it.current++,at("live"),xn(t=>t+1)},disabled:K||v,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(tr,{className:"h-3.5 w-3.5"})," Reload"]}),Xr&&!K&&!v?e.jsx("span",{title:"AeroDB in the preview keeps its rows in memory until the preview reloads, which is every edit. The published page uses the page's real tables.",className:"inline-flex h-8 items-center rounded-md border border-border bg-surface-muted px-2.5 text-[11px] text-fg-2",children:"Simulated data"}):null,e.jsxs("button",{type:"button",onClick:()=>{var t;return(t=_n.current)==null?void 0:t.click()},disabled:j||v,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Oo,{className:"h-3.5 w-3.5"})," Upload"]}),e.jsx("input",{ref:_n,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:mo}),e.jsxs("button",{type:"button",onClick:zn,disabled:_e.length===0,title:"Save the conversation as a Markdown file (attachments become placeholders)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Po,{className:"h-3.5 w-3.5"})," Export chat"]}),e.jsxs("button",{type:"button",onClick:fo,disabled:j||v,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Io,{className:"h-3.5 w-3.5"})," Reset"]}),n?e.jsxs("button",{type:"button",onClick:po,disabled:j||v,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Do,{className:"h-3.5 w-3.5"})," New"]}):null,n?e.jsxs("button",{type:"button",onClick:()=>v?ct():kn(!0),title:"Browse previously published versions of this page",className:C("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",v?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(Tr,{className:"h-3.5 w-3.5"})," History"]}):null,e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[Mt?e.jsxs("a",{href:Mt,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",e.jsx(Fo,{className:"h-3 w-3"})]}):null,e.jsxs(ce,{size:"sm",onClick:()=>n?Ve.mutate(void 0):Pt(!0),disabled:j||Ve.isPending||v,children:[Ve.isPending?e.jsx(qo,{className:"h-3.5 w-3.5 animate-spin"}):e.jsx(Er,{className:"h-3.5 w-3.5"}),n?"Publish update":"Publish"]})]})]}),Tt&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:Tt}),Hr&&!j?e.jsxs("button",{type:"button",onClick:()=>void vt(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[e.jsx(tr,{className:"h-3 w-3"})," Retry"]}):null]}):null,gn!==null&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),e.jsxs("button",{type:"button",onClick:()=>{Q(gn),ke(null),oe(f)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[e.jsx(Bo,{className:"h-3 w-3"})," Keep my local copy"]}),e.jsx("button",{type:"button",onClick:()=>ke(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:e.jsx(nr,{className:"h-3 w-3"})})]}):null,(Y||cn)&&!v?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[Y?"AI is unavailable — ":"Code Assist models are unavailable — ",Ie==="no_project"?e.jsxs(e.Fragment,{children:["no Code Assist project selected for your account."," ",e.jsx(Ei,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):Ie==="reauth_required"?"your Code Assist login has expired or is invalid. Reconnect it in Settings.":`could not load models${Ie?` (${Ie})`:""}. Try again later.`,cn?` ${Or}`:null]}),Ie==="no_project"?e.jsx(bi,{}):null]}):null,Gn&&!Tt&&!wo&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),e.jsxs("button",{type:"button",onClick:()=>void vt(),disabled:Y||!G,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(rr,{className:"h-3 w-3"})," Resume"]})]}):null,e.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[e.jsx("div",{className:C("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",Dr&&"ring-2 ring-ink"),onDragOver:t=>{v||(t.preventDefault(),St(!0))},onDragLeave:()=>St(!1),onDrop:t=>{v||(t.preventDefault(),St(!1),Yt(Array.from(t.dataTransfer.files)))},children:v?e.jsx(es,{entries:H.data,isLoading:H.isLoading,isError:H.isError,isFetching:H.isFetching||En,selectedSha:(P==null?void 0:P.sha)??null,onSelect:lt,onRefresh:Kr}):e.jsx(ua,{ref:mt,chat:_e,busy:j,streamText:Fr,streamThought:qr,busyLabel:Yr?"compacting conversation…":Jr?"reviewing the page…":is(Br,Ur,$r),emptyState:e.jsxs(e.Fragment,{children:["Describe the page you want to build.",e.jsx("br",{}),"Aero edits the HTML and you preview it live.",e.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:t=>ss(t,Sa(f,t.refs[0])),afterMessages:X?e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[X.kind==="issues"?e.jsx(Ho,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):X.kind==="pass"?e.jsx(Sr,{className:"h-3.5 w-3.5 shrink-0 text-success"}):e.jsx(Cr,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),e.jsx("span",{className:"min-w-0 flex-1",children:X.kind==="issues"?e.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",X.findings.length===1?"1 thing":`${X.findings.length} things`," ","to check"]}):X.kind==="pass"?e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),e.jsx("button",{type:"button",onClick:()=>Ue(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:e.jsx(nr,{className:"h-3 w-3"})})]}),X.kind==="issues"?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:X.findings.map((t,i)=>e.jsx("li",{className:"list-disc text-fg-2",children:t},i))}),e.jsx("div",{className:"mt-2 pl-5",children:e.jsxs("button",{type:"button",onClick:()=>void $n(ka(X.findings)),disabled:j||Y||!G,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(rr,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:Gn,resumeDisabled:Y||!G,onResume:()=>void vt(),onSaveItemEdit:(t,i)=>void ho(t,i),onDeleteItem:t=>void uo(t),input:De,onInputChange:tt,onSend:()=>void $n(),onStop:so,composerDisabled:j||Y||!G,sendDisabled:Y||!G||Vt.length>0||!De.trim()&&Ce.length===0||io,placeholder:Y?"AI unavailable":!G&&b?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:nn,composerMeta:e.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[ao?e.jsx("span",{className:C("tabular truncate",Fn&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${me(Ne)} of ${me(Ae)} — requests over that are rejected`,children:Fn?`${me(Ne)} / ${me(Ae)}`:me(Ne)}):null,e.jsx("span",{className:C("tabular truncate",qn&&"font-medium text-no-strong"),title:`Approximate context window usage: ${ur(Se)} of ${Un} tokens (${Bn}% left) — run /compact to free it up`,children:qn?`${ur(Se)} / ${Un}`:`${Bn}% left`})]}),attachmentsBar:e.jsx(ni,{attachments:Ce,converting:Vt,onRemove:On}),composerLeading:e.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[e.jsxs(da,{children:[e.jsx(ha,{asChild:!0,children:e.jsxs(ce,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:C(sr,"relative"),children:[e.jsx(Ar,{className:"h-3.5 w-3.5"}),J.length>0?e.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),e.jsx(fa,{className:"w-60",children:[...pa.filter(t=>t.id!=="workspace"||l.supported),...we].map(t=>{var i;return e.jsxs(o.Fragment,{children:[t.id===((i=we[0])==null?void 0:i.id)?e.jsxs(e.Fragment,{children:[e.jsx(ma,{}),e.jsx(Je,{children:"MCP servers"})]}):null,e.jsx(ga,{checked:!t.names.some(a=>J.includes(a)),disabled:!!lr(t.names,Qe),onCheckedChange:a=>{const u=a?J.filter(k=>!t.names.includes(k)):[...new Set([...J,...t.names])];un(u),oe(f,u)},children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:"text-[11px] text-fg-3",children:lr(t.names,Qe)??t.hint})]})}),t.names.includes(Qt)&&!J.includes(Qt)?e.jsxs(va,{children:[e.jsx(wa,{children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:"Reviewer model"}),e.jsx("span",{className:"text-[11px] text-fg-3",children:oo()})]})}),e.jsx(ba,{className:"max-h-72 w-56 overflow-y-auto",children:e.jsxs(ya,{value:ue,onValueChange:a=>{kt(a),oe(f,J,a)},children:[e.jsx(Ke,{value:"",children:"Same as builder"}),sn.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Antigravity"}),sn.map(a=>e.jsx(Ke,{value:a,children:xa(a)},a))]}):null,B.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Code Assist"}),B.map(a=>e.jsx(Ke,{value:a,children:a},a))]}):null,et.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Aero"}),et.map(a=>e.jsx(Ke,{value:a,children:a},a))]}):null,p.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Free · opencode zen"}),p.map(a=>e.jsx(Ke,{value:a.id,children:a.name},a.id))]}):null]})})]}):null]},t.id)})})]}),to&&!zt?null:e.jsxs(e.Fragment,{children:[e.jsx(ce,{variant:"ghost",size:"sm",onClick:()=>{var t;return(t=Mn.current)==null?void 0:t.click()},disabled:j||Y||!G,title:zt?`Attach ${no}`:"Attach a file (image, PDF, audio, video, PowerPoint, Excel, or text)",className:sr,children:e.jsx(Uo,{className:"h-3.5 w-3.5"})}),e.jsx("input",{ref:Mn,type:"file",multiple:!0,hidden:!0,...zt?{accept:ro}:{},onChange:go})]}),e.jsx(ei,{workspace:l,disabled:j,linkedPath:(Jn=Z.link)==null?void 0:Jn.path,menuItems:Z.link?e.jsxs(cr,{className:"pl-2",onSelect:()=>void Z.unlink(),children:["Unlink ",Z.link.path]}):e.jsx(cr,{className:"pl-2",onSelect:()=>void Z.linkTo(),children:"Link the page to a file…"})}),e.jsx(ti,{codeAssistModels:b?B:void 0,disabled:j||Y||!G,onText:t=>{var i;return(i=mt.current)==null?void 0:i.insertAtCaret(t)},onError:t=>{jt(!1),T(t)}})]}),onPasteFiles:t=>void Yt(t)})}),e.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:v?e.jsxs(e.Fragment,{children:[e.jsx(ts,{entry:P,canRestore:!!P&&D.data!==void 0,onRestore:()=>{D.data!==void 0&&(Q(D.data),oe(f)),ct()},onExit:ct}),P?e.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Ut("preview"),className:C("rounded-sm px-2 py-1",ne==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),e.jsx("button",{type:"button",onClick:()=>Ut("diff"),className:C("rounded-sm px-2 py-1",ne==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),ne==="diff"?e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Ht("previous"),className:C("rounded-sm px-2 py-1",se==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),e.jsx("button",{type:"button",onClick:()=>Ht("draft"),className:C("rounded-sm px-2 py-1",se==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,ne==="diff"&&P?se==="previous"&&!He?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):se==="previous"&&ut.isLoading||D.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):se==="previous"&&ut.isError||D.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):se==="previous"&&ut.data!==void 0&&D.data!==void 0?e.jsx(tn,{oldText:ut.data,newText:D.data,oldLabel:`Version from ${new Date(He.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(P.committed_at).toLocaleString()}`}):se==="draft"&&D.data!==void 0?e.jsx(tn,{oldText:_,newText:D.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(P.committed_at).toLocaleString()}`}):null:ne==="preview"?D.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):D.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):$e?e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:e.jsx("iframe",{title:"historic version preview",src:$e,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:C("h-full bg-white",rt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):K?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Nt("code"),className:C("rounded-sm px-2 py-1",Ct==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),e.jsx("button",{type:"button",onClick:()=>Nt("diff"),disabled:!_t,title:_t?void 0:"Diff becomes available once this page has been published",className:C("rounded-sm px-2 py-1 disabled:opacity-50",Ct==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),Ct==="diff"&&_t?e.jsx(tn,{oldText:mn,newText:_,oldLabel:"Last published version",newLabel:"Current draft"}):e.jsx(o.Suspense,{fallback:e.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:e.jsx(rs,{value:_,onChange:Q,language:"html",className:"flex-1 overflow-auto"})})]}):e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:Ft==="restarting"?e.jsx("div",{className:"self-center text-[12px] text-fg-3",children:"Restarting the preview…"}):Ft==="stuck"?e.jsx("div",{className:"max-w-sm self-center px-6 text-center text-[12px] text-fg-2",children:"The preview did not come back: the page is still stuck in its loop inside the browser. Reload this page to end it, once the reply has finished so that it is saved."}):e.jsx("iframe",{ref:We,title:"preview",src:Ee,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:C("h-full bg-white",rt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},yn)})})]}),Vr?e.jsx(Qi,{initialAlias:Wr,busy:Ve.isPending,onCancel:()=>Pt(!1),onPublish:t=>{zr(t.alias),Ve.mutate(t)}}):null,Be?e.jsx(Xi,{url:Be.url,isNew:Be.isNew,visibility:Be.visibility,onClose:()=>{const t=Be;Ot(null),t.isNew&&c(`/builder/${t.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,hn?e.jsx(xi,{info:hn,onEnabled:()=>{At(null),T(null),vt()},onClose:()=>At(null)}):null]}):e.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{Ts as BuilderPage};
