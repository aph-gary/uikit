/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */(function(c,$){typeof exports=="object"&&typeof module<"u"?module.exports=$(require("uikit-util")):typeof define=="function"&&define.amd?define("uikitslider_parallax",["uikit-util"],$):(c=typeof globalThis<"u"?globalThis:c||self,c.UIkitSlider_parallax=$(c.UIkit.util))})(this,function(c){"use strict";var $={props:{media:Boolean},data:{media:!1},connected(){const n=Y(this.media,this.$el);if(this.matchMedia=!0,n){this.mediaObj=window.matchMedia(n);const t=()=>{this.matchMedia=this.mediaObj.matches,c.trigger(this.$el,c.createEvent("mediachange",!1,!0,[this.mediaObj]))};this.offMediaObj=c.on(this.mediaObj,"change",()=>{t(),this.$emit("resize")}),t()}},disconnected(){var n;(n=this.offMediaObj)==null||n.call(this)}};function Y(n,t){if(c.isString(n)){if(c.startsWith(n,"@"))n=c.toFloat(c.css(t,`--uk-breakpoint-${n.slice(1)}`));else if(isNaN(n))return n}return n&&c.isNumeric(n)?`(min-width: ${n}px)`:""}function Z(n,t){var e;return(e=n==null?void 0:n.startsWith)==null?void 0:e.call(n,t)}const{isArray:Nn,from:k}=Array;function U(n){return typeof n=="function"}function C(n){return n!==null&&typeof n=="object"}function nn(n){return C(n)&&n===n.window}function tn(n){return T(n)===9}function N(n){return T(n)>=1}function T(n){return!nn(n)&&C(n)&&n.nodeType}function M(n){return typeof n=="string"}function en(n){return n===void 0}function b(n){return n&&u(n)[0]}function u(n){return N(n)?[n]:Array.from(n||[]).filter(N)}function W(n){const t=Object.create(null);return(e,...r)=>t[e]||(t[e]=n(e,...r))}function O(n,t,e){var r;if(C(t)){for(const i in t)O(n,i,t[i]);return}if(en(e))return(r=b(n))==null?void 0:r.getAttribute(t);for(const i of u(n))U(e)&&(e=e.call(i,O(i,t))),e===null?rn(i,t):i.setAttribute(t,e)}function rn(n,t){u(n).forEach(e=>e.removeAttribute(t))}const on=typeof window<"u"&&Element.prototype.checkVisibility||function(){return this.offsetWidth||this.offsetHeight||this.getClientRects().length};function cn(n){return u(n).some(t=>on.call(t))}function sn(n){var t;return(t=b(n))==null?void 0:t.parentElement}function an(n,t){return u(n).filter(e=>_(e,t))}function _(n,t){return u(n).some(e=>e.matches(t))}function fn(n,t){n=b(n);const e=n?k(n.children):[];return t?an(e,t):e}function A(n,t){return t?u(n).indexOf(b(t)):fn(sn(n)).indexOf(n)}function un(n,t){return u(mn(n,b(t),"querySelectorAll"))}const dn=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,ln=/(\([^)]*\)|[^,])+/g,hn=W(n=>{let t=!1;if(!n||!M(n))return{};const e=[];for(let r of n.match(ln))r=r.trim().replace(dn,"$1 *"),t||(t=["!","+","~","-",">"].includes(r[0])),e.push(r);return{selector:e.join(","),selectors:e,isContextSelector:t}}),gn=/(\([^)]*\)|\S)*/,D=W(n=>{n=n.slice(1).trim();const[t]=n.match(gn);return[t,n.slice(t.length+1)]});function mn(n,t=document,e){const r=hn(n);if(!r.isContextSelector)return r.selector?P(t,e,r.selector):n;n="";const i=r.selectors.length===1;for(let o of r.selectors){let a,s=t;if(o[0]==="!"&&([a,o]=D(o),s=t.parentElement.closest(a),!o&&i)||s&&o[0]==="-"&&([a,o]=D(o),s=s.previousElementSibling,s=_(s,a)?s:null,!o&&i))return s;if(s){if(i)return o[0]==="~"||o[0]==="+"?(o=`:scope > :nth-child(${A(s)+1}) ${o}`,s=s.parentElement):o[0]===">"&&(o=`:scope ${o}`),P(s,e,o);n+=`${n?",":""}${$n(s)} ${o}`}}return tn(t)||(t=t.ownerDocument),P(t,e,n)}function P(n,t,e){try{return n[t](e)}catch{return null}}function $n(n){const t=[];for(;n.parentNode;){const e=O(n,"id");if(e){t.unshift(`#${bn(e)}`);break}else{let{tagName:r}=n;r!=="HTML"&&(r+=`:nth-child(${A(n)+1})`),t.unshift(r),n=n.parentNode}}return t.join(" > ")}function bn(n){return M(n)?CSS.escape(n):""}const pn=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function xn(n){const t=pn.exec(n);if(t)return document.createElement(t[1]);const e=document.createElement("template");return e.innerHTML=n.trim(),wn(e.content.childNodes)}function wn(n){return n.length>1?n:n[0]}function yn(n,t){return vn(n)?u(xn(n)):un(n,t)}function vn(n){return M(n)&&Z(n.trim(),"<")}function Sn(n){return cn(n)?Math.ceil(Math.max(0,...yn("[stroke]",n).map(t=>{var e;return((e=t.getTotalLength)==null?void 0:e.call(t))||0}))):0}const y={x:v,y:v,rotate:v,scale:v,color:j,backgroundColor:j,borderColor:j,blur:g,hue:g,fopacity:g,grayscale:g,invert:g,saturate:g,sepia:g,opacity:Mn,stroke:On,bgx:R,bgy:R},{keys:H}=Object;var Fn={mixins:[$],props:q(H(y),"list"),data:q(H(y),void 0),computed:{props(n,t){const e={};for(const i in n)i in y&&!c.isUndefined(n[i])&&(e[i]=n[i].slice());const r={};for(const i in e)r[i]=y[i](i,t,e[i],e);return r}},events:{load(){this.$emit()}},methods:{reset(){for(const n in this.getCss(0))c.css(this.$el,n,"")},getCss(n){const t={};for(const e in this.props)this.props[e](t,c.clamp(n));return t.willChange=Object.keys(t).map(c.propName).join(","),t}}};function v(n,t,e){let r=F(e)||{x:"px",y:"px",rotate:"deg"}[n]||"",i;return n==="x"||n==="y"?(n=`translate${c.ucfirst(n)}`,i=o=>c.toFloat(c.toFloat(o).toFixed(r==="px"?0:6))):n==="scale"&&(r="",i=o=>{var a;return F([o])?c.toPx(o,"width",t,!0)/t[`offset${(a=o.endsWith)!=null&&a.call(o,"vh")?"Height":"Width"}`]:c.toFloat(o)}),e.length===1&&e.unshift(n==="scale"?1:0),e=m(e,i),(o,a)=>{o.transform=`${o.transform||""} ${n}(${p(e,a)}${r})`}}function j(n,t,e){return e.length===1&&e.unshift(x(t,n,"")),e=m(e,r=>Cn(t,r)),(r,i)=>{const[o,a,s]=L(e,i),l=o.map((h,f)=>(h+=s*(a[f]-h),f===3?c.toFloat(h):parseInt(h,10))).join(",");r[n]=`rgba(${l})`}}function Cn(n,t){return x(n,"color",t).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(c.toFloat)}function g(n,t,e){e.length===1&&e.unshift(0);const r=F(e)||{blur:"px",hue:"deg"}[n]||"%";return n={fopacity:"opacity",hue:"hue-rotate"}[n]||n,e=m(e),(i,o)=>{const a=p(e,o);i.filter=`${i.filter||""} ${n}(${a+r})`}}function Mn(n,t,e){return e.length===1&&e.unshift(x(t,n,"")),e=m(e),(r,i)=>{r[n]=p(e,i)}}function On(n,t,e){e.length===1&&e.unshift(0);const r=F(e),i=Sn(t);return e=m(e.reverse(),o=>(o=c.toFloat(o),r==="%"?o*i/100:o)),e.some(([o])=>o)?(c.css(t,"strokeDasharray",i),(o,a)=>{o.strokeDashoffset=p(e,a)}):c.noop}function R(n,t,e,r){e.length===1&&e.unshift(0);const i=n==="bgy"?"height":"width";r[n]=m(e,s=>c.toPx(s,i,t));const o=["bgx","bgy"].filter(s=>s in r);if(o.length===2&&n==="bgx")return c.noop;if(x(t,"backgroundSize","")==="cover")return Pn(n,t,e,r);const a={};for(const s of o)a[s]=B(t,s);return V(o,a,r)}function Pn(n,t,e,r){const i=jn(t);if(!i.width)return c.noop;const o={width:t.offsetWidth,height:t.offsetHeight},a=["bgx","bgy"].filter(f=>f in r),s={};for(const f of a){const d=r[f].map(([En])=>En),w=Math.min(...d),E=Math.max(...d),K=d.indexOf(w)<d.indexOf(E),X=E-w;s[f]=`${(K?-X:0)-(K?w:E)}px`,o[f==="bgy"?"height":"width"]+=X}const l=c.Dimensions.cover(i,o);for(const f of a){const d=f==="bgy"?"height":"width",w=l[d]-o[d];s[f]=`max(${B(t,f)},-${w}px) + ${s[f]}`}const h=V(a,s,r);return(f,d)=>{h(f,d),f.backgroundSize=`${l.width}px ${l.height}px`,f.backgroundRepeat="no-repeat"}}function B(n,t){return x(n,`background-position-${t.slice(-1)}`,"")}function V(n,t,e){return function(r,i){for(const o of n){const a=p(e[o],i);r[`background-position-${o.slice(-1)}`]=`calc(${t[o]} + ${a}px)`}}}const z={},S={};function jn(n){const t=c.css(n,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1");if(S[t])return S[t];const e=new Image;return t&&(e.src=t,!e.naturalWidth&&!z[t])?(c.once(e,"error load",()=>{S[t]=I(e),c.trigger(n,c.createEvent("load",!1))}),z[t]=!0,I(e)):S[t]=I(e)}function I(n){return{width:n.naturalWidth,height:n.naturalHeight}}function m(n,t=c.toFloat){const e=[],{length:r}=n;let i=0;for(let o=0;o<r;o++){let[a,s]=c.isString(n[o])?n[o].trim().split(/ (?![^(]*\))/):[n[o]];if(a=t(a),s=s?c.toFloat(s)/100:null,o===0?s===null?s=0:s&&e.push([a,0]):o===r-1&&(s===null?s=1:s!==1&&(e.push([a,s]),s=1)),e.push([a,s]),s===null)i++;else if(i){const l=e[o-i-1][1],h=(s-l)/(i+1);for(let f=i;f>0;f--)e[o-f][1]=l+h*(i-f+1);i=0}}return e}function L(n,t){const e=c.findIndex(n.slice(1),([,r])=>t<=r)+1;return[n[e-1][0],n[e][0],(t-n[e-1][1])/(n[e][1]-n[e-1][1])]}function p(n,t){const[e,r,i]=L(n,t);return e+Math.abs(e-r)*i*(e<r?1:-1)}const In=/^-?\d+(?:\.\d+)?(\S+)?/;function F(n,t){var e;for(const r of n){const i=(e=r.match)==null?void 0:e.call(r,In);if(i)return i[1]}return t}function x(n,t,e){const r=n.style[t],i=c.css(c.css(n,t,e),t);return n.style[t]=r,i}function q(n,t){return n.reduce((e,r)=>(e[r]=t,e),{})}var Q={mixins:[Fn],beforeConnect(){this.item=this.$el.closest(`.${this.$options.id.replace("parallax","items")} > *`)},disconnected(){this.item=null},events:[{name:"itemin itemout",self:!0,el:({item:n})=>n,handler({type:n,detail:{percent:t,duration:e,timing:r,dir:i}}){c.fastdom.read(()=>{if(!this.matchMedia)return;const o=this.getCss(J(n,i,t)),a=this.getCss(G(n)?.5:i>0?1:0);c.fastdom.write(()=>{c.css(this.$el,o),c.Transition.start(this.$el,a,e,r).catch(c.noop)})})}},{name:"transitioncanceled transitionend",self:!0,el:({item:n})=>n,handler(){c.Transition.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el:({item:n})=>n,handler({type:n,detail:{percent:t,dir:e}}){c.fastdom.read(()=>{if(!this.matchMedia){this.reset();return}const r=this.getCss(J(n,e,t));c.fastdom.write(()=>c.css(this.$el,r))})}}]};function G(n){return c.endsWith(n,"in")}function J(n,t,e){return e/=2,G(n)^t<0?e:1-e}return typeof window<"u"&&window.UIkit&&window.UIkit.component("sliderParallax",Q),Q});