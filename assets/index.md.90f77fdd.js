import{o as l,c as a,a as t,_ as Z,i as H,s as ee,j as te,k as V,l as oe,u as e,w as f,n as R,g as v,m as W,v as K,F as b,r as z,q as Y,t as N,f as w,x as Q,T as X,y as se,p as le,h as ae,b as ie}from"./chunks/framework.fee3f2bd.js";import{n as ne}from"./chunks/theory.61e5aadb.js";import{s as n,d as I,n as B}from"./chunks/colors.14f6b67b.js";import{g as re}from"./chunks/calculations.65ee336d.js";import{m as d,p as ce}from"./chunks/midi.10bf3c51.js";import{u as ue}from"./chunks/tuner.278c9e86.js";import{w as D}from"./chunks/index.28289f35.js";import{u as de,w as me}from"./chunks/index.7c47e578.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import"./chunks/index.83aed4fc.js";import"./chunks/synth.55a5c78a.js";import"./chunks/audio.998c0aad.js";import"./chunks/index.0511e153.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.6f99311a.js";import"./chunks/AutoPanner.bc217bb3.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/commonjsHelpers.de833af9.js";const he={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pe=t("path",{fill:"currentColor",d:"m13.188 3l-.157.813l-.594 2.968a9.939 9.939 0 0 0-2.593 1.532l-2.906-1l-.782-.25l-.406.718l-2 3.438l-.406.719l.594.53l2.25 1.97C6.104 14.948 6 15.46 6 16s.105 1.05.188 1.563l-2.25 1.968l-.594.532l.406.718l2 3.438l.406.718l.782-.25l2.906-1a9.939 9.939 0 0 0 2.594 1.532l.593 2.968l.156.813h5.626l.156-.813l.593-2.968a9.939 9.939 0 0 0 2.594-1.532l2.907 1l.78.25l.407-.718l2-3.438l.406-.718l-.593-.532l-2.25-1.968C25.895 17.05 26 16.538 26 16c0-.54-.105-1.05-.188-1.563l2.25-1.968l.594-.531l-.406-.72l-2-3.437l-.406-.718l-.782.25l-2.906 1a9.939 9.939 0 0 0-2.593-1.532l-.594-2.968L18.812 3zm1.624 2h2.376l.5 2.594l.125.593l.562.188a8.017 8.017 0 0 1 3.031 1.75l.438.406l.562-.187l2.532-.875l1.187 2.031l-2 1.781l-.469.375l.157.594c.128.57.187 1.152.187 1.75c0 .598-.059 1.18-.188 1.75l-.125.594l.438.375l2 1.781l-1.188 2.031l-2.53-.875l-.563-.187l-.438.406a8.017 8.017 0 0 1-3.031 1.75l-.563.188l-.125.593l-.5 2.594h-2.375l-.5-2.594l-.124-.593l-.563-.188a8.017 8.017 0 0 1-3.031-1.75l-.438-.406l-.562.187l-2.531.875L5.875 20.5l2-1.781l.469-.375l-.156-.594A7.901 7.901 0 0 1 8 16c0-.598.059-1.18.188-1.75l.156-.594l-.469-.375l-2-1.781l1.188-2.031l2.53.875l.563.187l.438-.406a8.017 8.017 0 0 1 3.031-1.75l.563-.188l.124-.593zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5s5-2.25 5-5s-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3z"},null,-1),_e=[pe];function fe(i,k){return l(),a("svg",he,_e)}const ve={name:"la-cog",render:fe},ye={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=t("path",{fill:"currentColor",d:"M13 4c-1.094 0-2 .906-2 2v12c0 1.094.906 2 2 2h6c1.094 0 2-.906 2-2V6c0-1.094-.906-2-2-2zm0 2h6v12h-6zm-6 8v4c0 3.3 2.7 6 6 6h2v2h-4v2h10v-2h-4v-2h2c3.3 0 6-2.7 6-6v-4h-2v4c0 2.219-1.781 4-4 4h-6c-2.219 0-4-1.781-4-4v-4z"},null,-1),xe=[ge];function we(i,k){return l(),a("svg",ye,xe)}const ke={name:"la-microphone",render:we};const _=i=>(le("data-v-30385c74"),i=i(),ae(),i),Ce={class:"max-w-150 relative flex items-center flex-col justify-center"},be=_(()=>t("div",{class:"i-la-copy text-xl"},null,-1)),ze=_(()=>t("div",{class:"p-0"},"COPY",-1)),$e=[be,ze],Se={key:1,class:"absolute opacity-50 hover-opacity-100 transition bottom-0 right-5 flex items-center gap-1 bg-light-100 dark-bg-dark-100 rounded-xl shadow-lg","aria-label":"Paste custom schema"},Te=_(()=>t("div",{class:"i-la-paste text-xl absolute ml-1"},null,-1)),Me=["viewBox"],Pe=_(()=>t("defs",null,[t("filter",{id:"shadow"},[t("feDropShadow",{dx:"0",dy:"0",stdDeviation:"8","flood-opacity":"0.3"})]),t("filter",{id:"blur",x:"-1",y:"-1",width:"300",height:"300"},[t("feGaussianBlur",{i:"",n:"SourceGraphic",stdDeviation:20})]),t("filter",{id:"blur-less",x:"-1",y:"-1",width:"300",height:"300"},[t("feGaussianBlur",{i:"",n:"SourceGraphic",stdDeviation:15})])],-1)),Ve=["transform"],Ne=["onMousedownPassive","onMouseupPassive","onTouchstart","onTouchend","onMouseleave"],Ie=["transform","fill","opacity"],Be=_(()=>t("path",{d:"M 0,0 a 30,30,0,0,0,25,-20 l 70 -260 a 120,120,0,0,0,2,-20 a 100,100,0,0,0,-200,0 a 120,120,0,0,0,2,20 l 70,260 a 30,30,0,0,0,25,20z"},null,-1)),De=[Be],Ae=["transform","onClick"],Ge=["fill","opacity"],je=_(()=>t("g",{"stroke-width":"4","stroke-linecap":"round"},[t("line",{stroke:"black",x1:"-10",y1:"-10",x2:"10",y2:"10"}),t("line",{stroke:"black",x1:"10",y1:"-10",x2:"-10",y2:"10"})],-1)),Le=["transform"],Oe={x:"10",y:"10",width:"100",height:"100"},qe=["onUpdate:modelValue"],Ee=["transform"],Fe=["fill","r"],Je={key:0},Ue=["fill","r"],He=["font-size","fill"],Re={dy:"5","text-anchor":"middle","dominant-baseline":"middle"},We={class:"spiral pointer-events-none"},Ke=["x1","y1","x2","y2","stroke"],Ye=["cx","cy","fill"],Qe={class:"controls"},Xe=_(()=>t("circle",{class:"transition",r:"32",cy:"-68",fill:"#3331"},null,-1)),Ze={key:1,class:"tuner transition","aria-label":"Calculated fundamental frequency"},et=["fill"],tt=_(()=>t("circle",{r:"32",cy:"70",fill:"#3333"},null,-1)),ot=["aria-label"],st=_(()=>t("rect",{fill:"#0001",x:"-100",y:"-32",width:"200",height:"70",rx:"10"},null,-1)),lt={y:"6","font-size":"40",fill:"currentColor"},at={key:1,class:"center"},it=_(()=>t("circle",{r:"3",fill:"currentColor"},null,-1)),nt=[it],rt={__name:"flower",props:{size:{type:Number,default:1e3},pad:{type:Number,default:50}},setup(i){const k=i,$=H(()=>ne.map((u,s)=>({note:u,pitch:s,coord:m(s,.42),middle:m(s,.28),inside:m(s,.15)}))),c=ee();te(()=>{c.value=ue()});function A(u){return u>c.value.tuner.chromaAvg?c.value.tuner.note.silent?0:u:0}H(()=>new Array(127).fill(null).map((u,s)=>(s+3)%12));function m(u=0,s=.5){return re(u%12,12,k.size*s,0)}const S=V();function g(u,s,y,M){S.value=!y,ce($.value[u].note,u>=3?0:-1,y,M)}const{copy:G,copied:j}=de(),C=V(""),T=V(null);return me(C,u=>{try{let s=JSON.parse(u);if(s.length==12&&s.every(y=>D(y).isValid()))n.custom=s,C.value="",n.customize=!1;else throw"Invalid scheme"}catch{T.value=!0,setTimeout(()=>T.value=null,1e3),console.error("Loaded color scheme is not valid")}}),(u,s)=>{var L,O,q,E,F,J,U;const y=ke,M=ve,x=oe("tooltip");return l(),a("div",Ce,[e(n).customize?f((l(),a("button",{key:0,class:R(["absolute opacity-50 hover-opacity-100 transition cursor-pointer bottom-0 left-5 flex items-center gap-1 bg-light-100 dark-bg-dark-100 rounded-xl p-2 shadow-lg",{customize:e(j)}]),"aria-label":"Copy custom schema",onClick:s[0]||(s[0]=r=>e(G)(JSON.stringify(e(n).custom)))},$e,2)),[[x,"Copy custom schema",void 0,{bottom:!0}]]):v("",!0),e(n).customize?f((l(),a("div",Se,[Te,f(t("input",{class:"w-25 p-2 pl-8 rounded-xl","onUpdate:modelValue":s[1]||(s[1]=r=>C.value=r),placeholder:"PASTE",style:W({backgroundColor:T.value?"red":""})},null,4),[[K,C.value]])])),[[x,"Paste custom schema",void 0,{bottom:!0}]]):v("",!0),(l(),a("svg",{class:"w-full min-w-full",version:"1.1",baseProfile:"full",viewBox:`${-i.pad} ${-i.pad} ${i.size+2*i.pad} ${i.size+2*i.pad}`,xmlns:"http://www.w3.org/2000/svg","text-anchor":"middle","dominant-baseline":"middle"},[Pe,t("g",{transform:`translate(${i.size/2}, ${i.size/2}) `},[(l(!0),a(b,null,z($.value,(r,o)=>{var P,h;return l(),a("g",{class:"keys",key:r},[t("g",{class:"key cursor-pointer",onMousedownPassive:p=>{g(o)},onMouseupPassive:p=>g(o,p,!0),onTouchstart:Y(p=>g(o),["prevent","stop"]),onTouchend:Y(p=>g(o,p,!0),["prevent","stop"]),onMouseleave:p=>g(o,p,!0)},[t("g",{class:"petal",transform:`rotate(${o*30}) translate(2,-120) `,fill:r.note.length>1?"#222":"#eee",opacity:e(d).activeChromaMidi[o]?1:.9,style:{transition:"all 100ms ease-out"},filter:"url(#shadow)"},De,8,Ie),t("g",null,[e(n).custom[o]!=e(I)[o]?(l(),a("g",{key:0,class:"note select-none","stroke-width":"4","stroke-linecap":"round",transform:`translate(${r.inside.x}, ${r.inside.y})`,onClick:p=>e(n).custom[o]=e(I)[o]},[t("circle",{class:"transition",fill:e(I)[o],r:"20",opacity:e(n).customize?1:.1},null,8,Ge),je],8,Ae)):v("",!0),e(n).customize?(l(),a("g",{key:1,class:"note select-none",transform:`translate(${r.middle.x-36}, ${r.middle.y-36})`},[(l(),a("foreignObject",Oe,[f(t("input",{class:"h-30 w-30 rounded-xl",type:"color","onUpdate:modelValue":p=>e(n).custom[o]=p},null,8,qe),[[K,e(n).custom[o]]])]))],8,Le)):v("",!0)]),t("g",{class:"note select-none",transform:`translate(${r.coord.x}, ${r.coord.y})`},[t("circle",{style:{transition:"all 100ms ease-out"},fill:e(B)(o,e(d).activeChromaMidi[o]?4:2),r:i.size/12},null,8,Fe),(h=(P=c.value)==null?void 0:P.tuner)!=null&&h.initiated?(l(),a("g",Je,[t("circle",{style:{transition:"all 80ms ease-out"},fill:e(B)(o,7,1,A(c.value.tuner.aChroma[o])),r:i.size/12,filter:"url(#blur)"},null,8,Ue)])):v("",!0),t("text",{class:"transition","font-size":i.size/20,"font-weight":"bold",fill:e(d).activeChromaMidi[o]?"black":"white"},[t("tspan",Re,N(r.note),1)],8,He)],8,Ee)],40,Ne)])}),128)),t("g",We,[(l(!0),a(b,null,z(e(d).activeNotes,(r,o)=>(l(),a("g",{class:"interval",key:o},[w(X,{name:"fade"},{default:Q(()=>[(l(!0),a(b,null,z(e(d).activeNotes,(P,h)=>(l(),a("line",{key:h,x1:m((o-9)%12,o/700+.145).x,y1:m((o-9)%12,o/700+.145).y,x2:m((h-9)%12,h/700+.145).x,y2:m((h-9)%12,h/700+.145).y,stroke:e(D)(e(n).custom[(o-9)%12]).mix(e(n).custom[(h-9)%12]).toHex(),"stroke-width":"10",style:W({filter:`drop-shadow(0px 0px 4px ${e(D)(e(n).custom[(o-9)%12]).mix(e(n).custom[(h-9)%12]).alpha(.5).toHex()}`})},null,12,Ke))),128))]),_:2},1024)]))),128)),w(X,{name:"fade"},{default:Q(()=>[(l(!0),a(b,null,z(e(d).activeNotes,(r,o)=>(l(),a("g",{class:"note",key:o},[t("circle",{style:{transition:"all 100ms ease-out"},cx:m((o-9)%12,o/700+.145).x,cy:m((o-9)%12,o/700+.145).y,fill:e(n).custom[(o-9)%12],r:12},null,8,Ye)]))),128))]),_:1})]),t("g",Qe,[(L=c.value)!=null&&L.tuner&&!c.value.tuner.initiated?f((l(),a("g",{key:0,class:"mic transition cursor-pointer opacity-40 hover-opacity-100","aria-label":"Start input audio analysis",onClick:s[2]||(s[2]=r=>c.value.init())},[Xe,w(y,{"font-size":"42",x:"-25",y:"-90"})])),[[x,"Start input audio analysis",void 0,{top:!0}]]):v("",!0),(q=(O=c.value)==null?void 0:O.tuner)!=null&&q.initiated?(l(),a("g",Ze,[t("circle",{class:"transition",filter:"url(#blur)",style:{transition:"all 500ms ease"},r:"32",cy:"0",fill:!((E=c.value.tuner.note)!=null&&E.silent)&&c.value.tuner.initiated?e(B)((c.value.tuner.note.value+3)%12,4):"transparent"},null,8,et),(J=(F=c.value)==null?void 0:F.tuner)!=null&&J.initiated?f((l(),a("text",{key:0,class:"opacity-50 select-none",y:"-67","font-size":"28",fill:"currentColor"},N(c.value.tuner.note.name),513)),[[se,!((U=c.value.tuner.note)!=null&&U.silent)]]):v("",!0)])):v("",!0),f((l(),a("g",{class:"customize opacity-20 hover-opacity-100 transition cursor-pointer",onClick:s[3]||(s[3]=r=>e(n).customize=!e(n).customize),"aria-label":"Customize colors sitewide"},[tt,w(M,{"font-size":"42",x:"-25",y:"44",class:R({customize:e(n).customize})},null,8,["class"])])),[[x,"Customize colors",void 0,{top:!0}]])]),e(d).guessChords[0]?f((l(),a("g",{key:0,class:"chord cursor-pointer","aria-label":"Guessed chord: "+e(d).guessChords[0],onClick:s[4]||(s[4]=r=>e(G)(e(d).guessChords[0]))},[st,t("text",lt,N(e(d).guessChords[0]),1)],8,ot)),[[x,e(d).guessChords.length>1&&"or "+e(d).guessChords.slice(1).join(", ")||e(j)?"Copied!":"Click to copy",void 0,{top:!0}]]):(l(),a("g",at,nt))],8,Ve)],8,Me))])}}},ct=Z(rt,[["__scopeId","data-v-30385c74"]]),Bt=JSON.parse('{"title":"Chromatone","description":"Visual music language","frontmatter":{"template":"home","title":"Chromatone","description":"Visual music language","topContent":true},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),ut={name:"index.md"},dt=ie('<h2 id="visual-music-language-to-learn-explore-and-express-with" tabindex="-1">Visual music language to learn, explore and express with <a class="header-anchor" href="#visual-music-language-to-learn-explore-and-express-with" aria-label="Permalink to &quot;Visual music language to learn, explore and express with&quot;">​</a></h2><p>Chromatone is an ongoing research and experiment to use induced a synchronised artificial synesthesia for personal music learning and exploration along with collective practice and performance.</p><p>Imagine if once we agree on a certain way to connect notes and colors? It can empower our music perception with vision, the main modality for most of humans. Let&#39;s try to do it now!</p><p>We&#39;re creating the visual <a href="./theory/">music theory study</a>, that helps beginners learn complex music concepts in color. <a href="./practice/">Interactive web-apps</a> expand the knowledge and grow deeper music awareness.</p><p>For those, who want to touch and feel the colorful notes we have a <a href="./shop/">Sticker shop</a>. While those who are interested in further project development may consider <a href="./support/">supporting</a> <a href="./contact/">us</a> today.</p>',5);function mt(i,k,$,c,A,m){const S=ct;return l(),a("div",null,[w(S),dt])}const Dt=Z(ut,[["render",mt]]);export{Bt as __pageData,Dt as default};