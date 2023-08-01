import{P as S,_ as A}from"./chunks/PrintKeys.2811e8ee.js";import{g as y,r as $}from"./chunks/calculations.3384a913.js";import{n as w}from"./chunks/colors.c545afb8.js";import{n as x}from"./chunks/theory.61e5aadb.js";import{w as v}from"./chunks/index.e34dd531.js";import{o as e,c as i,F as m,r as p,u as a,g as b,a as d,t as u,_ as N,A as T,e as g,f as P,b as C,d as D}from"./chunks/framework.eba39b59.js";import"./chunks/svg.52b08314.js";import"./chunks/index.c81389a1.js";import"./chunks/index.83aed4fc.js";import"./chunks/midi.68daa94b.js";import"./chunks/index.8bc6f05c.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.b30cd6d2.js";import"./chunks/synth.052d6c0a.js";import"./chunks/audio.67e1b582.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.a045a173.js";import"./chunks/AutoPanner.62e583a4.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/index.86652af6.js";const V=["x1","y1","stroke"],j=["transform"],B=["r","fill"],I={key:0,y:"0.3","font-size":"2px","font-weight":"bold",fill:"white"},M=["fill"],z={y:"0.3","font-size":"2","font-weight":"bold",fill:"white"},H={__name:"circle",props:{pitch:{type:Number,default:0},chroma:{type:String,default:"1001000100101"},type:{type:String,default:""},tonic:{type:Number,default:0}},setup(r){return(t,f)=>{var h;return e(),i("g",null,[(e(!0),i(m,null,p(a($)(r.chroma.split(""),-r.tonic),(s,n)=>(e(),i("g",{key:s},[s=="1"?(e(),i("line",{key:0,x1:a(y)(n,12,6.5,0).x,y1:a(y)(n,12,6.5,0).y,x2:"0",y2:"0","stroke-linecap":"square","stroke-width":"3.92",stroke:s=="1"?a(v)(a(w)(n)).toHex():"none"},null,8,V)):b("",!0)]))),128)),(e(!0),i(m,null,p(a($)(r.chroma.split(""),-r.tonic),(s,n)=>{var _,c;return e(),i("g",{key:s,transform:`translate(${a(y)(n,12,8,0).x}, ${a(y)(n,12,8,0).y})`},[d("circle",{x:"0",y:"0",r:s=="1"?2:1,fill:a(v)(s=="1"?a(w)(n):((_=a(x))==null?void 0:_[n].length)!=2?"hsl(0,0%,85%)":"hsl(0,0%,60%)").toHex()},null,8,B),s=="1"?(e(),i("text",I,u((c=a(x))==null?void 0:c[n]),1)):b("",!0)],8,j)}),128)),d("circle",{cx:"0",cy:"0",r:"3.5",fill:r.pitch===!1?"none":a(v)(a(w)(r.pitch)).toHex()},null,8,M),d("text",z,u(r.pitch===!1?"":typeof r.pitch=="string"?r.pitch:(h=a(x))==null?void 0:h[r.pitch%12])+u(r.type),1)])}}};const L=["viewBox"],E=["y","width","height"],F=C('<g font-size="4" font-weight="bold" data-v-eca7d882><text x="13" y="-2" data-v-eca7d882>Major</text><text x="108" y="-2" data-v-eca7d882>Minor</text><line x1="5" x2="93" y1="1" y2="1" stroke-width="0.25" stroke="black" data-v-eca7d882></line><line x1="100" x2="208" y1="1" y2="1" stroke-width="0.25" stroke="black" data-v-eca7d882></line></g>',1),O={"font-size":"4"},W=["x"],q=["x"],J=["transform"],K=["y","width","fill"],R=["x1","x2","y2"],Z={__name:"PrintScales",setup(r){const t=T({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:24}}),f={scale:"101101011010",majors:[{pitch:3,chroma:"001100010010",type:"M7"},{pitch:8,chroma:"100100011000",type:"M7"},{pitch:10,chroma:"001001001010",type:"7"}],minors:[{pitch:0,chroma:"100100010010",type:"m7"},{pitch:5,chroma:"100101001000",type:"m7"},{pitch:7,chroma:"001001010010",type:"m7"},{pitch:2,chroma:"101001001000",type:"ø7"}]},h={major:["Ionian","Lydian","Myxolydian"],minor:["Aeolian","Dorian","Phrygian","Locrian"]};return(s,n)=>{const _=H;return e(),i("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${t.margin} -${t.margin+t.head} ${t.width+2*t.margin} ${t.height+2*t.margin+t.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner , sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[d("rect",{x:"-2",y:-t.head,width:t.width+t.padding.x,height:t.height+t.head,stroke:"none","stroke-width":"0.2",rx:"4",fill:"none"},null,8,E),F,d("g",O,[(e(!0),i(m,null,p(h.major,(c,o)=>(e(),i("text",{key:c,x:t.padding.left+12+22*o,y:"-2"},u(c),9,W))),128)),(e(!0),i(m,null,p(h.minor,(c,o)=>(e(),i("text",{key:c,x:t.padding.left+108+22*o,y:"-2"},u(c),9,q))),128))]),(e(!0),i(m,null,p(a(x),(c,o)=>(e(),i("g",{key:o,transform:`translate(0, ${o*(t.height-t.padding.y)/12})`},[d("rect",{x:0,y:t.padding.y-1,rx:"4",width:t.width,height:"22",opacity:"0.2",fill:o%2?"#333":"#eee"},null,8,K),g(_,{pitch:o+3,transform:"translate(12,14)",chroma:"101101011010",tonic:o},null,8,["pitch","tonic"]),(e(!0),i(m,null,p(f.majors,(l,k)=>(e(),P(_,{key:l,pitch:(l.pitch+o)%12,chroma:l.chroma,transform:`translate(${k*22+12+t.padding.left}, 14)`,type:l.type,tonic:o},null,8,["pitch","chroma","transform","type","tonic"]))),128)),(e(!0),i(m,null,p(f.minors,(l,k)=>(e(),P(_,{key:l,pitch:(l.pitch+o)%12,chroma:l.chroma,transform:`translate(${k*22+108+t.padding.left}, 14)`,type:l.type,tonic:o},null,8,["pitch","chroma","transform","type","tonic"]))),128)),g(S,{pitch:o,transform:`scale(0.12) translate(${750+t.padding.left},-45)`,chroma:f.scale},null,8,["pitch","transform","chroma"])],8,J))),128)),d("line",{x1:t.padding.left,x2:t.padding.left,y1:"5",y2:t.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,R)],8,L)}}},G=N(Z,[["__scopeId","data-v-eca7d882"]]),Q=d("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[D("Diatonic scales and modes "),d("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1),kt=JSON.parse('{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","frontmatter":{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","cover":"cover.png","date":"2021-08-09T00:00:00.000Z","product":{"price":10,"id":"print-circles-a4","digital":true}},"headers":[],"relativePath":"shop/printable/circles-a4/index.md","filePath":"shop/printable/circles-a4/index.md"}'),U={name:"shop/printable/circles-a4/index.md"},wt=Object.assign(U,{setup(r){return(t,f)=>{const h=A;return e(),i("div",null,[Q,g(G,{width:"100%",class:"max-w-55ch"}),g(h,{svg:"diatonic",password:"circle-a4-99tuD"})])}}});export{kt as __pageData,wt as default};
