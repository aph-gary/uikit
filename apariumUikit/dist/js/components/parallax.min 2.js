/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */(function(c,b){typeof exports=="object"&&typeof module<"u"?module.exports=b(require("uikit-util")):typeof define=="function"&&define.amd?define("uikitparallax",["uikit-util"],b):(c=typeof globalThis<"u"?globalThis:c||self,c.UIkitParallax=b(c.UIkit.util))})(this,function(c){"use strict";function b(n,e="update"){n._connected&&n._updates.length&&(n._queued||(n._queued=new Set,c.fastdom.read(()=>{n._connected&&Y(n,n._queued),n._queued=null})),n._queued.add(e.type||e))}function Y(n,e){for(const{read:t,write:r,events:i=[]}of n._updates){if(!e.has("update")&&!i.some(a=>e.has(a)))continue;let o;t&&(o=t.call(n,n._data,e),o&&c.isPlainObject(o)&&c.assign(n._data,o)),r&&o!==!1&&c.fastdom.write(()=>{n._connected&&r.call(n,n._data,e)})}}function Z(n){return F(c.observeResize,n,"resize")}function k(n){return F((e,t)=>c.observeViewportResize(t),n,"resize")}function U(n){return F((e,t)=>({disconnect:c.on(nn(e),"scroll",t,{passive:!0})}),n,"scroll")}function F(n,e,t){return{observe:n,handler(){b(this,t)},...e}}function nn(n){return c.toNodes(n).map(e=>{const{ownerDocument:t}=e,r=c.scrollParent(e,!0);return r===t.scrollingElement?t:r})}var en={props:{media:Boolean},data:{media:!1},connected(){const n=tn(this.media,this.$el);if(this.matchMedia=!0,n){this.mediaObj=window.matchMedia(n);const e=()=>{this.matchMedia=this.mediaObj.matches,c.trigger(this.$el,c.createEvent("mediachange",!1,!0,[this.mediaObj]))};this.offMediaObj=c.on(this.mediaObj,"change",()=>{e(),this.$emit("resize")}),e()}},disconnected(){var n;(n=this.offMediaObj)==null||n.call(this)}};function tn(n,e){if(c.isString(n)){if(c.startsWith(n,"@"))n=c.toFloat(c.css(e,`--uk-breakpoint-${n.slice(1)}`));else if(isNaN(n))return n}return n&&c.isNumeric(n)?`(min-width: ${n}px)`:""}function rn(n,e){var t;return(t=n==null?void 0:n.startsWith)==null?void 0:t.call(n,e)}const{isArray:Dn,from:on}=Array;function cn(n){return typeof n=="function"}function M(n){return n!==null&&typeof n=="object"}function sn(n){return M(n)&&n===n.window}function an(n){return z(n)===9}function I(n){return z(n)>=1}function z(n){return!sn(n)&&M(n)&&n.nodeType}function O(n){return typeof n=="string"}function fn(n){return n===void 0}function p(n){return n&&u(n)[0]}function u(n){return I(n)?[n]:Array.from(n||[]).filter(I)}function A(n){const e=Object.create(null);return(t,...r)=>e[t]||(e[t]=n(t,...r))}function P(n,e,t){var r;if(M(e)){for(const i in e)P(n,i,e[i]);return}if(fn(t))return(r=p(n))==null?void 0:r.getAttribute(e);for(const i of u(n))cn(t)&&(t=t.call(i,P(i,e))),t===null?un(i,e):i.setAttribute(e,t)}function un(n,e){u(n).forEach(t=>t.removeAttribute(e))}const dn=typeof window<"u"&&Element.prototype.checkVisibility||function(){return this.offsetWidth||this.offsetHeight||this.getClientRects().length};function ln(n){return u(n).some(e=>dn.call(e))}function hn(n){var e;return(e=p(n))==null?void 0:e.parentElement}function gn(n,e){return u(n).filter(t=>T(t,e))}function T(n,e){return u(n).some(t=>t.matches(e))}function mn(n,e){n=p(n);const t=n?on(n.children):[];return e?gn(t,e):t}function W(n,e){return e?u(n).indexOf(p(e)):mn(hn(n)).indexOf(n)}function bn(n,e){return u(vn(n,p(e),"querySelectorAll"))}const pn=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,$n=/(\([^)]*\)|[^,])+/g,wn=A(n=>{let e=!1;if(!n||!O(n))return{};const t=[];for(let r of n.match($n))r=r.trim().replace(pn,"$1 *"),e||(e=["!","+","~","-",">"].includes(r[0])),t.push(r);return{selector:t.join(","),selectors:t,isContextSelector:e}}),xn=/(\([^)]*\)|\S)*/,R=A(n=>{n=n.slice(1).trim();const[e]=n.match(xn);return[e,n.slice(e.length+1)]});function vn(n,e=document,t){const r=wn(n);if(!r.isContextSelector)return r.selector?j(e,t,r.selector):n;n="";const i=r.selectors.length===1;for(let o of r.selectors){let a,s=e;if(o[0]==="!"&&([a,o]=R(o),s=e.parentElement.closest(a),!o&&i)||s&&o[0]==="-"&&([a,o]=R(o),s=s.previousElementSibling,s=T(s,a)?s:null,!o&&i))return s;if(s){if(i)return o[0]==="~"||o[0]==="+"?(o=`:scope > :nth-child(${W(s)+1}) ${o}`,s=s.parentElement):o[0]===">"&&(o=`:scope ${o}`),j(s,t,o);n+=`${n?",":""}${yn(s)} ${o}`}}return an(e)||(e=e.ownerDocument),j(e,t,n)}function j(n,e,t){try{return n[e](t)}catch{return null}}function yn(n){const e=[];for(;n.parentNode;){const t=P(n,"id");if(t){e.unshift(`#${Sn(t)}`);break}else{let{tagName:r}=n;r!=="HTML"&&(r+=`:nth-child(${W(n)+1})`),e.unshift(r),n=n.parentNode}}return e.join(" > ")}function Sn(n){return O(n)?CSS.escape(n):""}const _n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;function Fn(n){const e=_n.exec(n);if(e)return document.createElement(e[1]);const t=document.createElement("template");return t.innerHTML=n.trim(),Mn(t.content.childNodes)}function Mn(n){return n.length>1?n:n[0]}function On(n,e){return Pn(n)?u(Fn(n)):bn(n,e)}function Pn(n){return O(n)&&rn(n.trim(),"<")}function jn(n){return ln(n)?Math.ceil(Math.max(0,...On("[stroke]",n).map(e=>{var t;return((t=e.getTotalLength)==null?void 0:t.call(e))||0}))):0}const v={x:y,y,rotate:y,scale:y,color:C,backgroundColor:C,borderColor:C,blur:g,hue:g,fopacity:g,grayscale:g,invert:g,saturate:g,sepia:g,opacity:Nn,stroke:In,bgx:q,bgy:q},{keys:D}=Object;var Cn={mixins:[en],props:Q(D(v),"list"),data:Q(D(v),void 0),computed:{props(n,e){const t={};for(const i in n)i in v&&!c.isUndefined(n[i])&&(t[i]=n[i].slice());const r={};for(const i in t)r[i]=v[i](i,e,t[i],t);return r}},events:{load(){this.$emit()}},methods:{reset(){for(const n in this.getCss(0))c.css(this.$el,n,"")},getCss(n){const e={};for(const t in this.props)this.props[t](e,c.clamp(n));return e.willChange=Object.keys(e).map(c.propName).join(","),e}}};function y(n,e,t){let r=_(t)||{x:"px",y:"px",rotate:"deg"}[n]||"",i;return n==="x"||n==="y"?(n=`translate${c.ucfirst(n)}`,i=o=>c.toFloat(c.toFloat(o).toFixed(r==="px"?0:6))):n==="scale"&&(r="",i=o=>{var a;return _([o])?c.toPx(o,"width",e,!0)/e[`offset${(a=o.endsWith)!=null&&a.call(o,"vh")?"Height":"Width"}`]:c.toFloat(o)}),t.length===1&&t.unshift(n==="scale"?1:0),t=m(t,i),(o,a)=>{o.transform=`${o.transform||""} ${n}(${$(t,a)}${r})`}}function C(n,e,t){return t.length===1&&t.unshift(w(e,n,"")),t=m(t,r=>En(e,r)),(r,i)=>{const[o,a,s]=L(t,i),l=o.map((h,f)=>(h+=s*(a[f]-h),f===3?c.toFloat(h):parseInt(h,10))).join(",");r[n]=`rgba(${l})`}}function En(n,e){return w(n,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(c.toFloat)}function g(n,e,t){t.length===1&&t.unshift(0);const r=_(t)||{blur:"px",hue:"deg"}[n]||"%";return n={fopacity:"opacity",hue:"hue-rotate"}[n]||n,t=m(t),(i,o)=>{const a=$(t,o);i.filter=`${i.filter||""} ${n}(${a+r})`}}function Nn(n,e,t){return t.length===1&&t.unshift(w(e,n,"")),t=m(t),(r,i)=>{r[n]=$(t,i)}}function In(n,e,t){t.length===1&&t.unshift(0);const r=_(t),i=jn(e);return t=m(t.reverse(),o=>(o=c.toFloat(o),r==="%"?o*i/100:o)),t.some(([o])=>o)?(c.css(e,"strokeDasharray",i),(o,a)=>{o.strokeDashoffset=$(t,a)}):c.noop}function q(n,e,t,r){t.length===1&&t.unshift(0);const i=n==="bgy"?"height":"width";r[n]=m(t,s=>c.toPx(s,i,e));const o=["bgx","bgy"].filter(s=>s in r);if(o.length===2&&n==="bgx")return c.noop;if(w(e,"backgroundSize","")==="cover")return zn(n,e,t,r);const a={};for(const s of o)a[s]=H(e,s);return V(o,a,r)}function zn(n,e,t,r){const i=An(e);if(!i.width)return c.noop;const o={width:e.offsetWidth,height:e.offsetHeight},a=["bgx","bgy"].filter(f=>f in r),s={};for(const f of a){const d=r[f].map(([Rn])=>Rn),x=Math.min(...d),N=Math.max(...d),K=d.indexOf(x)<d.indexOf(N),X=N-x;s[f]=`${(K?-X:0)-(K?x:N)}px`,o[f==="bgy"?"height":"width"]+=X}const l=c.Dimensions.cover(i,o);for(const f of a){const d=f==="bgy"?"height":"width",x=l[d]-o[d];s[f]=`max(${H(e,f)},-${x}px) + ${s[f]}`}const h=V(a,s,r);return(f,d)=>{h(f,d),f.backgroundSize=`${l.width}px ${l.height}px`,f.backgroundRepeat="no-repeat"}}function H(n,e){return w(n,`background-position-${e.slice(-1)}`,"")}function V(n,e,t){return function(r,i){for(const o of n){const a=$(t[o],i);r[`background-position-${o.slice(-1)}`]=`calc(${e[o]} + ${a}px)`}}}const B={},S={};function An(n){const e=c.css(n,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1");if(S[e])return S[e];const t=new Image;return e&&(t.src=e,!t.naturalWidth&&!B[e])?(c.once(t,"error load",()=>{S[e]=E(t),c.trigger(n,c.createEvent("load",!1))}),B[e]=!0,E(t)):S[e]=E(t)}function E(n){return{width:n.naturalWidth,height:n.naturalHeight}}function m(n,e=c.toFloat){const t=[],{length:r}=n;let i=0;for(let o=0;o<r;o++){let[a,s]=c.isString(n[o])?n[o].trim().split(/ (?![^(]*\))/):[n[o]];if(a=e(a),s=s?c.toFloat(s)/100:null,o===0?s===null?s=0:s&&t.push([a,0]):o===r-1&&(s===null?s=1:s!==1&&(t.push([a,s]),s=1)),t.push([a,s]),s===null)i++;else if(i){const l=t[o-i-1][1],h=(s-l)/(i+1);for(let f=i;f>0;f--)t[o-f][1]=l+h*(i-f+1);i=0}}return t}function L(n,e){const t=c.findIndex(n.slice(1),([,r])=>e<=r)+1;return[n[t-1][0],n[t][0],(e-n[t-1][1])/(n[t][1]-n[t-1][1])]}function $(n,e){const[t,r,i]=L(n,e);return t+Math.abs(t-r)*i*(t<r?1:-1)}const Tn=/^-?\d+(?:\.\d+)?(\S+)?/;function _(n,e){var t;for(const r of n){const i=(t=r.match)==null?void 0:t.call(r,Tn);if(i)return i[1]}return e}function w(n,e,t){const r=n.style[e],i=c.css(c.css(n,e,t),e);return n.style[e]=r,i}function Q(n,e){return n.reduce((t,r)=>(t[r]=e,t),{})}function Wn(n,e){return e>=0?Math.pow(n,e+1):1-Math.pow(1-n,1-e)}var G={mixins:[Cn],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target:({target:n},e)=>J(n&&c.query(n,e)||e),start({start:n}){return c.toPx(n,"height",this.target,!0)},end({end:n,viewport:e}){return c.toPx(n||(e=(1-e)*100)&&`${e}vh+${e}%`,"height",this.target,!0)}},observe:[k(),U({target:({target:n})=>n}),Z({target:({$el:n,target:e})=>[n,e,c.scrollParent(e,!0)]})],update:{read({percent:n},e){if(e.has("scroll")||(n=!1),!c.isVisible(this.$el))return!1;if(!this.matchMedia)return;const t=n;return n=Wn(c.scrolledOver(this.target,this.start,this.end),this.easing),{percent:n,style:t===n?!1:this.getCss(n)}},write({style:n}){if(!this.matchMedia){this.reset();return}n&&c.css(this.$el,n)},events:["scroll","resize"]}};function J(n){return n?"offsetTop"in n?n:J(c.parent(n)):document.documentElement}return typeof window<"u"&&window.UIkit&&window.UIkit.component("parallax",G),G});