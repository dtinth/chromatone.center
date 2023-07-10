import{o as s,c as n,a as c,_ as $,i as b,A as w,l as h,w as _,u as o,t as C,f as r}from"./framework.aa37bc02.js";import{_ as M}from"./ring.dca17e70.js";import{u as B}from"./tempo.0cfd0346.js";import{i as L}from"./state.b2795d34.js";const D={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z=c("path",{fill:"currentColor",d:"m26.281 4.281l-22 22L5.72 27.72l22-22z"},null,-1),V=[z];function A(d,i){return s(),n("svg",D,V)}const H={name:"la-slash",render:A},N={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S=c("path",{fill:"currentColor",d:"M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"},null,-1),E=[S];function F(d,i){return s(),n("svg",N,E)}const I={name:"la-times",render:F},P={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T=c("path",{fill:"currentColor",d:"M5 15v2h22v-2z"},null,-1),j=[T];function q(d,i){return s(),n("svg",P,j)}const G={name:"la-minus",render:q},J={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K=c("path",{fill:"currentColor",d:"M15 5v10H5v2h10v10h2V17h10v-2H17V5z"},null,-1),O=[K];function Q(d,i){return s(),n("svg",J,O)}const R={name:"la-plus",render:Q};const U={class:"center",style:{"touch-action":"none"},"text-anchor":"middle"},W=["stroke","r","fill"],X={class:"bpm",fill:"currentColor","font-family":"Commissioner, sans-serif","font-weight":"bold","font-size":"42px",x:0,y:12},Y={class:"controls cursor-pointer","font-size":"30"},Z={__name:"CircleCenter",setup(d){const i=b(()=>L.value?"#333":"#eee"),t=B(),l=w({radius:120,thick:60});function v(p){t.bpm+=(p.delta[0]-p.delta[1])/4}return(p,e)=>{const u=M,f=R,g=G,x=I,y=H,k=h("drag"),a=h("tooltip");return s(),n("g",U,[_((s(),n("g",{class:"bpm cursor-pointer",onDblclick:e[0]||(e[0]=m=>o(t).bpm=120)},[c("circle",{class:"transition-all duration-100 ease-out","stroke-width":"6",stroke:o(t).blink?o(t).color:"transparent",cx:"0",cy:"0",opacity:"0.6",r:l.radius/2,fill:i.value},null,8,W),c("text",X,C(o(t).bpm.toFixed()),1)],32)),[[k,v],[a,"Drag to change BPM",void 0,{bottom:!0}]]),c("g",Y,[_((s(),n("g",{class:"arc plus",onMousedown:e[1]||(e[1]=m=>o(t).set(1))},[r(u,{cx:0,cy:0,from:45,to:135,fill:i.value,op:.7,radius:l.radius,thickness:l.thick},null,8,["fill","radius","thickness"]),r(f,{x:"65",y:"-15"})],32)),[[a,"Add 1",void 0,{right:!0}]]),_((s(),n("g",{class:"arc minus",onMousedown:e[2]||(e[2]=m=>o(t).set(-1))},[r(u,{cx:0,cy:0,from:225,to:315,fill:i.value,op:.7,radius:l.radius,thickness:l.thick},null,8,["fill","radius","thickness"]),r(g,{x:"-102",y:"-15"})],32)),[[a,"Subtract 1",void 0,{left:!0}]]),_((s(),n("g",{class:"arc multiply",onMousedown:e[3]||(e[3]=m=>o(t).set(o(t).bpm))},[r(u,{cx:0,cy:0,from:315,to:405,fill:i.value,op:.7,radius:l.radius,thickness:l.thick},null,8,["fill","radius","thickness"]),r(x,{x:"-18",y:"-104"})],32)),[[a,"Multiply by 2",void 0,{top:!0}]]),_((s(),n("g",{class:"arc multiply",onMousedown:e[4]||(e[4]=m=>o(t).set(-o(t).bpm/2))},[r(u,{cx:0,cy:0,from:135,to:225,fill:i.value,op:.7,radius:l.radius,thickness:l.thick},null,8,["fill","radius","thickness"]),r(y,{x:"-18",y:"65"})],32)),[[a,"Divide by 2",void 0,{bottom:!0}]])])])}}},nt=$(Z,[["__scopeId","data-v-4caa2b50"]]);export{nt as C,I as _};
