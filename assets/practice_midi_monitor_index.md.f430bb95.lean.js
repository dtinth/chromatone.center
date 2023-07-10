import{_ as I}from"./chunks/panel.4c2e50cd.js";import{_ as M,k as N,o as i,c,a as v,t as h,q as S,m as C,u as m,l as j,w as B,i as D,f as $,F as x,r as g,e as k,B as O,x as T}from"./chunks/framework.aa37bc02.js";import{n as P}from"./chunks/colors.0dc03560.js";import{c as U}from"./chunks/index.d0e44663.js";import"./chunks/index.86652af6.js";import{u as z,i as w,s as A}from"./chunks/midi.a65cc3de.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.99a34600.js";import"./chunks/index.d229a0c3.js";import"./chunks/index.9f2d097c.js";import"./chunks/audio.9297ee4b.js";import"./chunks/index.0eeb4803.js";import"./chunks/Scale.79ce1516.js";import"./chunks/Subtract.07d62855.js";import"./chunks/PingPongDelay.2fa9d1e0.js";import"./chunks/AutoPanner.82eeffdb.js";import"./chunks/MonoSynth.d287d31a.js";import"./chunks/Filter.a766b417.js";import"./chunks/tempo.0cfd0346.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.f0fa50d9.js";import"./chunks/Loop.4b11eb3a.js";import"./chunks/theory.61e5aadb.js";import"./chunks/commonjsHelpers.042e6b4d.js";const F={class:"font-bold"},V={class:"text-sm"},q={__name:"note",props:{note:{type:Object,default:()=>{}},active:Boolean},emits:["play","stop","update:active"],setup(t,{emit:o}){const d=t,n=N(!1);function f(){n.value=!0,o("update:active",!0),o("play")}function u(r=!1){n.value&&(n.value=!1,r||o("update:active",!1),o("stop"))}function _(){d.active&&!n.value&&(n.value=!0,o("update:active",!0),o("play"))}return(r,e)=>{var l,s,p;return i(),c("div",{class:"note",onMousedown:e[0]||(e[0]=a=>f()),onMouseup:e[1]||(e[1]=a=>u()),onMouseleave:e[2]||(e[2]=a=>u(!0)),onTouchstart:e[3]||(e[3]=S(a=>f(),["prevent"])),onTouchend:e[4]||(e[4]=a=>u()),onMousemove:e[5]||(e[5]=a=>_()),onTouchmove:e[6]||(e[6]=a=>_()),style:C({backgroundColor:m(P)(t.note.pitch,t.note.octA-1,t.note.velocity)})},[v("div",F,h((l=t.note)==null?void 0:l._name)+h((s=t.note)==null?void 0:s._accidental),1),v("div",V,h((p=t.note)==null?void 0:p.number),1)],36)}}},E=M(q,[["__scopeId","data-v-99557c79"]]);const J={class:"cc"},L={class:"p-1 text-center flex-1"},R={__name:"cc",props:{cc:{type:Object,default:()=>{}}},emits:["update"],setup(t,{emit:o}){const d=t;let n=0;function f({movement:[u],dragging:_}){let r=u/2-n;n=u/2,_||(n=0);let e=Math.round(d.cc.raw+r);e>127&&(e=127),e<0&&(e=0),o("update",e)}return(u,_)=>{var e,l;const r=j("drag");return B((i(),c("div",J,[v("div",L,h((e=t.cc)==null?void 0:e.number),1),v("div",{class:"absolute h-full z-10 bg-gray-500 top-0 bg-opacity-40 self-start",style:C({width:((l=t.cc)==null?void 0:l.value)*100+"%"})},null,4)])),[[r,f]])}}},Z=M(R,[["__scopeId","data-v-c0e4d163"]]);const G={class:"flex flex-col gap-4"},H={class:"flex w-full h-full mt-4"},K={class:"header"},Q={class:"flex w-full"},W={__name:"midi-monitor",setup(t){const o=N(!1),{midi:d,midiAttack:n,midiRelease:f,setCC:u}=z(),_=D(()=>{const r={};for(let e in d.channels){const l=Object.keys(d.channels[e].activeNotes).map(s=>w.midiToNoteName(s,{sharps:!0}));r[e]=l.length>2?U.detect(l):[]}return r});return(r,e)=>{const l=I;return i(),c("div",G,[$(l,{"to-channel":!1}),v("div",{class:"fullscreen-container",id:"screen",onMouseleave:e[1]||(e[1]=s=>o.value=!1)},[v("div",H,[(i(!0),c(x,null,g(m(d).channels,(s,p)=>{var a;return i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[v("div",K,h(((a=_.value[p])==null?void 0:a[0])||Object.keys(s.activeNotes).map(y=>m(w).midiToNoteName(y,{sharps:!0})).join(" ")||s.num),1),(i(!0),c(x,null,g(m(A)(s.notes),y=>(i(),k(E,{key:y.number,active:o.value,"onUpdate:active":e[0]||(e[0]=b=>o.value=b),note:y,onPlay:b=>m(n)(y),onStop:b=>m(f)(y)},null,8,["active","note","onPlay","onStop"]))),128))])}),128))]),v("div",Q,[(i(!0),c(x,null,g(m(d).channels,s=>(i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[(i(!0),c(x,null,g(s.cc,p=>(i(),k(Z,{key:p,cc:p,onUpdate:a=>m(u)(p,a)},null,8,["cc","onUpdate"]))),128))]))),128))])],32)])}}},X=M(W,[["__scopeId","data-v-7adf0902"]]),ke=JSON.parse(`{"title":"Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","frontmatter":{"title":"Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","cover":"monitor.png","date":"2022-06-12T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/monitor/index.md","filePath":"practice/midi/monitor/index.md"}`),Y={name:"practice/midi/monitor/index.md"},we=Object.assign(Y,{setup(t){return(o,d)=>{const n=O("client-only");return i(),c("div",null,[$(n,null,{default:T(()=>[$(X)]),_:1})])}}});export{ke as __pageData,we as default};
