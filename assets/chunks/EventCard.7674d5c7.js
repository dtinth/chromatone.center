import"./EventCard.vue_vue_type_style_index_0_scoped_2ae09898_lang.4ed993c7.js";import{_ as c,o as d,c as i,a as e,f as r,t as a,u as n,p,i as f}from"./framework.233ced2b.js";import{u}from"./index.fb02c716.js";const h=t=>(p("data-v-2ae09898"),t=t(),f(),t),g=["href"],m={class:"p-0 min-w-50 relative",style:{flex:"0 0"}},x={key:0,class:"text-100px flex gap-2 absolute top-11 left-10 p-2 opacity-80 i-ic-round-play-circle"},_=["src"],v={class:"flex flex-col p-4 gap-2",style:{flex:"1 1 100px"}},y={class:"text-sm"},S={class:"text-2xl font-bold flex items-center gap-2"},b={class:"text-sm -mx-1"},w={class:"bg-light-900 dark-bg-dark-600 px-1 py-1 rounded"},k=h(()=>e("div",{class:"flex-1"},null,-1)),D={class:"text-md"},E={__name:"EventCard",props:{project:{type:Object,default:()=>({})},title:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},cover:{type:String,default:""},poster:{type:String,default:""},slug:{type:String,default:""},youtube_video:{type:String,default:""},date:{type:String,default:""}},setup(t){const s=t,l=u(()=>s==null?void 0:s.date,"DD MMMM YYYY");return(I,M)=>{var o;return d(),i("a",{class:"overflow-hidden flex flex-wrap shadow-lg hover-shadow-xl transition flex-1 dark-bg-dark-300 max-w-150",href:`/academy/events/${t.slug}.html`,style:{"padding-bottom":"0","padding-left":"0","padding-right":"0",flex:"1 1 auto"}},[e("div",m,[t.youtube_video?(d(),i("div",x)):r("",!0),e("img",{style:{margin:"0"},src:`https://db.chromatone.center/assets/${s.cover||s.poster}?fit=cover&width=300&height=300&format=webp`},null,8,_)]),e("div",v,[e("div",y,a(n(l)),1),e("div",S,a(t.title),1),e("div",b,[e("span",w,a((o=t.project)==null?void 0:o.title),1)]),k,e("div",D,a(t.description),1)])],8,g)}}},C=c(E,[["__scopeId","data-v-2ae09898"]]);export{C as E};
