import{_ as k,A as z,i as v,o as i,c as r,a,t as c,u as l,g as y,n as H,F as b,r as S,q as $,w as B,y as C,H as N,D as h,m as _,p as F,h as V}from"./framework.11beae03.js";import{g as j,n as u,b as q,e as m}from"./colors.027ae8bf.js";import{r as A}from"./calculations.65ee336d.js";import{a as M,b as D,n as p,f as E}from"./theory.61e5aadb.js";import{w}from"./index.654bd828.js";const L=e=>(F("data-v-f2f6e4ab"),e=e(),V(),e),P={key:0,class:"flex justify-center my-2 px-2"},G={class:"absolute right-4"},J={class:"font-bold text-xl flex-1 text-center"},K=L(()=>a("defs",null,[a("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[a("feDropShadow",{dx:"0",dy:"3",stdDeviation:"4","flood-color":"#2225"})])],-1)),O={class:"white"},Q=["transform","onMousedown"],R=["fill"],U=["fill"],W=["fill"],X=["font-weight"],Y={class:"black"},Z=["transform","onMousedown"],tt=["fill","data-check"],et=["fill","stroke"],ot=["fill","font-weight"],st={y:"176",x:"45"},lt={y:"50",x:"45"},at={__name:"keys",props:{chroma:{type:String,default:"100000000000"},letters:{type:Boolean,defualt:!1},pitch:{type:Number,default:0},scale:{type:String},roman:{type:String,default:""},title:{type:Boolean,default:!0},playAll:{type:Boolean,default:!1}},emits:["update:pitch"],setup(e,{emit:nt}){const n=e,d=z({white:[3,5,7,8,10,0,2],black:[4,6,null,9,11,1],chroma:v(()=>A(n.chroma.split(""),-n.pitch)),scale:v(()=>A(j.chroma.split(""),-n.pitch)),title:v(()=>{var o,s;return(o=M.get(n.chroma))!=null&&o.empty?(s=D.get(n.chroma))!=null&&s.empty?"":D.get(n.chroma).aliases[0]:M.get(n.chroma).aliases[0]})});function g(o){return o!=null&&d.chroma[o]=="1"}function I(o){return n.scale&&o!=null&&d.chroma[o]=="1"}function f(o,s){return o==null?"transparent":o==n.pitch?w(u(o,4)).toHex():g(o)&&!s?w(u(o,3.5)).toHex():p[o].length!=2?"#eee":"#999"}return(o,s)=>(i(),r("div",{class:"flex flex-col m-1 rounded-2xl cursor-pointer transition-all duration-300 ease relative select-none touch-none px-2",onMousedown:s[0]||(s[0]=t=>e.playAll&&h(l(q)(e.chroma,e.pitch))),onTouchend:s[1]||(s[1]=t=>e.playAll&&h(l(m)(e.chroma,e.pitch))),onTouchcancel:s[2]||(s[2]=t=>e.playAll&&h(l(m)(e.chroma,e.pitch))),onMouseup:s[3]||(s[3]=t=>e.playAll&&h(l(m)(e.chroma,e.pitch))),onMouseleave:s[4]||(s[4]=t=>e.playAll&&h(l(m)(e.chroma,e.pitch))),style:_({backgroundColor:l(u)(e.pitch,2,1,.5)})},[e.title?(i(),r("div",P,[a("div",G,c(e.roman),1),a("div",J,c(l(p)[e.pitch])+c(d.title),1)])):y("",!0),(i(),r("svg",{class:H(["w-full mt-2",{letters:e.letters}]),id:"chroma-keys",version:"1.1",baseProfile:"full",viewBox:"-10 -20 720 360",xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner, sans-serif","font-weight":"200","font-size":"40","text-anchor":"middle","dominant-baseline":"middle"},[K,a("g",O,[(i(!0),r(b,null,S(d.white,(t,x)=>(i(),r("g",{class:"key",key:t,transform:`translate(${x*100+5} 30)`,onMousedown:$(T=>o.$emit("update:pitch",t),["stop"])},[a("rect",{class:"transition-all duration-300 ease-out",width:"90",height:"290",rx:"45",fill:f(t,!0),style:{filter:"url(#shadowButton)"}},null,8,R),a("circle",{class:"transition-all duration-300 ease-out",cy:"245",cx:"45",r:"45",fill:f(t)},null,8,U),B(a("text",{class:"pointer-events-none",y:"250",x:"45",fill:l(w)(l(u)(t)).isDark()?"white":"black"},[a("tspan",{"font-weight":t==e.pitch?800:200},c(l(p)[t]),9,X)],8,W),[[C,g(t)]])],40,Q))),128))]),a("g",Y,[(i(!0),r(b,null,S(d.black,(t,x)=>(i(),r("g",{class:"key",key:t,transform:`translate(${x*100+55} -10)`,onMousedown:$(T=>o.$emit("update:pitch",t),["stop"])},[t?(i(),r("rect",{key:0,class:"transition-all duration-300 ease-out",width:"90",height:"220",rx:"45",style:{filter:"url(#shadowButton)"},fill:f(t,!0),"data-check":t},null,8,tt)):y("",!0),t?(i(),r("circle",{key:1,class:"transition-all duration-300 ease-out",cy:"175",cx:"45",r:"45",fill:f(t),"stroke-width":"8",stroke:I(t)?l(u)(t,3):"transparent"},null,8,et)):y("",!0),B(a("text",{class:"pointer-events-none",fill:l(w)(l(u)(t)).isDark()?"white":"black","font-weight":t==e.pitch?800:200},[a("tspan",st,c(l(p)[t]),1),a("tspan",lt,c(l(E)[t]),1)],8,ot),[[C,g(t)]])],40,Z))),128))])],2)),N(o.$slots,"default",{},void 0,!0)],36))}},ht=k(at,[["__scopeId","data-v-f2f6e4ab"]]);export{ht as _};
