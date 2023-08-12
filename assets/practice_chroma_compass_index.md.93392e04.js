import{_ as J,r as v,P as X,v as i,b as m,a as N,H as S,Z as K,E as Q,F as c,N as t,f as Z,X as x,w as V,B as W,s as Y,T as j,m as tt,z as F,A as et,c as ot,O as st,M as at}from"./chunks/framework.7e747cd7.js";import{_ as rt}from"./chunks/keys.c3aef01a.js";import{r as L,g as p,i as lt}from"./chunks/calculations.3384a913.js";import{e as E,g as r,n as w}from"./chunks/colors.abbc28c6.js";import{s as q}from"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{n as nt}from"./chunks/index.b77db23e.js";import{a as R,n as g,b as T,c as H}from"./chunks/theory.61e5aadb.js";import{F as ct}from"./chunks/index.83aed4fc.js";import{g as U,a as it,b as mt}from"./chunks/midi.290fabf9.js";import{b as B,s as ut,a as dt}from"./chunks/synth.220fb0dd.js";import{c as ft}from"./chunks/index.e64be8f3.js";import{b as D}from"./chunks/index.c0ca431c.js";import"./chunks/index.654bd828.js";import"./chunks/index.0b97d2b2.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/audio.170dbcbf.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.38a34857.js";import"./chunks/AutoPanner.94a306f8.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";const pt={class:"max-h-3xl w-full transition-all duration-400 ease-in-out",version:"1.1",baseProfile:"full",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{"user-select":"none"}},ht=["stroke","opacity","x1","y1","x2","y2"],vt=["opacity","onClick"],yt=["cx","cy","opacity","fill"],_t=["fill","x","y"],xt=["fill","stroke"],gt=["fill"],bt=["fill"],Ct=["fill"],kt=["stroke","x1","y1","x2","y2"],$t={__name:"circle",props:{chroma:{type:String,default:"100101000110"},scaleChroma:{type:String,default:"100011010001"}},emits:["update:chroma","clearScale"],setup(u,{emit:d}){const h=u,b=v(()=>E(h.chroma,r.tonic)),I=v(()=>R.get(h.chroma)),P=v(()=>{let s=L(h.scaleChroma.split(""),-r.tonic),a=[],e=0,l=0;return s.forEach((k,$)=>{var G;$>0&&k=="1"&&(e++,a[e]=[((G=a[e-1])==null?void 0:G[1])||0,$],l=$)}),a.length>0&&a.push([l,0]),a}),f=X(!1);function z(s){let a=(24+Number(s)-r.tonic)%12;if(f.value){r.tonic=Number(s),f.value=!1,O();return}if(y(s,h.chroma[a]=="1"?1:0),Number(s)!=r.tonic){let e=h.chroma+"";e[a]=="0"?e=M(e,a,1):e=M(e,a,0),d("update:chroma",e)}else f.value?(r.tonic=a,f.value=!1):f.value=!0}function M(s,a,e){return s.substring(0,a)+e+s.substring(a+1)}function C(s){return lt(h.chroma,r.tonic,s)}function A(s){return C(s%12)?w(s%12):g[s].length!=2?"hsla(0,0%,90%,1)":"hsla(0,0%,10%,1)"}function y(s=0,a=0){r.tonic>0&&s<r.tonic&&(s=s+12),s=s+12*a;let e=ct(s+57,"midi");U(e.toNote()),B(e)}const n=v(()=>{let s=L(h.chroma,-r.tonic),e=g.map((l,k)=>{let $=4;return k+9<r.tonic&&($=5),l+$}).filter((l,k)=>{if(s[k]=="1")return!0});return nt.sortedNames(e)});function O(){n.value.forEach(s=>{U(s)}),Y(()=>{n.value.forEach((s,a)=>{B(s,"8n",`+${a/3}`)}),B(n.value,"4n",`+${(n.value.length+1)/3}`)})}function o(){n.value.forEach(s=>{it(s)}),ut(n.value)}function _(){n.value.forEach(s=>{mt(s)}),dt(n.value)}return(s,a)=>(i(),m("svg",pt,[(i(!0),m(N,null,S(u.chroma.split(""),(e,l)=>(i(),m("g",{key:l},[K(c("line",{class:"line",stroke:t(w)(t(r).tonic+l),"stroke-linecap":"round","stroke-width":"10",style:{"mix-blend-mode":"multiply"},opacity:e?.5:0,x1:t(p)(t(r).tonic).x,y1:t(p)(t(r).tonic).y,x2:t(p)(t(r).tonic+l).x,y2:t(p)(t(r).tonic+l).y},null,8,ht),[[Q,e=="1"]])]))),128)),(i(!0),m(N,null,S(u.chroma.split(""),(e,l)=>(i(),m("g",{class:"around",key:l,style:{cursor:"pointer"},opacity:C(l)?1:.3,onClick:k=>z(l)},[c("circle",{class:"note",style:Z([{"transform-box":"fill-box","transform-origin":"center center"},{transform:`scale(${t(r).tonic==l?2.6:C(l)?1.62:1}`}]),cx:t(p)(l).x,cy:t(p)(l).y,r:"5",opacity:t(r).tonic==l&&f.value?.5:1,fill:A(l)},null,12,yt),c("text",{fill:t(g)[l].length==2?"hsla(0,0%,0%,0.8)":"hsla(0,0%,100%,0.9)","font-family":"Commissioner, sans-serif","font-size":"4px","text-anchor":"middle","dominant-baseline":"middle",x:t(p)(l).x,y:t(p)(l).y+.5},x(t(g)[l]),9,_t)],8,vt))),128)),c("g",{class:"cursor-pointer",onMousedown:a[0]||(a[0]=e=>o()),onTouchstart:a[1]||(a[1]=V(e=>o(),["prevent","stop"])),onTouchend:a[2]||(a[2]=e=>_()),onTouchcancel:a[3]||(a[3]=e=>_()),onMouseup:a[4]||(a[4]=e=>_()),onMouseleave:a[5]||(a[5]=e=>_())},[c("circle",{cx:50,cy:49,r:12,"stroke-width":2,"stroke-opacity":.6,fill:b.value.lch,stroke:b.value.hsl},null,8,xt),c("text",{fill:t(w)(t(r).tonic),x:"50",y:"50","font-weight":"bold","font-size":"8px","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle"},x(t(g)[t(r).tonic])+x(I.value.empty?"":I.value.aliases[0]),9,gt)],32),c("text",{fill:t(w)(t(r).tonic),x:"50",y:"58","font-weight":"normal","font-size":"4px","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle"},x(t(T).get(u.chroma).empty?"":t(T).get(u.chroma).name),9,bt),t(T).get(u.scaleChroma).empty?W("",!0):(i(),m("text",{key:0,fill:t(w)(t(r).tonic),x:"50",y:"63","font-weight":"normal","font-size":"3px","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle",onClick:a[6]||(a[6]=e=>s.$emit("clearScale"))},x(t(T).get(u.scaleChroma).empty?"":t(T).get(u.scaleChroma).name)+" ×",9,Ct)),(i(!0),m(N,null,S(P.value,(e,l)=>(i(),m("line",{class:"line",key:l,stroke:t(w)(e==null?void 0:e[1]),"stroke-linecap":"round","stroke-width":"0.5",x1:t(p)(e==null?void 0:e[0],12,30).x,y1:t(p)(e==null?void 0:e[0],12,30).y,x2:t(p)(e==null?void 0:e[1],12,30).x,y2:t(p)(e==null?void 0:e[1],12,30).y,opacity:"0.5"},null,8,kt))),128))]))}},wt=J($t,[["__scopeId","data-v-0a7bbb4e"]]);const Nt=u=>(et("data-v-7e40dfc3"),u=u(),ot(),u),St={class:"fullscreen-container rounded-3xl",id:"screen"},Ot={class:"relative w-full m-auto"},Tt={class:"max-w-60ch m-auto flex flex-col items-center"},Et={class:"flex flex-col p-2"},It={class:"flex flex-wrap mx-auto justify-center"},Pt=["onClick"],Mt={class:"flex flex-wrap justify-center"},jt=["onClick"],zt={class:"flex flex-wrap justify-center"},At=Nt(()=>c("div",{class:"min-w-full text-center my-4"},[c("div",{class:"mx-auto w-auto text-sm border-b-1 border-current"},"It may be the root chord in these scales:")],-1)),Ft=["onClick"],qt={__name:"index",setup(u){const d=D("chroma-chroma",H[0].chroma),h=["Intervals","Triads","Tetrads","Pentads","Hexads","Heptads"],b=v(()=>{let y=[];for(let n=0;n<6;n++)y[n]=H.filter(O=>O.intervals.length===n+2);return y}),I=v(()=>R.get(d.value)),P=v(()=>ft.chordScales(I.value.aliases[0])||[]),f=D("scale",P.value[0]);function z(){f.value=""}const M=v(()=>q.get(f.value).chroma),C=v(()=>d.value.split("").reduce((y,n)=>Number(y)+Number(n))),A=v(()=>H.filter(y=>y.intervals.length===C.value));return(y,n)=>{const O=rt;return i(),m("div",St,[c("div",Ot,[j(wt,{id:"chroma-compass",chroma:t(d),"onUpdate:chroma":n[0]||(n[0]=o=>tt(d)?d.value=o:null),"scale-chroma":M.value,onClearScale:n[1]||(n[1]=o=>z())},null,8,["chroma","scale-chroma"])]),c("div",Tt,[j(O,{class:"m-auto",pitch:t(r).tonic,"onUpdate:pitch":n[2]||(n[2]=o=>t(r).tonic=o),chroma:t(d)},null,8,["pitch","chroma"]),c("div",Et,[c("div",It,[(i(),m(N,null,S(h,(o,_)=>c("div",{class:F(["chord-group",{active:_+2==C.value}]),key:o,onClick:s=>d.value=b.value[_][0].chroma},x(o),11,Pt)),64))]),c("div",Mt,[(i(!0),m(N,null,S(A.value,o=>(i(),m("div",{class:F(["chord",{active:(o==null?void 0:o.chroma)==t(d)}]),key:o==null?void 0:o.aliases[0],style:Z({color:(o==null?void 0:o.chroma)==t(d)?"white":t(E)(o.chroma,t(r).tonic).hsl,backgroundColor:(o==null?void 0:o.chroma)==t(d)?t(E)(o.chroma,t(r).tonic).hsl:""}),onClick:_=>d.value=o.chroma},x(t(g)[t(r).tonic]+(o==null?void 0:o.aliases[0])),15,jt))),128))]),c("div",zt,[At,(i(!0),m(N,null,S(P.value,o=>(i(),m("div",{class:F(["chord",{active:t(f)==o}]),key:o,style:Z({color:t(f)==o?"white":t(E)(t(q).get(o).chroma,t(r).tonic).hsl,backgroundColor:t(f)==o?t(E)(t(q).get(o).chroma,t(r).tonic).hsl:""}),onClick:_=>f.value=o},x(t(g)[t(r).tonic])+" "+x(o),15,Ft))),128))])])])])}}},Ht=J(qt,[["__scopeId","data-v-7e40dfc3"]]),me=JSON.parse('{"title":"Compass","description":"Explore any combination of 12 tone equal temperament pitches","frontmatter":{"title":"Compass","description":"Explore any combination of 12 tone equal temperament pitches","cover":"compass.svg","date":"2021-04-20T00:00:00.000Z"},"headers":[],"relativePath":"practice/chroma/compass/index.md","filePath":"practice/chroma/compass/index.md"}'),Bt={name:"practice/chroma/compass/index.md"},ue=Object.assign(Bt,{setup(u){return(d,h)=>{const b=at("client-only");return i(),m("div",null,[j(b,null,{default:st(()=>[j(Ht)]),_:1})])}}});export{me as __pageData,ue as default};
