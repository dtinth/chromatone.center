import{g as y,n as b}from"./colors.60a0cd0b.js";import{n as k,i as x}from"./theory.dec16ed9.js";import{b as d,y as C,o as s,c as l,F as p,d as g,z as $,u as i,A as N,e as S,t as _}from"./framework.88e9bc5c.js";const w={class:"flex flex-col-reverse gap-1 bg-dark-200 bg-opacity-30 dark-bg-light-900 dark-bg-opacity-40 p-1 rounded-lg"},D=["onClick"],z="101101011010",L={__name:"code",props:{chroma:{type:String,default:"101101011010"},pitch:{type:Number,default:null},cols:{type:Number,default:4}},emits:["update:chroma"],setup(o,{emit:B}){const c=o,r=d(()=>c.pitch!=null?c.pitch:y.tonic),h=d(()=>c.chroma.match(new RegExp(`.{1,${c.cols}}`,"g")).map(e=>e.split("").map(Number))),f=(e,n)=>e.slice(0,n)+(e[n]==="1"?"0":"1")+e.slice(n+1);return(e,n)=>{const v=C("tooltip");return s(),l("div",w,[(s(!0),l(p,null,g(h.value,(u,a)=>(s(),l("div",{class:"flex gap-1",key:u},[(s(!0),l(p,null,g(u,(m,t)=>$((s(),l("div",{class:"w-6 h-6 flex flex-col items-center justify-center rounded text-xs font-bold select-none cursor-pointer",onClick:E=>e.$emit("update:chroma",f(o.chroma,(a*o.cols+t)%12)),key:t,style:N({backgroundColor:m?i(b)(r.value+a*o.cols+t):z.split("")[(r.value+a*o.cols+t)%12]=="1"?"hsla(0,0%,100%,0.5)":"hsla(0,0%,10%,0.5)",opacity:`${m==1?1:.4}`})},[S(_(i(x)[(a*4+t)%12]),1)],12,D)),[[v,`${i(k)[(r.value+a*4+t)%12]}`]])),128))]))),128))])}}};export{L as _};
