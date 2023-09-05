import"./midi.d68b2a41.js";import{t as x}from"./tempo.de4f8772.js";import{u as w}from"./sequence.594e5a2c.js";import{j as C}from"./colors.b83dc710.js";import{_ as b}from"./SvgRing.ce48b656.js";import"./tuner.0ba209fb.js";import"./audio.4983d088.js";import"./loop.7b127e73.js";import"./mic.e6269e8a.js";import"./Midi.1f918097.js";import"./noise.6733575a.js";import"./index.139b2562.js";import"./synth.f8bdd3f9.js";import"./theory.61e5aadb.js";import{a9 as B,r as _,b as v,A as N,o as s,c as l,F as y,d as g,f as p,u as t,B as $,a as n,x as D,g as A}from"./framework.18a7d3ba.js";import{C as W}from"./CircleCenter.7a5bb83e.js";import"./index.ff80e595.js";import"./commonjsHelpers.de833af9.js";import"./index.b30cd6d2.js";import"./calculations.65ee336d.js";import"./index.8c24e7d1.js";import"./Loop.e0ddb3d9.js";import"./Sequence.cd1d0d05.js";import"./UserMedia.f33e4faf.js";import"./index.654bd828.js";import"./midiRender.50bd33c3.js";import"./Subtract.d22cbd0e.js";import"./OnePoleFilter.477d959f.js";import"./FFT.a27ef955.js";import"./BitCrusher.a8d04589.js";import"./Filter.3335ee5d.js";import"./AutoPanner.3abf4fbf.js";import"./Scale.a106cb29.js";import"./PingPongDelay.0dd5299b.js";import"./MonoSynth.2582d87a.js";import"./index.86652af6.js";import"./state.505e0129.js";const q=["transform"],E=["y1","y2"],F=B({__name:"RhythmWheel",props:{order:{type:Number,default:0},total:{type:Number,default:1},maxNum:{type:Number,default:64}},setup(o){const r=o;new Array(r.maxNum).fill(!1).map((m,u)=>({num:u,active:m})),_({radius:v(()=>450/r.total*r.order)});const c=v(()=>250+r.order*250/r.total),{seq:e}=w({over:8,under:8,sound:r.order==1?"A":"E",volume:1},r.order,"wheel");let d=e.meter.over;function a({delta:m}){d+=(m[0]-m[1])/20,e.meter.over=Math.floor(d)}return(m,u)=>{const f=b,k=N("drag");return s(),l("g",{class:"wheel",onDblclick:u[0]||(u[0]=h=>t(e).mutes.fill(!!t(e).mutes[0])),transform:`rotate(${-t(e).progress*360})`},[(s(!0),l(y,null,g(t(e).steps,(h,i)=>(s(),l("g",{class:"sector",key:h},[p(f,{cx:0,cy:0,onClick:L=>t(e).mutes[i]=!t(e).mutes[i],from:i/t(e).meter.over*360,to:(i+1)/t(e).meter.over*360,fill:t(C)(i+t(x).pitch/12*t(e).meter.over,t(e).meter.over,1,t(e).mutes[i]?.2:1),radius:c.value,thickness:250/o.total},null,8,["onClick","from","to","fill","radius","thickness"])]))),128)),$(p(f,{cx:0,cy:0,from:0,to:359.9,fill:"gray",radius:c.value,thickness:50},null,8,["radius"]),[[k,a]]),n("line",{y1:-450/o.total*o.order,y2:-450/o.total*(o.order+1),stroke:"currentColor","stroke-width":"4"},null,8,E)],40,q)}}});_((()=>[{num:4,den:4},{num:16,den:16}])());const R={class:"flex flex-col items-center w-full relative pb-12 p-4 fullscreen-container rounded-3xl",id:"screen"},S={class:"w-full max-h-90vh",id:"metronome",version:"1.1",baseProfile:"full",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{"user-select":"none","touch-action":"none"}},V=n("defs",null,[n("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[n("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})])],-1),j=n("line",{y2:-450,"stroke-width":"4","stroke-linecap":"round",stroke:"currentColor"},null,-1),we={__name:"RhythmWheels",setup(o){const r=D(2);return(c,e)=>(s(),l("div",R,[(s(),l("svg",S,[V,(s(!0),l(y,null,g(r.value,(d,a)=>(s(),A(F,{key:a,order:a,total:r.value},null,8,["order","total"]))),128)),j,p(W)]))]))}};export{we as default};
