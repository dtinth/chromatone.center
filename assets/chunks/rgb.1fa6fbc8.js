import{_ as m}from"./svg-info.6f10f01b.js";import{i as u,r as n,j as h,v as f,b as d,F as r,Z as i,T as x,f as g,R as b}from"./framework.7e747cd7.js";import{b as a}from"./index.c0ca431c.js";import{u as c}from"./index.0b97d2b2.js";const k={class:"max-h-3xl w-full",version:"1.1",baseProfile:"full",viewBox:"-5 -5 110 110",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2px",style:{"touch-action":"none"},"font-family":"Commissioner, sans-serif"},p=b('<circle id="black" r="50" cx="50" cy="50"></circle><g id="sources"><circle r="8" cx="15" cy="29" fill="#ff0000"></circle><circle r="8" cx="85.5" cy="29" fill="#00ff00"></circle><circle r="8" cx="50" cy="91" fill="#0000ff"></circle></g>',2),y=["stroke-dasharray"],v=["r","fill","stroke-dashoffset"],w=["r","fill","stroke-dashoffset"],$=["r","fill","stroke-dashoffset"],j={class:"font-bold text-xs select-none",id:"text"},C=r("text",{x:"15",y:"33","text-anchor":"middle",fill:"white"},"R",-1),N=r("text",{x:"50",y:"95","text-anchor":"middle",fill:"white"},"B",-1),R=r("text",{x:"85",y:"33","text-anchor":"middle",fill:"white"},"G",-1),D={__name:"rgb",setup(B){const s=u({radius:30,len:n(()=>s.radius*Math.PI*2),max:255,r:c(a("red",190),0,255),g:c(a("gree",190),0,255),b:c(a("blue",190),0,255),rgb:n(()=>`rgb(${s.r},${s.g},${s.b})`)});function e(t){return l=>{s[t]=Number(s[t])+(Number(l.delta[0])-Number(l.delta[1]))}}return(t,l)=>{const _=m,o=h("drag");return f(),d("div",{class:"fullscreen-container mb-8 p-4 rounded-3xl transition-all duration-800 ease-out",id:"screen",style:g({backgroundColor:s.rgb})},[(f(),d("svg",k,[p,r("g",{class:"cursor-pointer",id:"circles","stroke-linecap":"round","stroke-dasharray":s.len},[i(r("circle",{class:"mix-blend-lighten",id:"r",r:s.radius,fill:`rgb(${s.r},0,0)`,stroke:"#ff0000","stroke-dashoffset":s.len-s.len*(s.r/s.max),transform:"translate(35,40) rotate(-150)"},null,8,v),[[o,e("r")]]),i(r("circle",{class:"mix-blend-lighten",id:"g",r:s.radius,fill:`rgb(0,${s.g},0)`,stroke:"#00ff00","stroke-dashoffset":s.len-s.len*(s.g/s.max),transform:"translate(65,40) rotate(-30)"},null,8,w),[[o,e("g")]]),i(r("circle",{class:"mix-blend-lighten",id:"b",r:s.radius,fill:`rgb(0,0,${s.b})`,stroke:"#0000ff","stroke-dashoffset":s.len-s.len*(s.b/s.max),transform:"translate(50,68) rotate(90)"},null,8,$),[[o,e("b")]])],8,y),r("g",j,[C,N,R,x(_,{transform:"scale(0.7) translate(21,12)",color:s.rgb,y:46},null,8,["color"])])]))],4)}}};export{D as _};