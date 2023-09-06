import"./chunks/tuner.11147eb4.js";import"./chunks/audio.01373f6f.js";import"./chunks/colors.394b294c.js";import{u as D}from"./chunks/midi.9486e5fa.js";import"./chunks/loop.93be4422.js";import"./chunks/mic.0d26fc2e.js";import{M as T}from"./chunks/Midi.1f918097.js";import{u as F}from"./chunks/tempo.4bdd83c1.js";import"./chunks/noise.2dc59262.js";import{a2 as N,F as w}from"./chunks/index.098dc14b.js";import{u as P}from"./chunks/sequence.c07c6f83.js";import{u as R,b as y}from"./chunks/synth.97f998a0.js";import"./chunks/theory.61e5aadb.js";import{P as S}from"./chunks/Sequence.dc8acd0f.js";import{ac as B,r as f,b as k,H as q,o as a,c as d,a as t,t as l,u as s,F as b,d as $,e as O,_ as V,I as E,f as M,w as z}from"./chunks/framework.c7ad3ca2.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.654bd828.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.b3129a1a.js";import"./chunks/midiRender.bb5d7d88.js";import"./chunks/UserMedia.84833756.js";import"./chunks/Subtract.beb0cc34.js";import"./chunks/OnePoleFilter.f8119023.js";import"./chunks/Loop.97b07c3f.js";import"./chunks/FFT.6aac2071.js";import"./chunks/BitCrusher.e42cf4d0.js";import"./chunks/Filter.fb7acdf5.js";import"./chunks/AutoPanner.8d278bb2.js";import"./chunks/Scale.22b16e3d.js";import"./chunks/PingPongDelay.187daa12.js";import"./chunks/MonoSynth.ecb6ed30.js";import"./chunks/index.86652af6.js";const H={class:"flex flex-col"},J={class:"text-2xl"},L={class:"flex flex-wrap"},Q={key:0,class:"i-la-circle"},U={key:1,class:"i-mdi-checkbox-blank-circle"},W={key:0,class:"i-la-play"},Z={key:1,class:"i-la-pause"},j=t("div",{class:"i-la-stop"},null,-1),A=[j],G=t("div",{class:"i-la-trash-alt"},null,-1),K=[G],X=t("div",{class:"i-la-plus"},null,-1),Y=[X],tt={class:"p-1"},et=t("div",{class:"i-la-minus"},null,-1),st=[et],ot=t("div",{class:"p-1"},"/",-1),it=t("div",{class:"i-la-plus"},null,-1),nt=[it],rt={class:"p-1"},lt=t("div",{class:"i-la-minus"},null,-1),at=[lt],dt={class:"flex flex-col"},ct=["viewBox"],pt=["width","height"],mt=["x1","x2","y2"],ut=["transform"],_t=["y2"],ht={y:"3",x:"1","font-size":"2"},vt={class:"flex text-xs p-4"},ft={class:"grid grid-cols-3 text-xs gap-2"},kt=B({__name:"MidiRows",setup(C){R();const{midi:u}=D(),{seq:n}=P(null,1,"row"),c=F(),i=f({width:100,height:30,progress:k(()=>i.width*n.progress),recording:!1}),_=k(()=>n.meter.over*N.PPQ*4/n.meter.under),p=k(()=>c.ticks%_.value),v=new S((r,e)=>{console.log(e),y(w(e.midi,"midi").toNote(),e.duration+"i")}).set({loop:!0,loopEnd:"800i",loopStart:0,playbackRate:1,probability:1}).start(0),h=f({}),g=f([]),{track:x,midiFile:wt}=I();q(()=>u.note,r=>{if(y(w(r.number,"midi").toNote()+"","196i"),!(!i.recording||!c.playing))if(r.velocity>0)h[r.number]=p.value;else{const e=h==null?void 0:h[r.number],m=p.value;let o;m>e?o=m-e:o=_.value-e+m,g.push({ticks:p.value,midi:r.number,channel:r.channel,start:e,stop:m,duration:o}),v.add({time:p.value+"i",midi:r.number,duration:o})}});function I(){const r=new T.Midi;r.name="Chromatone recording";const e=r.addTrack();return{midiFile:r,track:e}}return(r,e)=>{var m;return a(),d("div",H,[t("div",J,"MIDI ROWS "+l(p.value)+"/"+l(_.value),1),t("div",L,[t("button",{onClick:e[0]||(e[0]=o=>i.recording=!i.recording)},[i.recording?(a(),d("div",U)):(a(),d("div",Q))]),t("button",{onClick:e[1]||(e[1]=o=>s(c).playing=!s(c).playing)},[s(c).playing?(a(),d("div",Z)):(a(),d("div",W))]),t("button",{onClick:e[2]||(e[2]=o=>s(c).stopped=Date.now())},A),t("button",{onClick:e[3]||(e[3]=o=>s(x).notes=[])},K),t("button",{onClick:e[4]||(e[4]=o=>s(n).meter.over++)},Y),t("div",tt,l(s(n).meter.over),1),t("button",{onClick:e[5]||(e[5]=o=>s(n).meter.over--)},st),ot,t("button",{onClick:e[6]||(e[6]=o=>s(n).meter.under++)},nt),t("div",rt,l(s(n).meter.under),1),t("button",{onClick:e[7]||(e[7]=o=>s(n).meter.under--)},at)]),t("div",dt,[(a(),d("svg",{viewBox:`0 0 ${i.width} ${i.height}`},[t("rect",{width:i.width,height:i.height,fill:"#999"},null,8,pt),(a(!0),d(b,null,$((m=s(u))==null?void 0:m.channels,o=>(a(),d("g",{class:"channel",key:o}))),128)),t("line",{x1:i.progress,x2:i.progress,y1:0,y2:i.height,stroke:"black"},null,8,mt),(a(!0),d(b,null,$(s(n).steps,o=>(a(),d("g",{key:o,transform:`translate(${i.width*o[0].split("-")[0]/s(n).steps.length})`},[t("line",{y2:i.height,stroke:"black","stroke-width":"0.1"},null,8,_t),t("text",ht,l(Number(o[0].split("-")[0])+1),1)],8,ut))),128))],8,ct))]),t("div",vt,l(g),1),t("div",ft,[t("pre",null,l(s(n)),1),t("pre",null,l(s(c)),1),t("pre",null,[O(),t("p",null," "+l(s(x)),1),t("p",null,l(s(u).clock),1),t("p",null,l(s(u).note),1)])])])}}}),ee=JSON.parse('{"title":"MIDI Rows","description":"Measurewise MIDI recorder","frontmatter":{"title":"MIDI Rows","description":"Measurewise MIDI recorder","date":"2020-02-02T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/rows/index.md","filePath":"practice/midi/rows/index.md","lastUpdated":1689843676000}'),gt={name:"practice/midi/rows/index.md"};function xt(C,u,n,c,i,_){const p=kt,v=E("client-only");return a(),d("div",null,[M(v,null,{default:z(()=>[M(p)]),_:1})])}const se=V(gt,[["render",xt]]);export{ee as __pageData,se as default};
