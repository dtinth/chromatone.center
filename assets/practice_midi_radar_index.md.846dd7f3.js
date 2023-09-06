import{_ as O}from"./chunks/panel.5547b37f.js";import{m as h}from"./chunks/midi.d68b2a41.js";import{t as S}from"./chunks/tempo.de4f8772.js";import{p as r}from"./chunks/paper-full.efdb79eb.js";import{r as D,x as E,v as W,W as k,H as m,o as f,c as v,A as B,B as L,a as u,t as j,u as z,f as l,l as V,I as R,w as U,e as N}from"./chunks/framework.18a7d3ba.js";import{n as P}from"./chunks/colors.b83dc710.js";import{g as $}from"./chunks/calculations.65ee336d.js";import{i as _}from"./chunks/state.505e0129.js";import{u as q}from"./chunks/index.ff80e595.js";import"./chunks/synth.f8bdd3f9.js";import"./chunks/index.139b2562.js";import"./chunks/audio.4983d088.js";import"./chunks/Scale.a106cb29.js";import"./chunks/Subtract.d22cbd0e.js";import"./chunks/PingPongDelay.0dd5299b.js";import"./chunks/AutoPanner.3abf4fbf.js";import"./chunks/MonoSynth.2582d87a.js";import"./chunks/Filter.3335ee5d.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.8c24e7d1.js";import"./chunks/Loop.e0ddb3d9.js";import"./chunks/index.654bd828.js";import"./chunks/theory.61e5aadb.js";import"./chunks/index.86652af6.js";const d=D({angle:0,loaded:!1,zoom:2});function A(){const c=E();return W(()=>{r.setup(c.value),r.view.draw(),d.loaded=!0}),k(()=>{r.project.clear(),d.loaded=!1}),m(()=>S.ticks,e=>{h.playing||(d.angle=e/(192*4)*(360/d.zoom))}),m(()=>h.clock,()=>{h.playing?d.angle+=360/192/d.zoom:(!S.playing||h.stopped)&&(d.angle=0)}),{screen:c,radar:d}}function I(c={x:100,y:100},e=0,i=0){let o=(i-90)*Math.PI/180;return{x:c.x+e*Math.cos(o),y:c.y+e*Math.sin(o)}}const y=60,x={__name:"circles",props:{channel:{type:Number,default:7},grow:{type:Number,default:0},toCenter:{type:Boolean,default:!1},size:{type:Number,default:10},lineWidth:{type:Number,default:1},opacity:{type:Number,default:1},blendMode:{type:String,default:"normal"}},setup(c){const e=c,i=r.view,o=[],t=[],p=E({pitch:0});return m(()=>h.note,s=>{var a;if(s.type=="noteon"&&s.channel==e.channel){let n=I(i.center,(s.octA+s.pitch/12)/9*500,d.angle),w=new r.Point(n.x,n.y),g=new r.Path.Line({strokeColor:P(p.value.pitch),strokeWidth:e.lineWidth,from:((a=o[0])==null?void 0:a.position)||w,to:w,strokeCap:"round",blendMode:e.blendMode});g.tween({opacity:e.opacity},200).then(()=>{g.tween({opacity:0,easing:"easeInOutCubic"},8e3)});let C=new r.Shape.Circle({center:w,radius:e.size,opacity:0,fillColor:P(s.pitch),blendMode:e.blendMode});C.tween({opacity:e.opacity},200).then(()=>{C.tween({opacity:0,easing:"easeInOutCubic"},8e3)}),e.grow>0&&C.tween({radius:e.grow,easing:"easeInOutCubic"},8e3),e.toCenter&&C.tween({position:i.center,easing:"easeInOutCubic"},4e3),o.unshift(C),t.unshift(g),p.value=s}if(o.length>y){for(let n=y;n<=o.length;n++){if(!o[n]||!o[n].remove)return;o[n].remove()}o.length=y}if(t.length>y){for(let n=y;n<=t.length;n++){if(!t[n]||!t[n].remove)return;t[n].remove()}t.length=y}}),m(()=>h.playing,s=>{s||(o.forEach(a=>{a&&a.remove&&a.remove()}),t.forEach(a=>{a&&a.remove&&a.remove()}))}),k(()=>{o.forEach(s=>{s&&s.remove&&s.remove()}),t.forEach(s=>{s&&s.remove&&s.remove()})}),(s,a)=>(f(),v("div"))}},H={__name:"clock",props:{zoom:{type:Number,default:4}},setup(c){const e=r.view,i=new r.Path.Line({from:e.center,to:[e.center.x,e.bounds.y],strokeColor:_.value?"#eee":"#888",strokeCap:"round",strokeWidth:1,pivot:e.center}),o=new r.Shape.Circle({center:e.center,radius:4,fillColor:_.value?"#eee":"#888"});let t=[];for(let a=1;a<8;a++){let n=new r.Path.Circle(r.view.center,a/9*i.length);n.strokeColor="#f002",t.push(n)}const p=D([]),s=D([]);return m(()=>d.zoom,a=>{p.forEach(n=>n.remove()),s.forEach(n=>n.remove());for(let n=0;n<=a;n++){let w=$(n,a,e.size.width,e.size.width),g=$(n+.5,a,e.size.width,e.size.width);s[n]=new r.Path.Line({from:e.center,to:[g.x,g.y],strokeColor:_.value?"#eee1":"#8881",strokeCap:"round",strokeWidth:1,pivot:e.center}),p[n]=new r.Path.Line({from:e.center,to:[w.x,w.y],strokeColor:_.value?"#eee6":"#8886",strokeCap:"round",strokeWidth:1,pivot:e.center})}}),m(_,()=>{i.strokeColor=_.value?"#eee":"#888",o.fillColor=_.value?"#eee":"#888"}),r.view.on("resize",()=>{i.firstSegment.point=r.view.center,o.position=r.view.center,t.forEach(a=>a.position=e.center)}),m(()=>d.angle,a=>{let n=I(r.view.center,400,a);i.lastSegment.point=n}),k(()=>{i.remove(),o.remove(),t.forEach(a=>a.remove())}),(a,n)=>(f(),v("div"))}},T={__name:"pointer",setup(c){new r.Layer({name:"poiner"});const e=E([0,0]),i=new r.Shape.Circle({center:r.view.center,radius:5,opacity:.5,fillColor:"#555"}),o=new r.Shape.Circle({center:r.view.center,radius:40,opacity:.1,fillColor:"#555"});return r.view.on("mousemove",t=>{i.set({position:t.point})}),r.view.on("mousedown",t=>{e.value[0]=t.point.x,e.value[1]=t.point.y,o.tween({position:t.point},{easing:"easeInOutCubic",duration:600})}),k(()=>{i.remove(),o.remove(),r.view.off("mousemove"),r.view.off("nousedown")}),(t,p)=>(f(),v("div"))}},M=100,b={__name:"ticks",props:{channel:{type:Number,default:7},in:{type:Number,default:380},out:{type:Number,default:400},width:{type:Number,default:2},rounded:{type:Boolean,default:!0}},setup(c){const e=c,i=[];return m(()=>h.note,o=>{if(o.type=="noteon"&&o.channel==e.channel){let t=new r.Path.Line({from:I(r.view.center,e.in,d.angle),to:I(r.view.center,e.out,d.angle),opacity:1,strokeColor:P(o.pitch,3,.2),strokeWidth:e.width,strokeCap:e.rounded?"round":""});t.tween({opacity:0,easing:"easeInOutCubic"},8e3),i.unshift(t)}if(i.length>M){for(let t=M;t<=i.length;t++){if(!i[t]||!i[t].remove)return;i[t].remove()}i.length=M}}),m(()=>h.playing,o=>{o||i.forEach(t=>{t&&t.remove&&t.remove()})}),k(()=>{i.forEach(o=>{o&&o.remove&&o.remove()})}),(o,t)=>(f(),v("div"))}},Y={class:"flex flex-col"},Z={class:"flex flex-col w-full items-stretch relative fullscreen-container rounded-3xl shadow-xl",id:"screen"},J={class:"absolute top-4 left-4 flex items-center select-none"},X=u("div",{class:"i-la-times"},null,-1),F={class:"p-0"},G={key:0},K={__name:"radar",setup(c){const{screen:e,radar:i}=A(),o=q(1,1,8);function t(p){o.value+=p.delta[0]/100-p.delta[1]/100,i.zoom=Math.round(o.value)}return(p,s)=>{const a=B("drag");return f(),v("div",Y,[L((f(),v("div",Z,[u("div",J,[X,u("div",F,j(z(i).zoom),1)]),u("canvas",{class:"max-w-full max-h-full h-full w-full min-h-600px",ref_key:"screen",ref:e,style:{cursor:"none"},resize:"true",width:"1000",height:"1000"},[z(i).loaded?(f(),v("div",G,[l(H,{zoom:z(i).zoom},null,8,["zoom"]),l(T),l(x,{class:"lead",channel:0,size:8,"line-width":20,grow:20}),l(x,{class:"bass",channel:5,size:10,"line-width":10,grow:60}),l(x,{class:"lead",channel:6,size:12,"line-width":20}),l(x,{class:"arp",channel:7,grow:12,size:6,"line-width":.5}),l(x,{class:"chords",channel:8,grow:80,size:36,"line-width":.1,"blend-mode":"overlay",opacity:.6}),l(b,{class:"kick",channel:1,in:30,out:80,width:18,rounded:!0}),l(b,{class:"snare",channel:2,in:30,out:420,width:2}),l(b,{class:"hihat",channel:3,width:8}),l(b,{class:"fx",channel:4,in:320,out:360,width:12,rounded:!1})])):V("",!0)],512)])),[[a,t]])])}}},Q=u("h3",{id:"see-all-the-midi-signals-on-the-clock",tabindex:"-1"},[N("See all the MIDI signals on the clock "),u("a",{class:"header-anchor",href:"#see-all-the-midi-signals-on-the-clock","aria-label":'Permalink to "See all the MIDI signals on the clock"'},"​")],-1),ee=u("p",null,[N("Press play on your sequencer to start run the radar by incoming MIDI-clock signal, or just press "),u("code",null,"spacebar"),N(" to start internal metronome, that will drive the radar clocks.")],-1),te=u("p",null,"Drag across the circle up and down to adjust temporal zoom - ther higher the zoom, the longer the loop (from one to 8 measures).",-1),oe=u("p",null,"Use MIDI channel filter section to cut visualize the exact voices of a multichannel MIDI signal.",-1),ne=u("p",null,"You can toggle the internal synth on and off for using your MIDI-controller or enable audio input monitoring for your using your synths and sequencers.",-1),Pe=JSON.parse('{"title":"MIDI Radar","description":"Circular MIDI visualisation experiment","frontmatter":{"title":"MIDI Radar","description":"Circular MIDI visualisation experiment","date":"2021-11-09T00:00:00.000Z","cover":"geometry.png"},"headers":[],"relativePath":"practice/midi/radar/index.md","filePath":"practice/midi/radar/index.md","lastUpdated":1689843676000}'),re={name:"practice/midi/radar/index.md"},Ee=Object.assign(re,{setup(c){return(e,i)=>{const o=O,t=R("client-only");return f(),v("div",null,[l(t,null,{default:U(()=>[l(K),l(o,{class:"mb-4"})]),_:1}),Q,ee,te,oe,ne])}}});export{Pe as __pageData,Ee as default};