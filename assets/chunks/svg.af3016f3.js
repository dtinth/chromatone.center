import{_ as f,P as g,i as p,v as c,b as _,F as o,B as m,a as h,W as x,A as S,c as y}from"./framework.7e747cd7.js";const u=s=>(S("data-v-810d5469"),s=s(),y(),s),k=u(()=>o("div",{class:"i-la-camera"},null,-1)),b=u(()=>o("div",{class:"text-xs font-bold"},"SVG",-1)),z=[k,b],B=["download","href"],I={__name:"svg",props:{svg:String,file:{type:String},deep:Boolean},setup(s){const n=s,r=g(""),e=p({file:n.file||n.svg,url:""});function v(l,a){let t=document.getElementById(l);if(a&&(t=t.childNodes[0]),!t)return;let i=new XMLSerializer().serializeToString(t);i=`<?xml version="1.0" standalone="no"?>\r
`+i;var d="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i);e.url=d,e.file=x(n.file||n.svg),setTimeout(()=>{r.value.click()},100)}return(l,a)=>(c(),_(h,null,[o("div",{class:"snapshot",onClick:a[0]||(a[0]=t=>v(s.svg,s.deep))},z),e!=null&&e.url?(c(),_("a",{key:0,ref_key:"anchor",ref:r,target:"_blank",download:e==null?void 0:e.file,href:e==null?void 0:e.url},null,8,B)):m("",!0)],64))}},C=f(I,[["__scopeId","data-v-810d5469"]]);export{C as _};