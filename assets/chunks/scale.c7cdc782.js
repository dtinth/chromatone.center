import{_ as d}from"./keys.e0c91b6e.js";import{_ as v,b as c,o,g as f,w as x,B as k,a as y,u as s,c as l,F as _,d as u,t as m,a6 as B}from"./framework.18a7d3ba.js";import{s as p,n as w}from"./theory.61e5aadb.js";import{g as a}from"./colors.b83dc710.js";const S=["label"],b=["value"],D={__name:"scale",setup(E){c(()=>p.sort((t,e)=>t.intervals.length>e.intervals.length?1:t.intervals.length<e.intervals.length?-1:t.name>e.name?1:-1));const h=c(()=>{let t={};p.forEach(e=>{let r=e.intervals.length;t[r]=t[r]||[],t[r].push(e)});for(let e in t)t[e].sort((r,n)=>r.intervals.length>n.intervals.length?1:r.intervals.length<n.intervals.length?-1:r.name>n.name?1:-1);return t});return(t,e)=>{const r=d;return o(),f(r,{class:"w-300px",pitch:s(a).tonic,"onUpdate:pitch":e[1]||(e[1]=n=>s(a).tonic=n),chroma:s(a).set.chroma,title:!1},{default:x(()=>[k(y("select",{class:"m-2 rounded-xl","onUpdate:modelValue":e[0]||(e[0]=n=>s(a).chroma=n)},[(o(!0),l(_,null,u(h.value,(n,g)=>(o(),l("optgroup",{label:g+" notes",key:n},[(o(!0),l(_,null,u(n,i=>(o(),l("option",{key:i.chroma,value:i.chroma},m(s(w)[s(a).tonic])+" "+m(i.name),9,b))),128))],8,S))),128))],512),[[B,s(a).chroma]])]),_:1},8,["pitch","chroma"])}}},C=v(D,[["__scopeId","data-v-486aa04b"]]);export{C as _};