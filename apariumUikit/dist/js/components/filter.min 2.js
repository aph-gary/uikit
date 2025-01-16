/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */(function(n,y){typeof exports=="object"&&typeof module<"u"?module.exports=y(require("uikit-util")):typeof define=="function"&&define.amd?define("uikitfilter",["uikit-util"],y):(n=typeof globalThis<"u"?globalThis:n||self,n.UIkitFilter=y(n.UIkit.util))})(this,function(n){"use strict";function y(e,s=[]){try{return e?n.startsWith(e,"{")?JSON.parse(e):s.length&&!n.includes(e,":")?{[s[0]]:e}:e.split(";").reduce((o,t)=>{const[a,r]=t.split(/:(.*)/);return a&&!n.isUndefined(r)&&(o[a.trim()]=r.trim()),o},{}):{}}catch{return{}}}function O(e,s="update"){e._connected&&e._updates.length&&(e._queued||(e._queued=new Set,n.fastdom.read(()=>{e._connected&&z(e,e._queued),e._queued=null})),e._queued.add(s.type||s))}function z(e,s){for(const{read:o,write:t,events:a=[]}of e._updates){if(!s.has("update")&&!a.some(c=>s.has(c)))continue;let r;o&&(r=o.call(e,e._data,s),r&&n.isPlainObject(r)&&n.assign(e._data,r)),t&&r!==!1&&n.fastdom.write(()=>{e._connected&&t.call(e,e._data,s)})}}function N(e){return C(n.observeResize,e,"resize")}function T(e){return C(n.observeMutation,e)}function C(e,s,o){return{observe:e,handler(){O(this,o)},...s}}T({options:{childList:!0}}),T({options:{attributes:!0,attributeFilter:["style"]},target:({$el:e})=>[e,...n.children(e)]}),N({target:({$el:e})=>[e,...n.children(e)]});function S(e){const s=[[]],o=e.some((t,a)=>a&&e[a-1].offsetParent!==t.offsetParent);for(const t of e){if(!n.isVisible(t))continue;const a=w(t,o);for(let r=s.length-1;r>=0;r--){const c=s[r];if(!c[0]){c.push(t);break}const f=w(c[0],o);if(a.top>=f.bottom-1&&a.top!==f.top){s.push([t]);break}if(a.bottom-1>f.top||a.top===f.top){let p=c.length-1;for(;p>=0;p--){const l=w(c[p],o);if(a.left>=l.left)break}c.splice(p+1,0,t);break}if(r===0){s.unshift([t]);break}}}return s}function w(e,s=!1){let{offsetTop:o,offsetLeft:t,offsetHeight:a,offsetWidth:r}=e;return s&&([o,t]=n.offsetPosition(e)),{top:o,left:t,bottom:o+a,right:t+r}}async function j(e,s,o){await b();let t=n.children(s);const a=t.map(d=>$(d,!0)),r={...n.css(s,["height","padding"]),display:"block"},c=t.concat(s);await Promise.all(c.map(n.Transition.cancel)),n.css(c,"transitionProperty","none"),await e(),t=t.concat(n.children(s).filter(d=>!n.includes(t,d))),await Promise.resolve(),n.css(c,"transitionProperty","");const f=n.attr(s,"style"),p=n.css(s,["height","padding"]),[l,m]=B(s,t,a),i=t.map(d=>({style:n.attr(d,"style")}));t.forEach((d,h)=>m[h]&&n.css(d,m[h])),n.css(s,r),n.trigger(s,"scroll"),await b();const u=t.map((d,h)=>n.parent(d)===s&&n.Transition.start(d,l[h],o,"ease")).concat(n.Transition.start(s,p,o,"ease"));try{await Promise.all(u),t.forEach((d,h)=>{n.attr(d,i[h]),n.parent(d)===s&&n.css(d,"display",l[h].opacity===0?"none":"")}),n.attr(s,"style",f)}catch{n.attr(t,"style",""),H(s,r)}}function $(e,s){const o=n.css(e,"zIndex");return n.isVisible(e)?{display:"",opacity:s?n.css(e,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:o==="auto"?n.index(e):o,...E(e)}:!1}function B(e,s,o){const t=s.map((r,c)=>n.parent(r)&&c in o?o[c]?n.isVisible(r)?E(r):{opacity:0}:{opacity:n.isVisible(r)?1:0}:!1),a=t.map((r,c)=>{const f=n.parent(s[c])===e&&(o[c]||$(s[c]));if(!f)return!1;if(!r)delete f.opacity;else if(!("opacity"in r)){const{opacity:p}=f;p%1?r.opacity=1:delete f.opacity}return f});return[t,a]}function H(e,s){for(const o in s)n.css(e,o,"")}function E(e){const{height:s,width:o}=n.dimensions(e);return{height:s,width:o,transform:"",...n.position(e),...n.css(e,["marginTop","marginLeft"])}}function b(){return new Promise(e=>requestAnimationFrame(e))}const v="uk-transition-leave",P="uk-transition-enter";function F(e,s,o,t=0){const a=g(s,!0),r={opacity:1},c={opacity:0},f=m=>()=>a===g(s)?m():Promise.reject(),p=f(async()=>{n.addClass(s,v),await Promise.all(_(s).map((m,i)=>new Promise(u=>setTimeout(()=>n.Transition.start(m,c,o/2,"ease").then(u),i*t)))),n.removeClass(s,v)}),l=f(async()=>{const m=n.height(s);n.addClass(s,P),e(),n.css(n.children(s),{opacity:0}),await b();const i=n.children(s),u=n.height(s);n.css(s,"alignContent","flex-start"),n.height(s,m);const d=_(s);n.css(i,c);const h=d.map(async(K,Q)=>{await L(Q*t),await n.Transition.start(K,r,o/2,"ease")});m!==u&&h.push(n.Transition.start(s,{height:u},o/2+d.length*t,"ease")),await Promise.all(h).then(()=>{n.removeClass(s,P),a===g(s)&&(n.css(s,{height:"",alignContent:""}),n.css(i,{opacity:""}),delete s.dataset.transition)})});return n.hasClass(s,v)?I(s).then(l):n.hasClass(s,P)?I(s).then(p).then(l):p().then(l)}function g(e,s){return s&&(e.dataset.transition=1+g(e)),n.toNumber(e.dataset.transition)||0}function I(e){return Promise.all(n.children(e).filter(n.Transition.inProgress).map(s=>new Promise(o=>n.once(s,"transitionend transitioncanceled",o))))}function _(e){return S(n.children(e)).flat().filter(n.isVisible)}function L(e){return new Promise(s=>setTimeout(s,e))}var V={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(e,s=this.$el){const o=this.animation;return(o==="fade"?F:o==="delayed-fade"?(...a)=>F(...a,40):o?j:()=>(e(),Promise.resolve()))(e,s,this.duration).catch(n.noop)}}};const M={TAB:9,ESC:27,SPACE:32,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};var x={mixins:[V],args:"target",props:{target:String,selActive:Boolean},data:{target:"",selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{children:({target:e},s)=>n.$$(`${e} > *`,s),toggles:({attrItem:e},s)=>n.$$(`[${e}],[data-${e}]`,s)},watch:{toggles(e){this.updateState();const s=n.$$(this.selActive,this.$el);for(const o of e){this.selActive!==!1&&n.toggleClass(o,this.cls,n.includes(s,o));const t=J(o);n.isTag(t,"a")&&n.attr(t,"role","button")}},children(e,s){s&&this.updateState()}},events:{name:"click keydown",delegate:({attrItem:e})=>`[${e}],[data-${e}]`,handler(e){e.type==="keydown"&&e.keyCode!==M.SPACE||e.target.closest("a,button")&&(e.preventDefault(),this.apply(e.current))}},methods:{apply(e){const s=this.getState(),o=A(e,this.attrItem,this.getState());R(s,o)||this.setState(o)},getState(){return this.toggles.filter(e=>n.hasClass(e,this.cls)).reduce((e,s)=>A(s,this.attrItem,e),{filter:{"":""},sort:[]})},async setState(e,s=!0){e={filter:{"":""},sort:[],...e},n.trigger(this.$el,"beforeFilter",[this,e]);for(const o of this.toggles)n.toggleClass(o,this.cls,D(o,this.attrItem,e));await Promise.all(n.$$(this.target,this.$el).map(o=>{const t=()=>W(e,o,n.children(o));return s?this.animate(t,o):t()})),n.trigger(this.$el,"afterFilter",[this])},updateState(){n.fastdom.write(()=>this.setState(this.getState(),!1))}}};function q(e,s){return y(n.data(e,s),["filter"])}function R(e,s){return["filter","sort"].every(o=>n.isEqual(e[o],s[o]))}function W(e,s,o){for(const r of o)n.css(r,"display",Object.values(e.filter).every(c=>!c||n.matches(r,c))?"":"none");const[t,a]=e.sort;if(t){const r=G(o,t,a);n.isEqual(r,o)||n.append(s,r)}}function A(e,s,o){const{filter:t,group:a,sort:r,order:c="asc"}=q(e,s);return(t||n.isUndefined(r))&&(a?t?(delete o.filter[""],o.filter[a]=t):(delete o.filter[a],(n.isEmpty(o.filter)||""in o.filter)&&(o.filter={"":t||""})):o.filter={"":t||""}),n.isUndefined(r)||(o.sort=[r,c]),o}function D(e,s,{filter:o={"":""},sort:[t,a]}){const{filter:r="",group:c="",sort:f,order:p="asc"}=q(e,s);return n.isUndefined(f)?c in o&&r===o[c]||!r&&c&&!(c in o)&&!o[""]:t===f&&a===p}function G(e,s,o){return[...e].sort((t,a)=>n.data(t,s).localeCompare(n.data(a,s),void 0,{numeric:!0})*(o==="asc"||-1))}function J(e){return n.$("a,button",e)||e}return typeof window<"u"&&window.UIkit&&window.UIkit.component("filter",x),x});