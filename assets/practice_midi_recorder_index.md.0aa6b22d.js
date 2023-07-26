import{M as k}from"./chunks/Midi.1f918097.js";import{n as w}from"./chunks/colors.14f6b67b.js";import{af as b,S as x}from"./chunks/index.83aed4fc.js";import{m as I}from"./chunks/midi.10bf3c51.js";import{u as T}from"./chunks/audio.998c0aad.js";import{_ as M,A as u,i as S,z as $,o as n,c as l,a,m as C,F as f,r as _,u as R,p as j,h as B,B as D,f as v,x as P,d as z}from"./chunks/framework.fee3f2bd.js";import{P as N}from"./chunks/synth.55a5c78a.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.7c47e578.js";import"./chunks/index.28289f35.js";import"./chunks/index.b30cd6d2.js";import"./chunks/calculations.65ee336d.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/index.0511e153.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.6f99311a.js";import"./chunks/AutoPanner.bc217bb3.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";const h=d=>(j("data-v-8286ed4a"),d=d(),B(),d),A={class:"flex flex-col items-center"},E=h(()=>a("div",{class:"text-2xl"},"MIDI Recorder",-1)),V={class:"flex flex-wrap"},F={key:0,class:"i-la-play"},L={key:1,class:"i-la-stop"},O=h(()=>a("div",{class:"i-la-trash-alt"},null,-1)),W=[O],J=h(()=>a("div",{class:"i-la-download"},null,-1)),X=[J],Y=["viewBox"],Z=["x","y","width","height","fill"],q={__name:"recorder",setup(d){new k.Midi;const e=u({title:"",author:"",header:"",duration:S(()=>e.latest-e.started),tracks:{},first:0,last:1e3,top:61,bottom:60}),r=u({width:1e3,height:500,playing:!1,recording:!1,hiddenTracks:[]});$(()=>I.note,t=>{var s,i,o;if(r.recording)if(e.tracks[t.channel]||(e.tracks[t.channel]={active:{},notes:[]}),e.first==0&&(e.first=t.timestamp),t.number>=e.top&&(e.top=t.number),t.number<=e.bottom&&(e.bottom=t.number),t.type=="noteon")e.tracks[t.channel].active[t.number]=t;else{e.last=t.timestamp;let c=(o=(i=(s=e.tracks)==null?void 0:s[t.channel].active)==null?void 0:i[t.number])==null?void 0:o.timestamp;t.duration=t.timestamp-c,delete e.tracks[t.channel].active[t.number],e.tracks[t.channel].notes.push(t)}});function m(t){let s=t-e.first,i=e.last-e.first||1;return s/i*r.width}function g(t){let s=e.top-t,i=t-e.bottom-1;return s/(i+s)*r.height}const p=[];function y(){r.playing=!r.playing;const{master:t}=T();if(r.playing){const s=b()+.5;e.filteredTracks.forEach(i=>{const o=new N(x,{envelope:{attack:.02,decay:.1,sustain:.3,release:1}}).connect(t.limiter);p.push(o),i.notes.forEach(c=>{o.triggerAttackRelease(c.name,c.duration,c.time+s,c.velocity)})})}else for(;p.length;)p.shift().dispose()}return(t,s)=>(n(),l("div",A,[E,a("div",V,[a("button",{onClick:s[0]||(s[0]=i=>y())},[r.playing?(n(),l("div",L)):(n(),l("div",F))]),a("button",{onClick:s[1]||(s[1]=i=>r.recording=!r.recording)},[a("div",{class:"i-la-circle",style:C({color:r.recording?"red":""})},null,4)]),a("button",{onClick:s[2]||(s[2]=i=>t.clear())},W),a("button",{onClick:s[3]||(s[3]=(...i)=>t.download&&t.download(...i))},X)]),(n(),l("svg",{class:"h-30em w-full",version:"1.1",baseProfile:"full",viewBox:`0 0 ${r.width} ${r.height}`,xmlns:"http://www.w3.org/2000/svg"},[(n(!0),l(f,null,_(e.tracks,i=>(n(),l("g",{key:i},[(n(!0),l(f,null,_(i.notes,o=>(n(),l("rect",{key:o,rx:"0.4",x:m(o.timestamp),y:g(o.number),width:o.duration*1e3/(e.last-e.first),height:r.height/(e.top-e.bottom),fill:R(w)((o.number+3)%12)},null,8,Z))),128))]))),128))],8,Y))]))}},G=M(q,[["__scopeId","data-v-8286ed4a"]]),H=a("h2",{id:"work-in-progress",tabindex:"-1"},[z("Work in progress "),a("a",{class:"header-anchor",href:"#work-in-progress","aria-label":'Permalink to "Work in progress"'},"​")],-1),K=a("p",null,"This app is a draft to be iterated on. The idea is to make a tool to record some kind of visual midi sketches and store them as mid files and also directly in the browser.",-1),kt=JSON.parse('{"title":"MIDI Recorder","description":"Record MIDI as you play – visualize and save your music","frontmatter":{"title":"MIDI Recorder","description":"Record MIDI as you play – visualize and save your music","date":"2021-08-04T00:00:00.000Z","sources":["https://github.com/1j01/midi-recorder/","https://github.com/Tonejs/Midi","https://github.com/Tonejs/Tone.js/wiki/TransportTime","https://webmidijs.org/docs/v3.0.0-alpha.10/index.html"],"status":"alpha","version":0.1},"headers":[],"relativePath":"practice/midi/recorder/index.md","filePath":"practice/midi/recorder/index.md"}'),Q={name:"practice/midi/recorder/index.md"},wt=Object.assign(Q,{setup(d){return(e,r)=>{const m=D("client-only");return n(),l("div",null,[v(m,null,{default:P(()=>[v(G)]),_:1}),H,K])}}});export{kt as __pageData,wt as default};