import"./midi.e7db086d.js";import{t as w}from"./tempo.ec11fea7.js";import{u as x}from"./sequence.d32f550b.js";import{j as C}from"./colors.60a0cd0b.js";import{_ as b}from"./ring.011ccab3.js";import"./tuner.71dfbc04.js";import"./audio.91866368.js";import"./loop.708737a2.js";import"./mic.425e76d6.js";import"./Midi.1f918097.js";import"./noise.41b2e114.js";import"./index.cccf7ef0.js";import"./synth.3f37295f.js";import"./theory.dec16ed9.js";import{a7 as N,r as _,b as v,y as $,o as s,c as l,F as y,d as g,f as p,u as t,z as B,a as n,q as D,g as q}from"./framework.88e9bc5c.js";import{C as W}from"./CircleCenter.06526fce.js";import"./index.bdd8aab5.js";import"./commonjsHelpers.de833af9.js";import"./index.140cffd8.js";import"./calculations.65ee336d.js";import"./index.018e3fa0.js";import"./Loop.4db2aa01.js";import"./Sequence.ac2a9b47.js";import"./UserMedia.c8f7c51a.js";import"./index.654bd828.js";import"./midiRender.262eddaf.js";import"./Subtract.e7604129.js";import"./OnePoleFilter.771f13b4.js";import"./FFT.3fa611c6.js";import"./BitCrusher.e1eba636.js";import"./Filter.e19ab36f.js";import"./AutoPanner.d44b63e1.js";import"./Scale.f9a07a23.js";import"./PingPongDelay.02aa6511.js";import"./MonoSynth.3cdcc469.js";import"./index.be7eb4a8.js";import"./state.13f6c2e7.js";const A=["transform"],E=["y1","y2"],F=N({__name:"RhythmWheel",props:{order:{type:Number,default:0},total:{type:Number,default:1},maxNum:{type:Number,default:64}},setup(o){const r=o;new Array(r.maxNum).fill(!1).map((m,u)=>({num:u,active:m})),_({radius:v(()=>450/r.total*r.order)});const c=v(()=>250+r.order*250/r.total),{seq:e}=x({over:8,under:8,sound:r.order==1?"A":"E",volume:1},r.order,"wheel");let d=e.meter.over;function a({delta:m}){d+=(m[0]-m[1])/20,e.meter.over=Math.floor(d)}return(m,u)=>{const f=b,k=$("drag");return s(),l("g",{class:"wheel",onDblclick:u[0]||(u[0]=h=>t(e).mutes.fill(!!t(e).mutes[0])),transform:`rotate(${-t(e).progress*360})`},[(s(!0),l(y,null,g(t(e).steps,(h,i)=>(s(),l("g",{class:"sector",key:h},[p(f,{cx:0,cy:0,onClick:z=>t(e).mutes[i]=!t(e).mutes[i],from:i/t(e).meter.over*360,to:(i+1)/t(e).meter.over*360,fill:t(C)(i+t(w).pitch/12*t(e).meter.over,t(e).meter.over,1,t(e).mutes[i]?.2:1),radius:c.value,thickness:250/o.total},null,8,["onClick","from","to","fill","radius","thickness"])]))),128)),B(p(f,{cx:0,cy:0,from:0,to:359.9,fill:"gray",radius:c.value,thickness:50},null,8,["radius"]),[[k,a]]),n("line",{y1:-450/o.total*o.order,y2:-450/o.total*(o.order+1),stroke:"currentColor","stroke-width":"4"},null,8,E)],40,A)}}});_((()=>[{num:4,den:4},{num:16,den:16}])());const R={class:"flex flex-col items-center w-full relative pb-12 p-4 fullscreen-container rounded-3xl",id:"screen"},S={class:"w-full max-h-90vh",id:"metronome",version:"1.1",baseProfile:"full",viewBox:"-500 -500 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{"user-select":"none","touch-action":"none"}},V=n("defs",null,[n("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[n("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})])],-1),j=n("line",{y2:-450,"stroke-width":"4","stroke-linecap":"round",stroke:"currentColor"},null,-1),xe={__name:"RhythmWheels",setup(o){const r=D(2);return(c,e)=>(s(),l("div",R,[(s(),l("svg",S,[V,(s(!0),l(y,null,g(r.value,(d,a)=>(s(),q(F,{key:a,order:a,total:r.value},null,8,["order","total"]))),128)),j,p(W)]))]))}};export{xe as default};
