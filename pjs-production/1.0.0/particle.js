+function(t,e){"use strict";function s(t,e,s){for(var i=o.getCss;t=t.offsetParent;)if(i(t,e)===s)return!0;return!1}function i(t,e){o.createCanvas(this,i,t,e)}function n(t){var e=this,s=e.set;s.num>0&&s.range>0&&(t="pause"===t?"off":"on",h[t](s.eventElem,"mousemove",e.moveHandler),h[t](s.eventElem,"touchmove",e.moveHandler))}var o=e.util,h=e.event,r=Math.random,a=Math.abs,l=2*Math.PI;i.defaultConfig={speed:1,num:.12,max:2.4,min:.6,dis:130,lineWidth:.2,range:160,eventElem:null};var c=i.prototype={version:"1.0.0",init:function(){this.set.num>0&&(this.set.range>0&&(o.isElem(this.set.eventElem)||this.set.eventElem===document||(this.set.eventElem=this.c),this.posX=r()*this.cw,this.posY=r()*this.ch,this.event()),this.createDots(),this.draw(),this.resize())},createDots:function(){for(var t,e=this.cw,s=this.ch,i=this.set,n=this.color,h=o.limitRandom,r=i.speed,a=i.max,l=i.min,c=o.pInt(o.scaleValue(i.num,e)),f=[];c--;)t=h(a,l),f.push({x:h(e-t,t),y:h(s-t,t),r:t,vx:h(r,.5*-r)||r,vy:h(r,.5*-r)||r,color:n()});this.dots=f},draw:function(){var t=this.set;if(!(t.num<=0)){var e=this.cw,s=this.ch,i=this.cxt,n=this.paused;i.clearRect(0,0,e,s),i.lineWidth=t.lineWidth,i.globalAlpha=t.opacity,this.dots.forEach(function(t){var o=t.r;if(i.save(),i.beginPath(),i.arc(t.x,t.y,o,0,l),i.fillStyle=t.color,i.fill(),i.restore(),!n){t.x+=t.vx,t.y+=t.vy;var h=t.x,r=t.y;(h+o>=e||h-o<=0)&&(t.vx*=-1),(r+o>=s||r-o<=0)&&(t.vy*=-1)}}),t.range>0&&this.connectDot(),this.requestAnimationFrame()}},connectDot:function(){var t=this.cxt,e=this.set,s=e.dis,i=this.posX,n=this.posY,o=e.range,h=this.dots,r=h.length;h.forEach(function(e,l){for(var c=e.x,f=e.y,m=e.color;++l<r;){var u=h[l],v=u.x,p=u.y;a(c-v)<=s&&a(f-p)<=s&&(a(c-i)<=o&&a(f-n)<=o||a(v-i)<=o&&a(p-n)<=o)&&(t.save(),t.beginPath(),t.moveTo(c,f),t.lineTo(v,p),t.strokeStyle=m,t.stroke(),t.restore())}})},getElemOffset:function(){return this.elemOffset=this.elemOffset?o.offset(this.set.eventElem):null},event:function(){this.set.eventElem!==document&&(this.elemOffset=!0),this.moveHandler=function(t){this.posX=t.pageX,this.posY=t.pageY,this.getElemOffset()&&(s(this.set.eventElem,"position","fixed")&&(this.posX=t.clientX,this.posY=t.clientY),this.posX-=this.elemOffset.left,this.posY-=this.elemOffset.top)}.bind(this),n.call(this)}};e.extend(c),o.modifyPrototype(c,"pause, open",n),o.modifyPrototype(c,"resize",function(t,e){this.set.num>0&&this.set.range>0&&(this.posX*=t,this.posY*=e,this.getElemOffset())}),e.particle=c.constructor=i}(window,Particleground);