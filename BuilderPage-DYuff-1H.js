const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-x61G98hH.js","./vendor-react-CAxfvf9m.js","./index-CAysNI8o.js","./vendor-query-BxrN5LjX.js","./vendor-router-Bt7c4kAJ.js","./index-CBzq0l3r.css"])))=>i.map(i=>d[i]);
import{u as nn,B as ce,c as C,b as Le,a5 as wa,a6 as ba,ar as xa,E as ya,I as ka,m as Qn,j as ja,q as vt,a as Ae,t as Kt,w as Sa,as as wt,_ as Ea,x as Ta,at as Na}from"./index-CAysNI8o.js";import{r as a,j as e,e as yr,G as kr,$ as jr,a0 as Ca,a1 as Sr,a2 as Ra,a3 as Ma,s as Zn,a4 as _a,h as Aa,l as La,a5 as Pa,c as Da,L as Oa,a6 as Ia,X as er,t as tr,W as Er,y as Fa,i as Ba,a as Tr,a7 as Ha,a8 as nr,M as Ua,V as Jt,a9 as $a,D as qa}from"./vendor-react-CAxfvf9m.js";import{a as Nr,u as Wa,b as za}from"./vendor-query-BxrN5LjX.js";import{ay as rn,az as Va,aA as Ga,aB as Ya,u as Ka,aC as Ja,m as Xa,r as Qa,k as Za,aD as ei,aE as Xt,aj as rr,ak as ti,t as ni,i as ri,al as ar,L as ai,M as ii,C as si,V as oi,W as li,am as ir,a0 as ci,aF as ui,a2 as di,a3 as Je,ae as hi,ah as sr,aG as Qt,aH as fi,aI as pi,aJ as mi,aK as gi,aL as Xe,aM as vi,a1 as or,z as ge,o as lr,aN as wi,an as bi,ap as cr,q as xi,v as yi,w as ki,aq as ji,ar as Si,A as Ei,B as Ti,D as Ni,E as Ci,as as Ri,at as Cr,aO as Rr,au as Mi,av as _i,F as ur,H as Ai,I as Li,aP as dr,K as Pi,ax as Di,N as hr,aQ as Oi,aR as Ii,aS as Fi}from"./LoadFailed-D0Z1AUN9.js";import{a as Bi,u as Hi}from"./useBrowseAvailable-Bv1cJSQL.js";import{u as Ui}from"./useVaultUnavailable-CCzL7dL2.js";import{s as $i,e as qi,d as Wi,B as zi,m as fr,a as Vi,u as Gi,W as Yi,D as Ki,A as Ji,r as Xi,b as Qi,n as pr,c as Zi}from"./DictationButton-8mgrMckl.js";import{s as es,e as ts,c as ns,i as rs}from"./chatExport-ChFyl3gJ.js";import{l as as,s as is,m as ss,r as os,d as mr,f as ls,c as cs}from"./workspaceDb-CJMMCk9G.js";import{c as us,P as ds,a as hs}from"./aeroLinks-f4K33Emi.js";import{C as fs}from"./CloudShellHint-u2tEhfQb.js";import{L as gr,I as ps}from"./Input-DsvQ3Byx.js";import{S as ms}from"./ServiceDisabledModal-C8M6Pw23.js";import{c as gs,b as vs,u as Mr,L as ws}from"./vendor-router-Bt7c4kAJ.js";import"./Select-D3Nq1rEa.js";import"./saveBytes-WKddV2BN.js";function bs(n,r){return n?n.basedOnUpdatedAt!==r.updated_at&&n.html!==r.html?{html:r.html,supersededLocal:n.html}:{html:n.html,supersededLocal:null}:{html:r.html,supersededLocal:null}}async function Pe(n){const r=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(r)].map(l=>l.toString(16).padStart(2,"0")).join("")}async function an(n,r,l){const o=await Va(n,r,l);return"error"in o?{kind:"failed",error:o.error}:{kind:"wrote",link:{path:r,revision:o.revision,hash:await Pe(l)}}}async function vr(n,r,l){const o=await rn(n,r.path);if("missing"in o)return{kind:"gone"};if("error"in o)return{kind:"failed",error:o.error};const c=await Pe(l),d=o.revision===r.revision?r.hash:await Pe(o.text),h=c!==r.hash;return d!==r.hash?h?d===c?{kind:"same",link:{path:r.path,revision:o.revision,hash:c}}:{kind:"conflict",text:o.text}:{kind:"loaded",link:{path:r.path,revision:o.revision,hash:d},text:o.text}:h?an(n,r.path,l):{kind:"same",link:{...r,revision:o.revision}}}async function Zt(n,r,l,o){if(l==="page")return an(n,r,o);const c=await rn(n,r);return"missing"in c?{kind:"gone"}:"error"in c?{kind:"failed",error:c.error}:{kind:"loaded",link:{path:r,revision:c.revision,hash:await Pe(c.text)},text:c.text}}async function xs(n,r,l,o){const c=await rn(n,r);return"error"in c?{kind:"failed",error:c.error}:"missing"in c||c.text.trim()===""?an(n,r,l):c.text===l?{kind:"same",link:{path:r,revision:c.revision,hash:await Pe(l)}}:o?{kind:"loaded",link:{path:r,revision:c.revision,hash:await Pe(c.text)},text:c.text}:{kind:"choose"}}const wr=4e3;function ys(n,r){if(n===r)return"";const l=[];for(const c of $i("","",n,r,"","",{context:2}).hunks)l.push(`@@ -${c.oldStart},${c.oldLines} +${c.newStart},${c.newLines} @@`,...c.lines);const o=l.join(`
`);return o.length<=wr?o:`${o.slice(0,wr)}
… (cut here; read the page for the rest)`}const ks=600;function js(n){const{folderKey:r,folder:l,access:o,html:c,htmlRef:d,setHtml:h,isBlank:m,busy:N,onError:M}=n,b=nn(),[P,_]=a.useState(null),x=a.useRef(P),f=a.useRef(Promise.resolve()),L=a.useRef(null),ie=a.useRef(N);ie.current=N;const ee=a.useRef(!1),B=a.useRef(r);B.current=r,a.useEffect(()=>{let p=!0;return x.current=null,_(null),L.current=null,ee.current=!1,as(r).then(g=>{p&&(x.current=g,_(g))}).catch(()=>{}),()=>{p=!1}},[r]);async function ue(p){const g=x.current;g&&p&&g.path===p.path&&g.revision===p.revision&&g.hash===p.hash||(x.current=p,_(p),await is(r,p).catch(()=>{}))}async function se(p,g,j){if(B.current!==r)return!1;switch(g.kind){case"same":case"wrote":return await ue(g.link),!1;case"loaded":return L.current??(L.current={path:j,before:d.current}),h(g.text),await ue(g.link),!0;case"conflict":{const I=await b({title:`${j} changed in two places`,body:`${j} changed on disk, and this page changed in Aero, since they were last the same. Keep Aero's page and write it over the file, or use the file? Closing this uses the file, which holds your own edit; Aero's changes are still in the chat.`,confirmLabel:"Keep Aero's page",cancelLabel:"Use the file"});return B.current!==r?!1:se(p,await Zt(p,j,I?"page":"file",d.current),j)}case"gone":return await ue(null),M(`${j} is no longer in the workspace folder, so this app's page is not linked to it any more.`),!1;case"failed":return M(`Could not keep ${j} in step with the page: ${g.error}`),!1}}function De(p){const g=f.current.then(p,p);return f.current=g.catch(()=>{}),g}function we(p){return De(async()=>{if(B.current!==r)return!1;const g=x.current,j=p??(o==="granted"?l:null);if(!g||!j)return!1;const I=d.current;let U=await vr(j,g,I);return U.kind==="loaded"&&d.current!==I&&(U=await vr(j,g,d.current)),ie.current&&(U.kind==="loaded"||U.kind==="conflict")?(ee.current=!0,!1):se(j,U,g.path)})}async function H(){if(!l||!window.showOpenFilePicker)return;let p;try{if(await Ga(l,!0)!=="granted")return;[p]=await window.showOpenFilePicker({startIn:l,types:[{description:"Web page",accept:{"text/html":[".html",".htm"]}}]})}catch(I){const U=I==null?void 0:I.name;if(U==="AbortError")return;M(U==="SecurityError"||U==="NotAllowedError"?"Access to the folder is allowed now. Choose “Link the page to a file” again to pick the file.":`Could not open the file: ${I.message}`);return}if(!p)return;const g=await l.resolve(p);if(!g){M(`Pick a file inside “${l.name}”, this app's workspace folder.`);return}const j=g.join("/");await De(async()=>{if(B.current!==r)return!1;const I=await xs(l,j,d.current,m());if(I.kind!=="choose")return se(l,I,j);const U=await b({title:`Use ${j} as this app's page?`,body:`The page and ${j} are different. Using the file replaces the page with it, and from then on each keeps the other in step.`,confirmLabel:"Use the file",cancelLabel:"No"});if(B.current!==r)return!1;if(U)return se(l,await Zt(l,j,"file",d.current),j);const Ze=await b({title:`Write this app's page over ${j}?`,body:`${j} is replaced with the page, and from then on every change to the page is written to it.`,confirmLabel:"Write over the file",cancelLabel:"Cancel",variant:"danger"});return B.current!==r?!1:Ze?se(l,await Zt(l,j,"page",d.current),j):!1})}async function bt(){await De(async()=>{B.current===r&&await ue(null)})}function be(){const p=L.current;if(L.current=null,!p)return null;const g=ys(p.before,d.current);return g?{path:p.path,changes:g}:null}function xt(){const p=L.current;return p&&p.before!==d.current?p.path:null}const xe=a.useRef(we);xe.current=we;const Oe=P==null?void 0:P.path;return a.useEffect(()=>{if(!Oe||!l||o!=="granted")return;const p=setTimeout(()=>void xe.current(),ks);return()=>clearTimeout(p)},[c,Oe,l,o]),a.useEffect(()=>{const p=()=>void xe.current();return window.addEventListener("focus",p),()=>window.removeEventListener("focus",p)},[]),a.useEffect(()=>{N||!ee.current||(ee.current=!1,xe.current())},[N]),{link:P,current:()=>x.current,linkTo:H,unlink:bt,sync:we,takeOutsideEdit:be,pendingOutsideEdit:xt}}const Ss=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,Es=`/**
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
`,Ts=`/*
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
`,Ns=`<script>(function(){
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
})();<\/script>`,Cs=`<script>(function(){
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
})();<\/script>`,Rs=`<script>(function(){
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
})();<\/script>`;function Ms(n,r,l,o){return`<script>window.__AeroPreviewConfig=${JSON.stringify({origin:n,relay:r,token:l,replyTag:o}).replace(/</g,"\\u003c")};<\/script><script>${Ts.replace(/<\/script/gi,"<\\/script")}<\/script>`}const _s=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Ss.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,As="<script>"+Es+`
`+Ya+`
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
})();<\/script>`;function br(n,r){const l=(r==null?void 0:r.origin)??(typeof location>"u"?void 0:location.origin);l&&(n=us(n,l));const o=Rs+Ns+Ms(l??"",(r==null?void 0:r.relay)===!0,(r==null?void 0:r.relayToken)??"",(r==null?void 0:r.replyTag)??"")+Cs+(r!=null&&r.screenshot?_s:"")+As,c=n.match(/<head[^>]*>/i);if(!c)return o+n;const d=c.index+c[0].length;return n.slice(0,d)+o+n.slice(d)}const Ls="aero-preview-fetch",Ps="aero-preview-fetch-reply",Ds="aero-preview-bye",Os="aero-preview-db",_r=40;function Is(n,r,l){if(typeof r!="string"||!r.startsWith("/")||r.startsWith("//"))return null;let o;try{o=new URL(r,l)}catch{return null}if(o.origin!==l)return null;const c=o.pathname;return n==="GET"&&c==="/api/app-ai/models"||n==="POST"&&c==="/api/app-ai/v1internal:streamGenerateContent"?o.href:null}function Fs(n,r,l){const o=n;if((o==null?void 0:o.type)!==Ds)return!1;if(o.token!==r)return!0;const c=String(o.doc??"");for(const[d,h]of l)h===c&&(d.abort(),l.delete(d));return!0}function Bs(n=_r){const r=[];return l=>{for(;r.length>0&&l-r[0]>=6e4;)r.shift();return r.length>=n?!1:(r.push(l),!0)}}async function Hs(n,r,l){const o=b=>{try{n.postMessage({type:Ps,id:r.id,tag:l.replyTag,...b},"*")}catch{}},c=(b,P)=>{o({head:{status:b,statusText:"",contentType:"application/json"}}),o({chunk:JSON.stringify({error:P,from:"builder-preview"})}),o({done:!0})},d=String(r.method||"GET").toUpperCase();if(r.body!==void 0&&typeof r.body!="string")return c(400,"The Builder preview sends a request body only as a string of JSON.");const h=Is(d,r.path,l.origin);if(!h)return c(403,`The Builder preview sends only AeroAI's own requests to Aero, and ${d} ${String(r.path).slice(0,80)} is not one.`);if(!l.allow(Date.now()))return c(429,`The Builder preview sends at most ${_r} AeroAI requests a minute. Is the page calling AI on every load, or in a loop?`);let m;try{m=await(l.fetchImpl??fetch)(h,{method:d,credentials:"same-origin",headers:d==="POST"&&r.body!==void 0?{Accept:"application/json","Content-Type":"application/json"}:{Accept:"application/json"},body:d==="POST"?r.body:void 0,signal:l.signal})}catch(b){return o({error:b instanceof Error?b.message:String(b)})}if(o({head:{status:m.status,statusText:m.statusText,contentType:m.headers.get("content-type")??""}}),!m.body)return o({done:!0});const N=m.body.getReader(),M=new TextDecoder;try{for(;;){const{done:P,value:_}=await N.read();if(P)break;const x=M.decode(_,{stream:!0});x&&o({chunk:x})}const b=M.decode();b&&o({chunk:b}),o({done:!0})}catch(b){N.cancel().catch(()=>{}),o({error:b instanceof Error?b.message:String(b)})}}function Us({url:n,isNew:r,visibility:l,onClose:o}){const c=a.useRef(null),d=a.useRef(null);a.useEffect(()=>{const m=d.current;m&&!m.contains(document.activeElement)&&m.focus()},[]);function h(m){if(m.key==="Escape"){o();return}if(m.key!=="Tab")return;const N=c.current;if(!N)return;const M=N.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(M.length===0)return;const b=M[0],P=M[M.length-1],_=document.activeElement;m.shiftKey&&(_===b||!N.contains(_))?(m.preventDefault(),P.focus()):!m.shiftKey&&(_===P||!N.contains(_))&&(m.preventDefault(),b.focus())}return e.jsx("div",{ref:d,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:h,onMouseDown:m=>{m.target===m.currentTarget&&o()},children:e.jsxs("div",{ref:c,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[e.jsx(yr,{className:"h-10 w-10 text-success"}),e.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:r?"Page published":"Update published"}),e.jsx("p",{className:"text-[12px] text-fg-2",children:r?l==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx(ds,{url:n})}),e.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:e.jsx(ce,{autoFocus:!0,onClick:o,children:"Done"})})]})})}function $s({initialAlias:n,busy:r,onCancel:l,onPublish:o}){const[c,d]=a.useState(n),[h,m]=a.useState("public"),[N,M]=a.useState([]),b=a.useRef(null),P=a.useRef(null);a.useEffect(()=>{const x=P.current;x&&!x.contains(document.activeElement)&&x.focus()},[]);function _(x){if(x.key==="Escape"){l();return}if(x.key!=="Tab")return;const f=b.current;if(!f)return;const L=f.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(L.length===0)return;const ie=L[0],ee=L[L.length-1],B=document.activeElement;x.shiftKey&&(B===ie||!f.contains(B))?(x.preventDefault(),ee.focus()):!x.shiftKey&&(B===ee||!f.contains(B))&&(x.preventDefault(),ie.focus())}return e.jsx("div",{ref:P,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:_,onMouseDown:x=>{x.target===x.currentTarget&&!r&&l()},children:e.jsxs("div",{ref:b,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"border-b border-border px-6 py-4",children:[e.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),e.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),e.jsxs("div",{className:"space-y-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(gr,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),e.jsx(ps,{id:"publish-alias",autoFocus:!0,value:c,disabled:r,onChange:x=>d(x.target.value.toLowerCase()),placeholder:"my-app"}),e.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",c.trim()||"<uuid>"]})]}),e.jsxs("div",{children:[e.jsx(gr,{children:"Who can open it"}),e.jsx(hs,{visibility:h,onVisibilityChange:m,grants:N,onGrantsChange:M,disabled:r})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[e.jsx(ce,{variant:"secondary",onClick:l,disabled:r,children:"Cancel"}),e.jsxs(ce,{onClick:()=>o({alias:c.trim(),visibility:h,grants:N}),disabled:r,children:[e.jsx(kr,{className:"h-3.5 w-3.5"}),r?"Publishing…":"Publish"]})]})]})})}function qs(n,r){return Nr({queryKey:["page-history",n],queryFn:()=>Le.getPageHistory(n).then(l=>l.versions),enabled:r,retry:!1})}function xr(n,r){return Nr({queryKey:["page-history-version",n,r],queryFn:()=>Le.getPageHistoryVersion(n,r).then(l=>l.html),enabled:r!==null,retry:!1})}function Ws({entries:n,isLoading:r,isError:l,isFetching:o,selectedSha:c,onSelect:d,onRefresh:h}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[e.jsx(jr,{className:"h-3.5 w-3.5 text-fg-3"}),e.jsx("span",{className:"flex-1",children:"Version history"}),e.jsx("button",{type:"button",onClick:h,disabled:o,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-1.5",children:[r?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,l?e.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,n&&n.length===0?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(n??[]).map(m=>{const N=m.sha===c;return e.jsxs("button",{type:"button",onClick:()=>d(m),className:C("block w-full rounded-md px-2.5 py-2 text-left",N?"bg-ink":"hover:bg-surface-muted"),children:[e.jsx("div",{className:C("text-[12px] font-medium",N?"text-white":"text-fg"),children:new Date(m.committed_at).toLocaleString()}),e.jsxs("div",{className:C("truncate text-[11px]",N?"text-white/70":"text-fg-3"),children:[m.message,m.author_email?` — ${m.author_email}`:""]})]},m.sha)})]})]})}function zs({entry:n,canRestore:r,onRestore:l,onExit:o}){const c=nn();return e.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[e.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:n?e.jsxs(e.Fragment,{children:["Viewing version from ",new Date(n.committed_at).toLocaleString(),n.author_email?` (${n.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),e.jsxs(ce,{variant:"secondary",size:"sm",onClick:o,children:[e.jsx(Ca,{className:"h-3.5 w-3.5"})," Back to current draft"]}),e.jsx(ce,{size:"sm",disabled:!r,onClick:async()=>{await c({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&l()},children:"Restore this version"})]})}function Vs(n,r){const l=[];let o=0;for(const c of qi(n,r)){const d=c.added?"added":c.removed?"removed":"context",h=c.value.split(`
`);h.length>0&&h[h.length-1]===""&&h.pop();for(const m of h)l.push({key:o++,kind:d,text:m})}return l}function en({oldText:n,newText:r,oldLabel:l,newLabel:o}){const c=a.useMemo(()=>Vs(n,r),[n,r]),d=c.every(h=>h.kind==="context");return e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[e.jsxs("span",{className:"text-no-strong",children:["− ",l]}),e.jsxs("span",{className:"text-success",children:["+ ",o]})]}),e.jsx("div",{className:"flex-1 overflow-auto",children:d?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):e.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:c.map(h=>e.jsxs("div",{className:C("flex whitespace-pre px-3",h.kind==="added"&&"bg-status-soft",h.kind==="removed"&&"bg-no-soft",h.kind==="context"&&"text-fg-2"),children:[e.jsx("span",{className:C("mr-2 shrink-0 select-none",h.kind==="added"&&"text-success",h.kind==="removed"&&"text-no-strong",h.kind==="context"&&"text-fg-3"),children:h.kind==="added"?"+":h.kind==="removed"?"−":" "}),e.jsx("span",{children:h.text||" "})]},h.key))})})]})}const Gs=a.lazy(()=>Ea(()=>import("./CodeEditor-x61G98hH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(n=>({default:n.CodeEditor}))),ve=`<!doctype html>
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
`,Qe=[],Ys=.75,Ks=.85,tn=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"},{name:"export",aliases:[],hint:"",description:"Save the conversation as a Markdown file"}];function Js(n,r,l){if(l){const o=Math.max(0,Math.ceil((l.deadline-Date.now())/1e3));return`rate-limited — retry ${l.attempt} of ${l.max} in ${o}s…`}if(n&&Cr.includes(n.name))return Mi(n.name,n.detail);if(n)switch(n.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${n.detail?` (${n.detail})`:""}…`;case"grep":return`searching the page${n.detail?` for “${n.detail}”`:""}…`;case"console":return"checking the console…";case"skill":{const{skill:o,guides:c}=Rr(n.detail);return c?`reading the ${c} guide${c.includes(",")?"s":""}…`:o?`loading the ${o} skill…`:"loading a skill…"}case"action":return`running ${n.detail??"an action"}…`;case"web_search":return n.detail?`searching the web for “${n.detail}”…`:"searching the web…";case"read_url":return n.detail?`reading ${n.detail}…`:"reading a web page…";case"database":return"updating the database…";case"bash":return"running code in the preview…";default:return`using ${n.name}…`}return r>=10?`working… (${r}s — large edits can take a minute)`:r>=3?`working… (${r}s)`:"working…"}function Xs(n,r){if(Cr.includes(n.name))return e.jsx(Qi,{name:n.name,detail:n.detail,result:r});const{skill:l,guides:o}=n.name==="skill"?Rr(n.detail):{};return e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:n.name==="screenshot"?e.jsxs(e.Fragment,{children:[e.jsx(Ha,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"looked at the page"})]}):n.name==="write"||n.name==="edit"?e.jsxs(e.Fragment,{children:[e.jsx(Sr,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"edited the page"})]}):o===""?e.jsxs(e.Fragment,{children:[e.jsx(nr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read no ",e.jsx("span",{className:"font-medium text-fg-2",children:l})," guides"]})]}):o?e.jsxs(e.Fragment,{children:[e.jsx(nr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the ",e.jsx("span",{className:"font-medium text-fg-2",children:o})," guide",o.includes(",")?"s":""]})]}):n.name==="skill"?e.jsxs(e.Fragment,{children:[e.jsx(Ua,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["loaded the ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"unknown"})," skill"]})]}):n.name==="action"?e.jsxs(e.Fragment,{children:[e.jsx(Jt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"an action"})]})]}):n.name==="console"?e.jsxs(e.Fragment,{children:[e.jsx(Jt,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"checked the console"})]}):n.name==="bash"?e.jsxs(e.Fragment,{children:[e.jsx(Jt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran code in the preview",n.detail?e.jsxs(e.Fragment,{children:[": ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="grep"?e.jsxs(e.Fragment,{children:[e.jsx($a,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["searched the page",n.detail?e.jsxs(e.Fragment,{children:[" for ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="database"?e.jsxs(e.Fragment,{children:[e.jsx(qa,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["updated the database",n.detail?` (${n.detail})`:""]})]}):n.name==="read"?e.jsxs(e.Fragment,{children:[e.jsx(Tr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the page",n.detail?` (${n.detail})`:""]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Er,{className:"h-3 w-3"}),e.jsxs("span",{children:["used ",e.jsx("span",{className:"font-medium text-fg-2",children:n.name}),n.detail?` (${n.detail})`:""]})]})}),n.name==="screenshot"&&n.imageUrl?e.jsx("img",{src:n.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function go(){var h;const{id:n}=gs(),r=vs(),l=((h=r.state)==null?void 0:h.publishContinuation)===!0,o=a.useRef(0),c=a.useRef(n);!l&&n!==c.current&&(o.current+=1),c.current=n;const d=Mr();return a.useEffect(()=>{l&&d({pathname:r.pathname,search:r.search,hash:r.hash},{replace:!0,state:null})},[l,d,r.pathname,r.search,r.hash]),e.jsx(Qs,{pageId:n??null},o.current)}function Qs({pageId:n}){var zn,Vn,Gn;const r=n??"draft",l=`builder:${r}`,o=Wi(l),c=Mr(),d=Wa(),h=nn(),[m,N]=a.useState(!1),[M,b]=a.useState(null),P=a.useRef(M);P.current=M;const[_,x]=a.useState(ve),[f,L]=a.useState(Qe),ie=Ka(),ee=Bi(),B=Hi(),ue=a.useSyncExternalStore(wa,ba),se=a.useMemo(()=>xa(ue),[ue]),De=Ui(),we={browseAvailable:B,workspaceAvailable:!!o.folder,mcpAvailable:De===null},{model:H,setModel:bt,thinking:be,restoreThinking:xt,preferredThinkingRef:xe,zenModels:Oe,zenModelInfo:p,modelsSettled:g,searchModel:j,codeAssistModels:I,aeroModels:U,antigravityModels:Ze,modelOffered:sn,modelLabel:yt,modelReady:V,aiUnavailable:Y,googleUnavailable:on,fallbackNote:Ar,googleReason:Ie,zenInfoFor:Lr}=ie,[K,ln]=a.useState(()=>[...Ja]),[de,kt]=a.useState(""),ye=a.useRef(null),Pr=t=>{if(hr(t)==="zen")return ye.current??(ye.current=Na()),ye.current},te=a.useRef(null),[Fe,et]=a.useState(""),[Dr,jt]=a.useState(!1),[T,tt]=a.useState(!1),[Or,Be]=a.useState(""),[Ir,He]=a.useState(""),[Fr,St]=a.useState(null),[Br,cn]=a.useState(0),[Et,E]=a.useState(null),[Hr,Tt]=a.useState(!1),[Ur,he]=a.useState(null),[un,Nt]=a.useState(null),[J,dn]=a.useState(!1),[nt,hn]=a.useState("desktop"),[Ct,Rt]=a.useState("code"),[fn,Mt]=a.useState(null),_t=n!=null&&fn!=null,[pn,ke]=a.useState(null);a.useEffect(()=>{J||Rt("code")},[J]);const[$r,qr]=a.useState(""),[At,Lt]=a.useState(null),[Wr,mn]=a.useState("public"),[Ue,Pt]=a.useState(null),[zr,Dt]=a.useState(!1),[Vr,gn]=a.useState(!1),[X,$e]=a.useState(null),[Gr,Ot]=a.useState(!1),[je,rt]=a.useState(0),[vn,It]=a.useState(!1),[wn,bn]=a.useState(0),[Ft,at]=a.useState("live"),it=a.useRef(0),{previewUrl:Se,relayToken:Bt,replyTag:Ht}=a.useMemo(()=>{const t=crypto.randomUUID(),s=crypto.randomUUID();return{previewUrl:URL.createObjectURL(new Blob([br(_,{screenshot:!0,relay:!0,relayToken:t,replyTag:s})],{type:"text/html"})),relayToken:t,replyTag:s}},[_,wn]),st=a.useRef(null);a.useEffect(()=>{st.current&&st.current!==Se&&URL.revokeObjectURL(st.current),st.current=Se},[Se]);const[v,xn]=a.useState(!1),[D,ot]=a.useState(null),$=qs(n??"",!!n),F=xr(n??"",v?(D==null?void 0:D.sha)??null:null);a.useEffect(()=>{!v||!$.data||(D&&!$.data.some(t=>t.sha===D.sha)?ot($.data[0]??null):!D&&$.data.length>0&&ot($.data[0]))},[v,D,$.data]);function lt(){xn(!1),ot(null),Ut("preview"),$t("previous")}const[ne,Ut]=a.useState("preview"),[oe,$t]=a.useState("previous"),yn=v&&D&&$.data?$.data.findIndex(t=>t.sha===D.sha):-1,qe=yn>=0?((zn=$.data)==null?void 0:zn[yn+1])??null:null,ct=xr(n??"",v&&ne==="diff"&&oe==="previous"?(qe==null?void 0:qe.sha)??null:null),[kn,jn]=a.useState(!1),qt=a.useRef(null);a.useEffect(()=>()=>{qt.current&&clearTimeout(qt.current)},[]);function Yr(){kn||(jn(!0),$.refetch().finally(()=>{qt.current=setTimeout(()=>jn(!1),2e3)}))}const We=a.useMemo(()=>F.data===void 0?null:URL.createObjectURL(new Blob([br(F.data)],{type:"text/html"})),[F.data]),ut=a.useRef(null);a.useEffect(()=>{ut.current&&ut.current!==We&&URL.revokeObjectURL(ut.current),ut.current=We},[We]);const ze=a.useRef(null),[fe]=a.useState(()=>new Map),[Sn]=a.useState(()=>Bs()),[Kr,En]=a.useState(!1),dt=a.useRef(Bt),Tn=a.useRef(Ht);a.useLayoutEffect(()=>{dt.current=Bt,Tn.current=Ht,En(!1)},[Bt,Ht]);const ht=a.useRef([]),Nn=a.useRef(0);a.useEffect(()=>{ht.current=[],Nn.current=Date.now()},[Se]);const Jr=a.useRef(0),Ve=a.useRef(new Map),Ee=a.useRef(!1),Cn=a.useRef(v);a.useEffect(()=>{Cn.current=v},[v]),a.useEffect(()=>{Ee.current=!1;const t=Ve.current;return t.forEach(s=>{window.clearTimeout(s.timer),s.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),t.clear(),()=>{for(const s of fe.keys())s.abort();fe.clear()}},[Se,J,v,Ft,fe]);function Xr(){Ee.current=!1;const t=++it.current,s=i=>new Promise(u=>window.setTimeout(u,i));(async()=>{for(let i=0;i<5;i++){if(at("restarting"),await s(2e3),it.current!==t)return;bn(u=>u+1),at("live");for(let u=0;u<3e3&&!Ee.current;u+=100)await s(100);if(it.current!==t||Ee.current||!ze.current)return}at("stuck")})()}a.useEffect(()=>{function t(s){var A;if(Fs(s.data,dt.current,fe)||s.source!==((A=ze.current)==null?void 0:A.contentWindow))return;const i=s.data;if(!i)return;if(i.type===Ls&&typeof i.id=="number"){if(i.token!==dt.current)return;const S=new AbortController;fe.set(S,String(i.doc??"")),Hs(s.source,s.data,{origin:window.location.origin,allow:Sn,replyTag:Tn.current,signal:S.signal}).finally(()=>fe.delete(S));return}if(i.type===Os){i.token===dt.current&&En(!0);return}if(i.type==="aero-dom-ready"){Ee.current=!0;return}if(i.type==="aero-dom-op-result"&&typeof i.id=="number"){const S=Ve.current.get(i.id);if(!S)return;Ve.current.delete(i.id),window.clearTimeout(S.timer);const q=typeof i.generation=="number"?i.generation:null;S.resolve(i.ok?{ok:!0,result:i.result,generation:q}:{ok:!1,error:i.error||"the action failed",generation:q});return}if(i.type!=="aero-console"||typeof i.ts=="number"&&i.ts<Nn.current)return;const u=i.level==="info"||i.level==="warn"||i.level==="error"?i.level:"log",y=ht.current;y.push({level:u,text:typeof i.text=="string"?i.text:"",ts:i.ts??Date.now()}),y.length>300&&y.splice(0,y.length-300)}return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[fe,Sn]);async function Qr(t,s,i){var q;Cn.current&&lt(),dn(!1);const u=Date.now()+1e4;for(;!Ee.current||!((q=ze.current)!=null&&q.contentWindow);){if(Date.now()>u)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(k=>setTimeout(k,50))}const y=ze.current.contentWindow,A=++Jr.current,S=t==="bash"?Oi(s.timeout)+5e3:t==="screenshot"?3e4:15e3;return new Promise(k=>{const w=window.setTimeout(()=>{if(Ve.current.delete(A),t==="bash"){Xr(),k({ok:!1,error:"the page stopped responding while running the command — most likely a loop that never yields. The preview is being restarted, which takes a few seconds, and anything the page held in memory is reset. Run something smaller, or fix the loop.",generation:null});return}k({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},S);Ve.current.set(A,{resolve:k,reject:R=>k({ok:!1,error:R.message,generation:null}),timer:w}),y.postMessage({type:"aero-dom-op",id:A,op:t,args:s,generation:i},"*")})}const O=a.useRef(_),Q=t=>{O.current=t,x(t)},Z=js({folderKey:l,folder:o.folder,access:o.access,html:_,htmlRef:O,setHtml:Q,isBlank:()=>O.current===ve,busy:T,onError:E}),re=a.useRef(ve),le=a.useRef(null),ft=a.useRef(Qe),pt=a.useRef(null),Rn=a.useRef(null),Mn=a.useRef(null),pe=a.useRef(null),Te=a.useRef(!1),Wt=a.useRef(zi);a.useEffect(()=>{let t=!0;return ya().then(s=>fr(s).then(i=>{t&&(Wt.current=i)})).catch(()=>{}),ka().then(s=>fr(s).then(i=>{t&&(Wt.current=i)})).catch(()=>{}),()=>{t=!1}},[]);const _n=Vi(H,p),{openAi:Zr,takesFiles:zt,attachLabel:ea,accept:ta,requestLimit:Ne,inlineLimitApplies:Vt}=_n,{attachments:Ce,converting:Gt,stage:Yt,remove:An}=Gi(t=>E(t),t=>Zi(t,_n,yt(H))),Ge=Xa(H,p),na=()=>{if(!de)return"Same as builder";const t=yt(de);return!g||sn(de)?t:`${t} — unavailable`};a.useEffect(()=>{let t=!1;return Mt(null),ke(null),$e(null),Ot(!1),kt(""),te.current=null,ye.current=null,le.current=null,b(null),(async()=>{let s;try{s=await Qn(r)}catch(u){t||(b(u instanceof Error?u.message:String(u)),N(!0));return}if(t)return;let i=Qe;if(s&&(Q(s.html),re.current=s.html,i=Qa(s.contents),L(i),ft.current=i,rt(Za(i)),It(!1),s.model&&bt(s.model),xt(s.thinking,s.model??H),ln(ei(s.disabledTools,s.knownTools)),kt(s.observerModel??""),te.current=s.zenSessionId??null),n)try{const u=await Le.getPage(n);if(t)return;Lt(u.url),mn(ja(u.visibility)),Mt(u.html),le.current=u.updated_at;const{html:y,supersededLocal:A}=bs(s,u);Q(y),re.current=y,s&&A!==null&&(ke(A),vt({...s,html:y,contents:i,basedOnUpdatedAt:u.updated_at,updatedAt:0}).catch(()=>{}))}catch{t||E("Failed to load page.")}t||N(!0)})(),()=>{t=!0}},[r]);const me=a.useRef(Date.now());a.useEffect(()=>{if(!T)return;me.current=Date.now(),cn(0);const t=setInterval(()=>cn(Math.round((Date.now()-me.current)/1e3)),1e3);return()=>clearInterval(t)},[T]);const Ln=()=>{if(hr(H)==="zen")return te.current=Ta(te.current),te.current},ae=(t,s=K,i=de)=>{if(M!==null)return Promise.resolve();const u=O.current;return vt({key:r,pageId:n,html:u,contents:t,model:H||null,thinking:xe.current,disabledTools:s,knownTools:Xt(),observerModel:i||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).then(()=>{re.current=u,ft.current=t}).catch(()=>{})},Pn={sessionKey:r,pageId:n,contents:f,model:H,thinking:be,disabledTools:K,observerModel:de,modelsSettled:g,modelOffered:sn,zenInfoFor:Lr},z=a.useRef(Pn);z.current=Pn;const Dn=a.useRef(T);Dn.current=T,a.useEffect(()=>()=>{if(P.current!==null||O.current===re.current&&z.current.contents===ft.current)return;const{sessionKey:t,pageId:s,contents:i,model:u,thinking:y,disabledTools:A,observerModel:S}=z.current;vt({key:t,pageId:s,html:O.current,contents:i,model:u||null,thinking:y,disabledTools:A,knownTools:Xt(),observerModel:S||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).catch(()=>{})},[]);const ra=Vt&&(Ce.length>0||f.some(t=>t.parts.some(s=>s.inlineData))),Re=a.useMemo(()=>rr(f,Ce,Fe),[f,Ce,Fe]),aa=Vt&&Re>Ne,On=Re/Ne>=Ys,In=je/Ge>=Ks,Fn=Math.max(0,100-Math.round(je/Ge*100)),Bn=xi(Ge),Hn=vn?je:void 0,mt=ti(Hn,Ge);async function Un(t){var Jn,Xn;const s=t===void 0,i=(t??Fe).trim(),u=s?Ce:[];if(s&&rs(i)){et(""),qn();return}if(!i&&u.length===0||T||!V||Gt.length>0||Te.current)return;const y=s?Re:rr(f,u,i);if(Vt&&y>Ne){E(`This message is too large to send (~${ge(y)} — the limit for ${yt(H)} is ~${ge(Ne)}). `+(u.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(i.startsWith("/")){const W=i.split(/\s+/)[0];if(!yi(tn,W)){E(`Unknown command: ${W} — available: ${tn.map(va=>`/${va.name}`).join(", ")}`);return}}const A=ki(i);if(A){et(""),await oa(A.instructions);return}if(mt){E(mt);return}Te.current=!0;let S,q,k=null;try{S=await o.forTurn(),S&&await Z.sync(S),k=Z.takeOutsideEdit(),q=S?await ji(S,(Jn=Z.current())==null?void 0:Jn.path):null}finally{Te.current=!1}const w=z.current.contents,R=cr(w,q),G=[Sa()];R&&G.push(R),k&&G.push(wt(`The page was changed outside Aero since your last turn: \`${k.path}\`, the file it is linked to, was edited, and the page now holds that version. What changed:
\`\`\`diff
${k.changes}
\`\`\`
Read the page before you edit it.`));for(const W of u)G.push(Si(W.name,W.mimeType)),G.push(W.kind==="inline"?{inlineData:{mimeType:W.mimeType,data:W.data??""}}:{text:W.text??""});i&&G.push({text:i});const Yn=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(i),ga=/\bdeck-container\b|class="slide slide--/.test(O.current);O.current===ve?G.push(wt(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, ${Yn?"load the `aero-slides` skill":"load the `aero-app-style` and `modern-web-guidance` skills and read the guides the page needs"}, then write the first draft directly with \`write\`.`)):ga?G.push(wt("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):Yn&&G.push(wt("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const Kn=[...w,{role:"user",parts:G}];if((Xn=pt.current)==null||Xn.followOutput(),L(Kn),s){et(W=>W.trim()===i?"":W);for(const W of u)An(W.id)}Xi(),await $n(Kn,S)}async function $n(t,s){const i=new AbortController;pe.current=i,tt(!0),Be(""),He(""),E(null),Tt(!1),he(null);const u=z.current.sessionKey;$e(null);const y=O.current,A=Date.now(),S=Ln();let q=t;try{const k=await _i({model:H,contents:t,html:()=>O.current,skills:Wt.current,pageId:n,consoleLogs:()=>ht.current,domOp:Qr,browse:ee,workspace:s?{root:s,owner:`builder:${u}`,log:cs}:void 0,generationConfig:ur(be,H),thinking:be,zenModelInfo:p,zenSession:S,searchModel:j,disabledTools:K,signal:i.signal,callbacks:{onText:w=>{me.current=Date.now(),he(null),Be(R=>R+w)},onThought:w=>{me.current=Date.now(),he(null),He(R=>R+w)},onUsage:w=>{const R=w.totalTokenCount??w.promptTokenCount;typeof R=="number"&&(rt(R),It(!0))},onTool:(w,R)=>{me.current=Date.now(),he(null),St({name:w,detail:R})},onHtml:w=>Q(w),onContents:w=>{q=w,me.current=Date.now(),St(null),L(w),Be(""),He("")},onStreamReset:()=>{Be(""),He(""),he(null)},onRetry:(w,R,G)=>{me.current=Date.now(),he({attempt:w,max:R,deadline:Date.now()+G*1e3})}}});L(k),await ae(k),Date.now()-A>1e4&&pr({ok:!0});try{await sa(k,y,u,i.signal)}catch{}}catch(k){if(k instanceof DOMException&&k.name==="AbortError")await ae(q);else{const w=k instanceof Ae?Ai(k.body):null,R=k instanceof Ae?k.message==="reauth_required"?"Your Code Assist login has expired or is invalid. Reconnect it in Settings.":w?w.message:`AI request failed: ${k.message}`:"AI request failed.";w&&Nt(w),E(R),Tt(!(k instanceof Ae&&k.message==="reauth_required")),pr({ok:!1,error:R}),await ae(q)}}finally{pe.current===i&&(pe.current=null),tt(!1),Be(""),He(""),St(null),he(null)}}function ia(){var t;(t=pe.current)==null||t.abort()}async function gt(){var t;if(!(T||!V||f.length===0)){if(mt){E(mt);return}if(!Te.current){Te.current=!0;try{(t=pt.current)==null||t.followOutput();const s=await o.forTurn();if(s&&await Z.sync(s),z.current.contents!==f)return;let i=null;const u=Z.pendingOutsideEdit();if(u?i=`${u} was edited outside Aero since the last turn`:!s&&cr(f,null)&&(i="Aero no longer has the workspace folder"),i){E(`${i}. Send a message instead of retrying, so Aero is told.`);return}await $n(f,s)}finally{Te.current=!1}}}}async function sa(t,s,i,u){if(z.current.sessionKey!==i||z.current.disabledTools.includes(Qt)||u.aborted||O.current===s||!ar(t))return;const{observerModel:y,model:A,modelsSettled:S,modelOffered:q,zenInfoFor:k}=z.current,w=y&&(!S||q(y))?y:A;Ot(!0);try{const R=await Ii({model:w,request:Fi(t),html:O.current,consoleEntries:ht.current,zenModelInfo:k(w),zenSession:Pr(w),signal:u});R&&z.current.sessionKey===i&&$e(R)}finally{Ot(!1)}}async function oa(t){if(T||!V)return;if(f.length===0){E("Nothing to compact — the conversation is empty.");return}const s=new AbortController;pe.current=s,tt(!0),gn(!0),E(null);try{const i=await Li({model:H,profile:dr,contents:f,instructions:t||void 0,limit:Ge,tokens:Hn,generationConfig:ur("off",H),zenSession:Ln(),signal:s.signal});await Me(Pi(i,dr))}catch(i){i instanceof DOMException&&i.name==="AbortError"||E(i instanceof Ae?`Compaction failed: ${i.message}`:"Compaction failed.")}finally{pe.current===s&&(pe.current=null),tt(!1),gn(!1)}}function qn(){if(_e.length===0){E("Nothing to export — the conversation is empty.");return}E(null);const t=new DOMParser().parseFromString(O.current,"text/html").title.trim()||"Builder conversation",s=new Date;es(ns(_e,f,{title:t,exportedAt:s}),ts(t,s))}async function Me(t){L(t),rt(Di(je,vn,f,t)),await ae(t)}async function la(t){if(T)return;const s=f;if(!(!await h({title:"Delete from history?",body:t.kind==="tool"||t.kind==="grouped-search"?`Removes ${t.refs.length===1?"this tool call and its result":`these ${t.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:t.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||Dn.current||z.current.contents!==s))switch(t.kind){case"user":case"compact":await Me(Ci(f,t.contentIndex));break;case"thought":await Me(Ni(f,t.refs));break;case"tool":case"grouped-search":await Me(Ti(f,t.refs));break;case"assistant":await Me(Ei(f,t.refs));break}}async function ca(t,s){T||t.kind!=="user"&&t.kind!=="assistant"||z.current.contents===f&&await Me(Ri(f,t.refs,s))}const Ye=za({mutationFn:async t=>{const s=O.current;if(n){const u=await Le.patchPage(n,{html:s});return{id:n,isNew:!1,url:null,html:s,visibility:Wr,updatedAt:u.updated_at}}const i=await Le.createPage(s,{alias:(t==null?void 0:t.alias)||null,visibility:(t==null?void 0:t.visibility)??"public",grants:(t==null?void 0:t.grants)??[]});return{id:i.id,isNew:!0,url:i.url,html:s,visibility:(t==null?void 0:t.visibility)??"public",updatedAt:i.updated_at}},onSuccess:async({id:t,isNew:s,url:i,html:u,visibility:y,updatedAt:A})=>{if(E(null),Dt(!1),mn(y),re.current=u,Mt(u),le.current=A??le.current,ke(null),d.invalidateQueries({queryKey:["pages"]}),d.invalidateQueries({queryKey:["page",t]}),d.invalidateQueries({queryKey:["page-history",t]}),s)await vt({key:t,pageId:t,html:O.current,contents:f,model:H||null,thinking:be,disabledTools:K,knownTools:Xt(),observerModel:de||void 0,zenSessionId:te.current??void 0,basedOnUpdatedAt:le.current??void 0,updatedAt:0}).catch(()=>{}),await Kt("draft").catch(()=>{}),await ss("builder:draft",`builder:${t}`).catch(()=>{}),await os("builder:draft",`builder:${t}`).catch(()=>{}),Lt(i),Pt({url:i??`/p/${t}`,id:t,isNew:!0,visibility:y});else{const S=At??`/p/${t}`;Lt(S),Pt({url:S,id:t,isNew:!1,visibility:y})}},onError:t=>{t instanceof Ae&&t.body&&typeof t.body=="object"&&"reason"in t.body?E(`Publish failed: ${t.message} (${String(t.body.reason)})`):t instanceof Ae?E(`Publish failed: ${t.message}`):E("Publish failed.")}});async function ua(){if(await h({title:"Reset builder",body:n?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Kt(r).catch(()=>{}),await mr(l).catch(()=>{}),L(Qe),ft.current=Qe,rt(0),It(!1),E(null),$e(null),te.current=null,ye.current=null,n)try{const s=await Le.getPage(n);Q(s.html),re.current=s.html,le.current=s.updated_at,ke(null)}catch{E("Failed to reload page.")}else Q(ve),re.current=ve}async function da(){if(O.current!==re.current){if(!await h({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;re.current=O.current}const t=await Qn("draft").catch(()=>{});t&&(t.contents.length>0||t.html!==ve)&&await h({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&(await Kt("draft").catch(()=>{}),await ls("builder:draft").catch(()=>{}),await mr("builder:draft").catch(()=>{})),c("/")}async function ha(t){var u;const s=(u=t.target.files)==null?void 0:u[0];if(t.target.value="",!s)return;const i=await s.text();Q(i),E(null),ae(f)}function fa(t){const s=Array.from(t.target.files??[]);t.target.value="",Yt(s)}const _e=a.useMemo(()=>ni(f),[f]),Ke=f[f.length-1],pa=(Ke==null?void 0:Ke.role)==="user"&&Ke.parts.some(ri),Wn=!T&&!!Ke&&!ar(f)&&!pa,ma=((Vn=_e[_e.length-1])==null?void 0:Vn.kind)==="user";return m?M!==null?e.jsx(ai,{what:"This page's chat and draft",reason:M}):e.jsxs("div",{className:"flex min-h-[480px] flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(ii,{choice:ie,disabled:T}),e.jsxs("button",{type:"button",onClick:()=>dn(t=>!t),disabled:v,className:C("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",J?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(Sr,{className:"h-3.5 w-3.5"})," Code"]}),e.jsxs("div",{className:C("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(J||v&&ne!=="preview")&&"opacity-50"),children:[e.jsxs("button",{type:"button",onClick:()=>hn("desktop"),disabled:J||v&&ne!=="preview",title:"Preview at full width",className:C("inline-flex items-center gap-1 rounded-sm px-2 py-1",nt==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Ra,{className:"h-3.5 w-3.5"})," Desktop"]}),e.jsxs("button",{type:"button",onClick:()=>hn("mobile"),disabled:J||v&&ne!=="preview",title:"Preview at phone width",className:C("inline-flex items-center gap-1 rounded-sm px-2 py-1",nt==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(Ma,{className:"h-3.5 w-3.5"})," Mobile"]})]}),e.jsxs("button",{type:"button",onClick:()=>{it.current++,at("live"),bn(t=>t+1)},disabled:J||v,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Zn,{className:"h-3.5 w-3.5"})," Reload"]}),Kr&&!J&&!v?e.jsx("span",{title:"AeroDB in the preview keeps its rows in memory until the preview reloads, which is every edit. The published page uses the page's real tables.",className:"inline-flex h-8 items-center rounded-md border border-border bg-surface-muted px-2.5 text-[11px] text-fg-2",children:"Simulated data"}):null,e.jsxs("button",{type:"button",onClick:()=>{var t;return(t=Rn.current)==null?void 0:t.click()},disabled:T||v,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(_a,{className:"h-3.5 w-3.5"})," Upload"]}),e.jsx("input",{ref:Rn,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:ha}),e.jsxs("button",{type:"button",onClick:qn,disabled:_e.length===0,title:"Save the conversation as a Markdown file (attachments become placeholders)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Aa,{className:"h-3.5 w-3.5"})," Export chat"]}),e.jsxs("button",{type:"button",onClick:ua,disabled:T||v,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(La,{className:"h-3.5 w-3.5"})," Reset"]}),n?e.jsxs("button",{type:"button",onClick:da,disabled:T||v,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Pa,{className:"h-3.5 w-3.5"})," New"]}):null,n?e.jsxs("button",{type:"button",onClick:()=>v?lt():xn(!0),title:"Browse previously published versions of this page",className:C("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",v?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(jr,{className:"h-3.5 w-3.5"})," History"]}):null,e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[At?e.jsxs("a",{href:At,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",e.jsx(Da,{className:"h-3 w-3"})]}):null,e.jsxs(ce,{size:"sm",onClick:()=>n?Ye.mutate(void 0):Dt(!0),disabled:T||Ye.isPending||v,children:[Ye.isPending?e.jsx(Oa,{className:"h-3.5 w-3.5 animate-spin"}):e.jsx(kr,{className:"h-3.5 w-3.5"}),n?"Publish update":"Publish"]})]})]}),Et&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:Et}),Hr&&!T?e.jsxs("button",{type:"button",onClick:()=>void gt(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[e.jsx(Zn,{className:"h-3 w-3"})," Retry"]}):null]}):null,pn!==null&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),e.jsxs("button",{type:"button",onClick:()=>{Q(pn),ke(null),ae(f)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[e.jsx(Ia,{className:"h-3 w-3"})," Keep my local copy"]}),e.jsx("button",{type:"button",onClick:()=>ke(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:e.jsx(er,{className:"h-3 w-3"})})]}):null,(Y||on)&&!v?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[Y?"AI is unavailable — ":"Code Assist models are unavailable — ",Ie==="no_project"?e.jsxs(e.Fragment,{children:["no Code Assist project selected for your account."," ",e.jsx(ws,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):Ie==="reauth_required"?"your Code Assist login has expired or is invalid. Reconnect it in Settings.":`could not load models${Ie?` (${Ie})`:""}. Try again later.`,on?` ${Ar}`:null]}),Ie==="no_project"?e.jsx(fs,{}):null]}):null,Wn&&!Et&&!ma&&!v?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),e.jsxs("button",{type:"button",onClick:()=>void gt(),disabled:Y||!V,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(tr,{className:"h-3 w-3"})," Resume"]})]}):null,e.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[e.jsx("div",{className:C("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",Dr&&"ring-2 ring-ink"),onDragOver:t=>{v||(t.preventDefault(),jt(!0))},onDragLeave:()=>jt(!1),onDrop:t=>{v||(t.preventDefault(),jt(!1),Yt(Array.from(t.dataTransfer.files)))},children:v?e.jsx(Ws,{entries:$.data,isLoading:$.isLoading,isError:$.isError,isFetching:$.isFetching||kn,selectedSha:(D==null?void 0:D.sha)??null,onSelect:ot,onRefresh:Yr}):e.jsx(si,{ref:pt,chat:_e,busy:T,streamText:Or,streamThought:Ir,busyLabel:Vr?"compacting conversation…":Gr?"reviewing the page…":Js(Fr,Br,Ur),emptyState:e.jsxs(e.Fragment,{children:["Describe the page you want to build.",e.jsx("br",{}),"Aero edits the HTML and you preview it live.",e.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:t=>Xs(t,bi(f,t.refs[0])),afterMessages:X?e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[X.kind==="issues"?e.jsx(Ba,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):X.kind==="pass"?e.jsx(yr,{className:"h-3.5 w-3.5 shrink-0 text-success"}):e.jsx(Tr,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),e.jsx("span",{className:"min-w-0 flex-1",children:X.kind==="issues"?e.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",X.findings.length===1?"1 thing":`${X.findings.length} things`," ","to check"]}):X.kind==="pass"?e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),e.jsx("button",{type:"button",onClick:()=>$e(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:e.jsx(er,{className:"h-3 w-3"})})]}),X.kind==="issues"?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:X.findings.map((t,s)=>e.jsx("li",{className:"list-disc text-fg-2",children:t},s))}),e.jsx("div",{className:"mt-2 pl-5",children:e.jsxs("button",{type:"button",onClick:()=>void Un(wi(X.findings)),disabled:T||Y||!V,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx(tr,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:Wn,resumeDisabled:Y||!V,onResume:()=>void gt(),onSaveItemEdit:(t,s)=>void ca(t,s),onDeleteItem:t=>void la(t),input:Fe,onInputChange:et,onSend:()=>void Un(),onStop:ia,composerDisabled:T||Y||!V,sendDisabled:Y||!V||Gt.length>0||!Fe.trim()&&Ce.length===0||aa,placeholder:Y?"AI unavailable":!V&&g?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:tn,composerMeta:e.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[ra?e.jsx("span",{className:C("tabular truncate",On&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${ge(Re)} of ${ge(Ne)} — requests over that are rejected`,children:On?`${ge(Re)} / ${ge(Ne)}`:ge(Re)}):null,e.jsx("span",{className:C("tabular truncate",In&&"font-medium text-no-strong"),title:`Approximate context window usage: ${lr(je)} of ${Bn} tokens (${Fn}% left) — run /compact to free it up`,children:In?`${lr(je)} / ${Bn}`:`${Fn}% left`})]}),attachmentsBar:e.jsx(Ji,{attachments:Ce,converting:Gt,onRemove:An}),composerLeading:e.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[e.jsxs(oi,{children:[e.jsx(li,{asChild:!0,children:e.jsxs(ce,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:C(ir,"relative"),children:[e.jsx(Er,{className:"h-3.5 w-3.5"}),K.length>0?e.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),e.jsx(ci,{className:"w-60",children:[...ui.filter(t=>t.id!=="workspace"||o.supported),...se].map(t=>{var s;return e.jsxs(a.Fragment,{children:[t.id===((s=se[0])==null?void 0:s.id)?e.jsxs(e.Fragment,{children:[e.jsx(di,{}),e.jsx(Je,{children:"MCP servers"})]}):null,e.jsx(hi,{checked:!t.names.some(i=>K.includes(i)),disabled:!!sr(t.names,we),onCheckedChange:i=>{const u=i?K.filter(y=>!t.names.includes(y)):[...new Set([...K,...t.names])];ln(u),ae(f,u)},children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:"text-[11px] text-fg-3",children:sr(t.names,we)??t.hint})]})}),t.names.includes(Qt)&&!K.includes(Qt)?e.jsxs(fi,{children:[e.jsx(pi,{children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:"Reviewer model"}),e.jsx("span",{className:"text-[11px] text-fg-3",children:na()})]})}),e.jsx(mi,{className:"max-h-72 w-56 overflow-y-auto",children:e.jsxs(gi,{value:de,onValueChange:i=>{kt(i),ae(f,K,i)},children:[e.jsx(Xe,{value:"",children:"Same as builder"}),Ze.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Antigravity"}),Ze.map(i=>e.jsx(Xe,{value:i,children:vi(i)},i))]}):null,I.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Code Assist"}),I.map(i=>e.jsx(Xe,{value:i,children:i},i))]}):null,U.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Aero"}),U.map(i=>e.jsx(Xe,{value:i,children:i},i))]}):null,Oe.length>0?e.jsxs(e.Fragment,{children:[e.jsx(Je,{children:"Free · opencode zen"}),Oe.map(i=>e.jsx(Xe,{value:i.id,children:i.name},i.id))]}):null]})})]}):null]},t.id)})})]}),Zr&&!zt?null:e.jsxs(e.Fragment,{children:[e.jsx(ce,{variant:"ghost",size:"sm",onClick:()=>{var t;return(t=Mn.current)==null?void 0:t.click()},disabled:T||Y||!V,title:zt?`Attach ${ea}`:"Attach a file (image, PDF, audio, video, PowerPoint, Excel, or text)",className:ir,children:e.jsx(Fa,{className:"h-3.5 w-3.5"})}),e.jsx("input",{ref:Mn,type:"file",multiple:!0,hidden:!0,...zt?{accept:ta}:{},onChange:fa})]}),e.jsx(Yi,{workspace:o,disabled:T,linkedPath:(Gn=Z.link)==null?void 0:Gn.path,menuItems:Z.link?e.jsxs(or,{className:"pl-2",onSelect:()=>void Z.unlink(),children:["Unlink ",Z.link.path]}):e.jsx(or,{className:"pl-2",onSelect:()=>void Z.linkTo(),children:"Link the page to a file…"})}),e.jsx(Ki,{codeAssistModels:g?I:void 0,disabled:T||Y||!V,onText:t=>{var s;return(s=pt.current)==null?void 0:s.insertAtCaret(t)},onError:t=>{Tt(!1),E(t)}})]}),onPasteFiles:t=>void Yt(t)})}),e.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:v?e.jsxs(e.Fragment,{children:[e.jsx(zs,{entry:D,canRestore:!!D&&F.data!==void 0,onRestore:()=>{F.data!==void 0&&(Q(F.data),ae(f)),lt()},onExit:lt}),D?e.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Ut("preview"),className:C("rounded-sm px-2 py-1",ne==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),e.jsx("button",{type:"button",onClick:()=>Ut("diff"),className:C("rounded-sm px-2 py-1",ne==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),ne==="diff"?e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>$t("previous"),className:C("rounded-sm px-2 py-1",oe==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),e.jsx("button",{type:"button",onClick:()=>$t("draft"),className:C("rounded-sm px-2 py-1",oe==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,ne==="diff"&&D?oe==="previous"&&!qe?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):oe==="previous"&&ct.isLoading||F.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):oe==="previous"&&ct.isError||F.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):oe==="previous"&&ct.data!==void 0&&F.data!==void 0?e.jsx(en,{oldText:ct.data,newText:F.data,oldLabel:`Version from ${new Date(qe.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(D.committed_at).toLocaleString()}`}):oe==="draft"&&F.data!==void 0?e.jsx(en,{oldText:_,newText:F.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(D.committed_at).toLocaleString()}`}):null:ne==="preview"?F.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):F.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):We?e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:e.jsx("iframe",{title:"historic version preview",src:We,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:C("h-full bg-white",nt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):J?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Rt("code"),className:C("rounded-sm px-2 py-1",Ct==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),e.jsx("button",{type:"button",onClick:()=>Rt("diff"),disabled:!_t,title:_t?void 0:"Diff becomes available once this page has been published",className:C("rounded-sm px-2 py-1 disabled:opacity-50",Ct==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),Ct==="diff"&&_t?e.jsx(en,{oldText:fn,newText:_,oldLabel:"Last published version",newLabel:"Current draft"}):e.jsx(a.Suspense,{fallback:e.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:e.jsx(Gs,{value:_,onChange:Q,language:"html",className:"flex-1 overflow-auto"})})]}):e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:Ft==="restarting"?e.jsx("div",{className:"self-center text-[12px] text-fg-3",children:"Restarting the preview…"}):Ft==="stuck"?e.jsx("div",{className:"max-w-sm self-center px-6 text-center text-[12px] text-fg-2",children:"The preview did not come back: the page is still stuck in its loop inside the browser. Reload this page to end it, once the reply has finished so that it is saved."}):e.jsx("iframe",{ref:ze,title:"preview",src:Se,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:C("h-full bg-white",nt==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},wn)})})]}),zr?e.jsx($s,{initialAlias:$r,busy:Ye.isPending,onCancel:()=>Dt(!1),onPublish:t=>{qr(t.alias),Ye.mutate(t)}}):null,Ue?e.jsx(Us,{url:Ue.url,isNew:Ue.isNew,visibility:Ue.visibility,onClose:()=>{const t=Ue;Pt(null),t.isNew&&c(`/builder/${t.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,un?e.jsx(ms,{info:un,onEnabled:()=>{Nt(null),E(null),gt()},onClose:()=>Nt(null)}):null]}):e.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{go as BuilderPage};
