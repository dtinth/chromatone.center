import{i as k,v as e,b as n,N as l,C as b,O as y,L as F,B as f,a as O,H as V,T as _,M as D}from"./chunks/framework.7e747cd7.js";import{_ as T}from"./chunks/start.3be170db.js";import{o as g}from"./chunks/index.83aed4fc.js";import{i as B}from"./chunks/index.c0ca431c.js";import{u as C}from"./chunks/tuner.f1245b29.js";import{f as M}from"./chunks/calculations.3384a913.js";import{n as P}from"./chunks/colors.abbc28c6.js";import{e as h}from"./chunks/audio.170dbcbf.js";import{F as S}from"./chunks/FFT.4a41ae6b.js";import{U as $}from"./chunks/UserMedia.4741de0f.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.654bd828.js";import"./chunks/midi.290fabf9.js";import"./chunks/index.0b97d2b2.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.220fb0dd.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/index.b77db23e.js";class m extends h{constructor(){super(g(m.getDefaults(),arguments,["size"])),this.name="Waveform";const o=g(m.getDefaults(),arguments,["size"]);this._analyser.type="waveform",this.size=o.size}static getDefaults(){return Object.assign(h.getDefaults(),{size:1024})}getValue(){return this._analyser.getValue()}get size(){return this._analyser.size}set size(o){this._analyser.size=o}}const j={class:"fullscreen-container",id:"screen"},N={class:"rounded-xl w-full h-full min-h-2xl -z3",id:"pitch-spectrum",version:"1.1",baseProfile:"full",viewBox:"0 0 512 300",xmlns:"http://www.w3.org/2000/svg"},q={key:0,class:"lines"},A=["stroke","x1","x2","y2"],H=["points","stroke"],L={__name:"spectrum",setup(v){const{init:o,tuner:c}=C(),i=new m(512),p=new S({size:4096,smoothing:0}),x=new $().connect(p).connect(i),t=k({initiated:!1,fft:[],wave:[],bands:[],points:""});for(let s=0;s<300;s++)t.bands[s]=p.getFrequencyOfIndex(s);function w(){x.open().then(()=>{o(),t.initiated=!0,console.log("mic open"),B(()=>{t.fft=p.getValue(),t.wave=i.getValue(),t.points=Array.from(t.wave).map((s,r)=>`${r},${120+280*s}`).join(" ")})}).catch(()=>{console.log("mic denied")})}return(s,r)=>{var d;const z=T;return e(),n("div",j,[l(c).initiated?f("",!0):(e(),b(z,{key:0,class:"absolute",onClick:r[0]||(r[0]=a=>w())},{default:y(()=>[F("Start")]),_:1})),(e(),n("svg",N,[t.fft.length>0?(e(),n("g",q,[(e(!0),n(O,null,V(t.bands,(a,u)=>(e(),n("line",{key:u,style:{transition:"all 500ms ease"},stroke:l(P)(l(M)(a),3,1-u/256),"stroke-linecap":"round","stroke-width":"0.5",x1:512*a/1500,y1:300,x2:512*a/1500,y2:-t.fft[u]*1.5},null,8,A))),128))])):f("",!0),t.points?(e(),n("polyline",{key:1,points:t.points,"stroke-width":"4",fill:"none",stroke:(d=l(c))==null?void 0:d.note.color},null,8,H)):f("",!0)]))])}}},dt=JSON.parse('{"title":"Spectrum analyzer","description":"Visually analyse the incoming audio spectrum and waveforms in realtime","frontmatter":{"title":"Spectrum analyzer","description":"Visually analyse the incoming audio spectrum and waveforms in realtime","date":"2021-04-05T00:00:00.000Z","cover":"spectrum.svg"},"headers":[],"relativePath":"practice/experiments/spectrum/index.md","filePath":"practice/experiments/spectrum/index.md"}'),U={name:"practice/experiments/spectrum/index.md"},_t=Object.assign(U,{setup(v){return(o,c)=>{const i=D("client-only");return e(),n("div",null,[_(i,null,{default:y(()=>[_(L)]),_:1})])}}});export{dt as __pageData,_t as default};