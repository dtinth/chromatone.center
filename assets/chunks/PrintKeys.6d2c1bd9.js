import{_ as k,k as P,A as C,o as s,c as r,a as b,g as y,P as g,F as x,r as v,u as p,t as h}from"./framework.eba39b59.js";import{w as D}from"./index.12cb0072.js";import{n as E}from"./colors.de66a068.js";import{n as w}from"./theory.61e5aadb.js";const F={class:"snapshot"},I=["download","href"],B={__name:"pdf",props:{svg:{type:String},x:{type:Number},y:{type:Number},width:{type:Number,default:210},height:{type:Number,default:270}},setup(o){const l=o,_=P(""),c=C({file:l.file||l.svg,url:""});async function f(u){let{x:n,y:t,width:d,height:m}=l,a=document.getElementById(u);console.log(a);const{jsPDF:e}=await g(()=>import("./jspdf.es.min.175cb3ff.js").then(N=>N.a),["assets/chunks/jspdf.es.min.175cb3ff.js","assets/chunks/framework.eba39b59.js"]);await g(()=>import("./svg2pdf.es.min.6601d66c.js"),["assets/chunks/svg2pdf.es.min.6601d66c.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/jspdf.es.min.175cb3ff.js","assets/chunks/framework.eba39b59.js"]);const i=new e;i.svg(a,{x:n,y:t,width:d,height:m}).then(()=>{i.save("myPDF.pdf")})}return(u,n)=>(s(),r("div",F,[b("div",{class:"i-la-file",onClick:n[0]||(n[0]=t=>f(o.svg))}),c.url?(s(),r("a",{key:0,ref_key:"anchor",ref:_,target:"_blank",download:c.file,href:c.url},null,8,I)):y("",!0)]))}},R=k(B,[["__scopeId","data-v-0c6b51f6"]]),S=["x","width","height","fill"],V=["x","y"],$={"text-anchor":"start",x:"2",y:"-15","font-size":"22"},T={__name:"PrintKeys",props:{pitch:{type:Number,default:0},chroma:{type:String,default:"100100010010"},type:{type:String,default:""},tonic:{type:Number,default:0}},emits:[],setup(o){const l=o,_=[...w].map((t,d)=>({name:t,pitch:d,pos:[1,0,1,1,0,1,0,1,1,0,1,0][t]?1:0})),c=[3,5,7,8,10,0,2].map(t=>_[t]),f=[4,6,!1,9,11,1].map(t=>_[t]);function u(t){return l.chroma.split("")[t]=="1"}function n(t){return u(t%12)?E(t%12):[1,0,1,1,0,1,0,1,1,0,1,0][t]?"hsl(0,0%,90%)":"#aaaa"}return(t,d)=>(s(),r("g",null,[(s(!0),r(x,null,v([p(c),p(f)],(m,a)=>(s(),r("g",{key:a},[(s(!0),r(x,null,v(m,(e,i)=>(s(),r("g",{key:i},[e?(s(),r("rect",{key:0,x:25*i+15*a,y:0,width:22-a*4,height:100-35*a,rx:5,ry:5,fill:p(D)(n(e==null?void 0:e.pitch)).toHex()},null,8,S)):y("",!0),e&&u(e.pitch)?(s(),r("text",{key:1,fill:"white","font-family":"Commissioner, sans-serif","font-size":"10px","font-weight":"bold","text-anchor":"middle","dominant-baseline":"middle",x:25*(i%12)+11+13*a,y:[1,0,1,1,0,1,0,1,1,0,1,0][e.pitch]?88:55},h(e==null?void 0:e.name),9,V)):y("",!0)]))),128)),b("text",$,h(p(w)[o.pitch])+h(o.type),1)]))),128))]))}};export{T as _,R as a};
