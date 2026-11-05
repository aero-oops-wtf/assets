const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CodeEditor-D4_kKZTe.js","./vendor-react-DzbTGkEP.js","./index-DLAOG1sd.js","./vendor-query-CN70p8g-.js","./vendor-router-DFZqEmmn.js","./index-C2UlGg9x.css"])))=>i.map(i=>d[i]);
import{u as Yt,B as ue,c as E,b as Te,f as na,a as Re,_ as ra}from"./index-DLAOG1sd.js";import{r,j as e,e as or,G as lr,Y as cr,Z as aa,_ as ur,$ as ia,a0 as sa,p as Hn,a1 as oa,k as la,a2 as ca,c as ua,L as da,a3 as ha,X as Un,q as $n,W as dr,w as fa,h as ma,a as hr,a4 as pa,B as ga,N as zt,a5 as va,D as xa}from"./vendor-react-DzbTGkEP.js";import{a as fr,u as wa,b as ba}from"./vendor-query-CN70p8g-.js";import{aH as Xt,aI as ya,aJ as ka,aK as ja,u as Sa,aL as Ea,q as Ca,l as Bn,r as Na,h as Ra,aM as Ta,w as ut,aN as Wt,ar as zn,as as La,x as Vt,j as Ma,m as Aa,at as Wn,L as Pa,M as Da,C as _a,_ as Ia,$ as Fa,au as Vn,a5 as Oa,aO as Ha,aj as Ua,ap as qn,aP as qt,aQ as $a,aR as Ba,aS as za,aT as Wa,aU as Ve,a8 as dt,aV as Va,a6 as Gn,E as ge,v as Kn,av as qa,aW as Ga,aw as Ka,ay as Yn,y as Ya,z as Xa,A as Qa,az as Ja,aA as Za,F as ei,I as ti,J as ni,K as ri,aB as ai,aC as mr,aD as ii,aE as si,N as Xn,Q as oi,R as li,aX as Qn,U as ci,aG as ui,V as Jn,aY as di,aZ as hi,a_ as fi}from"./LoadFailed-4A0-B4Ci.js";import{b as mi,a as pi,l as gi,s as vi}from"./skillStore-DIY2nIbr.js";import{m as xi,p as ht,o as wi,q as bi}from"./openrouter-IoV-mNiT.js";import{s as yi,e as ki,d as ji,B as Si,m as Zn,a as Ei,u as Ci,W as Ni,D as Ri,A as Ti,r as Li,b as Mi,n as er,c as Ai}from"./DictationButton-Db4VpFaV.js";import{l as Pi,s as Di,m as _i,r as Ii,d as tr,f as Fi,c as Oi}from"./workspaceDb-CJMMCk9G.js";import{C as Hi}from"./CloudShellHint-yVPh5Ot_.js";import{P as Ui,a as $i}from"./PublicUrlRow-BRFmu4PF.js";import{L as nr,I as Bi}from"./Input-BEH8I4eT.js";import{S as zi}from"./ServiceDisabledModal-Br1qLERK.js";import{b as Wi,c as Vi,u as pr,L as qi}from"./vendor-router-DFZqEmmn.js";import"./Select-DjCOgxUr.js";function Gi(n,i){return n?n.basedOnUpdatedAt!==i.updated_at&&n.html!==i.html?{html:i.html,supersededLocal:n.html}:{html:n.html,supersededLocal:null}:{html:i.html,supersededLocal:null}}async function Le(n){const i=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return[...new Uint8Array(i)].map(o=>o.toString(16).padStart(2,"0")).join("")}async function Qt(n,i,o){const l=await ya(n,i,o);return"error"in l?{kind:"failed",error:l.error}:{kind:"wrote",link:{path:i,revision:l.revision,hash:await Le(o)}}}async function Ki(n,i,o){const l=await Xt(n,i.path);if("missing"in l)return{kind:"gone"};if("error"in l)return{kind:"failed",error:l.error};const c=await Le(o),m=l.revision===i.revision?i.hash:await Le(l.text),f=c!==i.hash;return m!==i.hash?f?m===c?{kind:"same",link:{path:i.path,revision:l.revision,hash:c}}:{kind:"conflict",text:l.text}:{kind:"loaded",link:{path:i.path,revision:l.revision,hash:m},text:l.text}:f?Qt(n,i.path,o):{kind:"same",link:{...i,revision:l.revision}}}async function Gt(n,i,o,l){if(o==="page")return Qt(n,i,l);const c=await Xt(n,i);return"missing"in c?{kind:"gone"}:"error"in c?{kind:"failed",error:c.error}:{kind:"loaded",link:{path:i,revision:c.revision,hash:await Le(c.text)},text:c.text}}async function Yi(n,i,o,l){const c=await Xt(n,i);return"error"in c?{kind:"failed",error:c.error}:"missing"in c||c.text.trim()===""?Qt(n,i,o):c.text===o?{kind:"same",link:{path:i,revision:c.revision,hash:await Le(o)}}:l?{kind:"loaded",link:{path:i,revision:c.revision,hash:await Le(c.text)},text:c.text}:{kind:"choose"}}const rr=4e3;function Xi(n,i){if(n===i)return"";const o=[];for(const c of yi("","",n,i,"","",{context:2}).hunks)o.push(`@@ -${c.oldStart},${c.oldLines} +${c.newStart},${c.newLines} @@`,...c.lines);const l=o.join(`
`);return l.length<=rr?l:`${l.slice(0,rr)}
… (cut here; read the page for the rest)`}const Qi=600;function Ji(n){const{folderKey:i,folder:o,access:l,html:c,htmlRef:m,setHtml:f,isBlank:p,busy:T,onError:D}=n,z=Yt(),[O,A]=r.useState(null),k=r.useRef(O),d=r.useRef(Promise.resolve()),L=r.useRef(null),se=r.useRef(T);se.current=T;const Q=r.useRef(!1),H=r.useRef(i);H.current=i,r.useEffect(()=>{let h=!0;return k.current=null,A(null),L.current=null,Q.current=!1,Pi(i).then(g=>{h&&(k.current=g,A(g))}).catch(()=>{}),()=>{h=!1}},[i]);async function de(h){const g=k.current;g&&h&&g.path===h.path&&g.revision===h.revision&&g.hash===h.hash||(k.current=h,A(h),await Di(i,h).catch(()=>{}))}async function M(h,g,b){if(H.current!==i)return!1;switch(g.kind){case"same":case"wrote":return await de(g.link),!1;case"loaded":return L.current??(L.current={path:b,before:m.current}),f(g.text),await de(g.link),!0;case"conflict":{const _=await z({title:`${b} changed in two places`,body:`${b} changed on disk, and this page changed in Aero, since they were last the same. Keep Aero's page and write it over the file, or use the file? Closing this uses the file, which holds your own edit; Aero's changes are still in the chat.`,confirmLabel:"Keep Aero's page",cancelLabel:"Use the file"});return H.current!==i?!1:M(h,await Gt(h,b,_?"page":"file",m.current),b)}case"gone":return await de(null),D(`${b} is no longer in the workspace folder, so this app's page is not linked to it any more.`),!1;case"failed":return D(`Could not keep ${b} in step with the page: ${g.error}`),!1}}function Me(h){const g=d.current.then(h,h);return d.current=g.catch(()=>{}),g}function oe(h){return Me(async()=>{if(H.current!==i)return!1;const g=k.current,b=h??(l==="granted"?o:null);if(!g||!b)return!1;const _=await Ki(b,g,m.current);return se.current&&(_.kind==="loaded"||_.kind==="conflict")?(Q.current=!0,!1):M(b,_,g.path)})}async function ft(){if(!o||!window.showOpenFilePicker)return;let h;try{if(await ka(o,!0)!=="granted")return;[h]=await window.showOpenFilePicker({startIn:o,types:[{description:"Web page",accept:{"text/html":[".html",".htm"]}}]})}catch(_){const Z=_==null?void 0:_.name;if(Z==="AbortError")return;D(Z==="SecurityError"||Z==="NotAllowedError"?"Access to the folder is allowed now. Choose “Link the page to a file” again to pick the file.":`Could not open the file: ${_.message}`);return}if(!h)return;const g=await o.resolve(h);if(!g){D(`Pick a file inside “${o.name}”, this app's workspace folder.`);return}const b=g.join("/");await Me(async()=>{if(H.current!==i)return!1;const _=await Yi(o,b,m.current,p());if(_.kind!=="choose")return M(o,_,b);const Z=await z({title:`Use ${b} as this app's page?`,body:`The page and ${b} are different. Using the file replaces the page with it, and from then on each keeps the other in step.`,confirmLabel:"Use the file",cancelLabel:"No"});if(H.current!==i)return!1;if(Z)return M(o,await Gt(o,b,"file",m.current),b);const B=await z({title:`Write this app's page over ${b}?`,body:`${b} is replaced with the page, and from then on every change to the page is written to it.`,confirmLabel:"Write over the file",cancelLabel:"Cancel",variant:"danger"});return H.current!==i?!1:B?M(o,await Gt(o,b,"page",m.current),b):!1})}async function mt(){await Me(async()=>{H.current===i&&await de(null)})}function Ge(){const h=L.current;if(L.current=null,!h)return null;const g=Xi(h.before,m.current);return g?{path:h.path,changes:g}:null}function Ae(){const h=L.current;return h&&h.before!==m.current?h.path:null}const J=r.useRef(oe);J.current=oe;const Ke=O==null?void 0:O.path;return r.useEffect(()=>{if(!Ke||!o||l!=="granted")return;const h=setTimeout(()=>void J.current(),Qi);return()=>clearTimeout(h)},[c,Ke,o,l]),r.useEffect(()=>{const h=()=>void J.current();return window.addEventListener("focus",h),()=>window.removeEventListener("focus",h)},[]),r.useEffect(()=>{T||!Q.current||(Q.current=!1,J.current())},[T]),{link:O,current:()=>k.current,linkTo:ft,unlink:mt,sync:oe,takeOutsideEdit:Ge,pendingOutsideEdit:Ae}}const Zi=`!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\\((['"]?)([^'"]+?)\\1\\)/g,H=/url\\([^)]+\\)\\s*format\\((["']?)([^"']+)\\1\\)/g,M=/src:\\s*(?:url\\([^)]+\\)\\s*format\\([^)]+\\)[,;]\\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\\/\\//i))return t;if(t.match(/^\\/\\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^\${}()|\\[\\]\\/\\\\])/g,"\\\\$1"),new RegExp("(url\\\\(['\\"]?)(".concat(f,")(['\\"]?\\\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\\(["']?([^"')]+)["']?\\)/g,u=i.match(/url\\([^)]+\\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\\/\\*[\\s\\S]*?\\*\\/)/gi,""),r=new RegExp("((@.*?keyframes [\\\\s\\\\S]*?){([\\\\s\\\\S]*?}\\\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\\s\\S]*?url\\([^)]*\\)[\\s\\S]*?;/gi,o=new RegExp("((\\\\s*?(?:\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/)?\\\\s*?@media[\\\\s\\\\S]*?){([\\\\s\\\\S]*?)}\\\\s*?})|(([\\\\s\\\\S]*?){([\\\\s\\\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
//# sourceMappingURL=html-to-image.js.map
`,es=`/**
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
`,ts=`<script>(function(){
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
})();<\/script>`,ns=`<script>(function(){
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
})();<\/script>`,rs=`<script>(function(){
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
})();<\/script>`,as=`<script>(function(){
var module={exports:{}};var exports=module.exports;
`+Zi.replace(/<\/script/gi,"<\\/script")+`
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
})();<\/script>`,is="<script>"+es+`
`+ja+`
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
})();<\/script>`;function ar(n,i){const o=rs+ts+ns+(i!=null&&i.screenshot?as:"")+is,l=n.match(/<head[^>]*>/i);if(!l)return o+n;const c=l.index+l[0].length;return n.slice(0,c)+o+n.slice(c)}function ss({url:n,isNew:i,visibility:o,onClose:l}){const c=r.useRef(null),m=r.useRef(null);r.useEffect(()=>{const p=m.current;p&&!p.contains(document.activeElement)&&p.focus()},[]);function f(p){if(p.key==="Escape"){l();return}if(p.key!=="Tab")return;const T=c.current;if(!T)return;const D=T.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(D.length===0)return;const z=D[0],O=D[D.length-1],A=document.activeElement;p.shiftKey&&(A===z||!T.contains(A))?(p.preventDefault(),O.focus()):!p.shiftKey&&(A===O||!T.contains(A))&&(p.preventDefault(),z.focus())}return e.jsx("div",{ref:m,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"publish-success-title",onKeyDown:f,onMouseDown:p=>{p.target===p.currentTarget&&l()},children:e.jsxs("div",{ref:c,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 px-6 pt-6 text-center",children:[e.jsx(or,{className:"h-10 w-10 text-success"}),e.jsx("div",{id:"publish-success-title",className:"text-[15px] font-semibold text-fg",children:i?"Page published":"Update published"}),e.jsx("p",{className:"text-[12px] text-fg-2",children:i?o==="private"?"Your page is live. Only you and the people you added can open it.":"Your page is live. Anyone with the link can view it.":"The live page now shows your latest changes."})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx(Ui,{url:n})}),e.jsx("div",{className:"flex justify-end border-t border-border px-6 py-3",children:e.jsx(ue,{autoFocus:!0,onClick:l,children:"Done"})})]})})}function os({initialAlias:n,busy:i,onCancel:o,onPublish:l}){const[c,m]=r.useState(n),[f,p]=r.useState("public"),[T,D]=r.useState([]),z=r.useRef(null),O=r.useRef(null);r.useEffect(()=>{const k=O.current;k&&!k.contains(document.activeElement)&&k.focus()},[]);function A(k){if(k.key==="Escape"){o();return}if(k.key!=="Tab")return;const d=z.current;if(!d)return;const L=d.querySelectorAll(["a[href]","button:not([disabled])","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[contenteditable="true"]','[tabindex]:not([tabindex="-1"])'].join(", "));if(L.length===0)return;const se=L[0],Q=L[L.length-1],H=document.activeElement;k.shiftKey&&(H===se||!d.contains(H))?(k.preventDefault(),Q.focus()):!k.shiftKey&&(H===Q||!d.contains(H))&&(k.preventDefault(),se.focus())}return e.jsx("div",{ref:O,tabIndex:-1,className:"fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm focus:outline-none",role:"dialog","aria-modal":"true","aria-labelledby":"pre-publish-title",onKeyDown:A,onMouseDown:k=>{k.target===k.currentTarget&&!i&&o()},children:e.jsxs("div",{ref:z,className:"w-full max-w-md rounded-lg border border-border bg-surface shadow-lg",children:[e.jsxs("div",{className:"border-b border-border px-6 py-4",children:[e.jsx("div",{id:"pre-publish-title",className:"text-[15px] font-semibold text-fg",children:"Publish app"}),e.jsx("p",{className:"mt-1 text-[12px] text-fg-2",children:"Choose the address and who can open it. You can change both later from Apps."})]}),e.jsxs("div",{className:"space-y-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(nr,{htmlFor:"publish-alias",hint:"optional — leave blank for a UUID URL",children:"Alias"}),e.jsx(Bi,{id:"publish-alias",autoFocus:!0,value:c,disabled:i,onChange:k=>m(k.target.value.toLowerCase()),placeholder:"my-app"}),e.jsxs("div",{className:"mt-1 font-mono text-[11px] text-fg-3",children:["/p/",c.trim()||"<uuid>"]})]}),e.jsxs("div",{children:[e.jsx(nr,{children:"Who can open it"}),e.jsx($i,{visibility:f,onVisibilityChange:p,grants:T,onGrantsChange:D,disabled:i})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 border-t border-border px-6 py-3",children:[e.jsx(ue,{variant:"secondary",onClick:o,disabled:i,children:"Cancel"}),e.jsxs(ue,{onClick:()=>l({alias:c.trim(),visibility:f,grants:T}),disabled:i,children:[e.jsx(lr,{className:"h-3.5 w-3.5"}),i?"Publishing…":"Publish"]})]})]})})}function ls(n,i){return fr({queryKey:["page-history",n],queryFn:()=>Te.getPageHistory(n).then(o=>o.versions),enabled:i,retry:!1})}function ir(n,i){return fr({queryKey:["page-history-version",n,i],queryFn:()=>Te.getPageHistoryVersion(n,i).then(o=>o.html),enabled:i!==null,retry:!1})}function cs({entries:n,isLoading:i,isError:o,isFetching:l,selectedSha:c,onSelect:m,onRefresh:f}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1.5 border-b border-border px-3 py-2.5 text-[12px] font-semibold text-fg",children:[e.jsx(cr,{className:"h-3.5 w-3.5 text-fg-3"}),e.jsx("span",{className:"flex-1",children:"Version history"}),e.jsx("button",{type:"button",onClick:f,disabled:l,title:"Refresh — GitHub sync runs in the background, so a just-published version can take a moment to appear",className:"font-normal text-fg-3 hover:text-fg disabled:opacity-50",children:"Refresh"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-1.5",children:[i?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"Loading…"}):null,o?e.jsx("div",{className:"px-2 py-2 text-[12px] text-no-strong",children:"Failed to load history."}):null,n&&n.length===0?e.jsx("div",{className:"px-2 py-2 text-[12px] text-fg-3",children:"No published versions yet."}):null,(n??[]).map(p=>{const T=p.sha===c;return e.jsxs("button",{type:"button",onClick:()=>m(p),className:E("block w-full rounded-md px-2.5 py-2 text-left",T?"bg-ink":"hover:bg-surface-muted"),children:[e.jsx("div",{className:E("text-[12px] font-medium",T?"text-white":"text-fg"),children:new Date(p.committed_at).toLocaleString()}),e.jsxs("div",{className:E("truncate text-[11px]",T?"text-white/70":"text-fg-3"),children:[p.message,p.author_email?` — ${p.author_email}`:""]})]},p.sha)})]})]})}function us({entry:n,canRestore:i,onRestore:o,onExit:l}){const c=Yt();return e.jsxs("div",{className:"flex items-center gap-2 border-b border-border bg-surface-muted px-3 py-2 text-[12px]",children:[e.jsx("div",{className:"min-w-0 flex-1 truncate text-fg-2",children:n?e.jsxs(e.Fragment,{children:["Viewing version from ",new Date(n.committed_at).toLocaleString(),n.author_email?` (${n.author_email})`:""," — read-only"]}):"Select a version from the list to preview it"}),e.jsxs(ue,{variant:"secondary",size:"sm",onClick:l,children:[e.jsx(aa,{className:"h-3.5 w-3.5"})," Back to current draft"]}),e.jsx(ue,{size:"sm",disabled:!i,onClick:async()=>{await c({title:"Restore this version",body:"This replaces your current editor content. Unsaved changes will be lost. The page stays unpublished until you publish again.",confirmLabel:"Restore",variant:"danger"})&&o()},children:"Restore this version"})]})}function ds(n,i){const o=[];let l=0;for(const c of ki(n,i)){const m=c.added?"added":c.removed?"removed":"context",f=c.value.split(`
`);f.length>0&&f[f.length-1]===""&&f.pop();for(const p of f)o.push({key:l++,kind:m,text:p})}return o}function Kt({oldText:n,newText:i,oldLabel:o,newLabel:l}){const c=r.useMemo(()=>ds(n,i),[n,i]),m=c.every(f=>f.kind==="context");return e.jsxs("div",{className:"flex h-full min-h-0 flex-col overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-1.5 text-[11px]",children:[e.jsxs("span",{className:"text-no-strong",children:["− ",o]}),e.jsxs("span",{className:"text-success",children:["+ ",l]})]}),e.jsx("div",{className:"flex-1 overflow-auto",children:m?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"No differences."}):e.jsx("div",{className:"min-w-max font-mono text-[12px] leading-5",children:c.map(f=>e.jsxs("div",{className:E("flex whitespace-pre px-3",f.kind==="added"&&"bg-status-soft",f.kind==="removed"&&"bg-no-soft",f.kind==="context"&&"text-fg-2"),children:[e.jsx("span",{className:E("mr-2 shrink-0 select-none",f.kind==="added"&&"text-success",f.kind==="removed"&&"text-no-strong",f.kind==="context"&&"text-fg-3"),children:f.kind==="added"?"+":f.kind==="removed"?"−":" "}),e.jsx("span",{children:f.text||" "})]},f.key))})})]})}const hs=r.lazy(()=>ra(()=>import("./CodeEditor-D4_kKZTe.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(n=>({default:n.CodeEditor}))),ve=`<!doctype html>
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
`,qe=[],fs=.75,ms=.85,sr=[{name:"compact",aliases:["compress"],hint:"[focus instructions]",description:"Summarize the conversation to free up context"}];function ps(n,i,o){if(o){const l=Math.max(0,Math.ceil((o.deadline-Date.now())/1e3));return`rate-limited — retry ${o.attempt} of ${o.max} in ${l}s…`}if(n&&mr.includes(n.name))return ii(n.name,n.detail);if(n)switch(n.name){case"write":return"writing the page…";case"edit":return"editing the page…";case"read":return`reading the page${n.detail?` (${n.detail})`:""}…`;case"grep":return`searching the page${n.detail?` for “${n.detail}”`:""}…`;case"console":return"checking the console…";case"skill":return n.detail?`loading the ${n.detail} skill…`:"loading a skill…";case"action":return`running ${n.detail??"an action"}…`;case"web_search":return n.detail?`searching the web for “${n.detail}”…`:"searching the web…";case"read_url":return n.detail?`reading ${n.detail}…`:"reading a web page…";case"database":return"updating the database…";case"bash":return"running code in the preview…";default:return`using ${n.name}…`}return i>=10?`working… (${i}s — large edits can take a minute)`:i>=3?`working… (${i}s)`:"working…"}function gs(n,i){return mr.includes(n.name)?e.jsx(Mi,{name:n.name,detail:n.detail,result:i}):e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-1.5 text-[11px] text-fg-3",children:n.name==="screenshot"?e.jsxs(e.Fragment,{children:[e.jsx(pa,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"looked at the page"})]}):n.name==="write"||n.name==="edit"?e.jsxs(e.Fragment,{children:[e.jsx(ur,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"edited the page"})]}):n.name==="skill"?e.jsxs(e.Fragment,{children:[e.jsx(ga,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["loaded the ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"unknown"})," skill"]})]}):n.name==="action"?e.jsxs(e.Fragment,{children:[e.jsx(zt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran ",e.jsx("span",{className:"font-medium text-fg-2",children:n.detail??"an action"})]})]}):n.name==="console"?e.jsxs(e.Fragment,{children:[e.jsx(zt,{className:"h-3 w-3 text-fg-3"}),e.jsx("span",{children:"checked the console"})]}):n.name==="bash"?e.jsxs(e.Fragment,{children:[e.jsx(zt,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["ran code in the preview",n.detail?e.jsxs(e.Fragment,{children:[": ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="grep"?e.jsxs(e.Fragment,{children:[e.jsx(va,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["searched the page",n.detail?e.jsxs(e.Fragment,{children:[" for ",e.jsx("span",{className:"max-w-[16rem] truncate font-medium text-fg-2",children:n.detail})]}):null]})]}):n.name==="database"?e.jsxs(e.Fragment,{children:[e.jsx(xa,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["updated the database",n.detail?` (${n.detail})`:""]})]}):n.name==="read"?e.jsxs(e.Fragment,{children:[e.jsx(hr,{className:"h-3 w-3 text-fg-3"}),e.jsxs("span",{children:["read the page",n.detail?` (${n.detail})`:""]})]}):e.jsxs(e.Fragment,{children:[e.jsx(dr,{className:"h-3 w-3"}),e.jsxs("span",{children:["used ",e.jsx("span",{className:"font-medium text-fg-2",children:n.name}),n.detail?` (${n.detail})`:""]})]})}),n.name==="screenshot"&&n.imageUrl?e.jsx("img",{src:n.imageUrl,alt:"screenshot of the live preview",className:"mt-1.5 max-h-48 max-w-full rounded-md border border-border"}):null]})}function As(){var f;const{id:n}=Wi(),i=Vi(),o=((f=i.state)==null?void 0:f.publishContinuation)===!0,l=r.useRef(0),c=r.useRef(n);!o&&n!==c.current&&(l.current+=1),c.current=n;const m=pr();return r.useEffect(()=>{o&&m({pathname:i.pathname,search:i.search,hash:i.hash},{replace:!0,state:null})},[o,m,i.pathname,i.search,i.hash]),e.jsx(vs,{pageId:n??null},l.current)}function vs({pageId:n}){var An,Pn,Dn;const i=n??"draft",o=`builder:${i}`,l=ji(o),c=pr(),m=wa(),f=Yt(),[p,T]=r.useState(!1),[D,z]=r.useState(null),O=r.useRef(D);O.current=D;const[A,k]=r.useState(ve),[d,L]=r.useState(qe),se=Sa(),Q=mi(),de={browseAvailable:pi(),workspaceAvailable:!!l.folder},{model:M,setModel:Me,thinking:oe,restoreThinking:ft,preferredThinkingRef:mt,zenModels:Ge,zenModelInfo:Ae,modelsSettled:J,searchModel:Ke,codeAssistModels:h,aeroModels:g,antigravityModels:b,modelOffered:_,modelLabel:Z,modelReady:B,aiUnavailable:q,googleUnavailable:Jt,fallbackNote:gr,googleReason:pt,zenInfoFor:vr}=se,[G,Zt]=r.useState(()=>[...Ea]),[he,gt]=r.useState(""),xe=r.useRef(null),xr=t=>{if(Jn(t)==="zen")return xe.current??(xe.current=bi()),xe.current},ee=r.useRef(null),[Pe,vt]=r.useState(""),[wr,xt]=r.useState(!1),[j,Ye]=r.useState(!1),[br,De]=r.useState(""),[yr,_e]=r.useState(""),[kr,wt]=r.useState(null),[jr,en]=r.useState(0),[bt,S]=r.useState(null),[Sr,yt]=r.useState(!1),[Er,fe]=r.useState(null),[tn,kt]=r.useState(null),[te,nn]=r.useState(!1),[Xe,rn]=r.useState("desktop"),[jt,St]=r.useState("code"),[an,Et]=r.useState(null),Ct=n!=null&&an!=null,[sn,we]=r.useState(null);r.useEffect(()=>{te||St("code")},[te]);const[Cr,Nr]=r.useState(""),[Nt,Rt]=r.useState(null),[Rr,on]=r.useState("public"),[Ie,Tt]=r.useState(null),[Tr,Lt]=r.useState(!1),[Lr,ln]=r.useState(!1),[K,Fe]=r.useState(null),[Mr,Mt]=r.useState(!1),[be,Qe]=r.useState(0),[cn,At]=r.useState(!1),[un,dn]=r.useState(0),[Pt,Je]=r.useState("live"),Ze=r.useRef(0),ye=r.useMemo(()=>URL.createObjectURL(new Blob([ar(A,{screenshot:!0})],{type:"text/html"})),[A,un]),et=r.useRef(null);r.useEffect(()=>{et.current&&et.current!==ye&&URL.revokeObjectURL(et.current),et.current=ye},[ye]);const[x,hn]=r.useState(!1),[P,tt]=r.useState(null),U=ls(n??"",!!n),I=ir(n??"",x?(P==null?void 0:P.sha)??null:null);r.useEffect(()=>{!x||!U.data||(P&&!U.data.some(t=>t.sha===P.sha)?tt(U.data[0]??null):!P&&U.data.length>0&&tt(U.data[0]))},[x,P,U.data]);function nt(){hn(!1),tt(null),Dt("preview"),_t("previous")}const[ne,Dt]=r.useState("preview"),[le,_t]=r.useState("previous"),fn=x&&P&&U.data?U.data.findIndex(t=>t.sha===P.sha):-1,Oe=fn>=0?((An=U.data)==null?void 0:An[fn+1])??null:null,rt=ir(n??"",x&&ne==="diff"&&le==="previous"?(Oe==null?void 0:Oe.sha)??null:null),[mn,pn]=r.useState(!1),It=r.useRef(null);r.useEffect(()=>()=>{It.current&&clearTimeout(It.current)},[]);function Ar(){mn||(pn(!0),U.refetch().finally(()=>{It.current=setTimeout(()=>pn(!1),2e3)}))}const He=r.useMemo(()=>I.data===void 0?null:URL.createObjectURL(new Blob([ar(I.data)],{type:"text/html"})),[I.data]),at=r.useRef(null);r.useEffect(()=>{at.current&&at.current!==He&&URL.revokeObjectURL(at.current),at.current=He},[He]);const Ue=r.useRef(null),it=r.useRef([]),gn=r.useRef(0);r.useEffect(()=>{it.current=[],gn.current=Date.now()},[ye]);const Pr=r.useRef(0),$e=r.useRef(new Map),ke=r.useRef(!1),vn=r.useRef(x);r.useEffect(()=>{vn.current=x},[x]),r.useEffect(()=>{ke.current=!1;const t=$e.current;t.forEach(a=>{window.clearTimeout(a.timer),a.reject(new Error("the live preview reloaded — read the page again before acting on it"))}),t.clear()},[ye,te,x,Pt]);function Dr(){ke.current=!1;const t=++Ze.current,a=s=>new Promise(u=>window.setTimeout(u,s));(async()=>{for(let s=0;s<5;s++){if(Je("restarting"),await a(2e3),Ze.current!==t)return;dn(u=>u+1),Je("live");for(let u=0;u<3e3&&!ke.current;u+=100)await a(100);if(Ze.current!==t||ke.current||!Ue.current)return}Je("stuck")})()}r.useEffect(()=>{function t(a){var R;if(a.source!==((R=Ue.current)==null?void 0:R.contentWindow))return;const s=a.data;if(!s)return;if(s.type==="aero-dom-ready"){ke.current=!0;return}if(s.type==="aero-dom-op-result"&&typeof s.id=="number"){const C=$e.current.get(s.id);if(!C)return;$e.current.delete(s.id),window.clearTimeout(C.timer);const $=typeof s.generation=="number"?s.generation:null;C.resolve(s.ok?{ok:!0,result:s.result,generation:$}:{ok:!1,error:s.error||"the action failed",generation:$});return}if(s.type!=="aero-console"||typeof s.ts=="number"&&s.ts<gn.current)return;const u=s.level==="info"||s.level==="warn"||s.level==="error"?s.level:"log",y=it.current;y.push({level:u,text:typeof s.text=="string"?s.text:"",ts:s.ts??Date.now()}),y.length>300&&y.splice(0,y.length-300)}return window.addEventListener("message",t),()=>window.removeEventListener("message",t)},[]);async function _r(t,a,s){var $;vn.current&&nt(),nn(!1);const u=Date.now()+1e4;for(;!ke.current||!(($=Ue.current)!=null&&$.contentWindow);){if(Date.now()>u)return{ok:!1,error:"the live preview did not finish loading",generation:null};await new Promise(w=>setTimeout(w,50))}const y=Ue.current.contentWindow,R=++Pr.current,C=t==="bash"?di(a.timeout)+5e3:t==="screenshot"?3e4:15e3;return new Promise(w=>{const v=window.setTimeout(()=>{if($e.current.delete(R),t==="bash"){Dr(),w({ok:!1,error:"the page stopped responding while running the command — most likely a loop that never yields. The preview is being restarted, which takes a few seconds, and anything the page held in memory is reset. Run something smaller, or fix the loop.",generation:null});return}w({ok:!1,error:"the live preview did not respond — read the page again and retry",generation:null})},C);$e.current.set(R,{resolve:w,reject:N=>w({ok:!1,error:N.message,generation:null}),timer:v}),y.postMessage({type:"aero-dom-op",id:R,op:t,args:a,generation:s},"*")})}const F=r.useRef(A),Y=t=>{F.current=t,k(t)},X=Ji({folderKey:o,folder:l.folder,access:l.access,html:A,htmlRef:F,setHtml:Y,isBlank:()=>F.current===ve,busy:j,onError:S}),re=r.useRef(ve),ce=r.useRef(null),st=r.useRef(qe),ot=r.useRef(null),xn=r.useRef(null),wn=r.useRef(null),me=r.useRef(null),je=r.useRef(!1),Ft=r.useRef(Si);r.useEffect(()=>{let t=!0;return gi().then(a=>Zn(a).then(s=>{t&&(Ft.current=s)})).catch(()=>{}),vi().then(a=>Zn(a).then(s=>{t&&(Ft.current=s)})).catch(()=>{}),()=>{t=!1}},[]);const bn=Ei(M,Ae),{openAi:Ir,takesFiles:Ot,attachLabel:Fr,accept:Or,requestLimit:Se,inlineLimitApplies:Ht}=bn,{attachments:Ee,converting:Ut,stage:$t,remove:Hr,clear:Ur}=Ci(t=>S(t),t=>Ai(t,bn,Z(M))),Be=Ca(M,Ae),$r=()=>{if(!he)return"Same as builder";const t=Z(he);return!J||_(he)?t:`${t} — unavailable`};r.useEffect(()=>{let t=!1;return Et(null),we(null),Fe(null),Mt(!1),gt(""),ee.current=null,xe.current=null,ce.current=null,z(null),(async()=>{let a;try{a=await Bn(i)}catch(u){t||(z(u instanceof Error?u.message:String(u)),T(!0));return}if(t)return;let s=qe;if(a&&(Y(a.html),re.current=a.html,s=Na(a.contents),L(s),st.current=s,Qe(Ra(s)),At(!1),a.model&&Me(a.model),ft(a.thinking,a.model??M),Zt(Ta(a.disabledTools,a.knownTools)),gt(a.observerModel??""),ee.current=a.zenSessionId??null),n)try{const u=await Te.getPage(n);if(t)return;Rt(u.url),on(na(u.visibility)),Et(u.html),ce.current=u.updated_at;const{html:y,supersededLocal:R}=Gi(a,u);Y(y),re.current=y,a&&R!==null&&(we(R),ut({...a,html:y,contents:s,basedOnUpdatedAt:u.updated_at,updatedAt:0}).catch(()=>{}))}catch{t||S("Failed to load page.")}t||T(!0)})(),()=>{t=!0}},[i]);const pe=r.useRef(Date.now());r.useEffect(()=>{if(!j)return;pe.current=Date.now(),en(0);const t=setInterval(()=>en(Math.round((Date.now()-pe.current)/1e3)),1e3);return()=>clearInterval(t)},[j]);const yn=()=>{if(Jn(M)==="zen")return ee.current=wi(ee.current),ee.current},ae=(t,a=G,s=he)=>{if(D!==null)return Promise.resolve();const u=F.current;return ut({key:i,pageId:n,html:u,contents:t,model:M||null,thinking:mt.current,disabledTools:a,knownTools:Wt(),observerModel:s||void 0,zenSessionId:ee.current??void 0,basedOnUpdatedAt:ce.current??void 0,updatedAt:0}).then(()=>{re.current=u,st.current=t}).catch(()=>{})},kn={sessionKey:i,pageId:n,contents:d,model:M,thinking:oe,disabledTools:G,observerModel:he,modelsSettled:J,modelOffered:_,zenInfoFor:vr},W=r.useRef(kn);W.current=kn;const jn=r.useRef(j);jn.current=j,r.useEffect(()=>()=>{if(O.current!==null||F.current===re.current&&W.current.contents===st.current)return;const{sessionKey:t,pageId:a,contents:s,model:u,thinking:y,disabledTools:R,observerModel:C}=W.current;ut({key:t,pageId:a,html:F.current,contents:s,model:u||null,thinking:y,disabledTools:R,knownTools:Wt(),observerModel:C||void 0,zenSessionId:ee.current??void 0,basedOnUpdatedAt:ce.current??void 0,updatedAt:0}).catch(()=>{})},[]);const Br=Ht&&(Ee.length>0||d.some(t=>t.parts.some(a=>a.inlineData))),Ce=r.useMemo(()=>zn(d,Ee,Pe),[d,Ee,Pe]),zr=Ht&&Ce>Se,Sn=Ce/Se>=fs,En=be/Be>=ms,Cn=Math.max(0,100-Math.round(be/Be*100)),Nn=Ya(Be),Rn=cn?be:void 0,lt=La(Rn,Be);async function Tn(t){var Fn,On;const a=t===void 0,s=(t??Pe).trim(),u=a?Ee:[];if(!s&&u.length===0||j||!B||Ut.length>0)return;const y=a?Ce:zn(d,u,s);if(Ht&&y>Se){S(`This message is too large to send (~${ge(y)} — the limit for ${Z(M)} is ~${ge(Se)}). `+(u.length>0?"Remove an attachment, or run /compact first.":"Run /compact first."));return}if(s.startsWith("/")){const ie=s.split(/\s+/)[0];if(!Xa(sr,ie)){S(`Unknown command: ${ie} — available: /compact`);return}}const R=Qa(s);if(R){vt(""),await qr(R.instructions);return}if(lt){S(lt);return}if(je.current)return;je.current=!0;let C,$,w=null;try{C=await l.forTurn(),C&&await X.sync(C),w=X.takeOutsideEdit(),$=C?await Ja(C,(Fn=X.current())==null?void 0:Fn.path):null}finally{je.current=!1}const v=W.current.contents,N=Yn(v,$),V=[xi()];N&&V.push(N),w&&V.push(ht(`The page was changed outside Aero since your last turn: \`${w.path}\`, the file it is linked to, was edited, and the page now holds that version. What changed:
\`\`\`diff
${w.changes}
\`\`\`
Read the page before you edit it.`));for(const ie of u)V.push(Za(ie.name,ie.mimeType)),V.push(ie.kind==="inline"?{inlineData:{mimeType:ie.mimeType,data:ie.data??""}}:{text:ie.text??""});s&&V.push({text:s});const _n=/\b(slides?|decks?|presentations?|powerpoint|pptx?|pitch(?:es)?)\b/i.test(s),ta=/\bdeck-container\b|class="slide slide--/.test(F.current);F.current===ve?V.push(ht(`The HTML document is still the untouched blank starter template — it contains no user content. Do not call \`read\` on it. If this message is a change request, load the \`${_n?"aero-slides":"aero-app-style"}\` skill, then write the first draft directly with \`write\`.`)):ta?V.push(ht("The current document is an aero slide deck. Load the `aero-slides` skill (if not already loaded in this conversation) and follow its layout catalogue and navigation engine when editing.")):_n&&V.push(ht("This request is about a slide deck / presentation. Load the `aero-slides` skill before making changes, and follow its layout catalogue and navigation engine."));const In=[...v,{role:"user",parts:V}];(On=ot.current)==null||On.followOutput(),L(In),a&&(vt(""),Ur()),Li(),await Ln(In,C)}async function Ln(t,a){const s=new AbortController;me.current=s,Ye(!0),De(""),_e(""),S(null),yt(!1),fe(null);const u=W.current.sessionKey;Fe(null);const y=F.current,R=Date.now(),C=yn();let $=t;try{const w=await si({model:M,contents:t,html:()=>F.current,skills:Ft.current,pageId:n,consoleLogs:()=>it.current,domOp:_r,browse:Q,workspace:a?{root:a,owner:`builder:${u}`,log:Oi}:void 0,generationConfig:Xn(oe,M),thinking:oe,zenModelInfo:Ae,zenSession:C,searchModel:Ke,disabledTools:G,signal:s.signal,callbacks:{onText:v=>{pe.current=Date.now(),fe(null),De(N=>N+v)},onThought:v=>{pe.current=Date.now(),fe(null),_e(N=>N+v)},onUsage:v=>{const N=v.totalTokenCount??v.promptTokenCount;typeof N=="number"&&(Qe(N),At(!0))},onTool:(v,N)=>{pe.current=Date.now(),fe(null),wt({name:v,detail:N})},onHtml:v=>Y(v),onContents:v=>{$=v,pe.current=Date.now(),wt(null),L(v),De(""),_e("")},onStreamReset:()=>{De(""),_e(""),fe(null)},onRetry:(v,N,V)=>{pe.current=Date.now(),fe({attempt:v,max:N,deadline:Date.now()+V*1e3})}}});L(w),await ae(w),Date.now()-R>1e4&&er({ok:!0});try{await Vr(w,y,u,s.signal)}catch{}}catch(w){if(w instanceof DOMException&&w.name==="AbortError")await ae($);else{const v=w instanceof Re?oi(w.body):null,N=w instanceof Re?w.message==="reauth_required"?"Your Code Assist login has expired or is invalid. Reconnect it in Settings.":v?v.message:`AI request failed: ${w.message}`:"AI request failed.";v&&kt(v),S(N),yt(!(w instanceof Re&&w.message==="reauth_required")),er({ok:!1,error:N}),await ae($)}}finally{me.current===s&&(me.current=null),Ye(!1),De(""),_e(""),wt(null),fe(null)}}function Wr(){var t;(t=me.current)==null||t.abort()}async function ct(){var t;if(!(j||!B||d.length===0)){if(lt){S(lt);return}if(!je.current){je.current=!0;try{(t=ot.current)==null||t.followOutput();const a=await l.forTurn();if(a&&await X.sync(a),W.current.contents!==d)return;let s=null;const u=X.pendingOutsideEdit();if(u?s=`${u} was edited outside Aero since the last turn`:!a&&Yn(d,null)&&(s="Aero no longer has the workspace folder"),s){S(`${s}. Send a message instead of retrying, so Aero is told.`);return}await Ln(d,a)}finally{je.current=!1}}}}async function Vr(t,a,s,u){if(W.current.sessionKey!==s||W.current.disabledTools.includes(qt)||u.aborted||F.current===a||!Wn(t))return;const{observerModel:y,model:R,modelsSettled:C,modelOffered:$,zenInfoFor:w}=W.current,v=y&&(!C||$(y))?y:R;Mt(!0);try{const N=await hi({model:v,request:fi(t),html:F.current,consoleEntries:it.current,zenModelInfo:w(v),zenSession:xr(v),signal:u});N&&W.current.sessionKey===s&&Fe(N)}finally{Mt(!1)}}async function qr(t){if(j||!B)return;if(d.length===0){S("Nothing to compact — the conversation is empty.");return}const a=new AbortController;me.current=a,Ye(!0),ln(!0),S(null);try{const s=await li({model:M,profile:Qn,contents:d,instructions:t||void 0,generationConfig:Xn("off",M),zenSession:yn(),signal:a.signal});await Ne(ci(s,Qn))}catch(s){s instanceof DOMException&&s.name==="AbortError"||S(s instanceof Re?`Compaction failed: ${s.message}`:"Compaction failed.")}finally{me.current===a&&(me.current=null),Ye(!1),ln(!1)}}async function Ne(t){L(t),Qe(ui(be,cn,d,t)),await ae(t)}async function Gr(t){if(j)return;const a=d;if(!(!await f({title:"Delete from history?",body:t.kind==="tool"||t.kind==="grouped-search"?`Removes ${t.refs.length===1?"this tool call and its result":`these ${t.refs.length} tool calls and their results`} from the context sent to the model. The page itself is not affected.`:t.kind==="thought"?"Clears this reasoning from the context sent to the model. The page itself is not affected.":"Removes this record from the context sent to the model. The page itself is not affected.",confirmLabel:"Delete",variant:"danger"})||jn.current||W.current.contents!==a))switch(t.kind){case"user":case"compact":await Ne(ri(d,t.contentIndex));break;case"thought":await Ne(ni(d,t.refs));break;case"tool":case"grouped-search":await Ne(ti(d,t.refs));break;case"assistant":await Ne(ei(d,t.refs));break}}async function Kr(t,a){j||t.kind!=="user"&&t.kind!=="assistant"||W.current.contents===d&&await Ne(ai(d,t.refs,a))}const ze=ba({mutationFn:async t=>{const a=F.current;if(n){const u=await Te.patchPage(n,{html:a});return{id:n,isNew:!1,url:null,html:a,visibility:Rr,updatedAt:u.updated_at}}const s=await Te.createPage(a,{alias:(t==null?void 0:t.alias)||null,visibility:(t==null?void 0:t.visibility)??"public",grants:(t==null?void 0:t.grants)??[]});return{id:s.id,isNew:!0,url:s.url,html:a,visibility:(t==null?void 0:t.visibility)??"public",updatedAt:s.updated_at}},onSuccess:async({id:t,isNew:a,url:s,html:u,visibility:y,updatedAt:R})=>{if(S(null),Lt(!1),on(y),re.current=u,Et(u),ce.current=R??ce.current,we(null),m.invalidateQueries({queryKey:["pages"]}),m.invalidateQueries({queryKey:["page",t]}),m.invalidateQueries({queryKey:["page-history",t]}),a)await ut({key:t,pageId:t,html:F.current,contents:d,model:M||null,thinking:oe,disabledTools:G,knownTools:Wt(),observerModel:he||void 0,zenSessionId:ee.current??void 0,basedOnUpdatedAt:ce.current??void 0,updatedAt:0}).catch(()=>{}),await Vt("draft").catch(()=>{}),await _i("builder:draft",`builder:${t}`).catch(()=>{}),await Ii("builder:draft",`builder:${t}`).catch(()=>{}),Rt(s),Tt({url:s??`/p/${t}`,id:t,isNew:!0,visibility:y});else{const C=Nt??`/p/${t}`;Rt(C),Tt({url:C,id:t,isNew:!1,visibility:y})}},onError:t=>{t instanceof Re&&t.body&&typeof t.body=="object"&&"reason"in t.body?S(`Publish failed: ${t.message} (${String(t.body.reason)})`):t instanceof Re?S(`Publish failed: ${t.message}`):S("Publish failed.")}});async function Yr(){if(await f({title:"Reset builder",body:n?"Clears the conversation and restores the HTML from the published page.":"Clears the conversation and the draft HTML. This cannot be undone.",confirmLabel:"Reset",variant:"danger"}))if(await Vt(i).catch(()=>{}),await tr(o).catch(()=>{}),L(qe),st.current=qe,Qe(0),At(!1),S(null),Fe(null),ee.current=null,xe.current=null,n)try{const a=await Te.getPage(n);Y(a.html),re.current=a.html,ce.current=a.updated_at,we(null)}catch{S("Failed to reload page.")}else Y(ve),re.current=ve}async function Xr(){if(F.current!==re.current){if(!await f({title:"Unpublished changes",body:"You have unpublished changes to this page. Publish them first, or discard them and start a new page.",confirmLabel:"Discard & start new",variant:"danger"}))return;re.current=F.current}const t=await Bn("draft").catch(()=>{});t&&(t.contents.length>0||t.html!==ve)&&await f({title:"Unfinished draft",body:"You have an unfinished draft. Start fresh and discard it, or resume where you left off?",confirmLabel:"Start fresh",cancelLabel:"Resume draft",variant:"danger"})&&(await Vt("draft").catch(()=>{}),await Fi("builder:draft").catch(()=>{}),await tr("builder:draft").catch(()=>{})),c("/")}async function Qr(t){var u;const a=(u=t.target.files)==null?void 0:u[0];if(t.target.value="",!a)return;const s=await a.text();Y(s),S(null),ae(d)}function Jr(t){const a=Array.from(t.target.files??[]);t.target.value="",$t(a)}const Bt=r.useMemo(()=>Ma(d),[d]),We=d[d.length-1],Zr=(We==null?void 0:We.role)==="user"&&We.parts.some(Aa),Mn=!j&&!!We&&!Wn(d)&&!Zr,ea=((Pn=Bt[Bt.length-1])==null?void 0:Pn.kind)==="user";return p?D!==null?e.jsx(Pa,{what:"This page's chat and draft",reason:D}):e.jsxs("div",{className:"flex min-h-[480px] flex-1 flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(Da,{choice:se,disabled:j}),e.jsxs("button",{type:"button",onClick:()=>nn(t=>!t),disabled:x,className:E("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px] disabled:opacity-50",te?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(ur,{className:"h-3.5 w-3.5"})," Code"]}),e.jsxs("div",{className:E("flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",(te||x&&ne!=="preview")&&"opacity-50"),children:[e.jsxs("button",{type:"button",onClick:()=>rn("desktop"),disabled:te||x&&ne!=="preview",title:"Preview at full width",className:E("inline-flex items-center gap-1 rounded-sm px-2 py-1",Xe==="desktop"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(ia,{className:"h-3.5 w-3.5"})," Desktop"]}),e.jsxs("button",{type:"button",onClick:()=>rn("mobile"),disabled:te||x&&ne!=="preview",title:"Preview at phone width",className:E("inline-flex items-center gap-1 rounded-sm px-2 py-1",Xe==="mobile"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:[e.jsx(sa,{className:"h-3.5 w-3.5"})," Mobile"]})]}),e.jsxs("button",{type:"button",onClick:()=>{Ze.current++,Je("live"),dn(t=>t+1)},disabled:te||x,title:"Reload the preview (recovers a broken or navigated-away preview)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(Hn,{className:"h-3.5 w-3.5"})," Reload"]}),e.jsxs("button",{type:"button",onClick:()=>{var t;return(t=xn.current)==null?void 0:t.click()},disabled:j||x,title:"Load an .html file into the builder (replaces the current document)",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(oa,{className:"h-3.5 w-3.5"})," Upload"]}),e.jsx("input",{ref:xn,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:Qr}),e.jsxs("button",{type:"button",onClick:Yr,disabled:j||x,className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(la,{className:"h-3.5 w-3.5"})," Reset"]}),n?e.jsxs("button",{type:"button",onClick:Xr,disabled:j||x,title:"Start a new page in the draft builder",className:"inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-[12px] text-fg-2 hover:text-fg disabled:opacity-50",children:[e.jsx(ca,{className:"h-3.5 w-3.5"})," New"]}):null,n?e.jsxs("button",{type:"button",onClick:()=>x?nt():hn(!0),title:"Browse previously published versions of this page",className:E("inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[12px]",x?"bg-ink text-white":"bg-surface text-fg-2 hover:text-fg"),children:[e.jsx(cr,{className:"h-3.5 w-3.5"})," History"]}):null,e.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[Nt?e.jsxs("a",{href:Nt,target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 text-[12px] text-fg-2 hover:text-fg",children:["View live ",e.jsx(ua,{className:"h-3 w-3"})]}):null,e.jsxs(ue,{size:"sm",onClick:()=>n?ze.mutate(void 0):Lt(!0),disabled:j||ze.isPending||x,children:[ze.isPending?e.jsx(da,{className:"h-3.5 w-3.5 animate-spin"}):e.jsx(lr,{className:"h-3.5 w-3.5"}),n?"Publish update":"Publish"]})]})]}),bt&&!x?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-no/30 bg-no-soft px-3 py-2 text-[12px] text-no-strong",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:bt}),Sr&&!j?e.jsxs("button",{type:"button",onClick:()=>void ct(),className:"inline-flex shrink-0 items-center gap-1 rounded border border-no/30 bg-surface px-2 py-0.5 text-[11px] font-medium text-no-strong hover:bg-no-soft",children:[e.jsx(Hn,{className:"h-3 w-3"})," Retry"]}):null]}):null,sn!==null&&!x?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1 break-words",children:"This page was updated outside this browser — loaded the latest published version."}),e.jsxs("button",{type:"button",onClick:()=>{Y(sn),we(null),ae(d)},className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg hover:bg-surface-muted",children:[e.jsx(ha,{className:"h-3 w-3"})," Keep my local copy"]}),e.jsx("button",{type:"button",onClick:()=>we(null),"aria-label":"Dismiss",className:"shrink-0 rounded p-0.5 text-fg-3 hover:text-fg",children:e.jsx(Un,{className:"h-3 w-3"})})]}):null,(q||Jt)&&!x?e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[q?"AI is unavailable — ":"Code Assist models are unavailable — ",pt==="no_project"?e.jsxs(e.Fragment,{children:["no Code Assist project selected for your account."," ",e.jsx(qi,{to:"/settings",className:"underline hover:text-fg",children:"Choose one in Settings"}),"."]}):pt==="reauth_required"?"your Code Assist login has expired or is invalid. Reconnect it in Settings.":"could not load models. Try again later.",Jt?` ${gr}`:null]}),pt==="no_project"?e.jsx(Hi,{}):null]}):null,Mn&&!bt&&!ea&&!x?e.jsxs("div",{className:"flex items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsx("span",{className:"min-w-0 flex-1",children:"Aero stopped before finishing — resume to keep going."}),e.jsxs("button",{type:"button",onClick:()=>void ct(),disabled:q||!B,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx($n,{className:"h-3 w-3"})," Resume"]})]}):null,e.jsxs("div",{className:"flex min-h-0 flex-1 gap-4",children:[e.jsx("div",{className:E("flex w-[380px] shrink-0 flex-col rounded-lg border border-border bg-surface",wr&&"ring-2 ring-ink"),onDragOver:t=>{x||(t.preventDefault(),xt(!0))},onDragLeave:()=>xt(!1),onDrop:t=>{x||(t.preventDefault(),xt(!1),$t(Array.from(t.dataTransfer.files)))},children:x?e.jsx(cs,{entries:U.data,isLoading:U.isLoading,isError:U.isError,isFetching:U.isFetching||mn,selectedSha:(P==null?void 0:P.sha)??null,onSelect:tt,onRefresh:Ar}):e.jsx(_a,{ref:ot,chat:Bt,busy:j,streamText:br,streamThought:yr,busyLabel:Lr?"compacting conversation…":Mr?"reviewing the page…":ps(kr,jr,Er),emptyState:e.jsxs(e.Fragment,{children:["Describe the page you want to build.",e.jsx("br",{}),"Aero edits the HTML and you preview it live.",e.jsx("br",{}),"Or upload an existing .html file to start from."]}),renderToolItem:t=>gs(t,Ka(d,t.refs[0])),afterMessages:K?e.jsxs("div",{className:"rounded-md border border-border bg-surface-muted px-3 py-2 text-[12px] text-fg-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[K.kind==="issues"?e.jsx(ma,{className:"h-3.5 w-3.5 shrink-0 text-warning"}):K.kind==="pass"?e.jsx(or,{className:"h-3.5 w-3.5 shrink-0 text-success"}):e.jsx(hr,{className:"h-3.5 w-3.5 shrink-0 text-fg-3"}),e.jsx("span",{className:"min-w-0 flex-1",children:K.kind==="issues"?e.jsxs("span",{className:"font-medium text-fg-2",children:["Review found"," ",K.findings.length===1?"1 thing":`${K.findings.length} things`," ","to check"]}):K.kind==="pass"?e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review passed"})," — nothing to flag on this change."]}):e.jsxs("span",{className:"text-fg-3",children:[e.jsx("span",{className:"font-medium text-fg-2",children:"Review didn’t run."})," The build finished normally — only the review failed."]})}),e.jsx("button",{type:"button",onClick:()=>Fe(null),"aria-label":"Dismiss review",title:"Dismiss review",className:"shrink-0 rounded p-0.5 text-fg-3 hover:bg-surface hover:text-fg-2",children:e.jsx(Un,{className:"h-3 w-3"})})]}),K.kind==="issues"?e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-1.5 space-y-1 pl-5",children:K.findings.map((t,a)=>e.jsx("li",{className:"list-disc text-fg-2",children:t},a))}),e.jsx("div",{className:"mt-2 pl-5",children:e.jsxs("button",{type:"button",onClick:()=>void Tn(Ga(K.findings)),disabled:j||q||!B,className:"inline-flex shrink-0 items-center gap-1 rounded border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-fg-2 hover:bg-surface-muted disabled:opacity-50",children:[e.jsx($n,{className:"h-3 w-3"})," Fix these"]})})]}):null]}):null,canResume:Mn,resumeDisabled:q||!B,onResume:()=>void ct(),onSaveItemEdit:(t,a)=>void Kr(t,a),onDeleteItem:t=>void Gr(t),input:Pe,onInputChange:vt,onSend:()=>void Tn(),onStop:Wr,composerDisabled:j||q||!B,sendDisabled:q||!B||Ut.length>0||!Pe.trim()&&Ee.length===0||zr,placeholder:q?"AI unavailable":!B&&J?"Pick a model to continue — the last one is no longer available":"Ask Aero to build or change something…",slashCommands:sr,composerMeta:e.jsxs("div",{className:"flex min-w-0 items-center gap-2 text-[11px] text-fg-3",children:[Br?e.jsx("span",{className:E("tabular truncate",Sn&&"font-medium text-no-strong"),title:`Estimated request size with attached files: ${ge(Ce)} of ${ge(Se)} — requests over that are rejected`,children:Sn?`${ge(Ce)} / ${ge(Se)}`:ge(Ce)}):null,e.jsx("span",{className:E("tabular truncate",En&&"font-medium text-no-strong"),title:`Approximate context window usage: ${Kn(be)} of ${Nn} tokens (${Cn}% left) — ${qa(Rn,Be)}`,children:En?`${Kn(be)} / ${Nn}`:`${Cn}% left`})]}),attachmentsBar:e.jsx(Ti,{attachments:Ee,converting:Ut,onRemove:Hr}),composerLeading:e.jsxs("div",{className:"flex shrink-0 items-center gap-0.5",children:[e.jsxs(Ia,{children:[e.jsx(Fa,{asChild:!0,children:e.jsxs(ue,{variant:"ghost",size:"sm","aria-label":"Which tools the agent may use",title:"Which tools the agent may use",className:E(Vn,"relative"),children:[e.jsx(dr,{className:"h-3.5 w-3.5"}),G.length>0?e.jsx("span",{className:"absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-status"}):null]})}),e.jsx(Oa,{className:"w-60",children:Ha.filter(t=>t.id!=="workspace"||l.supported).map(t=>e.jsxs(r.Fragment,{children:[e.jsx(Ua,{checked:!t.names.some(a=>G.includes(a)),disabled:!!qn(t.names,de),onCheckedChange:a=>{const s=a?G.filter(u=>!t.names.includes(u)):[...new Set([...G,...t.names])];Zt(s),ae(d,s)},children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:"text-[11px] text-fg-3",children:qn(t.names,de)??t.hint})]})}),t.names.includes(qt)&&!G.includes(qt)?e.jsxs($a,{children:[e.jsx(Ba,{children:e.jsxs("span",{className:"flex flex-col",children:[e.jsx("span",{children:"Reviewer model"}),e.jsx("span",{className:"text-[11px] text-fg-3",children:$r()})]})}),e.jsx(za,{className:"max-h-72 w-56 overflow-y-auto",children:e.jsxs(Wa,{value:he,onValueChange:a=>{gt(a),ae(d,G,a)},children:[e.jsx(Ve,{value:"",children:"Same as builder"}),b.length>0?e.jsxs(e.Fragment,{children:[e.jsx(dt,{children:"Antigravity"}),b.map(a=>e.jsx(Ve,{value:a,children:Va(a)},a))]}):null,h.length>0?e.jsxs(e.Fragment,{children:[e.jsx(dt,{children:"Code Assist"}),h.map(a=>e.jsx(Ve,{value:a,children:a},a))]}):null,g.length>0?e.jsxs(e.Fragment,{children:[e.jsx(dt,{children:"Aero"}),g.map(a=>e.jsx(Ve,{value:a,children:a},a))]}):null,Ge.length>0?e.jsxs(e.Fragment,{children:[e.jsx(dt,{children:"Free · opencode zen"}),Ge.map(a=>e.jsx(Ve,{value:a.id,children:a.name},a.id))]}):null]})})]}):null]},t.id))})]}),Ir&&!Ot?null:e.jsxs(e.Fragment,{children:[e.jsx(ue,{variant:"ghost",size:"sm",onClick:()=>{var t;return(t=wn.current)==null?void 0:t.click()},disabled:j||q||!B,title:Ot?`Attach ${Fr}`:"Attach a file (image, PDF, audio, video, PowerPoint, Excel, or text)",className:Vn,children:e.jsx(fa,{className:"h-3.5 w-3.5"})}),e.jsx("input",{ref:wn,type:"file",multiple:!0,hidden:!0,...Ot?{accept:Or}:{},onChange:Jr})]}),e.jsx(Ni,{workspace:l,disabled:j,linkedPath:(Dn=X.link)==null?void 0:Dn.path,menuItems:X.link?e.jsxs(Gn,{className:"pl-2",onSelect:()=>void X.unlink(),children:["Unlink ",X.link.path]}):e.jsx(Gn,{className:"pl-2",onSelect:()=>void X.linkTo(),children:"Link the page to a file…"})}),e.jsx(Ri,{codeAssistModels:J?h:void 0,disabled:j||q||!B,onText:t=>{var a;return(a=ot.current)==null?void 0:a.insertAtCaret(t)},onError:t=>{yt(!1),S(t)}})]}),onPasteFiles:t=>void $t(t)})}),e.jsx("div",{className:"flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-border bg-surface",children:x?e.jsxs(e.Fragment,{children:[e.jsx(us,{entry:P,canRestore:!!P&&I.data!==void 0,onRestore:()=>{I.data!==void 0&&(Y(I.data),ae(d)),nt()},onExit:nt}),P?e.jsxs("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>Dt("preview"),className:E("rounded-sm px-2 py-1",ne==="preview"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Preview"}),e.jsx("button",{type:"button",onClick:()=>Dt("diff"),className:E("rounded-sm px-2 py-1",ne==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]}),ne==="diff"?e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>_t("previous"),className:E("rounded-sm px-2 py-1",le==="previous"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Previous version"}),e.jsx("button",{type:"button",onClick:()=>_t("draft"),className:E("rounded-sm px-2 py-1",le==="draft"?"bg-surface-muted text-fg":"text-fg-3 hover:text-fg-2"),children:"vs Current draft"})]}):null]}):null,ne==="diff"&&P?le==="previous"&&!Oe?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"This is the first published version — nothing to compare it against."}):le==="previous"&&rt.isLoading||I.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading diff…"}):le==="previous"&&rt.isError||I.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load diff."}):le==="previous"&&rt.data!==void 0&&I.data!==void 0?e.jsx(Kt,{oldText:rt.data,newText:I.data,oldLabel:`Version from ${new Date(Oe.committed_at).toLocaleString()}`,newLabel:`Version from ${new Date(P.committed_at).toLocaleString()}`}):le==="draft"&&I.data!==void 0?e.jsx(Kt,{oldText:A,newText:I.data,oldLabel:"Current draft",newLabel:`Version from ${new Date(P.committed_at).toLocaleString()}`}):null:ne==="preview"?I.isLoading?e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Loading version…"}):I.isError?e.jsx("div",{className:"p-4 text-[12px] text-no-strong",children:"Failed to load this version."}):He?e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:e.jsx("iframe",{title:"historic version preview",src:He,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:E("h-full bg-white",Xe==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")})}):e.jsx("div",{className:"p-4 text-[12px] text-fg-3",children:"Select a version from the list to preview it."}):null]}):te?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center gap-2 border-b border-border px-3 py-1.5",children:e.jsxs("div",{className:"flex items-center gap-1 rounded-md border border-border bg-surface p-0.5 text-[11px]",children:[e.jsx("button",{type:"button",onClick:()=>St("code"),className:E("rounded-sm px-2 py-1",jt==="code"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Code"}),e.jsx("button",{type:"button",onClick:()=>St("diff"),disabled:!Ct,title:Ct?void 0:"Diff becomes available once this page has been published",className:E("rounded-sm px-2 py-1 disabled:opacity-50",jt==="diff"?"bg-ink text-white":"text-fg-2 hover:text-fg"),children:"Diff"})]})}),jt==="diff"&&Ct?e.jsx(Kt,{oldText:an,newText:A,oldLabel:"Last published version",newLabel:"Current draft"}):e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"p-3 text-[12px] text-fg-3",children:"Loading editor…"}),children:e.jsx(hs,{value:A,onChange:Y,language:"html",className:"flex-1 overflow-auto"})})]}):e.jsx("div",{className:"flex h-full w-full justify-center overflow-auto bg-surface-muted",children:Pt==="restarting"?e.jsx("div",{className:"self-center text-[12px] text-fg-3",children:"Restarting the preview…"}):Pt==="stuck"?e.jsx("div",{className:"max-w-sm self-center px-6 text-center text-[12px] text-fg-2",children:"The preview did not come back: the page is still stuck in its loop inside the browser. Reload this page to end it, once the reply has finished so that it is saved."}):e.jsx("iframe",{ref:Ue,title:"preview",src:ye,sandbox:"allow-scripts allow-modals allow-forms allow-popups",className:E("h-full bg-white",Xe==="mobile"?"w-[390px] shrink-0 border-x border-border":"w-full flex-1")},un)})})]}),Tr?e.jsx(os,{initialAlias:Cr,busy:ze.isPending,onCancel:()=>Lt(!1),onPublish:t=>{Nr(t.alias),ze.mutate(t)}}):null,Ie?e.jsx(ss,{url:Ie.url,isNew:Ie.isNew,visibility:Ie.visibility,onClose:()=>{const t=Ie;Tt(null),t.isNew&&c(`/builder/${t.id}`,{replace:!0,state:{publishContinuation:!0}})}}):null,tn?e.jsx(zi,{info:tn,onEnabled:()=>{kt(null),S(null),ct()},onClose:()=>kt(null)}):null]}):e.jsx("div",{className:"text-fg-3",children:"Loading…"})}export{As as BuilderPage};
