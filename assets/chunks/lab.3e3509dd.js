import{_ as E}from"./svg-info.76b732d7.js";import{J as _,b as d,r as G,N as R,y as M,o as l,c as i,A as z,a as t,F as w,d as m,u as s,z as f,n as O,f as B,w as T,a6 as V,t as x}from"./framework.88e9bc5c.js";import{w as p}from"./index.654bd828.js";import{u as y}from"./index.bdd8aab5.js";const q={id:"gray",x1:"0",x2:"0",y1:"0",y2:"1"},I=["stop-color","offset"],J={id:"green-red",x1:"0",x2:"1",y1:"0",y2:"0"},P=["stop-color","offset"],U={id:"blue-yellow",x1:"0",x2:"0",y1:"0",y2:"1"},j=["stop-color","offset"],K={id:"square"},Q=["x","y","rx","width","height","onMousedown","fill","stroke"],W={class:"cursor-pointer",id:"current"},X=["fill"],Y={class:"cursor-pointer",id:"b-range"},Z={id:"b",x:"-15",y:"0",width:"10",height:"100",fill:"url(#blue-yellow)"},ee=["transform"],te=t("line",{x1:"-15",x2:"-5",stroke:"currentColor","stroke-linecap":"round"},null,-1),oe=t("line",{x1:"-15",x2:"100",stroke:"currentColor","stroke-linecap":"round","stroke-width":"0.1px"},null,-1),re={fill:"currentColor","font-size":"3px",x:"-10",y:"-4","font-weight":"bold"},se={class:"cursor-pointer",id:"l-range"},ne={id:"l",x:"105",y:"0",width:"10",height:"100",fill:"url(#gray)"},le=["transform"],ie=t("line",{x1:"105",x2:"115",stroke:"currentColor","stroke-linecap":"round"},null,-1),ae={fill:"currentColor","font-size":"3px",x:"110",y:"-3","font-weight":"bold"},ce={class:"cursor-pointer",id:"a-range"},de={id:"a",x:"0",y:"-15",width:"100",height:"10",fill:"url(#green-red)"},ue=["transform"],he=t("line",{y1:"-15",y2:"-5",stroke:"currentColor","stroke-linecap":"round"},null,-1),_e=t("line",{y1:"-15",y2:"100",stroke:"currentColor","stroke-linecap":"round","stroke-width":"0.1px"},null,-1),fe={fill:"currentColor","font-size":"3px",x:"7",y:"-9.5","font-weight":"bold"},xe=["transform"],pe=t("rect",{x:"-20",y:"-2.5",width:"40",height:"4",fill:"#ccc",stroke:"currentColor","stroke-width":"0.2"},null,-1),ge=["width"],we={class:"uppercase"},me=["transform"],ye=t("rect",{x:"-20",y:"-2.5",width:"40",height:"4",fill:"#ccc",stroke:"currentColor","stroke-width":"0.2"},null,-1),ke=["width"],be={class:"uppercase"},Ae={__name:"lab",setup(ve){const r=y(_("lab-range",100),100,300),b=d(()=>-r.value/2),v=d(()=>r.value/2),e=G({current:_("color-current","#fffff"),max:{l:100,res:36},l:y(_("color-l",50),0,100),a:y(_("color-a",20),b,v),b:y(_("color-b",20),b,v),lab:d(()=>({l:e.l,a:e.a,b:e.b,alpha:1})),hex:d(()=>p(e.lab).toHex()),width:100,height:100,res:y(_("lab-res",10),10,36),steps:{a:d(()=>C(e.res)),b:d(()=>C(e.res))},dark:d(()=>p(e.lab).isDark())});function k(o,g,c){return p({l:o,a:g*r.value,b:-c*r.value,alpha:1}).toHex()}function C(o){return[...Array(o)].map((g,c)=>(c-o/2)/o)}function H(o){e.b-=o.delta[1]/2,e.a+=o.delta[0]/2}function A(o){e.res+=o.delta[0]}function F(o){r.value+=o.delta[0]}function L(o){e.l-=o.delta[1]/8}function N(o){e.a+=o.delta[0]/2}function S(o){e.b-=o.delta[1]/2}function $(o,g,c){e.a=g*r.value,e.b=-c*r.value,e.current=e.hex}return R(()=>{e.current=e.hex}),(o,g)=>{const c=E,u=M("drag");return l(),i("div",{class:"fullscreen-container mb-8 p-4 rounded-xl transition-all duration-400 ease-in-out",id:"screen",style:z({backgroundColor:e.hex})},[(l(),i("svg",{class:"max-h-3xl w-full select-none",version:"1.1",baseProfile:"full",viewBox:"-20 -20 140 130",xmlns:"http://www.w3.org/2000/svg","stroke-width":"2px","font-family":"Commissioner, sans-serif","text-anchor":"middle","dominant-baseline":"middle",style:z([{"touch-action":"none","user-select":"none"},{color:e.dark?"white":"black"}])},[t("defs",null,[t("linearGradient",q,[(l(),i(w,null,m(10,(n,a)=>t("stop",{key:n,"stop-color":s(p)({l:100-10*a,a:e.a,b:e.b,alpha:1}).toHex(),offset:a*10+"%"},null,8,I)),64))]),t("linearGradient",J,[(l(),i(w,null,m(10,(n,a)=>t("stop",{key:n,"stop-color":s(p)({l:e.l,a:a*s(r)/10-s(r)/2,b:e.b,alpha:1}).toHex(),offset:a*10+"%"},null,8,P)),64))]),t("linearGradient",U,[(l(),i(w,null,m(10,(n,a)=>t("stop",{key:n,"stop-color":s(p)({l:e.l,a:e.a,b:(10-a)*s(r)/10-s(r)/2,alpha:1}).toHex(),offset:a*10+"%"},null,8,j)),64))])]),f((l(),i("g",K,[(l(!0),i(w,null,m(e.steps.a,(n,a)=>(l(),i("g",{class:"row",key:n+a},[(l(!0),i(w,null,m(e.steps.b,(h,D)=>(l(),i("rect",{class:O(["cursor-pointer",{current:e.current==k(e.l,n,h)}]),key:h+D,x:a*e.width/e.res,y:D*e.height/e.res,rx:e.current==k(e.l,n,h)?10:0,width:e.width/e.res,height:e.height/e.res,onMousedown:Ce=>$(e.l,n,h),fill:k(e.l,n,h),stroke:k(e.l,n,h),"stroke-width":"0.1px"},null,42,Q))),128))]))),128)),B(V,{name:"fade"},{default:T(()=>[t("g",W,[t("rect",{x:30,y:30,width:40,height:40,fill:e.hex},null,8,X),B(c,{color:e.lab,y:36},null,8,["color"])])]),_:1})])),[[u,H]]),t("g",Y,[f(t("rect",Z,null,512),[[u,S]]),t("g",{class:"pointer-events-none",transform:`translate(0,${100*(-e.b+s(r)/2)/s(r)})`},[te,oe,t("text",re,"B "+x(e.b.toFixed(1)),1)],8,ee)]),t("g",se,[f(t("rect",ne,null,512),[[u,L]]),t("g",{class:"pointer-events-none",transform:`translate(0,${100-e.l})`},[ie,t("text",ae,"L "+x(e.l.toFixed(1)),1)],8,le)]),t("g",ce,[f(t("rect",de,null,512),[[u,N]]),t("g",{class:"pointer-events-none",transform:`translate(${100*(e.a+s(r)/2)/s(r)},0)`},[he,_e,t("text",fe,"A "+x(e.a.toFixed(1)),1)],8,ue)]),f((l(),i("g",{class:"cursor-pointer",id:"res",transform:"translate(20, 105)","font-size":"2"},[pe,t("rect",{x:"-20",y:"-2.5",width:40*(e.res/36),height:"4",fill:"#aaa",stroke:"currentColor","stroke-width":"0.2"},null,8,ge),t("text",we,"RESOLUTION "+x(e.res)+"x"+x(e.res),1)],8,xe)),[[u,A]]),f((l(),i("g",{class:"cursor-pointer",id:"range",transform:"translate(80, 105)","font-size":"2"},[ye,t("rect",{x:"-20",y:"-2.5",width:40*(s(r)/300),height:"4",fill:"#aaa",stroke:"currentColor","stroke-width":"0.2"},null,8,ke),t("text",be,"AB RANGE "+x(s(r)),1)],8,me)),[[u,F]])],4))],4)}}};export{Ae as _};
