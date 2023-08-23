import{_ as z}from"./chunks/start.513900a4.js";import{o as _}from"./chunks/index.cccf7ef0.js";import{c as V}from"./chunks/index.0e8b6fce.js";import{u as F}from"./chunks/tuner.ff60fac7.js";import{b}from"./chunks/calculations.65ee336d.js";import{n as C}from"./chunks/colors.4eba5607.js";import{e as g}from"./chunks/audio.0b0a52c9.js";import{F as D}from"./chunks/FFT.bab797e2.js";import{U as B}from"./chunks/UserMedia.c8f7c51a.js";import{C as N,o as t,c as o,u as c,b as O,z as y,h as P,f as d,F as S,r as T,D as $,d as h}from"./chunks/framework.233ced2b.js";import"./chunks/index.fb02c716.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.654bd828.js";import"./chunks/midi.8add1e1a.js";import"./chunks/index.87a1f89e.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.b0a1456c.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.33c16f88.js";import"./chunks/AutoPanner.30f7ef90.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";import"./chunks/index.c9980755.js";class l extends g{constructor(){super(_(l.getDefaults(),arguments,["size"])),this.name="Waveform";const n=_(l.getDefaults(),arguments,["size"]);this._analyser.type="waveform",this.size=n.size}static getDefaults(){return Object.assign(g.getDefaults(),{size:1024})}getValue(){return this._analyser.getValue()}get size(){return this._analyser.size}set size(n){this._analyser.size=n}}const j={class:"fullscreen-container",id:"screen"},U={class:"rounded-xl w-full h-full min-h-2xl -z3",id:"pitch-spectrum",version:"1.1",baseProfile:"full",viewBox:"0 0 512 300",xmlns:"http://www.w3.org/2000/svg"},q={key:0,class:"lines"},A=["stroke","x1","x2","y2"],M=["points","stroke"],E={__name:"spectrum",setup(x){const{init:n,tuner:m}=F(),r=new l(512),p=new D({size:4096,smoothing:0}),v=new B().connect(p).connect(r),e=N({initiated:!1,fft:[],wave:[],bands:[],points:""});for(let s=0;s<300;s++)e.bands[s]=p.getFrequencyOfIndex(s);function w(){v.open().then(()=>{n(),e.initiated=!0,console.log("mic open"),V(()=>{e.fft=p.getValue(),e.wave=r.getValue(),e.points=Array.from(e.wave).map((s,i)=>`${i},${120+280*s}`).join(" ")})}).catch(()=>{console.log("mic denied")})}return(s,i)=>{var f;const k=z;return t(),o("div",j,[c(m).initiated?d("",!0):(t(),O(k,{key:0,class:"absolute",onClick:i[0]||(i[0]=a=>w())},{default:y(()=>[P("Start")]),_:1})),(t(),o("svg",U,[e.fft.length>0?(t(),o("g",q,[(t(!0),o(S,null,T(e.bands,(a,u)=>(t(),o("line",{key:u,style:{transition:"all 500ms ease"},stroke:c(C)(c(b)(a),3,1-u/256),"stroke-linecap":"round","stroke-width":"0.5",x1:512*a/1500,y1:300,x2:512*a/1500,y2:-e.fft[u]*1.5},null,8,A))),128))])):d("",!0),e.points?(t(),o("polyline",{key:1,points:e.points,"stroke-width":"4",fill:"none",stroke:(f=c(m))==null?void 0:f.note.color},null,8,M)):d("",!0)]))])}}},_e=JSON.parse('{"title":"Spectrum analyzer","description":"Visually analyse the incoming audio spectrum and waveforms in realtime","frontmatter":{"title":"Spectrum analyzer","description":"Visually analyse the incoming audio spectrum and waveforms in realtime","date":"2021-04-05T00:00:00.000Z","cover":"spectrum.svg"},"headers":[],"relativePath":"practice/experiments/spectrum/index.md","filePath":"practice/experiments/spectrum/index.md","lastUpdated":1676883357000}'),I={name:"practice/experiments/spectrum/index.md"},ge=Object.assign(I,{setup(x){return(n,m)=>{const r=$("client-only");return t(),o("div",null,[h(r,null,{default:y(()=>[h(E)]),_:1})])}}});export{_e as __pageData,ge as default};
