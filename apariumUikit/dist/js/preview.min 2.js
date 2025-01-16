/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */(function(y){typeof define=="function"&&define.amd?define("uikittest",y):y()})(function(){"use strict";const y=/\B([A-Z])/g,tt=p(t=>t.replace(y,"-$1").toLowerCase()),C=p(t=>t.charAt(0).toUpperCase()+t.slice(1));function O(t,n){var e;return(e=t==null?void 0:t.startsWith)==null?void 0:e.call(t,n)}const{isArray:k,from:nt}=Array;function N(t){return typeof t=="function"}function $(t){return t!==null&&typeof t=="object"}function z(t){return $(t)&&t===t.window}function F(t){return P(t)===9}function M(t){return P(t)>=1}function P(t){return!z(t)&&$(t)&&t.nodeType}function f(t){return typeof t=="string"}function q(t){return typeof t=="number"}function et(t){return q(t)||f(t)&&!isNaN(t-parseFloat(t))}function A(t){return t===void 0}function v(t){return parseFloat(t)||0}function l(t){return t&&c(t)[0]}function c(t){return M(t)?[t]:Array.from(t||[]).filter(M)}function it(t,n){return t.reduce((e,i)=>e+v(N(n)?n(i):i[n]),0)}function p(t){const n=Object.create(null);return(e,...i)=>n[e]||(n[e]=t(e,...i))}function B(t,...n){for(const e of c(t)){const i=b(n).filter(r=>!D(e,r));i.length&&e.classList.add(...i)}}function rt(t,...n){for(const e of c(t)){const i=b(n).filter(r=>D(e,r));i.length&&e.classList.remove(...i)}}function D(t,n){return[n]=b(n),c(t).some(e=>e.classList.contains(n))}function b(t){return t?k(t)?t.map(b).flat():String(t).split(" ").filter(Boolean):[]}function T(t,n,e){var i;if($(n)){for(const r in n)T(t,r,n[r]);return}if(A(e))return(i=l(t))==null?void 0:i.getAttribute(n);for(const r of c(t))N(e)&&(e=e.call(r,T(r,n))),e===null?ot(r,n):r.setAttribute(n,e)}function ot(t,n){c(t).forEach(e=>e.removeAttribute(n))}function st(t){var n;return(n=l(t))==null?void 0:n.parentElement}function ct(t,n){return c(t).filter(e=>H(e,n))}function H(t,n){return c(t).some(e=>e.matches(n))}function ut(t,n){t=l(t);const e=t?nt(t.children):[];return n?ct(e,n):e}function U(t,n){return n?c(t).indexOf(l(n)):ut(st(t)).indexOf(t)}function at(t,n){return l(I(t,l(n),"querySelector"))}function _(t,n){return c(I(t,l(n),"querySelectorAll"))}const lt=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,ft=/(\([^)]*\)|[^,])+/g,dt=p(t=>{let n=!1;if(!t||!f(t))return{};const e=[];for(let i of t.match(ft))i=i.trim().replace(lt,"$1 *"),n||(n=["!","+","~","-",">"].includes(i[0])),e.push(i);return{selector:e.join(","),selectors:e,isContextSelector:n}}),pt=/(\([^)]*\)|\S)*/,W=p(t=>{t=t.slice(1).trim();const[n]=t.match(pt);return[n,t.slice(n.length+1)]});function I(t,n=document,e){const i=dt(t);if(!i.isContextSelector)return i.selector?j(n,e,i.selector):t;t="";const r=i.selectors.length===1;for(let o of i.selectors){let u,s=n;if(o[0]==="!"&&([u,o]=W(o),s=n.parentElement.closest(u),!o&&r)||s&&o[0]==="-"&&([u,o]=W(o),s=s.previousElementSibling,s=H(s,u)?s:null,!o&&r))return s;if(s){if(r)return o[0]==="~"||o[0]==="+"?(o=`:scope > :nth-child(${U(s)+1}) ${o}`,s=s.parentElement):o[0]===">"&&(o=`:scope ${o}`),j(s,e,o);t+=`${t?",":""}${ht(s)} ${o}`}}return F(n)||(n=n.ownerDocument),j(n,e,t)}function j(t,n,e){try{return t[n](e)}catch{return null}}function ht(t){const n=[];for(;t.parentNode;){const e=T(t,"id");if(e){n.unshift(`#${mt(e)}`);break}else{let{tagName:i}=t;i!=="HTML"&&(i+=`:nth-child(${U(t)+1})`),n.unshift(i),t=t.parentNode}}return n.join(" > ")}function mt(t){return f(t)?CSS.escape(t):""}function h(...t){let[n,e,i,r,o=!1]=G(t);r.length>1&&(r=kt(r)),o!=null&&o.self&&(r=$t(r)),i&&(r=yt(i,r));for(const u of e)for(const s of n)s.addEventListener(u,r,o);return()=>gt(n,e,r,o)}function gt(...t){let[n,e,,i,r=!1]=G(t);for(const o of e)for(const u of n)u.removeEventListener(o,i,r)}function G(t){return t[0]=bt(t[0]),f(t[1])&&(t[1]=t[1].split(" ")),N(t[2])&&t.splice(2,0,!1),t}function yt(t,n){return e=>{const i=t[0]===">"?_(t,e.currentTarget).reverse().find(r=>r.contains(e.target)):e.target.closest(t);i&&(e.current=i,n.call(this,e),delete e.current)}}function kt(t){return n=>k(n.detail)?t(n,...n.detail):t(n)}function $t(t){return function(n){if(n.target===n.currentTarget||n.target===n.current)return t.call(null,n)}}function J(t){return t&&"addEventListener"in t}function vt(t){return J(t)?t:l(t)}function bt(t){return k(t)?t.map(vt).filter(Boolean):f(t)?_(t):J(t)?[t]:c(t)}const wt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0};function d(t,n,e,i){const r=c(t);for(const o of r)if(f(n)){if(n=xt(n),A(e))return getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,et(e)&&!wt[n]?`${e}px`:e||q(e)?e:"",i)}else if(k(n)){const u={};for(const s of n)u[s]=d(o,s);return u}else if($(n))for(const u in n)d(o,u,n[u],e);return r[0]}const xt=p(t=>{if(O(t,"--"))return t;t=tt(t);const{style:n}=document.documentElement;if(t in n)return t;for(const e of["webkit","moz"]){const i=`-${e}-${t}`;if(i in n)return i}}),St=Et("prepend");function Et(t){return function(n,e){var i;const r=c(f(e)?L(e):e);return(i=Nt(n))==null||i[t](...r),Q(r)}}const Ct=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function L(t){const n=Ct.exec(t);if(n)return document.createElement(n[1]);const e=document.createElement("template");return e.innerHTML=t.trim(),Q(e.content.childNodes)}function Q(t){return t.length>1?t:t[0]}function Nt(t,n){return X(t)?l(L(t)):at(t,n)}function V(t,n){return X(t)?c(L(t)):_(t,n)}function X(t){return f(t)&&O(t.trim(),"<")}const At={width:["left","right"],height:["top","bottom"]};Z("height"),Z("width");function Z(t){const n=C(t);return(e,i)=>{if(A(i)){if(z(e))return e[`inner${n}`];if(F(e)){const r=e.documentElement;return Math.max(r[`offset${n}`],r[`scroll${n}`])}return e=l(e),i=d(e,t),i=i==="auto"?e[`offset${n}`]:v(i)||0,i-K(e,t)}else return d(e,t,!i&&i!==0?"":+i+K(e,t)+"px")}}function K(t,n,e="border-box"){return d(t,"boxSizing")===e?it(At[n],i=>v(d(t,`padding-${i}`))+v(d(t,`border-${i}-width`))):0}const Tt=["accordion","alert","align","animation","article","background","badge","base","breadcrumb","button","card","close","column","comment","container","countdown","cover","description-list","divider","dotnav","drop","dropbar","dropdown","dropnav","filter","flex","form","grid-masonry","grid-parallax","grid","heading","height-expand","height-viewport","height","icon","iconnav","image","label","leader","lightbox","link","list","margin","marker","modal","nav","navbar","notification","offcanvas","overlay","padding","pagination","parallax","placeholder","position","progress","scroll","scrollspy","search","section","slidenav","slider","slideshow","sortable","spinner","sticky-navbar","sticky-parallax","sticky","subnav","svg","switcher","tab","table","text","thumbnav","tile","toggle","tooltip","totop","transition","upload","utility","video","visibility","width"],a=window.sessionStorage,m="_uikit_style",w="_uikit_inverse",x=new XMLHttpRequest;x.open("GET","themes.json",!1),x.send(null);const _t=x.status===200?JSON.parse(x.responseText):{},g={core:{css:"./css/uikit-core.css"},theme:{css:"./css/uikit.css"},..._t},jt=location.pathname.split("/").pop().replace(/.html$/,""),Y={"":"Default",light:"Dark",dark:"Light"};E("style")&&E("style").match(/\.(json|css)$/)&&(g.custom=E("style")),a[m]=a[m]||"core",a[w]=a[w]||"";const R=a._uikit_dir||"ltr";document.dir=R;const S=g[a[m]]||g.theme;document.writeln(`<link rel="stylesheet" href="${R!=="rtl"?S.css:S.css.replace(".css","-rtl.css")}">`),document.writeln('<style>html:not(:has(body :first-child [aria-label="Component switcher"])) {padding-top: 80px}</style>'),document.writeln('<script src="./js/uikit.js"><\/script>'),document.writeln(`<script src="${S.icons?S.icons:"./js/uikit-icons.js"}"><\/script>`),h(window,"load",()=>setTimeout(()=>requestAnimationFrame(()=>{const t=St(document.body,` <div class="uk-container"> <select class="uk-select uk-form-width-small" style="margin: 20px 20px 20px 0" aria-label="Component switcher"> <option value="index.html">Overview</option> ${Tt.map(o=>`<option value="${o}.html">${o.split("-").map(C).join(" ")}</option>`).join("")} </select> <select class="uk-select uk-form-width-small" style="margin: 20px" aria-label="Theme switcher"> ${Object.keys(g).map(o=>`<option value="${o}">${C(o)}</option>`).join("")} </select> <select class="uk-select uk-form-width-small" style="margin: 20px" aria-label="Inverse switcher"> ${Object.keys(Y).map(o=>`<option value="${o}">${Y[o]}</option>`).join("")} </select> <label style="margin: 20px"> <input type="checkbox" class="uk-checkbox"/> <span style="margin: 5px">RTL</span> </label> </div> `),[n,e,i,r]=t.children;h(n,"change",()=>{n.value&&(location.href=`${n.value}${g.custom?`?style=${E("style")}`:""}`)}),n.value=`${jt||"index"}.html`,h(e,"change",()=>{a[m]=e.value,location.reload()}),e.value=a[m],i.value=a[w],i.value&&(rt(V("*"),"uk-card-default","uk-card-muted","uk-card-primary","uk-card-secondary","uk-tile-default","uk-tile-muted","uk-tile-primary","uk-tile-secondary","uk-section-default","uk-section-muted","uk-section-primary","uk-section-secondary","uk-overlay-default","uk-overlay-primary"),B(V(".uk-navbar-container"),"uk-navbar-transparent"),d(document.documentElement,"background",i.value==="dark"?"#fff":"#222"),B(document.body,`uk-${i.value}`)),h(i,"change",()=>{a[w]=i.value,location.reload()}),h(r,"change",({target:o})=>{a._uikit_dir=o.checked?"rtl":"ltr",location.reload()}),r.firstElementChild.checked=R==="rtl"}),100));function E(t){const n=new RegExp(`[?&]${t}=([^&]*)`).exec(window.location.search);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}});