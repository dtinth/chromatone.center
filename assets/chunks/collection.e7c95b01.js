import{_ as a}from"./index.3f087303.js";import{k as r,o,c as s,a as i,F as u,r as _,n as p,t as m,e as f,W as d}from"./framework.eba39b59.js";const x={class:"flex flex-wrap flex-col"},k={class:"flex flex-wrap"},v=["onClick"],j={__name:"collection",props:{collection:{type:Object,required:!0}},setup(e){const t=r(Object.keys(e.collection)[0]);return(b,g)=>{const n=a;return o(),s("div",x,[i("div",k,[(o(!0),s(u,null,_(e.collection,(c,l)=>(o(),s("button",{class:p(["text-button",{active:t.value==l}]),onClick:h=>t.value=l,key:c},m(c.title),11,v))),128))]),f(n,d({class:"my-4"},e.collection[t.value]),null,16)])}}};export{j as _};
