import{_ as y}from"./svg-info.6f10f01b.js";import{i as h,r as n,j as u,v as m,b as d,F as e,Z as l,T as k,f as _,R as f}from"./framework.7e747cd7.js";import{b as a}from"./index.c0ca431c.js";import{u as o}from"./index.0b97d2b2.js";import{w as p}from"./index.17b4cde5.js";const b={class:"max-h-3xl w-full",version:"1.1",baseProfile:"full",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2px","text-anchor":"middle","font-family":"Commissioner, sans-serif",style:{"touch-action":"none"}},g=f('<circle id="white" fill="white" r="50" cx="50" cy="50"></circle><g id="sources"><circle r="8" cx="50" cy="10" fill="cyan"></circle><circle r="8" cx="85" cy="70" fill="magenta"></circle><circle r="8" cx="15" cy="70" fill="yellow"></circle><circle r="4" cx="50" cy="65" fill="black"></circle></g>',2),w={class:"cursor-pointer",id:"circles","stroke-linecap":"round"},v=["r","stroke-dashoffset","stroke-dasharray","fill"],$=["r","stroke-dashoffset","stroke-dasharray","fill"],C=["r","stroke-dashoffset","stroke-dasharray","fill"],M=["stroke-dashoffset","stroke-dasharray","fill"],P=f('<g class="font-bold text-xs pointer-events-none select-none" id="labels" fill="white"><text x="49.5" y="14">C</text><text x="15" y="74">Y</text><text x="85" y="74">M</text><text class="text-4px" x="50" y="66.5">K</text></g>',1),Z={__name:"cmyk",setup(j){const s=h({radius:30,len:n(()=>s.radius*Math.PI*2),max:100,c:o(a("cyan",50),0,100),m:o(a("magenta",50),0,100),y:o(a("yellow",50),0,100),k:o(a("black",10),0,100),cmyk:n(()=>`device-cmyk(${s.c}% ${s.m}% ${s.y}% ${s.k}% / 100%)`),hex:n(()=>p(s.cmyk).toHex())});function t(c){return i=>{s[c]=Number(s[c])+(Number(i.delta[0])-Number(i.delta[1]))}}return(c,i)=>{const x=y,r=u("drag");return m(),d("div",{class:"fullscreen-container mb-8 p-4 rounded-3xl transition-all duration-800 ease-out",id:"screen",style:_({backgroundColor:s.hex})},[(m(),d("svg",b,[g,e("g",w,[l(e("circle",{class:"mix-blend-multiply cursor-pointer",id:"c",r:s.radius,stroke:"cyan","stroke-dashoffset":s.len-s.len*(s.c/s.max),"stroke-dasharray":s.len,transform:"translate(50,33) rotate(-90)",fill:`hsla(180,100%,50%,${s.c/100})`},null,8,v),[[r,t("c")]]),l(e("circle",{class:"mix-blend-multiply cursor-pointer",id:"m",r:s.radius,stroke:"magenta","stroke-dashoffset":s.len-s.len*(s.m/s.max),"stroke-dasharray":s.len,transform:"translate(65,58) rotate(30)",fill:`hsla(300,100%,50%,${s.m/100})`},null,8,$),[[r,t("m")]]),l(e("circle",{class:"mix-blend-multiply cursor-pointer",id:"y",r:s.radius,stroke:"yellow","stroke-dashoffset":s.len-s.len*(s.y/s.max),"stroke-dasharray":s.len,transform:"translate(35,58) rotate(150)",fill:`hsla(60,100%,50%,${s.y/100})`},null,8,C),[[r,t("y")]]),l(e("circle",{class:"mix-blend-multiply",id:"k",r:"18",stroke:"black",transform:"translate(50,50) rotate(90)","stroke-dashoffset":18*Math.PI*2*(1-s.k/s.max),"stroke-dasharray":18*Math.PI*2,fill:`hsla(60,0%,0%,${s.k/100})`},null,8,M),[[r,t("k")]])]),P,k(x,{class:"select-none",y:42,transform:"scale(0.8) translate(12,4)",color:{c:s.c,m:s.m,y:s.y,k:s.k,a:1}},null,8,["color"])]))],4)}}};export{Z as _};