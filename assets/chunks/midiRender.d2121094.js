import{a as j}from"./commonjsHelpers.042e6b4d.js";import{M as q}from"./Midi.2c05a97b.js";import{t as W}from"./tempo.0cfd0346.js";function Y(n){return typeof n=="number"}function $(n){return typeof n=="string"}function z(n){return typeof n<"u"}function X(n,e){return Math.pow(2,(n-69)/12)*(e||440)}var J=/^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)\s*$/,Z=[0,2,4,5,7,9,11];function Q(n,e,t){if(typeof n!="string")return null;var a=J.exec(n);if(!a||!e&&a[4])return null;var i={letter:a[1].toUpperCase(),acc:a[2].replace(/x/g,"##")};i.pc=i.letter+i.acc,i.step=(i.letter.charCodeAt(0)+3)%7,i.alt=i.acc[0]==="b"?-i.acc.length:i.acc.length;var r=Z[i.step]+i.alt;return i.chroma=r<0?12+r:r%12,a[3]&&(i.oct=+a[3],i.midi=r+12*(i.oct+1),i.freq=X(i.midi,t)),e&&(i.tonicOf=a[4]),i}function tt(n){if((Y(n)||$(n))&&n>=0&&n<128)return+n;var e=Q(n);return e&&z(e.midi)?e.midi:null}function et(n){return Array.isArray(n)&&n.length===2?n[0]*7+n[1]*12+12:tt(n)}var nt="C Db D Eb E F Gb G Ab A Bb B".split(" "),at="C C# D D# E F F# G G# A A# B".split(" ");function S(n,e){if(n===!0||n===!1)return function(r){return S(r,n)};n=Math.round(n);var t=e===!0?at:nt,a=t[n%12],i=Math.floor(n/12)-1;return a+i}const it=Object.freeze(Object.defineProperty({__proto__:null,note:S,toMidi:et},Symbol.toStringTag,{value:"Module"})),rt=j(it);var w=rt,h={VERSION:"2.1.4",HEADER_CHUNK_TYPE:[77,84,104,100],HEADER_CHUNK_LENGTH:[0,0,0,6],HEADER_CHUNK_FORMAT0:[0,0],HEADER_CHUNK_FORMAT1:[0,1],HEADER_CHUNK_DIVISION:[0,128],TRACK_CHUNK_TYPE:[77,84,114,107],META_EVENT_ID:255,META_TEXT_ID:1,META_COPYRIGHT_ID:2,META_TRACK_NAME_ID:3,META_INSTRUMENT_NAME_ID:4,META_LYRIC_ID:5,META_MARKER_ID:6,META_CUE_POINT:7,META_TEMPO_ID:81,META_SMTPE_OFFSET:84,META_TIME_SIGNATURE_ID:88,META_KEY_SIGNATURE_ID:89,META_END_OF_TRACK_ID:[47,0],CONTROLLER_CHANGE_STATUS:176,PITCH_BEND_STATUS:224};function A(n){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(n)}function D(){D=function(i,r){return new t(i,void 0,r)};var n=RegExp.prototype,e=new WeakMap;function t(i,r,o){var u=new RegExp(i,r);return e.set(u,o||e.get(i)),m(u,t.prototype)}function a(i,r){var o=e.get(r);return Object.keys(o).reduce(function(u,s){return u[s]=i[o[s]],u},Object.create(null))}return ot(t,RegExp),t.prototype.exec=function(i){var r=n.exec.call(this,i);return r&&(r.groups=a(r,this)),r},t.prototype[Symbol.replace]=function(i,r){if(typeof r=="string"){var o=e.get(this);return n[Symbol.replace].call(this,i,r.replace(/\$<([^>]+)>/g,function(s,d){return"$"+o[d]}))}if(typeof r=="function"){var u=this;return n[Symbol.replace].call(this,i,function(){var s=arguments;return typeof s[s.length-1]!="object"&&(s=[].slice.call(s)).push(a(s,u)),r.apply(this,s)})}return n[Symbol.replace].call(this,i,r)},D.apply(this,arguments)}function l(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function M(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function v(n,e,t){return e&&M(n.prototype,e),t&&M(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function ot(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&m(n,e)}function m(n,e){return m=Object.setPrototypeOf||function(a,i){return a.__proto__=i,a},m(n,e)}var c=function(){function n(){l(this,n)}return v(n,null,[{key:"version",value:function(){return h.VERSION}},{key:"stringToBytes",value:function(t){return t.split("").map(function(a){return a.charCodeAt()})}},{key:"isNumeric",value:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}},{key:"getPitch",value:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"C4";return 60-w.toMidi(a)+w.toMidi(t)}},{key:"numberToVariableLength",value:function(t){t=Math.round(t);for(var a=t&127;t=t>>7;)a<<=8,a|=t&127|128;for(var i=[];i.push(a&255),a&128;)a>>=8;return i}},{key:"stringByteCount",value:function(t){return encodeURI(t).split(/%..|./).length-1}},{key:"numberFromBytes",value:function(t){var a="",i;return t.forEach(function(r){i=r.toString(16),i.length==1&&(i="0"+i),a+=i}),parseInt(a,16)}},{key:"numberToBytes",value:function(t,a){a=a||1;var i=t.toString(16);i.length&1&&(i="0"+i);var r=i.match(/.{2}/g);if(r=r.map(function(o){return parseInt(o,16)}),r.length<a)for(;a-r.length>0;)r.unshift(0);return r}},{key:"toArray",value:function(t){return Array.isArray(t)?t:[t]}},{key:"convertVelocity",value:function(t){return t=t>100?100:t,Math.round(t/100*127)}},{key:"getTickDuration",value:function(t){if(Array.isArray(t))return t.map(function(o){return n.getTickDuration(o)}).reduce(function(o,u){return o+u},0);if(t=t.toString(),t.toLowerCase().charAt(0)==="t"){var a=parseInt(t.substring(1));if(isNaN(a)||a<0)throw new Error(t+" is not a valid duration.");return a}var i=n.numberFromBytes(h.HEADER_CHUNK_DIVISION),r=i*n.getDurationMultiplier(t);return n.getRoundedIfClose(r)}},{key:"getRoundedIfClose",value:function(t){var a=Math.round(t);return Math.abs(a-t)<1e-6?a:t}},{key:"getPrecisionLoss",value:function(t){var a=Math.round(t);return a-t}},{key:"getDurationMultiplier",value:function(t){if(t==="0")return 0;var a=t.match(D(/^(d+)?(\d+)(?:t(\d*))?/,{dotted:1,base:2,tuplet:3}));if(a){var i=Number(a.groups.base),r=i===1||(i&i-1)===0;if(r){var o=i/4,u=1/o,s=a.groups,d=s.dotted,E=s.tuplet;if(d){var g=d.length,T=Math.pow(2,g);u=u+u*((T-1)/T)}if(typeof E=="string"){var _=u*2,p=Number(E||"3");u=_/p}return u}}throw new Error(t+" is not a valid duration.")}}]),n}(),B=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="controller",this.data=c.numberToVariableLength(e.delta).concat(h.CONTROLLER_CHANGE_STATUS,e.controllerNumber,e.controllerValue)}),O=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="cue-point";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_CUE_POINT,c.numberToVariableLength(t.length),t)}),b=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="end-track",this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_END_OF_TRACK_ID)}),R=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="instrument-name";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_INSTRUMENT_NAME_ID,c.numberToVariableLength(t.length),t)}),P=v(function n(e,t){l(this,n),this.type="key-signature";var a=t||0;if(e=e||0,typeof t>"u"){var i=[["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"],["ab","eb","bb","f","c","g","d","a","e","b","f#","c#","g#","d#","a#"]],r=e.length,o=e||"C";if(e[0]===e[0].toLowerCase()&&(a=1),r>1)switch(e.charAt(r-1)){case"m":a=1,o=e.charAt(0).toLowerCase(),o=o.concat(e.substring(1,r-1));break;case"-":a=1,o=e.charAt(0).toLowerCase(),o=o.concat(e.substring(1,r-1));break;case"M":a=0,o=e.charAt(0).toUpperCase(),o=o.concat(e.substring(1,r-1));break;case"+":a=0,o=e.charAt(0).toUpperCase(),o=o.concat(e.substring(1,r-1));break}var u=i[a].indexOf(o);e=u===-1?0:u-7}this.data=c.numberToVariableLength(0).concat(h.META_EVENT_ID,h.META_KEY_SIGNATURE_ID,[2],c.numberToBytes(e,1),c.numberToBytes(a,1))}),V=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="lyric";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_LYRIC_ID,c.numberToVariableLength(t.length),t)}),L=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="marker";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_MARKER_ID,c.numberToVariableLength(t.length),t)}),f=function(){function n(e){l(this,n),e=Object.assign({channel:1,startTick:null,velocity:50,wait:0},e),this.type="note-on",this.channel=e.channel,this.pitch=e.pitch,this.wait=e.wait,this.velocity=e.velocity,this.startTick=e.startTick,this.tick=null,this.delta=null,this.data=e.data}return v(n,[{key:"buildData",value:function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.data=[],this.startTick?(this.tick=c.getRoundedIfClose(this.startTick),t.tickPointer==0&&(this.delta=this.tick)):(this.delta=c.getTickDuration(this.wait),this.tick=c.getRoundedIfClose(t.tickPointer+this.delta)),this.deltaWithPrecisionCorrection=c.getRoundedIfClose(this.delta-a),this.data=c.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.getStatusByte(),c.getPitch(this.pitch,i.middleC),c.convertVelocity(this.velocity)),this}},{key:"getStatusByte",value:function(){return 144+this.channel-1}}]),n}(),y=function(){function n(e){l(this,n),e=Object.assign({channel:1,velocity:50,tick:null},e),this.type="note-off",this.channel=e.channel,this.pitch=e.pitch,this.duration=e.duration,this.velocity=e.velocity,this.tick=e.tick,this.delta=c.getTickDuration(this.duration),this.data=e.data}return v(n,[{key:"buildData",value:function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.tick===null&&(this.tick=c.getRoundedIfClose(this.delta+t.tickPointer)),this.deltaWithPrecisionCorrection=c.getRoundedIfClose(this.delta-a),this.data=c.numberToVariableLength(this.deltaWithPrecisionCorrection).concat(this.getStatusByte(),c.getPitch(this.pitch,i.middleC),c.convertVelocity(this.velocity)),this}},{key:"getStatusByte",value:function(){return 128+this.channel-1}}]),n}(),k=function(){function n(e){l(this,n),e=Object.assign({channel:1,repeat:1,sequential:!1,startTick:null,velocity:50,wait:0},e),this.data=[],this.type="note",this.pitch=c.toArray(e.pitch),this.channel=e.channel,this.duration=e.duration,this.grace=e.grace,this.repeat=e.repeat,this.sequential=e.sequential,this.startTick=e.startTick,this.velocity=e.velocity,this.wait=e.wait,this.tickDuration=c.getTickDuration(this.duration),this.restDuration=c.getTickDuration(this.wait),this.events=[]}return v(n,[{key:"buildData",value:function(){var t=this;if(this.data=[],this.grace){var a=1;this.grace=c.toArray(this.grace),this.grace.forEach(function(){var o=new n({pitch:t.grace,duration:"T"+a});t.data=t.data.concat(o.data)})}if(this.sequential)for(var r=0;r<this.repeat;r++)this.pitch.forEach(function(o,u){var s=new f({channel:t.channel,wait:u>0?0:t.wait,velocity:t.velocity,pitch:o,startTick:t.startTick}),d=new y({channel:t.channel,duration:t.duration,velocity:t.velocity,pitch:o});t.events.push(s,d)});else for(var i=0;i<this.repeat;i++)this.pitch.forEach(function(o,u){var s;u==0?s=new f({channel:t.channel,wait:t.wait,velocity:t.velocity,pitch:o,startTick:t.startTick}):s=new f({channel:t.channel,wait:0,velocity:t.velocity,pitch:o,startTick:t.startTick}),t.events.push(s)}),this.pitch.forEach(function(o,u){var s;u==0?s=new y({channel:t.channel,duration:t.duration,velocity:t.velocity,pitch:o,tick:t.startTick!==null?c.getTickDuration(t.duration)+t.startTick:null}):s=new y({channel:t.channel,duration:0,velocity:t.velocity,pitch:o,tick:t.startTick!==null?c.getTickDuration(t.duration)+t.startTick:null}),t.events.push(s)});return this}}]),n}(),ct=function(e){return e<=0?Math.floor(16384*(e+1)/2):Math.floor(16383*(e+1)/2)},F=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="pitch-bend";var t=ct(e.bend),a=e.channel||0,i=t&127,r=t>>7&127;this.data=c.numberToVariableLength(e.delta).concat(h.PITCH_BEND_STATUS|a,i,r)}),ut=function(){function n(e){l(this,n),this.fields=Object.assign({channel:1,delta:0},e),this.type="program",this.data=c.numberToVariableLength(this.fields.delta).concat(this.getStatusByte(),this.fields.instrument)}return v(n,[{key:"getStatusByte",value:function(){return 192+this.fields.channel-1}}]),n}(),C=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="tempo",this.tick=e.tick;var t=Math.round(6e7/e.bpm);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_TEMPO_ID,[3],c.numberToBytes(t,3))}),U=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="text";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_TEXT_ID,c.numberToVariableLength(t.length),t)}),H=v(function n(e,t,a,i){l(this,n),this.type="time-signature",this.data=c.numberToVariableLength(0).concat(h.META_EVENT_ID,h.META_TIME_SIGNATURE_ID,[4],c.numberToBytes(e,1),c.numberToBytes(Math.log2(t),1),c.numberToBytes(a||24,1),c.numberToBytes(i||8,1))}),st=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="copyright";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_COPYRIGHT_ID,c.numberToVariableLength(t.length),t)}),K=v(function n(e){l(this,n),e=Object.assign({delta:0},e),this.type="track-name";var t=c.stringToBytes(e.text);this.data=c.numberToVariableLength(e.delta).concat(h.META_EVENT_ID,h.META_TRACK_NAME_ID,c.numberToVariableLength(t.length),t)}),G=function(){function n(){l(this,n),this.type=h.TRACK_CHUNK_TYPE,this.data=[],this.size=[],this.events=[],this.explicitTickEvents=[],this.tickPointer=0}return v(n,[{key:"addEvent",value:function(t,a){var i=this;return c.toArray(t).forEach(function(r,o){if(r instanceof k){if(typeof a=="function"){var u=a(o,r);if(A(u)==="object")for(var s in u)switch(s){case"channel":r.channel=u[s];break;case"duration":r.duration=u[s];break;case"sequential":r.sequential=u[s];break;case"velocity":r.velocity=c.convertVelocity(u[s]);break}}r.startTick!==null?i.explicitTickEvents.push(r):r.buildData().events.forEach(function(d){return i.events.push(d)})}else r instanceof b&&i.removeEventsByType("end-track"),i.events.push(r)}),this}},{key:"buildData",value:function(){var t=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!this.events.length||!(this.events[this.events.length-1]instanceof b))&&this.addEvent(new b),this.data=[],this.size=[],this.tickPointer=0;var i=0;return this.events.forEach(function(r){if(r instanceof f||r instanceof y){var o=r.buildData(t,i,a);i=c.getPrecisionLoss(r.deltaWithPrecisionCorrection||0),t.data=t.data.concat(o.data),t.tickPointer=c.getRoundedIfClose(r.tick)}else r instanceof C&&(t.tickPointer=c.getRoundedIfClose(r.tick)),t.data=t.data.concat(r.data)}),this.mergeExplicitTickEvents(),this.size=c.numberToBytes(this.data.length,4),this}},{key:"mergeExplicitTickEvents",value:function(){var t=this;this.explicitTickEvents.length&&(this.explicitTickEvents.sort(function(a,i){return a.startTick-i.startTick}),this.explicitTickEvents.forEach(function(a){a.buildData().events.forEach(function(i){return i.buildData(t)}),a.events.forEach(function(i){return t.mergeSingleEvent(i)})}),this.explicitTickEvents=[],this.buildData())}},{key:"mergeTrack",value:function(t){var a=this;this.buildData(),t.buildData().events.forEach(function(i){return a.mergeSingleEvent(i)})}},{key:"mergeSingleEvent",value:function(t){if(!this.events.length){this.addEvent(t);return}for(var a,i=0;i<this.events.length&&!(this.events[i].tick>t.tick);i++)a=i;var r=a+1;t.delta=t.tick-this.events[a].tick,this.events.splice(r,0,t);for(var o=r+1;o<this.events.length;o++)this.events[o].delta=this.events[o].tick-this.events[o-1].tick}},{key:"removeEventsByType",value:function(t){var a=this;return this.events.forEach(function(i,r){i.type===t&&a.events.splice(r,1)}),this}},{key:"setTempo",value:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return this.addEvent(new C({bpm:t,tick:a}))}},{key:"setTimeSignature",value:function(t,a,i,r){return this.addEvent(new H(t,a,i,r))}},{key:"setKeySignature",value:function(t,a){return this.addEvent(new P(t,a))}},{key:"addText",value:function(t){return this.addEvent(new U({text:t}))}},{key:"addCopyright",value:function(t){return this.addEvent(new st({text:t}))}},{key:"addTrackName",value:function(t){return this.addEvent(new K({text:t}))}},{key:"addInstrumentName",value:function(t){return this.addEvent(new R({text:t}))}},{key:"addMarker",value:function(t){return this.addEvent(new L({text:t}))}},{key:"addCuePoint",value:function(t){return this.addEvent(new O({text:t}))}},{key:"addLyric",value:function(t){return this.addEvent(new V({text:t}))}},{key:"polyModeOn",value:function(){var t=new f({data:[0,176,126,0]});return this.addEvent(t)}},{key:"setPitchBend",value:function(t){return this.addEvent(new F({bend:t}))}},{key:"controllerChange",value:function(t,a){return this.addEvent(new B({controllerNumber:t,controllerValue:a}))}}]),n}(),ht=function(){function n(){l(this,n)}return v(n,[{key:"trackFromVoice",value:function(t){var a=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{addRenderedAccidentals:!1},r=new G,o=[];return t.tickables.forEach(function(u){u.noteType==="n"?(r.addEvent(new k({pitch:u.keys.map(function(s,d){return a.convertPitch(s,d,u,i.addRenderedAccidentals)}),duration:a.convertDuration(u),wait:o})),o=[]):u.noteType==="r"&&o.push(a.convertDuration(u))}),o.length>0&&r.addEvent(new k({pitch:"[c4]",duration:"0",wait:o,velocity:"0"})),r}},{key:"convertPitch",value:function(t,a,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,o=t.split("/"),u=o[0].substring(1).replace("n","");if(r){var s;(s=i.getAccidentals())===null||s===void 0||s.forEach(function(d){d.index===a&&(d.type==="n"?u="":u+=d.type)})}return o[0][0]+u+o[1]}},{key:"convertDuration",value:function(t){return"d".repeat(t.dots)+this.convertBaseDuration(t.duration)+(t.tuplet?"t"+t.tuplet.num_notes:"")}},{key:"convertBaseDuration",value:function(t){switch(t){case"w":return"1";case"h":return"2";case"q":return"4";default:return t}}}]),n}(),lt=v(function n(e){l(this,n),this.type=h.HEADER_CHUNK_TYPE;var t=e>1?h.HEADER_CHUNK_FORMAT1:h.HEADER_CHUNK_FORMAT0;this.data=t.concat(c.numberToBytes(e,2),h.HEADER_CHUNK_DIVISION),this.size=[0,0,0,this.data.length]}),vt=function(){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};l(this,n),this.tracks=c.toArray(e),this.options=t}return v(n,[{key:"buildData",value:function(){var t=this,a=[];return a.push(new lt(this.tracks.length)),this.tracks.forEach(function(i){a.push(i.buildData(t.options))}),a}},{key:"buildFile",value:function(){var t=[];return this.buildData().forEach(function(a){return t=t.concat(a.type,a.size,a.data)}),new Uint8Array(t)}},{key:"base64",value:function(){return typeof btoa=="function"?btoa(String.fromCharCode.apply(null,this.buildFile())):Buffer.from(this.buildFile()).toString("base64")}},{key:"dataUri",value:function(){return"data:audio/midi;base64,"+this.base64()}},{key:"setOption",value:function(t,a){return this.options[t]=a,this}},{key:"stdout",value:function(){return process.stdout.write(Buffer.from(this.buildFile()))}}]),n}(),dt={Constants:h,ControllerChangeEvent:B,CuePointEvent:O,EndTrackEvent:b,InstrumentNameEvent:R,KeySignatureEvent:P,LyricEvent:V,MarkerEvent:L,NoteOnEvent:f,NoteOffEvent:y,NoteEvent:k,PitchBendEvent:F,ProgramChangeEvent:ut,TempoEvent:C,TextEvent:U,TimeSignatureEvent:H,Track:G,TrackNameEvent:K,Utils:c,VexFlow:ht,Writer:vt},x=dt;let I=["C","E","G","B","D","F","A","C#","D#","F#","G#","A#"];function Tt(n){let e=[];console.log(n),n.forEach((i,r)=>{var s;let o=512/((s=i==null?void 0:i.meter)==null?void 0:s.under),u=new x.Track;u.setTempo(W.bpm,0),u.addInstrumentName("116"),u.addTrackName("Chromatone beat "+r),u.setTimeSignature(4,4),i.steps.forEach((d,E)=>{d.forEach(g=>{if(i.mutes[E]||i.mutes[g])return;let[T,_]=g.split("-").map(Number),p=o/d.length,N=0;d.length>1&&(N=_*p),u.addEvent(new x.NoteEvent({pitch:i.accents[E]?I[r*2]+"2":I[r*2+1]+"2",duration:`T${p}`,startTick:o*T+N,velocity:i.accents[E]||i.accents[g]?100:64}))})}),e[r]=u});var t=new x.Writer(e);let a=new q.Midi(t.buildFile());a.tracks.forEach((i,r)=>{a.tracks[r].instrument.number=119}),Et(a.toArray(),"Chromatone-beat")}function Et(n,e,t="mid"){const a=new Blob([n]),i=`${e}.${t}`;if(navigator.msSaveBlob)navigator.msSaveBlob(a,i);else{const r=document.createElement("a");if(r.download!==void 0){const o=URL.createObjectURL(a);r.setAttribute("href",o),r.setAttribute("download",i),r.setAttribute("target","_blank"),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)}}}export{x as b,Et as c,Tt as r};
