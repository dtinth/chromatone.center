import{c as s,g as n,y as d,T as f,o as i,F as h,r as x,a as e,t as o,q as y,u as a,_ as I,C as v}from"./chunks/framework.f429e15e.js";import{n as b}from"./chunks/colors.f742d7d3.js";import{u as w,U as C}from"./chunks/midi.231bd883.js";import"./chunks/index.25d7e705.js";import"./chunks/index.88f7cbf1.js";import"./chunks/index.654bd828.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.cccf7ef0.js";import"./chunks/synth.15b1a9f8.js";import"./chunks/audio.e9cddac8.js";import"./chunks/index.92f70141.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.aa4960a4.js";import"./chunks/AutoPanner.25817587.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import"./chunks/index.37551f4c.js";import"./chunks/commonjsHelpers.de833af9.js";const m={title:"Log",description:"by Chromatone"},B={class:"flex flex-col gap-1 mb-8 overflow-x-scroll p-4 font-mono",id:"screen"},D={class:"txt"},L={class:"txt"},M={class:"txt"},k={class:"txt whitespace-nowrap"},N={class:"txt"},_={__name:"log",setup(g){const{midi:r}=w();return(u,l)=>(i(),s("div",B,[n(f,{name:"fall",mode:"out-in"},{default:d(()=>[(i(!0),s(h,null,x(a(r).log,t=>{var c,p;return i(),s("div",{class:"flex text-sm fall whitespace-nowrap",key:t},[e("div",D,"CH "+o((c=t.message)==null?void 0:c.channel),1),e("div",L,o((p=t.message)==null?void 0:p.type),1),e("div",M,o(t.data),1),e("div",{class:"p-2",style:y({backgroundColor:a(b)(t.message.dataBytes[0]+3||0)})},null,4),e("div",k,o(a(C).toNoteIdentifier(t.message.dataBytes[0]||1)),1),e("div",N,o((t.message.dataBytes[1]/127).toFixed(2)),1)])}),128))]),_:1})]))}};typeof m=="function"&&m(_);const F=I(_,[["__scopeId","data-v-94acfe8e"]]),et=JSON.parse('{"title":"MIDI Log","description":"Inspect all the messages going through the MIDI bus, online in the browser","frontmatter":{"title":"MIDI Log","description":"Inspect all the messages going through the MIDI bus, online in the browser","date":"2022-04-05T00:00:00.000Z","cover":"log.png"},"headers":[],"relativePath":"practice/midi/log/index.md","filePath":"practice/midi/log/index.md","lastUpdated":1689843676000}'),S={name:"practice/midi/log/index.md"},ot=Object.assign(S,{setup(g){return(r,u)=>{const l=v("client-only");return i(),s("div",null,[n(l,null,{default:d(()=>[n(F)]),_:1})])}}});export{et as __pageData,ot as default};
