import{i as T,r as f,l as P,q as h,K as O,j as R,Z as V,v as i,b as l,F as s,f as g,N as o,X as _,a as w,H as q,C as L,T as b,O as z,R as N,M as H}from"./chunks/framework.7e747cd7.js";import{_ as A}from"./chunks/rotary.21ad28fa.js";import{f as U,p as Z,b as j}from"./chunks/calculations.3384a913.js";import{F as S,G as E,U as G,l as k,S as K}from"./chunks/index.83aed4fc.js";import{b as x,j as I,i as J}from"./chunks/index.c0ca431c.js";import{c as W,b as X}from"./chunks/audio.170dbcbf.js";import{l as M}from"./chunks/midi.290fabf9.js";import{u as F}from"./chunks/index.0b97d2b2.js";import{a as D}from"./chunks/AutoPanner.94a306f8.js";import{F as Y}from"./chunks/Filter.2b531c53.js";import{n as B}from"./chunks/colors.abbc28c6.js";import{n as Q}from"./chunks/theory.61e5aadb.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/Scale.7b617051.js";import"./chunks/index.654bd828.js";import"./chunks/synth.220fb0dd.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/index.b77db23e.js";import"./chunks/index.86652af6.js";const r=T({base:55,freq:F(x("drone-freq",110),27.5,220),started:!1,stopped:!0,filterFreq:x("drone-filter-freq",1e3),volume:x("drone-vol",.5),note:f(()=>S(r.freq).toNote()),pitch:f({get(){return Math.round((U(r.freq)+72)%12)},set(n){r.freq=Z(n-36)}}),cents:f(()=>ne(r.freq)%1200),centDiff:f(()=>r.cents-r.pitch*100),color:f(()=>j(r.freq))}),c=P({initiated:!1});function $(){const{channel:n}=W("drone");c.channel=n,c.gain=new E(r.volume).connect(n),c.filter=new Y(r.filterFreq).connect(c.gain)}function ee(){return c.initiated||($(),c.initiated=!0,r.started=!0,I(" ",n=>{n.preventDefault(),r.stopped=!r.stopped}),h(()=>r.volume,n=>{c.gain.gain.targetRampTo(n,1)}),h(()=>r.filterFreq,n=>{c.filter.frequency.targetRampTo(n,.1)})),r}let C=0;function te(n){const e=P({}),t=T({play:!1,active:!1,vol:F(x(`drone-${n}-vol`,.8),0,1),pan:F(x(`drone-${n}-pan`,0),-1,1),freq:f(()=>r.freq*Math.pow(2,n/12)),note:f(()=>S(t.freq).toNote()),color:f(()=>j(t.freq)),lfo:0,panning:0}),m=M({param:`drone-${n}-vol`,number:5+C});h(m,a=>{t.vol=a,a>0&&(t.play=!0)});const d=M({param:`drone-${n}-pan`,number:6+C});h(d,a=>{t.pan=(a-.5)*2}),C+=2,h(()=>r.stopped,a=>{a?t.play=!1:t.active&&(t.play=!0)}),h(()=>t.play,a=>{a?(e.synth||(c.initiated||($(),c.initiated=!0,r.started=!0),u(),y()),t.active=!0,r.stopped=!1,e.synth.triggerAttack(t.freq)):e.synth&&e.synth.triggerRelease()});function u(){e.meter=new X({normalRange:!0}),e.panner=new G({volume:k(r.volume)}).connect(c.filter),e.lfo=new D(Math.random()*.5+.01,-.25,.25).connect(e.panner.pan).start(),e.lfoVol=new D(Math.random()*.1+.001,-20,0).connect(e.panner.volume).connect(e.meter).start(),e.synth=new K({envelope:{attack:2,sustain:1,release:4},oscillator:{type:"sawtooth32"},volume:k(t.vol)-10}).connect(e.panner)}function y(){h(()=>t.freq,a=>{e.synth.frequency.targetRampTo(a)}),h(()=>t.vol,a=>{e.synth.volume.exponentialRampTo(k(a)-10,1)}),h(()=>t.pan,a=>{e.panner.pan.targetRampTo(a,1)}),J(()=>{t.lfo=e.meter.getValue()})}return O(()=>{e.synth&&e.synth.triggerRelease()}),t}function oe(n,e=r.base){return e*Math.pow(2,n/12)}function ne(n,e=0){return Math.floor(1200*Math.log(n/oe(e))/Math.log(2))}const re={class:"text-2xl z-100"},ae={__name:"voice",props:{interval:{type:Number,default:0}},setup(n){const t=te(n.interval);function m(d){d.tap&&(t.play=!t.play,t.active=t.play),t.vol-=d.delta[1]/400,t.pan+=d.delta[0]/100}return(d,u)=>{const y=R("drag");return V((i(),l("div",{class:"py-16 flex-1 relative cursor-pointer rounded-xl overflow-hidden text-center font-bold border-6 touch-none",style:g({borderColor:o(t).play?o(t).color:"#3333"})},[s("div",{class:"vol -z-5 absolute left-0 right-0 bottom-0 bg-dark-100 bg-opacity-30 border-t-4",style:g({borderColor:o(t).color,height:o(t).vol*100+"%",opacity:o(t).play?1:.2})},null,4),s("div",{class:"vol -z-5 absolute left-0 right-0 bottom-0 bg-dark-900 bg-opacity-20 border-t-1",style:g({height:o(t).vol*100*o(t).lfo+"%",opacity:o(t).play?1:.2,backgroundColor:o(t).color})},null,4),s("div",{class:"pan -z-5 absolute left-0 top-0 bottom-0 border-r-2",style:g({width:o(t).pan*50+50+"%",opacity:o(t).play?1:.2})},null,4),s("div",re,_(o(t).note),1)],4)),[[y,m]])}}},se={class:"drone w-full flex-1 justify-center flex flex-col p-2"},ie={class:"intervals my-2"},le={class:"flex flex-wrap"},ce={class:"info my-4 flex flex-wrap justify-stretch items-center touch-none"},pe={class:"p-1 text-4xl font-bold"},de={class:"p-1"},ue={class:"p-1"},he={class:"p-1 text-xl"},fe={class:"controls min-w-10em flex-1 my-2 p-2 flex flex-wrap items-center justify-center is-group gap-2"},me={key:0,class:"i-la-stop"},ve={key:1,class:"i-la-play"},ge={class:"is-group flex p-2 gap-2"},ye={class:"notes w-full text-sm font-bold text-center flex flex-wrap"},_e=["onClick"],xe={__name:"drone-app",setup(n){const e=ee();function t(d){e.freq+=d.delta[0]/10}const m=T({fifths:{title:"5P",voices:[7,19,31]},octave:{title:"8P",voices:[-12,0,12]}});return(d,u)=>{const y=A,a=R("drag");return i(),l("div",{class:"flex flex-col items-stretch w-full transition-all duration-500 ease-out select-none rounded-3xl shadow-xl border-8",style:g({borderColor:o(e).color})},[s("div",se,[s("div",ie,[(i(!0),l(w,null,q(m,p=>(i(),l("div",{class:"interval flex flex-col m-1",key:p},[s("div",le,[(i(!0),l(w,null,q(p.voices,v=>(i(),L(ae,{class:"m-2",key:v,interval:v},null,8,["interval"]))),128))])]))),128))]),s("div",ce,[V((i(),l("div",{class:"flex flex-wrap p-4 mx-2 flex-1 min-w-10em items-center rounded-xl text-white p-2 cursor-pointer transition-all duration-500 ease-out",style:g({backgroundColor:o(e).color})},[s("div",pe,_(o(e).note),1),s("div",de,_(o(e).centDiff),1),s("div",ue,_(o(e).cents)+" cents",1),s("div",he,_(o(e).freq.toFixed(2))+" Hz",1)],4)),[[a,t]]),s("div",fe,[s("button",{class:"text-button text-3xl",onClick:u[0]||(u[0]=p=>o(e).stopped=!o(e).stopped)},[o(e).stopped?(i(),l("div",ve)):(i(),l("div",me))]),s("div",ge,[b(y,{class:"w-4em",modelValue:o(e).volume,"onUpdate:modelValue":u[1]||(u[1]=p=>o(e).volume=p),min:0,max:1,step:.05,param:"VOL"},null,8,["modelValue"]),b(y,{class:"w-4em",modelValue:o(e).filterFreq,"onUpdate:modelValue":u[2]||(u[2]=p=>o(e).filterFreq=p),min:55,max:12e3,step:.05,fixed:0,param:"LP"},null,8,["modelValue"])])])]),s("div",ye,[(i(!0),l(w,null,q(o(Q),(p,v)=>(i(),l("div",{class:"p-2 m-1 flex-1 cursor-pointer rounded-xl",key:p,style:g({backgroundColor:o(B)(v,3,o(e).pitch==v?1:.2,o(e).pitch==v?1:.4)}),onClick:qe=>o(e).pitch=v},_(p),13,_e))),128))])])],4)}}},be=N('<h2 id="multipurpose-rich-harmonic-sound-generator" tabindex="-1">Multipurpose rich harmonic sound generator <a class="header-anchor" href="#multipurpose-rich-harmonic-sound-generator" aria-label="Permalink to &quot;Multipurpose rich harmonic sound generator&quot;">​</a></h2><p>You choose the pitch and the app plays 3 octaves and 3 fifths intervals for it. The sound is generated with <a href="https://en.wikipedia.org/wiki/Sawtooth_wave" target="_blank" rel="noreferrer">sawtooth</a> oscillator synth and this gives the incredible amount of harmonic material to play with. Consider it as an electronic version of <a href="https://en.wikipedia.org/wiki/Tanpura" target="_blank" rel="noreferrer">indian tanpura</a> or simply the <a href="https://en.wikipedia.org/wiki/Shruti_box" target="_blank" rel="noreferrer">Shruti box</a>.</p><h3 id="how-to-use-the-drone-app" tabindex="-1">How to use the drone app <a class="header-anchor" href="#how-to-use-the-drone-app" aria-label="Permalink to &quot;How to use the drone app&quot;">​</a></h3><ol><li>Choose the root note – the Sa note of the performance – either by tapping on the note name at the bottom, or by dragging the colored note section with your mouse or touch. With it you can adjust and finetune the exact frequency you need to play. This section shows the note as well as cents difference with the pure 12-TET tone and with the A2 note. And also there&#39;s the exact frequency in Hz.</li><li>Next tap the note rectangles to turn the sound on. The bottom row holds the root note in 3 lower octaves to create a deep base for the sound. The top row consists of three pads of the higher fifth intervals of that base frequency.</li><li>Drag each of the pads up and down to set the maximum level of that note. Each note has a random speed LFO, that is modulating it&#39;s volume from 0 to this upper limit. Reload the page to get a new LFO speed composition.</li><li>Drag each pad horizontally to set the middle point for the slow;y moving panning of the voice.</li><li>Listen to the tone to evolve and breathe with harmonics. Try singing to it, tuning your instruments or just feeling the vibrations.</li><li>If the it&#39;s too much of the high frequency content you can adjust it with the <strong>LP</strong> slider – it sets the frequency of the drone Low-pass filter.</li><li>Press <strong>stop</strong> button to mute the voices and press <strong>play</strong> to unmute them back. The <strong>spacebar</strong> key of your keyboard does exactly the same here.</li></ol>',4),Ke=JSON.parse('{"title":"Drone","description":"Digital shruti box or tanpura tool online","frontmatter":{"title":"Drone","description":"Digital shruti box or tanpura tool online","date":"2022-06-06T00:00:00.000Z","cover":"drone.png"},"headers":[],"relativePath":"practice/pitch/drone/index.md","filePath":"practice/pitch/drone/index.md"}'),we={name:"practice/pitch/drone/index.md"},Ie=Object.assign(we,{setup(n){return(e,t)=>{const m=H("client-only");return i(),l("div",null,[b(m,null,{default:z(()=>[b(xe,{class:"max-w-55ch"})]),_:1}),be])}}});export{Ke as __pageData,Ie as default};