import{f as _}from"./chunks/index.7c47e578.js";import{A as f,k as p,G as v,i as g,o as t,c as o,a as e,g as w,F as y,r as x,C as k,f as b,d as u}from"./chunks/framework.fee3f2bd.js";const $="/assets/Spherical_pressure_waves.a76feca9.gif",C="/assets/Lindsays_Wheel_of_Acoustics.1a57e283.svg",N="/assets/atmosphere-speed-of-sound.42bb58e2.png",A={version:"1.1",baseProfile:"full",viewBox:"0 0 100 70",xmlns:"http://www.w3.org/2000/svg"},P=["transform"],T=e("circle",{cx:"0",cy:"35",r:"4.5",fill:"currentColor"},null,-1),W={key:0,fill:"gray",points:"-2,32 3,35 -2,38"},B=e("rect",{x:"0",y:"0",width:"100",height:"70",stroke:"currentColor",fill:"none","stroke-width":"2",rx:"2"},null,-1),L={__name:"vibrations",setup(d){const{timestamp:i,resume:c,pause:h}=_({offset:-Date.now(),controls:!0}),n=f([]),a=p(!1);v(()=>{a.value?c():h()});for(let s=1;s<25;s++){const r={cx:g(()=>Math.cos(i.value/1e3-s)*3.5+10),r:s*4};n.push(r)}return(s,r)=>(t(),o("svg",A,[e("g",{class:"cursor-pointer",transform:`translate(${n[0].cx},0)`,onClick:r[0]||(r[0]=l=>a.value=!a.value)},[T,a.value?w("",!0):(t(),o("polygon",W))],8,P),(t(!0),o(y,null,x(n,(l,m)=>(t(),o("circle",k({key:m},l,{cy:"35","stroke-width":"0.5","stroke-linecap":"round",stroke:"currentColor",fill:"none"}),null,16))),128)),B]))}},V=e("h2",{id:"what-is-sound",tabindex:"-1"},[u("What is sound? "),e("a",{class:"header-anchor",href:"#what-is-sound","aria-label":'Permalink to "What is sound?"'},"​")],-1),j=e("p",null,[e("img",{src:$,alt:""})],-1),q=e("p",null,"Acoustic vibrations propagate as mechanical waves of pressure in a transmission medium such as gas, liquid or solid. The speed of sound in air at 20 ºC is about 343 m/s (1,235 km/h) and complexly depends on density and pressure/stiffness of the medium. Audio range falls between infrasonic (<20 Hz) and ultrasonic (>20 kHz) frequencies.",-1),z=e("h2",{id:"lindsay-s-wheel-of-acoustics",tabindex:"-1"},[u("Lindsay's Wheel of Acoustics "),e("a",{class:"header-anchor",href:"#lindsay-s-wheel-of-acoustics","aria-label":`Permalink to "Lindsay's Wheel of Acoustics"`},"​")],-1),D=e("p",null,[e("img",{src:C,alt:""})],-1),E=e("p",null,[e("img",{src:N,alt:""})],-1),S=JSON.parse('{"title":"Nature of sound","description":"The acoustic waves - their sources and mediums.","frontmatter":{"title":"Nature of sound","description":"The acoustic waves - their sources and mediums.","date":"2021-08-30T00:00:00.000Z","cover":"sound-waves.jpg"},"headers":[],"relativePath":"theory/sound/nature/index.md","filePath":"theory/sound/nature/index.md"}'),F={name:"theory/sound/nature/index.md"},G=Object.assign(F,{setup(d){return(i,c)=>(t(),o("div",null,[V,j,q,b(L,{class:"my-16",id:"sound-vibrations"}),z,D,E]))}});export{S as __pageData,G as default};