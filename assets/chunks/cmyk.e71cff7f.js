import{_ as x}from"./svg-info.e18a1a99.js";import{b as l}from"./index.abf15ce3.js";import{u as a}from"./index.e5c73bca.js";import{w as h}from"./index.654bd828.js";import{A as u,i as n,l as k,o as m,c as d,a as t,w as o,e as _,m as p,b as f}from"./framework.11beae03.js";const b={class:"max-h-3xl w-full",version:"1.1",baseProfile:"full",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2px","text-anchor":"middle","font-family":"Commissioner, sans-serif",style:{"touch-action":"none"}},g=f('<circle id="white" fill="white" r="50" cx="50" cy="50"></circle><g id="sources"><circle r="8" cx="50" cy="10" fill="cyan"></circle><circle r="8" cx="85" cy="70" fill="magenta"></circle><circle r="8" cx="15" cy="70" fill="yellow"></circle><circle r="4" cx="50" cy="65" fill="black"></circle></g>',2),w={class:"cursor-pointer",id:"circles","stroke-linecap":"round"},v=["r","stroke-dashoffset","stroke-dasharray","fill"],$=["r","stroke-dashoffset","stroke-dasharray","fill"],N=["r","stroke-dashoffset","stroke-dasharray","fill"],B=["stroke-dashoffset","stroke-dasharray","fill"],C=f('<g class="font-bold text-xs pointer-events-none select-none" id="labels" fill="white"><text x="49.5" y="14">C</text><text x="15" y="74">Y</text><text x="85" y="74">M</text><text class="text-4px" x="50" y="66.5">K</text></g>',1),z={__name:"cmyk",setup(M){const e=u({radius:30,len:n(()=>e.radius*Math.PI*2),max:100,c:a(l("cyan",50),0,100),m:a(l("magenta",50),0,100),y:a(l("yellow",50),0,100),k:a(l("black",10),0,100),cmyk:n(()=>`device-cmyk(${e.c}% ${e.m}% ${e.y}% ${e.k}% / 100%)`),hex:n(()=>h(e.cmyk).toHex())});function s(c){return i=>{e[c]=Number(e[c])+(Number(i.delta[0])-Number(i.delta[1]))}}return(c,i)=>{const y=x,r=k("drag");return m(),d("div",{class:"fullscreen-container mb-8 p-4 rounded-3xl transition-all duration-800 ease-out",id:"screen",style:p({backgroundColor:e.hex})},[(m(),d("svg",b,[g,t("g",w,[o(t("circle",{class:"mix-blend-multiply cursor-pointer",id:"c",r:e.radius,stroke:"cyan","stroke-dashoffset":e.len-e.len*(e.c/e.max),"stroke-dasharray":e.len,transform:"translate(50,33) rotate(-90)",fill:`hsla(180,100%,50%,${e.c/100})`},null,8,v),[[r,s("c")]]),o(t("circle",{class:"mix-blend-multiply cursor-pointer",id:"m",r:e.radius,stroke:"magenta","stroke-dashoffset":e.len-e.len*(e.m/e.max),"stroke-dasharray":e.len,transform:"translate(65,58) rotate(30)",fill:`hsla(300,100%,50%,${e.m/100})`},null,8,$),[[r,s("m")]]),o(t("circle",{class:"mix-blend-multiply cursor-pointer",id:"y",r:e.radius,stroke:"yellow","stroke-dashoffset":e.len-e.len*(e.y/e.max),"stroke-dasharray":e.len,transform:"translate(35,58) rotate(150)",fill:`hsla(60,100%,50%,${e.y/100})`},null,8,N),[[r,s("y")]]),o(t("circle",{class:"mix-blend-multiply",id:"k",r:"18",stroke:"black",transform:"translate(50,50) rotate(90)","stroke-dashoffset":18*Math.PI*2*(1-e.k/e.max),"stroke-dasharray":18*Math.PI*2,fill:`hsla(60,0%,0%,${e.k/100})`},null,8,B),[[r,s("k")]])]),C,_(y,{class:"select-none",y:42,transform:"scale(0.8) translate(12,4)",color:{c:e.c,m:e.m,y:e.y,k:e.k,a:1}},null,8,["color"])]))],4)}}};export{z as _};
