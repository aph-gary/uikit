/*! UIkit 3.21.16 | https://www.getuikit.com | (c) 2014 - 2024 YOOtheme | MIT License */(function(e,u){typeof exports=="object"&&typeof module<"u"?module.exports=u(require("uikit-util")):typeof define=="function"&&define.amd?define("uikitsortable",["uikit-util"],u):(e=typeof globalThis<"u"?globalThis:e||self,e.UIkitSortable=u(e.UIkit.util))})(this,function(e){"use strict";function u(o,s="update"){o._connected&&o._updates.length&&(o._queued||(o._queued=new Set,e.fastdom.read(()=>{o._connected&&z(o,o._queued),o._queued=null})),o._queued.add(s.type||s))}function z(o,s){for(const{read:n,write:t,events:c=[]}of o._updates){if(!s.has("update")&&!c.some(r=>s.has(r)))continue;let a;n&&(a=n.call(o,o._data,s),a&&e.isPlainObject(a)&&e.assign(o._data,a)),t&&a!==!1&&e.fastdom.write(()=>{o._connected&&t.call(o,o._data,s)})}}function q(o){return T(e.observeResize,o,"resize")}function C(o){return T(e.observeMutation,o)}function T(o,s,n){return{observe:o,handler(){u(this,n)},...s}}C({options:{childList:!0}}),C({options:{attributes:!0,attributeFilter:["style"]},target:({$el:o})=>[o,...e.children(o)]}),q({target:({$el:o})=>[o,...e.children(o)]});function S(o){const s=[[]],n=o.some((t,c)=>c&&o[c-1].offsetParent!==t.offsetParent);for(const t of o){if(!e.isVisible(t))continue;const c=v(t,n);for(let a=s.length-1;a>=0;a--){const r=s[a];if(!r[0]){r.push(t);break}const h=v(r[0],n);if(c.top>=h.bottom-1&&c.top!==h.top){s.push([t]);break}if(c.bottom-1>h.top||c.top===h.top){let d=r.length-1;for(;d>=0;d--){const p=v(r[d],n);if(c.left>=p.left)break}r.splice(d+1,0,t);break}if(a===0){s.unshift([t]);break}}}return s}function v(o,s=!1){let{offsetTop:n,offsetLeft:t,offsetHeight:c,offsetWidth:a}=o;return s&&([n,t]=e.offsetPosition(o)),{top:n,left:t,bottom:n+c,right:t+a}}async function A(o,s,n){await w();let t=e.children(s);const c=t.map(f=>x(f,!0)),a={...e.css(s,["height","padding"]),display:"block"},r=t.concat(s);await Promise.all(r.map(e.Transition.cancel)),e.css(r,"transitionProperty","none"),await o(),t=t.concat(e.children(s).filter(f=>!e.includes(t,f))),await Promise.resolve(),e.css(r,"transitionProperty","");const h=e.attr(s,"style"),d=e.css(s,["height","padding"]),[p,l]=H(s,t,c),m=t.map(f=>({style:e.attr(f,"style")}));t.forEach((f,i)=>l[i]&&e.css(f,l[i])),e.css(s,a),e.trigger(s,"scroll"),await w();const g=t.map((f,i)=>e.parent(f)===s&&e.Transition.start(f,p[i],n,"ease")).concat(e.Transition.start(s,d,n,"ease"));try{await Promise.all(g),t.forEach((f,i)=>{e.attr(f,m[i]),e.parent(f)===s&&e.css(f,"display",p[i].opacity===0?"none":"")}),e.attr(s,"style",h)}catch{e.attr(t,"style",""),L(s,a)}}function x(o,s){const n=e.css(o,"zIndex");return e.isVisible(o)?{display:"",opacity:s?e.css(o,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:n==="auto"?e.index(o):n,...I(o)}:!1}function H(o,s,n){const t=s.map((a,r)=>e.parent(a)&&r in n?n[r]?e.isVisible(a)?I(a):{opacity:0}:{opacity:e.isVisible(a)?1:0}:!1),c=t.map((a,r)=>{const h=e.parent(s[r])===o&&(n[r]||x(s[r]));if(!h)return!1;if(!a)delete h.opacity;else if(!("opacity"in a)){const{opacity:d}=h;d%1?a.opacity=1:delete h.opacity}return h});return[t,c]}function L(o,s){for(const n in s)e.css(o,n,"")}function I(o){const{height:s,width:n}=e.dimensions(o);return{height:s,width:n,transform:"",...e.position(o),...e.css(o,["marginTop","marginLeft"])}}function w(){return new Promise(o=>requestAnimationFrame(o))}const y="uk-transition-leave",P="uk-transition-enter";function E(o,s,n,t=0){const c=b(s,!0),a={opacity:1},r={opacity:0},h=l=>()=>c===b(s)?l():Promise.reject(),d=h(async()=>{e.addClass(s,y),await Promise.all(_(s).map((l,m)=>new Promise(g=>setTimeout(()=>e.Transition.start(l,r,n/2,"ease").then(g),m*t)))),e.removeClass(s,y)}),p=h(async()=>{const l=e.height(s);e.addClass(s,P),o(),e.css(e.children(s),{opacity:0}),await w();const m=e.children(s),g=e.height(s);e.css(s,"alignContent","flex-start"),e.height(s,l);const f=_(s);e.css(m,r);const i=f.map(async(Q,X)=>{await M(X*t),await e.Transition.start(Q,a,n/2,"ease")});l!==g&&i.push(e.Transition.start(s,{height:g},n/2+f.length*t,"ease")),await Promise.all(i).then(()=>{e.removeClass(s,P),c===b(s)&&(e.css(s,{height:"",alignContent:""}),e.css(m,{opacity:""}),delete s.dataset.transition)})});return e.hasClass(s,y)?D(s).then(p):e.hasClass(s,P)?D(s).then(d).then(p):d().then(p)}function b(o,s){return s&&(o.dataset.transition=1+b(o)),e.toNumber(o.dataset.transition)||0}function D(o){return Promise.all(e.children(o).filter(e.Transition.inProgress).map(s=>new Promise(n=>e.once(s,"transitionend transitioncanceled",n))))}function _(o){return S(e.children(o)).flat().filter(e.isVisible)}function M(o){return new Promise(s=>setTimeout(s,o))}var R={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(o,s=this.$el){const n=this.animation;return(n==="fade"?E:n==="delayed-fade"?(...c)=>E(...c,40):n?A:()=>(o(),Promise.resolve()))(o,s,this.duration).catch(e.noop)}}},V={connected(){e.addClass(this.$el,this.$options.id)}},F={mixins:[V,R],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},events:{name:e.pointerDown,passive:!1,handler(o){this.init(o)}},computed:{target:(o,s)=>(s.tBodies||[s])[0],items(){return e.children(this.target)},isEmpty(){return!this.items.length},handles({handle:o},s){return o?e.$$(o,s):this.items}},watch:{isEmpty(o){e.toggleClass(this.target,this.clsEmpty,o)},handles(o,s){e.css(s,{touchAction:"",userSelect:""}),e.css(o,{touchAction:"none",userSelect:"none"})}},update:{write(o){if(!this.drag||!e.parent(this.placeholder))return;const{pos:{x:s,y:n},origin:{offsetTop:t,offsetLeft:c},placeholder:a}=this;e.css(this.drag,{top:n-t,left:s-c});const r=this.getSortable(document.elementFromPoint(s,n));if(!r)return;const{items:h}=r;if(h.some(e.Transition.inProgress))return;const d=W(h,{x:s,y:n});if(h.length&&(!d||d===a))return;const p=this.getSortable(a),l=G(r.target,d,a,s,n,r===p&&o.moved!==d);l!==!1&&(l&&a===l||(r!==p?(p.remove(a),o.moved=d):delete o.moved,r.insert(a,l),this.touched.add(r)))},events:["move"]},methods:{init(o){const{target:s,button:n,defaultPrevented:t}=o,[c]=this.items.filter(a=>a.contains(s));!c||t||n>0||e.isInput(s)||s.closest(`.${this.clsNoDrag}`)||this.handle&&!s.closest(this.handle)||(o.preventDefault(),this.pos=e.getEventPos(o),this.touched=new Set([this]),this.placeholder=c,this.origin={target:s,index:e.index(c),...this.pos},e.on(document,e.pointerMove,this.move),e.on(document,e.pointerUp,this.end),this.threshold||this.start(o))},start(o){this.drag=O(this.$container,this.placeholder);const{left:s,top:n}=e.dimensions(this.placeholder);e.assign(this.origin,{offsetLeft:this.pos.x-s,offsetTop:this.pos.y-n}),e.addClass(this.drag,this.clsDrag,this.clsCustom),e.addClass(this.placeholder,this.clsPlaceholder),e.addClass(this.items,this.clsItem),e.addClass(document.documentElement,this.clsDragState),e.trigger(this.$el,"start",[this,this.placeholder]),B(this.pos),this.move(o)},move:K(function(o){e.assign(this.pos,e.getEventPos(o)),!this.drag&&(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(o),this.$emit("move")}),end(){if(e.off(document,e.pointerMove,this.move),e.off(document,e.pointerUp,this.end),!this.drag)return;j();const o=this.getSortable(this.placeholder);this===o?this.origin.index!==e.index(this.placeholder)&&e.trigger(this.$el,"moved",[this,this.placeholder]):(e.trigger(o.$el,"added",[o,this.placeholder]),e.trigger(this.$el,"removed",[this,this.placeholder])),e.trigger(this.$el,"stop",[this,this.placeholder]),e.remove(this.drag),this.drag=null;for(const{clsPlaceholder:s,clsItem:n}of this.touched)for(const t of this.touched)e.removeClass(t.items,s,n);this.touched=null,e.removeClass(document.documentElement,this.clsDragState)},insert(o,s){e.addClass(this.items,this.clsItem),s&&s.previousElementSibling!==o?this.animate(()=>e.before(s,o)):!s&&this.target.lastElementChild!==o&&this.animate(()=>e.append(this.target,o))},remove(o){this.target.contains(o)&&this.animate(()=>e.remove(o))},getSortable(o){do{const s=this.$getComponent(o,"sortable");if(s&&(s===this||this.group!==!1&&s.group===this.group))return s}while(o=e.parent(o))}}};let $;function B(o){let s=Date.now();$=setInterval(()=>{let{x:n,y:t}=o;t+=document.scrollingElement.scrollTop;const c=(Date.now()-s)*.3;s=Date.now(),e.scrollParents(document.elementFromPoint(n,o.y)).reverse().some(a=>{let{scrollTop:r,scrollHeight:h}=a;const{top:d,bottom:p,height:l}=e.offsetViewport(a);if(d<t&&d+35>t)r-=c;else if(p>t&&p-35<t)r+=c;else return;if(r>0&&r<h-l)return a.scrollTop=r,!0})},15)}function j(){clearInterval($)}function O(o,s){let n;if(e.isTag(s,"li","tr")){n=e.$("<div>"),e.append(n,s.cloneNode(!0).children);for(const t of s.getAttributeNames())e.attr(n,t,s.getAttribute(t))}else n=s.cloneNode(!0);return e.append(o,n),e.css(n,"margin","0","important"),e.css(n,{boxSizing:"border-box",width:s.offsetWidth,height:s.offsetHeight,padding:e.css(s,"padding")}),e.height(n.firstElementChild,e.height(s.firstElementChild)),n}function W(o,s){return o[e.findIndex(o,n=>e.pointInRect(s,e.dimensions(n)))]}function G(o,s,n,t,c,a){if(!e.children(o).length)return;const r=e.dimensions(s);if(!a)return J(o,n)||c<r.top+r.height/2?s:s.nextElementSibling;const h=e.dimensions(n),d=N([r.top,r.bottom],[h.top,h.bottom]),[p,l,m,g]=d?[t,"width","left","right"]:[c,"height","top","bottom"],f=h[l]<r[l]?r[l]-h[l]:0;return h[m]<r[m]?f&&p<r[m]+f?!1:s.nextElementSibling:f&&p>r[g]-f?!1:s}function J(o,s){const n=e.children(o).length===1;n&&e.append(o,s);const t=e.children(o),c=t.some((a,r)=>{const h=e.dimensions(a);return t.slice(r+1).some(d=>{const p=e.dimensions(d);return!N([h.left,h.right],[p.left,p.right])})});return n&&e.remove(s),c}function N(o,s){return o[1]>s[0]&&s[1]>o[0]}function K(o){let s;return function(...n){s||(s=!0,o.call(this,...n),requestAnimationFrame(()=>s=!1))}}return typeof window<"u"&&window.UIkit&&window.UIkit.component("sortable",F),F});
