import{_ as I}from"./chunks/start.b4aae801.js";import{b as g,c as $}from"./chunks/index.25d7e705.js";import{r as R}from"./chunks/calculations.65ee336d.js";import{u as D}from"./chunks/tuner.f392b4b0.js";import{u as N}from"./chunks/index.92f70141.js";import{B as P,i as _,j as B,l as E,o as l,c,a as n,d as A,y as x,h as j,e as h,t as M,w as q,C as z,g as w,b as H}from"./chunks/framework.f429e15e.js";import"./chunks/index.88f7cbf1.js";import"./chunks/colors.f742d7d3.js";import"./chunks/index.654bd828.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.231bd883.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.15b1a9f8.js";import"./chunks/audio.e9cddac8.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.aa4960a4.js";import"./chunks/AutoPanner.25817587.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/index.37551f4c.js";const O={class:"flex flex-col items-center w-full"},F={class:"flex flex-col justify-center items-center relative bg-light-600 dark-bg-dark-700",id:"screen"},J={key:0,class:"i-la-arrow-up"},U={key:1,class:"i-la-arrow-left"},Z=n("div",{class:"i-la-trash-alt"},null,-1),G=[Z],K={class:"absolute top-4 left-4 text-xl text-white"},L=["width","height"],Q={__name:"gram",setup(v){const{init:p,tuner:m}=D();let a,e,s,d;const t=P({initiated:!1,width:1920,height:1080,speed:_(()=>Math.floor(t.speedCount/100)),direction:g("chroma-roll-direction",0),notes:_(()=>R(m.chroma,-3)),speedCount:N(g("chroma-roll-speed",100),100,1200)});B(()=>{a=document.getElementById("spectrogram"),e=a.getContext("2d"),s=document.createElement("canvas"),d=s.getContext("2d"),s.width=t.width,s.height=t.height,e.fillStyle="#333",e.fillRect(0,0,t.width,t.height)});function y(o){t.speedCount+=o.delta[0]-o.delta[1]}function b(){t.initiated||(t.initiated=!0,p(),$(C))}function C(){t.direction==1?k():S()}function k(){d.drawImage(a,0,0,t.width,t.height),e.fillStyle="#33333399",e.fillRect(0,0,t.width,t.speed),e.translate(0,-t.speed),e.drawImage(s,0,0,t.width,t.height),t.notes.forEach((o,i)=>{let r=i*t.width/12;e.fillStyle=u(i,o,.5),e.fillRect(r,t.height-t.speed,t.width/12,t.speed)}),e.setTransform(1,0,0,1,0,0)}function S(){d.drawImage(a,0,0,t.width,t.height),e.fillStyle="#33333399",e.fillRect(t.width-t.speed,0,t.speed,t.height),t.notes.forEach((o,i)=>{let r=(i+1)*t.height/12;e.fillStyle=u(i,o,.5),e.fillRect(t.width-t.speed,t.height-r,t.width,t.height/12)}),e.translate(-t.speed,0),e.drawImage(s,0,0,t.width,t.height),e.setTransform(1,0,0,1,0,0)}function u(o=0,i=1,r=1){return`hsla(${o*30}, ${i*100}%, ${i*60}%, ${r})`}function T(){e.fillStyle="#333",e.fillRect(0,0,t.width,t.height)}return(o,i)=>{const r=I,V=E("drag");return l(),c("div",O,[n("div",F,[t.initiated?h("",!0):(l(),A(r,{key:0,class:"absolute",onClick:i[0]||(i[0]=f=>b())},{default:x(()=>[j("Start")]),_:1})),n("button",{class:"absolute bottom-4 left-4 text-xl text-white",onClick:i[1]||(i[1]=f=>t.direction?t.direction=0:t.direction=1)},[t.direction==1?(l(),c("div",J)):h("",!0),t.direction==0?(l(),c("div",U)):h("",!0)]),n("button",{class:"absolute top-4 right-4 text-xl select-none cursor-pointer",onMousedown:i[2]||(i[2]=f=>T())},G,32),n("div",K,"x"+M(t.speed),1),q(n("canvas",{class:"w-full rounded-2xl cursor-pointer",id:"spectrogram",width:t.width,height:t.height},null,8,L),[[V,y]])])])}}},W=H("",2),Ct=JSON.parse('{"title":"Сhromagram","description":"Visual representation of any audio chroma content","frontmatter":{"title":"Сhromagram","description":"Visual representation of any audio chroma content","date":"2022-06-12T00:00:00.000Z","cover":"chromagram.png"},"headers":[],"relativePath":"practice/chroma/gram/index.md","filePath":"practice/chroma/gram/index.md","lastUpdated":1676883357000}'),X={name:"practice/chroma/gram/index.md"},kt=Object.assign(X,{setup(v){return(p,m)=>{const a=z("client-only");return l(),c("div",null,[w(a,null,{default:x(()=>[w(Q,{class:"mb-16"})]),_:1}),W])}}});export{Ct as __pageData,kt as default};
