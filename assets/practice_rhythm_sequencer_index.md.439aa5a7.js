import{_ as J}from"./chunks/rotary.536ffc42.js";import{_ as L}from"./chunks/scale.ae76994f.js";import{_ as Y,B as F,i as D,G as Z,j as Q,A as y,K as X,l as tt,o as l,c as m,a as n,w as u,g,W as et,F as S,r as E,t as U,u as _,n as z,h as ot,e as O,q as M,x as N,p as st,f as at}from"./chunks/framework.f429e15e.js";import{g as B,f as nt,n as C}from"./chunks/colors.f742d7d3.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{n as rt}from"./chunks/index.37551f4c.js";import{i as it,e as pt}from"./chunks/midi.231bd883.js";import{b as h,e as lt}from"./chunks/index.25d7e705.js";import{n as mt}from"./chunks/theory.61e5aadb.js";import{t as R,a0 as ut,Y as dt,a1 as T}from"./chunks/index.cccf7ef0.js";import{b as ct}from"./chunks/synth.15b1a9f8.js";import{c as ft}from"./chunks/audio.e9cddac8.js";import{t as j}from"./chunks/tempo.60cef874.js";import{i as I}from"./chunks/state.51f78fc9.js";import{P as vt}from"./chunks/Pattern.f5dbbc3e.js";import"./chunks/keys.cccdafa6.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.654bd828.js";import"./chunks/index.92f70141.js";import"./chunks/index.88f7cbf1.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.aa4960a4.js";import"./chunks/AutoPanner.25817587.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/Loop.4db2aa01.js";let k;function H(){if(R(),k)return;const{channel:v}=ft("piano");k=new ut({urls:{A0:"A0.mp3",C1:"C1.mp3","D#1":"Ds1.mp3","F#1":"Fs1.mp3",A1:"A1.mp3",C2:"C2.mp3","D#2":"Ds2.mp3","F#2":"Fs2.mp3",A2:"A2.mp3",C3:"C3.mp3","D#3":"Ds3.mp3","F#3":"Fs3.mp3",A3:"A3.mp3",C4:"C4.mp3","D#4":"Ds4.mp3","F#4":"Fs4.mp3",A4:"A4.mp3",C5:"C5.mp3","D#5":"Ds5.mp3","F#5":"Fs5.mp3",A5:"A5.mp3",C6:"C6.mp3","D#6":"Ds6.mp3","F#6":"Fs6.mp3",A6:"A6.mp3",C7:"C7.mp3","D#7":"Ds7.mp3","F#7":"Fs7.mp3",A7:"A7.mp3",C8:"C8.mp3"},release:1,volume:-10,baseUrl:"/audio/piano/"}).connect(v)}function _t(v="A4",e="8n",w){if(!k)return H();k.triggerAttackRelease(v,e,w)}const x=v=>(st("data-v-a25f2116"),v=v(),at(),v),ht={class:"flex flex-col"},gt={class:"flex flex-wrap items-center justify-center"},bt={class:"flex flex-wrap justify-center flex-1 bg-light-900 p-4 rounded-2xl dark-bg-dark-800 gap-2"},yt=["value"],Ct={class:"is-group flex flex-wrap p-2"},xt={class:"is-group"},wt=x(()=>n("div",{class:"i-la-trash-alt"},null,-1)),At=[wt],Dt={class:"is-group flex items-center"},kt=x(()=>n("div",{class:"i-la-play"},null,-1)),Vt=[kt],qt=x(()=>n("div",{class:"i-la-pause"},null,-1)),Ft=[qt],St=x(()=>n("div",{class:"i-la-stop"},null,-1)),Et=[St],Mt=x(()=>n("div",{class:"row"},[n("div",{class:"title"})],-1)),$t=["id","onMousedown","onMouseenter"],Pt={__name:"sequencer",setup(v){const e=F({started:!1,playing:!1,hover:!1,mounted:!1,current:0,octave:h("seq-octave",3),bpm:h("seq-bpm",120),steps:h("seq-steps",16),type:h("seq-type","up"),probability:h("seq-prob",1),humanize:h("seq-human",!1),interval:h("seq-interval","8n"),note:D(()=>mt[B.tonic]),range:D(()=>nt.rangeOf(e.note+e.octave+" "+B.set.name)(e.note+e.octave,e.note+(e.octave+2)).map(o=>rt.simplify(o)).reverse()),midi:D(()=>e.range.map(o=>it.toMidi(o))),pitches:D(()=>e.midi.map(o=>(o+3)%12)),progress:0}),w=["up","down","upDown","downUp","alternateUp","alternateDown","random","randomWalk","randomOnce"],r=F([]),b=F([]);let d=[];lt(" ",o=>{o.preventDefault(),e.playing=!e.playing}),Z(()=>{e.range.forEach((o,t)=>{r[t]=r[t]||[],r[t].length=e.steps,r.length=e.range.length,Array.apply(null,r[t]).forEach((s,i)=>{r[t][i]={row:t,cell:i,note:o,active:(s==null?void 0:s.active)||!1}})})}),Q(()=>{e.mounted=!0,H(),V()}),y(()=>e.steps,()=>{e.mounted&&V()},{immediate:!0});function V(){d.forEach(o=>{o.stop(0),o.dispose()}),d=[],r.forEach((o,t)=>{d[t]=new vt((c,s)=>{dt.schedule(()=>{b[t]=s==null?void 0:s.cell,s!=null&&s.active&&pt(s==null?void 0:s.note)},c),s!=null&&s.active&&(ct(s.note,e.interval,c),_t(s.note,e.interval,c))},r[t],e.type).start(0),d[t].interval=e.interval})}let $;function P(o,t,c,s){!e.hover&&!c||!c&&$==s.target.id||($=s.target.id,r[o][t].active?r[o][t].active=!1:r[o][t].active=!0)}function K(){r.forEach((o,t)=>{o.forEach((c,s)=>r[t][s].active=!1)})}y(()=>e.playing,o=>{o?(d.forEach(t=>{t.start(0)}),T.start(),e.started||(R(),e.started=!0)):(d.forEach(t=>{t.stop()}),T.stop())}),y(()=>e.type,o=>{d.forEach(t=>{t.pattern=o})},{immediate:!0}),y(()=>e.probability,o=>{d.forEach(t=>{t.probability=o})},{immediate:!0}),y(()=>e.humanize,o=>{d.forEach(t=>{t.humanize=o})},{immediate:!0});function W(){e.playing=!1,V()}X(()=>{d.forEach(o=>{o.stop(0),o.dispose()})});function G(o,t){return o.active?C(e.pitches[t]):o.cell==b[t]?I.value?"#eee7":"#3337":"#4444"}return(o,t)=>{const c=L,s=J,i=tt("tooltip");return l(),m("div",ht,[n("div",gt,[u(g(c,{class:"flex-1"},null,512),[[i,"Select root note and scale",void 0,{top:!0}]]),n("div",bt,[u((l(),m("select",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.type=a)},[(l(),m(S,null,E(w,a=>n("option",{key:a,value:a},U(a),9,yt)),64))])),[[et,e.type],[i,"Pattern type",void 0,{top:!0}]]),n("div",Ct,[u(g(s,{modelValue:e.octave,"onUpdate:modelValue":t[1]||(t[1]=a=>e.octave=a),max:4,min:2,fixed:0,param:"OCTAVE"},null,8,["modelValue"]),[[i,"Octave",void 0,{top:!0}]]),u(g(s,{modelValue:e.steps,"onUpdate:modelValue":t[2]||(t[2]=a=>e.steps=a),max:32,min:4,step:1,fixed:0,param:"steps"},null,8,["modelValue"]),[[i,"Number of steps",void 0,{top:!0}]]),u(g(s,{modelValue:e.probability,"onUpdate:modelValue":t[3]||(t[3]=a=>e.probability=a),max:1,min:0,step:.01,fixed:2,param:"prob"},null,8,["modelValue"]),[[i,"Probability",void 0,{top:!0}]]),u(g(s,{modelValue:_(j).bpm,"onUpdate:modelValue":t[4]||(t[4]=a=>_(j).bpm=a),step:1,max:400,min:10,fixed:0,param:"BPM"},null,8,["modelValue"]),[[i,"Set tempo",void 0,{top:!0}]])]),n("div",xt,[u((l(),m("button",{class:z(["text-button",{active:e.humanize}]),onClick:t[5]||(t[5]=a=>e.humanize=!e.humanize)},[ot("HMN")],2)),[[i,"Humanize rhythm",void 0,{bottom:!0}]]),u((l(),m("button",{class:"text-button",onClick:t[6]||(t[6]=a=>K())},At)),[[i,"Clear pattern",void 0,{bottom:!0}]])]),n("div",Dt,[e.playing?O("",!0):u((l(),m("button",{key:0,class:"text-button",onClick:t[7]||(t[7]=a=>e.playing=!0)},Vt)),[[i,"Play",void 0,{bottom:!0}]]),e.playing?u((l(),m("button",{key:1,class:"text-button",onClick:t[8]||(t[8]=a=>e.playing=!1)},Ft)),[[i,"Pause",void 0,{bottom:!0}]]):O("",!0),u((l(),m("button",{class:"text-button",onClick:t[9]||(t[9]=a=>W())},Et)),[[i,"Stop",void 0,{bottom:!0}]])])])]),n("div",{class:"rows",onMousedown:t[10]||(t[10]=a=>e.hover=!0),onMouseleave:t[11]||(t[11]=N(a=>e.hover=!1,["self"])),onMouseup:t[12]||(t[12]=a=>e.hover=!1)},[Mt,(l(!0),m(S,null,E(r,(a,p)=>(l(),m("div",{class:"row",key:a},[n("div",{class:"title m-1 rounded-md shadow",style:M({color:_(C)(e.pitches[p]),backgroundColor:e.range[p].length>2?"#0005":"#aaa5"})},U(e.range[p]),5),(l(!0),m(S,null,E(a,(f,A)=>(l(),m("div",{class:z(["cell",{active:f==null?void 0:f.active,current:f.cell==b[p]}]),id:`c${p}-${A}`,key:f,style:M({color:_(C)(e.pitches[p]),borderColor:G(f,p),backgroundColor:f.cell==b[p]?f.active?_(C)(e.pitches[p],3):_(I)?"#0005":"#fff5":"transparent",marginRight:A%4==3?"12px":"1px"}),onMousedown:N(q=>P(p,A,!0,q),["prevent"]),onMouseenter:q=>P(p,A,!1,q)},[n("div",{class:"dot",style:M({backgroundColor:f.active?_(C)(e.pitches[p]):f.cell==b[p]?"currentColor":"#4448"})},null,4)],46,$t))),128))]))),128))],32)])}}},Ut=Y(Pt,[["__scopeId","data-v-a25f2116"]]),de=JSON.parse('{"title":"Step sequencer","description":"A simple tool to build up melodies and chord progressions","frontmatter":{"title":"Step sequencer","description":"A simple tool to build up melodies and chord progressions","date":"2021-08-19T00:00:00.000Z","cover":"sequencer.png"},"headers":[],"relativePath":"practice/rhythm/sequencer/index.md","filePath":"practice/rhythm/sequencer/index.md","lastUpdated":1676883357000}'),zt={name:"practice/rhythm/sequencer/index.md"},ce=Object.assign(zt,{setup(v){return(e,w)=>(l(),m("div",null,[g(Ut)]))}});export{de as __pageData,ce as default};
