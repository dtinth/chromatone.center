import{c as s,f as n,x as d,T as f,o as i,F as h,r as x,a as e,t as o,m as y,u as a,_ as I,B as v}from"./chunks/framework.fee3f2bd.js";import{n as b}from"./chunks/colors.14f6b67b.js";import{u as w,U as B}from"./chunks/midi.10bf3c51.js";import"./chunks/index.7c47e578.js";import"./chunks/index.28289f35.js";import"./chunks/index.b30cd6d2.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.83aed4fc.js";import"./chunks/synth.55a5c78a.js";import"./chunks/audio.998c0aad.js";import"./chunks/index.0511e153.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.6f99311a.js";import"./chunks/AutoPanner.bc217bb3.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/commonjsHelpers.de833af9.js";const m={title:"Log",description:"by Chromatone"},C={class:"flex flex-col gap-1 mb-8 overflow-x-scroll p-4 font-mono",id:"screen"},D={class:"txt"},L={class:"txt"},M={class:"txt"},k={class:"txt whitespace-nowrap"},N={class:"txt"},_={__name:"log",setup(g){const{midi:r}=w();return(u,l)=>(i(),s("div",C,[n(f,{name:"fall",mode:"out-in"},{default:d(()=>[(i(!0),s(h,null,x(a(r).log,t=>{var c,p;return i(),s("div",{class:"flex text-sm fall whitespace-nowrap",key:t},[e("div",D,"CH "+o((c=t.message)==null?void 0:c.channel),1),e("div",L,o((p=t.message)==null?void 0:p.type),1),e("div",M,o(t.data),1),e("div",{class:"p-2",style:y({backgroundColor:a(b)(t.message.dataBytes[0]+3||0)})},null,4),e("div",k,o(a(B).toNoteIdentifier(t.message.dataBytes[0]||1)),1),e("div",N,o((t.message.dataBytes[1]/127).toFixed(2)),1)])}),128))]),_:1})]))}};typeof m=="function"&&m(_);const F=I(_,[["__scopeId","data-v-94acfe8e"]]),Y=JSON.parse('{"title":"MIDI Log","description":"Inspect all the messages going through the MIDI bus, online in the browser","frontmatter":{"title":"MIDI Log","description":"Inspect all the messages going through the MIDI bus, online in the browser","date":"2022-04-05T00:00:00.000Z","cover":"log.png"},"headers":[],"relativePath":"practice/midi/log/index.md","filePath":"practice/midi/log/index.md"}'),S={name:"practice/midi/log/index.md"},tt=Object.assign(S,{setup(g){return(r,u)=>{const l=v("client-only");return i(),s("div",null,[n(l,null,{default:d(()=>[n(F)]),_:1})])}}});export{Y as __pageData,tt as default};