import{_ as v}from"./keys.da6b4081.js";import{_ as d,j as c,o,b as f,B as x,v as k,a as y,u as s,c as l,F as _,r as u,t as m,a4 as B}from"./framework.f75e5dc4.js";import{s as p,n as S}from"./theory.dec16ed9.js";import{g as a}from"./colors.6e70028c.js";const w=["label"],b=["value"],D={__name:"scale",setup(E){c(()=>p.sort((t,e)=>t.intervals.length>e.intervals.length?1:t.intervals.length<e.intervals.length?-1:t.name>e.name?1:-1));const h=c(()=>{let t={};p.forEach(e=>{let r=e.intervals.length;t[r]=t[r]||[],t[r].push(e)});for(let e in t)t[e].sort((r,n)=>r.intervals.length>n.intervals.length?1:r.intervals.length<n.intervals.length?-1:r.name>n.name?1:-1);return t});return(t,e)=>{const r=v;return o(),f(r,{class:"w-300px",pitch:s(a).tonic,"onUpdate:pitch":e[1]||(e[1]=n=>s(a).tonic=n),chroma:s(a).set.chroma,title:!1},{default:x(()=>[k(y("select",{class:"m-2 rounded-xl","onUpdate:modelValue":e[0]||(e[0]=n=>s(a).chroma=n)},[(o(!0),l(_,null,u(h.value,(n,g)=>(o(),l("optgroup",{label:g+" notes",key:n},[(o(!0),l(_,null,u(n,i=>(o(),l("option",{key:i.chroma,value:i.chroma},m(s(S)[s(a).tonic])+" "+m(i.name),9,b))),128))],8,w))),128))],512),[[B,s(a).chroma]])]),_:1},8,["pitch","chroma"])}}},j=d(D,[["__scopeId","data-v-486aa04b"]]);export{j as _};
