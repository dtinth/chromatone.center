import{E as G,j as U,J as c,o as i,c as k,a as s,d as p,B as q,b as _,h as w,T as C,A as x,t as P,F as T,r as W,D as V,H as D,I as B,S as v,k as $,Q as z,G as H,e as I}from"./chunks/framework.f75e5dc4.js";import{_ as Y}from"./chunks/rotary.6a19cec9.js";import{u as f}from"./chunks/index.de966dde.js";import"./chunks/index.cccf7ef0.js";import{m as j}from"./chunks/midi.ee496394.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";const K={a:{name:"amp",type:"float",min:0,max:5,default:0,notes:"use after a note on is triggered with velocity to adjust amplitude without re-triggering the note"},A:{name:"bp0",type:"string",default:"100,0.5,150,0.25,200,0",notes:"in commas, like 100,0.5,150,0.25,200,0 -- envelope generator with alternating time(ms) and ratio. last pair triggers on note off"},B:{name:"bp1",type:"string",default:"100,0.5,150,0.25,200,0",notes:"set the second breakpoint generator. see breakpoint 0"},b:{name:"feedback",type:"float",min:0,max:1,default:0,notes:"use for the ALGO synthesis type in FM, or partial synthesis (for bandwidth) or for karplus-strong, or to indicate PCM looping (0 off, >0, on)"},C:{name:"bp2",type:"string",default:"100,0.5,150,0.25,200,0",notes:"3rd breakpoint generator"},d:{name:"duty",type:"float",min:.001,max:.999,default:.5,notes:"duty cycle for pulse wave, default 0.5"},D:{name:"debug",type:"uint",min:2,max:4,default:0,notes:"2 shows queue sample, 3 shows oscillator data, 4 shows modified oscillator. will interrupt audio!"},f:{name:"freq",type:"floats",min:0,max:14e3,default:220,notes:"frequency of oscillator"},F:{name:"filter_freq",type:"float",min:0,max:14e3,default:3e3,notes:"center frequency for biquad filter"},g:{name:"mod_target",type:"mask",min:0,max:64,default:0,notes:"Which parameter modulation/LFO controls. 1=amp, 2=duty, 4=freq, 8=filter freq, 16=resonance, 32=feedback. Can handle any combo, add them together"},G:{name:"filter_type",type:"uint",min:0,max:3,default:0,notes:"0 = none (default.) 1 = low pass, 2 = band pass, 3 = hi pass."},I:{name:"ratio",type:"float",min:0,max:1,default:.5,notes:"for ALGO types, where the base note frequency controls the modulators, or for the ALGO base note and PARTIALS base note, where the ratio controls the speed of the playback"},L:{name:"mod_source",type:"uint",min:0,max:1024,default:0,notes:"Which oscillator is used as an modulation/LFO source for this oscillator. Source oscillator will be silent."},l:{name:"vel",type:"floats",min:0,max:5,default:0,notes:"velocity - >0 to trigger note on, 0 to trigger note off. sets amplitude"},N:{name:"latency_ms",type:"uint",min:0,max:1e3,default:0,notes:"sets latency in ms. default 0"},n:{name:"note",type:"uint",min:1,max:127,default:60,notes:"midi note, sets frequency"},o:{name:"algorithm",type:"uint",min:1,max:32,default:1,notes:"DX7 algorith to use for ALGO type"},O:{name:"algo_source",type:"string",default:"0,1,2,3,4,-1",notes:"which oscillators to use for the algorithm. list of six, use -1 for not used, e.g 0,1,2,-1,-1-1"},p:{name:"patch",type:"uint",min:0,max:1024,default:16,notes:"choose a preloaded PCM sample, partial patch or FM patch number for ALGO waveforms."},P:{name:"phase",type:"floats",min:0,max:0,default:0,notes:"where in the oscillator's cycle to start sampling from (also works on the PCM buffer). default 0"},R:{name:"resonance",type:"float",min:0,max:10,default:0,notes:"q factor of biquad filter. in practice, 0-10.0. default 0.7"},S:{name:"reset",type:"uint",min:0,max:1024,default:0,notes:"resets given oscillator. set to > OSCS to reset all oscillators, gain and EQ"},T:{name:"bp0_target",type:"mask",min:0,max:128,default:0,notes:"Which parameter bp0 controls. 1=amp, 2=duty, 4=freq, 8=filter freq, 16=resonance, 32=feedback (can be added together). Can add 64 for linear ramp, otherwise exponential"},t:{name:"timestamp",type:"uint",min:0,max:1e3,default:0,notes:"ms of expected playback since some fixed start point on your host. you should always give this if you can."},v:{name:"osc",type:"uint",min:0,max:1024,default:0,notes:"which oscillator to control"},V:{name:"volume",type:"float",min:0,max:10,default:1,notes:"volume knob for entire synth, default 1.0"},w:{name:"wave",type:"uint",min:0,max:11,default:0,notes:"waveform: [0=SINE, PULSE, SAW_DOWN, SAW_UP, TRIANGLE, NOISE, KS, PCM, ALGO, PARTIAL, PARTIALS, OFF]. default: 0/SINE"},W:{name:"bp1_target",type:"mask",min:0,max:128,default:0,notes:"see bp0_target"},x:{name:"eq_l",type:"float",min:-15,max:15,default:0,notes:"in dB, fc=800Hz amount, -15 to 15. 0 is off. default 0."},X:{name:"bp2_target",type:"mask",min:0,max:128,default:0,notes:"see bp0_target"},y:{name:"eq_m",type:"float",min:-15,max:15,default:0,notes:"in dB, fc=2500Hz amount, -15 to 15. 0 is off. default 0."},z:{name:"eq_h",type:"float",min:-15,max:15,default:0,notes:"in dB, fc=7500Hz amount, -15 to 15. 0 is off. default 0."}},X={class:"p-2 rounded-xl border-1 m-2 select-none flex flex-wrap gap-2"},Q=s("div",{class:"flex-auto"},null,-1),J={class:"p-2 rounded-xl border-1 m-2 select-none flex flex-wrap gap-4"},Z=s("div",{class:"i-la-play text-4xl"},null,-1),tt=[Z],et={class:"p-4 flex items-center font-mono"},at={class:"top-16 right-4 p-4 w-80 max-h-80vh overflow-hidden flex flex-col opacity-30 pointer-events-none font-mono text-sm fixed"},ot={class:"font-bold border-b-2"},nt={__name:"amy",setup(E){var A=!1,S=null,u=null,y=null,L=null;const t=G({started:!1,codes:K,message:U(()=>{const m=[];for(let e in t.knobs)m.push(`${e}${t.knobs[e]}`);return m.push("A0,0.2,150,1,250,0T59"),m.join("")}),waveforms:["SINE","PULSE","SAW_DOWN","SAW_UP","TRI","NOISE","KS","PCM","ALGO","PARTIAL","PARTIALS"],knobs:{p:f(c("amy-patch",248),0,1024),w:f(c("amy-waveform",7),0,11),V:f(c("amy-volume",1),0,10),d:f(c("amy-duty",.5),.001,.999),o:f(c("amy-algo",1),1,32),b:f(c("amy-feedback",0),0,1)},note:f(60,10,127),history:[]});function M(){V(()=>j.note,o=>{t.play(o.number,o.velocity/127)}),V(()=>t.message,o=>{u(o),t.history.unshift(o)}),D("a",()=>{t.play(t.note,1)}),B("a",()=>{t.play(t.note,0)}),v("ArrowLeft",()=>{t.knobs.patch--}),v("ArrowRight",()=>{t.knobs.patch++}),v("ArrowUp",o=>{o.preventDefault(),t.note++}),v("ArrowDown",o=>{o.preventDefault(),t.note--}),$(()=>{z(()=>import("./chunks/amy.0a8150ce.js"),[]).then(o=>{const{Module:n}=o;n.onRuntimeInitialized=function(){S=n.cwrap("web_audio_buffer","number",["number","number"]),u=n.cwrap("amy_play_message",null,["string"]),y=n.cwrap("amy_start_web",null,["number"])};var r=null,h=null,l=new Float32Array;L=function(b){if(r==null||r.length==0){l=new Float32Array(b.length);var O=l.length*l.BYTES_PER_ELEMENT;h=n._malloc(O),r=new Uint8Array(n.HEAPU8.buffer,h,O),r.set(new Uint8Array(l.buffer))}S(r.byteOffset,b.length);var F=new Float32Array(r.buffer,r.byteOffset,l.length);for(let g=0;g<b.length;g++)b[g]=F[g]}})});var m=!1,e=null,d=null,a=null;function N(o){var n=window.AudioContext||window.webkitAudioContext||!1;if(!n){console.error("No Audio");return}a=new n({sampleRate:48e3}),d=a.createBufferSource(),e=a.createScriptProcessor(256,0,1),e.onaudioprocess=function(r){o(r.outputBuffer.getChannelData(0))}}function R(){m||(y==null||y(),N(L),e.connect(a.destination),d.start(),m=!0,A=!0)}return t.play=(o,n=0)=>{A||R();let r=`v${o*20}`;if(n>0){let l=r+t.message;u(l),t.history.unshift(l)}let h=r+`n${o}l${n.toFixed(2)}`;t.history.unshift(h),u(h)},t.reset=(o=1e5)=>{let n=`S${o}`;t.history.unshift(n),u(n)},t}return M(),(m,e)=>{const d=Y;return i(),k(T,null,[s("div",X,[p(C,{name:"fade"},{default:q(()=>[p(d,{min:0,max:11,param:"Wave",modelValue:t.knobs.w,"onUpdate:modelValue":e[0]||(e[0]=a=>t.knobs.w=a),fixed:0,unit:t.waveforms[t.knobs.w]},null,8,["modelValue","unit"]),t.knobs.w>6?(i(),_(d,{key:0,min:1,max:1024,param:"Patch",modelValue:t.knobs.p,"onUpdate:modelValue":e[1]||(e[1]=a=>t.knobs.p=a),fixed:0},null,8,["modelValue"])):w("",!0),t.knobs.w==1?(i(),_(d,{key:1,min:.001,max:.999,param:"Duty",step:.01,modelValue:t.knobs.d,"onUpdate:modelValue":e[2]||(e[2]=a=>t.knobs.d=a),fixed:2},null,8,["modelValue"])):w("",!0),t.knobs.w==8?(i(),_(d,{key:2,min:1,max:32,param:"ALGO",modelValue:t.knobs.o,"onUpdate:modelValue":e[3]||(e[3]=a=>t.knobs.o=a),fixed:0},null,8,["modelValue"])):w("",!0),t.knobs.w>5?(i(),_(d,{key:3,min:0,max:1,param:"Feedback",modelValue:t.knobs.b,"onUpdate:modelValue":e[4]||(e[4]=a=>t.knobs.b=a),fixed:1,step:.01},null,8,["modelValue"])):w("",!0),p(d,{min:0,max:10,param:"Volume",modelValue:t.knobs.V,"onUpdate:modelValue":e[5]||(e[5]=a=>t.knobs.V=a),fixed:1,step:.01},null,8,["modelValue"]),Q,s("button",{class:"text-button",onClick:e[6]||(e[6]=a=>t.reset())},"RESET")]),_:1})]),s("div",J,[p(d,{min:1,max:127,param:"Note",modelValue:t.note,"onUpdate:modelValue":e[7]||(e[7]=a=>t.note=a),fixed:0,unit:"MIDI"},null,8,["modelValue"]),s("button",{class:"flex items-center gap-4 select-none p-4 rounded-xl bg-green-300 dark-bg-green-900 active-font-bold",onMousedown:e[8]||(e[8]=x(a=>t.play(t.note,1),["prevent","stop"])),onTouchstart:e[9]||(e[9]=x(a=>t.play(t.note,1),["prevent","stop"])),onMouseup:e[10]||(e[10]=x(a=>t.play(t.note,0),["prevent","stop"])),onTouchend:e[11]||(e[11]=x(a=>t.play(t.note,0),["prevent","stop"]))},tt,32)]),s("div",et,P(t.message),1),s("div",at,[s("div",ot,P(t.message),1),p(C,{name:"fade"},{default:q(()=>[(i(!0),k(T,null,W(t.history,a=>(i(),k("div",{class:"p-0",key:a},P(a),1))),128))]),_:1})])],64)}}},rt=I('<h2 id="amy-synth" tabindex="-1">AMY Synth <a class="header-anchor" href="#amy-synth" aria-label="Permalink to &quot;AMY Synth&quot;">​</a></h2><h3 id="the-additive-music-synthesizer-library" tabindex="-1">the Additive Music synthesizer librarY <a class="header-anchor" href="#the-additive-music-synthesizer-library" aria-label="Permalink to &quot;the Additive Music synthesizer librarY&quot;">​</a></h3><p>Highly experimental. <a href="https://github.com/bwhitman/amy/issues/35" target="_blank" rel="noreferrer">Issue pending</a></p>',3),dt=I('<ul><li>Press <code>A</code> on your keyboard to play a note. Or push the PLAY button.</li><li>Use <i class="p-3 i-la-arrow-left"></i> and <i class="p-3 i-la-arrow-right"></i> keys to browse patches</li></ul><p><a href="https://github.com/bwhitman/amy" target="_blank" rel="noreferrer">AMY repository</a></p><p>AMY accepts commands in ASCII, like so:</p><h1 id="v0w4f440-0l0-9" tabindex="-1">v0w4f440.0l0.9 <a class="header-anchor" href="#v0w4f440-0l0-9" aria-label="Permalink to &quot;v0w4f440.0l0.9&quot;">​</a></h1><p>Here&#39;s the full list:</p><table><thead><tr><th>Code</th><th>Python</th><th>Type-range</th><th>Notes</th></tr></thead><tbody><tr><td>a</td><td>amp</td><td>float 0-1+</td><td>use after a note on is triggered with velocity to adjust amplitude without re-triggering the note</td></tr><tr><td>A</td><td>bp0</td><td>string</td><td>in commas, like 100,0.5,150,0.25,200,0 -- envelope generator with alternating time(ms) and ratio. last pair triggers on note off</td></tr><tr><td>B</td><td>bp1</td><td>string</td><td>set the second breakpoint generator. see breakpoint 0</td></tr><tr><td>b</td><td>feedback</td><td>float 0-1</td><td>use for the ALGO synthesis type in FM, or partial synthesis (for bandwidth) or for karplus-strong, or to indicate PCM looping (0 off, &gt;0, on)</td></tr><tr><td>C</td><td>bp2</td><td>string</td><td>3rd breakpoint generator</td></tr><tr><td>d</td><td>duty</td><td>float 0.001-0.999</td><td>duty cycle for pulse wave, default 0.5</td></tr><tr><td>D</td><td>debug</td><td>uint, 2-4</td><td>2 shows queue sample, 3 shows oscillator data, 4 shows modified oscillator. will interrupt audio!</td></tr><tr><td>f</td><td>freq</td><td>float</td><td>frequency of oscillator</td></tr><tr><td>F</td><td>filter_freq</td><td>float</td><td>center frequency for biquad filter</td></tr><tr><td>g</td><td>mod_target</td><td>uint mask</td><td>Which parameter modulation/LFO controls. 1=amp, 2=duty, 4=freq, 8=filter freq, 16=resonance, 32=feedback. Can handle any combo, add them together</td></tr><tr><td>G</td><td>filter_type</td><td>0-3</td><td>0 = none (default.) 1 = low pass, 2 = band pass, 3 = hi pass.</td></tr><tr><td>I</td><td>ratio</td><td>float</td><td>for ALGO types, where the base note frequency controls the modulators, or for the ALGO base note and PARTIALS base note, where the ratio controls the speed of the playback</td></tr><tr><td>L</td><td>mod_source</td><td>0 to OSCS-1</td><td>Which oscillator is used as an modulation/LFO source for this oscillator. Source oscillator will be silent.</td></tr><tr><td>l</td><td>vel</td><td>float 0-1+</td><td>velocity - &gt;0 to trigger note on, 0 to trigger note off. sets amplitude</td></tr><tr><td>N</td><td>latency_ms</td><td>uint</td><td>sets latency in ms. default 0</td></tr><tr><td>n</td><td>note</td><td>uint 0-127</td><td>midi note, sets frequency</td></tr><tr><td>o</td><td>algorithm</td><td>uint 1-32</td><td>DX7 algorith to use for ALGO type</td></tr><tr><td>O</td><td>algo_source</td><td>string</td><td>which oscillators to use for the algorithm. list of six, use -1 for not used, e.g 0,1,2,-1,-1-1</td></tr><tr><td>p</td><td>patch</td><td>uint</td><td>choose a preloaded PCM sample, partial patch or FM patch number for ALGO waveforms.</td></tr><tr><td>P</td><td>phase</td><td>float 0-1</td><td>where in the oscillator&#39;s cycle to start sampling from (also works on the PCM buffer). default 0</td></tr><tr><td>R</td><td>resonance</td><td>float</td><td>q factor of biquad filter. in practice, 0-10.0. default 0.7</td></tr><tr><td>S</td><td>reset</td><td>uint</td><td>resets given oscillator. set to &gt; OSCS to reset all oscillators, gain and EQ</td></tr><tr><td>T</td><td>bp0_target</td><td>uint mask</td><td>Which parameter bp0 controls. 1=amp, 2=duty, 4=freq, 8=filter freq, 16=resonance, 32=feedback (can be added together). Can add 64 for linear ramp, otherwise exponential</td></tr><tr><td>t</td><td>timestamp</td><td>uint</td><td>ms of expected playback since some fixed start point on your host. you should always give this if you can.</td></tr><tr><td>v</td><td>osc</td><td>uint 0 to OSCS-1</td><td>which oscillator to control</td></tr><tr><td>V</td><td>volume</td><td>float 0-10</td><td>volume knob for entire synth, default 1.0</td></tr><tr><td>w</td><td>wave</td><td>uint 0-11</td><td>waveform: [0=SINE, PULSE, SAW_DOWN, SAW_UP, TRIANGLE, NOISE, KS, PCM, ALGO, PARTIAL, PARTIALS, OFF]. default: 0/SINE</td></tr><tr><td>W</td><td>bp1_target</td><td>uint mask</td><td>see bp0_target</td></tr><tr><td>x</td><td>eq_l</td><td>float</td><td>in dB, fc=800Hz amount, -15 to 15. 0 is off. default 0.</td></tr><tr><td>X</td><td>bp2_target</td><td>uint mask</td><td>see bp0_target</td></tr><tr><td>y</td><td>eq_m</td><td>float</td><td>in dB, fc=2500Hz amount, -15 to 15. 0 is off. default 0.</td></tr><tr><td>z</td><td>eq_h</td><td>float</td><td>in dB, fc=7500Hz amount, -15 to 15. 0 is off. default 0.</td></tr></tbody></table>',6),yt=JSON.parse('{"title":"AMY synth","description":"Wasm synth playground","frontmatter":{"title":"AMY synth","description":"Wasm synth playground","date":"2023-03-05T00:00:00.000Z","cover":"dx7_algorithms.jpg"},"headers":[],"relativePath":"practice/synth/amy/index.md","filePath":"practice/synth/amy/index.md","lastUpdated":1691564948000}'),st={name:"practice/synth/amy/index.md"},bt=Object.assign(st,{setup(E){return(A,S)=>{const u=H("client-only");return i(),k("div",null,[rt,p(u,null,{default:q(()=>[p(nt)]),_:1}),dt])}}});export{yt as __pageData,bt as default};
