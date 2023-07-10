import{k as E,D as _t,M as Et,j as wt,Y as Tt,u as k}from"./framework.aa37bc02.js";function bt(){try{return"constructor"in GestureEvent}catch{return!1}}function nt(){return typeof window<"u"&&"ontouchstart"in window}function it(s){return"pointerId"in s?null:s.type==="touchend"?s.changedTouches:s.targetTouches}function V(s){return Array.from(it(s)).map(t=>t.identifier)}function d(s){const t="buttons"in s?s.buttons:0,{shiftKey:e,altKey:n,metaKey:i,ctrlKey:r}=s;return{buttons:t,shiftKey:e,altKey:n,metaKey:i,ctrlKey:r}}const K=s=>s;function _(s,t=K){const e=it(s),{clientX:n,clientY:i}=e?e[0]:s;return t([n,i])}function U(s,t,e=K){const[n,i]=Array.from(s.touches).filter(C=>t.includes(C.identifier));if(!n||!i)throw Error("The event doesn't have two pointers matching the pointerIds");const r=i.clientX-n.clientX,o=i.clientY-n.clientY,a=(i.clientX+n.clientX)/2,u=(i.clientY+n.clientY)/2,f=Math.hypot(r,o),l=-(Math.atan2(r,o)*180)/Math.PI,y=e([f,l]),M=e([a,u]);return{values:y,origin:M}}function Gt(s,t=K){const{scrollX:e,scrollY:n,scrollLeft:i,scrollTop:r}=s.currentTarget;return t([e||i||0,n||r||0])}const F=40,$=800;function rt(s,t=K){let{deltaX:e,deltaY:n,deltaMode:i}=s;return i===1?(e*=F,n*=F):i===2&&(e*=$,n*=$),t([e,n])}function q(s,t=K){return t([s.scale,s.rotation])}function ot(){}function at(...s){return s.length===0?ot:s.length===1?s[0]:function(){var t;for(let e of s)t=e.apply(this,arguments)||t;return t}}function v(s,t){if(s===void 0){if(t===void 0)throw new Error("Must define fallback value if undefined is expected");s=t}return Array.isArray(s)?s:[s,s]}function Z(s,t){return Object.assign({},t,s||{})}function H(s,...t){return typeof s=="function"?s(...t):s}function O(s){return{_active:!1,_blocked:!1,_intentional:[!1,!1],_movement:[0,0],_initial:[0,0],_bounds:[[-1/0,1/0],[-1/0,1/0]],_lastEventType:void 0,_dragStarted:!1,_dragPreventScroll:!1,_dragIsTap:!0,_dragDelayed:!1,event:void 0,intentional:!1,values:[0,0],velocities:[0,0],delta:[0,0],movement:[0,0],offset:[0,0],lastOffset:[0,0],direction:[0,0],initial:[0,0],previous:[0,0],first:!1,last:!1,active:!1,timeStamp:0,startTime:0,elapsedTime:0,cancel:ot,canceled:!1,memo:void 0,args:void 0,...s}}function ct(){const s={hovering:!1,scrolling:!1,wheeling:!1,dragging:!1,moving:!1,pinching:!1,touches:0,buttons:0,down:!1,shiftKey:!1,altKey:!1,metaKey:!1,ctrlKey:!1,locked:!1},t=O({_pointerId:void 0,axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0,tap:!1,swipe:[0,0]}),e=O({_pointerIds:[],da:[0,0],vdva:[0,0],origin:void 0,turns:0}),n=O({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),i=O({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0}),r=O({axis:void 0,xy:[0,0],vxvy:[0,0],velocity:0,distance:0});return{shared:s,drag:t,pinch:e,wheel:n,move:i,scroll:r}}class It{constructor(t){this.classes=t,this.pointerIds=new Set,this.touchIds=new Set,this.supportsTouchEvents=nt(),this.supportsGestureEvents=bt(),this.bind=(...e)=>{const n={};for(let i of this.classes)new i(this,e).addBindings(n);for(let i in this.nativeRefs)c(n,i,r=>this.nativeRefs[i]({...this.state.shared,event:r,args:e}));return this.config.domTarget?Pt(this,n):Ot(this,n)},this.clean=()=>{const{eventOptions:e,domTarget:n}=this.config,i=k(n);i&&A(i,ht(this.domListeners),e),Object.values(this.timeouts).forEach(clearTimeout),Dt(this)},this.classes=t,this.state=ct(),this.timeouts={},this.domListeners=[],this.windowListeners={}}}function ut(s,t){"pointerId"in t?s.pointerIds.add(t.pointerId):s.touchIds=new Set(V(t))}function lt(s,t){"pointerId"in t?s.pointerIds.delete(t.pointerId):V(t).forEach(e=>s.touchIds.delete(e))}function Dt(s){const{config:{window:t,eventOptions:e},windowListeners:n}=s,i=k(t);if(i){for(let r in n){const o=n[r];A(i,o,e)}s.windowListeners={}}}function Mt({config:s,windowListeners:t},e,n=s.eventOptions){const i=k(s.window);i&&(A(i,t[e],n),delete t[e])}function Ct({config:s,windowListeners:t},e,n=[],i=s.eventOptions){const r=k(s.window);r&&(A(r,t[e],i),ft(r,t[e]=n,i))}function Pt({config:s,domListeners:t},e){const{eventOptions:n,domTarget:i}=s,r=k(i);if(!r)throw new Error("domTarget must be defined");A(r,ht(t),n);for(let[o,a]of Object.entries(e)){const u=o.slice(2).toLowerCase();t.push([u,at(...a)])}ft(r,t,n)}function Ot({config:s},t){const e={},n=s.eventOptions.capture?"Capture":"";for(let[i,r]of Object.entries(t)){const o=Array.isArray(r)?r:[r],a=i+n;e[a]=at(...o)}return e}function ht(s=[]){return s.splice(0,s.length)}function c(s,t,e){s[t]||(s[t]=[]),s[t].push(e)}function ft(s,t=[],e={}){if(s)for(let[n,i]of t)s.addEventListener(n,i,e)}function A(s,t=[],e={}){if(s)for(let[n,i]of t)s.removeEventListener(n,i,e)}function z(s,t){return s.map((e,n)=>e+t[n])}function j(s,t){return s.map((e,n)=>e-t[n])}function x(s){return Math.hypot(...s)}function dt(s,t=s){const e=x(t),n=e===0?0:1/e,i=t.map(o=>n*o);return{distance:x(s),direction:i}}function gt(s,t,e){const n=x(t),i=n===0?0:1/n,r=e===0?0:1/e,o=r*n,a=t.map(l=>r*l),u=t.map(l=>i*l),f=x(s);return{velocities:a,velocity:o,distance:f,direction:u}}function R(s){return Math.sign?Math.sign(s):+(s>0)-+(s<0)||+s}function xt(s,t,e){return Math.max(t,Math.min(s,e))}function kt(s,t){return Math.pow(s,t*5)}function J(s,t,e){return t===0||Math.abs(t)===1/0?kt(s,e):s*t*e/(t+e*s)}function Q(s,t,e,n=.15){return n===0?xt(s,t,e):s<t?-J(t-s,e-t,n)+t:s>e?+J(s-e,e-t,n)+e:s}const g=new Map,Kt=s=>s;class pt{constructor(t,e=[]){this.controller=t,this.args=e,this.debounced=!0,this.setTimeout=(n,i=140,...r)=>{clearTimeout(this.controller.timeouts[this.stateKey]),this.controller.timeouts[this.stateKey]=window.setTimeout(n,i,...r)},this.clearTimeout=()=>{clearTimeout(this.controller.timeouts[this.stateKey])},this.fireGestureHandler=(n=!1)=>{if(this.state._blocked)return this.debounced||(this.state._active=!1,this.clean()),null;if(!n&&!this.state.intentional&&!this.config.triggerAllEvents)return null;if(this.state.intentional){const u=this.state.active,f=this.state._active;this.state.active=f,this.state.first=f&&!u,this.state.last=u&&!f,this.controller.state.shared[this.ingKey]=f}const i=this.controller.pointerIds.size||this.controller.touchIds.size,r=this.controller.state.shared.buttons>0||i>0,o={...this.controller.state.shared,...this.state,...this.mapStateValues(this.state),locked:!!document.pointerLockElement,touches:i,down:r},a=this.handler(o);return this.state.memo=a!==void 0?a:this.state.memo,o},this.controller=t,this.args=e}get config(){return this.controller.config[this.stateKey]}get enabled(){return this.controller.config.enabled&&this.config.enabled}get state(){return this.controller.state[this.stateKey]}get handler(){return this.controller.handlers[this.stateKey]}get transform(){return this.config.transform||this.controller.config.transform||Kt}updateSharedState(t){Object.assign(this.controller.state.shared,t)}updateGestureState(t){Object.assign(this.state,t)}checkIntentionality(t,e){return{_intentional:t,_blocked:!1}}getMovement(t){const{rubberband:e,threshold:n}=this.config,{_bounds:i,_initial:r,_active:o,_intentional:a,lastOffset:u,movement:f}=this.state,l=this.getInternalMovement(t,this.state),y=this.transform(n).map(Math.abs),M=a[0]===!1?tt(l[0],y[0]):a[0],C=a[1]===!1?tt(l[1],y[1]):a[1],m=this.checkIntentionality([M,C],l);if(m._blocked)return{...m,_movement:l,delta:[0,0]};const p=m._intentional,St=l;let P=[p[0]!==!1?l[0]-p[0]:0,p[1]!==!1?l[1]-p[1]:0];const yt=z(P,u),B=o?e:[0,0];return P=et(i,z(P,r),B),{...m,intentional:p[0]!==!1||p[1]!==!1,_initial:r,_movement:St,movement:P,values:t,offset:et(i,yt,B),delta:j(P,f)}}clean(){this.clearTimeout()}}function tt(s,t){return Math.abs(s)>=t?R(s)*t:!1}function et(s,[t,e],[n,i]){const[[r,o],[a,u]]=s;return[Q(t,r,o,n),Q(e,a,u,i)]}function h({state:s},t,e){const{timeStamp:n,type:i}=t,r=s.values,o=e?0:n-s.startTime;return{_lastEventType:i,event:t,timeStamp:n,elapsedTime:o,previous:r}}function S({state:s,config:t,stateKey:e,args:n},i,r){const o=s.offset,a=r.timeStamp,{initial:u,bounds:f}=t,l={...ct()[e],_active:!0,args:n,values:i,initial:i,offset:o,lastOffset:o,startTime:a};return{...l,_initial:H(u,l),_bounds:H(f,l)}}class Y extends pt{getInternalMovement(t,e){return j(t,e.initial)}checkIntentionality(t,e){if(t[0]===!1&&t[1]===!1)return{_intentional:t,axis:this.state.axis};const[n,i]=e.map(Math.abs),r=this.state.axis||(n>i?"x":n<i?"y":void 0);return!this.config.axis&&!this.config.lockDirection?{_intentional:t,_blocked:!1,axis:r}:r?this.config.axis&&r!==this.config.axis?{_intentional:t,_blocked:!0,axis:r}:(t[r==="x"?1:0]=!1,{_intentional:t,_blocked:!1,axis:r}):{_intentional:[!1,!1],_blocked:!1,axis:r}}getKinematics(t,e){const n=this.getMovement(t);if(!n._blocked){const i=e.timeStamp-this.state.timeStamp;Object.assign(n,gt(n.movement,n.delta,i))}return n}mapStateValues(t){return{xy:t.values,vxvy:t.velocities}}}const At=3;function st(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}class Wt extends Y{constructor(){super(...arguments),this.ingKey="dragging",this.stateKey="drag",this.setPointerCapture=t=>{if(this.config.useTouch||document.pointerLockElement)return;const{target:e,pointerId:n}=t;e&&"setPointerCapture"in e&&e.setPointerCapture(n),this.updateGestureState({_dragTarget:e,_dragPointerId:n})},this.releasePointerCapture=()=>{if(this.config.useTouch||document.pointerLockElement)return;const{_dragTarget:t,_dragPointerId:e}=this.state;if(e&&t&&"releasePointerCapture"in t&&(!("hasPointerCapture"in t)||t.hasPointerCapture(e)))try{t.releasePointerCapture(e)}catch{}},this.preventScroll=t=>{this.state._dragPreventScroll&&t.cancelable&&t.preventDefault()},this.getEventId=t=>this.config.useTouch?t.changedTouches[0].identifier:t.pointerId,this.isValidEvent=t=>this.state._pointerId===this.getEventId(t),this.shouldPreventWindowScrollY=this.config.preventWindowScrollY&&this.controller.supportsTouchEvents,this.setUpWindowScrollDetection=t=>{st(t),Ct(this.controller,this.stateKey,[["touchmove",this.preventScroll],["touchend",this.clean.bind(this)],["touchcancel",this.clean.bind(this)]],{passive:!1}),this.setTimeout(this.startDrag.bind(this),250,t)},this.setUpDelayedDragTrigger=t=>{this.state._dragDelayed=!0,st(t),this.setTimeout(this.startDrag.bind(this),this.config.delay,t)},this.setStartState=t=>{const e=_(t,this.transform);this.updateSharedState(d(t)),this.updateGestureState({...S(this,e,t),...h(this,t,!0),_pointerId:this.getEventId(t)}),this.updateGestureState(this.getMovement(e))},this.onDragStart=t=>{ut(this.controller,t),!(!this.enabled||this.state._active)&&(this.setStartState(t),this.setPointerCapture(t),this.shouldPreventWindowScrollY?this.setUpWindowScrollDetection(t):this.config.delay>0?this.setUpDelayedDragTrigger(t):this.startDrag(t,!0))},this.onDragChange=t=>{if(this.state.canceled||!this.state._active||!this.isValidEvent(t)||this.state._lastEventType===t.type&&t.timeStamp===this.state.timeStamp)return;let e;if(document.pointerLockElement){const{movementX:u,movementY:f}=t;e=z(this.transform([u,f]),this.state.values)}else e=_(t,this.transform);const n=this.getKinematics(e,t);if(!this.state._dragStarted){if(this.state._dragDelayed){this.startDrag(t);return}if(this.shouldPreventWindowScrollY)if(!this.state._dragPreventScroll&&n.axis)if(n.axis==="x")this.startDrag(t);else{this.state._active=!1;return}else return;else return}const i=d(t);this.updateSharedState(i);const r=h(this,t),o=x(n._movement);let{_dragIsTap:a}=this.state;a&&o>=At&&(a=!1),this.updateGestureState({...r,...n,_dragIsTap:a}),this.fireGestureHandler()},this.onDragEnd=t=>{if(lt(this.controller,t),!this.isValidEvent(t)||(this.clean(),!this.state._active))return;this.state._active=!1;const e=this.state._dragIsTap,[n,i]=this.state.velocities,[r,o]=this.state.movement,[a,u]=this.state._intentional,[f,l]=this.config.swipeVelocity,[y,M]=this.config.swipeDistance,C=this.config.swipeDuration,m={...h(this,t),...this.getMovement(this.state.values)},p=[0,0];m.elapsedTime<C&&(a!==!1&&Math.abs(n)>f&&Math.abs(r)>y&&(p[0]=R(n)),u!==!1&&Math.abs(i)>l&&Math.abs(o)>M&&(p[1]=R(i))),this.updateSharedState({buttons:0}),this.updateGestureState({...m,tap:e,swipe:p}),this.fireGestureHandler(this.config.filterTaps&&e===!0)},this.clean=()=>{super.clean(),this.state._dragStarted=!1,this.releasePointerCapture(),Mt(this.controller,this.stateKey)},this.onCancel=()=>{this.state.canceled||(this.updateGestureState({canceled:!0,_active:!1}),this.updateSharedState({buttons:0}),_t(this.fireGestureHandler))},this.onClick=t=>{this.state._dragIsTap||t.stopPropagation()}}startDrag(t,e=!1){!this.state._active||this.state._dragStarted||(e||this.setStartState(t),this.updateGestureState({_dragStarted:!0,_dragPreventScroll:!0,cancel:this.onCancel}),this.clearTimeout(),this.fireGestureHandler())}addBindings(t){if(this.config.useTouch?(c(t,"onTouchStart",this.onDragStart),c(t,"onTouchMove",this.onDragChange),c(t,"onTouchEnd",this.onDragEnd),c(t,"onTouchCancel",this.onDragEnd)):(c(t,"onPointerDown",this.onDragStart),c(t,"onPointerMove",this.onDragChange),c(t,"onPointerUp",this.onDragEnd),c(t,"onPointerCancel",this.onDragEnd)),this.config.filterTaps){const e=this.controller.config.eventOptions.capture?"onClick":"onClickCapture";c(t,e,this.onClick)}}}function w(s,t){let e,n=[],i,r=!1;function o(...a){return r&&e===this&&t(a,n)||(i=s.apply(this,a),r=!0,e=this,n=a),i}return o}function L(s,t){if(s===t)return!0;if(s&&t&&typeof s=="object"&&typeof t=="object"){if(s.constructor!==t.constructor)return!1;let e,n,i;if(Array.isArray(s)){if(e=s.length,e!==t.length)return!1;for(n=e;n--!==0;)if(!L(s[n],t[n]))return!1;return!0}let r;if(typeof Map=="function"&&s instanceof Map&&t instanceof Map){if(s.size!==t.size)return!1;for(r=s.entries();!(n=r.next()).done;)if(!t.has(n.value[0]))return!1;for(r=s.entries();!(n=r.next()).done;)if(!L(n.value[1],t.get(n.value[0])))return!1;return!0}if(typeof Set=="function"&&s instanceof Set&&t instanceof Set){if(s.size!==t.size)return!1;for(r=s.entries();!(n=r.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(s.constructor===RegExp)return s.source===t.source&&s.flags===t.flags;if(s.valueOf!==Object.prototype.valueOf)return s.valueOf()===t.valueOf();if(s.toString!==Object.prototype.toString)return s.toString()===t.toString();if(i=Object.keys(s),e=i.length,e!==Object.keys(t).length)return!1;for(n=e;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[n]))return!1;if(typeof Element<"u"&&s instanceof Element)return!1;for(n=e;n--!==0;)if(!(i[n]==="_owner"&&s.$$typeof)&&!L(s[i[n]],t[i[n]]))return!1;return!0}return s!==s&&t!==t}function T(s,t){try{return L(s,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}function W(s={},t){const e={};for(const[n,i]of Object.entries(t))switch(typeof i){case"function":e[n]=i.call(e,s[n],n,s);break;case"object":e[n]=W(s[n],i);break;case"boolean":i&&(e[n]=s[n]);break}return e}const Lt=180,Ht=.15,zt=.5,Rt=50,Yt=250,vt={threshold(s=0){return v(s)},rubberband(s=0){switch(s){case!0:return v(Ht);case!1:return v(0);default:return v(s)}},enabled(s=!0){return s},triggerAllEvents(s=!1){return s},initial(s=0){return typeof s=="function"?s:v(s)},transform:!0},N={...vt,axis:!0,lockDirection(s=!1){return s},bounds(s={}){if(typeof s=="function")return r=>N.bounds(s(r));const{left:t=-1/0,right:e=1/0,top:n=-1/0,bottom:i=1/0}=s;return[[t,e],[n,i]]}},Vt=typeof window<"u"&&window.document&&window.document.createElement,jt={enabled(s=!0){return s},domTarget:!0,window(s=Vt?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform:!0},Nt={...vt,bounds(s,t,{distanceBounds:e={},angleBounds:n={}}){const i=o=>{const a=Z(H(e,o),{min:-1/0,max:1/0});return[a.min,a.max]},r=o=>{const a=Z(H(n,o),{min:-1/0,max:1/0});return[a.min,a.max]};return typeof e!="function"&&typeof n!="function"?[i(),r()]:o=>[i(o),r(o)]}},Xt={...N,useTouch(s=!0){return s&&nt()},preventWindowScrollY(s=!1){return s},threshold(s,t,{filterTaps:e=!1,lockDirection:n=!1,axis:i=void 0}){const r=v(s,e?3:n||i?1:0);return this.filterTaps=e,r},swipeVelocity(s=zt){return v(s)},swipeDistance(s=Rt){return v(s)},swipeDuration(s=Yt){return s},delay(s=0){switch(s){case!0:return Lt;case!1:return 0;default:return s}}};function b(s){return W(s,jt)}function X(s={}){return W(s,N)}function Bt(s={}){return W(s,Nt)}function Ut(s={}){return W(s,Xt)}function Ft({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.move=X(i),r}function $t({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.hover={enabled:!0,...i},r}function qt({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.drag=Ut(i),r}function Zt({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.pinch=Bt(i),r}function Jt({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.scroll=X(i),r}function Qt({domTarget:s,eventOptions:t,window:e,enabled:n,...i}){const r=b({domTarget:s,eventOptions:t,window:e,enabled:n});return r.wheel=X(i),r}function G(s,t,e={}){const n=te(s),i=new It(n);return i.config=t,i.handlers=s,i.nativeRefs=e,Et()&&!t.manual&&(wt(i.bind),Tt(i.clean)),i}function te(s){const t=new Set;return s.drag&&t.add(g.get("drag")),s.wheel&&t.add(g.get("wheel")),s.scroll&&t.add(g.get("scroll")),s.move&&t.add(g.get("move")),s.pinch&&t.add(g.get("pinch")),s.hover&&t.add(g.get("hover")),t}function ee(s,t={}){g.set("drag",Wt);const e=E();return e.value||(e.value=w(qt,T)),G({drag:s},e.value(t))}class mt extends Y{constructor(){super(...arguments),this.ingKey="moving",this.stateKey="move",this.debounced=!0,this.onMove=t=>{this.enabled&&(this.setTimeout(this.onMoveEnd),this.state._active?this.onMoveChange(t):this.onMoveStart(t))},this.onMoveStart=t=>{this.updateSharedState(d(t));const e=_(t,this.transform);this.updateGestureState({...S(this,e,t),...h(this,t,!0)}),this.updateGestureState(this.getMovement(e)),this.fireGestureHandler()},this.onMoveChange=t=>{this.updateSharedState(d(t));const e=_(t,this.transform);this.updateGestureState({...h(this,t),...this.getKinematics(e,t)}),this.fireGestureHandler()},this.onMoveEnd=()=>{if(this.clean(),!this.state._active)return;const t=this.state.values;this.updateGestureState(this.getMovement(t)),this.updateGestureState({velocities:[0,0],velocity:0,_active:!1}),this.fireGestureHandler()},this.hoverTransform=()=>this.controller.config.hover.transform||this.controller.config.transform,this.onPointerEnter=t=>{if(this.controller.state.shared.hovering=!0,!!this.controller.config.enabled){if(this.controller.config.hover.enabled){const e=_(t,this.hoverTransform()),n={...this.controller.state.shared,...this.state,...h(this,t,!0),args:this.args,values:e,active:!0,hovering:!0};this.controller.handlers.hover({...n,...this.mapStateValues(n)})}"move"in this.controller.handlers&&this.onMoveStart(t)}},this.onPointerLeave=t=>{if(this.controller.state.shared.hovering=!1,"move"in this.controller.handlers&&this.onMoveEnd(),!this.controller.config.hover.enabled)return;const e=_(t,this.hoverTransform()),n={...this.controller.state.shared,...this.state,...h(this,t),args:this.args,values:e,active:!1};this.controller.handlers.hover({...n,...this.mapStateValues(n)})}}addBindings(t){"move"in this.controller.handlers&&c(t,"onPointerMove",this.onMove),"hover"in this.controller.handlers&&(c(t,"onPointerEnter",this.onPointerEnter),c(t,"onPointerLeave",this.onPointerLeave))}}class se extends pt{getInternalMovement(t,e){const n=e.values[1];let[i,r=n]=t,o=r-n,a=e.turns;return Math.abs(o)>270&&(a+=R(o)),j([i,r-360*a],e.initial)}getKinematics(t,e){const n=this.getMovement(t),i=(t[1]-n._movement[1]-this.state.initial[1])/360,r=e.timeStamp-this.state.timeStamp,{distance:o,velocity:a,...u}=gt(n.movement,n.delta,r);return{turns:i,...n,...u}}mapStateValues(t){return{da:t.values,vdva:t.velocities}}}const ne=7,ie=260;class re extends se{constructor(){super(...arguments),this.ingKey="pinching",this.stateKey="pinch",this.onPinchStart=t=>{ut(this.controller,t);const e=this.controller.touchIds;if(!this.enabled||this.state._active&&this.state._pointerIds.every(o=>e.has(o))||e.size<2)return;const n=Array.from(e).slice(0,2),{values:i,origin:r}=U(t,n,this.transform);this.updateSharedState(d(t)),this.updateGestureState({...S(this,i,t),...h(this,t,!0),_pointerIds:n,cancel:this.onCancel,origin:r}),this.updateGestureState(this.getMovement(i)),this.fireGestureHandler()},this.onPinchChange=t=>{const{canceled:e,_active:n}=this.state;if(e||!n||t.timeStamp===this.state.timeStamp)return;const i=d(t);this.updateSharedState(i);try{const{values:r,origin:o}=U(t,this.state._pointerIds,this.transform),a=this.getKinematics(r,t);this.updateGestureState({...h(this,t),...a,origin:o}),this.fireGestureHandler()}catch{this.onPinchEnd(t)}},this.onPinchEnd=t=>{lt(this.controller,t);const e=V(t);this.state._pointerIds.every(n=>!e.includes(n))||(this.clean(),this.state._active&&(this.updateGestureState({...h(this,t),...this.getMovement(this.state.values),_active:!1}),this.fireGestureHandler()))},this.onCancel=()=>{this.state.canceled||(this.updateGestureState({_active:!1,canceled:!0}),this.fireGestureHandler())},this.onGestureStart=t=>{if(!this.enabled)return;t.preventDefault();const e=q(t,this.transform);this.updateSharedState(d(t)),this.updateGestureState({...S(this,e,t),...h(this,t,!0),origin:[t.clientX,t.clientY],cancel:this.onCancel}),this.updateGestureState(this.getMovement(e)),this.fireGestureHandler()},this.onGestureChange=t=>{const{canceled:e,_active:n}=this.state;if(e||!n)return;t.preventDefault();const i=d(t);this.updateSharedState(i);const r=q(t,this.transform);r[0]=(r[0]-this.state.event.scale)*ie+this.state.values[0];const o=this.getKinematics(r,t);this.updateGestureState({...h(this,t),...o,origin:[t.clientX,t.clientY]}),this.fireGestureHandler()},this.onGestureEnd=t=>{this.clean(),this.state._active&&(this.updateGestureState({...h(this,t),...this.getMovement(this.state.values),_active:!1,origin:[t.clientX,t.clientY]}),this.fireGestureHandler())},this.wheelShouldRun=t=>this.enabled&&t.ctrlKey,this.getWheelValuesFromEvent=t=>{const[,e]=rt(t,this.transform),{values:[n,i]}=this.state;return{values:[n-e*ne,i!==void 0?i:0],origin:[t.clientX,t.clientY],delta:[0,e]}},this.onWheel=t=>{this.wheelShouldRun(t)&&(this.setTimeout(this.onWheelEnd),this.state._active?this.onWheelChange(t):this.onWheelStart(t))},this.onWheelStart=t=>{const{values:e,delta:n,origin:i}=this.getWheelValuesFromEvent(t);t.cancelable&&t.preventDefault(),this.updateSharedState(d(t)),this.updateGestureState({...S(this,e,t),...h(this,t,!0),initial:this.state.values,offset:e,delta:n,origin:i}),this.updateGestureState(this.getMovement(e)),this.fireGestureHandler()},this.onWheelChange=t=>{t.cancelable&&t.preventDefault(),this.updateSharedState(d(t));const{values:e,origin:n,delta:i}=this.getWheelValuesFromEvent(t);this.updateGestureState({...h(this,t),...this.getKinematics(e,t),origin:n,delta:i}),this.fireGestureHandler()},this.onWheelEnd=()=>{this.clean(),this.state._active&&(this.state._active=!1,this.updateGestureState(this.getMovement(this.state.values)),this.fireGestureHandler())}}addBindings(t){this.controller.config.domTarget&&!this.controller.supportsTouchEvents&&this.controller.supportsGestureEvents?(c(t,"onGestureStart",this.onGestureStart),c(t,"onGestureChange",this.onGestureChange),c(t,"onGestureEnd",this.onGestureEnd)):(c(t,"onTouchStart",this.onPinchStart),c(t,"onTouchMove",this.onPinchChange),c(t,"onTouchEnd",this.onPinchEnd),c(t,"onTouchCancel",this.onPinchEnd),c(t,"onWheel",this.onWheel))}}class oe extends Y{constructor(){super(...arguments),this.ingKey="scrolling",this.stateKey="scroll",this.debounced=!0,this.handleEvent=t=>{if(!this.enabled)return;this.clearTimeout(),this.setTimeout(this.onEnd);const e=Gt(t,this.transform);if(this.updateSharedState(d(t)),this.state._active)this.updateGestureState({...h(this,t),...this.getKinematics(e,t)});else{this.updateGestureState({...S(this,e,t),...h(this,t,!0),initial:this.state.values});const n=this.getMovement(e),i=dt(n.delta);this.updateGestureState(n),this.updateGestureState(i)}this.fireGestureHandler()},this.onEnd=()=>{this.clean(),this.state._active&&(this.updateGestureState({...this.getMovement(this.state.values),_active:!1,velocities:[0,0],velocity:0}),this.fireGestureHandler())}}addBindings(t){c(t,"onScroll",this.handleEvent)}}class ae extends Y{constructor(){super(...arguments),this.ingKey="wheeling",this.stateKey="wheel",this.debounced=!0,this.handleEvent=t=>{if(t.ctrlKey&&"pinch"in this.controller.handlers||!this.enabled)return;this.setTimeout(this.onEnd),this.updateSharedState(d(t));const e=z(rt(t,this.transform),this.state.values);if(this.state._active)this.updateGestureState({...h(this,t),...this.getKinematics(e,t)});else{this.updateGestureState({...S(this,e,t),...h(this,t,!0),initial:this.state.values});const n=this.getMovement(e),i=dt(n.delta);this.updateGestureState(n),this.updateGestureState(i)}this.fireGestureHandler()},this.onEnd=()=>{if(this.clean(),!this.state._active)return;const t=this.getMovement(this.state.values);this.updateGestureState(t),this.updateGestureState({_active:!1,velocities:[0,0],velocity:0}),this.fireGestureHandler()}}addBindings(t){c(t,"onWheel",this.handleEvent)}}function ce(s,t={}){g.set("hover",mt);const e=E();return e.value||(e.value=w($t,T)),G({hover:s},e.value(t))}function ue(s,t={}){g.set("move",mt);const e=E();return e.value||(e.value=w(Ft,T)),G({move:s},e.value(t))}function le(s,t={}){g.set("pinch",re);const e=E();return e.value||(e.value=w(Zt,T)),G({pinch:s},e.value(t))}function he(s,t={}){g.set("scroll",oe);const e=E();return e.value||(e.value=w(Jt,T)),G({scroll:s},e.value(t))}function fe(s,t={}){g.set("wheel",ae);const e=E();return e.value||(e.value=w(Qt,T)),G({wheel:s},e.value(t))}const I=(s,t)=>({created:s,unmounted:t,bind:s,unbind:t}),D=s=>`Your v-${s} directive must have a handler specified as a value`,de=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("drag"));e.gestures||(e.gestures={});const r=ee(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.drag=r},(e,n,i)=>{!e.gestures||!e.gestures.drag||e.gestures.drag.clean()}),ge=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("move"));e.gestures||(e.gestures={});const r=ue(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.move=r},(e,n,i)=>{!e.gestures||!e.gestures.move||e.gestures.move.clean()}),pe=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("hover"));e.gestures||(e.gestures={});const r=ce(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.hover=r},(e,n,i)=>{!e.gestures||!e.gestures.hover||e.gestures.hover.clean()}),ve=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("pinch"));e.gestures||(e.gestures={});const r=le(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.pinch=r},(e,n,i)=>{!e.gestures||!e.gestures.pinch||e.gestures.pinch.clean()}),me=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("wheel"));e.gestures||(e.gestures={});const r=fe(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.wheel=r},(e,n,i)=>{!e.gestures||!e.gestures.wheel||e.gestures.wheel.clean()}),Se=()=>I((e,n,i)=>{if(!n.value)throw new Error(D("scroll"));e.gestures||(e.gestures={});const r=he(n.value,{domTarget:e,manual:!0});r.bind(),e.gestures.drag=r},(e,n,i)=>{!e.gestures||!e.gestures.drag||e.gestures.drag.clean()}),_e={install(s,t){Object.entries({drag:de,hover:pe,move:ge,pinch:ve,scroll:Se,wheel:me}).forEach(([n,i])=>s.directive(n,i()))}};export{_e as G,ee as u};
