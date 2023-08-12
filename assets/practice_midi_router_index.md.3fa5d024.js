import{_ as E}from"./chunks/panel.2101aa87.js";import{_ as R,r as z,v as n,b as s,F as e,X as i,f as u,B,a as P,H as S,Z as J,E as X,z as q,N as m,A as G,c as K,C as L,T as _,O as Q,M as U}from"./chunks/framework.7e747cd7.js";import{u as Z,o as V}from"./chunks/midi.290fabf9.js";import{n as W}from"./chunks/colors.abbc28c6.js";import"./chunks/synth.220fb0dd.js";import"./chunks/index.83aed4fc.js";import"./chunks/index.c0ca431c.js";import"./chunks/audio.170dbcbf.js";import"./chunks/index.0b97d2b2.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/tempo.fceb0f15.js";import"./chunks/calculations.3384a913.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.b77db23e.js";import"./chunks/Loop.b192c9c2.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.654bd828.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";const A=t=>(G("data-v-0d48e639"),t=t(),K(),t),Y={class:"p-4 shadow-lg rounded-2xl bg-light-900 dark-bg-dark-300 relative border-2 shadow-lg",style:{flex:"1 1 200px"}},tt={class:"flex justify-between"},et={class:"flex-col"},it={class:"text-md"},nt={class:"text-2xl font-bold"},st={class:"flex-col text-xs font-mono flex gap-2 text-center"},ot={key:1,class:"display"},at={class:"display"},rt=A(()=>e("div",{class:"indicator"},null,-1)),lt={class:"flex flex-wrap gap-3 mt-4 items-center"},ct=A(()=>e("div",{class:"text-xs"},"TO",-1)),dt=["onClick"],ut={class:"text-sm"},mt={__name:"input",props:{input:{type:Object,default:()=>{}},iid:{type:[Number,String],default:0}},setup(t){const r=t,{midi:d}=Z(),l=z(()=>{var o,a,c;return((a=(o=r.input)==null?void 0:o.note)==null?void 0:a.velocity)>0?W((c=r.input.note)==null?void 0:c.pitch,null,1,.4):"#7773"});return(o,a)=>{var c,f,h,v,x,b,g,y,k,w,C,I,M,$,O,j,D,F;return n(),s("div",Y,[e("div",tt,[e("div",et,[e("div",it,i(t.input.manufacturer),1),e("div",nt,i(t.input.name),1)]),e("div",st,[t.input.note?(n(),s("div",{key:0,class:"display",style:u({backgroundColor:l.value})},[e("div",{class:"indicator",style:u({transform:`scale(${(f=(c=t.input)==null?void 0:c.note)==null?void 0:f.attack},1)`})},null,4),e("i",null,"CH"+i((v=(h=t.input)==null?void 0:h.note)==null?void 0:v.channel),1),e("div",{class:"px-1 rounded-sm",style:u({backgroundColor:l.value})},i((b=(x=t.input)==null?void 0:x.note)==null?void 0:b.identifier),5),e("i",null,i((y=(g=t.input)==null?void 0:g.note)==null?void 0:y.number),1)],4)):B("",!0),t.input.cc?(n(),s("div",ot,[e("div",{class:"indicator",style:u({transform:`scale(${(w=(k=t.input)==null?void 0:k.cc)==null?void 0:w.value},1)`})},null,4),e("i",null,"CH"+i((I=(C=t.input)==null?void 0:C.cc)==null?void 0:I.channel),1),e("i",null,"CC"+i(($=(M=t.input)==null?void 0:M.cc)==null?void 0:$.number),1),e("i",null,i((j=(O=t.input)==null?void 0:O.cc)==null?void 0:j.raw),1)])):B("",!0),e("div",at,[rt,e("i",null,i(Math.floor((D=t.input)==null?void 0:D.bpm))+" BPM",1),e("i",null,i(Math.floor(((F=t.input)==null?void 0:F.clock)/1e3))+"s",1)])])]),e("div",lt,[ct,(n(!0),s(P,null,S(m(d).outputs,(H,p)=>{var N,T;return J((n(),s("button",{class:q(["px-2 shadow-sm rounded-xl bg-light-200 dark-bg-dark-500 cursor-pointer border-2 border-transparent select-none",{active:(T=(N=m(d).forwards)==null?void 0:N[t.iid])==null?void 0:T[p]}]),key:p,onClick:bt=>m(V)(t.iid,p)},[e("div",ut,i(H.name),1)],10,dt)),[[X,t.input.name!=H.name]])}),128))])])}}},pt=R(mt,[["__scopeId","data-v-0d48e639"]]),_t={class:"flex flex-wrap gap-4 justify-center"},ft={__name:"router",setup(t){const{midi:r}=Z();return(d,l)=>(n(),s("div",_t,[(n(!0),s(P,null,S(m(r).inputs,(o,a)=>(n(),L(pt,{key:a,input:o,iid:a},null,8,["input","iid"]))),128))]))}},ht={id:"screen"},vt=e("p",null,"Click on the desired output under the input you want to send signals from.",-1),Xt=JSON.parse('{"title":"MIDI Router","description":"Forward all MIDI messages from one device to another","frontmatter":{"title":"MIDI Router","description":"Forward all MIDI messages from one device to another","cover":"midi-router.png","date":"2022-06-08T00:00:00.000Z"},"headers":[],"relativePath":"practice/midi/router/index.md","filePath":"practice/midi/router/index.md"}'),xt={name:"practice/midi/router/index.md"},qt=Object.assign(xt,{setup(t){return(r,d)=>{const l=E,o=U("client-only");return n(),s("div",null,[_(o,null,{default:Q(()=>[e("div",ht,[_(ft,{class:"mb-20"}),_(l,{class:"mb-4"})])]),_:1}),vt])}}});export{Xt as __pageData,qt as default};