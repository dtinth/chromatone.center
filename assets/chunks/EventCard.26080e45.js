import"./EventCard.vue_vue_type_style_index_0_scoped_049ca593_lang.4ed993c7.js";import{_ as i,X as r,o as d,c as l,a as e,l as n,t as a,u as p,p as f,q as u}from"./framework.5f732f34.js";const g=t=>(f("data-v-049ca593"),t=t(),u(),t),h=["href"],x={class:"p-0 min-w-50 relative",style:{flex:"0 0"}},_={key:0,class:"text-100px flex gap-2 absolute top-11 left-10 p-2 opacity-80 i-ic-round-play-circle"},m=["src"],v={class:"flex flex-col p-4 gap-2",style:{flex:"1 1 100px"}},y={class:"text-sm -mx-1"},S={class:"bg-light-900 dark-bg-dark-600 px-1 py-1 rounded"},b={class:"text-2xl font-bold flex items-center gap-2"},w={class:"text-lg"},k=g(()=>e("div",{class:"flex-1"},null,-1)),D={class:"text-md"},E={__name:"EventCard",props:{project:{type:Object,default:()=>({})},title:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},cover:{type:String,default:""},poster:{type:String,default:""},slug:{type:String,default:""},youtube_video:{type:String,default:""},date:{type:String,default:""}},setup(t){const s=t,c=r(()=>s==null?void 0:s.date,"DD MMMM YYYY (dddd)");return(I,M)=>{var o;return d(),l("a",{class:"overflow-hidden flex flex-wrap shadow-lg hover-shadow-xl transition flex-1 dark-bg-dark-300 max-w-150",href:`/academy/events/${t.slug}/`,style:{"padding-bottom":"0","padding-left":"0","padding-right":"0",flex:"1 1 auto"}},[e("div",x,[t.youtube_video?(d(),l("div",_)):n("",!0),e("img",{style:{margin:"0"},src:`https://db.chromatone.center/assets/${s.cover||s.poster}?fit=cover&width=300&height=300&format=webp`},null,8,m)]),e("div",v,[e("div",y,[e("span",S,a((o=t.project)==null?void 0:o.title),1)]),e("div",b,a(t.title),1),e("div",w,a(p(c)),1),k,e("div",D,a(t.description),1)])],8,h)}}},B=i(E,[["__scopeId","data-v-049ca593"]]);export{B as E};
