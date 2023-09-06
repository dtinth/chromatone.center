import{_ as B}from"./chunks/SaveSvg.db4aa00f.js";import{_ as S,L as U,r as V,H as z,b as y,o as l,c as o,a as n,B as b,a9 as F,u as s,F as u,d as m,t as f,D as A,p as M,q as O,f as D}from"./chunks/framework.c7ad3ca2.js";import"./chunks/index.b30cd6d2.js";import"./chunks/index.86652af6.js";import{i as w}from"./chunks/index.ab22ef51.js";import{n as _}from"./chunks/index.b3129a1a.js";import{f as I}from"./chunks/calculations.65ee336d.js";import{w as $}from"./chunks/index.654bd828.js";import{b as N}from"./chunks/synth.97f998a0.js";import{e as P}from"./chunks/midi.9486e5fa.js";import"./chunks/index.098dc14b.js";import"./chunks/audio.01373f6f.js";import"./chunks/Scale.22b16e3d.js";import"./chunks/Subtract.beb0cc34.js";import"./chunks/PingPongDelay.187daa12.js";import"./chunks/AutoPanner.8d278bb2.js";import"./chunks/MonoSynth.ecb6ed30.js";import"./chunks/Filter.fb7acdf5.js";import"./chunks/commonjsHelpers.de833af9.js";const g=d=>(M("data-v-2d9aaeaf"),d=d(),O(),d),j={class:"flex flex-col"},q={class:"flex flex-wrap items-center m-auto"},T={class:"flex items-center px-4"},H=g(()=>n("div",{class:"text-xl"},"Instrument",-1)),L=["value"],J={class:"flex items-center px-4"},Z=g(()=>n("div",{class:"text-xl"},"Scale length",-1)),K=g(()=>n("div",{class:"text-xl"},"mm",-1)),Q={class:"flex items-center px-4"},R=g(()=>n("div",{class:"text-xl"},"Frets",-1)),W={class:"flex flex-wrap"},X=["viewBox"],Y=["x"],ee=["x1","x2"],te=["y1","y2","x2"],ne=["x"],se=["cx","cy"],le=["cx","cy"],oe=["cx","cy"],re=["y1","y2","x2"],ie=["y"],ae=["x","y"],ce=["onClick"],ue=["cx","fill"],me=["x"],de=["onClick"],fe=["cy","cx","fill"],pe=["x","y"],xe={__name:"tool",props:{instruments:{type:Object,default:()=>{}}},setup(d){const h=d,t=U("instrument-calc",{l:430,frets:27,title:"Ukulele",tuning:["C4","G4","E4","A4"]}),v=V([]);function C(i,r,e){P(i),N(i),v[e]=i}z(()=>t.value.title,i=>{const r=h.instruments[i];t.value.l=r.l,t.value.frets=r.frets,t.value.tuning=r.tuning});const E=y(()=>[3,5,7,9,12,15,17,19,21].filter(i=>i<t.value.frets)),G=y(()=>[12,24].filter(i=>i<t.value.frets)),c=y(()=>{let i=[];for(let r=1;r<t.value.frets;r++)i.push(1-Math.pow(.9438743,r));return i});function k(i,r){return $(I(_.freq(_.transpose(i,w.fromSemitones(r))))).toHex()}return(i,r)=>(l(),o("div",j,[n("div",q,[n("div",T,[H,b(n("select",{class:"bg-transparent text-xl w-10rem m-2 p-2","onUpdate:modelValue":r[0]||(r[0]=e=>s(t).title=e)},[(l(!0),o(u,null,m(d.instruments,(e,a)=>(l(),o("option",{key:a,value:a},f(a),9,L))),128))],512),[[F,s(t).title]])]),n("div",J,[Z,b(n("input",{class:"bg-transparent text-2xl w-5rem m-2 p-2","onUpdate:modelValue":r[1]||(r[1]=e=>s(t).l=e),type:"number",inputmode:"numeric",pattern:"[0-9]*"},null,512),[[A,s(t).l]]),K]),n("div",Q,[R,b(n("input",{class:"bg-transparent text-2xl w-4rem m-2 p-2","onUpdate:modelValue":r[2]||(r[2]=e=>s(t).frets=e),type:"number",inputmode:"numeric",pattern:"[0-9]*"},null,512),[[A,s(t).frets]])])]),n("div",W,[(l(),o("svg",{class:"flex-1 max-h-3xl w-full strings",id:"fretboard",version:"1.1",baseProfile:"full",viewBox:`0 -60 ${s(t).tuning.length*40+100} 1100`,xmlns:"http://www.w3.org/2000/svg"},[n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"16px","font-weight":"bold","text-anchor":"middle","dominant-baseline":"middle",x:(s(t).tuning.length*40+65)/2,y:-40},f(s(t).title),9,Y),(l(!0),o(u,null,m(s(t).tuning,(e,a)=>(l(),o("line",{class:"string",key:e,stroke:"currentColor","stroke-width":"1","stroke-linecap":"round",y1:0,x1:40*a+50,y2:1e3,x2:40*a+50},null,8,ee))),128)),(l(),o(u,null,m([0,1e3],e=>n("line",{class:"end",key:e,stroke:"currentColor","stroke-width":"2","stroke-linecap":"round",y1:e,x1:10,y2:e,x2:s(t).tuning.length*40+55},null,8,te)),64)),n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"normal","text-anchor":"left","dominant-baseline":"middle",x:s(t).tuning.length*40+20,y:990},f(s(t).l)+" mm",9,ne),(l(!0),o(u,null,m(E.value,e=>(l(),o("circle",{class:"inlay",key:e,fill:"currentColor",cx:(s(t).tuning.length*40+60)/2,cy:c.value[e-1]*1e3-(c.value[e-1]*1e3-c.value[e-2]*1e3)/2,r:4},null,8,se))),128)),(l(!0),o(u,null,m(G.value,e=>(l(),o("g",{key:e},[n("circle",{class:"inlay",fill:"currentColor",cx:(s(t).tuning.length*40+60)/2-5,cy:c.value[e-1]*1e3-(c.value[e-1]*1e3-c.value[e-2]*1e3)/2,r:4},null,8,le),n("circle",{class:"inlay",fill:"currentColor",cx:(s(t).tuning.length*40+60)/2+5,cy:c.value[e-1]*1e3-(c.value[e-1]*1e3-c.value[e-2]*1e3)/2,r:4},null,8,oe)]))),128)),(l(!0),o(u,null,m(c.value,(e,a)=>(l(),o("g",{class:"fret",key:e},[n("line",{stroke:"gray","stroke-width":"1","stroke-linecap":"round",y1:e*1e3,x1:20,y2:e*1e3,x2:s(t).tuning.length*40+40},null,8,re),n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"normal","text-anchor":"middle","dominant-baseline":"middle",x:24,y:e*1e3-8},f(a+1),9,ie),n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"normal","text-anchor":"left","dominant-baseline":"middle",x:s(t).tuning.length*40+30,y:e*1e3-8},f((e*s(t).l).toFixed(2))+" mm",9,ae)]))),128)),(l(!0),o(u,null,m(s(t).tuning,(e,a)=>(l(),o("g",{class:"note",key:e},[n("g",{onClick:p=>C(e,0,a)},[n("circle",{cy:-12,cx:a*40+50,r:12,fill:k(e,0)},null,8,ue),n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"white","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"bold","text-anchor":"middle","dominant-baseline":"middle",x:a*40+50,y:-11},f(e),9,me)],8,ce),(l(!0),o(u,null,m(c.value,(p,x)=>(l(),o("g",{class:"note",key:p,onClick:he=>C(s(_).transpose(e,s(w).fromSemitones(x+1)),x,a)},[n("circle",{cy:p*1e3-12,cx:a*40+50,r:12,fill:k(e,x+1)},null,8,fe),n("text",{style:{"user-select":"none",transition:"all 300ms ease"},fill:"white","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"bold","text-anchor":"middle","dominant-baseline":"middle",x:a*40+50,y:p*1e3-11},f(s(_).transpose(e,s(w).fromSemitones(x+1))),9,pe)],8,de))),128))]))),128))],8,X))])]))}},_e=S(xe,[["__scopeId","data-v-2d9aaeaf"]]),$e=JSON.parse('{"title":"Fretboard calculator","description":"A tool to get distances between frets for any scale length of any string instrument","frontmatter":{"title":"Fretboard calculator","description":"A tool to get distances between frets for any scale length of any string instrument","date":"2021-04-09T00:00:00.000Z","cover":"fretboard.svg","instruments":{"Guitar":{"l":650,"frets":18,"tuning":["E2","A2","D3","G3","B3","E4"]},"Electric guitar":{"l":630,"frets":22,"tuning":["E2","A2","D3","G3","B3","E4"]},"Bass guitar":{"l":860,"frets":24,"tuning":["E1","A1","D2","G2"]},"Mandolin":{"l":360,"frets":14,"tuning":["G4","D4","A5","E5"]},"Mandola":{"l":510,"frets":16,"tuning":["C3","G3","D4","A4"]},"Octave mandolin":{"l":580,"frets":18,"tuning":["G3","D3","A4","E4"]},"Mandocello":{"l":686,"frets":20,"tuning":["C2","G2","D3","A3"]},"Pipa":{"l":900,"frets":17,"tuning":["A2","D3","E3","A3"]},"Balalaika (prima)":{"l":660,"frets":20,"tuning":["E4","E3","A4"]},"Ukulele (soprano)":{"l":330,"frets":14,"tuning":["G4","C4","E4","A4"]},"Ukulele (concert)":{"l":380,"frets":16,"tuning":["G4","C4","E4","A4"]},"Ukulele (tenor)":{"l":430,"frets":18,"tuning":["G3","C4","E4","A4"]},"Ukulele (baritone)":{"l":480,"frets":20,"tuning":["D3","G3","B3","E4"]},"Ukulele (bass)":{"l":510,"frets":17,"tuning":["E2","A2","D3","G3"]},"Banjo":{"l":670,"frets":17,"tuning":["G4","D3","G3","B3","D4"]},"Violin":{"l":330,"frets":1,"tuning":["G3","D4","A4","E5"]},"Cello":{"l":700,"frets":1,"tuning":["C2","G2","D3","A3"]},"Viola":{"l":420,"frets":1,"tuning":["C3","G3","D4","A4"]},"Double bass":{"l":1100,"frets":1,"tuning":["E1","A1","D2","G2"]}}},"headers":[],"relativePath":"practice/experiments/fretboard/index.md","filePath":"practice/experiments/fretboard/index.md","lastUpdated":1690802218000}'),ge={name:"practice/experiments/fretboard/index.md"},Ne=Object.assign(ge,{setup(d){return(h,t)=>{const v=B;return l(),o("div",null,[D(_e,{instruments:h.$frontmatter.instruments},null,8,["instruments"]),D(v,{svg:"fretboard"})])}}});export{$e as __pageData,Ne as default};
