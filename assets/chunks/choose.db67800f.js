import{_ as l,o as t,c as s,F as r,d as i,n as u,t as d}from"./framework.18a7d3ba.js";const p={class:"flex flex-wrap m-1"},m=["onClick"],f={__name:"choose",props:{modelValue:{type:[String,Number]},variants:{type:Object,default:{one:"1",two:"2"}}},emits:["update:modelValue"],setup(o,{emit:a}){function _(n){a("update:modelValue",n)}return(n,v)=>(t(),s("div",p,[(t(!0),s(r,null,i(o.variants,(c,e)=>(t(),s("div",{class:u(["btn",{active:o.modelValue==e}]),key:e,onClick:x=>_(e)},d(c),11,m))),128))]))}},g=l(f,[["__scopeId","data-v-8f4635ff"]]);export{g as _};