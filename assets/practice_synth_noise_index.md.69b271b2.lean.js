import{_ as q}from"./chunks/choose.db67800f.js";import{_ as x,o as g,c as V,a as p,t as L,E as d,n as P,p as A,q as E,I as b,f as s,u as e,N as S,F as w,d as O,w as c,h as B}from"./chunks/framework.18a7d3ba.js";import{u as C}from"./chunks/noise.6733575a.js";import"./chunks/index.139b2562.js";import"./chunks/audio.4983d088.js";import"./chunks/index.ff80e595.js";import"./chunks/FFT.a27ef955.js";import"./chunks/BitCrusher.a8d04589.js";import"./chunks/Filter.3335ee5d.js";import"./chunks/AutoPanner.3abf4fbf.js";import"./chunks/Scale.a106cb29.js";const N=m=>(A("data-v-d86385bb"),m=m(),E(),m),F=N(()=>p("div",{class:"toggler"},null,-1)),I=[F],$={__name:"push",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:"BTN"}},emits:["update:modelValue"],setup(m,{emit:r}){function l(i){r("update:modelValue",i)}return(i,n)=>(g(),V("div",{class:P(["btn",{active:m.modelValue}]),onMousedown:n[6]||(n[6]=d(u=>l(!0),["self"])),onMouseup:n[7]||(n[7]=d(u=>l(!1),["self"])),onTouchstart:n[8]||(n[8]=d(u=>l(!0),["self"])),onTouchend:n[9]||(n[9]=d(u=>l(!0),["self"])),onTouchcancel:n[10]||(n[10]=d(u=>l(!1),["self"]))},[p("div",{class:"mb-5",onMousedown:n[0]||(n[0]=d(u=>l(!0),["self"])),onMouseup:n[1]||(n[1]=d(u=>l(!1),["self"])),onTouchstart:n[2]||(n[2]=d(u=>l(!0),["self"])),onTouchend:n[3]||(n[3]=d(u=>l(!0),["self"])),onTouchcancel:n[4]||(n[4]=d(u=>l(!1),["self"]))},L(m.title),33),p("div",{class:"toggle",onClickCapture:n[5]||(n[5]=d(u=>l(!m.modelValue),["stop"]))},I,32)],34))}},R=x($,[["__scopeId","data-v-d86385bb"]]);const D={class:"row is-group gap-2"},Y={class:"is-group flex flex-wrap p-1"},H={class:"w-8rem border-1 rounded-lg m-1",version:"1.1",baseProfile:"full",viewBox:"0 0 32 10",xmlns:"http://www.w3.org/2000/svg"},W=["x1","x2","y1","title"],Q={class:"row is-group gap-2"},z={class:"flex flex-wrap gap-2"},M={class:"flex flex-wrap gap-2"},j={class:"row is-group gap-2"},J={class:"row is-group gap-2"},K={__name:"noise",setup(m){const{options:r,filterOptions:l,pannerOptions:i,crusherOptions:n,active:u,fftData:T,fftFreq:y,types:k,filterTypes:_,filterLFOTypes:U}=C();return(ee,o)=>{const f=R,a=b("control-rotary"),v=q;return g(),V(w,null,[p("div",D,[s(f,{modelValue:e(u),"onUpdate:modelValue":o[0]||(o[0]=t=>S(u)?u.value=t:null),title:"NOISE"},null,8,["modelValue"]),s(a,{modelValue:e(r).volume,"onUpdate:modelValue":o[1]||(o[1]=t=>e(r).volume=t),min:0,max:1,step:.01,param:"DRY"},null,8,["modelValue"]),s(v,{modelValue:e(r).noise.type,"onUpdate:modelValue":o[2]||(o[2]=t=>e(r).noise.type=t),variants:e(k)},null,8,["modelValue","variants"]),p("div",Y,[s(a,{modelValue:e(r).envelope.attack,"onUpdate:modelValue":o[3]||(o[3]=t=>e(r).envelope.attack=t),min:.005,max:4,step:.01,param:"ATT"},null,8,["modelValue"]),s(a,{modelValue:e(r).envelope.decay,"onUpdate:modelValue":o[4]||(o[4]=t=>e(r).envelope.decay=t),min:.005,max:6,step:.01,param:"DEC"},null,8,["modelValue"]),s(a,{modelValue:e(r).envelope.sustain,"onUpdate:modelValue":o[5]||(o[5]=t=>e(r).envelope.sustain=t),min:.005,max:1,step:.01,param:"SUS"},null,8,["modelValue"]),s(a,{modelValue:e(r).envelope.release,"onUpdate:modelValue":o[6]||(o[6]=t=>e(r).envelope.release=t),min:.005,max:10,step:.01,param:"REL"},null,8,["modelValue"])]),(g(),V("svg",H,[(g(!0),V(w,null,O(e(y),(t,h)=>(g(),V("line",{key:t,"stroke-width":"1",stroke:"gray",x1:h,x2:h,y2:10,y1:10-e(T)[h]*50,title:e(y)[h]},null,8,W))),128))]))]),p("div",Q,[p("div",z,[s(f,{modelValue:e(l).on,"onUpdate:modelValue":o[7]||(o[7]=t=>e(l).on=t),title:"FILTER"},null,8,["modelValue"]),s(a,{modelValue:e(l).volume,"onUpdate:modelValue":o[8]||(o[8]=t=>e(l).volume=t),param:"VOL",min:0,max:1,step:.01,fixed:1},null,8,["modelValue"]),s(a,{modelValue:e(l).baseFrequency,"onUpdate:modelValue":o[9]||(o[9]=t=>e(l).baseFrequency=t),param:"FREQ",min:10,max:999,step:1,fixed:0,unit:"hz"},null,8,["modelValue"]),s(a,{modelValue:e(l).octaves,"onUpdate:modelValue":o[10]||(o[10]=t=>e(l).octaves=t),param:"OCT",min:.1,max:7,step:.1,fixed:1},null,8,["modelValue"]),s(a,{modelValue:e(l).filter.Q,"onUpdate:modelValue":o[11]||(o[11]=t=>e(l).filter.Q=t),param:"Q",min:.1,max:20,step:.1,fixed:1},null,8,["modelValue"]),s(a,{modelValue:e(l).wet,"onUpdate:modelValue":o[12]||(o[12]=t=>e(l).wet=t),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),s(v,{modelValue:e(l).filter.type,"onUpdate:modelValue":o[13]||(o[13]=t=>e(l).filter.type=t),variants:e(_)},null,8,["modelValue","variants"])]),p("div",M,[s(f,{modelValue:e(l).play,"onUpdate:modelValue":o[14]||(o[14]=t=>e(l).play=t),title:"PLAY"},null,8,["modelValue"]),s(a,{modelValue:e(l).frequency,"onUpdate:modelValue":o[15]||(o[15]=t=>e(l).frequency=t),param:"LFO",min:.01,max:4,step:.01,fixed:2,unit:"hz"},null,8,["modelValue"]),s(a,{modelValue:e(l).depth,"onUpdate:modelValue":o[16]||(o[16]=t=>e(l).depth=t),param:"DPTH",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),s(v,{modelValue:e(l).type,"onUpdate:modelValue":o[17]||(o[17]=t=>e(l).type=t),variants:e(U)},null,8,["modelValue","variants"])])]),p("div",j,[s(f,{modelValue:e(n).on,"onUpdate:modelValue":o[18]||(o[18]=t=>e(n).on=t),title:"BITCRUSHER"},null,8,["modelValue"]),s(a,{modelValue:e(n).volume,"onUpdate:modelValue":o[19]||(o[19]=t=>e(n).volume=t),param:"VOL",min:.01,max:1,step:.01,fixed:1},null,8,["modelValue"]),s(a,{modelValue:e(n).bits,"onUpdate:modelValue":o[20]||(o[20]=t=>e(n).bits=t),param:"BITS",min:1,max:16,step:.01,fixed:2},null,8,["modelValue"]),s(a,{modelValue:e(n).wet,"onUpdate:modelValue":o[21]||(o[21]=t=>e(n).wet=t),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"])]),p("div",J,[s(f,{modelValue:e(i).on,"onUpdate:modelValue":o[22]||(o[22]=t=>e(i).on=t),title:"PAN"},null,8,["modelValue"]),s(f,{modelValue:e(i).play,"onUpdate:modelValue":o[23]||(o[23]=t=>e(i).play=t),title:"PLAY"},null,8,["modelValue"]),s(a,{modelValue:e(i).volume,"onUpdate:modelValue":o[24]||(o[24]=t=>e(i).volume=t),param:"VOL",min:.01,max:1,step:.01,fixed:1},null,8,["modelValue"]),s(a,{modelValue:e(i).frequency,"onUpdate:modelValue":o[25]||(o[25]=t=>e(i).frequency=t),param:"LFO",min:.01,max:4,step:.01,fixed:2,unit:"hz"},null,8,["modelValue"]),s(a,{modelValue:e(i).depth,"onUpdate:modelValue":o[26]||(o[26]=t=>e(i).depth=t),param:"DPTH",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"]),s(a,{modelValue:e(i).wet,"onUpdate:modelValue":o[27]||(o[27]=t=>e(i).wet=t),param:"WET",min:0,max:1,step:.1,fixed:1,unit:""},null,8,["modelValue"])])],64)}}},Z=x(K,[["__scopeId","data-v-3832cf05"]]),G=B("",3),me=JSON.parse('{"title":"Noise lab","description":"As white light is the combination of all colors, the white noise is the combination of all possible notes","frontmatter":{"title":"Noise lab","description":"As white light is the combination of all colors, the white noise is the combination of all possible notes","date":"2021-06-22T00:00:00.000Z","cover":"noise.jpg"},"headers":[],"relativePath":"practice/synth/noise/index.md","filePath":"practice/synth/noise/index.md","lastUpdated":1691564948000}'),X={name:"practice/synth/noise/index.md"},fe=Object.assign(X,{setup(m){return(r,l)=>{const i=b("client-only");return g(),V("div",null,[s(i,null,{default:c(()=>[s(Z)]),_:1}),G])}}});export{me as __pageData,fe as default};
