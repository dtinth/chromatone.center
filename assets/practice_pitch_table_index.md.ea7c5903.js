import{_ as E}from"./chunks/scale.50065b4b.js";import{r as S,L as _,b as m,_ as w,o as c,c as p,u as o,l as v,p as A,q,a as i,t as f,W as P,H as g,A as R,B as x,C as y,G as C,f as u,n as F,V as H,x as L,w as N,g as I,a8 as U,D as W,F as $,d as T,I as j}from"./chunks/framework.5f732f34.js";import{X as G,s as J,H as K,t as Q}from"./chunks/index.cccf7ef0.js";import{p as X}from"./chunks/calculations.65ee336d.js";import{c as Y}from"./chunks/audio.22beba86.js";import{M as Z}from"./chunks/MonoSynth.3cdcc469.js";import{n as D}from"./chunks/theory.dec16ed9.js";import{n as ee,g as te}from"./chunks/colors.bcf8e035.js";import"./chunks/keys.0e5f2249.js";import"./chunks/index.654bd828.js";import"./chunks/midi.122ebddd.js";import"./chunks/index.23470dd7.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.140cffd8.js";import"./chunks/Filter.e19ab36f.js";import"./chunks/Scale.f9a07a23.js";import"./chunks/index.be7eb4a8.js";import"./chunks/synth.8bbffa8d.js";import"./chunks/Subtract.e7604129.js";import"./chunks/PingPongDelay.f4ef736b.js";import"./chunks/AutoPanner.8ce2e555.js";import"./chunks/index.ae0c5bda.js";const e=S({show:{letters:_("table-letters",!0),bpm:_("table-bpm",!0),hz:_("table-hz",!0),len:_("table-len",!0)},stopped:!0,middleA:_("table-middleA",440),tuning:"equal",octave:{range:{bottom:_("table-bottom",1),top:_("table-top",4)},limit:{bottom:-6,top:8},list:m(()=>{let s=[];for(let a=e.octave.range.top;a>=e.octave.range.bottom;a--)s.push(a);return s}),inc:se,dec:oe}});function oe(s){let a=s?"top":"bottom",t=s?"bottom":"top";s&&e.octave.range[a]<=e.octave.range[t]||!s&&e.octave.range[a]<=e.octave.limit[a]||e.octave.range[a]--}function se(s){let a=s?"top":"bottom",t=s?"bottom":"top";s&&e.octave.range[a]>=e.octave.limit[a]||!s&&e.octave.range[a]>=e.octave.range[t]||e.octave.range[a]++}const M=s=>(A("data-v-3cef6ce0"),s=s(),q(),s),ae={class:"flex text-2xl text-center cursor-pointer w-full"},le=M(()=>i("div",{class:"i-la-minus"},null,-1)),ne=[le],re=M(()=>i("div",{class:"i-la-plus"},null,-1)),ce=[re],ie={__name:"shift",props:{top:Boolean},setup(s){return(a,t)=>(c(),p("div",ae,[o(e).octave.range.bottom!=o(e).octave.limit.bottom?(c(),p("div",{key:0,class:"btn bg-gray-300 dark-bg-gray-900",onClick:t[0]||(t[0]=d=>o(e).octave.dec(s.top))},ne)):v("",!0),o(e).octave.range.top!=o(e).octave.limit.top?(c(),p("div",{key:1,class:"btn bg-gray-50 dark-bg-gray-500",onClick:t[1]||(t[1]=d=>o(e).octave.inc(s.top))},ce)):v("",!0)]))}},B=w(ie,[["__scopeId","data-v-3cef6ce0"]]),pe={key:0,class:"flex flex-col text-xs p-1"},de={key:0,class:"text-xl font-bold"},ue={key:1,class:"flex"},ve={key:2,class:"flex"},_e={key:3,class:"flex"},me={__name:"info",props:{name:{type:String,default:"A"},hz:{type:Number,default:440},octave:{default:3,type:Number}},setup(s){const a=s,t=m(()=>a.hz*60),d=m(()=>340/a.hz);function l(n){let r;return n>1e6?r=(n/1e6).toFixed(2)+" M":n>1e3?r=(n/1e3).toFixed(2)+" k":r=n.toFixed(2)+" ",r}return(n,r)=>o(e).show.len||o(e).show.hz||o(e).show.bpm||o(e).show.letters?(c(),p("div",pe,[o(e).show.letters?(c(),p("div",de,f(s.name)+f(s.octave),1)):v("",!0),o(e).show.hz?(c(),p("div",ue,f(l(s.hz))+"hz",1)):v("",!0),o(e).show.len?(c(),p("div",ve,f(d.value.toFixed(2))+" m",1)):v("",!0),o(e).show.bpm?(c(),p("div",_e,f(l(t.value))+"BPM",1)):v("",!0)])):v("",!0)}};function fe(s,a){const{channel:t}=Y("table"),d=new G(0,-1/0).connect(t),l=new Z({oscillator:{type:"sawtooth"},envelope:{attack:.5},filterEnvelope:{attack:.05}}).connect(d),n=S({vol:0,pan:50,started:!1,active:m(()=>n.vol>0),freq:m(()=>{let r=X(s,a,e.middleA);return l.oscillator.frequency.value=r,r})});return P(()=>{l.triggerRelease(),l.dispose()}),g(()=>n.vol,r=>{d.volume.targetRampTo(J(r*.4/100),"16n")}),g(()=>n.pan,r=>{let b=(r-50)/100*2;d.pan.targetRampTo(b,"16n")}),g(()=>e.stopped,r=>{r&&(n.vol=0,n.pan=50)}),g(()=>n.active,r=>{r?(e.stopped&&(e.stopped=!1),l.triggerAttack(n.freq)):l.triggerRelease()}),n}const he=["drag-options"],be={class:"absolute w-full h-full top-0 left-0 bottom-0"},ge={class:"absolute h-full top-0 left-0 right-0 text-center"},xe={__name:"cell",props:{pitch:{type:Number,default:0},octave:{default:3,type:Number}},setup(s){const a=s,t=fe(a.pitch,a.octave),d=S({filterTaps:!0,preventWindowScrollY:!0,delay:0,eventOptions:{passive:!1}}),l=b=>{K.state=="suspended"&&Q();let{movement:[z,k],tap:V}=b;V?t.active?(t.vol=0,t.pan=50):t.vol=50:(t.vol+=-k/20,t.vol>100&&(t.vol=100),t.vol<0&&(t.vol=0),t.pan+=z/20,t.pan>100&&(t.pan=100),t.pan<0&&(t.pan=0))},n=m(()=>ee(a.pitch,a.octave)),r=m(()=>Math.abs(a.octave+2)*8>40?"hsla(0,0%,0%,"+(t.active?"1":"0.8")+")":"hsla(0,0%,100%,"+(t.active?"1":"0.8")+")");return(b,z)=>{const k=R("drag");return x((c(),p("div",{class:F(["cell",{active:o(t).active}]),"drag-options":d,style:y({backgroundColor:n.value,color:r.value})},[x(i("div",be,[i("div",{class:"volume",style:y({height:o(t).vol+"%"})},null,4)],512),[[C,o(t).vol>0]]),x(i("div",ge,[i("div",{class:"pan absolute bg-gray-100 h-full m-auto",style:y({left:o(t).pan+"%"})},null,4)],512),[[C,o(t).pan!=50]]),u(me,{name:o(D)[s.pitch],hz:o(t).freq,octave:s.octave},null,8,["name","hz","octave"])],14,he)),[[k,l]])}}},ye=w(xe,[["__scopeId","data-v-e6e2e271"]]);const we={class:"button"},ke={class:"uppercase mr-1"},$e={__name:"switch",props:{label:{type:String,default:""},state:{type:Boolean,default:!1}},setup(s){return(a,t)=>(c(),p("div",we,[i("div",{class:"indicator mr-2",style:y({color:s.state?"#fff":"#333"})},"●",4),i("div",ke,f(s.label),1)]))}},h=w($e,[["__scopeId","data-v-82d7c0c7"]]);const O=s=>(A("data-v-2968ffbe"),s=s(),q(),s),Se={class:"flex flex-wrap"},ze={class:"flex flex-col p-2",style:{flex:"10 1 6rem"}},Ce={class:"flex-auto flex flex-wrap rounded-xl dark-bg-dark-700 shadow items-center p-2 gap-2 relative"},Ie={class:"flex px-2 rounded-lg items-center bg-light-300 dark-bg-dark-800"},Te=O(()=>i("div",{class:"p-1 pr-2 font-bold"},"A",-1)),Be=O(()=>i("div",{class:"p-1"},"Hz",-1)),Ae={class:"fullscreen-container",id:"screen"},qe={__name:"table",setup(s){return H("Enter",a=>{a.preventDefault(),e.stopped=!e.stopped}),L(),(a,t)=>{const d=E;return c(),p($,null,[i("div",Se,[u(d,{class:"mb-4 flex-auto",style:{flex:"1 1 2rem"}}),i("div",ze,[i("div",Ce,[u(h,{label:"letters",state:o(e).show.letters,onClick:t[0]||(t[0]=l=>o(e).show.letters=!o(e).show.letters)},null,8,["state"]),u(h,{label:"FREQ",state:o(e).show.hz,onClick:t[1]||(t[1]=l=>o(e).show.hz=!o(e).show.hz)},null,8,["state"]),u(h,{label:"Length",state:o(e).show.len,onClick:t[2]||(t[2]=l=>o(e).show.len=!o(e).show.len)},null,8,["state"]),u(h,{label:"BPM",state:o(e).show.bpm,onClick:t[3]||(t[3]=l=>o(e).show.bpm=!o(e).show.bpm)},null,8,["state"])]),u(U,{name:"fade"},{default:N(()=>[o(e).stopped?v("",!0):(c(),I(h,{key:0,class:"my-4",label:"STOP",state:o(e).stopped,onClick:t[4]||(t[4]=l=>o(e).stopped=!o(e).stopped)},null,8,["state"]))]),_:1}),i("div",Ie,[Te,x(i("input",{class:"mx-1 p-2 max-w-26 dark-bg-dark-800","onUpdate:modelValue":t[5]||(t[5]=l=>o(e).middleA=l),type:"number"},null,512),[[W,o(e).middleA]]),Be])])]),i("div",Ae,[u(B,{top:!0}),(c(!0),p($,null,T(o(e).octave.list,l=>(c(),p("div",{class:"flex w-full",key:l},[(c(!0),p($,null,T(o(D),(n,r)=>(c(),I(ye,{key:n,class:F({dim:!o(te).isIn(n)}),pitch:r,octave:l},null,8,["class","pitch","octave"]))),128))]))),128)),u(B)])],64)}}},Fe=w(qe,[["__scopeId","data-v-2968ffbe"]]),st=JSON.parse('{"title":"Table","description":"Every possible note in a huge expandable table","frontmatter":{"title":"Table","description":"Every possible note in a huge expandable table","cover":"table.png","date":"2022-06-02T00:00:00.000Z"},"headers":[],"relativePath":"practice/pitch/table/index.md","filePath":"practice/pitch/table/index.md","lastUpdated":1676883357000}'),Ne={name:"practice/pitch/table/index.md"},at=Object.assign(Ne,{setup(s){return(a,t)=>{const d=j("client-only");return c(),p("div",null,[u(d,null,{default:N(()=>[u(Fe)]),_:1})])}}});export{st as __pageData,at as default};
