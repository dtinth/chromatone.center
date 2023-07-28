import{k as O,j as Q,o as w,c as C,e as U,u as V,b as N}from"./chunks/framework.eba39b59.js";import{d as G}from"./chunks/map.1f6c2e51.js";var g=["x","y","z"],f=function(t){Object.assign(this,{uniforms:{},geometry:{vertices:[{x:0,y:0,z:0}]},mode:0,modifiers:{},attributes:[],multiplier:1,buffers:[]}),Object.assign(this,t),this.prepareProgram(),this.prepareUniforms(),this.prepareAttributes()};f.prototype.compileShader=function(t,e){var r=this.gl.createShader(t);return this.gl.shaderSource(r,e),this.gl.compileShader(r),r},f.prototype.prepareProgram=function(){var t=this.gl,e=this.vertex,r=this.fragment,o=t.createProgram();t.attachShader(o,this.compileShader(35633,e)),t.attachShader(o,this.compileShader(35632,r)),t.linkProgram(o),t.useProgram(o),this.program=o},f.prototype.prepareUniforms=function(){for(var t=Object.keys(this.uniforms),e=0;e<t.length;e+=1){var r=this.gl.getUniformLocation(this.program,t[e]);this.uniforms[t[e]].location=r}},f.prototype.prepareAttributes=function(){this.geometry.vertices!==void 0&&this.attributes.push({name:"aPosition",size:3}),this.geometry.normal!==void 0&&this.attributes.push({name:"aNormal",size:3}),this.attributeKeys=[];for(var t=0;t<this.attributes.length;t+=1)this.attributeKeys.push(this.attributes[t].name),this.prepareAttribute(this.attributes[t])},f.prototype.prepareAttribute=function(t){for(var e=this.geometry,r=this.multiplier,o=e.vertices,c=e.normal,a=new Float32Array(r*o.length*t.size),i=0;i<r;i+=1)for(var s=t.data&&t.data(i,r),n=i*o.length*t.size,l=0;l<o.length;l+=1)for(var h=0;h<t.size;h+=1){var u=this.modifiers[t.name];a[n]=u!==void 0?u(s,l,h,this):t.name==="aPosition"?o[l][g[h]]:t.name==="aNormal"?c[l][g[h]]:s[h],n+=1}this.attributes[this.attributeKeys.indexOf(t.name)].data=a,this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(t.name)])},f.prototype.prepareBuffer=function(t){var e=t.data,r=t.name,o=t.size,c=this.gl.createBuffer();this.gl.bindBuffer(34962,c),this.gl.bufferData(34962,e,35044);var a=this.gl.getAttribLocation(this.program,r);this.gl.enableVertexAttribArray(a),this.gl.vertexAttribPointer(a,o,5126,!1,0,0),this.buffers[this.attributeKeys.indexOf(t.name)]={buffer:c,location:a,size:o}},f.prototype.render=function(t){var e=this,r=this.uniforms,o=this.multiplier,c=this.gl;c.useProgram(this.program);for(var a=0;a<this.buffers.length;a+=1){var i=this.buffers[a],s=i.location,n=i.buffer,l=i.size;c.enableVertexAttribArray(s),c.bindBuffer(34962,n),c.vertexAttribPointer(s,l,5126,!1,0,0)}Object.keys(t).forEach(function(h){r[h].value=t[h].value}),Object.keys(r).forEach(function(h){var u=r[h];e.uniformMap[u.type](u.location,u.value)}),c.drawArrays(this.mode,0,o*this.geometry.vertices.length),this.onRender&&this.onRender(this)},f.prototype.destroy=function(){for(var t=0;t<this.buffers.length;t+=1)this.gl.deleteBuffer(this.buffers[t].buffer);this.gl.deleteProgram(this.program),this.gl=null};var p=function(t){var e=this,r=t||{},o=r.canvas;o===void 0&&(o=document.querySelector("canvas"));var c=r.context;c===void 0&&(c={});var a=r.contextType;a===void 0&&(a="experimental-webgl");var i=r.settings;i===void 0&&(i={});var s=o.getContext(a,Object.assign({alpha:!1,antialias:!1},c));Object.assign(this,{gl:s,canvas:o,uniforms:{},instances:new Map,shouldRender:!0}),Object.assign(this,{devicePixelRatio:1,clearColor:[1,1,1,1],position:{x:0,y:0,z:2},clip:[.001,100]}),Object.assign(this,i),this.uniformMap={float:function(n,l){return s.uniform1f(n,l)},vec2:function(n,l){return s.uniform2fv(n,l)},vec3:function(n,l){return s.uniform3fv(n,l)},vec4:function(n,l){return s.uniform4fv(n,l)},mat2:function(n,l){return s.uniformMatrix2fv(n,!1,l)},mat3:function(n,l){return s.uniformMatrix3fv(n,!1,l)},mat4:function(n,l){return s.uniformMatrix4fv(n,!1,l)}},s.enable(s.DEPTH_TEST),s.depthFunc(s.LEQUAL),s.getContextAttributes().alpha===!1&&(s.clearColor.apply(s,this.clearColor),s.clearDepth(1)),this.onSetup&&this.onSetup(s),window.addEventListener("resize",function(){return e.resize()}),this.resize(),this.render()};p.prototype.resize=function(){var t=this.gl,e=this.canvas,r=this.devicePixelRatio,o=this.position;e.width=e.clientWidth*r,e.height=e.clientHeight*r;var c=t.drawingBufferWidth,a=t.drawingBufferHeight,i=c/a;t.viewport(0,0,c,a);var s=Math.tan(Math.PI/180*22.5),n=[1,0,0,0,0,1,0,0,0,0,1,0,o.x,o.y,(i<1?1:i)*-o.z,1];this.uniforms.uProjectionMatrix={type:"mat4",value:[.5/s,0,0,0,0,i/s*.5,0,0,0,0,-(this.clip[1]+this.clip[0])/(this.clip[1]-this.clip[0]),-1,0,0,-2*this.clip[1]*(this.clip[0]/(this.clip[1]-this.clip[0])),0]},this.uniforms.uViewMatrix={type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},this.uniforms.uModelMatrix={type:"mat4",value:n}},p.prototype.toggle=function(t){t!==this.shouldRender&&(this.shouldRender=t!==void 0?t:!this.shouldRender,this.shouldRender&&this.render())},p.prototype.render=function(){var t=this;this.gl.clear(16640),this.instances.forEach(function(e){e.render(t.uniforms)}),this.onRender&&this.onRender(this),this.shouldRender&&requestAnimationFrame(function(){return t.render()})},p.prototype.add=function(t,e){e===void 0&&(e={uniforms:{}}),e.uniforms===void 0&&(e.uniforms={}),Object.assign(e.uniforms,JSON.parse(JSON.stringify(this.uniforms))),Object.assign(e,{gl:this.gl,uniformMap:this.uniformMap});var r=new f(e);return this.instances.set(t,r),r},p.prototype.remove=function(t){var e=this.instances.get(t);e!==void 0&&(e.destroy(),this.instances.delete(t))},p.prototype.destroy=function(){var t=this;this.instances.forEach(function(e,r){e.destroy(),t.instances.delete(r)}),this.toggle(!1)};var S="phi",z="theta",M="mapSamples",E="mapBrightness",P="baseColor",R="markerColor",k="glowColor",d="markers",B="diffuse",v="devicePixelRatio",_="dark",T="offset",D="scale",j="opacity",F="mapBaseBrightness",y={[S]:"A",[z]:"B",[M]:"l",[E]:"E",[P]:"R",[R]:"S",[k]:"y",[B]:"F",[_]:"G",[T]:"x",[D]:"C",[j]:"H",[F]:"I"},{PI:m,sin:b,cos:A}=Math,x=t=>[].concat(...t.map(e=>{let[r,o]=e.location;r=r*m/180,o=o*m/180-m;let c=A(r);return[-c*A(o),b(r),c*b(o),e.size]}),[0,0,0,0]),J=(t,e)=>{let r=(a,i,s)=>({type:a,value:typeof e[i]>"u"?s:e[i]}),o=t.getContext("webgl")?"webgl":"experimental-webgl",c=new p({canvas:t,contextType:o,context:{alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1,...e.context},settings:{[v]:e[v]||1,onSetup:a=>{let i=a.RGB,s=a.UNSIGNED_BYTE,n=a.TEXTURE_2D,l=a.createTexture();a.bindTexture(n,l),a.texImage2D(n,0,i,1,1,0,i,s,new Uint8Array([0,0,0,0]));let h=new Image;h.onload=()=>{a.bindTexture(n,l),a.texImage2D(n,0,i,i,s,h),a.generateMipmap(n);let u=a.getParameter(a.CURRENT_PROGRAM),I=a.getUniformLocation(u,"J");a.texParameteri(n,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(n,a.TEXTURE_MAG_FILTER,a.NEAREST),a.uniform1i(I,0)},h.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg=="}}});return c.add("",{vertex:"attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",fragment:"precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}",uniforms:{t:{type:"vec2",value:[e.width,e.height]},A:r("float",S),B:r("float",z),l:r("float",M),E:r("float",E),I:r("float",F),R:r("vec3",P),S:r("vec3",R),F:r("float",B),y:r("vec3",k),G:r("float",_),z:{type:"vec4",value:x(e[d])},D:{type:"float",value:e[d].length},x:r("vec2",T,[0,0]),C:r("float",D,1),H:r("float",j,1)},mode:4,geometry:{vertices:[{x:-100,y:100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0},{x:100,y:-100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0}]},onRender:({uniforms:a})=>{let i={};if(e.onRender){i=e.onRender(i)||i;for(let s in y)i[s]!==void 0&&(a[y[s]].value=i[s]);i[d]!==void 0&&(a.z.value=x(i[d]),a.D.value=i[d].length),i.width&&i.height&&(a.t.value=[i.width,i.height])}}}),c};const L={__name:"globe",props:{dots:{type:Array,default:()=>[]},center:{type:Array,default:()=>[0,70]}},setup(t){const e=t,r=O();let o=0;const c=e.dots.map(a=>({location:a,size:.05}));return Q(()=>{J(r.value,{devicePixelRatio:2,width:1e3,height:1e3,phi:0,theta:.28,dark:0,diffuse:1.2,mapSamples:16e3,mapBrightness:9,baseColor:[.8,.8,.8],markerColor:[.3,.9,.7],glowColor:[1,1,1],markers:[{location:e.center,size:0},...c],onRender:a=>{a.phi=o,o+=.0025}})}),(a,i)=>(w(),C("canvas",{class:"w-full h-500px m-auto rounded-2xl",ref_key:"canvas",ref:r},null,512))}},Y=N("",6),q=JSON.parse('{"title":"Support","description":"Share links, contribute code or donate money to the open source development","frontmatter":{"title":"Support","description":"Share links, contribute code or donate money to the open source development","date":"2021-05-05T00:00:00.000Z","topContent":true},"headers":[],"relativePath":"support/index.md","filePath":"support/index.md"}'),H={name:"support/index.md"},W=Object.assign(H,{setup(t){const e=G.cities.map(r=>r.coord);return(r,o)=>(w(),C("div",null,[U(L,{class:"mb-8",dots:V(e)},null,8,["dots"]),Y]))}});export{q as __pageData,W as default};
