import{a8 as o,o as n,a0 as _,v as p,i as c,a2 as a,a9 as b,a1 as d}from"./index.d229a0c3.js";class r extends o{constructor(){super(n(r.getDefaults(),arguments,["callback","value"])),this.name="ToneEvent",this._state=new _("stopped"),this._startOffset=0;const t=n(r.getDefaults(),arguments,["callback","value"]);this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(o.getDefaults(),{callback:p,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let s;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);const i=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||c(this._loop)&&this._loop>1){s=1/0,c(this._loop)&&(s=this._loop*this._getLoopDuration());const h=this._state.getAfter(i);h!==null&&(s=Math.min(s,h.time-i)),s!==1/0&&(s=new a(this.context,s));const u=new a(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),u,new a(this.context,i),s)}else e.id=this.context.transport.schedule(this._tick.bind(this),new a(this.context,i))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});const s=this._state.getBefore(e);let i=e;s!==null&&(i=s.time),this._rescheduleEvents(i)}return this}cancel(t){t=d(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,s=>{this.context.transport.clear(s.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let s=.02;b(this.humanize)||(s=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*s}this.callback(t,this.value)}}_getLoopDuration(){return(this._loopEnd-this._loopStart)/this._playbackRate}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new a(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new a(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){const s=this._getLoopDuration();return(t-e.time)%s/s}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class l extends o{constructor(){super(n(l.getDefaults(),arguments,["callback","interval"])),this.name="Loop";const t=n(l.getDefaults(),arguments,["callback","interval"]);this._event=new r({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(o.getDefaults(),{interval:"4n",callback:p,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}}export{l as L,r as T};
