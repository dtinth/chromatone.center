import{_}from"./svg-info.e18a1a99.js";import{b as i}from"./index.abf15ce3.js";import{u as a}from"./index.e5c73bca.js";import{A as u,i as n,l as h,o as d,c as f,a as r,w as c,e as x,m as g,b}from"./framework.11beae03.js";const k={class:"max-h-3xl w-full",version:"1.1",baseProfile:"full",viewBox:"-5 -5 110 110",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2px",style:{"touch-action":"none"},"font-family":"Commissioner, sans-serif"},p=b('<circle id="black" r="50" cx="50" cy="50"></circle><g id="sources"><circle r="8" cx="15" cy="29" fill="#ff0000"></circle><circle r="8" cx="85.5" cy="29" fill="#00ff00"></circle><circle r="8" cx="50" cy="91" fill="#0000ff"></circle></g>',2),y=["stroke-dasharray"],w=["r","fill","stroke-dashoffset"],v=["r","fill","stroke-dashoffset"],$=["r","fill","stroke-dashoffset"],N={class:"font-bold text-xs select-none",id:"text"},B=r("text",{x:"15",y:"33","text-anchor":"middle",fill:"white"},"R",-1),C=r("text",{x:"50",y:"95","text-anchor":"middle",fill:"white"},"B",-1),D=r("text",{x:"85",y:"33","text-anchor":"middle",fill:"white"},"G",-1),E={__name:"rgb",setup(S){const e=u({radius:30,len:n(()=>e.radius*Math.PI*2),max:255,r:a(i("red",190),0,255),g:a(i("gree",190),0,255),b:a(i("blue",190),0,255),rgb:n(()=>`rgb(${e.r},${e.g},${e.b})`)});function t(s){return o=>{e[s]=Number(e[s])+(Number(o.delta[0])-Number(o.delta[1]))}}return(s,o)=>{const m=_,l=h("drag");return d(),f("div",{class:"fullscreen-container mb-8 p-4 rounded-3xl transition-all duration-800 ease-out",id:"screen",style:g({backgroundColor:e.rgb})},[(d(),f("svg",k,[p,r("g",{class:"cursor-pointer",id:"circles","stroke-linecap":"round","stroke-dasharray":e.len},[c(r("circle",{class:"mix-blend-lighten",id:"r",r:e.radius,fill:`rgb(${e.r},0,0)`,stroke:"#ff0000","stroke-dashoffset":e.len-e.len*(e.r/e.max),transform:"translate(35,40) rotate(-150)"},null,8,w),[[l,t("r")]]),c(r("circle",{class:"mix-blend-lighten",id:"g",r:e.radius,fill:`rgb(0,${e.g},0)`,stroke:"#00ff00","stroke-dashoffset":e.len-e.len*(e.g/e.max),transform:"translate(65,40) rotate(-30)"},null,8,v),[[l,t("g")]]),c(r("circle",{class:"mix-blend-lighten",id:"b",r:e.radius,fill:`rgb(0,0,${e.b})`,stroke:"#0000ff","stroke-dashoffset":e.len-e.len*(e.b/e.max),transform:"translate(50,68) rotate(90)"},null,8,$),[[l,t("b")]])],8,y),r("g",N,[B,C,D,x(m,{transform:"scale(0.7) translate(21,12)",color:e.rgb,y:46},null,8,["color"])])]))],4)}}};export{E as _};
