import{_ as F,k as M,A as V,o as a,c as l,a as o,g as b,F as v,S as D,p as A,h as T,e as P,w as S,v as K,i as x,u as c,t as m,r as B,q as I,y as k,n as L}from"./framework.11beae03.js";import{_ as O}from"./svg.c1ef7f37.js";import{g as R,n as f}from"./colors.027ae8bf.js";import{r as N}from"./calculations.65ee336d.js";import{a as C,b as E,n as w,f as j}from"./theory.61e5aadb.js";import{w as g}from"./index.654bd828.js";const z=e=>(A("data-v-0f3e76b5"),e=e(),T(),e),q=z(()=>o("div",{class:"i-la-file-download"},null,-1)),U=z(()=>o("div",{class:"text-xs font-bold"},"PDF",-1)),G=[q,U],J=["download","href"],Q={__name:"pdf",props:{svg:{type:String},x:{type:Number},y:{type:Number},width:{type:Number,default:210},height:{type:Number,default:297}},setup(e){const d=e,n=M(""),i=V({file:d.file||d.svg,url:""});async function u(_){let{x:r,y:s,width:h,height:t}=d,p=document.getElementById(_);console.log(p);const{jsPDF:y}=await D(()=>import("./jspdf.es.min.a9fa3957.js").then(H=>H.a),["assets/chunks/jspdf.es.min.a9fa3957.js","assets/chunks/framework.11beae03.js"]);await D(()=>import("./svg2pdf.es.min.c93f0d26.js"),["assets/chunks/svg2pdf.es.min.c93f0d26.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/jspdf.es.min.a9fa3957.js","assets/chunks/framework.11beae03.js"]);const $=new y;$.svg(p,{x:r,y:s,width:h,height:t}).then(()=>{$.save("myPDF.pdf")})}return(_,r)=>(a(),l(v,null,[o("div",{class:"snapshot",onClick:r[0]||(r[0]=s=>u(e.svg))},G),i.url?(a(),l("a",{key:0,ref_key:"anchor",ref:n,target:"_blank",download:i.file,href:i.url},null,8,J)):b("",!0)],64))}},W=F(Q,[["__scopeId","data-v-0f3e76b5"]]),X={class:"flex flex-wrap items-center gap-4 bg-light-900 dark-bg-dark-300 rounded-lg shadow-lg max-w-55ch ml-5 p-4"},Y=o("div",{class:"text-lg font-bold"},"Download file:",-1),St={__name:"buttons",props:{svg:{type:String,default:""},password:{type:String,default:"printable-papers"}},setup(e){const d=M("");return(n,i)=>{const u=O,_=W;return a(),l("div",X,[Y,d.value==e.password?(a(),l(v,{key:0},[P(u,{svg:e.svg},null,8,["svg"]),P(_,{svg:e.svg},null,8,["svg"])],64)):S((a(),l("input",{key:1,class:"rounded dark-bg-dark-800 p-1","onUpdate:modelValue":i[0]||(i[0]=r=>d.value=r),placeholder:"Paste your download code"},null,512)),[[K,d.value]])])}}};const Z=e=>(A("data-v-16475b75"),e=e(),T(),e),tt=Z(()=>o("defs",null,[o("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[o("feDropShadow",{dx:"0",dy:"3",stdDeviation:"4","flood-color":"#2225"})])],-1)),et=["fill"],st={"font-weight":"bold",fill:"white","text-anchor":"middle",x:"350",y:"-50","font-size":"90"},ot={class:"white"},nt=["transform","onMousedown"],at=["fill"],lt=["fill"],it=["fill"],rt=["font-weight"],ct={class:"black"},dt=["transform","onMousedown"],ut=["fill","data-check"],ht=["fill","stroke"],_t=["fill","font-weight"],pt={y:"165",x:"42"},ft={y:"50",x:"42"},mt={__name:"PrintKeys",props:{chroma:{type:String,default:"100000000000"},letters:{type:Boolean,defualt:!1},pitch:{type:Number,default:0},scale:{type:String},type:{tyoe:String},roman:{type:String,default:""},title:{type:Boolean,default:!0},playAll:{type:Boolean,default:!1}},emits:["update:pitch"],setup(e,{emit:d}){const n=e,i=V({white:[3,5,7,8,10,0,2],black:[4,6,null,9,11,1],chroma:x(()=>N(n.chroma.split(""),-n.pitch)),scale:x(()=>N(R.chroma.split(""),-n.pitch)),title:x(()=>{var s,h;return(s=C.get(n.chroma))!=null&&s.empty?(h=E.get(n.chroma))!=null&&h.empty?"":E.get(n.chroma).aliases[0]:C.get(n.chroma).aliases[0]})});function u(s){return s!=null&&i.chroma[s]=="1"}function _(s){return n.scale&&s!=null&&i.chroma[s]=="1"}function r(s,h){return s==null?"transparent":s==n.pitch?g(f(s,3)).toHex():u(s)&&!h?g(f(s,3.5)).toHex():w[s].length!=2?"#eee":"#999"}return(s,h)=>(a(),l("svg",{class:L(["w-full mt-2",{letters:e.letters}]),id:"chroma-keys",version:"1.1",baseProfile:"full",viewBox:"-10 -150 720 500",xmlns:"http://www.w3.org/2000/svg","font-weight":"200","font-size":"40","text-anchor":"middle","dominant-baseline":"middle"},[tt,o("rect",{y:"-150",width:"710",height:"500",rx:"60",fill:c(g)(c(f)(e.pitch,1,2,1)).toHex()},null,8,et),o("text",st,m(c(w)[e.pitch])+m(e.type),1),o("g",ot,[(a(!0),l(v,null,B(i.white,(t,p)=>(a(),l("g",{class:"key",key:t,transform:`translate(${p*94+30} 30)`,onMousedown:I(y=>s.$emit("update:pitch",t),["stop"])},[o("rect",{class:"transition-all duration-300 ease-out",width:"90",height:"290",rx:"45",fill:r(t,!0),style:{filter:"url(#shadowButton)"}},null,8,at),o("circle",{class:"transition-all duration-300 ease-out",cy:"245",cx:"45",r:"45",fill:r(t)},null,8,lt),S(o("text",{class:"pointer-events-none",y:"250",x:"45",fill:c(g)(c(f)(t)).isDark()?"white":"black"},[o("tspan",{"font-weight":t==e.pitch?800:200},m(c(w)[t]),9,rt)],8,it),[[k,u(t)]])],40,nt))),128))]),o("g",ct,[(a(!0),l(v,null,B(i.black,(t,p)=>(a(),l("g",{class:"key",key:t,transform:`translate(${p*95+80} 10)`,onMousedown:I(y=>s.$emit("update:pitch",t),["stop"])},[t?(a(),l("rect",{key:0,class:"transition-all duration-300 ease-out",width:"80",height:"200",rx:"40",style:{filter:"url(#shadowButton)"},fill:r(t,!0),"data-check":t},null,8,ut)):b("",!0),t?(a(),l("circle",{key:1,class:"transition-all duration-300 ease-out",cy:"160",cx:"40",r:"40",fill:r(t),"stroke-width":"8",stroke:_(t)?c(f)(t,3):"transparent"},null,8,ht)):b("",!0),S(o("text",{class:"pointer-events-none",fill:c(g)(c(f)(t)).isDark()?"white":"black","font-weight":t==e.pitch?800:200},[o("tspan",pt,m(c(w)[t]),1),o("tspan",ft,m(c(j)[t]),1)],8,_t),[[k,u(t)]])],40,dt))),128))])],2))}},$t=F(mt,[["__scopeId","data-v-16475b75"]]);export{$t as P,St as _};
