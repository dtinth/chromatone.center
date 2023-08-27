import{o as d,G as v,$ as S}from"./index.cccf7ef0.js";import{J as h,l as F,M as x,S as k,D as n,U as G}from"./framework.f75e5dc4.js";import{c as N}from"./audio.2835df43.js";import{F as _}from"./FFT.27cb9b54.js";import{B as A,N as R}from"./BitCrusher.9eeb9a2f.js";import{F as j}from"./Filter.e19ab36f.js";import{L as O,A as B}from"./AutoPanner.5498cf00.js";class m extends O{constructor(){super(d(m.getDefaults(),arguments,["frequency","baseFrequency","octaves"])),this.name="AutoFilter";const t=d(m.getDefaults(),arguments,["frequency","baseFrequency","octaves"]);this.filter=new j(Object.assign(t.filter,{context:this.context})),this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency}static getDefaults(){return Object.assign(O.getDefaults(),{baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}})}get baseFrequency(){return this._lfo.min}set baseFrequency(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._lfo.max=this._lfo.min*Math.pow(2,t)}dispose(){return super.dispose(),this.filter.dispose(),this}}const L={brown:"brown",pink:"pink",white:"white"},P={lowpass:"LP",highpass:"HP",bandpass:"BP"},I={sine:"SIN",triangle:"TRI",square:"SQR",sawtooth:"SAW"},o=h("noise-options",{noise:{type:"pink"},envelope:{attack:.1,decay:.1,sustain:.9,release:1},volume:1}),a=h("filter-options",{on:!1,play:!1,volume:.5,baseFrequency:50,depth:.1,frequency:1,octaves:2,wet:1,type:"sine",filter:{Q:1,type:"lowpass"}}),r=h("panner-options",{on:!1,play:!1,wet:1,frequency:1,depth:1,volume:1}),i=h("bit-options",{on:!1,bits:16,wet:1,volume:1});function J(){const c=F(!1),t=F([]),q=F([]),{channel:D}=N("noise"),s=new _({size:512,smoothing:.2}).connect(D);for(let e=0;e<32;e++)q.value[e]=s.getFrequencyOfIndex(e);const b=new v(o.value.volume).connect(s),y=new v(a.value.volume).connect(s),g=new v(r.value.volume).connect(s),w=new v(i.value.volume).connect(s),l=new B(r.value).connect(g),T=new A(i.value).connect(w).connect(l),u=new m(a.value).connect(y).connect(T),f=new R(o.value).connect(b).connect(u);return x(()=>{let e=s.getValue();for(let p=0;p<32;p++)t.value[p]=S(e[p])*10}),k("a",e=>{e.preventDefault(),c.value=!0},{eventName:"keydown"}),k("a",()=>{c.value=!1},{eventName:"keyup"}),n(c,e=>{e?f.triggerAttack():f.triggerRelease()}),n(o.value,()=>{f.set(o.value)}),n(()=>o.value.volume,e=>{b.gain.rampTo(e,1)}),G(()=>{f.triggerRelease()}),n(a.value,e=>{e.play?u.start():u.stop(),e.on?y.gain.rampTo(a.value.volume,.2):y.gain.rampTo(0,.2),u.set(e)}),n(r.value,e=>{e.play?l.start():l.stop(),e.on?g.gain.rampTo(r.value.volume,.2):g.gain.rampTo(0,.2),l.set(e)}),n(i.value,e=>{e.on?w.gain.rampTo(i.value.volume,.2):w.gain.rampTo(0,.2),T.set(e)}),{options:o,filterOptions:a,pannerOptions:r,crusherOptions:i,active:c,fftData:t,fftFreq:q,types:L,filterTypes:P,filterLFOTypes:I}}export{J as u};
