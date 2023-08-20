import{_ as D}from"./chunks/panel.7952e6e8.js";import{_ as M,k as I,o as i,c,a as v,t as h,q as C,m as N,u as m,l as S,w as j,i as B,e as $,F as x,r as g,f as k,B as O,x as T}from"./chunks/framework.11beae03.js";import{n as P}from"./chunks/colors.027ae8bf.js";import{c as U}from"./chunks/index.e8c5957f.js";import"./chunks/index.86652af6.js";import{u as z,i as w,s as A}from"./chunks/midi.546d3551.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.c8d61a9f.js";import"./chunks/index.83aed4fc.js";import"./chunks/index.abf15ce3.js";import"./chunks/audio.85cd45c5.js";import"./chunks/index.e5c73bca.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.b93d6a29.js";import"./chunks/AutoPanner.e7ac4fed.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/tempo.979347f7.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.6b4e0cd9.js";import"./chunks/Loop.b192c9c2.js";import"./chunks/index.654bd828.js";import"./chunks/theory.61e5aadb.js";import"./chunks/commonjsHelpers.de833af9.js";const F={class:"font-bold"},V={class:"text-sm"},q={__name:"note",props:{note:{type:Object,default:()=>{}},active:Boolean},emits:["play","stop","update:active"],setup(t,{emit:o}){const d=t,n=I(!1);function f(){n.value=!0,o("update:active",!0),o("play")}function u(r=!1){n.value&&(n.value=!1,r||o("update:active",!1),o("stop"))}function _(){d.active&&!n.value&&(n.value=!0,o("update:active",!0),o("play"))}return(r,e)=>{var l,s,p;return i(),c("div",{class:"note",onMousedown:e[0]||(e[0]=a=>f()),onMouseup:e[1]||(e[1]=a=>u()),onMouseleave:e[2]||(e[2]=a=>u(!0)),onTouchstart:e[3]||(e[3]=C(a=>f(),["prevent"])),onTouchend:e[4]||(e[4]=a=>u()),onMousemove:e[5]||(e[5]=a=>_()),onTouchmove:e[6]||(e[6]=a=>_()),style:N({backgroundColor:m(P)(t.note.pitch,t.note.octA-1,t.note.velocity)})},[v("div",F,h((l=t.note)==null?void 0:l._name)+h((s=t.note)==null?void 0:s._accidental),1),v("div",V,h((p=t.note)==null?void 0:p.number),1)],36)}}},E=M(q,[["__scopeId","data-v-99557c79"]]);const J={class:"cc"},L={class:"p-1 text-center flex-1"},R={__name:"cc",props:{cc:{type:Object,default:()=>{}}},emits:["update"],setup(t,{emit:o}){const d=t;let n=0;function f({movement:[u],dragging:_}){let r=u/2-n;n=u/2,_||(n=0);let e=Math.round(d.cc.raw+r);e>127&&(e=127),e<0&&(e=0),o("update",e)}return(u,_)=>{var e,l;const r=S("drag");return j((i(),c("div",J,[v("div",L,h((e=t.cc)==null?void 0:e.number),1),v("div",{class:"absolute h-full z-10 bg-gray-500 top-0 bg-opacity-40 self-start",style:N({width:((l=t.cc)==null?void 0:l.value)*100+"%"})},null,4)])),[[r,f]])}}},Z=M(R,[["__scopeId","data-v-c0e4d163"]]);const G={class:"flex flex-col gap-4"},H={class:"flex w-full h-full mt-4"},K={class:"header"},Q={class:"flex w-full"},W={__name:"midi-monitor",setup(t){const o=I(!1),{midi:d,midiAttack:n,midiRelease:f,setCC:u}=z(),_=B(()=>{const r={};for(let e in d.channels){const l=Object.keys(d.channels[e].activeNotes).map(s=>w.midiToNoteName(s,{sharps:!0}));r[e]=l.length>2?U.detect(l):[]}return r});return(r,e)=>{const l=D;return i(),c("div",G,[$(l,{"to-channel":!1}),v("div",{class:"fullscreen-container",id:"screen",onMouseleave:e[1]||(e[1]=s=>o.value=!1)},[v("div",H,[(i(!0),c(x,null,g(m(d).channels,(s,p)=>{var a;return i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[v("div",K,h(((a=_.value[p])==null?void 0:a[0])||Object.keys(s.activeNotes).map(y=>m(w).midiToNoteName(y,{sharps:!0})).join(" ")||s.num),1),(i(!0),c(x,null,g(m(A)(s.notes),y=>(i(),k(E,{key:y.number,active:o.value,"onUpdate:active":e[0]||(e[0]=b=>o.value=b),note:y,onPlay:b=>m(n)(y),onStop:b=>m(f)(y)},null,8,["active","note","onPlay","onStop"]))),128))])}),128))]),v("div",Q,[(i(!0),c(x,null,g(m(d).channels,s=>(i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[(i(!0),c(x,null,g(s.cc,p=>(i(),k(Z,{key:p,cc:p,onUpdate:a=>m(u)(p,a)},null,8,["cc","onUpdate"]))),128))]))),128))])],32)])}}},X=M(W,[["__scopeId","data-v-7adf0902"]]),we=JSON.parse(`{"title":"MIDI Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","frontmatter":{"title":"MIDI Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","cover":"monitor.png","date":"2022-06-12T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/monitor/index.md","filePath":"practice/midi/monitor/index.md","lastUpdated":1689843676000}`),Y={name:"practice/midi/monitor/index.md"},Ie=Object.assign(Y,{setup(t){return(o,d)=>{const n=O("client-only");return i(),c("div",null,[$(n,null,{default:T(()=>[$(X)]),_:1})])}}});export{we as __pageData,Ie as default};
