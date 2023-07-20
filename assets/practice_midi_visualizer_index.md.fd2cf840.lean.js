import{_ as T}from"./chunks/svg-save.d011c70c.js";import{M as z}from"./chunks/Midi.2c05a97b.js";import{n as D}from"./chunks/colors.1d4ac240.js";import{af as S,S as b}from"./chunks/index.83aed4fc.js";import{c as B}from"./chunks/midiRender.79943999.js";import{_ as M,A as k,i as m,o as s,c as r,a as o,F as _,r as h,n as A,t as f,u as F,f as v,p as $,h as P,B as N,x as R}from"./chunks/framework.aa37bc02.js";import{P as E}from"./chunks/synth.c9645a06.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/index.2d1b2d4e.js";import"./chunks/index.66565e0b.js";import"./chunks/index.b30cd6d2.js";import"./chunks/midi.dba817e8.js";import"./chunks/index.e5aae720.js";import"./chunks/calculations.65ee336d.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/tempo.cdd53517.js";import"./chunks/audio.960b149c.js";import"./chunks/Loop.b192c9c2.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.f99e52ea.js";import"./chunks/AutoPanner.9f3b5c9e.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";const y=d=>($("data-v-6e894a4a"),d=d(),P(),d),O={class:"flex flex-col items-center"},V={class:"flex flex-wrap"},J=y(()=>o("label",{for:"upload"},[o("div",{class:"i-la-upload"})],-1)),j={key:0,class:"i-la-play"},L={key:1,class:"i-la-stop"},Z=y(()=>o("div",{class:"i-la-trash-alt"},null,-1)),q=[Z],G=y(()=>o("div",{class:"i-la-download"},null,-1)),H=[G],K={class:"flex flex-wrap"},Q=["onClick"],U=["viewBox"],W=["x","y","width","fill"],X={__name:"visualizer",setup(d){let p;const t=k({title:"",author:"",header:"",duration:0,tracks:[],filteredTracks:m(()=>t.tracks.filter((a,n)=>!i.hiddenTracks[n]))}),i=k({width:m(()=>t.duration),height:m(()=>i.upper-i.lower),upper:127,lower:0,playing:!1,hiddenTracks:[]});function g(a){let n=a.target.files[0],c=new FileReader;c.onload=e=>{p=new z.Midi(e.target.result),w(p)},c.readAsArrayBuffer(n)}async function w(a){t.title=a.tracks[0].name,t.header=a.header,t.duration=a.duration,t.ticks=a.durationTicks,t.tracks=a.toJSON().tracks}function x(){t.title="",t.header="",t.duration=0,t.tracks=[],t.ticks=0}function I(){B(p.toArray(),"chromatone")}const u=[];function C(){if(i.playing=!i.playing,i.playing){const a=S()+.5;t.filteredTracks.forEach(n=>{const c=new E(b,{envelope:{attack:.02,decay:.1,sustain:.3,release:1}}).toDestination();u.push(c),n.notes.forEach(e=>{c.triggerAttackRelease(e.name,e.duration,e.time+a,e.velocity)})})}else for(;u.length;)u.shift().dispose()}return(a,n)=>{const c=T;return s(),r("div",O,[o("div",V,[o("button",null,[J,o("input",{class:"p-2 w-18em cursor-pointer",id:"upload",type:"file",accept:"audio/midi",onChange:g},null,32)]),o("button",{onClick:n[0]||(n[0]=e=>C())},[i.playing?(s(),r("div",L)):(s(),r("div",j))]),o("button",{onClick:n[1]||(n[1]=e=>x())},q),o("button",{onClick:I},H)]),o("div",K,[(s(!0),r(_,null,h(t.tracks,(e,l)=>(s(),r("div",{class:"p-1",key:e},[o("div",{class:A(["track",{active:!i.hiddenTracks[l]}]),onClick:et=>i.hiddenTracks[l]=!i.hiddenTracks[l]},f(e.channel)+": "+f(e.name)+" "+f(e.instrument.family),11,Q)]))),128))]),(s(),r("svg",{class:"max-h-70vh",id:"visual",version:"1.1",baseProfile:"full",viewBox:`0 0 ${i.width} ${i.height}`,xmlns:"http://www.w3.org/2000/svg"},[(s(!0),r(_,null,h(t.filteredTracks,e=>(s(),r("g",{key:e},[(s(!0),r(_,null,h(e.notes,l=>(s(),r("rect",{key:l,rx:"0.4",x:l.time,y:127-l.midi,width:l.duration,height:"1",fill:F(D)((l.midi+3)%12)},null,8,W))),128))]))),128))],8,U)),v(c,{svg:"visual"})])}}},Y=M(X,[["__scopeId","data-v-6e894a4a"]]),Dt=JSON.parse('{"title":"MIDI File visualizer","description":"Render a MIDI-file to a colorful picture","frontmatter":{"title":"MIDI File visualizer","description":"Render a MIDI-file to a colorful picture","date":"2021-05-20T00:00:00.000Z","cover":"midi-visual.svg"},"headers":[],"relativePath":"practice/midi/visualizer/index.md","filePath":"practice/midi/visualizer/index.md"}'),tt={name:"practice/midi/visualizer/index.md"},St=Object.assign(tt,{setup(d){return(p,t)=>{const i=N("client-only");return s(),r("div",null,[v(i,null,{default:R(()=>[v(Y)]),_:1})])}}});export{Dt as __pageData,St as default};
