import{_ as U}from"./chunks/choose.f2cbe436.js";import{_ as q}from"./chunks/rotary.c597aed8.js";import{_ as x,o as g,c as h,a as p,t as L,q as d,n as P,p as A,h as E,f as a,u as e,E as S,F as w,r as O,B as c,x as B,b as C}from"./chunks/framework.aa37bc02.js";import{u as F}from"./chunks/noise.a1cda708.js";import"./chunks/midi.bee45e8c.js";import"./chunks/index.9f2d097c.js";import"./chunks/index.0eeb4803.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/index.b30cd6d2.js";import"./chunks/rotary.vue_vue_type_style_index_0_scoped_bdde5e48_lang.4ed993c7.js";import"./chunks/index.d229a0c3.js";import"./chunks/audio.9297ee4b.js";import"./chunks/FFT.cdefb282.js";import"./chunks/BitCrusher.a0f06686.js";import"./chunks/Filter.a766b417.js";import"./chunks/AutoPanner.82eeffdb.js";import"./chunks/Scale.79ce1516.js";const N=m=>(A("data-v-d86385bb"),m=m(),E(),m),I=N(()=>p("div",{class:"toggler"},null,-1)),$=[I],R={__name:"push",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"BTN"}},emits:["update:modelValue"],setup(m,{emit:r}){function l(i){r("update:modelValue",i)}return(i,n)=>(g(),h("div",{class:P(["btn",{active:m.modelValue}]),onMousedown:n[6]||(n[6]=d(u=>l(!0),["self"])),onMouseup:n[7]||(n[7]=d(u=>l(!1),["self"])),onTouchstart:n[8]||(n[8]=d(u=>l(!0),["self"])),onTouchend:n[9]||(n[9]=d(u=>l(!0),["self"])),onTouchcancel:n[10]||(n[10]=d(u=>l(!1),["self"]))},[p("div",{class:"mb-5",onMousedown:n[0]||(n[0]=d(u=>l(!0),["self"])),onMouseup:n[1]||(n[1]=d(u=>l(!1),["self"])),onTouchstart:n[2]||(n[2]=d(u=>l(!0),["self"])),onTouchend:n[3]||(n[3]=d(u=>l(!0),["self"])),onTouchcancel:n[4]||(n[4]=d(u=>l(!1),["self"]))},L(m.title),33),p("div",{class:"toggle",onClickCapture:n[5]||(n[5]=d(u=>l(!m.modelValue),["stop"]))},$,32)],34))}},D=x(R,[["__scopeId","data-v-d86385bb"]]);const Y={class:"row is-group gap-2"},H={class:"is-group flex flex-wrap p-1"},W={class:"w-8rem border-1 rounded-lg m-1",version:"1.1",baseProfile:"full",viewBox:"0 0 32 10",xmlns:"http://www.w3.org/2000/svg"},Q=["x1","x2","y1","title"],z={class:"row is-group gap-2"},M={class:"flex flex-wrap gap-2"},j={class:"flex flex-wrap gap-2"},J={class:"row is-group gap-2"},K={class:"row is-group gap-2"},Z={__name:"noise",setup(m){const{options:r,filterOptions:l,pannerOptions:i,crusherOptions:n,active:u,fftData:b,fftFreq:y,types:_,filterTypes:T,filterLFOTypes:k}=F();return(oe,t)=>{const f=D,s=q,v=U;return g(),h(w,null,[p("div",Y,[a(f,{modelValue:e(u),"onUpdate:modelValue":t[0]||(t[0]=o=>S(u)?u.value=o:null),title:"NOISE"},null,8,["modelValue"]),a(s,{modelValue:e(r).volume,"onUpdate:modelValue":t[1]||(t[1]=o=>e(r).volume=o),min:0,max:1,step:.01,param:"DRY"},null,8,["modelValue"]),a(v,{modelValue:e(r).noise.type,"onUpdate:modelValue":t[2]||(t[2]=o=>e(r).noise.type=o),variants:e(_)},null,8,["modelValue","variants"]),p("div",H,[a(s,{modelValue:e(r).envelope.attack,"onUpdate:modelValue":t[3]||(t[3]=o=>e(r).envelope.attack=o),min:.005,max:4,step:.01,param:"ATT"},null,8,["modelValue"]),a(s,{modelValue:e(r).envelope.decay,"onUpdate:modelValue":t[4]||(t[4]=o=>e(r).envelope.decay=o),min:.005,max:6,step:.01,param:"DEC"},null,8,["modelValue"]),a(s,{modelValue:e(r).envelope.sustain,"onUpdate:modelValue":t[5]||(t[5]=o=>e(r).envelope.sustain=o),min:.005,max:1,step:.01,param:"SUS"},null,8,["modelValue"]),a(s,{modelValue:e(r).envelope.release,"onUpdate:modelValue":t[6]||(t[6]=o=>e(r).envelope.release=o),min:.005,max:10,step:.01,param:"REL"},null,8,["modelValue"])]),(g(),h("svg",W,[(g(!0),h(w,null,O(e(y),(o,V)=>(g(),h("line",{key:o,"stroke-width":"1",stroke:"gray",x1:V,x2:V,y2:10,y1:10-e(b)[V]*50,title:e(y)[V]},null,8,Q))),128))]))]),p("div",z,[p("div",M,[a(f,{modelValue:e(l).on,"onUpdate:modelValue":t[7]||(t[7]=o=>e(l).on=o),title:"FILTER"},null,8,["modelValue"]),a(s,{modelValue:e(l).volume,"onUpdate:modelValue":t[8]||(t[8]=o=>e(l).volume=o),param:"VOL",min:0,max:1,step:.01,fixed:1},null,8,["modelValue"]),a(s,{modelValue:e(l).baseFrequency,"onUpdate:modelValue":t[9]||(t[9]=o=>e(l).baseFrequency=o),param:"FREQ",min:10,max:999,step:1,fixed:0,unit:"hz"},null,8,["modelValue"]),a(s,{modelValue:e(l).octaves,"onUpdate:modelValue":t[10]||(t[10]=o=>e(l).octaves=o),param:"OCT",min:.1,max:7,step:.1,fixed:1},null,8,["modelValue"]),a(s,{modelValue:e(l).filter.Q,"onUpdate:modelValue":t[11]||(t[11]=o=>e(l).filter.Q=o),param:"Q",min:.1,max:20,step:.1,fixed:1},null,8,["modelValue"]),a(s,{modelValue:e(l).wet,"onUpdate:modelValue":t[12]||(t[12]=o=>e(l).wet=o),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),a(v,{modelValue:e(l).filter.type,"onUpdate:modelValue":t[13]||(t[13]=o=>e(l).filter.type=o),variants:e(T)},null,8,["modelValue","variants"])]),p("div",j,[a(f,{modelValue:e(l).play,"onUpdate:modelValue":t[14]||(t[14]=o=>e(l).play=o),title:"PLAY"},null,8,["modelValue"]),a(s,{modelValue:e(l).frequency,"onUpdate:modelValue":t[15]||(t[15]=o=>e(l).frequency=o),param:"LFO",min:.01,max:4,step:.01,fixed:2,unit:"hz"},null,8,["modelValue"]),a(s,{modelValue:e(l).depth,"onUpdate:modelValue":t[16]||(t[16]=o=>e(l).depth=o),param:"DPTH",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),a(v,{modelValue:e(l).type,"onUpdate:modelValue":t[17]||(t[17]=o=>e(l).type=o),variants:e(k)},null,8,["modelValue","variants"])])]),p("div",J,[a(f,{modelValue:e(n).on,"onUpdate:modelValue":t[18]||(t[18]=o=>e(n).on=o),title:"BITCRUSHER"},null,8,["modelValue"]),a(s,{modelValue:e(n).volume,"onUpdate:modelValue":t[19]||(t[19]=o=>e(n).volume=o),param:"VOL",min:.01,max:1,step:.01,fixed:1},null,8,["modelValue"]),a(s,{modelValue:e(n).bits,"onUpdate:modelValue":t[20]||(t[20]=o=>e(n).bits=o),param:"BITS",min:1,max:16,step:.01,fixed:2},null,8,["modelValue"]),a(s,{modelValue:e(n).wet,"onUpdate:modelValue":t[21]||(t[21]=o=>e(n).wet=o),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"])]),p("div",K,[a(f,{modelValue:e(i).on,"onUpdate:modelValue":t[22]||(t[22]=o=>e(i).on=o),title:"PAN"},null,8,["modelValue"]),a(f,{modelValue:e(i).play,"onUpdate:modelValue":t[23]||(t[23]=o=>e(i).play=o),title:"PLAY"},null,8,["modelValue"]),a(s,{modelValue:e(i).volume,"onUpdate:modelValue":t[24]||(t[24]=o=>e(i).volume=o),param:"VOL",min:.01,max:1,step:.01,fixed:1},null,8,["modelValue"]),a(s,{modelValue:e(i).frequency,"onUpdate:modelValue":t[25]||(t[25]=o=>e(i).frequency=o),param:"LFO",min:.01,max:4,step:.01,fixed:2,unit:"hz"},null,8,["modelValue"]),a(s,{modelValue:e(i).depth,"onUpdate:modelValue":t[26]||(t[26]=o=>e(i).depth=o),param:"DPTH",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),a(s,{modelValue:e(i).wet,"onUpdate:modelValue":t[27]||(t[27]=o=>e(i).wet=o),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"])])],64)}}},G=x(Z,[["__scopeId","data-v-7ac4a174"]]),X=C('<h2 id="noise-generation-tool" tabindex="-1">Noise generation tool <a class="header-anchor" href="#noise-generation-tool" aria-label="Permalink to &quot;Noise generation tool&quot;">​</a></h2><p>A simple tool to generate some noise. Let&#39;s look at the possibilities.</p><ol><li>The <strong>noise generator</strong> section <ol><li>You can start the noise by tapping the <strong>NOISE</strong> button at the top left. There&#39;s a latch in the bottom of this button to fix the noise playing. Click it again to unlatch the sound playing. The other way is to press <strong>spacebar</strong> – the sound will play as long as you hold it.</li><li>The <strong>DRY</strong> slider determines the volume of the initial noise source.</li><li>Choose the type of the noise (it&#39;s &#39;color&#39;) between Brown, Pink and White. <ol><li><a href="https://en.wikipedia.org/wiki/White_noise" target="_blank" rel="noreferrer">White noise</a> is a random signal having equal intensity at different frequencies, giving it a constant power spectral density.</li><li><a href="https://en.wikipedia.org/wiki/Pink_noise" target="_blank" rel="noreferrer">Pink noise</a> or 1⁄f noise is a signal or process with a frequency spectrum such that the power spectral density (power per frequency interval) is inversely proportional to the frequency of the signal. In pink noise, each octave interval (halving or doubling in frequency) carries an equal amount of noise energy. Pink noise is one of the most common signals in biological systems.</li><li>The spectral density of the <a href="https://en.wikipedia.org/wiki/Brownian_noise" target="_blank" rel="noreferrer">Brown noise</a> is inversely proportional to f^2, meaning it has higher intensity at lower frequencies, even more so than pink noise. It decreases in intensity by 6 dB per octave (20 dB per decade) and, when heard, has a &quot;damped&quot; or &quot;soft&quot; quality compared to white and pink noise.</li></ol></li><li>Next is the <strong>ADSR</strong> controls group: drag <strong>ATTACK</strong>, <strong>DECAY</strong>, <strong>SUSTAIN</strong> and <strong>RELEASE</strong> sliders to adjust the signal envelope.</li></ol></li><li><strong>Auto-filter</strong> section. Press or latch the <strong>FILTER</strong> button to engage the filter. Change the FREQUENCY, OCTAVES and Q-FACTOR of the filter. Choose <a href="https://en.wikipedia.org/wiki/Low-pass_filter" target="_blank" rel="noreferrer">LP</a> (Low-Pass), <a href="https://en.wikipedia.org/wiki/High-pass_filter" target="_blank" rel="noreferrer">HP</a> (High-pass) or <a href="https://en.wikipedia.org/wiki/Band-pass_filter" target="_blank" rel="noreferrer">BP</a> (Band-pass) filter type. Then goes the <strong>PLAY</strong> button to turn on the LFO of the filter. <strong>LFO</strong> and <strong>DEPTH</strong> sliders set the swing of the filter and next you have the choise of the Low Frequency Oscillator.</li><li>A <a href="https://en.wikipedia.org/wiki/Bitcrusher" target="_blank" rel="noreferrer"><strong>Bitcrusher</strong></a> is an audio effect that produces distortion by reducing of the resolution or bandwidth of digital audio data. The resulting quantization noise may produce a &quot;warmer&quot; sound impression, or a harsh one, depending on the amount of reduction. Set the volume of the bus, the <strong>BITS</strong> resolution and the <strong>WET</strong> parameter of how much of the signal should come through.</li><li><strong>Auto-panner</strong> section makes the sound move from left to right with another LFO. Turn on the PAN to turn on the effect. Latch the PLAY button to make the panning move. <strong>LFO</strong> sets the frequency of the movement, <strong>DEPTH</strong> sets the amplitude of it.</li></ol>',3),we=JSON.parse('{"title":"Noise lab","description":"As white light is the combination of all colors, the white noise is the combination of all possible notes","frontmatter":{"title":"Noise lab","description":"As white light is the combination of all colors, the white noise is the combination of all possible notes","date":"2021-06-22T00:00:00.000Z","cover":"noise.jpg"},"headers":[],"relativePath":"practice/rhythm/noise/index.md","filePath":"practice/rhythm/noise/index.md"}'),ee={name:"practice/rhythm/noise/index.md"},xe=Object.assign(ee,{setup(m){return(r,l)=>{const i=c("client-only");return g(),h("div",null,[a(i,null,{default:B(()=>[a(G)]),_:1}),X])}}});export{we as __pageData,xe as default};
