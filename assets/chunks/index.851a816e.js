import{_ as Z}from"./transport.32885b0e.js";import{v as l,b as a,F as r,Q as T,i as E,r as M,q as A,j as D,Z as y,N as o,a as k,H as N,B as b,J as I,X as $,P as U,T as C,C as V,O as L,$ as J,A as Q,c as G,_ as K,M as W,f as Y,z as tt}from"./framework.7e747cd7.js";import{_ as et}from"./trash.43d77d50.js";import{_ as ot,a as nt,b as st,c as lt,d as rt}from"./angle-right.1823999e.js";import{i as B}from"./state.181c131c.js";import{u as q}from"./index.0b97d2b2.js";import{j as H,n as it}from"./colors.abbc28c6.js";import{t as X}from"./tempo.fceb0f15.js";import{u as at,m as ut,t as dt}from"./sequence.5b4cde29.js";import{r as ct}from"./midiRender.6c0c3f09.js";import{b as mt}from"./index.c0ca431c.js";const ft={style:{"vertical-align":"middle"},viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ht=r("path",{fill:"currentColor",d:"M15 4.594L13.281 6.28L8.562 11H4v10h4.563l4.718 4.719L15 27.406zm-2 4.843v13.126L9.719 19.28L9.406 19H6v-6h3.406l.313-.281zm7.219 2.344L18.78 13.22L21.563 16l-2.782 2.781l1.438 1.438L23 17.437l2.781 2.782l1.438-1.438L24.437 16l2.782-2.781l-1.438-1.438L23 14.562z"},null,-1),vt=[ht];function yt(t,w){return l(),a("svg",ft,vt)}const pt={name:"la-volume-off",render:yt},xt={class:"bar cursor-pointer","font-size":"32px"},bt=["x1","x2","y1","y2","stroke-width","stroke"],wt=["x2","y1","y2","stroke"],gt=["x1","x2","y1","y2","stroke-width","stroke"],kt={key:0,class:"all"},$t=["cx","cy","r"],_t=["cx","cy"],Ct=["transform"],Nt=["fill"],Mt={transform:"translate(0 10)",fill:"currentColor","text-anchor":"middle"},Vt=T({__name:"bar",props:{modelValue:{type:[Number,String],default:.1},step:{type:Number,default:.1},min:{type:Number,default:0},max:{type:Number,default:1},width:{type:Number,default:100},height:{type:Number,default:50},vector:{type:Array,default:[1,-1]},showPositions:{type:Boolean,default:!1},ratio:{type:Number,default:200},every:{type:Number,default:null},showCenter:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:w}){const e=t,c=E({inner:q((Number(e.modelValue)-e.min)/(e.max-e.min),0,1),proportion:M(()=>e.inverted?(Number(e.modelValue)-e.max)/(e.min-e.max):(Number(e.modelValue)-e.min)/(e.max-e.min)),pos:M(()=>c.proportion*e.width)});function n(u){c.inner+=(e.vector[0]*u.delta[0]+e.vector[1]*u.delta[1])/e.ratio}function _(u){c.inner+=u*e.step/(e.max-e.min)}A(()=>c.inner,u=>{let i=u*(e.max-e.min)+e.min;w("update:modelValue",Math.round(i/e.step)*e.step)});const v=M(()=>{let u=(e.max-e.min)/e.step,i=[];for(let s=0;s<=1;s+=1/u)i.push(s*e.width);return i});return(u,i)=>{const s=D("drag");return y((l(),a("g",xt,[r("line",{class:"add",onMousedown:i[0]||(i[0]=m=>_(1)),x1:t.inverted?0:c.pos,x2:t.inverted?c.pos:t.width,y1:t.height/2,y2:t.height/2,"stroke-linecap":"round","stroke-width":t.height,stroke:o(B)?"#1114":"#fff8"},null,40,bt),r("line",{class:"pointer-events-none",x1:0,x2:t.width,y1:t.height/2,y2:t.height/2,"stroke-linecap":"round","stroke-width":18,stroke:o(B)?"#2228":"#eee"},null,8,wt),r("line",{class:"subtract",onMousedown:i[1]||(i[1]=m=>_(-1)),x1:t.inverted?t.width:t.showCenter?t.width/2:0,x2:c.pos,y1:t.height/2,y2:t.height/2,"stroke-linecap":"round","stroke-width":t.height,stroke:o(B)?"#3338":"#ddd8"},null,40,gt),t.showPositions?(l(),a("g",kt,[(l(!0),a(k,null,N(v.value,(m,f)=>(l(),a("circle",{key:m,cx:m,cy:t.height/2,r:t.every&&f%t.every==0?4:2,fill:"currentColor",opacity:"0.5"},null,8,$t))),128))])):b("",!0),t.showCenter?(l(),a("circle",{key:1,cx:t.width/2,cy:t.height/2,r:"4",opacity:"0.5",fill:"currentColor"},null,8,_t)):b("",!0),r("g",{class:"mover",transform:`translate(${c.pos} ${t.height/2})`},[r("circle",{r:"25","stroke-width":"0","stroke-opacity":"0.5",stroke:"currentColor",style:{filter:"url(#shadowButton)"},fill:o(B)?"#333":"#eee"},null,8,Nt),r("g",Mt,[I(u.$slots,"default",{},()=>[r("text",null,$(t.modelValue),1)])])],8,Ct)])),[[s,n]])}}}),Bt=["transform"],zt=["opacity"],At=["width","fill"],St=["stroke","fill"],Lt=["fill"],jt=["stroke"],Dt=["onDblclick","data-sub"],Rt=["transform"],Pt=["width","x","fill"],Xt=["transform","fill","opacity"],Ot=["x"],Tt=["fill","stroke"],Et={key:0,class:"transition-all duration-100 ease-out pointer-events-none",cx:0,cy:100,r:"3",fill:"currentColor",opacity:"0.8"},It={__name:"step",props:{proportion:{type:Number,default:1},step:{type:Number,default:1},subdivisions:{type:[Array,String],default:""},muted:{type:Boolean,default:!1},total:{type:Number,default:4},current:{type:[Number,String],default:0},mutes:{type:Object,default:{}},accented:{type:Boolean,default:!1},width:{type:Number,default:900},pad:{type:Number,default:50}},emits:["mute","subdivide","accent"],setup(t,{emit:w}){const e=t,c=M(()=>H(e.step+X.pitch/12*e.total,e.total,1));M(()=>e.subdivisions[0].includes("!"));const n=q(0,40,640),_=M(()=>Math.floor(n.value/40));A(_,(i,s)=>{if(i==s)return;let m=[];for(let f=0;f<i;f++)m.push(`${e.step}-${f}`);w("subdivide",m)});function v(i){if(i.tap){let s=i.event.currentTarget.dataset.sub;e.mutes[s]=!e.mutes[s]}n.value+=i.delta[0]-i.delta[1]}const u=M(()=>{let i=e.subdivisions[0]==e.current,s=e.subdivisions[0].split("-")[0],m=e.current.split("-")[0];return!e.mutes[e.subdivisions[0]]&&(i||s==m)});return(i,s)=>{const m=D("drag");return l(),a("g",{class:"cursor-pointer",transform:`translate(${t.proportion*t.step*t.width+t.pad},0)`},[r("g",{class:"step",opacity:t.muted?.1:1},[r("rect",{class:"transition-fill duration-100",onMousedown:s[0]||(s[0]=f=>i.$emit("mute")),width:t.proportion*t.width,height:"180",rx:"10",fill:u.value?t.muted?"transparent":c.value:"transparent"},null,40,At),r("circle",{class:"transition-all duration-100 ease-out",onMousedown:s[1]||(s[1]=f=>t.muted?i.$emit("mute"):i.$emit("accent")),cy:"35",cx:"0",r:"25","stroke-width":"4",stroke:c.value,fill:u.value?t.muted?"transparent":"currentColor":t.accented?c.value:o(B)?"#333":"#eee"},null,40,St),r("text",{class:"pointer-events-none transition-all duration-100 ease-out",y:"48","font-size":"40","text-anchor":"middle",x:"0",fill:u.value?o(B)?"#333":"#eee":"currentColor"},$(t.step+1),9,Lt),r("line",{class:"pointer-events-none",y1:"60",y2:"100","stroke-width":"8",stroke:c.value},null,8,jt),(l(!0),a(k,null,N(t.subdivisions,(f,d)=>y((l(),a("g",{class:"sub",key:f,onDblclick:p=>{i.$emit("subdivide",[`${f}-1`]),n.value=40},"data-sub":f},[r("line",{transform:`translate(${d*t.proportion*t.width/t.subdivisions.length}, 0)`,y1:"100",y2:"150","stroke-width":"1",stroke:"currentColor"},null,8,Rt),r("rect",{class:"transition-fill duration-100",width:t.proportion*t.width/t.subdivisions.length,height:"80",y:"100",rx:"10",x:d*t.proportion*t.width/t.subdivisions.length,fill:`hsla(0,0%,${90-d*80/t.subdivisions.length}%,${f==t.current?.9:.4})`},null,8,Pt),r("circle",{class:"transition-all duration-100 ease-out pointer-events-none",transform:`translate(${d*t.proportion*t.width/t.subdivisions.length}, 0)`,cx:0,cy:100,r:6,fill:f==t.current?"currentColor":t.muted?"transparent":c.value,opacity:t.mutes[f]?0:1,"stroke-width":"4","stroke-linecap":"round"},null,8,Xt),t.mutes[f]?b("",!0):(l(),a("text",{key:0,y:"140","font-size":"40","text-anchor":"middle",x:15+d*t.proportion*t.width/t.subdivisions.length,fill:"currentColor"},$(d+1),9,Ot))],40,Dt)),[[m,v]])),128)),r("circle",{class:"transition-all duration-100 ease-out pointer-events-none",cx:"0",cy:100,r:"10",fill:c.value,stroke:u.value?"currentColor":"transparent","stroke-width":"4",opacity:"0.8"},null,8,Tt)],8,zt),t.muted?(l(),a("circle",Et)):b("",!0)],8,Bt)}}},R=t=>(Q("data-v-a2e2f095"),t=t(),G(),t),Ut={class:"w-full bg-light-300 dark-bg-dark-800",version:"1.1",baseProfile:"full",viewBox:"0 0 1000 350",xmlns:"http://www.w3.org/2000/svg",style:{"user-select":"none","touch-action":"none"}},qt=R(()=>r("defs",null,[r("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[r("feDropShadow",{dx:"0",dy:"3",stdDeviation:"3","flood-color":"#2225"})])],-1)),Ht={key:0,class:"meter-bars",transform:"translate(40,15)"},Ft=["transform"],Zt={class:"signature"},Jt=R(()=>r("text",{fill:"currentColor","font-size":"45","text-anchor":"middle",y:"2"},"/",-1)),Qt={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"40px","text-anchor":"end",x:-10},Gt={fill:"currentColor","font-family":"Commissioner, sans-serif","font-size":"40px","text-anchor":"start",x:10},Kt=R(()=>r("circle",{r:"18",fill:"#5553"},null,-1)),Wt=R(()=>r("circle",{r:"18",fill:"#5553"},null,-1)),Yt={"text-anchor":"middle",style:{"user-select":"none",transition:"all 300ms ease"}},te=["opacity"],ee={class:"lines",transform:"translate(0,100)"},oe=["x1","x2"],ne=["x1","x2","stroke"],se={class:"arrows pointer-events-none"},le=["transform"],re=["cx","r","fill"],ie={class:"bottom",transform:"translate(40,290)"},ae={transform:"translate(-20 -30)"},ue=["transform"],de=["fill"],ce=["transform"],me=["fill"],fe=T({__name:"beat-bar",props:{order:{type:Number,default:0},loop:{type:Object,default:{over:4,under:4,sound:"A",volume:1}},maxRatio:{type:Number,default:1},editable:{type:Boolean,default:!1},mute:{type:String,default:null},accents:{type:String,default:null},width:{type:Number,default:920}},emits:["del","sound"],setup(t,{emit:w}){const e=t,c=M(()=>(1e3-e.width)/2),{seq:n}=at(e.loop,e.order,"bars"),_=["A","B","C","D","E"],v=U(_.findIndex(i=>{var s;return i==((s=n.meter)==null?void 0:s.sound)}));A(v,i=>{n.meter.sound=_[i]});const u=M(()=>{const i=1/n.meter.over;return i>=e.maxRatio?e.maxRatio:i});return A(()=>e.loop,i=>{n.meter={...e.loop}},{immediate:!0}),A(()=>e.accents,i=>{i&&i.split("").forEach((s,m)=>{n.mutes[m]=s=="0"||s==".",n.accents[m]=s=="2"||s=="X"})},{immediate:!0}),(i,s)=>{const m=Vt,f=ot,d=nt,p=pt,S=st,j=lt,O=rt,F=et,g=D("tooltip");return l(),a(k,null,[I(i.$slots,"default",{},void 0,!0),(l(),a("svg",Ut,[qt,t.editable?(l(),a("g",Ht,[y(C(m,{class:"over",modelValue:o(n).meter.over,"onUpdate:modelValue":s[0]||(s[0]=h=>o(n).meter.over=h),width:340,step:1,min:2,max:16,"show-positions":"",ratio:500,every:4},null,8,["modelValue"]),[[g,"Number of steps",void 0,{top:!0}]]),y(C(m,{class:"under",transform:"translate(580,0)",modelValue:o(n).meter.under,"onUpdate:modelValue":s[1]||(s[1]=h=>o(n).meter.under=h),width:340,step:1,min:1,max:16,"show-positions":"",ratio:500,every:4,inverted:"",vector:[-1,-1]},null,8,["modelValue"]),[[g,"Measure subdivision",void 0,{top:!0}]])])):b("",!0),r("g",{class:"info",transform:"translate(500,53)"},[y((l(),a("g",Zt,[Jt,r("text",Qt,$(o(n).meter.over),1),r("text",Gt,$(o(n).meter.under),1)])),[[g,"Time signature",void 0,{top:!0}]]),y((l(),a("g",{class:"cursor-pointer opacity-50 transition-all duration-200 ease hover-opacity-100",transform:"translate(70,-10)",onMousedown:s[2]||(s[2]=h=>o(n).rotateAccents(-1))},[Kt,C(f,{"font-size":"28",x:"-17",y:"-17"})],32)),[[g,"Rotate pattern backward",void 0,{top:!0}]]),y((l(),a("g",{class:"cursor-pointer opacity-50 transition-all duration-200 ease hover-opacity-100",transform:"translate(-70,-10)",onMousedown:s[3]||(s[3]=h=>o(n).rotateAccents(1))},[Wt,C(d,{"font-size":"28",x:"-17",y:"-17"})],32)),[[g,"Rotate pattern forward",void 0,{top:!0}]])],8,Ft),r("g",Yt,[r("g",{class:"steps",opacity:o(n).volume*.9+.1,transform:"translate(0,90)"},[r("g",ee,[r("line",{x1:c.value,x2:u.value*o(n).steps.length*t.width+c.value,stroke:"currentColor","stroke-width":"2"},null,8,oe),(l(!0),a(k,null,N(o(n).activeSteps,(h,x)=>(l(),a("line",{key:x,x1:u.value*Number(h)*t.width+c.value,x2:u.value*(o(n).activeSteps[x+1]||o(n).steps.length)*t.width+c.value,"stroke-width":"6",stroke:o(H)(Number(h)+Number(o(X).pitch)/12*o(n).steps.length,o(n).steps.length,1)},null,8,ne))),128))]),(l(!0),a(k,null,N(o(n).steps,(h,x)=>(l(),V(It,{key:x,onMute:P=>o(n).mutes[x]=!o(n).mutes[x],onSubdivide:P=>o(n).steps[x]=P,onAccent:P=>o(n).accents[x]=!o(n).accents[x],muted:o(n).mutes[x],step:x,accented:!!o(n).accents[x],mutes:o(n).mutes,current:o(n).current,subdivisions:h,proportion:u.value,total:o(n).steps.length,width:t.width,pad:c.value},null,8,["onMute","onSubdivide","onAccent","muted","step","accented","mutes","current","subdivisions","proportion","total","width","pad"]))),128)),r("g",se,[r("line",{class:"progress",transform:`translate(${c.value+o(n).progress*t.width*u.value*o(n).meter.over}, 0)`,"stroke-width":"4",stroke:"currentColor","stroke-linecap":"round",y2:180},null,8,le)]),r("circle",{cx:u.value*o(n).steps.length*t.width+c.value,cy:100,r:o(n).mutes[1]?4:8,fill:o(n).mutes[1]?"currentColor":o(it)(Number(o(X).pitch),4)},null,8,re)],8,te),r("g",ie,[y((l(),V(m,{class:"volume",modelValue:o(n).volume,"onUpdate:modelValue":s[4]||(s[4]=h=>o(n).volume=h),width:200,step:.01},{default:L(()=>[r("g",ae,[o(n).volume==0?(l(),V(p,{key:0})):(l(),V(S,{key:1}))])]),_:1},8,["modelValue"])),[[g,"Track volume",void 0,{bottom:!0}]]),y((l(),V(m,{class:"pan",transform:"translate(270,0)",modelValue:o(n).pan,"onUpdate:modelValue":s[5]||(s[5]=h=>o(n).pan=h),min:-1,max:1,width:200,step:.01,"show-center":""},{default:L(()=>[C(j,{x:-18,y:-30})]),_:1},8,["modelValue"])),[[g,"Track panning",void 0,{bottom:!0}]]),y((l(),V(m,{class:"sound",transform:"translate(540,0)",modelValue:v.value,"onUpdate:modelValue":s[6]||(s[6]=h=>v.value=h),width:265,step:1,min:0,max:4,"show-positions":"",every:1},{default:L(()=>{var h;return[r("text",null,$((h=o(n).meter)==null?void 0:h.sound),1)]}),_:1},8,["modelValue"])),[[g,"Click sound select",void 0,{bottom:!0}]]),C(J,{name:"fade"},{default:L(()=>[t.editable&&!o(n).isEuclidean?y((l(),a("g",{key:0,class:"reset cursor-pointer",onMousedown:s[7]||(s[7]=h=>o(n).reset()),transform:"translate(840, 0)"},[r("rect",{style:{filter:"url(#shadowButton)"},width:"50",height:"50","stroke-width":"3",rx:"40",fill:o(B)?"hsla(0,0%,30%,1)":"hsla(0,0%,100%,1)"},null,8,de),C(O,{"stroke-width":"0",y:"9",x:"9","font-size":"26"})],40,ue)),[[g,"Reset to Euclidean pattern",void 0,{bottom:!0}]]):b("",!0)]),_:1}),t.editable?y((l(),a("g",{key:0,class:"del cursor-pointer",onMousedown:s[8]||(s[8]=h=>i.$emit("del")),transform:"translate(900, 0)"},[r("rect",{style:{filter:"url(#shadowButton)"},width:"50",height:"50","stroke-width":"3",rx:"40",fill:o(B)?"hsla(0,0%,30%,1)":"hsla(0,0%,100%,1)"},null,8,me),C(F,{color:"hsla(0,25%,50%,1)","stroke-width":"0",y:"9",x:"9","font-size":"26"})],40,ce)),[[g,"Remove track",void 0,{bottom:!0}]]):b("",!0)])])]))],64)}}});const he=K(fe,[["__scopeId","data-v-a2e2f095"]]),z=mt("tempo-bar-loops-object",{0:{over:8,under:8,volume:1,sound:"A"},1:{over:3,under:3,volume:.5,sound:"B"}}),ve={class:"flex flex-wrap items-center w-full p-4 has-bg rounded-xl relative gap-6 bg-light-600 dark-bg-dark-500",id:"screen"},ye={key:1,class:"flex flex-col p-2 my-2 is-group"},pe={class:"flex flex"},xe={class:"flex flex-wrap justify-center"},be={class:"font-bold mx-2"},we={key:0},ge={class:"flex flex-wrap justify-center is-group m-1 text-xl p-2",style:{flex:"1 1 100%"}},ke=r("div",{class:"i-la-plus"},null,-1),$e=[ke],_e=r("div",{class:"i-la-file-download"},null,-1),Ce=[_e],Ne={key:1,class:"is-group m-2"},Me=["onClick"],Ve=["onClick"],Te={__name:"index",props:{meters:{type:Array,default:null},patterns:{type:Object,default:null},accents:{type:String,default:"XxXxXxXx"},mute:{type:String,delault:""},secondary:{type:Boolean,default:!1}},setup(t){const w=t,e=U(w.accents),c=E({over:4,under:4,volume:1,sound:"A"});A(()=>w.meters,v=>{if(v){let u=v[0].split("/");z.value={0:{over:Number(u[0]),under:Number(u[1]),volume:w.secondary?0:1,sound:"A"}}}},{immediate:!0}),A(()=>w.patterns,v=>{v&&(e.value=Object.keys(v)[0])},{immediate:!0});function n(v,u){z.value[0].over=v.length,z.value[0].under=u?u.split("/")[1]:v.length,e.value=v}function _(){z.value[Math.floor(Math.random()*1e4)]={...c}}return(v,u)=>{const i=Z,s=W("client-only"),m=D("tooltip");return l(),a("div",ve,[C(s,null,{default:L(()=>{var f;return[t.secondary?b("",!0):(l(),V(i,{key:0,secondary:!0})),(l(!0),a(k,null,N(o(z),(d,p)=>(l(),V(he,{class:"my-1 rounded-3xl shadow-lg min-h-36 max-h-30vh",style:{flex:"1 1 420px"},key:p,order:p,loop:d,maxRatio:o(ut),onDel:S=>delete o(z)[p],editable:!t.meters,accents:e.value,mute:t.mute},null,8,["order","loop","maxRatio","onDel","editable","accents","mute"]))),128)),t.patterns?(l(),a("div",ye,[r("div",pe,[(l(!0),a(k,null,N(e.value,(d,p)=>(l(),a("div",{class:"flex-1 p-1 border-1 border-current rounded-lg m-1 opacity-50",key:p,style:Y({opacity:d=="X"?1:.5,backgroundColor:d=="1"||d=="X"||d=="x"?"currentColor":"transparent"})},null,4))),128))]),r("div",xe,[(l(!0),a(k,null,N((f=t.patterns[e.value])==null?void 0:f.names,d=>(l(),a("div",{class:"p-1",key:d},[r("span",be,$(d.name),1),d.place?(l(),a("span",we,"("+$(d.place)+")",1)):b("",!0)]))),128))])])):b("",!0),r("div",ge,[t.meters?b("",!0):y((l(),a("button",{key:0,class:"text-button",onClick:u[0]||(u[0]=d=>_())},$e)),[[m,"Add new track",void 0,{bottom:!0}]]),y((l(),a("button",{class:"text-button flex items-center",onClick:u[1]||(u[1]=d=>o(ct)(o(dt)))},Ce)),[[m,"Export MIDI file",void 0,{bottom:!0}]]),t.meters&&t.meters.length>1?(l(),a("div",Ne,[(l(!0),a(k,null,N(t.meters,d=>(l(),a("button",{class:"text-button",onClick:p=>z.value=[{over:d.split("/")[0],under:d.split("/")[1],sound:"A",volume:1}]},$(d),9,Me))),256))])):b("",!0),(l(!0),a(k,null,N(t.patterns,(d,p)=>{var S,j;return l(),a("button",{class:tt(["text-button",{active:e.value==p}]),onClick:O=>n(p,d.meter)},$(((j=(S=d==null?void 0:d.names)==null?void 0:S[0])==null?void 0:j.name)||p),11,Ve)}),256))])]}),_:1})])}}};export{Te as _};