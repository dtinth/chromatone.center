import{d as ne,o as c,k as C,v as be,x as X,y as De,W as Re,T as h,G as w,a as ke,r as J,q as ie,z as Z,_ as ee,A as Ce,B as Ve,n as Me,s as ge,C as re,P as O,u as Oe,V as Se,t as Ae,D as Te,H as Ee,J as Le}from"./index.098dc14b.js";import{L as T,x as b,r as te,b as P,a4 as je,W as ve,H as oe,s as S,a5 as Ie,M as Ue,a6 as Pe,a7 as Fe,$ as Ne,a8 as U,O as ze,P as ce}from"./framework.c7ad3ca2.js";class E extends ne{constructor(){super(c(E.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const e=c(E.getDefaults(),arguments,["type"]);this._playbackRate=e.playbackRate,this.type=e.type,this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut}static getDefaults(){return Object.assign(ne.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(e){if(C(e in ue,"Noise: invalid type: "+e),this._type!==e&&(this._type=e,this.state==="started")){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e,this._source&&(this._source.playbackRate.value=e)}_start(e){const t=ue[this._type];this._source=new be({url:t,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(e),Math.random()*(t.duration-.001))}_stop(e){this._source&&(this._source.stop(this.toSeconds(e)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(e){this._stop(e),this._start(e)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const R=44100*5,Y=2,_={brown:null,pink:null,white:null},ue={get brown(){if(!_.brown){const a=[];for(let e=0;e<Y;e++){const t=new Float32Array(R);a[e]=t;let s=0;for(let n=0;n<R;n++){const i=Math.random()*2-1;t[n]=(s+.02*i)/1.02,s=t[n],t[n]*=3.5}}_.brown=new X().fromArray(a)}return _.brown},get pink(){if(!_.pink){const a=[];for(let e=0;e<Y;e++){const t=new Float32Array(R);a[e]=t;let s,n,i,r,o,p,d;s=n=i=r=o=p=d=0;for(let y=0;y<R;y++){const f=Math.random()*2-1;s=.99886*s+f*.0555179,n=.99332*n+f*.0750759,i=.969*i+f*.153852,r=.8665*r+f*.3104856,o=.55*o+f*.5329522,p=-.7616*p-f*.016898,t[y]=s+n+i+r+o+p+d+f*.5362,t[y]*=.11,d=f*.115926}}_.pink=new X().fromArray(a)}return _.pink},get white(){if(!_.white){const a=[];for(let e=0;e<Y;e++){const t=new Float32Array(R);a[e]=t;for(let s=0;s<R;s++)t[s]=Math.random()*2-1}_.white=new X().fromArray(a)}return _.white}};class We extends De{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new Re({context:this.context,mapping:e=>Math.abs(e)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class F extends h{constructor(){super(Object.assign(c(F.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new We({context:this.context}),this.a=new w({context:this.context,gain:0}),this.b=new w({context:this.context,gain:0}),this.output=new w({context:this.context}),this._internalChannels=[this.a,this.b];const e=c(F.getDefaults(),arguments,["fade"]);this.fade=new ke({context:this.context,units:"normalRange",value:e.fade}),J(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",ie(this._split,this.a.gain,0),ie(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(h.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class he extends h{constructor(e){super(e),this.name="Effect",this._dryWet=new F({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new w({context:this.context}),this.effectReturn=new w({context:this.context}),this.input=new w({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(e.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],J(this,"wet")}static getDefaults(){return Object.assign(h.getDefaults(),{wet:1})}connectEffect(e){return this._internalChannels.push(e),this.effectSend.chain(e,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class N extends h{constructor(){super(c(N.getDefaults(),arguments,["channels"])),this.name="Split";const e=c(N.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(e.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(h.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class z extends h{constructor(){super(c(z.getDefaults(),arguments,["channels"])),this.name="Merge";const e=c(z.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(e.channels)}static getDefaults(){return Object.assign(h.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class W extends he{constructor(){super(c(W.getDefaults(),arguments,["decay"])),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();const e=c(W.getDefaults(),arguments,["decay"]);this._decay=e.decay,this._preDelay=e.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(he.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(e){e=this.toSeconds(e),Z(e,.001),this._decay=e,this.generate()}get preDelay(){return this._preDelay}set preDelay(e){e=this.toSeconds(e),Z(e,0),this._preDelay=e,this.generate()}generate(){return ee(this,void 0,void 0,function*(){const e=this.ready,t=new Ce(2,this._decay+this._preDelay,this.context.sampleRate),s=new E({context:t}),n=new E({context:t}),i=new z({context:t});s.connect(i,0,0),n.connect(i,0,1);const r=new w({context:t}).toDestination();i.connect(r),s.start(0),n.start(0),r.gain.setValueAtTime(0,0),r.gain.setValueAtTime(1,this._preDelay),r.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const o=t.render();return this.ready=o.then(Ve),yield e,this._convolver.buffer=(yield o).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class L extends h{constructor(){super(c(L.getDefaults(),arguments,["type","size"])),this.name="Analyser",this._analysers=[],this._buffers=[];const e=c(L.getDefaults(),arguments,["type","size"]);this.input=this.output=this._gain=new w({context:this.context}),this._split=new N({context:this.context,channels:e.channels}),this.input.connect(this._split),Z(e.channels,1);for(let t=0;t<e.channels;t++)this._analysers[t]=this.context.createAnalyser(),this._split.connect(this._analysers[t],t,0);this.size=e.size,this.type=e.type,this.smoothing=e.smoothing}static getDefaults(){return Object.assign(h.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((e,t)=>{const s=this._buffers[t];this._type==="fft"?e.getFloatFrequencyData(s):this._type==="waveform"&&e.getFloatTimeDomainData(s)}),this.channels===1?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(e){this._analysers.forEach((t,s)=>{t.fftSize=e*2,this._buffers[s]=new Float32Array(e)})}get channels(){return this._analysers.length}get type(){return this._type}set type(e){C(e==="waveform"||e==="fft",`Analyser: invalid type: ${e}`),this._type=e}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(e){this._analysers.forEach(t=>t.smoothingTimeConstant=e)}dispose(){return super.dispose(),this._analysers.forEach(e=>e.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class B extends h{constructor(){super(c(B.getDefaults(),arguments)),this.name="MeterBase",this.input=this.output=this._analyser=new L({context:this.context,size:256,type:"waveform"})}dispose(){return super.dispose(),this._analyser.dispose(),this}}class $ extends B{constructor(){super(c($.getDefaults(),arguments,["smoothing"])),this.name="Meter";const e=c($.getDefaults(),arguments,["smoothing"]);this.input=this.output=this._analyser=new L({context:this.context,size:256,type:"waveform",channels:e.channelCount}),this.smoothing=e.smoothing,this.normalRange=e.normalRange,this._rms=new Array(e.channelCount),this._rms.fill(0)}static getDefaults(){return Object.assign(B.getDefaults(),{smoothing:.8,normalRange:!1,channelCount:1})}getLevel(){return Me("'getLevel' has been changed to 'getValue'"),this.getValue()}getValue(){const e=this._analyser.getValue(),s=(this.channels===1?[e]:e).map((n,i)=>{const r=n.reduce((p,d)=>p+d*d,0),o=Math.sqrt(r/n.length);return this._rms[i]=Math.max(o,this._rms[i]*this.smoothing),this.normalRange?this._rms[i]:ge(this._rms[i])});return this.channels===1?s[0]:s}get channels(){return this._analyser.channels}dispose(){return super.dispose(),this._analyser.dispose(),this}}class A extends h{constructor(){super(c(A.getDefaults(),arguments)),this.name="Recorder";const e=c(A.getDefaults(),arguments);this.input=new w({context:this.context}),C(A.supported,"Media Recorder API is not available"),this._stream=this.context.createMediaStreamDestination(),this.input.connect(this._stream),this._recorder=new MediaRecorder(this._stream.stream,{mimeType:e.mimeType})}static getDefaults(){return h.getDefaults()}get mimeType(){return this._recorder.mimeType}static get supported(){return re!==null&&Reflect.has(re,"MediaRecorder")}get state(){return this._recorder.state==="inactive"?"stopped":this._recorder.state==="paused"?"paused":"started"}start(){return ee(this,void 0,void 0,function*(){C(this.state!=="started","Recorder is already started");const e=new Promise(t=>{const s=()=>{this._recorder.removeEventListener("start",s,!1),t()};this._recorder.addEventListener("start",s,!1)});return this._recorder.start(),yield e})}stop(){return ee(this,void 0,void 0,function*(){C(this.state!=="stopped","Recorder is not started");const e=new Promise(t=>{const s=n=>{this._recorder.removeEventListener("dataavailable",s,!1),t(n.data)};this._recorder.addEventListener("dataavailable",s,!1)});return this._recorder.stop(),yield e})}pause(){return C(this.state==="started","Recorder must be started"),this._recorder.pause(),this}dispose(){return super.dispose(),this.input.dispose(),this._stream.disconnect(),this}}class G extends h{constructor(){super(c(G.getDefaults(),arguments,["threshold","ratio"])),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor;const e=c(G.getDefaults(),arguments,["threshold","ratio"]);this.threshold=new O({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new O({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new O({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new O({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new O({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),J(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(h.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}class j extends h{constructor(){super(Object.assign(c(j.getDefaults(),arguments,["threshold"]))),this.name="Limiter";const e=c(j.getDefaults(),arguments,["threshold"]);this._compressor=this.input=this.output=new G({context:this.context,ratio:20,attack:.003,release:.01,threshold:e.threshold}),this.threshold=this._compressor.threshold,J(this,"threshold")}static getDefaults(){return Object.assign(h.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}}const x=T("cast-camera","default"),V=T("cast-mic","default");b();const Be=b(""),le=b(!0),q=T("slidev-record-mimetype","video/webm"),_e={"video/webm":"webm","video/webm;codecs=h264":"mp4","video/x-matroska;codecs=avc1":"mkv"};function I(a,e){const t=new Date,s=r=>`${r}`.padStart(2,"0"),n=`${s(t.getMonth()+1)}${s(t.getDate())}-${s(t.getHours())}${s(t.getMinutes())}`,i=e?_e[e]:"webm";return`${[n,a,Be.value].filter(r=>!!r).join("-")}.${i}`}function Xe(){return MediaRecorder&&typeof(MediaRecorder==null?void 0:MediaRecorder.isTypeSupported)=="function"?Object.keys(_e).filter(a=>MediaRecorder.isTypeSupported(a)):[]}const Ye=te({screen:P(()=>I("screen",q.value)),camera:P(()=>I("camera",q.value))}),{devices:Ze,videoInputs:de,audioInputs:pe,ensurePermissions:fe}=je({onUpdated:function(){var a,e;x.value!=="none"&&(de.value.find(t=>t.deviceId===x.value)||(x.value=((a=de.value[0])==null?void 0:a.deviceId)||"default")),V.value!=="none"&&(pe.value.find(t=>t.deviceId===V.value)||(V.value=((e=pe.value[0])==null?void 0:e.deviceId)||"default"))}});function me(a,e){const t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",a),document.body.appendChild(t),t.click(),document.body.removeChild(t)}function $e(){const a=b(!1),e=b(),t=ve();oe(a,l=>l?e.value=Date.now():e.value=null);const s=P(()=>e.value?t.value-e.value:0),n=b(!1),i=S(),r=S(),o=S(),p=S(),d=S(),y={type:"video",bitsPerSecond:4*256*8*1024,timeSlice:24*60*60*1e3};async function f(){x.value!=="none"&&(n.value?(n.value=!1,a.value||D(o)):(await K(),o.value&&(n.value=!!o.value)))}async function K(){if(await fe(),await Ue(),!o.value){if(x.value==="none"&&V.value==="none")return;o.value=await navigator.mediaDevices.getUserMedia({video:x.value==="none"||le.value!==!0?!1:{deviceId:x.value},audio:V.value==="none"?!1:{deviceId:V.value}})}}oe(x,async l=>{if(l==="none")D(o);else{if(a.value)return;o.value&&(D(o),await K())}});async function ae(l){var g;await fe();const{default:m}=await Pe(()=>import("./RecordRTC.27348e4f.js").then(v=>v.R),["assets/chunks/RecordRTC.27348e4f.js","assets/chunks/commonjsHelpers.de833af9.js"]);await K(),p.value=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:30,width:3840,height:2160}}),p.value.addEventListener("inactive",Q),d.value=new MediaStream,p.value.getVideoTracks().forEach(v=>d.value.addTrack(v)),Object.assign(y,l),o.value&&(d.value.addTrack((g=u.stream.stream.getAudioTracks())==null?void 0:g[0]),i.value=new m(o.value,y),i.value.startRecording()),r.value=new m(d.value,y),r.value.startRecording(),a.value=!0}async function Q(){var l,m;a.value=!1,(l=i.value)==null||l.stopRecording(()=>{if(le.value){const g=i.value.getBlob(),v=URL.createObjectURL(g);me(I("camera",q.value),v),window.URL.revokeObjectURL(v)}i.value=void 0,n.value||D(o)}),(m=r.value)==null||m.stopRecording(()=>{const g=r.value.getBlob(),v=URL.createObjectURL(g);me(I("screen",q.value),v),window.URL.revokeObjectURL(v),D(p),D(d),r.value=void 0})}function D(l){const m=l.value;m&&(m.getTracks().forEach(g=>{g.stop(),m.removeTrack(g)}),l.value=void 0)}function xe(){a.value?Q():ae()}return Ie("beforeunload",l=>{a.value&&(confirm("Recording is not saved yet, do you want to leave?")||(l.preventDefault(),l.returnValue=""))}),{recording:a,recordingTime:s,showAvatar:n,toggleRecording:xe,startRecording:ae,stopRecording:Q,toggleAvatar:f,recorderCamera:i,recorderSlides:r,streamCamera:o,streamCapture:p,streamSlides:d}}const et=$e();let M;const H=b(!1),we=Fe(H),Ge=ve(),qe=P(()=>Ge.value-we.value),He={start(){M||se(),M.start(),H.value=!0},async stop(){H.value=!1;const a=await M.stop(),e=URL.createObjectURL(a),t=document.createElement("a");t.download=I("rec"),t.href=e,t.click()}};function se(){return M||(M=new A),{recorder:M,record:He,recording:H,toggled:we,duration:qe}}const k=te({initiated:!1,mute:T("mute",!1),volume:Oe(T("main-vol",1),0,2),meter:0}),u=te({}),ye=Ne({});function Je(){if(!k.initiated){Ae(),u.context=new Te().rawContext,u.destination=Ee();const{recorder:a}=se();u.stream=U(Le.createMediaStreamDestination()),u.meter=U(new $().toDestination()),u.meter.normalRange=!0,u.meter.connect(u.stream),u.meter.connect(a),ze(()=>{k.meter=u.meter.getValue()}),u.limiter=U(new j(-18).connect(u.meter)),u.reverb=U(new W({decay:1,wet:.5}).connect(u.meter)),u.limiter.connect(u.reverb),ce(()=>{u.destination.mute=k.mute}),ce(()=>{u.destination.volume.targetRampTo(ge(k.volume),.1)}),k.initiated=!0}return{audio:k,master:u,channels:ye}}function tt(a=(Math.random()*1e3).toFixed(0),e){const{master:t}=Je(),s=new Se().connect(t.limiter),{recorder:n}=se();s.connect(n);const i=new j(e).connect(s);return ye[a]={channel:i,volume:s}}function st(){if(window.AudioContext=window.AudioContext||(window==null?void 0:window.webkitAudioContext),!window.AudioContext)return alert("AudioContext not supported");navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(a){const e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e||alert("getUserMedia is not implemented in this browser"),new Promise(function(t,s){e.call(navigator,a,t,s)})})}export{G as C,he as E,z as M,E as N,W as R,N as S,F as a,$ as b,tt as c,A as d,B as e,x as f,et as g,de as h,st as i,pe as j,Xe as k,_e as l,u as m,fe as n,V as o,q as p,se as q,le as r,Be as s,Ye as t,Je as u};
