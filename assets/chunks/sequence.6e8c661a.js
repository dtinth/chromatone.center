import{t as A}from"./tempo.60cef874.js";import{X as x,a0 as U,s as j,H as M,t as T,Y as q}from"./index.cccf7ef0.js";import{c as G,b as H,d as K}from"./audio.e9cddac8.js";import{r as R}from"./calculations.65ee336d.js";import{b as l}from"./index.25d7e705.js";import{u as d}from"./index.92f70141.js";import{B as $,i as m,A as f,G as E,S as L,K as N}from"./framework.f429e15e.js";import{S as O}from"./Sequence.ac2a9b47.js";import{U as P}from"./UserMedia.c8f7c51a.js";const C=$([]),te=m(()=>{let a=0;return C.forEach(n=>{let r=n.meter.over/n.meter.under;r>a&&(a=r)}),a});function re(a={over:4,under:4,sound:"A",volume:1},n=0,r="bar",c=64){let o;const e=$({meter:{over:d(l(`tempo-loop-${n} -${r}-over`,4),2,c),under:d(l(`tempo-loop-${n}-${r}-under`,4),2,c),sound:l(`tempo-loop-${n}-${r}-sound`,"A"),volume:d(l(`tempo-loop-${n}-${r}-volume`,1),0,1)},current:"0-0",steps:[["0-1"],["1-1"],["2-1"],["3-1"]],mutes:l(`metro-${r}-mutes-${n}`,[]),accents:l(`metro-${r}-accents-${n}`,[!0]),volume:d(l(`metro-${r}-vol-${n}`,(a==null?void 0:a.volume)||1),0,1),mute:!1,pan:d(l(`metro-${r}-pan-${n}`,n%2==1?-.5:.5),-1,1),mutesCount:m(()=>e.mutes.reduce((t,s)=>(s||t++,t),0)),activeSteps:m(()=>e.steps.filter(t=>!e.mutes[t[0].split("-")[0]]).map(t=>Number(t[0].split("-")[0]))),currentSeq:m(()=>e.mutes.reduce((t,s)=>s?t+"0":t+"1","")),euclidSeq:m(()=>e.mutesCount>0&&e.mutesCount<e.steps.length?X(e.mutesCount,e.steps.length).join(""):new Array(e.steps.length).fill("1").join("")),isEuclidean:m(()=>e.euclidSeq==e.currentSeq),reset(){let t=[];e.euclidSeq.split("").forEach((s,h)=>{t[h]=!(s!=!1&&s!=null)}),e.mutes=t},rotateAccents(t){e.accents=R(e.accents,t),e.mutes=R(e.mutes,t)}});C[n]=e,e.progress=m(()=>A.ticks?o==null?void 0:o.progress:0),f(()=>{var t;return(t=e==null?void 0:e.meter)==null?void 0:t.under},()=>{var t;(t=o==null?void 0:o.stop())==null||t.dispose(),o=new O(D,e.steps,e.meter.under+"n").start(0)},{immediate:!0}),f(()=>{var t;return(t=e==null?void 0:e.meter)==null?void 0:t.over},()=>{var t;e.steps.length=0;for(let s=0;s<((t=e.meter)==null?void 0:t.over);s++)e.steps.push([`${s}-1`]);o.events=e.steps},{immediate:!0}),E(()=>{o.events=e.steps,e.accents.length=e.steps.length;const t=e.mutes.length;e.mutes.length=e.steps.length,e.mutes.length<e.steps.length&&e.mutes.fill(!1,t)}),E(()=>{A.stopped&&(e.current="1000-1")});const i={A:"tongue",B:"synth",C:"seiko",D:"ping",E:"logic"},v={};for(let t in i)for(let s of[1,2])v[`${t}${s} `]=`${i[t]}/${s==1?"high":"low"}.wav`;const u=L({...G(`sequence-${r}-${n}`),panner:new x(n%2==1?-.5:.5,0),synth:new U({urls:v,volume:1,attack:.001,release:2,baseUrl:"/audio/metronome/"})});u.synth.connect(u.panner),u.panner.connect(u.channel);const{sampler:p,micRec:B}=V(u.synth);f(()=>e.mute,t=>{u.volume.mute=t}),f(()=>e.meter.sound,t=>{t!="F"&&(p.main=!1,p.accent=!1)}),f(()=>e.volume,t=>{u.panner.volume.targetRampTo(j(t),1)},{immediate:!0}),f(()=>e.pan,t=>{u.panner.pan.targetRampTo(t,1)},{immediate:!0});function D(t,s){var w,b,y,S;M.state=="suspended"&&T();let h=typeof s=="string"?+s.split("-")[0]:s;q.schedule(()=>{e.current=s},t);let g=e.accents[h]&&s.split("-")[1]=="1";if(e.mutes[h]||e.mutes[s]||((w=e.meter)==null?void 0:w.sound)=="F"&&!g&&!p.main||((b=e.meter)==null?void 0:b.sound)=="F"&&g&&!p.accent)return;let k=`${(y=e.meter)==null?void 0:y.sound}${g?2:1}`;u.synth.triggerAttackRelease(k,((S=e.meter)==null?void 0:S.under)+"n",t)}return N(()=>{o.stop().dispose(),[u,B].forEach(t=>{Object.values(t).forEach(s=>s.dispose())})}),{sampler:p,seq:e}}function V(a){const n={mic:new P(1),meter:new H,recorder:new K};n.mic.connect(n.meter),n.meter.connect(n.recorder);const r=$({started:!1,recording:!1,main:!1,accent:!1,both:m(()=>r.main&&r.accent),async load(c="main",o){let e=await o.arrayBuffer(),i=await n.recorder.context.decodeAudioData(e);a.add(c=="main"?"F1":"F2",i),r[c]=!0,r.recording=!1},async rec(c="main"){if(!r.recording)r.started?(r.recording=c,n.recorder.start()):n.mic.open().then(()=>{r.started=!0,r.recording=c,n.recorder.start()}).catch(()=>{console.log("mic not open")});else{let e=await(await n.recorder.stop()).arrayBuffer(),i=await n.recorder.context.decodeAudioData(e);a.add(c=="main"?"F1":"F2",i),r[c]=!0,r.recording=!1}}});return{sampler:r,micRec:n}}function F(a,n,r){r=r||new Array(a).fill("1").concat(new Array(n).fill("0"));const c=[];for(let o=0;o<Math.min(a,n);o++)c.push(r.shift()+r.pop());return r.length>1?F(c.length,r.length,c.concat(r)):c.concat(r)}function X(a,n){return F(a,n-a,null)}export{te as m,C as t,re as u};
