import{_ as C}from"./chunks/row.569ffc65.js";import{_ as B,j as u,o as n,c as m,a as r,F as _,r as f,v as i,u as o,t as N,h as p,q as S,d as g,z as T,b as $,T as z}from"./chunks/framework.233ced2b.js";import{p as h}from"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{g as v,n as V}from"./chunks/colors.4eba5607.js";import{a as j,b as A,n as D}from"./chunks/theory.61e5aadb.js";import{b as y}from"./chunks/index.0e8b6fce.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.ab22ef51.js";import"./chunks/index.c9980755.js";import"./chunks/midi.8add1e1a.js";import"./chunks/index.87a1f89e.js";import"./chunks/index.fb02c716.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.cccf7ef0.js";import"./chunks/synth.b0a1456c.js";import"./chunks/audio.0b0a52c9.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.33c16f88.js";import"./chunks/AutoPanner.30f7ef90.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/index.654bd828.js";const F={class:"flex flex-col max-w-60ch"},O={class:"keys"},P=["onClick"],q={class:"control-row"},E={class:"flex flex-col items-start"},G={__name:"browser",setup(w){const d=y("chroma-tonic",0),e=y("chroma-browser-filter",{scale:!1,chord:!0,count:!0,num:!0,chroma:!1}),b=h.chromas().map(s=>h.get(s)),x=u(()=>{let s=b;return e.value.chord&&(s=s.filter(t=>!j.get(t.chroma).empty)),e.value.scale&&(s=s.filter(t=>!A.get(t.chroma).empty)),s}),k=u(()=>x.value.sort((t,l)=>e.value.count?(t==null?void 0:t.intervals.length)<(l==null?void 0:l.intervals.length)?-1:1:t.setNum<l.setNum?-1:1));return(s,t)=>{const l=C;return n(),m("div",F,[r("div",O,[(n(),m(_,null,f("101101011010",(a,c)=>r("div",{class:"key",key:c,style:i({backgroundColor:c==o(v).tonic?o(V)(c):a=="1"?"hsla(0,0%,80%,0.4)":"hsla(0,0%,10%,0.4)"}),onClick:L=>o(v).tonic=c},N(o(D)[c]),13,P)),64))]),r("div",q,[r("div",{class:"control",onClick:t[0]||(t[0]=a=>o(e).count=!o(e).count)},[p("Notes "),r("div",{class:"i-la-arrows-alt-v",style:i({opacity:o(e).count?1:.3})},null,4)]),r("div",{class:S(["control",{active:o(e).chord}]),onClick:t[1]||(t[1]=a=>o(e).chord=!o(e).chord)},[p("Chord"),r("div",{class:"i-la-filter ml-2",style:i({opacity:o(e).chord?1:.3})},null,4)],2),r("div",{class:"control",onClick:t[2]||(t[2]=a=>o(e).scale=!o(e).scale)},[p("Scale"),r("div",{class:"i-la-filter ml-2",style:i({opacity:o(e).scale?1:.3})},null,4)])]),r("div",E,[g(z,{name:"list"},{default:T(()=>[(n(!0),m(_,null,f(k.value,a=>(n(),$(l,{class:"mb-6",key:a.chroma,"two-row":!1,chroma:a.chroma,tonic:o(d)},null,8,["chroma","tonic"]))),128))]),_:1})])])}}},I=B(G,[["__scopeId","data-v-9af95393"]]),_t=JSON.parse('{"title":"Browser","description":"A huge table of all 2048 possible combinations of 12 chromatic notes","frontmatter":{"title":"Browser","description":"A huge table of all 2048 possible combinations of 12 chromatic notes","cover":"browser.png","date":"2021-04-19T00:00:00.000Z"},"headers":[],"relativePath":"practice/chroma/browser/_index.md","filePath":"practice/chroma/browser/_index.md","lastUpdated":1686900887000}'),J={name:"practice/chroma/browser/_index.md"},ft=Object.assign(J,{setup(w){return(d,e)=>(n(),m("div",null,[g(I)]))}});export{_t as __pageData,ft as default};
