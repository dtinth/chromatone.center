import{_,o as a,c as s,a as e,t as o,g as c,p as u,h as g,F as r,r as f,e as k}from"./framework.fee3f2bd.js";const i=t=>(u("data-v-35c73dab"),t=t(),g(),t),y={class:"social"},x=["href"],$=i(()=>e("div",{class:"i-la-instagram icon"},null,-1)),w={class:"name"},I=["href"],S=i(()=>e("div",{class:"i-la-telegram icon"},null,-1)),B={class:"name"},N=["href"],O=i(()=>e("div",{class:"i-la-github icon"},null,-1)),j={class:"name"},p=["href"],E=i(()=>e("div",{class:"i-la-at icon"},null,-1)),A={class:"name"},F=["href"],C=i(()=>e("div",{class:"i-la-reddit icon"},null,-1)),L={class:"name"},P={__name:"social",props:{social:Object},setup(t){return(b,m)=>(a(),s("div",y,[t.social.instagram?(a(),s("a",{key:0,href:"https://instagram.com/"+t.social.instagram,target:"_blank"},[$,e("div",w,"@"+o(t.social.instagram),1)],8,x)):c("",!0),t.social.telegram?(a(),s("a",{key:1,href:"https://t.me/"+t.social.telegram,target:"_blank"},[S,e("div",B,o(t.social.telegram),1)],8,I)):c("",!0),t.social.github?(a(),s("a",{key:2,href:"https://github.com/"+t.social.github,target:"_blank"},[O,e("div",j,o(t.social.github),1)],8,N)):c("",!0),t.social.email?(a(),s("a",{key:3,href:"mailto:"+t.social.email,target:"_blank"},[E,e("div",A,o(t.social.email),1)],8,p)):c("",!0),t.social.reddit?(a(),s("a",{key:4,href:"https://www.reddit.com/"+t.social.reddit,target:"_blank"},[C,e("div",L,o(t.social.reddit),1)],8,F)):c("",!0)]))}},R=_(P,[["__scopeId","data-v-35c73dab"]]);const l=t=>(u("data-v-02b4997a"),t=t(),g(),t),V=["i","total"],q={class:"flex flex-wrap items-center p-4"},D=["src"],K={class:"flex flex-col justify-center",style:{flex:"10 1 220px"}},M={class:"p-6 flex flex-col"},T={class:"text-3xl font-bold"},U={class:"pos py-4 font-bold"},W={class:"place text-lg"},Z={class:"p-2"},z={key:0,class:"p-2"},G=l(()=>e("div",{class:"font-bold border-b-1 border-current border-opacity-10"},"Available interactions",-1)),H={class:"flex gap-2 py-4 flex-wrap"},J={class:"p-2 bg-dark-200 bg-opacity-10 dark-bg-light-200 dark-bg-opacity-10"},Q=["href"],X=l(()=>e("div",{class:"p-2"},"BOOK A FREE TRIAL SESSION NOW",-1)),Y=[X],tt={class:"defs",style:{height:"0"}},et=l(()=>e("defs",null,[e("clipPath",{id:"squircle",clipPathUnits:"objectBoundingBox"},[e("path",{d:"M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z"})])],-1)),at=[et],st={__name:"card",props:{author:Object,i:Number,total:Number},setup(t){return(b,m)=>{var n,d;const v=R;return a(),s(r,null,[t.author?(a(),s("div",{key:0,class:"rounded-2xl author-card m-4 overflow-hidden",i:t.i,total:t.total,height:8},[e("div",q,[e("img",{class:"avatar",src:t.author.avatar},null,8,D),e("div",K,[e("div",M,[e("div",T,o(t.author.name),1),e("div",U,o(t.author.pos),1),e("div",W,o(t.author.place),1)])]),e("div",Z,o(t.author.about),1),(n=t.author)!=null&&n.interactions?(a(),s("div",z,[G,e("div",H,[(a(!0),s(r,null,f((d=t.author)==null?void 0:d.interactions,h=>(a(),s("div",{class:"px-2 py-1 bg-light-400 rounded-xl shadow dark-bg-dark-400",key:h},o(h),1))),128))])])):c("",!0)]),e("div",J,[t.author.book?(a(),s("a",{key:0,class:"flex-button font-bold justify-center",href:t.author.book,target:"_blank"},Y,8,Q)):c("",!0),t.author.social?(a(),k(v,{key:1,social:t.author.social},null,8,["social"])):c("",!0)])],8,V)):c("",!0),(a(),s("svg",tt,at))],64)}}},ct=_(st,[["__scopeId","data-v-02b4997a"]]);export{ct as _};