import{Q as T,i as v,r as k,q as D,v as a,b as d,F as t,X as l,N as i,a as x,H as b,L as F,T as y,O as N,M as O}from"./chunks/framework.7e747cd7.js";import"./chunks/tuner.f1245b29.js";import"./chunks/audio.170dbcbf.js";import"./chunks/colors.abbc28c6.js";import{u as P}from"./chunks/midi.290fabf9.js";import"./chunks/loop.dc25aa47.js";import"./chunks/mic.967a994c.js";import{M as q}from"./chunks/Midi.1f918097.js";import{u as S}from"./chunks/tempo.fceb0f15.js";import"./chunks/noise.0a2eacbf.js";import{a0 as R,F as w}from"./chunks/index.83aed4fc.js";import{u as B}from"./chunks/sequence.5b4cde29.js";import{u as H,b as M}from"./chunks/synth.220fb0dd.js";import"./chunks/theory.61e5aadb.js";import{P as L}from"./chunks/Sequence.a9c1c185.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/calculations.3384a913.js";import"./chunks/index.c0ca431c.js";import"./chunks/index.0b97d2b2.js";import"./chunks/index.654bd828.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.b77db23e.js";import"./chunks/midiRender.6c0c3f09.js";import"./chunks/UserMedia.4741de0f.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/OnePoleFilter.2d0525f8.js";import"./chunks/Loop.b192c9c2.js";import"./chunks/FFT.4a41ae6b.js";import"./chunks/BitCrusher.884c5bbc.js";import"./chunks/Filter.2b531c53.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/Scale.7b617051.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/index.86652af6.js";const Q={class:"flex flex-col"},j={class:"text-2xl"},z={class:"flex flex-wrap"},E={key:0,class:"i-la-circle"},J={key:1,class:"i-mdi-checkbox-blank-circle"},W={key:0,class:"i-la-play"},X={key:1,class:"i-la-pause"},Z=t("div",{class:"i-la-stop"},null,-1),A=[Z],G=t("div",{class:"i-la-trash-alt"},null,-1),K=[G],U=t("div",{class:"i-la-plus"},null,-1),V=[U],Y={class:"p-1"},tt=t("div",{class:"i-la-minus"},null,-1),st=[tt],it=t("div",{class:"p-1"},"/",-1),ot=t("div",{class:"i-la-plus"},null,-1),et=[ot],nt={class:"p-1"},rt=t("div",{class:"i-la-minus"},null,-1),lt=[rt],at={class:"flex flex-col"},dt=["viewBox"],ct=["width","height"],mt=["x1","x2","y2"],pt=["transform"],ut=["y2"],_t={y:"3",x:"1","font-size":"2"},ht={class:"flex text-xs p-4"},vt={class:"grid grid-cols-3 text-xs gap-2"},kt=T({__name:"midi-rows",setup($){H();const{midi:p}=P(),{seq:n}=B(null,1,"row"),c=S(),e=v({width:100,height:30,progress:k(()=>e.width*n.progress),recording:!1}),h=k(()=>n.meter.over*R.PPQ*4/n.meter.under),u=k(()=>c.ticks%h.value),I=new L((r,s)=>{console.log(s),M(w(s.midi,"midi").toNote(),s.duration+"i")}).set({loop:!0,loopEnd:"800i",loopStart:0,playbackRate:1,probability:1}).start(0),_=v({}),f=v([]),{track:g,midiFile:gt}=C();D(()=>p.note,r=>{if(M(w(r.number,"midi").toNote()+"","196i"),!(!e.recording||!c.playing))if(r.velocity>0)_[r.number]=u.value;else{const s=_==null?void 0:_[r.number],m=u.value;let o;m>s?o=m-s:o=h.value-s+m,f.push({ticks:u.value,midi:r.number,channel:r.channel,start:s,stop:m,duration:o}),I.add({time:u.value+"i",midi:r.number,duration:o})}});function C(){const r=new q.Midi;r.name="Chromatone recording";const s=r.addTrack();return{midiFile:r,track:s}}return(r,s)=>{var m;return a(),d("div",Q,[t("div",j,"MIDI ROWS "+l(u.value)+"/"+l(h.value),1),t("div",z,[t("button",{onClick:s[0]||(s[0]=o=>e.recording=!e.recording)},[e.recording?(a(),d("div",J)):(a(),d("div",E))]),t("button",{onClick:s[1]||(s[1]=o=>i(c).playing=!i(c).playing)},[i(c).playing?(a(),d("div",X)):(a(),d("div",W))]),t("button",{onClick:s[2]||(s[2]=o=>i(c).stopped=Date.now())},A),t("button",{onClick:s[3]||(s[3]=o=>i(g).notes=[])},K),t("button",{onClick:s[4]||(s[4]=o=>i(n).meter.over++)},V),t("div",Y,l(i(n).meter.over),1),t("button",{onClick:s[5]||(s[5]=o=>i(n).meter.over--)},st),it,t("button",{onClick:s[6]||(s[6]=o=>i(n).meter.under++)},et),t("div",nt,l(i(n).meter.under),1),t("button",{onClick:s[7]||(s[7]=o=>i(n).meter.under--)},lt)]),t("div",at,[(a(),d("svg",{viewBox:`0 0 ${e.width} ${e.height}`},[t("rect",{width:e.width,height:e.height,fill:"#999"},null,8,ct),(a(!0),d(x,null,b((m=i(p))==null?void 0:m.channels,o=>(a(),d("g",{class:"channel",key:o}))),128)),t("line",{x1:e.progress,x2:e.progress,y1:0,y2:e.height,stroke:"black"},null,8,mt),(a(!0),d(x,null,b(i(n).steps,o=>(a(),d("g",{key:o,transform:`translate(${e.width*o[0].split("-")[0]/i(n).steps.length})`},[t("line",{y2:e.height,stroke:"black","stroke-width":"0.1"},null,8,ut),t("text",_t,l(Number(o[0].split("-")[0])+1),1)],8,pt))),128))],8,dt))]),t("div",ht,l(f),1),t("div",vt,[t("pre",null,l(i(n)),1),t("pre",null,l(i(c)),1),t("pre",null,[F(),t("p",null," "+l(i(g)),1),t("p",null,l(i(p).clock),1),t("p",null,l(i(p).note),1)])])])}}}),ss=JSON.parse('{"title":"MIDI Rows","description":"Measurewise MIDI recorder","frontmatter":{"title":"MIDI Rows","description":"Measurewise MIDI recorder","date":"2020-02-02T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/rows/index.md","filePath":"practice/midi/rows/index.md"}'),ft={name:"practice/midi/rows/index.md"},is=Object.assign(ft,{setup($){return(p,n)=>{const c=O("client-only");return a(),d("div",null,[y(c,null,{default:N(()=>[y(kt)]),_:1})])}}});export{ss as __pageData,is as default};