import{T as c,o as l,P as a,b as h,G as p,j as u,r as d,A as g,Q as q,i as x}from"./index.d229a0c3.js";class r extends c{constructor(){super(l(r.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const e=l(r.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new a({context:this.context,units:"number",value:e.Q,param:this._filter.Q}),this.frequency=new a({context:this.context,units:"frequency",value:e.frequency,param:this._filter.frequency}),this.detune=new a({context:this.context,units:"cents",value:e.detune,param:this._filter.detune}),this.gain=new a({context:this.context,units:"decibels",convert:!1,value:e.gain,param:this._filter.gain}),this.type=e.type}static getDefaults(){return Object.assign(c.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(e){h(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._filter.type=e}getFrequencyResponse(e=128){const n=new Float32Array(e);for(let s=0;s<e;s++){const y=Math.pow(s/e,2)*(2e4-20)+20;n[s]=y}const i=new Float32Array(e),o=new Float32Array(e),t=this.context.createBiquadFilter();return t.type=this.type,t.Q.value=this.Q.value,t.frequency.value=this.frequency.value,t.gain.value=this.gain.value,t.getFrequencyResponse(n,i,o),i}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class f extends c{constructor(){super(l(f.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new p({context:this.context}),this.output=new p({context:this.context}),this._filters=[];const e=l(f.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new u({context:this.context,units:"positive",value:e.Q}),this.frequency=new u({context:this.context,units:"frequency",value:e.frequency}),this.detune=new u({context:this.context,units:"cents",value:e.detune}),this.gain=new u({context:this.context,units:"decibels",convert:!1,value:e.gain}),this._type=e.type,this.rolloff=e.rolloff,d(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(c.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(e){h(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(e)!==-1,`Invalid filter type: ${e}`),this._type=e,this._filters.forEach(i=>i.type=e)}get rolloff(){return this._rolloff}set rolloff(e){const n=x(e)?e:parseInt(e,10),i=[-12,-24,-48,-96];let o=i.indexOf(n);h(o!==-1,`rolloff can only be ${i.join(", ")}`),o+=1,this._rolloff=n,this.input.disconnect(),this._filters.forEach(t=>t.disconnect()),this._filters=new Array(o);for(let t=0;t<o;t++){const s=new r({context:this.context});s.type=this._type,this.frequency.connect(s.frequency),this.detune.connect(s.detune),this.Q.connect(s.Q),this.gain.connect(s.gain),this._filters[t]=s}this._internalChannels=this._filters,g(this.input,...this._internalChannels,this.output)}getFrequencyResponse(e=128){const n=new r({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),i=new Float32Array(e).map(()=>1);return this._filters.forEach(()=>{n.getFrequencyResponse(e).forEach((t,s)=>i[s]*=t)}),n.dispose(),i}dispose(){return super.dispose(),this._filters.forEach(e=>{e.dispose()}),q(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}export{f as F};
