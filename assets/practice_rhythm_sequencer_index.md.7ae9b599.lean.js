import{_ as X,i as V,r as k,k as J,e as W,q as y,K as G,j as Q,v as l,b as m,F as n,Z as u,T as b,I as Y,a as E,H as $,X as P,N as _,z,L as tt,B as U,f as S,w as j,A as et,c as ot}from"./chunks/framework.7e747cd7.js";import{_ as st}from"./chunks/rotary.21ad28fa.js";import{_ as at}from"./chunks/scale.27a8aae2.js";import{g as T,f as nt,n as C}from"./chunks/colors.fcf9eae3.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{n as rt}from"./chunks/index.17b4cde5.js";import{i as it,g as pt}from"./chunks/midi.290fabf9.js";import{b as g,j as lt}from"./chunks/index.c0ca431c.js";import{n as mt}from"./chunks/theory.61e5aadb.js";import{s as B,$ as ut,X as dt,a0 as H}from"./chunks/index.83aed4fc.js";import{b as ft}from"./chunks/synth.220fb0dd.js";import{c as ct}from"./chunks/audio.170dbcbf.js";import{t as N}from"./chunks/tempo.81daff25.js";import{i as R}from"./chunks/state.181c131c.js";import{P as vt}from"./chunks/Pattern.61d9d756.js";import"./chunks/keys.2c6c8615.js";import"./chunks/calculations.3384a913.js";import"./chunks/index.0b97d2b2.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/Loop.b192c9c2.js";let D;function I(){if(B(),D)return;const{channel:v}=ct("piano");D=new ut({urls:{A0:"A0.mp3",C1:"C1.mp3","D#1":"Ds1.mp3","F#1":"Fs1.mp3",A1:"A1.mp3",C2:"C2.mp3","D#2":"Ds2.mp3","F#2":"Fs2.mp3",A2:"A2.mp3",C3:"C3.mp3","D#3":"Ds3.mp3","F#3":"Fs3.mp3",A3:"A3.mp3",C4:"C4.mp3","D#4":"Ds4.mp3","F#4":"Fs4.mp3",A4:"A4.mp3",C5:"C5.mp3","D#5":"Ds5.mp3","F#5":"Fs5.mp3",A5:"A5.mp3",C6:"C6.mp3","D#6":"Ds6.mp3","F#6":"Fs6.mp3",A6:"A6.mp3",C7:"C7.mp3","D#7":"Ds7.mp3","F#7":"Fs7.mp3",A7:"A7.mp3",C8:"C8.mp3"},release:1,volume:-10,baseUrl:"/audio/piano/"}).connect(v)}function _t(v="A4",e="8n",A){if(!D)return I();D.triggerAttackRelease(v,e,A)}const x=v=>(et("data-v-a25f2116"),v=v(),ot(),v),gt={class:"flex flex-col"},bt={class:"flex flex-wrap items-center justify-center"},ht={class:"flex flex-wrap justify-center flex-1 bg-light-900 p-4 rounded-2xl dark-bg-dark-800 gap-2"},yt=["value"],Ct={class:"is-group flex flex-wrap p-2"},xt={class:"is-group"},At=x(()=>n("div",{class:"i-la-trash-alt"},null,-1)),wt=[At],kt={class:"is-group flex items-center"},Dt=x(()=>n("div",{class:"i-la-play"},null,-1)),qt=[Dt],Ft=x(()=>n("div",{class:"i-la-pause"},null,-1)),Vt=[Ft],Et=x(()=>n("div",{class:"i-la-stop"},null,-1)),$t=[Et],St=x(()=>n("div",{class:"row"},[n("div",{class:"title"})],-1)),Mt=["id","onMousedown","onMouseenter"],Ot={__name:"sequencer",setup(v){const e=V({started:!1,playing:!1,hover:!1,mounted:!1,current:0,octave:g("seq-octave",3),bpm:g("seq-bpm",120),steps:g("seq-steps",16),type:g("seq-type","up"),probability:g("seq-prob",1),humanize:g("seq-human",!1),interval:g("seq-interval","8n"),note:k(()=>mt[T.tonic]),range:k(()=>nt.rangeOf(e.note+e.octave+" "+T.set.name)(e.note+e.octave,e.note+(e.octave+2)).map(o=>rt.simplify(o)).reverse()),midi:k(()=>e.range.map(o=>it.toMidi(o))),pitches:k(()=>e.midi.map(o=>(o+3)%12)),progress:0}),A=["up","down","upDown","downUp","alternateUp","alternateDown","random","randomWalk","randomOnce"],r=V([]),h=V([]);let d=[];lt(" ",o=>{o.preventDefault(),e.playing=!e.playing}),J(()=>{e.range.forEach((o,t)=>{r[t]=r[t]||[],r[t].length=e.steps,r.length=e.range.length,Array.apply(null,r[t]).forEach((s,i)=>{r[t][i]={row:t,cell:i,note:o,active:(s==null?void 0:s.active)||!1}})})}),W(()=>{e.mounted=!0,I(),q()}),y(()=>e.steps,()=>{e.mounted&&q()},{immediate:!0});function q(){d.forEach(o=>{o.stop(0),o.dispose()}),d=[],r.forEach((o,t)=>{d[t]=new vt((f,s)=>{dt.schedule(()=>{h[t]=s==null?void 0:s.cell,s!=null&&s.active&&pt(s==null?void 0:s.note)},f),s!=null&&s.active&&(ft(s.note,e.interval,f),_t(s.note,e.interval,f))},r[t],e.type).start(0),d[t].interval=e.interval})}let M;function O(o,t,f,s){!e.hover&&!f||!f&&M==s.target.id||(M=s.target.id,r[o][t].active?r[o][t].active=!1:r[o][t].active=!0)}function Z(){r.forEach((o,t)=>{o.forEach((f,s)=>r[t][s].active=!1)})}y(()=>e.playing,o=>{o?(d.forEach(t=>{t.start(0)}),H.start(),e.started||(B(),e.started=!0)):(d.forEach(t=>{t.stop()}),H.stop())}),y(()=>e.type,o=>{d.forEach(t=>{t.pattern=o})},{immediate:!0}),y(()=>e.probability,o=>{d.forEach(t=>{t.probability=o})},{immediate:!0}),y(()=>e.humanize,o=>{d.forEach(t=>{t.humanize=o})},{immediate:!0});function K(){e.playing=!1,q()}G(()=>{d.forEach(o=>{o.stop(0),o.dispose()})});function L(o,t){return o.active?C(e.pitches[t]):o.cell==h[t]?R.value?"#eee7":"#3337":"#4444"}return(o,t)=>{const f=at,s=st,i=Q("tooltip");return l(),m("div",gt,[n("div",bt,[u(b(f,{class:"flex-1"},null,512),[[i,"Select root note and scale",void 0,{top:!0}]]),n("div",ht,[u((l(),m("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.type=a)},[(l(),m(E,null,$(A,a=>n("option",{key:a,value:a},P(a),9,yt)),64))])),[[Y,e.type],[i,"Pattern type",void 0,{top:!0}]]),n("div",Ct,[u(b(s,{modelValue:e.octave,"onUpdate:modelValue":t[1]||(t[1]=a=>e.octave=a),max:4,min:2,fixed:0,param:"OCTAVE"},null,8,["modelValue"]),[[i,"Octave",void 0,{top:!0}]]),u(b(s,{modelValue:e.steps,"onUpdate:modelValue":t[2]||(t[2]=a=>e.steps=a),max:32,min:4,step:1,fixed:0,param:"steps"},null,8,["modelValue"]),[[i,"Number of steps",void 0,{top:!0}]]),u(b(s,{modelValue:e.probability,"onUpdate:modelValue":t[3]||(t[3]=a=>e.probability=a),max:1,min:0,step:.01,fixed:2,param:"prob"},null,8,["modelValue"]),[[i,"Probability",void 0,{top:!0}]]),u(b(s,{modelValue:_(N).bpm,"onUpdate:modelValue":t[4]||(t[4]=a=>_(N).bpm=a),step:1,max:400,min:10,fixed:0,param:"BPM"},null,8,["modelValue"]),[[i,"Set tempo",void 0,{top:!0}]])]),n("div",xt,[u((l(),m("button",{class:z(["text-button",{active:e.humanize}]),onClick:t[5]||(t[5]=a=>e.humanize=!e.humanize)},[tt("HMN")],2)),[[i,"Humanize rhythm",void 0,{bottom:!0}]]),u((l(),m("button",{class:"text-button",onClick:t[6]||(t[6]=a=>Z())},wt)),[[i,"Clear pattern",void 0,{bottom:!0}]])]),n("div",kt,[e.playing?U("",!0):u((l(),m("button",{key:0,class:"text-button",onClick:t[7]||(t[7]=a=>e.playing=!0)},qt)),[[i,"Play",void 0,{bottom:!0}]]),e.playing?u((l(),m("button",{key:1,class:"text-button",onClick:t[8]||(t[8]=a=>e.playing=!1)},Vt)),[[i,"Pause",void 0,{bottom:!0}]]):U("",!0),u((l(),m("button",{class:"text-button",onClick:t[9]||(t[9]=a=>K())},$t)),[[i,"Stop",void 0,{bottom:!0}]])])])]),n("div",{class:"rows",onMousedown:t[10]||(t[10]=a=>e.hover=!0),onMouseleave:t[11]||(t[11]=j(a=>e.hover=!1,["self"])),onMouseup:t[12]||(t[12]=a=>e.hover=!1)},[St,(l(!0),m(E,null,$(r,(a,p)=>(l(),m("div",{class:"row",key:a},[n("div",{class:"title m-1 rounded-md shadow",style:S({color:_(C)(e.pitches[p]),backgroundColor:e.range[p].length>2?"#0005":"#aaa5"})},P(e.range[p]),5),(l(!0),m(E,null,$(a,(c,w)=>(l(),m("div",{class:z(["cell",{active:c==null?void 0:c.active,current:c.cell==h[p]}]),id:`c${p}-${w}`,key:c,style:S({color:_(C)(e.pitches[p]),borderColor:L(c,p),backgroundColor:c.cell==h[p]?c.active?_(C)(e.pitches[p],3):_(R)?"#0005":"#fff5":"transparent",marginRight:w%4==3?"12px":"1px"}),onMousedown:j(F=>O(p,w,!0,F),["prevent"]),onMouseenter:F=>O(p,w,!1,F)},[n("div",{class:"dot",style:S({backgroundColor:c.active?_(C)(e.pitches[p]):c.cell==h[p]?"currentColor":"#4448"})},null,4)],46,Mt))),128))]))),128))],32)])}}},Pt=X(Ot,[["__scopeId","data-v-a25f2116"]]),me=JSON.parse('{"title":"Step sequencer","description":"A simple tool to build up melodies and chord progressions","frontmatter":{"title":"Step sequencer","description":"A simple tool to build up melodies and chord progressions","date":"2021-08-19T00:00:00.000Z","cover":"sequencer.png"},"headers":[],"relativePath":"practice/rhythm/sequencer/index.md","filePath":"practice/rhythm/sequencer/index.md"}'),zt={name:"practice/rhythm/sequencer/index.md"},ue=Object.assign(zt,{setup(v){return(e,A)=>(l(),m("div",null,[b(Pt)]))}});export{me as __pageData,ue as default};
