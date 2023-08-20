import{_ as J}from"./chunks/code.6b6b60a8.js";import{k as $,o as a,c as l,a as t,e as _,u as e,t as i,m as C,x as Y,F as S,r as B,g as V,X as z,A as L,i as b,H as q,B as A}from"./chunks/framework.11beae03.js";import{g as p,n as E,h as I}from"./chunks/colors.027ae8bf.js";import{s as K,n as U}from"./chunks/theory.61e5aadb.js";import{p as W,q as F,r as m,b as N}from"./chunks/index.abf15ce3.js";import{u as X}from"./chunks/tempo.979347f7.js";import{u as O}from"./chunks/index.6465c73f.js";import{u as Z}from"./chunks/index.e5c73bca.js";import"./chunks/index.654bd828.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.83aed4fc.js";import"./chunks/midi.546d3551.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.c8d61a9f.js";import"./chunks/audio.85cd45c5.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.b93d6a29.js";import"./chunks/AutoPanner.e7ac4fed.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/index.6b4e0cd9.js";import"./chunks/index.86652af6.js";import"./chunks/Loop.b192c9c2.js";const G={class:"flex gap-2 items-center"},Q={class:"p-0"},R=t("div",{class:"flex-auto"},null,-1),tt={class:"flex items-center gap-2"},et=["onClick"],st={class:"p-0"},ot={__name:"scale",setup(y){const s=$();W(s,()=>{n.value=!1});const n=$(!1);return(c,r)=>{var o,u,D,k,T,j,M,w;const d=J;return a(),l("div",G,[t("div",{class:"flex gap-2 cursor-pointer",onClick:r[0]||(r[0]=v=>n.value=!n.value)},[_(d,{chroma:(o=e(p))==null?void 0:o.chroma,cols:12},null,8,["chroma"]),t("div",Q,i((D=(u=e(p))==null?void 0:u.note)==null?void 0:D.name)+" "+i((T=(k=e(p))==null?void 0:k.set)==null?void 0:T.name),1)]),R,t("div",tt,[t("div",{class:"p-2 w-12 text-center rounded font-bold",style:C({backgroundColor:e(E)((j=e(p))==null?void 0:j.tonic)})},i((w=(M=e(p))==null?void 0:M.note)==null?void 0:w.name),5)]),_(z,{name:"fade"},{default:Y(()=>[n.value?(a(),l("div",{key:0,class:"flex flex-col max-h-8em overflow-scroll absolute bottom-4 bg-light-100 dark-bg-dark-100 rounded-xl overscroll-contain scroll-smooth snap-y snap-proximity",ref_key:"menu",ref:s},[(a(!0),l(S,null,B(e(K),v=>(a(),l("div",{class:"text-md flex-auto flex gap-2 cursor-pointer hover-bg-light-400 hover-bg-opacity-10 p-2",key:v,onClick:H=>{e(p).chroma=v.chroma,n.value=!1}},[_(d,{chroma:v.chroma,cols:12},null,8,["chroma"]),t("div",st,i(v.name),1)],8,et))),128))],512)):V("",!0)]),_:1})])}}},nt={class:"flex flex gap-1"},rt=t("div",{class:"flex"},null,-1),at=["onClick"],lt={__name:"chroma",setup(y){return(s,n)=>(a(),l("div",nt,[rt,(a(!0),l(S,null,B(e(p).chroma,(c,r)=>(a(),l("div",{class:"p-2 flex-1 text-white rounded cursor-pointer",key:r,style:C({backgroundColor:e(I)(r,c,"#fff3","#0003"),opacity:c==1?1:.5}),onClick:d=>e(p).tonic=(r+e(p).tonic)%12},[t("div",{class:"font-bold text-center",style:C({fontWeight:c==1?"bold":"normal"})},i(e(U)[(r+e(p).tonic)%12]),5)],12,at))),128))]))}},it={class:"flex flex-col"},ct={class:"flex uppercase tabular-nums font-mono flex-wrap gap-1 items-center"},dt={class:"p-0"},ut={class:"p-1"},mt={class:"p-1 min-w-32"},pt=t("div",{class:"flex-auto"},null,-1),_t={class:"p-1 flex gap-2 items-center border-1 rounded cursor-pointer border-opacity-60 border-light-500"},ft={class:"p-0"},ht={class:"pt-4px pb-5px px-2 flex gap-1 items-center border-1 rounded border-opacity-60 border-light-500 mr-2"},vt={key:0,class:"i-la-play"},xt={key:1,class:"i-la-pause"},gt={__name:"time",setup(y){const s=X(),n=F(),c=L({year:m(n,"YYYY"),month:m(n,"MMMM"),day:m(n,"DD"),weekDay:m(n,"ddd"),hr:m(n,"HH"),min:m(n,"mm"),sec:m(n,"ss")}),r=b(()=>{var d;return s.position?(d=s==null?void 0:s.position)==null?void 0:d.split(":").splice(0,2):0});return(d,o)=>(a(),l("div",it,[t("div",ct,[(a(!0),l(S,null,B(c,u=>(a(),l("div",{class:"p-1 flex gap-2",key:u},[t("div",dt,i(u),1)]))),128)),t("div",ut,"POS "+i(r.value[0])+":"+i(r.value[1]),1),t("div",mt,"TICK "+i(e(s).ticks),1),pt,t("div",_t,[t("div",{class:"i-la-slash",onClick:o[0]||(o[0]=u=>e(s).bpm=e(s).bpm/2)}),t("div",{class:"i-la-minus",onClick:o[1]||(o[1]=u=>e(s).bpm--)}),t("div",ft,i(e(s).bpm),1),t("div",{class:"i-la-plus",onClick:o[2]||(o[2]=u=>e(s).bpm++)}),t("div",{class:"i-la-times",onClick:o[3]||(o[3]=u=>e(s).bpm=e(s).bpm*2)})]),t("div",ht,[t("button",{onClick:o[4]||(o[4]=u=>e(s).stopped=!0)},[t("div",{class:"i-la-stop",style:C({transform:`rotate(${e(s).progress*90}deg)`})},null,4)]),t("button",{onClick:o[5]||(o[5]=u=>e(s).playing=!e(s).playing)},[e(s).playing?(a(),l("div",xt)):(a(),l("div",vt))])]),q(d.$slots,"default")])]))}},bt={class:"flex flex-col"},$t={class:"w-full",viewBox:"0 0 1000 100"},yt=t("g",null,[t("rect",{stroke:"currentColor",x:"0",y:"0",fill:"transparent",width:"1000",height:"100"})],-1),kt={class:"start"},wt={class:"pointer-events-none","font-weight":"bold",x:"10",y:"25",fill:"currentColor"},Ct=["width"],Dt={class:"pointer-events-none","text-anchor":"start",x:"10",y:"90",fill:"currentColor"},Tt={class:"finish"},jt={class:"pointer-events-none","text-anchor":"end","font-weight":"bold",x:"990",y:"25",fill:"currentColor"},Mt=["width","x"],Ht={class:"pointer-events-none","text-anchor":"end",x:"990",y:"90",fill:"currentColor"},Pt={class:"now pointer-events-none"},St=["width"],Bt=t("line",{y2:100,stroke:"currentColor","stroke-width":"4"},null,-1),Nt=["text-anchor","x"],Ot={__name:"date",setup(y){const s=F(),n=$(N("jam-start",Date.now()-1e3*60*60)),c=Z(N("jam-finish",Date.now()+1e3*60*60),s,Date.now()+1e3*60*60*365),r=b(()=>s.value-n.value),d=b(()=>c.value-s.value),o=b(()=>r.value/(r.value+d.value)),u=b(()=>H(r.value)),D=b(()=>H(d.value)),k=$("HH:mm"),T=m(n,k),j=m(c,k),M=m(s,"HH:mm:ss"),w=$(),v=$();O(({delta:x,shiftKey:g})=>{const f=x[0]-x[1],h=g?1e5:1e4;c.value+=f*h},{domTarget:v}),O(({delta:x,shiftKey:g})=>{const f=x[0]-x[1],h=g?1e5:1e4;n.value+=f*h},{domTarget:w});function H(x){const g=Math.floor(x/1e3),f=Math.floor(g/60),h=Math.floor(f/60),P=Math.floor(h/24);return P>0?`${P}d ${h-P*24}hr`:h>0?`${h}hr ${f-h*60}min`:f>0?`${f}min ${g-f*60}s`:`${g}s`}return(x,g)=>(a(),l("div",bt,[(a(),l("svg",$t,[yt,t("g",kt,[t("rect",{class:"cursor-move",ref_key:"startPad",ref:w,width:"150",height:"100",fill:"#6663"},null,512),t("text",wt,i(e(T)),1),t("rect",{width:1e3*o.value,x:0,height:"30",y:"70",fill:"#9996"},null,8,Ct),t("text",Dt,i(u.value)+" elapsed",1)]),t("g",Tt,[t("rect",{class:"cursor-move",ref_key:"finishPad",ref:v,x:"850",width:150,height:"100",fill:"#9993"},null,512),t("text",jt,i(e(j)),1),t("rect",{width:1e3*(1-o.value),x:1e3-1e3*(1-o.value),height:"30",y:"70",fill:"#9996"},null,8,Mt),t("text",Ht,i(D.value)+" left",1)]),t("g",Pt,[t("rect",{width:o.value*1e3,height:"100",fill:"#2224"},null,8,St),t("g",{style:C({transform:`translate(${o.value*1e3}px)`})},[Bt,t("text",{"text-anchor":d.value<r.value?"end":"start","font-weight":"bold",x:d.value<r.value?-10:10,y:"55","font-size":"24",fill:"currentColor"},i(e(M)),9,Nt)],4)])]))]))}},Yt={class:"flex flex-col gap-4 bg-light-900 dark-bg-dark-800 p-4 justify-between relative",id:"screen"},At={__name:"jam",setup(y){return(s,n)=>{const c=A("beat-bars-bar");return a(),l("div",Yt,[_(gt),_(Ot),_(c,{editable:!0}),_(lt,{class:"flex-auto"}),_(ot)])}}},de=JSON.parse('{"title":"Jam session","description":"A visual guide for collaborative music events","frontmatter":{"title":"Jam session","description":"A visual guide for collaborative music events","date":"2023-01-01T00:00:00.000Z"},"headers":[],"relativePath":"practice/experiments/jam-session/index.md","filePath":"practice/experiments/jam-session/index.md","lastUpdated":1676883357000}'),Ft={name:"practice/experiments/jam-session/index.md"},ue=Object.assign(Ft,{setup(y){return(s,n)=>{const c=A("client-only");return a(),l("div",null,[_(c,null,{default:Y(()=>[_(At)]),_:1})])}}});export{de as __pageData,ue as default};
