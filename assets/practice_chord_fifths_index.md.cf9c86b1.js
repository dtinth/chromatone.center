import{_ as Y}from"./chunks/ring.dca17e70.js";import{o as F,a as D,b as O}from"./chunks/index.2d1b2d4e.js";import{r as Z,g as u}from"./chunks/calculations.65ee336d.js";import{n as Q}from"./chunks/theory.61e5aadb.js";import{n as g,p as X,a as q}from"./chunks/colors.1d4ac240.js";import{t as ee,c as te,m as H,d as P}from"./chunks/midi.dba817e8.js";import{c as oe,r as ne}from"./chunks/index.b30cd6d2.js";import{w as se,n as E}from"./chunks/index.66565e0b.js";import{_ as ie,A as re,i as ae,l as ce,o as a,c,a as i,t as V,u as e,w as K,F as T,r as $,f as M,n as le,g as z,m as L,B as he,x as de,d as S}from"./chunks/framework.aa37bc02.js";import"./chunks/index.86652af6.js";import"./chunks/index.83aed4fc.js";import"./chunks/synth.c9645a06.js";import"./chunks/audio.960b149c.js";import"./chunks/index.e5aae720.js";import"./chunks/Scale.7b617051.js";import"./chunks/Subtract.f0fef764.js";import"./chunks/PingPongDelay.f99e52ea.js";import"./chunks/AutoPanner.9f3b5c9e.js";import"./chunks/MonoSynth.4cac63d2.js";import"./chunks/Filter.2b531c53.js";import"./chunks/commonjsHelpers.042e6b4d.js";function G(x){const _=oe(x.map(h=>typeof h=="number"?h:ee(h)));return!x.length||_.length!==x.length?[]:_.reduce((h,b)=>{const j=h[h.length-1];return h.concat(ne(j,b).slice(1))},[_[0]])}function me(x,_){return G(x).map(h=>te(h,_))}var fe={numeric:G,chromatic:me};const pe={class:"fullscreen-container select-none touch-manipulation",id:"screen"},ue={class:"h-full max-h-80vh w-full",id:"fifths",style:{flex:"1 1 600px","touch-action":"none"},version:"1.1",baseProfile:"full",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner, sans-serif"},ge={fill:"currentColor",transform:"translate(50,50)","font-size":"3px","text-anchor":"middle","dominant-baseline":"middle","font-weight":"bold"},_e=["font-weight"],ye=["stroke-width"],ve=["font-weight"],xe=["stroke-width"],we=["onMousedown","onTouchstart","onMouseleave","onMouseup","onTouchend","onTouchcancel"],be=["cx","cy","fill","onClick"],ke=["onMousedown","onTouchstart","onMouseleave","onMouseup","onTouchend","onTouchcancel"],Ce=["cx","cy","fill"],Te=["fill","x","y"],$e=["fill"],Me=["fill"],je=["x","y"],Ie={__name:"fifths",setup(x){F("Shift",s=>{r.seventh=!r.seventh}),D("Shift",s=>{r.seventh=!r.seventh}),F("Alt",s=>{r.main=!r.main}),D("Alt",s=>{r.main=!r.main});const _=[0,7,2,9,4,11,6,1,8,3,10,5],h=Q.map((s,d)=>({name:s,pitch:d})),b=_.map(s=>h[s]),j=Z(_,-3).map(s=>h[s]),J={minor:b,major:j},l=O("tonic",0),I=O("scale-type","major"),r=re({seventh:!1,main:!0}),R=ae(()=>Object.keys(H.activeNotes).map(s=>s%12)),U={minor:[["VI","III","VII"],["iv","i","v"]],major:[["IV","I","V"],["ii","vi","iii"]]},W={minor:[0,3,7,10],major:[0,4,7,11]};function y(s){return s=="minor"?1:0}function A(s){return s=="minor"?r.seventh?"m7":"m":r.seventh?"M7":""}function B(s,d="major",m){const k=A(d),w=P.get(s+k);return m!==void 0?fe.numeric([0+m,3+m]).map(P.steps([s+3,k])):E.names(w.notes.map(t=>E.simplify(t)+4))}function N(s,d="major",m){X(B(s,d,m))}function v(s,d="major",m){q(B(s,d,m))}return(s,d)=>{const m=Y,k=ce("tooltip");return a(),c("div",pe,[(a(),c("svg",ue,[i("g",ge,[i("text",null,V(e(H).guessChords[0]),1)]),K((a(),c("g",{class:"cursor-pointer",transform:"translate(10,90)",onClick:d[0]||(d[0]=w=>r.seventh=!r.seventh)},[i("text",{fill:"currentColor","font-size":"3px","text-anchor":"middle","dominant-baseline":"middle",y:"0.3","font-weight":r.seventh?"bold":"normal"},"7",8,_e),i("circle",{r:"3",fill:"transparent",stroke:"currentColor","stroke-width":r.seventh?.8:.4},null,8,ye)])),[[k,"Hold SHIFT to toggle 7th chords",void 0,{top:!0}]]),K((a(),c("g",{class:"cursor-pointer",transform:"translate(90,90)",onClick:d[1]||(d[1]=w=>r.main=!r.main)},[i("text",{fill:"currentColor","font-size":"3px","text-anchor":"middle","dominant-baseline":"middle",y:"0.3","font-weight":r.main?"bold":"normal"},"A",8,ve),i("circle",{r:"3",fill:"transparent",stroke:"currentColor","stroke-width":r.main?.8:.4},null,8,xe)])),[[k,"Hold ALT to toggle chord inversions",void 0,{top:!0}]]),(a(),c(T,null,$(J,(w,t)=>i("g",{key:t},[(a(!0),c(T,null,$(w,(n,o)=>(a(),c("g",{class:"around",key:o,style:{cursor:"pointer"}},[M(m,{cx:50,cy:50,from:(o-1)/12*360+15,to:o/12*360+15,radius:40-12*y(t),thickness:10,op:Math.abs(e(l)-o)==11||Math.abs(e(l)-o)%12<=1?.8:.1,fill:Math.abs(e(l)-o)==11||Math.abs(e(l)-o)%12<=1?e(g)(n.pitch):e(g)(n.pitch,2,1)},null,8,["from","to","radius","op","fill"]),(a(!0),c(T,null,$(W[t],(f,p)=>(a(),c("g",{class:le(["quadro",{active:R.value.includes((n.pitch-3+f)%12)}]),onMousedown:C=>N(n.name,t,p),onTouchstart:C=>N(n.name,t,p),onMouseleave:C=>v(n.name,t,p),onMouseup:C=>v(n.name,t,p),onTouchend:C=>v(n.name,t,p),onTouchcancel:C=>v(n.name,t,p),key:p},[M(m,{class:"opacity-20 transition",cx:50,cy:50,from:(o-1)/12*360+15+15*(p%2),to:o/12*360+15*(p%2),radius:40-12*y(t)-5*(p>1?0:1),thickness:5,op:Math.abs(e(l)-o)==11||Math.abs(e(l)-o)%12<=1?.8:.1,fill:Math.abs(e(l)-o)==11||Math.abs(e(l)-o)%12<=1?e(g)(n.pitch+f,5):e(g)(n.pitch+f,5,1)},null,8,["from","to","radius","op","fill"])],42,we))),128)),i("circle",{class:"transition opacity-20 hover-opacity-80",cx:e(u)(o,12,42-y(t)*26).x,cy:e(u)(o,12,42-y(t)*26).y,r:2,fill:e(g)(n.pitch,4,1,1),onClick:f=>{l.value=o,I.value=t}},null,8,be),r.main?(a(),c("g",{key:0,onMousedown:f=>N(n.name,t),onTouchstart:f=>N(n.name,t),onMouseleave:f=>v(n.name,t),onMouseup:f=>v(n.name,t),onTouchend:f=>v(n.name,t),onTouchcancel:f=>v(n.name,t)},[i("circle",{class:"note opacity-80 hover-opacity-100",style:{transition:"all 300ms ease-out","transform-box":"fill-box","transform-origin":"center center"},cx:e(u)(o,12,35-y(t)*12).x,cy:e(u)(o,12,35-y(t)*12).y,r:"5",fill:Math.abs(e(l)-o)==11||Math.abs(e(l)-o)%12<=1?e(g)(n.pitch,4):e(g)(n.pitch,5,1,.5)},null,8,Ce)],40,ke)):z("",!0),i("text",{class:"pointer-events-none",style:{"user-select":"none",transition:"all 300ms ease"},fill:(e(se)(e(g)(n.pitch,4)).isDark(),"white"),"font-size":"3px","text-anchor":"middle","dominant-baseline":"middle",x:e(u)(o,12,35-y(t)*12).x,y:e(u)(o,12,35-y(t)*12).y+.5},V(n.name)+V(A(t)),9,Te)]))),128))])),64)),i("g",{class:"transition-all duration-300 ease-out",ref:"selector","transform-origin":"50 50",style:L({transform:`rotate(${e(l)/12*360}deg)`})},[M(m,{cx:50,cy:50,from:-2/12*360+15,to:1/12*360+15,radius:44.5,thickness:31,"stroke-width":"0.5",stroke:"gray",fill:"none"}),e(I)!="minor"?(a(),c("circle",{key:0,class:"transition-all duration-300 cursor-pointer",cx:50,cy:8,r:2,fill:e(g)(e(j)[e(l)].pitch,4)},null,8,$e)):z("",!0),e(I)!="major"?(a(),c("circle",{key:1,class:"transition-all duration-300 cursor-pointer",cx:50,cy:34,r:2,fill:e(g)(e(b)[e(l)].pitch,4)},null,8,Me)):z("",!0),(a(!0),c(T,null,$(U[e(I)],(w,t)=>(a(),c("g",{key:t},[(a(!0),c(T,null,$(w,(n,o)=>(a(),c("text",{class:"pointer-events-none",key:n,style:L([{"user-select":"none",transition:"all 300ms ease"},{transform:`rotate(${-e(l)*30}deg)`,transformOrigin:`${e(u)(o-1,12,42-t*26).x}px ${e(u)(o-1,12,42-t*26).y}px`}]),fill:"currentColor","font-size":"2.5px","text-anchor":"middle","dominant-baseline":"middle",x:e(u)(o-1,12,42-t*26).x,y:e(u)(o-1,12,42-t*26).y+.25},V(n),13,je))),128))]))),128))],4)]))])}}},Ne=ie(Ie,[["__scopeId","data-v-5af2ded8"]]),Ve=i("h2",{id:"the-double-circle-of-fifths-as-a-tool-to-explore-chords-in-tonal-space",tabindex:"-1"},[S("The double circle of fifths as a tool to explore chords in tonal space "),i("a",{class:"header-anchor",href:"#the-double-circle-of-fifths-as-a-tool-to-explore-chords-in-tonal-space","aria-label":'Permalink to "The double circle of fifths as a tool to explore chords in tonal space"'},"​")],-1),ze=i("p",null,"The circle of fifths organizes pitches in a sequence of perfect fifths, generally shown as a circle with the pitches (and their corresponding keys) in a clockwise progression. Musicians and composers often use the circle of fifths to describe the musical relationships between pitches. Its design is helpful in composing and harmonizing melodies, building chords, and modulating to different keys within a composition.",-1),Se=i("p",null,"Moving counterclockwise, the pitches descend by a fifth, but ascending by a perfect fourth will lead to the same note an octave higher (therefore in the same pitch class). Moving counter-clockwise from C could be thought of as descending by a fifth to F, or ascending by a fourth to F.",-1),Ae=i("p",null,"Here we have two circles of fifths rotated by a minor third interval. With this placement we get quite a useful tool. Considering each position of the circle as a scale we instantly get two parallel major and minor keys. It has the same notes, but start from another tonic and have the opposite tonal quality. Take C major and get A minor. Take C# minor and get E major at one glimpse.",-1),Be=i("p",null,"The highlighted sector of 90 degrees includes 6 points of the circle that represent 6 main degrees of the scale starting from the notes in the middle of the sector. You can choose either major or minor basic scale by pressing on the little circles outside or inside the rings. Choose the one on the outside and you'll get the scale degrees numbers for the major scale. On the outer circle to the left of it you find the IV degree - the subdominant – the major chord starting from the note a fourth apart from the tonic. To the right lays the dominant V major chord. The inner circle shows the minor chords of the major scale – the ii, the vi and the iii degrees show in a clockwise succession. The vi diminished chord of a major scale isn't shown in the main sector, but you can find a reminder of it one step to the right in the inner circle.",-1),Fe=i("p",null,"So for C major scale you'll get C major chord as the tonic I degree, F major to the left as the IV subdominant degree, and G major chord as the dominant V degree to the right of the tonic. The inner circle will show you the Dm chord for the ii degree, Am as the vi degree and the tonic of the parallel minor scale and Em as the iii degree of the C major scale. The next step of the inner circle shows Bm and it can represent the vi degree – the leading tone and it's diminished chord Bdim (Bb5).",-1),De=i("p",null,[S("This scheme helps find interesting chord progressions either in one predefined key or traversing different keys in complex modulation movements. Neighbouring sectors include scales that are easy to borrow chords from and to travel to with simple moves like common-chord modulation. Once you find any other path from one key to another you can trace it's form on the circle and transpose it to any key you're in or you want to move to. The article about "),i("a",{href:"https://en.wikipedia.org/wiki/Secondary_chord",target:"_blank",rel:"noreferrer"},"secondary chords"),S(" is a good starting poing in this exploration.")],-1),rt=JSON.parse('{"title":"Circle of fifths","description":"12 major chords organized in a sequence of perfect fifths along with their relative minors","frontmatter":{"title":"Circle of fifths","description":"12 major chords organized in a sequence of perfect fifths along with their relative minors","date":"2022-06-02T00:00:00.000Z","cover":"fifths.png"},"headers":[],"relativePath":"practice/chord/fifths/index.md","filePath":"practice/chord/fifths/index.md"}'),Oe={name:"practice/chord/fifths/index.md"},at=Object.assign(Oe,{setup(x){return(_,h)=>{const b=he("client-only");return a(),c("div",null,[M(b,null,{default:de(()=>[M(Ne)]),_:1}),Ve,ze,Se,Ae,Be,Fe,De])}}});export{rt as __pageData,at as default};
