import{L as s}from"./Loop.b192c9c2.js";import{b as c,ae as a,o as r,v as h}from"./index.83aed4fc.js";function*p(t){let e=0;for(;e<t;)e=a(e,0,t-1),yield e,e++}function*f(t){let e=t-1;for(;e>=0;)e=a(e,0,t-1),yield e,e--}function*i(t,e){for(;;)yield*e(t)}function*o(t,e){let n=e?0:t-1;for(;;)n=a(n,0,t-1),yield n,e?(n++,n>=t-1&&(e=!1)):(n--,n<=0&&(e=!0))}function*u(t){let e=0,n=0;for(;e<t;)e=a(e,0,t-1),yield e,n++,e+=n%2?2:-1}function*y(t){let e=t-1,n=0;for(;e>=0;)e=a(e,0,t-1),yield e,n++,e+=n%2?-2:1}function*v(t){for(;;)yield Math.floor(Math.random()*t)}function*x(t){const e=[];for(let n=0;n<t;n++)e.push(n);for(;e.length>0;){const n=e.splice(Math.floor(e.length*Math.random()),1);yield a(n[0],0,t-1)}}function*g(t){let e=Math.floor(Math.random()*t);for(;;)e===0?e++:e===t-1||Math.random()<.5?e--:e++,yield e}function*d(t,e="up",n=0){switch(c(t>=1,"The number of values must be at least one"),e){case"up":yield*i(t,p);case"down":yield*i(t,f);case"upDown":yield*o(t,!0);case"downUp":yield*o(t,!1);case"alternateUp":yield*i(t,u);case"alternateDown":yield*i(t,y);case"random":yield*v(t);case"randomOnce":yield*i(t,x);case"randomWalk":yield*g(t)}}class l extends s{constructor(){super(r(l.getDefaults(),arguments,["callback","values","pattern"])),this.name="Pattern";const e=r(l.getDefaults(),arguments,["callback","values","pattern"]);this.callback=e.callback,this._values=e.values,this._pattern=d(e.values.length,e.pattern),this._type=e.pattern}static getDefaults(){return Object.assign(s.getDefaults(),{pattern:"up",values:[],callback:h})}_tick(e){const n=this._pattern.next();this._index=n.value,this._value=this._values[n.value],this.callback(e,this._value)}get values(){return this._values}set values(e){this._values=e,this.pattern=this._type}get value(){return this._value}get index(){return this._index}get pattern(){return this._type}set pattern(e){this._type=e,this._pattern=d(this._values.length,this._type)}}export{l as P};