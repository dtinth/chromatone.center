import{_ as C}from"./chunks/row.37172cc7.js";import{_ as B,i as u,o as n,c as m,a as r,F as _,r as f,m as i,u as o,t as N,d as p,n as S,f as g,x as T,e as $,T as V}from"./chunks/framework.fee3f2bd.js";import{p as h}from"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{g as v,n as z}from"./chunks/colors.14f6b67b.js";import{a as A,b as D,n as F}from"./chunks/theory.61e5aadb.js";import{b as y}from"./chunks/index.7c47e578.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.ab22ef51.js";import"./chunks/index.28289f35.js";import"./chunks/midi.10bf3c51.js";import"./chunks/index.0511e153.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.83aed4fc.js";import"./chunks/synth.55a5c78a.js";import"./chunks/audio.998c0aad.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.6f99311a.js";import"./chunks/AutoPanner.bc217bb3.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";const O={class:"flex flex-col max-w-60ch"},P={class:"keys"},j=["onClick"],E={class:"control-row"},G={class:"flex flex-col items-start"},I={__name:"browser",setup(w){const d=y("chroma-tonic",0),e=y("chroma-browser-filter",{scale:!1,chord:!0,count:!0,num:!0,chroma:!1}),x=h.chromas().map(s=>h.get(s)),b=u(()=>{let s=x;return e.value.chord&&(s=s.filter(t=>!A.get(t.chroma).empty)),e.value.scale&&(s=s.filter(t=>!D.get(t.chroma).empty)),s}),k=u(()=>b.value.sort((t,l)=>e.value.count?(t==null?void 0:t.intervals.length)<(l==null?void 0:l.intervals.length)?-1:1:t.setNum<l.setNum?-1:1));return(s,t)=>{const l=C;return n(),m("div",O,[r("div",P,[(n(),m(_,null,f("101101011010",(a,c)=>r("div",{class:"key",key:c,style:i({backgroundColor:c==o(v).tonic?o(z)(c):a=="1"?"hsla(0,0%,80%,0.4)":"hsla(0,0%,10%,0.4)"}),onClick:Z=>o(v).tonic=c},N(o(F)[c]),13,j)),64))]),r("div",E,[r("div",{class:"control",onClick:t[0]||(t[0]=a=>o(e).count=!o(e).count)},[p("Notes "),r("div",{class:"i-la-arrows-alt-v",style:i({opacity:o(e).count?1:.3})},null,4)]),r("div",{class:S(["control",{active:o(e).chord}]),onClick:t[1]||(t[1]=a=>o(e).chord=!o(e).chord)},[p("Chord"),r("div",{class:"i-la-filter ml-2",style:i({opacity:o(e).chord?1:.3})},null,4)],2),r("div",{class:"control",onClick:t[2]||(t[2]=a=>o(e).scale=!o(e).scale)},[p("Scale"),r("div",{class:"i-la-filter ml-2",style:i({opacity:o(e).scale?1:.3})},null,4)])]),r("div",G,[g(V,{name:"list"},{default:T(()=>[(n(!0),m(_,null,f(k.value,a=>(n(),$(l,{class:"mb-6",key:a.chroma,"two-row":!1,chroma:a.chroma,tonic:o(d)},null,8,["chroma","tonic"]))),128))]),_:1})])])}}},J=B(I,[["__scopeId","data-v-9af95393"]]),dt=JSON.parse('{"title":"Browser","description":"A huge table of all 2048 possible combinations of 12 chromatic notes","frontmatter":{"title":"Browser","description":"A huge table of all 2048 possible combinations of 12 chromatic notes","cover":"browser.png","date":"2021-04-19T00:00:00.000Z"},"headers":[],"relativePath":"practice/chroma/browser/_index.md","filePath":"practice/chroma/browser/_index.md"}'),L={name:"practice/chroma/browser/_index.md"},ut=Object.assign(L,{setup(w){return(d,e)=>(n(),m("div",null,[g(J)]))}});export{dt as __pageData,ut as default};