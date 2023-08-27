import{P as S,_ as A}from"./chunks/PrintKeys.55bbd7ed.js";import{g as f,r as $}from"./chunks/calculations.65ee336d.js";import{n as w}from"./chunks/colors.6e70028c.js";import{n as x}from"./chunks/theory.dec16ed9.js";import{w as v}from"./chunks/index.654bd828.js";import{o as e,c as i,F as m,r as p,u as a,h as b,a as d,t as y,_ as N,E as T,d as g,b as P,e as C,g as D}from"./chunks/framework.f75e5dc4.js";import"./chunks/svg.fc0f1a55.js";import"./chunks/index.cccf7ef0.js";import"./chunks/midi.ee496394.js";import"./chunks/index.de966dde.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/synth.ffb45e01.js";import"./chunks/audio.2835df43.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.0ce05937.js";import"./chunks/AutoPanner.5498cf00.js";import"./chunks/MonoSynth.3cdcc469.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/index.9f9b4fe3.js";import"./chunks/index.be7eb4a8.js";const V=["x1","y1","stroke"],j=["transform"],B=["r","fill"],I={key:0,y:"0.3","font-size":"2px","font-weight":"bold",fill:"white"},M=["fill"],z={y:"0.3","font-size":"2","font-weight":"bold",fill:"white"},E={__name:"circle",props:{pitch:{type:Number,default:0},chroma:{type:String,default:"1001000100101"},type:{type:String,default:""},tonic:{type:Number,default:0}},setup(r){return(t,u)=>{var h;return e(),i("g",null,[(e(!0),i(m,null,p(a($)(r.chroma.split(""),-r.tonic),(s,n)=>(e(),i("g",{key:s},[s=="1"?(e(),i("line",{key:0,x1:a(f)(n,12,6.5,0).x,y1:a(f)(n,12,6.5,0).y,x2:"0",y2:"0","stroke-linecap":"square","stroke-width":"3.92",stroke:s=="1"?a(v)(a(w)(n)).toHex():"none"},null,8,V)):b("",!0)]))),128)),(e(!0),i(m,null,p(a($)(r.chroma.split(""),-r.tonic),(s,n)=>{var _,c;return e(),i("g",{key:s,transform:`translate(${a(f)(n,12,8,0).x}, ${a(f)(n,12,8,0).y})`},[d("circle",{x:"0",y:"0",r:s=="1"?2:1,fill:a(v)(s=="1"?a(w)(n):((_=a(x))==null?void 0:_[n].length)!=2?"hsl(0,0%,85%)":"hsl(0,0%,60%)").toHex()},null,8,B),s=="1"?(e(),i("text",I,y((c=a(x))==null?void 0:c[n]),1)):b("",!0)],8,j)}),128)),d("circle",{cx:"0",cy:"0",r:"3.5",fill:r.pitch===!1?"none":a(v)(a(w)(r.pitch)).toHex()},null,8,M),d("text",z,y(r.pitch===!1?"":typeof r.pitch=="string"?r.pitch:(h=a(x))==null?void 0:h[r.pitch%12])+y(r.type),1)])}}};const H=["viewBox"],L=["y","width","height"],F=C('<g font-size="4" font-weight="bold" data-v-eca7d882><text x="13" y="-2" data-v-eca7d882>Major</text><text x="108" y="-2" data-v-eca7d882>Minor</text><line x1="5" x2="93" y1="1" y2="1" stroke-width="0.25" stroke="black" data-v-eca7d882></line><line x1="100" x2="208" y1="1" y2="1" stroke-width="0.25" stroke="black" data-v-eca7d882></line></g>',1),O={"font-size":"4"},W=["x"],q=["x"],J=["transform"],K=["y","width","fill"],R=["x1","x2","y2"],U={__name:"PrintScales",setup(r){const t=T({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:24}}),u={scale:"101101011010",majors:[{pitch:3,chroma:"001100010010",type:"M7"},{pitch:8,chroma:"100100011000",type:"M7"},{pitch:10,chroma:"001001001010",type:"7"}],minors:[{pitch:0,chroma:"100100010010",type:"m7"},{pitch:5,chroma:"100101001000",type:"m7"},{pitch:7,chroma:"001001010010",type:"m7"},{pitch:2,chroma:"101001001000",type:"ø7"}]},h={major:["Ionian","Lydian","Myxolydian"],minor:["Aeolian","Dorian","Phrygian","Locrian"]};return(s,n)=>{const _=E;return e(),i("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${t.margin} -${t.margin+t.head} ${t.width+2*t.margin} ${t.height+2*t.margin+t.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner , sans-serif","text-anchor":"middle","dominant-baseline":"middle"},[d("rect",{x:"-2",y:-t.head,width:t.width+t.padding.x,height:t.height+t.head,stroke:"none","stroke-width":"0.2",rx:"4",fill:"none"},null,8,L),F,d("g",O,[(e(!0),i(m,null,p(h.major,(c,o)=>(e(),i("text",{key:c,x:t.padding.left+12+22*o,y:"-2"},y(c),9,W))),128)),(e(!0),i(m,null,p(h.minor,(c,o)=>(e(),i("text",{key:c,x:t.padding.left+108+22*o,y:"-2"},y(c),9,q))),128))]),(e(!0),i(m,null,p(a(x),(c,o)=>(e(),i("g",{key:o,transform:`translate(0, ${o*(t.height-t.padding.y)/12})`},[d("rect",{x:0,y:t.padding.y-1,rx:"4",width:t.width,height:"22",opacity:"0.2",fill:o%2?"#333":"#eee"},null,8,K),g(_,{pitch:o+3,transform:"translate(12,14)",chroma:"101101011010",tonic:o},null,8,["pitch","tonic"]),(e(!0),i(m,null,p(u.majors,(l,k)=>(e(),P(_,{key:l,pitch:(l.pitch+o)%12,chroma:l.chroma,transform:`translate(${k*22+12+t.padding.left}, 14)`,type:l.type,tonic:o},null,8,["pitch","chroma","transform","type","tonic"]))),128)),(e(!0),i(m,null,p(u.minors,(l,k)=>(e(),P(_,{key:l,pitch:(l.pitch+o)%12,chroma:l.chroma,transform:`translate(${k*22+108+t.padding.left}, 14)`,type:l.type,tonic:o},null,8,["pitch","chroma","transform","type","tonic"]))),128)),g(S,{pitch:o,transform:`scale(0.12) translate(${750+t.padding.left},-45)`,chroma:u.scale},null,8,["pitch","transform","chroma"])],8,J))),128)),d("line",{x1:t.padding.left,x2:t.padding.left,y1:"5",y2:t.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,R)],8,H)}}},Z=N(U,[["__scopeId","data-v-eca7d882"]]),G=d("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[D("Diatonic scales and modes "),d("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1),kt=JSON.parse('{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","frontmatter":{"title":"A4 cheat-sheet","description":"A comprehesive guide to colorful notes - WIP","cover":"cover.png","date":"2021-08-09T00:00:00.000Z","product":{"price":10,"id":"print-circles-a4","digital":true}},"headers":[],"relativePath":"shop/printable/circles-a4/index.md","filePath":"shop/printable/circles-a4/index.md","lastUpdated":1690911432000}'),Q={name:"shop/printable/circles-a4/index.md"},wt=Object.assign(Q,{setup(r){return(t,u)=>{const h=A;return e(),i("div",null,[G,g(Z,{width:"100%",class:"max-w-55ch"}),g(h,{svg:"diatonic",password:"circle-a4-99tuD"})])}}});export{kt as __pageData,wt as default};
