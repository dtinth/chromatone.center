import{n as g,j as b}from"./chunks/colors.60a0cd0b.js";import{n as $}from"./chunks/theory.dec16ed9.js";import{w as k}from"./chunks/index.654bd828.js";import{o as e,c as s,a as t,O as C,F as m,d,u as o,t as n,j,_ as O,A as B,p as S,k as V,f as x}from"./chunks/framework.88e9bc5c.js";import"./chunks/calculations.65ee336d.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.e7db086d.js";import"./chunks/index.bdd8aab5.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.3f37295f.js";import"./chunks/audio.91866368.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.02aa6511.js";import"./chunks/AutoPanner.d44b63e1.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/index.018e3fa0.js";import"./chunks/index.be7eb4a8.js";const z="/assets/color-names.f53006f2.svg",A="/assets/palette.4b85b75f.svg",N={class:"flex flex-col relative"},D={class:"absolute"},I={class:"w-full",version:"1.1",baseProfile:"full",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg",style:{"touch-action":"none"}},M=t("defs",null,[t("filter",{id:"shadowButton",x:"-50%",height:"200%",width:"300%"},[t("feDropShadow",{dx:"0",dy:"1",stdDeviation:"2","flood-color":"#2225"})])],-1),P=["transform"],R=["fill"],T={class:"text pointer-events-none",transform:"translate(10 22)",fill:"currentColor"},q={class:"font-bold text-12px"},E={class:"font-bold text-14px",transform:"translate(80 65)","text-anchor":"end"},F=["transform"],L={key:0},H={class:"text-8px"},J={class:"text-6px",dx:"2",fill:"#000a","text-anchor":"end"},K={class:"code text-8px",transform:"translate(80 -2)","text-anchor":"end"},G={y:"10"},U={y:"22"},W={__name:"cards",props:{list:Object,langs:Object},setup(r){const i=Object.values(r.list),l=[[0,0],[1,0],[2,0],[3,0],[3,1],[3,2],[3,3],[2,3],[1,3],[0,3],[0,2],[0,1]];return(h,_)=>(e(),s("div",N,[t("div",D,[C(h.$slots,"default")]),(e(),s("svg",I,[M,(e(),s(m,null,d(l,(c,a)=>t("g",{class:"card",key:c,transform:`translate(${c[0]*100} ${c[1]*100})`},[t("rect",{class:"opacity-60 hover-(opacity-100) transition-all duration-200 ease",style:{filter:"url(#shadowButton)"},x:"1",y:"1",width:"98",height:"98",rx:"12",fill:o(g)(a,3)},null,8,R),t("g",T,[t("text",q,n(o(i)[a].en),1),t("text",E,n(o($)[a]),1),(e(!0),s(m,null,d(r.langs,(w,p,v)=>(e(),s("g",{class:"other",key:w,transform:`translate(0 ${v*12+8})`},[p!="nm"?(e(),s("text",L,[t("tspan",H,n(o(i)[a][p]),1),t("tspan",J,n(p),1)])):j("",!0)],8,F))),128)),t("g",K,[t("text",null,n(a*30)+"°",1),t("text",G,n(o(i)[a].nm),1),t("text",U,n(o(k)(o(g)(a,3)).toHex()),1)])])],8,P)),64))]))]))}};const y=r=>(S("data-v-bd8e2a18"),r=r(),V(),r),Y={class:"overflow-y-scroll w-full my-16 max-w-100vw"},Z={class:"text-center w-full"},Q={class:"bg-gray-200 bg-opacity-20"},X=y(()=>t("th",null,"#",-1)),tt=y(()=>t("th",null,"Hue",-1)),et={class:"p-4"},st={__name:"names",props:{list:Object,langs:Object},setup(r){return(f,i)=>(e(),s("div",Y,[t("table",Z,[t("tr",Q,[X,tt,(e(!0),s(m,null,d(r.langs,l=>(e(),s("th",{class:"p-4",key:l},n(l),1))),128))]),(e(!0),s(m,null,d(r.list,(l,h,_)=>(e(),s("tr",{key:h,style:B({backgroundColor:o(b)(_,12)})},[t("td",null,n(_+1),1),t("td",null,n(_*30)+"º",1),(e(!0),s(m,null,d(l,c=>(e(),s("td",et,n(c),1))),256))],4))),128))])]))}},ot=O(st,[["__scopeId","data-v-bd8e2a18"]]),u={langs:{nm:"Wavelength",en:"English",fr:"Français",es:"Español",ru:"Русский",th:"ภาษาไทย"},colors:{red:{nm:"700 nm",en:"Red",fr:"Rouge",es:"Rojo",ru:"Красный",th:"สีแดง"},orange:{nm:"600 nm",en:"Orange",fr:"Orange",es:"Naranja",ru:"Оранжевый",th:"สีส้ม"},yellow:{nm:"570 nm",en:"Yellow",fr:"Jaune",es:"Amarillo",ru:"Желтый",th:"สีเหลือง"},lime:{nm:"564 nm",en:"Lime",fr:"Chartreuse",es:"Lima",ru:"Лаймовый",th:"สีมะนาว"},green:{nm:"525 nm",en:"Green",fr:"Vert",es:"Verde",ru:"Зеленый",th:"สีเขียว"},mint:{nm:"505 nm",en:"Mint",fr:"Turquoise",es:"Primavera",ru:"Мятный",th:"สีเขียวมิ้นท์"},cyan:{nm:"490 nm",en:"Cyan",fr:"Cyan",es:"Cian",ru:"Голубой",th:"สีฟ้าอ่อน"},azure:{nm:"488 nm",en:"Azure",fr:"Azure",es:"Azure",ru:"Лазурный",th:"สีฟ้า"},blue:{nm:"450 nm",en:"Blue",fr:"Bleu",es:"Azul",ru:"Синий",th:"สีน้ำเงิน"},violet:{nm:"400 nm",en:"Violet",fr:"Violet",es:"Violeta",ru:"Фиолетовый",th:"สีม่วง"},magenta:{nm:"-",en:"Magenta",fr:"Magenta",es:"Magenta",ru:"Пурпурный",th:"สีม่วงแดง"},rose:{nm:"-",en:"Rose",fr:"Cramoisi",es:"Carmesí",ru:"Малиновый",th:"สีแดงเย็น"}}},nt=t("img",{src:z},null,-1),rt=t("p",null,[t("a",{href:"https://en.wikipedia.org/wiki/Tertiary_color",target:"_blank",rel:"noreferrer"},"https://en.wikipedia.org/wiki/Tertiary_color")],-1),at=t("img",{src:A,width:"400",height:"400"},null,-1),Bt=JSON.parse('{"title":"Color names","description":"Know how to name any color of 12 equally spaced hues","frontmatter":{"title":"Color names","description":"Know how to name any color of 12 equally spaced hues","date":"2021-08-01T00:00:00.000Z","cover":"color-names.svg"},"headers":[],"relativePath":"theory/color/names/index.md","filePath":"theory/color/names/index.md","lastUpdated":1677916913000}'),lt={name:"theory/color/names/index.md"},St=Object.assign(lt,{setup(r){return(f,i)=>(e(),s("div",null,[x(W,{list:o(u).colors,langs:o(u).langs},null,8,["list","langs"]),x(ot,{list:o(u).colors,langs:o(u).langs},null,8,["list","langs"]),nt,rt,at]))}});export{Bt as __pageData,St as default};
