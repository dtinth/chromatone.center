import{l as c,ah as x,E as h,k as m,ai as y,D as f}from"./framework.f75e5dc4.js";function g(){const i=c(null),r=c(null),{pressed:l}=x(),e=h({x:0,y:0,normX:0,normY:0,pressed:l,inside:!1});m(()=>{i.value.addEventListener("mousemove",d);const{isOutside:o}=y(r);f(o,n=>{e.inside=!n})});function d(o,n=i.value,u=r.value){if(!n)return;var a=n.createSVGPoint();a.x=o.clientX,a.y=o.clientY;let s=a.matrixTransform(n.getScreenCTM().inverse());if(u){let t=u.getBBox();e.x=s.x<t.width?s.x<0?0:s.x:t.width,e.y=s.y<t.height?s.y<0?0:s.y:t.height,e.normY=1-e.y/t.height,e.normX=e.x/t.width}else e.x=s.x,e.y=s.y}return{svg:i,area:r,mouse:e}}export{g as u};
