import{o as s,c as a,l as i,a as e,t as l}from"./framework.18a7d3ba.js";const n={class:"flex flex-col gap-8 mx-4 bg-light-100 dark-bg-dark-300 max-w-150 rounded-xl shadow"},c=["src"],o={class:"flex flex-col gap-4 p-4"},d={class:"flex flex-col gap-4"},r={class:"text-3xl font-bold"},g={class:"p-0 text-lg"},u={key:0,class:"p-2 flex items-center gap-2"},f=e("div",{class:"i-la-link text-2xl w-12"},null,-1),h=["href"],m=["href"],x=e("div",{class:"i-la-map-marker text-2xl w-12"},null,-1),y={key:0,class:"p-0 text-sm"},_={class:"p-0"},k={class:"p-0 font-bold"},p={__name:"PartnerDetails",props:{title:{type:String,default:""},description:{type:String,default:""},logo:{type:String,default:""},social:{type:Object,default:()=>({})},url:{type:String,default:""},city:{type:String,default:""},country:{type:String,default:""},full_address:{type:String,default:""},gmap_link:{type:String,default:""}},setup(t){return(b,v)=>(s(),a("div",n,[t.logo?(s(),a("img",{key:0,style:{margin:"0"},src:`https://db.chromatone.center/assets/${t.logo}?format=webp`},null,8,c)):i("",!0),e("div",o,[e("div",d,[e("div",r,l(t.title),1),e("div",g,l(t.description),1)]),t.url||t.social?(s(),a("div",u,[f,e("a",{class:"no-underline",href:t.url||t.social,target:"_blank"},l(t.url||t.social),9,h)])):i("",!0),e("a",{class:"p-2 rounded-lg flex items-center gap-2 no-underline font-normal bg-light-900 bg-opacity-30",href:t.gmap_link,target:"_blank"},[x,t.full_address?(s(),a("div",y,l(t.full_address),1)):i("",!0),e("div",_,l(t.city),1),e("div",k,l(t.country),1)],8,m)])]))}};export{p as _};
