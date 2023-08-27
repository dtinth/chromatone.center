import{o as s,c as i,a as t,_ as D,q as I,v,u as e,b as $,d as p,h as V,A as W,t as w,a7 as ot,O as nt,p as K,i as Y,F as P,r as N,j as F,J as mt,E as rt,D as j,l as E,S as ht,B as M,y as Z,a6 as pt,z as Q,G as ft,e as _t}from"./chunks/framework.f75e5dc4.js";import{t as f,a as tt}from"./chunks/tempo.f209cfb9.js";import{u as yt}from"./chunks/tuner.f4ce031f.js";import{b as vt,c as gt,_ as xt,a as bt,d as Ct}from"./chunks/angle-right.ee859725.js";import{_ as $t,C as wt}from"./chunks/CircleCenter.6c394798.js";import{i as S}from"./chunks/state.4dc7c12e.js";import{_ as st}from"./chunks/ring.d9719d55.js";import{j as lt}from"./chunks/colors.6e70028c.js";import{g as k}from"./chunks/calculations.65ee336d.js";import{m as L}from"./chunks/midi.ee496394.js";import{u as kt}from"./chunks/index.de966dde.js";import{u as Ft,t as et}from"./chunks/sequence.8c4d3560.js";import"./chunks/index.cccf7ef0.js";import{r as zt}from"./chunks/midiRender.6d60b9e9.js";import"./chunks/index.140cffd8.js";import"./chunks/index.9f9b4fe3.js";import"./chunks/audio.2835df43.js";import"./chunks/Loop.4db2aa01.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.654bd828.js";import"./chunks/synth.ffb45e01.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.0ce05937.js";import"./chunks/AutoPanner.5498cf00.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/theory.dec16ed9.js";import"./chunks/index.be7eb4a8.js";import"./chunks/Sequence.ac2a9b47.js";import"./chunks/UserMedia.c8f7c51a.js";import"./chunks/Midi.1f918097.js";const Mt={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tt=t("path",{fill:"currentColor",d:"M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3H6zm2 2h10v6h6v16H8V5zm12 1.4L22.6 9H20V6.4zM15 13v5h-3l4 4l4-4h-3v-5h-2zm-3 10v2h8v-2h-8z"},null,-1),At=[Tt];function Bt(o,l){return s(),i("svg",Mt,At)}const St={name:"la-file-download",render:Bt},It={style:{"vertical-align":"middle"},viewBox:"0 0 48 48",width:"1.2em",height:"1.2em"},Vt=t("path",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M25.8 27.869a1 1 0 0 0-.8.98V31a1.5 1.5 0 0 1-3 0v-4.322a1.5 1.5 0 0 1 1.395-1.496c1.778-.124 4.393-.73 6.515-2.083c2.071-1.322 3.59-3.285 3.59-6.254c0-2.86-1.061-4.843-2.602-6.158c-1.578-1.347-3.774-2.085-6.132-2.177c-4.881-.191-9.43 2.31-10.302 6.204a1.5 1.5 0 0 1-2.928-.655c.666-2.974 2.587-5.151 5.074-6.576c2.5-1.433 5.531-2.078 8.274-1.97c2.868.112 5.76 1.013 7.962 2.892c2.24 1.912 3.654 4.744 3.654 8.44c0 4.238-2.27 7.056-4.976 8.783c-1.832 1.169-3.9 1.87-5.723 2.24ZM21 40a3 3 0 1 1 6 0a3 3 0 0 1-6 0Z"},null,-1),Et=[Vt];function Lt(o,l){return s(),i("svg",It,Et)}const Pt={name:"healthicons-question",render:Lt},Nt={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ot=t("path",{fill:"currentColor",d:"M6 6v20h20V6zm2 2h16v16H8z"},null,-1),Dt=[Ot];function Ut(o,l){return s(),i("svg",Nt,Dt)}const jt={name:"la-stop",render:Ut},Ht={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rt=t("path",{fill:"currentColor",d:"M10 6v20h2V6zm10 0v20h2V6z"},null,-1),qt=[Rt];function Wt(o,l){return s(),i("svg",Ht,qt)}const Zt={name:"la-pause",render:Wt},Kt={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yt=t("path",{fill:"currentColor",d:"M9 5.156v21.688l1.531-1L25.844 16L10.53 6.156zm2 3.657L22.156 16L11 23.188z"},null,-1),Jt=[Yt];function Gt(o,l){return s(),i("svg",Kt,Jt)}const Xt={name:"la-play",render:Gt};const Qt={class:"transport","font-size":"60"},te={class:"border",fill:"transparent","stroke-width":"4",x:"0",y:"0",rx:"10",width:"70",height:"80"},ee={transform:"translate(-2,4)"},oe={class:"border",fill:"transparent","stroke-width":"4",x:"0",y:"0",rx:"10",width:"70",height:"80"},ne={__name:"transport",setup(o){return(l,r)=>{const n=Xt,d=Zt,u=jt,m=I("tooltip");return s(),i("g",Qt,[t("g",{class:"btn cursor-pointer",transform:"translate(0,50)",onClick:r[0]||(r[0]=y=>e(f).playing=!e(f).playing)},[v(t("rect",te,null,512),[[m,"Play/pause",void 0,{left:!0}]]),t("g",ee,[e(f).playing?(s(),$(d,{key:1})):(s(),$(n,{key:0}))])]),e(f).stopped?V("",!0):(s(),i("g",{key:0,class:"btn cursor-pointer",transform:"translate(0,150)",onClick:r[1]||(r[1]=y=>e(f).stopped=Date.now())},[v(t("rect",oe,null,512),[[m,"Stop",void 0,{left:!0}]]),p(u,{y:"5"})]))])}}},re=D(ne,[["__scopeId","data-v-2ea3e8b8"]]),se={style:{"vertical-align":"middle"},viewBox:"0 0 20 20",width:"1.2em",height:"1.2em"},le=t("path",{fill:"currentColor",d:"M9.5 3a5.5 5.5 0 0 0-5.044 7.695a3.934 3.934 0 0 0-.819.615a6.5 6.5 0 1 1 12.259-1.645a3.707 3.707 0 0 0-.929-.563A5.5 5.5 0 0 0 9.5 3Zm4.488 5.834a4.5 4.5 0 1 0-8.604 1.487a4.207 4.207 0 0 1 1.048-.135a3.5 3.5 0 1 1 6.564-1.526l.992.174ZM9.5 6A1.5 1.5 0 0 0 8 7.5v4.251c-.584-.197-1.243-.316-1.866-.248c-.458.05-.916.201-1.301.515c-.39.317-.67.77-.818 1.36a.5.5 0 0 0 .43.619c2.592.288 3.914 1.7 4.553 2.728c.48.772 1.41 1.407 2.435 1.229l1.517-.264a2.5 2.5 0 0 0 1.918-1.599l.983-2.67a2.5 2.5 0 0 0-1.914-3.327L11 9.58V7.5A1.5 1.5 0 0 0 9.5 6ZM9 7.5a.5.5 0 0 1 1 0V10a.5.5 0 0 0 .414.492l3.35.587a1.5 1.5 0 0 1 1.149 1.996l-.984 2.67a1.5 1.5 0 0 1-1.15.96l-1.517.264c-.502.087-1.077-.227-1.415-.772c-.7-1.128-2.094-2.62-4.649-3.098c.08-.128.17-.227.266-.305c.203-.165.464-.263.777-.297c.642-.07 1.419.142 2.035.45A.5.5 0 0 0 9 12.5v-5Z"},null,-1),ie=[le];function ae(o,l){return s(),i("svg",se,ie)}const ce={name:"fluent-tap-double20-regular",render:ae},de={class:"tap cursor-pointer"},ue=["stroke"],me=["stroke"],he={fill:"currentColor","font-size":"36",y:"52",x:"60","text-anchor":"middle"},pe={__name:"tap",setup(o){return(l,r)=>{const n=ce,d=I("tooltip");return s(),i("g",de,[t("g",{class:"finger",transform:"translate(140,0)",onMousedown:r[0]||(r[0]=W(u=>e(tt)(),["stop","prevent"])),onTouchstart:r[1]||(r[1]=W(u=>e(tt)(),["stop","prevent"]))},[v(t("rect",{width:"70",height:"80",rx:"10",stroke:e(f).tap.last?"currentColor":"#33333333",fill:"transparent","stroke-width":"4"},null,8,ue),[[d,"Tap tempo",void 0,{left:!0}]]),p(n,{"font-size":"55",transform:"translate(2,8)",fill:"currentColor",y:"0",x:"2","text-anchor":"middle"})],32),e(f).tap.bpm&&e(f).tap.last?(s(),i("g",{key:0,class:"bpm transition-all duration-200 ease-out",onClick:r[2]||(r[2]=u=>e(f).bpm=e(f).tap.bpm)},[t("rect",{x:"0",width:"120",height:"80",rx:"10","stroke-width":"4",fill:"transparent",stroke:e(f).tap.last?"currentColor":"#33333333"},null,8,me),t("text",he,w(e(f).tap.bpm.toFixed(1)),1)])):V("",!0)])}}},fe={style:{"vertical-align":"middle"},viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_e=t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[t("path",{d:"M6 10c0-1.146.277-2.245.78-3.219m1.792-2.208A7 7 0 0 1 19 13.6a10 10 0 0 1-.633.762m-2.045 1.96A8 8 0 0 0 15 18.6A4.5 4.5 0 0 1 8.2 20"}),t("path",{d:"M11.42 7.414a3 3 0 0 1 4.131 4.13M3 3l18 18"})],-1),ye=[_e];function ve(o,l){return s(),i("svg",fe,ye)}const ge={name:"tabler-ear-off",render:ve},xe={style:{"vertical-align":"middle"},viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},be=t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[t("path",{d:"M6 10a7 7 0 1 1 13 3.6a10 10 0 0 1-2 2a8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20"}),t("path",{d:"M10 10a3 3 0 1 1 5 2.2"})],-1),Ce=[be];function $e(o,l){return s(),i("svg",xe,Ce)}const we={name:"tabler-ear",render:$e},ke=["stroke"],Fe={class:"icon",transform:"translate(6,12)"},ze=["stroke"],Me={fill:"currentColor","font-size":"36",y:"52",x:"130","text-anchor":"middle"},Te=ot({__name:"listen",setup(o){const{init:l,tuner:r}=yt();return(n,d)=>{const u=we,m=ge,y=I("tooltip");return s(),i("g",{class:"listen","font-size":"45",onClick:d[2]||(d[2]=c=>e(r).initiated?null:e(l)())},[t("g",{class:"ear",onClick:d[0]||(d[0]=c=>e(r).listen=!e(r).listen)},[v(t("rect",{width:"70",height:"80",stroke:e(r).listen?"currentColor":"#3333",fill:"transparent",rx:"10","stroke-width":"4"},null,8,ke),[[y,"Guess tempo from audio input",void 0,{right:!0}]]),t("g",Fe,[e(r).listen?(s(),$(m,{key:1})):(s(),$(u,{key:0}))])]),e(r).listen?(s(),i("g",{key:0,class:"bpm transition-all duration-200 ease-out",onClick:d[1]||(d[1]=c=>e(f).bpm=e(r).bpm)},[t("rect",{x:"80",width:"100",height:"80",rx:"10","stroke-width":"4",fill:"transparent",stroke:e(r).blink?"currentColor":"#33333333"},null,8,ze),t("text",Me,w(e(r).bpm.toFixed(1)),1)])):V("",!0)])}}});const Ae=D(Te,[["__scopeId","data-v-d561bf3f"]]),Be=o=>(K("data-v-56284034"),o=o(),Y(),o),Se={class:"transport","font-size":"45"},Ie={class:"btn cursor-pointer",transform:"translate(0,50)"},Ve=Be(()=>t("rect",{class:"border",fill:"transparent","stroke-width":"4",rx:"10",width:"70",height:"80"},null,-1)),Ee={transform:"translate(6,12)"};function Le(o,l){return s(),i("g",Se,[t("g",Ie,[Ve,t("g",Ee,[nt(o.$slots,"default",{},void 0,!0)])])])}const Pe={},Ne=D(Pe,[["render",Le],["__scopeId","data-v-56284034"]]),Oe=t("rect",{y:"-50",rx:"20",width:"200",height:"150",fill:"transparent"},null,-1),De=["stroke"],Ue={fill:"currentColor"},je={fill:"currentColor",y:"40"},He=["fill"],Re={__name:"math",setup(o){function l(r){f.bpm+=(r.delta[0]-r.delta[1])/16}return(r,n)=>{const d=I("drag");return v((s(),i("g",{class:"math cursor-pointer","font-size":"36","drag-options":{filterTaps:!0},onDblclick:n[0]||(n[0]=u=>e(f).bpm=120)},[Oe,t("line",{class:"transition-all duration-100 ease-out",x1:"-10",x2:"-10",y1:"-20",y2:"80","stroke-width":"8","stroke-linecap":"round",stroke:e(f).blink?e(f).color:"transparent"},null,8,De),t("text",Ue,w(e(f).bpm.toFixed(2))+" BPM",1),t("text",je,w(e(f).hz)+" Hz",1),t("text",{y:"80",fill:e(f).color,"font-weight":"bold"},w(e(f).note),9,He)],32)),[[d,l]])}}},qe=t("g",{id:"rects"},[t("rect",{y:"0",style:{opacity:"0.85",fill:"#333333","enable-background":"new"},width:"1000",height:"1000"}),t("path",{style:{fill:"#666F9B"},d:"M34.4,3.6h167.9c10.7,0,19.3,9.1,19.3,20.2v104c0,11.2-8.7,20.2-19.3,20.2H34.4		c-10.7,0-19.3-9.1-19.3-20.2v-104C15,12.7,23.7,3.6,34.4,3.6z"}),t("path",{style:{fill:"#AAD037"},d:"M446,9.7h101.7c8.7,0,15.7,6.1,15.7,13.7v31.6c0,7.5-7,13.7-15.7,13.7H446		c-8.7,0-15.7-6.1-15.7-13.7V23.3C430.3,15.8,437.3,9.7,446,9.7z"}),t("path",{style:{fill:"#AAD037"},d:"M446,208.3h101.7c8.7,0,15.7,6.1,15.7,13.7v31.6c0,7.5-7,13.7-15.7,13.7H446		c-8.7,0-15.7-6.1-15.7-13.7V222C430.3,214.4,437.3,208.3,446,208.3z"}),t("path",{style:{fill:"#9AA4D3"},d:"M23.5,901.3H260c11.6,0,21,7.4,21,16.5v62.1c0,9.1-9.4,16.5-21,16.5H23.5c-11.6,0-21-7.4-21-16.5		v-62.1C2.5,908.7,11.9,901.3,23.5,901.3z"}),t("path",{style:{fill:"#027F92"},d:"M754.4,890.1h225.8c11,0,20,7.7,20,17.2V972c0,9.5-9,17.2-20,17.2H754.4c-11,0-20-7.7-20-17.2v-64.7		C734.4,897.8,743.4,890.1,754.4,890.1z"}),t("path",{style:{fill:"#88C6E2"},d:"M975.8,210h-61.7c-7.8,0-14.2-6.4-14.2-14.2V25.2c0-7.8,6.4-14.2,14.2-14.2h61.7		c7.8,0,14.2,6.4,14.2,14.2v170.7C990,203.6,983.6,210,975.8,210z"}),t("rect",{x:"900",y:"790",width:"90",height:"90",rx:"20",fill:"#037755"}),t("rect",{x:"10",y:"150",width:"110",height:"60",rx:"20",fill:"#039955ee"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#60CCF2"},d:"M563.6,563.6c35.1-35.1,35.1-92.1,0-127.3l-31.8,31.8			c17.6,17.6,17.6,46.1,0,63.6L563.6,563.6z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#0A92CF"},d:"M436.4,436.4c-35.1,35.1-35.1,92.1,0,127.3l31.8-31.8			c-17.6-17.6-17.6-46.1,0-63.6L436.4,436.4z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#FCBB69"},d:"M563.6,436.4c-35.1-35.1-92.1-35.1-127.3,0l31.8,31.8			c17.6-17.6,46.1-17.6,63.6,0L563.6,436.4z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#7AC143"},d:"M436.4,563.6c35.1,35.1,92.1,35.1,127.3,0l-31.8-31.8			c-17.6,17.6-46.1,17.6-63.6,0L436.4,563.6z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#30ABE2"},d:"M973,500c0-226.4-160.5-421.1-382.7-464.3		c-4.3-0.8-8.5,2-9.4,6.3c-0.8,4.3,2,8.5,6.3,9.4C802,93.1,957,281.2,957,500c0,4.4,3.6,8,8,8S973,504.4,973,500z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#988CFF"},d:"M401.7,37.3C183.2,83.8,27,276.7,27,500c0,4.4,3.6,8,8,8		s8-3.6,8-8C43,284.2,193.9,97.8,405,53c4.3-0.9,7.1-5.2,6.2-9.5C410.2,39.2,406,36.4,401.7,37.3z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#8ECB84"},d:"M862.3,804c57-67.9,93.7-150.4,106.1-238.2		c0.6-4.4-2.4-8.4-6.8-9c-4.4-0.6-8.4,2.4-9,6.8l0,0c-11.9,84.8-47.4,164.6-102.5,230.2c-2.8,3.4-2.4,8.4,1,11.3		C854.5,807.8,859.5,807.4,862.3,804z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#F7956A"},d:"M541.2,971.2c102.3-9,198.9-51,275.3-119.7		c3.3-3,3.5-8,0.6-11.3s-8-3.5-11.3-0.6l0,0c-73.7,66.4-167.1,107-266,115.6c-4.4,0.4-7.6,4.3-7.3,8.7		C533,968.3,536.8,971.6,541.2,971.2z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#EA68A7"},d:"M31.6,565.8c31.5,224.2,217.5,394.7,443.6,406.5		c4.4,0.2,8.2-3.2,8.4-7.6c0.2-4.4-3.2-8.1-7.6-8.4C257.6,944.9,77.9,780.2,47.4,563.6c-0.6-4.4-4.7-7.4-9-6.8		C34,557.4,31,561.5,31.6,565.8z"}),t("path",{style:{fill:"#666"},d:"M500,71C265.3,71,75,261.3,75,496s190.3,425,425,425s425-190.3,425-425S734.7,71,500,71z M500,821		c-179.5,0-325-145.5-325-325s145.5-325,325-325s325,145.5,325,325S679.5,821,500,821z"}),t("path",{style:{fill:"#777"},d:"M500,274.1c-122.5,0-221.9,99.3-221.9,221.9S377.5,717.9,500,717.9S721.9,618.5,721.9,496		S622.5,274.1,500,274.1z M500,624.3c-70.9,0-128.3-57.4-128.3-128.3S429.1,367.7,500,367.7S628.3,425.1,628.3,496		S570.9,624.3,500,624.3z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#30ABE2"},d:"M773,500c0-116.5-74-220.2-184.1-258.1		c-4.2-1.4-8.7,0.8-10.2,5c-1.4,4.2,0.8,8.7,5,10.2C687.4,292.7,757,390.3,757,500c0,4.4,3.6,8,8,8S773,504.4,773,500z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#988CFF"},d:"M406.6,243.5C298.8,282.7,227,385.2,227,500c0,4.4,3.6,8,8,8		s8-3.6,8-8c0-108,67.6-204.5,169.1-241.5c4.2-1.5,6.3-6.1,4.8-10.3C415.4,244.1,410.8,242,406.6,243.5z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#8ECB84"},d:"M709.1,675.5c26.7-31.8,45.7-69.2,55.8-109.4		c1.1-4.3-1.6-8.6-5.8-9.7c-4.3-1.1-8.6,1.5-9.7,5.8c-9.4,37.9-27.4,73.1-52.5,103c-2.8,3.4-2.4,8.4,1,11.3		C701.2,679.3,706.3,678.9,709.1,675.5z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#F7956A"},d:"M523.8,772c49.3-4.3,96.6-22,136.7-51.1		c3.6-2.6,4.4-7.6,1.8-11.2s-7.6-4.4-11.2-1.8l0,0c-37.7,27.4-82.2,44-128.7,48.1c-4.4,0.4-7.7,4.3-7.3,8.7S519.4,772.3,523.8,772z"}),t("path",{style:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#EA68A7"},d:"M235.1,566c26.5,106.3,114,186.5,222.2,203.6		c4.4,0.7,8.5-2.3,9.2-6.7c0.7-4.4-2.3-8.5-6.7-9.2c-101.9-16.1-184.2-91.6-209.2-191.7c-1.1-4.3-5.4-6.9-9.7-5.8		C236.6,557.4,234,561.8,235.1,566z"})],-1),We=t("g",{id:"texts","font-weight":"bold","font-size":"25px"},[t("text",{transform:"matrix(1 0 0 1 15 188)","font-size":"18"},"EUCLIDEAN"),t("text",{"font-size":"15","text-anchor":"middle",transform:"matrix(1 0 0 1 945 820)",style:{fill:"#FFFFFF"}},[t("tspan",{x:"0"},"EXPORT "),t("tspan",{x:"0",y:"20"},"MIDI"),t("tspan",{x:"0",y:"40"},"FILE")]),t("text",{transform:"matrix(1 0 0 1 30.8611 55.5253)",style:{fill:"#FFFFFF"}},"TEMPO INFO"),t("text",{transform:"matrix(1 0 0 1 649.9998 804.2612)",style:{fill:"#F7956A"}},"PANNING"),t("text",{transform:"matrix(1 0 0 1 843.2753 925)",style:{fill:"#FFFFFF"}},"TAP TEMPO"),t("text",{transform:"matrix(1 0 0 1 748.6371 971.2296)",style:{fill:"#FFFFFF"}},"CLICK TO SET"),t("text",{transform:"matrix(1 0 0 1 96.1243 985.2861)",style:{fill:"#FFFFFF"}},"CLICK TO SET"),t("text",{transform:"matrix(1 0 0 1 14.5221 932.4329)",style:{fill:"#FFFFFF"}},"AUDIO TO TEMPO"),t("text",{transform:"matrix(1 0 0 1 162.5001 771.9922)",style:{fill:"#EA68A7"}},"SOUND KIT"),t("text",{transform:"matrix(1 0 0 1 189.7273 264.2068)"},[t("tspan",{x:"0",y:"0",style:{fill:"#988CFF"}},"TOP"),t("tspan",{x:"-29.2",y:"30",style:{fill:"#988CFF"}},"NUMBER")]),t("text",{transform:"matrix(1 0 0 1 734.6319 263.8826)"},[t("tspan",{x:"0",y:"0",style:{fill:"#30ABE2"}},"BOTTOM"),t("tspan",{x:"2.8",y:"30",style:{fill:"#30ABE2"}},"NUMBER")]),t("text",{transform:"matrix(1 0 0 1 446.9636 103.7921)",style:{fill:"#AAD037"}},"METER"),t("text",{transform:"matrix(1 0 0 1 777.0959 661.5693)",style:{fill:"#8ECB84"}},"VOLUME"),t("text",{transform:"matrix(1 0 0 1 472.961 505)",style:{fill:"#FFFFFF"}},"BPM"),t("text",{transform:"matrix(1 0 0 1 31.4109 95.1306)"},[t("tspan",{x:"0",y:"0",style:{fill:"#FFFFFF","font-size":"19.8425px"}},"Drag across"),t("tspan",{x:"0",y:"23.8",style:{fill:"#FFFFFF","font-size":"19.8425px"}},"to change BPM")]),t("text",{transform:"matrix(1 0 0 1 440.7423 383)"},[t("tspan",{x:"0",y:"0",style:{fill:"#FCBB69","font-size":"19.8425px"}},"Drag across"),t("tspan",{x:"-14.3",y:"23.8",style:{fill:"#FCBB69","font-size":"19.8425px"}},"to change BPM")]),t("text",{transform:"matrix(1 0 0 1 479.9783 443.6178)",style:{fill:"#FFFFFF"}},"Х 2"),t("text",{transform:"matrix(1 0 0 1 483.5272 574.109)",style:{fill:"#FFFFFF"}},"/ 2"),t("text",{transform:"matrix(1 0 0 1 551.3752 509.5666)",style:{fill:"#FFFFFF"}},"+1"),t("text",{transform:"matrix(1 0 0 1 424.09 508)",style:{fill:"#FFFFFF"}},"-1"),t("text",{transform:"matrix(1 0 0 1 912.6625 52.0002)",style:{"enable-background":"new"}},[t("tspan",{x:"0",y:"0",style:{fill:"#FFFFFF"}},"PLAY"),t("tspan",{x:"-0.7",y:"60",style:{fill:"#FFFFFF"}},"STOP")]),t("text",{transform:"matrix(1 0 0 1 600.1643 38.6146)",style:{fill:"#88C6E2","font-size":"20px"}},"Press Spacebar to play/pause"),t("text",{transform:"matrix(1 0 0 1 700.2522 68.6146)",style:{fill:"#88C6E2","font-size":"20px"}},"Press Enter to stop"),t("text",{transform:"matrix(1 0 0 1 419.2261 148.5724)",style:{fill:"#FFFFFF","font-size":"21.6557px"}},"LOOP 1 STEPS"),t("text",{transform:"matrix(1 0 0 1 421.7783 340.3109)",style:{fill:"#FFFFFF","font-size":"21.6557px"}},"LOOP 2 STEPS"),t("text",{transform:"matrix(1 0 0 1 337.6439 650.5206)",style:{fill:"#FFFFFF","font-size":"21.6557px"}},"CLICK A STEP TO ACTIVATE IT"),t("text",{transform:"matrix(1 0 0 1 302.5375 853.3745)",style:{fill:"#FFFFFF","font-size":"21.6557px"}},"CLICK A STEP CIRCLE TO SET ACCENT")],-1),Ze=[qe,We];function Ke(o,l){return s(),i("g",null,Ze)}const Ye={},Je=D(Ye,[["render",Ke]]),Ge={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xe=t("path",{fill:"currentColor",d:"m16 3.594l-.719.687l-7 7L9.72 12.72L15 7.438V24h2V7.437l5.281 5.282l1.438-1.438l-7-7zM7 26v2h18v-2z"},null,-1),Qe=[Xe];function to(o,l){return s(),i("svg",Ge,Qe)}const eo={name:"la-upload",render:to},oo={class:"recorder"},no=["fill"],ro={class:"close cursor-pointer",transform:"translate(300 150)"},so=["fill"],lo={class:"pointer-events-none"},io=["x","stroke-width"],ao=["transform"],co=["onMousedown","stroke"],uo=["transform"],mo={class:"p-4",width:"110",height:"110"},ho=["for"],po=["id","onChange"],fo=ot({__name:"index",props:{recorder:Object},emits:["close"],setup(o,{emit:l}){return(r,n)=>{const d=$t,u=eo;return s(),i("g",oo,[t("rect",{style:{filter:"url(#shadowButton)"},width:"600",height:"200",rx:"100",fill:e(S)?"#333e":"#ddde"},null,8,no),t("g",ro,[t("circle",{r:"40",fill:e(S)?"#333e":"#ddde",style:{filter:"url(#shadowButton)"},onMousedown:n[0]||(n[0]=m=>r.$emit("close"))},null,40,so),t("g",lo,[p(d,{"font-size":"40px",x:"-25",y:"-25"})])]),(s(),i(P,null,N(["main","accent"],(m,y)=>t("g",{class:"add",key:m},[t("rect",{x:40+y*300,y:"40",fill:"none",width:"220",height:"120",stroke:"currentColor","stroke-width":o.recorder[m]?10:2,"stroke-opacity":"0.5",rx:"60"},null,8,io),t("g",{class:"record cursor-pointer",transform:`translate(${100+400*y} 100)`},[t("circle",{class:"opacity-60 hover-opacity-80 transition-all duration-200 ease",onMousedown:c=>o.recorder.rec(m),r:"40",fill:"#900",stroke:o.recorder.recording==m?"#666":"transparent","stroke-width":"4",style:{filter:"url(#shadowButton)"}},null,40,co)],8,ao),t("g",{class:"load cursor-pointer",transform:`translate(${160+200*y} 50)`},[(s(),i("foreignObject",mo,[t("label",{class:"transition-all duration-200 ease cursor-pointer text-4xl rounded-full px-4 pb-6 pt-2 hover-bg-light-200 dark-(hover-bg-dark-100) bg-light-400 shadow-lg dark-bg-dark-300",for:m},[p(u)],8,ho),t("input",{class:"hidden",type:"file",id:m,onChange:c=>o.recorder.load(m,c.target.files[0])},null,40,po)]))],8,uo)])),64))])}}}),_o={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yo=t("path",{fill:"currentColor",d:"M15 4.594L13.281 6.28L8.562 11H4v10h4.563l4.718 4.719L15 27.406zm-2 4.843v13.126L9.719 19.28L9.406 19H6v-6h3.406l.313-.281zm7.219 2.344L18.78 13.22L21.563 16l-2.782 2.781l1.438 1.438L23 17.437l2.781 2.782l1.438-1.438L24.437 16l2.782-2.781l-1.438-1.438L23 14.562z"},null,-1),vo=[yo];function go(o,l){return s(),i("svg",_o,vo)}const xo={name:"la-volume-mute",render:go},bo=["x1","y1","stroke-width","stroke","opacity","x2","y2"],Co=["cx","cy","stroke","fill","opacity"],$o=["cx","cy","r","stroke","fill","opacity"],wo=["opacity","fill","x","y"],ko={__name:"LoopSector",props:{radius:{type:Number,default:400},step:{type:Number,default:0},total:{type:Number,default:4},active:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},accented:{type:Boolean,default:!1}},emits:"mute",setup(o){const l=o,r=F(()=>lt(l.step+f.pitch/12*l.total,l.total,1)),n=F(()=>k(l.step,l.total,l.radius+25,1e3)),d=F(()=>[k(l.step,l.total,l.radius-(l.muted?25:0),1e3),k(l.step,l.total,l.radius-50,1e3)]);return(u,m)=>{const y=st;return s(),i("g",{onMousedown:m[1]||(m[1]=c=>u.$emit("mute"))},[p(y,{from:o.step/o.total*360,to:(o.step+1)/o.total*360,fill:r.value,radius:o.radius+50,op:o.active?1:.1},null,8,["from","to","fill","radius","op"]),t("line",{x1:d.value[0].x,y1:d.value[0].y,"stroke-width":o.muted?2:4,stroke:o.muted?"currentColor":r.value,"stroke-linecap":"round",opacity:o.muted?.5:1,x2:d.value[1].x,y2:d.value[1].y},null,8,bo),t("circle",{class:"transition-all duration-100 ease-out",cx:n.value.x,cy:n.value.y,r:25,stroke:o.active?"currentColor":r.value,fill:o.active?"currentColor":o.accented?r.value:"transparent",opacity:o.muted?0:1,"stroke-width":"4",onMousedown:m[0]||(m[0]=W(c=>o.muted?u.$emit("mute"):u.$emit("accent"),["stop"]))},null,40,Co),t("circle",{class:"transition-all duration-100 ease-out",cx:e(k)(o.step,o.total,o.radius-50,1e3).x,cy:e(k)(o.step,o.total,o.radius-50,1e3).y,r:o.muted?4:8,stroke:o.active?"currentColor":o.muted?"transparent":r.value,fill:o.muted?"currentColor":r.value,opacity:o.muted?.5:1,"stroke-width":"4","stroke-linecap":"round"},null,8,$o),t("text",{opacity:o.muted?.2:1,style:{"user-select":"none","pointer-events":"none",transition:"all 200ms ease"},fill:o.active?"var(--c-bg)":"currentColor","font-family":"Commissioner, sans-serif","font-size":"36px","text-anchor":"middle","dominant-baseline":"middle",x:n.value.x,y:n.value.y+4},w(o.step+1),9,wo)],32)}}};mt("tempo-circle-loops",[{over:8,under:8,volume:1,sound:"A"},{over:3,under:3,volume:.5,sound:"B"}]);const x=rt({channel:1,tempoCC:8,cc:[{over:1,under:2,steps:3,rotate:4,sound:5,pan:6,vol:7},{over:9,under:10,steps:11,rotate:12,sound:13,pan:14,vol:15}],params:{over:"Number of steps",under:"Subdivision",steps:"Number of active steps",rotate:"Rotation of the pattern",sound:"Beat sound kit",pan:"Panning",vol:"Volume",bpm:"BPM"}}),Fo={class:"arc cursor-grab active-cursor-grabbing"},zo=t("defs",null,[t("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[t("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})])],-1),Mo=["cx","cy"],To={key:1,class:"all pointer-events-none"},Ao=["cx","cy","r"],Bo=["transform"],So=["fill"],Io={transform:"translate(0 10)",fill:"currentColor"},U={__name:"LoopControl",props:{modelValue:{type:Number,default:.1},step:{type:Number,default:.1},min:{type:Number,default:0},max:{type:Number,default:1},start:{type:Number,default:0},finish:{type:Number,default:90},radius:{type:Number,default:300},cx:{type:Number,default:500},cy:{type:Number,default:500},vector:{type:Array,default:()=>[1,-1]},showPositions:{type:Boolean,default:!1},ratio:{type:Number,default:200},every:{type:Number,default:null},showCenter:{type:Boolean,default:!1},midiChannel:{type:Number,default:1},midiCC:{type:Number,default:0}},emits:["update:modelValue"],setup(o,{emit:l}){const r=o,n=rt({inner:kt((r.modelValue-r.min)/(r.max-r.min),0,1),proportion:F(()=>(r.modelValue-r.min)/(r.max-r.min)),angle:F(()=>n.proportion*(r.start-r.finish)+r.finish),position:F(()=>k(n.angle,360,r.radius-25,1e3)),center:F(()=>k(r.finish-(r.finish-r.start)/2,360,r.radius-25,1e3))});function d(c){n.inner+=(r.vector[0]*c.delta[0]+r.vector[1]*c.delta[1])/r.ratio}function u(c){n.inner+=c*r.step/(r.max-r.min)}j(()=>n.inner,c=>{let g=c*(r.max-r.min)+r.min;l("update:modelValue",Math.round(g/r.step)*r.step)});const m=F(()=>{let c=(r.max-r.min)/r.step,g=[];for(let b=0;b<=1;b+=1/c){let T=k(b*(r.finish-r.start)+r.start,360,r.radius-25,1e3);g.push(T)}return g}),y=E(0);return j(()=>L.cc,c=>{c.channel!=x.channel||c.number!=r.midiCC||(y.value=c.value,n.inner=c.value)}),(c,g)=>{const b=st,T=I("drag");return v((s(),i("g",Fo,[zo,p(b,{class:"increase",cx:500,cy:500,from:r.start,to:n.angle,fill:e(S)?"#1111":"#fff4",radius:o.radius,thickness:50,round:"",onMousedown:g[0]||(g[0]=C=>u(1))},null,8,["from","to","fill","radius"]),p(b,{class:"decrease",cx:500,cy:500,from:n.angle,to:o.showCenter?(r.finish+r.start)/2:r.finish,fill:e(S)?"#8882":"#ddd9",radius:o.radius,thickness:50,round:"",onMousedown:g[1]||(g[1]=C=>u(-1))},null,8,["from","to","fill","radius"]),p(b,{class:"line pointer-events-none",style:{"pointer-events":"none"},cx:500,cy:500,from:r.start,to:r.finish,fill:e(S)?"#333":"#cdcdcd",op:.7,radius:o.radius-17,thickness:16,round:""},null,8,["from","to","fill","radius"]),o.showCenter?(s(),i("circle",{key:0,class:"pointer-events-none",opacity:"0.75",fill:"currentColor",r:"4",cx:n.center.x,cy:n.center.y},null,8,Mo)):V("",!0),o.showPositions?(s(),i("g",To,[(s(!0),i(P,null,N(m.value,(C,A)=>(s(),i("circle",{class:"pointer-events-none",key:C,cx:C.x,cy:C.y,r:o.every&&A%o.every==0?4:2,fill:"currentColor",opacity:"0.4"},null,8,Ao))),128))])):V("",!0),t("g",{class:"pointer-events-none",transform:`translate(${n.position.x} ${n.position.y})`},[t("circle",{class:"pointer-events-none",style:{filter:"url(#shadowButton)"},r:"25","stroke-width":"3","stroke-opacity":"0.3",fill:e(S)?"#333":"#ddd"},null,8,So),t("g",Io,[nt(c.$slots,"default",{},()=>[t("text",null,w(o.modelValue.toFixed(2)),1)])])],8,Bo)])),[[T,d]])}}};const H=o=>(K("data-v-b7e54348"),o=o(),Y(),o),Vo={"text-anchor":"middle",style:{"user-select":"none",transition:"all 300ms ease"}},Eo={opacity:"0.5"},Lo=["r"],Po=["opacity"],No=["x1","y1","x2","y2","stroke"],Oo=["transform"],Do=["stroke-opacity","stroke","fill"],Uo=["transform"],jo={class:"signature"},Ho=H(()=>t("text",{fill:"currentColor","font-size":"45"},"/",-1)),Ro={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"40px","text-anchor":"end",x:-10,y:-3},qo={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"40px","text-anchor":"start",x:10,y:-3},Wo=H(()=>t("circle",{r:"18",fill:"#5553"},null,-1)),Zo=H(()=>t("circle",{r:"18",fill:"#5553"},null,-1)),Ko={class:"arrow pointer-events-none"},Yo=["x2","y2"],Jo=["x2","y2"],Go=H(()=>t("circle",{cx:500,cy:500,fill:"currentColor",r:5},null,-1)),Xo={__name:"CircleLoop",props:{radius:{type:Number,default:400},size:{type:Number,default:175},order:{type:Number,default:0}},setup(o){const l=o,{sampler:r,seq:n,audio:d}=Ft(void 0,l.order,"circle"),u=["A","B","C","D","E","F"],m=E(u.findIndex(_=>{var a;return _==((a=n.meter)==null?void 0:a.sound)})),y=F(()=>l.radius+110),c=E(0);ht("Shift",()=>{c.value=n.progress}),j(m,_=>{n.meter.sound=u[_]});const g=F(()=>n==null?void 0:n.steps.filter(_=>!n.mutes[_[0].split("-")[0]]).map(_=>Number(_[0].split("-")[0]))),b=F(()=>n.progress>0?k(n.progress*360,360,l.radius+50,1e3):{x:500,y:100}),T=F(()=>n.progress>0?k(c.value*360,360,l.radius+50,1e3):{x:500,y:100}),C=E(0),A=E(4);return j(()=>L.cc,_=>{if(_.channel==x.channel){if(_.number==x.cc[l.order].steps){const a=A.value-_.raw;if(A.value=_.raw,!a||n.mutes.length-n.mutesCount<0||a>0&&n.mutesCount<=1)return;const R=n.mutes.findIndex(q=>q==a<0);n.mutes[R]=a>0,n.reset()}if(_.number==x.cc[l.order].rotate){const a=C.value-_.raw;C.value=_.raw,n.rotateAccents(a)}}}),(_,a)=>{var J,G,X;const O=vt,R=xo,q=gt,it=fo,at=xt,ct=bt,B=I("tooltip"),dt=I("drag");return s(),i("g",Vo,[t("g",Eo,[t("circle",{cx:"500",cy:"500",r:o.radius-55,"stroke-width":"2",fill:"transparent",stroke:"currentColor"},null,8,Lo)]),t("g",{class:"steps",opacity:(J=e(n))==null?void 0:J.volume},[(s(!0),i(P,null,N(e(n).activeSteps,(h,z)=>(s(),i("g",{key:h},[t("line",{x1:e(k)(h,e(n).steps.length,o.radius-55,1e3).x,y1:e(k)(h,e(n).steps.length,o.radius-55,1e3).y,x2:e(k)(g.value[z+1]||g.value[0],e(n).steps.length,o.radius-55,1e3).x,y2:e(k)(g.value[z+1]||g.value[0],e(n).steps.length,o.radius-55,1e3).y,"stroke-width":"8",stroke:e(lt)(h+e(f).pitch/12*e(n).steps.length,e(n).steps.length,1)},null,8,No)]))),128)),(s(!0),i(P,null,N(e(n).steps,(h,z)=>(s(),$(ko,{key:h,step:z,total:e(n).steps.length,active:!e(n).mutes[z]&&h==e(n).current,radius:o.radius-5,muted:e(n).mutes[z],style:{cursor:"pointer"},accented:!!e(n).accents[z],onAccent:ut=>e(n).accents[z]=!e(n).accents[z],onMute:ut=>e(n).mutes[z]=!e(n).mutes[z]},null,8,["step","total","active","radius","muted","accented","onAccent","onMute"]))),128))],8,Po),v((s(),$(U,{class:"under",modelValue:e(n).meter.under,"onUpdate:modelValue":a[0]||(a[0]=h=>e(n).meter.under=h),radius:y.value,start:16+o.order*11,finish:90,step:1,"font-size":"30",min:1,max:16,vector:[-1,-1],"show-positions":"",ratio:800,every:4,"midi-c-c":e(x).cc[o.order].under},{default:M(()=>{var h;return[t("text",null,w((h=e(n).meter)==null?void 0:h.under),1)]}),_:1},8,["modelValue","radius","start","midi-c-c"])),[[B,"Measure subdivision",void 0,{top:!0}]]),v((s(),$(U,{class:"over",modelValue:e(n).meter.over,"onUpdate:modelValue":a[1]||(a[1]=h=>e(n).meter.over=h),radius:y.value,start:343-o.order*11,finish:270,step:1,"font-size":"30",min:2,max:48-o.order*24,vector:[1,-1],"show-positions":"",ratio:1e3,every:4,"midi-c-c":e(x).cc[o.order].over},{default:M(()=>{var h;return[t("text",null,w((h=e(n).meter)==null?void 0:h.over),1)]}),_:1},8,["modelValue","radius","start","max","midi-c-c"])),[[B,"Number of steps",void 0,{top:!0}]]),v((s(),$(U,{class:"vol",radius:y.value,start:98+o.order*6,finish:130,modelValue:e(n).volume,"onUpdate:modelValue":a[2]||(a[2]=h=>e(n).volume=h),"font-size":"30",fixed:1,step:.02,min:0,max:1,vector:[1,-1],midiCC:e(x).cc[o.order].vol},{default:M(()=>[p(O,{x:"-18",y:"-28"})]),_:1},8,["radius","start","modelValue","midiCC"])),[[B,"Track volume",void 0,{bottom:!0}]]),t("g",{class:"mute opacity-30 hover-opacity-60 transition cursor-pointer",transform:`translate(${850-o.order*147},${800-o.order*128})`,onClick:a[3]||(a[3]=h=>e(n).mute=!e(n).mute),style:Z({opacity:e(n).mute?1:""})},[t("circle",{style:{filter:"url(#shadowButton)"},r:"25","stroke-width":"3","stroke-opacity":e(n).mute?1:0,stroke:e(S)?"#ddd":"#333",fill:e(S)?"#333":"#ddd"},null,8,Do),p(R,{class:"text-4xl",x:"-20",y:"-21"})],12,Oo),v((s(),$(U,{class:"pan",radius:y.value,start:138+o.order*6,finish:175,modelValue:e(n).pan,"onUpdate:modelValue":a[4]||(a[4]=h=>e(n).pan=h),"font-size":"30",fixed:1,step:.05,min:-1,max:1,"show-center":"",midiCC:e(x).cc[o.order].pan},{default:M(()=>[p(q,{x:"-18",y:"-28"})]),_:1},8,["radius","start","modelValue","midiCC"])),[[B,"Track panning",void 0,{bottom:!0}]]),v((s(),$(U,{class:"sound",radius:y.value,modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=h=>m.value=h),vector:[1,1],start:183+o.order*6,finish:262-o.order*6,"font-size":"30",fixed:1,step:1,min:0,max:5,"show-positions":"",ratio:400,every:1,midiCC:e(x).cc[o.order].sound},{default:M(()=>{var h;return[t("text",null,w((h=e(n).meter)==null?void 0:h.sound),1)]}),_:1},8,["radius","modelValue","start","finish","midiCC"])),[[B,"Select sound",void 0,{bottom:!0}]]),p(pt,{name:"fade"},{default:M(()=>[m.value==5&&!e(r).both?(s(),$(it,{key:0,transform:`translate(200 ${800-o.order*220})`,recorder:e(r),onClose:a[6]||(a[6]=h=>m.value--)},null,8,["transform","recorder"])):V("",!0)]),_:1}),v((s(),i("g",{class:"info",transform:`translate(500,${o.order*o.size+50})`},[v((s(),i("g",jo,[Ho,t("text",Ro,w((G=e(n).meter)==null?void 0:G.over),1),t("text",qo,w((X=e(n).meter)==null?void 0:X.under),1)])),[[B,"Time signature",void 0,{top:!0}]]),v((s(),i("g",{class:"cursor-pointer opacity-50 transition-all duration-200 ease hover-opacity-100",transform:"translate(74,-10)",onMousedown:a[7]||(a[7]=h=>e(n).rotateAccents(-1))},[Wo,p(at,{"font-size":"28",x:"-17",y:"-17"})],32)),[[B,"Rotate pattern forward",void 0,{top:!0}]]),v((s(),i("g",{class:"cursor-pointer opacity-50 transition-all duration-200 ease hover-opacity-100",transform:"translate(-78,-10)",onMousedown:a[8]||(a[8]=h=>e(n).rotateAccents(1))},[Zo,p(ct,{"font-size":"28",x:"-17",y:"-17"})],32)),[[B,"Rotate pattern back",void 0,{top:!0}]])],8,Uo)),[[dt,e(n).rotateAccents]]),t("g",Ko,[c.value>0?(s(),i("line",{key:0,x1:500,y1:500,"stroke-width":"4",stroke:"currentColor","stroke-linecap":"cound",x2:T.value.x,y2:T.value.y},null,8,Yo)):V("",!0),t("line",{x1:500,y1:500,"stroke-width":"4",stroke:"currentColor","stroke-linecap":"cound",x2:b.value.x,y2:b.value.y},null,8,Jo),Go])])}}},Qo=D(Xo,[["__scopeId","data-v-b7e54348"]]);const tn=o=>(K("data-v-503674e2"),o=o(),Y(),o),en={class:"flex flex-col items-center w-full relative pb-12 p-4 fullscreen-container rounded-3xl",id:"screen"},on={class:"w-full max-h-90vh",id:"metronome",version:"1.1",baseProfile:"full",viewBox:"0 0 1000 1000",xmlns:"http://www.w3.org/2000/svg",style:{"user-select":"none","touch-action":"none"}},nn=tn(()=>t("defs",null,[t("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[t("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})])],-1)),rn={__name:"RhythmCircle",setup(o){const l=E(!1);function r(){et.forEach(d=>d.reset())}const n=E(0);return j(()=>L.cc,d=>{if(d.channel!=x.channel||d.number!=x.tempoCC)return;const u=d.raw-n.value;n.value=d.raw,f.bpm=Math.floor(f.bpm+u)}),(d,u)=>{const m=Re,y=Ct,c=Ne,g=Ae,b=pe,T=re,C=Pt,A=St,_=I("tooltip");return s(),i("div",en,[(s(),i("svg",on,[nn,p(m,{transform:"translate(20,50)"}),v((s(),$(c,{transform:"translate(20,110) scale(0.75)",title:"Reset to Euclidean",onClick:u[0]||(u[0]=a=>r())},{default:M(()=>[p(y)]),_:1})),[[_,"Reset to Euclidean pattern",void 0,{right:!0}]]),p(g,{transform:"translate(10,900)"}),p(b,{transform:"translate(785,900)"}),p(T,{transform:"translate(910,-30)"}),v((s(),$(c,{transform:"translate(10,750)",onClick:u[1]||(u[1]=a=>l.value=!0)},{default:M(()=>[p(C)]),_:1})),[[_,"Toggle info overlay",void 0,{right:!0}]]),v((s(),$(c,{transform:"translate(925,750)",onClick:u[2]||(u[2]=a=>e(zt)(e(et)))},{default:M(()=>[p(A)]),_:1})),[[_,"Export MIDI file",void 0,{left:!0}]]),(s(),i(P,null,N(2,(a,O)=>p(Qo,{key:O,order:O,radius:380-O*200,size:200},null,8,["order","radius"])),64)),p(wt,{transform:"translate(500,500) scale(0.75)"}),l.value?(s(),$(Je,{key:0,class:"cursor-pointer",onClick:u[3]||(u[3]=a=>l.value=!1)})):V("",!0)]))])}}},sn=D(rn,[["__scopeId","data-v-503674e2"]]),ln={class:"flex"},an=t("tr",null,[t("th",null,"Parameter "),t("th",{class:"text-center",colspan:"2"},"CC")],-1),cn=t("th",null,"Outer loop ",-1),dn=t("th",null,"Inner loop",-1),un=["onUpdate:modelValue"],mn=t("td",null,"BPM",-1),hn={colspan:"2"},pn={__name:"MidiControls",setup(o){return(l,r)=>{var n,d,u,m,y,c;return s(),i("div",ln,[t("table",null,[an,t("tr",null,[t("th",null,"CH "+w((d=(n=e(L))==null?void 0:n.cc)==null?void 0:d.channel)+" CC "+w((m=(u=e(L))==null?void 0:u.cc)==null?void 0:m.number),1),cn,dn]),(s(!0),i(P,null,N(e(x).cc[0],(g,b)=>(s(),i("tr",{key:b},[t("td",null,w(e(x).params[b]),1),(s(),i(P,null,N(2,(T,C)=>{var A,_;return t("td",{key:C},[v(t("input",{class:"dark-bg-light-100 dark-bg-opacity-10 p-2 rounded max-w-20","onUpdate:modelValue":a=>e(x).cc[C][b]=a,type:"number",min:"0",max:"127",style:Z({outline:((_=(A=e(L))==null?void 0:A.cc)==null?void 0:_.number)==e(x).cc[C][b]?"1px red solid":""})},null,12,un),[[Q,e(x).cc[C][b]]])])}),64))]))),128)),t("tr",null,[mn,t("td",hn,[v(t("input",{class:"dark-bg-light-100 dark-bg-opacity-10 p-2 rounded max-w-22","onUpdate:modelValue":r[0]||(r[0]=g=>e(x).tempoCC=g),type:"number",min:"0",max:"127",style:Z({outline:((c=(y=e(L))==null?void 0:y.cc)==null?void 0:c.number)==e(x).tempoCC?"1px red solid":""})},null,4),[[Q,e(x).tempoCC]])])])])])}}},fn=_t("",3),Yn=JSON.parse('{"title":"Circular metronome","description":"Looped rhythm and polyrhythm exploration tool","frontmatter":{"title":"Circular metronome","description":"Looped rhythm and polyrhythm exploration tool","date":"2021-10-02T00:00:00.000Z","cover":"tempo.png","links":["https://habr.com/ru/post/278265/"]},"headers":[],"relativePath":"practice/rhythm/circle/index.md","filePath":"practice/rhythm/circle/index.md","lastUpdated":1688115405000}'),_n={name:"practice/rhythm/circle/index.md"},Jn=Object.assign(_n,{setup(o){return(l,r)=>{const n=ft("client-only");return s(),i("div",null,[p(n,null,{default:M(()=>[p(sn)]),_:1}),fn,p(n,null,{default:M(()=>[p(pn)]),_:1})])}}});export{Yn as __pageData,Jn as default};
