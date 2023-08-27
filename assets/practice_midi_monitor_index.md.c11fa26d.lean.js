import{_ as D}from"./chunks/panel.47efa16e.js";import{_ as M,l as N,o as i,c,a as v,t as h,A as j,y as w,u as m,q as C,v as S,j as B,d as $,F as x,r as g,b as k,G as O,B as T}from"./chunks/framework.f75e5dc4.js";import{n as P}from"./chunks/colors.6e70028c.js";import{c as U}from"./chunks/index.cc2149a0.js";import"./chunks/index.be7eb4a8.js";import{u as A,h as I,s as z}from"./chunks/midi.ee496394.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.ffb45e01.js";import"./chunks/index.cccf7ef0.js";import"./chunks/audio.2835df43.js";import"./chunks/index.de966dde.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.0ce05937.js";import"./chunks/AutoPanner.5498cf00.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/tempo.f209cfb9.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.9f9b4fe3.js";import"./chunks/Loop.4db2aa01.js";import"./chunks/index.654bd828.js";import"./chunks/theory.dec16ed9.js";import"./chunks/commonjsHelpers.de833af9.js";const F={class:"font-bold"},V={class:"text-sm"},q={__name:"note",props:{note:{type:Object,default:()=>{}},active:Boolean},emits:["play","stop","update:active"],setup(t,{emit:o}){const d=t,n=N(!1);function f(){n.value=!0,o("update:active",!0),o("play")}function u(r=!1){n.value&&(n.value=!1,r||o("update:active",!1),o("stop"))}function _(){d.active&&!n.value&&(n.value=!0,o("update:active",!0),o("play"))}return(r,e)=>{var l,s,p;return i(),c("div",{class:"note",onMousedown:e[0]||(e[0]=a=>f()),onMouseup:e[1]||(e[1]=a=>u()),onMouseleave:e[2]||(e[2]=a=>u(!0)),onTouchstart:e[3]||(e[3]=j(a=>f(),["prevent"])),onTouchend:e[4]||(e[4]=a=>u()),onMousemove:e[5]||(e[5]=a=>_()),onTouchmove:e[6]||(e[6]=a=>_()),style:w({backgroundColor:m(P)(t.note.pitch,t.note.octA-1,t.note.velocity)})},[v("div",F,h((l=t.note)==null?void 0:l._name)+h((s=t.note)==null?void 0:s._accidental),1),v("div",V,h((p=t.note)==null?void 0:p.number),1)],36)}}},E=M(q,[["__scopeId","data-v-99557c79"]]);const G={class:"cc"},J={class:"p-1 text-center flex-1"},L={__name:"cc",props:{cc:{type:Object,default:()=>{}}},emits:["update"],setup(t,{emit:o}){const d=t;let n=0;function f({movement:[u],dragging:_}){let r=u/2-n;n=u/2,_||(n=0);let e=Math.round(d.cc.raw+r);e>127&&(e=127),e<0&&(e=0),o("update",e)}return(u,_)=>{var e,l;const r=C("drag");return S((i(),c("div",G,[v("div",J,h((e=t.cc)==null?void 0:e.number),1),v("div",{class:"absolute h-full z-10 bg-gray-500 top-0 bg-opacity-40 self-start",style:w({width:((l=t.cc)==null?void 0:l.value)*100+"%"})},null,4)])),[[r,f]])}}},R=M(L,[["__scopeId","data-v-c0e4d163"]]);const Z={class:"flex flex-col gap-4"},H={class:"flex w-full h-full mt-4"},K={class:"header"},Q={class:"flex w-full"},W={__name:"midi-monitor",setup(t){const o=N(!1),{midi:d,midiAttack:n,midiRelease:f,setCC:u}=A(),_=B(()=>{const r={};for(let e in d.channels){const l=Object.keys(d.channels[e].activeNotes).map(s=>I.midiToNoteName(s,{sharps:!0}));r[e]=l.length>2?U.detect(l):[]}return r});return(r,e)=>{const l=D;return i(),c("div",Z,[$(l,{"to-channel":!1}),v("div",{class:"fullscreen-container",id:"screen",onMouseleave:e[1]||(e[1]=s=>o.value=!1)},[v("div",H,[(i(!0),c(x,null,g(m(d).channels,(s,p)=>{var a;return i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[v("div",K,h(((a=_.value[p])==null?void 0:a[0])||Object.keys(s.activeNotes).map(y=>m(I).midiToNoteName(y,{sharps:!0})).join(" ")||s.num),1),(i(!0),c(x,null,g(m(z)(s.notes),y=>(i(),k(E,{key:y.number,active:o.value,"onUpdate:active":e[0]||(e[0]=b=>o.value=b),note:y,onPlay:b=>m(n)(y),onStop:b=>m(f)(y)},null,8,["active","note","onPlay","onStop"]))),128))])}),128))]),v("div",Q,[(i(!0),c(x,null,g(m(d).channels,s=>(i(),c("div",{class:"flex flex-col flex-1 text-center",key:s.num},[(i(!0),c(x,null,g(s.cc,p=>(i(),k(R,{key:p,cc:p,onUpdate:a=>m(u)(p,a)},null,8,["cc","onUpdate"]))),128))]))),128))])],32)])}}},X=M(W,[["__scopeId","data-v-7adf0902"]]),ke=JSON.parse(`{"title":"MIDI Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","frontmatter":{"title":"MIDI Monitor","description":"See everything that's happening on your MIDI-bus right in the browser","cover":"monitor.png","date":"2022-06-12T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/monitor/index.md","filePath":"practice/midi/monitor/index.md","lastUpdated":1689843676000}`),Y={name:"practice/midi/monitor/index.md"},Ie=Object.assign(Y,{setup(t){return(o,d)=>{const n=O("client-only");return i(),c("div",null,[$(n,null,{default:T(()=>[$(X)]),_:1})])}}});export{ke as __pageData,Ie as default};
