import{P as m,_ as u}from"./chunks/PrintKeys.b9f94053.js";import{n as _}from"./chunks/theory.dec16ed9.js";import{_ as y,r as x,o as a,c as s,a as o,F as d,d as l,u as g,t as w,g as b,f as p,p as k,k as I,e as v}from"./chunks/framework.88e9bc5c.js";import"./chunks/svg.76d4bb0b.js";import"./chunks/colors.60a0cd0b.js";import"./chunks/index.654bd828.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.e7db086d.js";import"./chunks/index.bdd8aab5.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.3f37295f.js";import"./chunks/audio.91866368.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.02aa6511.js";import"./chunks/AutoPanner.d44b63e1.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/index.018e3fa0.js";import"./chunks/index.be7eb4a8.js";const P=i=>(k("data-v-fdea0bb9"),i=i(),I(),i),$=["viewBox"],V=["y","width","height"],A=["transform"],B=["y","width","fill"],C={class:"scales","font-size":"4"},D=["transform"],N=["transform"],O=["x1"],S=["x1","x2","y1","y2"],M=P(()=>o("text",{"font-size":"3",transform:"translate(14,-1)"},[o("tspan",null,"CHROMATONE"),o("tspan",{dy:"4",x:"0"},"PIANO CHORDS")],-1)),E={__name:"PianoChords",setup(i){const e=x({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:31.2}}),r={scale:"101101011010",list:[{pitch:0,chroma:"100100010010",type:"m7",scale:"Aeolian",degree:"I"},{pitch:2,chroma:"100100100100",type:"ø7",scale:"Locrian",degree:"II"},{pitch:3,chroma:"100010010001",type:"M7",scale:"Ionian",degree:"III"},{pitch:5,chroma:"100100010010",type:"m7",scale:"Dorian",degree:"IV"},{pitch:7,chroma:"100100010010",type:"m7",scale:"Phrygian",degree:"V"},{pitch:8,chroma:"100010010001",type:"M7",scale:"Lydian",degree:"VI"},{pitch:10,chroma:"100010010010",type:"7",scale:"Myxolydian",degree:"VII"}]};return(h,F)=>(a(),s("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${e.margin} -${e.margin+e.head} ${e.width+2*e.margin} ${e.height+2*e.margin+e.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[o("rect",{class:"page",x:"-2",y:-e.head,width:e.width+e.padding.x,height:e.height+e.head,stroke:"none","stroke-width":"0.2",rx:"1",fill:"#fff"},null,8,V),(a(!0),s(d,null,l(g(_),(c,t)=>(a(),s("g",{class:"striped",key:t,transform:`translate(0, ${e.head-2+t*(e.height-2*e.padding.y-5)/12})`},[o("rect",{x:0,y:e.padding.y,rx:"4",width:e.width,height:"22",opacity:"1",fill:t%2?"#ddd":"#eee"},null,8,B)],8,A))),128)),(a(!0),s(d,null,l(r.list,(c,t)=>(a(),s("g",C,[o("text",{transform:`translate(${e.padding.left+t*24.6+16},3)`},w(c.scale),9,D)]))),256)),(a(!0),s(d,null,l(g(_),(c,t)=>(a(),s("g",{key:t,transform:`translate(0, ${e.head+t*(e.height-2*e.padding.y-5)/12-2.6})`},[(a(!0),s(d,null,l(r.list,(n,f)=>(a(),b(m,{key:n,type:n.type,pitch:(n.pitch+t)%12,transform:`scale(0.1) translate(${f*245+340+e.padding.left}, 0)  `,chroma:n.chroma},null,8,["type","pitch","transform","chroma"]))),128)),p(m,{pitch:t,transform:`scale(0.1) translate(${0+e.padding.left},${t*.1})`,chroma:r.scale},null,8,["pitch","transform","chroma"])],8,N))),128)),o("line",{x1:e.padding.left+2,x2:"208",y1:"7",y2:"7","stroke-width":"0.1",stroke:"black"},null,8,O),o("line",{x1:e.padding.left,x2:e.padding.left,y1:e.head+2.2,y2:e.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,S),M],8,$))}},L=y(E,[["__scopeId","data-v-fdea0bb9"]]),T=o("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[v("Diatonic scales and modes "),o("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1),le=JSON.parse('{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","frontmatter":{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","cover":"piano.png","date":"2023-08-02T00:00:00.000Z","product":{"price":10,"id":"print-piano-a4","digital":true}},"headers":[],"relativePath":"shop/printable/piano-a4/index.md","filePath":"shop/printable/piano-a4/index.md","lastUpdated":1690911432000}'),z={name:"shop/printable/piano-a4/index.md"},ce=Object.assign(z,{setup(i){return(e,r)=>{const h=u;return a(),s("div",null,[T,p(L,{width:"100%",class:"max-w-55ch"}),p(h,{svg:"diatonic",password:"piano-a4-Vr74E"})])}}});export{le as __pageData,ce as default};
