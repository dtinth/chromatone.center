import{_ as I}from"./chunks/start.57f58c1e.js";import{r as $,b as g,J as _,l as R,y as D,o as l,c,a as n,g as N,w as x,e as P,j as h,t as E,z as B,M as A,G as M,f as w,h as j}from"./chunks/framework.88e9bc5c.js";import{r as z}from"./chunks/calculations.65ee336d.js";import{u as q}from"./chunks/tuner.71dfbc04.js";import{u as H}from"./chunks/index.bdd8aab5.js";import"./chunks/colors.60a0cd0b.js";import"./chunks/index.654bd828.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.e7db086d.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.3f37295f.js";import"./chunks/audio.91866368.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.02aa6511.js";import"./chunks/AutoPanner.d44b63e1.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.dec16ed9.js";import"./chunks/index.be7eb4a8.js";import"./chunks/index.018e3fa0.js";const J={class:"flex flex-col items-center w-full"},O={class:"flex flex-col justify-center items-center relative bg-light-600 dark-bg-dark-700",id:"screen"},F={key:0,class:"i-la-arrow-up"},G={key:1,class:"i-la-arrow-left"},U=n("div",{class:"i-la-trash-alt"},null,-1),Z=[U],K={class:"absolute top-4 left-4 text-xl text-white"},L=["width","height"],Q={__name:"gram",setup(v){const{init:p,tuner:m}=q();let r,e,s,d;const t=$({initiated:!1,width:1920,height:1080,speed:g(()=>Math.floor(t.speedCount/100)),direction:_("chroma-roll-direction",0),notes:g(()=>z(m.chroma,-3)),speedCount:H(_("chroma-roll-speed",100),100,1200)});R(()=>{r=document.getElementById("spectrogram"),e=r.getContext("2d"),s=document.createElement("canvas"),d=s.getContext("2d"),s.width=t.width,s.height=t.height,e.fillStyle="#333",e.fillRect(0,0,t.width,t.height)});function y(o){t.speedCount+=o.delta[0]-o.delta[1]}function b(){t.initiated||(t.initiated=!0,p(),A(k))}function k(){t.direction==1?C():S()}function C(){d.drawImage(r,0,0,t.width,t.height),e.fillStyle="#33333399",e.fillRect(0,0,t.width,t.speed),e.translate(0,-t.speed),e.drawImage(s,0,0,t.width,t.height),t.notes.forEach((o,i)=>{let a=i*t.width/12;e.fillStyle=u(i,o,.5),e.fillRect(a,t.height-t.speed,t.width/12,t.speed)}),e.setTransform(1,0,0,1,0,0)}function S(){d.drawImage(r,0,0,t.width,t.height),e.fillStyle="#33333399",e.fillRect(t.width-t.speed,0,t.speed,t.height),t.notes.forEach((o,i)=>{let a=(i+1)*t.height/12;e.fillStyle=u(i,o,.5),e.fillRect(t.width-t.speed,t.height-a,t.width,t.height/12)}),e.translate(-t.speed,0),e.drawImage(s,0,0,t.width,t.height),e.setTransform(1,0,0,1,0,0)}function u(o=0,i=1,a=1){return`hsla(${o*30}, ${i*100}%, ${i*60}%, ${a})`}function T(){e.fillStyle="#333",e.fillRect(0,0,t.width,t.height)}return(o,i)=>{const a=I,V=D("drag");return l(),c("div",J,[n("div",O,[t.initiated?h("",!0):(l(),N(a,{key:0,class:"absolute",onClick:i[0]||(i[0]=f=>b())},{default:x(()=>[P("Start")]),_:1})),n("button",{class:"absolute bottom-4 left-4 text-xl text-white",onClick:i[1]||(i[1]=f=>t.direction?t.direction=0:t.direction=1)},[t.direction==1?(l(),c("div",F)):h("",!0),t.direction==0?(l(),c("div",G)):h("",!0)]),n("button",{class:"absolute top-4 right-4 text-xl select-none cursor-pointer",onMousedown:i[2]||(i[2]=f=>T())},Z,32),n("div",K,"x"+E(t.speed),1),B(n("canvas",{class:"w-full rounded-2xl cursor-pointer",id:"spectrogram",width:t.width,height:t.height},null,8,L),[[V,y]])])])}}},W=j("",2),yt=JSON.parse('{"title":"Сhromagram","description":"Visual representation of any audio chroma content","frontmatter":{"title":"Сhromagram","description":"Visual representation of any audio chroma content","date":"2022-06-12T00:00:00.000Z","cover":"chromagram.png"},"headers":[],"relativePath":"practice/chroma/gram/index.md","filePath":"practice/chroma/gram/index.md","lastUpdated":1676883357000}'),X={name:"practice/chroma/gram/index.md"},bt=Object.assign(X,{setup(v){return(p,m)=>{const r=M("client-only");return l(),c("div",null,[w(r,null,{default:x(()=>[w(Q,{class:"mb-16"})]),_:1}),W])}}});export{yt as __pageData,bt as default};
