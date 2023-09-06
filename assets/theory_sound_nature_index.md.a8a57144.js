import{U as m,r as p,x as f,P as v,b as g,o as t,c as o,a as e,l as w,F as x,d as y,m as b,f as k,e as d}from"./chunks/framework.18a7d3ba.js";const $="/assets/Spherical_pressure_waves.a76feca9.gif",N="/assets/Lindsays_Wheel_of_Acoustics.1a57e283.svg",P="/assets/atmosphere-speed-of-sound.42bb58e2.png",C={version:"1.1",baseProfile:"full",viewBox:"0 0 100 70",xmlns:"http://www.w3.org/2000/svg"},T=["transform"],A=e("circle",{cx:"0",cy:"35",r:"4.5",fill:"currentColor"},null,-1),W={key:0,fill:"gray",points:"-2,32 3,35 -2,38"},B=e("rect",{x:"0",y:"0",width:"100",height:"70",stroke:"currentColor",fill:"none","stroke-width":"2",rx:"2"},null,-1),L={__name:"vibrations",setup(u){const{timestamp:i,resume:c,pause:h}=m({offset:-Date.now(),controls:!0}),r=p([]),a=f(!1);v(()=>{a.value?c():h()});for(let s=1;s<25;s++){const n={cx:g(()=>Math.cos(i.value/1e3-s)*3.5+10),r:s*4};r.push(n)}return(s,n)=>(t(),o("svg",C,[e("g",{class:"cursor-pointer",transform:`translate(${r[0].cx},0)`,onClick:n[0]||(n[0]=l=>a.value=!a.value)},[A,a.value?w("",!0):(t(),o("polygon",W))],8,T),(t(!0),o(x,null,y(r,(l,_)=>(t(),o("circle",b({key:_},l,{cy:"35","stroke-width":"0.5","stroke-linecap":"round",stroke:"currentColor",fill:"none"}),null,16))),128)),B]))}},V=e("h2",{id:"what-is-sound",tabindex:"-1"},[d("What is sound? "),e("a",{class:"header-anchor",href:"#what-is-sound","aria-label":'Permalink to "What is sound?"'},"​")],-1),j=e("p",null,[e("img",{src:$,alt:""})],-1),q=e("p",null,"Acoustic vibrations propagate as mechanical waves of pressure in a transmission medium such as gas, liquid or solid. The speed of sound in air at 20 ºC is about 343 m/s (1,235 km/h) and complexly depends on density and pressure/stiffness of the medium. Audio range falls between infrasonic (<20 Hz) and ultrasonic (>20 kHz) frequencies.",-1),z=e("h2",{id:"lindsay-s-wheel-of-acoustics",tabindex:"-1"},[d("Lindsay's Wheel of Acoustics "),e("a",{class:"header-anchor",href:"#lindsay-s-wheel-of-acoustics","aria-label":`Permalink to "Lindsay's Wheel of Acoustics"`},"​")],-1),D=e("p",null,[e("img",{src:N,alt:""})],-1),E=e("p",null,[e("img",{src:P,alt:""})],-1),O=JSON.parse('{"title":"Nature of sound","description":"The acoustic waves - their sources and mediums.","frontmatter":{"title":"Nature of sound","description":"The acoustic waves - their sources and mediums.","date":"2021-08-30T00:00:00.000Z","cover":"sound-waves.jpg"},"headers":[],"relativePath":"theory/sound/nature/index.md","filePath":"theory/sound/nature/index.md","lastUpdated":1677916913000}'),F={name:"theory/sound/nature/index.md"},S=Object.assign(F,{setup(u){return(i,c)=>(t(),o("div",null,[V,j,q,k(L,{class:"my-16",id:"sound-vibrations"}),z,D,E]))}});export{O as __pageData,S as default};