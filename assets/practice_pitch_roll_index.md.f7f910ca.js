import{_ as T}from"./chunks/start.57f58c1e.js";import{u as C}from"./chunks/tuner.71dfbc04.js";import{_ as D,r as B,J as I,S as y,q as R,l as A,E as V,y as $,o as c,c as h,u as a,a as n,t as r,A as E,j as b,g as z,w,e as F,z as M,p as W,k as j,G as q,f as P,h as H}from"./chunks/framework.88e9bc5c.js";import{u as J}from"./chunks/index.bdd8aab5.js";import{w as O}from"./chunks/index.654bd828.js";import"./chunks/colors.60a0cd0b.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.e7db086d.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.3f37295f.js";import"./chunks/audio.91866368.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.02aa6511.js";import"./chunks/AutoPanner.d44b63e1.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.dec16ed9.js";import"./chunks/index.be7eb4a8.js";import"./chunks/index.018e3fa0.js";const k=p=>(W("data-v-83586260"),p=p(),j(),p),G={class:"flex flex-col mb-8"},K={key:0,class:"flex p-8 items-center"},U={class:"p-1 w-2em"},Y={class:"p-1 w-1em"},Z={class:"p-1 mt-2 w-6em text-sm"},L={key:0,class:"i-la-play"},Q={key:1,class:"i-la-pause"},X=k(()=>n("div",{class:"i-la-times"},null,-1)),ee=[X],te={class:"flex-1 text-center font-bold"},oe={class:"fullscreen-container rounded-3xl cursor-pointer",id:"screen"},ie={class:"p-1 absolute top-2 left-2 flex items-center"},le=k(()=>n("div",{class:"i-la-angle-double-right"},null,-1)),ne={__name:"roll",setup(p){const e=B({running:!0,speed:J(I("pitch-roll-speed",4),4,20),runnerWidth:2,runnerAhead:4,maxPlotFrequency:880,maxPlotNote:97,minPlotNote:24,prevBeat:0,step:0});y(" ",s=>{s.preventDefault(),e.running=!e.running}),y("Enter",()=>{m()});function g(s){s.tap&&(e.running=!e.running),e.speed=e.speed+s.delta[0]/5}const _=[0,1,2,3,4,5,6,7,8],{init:S,tuner:o}=C(),i=R();let t;A(()=>{t=i.value.getContext("2d")}),V(()=>o==null?void 0:o.frame,s=>{if(!e.running)return;let l=s*e.speed%i.value.width;if(t.globalAlpha=1,t.clearRect(l,0,e.speed,i.value.height),t.beginPath(),t.fillStyle=o.note.color,t.fillRect(l+e.speed,0,e.runnerWidth,i.value.height),!o.note.silent){const d=i.value.height-(o.note.value-e.minPlotNote)/(e.maxPlotNote-e.minPlotNote)*i.value.height;t.arc(l-8,d,8,0,4*Math.PI),t.fillStyle=O(o.note.color).lighten(.3).toHex(),t.fill()}if(s%50==0){t.beginPath(),t.strokeStyle="hsla(90,50%,50%,0.1)",t.lineWidth="1";for(let d of _){let u=i.value.height-(d*12-e.minPlotNote)/(e.maxPlotNote-e.minPlotNote)*i.value.height;t.moveTo(0,u),t.lineTo(i.value.width,u)}t.stroke()}t.globalAlpha=.25,o.beat>e.prevBeat&&(e.prevBeat=o.beat,t.fillStyle=o.note.color,t.fillRect(l-5,0,1,i.value.height))});function N(){S(),e.running=!0}function m(){t.clearRect(0,0,i.value.width,i.value.height)}return(s,l)=>{var v,x;const d=T,u=$("drag");return c(),h("div",G,[a(o).note?(c(),h("div",K,[n("div",{class:"flex-1 text-center font-bold text-4xl transition-all duration-200 flex items-center",style:E({color:a(o).note.color})},[n("div",U,r((v=a(o).note)==null?void 0:v.name),1),n("div",Y,r((x=a(o).note)==null?void 0:x.octave),1),n("div",Z,r(a(o).note.cents>0?"+":"")+r(a(o).note.cents)+" cents",1)],4),n("div",{class:"btn",onClick:l[0]||(l[0]=f=>e.running=!e.running)},[e.running?(c(),h("div",Q)):(c(),h("div",L))]),n("div",{class:"btn",onClick:l[1]||(l[1]=f=>m())},ee),n("div",te,r(a(o).bpm.toFixed(1))+" BPM",1)])):b("",!0),n("div",oe,[a(o).running?b("",!0):(c(),z(d,{key:0,class:"absolute",onClick:l[2]||(l[2]=f=>N())},{default:w(()=>[F("Start rolling ")]),_:1})),n("div",ie,[le,n("span",null,r(e.speed.toFixed(1)),1)]),M(n("canvas",{class:"w-full h-full rounded-3xl",ref_key:"roll",ref:i,width:1920,height:1080,onDblclick:l[3]||(l[3]=f=>m())},null,544),[[u,g]])])])}}},se=D(ne,[["__scopeId","data-v-83586260"]]),ae=H('<p>This app listens to the incoming audio and analyzes it for the base pitch and tempo. The note with the cents difference is show at the top left. Tempo is shown at the top right. The pitch is plotted on the vertical axis with colored circles while beats are drawn as vertical lines.</p><ol><li>Press <i class="p-3 mr-1 i-la-play"></i> to start plotting the audio parameters. Press <i class="p-3 mr-1 i-la-pause"></i> to pause the process. You can also do this by clicking the graph itself or by pressing the <strong>Spacebar</strong> key on your keyboard.</li><li>Press <i class="p-3 mr-1 i-la-times"></i> to clear the graph. Double clicking the graph and pressing the <strong>Enter</strong> key will have the same effect</li><li>Drag across the graph plain left or right to increase or decrease the speed of the plot head.</li><li>If you see the <i class="p-3 mr-1 i-la-expand"></i> button at the bottom right, you browser is capable of stretching the graph to the full screen. Have fun!</li></ol>',2),Ie=JSON.parse('{"title":"Pitch Roll","description":"Plot main pitch of any incoming audio on an endless roll","frontmatter":{"title":"Pitch Roll","description":"Plot main pitch of any incoming audio on an endless roll","cover":"roll.png","date":"2022-06-12T00:00:00.000Z"},"headers":[],"relativePath":"practice/pitch/roll/index.md","filePath":"practice/pitch/roll/index.md","lastUpdated":1689843676000}'),re={name:"practice/pitch/roll/index.md"},Re=Object.assign(re,{setup(p){return(e,g)=>{const _=q("client-only");return c(),h("div",null,[P(_,null,{default:w(()=>[P(se)]),_:1}),ae])}}});export{Ie as __pageData,Re as default};
