import{_ as F,B as $,i as T,A as M,o as r,c as i,u as n,a as t,F as x,r as g,t as d,e as w,x as I,p as N,f as j,C as q,g as S,y as V,h as E}from"./chunks/framework.f429e15e.js";import{f as m}from"./chunks/calculations.65ee336d.js";import{n as v}from"./chunks/colors.f742d7d3.js";import{u as G}from"./chunks/mouse.b6a644ac.js";import{s as H}from"./chunks/index.cccf7ef0.js";import{n as R}from"./chunks/theory.61e5aadb.js";import{c as U}from"./chunks/audio.e9cddac8.js";import{M as b}from"./chunks/MonoSynth.3cdcc469.js";import"./chunks/index.25d7e705.js";import"./chunks/index.88f7cbf1.js";import"./chunks/index.654bd828.js";import"./chunks/midi.231bd883.js";import"./chunks/index.92f70141.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.15b1a9f8.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.aa4960a4.js";import"./chunks/AutoPanner.25817587.js";import"./chunks/index.37551f4c.js";import"./chunks/index.86652af6.js";import"./chunks/Filter.e19ab36f.js";const p=u=>(N("data-v-53d9371f"),u=u(),j(),u),W={class:"fullscreen-container rounded-3xl",id:"screen"},J=["viewBox"],L={id:"intervalGradient"},X=["stop-color"],Y=["stop-color"],Z=["transform","onClick"],K=["opacity"],Q=["font-weight"],tt=p(()=>t("text",{fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"32px","text-anchor":"middle",x:"600",y:"-30"},"Sensory dissonance curve",-1)),et=["transform","onClick"],ot=["width","opacity"],st=["font-weight"],nt=p(()=>t("text",{fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"25px","text-anchor":"middle",x:"-20",y:"250","transform-origin":"-20 250",transform:"rotate(-90)"},"Dissonance",-1)),rt=["stroke","stroke-width"],it=p(()=>t("text",{fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"25px","text-anchor":"middle",x:"600",y:"570"},"Frequency ratio (cents)",-1)),at=["transform"],lt=p(()=>t("line",{stroke:"currentColor",x1:0,x2:0,y1:0,y2:530,"stroke-width":"1"},null,-1)),ct={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"18px","text-anchor":"end",x:"-5",y:"520"},dt={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"18px","text-anchor":"start",x:"5",y:"520"},ft={key:0,fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M0,504.9c22.4-726,93.2-320.8,159.7-254.2c43.1,43.1,63.7,39.9,77.7,48.1c19.7,11.5,27.7,49.8,27.7,49.8c11.4-48.9,35-50,49.8,0.8c18-74.6,51.2-50.4,70.3,21.3c28.9-86.8,97.1-39.9,109.8,25.3c29.4-94.9,76.2-73.7,84.5-22.9c27.4-97.3,109.6-86.7,119.3,86.1c0,0,17.8-110.8,50.6-111.7c32.4-0.9,66.4,13.7,95.6,24.8c21.2,8,37.9,54.5,37.9,54.5s14.2-60.8,42.7-60.8c28.4,0,41.9,53.2,41.9,53.2c20.1-69.4,63.4-42,106.7-65c25.3-13.4,45.4-39.5,67.2-37.1c44.2,4.7,58.8,188,58.8,188"},ht={key:1,fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:"M0,504.9c22.4-726,123.3-349,177.8-272.3C380.1,517.5,953.4,500,1200,500"},mt=["transform"],pt=["stroke"],ut=["fill"],_t=["fill"],yt=["width"],xt=["transform"],gt=["stroke-width","stroke"],wt=["r","fill","transform"],kt=["fill"],vt={"font-family":"Commissioner, sans-serif","font-size":"22px","text-anchor":"end",x:"-20",fill:"currentColor",y:"490"},Ct={"font-family":"Commissioner, sans-serif","font-size":"22px","text-anchor":"start",x:"20",fill:"currentColor",y:"490"},zt=p(()=>t("rect",{x:"400",y:"200",width:"400",height:"100",rx:"20",fill:"gray",stroke:"white"},null,-1)),$t=p(()=>t("text",{"font-weight":"bold",fill:"white","font-family":"Commissioner, sans-serif","font-size":"42px","text-anchor":"middle",x:"600",y:"265"},"START AUDIO",-1)),Tt=[zt,$t],Mt={__name:"dissonance",setup(u){const f={width:1200,height:600,padW:100,padH:100},C=[0,100,200,300,400,500,600,700,800,900,1e3,1100,1200],k=["1P","m2","M2","m3","M3","P4","TT","P5","m6","M6","m7","M7","P8"],z=["1/1","16/15","9/8","6/5","5/4","4/3","45/32","3/2","8/5","5/3","9/5","15/8","2/1"],P=z.map(a=>1200*Math.log2(a.split("/")[0]/a.split("/")[1])),{svg:A,area:B,mouse:c}=G(),s=$({main:220,cents:T(()=>c.normX*1200),hz:T(()=>s.main*Math.pow(2,s.cents/1200))}),e=$({started:!1,playing:!1,osc:"sawtooth8",oscs:["sawtooth8","sine"],envelope:{attack:.2,decay:.2,sustain:1,release:1},setOsc(a){e.osc=a,_.set({oscillator:{type:a}}),h.set({oscillator:{type:a}})}});let _,h;function O(){if(!e.started){const{channel:a}=U("dissonance");_=new b({oscillator:{type:e.osc},filterEnvelope:e.envelope,volume:0}).connect(a),h=new b({oscillator:{type:e.osc},filterEnvelope:e.envelope,volume:0}).connect(a),e.started=!0}}return M(()=>c.normY,a=>{h&&h.volume.rampTo(H(a))}),M([()=>s.hz,()=>c.pressed],()=>{e.started&&(c.pressed?!e.playing&&c.inside?(e.playing=!0,_.triggerAttack(s.main),h.triggerAttack(s.hz)):h.frequency.rampTo(s.hz):(e.playing=!1,_.triggerRelease(),h.triggerRelease()))}),(a,y)=>(r(),i("div",W,[(r(),i("svg",{class:"w-full my-20 select-none",id:"dissonance",ref_key:"svg",ref:A,version:"1.1",baseProfile:"full",style:{"touch-action":"none"},viewBox:`${-f.padW} ${-f.padH} ${f.width+2*f.padW} ${f.height+f.padH}`,xmlns:"http://www.w3.org/2000/svg",onMousemove:y[1]||(y[1]=(...o)=>n(c).getCursorPosition&&n(c).getCursorPosition(...o))},[t("defs",null,[t("linearGradient",L,[t("stop",{offset:"0%","stop-color":n(m)(s.main)},null,8,X),t("stop",{offset:"100%","stop-color":n(m)(s.hz)},null,8,Y)])]),(r(),i(x,null,g([220,440],(o,l)=>t("g",{class:"cursor-pointer",key:o,transform:`translate(${10+l*140},0)`,onClick:D=>s.main=o},[t("rect",{x:"0",y:"-70",width:"130",height:"60",fill:"currentColor",ry:"20",opacity:s.main==o?.3:.1},null,8,K),t("text",{"font-weight":s.main==o?"bold":"normal",fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"32px","text-anchor":"start",x:"15",y:"-30"},d(o)+" hz",9,Q)],8,Z)),64)),tt,(r(!0),i(x,null,g(e.oscs,(o,l)=>(r(),i("g",{class:"cursor-pointer",key:o,transform:`translate(${870+l*240},0)`,onClick:D=>e.setOsc(o)},[t("rect",{x:"0",y:"-70",width:o.length*26,height:"60",fill:"currentColor",ry:"20",opacity:e.osc==o?.3:.1},null,8,ot),t("text",{"font-weight":e.osc==o?"bold":"normal",fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"32px","text-anchor":"start",x:"15",y:"-30"},d(o.toUpperCase()),9,st)],8,et))),128)),t("rect",{ref_key:"area",ref:B,x:"0",y:"0",width:"1200",height:"500",fill:"none",stroke:"currentColor","stroke-width":"1px",opacity:"0.5"},null,512),nt,t("line",{x1:"0",x2:"0",y1:"0",y2:"500",stroke:n(m)(s.main),"stroke-width":e.playing?10:1},null,8,rt),it,(r(),i(x,null,g(C,(o,l)=>t("g",{key:o,transform:`translate(${o},0)`},[lt,t("text",ct,d(n(R)[l%12]),1),t("text",dt,d(o),1)],8,at)),64)),e.osc=="sawtooth8"?(r(),i("path",ft)):w("",!0),e.osc=="sine"?(r(),i("path",ht)):w("",!0),(r(!0),i(x,null,g(n(P),(o,l)=>(r(),i("g",{key:o,transform:`translate(${o} 0)`},[t("line",{stroke:n(v)(l,3),opacity:"1","stroke-width":"1",x1:"0",x2:"0",y1:"0",y2:"500"},null,8,pt),t("text",{"font-weight":"bold","font-family":"Commissioner, sans-serif","font-size":"22px","text-anchor":"start",fill:n(v)(l,3),x:"5",y:"25"},d(k[l]),9,ut),t("text",{"font-family":"Commissioner, sans-serif","font-size":"22px","text-anchor":"start",fill:n(v)(l,3),x:"5",y:"60"},d(z[l]),9,_t)],8,mt))),128)),e.playing?(r(),i("rect",{key:2,x:"0",y:"0",width:n(c).x,height:"500",fill:"url(#intervalGradient)",opacity:"0.2"},null,8,yt)):w("",!0),t("g",{transform:`translate(${n(c).x}, 0)`},[t("line",{class:"pointer",x1:"0",x2:"0",y1:"0",y2:"500","stroke-width":e.playing?6:1,stroke:n(m)(s.hz)},null,8,gt),t("circle",{class:"pointer",cx:0,cy:0,r:e.playing?20:10,fill:e.playing?n(m)(s.hz):"currentColor",transform:`translate(0, ${n(c).y})`},null,8,wt),t("circle",{class:"pointer",cx:0,cy:500,r:"8",fill:e.playing?n(m)(s.hz):"currentColor"},null,8,kt),t("text",vt,d(s.hz.toFixed(0))+" hz",1),t("text",Ct,d(s.cents.toFixed(0)),1)],8,xt),e.started?w("",!0):(r(),i("g",{key:3,class:"cursor-pointer",onClick:y[0]||(y[0]=I(o=>O(),["stop","prevent"]))},Tt))],40,J))]))}},St=F(Mt,[["__scopeId","data-v-53d9371f"]]),bt=t("p",null,"A simple curve for two sine waves is readily established and then we can calculate and explore sensory dissonance curves for complex sounds as the sum of interactions between their partials.",-1),Pt=t("p",null,"Try dragging the note to hear the exact interval. Toggle the plain sine and rich sawtooth waveforms. Compare the feeling of consonance and the dips in the curve yourself.",-1),At=t("p",null,[t("a",{href:"./../../../theory/intervals/dissonance/"},"More info in the Theory research"),E(".")],-1),oe=JSON.parse('{"title":"Sensory dissonance curve","description":"The harmonic relations of notes","frontmatter":{"title":"Sensory dissonance curve","description":"The harmonic relations of notes","date":"2021-08-22T00:00:00.000Z","cover":"dissonance.svg","links":[{"url":"https://sethares.engr.wisc.edu/consemi.html","title":"Calculations of the dissonant curves"},{"url":"https://www.juliabloggers.com/consonant-triads/","title":"Python formulas for dissonance curves"}]},"headers":[],"relativePath":"practice/sound/dissonance/index.md","filePath":"practice/sound/dissonance/index.md","lastUpdated":1676883357000}'),Bt={name:"practice/sound/dissonance/index.md"},se=Object.assign(Bt,{setup(u){return(f,C)=>{const k=q("client-only");return r(),i("div",null,[S(k,null,{default:V(()=>[S(St)]),_:1}),bt,Pt,At])}}});export{oe as __pageData,se as default};
