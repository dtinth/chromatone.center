import{P as m,_ as y}from"./chunks/PrintKeys.805d3336.js";import{_ as u,i as x,v as a,b as i,F as s,a as d,H as l,N as _,X as b,C as w,T as p,A as v,c as I,L as P}from"./chunks/framework.7e747cd7.js";import{n as f}from"./chunks/theory.61e5aadb.js";import"./chunks/svg.af3016f3.js";import"./chunks/colors.fcf9eae3.js";import"./chunks/index.c0ca431c.js";import"./chunks/index.17b4cde5.js";import"./chunks/index.b30cd6d2.js";import"./chunks/midi.290fabf9.js";import"./chunks/index.0b97d2b2.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/calculations.3384a913.js";import"./chunks/index.83aed4fc.js";import"./chunks/synth.220fb0dd.js";import"./chunks/audio.170dbcbf.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/index.86652af6.js";const $=o=>(v("data-v-fdea0bb9"),o=o(),I(),o),k=["viewBox"],A=["y","width","height"],C=["transform"],O=["y","width","fill"],D={class:"scales","font-size":"4"},N=["transform"],V=["transform"],H=["x1"],L=["x1","x2","y1","y2"],M=$(()=>s("text",{"font-size":"3",transform:"translate(14,-1)"},[s("tspan",null,"CHROMATONE"),s("tspan",{dy:"4",x:"0"},"PIANO CHORDS")],-1)),T={__name:"PianoChords",setup(o){const t=x({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:31.2}}),n={scale:"101101011010",list:[{pitch:0,chroma:"100100010010",type:"m7",scale:"Aeolian",degree:"I"},{pitch:2,chroma:"100100100100",type:"ø7",scale:"Locrian",degree:"II"},{pitch:3,chroma:"100010010001",type:"M7",scale:"Ionian",degree:"III"},{pitch:5,chroma:"100100010010",type:"m7",scale:"Dorian",degree:"IV"},{pitch:7,chroma:"100100010010",type:"m7",scale:"Phrygian",degree:"V"},{pitch:8,chroma:"100010010001",type:"M7",scale:"Lydian",degree:"VI"},{pitch:10,chroma:"100010010010",type:"7",scale:"Myxolydian",degree:"VII"}]};return(h,B)=>(a(),i("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${t.margin} -${t.margin+t.head} ${t.width+2*t.margin} ${t.height+2*t.margin+t.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[s("rect",{class:"page",x:"-2",y:-t.head,width:t.width+t.padding.x,height:t.height+t.head,stroke:"none","stroke-width":"0.2",rx:"1",fill:"#fff"},null,8,A),(a(!0),i(d,null,l(_(f),(c,e)=>(a(),i("g",{class:"striped",key:e,transform:`translate(0, ${t.head-2+e*(t.height-2*t.padding.y-5)/12})`},[s("rect",{x:0,y:t.padding.y,rx:"4",width:t.width,height:"22",opacity:"1",fill:e%2?"#ddd":"#eee"},null,8,O)],8,C))),128)),(a(!0),i(d,null,l(n.list,(c,e)=>(a(),i("g",D,[s("text",{transform:`translate(${t.padding.left+e*24.6+16},3)`},b(c.scale),9,N)]))),256)),(a(!0),i(d,null,l(_(f),(c,e)=>(a(),i("g",{key:e,transform:`translate(0, ${t.head+e*(t.height-2*t.padding.y-5)/12-2.6})`},[(a(!0),i(d,null,l(n.list,(r,g)=>(a(),w(m,{key:r,type:r.type,pitch:(r.pitch+e)%12,transform:`scale(0.1) translate(${g*245+340+t.padding.left}, 0)  `,chroma:r.chroma},null,8,["type","pitch","transform","chroma"]))),128)),p(m,{pitch:e,transform:`scale(0.1) translate(${0+t.padding.left},${e*.1})`,chroma:n.scale},null,8,["pitch","transform","chroma"])],8,V))),128)),s("line",{x1:t.padding.left+2,x2:"208",y1:"7",y2:"7","stroke-width":"0.1",stroke:"black"},null,8,H),s("line",{x1:t.padding.left,x2:t.padding.left,y1:t.head+2.2,y2:t.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,L),M],8,k))}},F=u(T,[["__scopeId","data-v-fdea0bb9"]]),S=s("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[P("Diatonic scales and modes "),s("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1),lt=JSON.parse('{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","frontmatter":{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","cover":"piano.png","date":"2023-08-02T00:00:00.000Z","product":{"price":10,"id":"print-piano-a4","digital":true}},"headers":[],"relativePath":"shop/printable/piano-a4/index.md","filePath":"shop/printable/piano-a4/index.md"}'),z={name:"shop/printable/piano-a4/index.md"},ct=Object.assign(z,{setup(o){return(t,n)=>{const h=y;return a(),i("div",null,[S,p(F,{width:"100%",class:"max-w-55ch"}),p(h,{svg:"diatonic",password:"piano-a4-Vr74E"})])}}});export{lt as __pageData,ct as default};
