var Am=[{id:"C01",name:"\u306F\u3058\u3081\u3066 \u30B5\u30FC\u30AD\u30C3\u30C8",label:"\u521D\u7D1A\u30B5\u30FC\u30AD\u30C3\u30C8",difficulty:1,length:1400,halfWidth:9.7,theme:"circuit",color:"#6bcd95",icon:"\u{1F3C1}",points:[[0,0,0],[0,260,0],[110,350,0],[260,300,0],[300,130,0],[230,0,0],[100,-60,0]],tunnel:null,crossings:[]},{id:"C02",name:"\u30DE\u30A6\u30F3\u30C6\u30F3",label:"\u30DE\u30A6\u30F3\u30C6\u30F3\u30B3\u30FC\u30B9",difficulty:2,length:1650,halfWidth:7.5,theme:"mountain",color:"#85bfde",icon:"\u26F0",points:[[0,0,0],[0,300,20],[-160,360,45],[-300,280,55],[-300,130,40],[-220,100,32],[-160,170,25],[-210,250,33],[-120,270,24],[-80,160,10],[-100,-20,0]],tunnel:[.13,.21],crossings:[]},{id:"C03",name:"\u30B7\u30C6\u30A3",label:"\u30B7\u30C6\u30A3\u30B3\u30FC\u30B9",difficulty:2,length:1500,halfWidth:8.5,theme:"city",color:"#f5b77d",icon:"\u{1F3D9}",points:[[0,0,0],[0,250,0],[-100,300,0],[-160,240,0],[-230,240,0],[-260,150,0],[-190,110,0],[-200,30,0],[-310,-10,0],[-250,-130,0],[-60,-130,0],[50,-60,0]],tunnel:null,crossings:[.23,.56,.84]},{id:"C04",name:"\u30B0\u30E9\u30F3\u30D7\u30EA",label:"\u30B0\u30E9\u30F3\u30D7\u30EA\u30B5\u30FC\u30AD\u30C3\u30C8",difficulty:3,length:1850,halfWidth:8,theme:"grandprix",color:"#de9dd7",icon:"\u{1F3C6}",points:[[0,0,0],[0,420,0],[-100,500,0],[-260,480,0],[-310,370,0],[-230,300,0],[-290,220,0],[-220,140,0],[-290,70,0],[-300,-100,0],[-180,-180,0],[-80,-100,0]],tunnel:null,crossings:[]}],td=(i,e)=>(i%e+e)%e,dl=(i,e,t)=>i+(e-i)*t,Rm=(i,e,t,n,s)=>.5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*s*s+(-i+3*e-3*t+n)*s*s*s);function Cm(i,e,t=1){let n=i.length,s=Math.floor(e)%n,r=e-Math.floor(e),a=[i[td(s-1,n)],i[s],i[(s+1)%n],i[(s+2)%n]],o=c=>Rm(a[0][c]||0,a[1][c]||0,a[2][c]||0,a[3][c]||0,r);return{x:o(0)*t,y:o(2),z:o(1)*t}}function ed(i,e){let t=i.length*48,n=[],s=0;for(let r=0;r<=t;r++){let a=Cm(i,r/t*i.length,e);if(r){let o=n[r-1];s+=Math.hypot(a.x-o.x,a.y-o.y,a.z-o.z)}n.push({...a,d:s})}return{list:n,length:s}}function Pm(i){let e=ed(i.points,1),t=ed(i.points,i.length/e.length),n=t.list.map(o=>({...o,d:o.d/t.length*i.length})),s=n.map(o=>o.x),r=n.map(o=>o.z),a=n.map(o=>o.y);return{...i,table:n,bounds:{minX:Math.min(...s),maxX:Math.max(...s),minZ:Math.min(...r),maxZ:Math.max(...r),minY:Math.min(...a),maxY:Math.max(...a)},repairFractions:[.12,.46,.79],checkpointCount:8}}var Wa=Am.map(Pm),mt=i=>Wa.find(e=>e.id===i)||Wa[0];function Qi(i,e){let t=td(e,i.length),n=i.table,s=0,r=n.length-1;for(;r-s>1;){let l=s+r>>1;n[l].d>t?r=l:s=l}let a=n[s],o=n[r],c=(t-a.d)/(o.d-a.d||1);return{x:dl(a.x,o.x,c),y:dl(a.y,o.y,c),z:dl(a.z,o.z,c)}}var Im=i=>Math.atan2(Math.sin(i),Math.cos(i));function dt(i,e,t=0){let n=typeof i=="string"?mt(i):i,s=Qi(n,e),r=Qi(n,e-1),a=Qi(n,e+1),o=Math.hypot(a.x-r.x,a.z-r.z)||1,c=(a.x-r.x)/o,l=(a.z-r.z)/o,h=(a.y-r.y)/o,u=Qi(n,e-5),d=Qi(n,e+5),f=Im(Math.atan2(d.x-a.x,d.z-a.z)-Math.atan2(r.x-u.x,r.z-u.z))/6;return{...s,x:s.x-l*t,z:s.z+c*t,tx:c,tz:l,yaw:Math.atan2(c,l),pitch:-Math.atan(h),grade:h,curvature:f}}function qa(i,e){let t=Qi(i,e),n=i.bounds,s=n.maxX-n.minX,r=n.maxZ-n.minZ,a=80/Math.max(s,r);return{x:50+(t.x-(n.minX+n.maxX)/2)*a,y:50+(t.z-(n.minZ+n.maxZ)/2)*a}}function fl(i){return Array.from({length:97},(e,t)=>{let n=qa(i,t/96*i.length);return`${t?"L":"M"}${n.x.toFixed(2)},${n.y.toFixed(2)}`}).join(" ")+" Z"}function nd(i,e,t,n=3.45,s=10.5){let r=dt(i,e,t),a=dt(i,e+12,t*.35),o=Qi(i,e-s);return{eye:[r.x-r.tx*s,Math.max(r.y+n,o.y+2),r.z-r.tz*s],aim:[r.x+r.tx*16+(a.x-r.x-r.tx*12)*.25,r.y+1+(a.y-r.y)*.4,r.z+r.tz*16+(a.z-r.z-r.tz*12)*.25]}}function id(i,e,t=0){let n=i.bounds,s=[(n.minX+n.maxX)/2,(n.minY+n.maxY)/2,(n.minZ+n.maxZ)/2],r=Math.hypot(n.maxX-n.minX,n.maxY-n.minY,n.maxZ-n.minZ)/2+i.halfWidth+12,a=Math.atan(Math.tan(20*Math.PI/180)*Math.min(1,e)),o=r/Math.sin(a)*1.1,c=o/Math.hypot(1,.95);return{eye:[s[0]+Math.sin(t+.6)*c,s[1]+c*.95,s[2]+Math.cos(t+.6)*c],aim:s,far:o+r*2+50}}var pl=new Map,sd=Math.PI*2,Xa=(i,e)=>(i%e+e)%e,ri=i=>Math.atan2(Math.sin(i),Math.cos(i)),ml=(i,e,t)=>i+(e-i)*t,ad=(i,e)=>Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z);function rd(i,e=!1){let t=[],n=0,s=a=>e?i[Xa(a,i.length)]:i[Math.max(0,Math.min(i.length-1,a))],r=(i.length-(e?0:1))*24;for(let a=0;a<=r;a++){let o=a/r*(i.length-(e?0:1)),c=Math.min(Math.floor(o),i.length-1),l=o-c,h=[s(c-1),s(c),s(c+1),s(c+2)],u={};for(let d of["x","y","z"])u[d]=.5*(2*h[1][d]+(-h[0][d]+h[2][d])*l+(2*h[0][d]-5*h[1][d]+4*h[2][d]-h[3][d])*l*l+(-h[0][d]+3*h[1][d]-3*h[2][d]+h[3][d])*l*l*l);a&&(n+=ad(u,t[a-1])),t.push({...u,d:n})}return{table:t,length:n}}function Lm(i,e,t,n){let s=[],r=0;for(let a=0;a<=160;a++){let o=a/160,c=1-o,l={};for(let h of["x","y","z"])l[h]=c*c*c*i[h]+3*c*c*o*e[h]+3*c*o*o*t[h]+o*o*o*n[h];a&&(r+=ad(l,s[a-1])),s.push({...l,d:r})}return{table:s,length:r}}function Dm(i,e,t,n){let s=[];for(let r of[80,120,180])for(let a of[60,100,160,240,360]){let o=Lm(i,e(150,-r),{x:n.x-n.tx*a,y:n.y-n.grade*a,z:n.z-n.tz*a},n),c=0;for(let l=1;l<o.table.length-1;l++){let h=o.table[l-1],u=o.table[l],d=o.table[l+1],f=Math.hypot(u.x-h.x,u.z-h.z),p=Math.hypot(d.x-u.x,d.z-u.z),_=Math.hypot(d.x-h.x,d.z-h.z);c=Math.max(c,2*Math.abs((u.x-h.x)*(d.z-h.z)-(u.z-h.z)*(d.x-h.x))/(f*p*_||1e-12))}c<1/14&&s.push(o)}if(s.sort((r,a)=>r.length-a.length),!s.length)throw Error("No full-width service merge fits "+t.x+","+t.z);return s[0]}function As(i,e){if(e=i.closed?Xa(e,i.length):Math.max(0,Math.min(i.length,e)),i.main)return dt(i.track,i.station+e);let t=i.table,n=0,s=t.length-1;for(;s-n>1;){let c=n+s>>1;t[c].d>e?s=c:n=c}let r=t[n],a=t[s],o=(e-r.d)/(a.d-r.d||1);return{x:ml(r.x,a.x,o),y:ml(r.y,a.y,o),z:ml(r.z,a.z,o)}}function vt(i,e,t=0,n=1){if(i.main){let f=dt(i.track,i.station+e,t*n);return{...f,tx:f.tx*n,tz:f.tz*n,yaw:ri(f.yaw+(n<0?Math.PI:0)),pitch:f.pitch*n,grade:f.grade*n}}let s=As(i,e),r=As(i,e-.6),a=As(i,e+.6),o=Math.hypot(a.x-r.x,a.z-r.z)||1,c=(a.x-r.x)/o*n,l=(a.z-r.z)/o*n,h=As(i,e-3),u=As(i,e+3),d=ri(Math.atan2(u.x-a.x,u.z-a.z)-Math.atan2(r.x-h.x,r.z-h.z))/4.8;return{...s,x:s.x-l*t,z:s.z+c*t,tx:c,tz:l,yaw:Math.atan2(c,l),grade:(a.y-r.y)/o*n,pitch:-Math.atan((a.y-r.y)/o)*n,curvature:d}}function Nm(i){let e=[];for(let r=24;r<(i.id==="C02"?121:110);r++)for(let a of[-1,1]){let o=r/128*i.length,c=dt(i,o),l={x:-c.tz*a,z:c.tx*a};if(i.repairFractions.some(_=>Math.abs(_*i.length-o)<48||Math.abs(_*i.length-(o-70))<40)||i.crossings.some(_=>Math.abs(_*i.length-o)<50)||i.tunnel&&o>i.tunnel[0]*i.length-50&&o<i.tunnel[1]*i.length+50)continue;let h={x:c.x+l.x*150+c.tx*48,y:c.y,z:c.z+l.z*150+c.tz*48},u=Math.min(...i.table.filter((_,g)=>g%3===0).map(_=>Math.hypot(_.x-h.x,_.z-h.z)))-48,d=Math.min(...[35,65,100].map(_=>Math.min(...i.table.filter((g,m)=>m%3===0&&Math.abs(g.d-o)>70).map(g=>Math.hypot(g.x-c.x-l.x*_,g.z-c.z-l.z*_))))),f=dt(i,o-70),p={x:c.x+l.x*150,z:c.z+l.z*150};(-(p.x-f.x)*f.tz+(p.z-f.z)*f.tx)*a<60||Math.min(u,d+50)<20||e.push({gate:o,side:a,p:c,r:l,center:h,score:Math.min(u,d+50)})}let t=[[.18,.4],[.4,.63],[.63,i.id==="C02"?.94:.86]].map(([r,a])=>e.filter(o=>o.gate>=r*i.length&&o.gate<a*i.length).sort((o,c)=>c.score-o.score).slice(0,18)),n=[],s=-1/0;for(let r of t[0])for(let a of t[1])for(let o of t[2]){let c=[r,a,o];if(c.some((h,u)=>c.slice(u+1).some(d=>Math.abs(h.gate-d.gate)<110||Math.hypot(h.center.x-d.center.x,h.center.z-d.center.z)<125)))continue;let l=Math.min(...c.map(h=>h.score))*3+c.reduce((h,u)=>h+u.score,0);l>s&&(s=l,n=c)}if(n.length!==3)throw Error("No safe mission road layout: "+i.id);return n.sort((r,a)=>r.gate-a.gate)}function Vt(i){if(pl.has(i))return pl.get(i);let e=mt(i),t=Nm(e),n={},s={},r=[0,...t.flatMap(l=>[l.gate-70,l.gate])].sort((l,h)=>l-h);r.forEach((l,h)=>n["n"+h]={id:"n"+h,...dt(e,l),station:l,ports:[]});let a=l=>{s[l.id]=l,n[l.from].ports.push({edge:l.id,direction:1}),n[l.to].ports.push({edge:l.id,direction:-1})};r.forEach((l,h)=>a({id:"main-"+h,main:!0,track:e,station:l,from:"n"+h,to:"n"+(h+1)%r.length,length:(r[h+1]??e.length)-l,width:e.halfWidth})),t.forEach((l,h)=>{l.id="site-"+h,l.index=h,l.entry="n"+r.indexOf(l.gate),l.merge="n"+r.indexOf(l.gate-70),l.hub="hub-"+h;let u=l.p,d=l.r,f={x:u.x+d.x*150,y:u.y,z:u.z+d.z*150};n[l.hub]={id:l.hub,...f,ports:[]};let p=(x,b,y=u.y)=>({x:u.x+d.x*x+u.tx*b,y,z:u.z+d.z*x+u.tz*b}),_=rd([p(0,0),p(35,0),p(100,0),f]);a({id:"access-"+h,..._,from:l.entry,to:l.hub,width:6,site:h});let g=Array.from({length:96},(x,b)=>p(150+48*Math.sin(b/96*sd),48-48*Math.cos(b/96*sd)));a({id:"loop-"+h,...rd(g,!0),closed:!0,from:l.hub,to:l.hub,width:6,site:h});let m=n[l.merge];a({id:"exit-"+h,...Dm(f,p,u,m),from:l.hub,to:l.merge,width:6,site:h}),l.scene={edge:"loop-"+h,d:s["loop-"+h].length*.25}});let o=[0,2].map((l,h)=>({id:"hospital-"+h,site:l,edge:"loop-"+l,d:s["loop-"+l].length*.69,label:h?"\u3082\u3082\u306E \u3073\u3087\u3046\u3044\u3093":"\u3042\u304A\u3044 \u3073\u3087\u3046\u3044\u3093",color:h?"#ef8baf":"#75c7ef"})),c={courseId:i,track:e,nodes:n,edges:s,sites:t,hospitals:o};return pl.set(i,c),c}function Li(i){if(!i.road)return dt(i.courseId,i.z,i.offset);let e=vt(Vt(i.courseId).edges[i.road.edge],i.road.d,i.offset,i.road.direction);return i.road.turnTimer>0&&(e.yaw=ri(e.yaw+Math.PI*(1-i.road.turnTimer/.65)),e.tx=Math.sin(e.yaw),e.tz=Math.cos(e.yaw)),e}function Rs(i){let e=Vt(i.courseId).edges[i.road.edge];return e.main?Xa(e.station+i.road.d,mt(i.courseId).length):null}function od(i,e){let t=i.edges[e.edge],n=i.nodes[e.direction>0?t.to:t.from],s=vt(t,e.d,0,e.direction);return n.ports.filter(r=>!(r.edge===t.id&&r.direction===-e.direction)).map(r=>{let a=i.edges[r.edge],o=r.direction>0?Math.min(18,a.length):Math.max(0,a.length-18),c=As(a,o),l=Math.atan2(c.x-n.x,c.z-n.z);return{...r,angle:ri(l-s.yaw)}}).filter(r=>Math.abs(r.angle)<2.9)}function cd(i,e,t=0){let n=od(i,e).sort((a,o)=>Math.abs(a.angle)-Math.abs(o.angle)),s=n[0]?.angle||0,r=n.filter(a=>t>0?ri(a.angle-s)<-.03:ri(a.angle-s)>.03).sort((a,o)=>Math.abs(ri(o.angle-s))-Math.abs(ri(a.angle-s)));return t&&r.length?r[0]:n[0]}function ld(i,e,t=()=>{}){let n=Vt(i.courseId),s=e;for(let r=0;s>1e-8&&r<12;r++){let a=i.road,o=n.edges[a.edge],c=a.d,l=a.direction>0?o.length-a.d:a.d,h=Math.min(s,Math.max(0,l));if(a.d+=h*a.direction,s-=h,o.main&&t(o,c,a.d,a.direction),h<l-1e-7)break;let u=Li(i),d=cd(n,a,Number(i.steerR)-Number(i.steerL));if(!d){i.v=0;break}let f=n.edges[d.edge];if(o.main&&f.main&&a.direction===d.direction){a.edge=d.edge,a.d=d.direction>0?0:f.length,i.onMain=!0;continue}let p=vt(f,d.direction>0?0:f.length,0,d.direction),_=u.x-p.x,g=u.z-p.z,m=Math.max(0,_*p.tx+g*p.tz);a.edge=d.edge,a.direction=d.direction,a.d=d.direction>0?m:f.length-m,i.offset=Math.max(-f.width+1.5,Math.min(f.width-1.5,-_*p.tz+g*p.tx)),i.onMain=!!f.main,i.onMain&&(a.joinedTravel=0)}}function hd(i){let e=i.missions?.active;return i.phase!=="race"||!e||["DONE","AUTO_STOP","FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPING","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"].includes(e.stage)||i.road.turnTimer>0?!1:(i.road.turnTimer=.65,i.v=0,i.steerL=i.steerR=!1,i.steerV=0,!0)}function ud(i,e){return i.road.turnTimer<=0?!1:(i.road.turnTimer=Math.max(0,i.road.turnTimer-e),i.road.turnTimer||(i.road.direction*=-1,i.offset*=-1),!0)}function Fm(i,e,t){let n=[{node:e,cost:0,path:[]}],s=new Set;for(;n.length;){n.sort((a,o)=>a.cost-o.cost);let r=n.shift();if(!s.has(r.node)){if(r.node===t)return r;s.add(r.node);for(let a of i.nodes[r.node].ports){let o=i.edges[a.edge];o.from!==o.to&&n.push({node:a.direction>0?o.to:o.from,cost:r.cost+o.length,path:[...r.path,a]})}}}return null}function dd(i,e){if(!e||!i.road)return null;let t=Vt(i.courseId),n=i.road,s=t.edges[n.edge],r=t.edges[e.edge],a=[];for(let f of[n.direction,-n.direction]){if(s.id===r.id&&(!e.direction||e.direction===f)){let g=(e.d-n.d)*f;s.closed&&(g=Xa(g,s.length)),g>=-.1&&a.push({cost:Math.max(0,g),direction:f,path:[],arrival:!0})}let p=f>0?s.to:s.from,_=f>0?s.length-n.d:n.d;for(let g of[1,-1]){if(e.direction&&e.direction!==g)continue;let m=g>0?r.from:r.to,x=Fm(t,p,m);x&&a.push({cost:_+x.cost+(g>0?e.d:r.length-e.d),direction:f,path:[...x.path,{edge:r.id,direction:g}],arrival:!1})}}a.sort((f,p)=>f.cost-p.cost);let o=a[0];if(!o)return null;let c=o.path[0]||(s.closed?{edge:s.id,direction:o.direction}:null),l=od(t,n),h=c&&l.find(f=>f.edge===c.edge&&f.direction===c.direction),u=cd(t,n,0),d=h&&u&&(h.edge!==u.edge||h.direction!==u.direction)?ri(h.angle-u.angle)<0?"right":"left":"straight";return{...o,turn:d,remaining:n.direction>0?s.length-n.d:n.d,uTurn:o.direction!==n.direction,target:vt(r,e.d)}}function fd(i){let e=Object.values(i.edges).flatMap(d=>Array.from({length:25},(f,p)=>vt(d,d.length*p/24))),t=e.map(d=>d.x),n=e.map(d=>d.z),s=Math.min(...t),r=Math.max(...t),a=Math.min(...n),o=Math.max(...n),c=88/Math.max(r-s,o-a),l=d=>({x:50+(d.x-(s+r)/2)*c,y:50+(d.z-(a+o)/2)*c}),h=(d,f=0,p=d.length)=>{let _=Math.max(1,Math.ceil(Math.abs(p-f)/8));return Array.from({length:_+1},(g,m)=>{let x=l(vt(d,f+(p-f)*m/_));return`${m?"L":"M"}${x.x.toFixed(2)},${x.y.toFixed(2)}`}).join(" ")},u=d=>h(d);return{project:l,path:u,segment:h,main:Object.values(i.edges).filter(d=>d.main).map(u).join(" "),branches:Object.values(i.edges).filter(d=>!d.main).map(u).join(" ")}}var hn=Object.freeze([{id:"V01",name:"NOVA R",label:"\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC",kind:"sport",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.1,length:4.86,radius:.384,top:44,accel:1.05,turn:6.5,brake:24},{id:"V01-S",name:"AERO S",label:"\u30B9\u30DD\u30FC\u30C4\u30AB\u30FC",kind:"sport",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.08,length:4.86,radius:.384,top:42,accel:1.15,turn:7,brake:25},{id:"V02",name:"HAULER",label:"\u30C8\u30E9\u30C3\u30AF",kind:"truck",wheelZ:[-1.85,1.65],roof:2.55,width:2.32,length:6.2,radius:.5,top:34,accel:.73,turn:4.8,brake:17},{id:"V03",name:"CITY LINK",label:"\u30D0\u30B9",kind:"bus",wheelZ:[-2.5,2.4],roof:2.95,width:2.4,length:7.8,radius:.51,top:32,accel:.64,turn:4.2,brake:15},{id:"V04",name:"PULSE",label:"\u30D0\u30A4\u30AF",kind:"bike",wheelZ:[-.8,.83],roof:1.7,width:.78,length:2.25,radius:.34,top:43,accel:1.3,turn:8.1,brake:26,wheels:2},{id:"V05",name:"GUARD",label:"\u30D1\u30C8\u30AB\u30FC",kind:"patrol",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.08,length:4.86,radius:.384,top:45,accel:1.17,turn:7.3,brake:26,emergency:!0},{id:"V06",name:"LIFELINE",label:"\u304D\u3085\u3046\u304D\u3085\u3046\u3057\u3083",kind:"ambulance",wheelZ:[-1.6,1.6],roof:2.65,width:2.23,length:5.8,radius:.46,top:37,accel:.82,turn:5.4,brake:20,emergency:!0},{id:"V07",name:"BRAVE",label:"\u3057\u3087\u3046\u307C\u3046\u3057\u3083",kind:"fire",wheelZ:[-1.95,1.85],roof:2.65,width:2.38,length:6.5,radius:.51,top:35,accel:.7,turn:4.6,brake:17,emergency:!0}]),ut=i=>hn[i]||hn[0];function ai(i,e=0){let t=ut(i),n=t.width*.46+(e?.1:0);return t.wheelZ.flatMap(s=>t.wheels===2?[{x:0,z:s}]:[{x:-n,z:s},{x:n,z:s}])}var pd=i=>{let e=i>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)};function md(i,e=12345){let t=mt(i),n=pd(e+17),s=t.difficulty===1?[.3,.66]:t.theme==="city"?[.3,.4,.66,.94]:[.27,.37,.62,.89],r=["tyre","rock","crate","barrier"],a=[];for(let o=0;o<2;o++)s.forEach((c,l)=>{let h=r[(l+o)%4],u=h==="barrier"?1.1:h==="rock"?.85:.65;a.push({id:`${i}-${o}-${l}`,type:h,distance:t.length*(o+c),offset:(l%2?1:-1)*(t.halfWidth*.52+n()*.3),radius:u,severity:h==="rock"?1.15:.95,hit:!1})});return a}function ja(i){return pd(i)}var Um={5:"police",6:"ambulance",7:"fire"},Om=new Set(["AUTO_STOP","FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPING","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"]),oi=i=>!!i.missions?.active&&Om.has(i.missions.active.stage),Bm={fire:"\u304B\u3058\u3060\uFF01 \u3052\u3093\u3070\u3078 \u3080\u304B\u304A\u3046",ambulance:"\u3072\u3068\u3092 \u305F\u3059\u3051\u3088\u3046",police:"\u306B\u3052\u308B \u304F\u308B\u307E\u3092 \u304A\u3044\u304B\u3051\u3088\u3046"};function bd(i){let e=Um[i.model];if(!e){i.missions=null,i.road=null,i.ledger=null,i.heroClear=!1,i.onMain=!0;return}let t=Vt(i.courseId),n=ja(i.seed+8001),s=[...t.sites],r=[];for(let a=0;a<2;a++){let o=s.splice(Math.floor(n()*s.length),1)[0],c=ut(i.model),l=c.top*3+c.top**2/(2*c.brake)+35+n()*30;r.push({id:`${i.courseId}-${e}-${a}-${o.index}`,lap:a,kind:e,site:o.index,dispatchAt:Math.max(25,o.gate-l),fireCount:n()>.5?3:2,hospital:Math.floor(n()*t.hospitals.length),escapeStart:n()*t.edges["loop-"+o.index].length})}i.missions={plan:r,active:null,completed:[],notice:null,serial:0},i.road={edge:"main-0",d:0,direction:1,turnTimer:0},i.onMain=!0,i.ledger={laps:0,next:1,blocked:0},i.heroClear=!1}function Lr(i,e){i.missions.notice={id:++i.missions.serial,text:e}}function Di(i,e){let t=i.missions?.active;t&&(e===void 0||t.pointer===e)&&(t.pointer=null,t.holding=-1)}function gl(i,e,t){let n=i.missions?.active;return i.phase!=="race"||n?.stage!=="FIRE_ACTION"||n.fires[e]===void 0||n.fires[e]<=0||n.pointer!==null?!1:(n.pointer=t,n.holding=e,!0)}function xd(i){let e=i.missions?.active;return i.phase!=="race"||!e?!1:e.stage==="PATIENT_WAIT"?(e.stage="BOARDING",e.animation=0,!0):e.stage==="SUSPECT_STOPPED"?(e.stage="POLICE_CHECK",e.animation=0,!0):!1}function Cs(i){let e=i.missions?.active;if(!e)return null;let t=Vt(i.courseId),n=t.sites[e.site];return e.stage==="RETURN_TO_TRACK"||e.stage==="DONE"?{edge:Object.values(t.edges).find(r=>r.main&&r.from===n.merge).id,d:12,direction:1,label:"\u307B\u3093\u305B\u3093\u3078 \u3082\u3069\u308D\u3046"}:e.stage==="DRIVE_TO_HOSPITAL"||e.stage==="HANDOFF"||e.stage==="AUTO_STOP"&&e.stopRole==="hospital"?{...t.hospitals[e.hospital],label:t.hospitals[e.hospital].label}:e.kind==="police"?{edge:"loop-"+e.site,d:e.suspect.d,label:e.stage==="CHASE_LOOP"?"\u30B5\u30A4\u30EC\u30F3\u3067 \u3064\u304B\u307E\u3048\u3088\u3046":"\u306B\u3052\u308B \u304F\u308B\u307E\u3092 \u304A\u304A\u3046"}:{...n.scene,label:e.kind==="fire"?"\u304B\u3058\u306E \u3052\u3093\u3070":"\u305F\u3059\u3051\u308B \u3072\u3068"}}function bl(i){let e=i.missions?.active;if(e?.stage==="CHASE_LOOP"&&i.road.edge==="loop-"+e.site){let t=Vt(i.courseId).edges[i.road.edge];return{uTurn:i.road.direction<0,turn:"straight",remaining:t.length-i.road.d,cost:0,target:vt(t,e.suspect.d),path:[]}}if(e?.stage==="RETURN_TO_TRACK"&&i.onMain){let t=Vt(i.courseId).edges[i.road.edge];return{uTurn:i.road.direction<0,turn:"straight",remaining:1/0,cost:12-(i.road.joinedTravel||0),target:vt(t,Math.min(t.length,i.road.d+20)),path:[]}}return dd(i,Cs(i))}function _d(i,e){let t=i.missions;if(!t||t.active||i.ledger.laps>=2||!i.onMain)return!1;let n=t.plan[i.ledger.laps];return t.completed.includes(n.id)||e<n.dispatchAt?!1:(t.active={...n,stage:"DRIVE_TO_SCENE",animation:0,holding:-1,pointer:null,fires:Array(n.fireCount).fill(2.5),patientOnboard:!1,suspect:{d:n.escapeStart,speed:ut(i.model).top*.75,stopped:!1,offset:0},celebration:0},i.siren=n.kind!=="police",Lr(i,Bm[n.kind]),!0)}function gd(i){let e=i.missions,t=e.active;e.completed.includes(t.id)||(e.completed.push(t.id),t.stage="SUCCESS",t.celebration=1.1,t.holding=-1,t.pointer=null,i.siren=!1,Lr(i,t.kind==="ambulance"?"\u3073\u3087\u3046\u3044\u3093\u306B \u3068\u3069\u3051\u305F\u306D\uFF01":"\u304A\u3057\u3054\u3068 \u305B\u3044\u3053\u3046\uFF01"))}function vd(i,e){let t=i.missions,n=t?.active;if(n){if(n.kind==="police"&&!n.suspect.stopped){n.stage==="SUSPECT_STOPPING"&&(n.suspect.speed=Math.max(0,n.suspect.speed-ut(i.model).brake*e));let s=Vt(i.courseId).edges["loop-"+n.site];n.suspect.d=(n.suspect.d+n.suspect.speed*e)%s.length,n.stage==="SUSPECT_STOPPING"&&n.suspect.speed===0&&(n.suspect.stopped=!0)}if(n.stage==="DRIVE_TO_SCENE"&&i.road.edge==="loop-"+n.site&&n.kind==="police"&&(n.stage="CHASE_LOOP"),n.stage==="CHASE_LOOP"&&i.siren&&i.road.edge==="loop-"+n.site){let s=Vt(i.courseId).edges[i.road.edge],r=vt(s,i.road.d,i.offset,i.road.direction),a=vt(s,n.suspect.d),o=Math.abs(i.road.d-n.suspect.d);Math.min(o,s.length-o)<11&&Math.hypot(r.x-a.x,r.z-a.z)<10&&(n.stage="SUSPECT_STOPPING",n.parkingSide=Math.sign(i.offset*i.road.direction)||-1,i.boost=0)}if(n.stage==="SUSPECT_STOPPING"){let s=1-Math.exp(-e*4),r=n.suspect.offset;n.suspect.offset+=(-n.parkingSide*2.1-n.suspect.offset)*s,n.suspect.motionSteer=(n.suspect.offset-r)/Math.max(e,.001),i.offset+=(n.parkingSide*2.1*i.road.direction-i.offset)*s}n.stage==="SUSPECT_STOPPING"&&n.suspect.stopped&&i.v<.05&&Math.abs(i.offset*i.road.direction-n.parkingSide*2.1)<.08&&Math.abs(n.suspect.offset+n.parkingSide*2.1)<.08&&(n.stage="SUSPECT_STOPPED",n.animation=0),n.stage==="FIRE_ACTION"&&n.holding>=0&&(n.fires[n.holding]=Math.max(0,n.fires[n.holding]-e),n.fires[n.holding]||Di(i),n.fires.every(s=>s===0)&&gd(i)),["BOARDING","HANDOFF","POLICE_CHECK"].includes(n.stage)&&(n.animation+=e,n.animation>=5&&(n.stage==="BOARDING"?(n.patientOnboard=!0,n.stage="DRIVE_TO_HOSPITAL",Lr(i,"\u3073\u3087\u3046\u3044\u3093\u3078 \u306F\u3053\u307C\u3046")):(n.stage==="HANDOFF"&&(n.patientOnboard=!1),gd(i)))),n.stage==="SUCCESS"&&(n.celebration=Math.max(0,n.celebration-e),n.celebration===0&&(n.stage="RETURN_TO_TRACK",Lr(i,"\u3084\u3058\u308B\u3057\u3092 \u307F\u3066 \u307B\u3093\u305B\u3093\u3078"))),n.stage==="DONE"&&(t.active=null,Lr(i,"\u307B\u3093\u305B\u3093\u306B \u3082\u3069\u3063\u305F\u3088\uFF01"))}}function yd(i){let e=i.missions?.active;if(!e||!["DRIVE_TO_SCENE","DRIVE_TO_HOSPITAL","AUTO_STOP"].includes(e.stage)||e.kind==="police")return null;let t=Cs(i),n=Vt(i.courseId).edges[i.road.edge];if(t.edge!==n.id)return null;let s=(t.d-i.road.d)*i.road.direction;return n.closed&&(s=(s%n.length+n.length)%n.length),s<Math.max(20,i.v*i.v/(2*ut(i.model).brake)+8)?(e.stage!=="AUTO_STOP"&&(e.stopRole=e.stage==="DRIVE_TO_HOSPITAL"?"hospital":"scene"),e.stage="AUTO_STOP",s):null}function Md(i){let e=i.missions?.active;e?.stage==="AUTO_STOP"&&(i.v=0,i.steerV=0,i.steerL=i.steerR=!1,Di(i),e.stage=e.stopRole==="hospital"?"HANDOFF":e.kind==="fire"?"FIRE_ACTION":"PATIENT_WAIT",e.animation=0)}var km={fire:"\u{1F692}",ambulance:"\u{1F691}",police:"\u{1F693}"},zm={AUTO_STOP:"\u270B \u3042\u3093\u305C\u3093\u306B \u3068\u307E\u308B\u3088",FIRE_ACTION:"\u{1F4A6} \u3072\u3092 \u306A\u304C\u304A\u3057\uFF01 \u305C\u3093\u3076 \u3051\u305D\u3046",PATIENT_WAIT:"\u{1F44B} \u3072\u3068\u3092 \u30BF\u30C3\u30C1\u3057\u3066 \u305F\u3059\u3051\u3088\u3046",BOARDING:"\u{1F691} \u3044\u3063\u3057\u3087\u306B \u304F\u308B\u307E\u3078 \u306E\u308D\u3046",HANDOFF:"\u{1F3E5} \u3073\u3087\u3046\u3044\u3093\u3078 \u3042\u3093\u306A\u3044\u3059\u308B\u3088",SUSPECT_STOPPING:"\u270B \u3042\u3093\u305C\u3093\u306B \u3068\u307E\u308B\u3088",SUSPECT_STOPPED:"\u{1F693} \u3068\u307E\u3063\u305F \u304F\u308B\u307E\u3092 \u30BF\u30C3\u30C1",POLICE_CHECK:"\u{1F46E} \u304A\u307E\u308F\u308A\u3055\u3093\u304C \u304B\u304F\u306B\u3093\u3059\u308B\u3088",SUCCESS:"\u{1F31F} \u304A\u3057\u3054\u3068 \u305B\u3044\u3053\u3046\uFF01",RETURN_TO_TRACK:"\u{1F3C1} \u3084\u3058\u308B\u3057\u3067 \u307B\u3093\u305B\u3093\u3078 \u3082\u3069\u308D\u3046"};function Sd(i){let e=i.missions?.active,t=bl(i);return{road:i.road?{...i.road}:null,onMain:i.onMain,ledger:i.ledger?{...i.ledger}:null,heroClear:i.heroClear||!1,mission:i.missions?{completed:i.missions.completed.length,plan:i.missions.plan.map(n=>({...n})),active:e?{...e,fires:[...e.fires],suspect:{...e.suspect}}:null,navigation:t?{uTurn:t.uTurn,turn:t.turn,remaining:t.remaining,cost:t.cost,target:Cs(i)}:null}:null}}function Ed(i,{clearControls:e,muted:t,beep:n,event:s}){let r=g=>document.getElementById(g),a=new Map,o=!1,c="",l=null,h=0,u=null;function d(){window.speechSynthesis?.cancel()}function f(g){if(n(650),t()||!window.speechSynthesis||!window.SpeechSynthesisUtterance)return;let m=speechSynthesis.getVoices().find(x=>x.localService&&/^ja(?:-|_)/i.test(x.lang));if(m)try{d();let x=new SpeechSynthesisUtterance(g);x.voice=m,x.lang=m.lang,x.rate=.85,speechSynthesis.speak(x)}catch(x){s("radio-unavailable",x.message)}}r("uturn").addEventListener("click",()=>{hd(i)&&(e(),n(470))});function p(){let g=i.missions,m=g?.active,x=oi(i),b=!!g&&i.phase!=="menu"&&i.phase!=="finish";g!==u&&(h=0,u=g),x&&!o&&e(),o=x,document.body.classList.toggle("mission-working",b&&x),r("mission-hud").hidden=!b,r("mission-count").textContent=`\u{1F31F} \u304A\u3057\u3054\u3068 ${g?.completed.length||0} / 2`,r("uturn").hidden=!b||!m||x||m.stage==="DONE",r("uturn").disabled=i.phase!=="race"||i.road?.turnTimer>0,r("siren").setAttribute("aria-pressed",String(i.siren));let y=bl(i),E=g?.notice;E&&E.id!==h&&i.phase==="race"&&(h=E.id,r("radio-message").textContent=`\u{1F4FB} ${E.text}`,f(E.text)),E||(r("radio-message").textContent="\u{1F3C1} \u306F\u3057\u308A\u306A\u304C\u3089 \u304A\u3057\u3054\u3068 \u3057\u3088\u3046");let S=y?.uTurn?"\u21B6":y?.turn==="left"&&y.remaining<65?"\u2B05":y?.turn==="right"&&y.remaining<65?"\u27A1":"\u2B06";r("mission-arrow").textContent=x?m?.stage==="SUCCESS"?"\u{1F31F}":km[m?.kind]||"\u270B":m?S:"\u{1F3C1}",r("mission-instruction").textContent=x||m?.stage==="RETURN_TO_TRACK"?zm[m.stage]||"":m?`${Cs(i)?.label||""}${y?.uTurn?"\u3000\u30E6\u30FC\u30BF\u30FC\u30F3 \u3057\u3088\u3046":y?.remaining<65&&y.turn!=="straight"?"\u3000"+(y.turn==="right"?"\u307F\u304E\u3078":"\u3072\u3060\u308A\u3078"):""}`:"\u3064\u304E\u306E \u304A\u3057\u3054\u3068\u3092 \u307E\u3068\u3046";let v=b?i.courseId:"";if(v!==c&&(c=v,l=b?fd(Vt(i.courseId)):null),r("mini-map-branches").setAttribute("d",l?.branches||""),r("mini-map-heading").style.display=l?"":"none",r("mini-map-target").style.display=l&&m?"":"none",r("mini-map-hospitals").innerHTML="",r("mini-map-route").setAttribute("d",""),l){let M=Vt(i.courseId);r("mini-map-path").setAttribute("d",l.main);let P=Li(i),w=l.project(P);if(r("mini-map-car").setAttribute("cx",w.x),r("mini-map-car").setAttribute("cy",w.y),r("mini-map-heading").setAttribute("transform",`translate(${w.x} ${w.y}) rotate(${Math.atan2(P.tx,-P.tz)*180/Math.PI})`),r("mini-map-pits").innerHTML=M.track.repairFractions.map(R=>{let L=Object.values(M.edges).find(C=>C.main&&R*M.track.length>=C.station&&R*M.track.length<C.station+C.length),F=l.project(vt(L,R*M.track.length-L.station));return`<rect x="${F.x-1.5}" y="${F.y-1.5}" width="3" height="3" fill="#75e8a2"/>`}).join(""),r("mini-map-hospitals").innerHTML=M.hospitals.map(R=>{let L=l.project(vt(M.edges[R.edge],R.d));return`<text x="${L.x}" y="${L.y}" fill="${R.color}" font-size="8" text-anchor="middle">H</text>`}).join(""),m){let R=Cs(i),L=l.project(vt(M.edges[R.edge],R.d));if(r("mini-map-target").setAttribute("cx",L.x),r("mini-map-target").setAttribute("cy",L.y),y){let F=i.road,C=M.edges[F.edge],O=y.direction||(y.uTurn?-F.direction:F.direction),q=[];if(y.path.length)q.push(l.segment(C,F.d,O>0?C.length:0)),y.path.forEach((N,j)=>{let B=M.edges[N.edge];q.push(l.segment(B,N.direction>0?0:B.length,j===y.path.length-1?R.d:N.direction>0?B.length:0))});else{let N=Number.isFinite(y.cost)&&y.cost>0?y.cost:C.closed?C.length:12;q.push(l.segment(C,F.d,F.d+N*O))}r("mini-map-route").setAttribute("d",q.join(" "))}}}}function _(g){let m=new Set;for(let x of g||[]){if(!x.visible||i.phase!=="race"||!oi(i))continue;m.add(x.id);let b=a.get(x.id);if(!b){b=document.createElement("button"),b.className="mission-target",b.dataset.target=x.id,b.setAttribute("aria-label",x.label),b.innerHTML="<span>\u{1F446}</span>",r("mission-targets").append(b),a.set(x.id,b),b.addEventListener("pointerdown",S=>{if(S.preventDefault(),x.id.startsWith("fire-")&&gl(i,Number(x.id.slice(5)),S.pointerId)){try{b.setPointerCapture(S.pointerId)}catch{}b.classList.add("holding")}});let E=S=>{Di(i,S.pointerId),b.classList.remove("holding")};for(let S of["pointerup","pointercancel","lostpointercapture"])b.addEventListener(S,E);b.addEventListener("click",()=>{x.id.startsWith("fire-")||xd(i)}),b.addEventListener("keydown",S=>{x.id.startsWith("fire-")&&!S.repeat&&(S.key===" "||S.key==="Enter")&&(S.preventDefault(),gl(i,Number(x.id.slice(5)),"keyboard"))}),b.addEventListener("keyup",()=>{Di(i,"keyboard"),b.classList.remove("holding")}),b.addEventListener("blur",()=>Di(i))}b.hidden=!1,b.style.left=x.x+"px",b.style.top=x.y+"px";let y=i.missions?.active?.fires[Number(x.id.slice(5))];b.style.setProperty("--work-progress",x.id.startsWith("fire-")?`${100*(1-y/2.5)}%`:"0%")}for(let[x,b]of a)m.has(x)||(b.hidden=!0,b.classList.remove("holding"))}return{update:p,draw:_,cancelSpeech:d}}var zt=Object.freeze({impactThreshold:16,topFactor:.6,accelFactor:.65,handlingFactor:.68,repairSeconds:3,drift:.35,repairLead:170}),Ps=Object.freeze({penaltySeconds:10,stopSeconds:3,warningSeconds:1.2,minimumReactionSeconds:2,pedestrianSpeed:3.2});function Ni(i,e,t,n,s){let r=ut(n),a=s.radius||.3;if(s.distance<Math.min(i,e)-r.length/2-a||s.distance>Math.max(i,e)+r.length/2+a)return null;let o=r.width/2+a-Math.abs(t-s.offset);return o<=0?null:{strength:Math.max(.05,Math.min(1,o/Math.min(r.width,a*2)))}}function Td(i,e){let t=ai(i.model,i.parts.body),n=0,s=1/0;return t.forEach((r,a)=>{let o=(i.z+r.z-e.distance)**2+(i.offset-r.x-e.offset)**2;o<s&&(s=o,n=a)}),n}var Wt=i=>i.flatMask.some(Boolean);function Dr(i){let e=ai(i.model).length;return Object.assign(i,{flatMask:Array(e).fill(!1),flatVisual:Array(e).fill(0),damageSide:0,damageAge:0,repairTimer:0,repairProgress:0,pitAssist:!1,pitExit:!1,stopTimer:0,penaltyTime:0}),i}function Fi(i,e){let t=Math.floor(e/i.length),n;for(let s=t;s<=t+1;s++)for(let r of i.repairFractions){let a=(s+r)*i.length,o=a-e;o>=-22&&(!n||o<n.delta)&&(n={center:a,delta:o,offset:i.halfWidth+2.5})}return n}function Is(i,e,t){let n=Fi(i,e);return!!n&&Math.abs(n.delta)<=26&&t>=i.halfWidth-.5&&t<=i.halfWidth+5}function Ls(i,e,t,n=zt){if(t<n.impactThreshold)return"contact";let s=Td(i,e);if(i.flatMask[s])return"contact";i.flatMask[s]=!0,i.damageAge=0,i.boost=0,i.v=Math.min(i.v,ut(i.model).top*n.topFactor),i.pitAssist=!0;let r=ai(i.model,i.parts.body)[s];return i.damageSide=r.x<0?1:r.x>0?-1:0,ut(i.model).kind==="bike"&&(i.fallTimer=.9,i.roll=.8),"puncture"}function Ds(i,e,t=zt){i.damageAge+=e,i.stopTimer=Math.max(0,i.stopTimer-e);let n=null;return i.repairTimer>0&&(i.repairTimer=Math.max(0,i.repairTimer-e),i.repairProgress=1-i.repairTimer/t.repairSeconds,i.repairTimer===0&&(i.flatMask.fill(!1),i.flatVisual.fill(0),i.damageSide=0,i.pitAssist=!1,i.pitExit=!0,i.roll=0,i.pitch=0,n="repaired")),i.flatVisual=i.flatVisual.map((s,r)=>{let a=i.flatMask[r]?i.repairTimer>0?1-i.repairProgress:1:0;return s+(a-s)*Math.min(1,e*7)}),n}function Ns(i,e,t=zt){let n=Fi(e,i.z);return Wt(i)&&i.repairTimer<=0&&n&&Math.abs(n.delta)<=22&&Math.abs(i.offset-n.offset)<1.6?(i.repairTimer=t.repairSeconds,i.repairProgress=0,i.v=0,i.steerV=0,i.boost=0,!0):!1}function Ui(i,e){if(i.phase!=="finish")return 1+e.filter(s=>s.z>i.z).length;let t=mt(i.courseId).length*2,n=i.time+i.penaltyTime;return 1+e.filter(s=>(s.finishTime??i.time+(s.penaltyTime||0)+Math.max(0,t-s.z)/Math.max(1,s.speed||s.v||1))<n-.001).length}function wd(i,e=()=>i.phase==="race"){let t=new Map,n=new Set,s=new Map;function r(l){i[l]=n.has(l)||[...t.values()].includes(l),s.get(l)?.classList.toggle("is-down",i[l])}function a(l,h){s.set(h,l),l.addEventListener("pointerdown",d=>{if(d.preventDefault(),!!e()){t.set(d.pointerId,h),r(h);try{l.setPointerCapture(d.pointerId)}catch{}}});let u=d=>{let f=t.get(d.pointerId);t.delete(d.pointerId),f&&r(f)};for(let d of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(d,u)}function o(l,h){h&&e()?n.add(l):n.delete(l),r(l)}function c(){let l=new Set([...s.keys(),...n,...t.values()]);t.clear(),n.clear();for(let h of l)r(h)}return{bind:a,key:o,clear:c}}function Ad(i){let e=-1/0,t=n=>n.target.closest?.("canvas,button,[data-game-surface]");i.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&t(n)&&(e=performance.now())},{passive:!0}),i.addEventListener("dblclick",n=>{t(n)&&performance.now()-e<900&&n.preventDefault()}),i.addEventListener("contextmenu",n=>{t(n)&&!n.target.closest("textarea")&&n.preventDefault()})}var Ka=Object.freeze({tyres:["\u30B9\u30DD\u30FC\u30C4","\u30B9\u30EA\u30C3\u30AF"],body:["\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9","\u30EF\u30A4\u30C9"],aero:["\u306A\u3057","\u30B9\u30C8\u30EA\u30FC\u30C8","\u30EC\u30FC\u30B7\u30F3\u30B0"]});function Ja(i={}){let e=(t,n)=>Number.isInteger(i[t])&&i[t]>=0&&i[t]<Ka[t].length?i[t]:n;return{tyres:e("tyres",0),body:e("body",0),aero:e("aero",1)}}function Rd(i=0){return{model:i,color:[0,1,2,3,0,1,0,0][i]||0,parts:Ja()}}function Fs(i){return{model:Number.isInteger(i.model)&&hn[i.model]?i.model:0,color:Math.max(0,Math.min(3,Number.isInteger(i.color)?i.color:0)),parts:Ja(i.parts)}}function Cd(i){let e=Fs(i);return`${hn[e.model].name} / ${Ka.tyres[e.parts.tyres]} / ${Ka.body[e.parts.body]} / ${Ka.aero[e.parts.aero]}`}function Pd(i,e=12345){let t=mt(i),n=ja(e+31),s=[];for(let r=0;r<2;r++)t.crossings.forEach((a,o)=>s.push({id:`ped-${r}-${o}`,distance:(r+a)*t.length,side:n()>.5?1:-1,delay:n()*.6,enabled:n()>.15,phase:"waiting",elapsed:0,offset:0,hit:!1,rewarded:!1}));return s}function Nr(i,e,{activate:t=!0}={}){let n=mt(i.courseId),s=ut(i.model),r=null;for(let a of i.pedestrians){let o=a.distance-i.z,c=i.v*Ps.minimumReactionSeconds+i.v*i.v/(2*s.brake)+12,l=c+Math.max(55,i.v*2.2);if(a.phase==="waiting"){if(!t)continue;if(a.offset=a.side*(n.halfWidth+2),!a.enabled){a.phase="skipped";continue}if(o<c){a.phase="skipped";continue}o<l&&(a.phase="warning",a.elapsed=0,r="crossing-warning")}else if(a.phase==="warning")a.elapsed+=e,a.elapsed>=Ps.warningSeconds+a.delay&&(a.phase="crossing",a.elapsed=0);else if(a.phase==="crossing"){a.elapsed+=e;let h=a.elapsed*Ps.pedestrianSpeed;a.offset=a.side*(n.halfWidth+2-h),h>2*(n.halfWidth+2)&&(a.phase="safe",a.offset=-a.side*(n.halfWidth+3))}a.phase==="safe"&&!a.hit&&!a.rewarded&&i.z>a.distance+8&&(a.rewarded=!0,r="safe-crossing")}return r}function Us(i,e){for(let t of i.pedestrians)if(!(t.phase!=="crossing"||t.hit||i.v<=.5)&&Ni(e,i.z,i.offset,i.model,{distance:t.distance,offset:t.offset,radius:.3}))return t.hit=!0,t.phase="safe",t.offset=-t.side*(mt(i.courseId).halfWidth+3),i.penaltyTime+=Ps.penaltySeconds,i.stopTimer=Ps.stopSeconds,i.v=0,i.boost=0,i.steerV=0,"pedestrian-contact";return null}var Os=(i,e,t)=>Math.max(e,Math.min(t,i)),Fr=Object.freeze({easy:{label:"\u304B\u3093\u305F\u3093",top:.8,acceleration:6,grip:18,brake:.82,preview:1.35,precision:.48,passDistance:28,lateral:2.8},normal:{label:"\u3075\u3064\u3046",top:.985,acceleration:10,grip:28,brake:.94,preview:1.1,precision:.23,passDistance:38,lateral:3.7},hard:{label:"\u3080\u305A\u304B\u3057\u3044",top:1,acceleration:13,grip:38,brake:1,preview:1,precision:.08,passDistance:46,lateral:4.5}}),Gm=i=>Fr[i]||Fr.normal,Hm=[{name:"straight",top:1,acceleration:.95,grip:.94},{name:"corner",top:.975,acceleration:1,grip:1.18},{name:"accelerator",top:.985,acceleration:1.2,grip:1},{name:"steady",top:.96,acceleration:1.05,grip:1.08}];function Id(i=0,e="normal",t="C01"){return[125,87,51,20].map((n,s)=>{let r={z:n,model:i,courseId:t,difficulty:Fr[e]?e:"normal",personality:s,v:0,speed:0,l:[-3.4,3.1,-4.3,4.4][s],c:[1,2,3,1][s],wheelAngle:0,roll:0,pitch:0,motionSteer:0,brake:!1,boost:0,fallTimer:0,parts:{tyres:1,body:0,aero:1},struck:[],overtaking:!1};return Dr(r),r})}function xl(i,e,t,n=38){let s=Math.abs(dt(i,e).curvature);return Math.min(t,Math.sqrt(n/Math.max(1e-5,s)))}var Vm=(i,e,t)=>(e-i+t*1.5)%t-t/2;function Ya(i,e,t){let n=mt(i.courseId),s=[...e.filter(r=>r.finishTime===void 0).map(r=>({z:r.z,l:r.l,speed:r.speed||0,model:r.model??i.model,self:r})),...i.phase==="race"&&i.onMain!==!1?[{z:i.z,l:i.offset,speed:i.v,model:i.model}]:[]];for(let r of e){if(r.finishTime!==void 0){r.speed=r.v=0;continue}r.model??(r.model=i.model),r.courseId=n.id,r.parts??(r.parts={tyres:1,body:0,aero:1}),r.flatMask||Dr(r),r.struck??(r.struck=[]),r.time=i.time,r.pedestrians=i.pedestrians,r.boost=0;let a=ut(r.model),o=Gm(r.difficulty||i.aiDifficulty),c=Hm[r.personality||0],l=r.z,h=r.l,u=r.speed||r.v||0;if(Ds(r,t),r.fallTimer=Math.max(0,(r.fallTimer||0)-t),r.stopTimer>0||r.repairTimer>0||r.fallTimer>0){r.speed=r.v=0;continue}let d=n.halfWidth-a.width/2-.65,f=dt(n,r.z),p=dt(n,r.z+u*1.3+18),_=Math.abs(f.curvature)>Math.abs(p.curvature)?f:p,g=-Math.sign(_.curvature)*Math.min(d*.48,Math.abs(_.curvature)*180)+Math.sin(r.z*.015+(r.personality||0)*1.9)*o.precision,m=a.top*o.top*c.top,x=a.brake*o.brake,b=Math.max(35,u*u/(2*x)*o.preview+u*.5);for(let N=0;N<=b;N+=8){let j=xl(n,r.z+N,a.top,o.grip*c.grip);m=Math.min(m,Math.sqrt(j*j+2*x*N))}let y=s.filter(N=>N.self!==r).map(N=>({...N,gap:Vm(r.z,N.z,n.length),width:(a.width+ut(N.model).width)/2+.6})),E=N=>y.every(j=>j.gap>28||j.gap<-12||Math.abs(j.l-N)>j.width);r.overtaking=!1;let S=y.filter(N=>N.gap>0&&N.gap<o.passDistance&&Math.abs(N.l-r.l)<N.width).sort((N,j)=>N.gap-j.gap)[0];if(S&&S.speed<m+.5){let N=[S.l-S.width-.45,S.l+S.width+.45].filter(j=>Math.abs(j)<=d&&E(j)).sort((j,B)=>Math.abs(j-r.l)-Math.abs(B-r.l));N.length&&(g=N[0],r.overtaking=!0),(S.gap<Math.max(9,u*.55)||!N.length)&&(m=Math.min(m,Math.sqrt(Math.max(0,S.speed**2+2*x*Math.max(0,S.gap-a.length-3)))))}let v=y.find(N=>N.gap<0&&N.gap>-o.passDistance&&N.speed>u+2&&Math.abs(N.l-r.l)<N.width);if(v&&!r.overtaking){let N=[v.l-v.width-.35,v.l+v.width+.35].filter(j=>Math.abs(j)<=d&&E(j)).sort((j,B)=>Math.abs(j-r.l)-Math.abs(B-r.l));N.length&&(g=N[0])}for(let N of i.obstacles){let j=N.distance-r.z;if(!(j<=0||j>Math.max(36,u*2.5))&&Math.abs(g-N.offset)<a.width/2+N.radius+.6){let B=[N.offset-a.width/2-N.radius-1,N.offset+a.width/2+N.radius+1].filter(H=>Math.abs(H)<=d&&E(H));B.length?g=B.sort((H,G)=>Math.abs(H-r.l)-Math.abs(G-r.l))[0]:m=Math.min(m,Math.sqrt(2*x*Math.max(0,j-a.length-2)))}}for(let N of i.pedestrians){let j=N.distance-r.z;(N.phase==="warning"||N.phase==="crossing")&&j>-a.length&&j<b+35&&(m=Math.min(m,Math.sqrt(2*x*Math.max(0,j-a.length/2-4))))}let M=Fi(n,r.z);Wt(r)?(m=Math.min(m,a.top*zt.topFactor),M&&M.delta<170&&(g=M.delta<40?M.offset:Math.min(d,M.offset))):r.pitExit&&(g=0,Math.abs(r.l)<.5&&(r.pitExit=!1));let P=Wt(r)||r.pitExit?n.halfWidth+3:d,w=Os(g,-P,P),R=Math.min(o.lateral,a.turn)*(Wt(r)?zt.handlingFactor:1),L=r.l+Os(w-r.l,-R*t,R*t);y.some(N=>Math.abs(N.gap)<Math.max(18,Math.abs(N.speed-u))&&Math.abs(L-N.l)<N.width&&Math.abs(L-N.l)<Math.abs(r.l-N.l))||(r.l=L),r.motionSteer=t?(r.l-h)/t:0;let C=o.acceleration*c.acceleration*(a.accel/ut(0).accel)*(Wt(r)?zt.accelFactor:1);r.speed=Os(u+Os(m-u,-x*t,C*t),0,a.top),r.brake=m<u-.5,r.v=r.speed,r.offset=r.l;let O=Os(1+f.curvature*r.l,.8,1.25),q=r.speed*t;r.z=Math.min(n.length*2,r.z+q/O),r.wheelAngle=((r.wheelAngle||0)+q/a.radius)%(Math.PI*2),r.roll=-r.motionSteer*.013,r.pitch=Os(-(r.speed-u)*.0025/Math.max(t,.001),-.06,.045);for(let[N,j]of i.obstacles.entries()){if(r.struck.includes(N))continue;let B=Ni(l,r.z,r.l,r.model,j);B&&(r.struck.push(N),Ls(r,j,r.speed*B.strength*j.severity),r.speed=r.v)}Us(r,l),r.speed=r.v,Ns(r,n)&&(r.speed=0),r.z>=n.length*2&&(r.finishTime=i.time+r.penaltyTime,r.speed=r.v=0)}}var es=(i,e,t)=>Math.max(e,Math.min(t,i));function Wm(i,e,t,n,s){if(s<0)return;let r=mt(i.courseId),a=i.ledger,o=r.length/8,c=e.station+t,l=e.station+n;for(;a.next<8&&c<a.next*o+1e-7&&l>=a.next*o-1e-7;)a.next++;if(l>=r.length-1e-7&&c<r.length-1e-7){let h=i.missions.completed.includes(i.missions.plan[a.laps]?.id);a.next===8&&h?(a.laps++,a.next=1,i.z=a.laps*r.length):a.blocked++}else a.laps<2&&(i.z=Math.max(i.z,a.laps*r.length+Math.min(l,a.next*o-.001)));i.checkpointsPassed=a.laps*8+a.next-1}function Ld(i,e){if(!i.onMain)return null;let t=i.z,n=i.offset;i.z=i.ledger.laps*mt(i.courseId).length+Rs(i),i.offset*=i.road.direction;let s=e();return i.z=t,i.offset=n,s}function Dd(i,e,t){let n=es(Number.isFinite(t)?t:0,0,.05),s=mt(i.courseId),r=ut(i.model);if(i.phase==="countdown")return i.count-=n,i.count<=-.26&&(i.phase="race"),null;if(i.phase!=="race")return null;let a=Rs(i),o=i.v,c=i.offset,l=i.road.edge;i.time+=n,i.boost=Math.max(0,i.boost-n),i.charge=Math.min(100,i.charge+n*12);let h=Ds(i,n);i.onMain?Ld(i,()=>{h=Nr(i,n)||h}):h=Nr(i,n,{activate:!1})||h,i.onMain&&i.road.direction===1&&_d(i,a)&&(h="mission-dispatch"),vd(i,n);let u=ud(i,n),d=Vt(i.courseId).edges[i.road.edge],f=vt(d,i.road.d,0,i.road.direction),p=oi(i),_=yd(i),g=i.stopTimer>0||i.repairTimer>0||u,m=r.top*(1-es(f.grade,-.15,.25)*.55)+(i.boost>0?18:0);for(let b=0;b<Math.max(25,i.v*i.v/(2*r.brake));b+=8){let y=vt(d,i.road.d+b*i.road.direction);m=Math.min(m,Math.sqrt(38/Math.max(1e-5,Math.abs(y.curvature)))+(i.boost>0?8:0))}if(Wt(i)&&(m=Math.min(m,r.top*zt.topFactor)),_!==null&&(m=Math.min(m,Math.sqrt(2*r.brake*Math.max(0,_-3)))),(i.brake||g||p&&i.missions.active.stage!=="AUTO_STOP")&&(m=0),g?i.v=0:m<i.v?i.v=Math.max(m,i.v-r.brake*n*(i.missions.active?.stage==="SUSPECT_STOPPING"?1.5:1)):i.v+=(m-i.v)*(1-Math.exp(-n*r.accel*(Wt(i)?zt.accelFactor:1))),!p&&!u&&!g){let b=Number(i.steerR)-Number(i.steerL),y=b*r.turn*(.5+i.v/r.top*.5)*(Wt(i)?zt.handlingFactor:1);i.steerV=b?i.steerV+(y-i.steerV)*(1-Math.exp(-n*10)):0,i.offset+=(i.steerV+(Wt(i)?i.damageSide*zt.drift:0))*n*Math.min(1,i.v/6);let E=i.ledger.laps*s.length+(Rs(i)||0),S=i.onMain?Fi(s,E):null;if(Wt(i)&&i.pitAssist&&S&&S.delta<zt.repairLead&&!b&&i.road.direction===1){let P=Math.min(7.95,s.halfWidth-1.6),w=es((40-S.delta)/30,0,1),R=P+(S.offset-P)*w;i.offset+=es((R-i.offset)*(1-Math.exp(-n*2.6)),-r.turn*n*1.1,r.turn*n*1.1)}i.pitExit&&!b&&i.onMain&&(i.offset*=Math.exp(-n*3),Math.abs(i.offset)<.5&&(i.pitExit=!1));let M=i.onMain&&(Wt(i)&&S&&S.delta<45&&S.delta>-26||Is(s,E,i.offset)||i.pitExit)?s.halfWidth+4.5:d.width-r.width/2-.35;i.offset=es(i.offset,-M,M)}else i.steerV=0,i.steerL=i.steerR=!1;!u&&i.v>0&&ld(i,i.v*n,(...b)=>Wm(i,...b)),i.onMain&&i.road.direction===1&&i.missions.active?.stage==="RETURN_TO_TRACK"&&(i.road.joinedTravel=(i.road.joinedTravel||0)+i.v*n,i.road.joinedTravel>=12&&(i.missions.active.stage="DONE")),_!==null&&_<3.5&&i.v<.5&&Md(i),i.motionSteer=p&&i.missions.active.stage!=="SUSPECT_STOPPING"?0:es((i.offset-c)/Math.max(n,.001),-r.turn,r.turn),i.roll+=(-i.motionSteer*.013-i.roll)*(1-Math.exp(-n*7)),i.pitch+=(es(-(i.v-o)/Math.max(n,.001)*.0025,-.06,.045)-i.pitch)*(1-Math.exp(-n*7)),i.wheelAngle=(i.wheelAngle+i.v*n/r.radius)%(Math.PI*2),i.bounce=Math.sin(i.road.d*.85)*Math.min(.018,i.v*4e-4),i.onMain&&l===i.road.edge&&Ld(i,()=>{let b=i.ledger.laps*s.length+(a??Rs(i));for(let y of i.obstacles){if(y.hit)continue;let E=Ni(b,i.z,i.offset,i.model,y);E&&(y.hit=!0,h=Ls(i,y,i.v*E.strength*y.severity),i.v*=.8)}h=Us(i,b)||h,Ns(i,s)&&(h="repair-start")});let x=i.onMain?i.ledger.laps*s.length+Rs(i):i.z;if(Ya({...i,z:x,offset:i.offset*i.road.direction},e,n),i.onMain&&!p)for(let b of e){let y=(b.z-x+s.length*1.5)%s.length-s.length/2;Math.abs(y)<(r.length+4.86)*.4&&Math.abs(b.l-i.offset*i.road.direction)<r.width/2+1.05&&i.time-i.hit>2&&b.finishTime===void 0&&(i.hit=i.time,i.v*=.8,h="contact")}return i.lap=Math.min(2,i.ledger.laps+1),i.rank=Ui(i,e),i.ledger.laps===2&&i.missions.completed.length===2?(i.heroClear=!0,i.phase="finish",i.z=s.length*2,i.steerL=i.steerR=!1,i.rank=Ui(i,e),"finish"):h}var qm=1400,FM=qm*2,Xm=9.7,Nd=Xm-1.75,Fd=Math.PI*2,UM=ut(0).radius,ci=(i,e,t)=>Math.max(e,Math.min(t,i));function _l(i=0,e="normal",t="C01"){return Id(i,e,t)}function vl(i=0,e=0,t={},n="C01",s=12345,r="normal"){let a=mt(n),o=dt(a,0),c={phase:"menu",z:0,offset:0,v:0,steerL:!1,steerR:!1,steerV:0,motionSteer:0,boost:0,charge:100,time:0,lap:1,rank:5,color:i,model:e,parts:Ja(t),courseId:a.id,aiDifficulty:r,brake:!1,siren:!1,fallTimer:0,prev:0,roll:0,pitch:0,camX:o.x,camZ:o.z,camH:3.45,cameraOffset:0,hit:-20,count:3.2,wheelAngle:0,bounce:0,checkpointsPassed:0,nextCheckpoint:a.length/8,outTime:0,recoverTimer:0};return Dr(c),c.seed=s,c.obstacles=md(a.id,s),c.pedestrians=Pd(a.id,s),bd(c),c}function Ud(i){return i.phase!=="race"||oi(i)||i.charge<60||i.boost>0||i.brake||Wt(i)||i.repairTimer>0||i.stopTimer>0||i.fallTimer>0?!1:(i.charge=0,i.boost=2.55,!0)}function jm(i,e,t){let n=i.z,s=Math.min(n+t,e.length*2),r=e.length/e.checkpointCount;if(n>i.nextCheckpoint+3)return i.z=Math.max(0,i.nextCheckpoint-.2),i.offset=0,i.v*=.5,"recovered";for(i.z=s;i.nextCheckpoint<=s+1e-5&&i.nextCheckpoint>=n-1e-5;){if(Math.abs(i.offset)>e.halfWidth+.5&&!Is(e,i.nextCheckpoint,i.offset))return i.z=i.nextCheckpoint-.2,i.offset=0,i.v*=.5,"recovered";i.checkpointsPassed++,i.nextCheckpoint+=r}return null}function Od(i,e,t){if(i.missions)return Dd(i,e,t);let n=ci(Number.isFinite(t)?t:0,0,.05),s=mt(i.courseId),r=ut(i.model);if(i.phase==="countdown")return i.count-=n,i.count<=-.26&&(i.phase="race"),null;if(i.phase!=="race")return null;let a=i.z,o=i.offset;i.time+=n,i.boost=Math.max(0,i.boost-n),i.charge=Math.min(100,i.charge+n*12),i.recoverTimer=Math.max(0,i.recoverTimer-n);let c=Ds(i,n);c=Nr(i,n)||c,r.kind==="bike"&&Math.abs(i.roll)>.65&&i.fallTimer<=0&&(i.fallTimer=.9);let l=i.fallTimer>0;l&&(i.fallTimer=Math.max(0,i.fallTimer-n),i.roll*=Math.exp(-n*5),i.fallTimer===0&&(i.roll=0,l=!1,c="bike-recovered"));let h=i.stopTimer>0||i.repairTimer>0||l,u=dt(s,i.z),d=Number(i.steerR)-Number(i.steerL),f=i.v,p=Wt(i),_=Fi(s,i.z);if(h)i.v=0,i.steerV=0,i.motionSteer=0,i.repairTimer>0&&(i.wheelAngle=(i.wheelAngle+n*3)%Fd);else{let g=Is(s,i.z,i.offset),m=Math.abs(i.offset)>s.halfWidth-.5&&!g,x=r.top*(1-ci(u.grade,-.15,.25)*.55)+(i.boost>0?18:0);for(let w=0;w<=i.v*i.v/(2*r.brake);w+=8){let R=xl(s,i.z+w,r.top,38);x=Math.min(x,Math.sqrt(R*R+2*r.brake*w)+(i.boost>0?8:0))}p&&(x=Math.min(x,r.top*zt.topFactor)),m&&(x*=.55),i.brake&&(x=0),i.brake?i.v=Math.max(0,i.v-r.brake*n):i.v+=(x-i.v)*(1-Math.exp(-n*r.accel*(p?zt.accelFactor:1)));let b=d*r.turn*(.5+i.v/r.top*.5)*(p?zt.handlingFactor:1);i.steerV=d?i.steerV+(b-i.steerV)*(1-Math.exp(-n*10)):0,i.offset+=(i.steerV+(p?i.damageSide*zt.drift:0))*n*Math.min(1,i.v/6);let y=p&&i.pitAssist&&_&&_.delta<zt.repairLead;if(!d&&y&&i.v>0){let w=Math.min(Nd,s.halfWidth-1.6),R=ci((40-_.delta)/30,0,1),L=w+(_.offset-w)*R;i.offset+=ci((L-i.offset)*(1-Math.exp(-n*2.6)),-r.turn*n*1.1,r.turn*n*1.1)}i.pitExit&&!d&&i.v>0&&(i.offset*=Math.exp(-n*3),Math.abs(i.offset)<.5&&(i.pitExit=!1));let E=p&&_&&_.delta<45&&_.delta>-26||g||i.pitExit||i.repairTimer>0,S=s.difficulty===1&&!E?Nd:s.halfWidth+4.5;i.offset=ci(i.offset,-S,S),i.outTime=Math.abs(i.offset)>s.halfWidth+1&&!Is(s,i.z,i.offset)&&!i.pitExit?i.outTime+n:0,i.outTime>.85&&(i.offset=0,i.v*=.5,i.outTime=0,i.recoverTimer=.6,c="recovered");let v=ci(1+u.curvature*i.offset,.8,1.25),M=Math.min(i.v*n/v,s.length*2-i.z);c=jm(i,s,M)||c,i.wheelAngle=(i.wheelAngle+M*v/r.radius)%Fd,i.motionSteer=n?ci((i.offset-o)/n,-r.turn,r.turn):0,i.roll+=(-i.motionSteer*.013-i.roll)*(1-Math.exp(-n*7));let P=n>0?(i.v-f)/n:0;i.pitch+=(ci(-P*.0025,-.06,.045)-i.pitch)*(1-Math.exp(-n*7)),i.bounce=Math.sin(i.z*.85)*Math.min(.018,i.v*4e-4);for(let w of i.obstacles){if(w.hit)continue;let R=Ni(a,i.z,i.offset,i.model,w);if(R){w.hit=!0;let L=i.v*R.strength*w.severity;i.v*=.8,c=Ls(i,w,L),i.hit=i.time}}c=Us(i,a)||c,Ns(i,s)&&(c="repair-start")}Ya(i,e,n);for(let g of e){let m=((g.z-i.z+s.length/2)%s.length+s.length)%s.length-s.length/2;!h&&Math.abs(m)<(r.length+4.86)*.4&&Math.abs(g.l-i.offset)<r.width/2+1.05&&i.time-i.hit>2&&g.finishTime===void 0&&(i.hit=i.time,i.v*=.8,i.offset=ci(i.offset+(i.offset>g.l?.4:-.4),-s.halfWidth-4,s.halfWidth+4),c="contact")}return i.lap=Math.min(2,1+Math.floor(i.z/s.length)),i.rank=Ui(i,e),i.z>=s.length*2&&i.checkpointsPassed>=s.checkpointCount*2?(i.phase="finish",i.steerL=i.steerR=!1,i.rank=Ui(i,e),"finish"):c}var Dn=Object.freeze({high:{label:"\u9AD8\u753B\u8CEA",pixels:145e4,shadow:2048,model:"concept-high.glb",transmission:0,anisotropy:8},standard:{label:"\u6A19\u6E96",pixels:95e4,shadow:1024,model:"concept-mobile.glb",transmission:0,anisotropy:4},low:{label:"\u8EFD\u91CF",pixels:48e4,shadow:512,model:"concept-mobile.glb",transmission:0,anisotropy:2}});function Bd(i,e,t,n=4096){let s=Math.min(1.6,Math.sqrt(t/(i*e)),n/i,n/e);return[Math.max(1,Math.floor(i*s)),Math.max(1,Math.floor(e*s))]}function kd(i){let e=i.filter(n=>n>0).sort((n,s)=>n-s);if(!e.length)return{fps:0,p95:0};let t=e.reduce((n,s)=>n+s,0)/e.length;return{fps:Number((1e3/t).toFixed(1)),p95:Number(e[Math.min(e.length-1,Math.floor(e.length*.95))].toFixed(1))}}var Df=0,hh=1,Nf=2;var xs=1,Ff=2,xr=3,Yn=0,fn=1,Ht=2,_s=0,_r=1,uh=2,dh=3,fh=4,Uf=5;var vs=100,Of=101,Bf=102,kf=103,zf=104,Gf=200,Hf=201,Vf=202,Wf=203,ph=204,mh=205,qf=206,Xf=207,jf=208,Kf=209,Jf=210,Yf=211,Zf=212,$f=213,Qf=214,Ao=0,Ro=1,Co=2,Qs=3,Po=4,Io=5,Lo=6,Do=7,gh=0,ep=1,tp=2,Zn=0,bh=1,xh=2,_h=3,Ra=4,vh=5,yh=6,Mh=7,Kl="attached",np="detached",Sh=300,ys=301,vr=302,yr=303,sc=304,qn=1e3,mn=1001,er=1002,Bt=1003,rc=1004;var Ms=1005;var wt=1006,Mr=1007;var Tn=1008;var vn=1009,Eh=1010,Th=1011,Sr=1012,ac=1013,zn=1014,on=1015,pn=1016,oc=1017,cc=1018,Ss=1020,wh=35902,Ah=35899,Rh=1021,Ch=1022,Rn=1023,bi=1026,Ai=1027,lc=1028,hc=1029,ji=1030,uc=1031;var dc=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,fc=35840,pc=35841,mc=35842,gc=35843,bc=36196,xc=37492,_c=37496,vc=37488,yc=37489,Da=37490,Mc=37491,Sc=37808,Ec=37809,Tc=37810,wc=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Ic=37816,Lc=37817,Dc=37818,Nc=37819,Fc=37820,Uc=37821,Oc=36492,Bc=36494,kc=36495,zc=36283,Gc=36284,Na=36285,Hc=36286;var os=2300,cs=2301,To=2302,Jl=2303,Yl=2400,Zl=2401,$l=2402,ip=2500;var Ph=0,Fa=1,Er=2,sp=3200;var Vc=0,rp=1,Gn="",Tt="srgb",Xt="srgb-linear",Yr="linear",xt="srgb";var wo=7680;var ap=519,op=512,cp=513,lp=514,Ih=515,hp=516,up=517,Lh=518,Dh=519,Nh=35044,Wc=35048;var Fh="300 es",An=2e3,tr=2001;function Km(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dp(){let i=nr("canvas");return i.style.display="block",i}var zd={},ir=null;function Zr(...i){let e="THREE."+i.shift();ir?ir("log",e,...i):console.log(e,...i)}function fp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=fp(i);let e="THREE."+i.shift();if(ir)ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=fp(i);let e="THREE."+i.shift();if(ir)ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function as(...i){let e=i.join(" ");e in zd||(zd[e]=!0,Be(...i))}function pp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mp={[Ao]:Ao,[Co]:Lo,[Po]:Po,[Qs]:Io,[Ro]:Ro,[Lo]:Co,[Do]:Do,[Io]:Qs},Xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,Xr=Math.PI/180,ls=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function Ym(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zm(i,e,t){return i!==e?(t-i)/(e-i):0}function jr(i,e,t){return(1-t)*i+t*e}function $m(i,e,t,n){return jr(i,e,1-Math.exp(-t*n))}function Qm(i,e=1){return e-Math.abs(Uh(i,e*2)-e)}function eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ng(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ig(i,e){return i+Math.random()*(e-i)}function sg(i){return i*(.5-Math.random())}function rg(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ag(i){return i*Xr}function og(i){return i*ls}function cg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bh(i,e){if(e.constructor===Float32Array)return i;let t=qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function kh(i,e){if(e.constructor===Float32Array)return i;let t=qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var $n={DEG2RAD:Xr,RAD2DEG:ls,generateUUID:Hn,clamp:nt,euclideanModulo:Uh,mapLinear:Ym,inverseLerp:Zm,lerp:jr,damp:$m,pingpong:Qm,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:sg,seededRandom:rg,degToRad:ag,radToDeg:og,isPowerOfTwo:cg,ceilPowerOfTwo:lg,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:hg,normalize:kh,denormalize:Bh},qh=class qh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;var pe=qh,It=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==p){let g=c*d+l*f+h*p+u*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let x=Math.acos(g),b=Math.sin(x);m=Math.sin(m*x)/b,o=Math.sin(o*x)/b,c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+_*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+p*o,u=u*m+_*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xh=class Xh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xh.prototype.isVector3=!0;var D=Xh,yl=new D,Hd=new It,jh=class jh{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],x=s[1],b=s[4],y=s[7],E=s[2],S=s[5],v=s[8];return r[0]=a*_+o*x+c*E,r[3]=a*g+o*b+c*S,r[6]=a*m+o*y+c*v,r[1]=l*_+h*x+u*E,r[4]=l*g+h*b+u*S,r[7]=l*m+h*y+u*v,r[2]=d*_+f*x+p*E,r[5]=d*g+f*b+p*S,r[8]=d*m+f*y+p*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(e,t)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-e)),this}translate(e,t){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jh.prototype.isMatrix3=!0;var Ye=jh,Ml=new Ye,Vd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){let i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Vd,fromXYZ:Wd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var rt=ug();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,No=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=nr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dg=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sl(s[a].image)):r.push(Sl(s[a]))}else r=Sl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?No.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var fg=0,El=new D,$t=class i extends Xn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mn,s=mn,r=wt,a=Tn,o=Rn,c=vn,l=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Hn(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case er:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case er:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Sh;$t.DEFAULT_ANISOTROPY=1;var Kh=class Kh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(f+1)/2,E=(m+1)/2,S=(h+d)/4,v=(u+_)/4,M=(p+g)/4;return b>y&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=v/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kh.prototype.isVector4=!0;var yt=Kh,Fo=class extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$r=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ic=class ic{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d+_*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,_=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(n,yn),Oi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(n,yn)),Oi.normalize(),Za.crossVectors(yn,Oi),s[0]=Oi.x,s[4]=Za.x,s[8]=yn.x,s[1]=Oi.y,s[5]=Za.y,s[9]=yn.y,s[2]=Oi.z,s[6]=Za.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],x=n[3],b=n[7],y=n[11],E=n[15],S=s[0],v=s[4],M=s[8],P=s[12],w=s[1],R=s[5],L=s[9],F=s[13],C=s[2],O=s[6],q=s[10],N=s[14],j=s[3],B=s[7],H=s[11],G=s[15];return r[0]=a*S+o*w+c*C+l*j,r[4]=a*v+o*R+c*O+l*B,r[8]=a*M+o*L+c*q+l*H,r[12]=a*P+o*F+c*N+l*G,r[1]=h*S+u*w+d*C+f*j,r[5]=h*v+u*R+d*O+f*B,r[9]=h*M+u*L+d*q+f*H,r[13]=h*P+u*F+d*N+f*G,r[2]=p*S+_*w+g*C+m*j,r[6]=p*v+_*R+g*O+m*B,r[10]=p*M+_*L+g*q+m*H,r[14]=p*P+_*F+g*N+m*G,r[3]=x*S+b*w+y*C+E*j,r[7]=x*v+b*R+y*O+E*B,r[11]=x*M+b*L+y*q+E*H,r[15]=x*P+b*F+y*N+E*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],x=c*f-l*d,b=o*f-l*u,y=o*d-c*u,E=a*f-l*h,S=a*d-c*h,v=a*u-o*h;return t*(_*x-g*b+m*y)-n*(p*x-g*E+m*S)+s*(p*b-_*E+m*v)-r*(p*y-_*S+g*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=t*o-n*a,b=t*c-s*a,y=t*l-r*a,E=n*c-s*o,S=n*l-r*o,v=s*l-r*c,M=h*_-u*p,P=h*g-d*p,w=h*m-f*p,R=u*g-d*_,L=u*m-f*_,F=d*m-f*g,C=x*F-b*L+y*R+E*w-S*P+v*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/C;return e[0]=(o*F-c*L+l*R)*O,e[1]=(s*L-n*F-r*R)*O,e[2]=(_*v-g*S+m*E)*O,e[3]=(d*S-u*v-f*E)*O,e[4]=(c*w-a*F-l*P)*O,e[5]=(t*F-s*w+r*P)*O,e[6]=(g*y-p*v-m*b)*O,e[7]=(h*v-d*y+f*b)*O,e[8]=(a*L-o*w+l*M)*O,e[9]=(n*w-t*L-r*M)*O,e[10]=(p*S-_*y+m*x)*O,e[11]=(u*y-h*S-f*x)*O,e[12]=(o*P-a*R-c*M)*O,e[13]=(t*R-n*P+s*M)*O,e[14]=(_*b-p*E-g*x)*O,e[15]=(h*E-u*b+d*x)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,x=c*l,b=c*h,y=c*u,E=n.x,S=n.y,v=n.z;return s[0]=(1-(_+m))*E,s[1]=(f+y)*E,s[2]=(p-b)*E,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+m))*S,s[6]=(g+x)*S,s[7]=0,s[8]=(p+b)*v,s[9]=(g-x)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ks.set(s[0],s[1],s[2]).length(),o=ks.set(s[4],s[5],s[6]).length(),c=ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let l=1/a,h=1/o,u=1/c;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===An)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===tr)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=An,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===An)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===tr)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ic.prototype.isMatrix4=!0;var qe=ic,ks=new D,Nn=new qe,pg=new D(0,0,0),mg=new D(1,1,1),Oi=new D,Za=new D,yn=new D,qd=new qe,Xd=new It,xi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gg=0,jd=new D,zs=new It,li=new qe,$a=new D,Ur=new D,bg=new D,xg=new It,Kd=new D(1,0,0),Jd=new D(0,1,0),Yd=new D(0,0,1),Zd={type:"added"},_g={type:"removed"},Gs={type:"childadded",child:null},Tl={type:"childremoved",child:null},Lt=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new xi,n=new It,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Ur,$a,this.up):li.lookAt($a,Ur,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(li),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_g),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new D(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Uh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wl(a,r,e+1/3),this.g=wl(a,r,e),this.b=wl(a,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=gp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return rt.workingToColorSpace(rn.copy(this),e),Math.round(nt(rn.r*255,0,255))*65536+Math.round(nt(rn.g*255,0,255))*256+Math.round(nt(rn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Tt){rt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Qa);let n=jr(Bi.h,Qa.h,t),s=jr(Bi.s,Qa.s,t),r=jr(Bi.l,Qa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ze;ze.NAMES=gp;var ea=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ar=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new D,hi=new D,Al=new D,ui=new D,Hs=new D,Vs=new D,$d=new D,Rl=new D,Cl=new D,Pl=new D,Il=new yt,Ll=new yt,Dl=new yt,Vi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fn.subVectors(e,t),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fn.subVectors(s,t),hi.subVectors(n,t),Al.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(hi),c=Fn.dot(Al),l=hi.dot(hi),h=hi.dot(Al),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Il.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Il.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Il,r.x),a.addScaledVector(Ll,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(e,t,n,s){return Fn.subVectors(n,t),hi.subVectors(e,t),Fn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hs.subVectors(s,n),Vs.subVectors(r,n),Rl.subVectors(e,n);let c=Hs.dot(Rl),l=Vs.dot(Rl);if(c<=0&&l<=0)return t.copy(n);Cl.subVectors(e,s);let h=Hs.dot(Cl),u=Vs.dot(Cl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Hs,a);Pl.subVectors(e,r);let f=Hs.dot(Pl),p=Vs.dot(Pl);if(p>=0&&f<=p)return t.copy(r);let _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Vs,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return $d.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector($d,o);let m=1/(g+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),to.subVectors(this.max,Or),Ws.subVectors(e.a,Or),qs.subVectors(e.b,Or),Xs.subVectors(e.c,Or),ki.subVectors(qs,Ws),zi.subVectors(Xs,qs),ts.subVectors(Ws,Xs);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-ts.z,ts.y,ki.z,0,-ki.x,zi.z,0,-zi.x,ts.z,0,-ts.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-ts.y,ts.x,0];return!Nl(t,Ws,qs,Xs,to)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Ws,qs,Xs,to))?!1:(no.crossVectors(ki,zi),t=[no.x,no.y,no.z],Nl(t,Ws,qs,Xs,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},di=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,eo=new dn,Ws=new D,qs=new D,Xs=new D,ki=new D,zi=new D,ts=new D,Or=new D,to=new D,no=new D,ns=new D;function Nl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var mi=yg();function yg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Mg(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=nt(i,-65504,65504),mi.floatView[0]=i;let e=mi.uint32View[0],t=e>>23&511;return mi.baseTable[t]+((e&8388607)>>mi.shiftTable[t])}function Sg(i){let e=i>>10;return mi.uint32View[0]=mi.mantissaTable[mi.offsetTable[e]+(i&1023)]+mi.exponentTable[e],mi.floatView[0]}var Wi=class{static toHalfFloat(e){return Mg(e)}static fromHalfFloat(e){return Sg(e)}},Gt=new D,io=new pe,Eg=0,Ot=class extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=e!==void 0?qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):kh(e,this.array)}};var ta=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tg=new dn,Br=new D,Fl=new D,gn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Fl)),this.expandByPoint(Br.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wg=0,wn=new qe,Ul=new Lt,js=new D,Mn=new dn,kr=new dn,Zt=new D,gt=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?na:ta)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Mn.min,kr.min),Mn.expandByPoint(Zt),Zt.addVectors(Mn.max,kr.max),Mn.expandByPoint(Zt)):(Mn.expandByPoint(kr.min),Mn.expandByPoint(kr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(js.fromBufferAttribute(e,l),Zt.add(js)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;let h=new D,u=new D,d=new D,f=new pe,p=new pe,_=new pe,g=new D,m=new D;function x(P,w,R){l[P]=l[w]=l[R]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[P].add(g),o[w].add(g),o[R].add(g),c[P].add(m),c[w].add(m),c[R].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,w=b.length;P<w;++P){let R=b[P],L=R.start,F=R.count;for(let C=L,O=L+F;C<O;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new D,E=new D,S=new D,v=new D;function M(P){S.fromBufferAttribute(s,P),v.copy(S);let w=o[P];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),E.crossVectors(v,w);let L=E.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,w=n.count;P<w;++P)l[P]&&M(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new Ot(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Qd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Qd(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Hn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var un=new D,cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?qc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):kh(e,this.data.array)}},Ol=new D,Ag=new D,Rg=new Ye,On=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ol.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ol),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rg.getNormalMatrix(e),s=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cg=0,bn=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=_r,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new On().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var fi=new D,Bl=new D,so=new D,ro=new D,hs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bl.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),ro.copy(this.origin).sub(Bl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(so),o=ro.dot(this.direction),c=-ro.dot(so),l=ro.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bl).addScaledVector(so,d),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=n.x-a.x,x=n.y-a.y,b=n.z-a.z,y=Math.abs(c),E=Math.abs(l),S=Math.abs(h),v,M,P,w,R,L,F,C,O,q,N,j;if(y>=E&&y>=S?(P=c,L=u,O=p,j=m,c>=0?(v=l,M=h,w=d,R=f,F=_,C=g,q=x,N=b):(v=h,M=l,w=f,R=d,F=g,C=_,q=b,N=x)):E>=S?(P=l,L=d,O=_,j=x,l>=0?(v=h,M=c,w=f,R=u,F=g,C=p,q=b,N=m):(v=c,M=h,w=u,R=f,F=p,C=g,q=m,N=b)):(P=h,L=f,O=g,j=b,h>=0?(v=c,M=l,w=u,R=d,F=p,C=_,q=m,N=x):(v=l,M=c,w=d,R=u,F=_,C=p,q=x,N=m)),P===0)return null;let B=v/P,H=M/P,G=1/P,ee=w-B*L,le=R-H*L,U=F-B*O,X=C-H*O,te=q-B*j,ce=N-H*j,ae=te*X-ce*U,xe=ee*ce-le*te,Ve=U*le-X*ee;if(s){if(ae<0||xe<0||Ve<0)return null}else if((ae<0||xe<0||Ve<0)&&(ae>0||xe>0||Ve>0))return null;let de=ae+xe+Ve;if(de===0)return null;let De=G*(ae*L+xe*O+Ve*j);return(de>0?De<0:De>0)?null:this.at(De/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ef=new qe,is=new hs,ao=new gn,tf=new D,oo=new D,co=new D,lo=new D,kl=new D,ho=new D,nf=new D,uo=new D,et=class extends Lt{constructor(e=new gt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ho.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(kl.fromBufferAttribute(u,e),a?ho.addScaledVector(kl,h):ho.addScaledVector(kl.sub(t),h))}t.add(ho)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(ao.containsPoint(is.origin)===!1&&(is.intersectSphere(ao,tf)===null||is.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(r).invert(),is.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=b;y<E;y+=3){let S=o.getX(y),v=o.getX(y+1),M=o.getX(y+2);s=fo(this,m,e,n,l,h,u,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let x=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=fo(this,a,e,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=b;y<E;y+=3){let S=y,v=y+1,M=y+2;s=fo(this,m,e,n,l,h,u,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let x=g,b=g+1,y=g+2;s=fo(this,a,e,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pg(i,e,t,n,s,r,a,o){let c;if(e.side===fn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Yn,o),c===null)return null;uo.copy(o),uo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(uo);return l<t.near||l>t.far?null:{distance:l,point:uo.clone(),object:i}}function fo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,oo),i.getVertexPosition(c,co),i.getVertexPosition(l,lo);let h=Pg(i,e,t,n,oo,co,lo,nf);if(h){let u=new D;Vi.getBarycoord(nf,oo,co,lo,u),s&&(h.uv=Vi.getInterpolatedAttribute(s,o,c,l,u,new pe)),r&&(h.uv1=Vi.getInterpolatedAttribute(r,o,c,l,u,new pe)),a&&(h.normal=Vi.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Vi.getNormal(oo,co,lo,d.normal),h.face=d,h.barycoord=u}return h}var zr=new yt,sf=new yt,rf=new yt,Ig=new yt,af=new qe,po=new D,zl=new gn,of=new qe,Gl=new hs,ia=class extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingBox.expandByPoint(po)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,po),this.boundingSphere.expandByPoint(po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(of.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(of),!(this.boundingBox!==null&&Gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===np?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;sf.fromBufferAttribute(s.attributes.skinIndex,e),rf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(zr.copy(t),t.set(0,0,0,0)):(zr.set(t.x,t.y,t.z,1),t.set(0,0,0)),zr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=rf.getComponent(r);if(a!==0){let o=sf.getComponent(r);af.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ig.copy(zr).applyMatrix4(af),a)}}return t.isVector4&&(t.w=zr.w),t.applyMatrix4(this.bindMatrixInverse)}},lr=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},jn=class extends $t{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,h=Bt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},cf=new qe,Lg=new qe,sa=class i{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Lg;cf.multiplyMatrices(o,t[r]),cf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new jn(t,e,e,Rn,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new lr),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},_i=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new qe,lf=new qe,mo=[],hf=new dn,Dg=new qe,Gr=new et,Hr=new gn,an=class extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),hf.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(hf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Hr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),lf.multiplyMatrices(n,Ks),Gr.matrixWorld=lf,Gr.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){let c=mo[a];c.instanceId=r,c.object=this,t.push(c)}mo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(s*this.count),s,this.count,lc,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new gn,Ng=new pe(.5,.5),go=new D,qi=class{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],x=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,m-p,E-x).normalize(),s[1].setComponents(l+a,f+h,m+p,E+x).normalize(),s[2].setComponents(l+o,f+u,m+_,E+b).normalize(),s[3].setComponents(l-o,f-u,m-_,E-b).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,m-g,E-y).normalize();else if(s[4].setComponents(l-c,f-d,m-g,E-y).normalize(),t===An)s[5].setComponents(l+c,f+d,m+g,E+y).normalize();else if(t===tr)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=Ng.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uf=new qe,Oo=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];uf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new qi),n[s].setFromProjectionMatrix(uf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var hr=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new D,ko=new D,df=new qe,Vr=new hs,bo=new gn,Hl=new D,ff=new D,us=class extends Lt{constructor(e=new gt,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Bo.fromBufferAttribute(t,s-1),ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Bo.distanceTo(ko);e.setAttribute("lineDistance",new Qe(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;df.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){let m=h.getX(_),x=h.getX(_+1),b=xo(this,e,Vr,c,m,x,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=xo(this,e,Vr,c,_,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){let m=xo(this,e,Vr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=xo(this,e,Vr,c,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Bo.fromBufferAttribute(o,s),ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Bo,ko,Hl,ff)>n)return;Hl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Hl);if(!(l<e.near||l>e.far))return{distance:l,point:ff.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var pf=new D,mf=new D,ra=class extends us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)pf.fromBufferAttribute(t,s),mf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+pf.distanceTo(mf);e.setAttribute("lineDistance",new Qe(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},aa=class extends us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ur=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gf=new qe,Ql=new hs,_o=new gn,vo=new D,oa=class extends Lt{constructor(e=new gt,t=new ur){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;gf.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(gf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,_=f;p<_;p++){let g=l.getX(p);vo.fromBufferAttribute(u,g),bf(vo,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)vo.fromBufferAttribute(u,p),bf(vo,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bf(i,e,t,n,s,r,a){let o=Ql.distanceSqToPoint(i);if(o<t){let c=new D;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends $t{constructor(e=[],t=ys,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var vi=class extends $t{constructor(e,t,n=zn,s,r,a,o=Bt,c=Bt,l,h=bi,u=1){if(h!==bi&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},la=class extends vi{constructor(e,t=zn,n=ys,s,r,a=Bt,o=Bt,c,l=bi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xn=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function p(_,g,m,x,b,y,E,S,v,M,P){let w=y/v,R=E/M,L=y/2,F=E/2,C=S/2,O=v+1,q=M+1,N=0,j=0,B=new D;for(let H=0;H<q;H++){let G=H*R-F;for(let ee=0;ee<O;ee++){let le=ee*w-L;B[_]=le*x,B[g]=G*b,B[m]=C,l.push(B.x,B.y,B.z),B[_]=0,B[g]=0,B[m]=S>0?1:-1,h.push(B.x,B.y,B.z),u.push(ee/v),u.push(1-H/M),N+=1}}for(let H=0;H<M;H++)for(let G=0;G<v;G++){let ee=d+G+O*H,le=d+G+O*(H+1),U=d+(G+1)+O*(H+1),X=d+(G+1)+O*H;c.push(ee,le,X),c.push(le,U,X),j+=6}o.addGroup(f,j,P),f+=j,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Bn=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,_=[],g=n/2,m=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function x(){let y=new D,E=new D,S=0,v=(t-e)/n;for(let M=0;M<=r;M++){let P=[],w=M/r,R=w*(t-e)+e;for(let L=0;L<=s;L++){let F=L/s,C=F*c+o,O=Math.sin(C),q=Math.cos(C);E.x=R*O,E.y=-w*n+g,E.z=R*q,u.push(E.x,E.y,E.z),y.set(O,v,q).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-w),P.push(p++)}_.push(P)}for(let M=0;M<s;M++)for(let P=0;P<r;P++){let w=_[P][M],R=_[P+1][M],L=_[P+1][M+1],F=_[P][M+1];(e>0||P!==0)&&(h.push(w,R,F),S+=3),(t>0||P!==r-1)&&(h.push(R,L,F),S+=3)}l.addGroup(m,S,0),m+=S}function b(y){let E=p,S=new pe,v=new D,M=0,P=y===!0?e:t,w=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;let R=p;for(let L=0;L<=s;L++){let C=L/s*c+o,O=Math.cos(C),q=Math.sin(C);v.x=P*q,v.y=g*w,v.z=P*O,u.push(v.x,v.y,v.z),d.push(0,w,0),S.x=O*.5+.5,S.y=q*.5*w+.5,f.push(S.x,S.y),p++}for(let L=0;L<s;L++){let F=E+L,C=R+L;y===!0?h.push(C,C+1,F):h.push(C+1,C,F),M+=3}l.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new pe:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new qe;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},dr=class extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zo=class extends dr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xf=new D,_f=new D,Vl=new zh,Wl=new zh,ql=new zh,Go=class extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(_f.subVectors(s[0],s[1]).add(s[0]),l=_f);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Vl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,g),Wl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,g),ql.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Wl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ql.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Vl.calc(c),Wl.calc(c),ql.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Fg(i,e){let t=1-i;return t*t*e}function Ug(i,e){return 2*(1-i)*i*e}function Og(i,e){return i*i*e}function Kr(i,e,t,n){return Fg(i,e)+Ug(i,t)+Og(i,n)}function Bg(i,e){let t=1-i;return t*t*t*e}function kg(i,e){let t=1-i;return 3*t*t*i*e}function zg(i,e){return 3*(1-i)*i*i*e}function Gg(i,e){return i*i*i*e}function Jr(i,e,t,n,s){return Bg(i,e)+kg(i,t)+zg(i,n)+Gg(i,s)}var ua=class extends En{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,s.x,r.x,a.x,o.x),Jr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ho=class extends En{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Jr(e,s.x,r.x,a.x,o.x),Jr(e,s.y,r.y,a.y,o.y),Jr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends En{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends En{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends En{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends En{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y),Kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vf(o,c.x,l.x,h.x,u.x),vf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},eh=Object.freeze({__proto__:null,ArcCurve:zo,CatmullRomCurve3:Go,CubicBezierCurve:ua,CubicBezierCurve3:Ho,EllipseCurve:dr,LineCurve:da,LineCurve3:Vo,QuadraticBezierCurve:fa,QuadraticBezierCurve3:Wo,SplineCurve:pa}),qo=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new eh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ma=class extends qo{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new da(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new fa(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ua(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new dr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fr=class extends ma{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ma().fromJSON(s))}return this}};function Hg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=bp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=jg(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return ga(r,a,t,o,c,l,0),a}function bp(i,e,t,n,s){let r;if(s===s0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=yf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=yf(a/n|0,i[a],i[a+1],r);return r&&pr(r,r.next)&&(xa(r),r=r.next),r}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ga(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$g(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Wg(i,n,s,r):Vg(i)){e.push(c.i,i.i,l.i),xa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=qg(ds(i),e),ga(i,e,t,n,s,r,2)):a===2&&Xg(i,e,t,n,s,r):ga(ds(i),e,t,n,s,r,1);break}}}function Vg(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Wr(s,o,r,c,a,l,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Pt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),p=Math.min(h,u,d),_=Math.max(o,c,l),g=Math.max(h,u,d),m=th(f,p,e,t,n),x=th(_,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Wr(o,h,c,u,l,d,b.x,b.y)&&Pt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Wr(o,h,c,u,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&Wr(o,h,c,u,l,d,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&Wr(o,h,c,u,l,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!pr(n,s)&&_p(n,t,t.next,s)&&ba(n,s)&&ba(s,n)&&(e.push(n.i,t.i,s.i),xa(t),xa(t.next),t=i=s),t=t.next}while(t!==i);return ds(t)}function Xg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&t0(a,o)){let c=vp(a,o);a=ds(a,a.next),c=ds(c,c.next),ga(a,e,t,n,s,r,0),ga(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=bp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(e0(l))}s.sort(Kg);for(let r=0;r<s.length;r++)t=Jg(s[r],t);return t}function Kg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Jg(i,e){let t=Yg(i,e);if(!t)return e;let n=vp(t,i);return ds(n,n.next),ds(t,t.next)}function Yg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(pr(i,t))return t;do{if(pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&xp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ba(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Zg(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Zg(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function $g(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qg(s)}function Qg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function e0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Wr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&xp(i,e,t,n,s,r,a,o)}function t0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!n0(i,e)&&(ba(i,e)&&ba(e,i)&&i0(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||pr(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pr(i,e){return i.x===e.x&&i.y===e.y}function _p(i,e,t,n){let s=Mo(Pt(i,e,t)),r=Mo(Pt(i,e,n)),a=Mo(Pt(t,n,i)),o=Mo(Pt(t,n,e));return!!(s!==r&&a!==o||s===0&&yo(i,t,e)||r===0&&yo(i,n,e)||a===0&&yo(t,i,n)||o===0&&yo(t,e,n))}function yo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mo(i){return i>0?1:i<0?-1:0}function n0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&_p(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ba(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function i0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function vp(i,e){let t=nh(i.i,i.x,i.y),n=nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yf(i,e,t,n){let s=nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function s0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ih=class{static triangulate(e,t,n=2){return Hg(e,t,n)}},rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mf(e),Sf(n,e);let a=e.length;t.forEach(Mf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Sf(n,t[c]);let o=ih.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Mf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _a=class i extends gt{constructor(e=new fr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:r0,b,y=!1,E,S,v,M;if(m){b=m.getSpacedPoints(h),y=!0,d=!1;let Z=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(h,Z),S=new D,v=new D,M=new D}d||(g=0,f=0,p=0,_=0);let P=o.extractPoints(l),w=P.shape,R=P.holes;if(!rs.isClockWise(w)){w=w.reverse();for(let Z=0,ue=R.length;Z<ue;Z++){let he=R[Z];rs.isClockWise(he)&&(R[Z]=he.reverse())}}function F(Z){let he=10000000000000001e-36,be=Z[0];for(let _e=1;_e<=Z.length;_e++){let Xe=_e%Z.length,k=Z[Xe],oe=k.x-be.x,Re=k.y-be.y,Ge=oe*oe+Re*Re,V=Math.max(Math.abs(k.x),Math.abs(k.y),Math.abs(be.x),Math.abs(be.y)),ft=he*V*V;if(Ge<=ft){Z.splice(Xe,1),_e--;continue}be=k}}F(w),R.forEach(F);let C=R.length,O=w;for(let Z=0;Z<C;Z++){let ue=R[Z];w=w.concat(ue)}function q(Z,ue,he){return ue||Ke("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ue,he)}let N=w.length;function j(Z,ue,he){let be,_e,Xe,k=Z.x-ue.x,oe=Z.y-ue.y,Re=he.x-Z.x,Ge=he.y-Z.y,V=k*k+oe*oe,ft=k*Ge-oe*Re;if(Math.abs(ft)>Number.EPSILON){let ot=Math.sqrt(V),Mt=Math.sqrt(Re*Re+Ge*Ge),Te=ue.x-oe/ot,Ft=ue.y+k/ot,We=he.x-Ge/Mt,Je=he.y+Re/Mt,I=((We-Te)*Ge-(Je-Ft)*Re)/(k*Ge-oe*Re);be=Te+k*I-Z.x,_e=Ft+oe*I-Z.y;let T=be*be+_e*_e;if(T<=2)return new pe(be,_e);Xe=Math.sqrt(T/2)}else{let ot=!1;k>Number.EPSILON?Re>Number.EPSILON&&(ot=!0):k<-Number.EPSILON?Re<-Number.EPSILON&&(ot=!0):Math.sign(oe)===Math.sign(Ge)&&(ot=!0),ot?(be=-oe,_e=k,Xe=Math.sqrt(V)):(be=k,_e=oe,Xe=Math.sqrt(V/2))}return new pe(be/Xe,_e/Xe)}let B=[];for(let Z=0,ue=O.length,he=ue-1,be=Z+1;Z<ue;Z++,he++,be++)he===ue&&(he=0),be===ue&&(be=0),B[Z]=j(O[Z],O[he],O[be]);let H=[],G,ee=B.concat();for(let Z=0,ue=C;Z<ue;Z++){let he=R[Z];G=[];for(let be=0,_e=he.length,Xe=_e-1,k=be+1;be<_e;be++,Xe++,k++)Xe===_e&&(Xe=0),k===_e&&(k=0),G[be]=j(he[be],he[Xe],he[k]);H.push(G),ee=ee.concat(G)}let le;if(g===0)le=rs.triangulateShape(O,R);else{let Z=[],ue=[];for(let he=0;he<g;he++){let be=he/g,_e=f*Math.cos(be*Math.PI/2),Xe=p*Math.sin(be*Math.PI/2)+_;for(let k=0,oe=O.length;k<oe;k++){let Re=q(O[k],B[k],Xe);xe(Re.x,Re.y,-_e),be===0&&Z.push(Re)}for(let k=0,oe=C;k<oe;k++){let Re=R[k];G=H[k];let Ge=[];for(let V=0,ft=Re.length;V<ft;V++){let ot=q(Re[V],G[V],Xe);xe(ot.x,ot.y,-_e),be===0&&Ge.push(ot)}be===0&&ue.push(Ge)}}le=rs.triangulateShape(Z,ue)}let U=le.length,X=p+_;for(let Z=0;Z<N;Z++){let ue=d?q(w[Z],ee[Z],X):w[Z];y?(v.copy(E.normals[0]).multiplyScalar(ue.x),S.copy(E.binormals[0]).multiplyScalar(ue.y),M.copy(b[0]).add(v).add(S),xe(M.x,M.y,M.z)):xe(ue.x,ue.y,0)}for(let Z=1;Z<=h;Z++)for(let ue=0;ue<N;ue++){let he=d?q(w[ue],ee[ue],X):w[ue];y?(v.copy(E.normals[Z]).multiplyScalar(he.x),S.copy(E.binormals[Z]).multiplyScalar(he.y),M.copy(b[Z]).add(v).add(S),xe(M.x,M.y,M.z)):xe(he.x,he.y,u/h*Z)}for(let Z=g-1;Z>=0;Z--){let ue=Z/g,he=f*Math.cos(ue*Math.PI/2),be=p*Math.sin(ue*Math.PI/2)+_;for(let _e=0,Xe=O.length;_e<Xe;_e++){let k=q(O[_e],B[_e],be);xe(k.x,k.y,u+he)}for(let _e=0,Xe=R.length;_e<Xe;_e++){let k=R[_e];G=H[_e];for(let oe=0,Re=k.length;oe<Re;oe++){let Ge=q(k[oe],G[oe],be);y?xe(Ge.x,Ge.y+b[h-1].y,b[h-1].x+he):xe(Ge.x,Ge.y,u+he)}}}te(),ce();function te(){let Z=s.length/3;if(d){let ue=0,he=N*ue;for(let be=0;be<U;be++){let _e=le[be];Ve(_e[2]+he,_e[1]+he,_e[0]+he)}ue=h+g*2,he=N*ue;for(let be=0;be<U;be++){let _e=le[be];Ve(_e[0]+he,_e[1]+he,_e[2]+he)}}else{for(let ue=0;ue<U;ue++){let he=le[ue];Ve(he[2],he[1],he[0])}for(let ue=0;ue<U;ue++){let he=le[ue];Ve(he[0]+N*h,he[1]+N*h,he[2]+N*h)}}n.addGroup(Z,s.length/3-Z,0)}function ce(){let Z=s.length/3,ue=0;ae(O,ue),ue+=O.length;for(let he=0,be=R.length;he<be;he++){let _e=R[he];ae(_e,ue),ue+=_e.length}n.addGroup(Z,s.length/3-Z,1)}function ae(Z,ue){let he=Z.length;for(;--he>=0;){let be=he,_e=he-1;_e<0&&(_e=Z.length-1);for(let Xe=0,k=h+g*2;Xe<k;Xe++){let oe=N*Xe,Re=N*(Xe+1),Ge=ue+be+oe,V=ue+_e+oe,ft=ue+_e+Re,ot=ue+be+Re;de(Ge,V,ft,ot)}}}function xe(Z,ue,he){c.push(Z),c.push(ue),c.push(he)}function Ve(Z,ue,he){De(Z),De(ue),De(he);let be=s.length/3,_e=x.generateTopUV(n,s,be-3,be-2,be-1);Ue(_e[0]),Ue(_e[1]),Ue(_e[2])}function de(Z,ue,he,be){De(Z),De(ue),De(be),De(ue),De(he),De(be);let _e=s.length/3,Xe=x.generateSideWallUV(n,s,_e-6,_e-3,_e-2,_e-1);Ue(Xe[0]),Ue(Xe[1]),Ue(Xe[3]),Ue(Xe[1]),Ue(Xe[2]),Ue(Xe[3])}function De(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function Ue(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eh[s.type]().fromJSON(s)),new i(n,e.options)}},r0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new pe(r,a),new pe(o,c),new pe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-u),new pe(d,1-p),new pe(_,1-m)]:[new pe(o,1-c),new pe(h,1-u),new pe(f,1-p),new pe(g,1-m)]}};function a0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var va=class i extends gt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=nt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new D,d=new pe,f=new D,p=new D,_=new D,g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=t;x++){let b=n+x*h*s,y=Math.sin(b),E=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*E,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let v=c[3*S+0]*y,M=c[3*S+1],P=c[3*S+0]*E;l.push(v,M,P)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let y=b+x*e.length,E=y,S=y+e.length,v=y+e.length+1,M=y+1;r.push(E,S,M),r.push(v,M,S)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var fs=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let x=m*d-a;for(let b=0;b<l;b++){let y=b*u-r;p.push(y,-x,0),_.push(0,0,1),g.push(b/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){let b=x+l*m,y=x+l*(m+1),E=x+1+l*(m+1),S=x+1+l*m;f.push(b,y,S),f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var yi=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,d=new D,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let x=[],b=m/n,y=a+b*o,E=e*Math.cos(y),S=Math.sqrt(e*e-E*E),v=0;m===0&&a===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let P=M/t,w=s+P*r;u.x=-S*Math.cos(w),u.y=E,u.z=S*Math.sin(w),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(P+v,1-b),x.push(l++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let b=h[m][x+1],y=h[m][x],E=h[m+1][x],S=h[m+1][x+1];(m!==0||a>0)&&f.push(b,y,S),(m!==n-1||c<Math.PI)&&f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ef(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ef(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Es(i[t]);for(let s in n)e[s]=n[s]}return e}function Ef(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function o0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var yp={clone:Es,merge:cn},c0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=o0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xo=class extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ze=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dt=class extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var jo=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function h0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function u0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Jn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yl,endingEnd:Yl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:r=e,o=2*t-n;break;case $l:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Zl:a=e,c=2*n-t;break;case $l:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,b=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let E=0;E!==o;++E)r[E]=m*a[h+E]+x*a[l+E]+b*a[c+E]+y*a[u+E];return r}},Yo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Zo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$o=class extends Jn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*p;return r}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let _=a[l+p],g=a[c+p],m=f*d+p*2,x=u[m],b=u[m+1],y=e*d+p*2,E=h[y],S=h[y+1],v=f0(n,t,x,E,s);r[p]=Mp(v,_,b,S,g)}return r}};function Mp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function d0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function f0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Mp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=d0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hi(t,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hi(e.times,Array),values:Hi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qr(e.settings)&&(n.settings={inTangents:Hi(e.settings.inTangents,Array),outTangents:Hi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case Jl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return Jl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;qr(this.settings)&&(wf(this.settings.inTangents,e),wf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qr(this.settings)&&(Af(this.settings.inTangents,e),Af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Jm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Af(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=cs;var Mi=class extends _n{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=os;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="color";var Si=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Si.prototype.ValueTypeName="number";var Qo=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)It.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ei=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends _n{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=os;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Xi.prototype.ValueTypeName="vector";var Ma=class{constructor(e="",t=-1,n=[],s=ip){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(m0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=h0(c);c=Tf(c,1,h),l=Tf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Si(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function p0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Si;case"vector":case"vector2":case"vector3":case"vector4":return Xi;case"color":return ya;case"quaternion":return Ei;case"bool":case"boolean":return Mi;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function m0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=p0(i.type);if(i.times===void 0){let n=[],s=[];u0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),qr(i.settings)&&(t.settings={inTangents:Hi(i.settings.inTangents,Float32Array),outTangents:Hi(i.settings.outTangents,Float32Array)}),t}var Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Rf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Rf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ec=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sp=new ec,kn=class{constructor(e){this.manager=e!==void 0?e:Sp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};kn.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},ps=class extends kn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:s});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,g=new ReadableStream({start(m){x();function x(){u.read().then(({done:b,value:y})=>{if(b)m.close();else{_+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let S=0,v=h.length;S<v;S++){let M=h[S];M.onProgress&&M.onProgress(E)}m.enqueue(y),x()}},b=>{m.error(b)})}}});return new Response(g)}else throw new sh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Wn.add(`file:${e}`,l);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Js=new WeakMap,tc=class extends kn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Js.get(a);u===void 0&&(u=[],Js.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=nr("img");function c(){h(),t&&t(this);let u=Js.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Js.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Wn.remove(`image:${e}`);let d=Js.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Js.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Sa=class extends kn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new jn,o=new ps(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Ke(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new jn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:mn,e.wrapT=t.wrapT!==void 0?t.wrapT:mn,e.magFilter=t.magFilter!==void 0?t.magFilter:wt,e.minFilter=t.minFilter!==void 0?t.minFilter:wt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Tn),t.mipmapCount===1&&(e.minFilter=wt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ms=class extends kn{constructor(e){super(e)}load(e,t,n,s){let r=new $t,a=new tc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Xl=new qe,Cf=new D,Pf=new D,gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new D,Eo=new It,Vn=new D,Ea=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,Eo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(So,Eo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Gi=new D,If=new pe,Lf=new pe,qt=class extends Ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,If,Lf),t.subVectors(Lf,If)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends gr{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ta=class extends mr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ah=class extends gr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},wa=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gs=class extends Ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oh=class extends gr{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var wi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var jl=new WeakMap,Aa=class extends kn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{jl.has(a)===!0?(s&&s(jl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),jl.set(c,l),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ys=-90,Zs=1,br=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Ys,Zs,e,t);s.layers=this.layers,this.add(s);let r=new qt(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let a=new qt(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let o=new qt(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let c=new qt(Ys,Zs,e,t);c.layers=this.layers,this.add(c);let l=new qt(Ys,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},nc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Hh="\\[\\]\\.:\\/",g0=new RegExp("["+Hh+"]","g"),Vh="[^"+Hh+"]",b0="[^"+Hh.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",Vh),_0=/(WCOD+)?/.source.replace("WCOD",b0),v0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),M0=new RegExp("^"+x0+_0+v0+y0+"$"),S0=["material","materials","bones","map"],ch=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){let t=M0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);S0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=ch;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kM=new Float32Array(1);var Jh=class Jh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Jh.prototype.isMatrix2=!0;var lh=Jh;function Wh(i,e,t,n){let s=E0(n);switch(t){case Rh:return i*e;case lc:return i*e/s.components*s.byteLength;case hc:return i*e/s.components*s.byteLength;case ji:return i*e*2/s.components*s.byteLength;case uc:return i*e*2/s.components*s.byteLength;case Ch:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case dc:return i*e*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:case gc:return Math.max(i,16)*Math.max(e,8)/4;case fc:case mc:return Math.max(i,8)*Math.max(e,8)/2;case bc:case xc:case vc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _c:case Da:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oc:case Bc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Na:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(i){switch(i){case vn:case Eh:return{byteLength:1,components:1};case Sr:case Th:case pn:return{byteLength:2,components:1};case oc:case cc:return{byteLength:2,components:4};case zn:case ac:case on:return{byteLength:4,components:1};case wh:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ab=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:w0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:F0,begin_vertex:U0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:k0,bumpmap_pars_fragment:z0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:q0,color_pars_fragment:X0,color_pars_vertex:j0,color_vertex:K0,common:J0,defaultnormal_vertex:Y0,displacementmap_pars_vertex:Z0,displacementmap_vertex:$0,emissivemap_fragment:Q0,emissivemap_pars_fragment:eb,colorspace_fragment:tb,colorspace_pars_fragment:nb,envmap_fragment:ib,envmap_common_pars_fragment:sb,envmap_pars_fragment:rb,envmap_pars_vertex:ab,envmap_physical_pars_fragment:bb,envmap_vertex:ob,fog_vertex:cb,fog_pars_vertex:lb,fog_fragment:hb,fog_pars_fragment:ub,gradientmap_pars_fragment:db,lightmap_pars_fragment:fb,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:xb,lights_toon_pars_fragment:_b,lights_phong_fragment:vb,lights_phong_pars_fragment:yb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Sb,lights_fragment_begin:Eb,lights_fragment_maps:Tb,lights_fragment_end:wb,lightprobes_pars_fragment:Ab,logdepthbuf_fragment:Rb,logdepthbuf_pars_fragment:Cb,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Ib,map_fragment:Lb,map_pars_fragment:Db,map_particle_fragment:Nb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Bb,morphcolor_vertex:kb,morphnormal_vertex:zb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Hb,normal_fragment_begin:Vb,normal_fragment_maps:Wb,normal_pars_fragment:qb,normal_pars_vertex:Xb,normal_vertex:jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:Jb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:Zb,iridescence_pars_fragment:$b,opaque_fragment:Qb,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:bx,tonemapping_pars_fragment:xx,transmission_fragment:_x,transmission_pars_fragment:vx,uv_pars_fragment:yx,uv_pars_vertex:Mx,uv_vertex:Sx,worldpos_vertex:Ex,background_vert:Tx,background_frag:wx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Ix,depth_frag:Lx,distance_vert:Dx,distance_frag:Nx,equirect_vert:Fx,equirect_frag:Ux,linedashed_vert:Ox,linedashed_frag:Bx,meshbasic_vert:kx,meshbasic_frag:zx,meshlambert_vert:Gx,meshlambert_frag:Hx,meshmatcap_vert:Vx,meshmatcap_frag:Wx,meshnormal_vert:qx,meshnormal_frag:Xx,meshphong_vert:jx,meshphong_frag:Kx,meshphysical_vert:Jx,meshphysical_frag:Yx,meshtoon_vert:Zx,meshtoon_frag:$x,points_vert:Qx,points_frag:e_,shadow_vert:t_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},Pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:cn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:cn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:cn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:cn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:cn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:cn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:cn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:cn([Pe.lights,Pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ei.physical={uniforms:cn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Xc={r:0,b:0,g:0},r_=new qe,Xp=new Ye;Xp.set(-1,0,0,0,1,0,0,0,1);function a_(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(x){let b=!1,y=f(x);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,b){let y=f(b);y&&y.isCubeTexture?(l===void 0&&(l=new et(new xn(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Es(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xp),l.material.toneMapped=rt.getTransfer(y.colorSpace)!==xt,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new et(new fs(2,2),new Kn({name:"BackgroundMaterial",uniforms:Es(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,b){x.getRGB(Xc,Gh(i)),t.buffers.color.setClear(Xc.r,Xc.g,Xc.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:p,addToRenderList:_,dispose:m}}function o_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(R,L,F,C,O){let q=!1,N=u(R,C,F,L);r!==N&&(r=N,l(r.object)),q=f(R,C,F,O),q&&p(R,C,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(R,L,F,C),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,L,F,C){let O=C.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let N=R.isInstancedMesh===!0?R.id:0,j=q[N];j===void 0&&(j={},q[N]=j);let B=j[F.id];B===void 0&&(B={},j[F.id]=B);let H=B[O];return H===void 0&&(H=d(c()),B[O]=H),H}function d(R){let L=[],F=[],C=[];for(let O=0;O<t;O++)L[O]=0,F[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:C,object:R,attributes:{},index:null}}function f(R,L,F,C){let O=r.attributes,q=L.attributes,N=0,j=F.getAttributes();for(let B in j)if(j[B].location>=0){let G=O[B],ee=q[B];if(ee===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),G===void 0||G.attribute!==ee||ee&&G.data!==ee.data)return!0;N++}return r.attributesNum!==N||r.index!==C}function p(R,L,F,C){let O={},q=L.attributes,N=0,j=F.getAttributes();for(let B in j)if(j[B].location>=0){let G=q[B];G===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(G=R.instanceColor));let ee={};ee.attribute=G,G&&G.data&&(ee.data=G.data),O[B]=ee,N++}r.attributes=O,r.attributesNum=N,r.index=C}function _(){let R=r.newAttributes;for(let L=0,F=R.length;L<F;L++)R[L]=0}function g(R){m(R,0)}function m(R,L){let F=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;F[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),O[R]!==L&&(i.vertexAttribDivisor(R,L),O[R]=L)}function x(){let R=r.newAttributes,L=r.enabledAttributes;for(let F=0,C=L.length;F<C;F++)L[F]!==R[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function b(R,L,F,C,O,q,N){N===!0?i.vertexAttribIPointer(R,L,F,O,q):i.vertexAttribPointer(R,L,F,C,O,q)}function y(R,L,F,C){_();let O=C.attributes,q=F.getAttributes(),N=L.defaultAttributeValues;for(let j in q){let B=q[j];if(B.location>=0){let H=O[j];if(H===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(H=R.instanceColor)),H!==void 0){let G=H.normalized,ee=H.itemSize,le=e.get(H);if(le===void 0)continue;let U=le.buffer,X=le.type,te=le.bytesPerElement,ce=X===i.INT||X===i.UNSIGNED_INT||H.gpuType===ac;if(H.isInterleavedBufferAttribute){let ae=H.data,xe=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Ve=H.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)m(B.location+de,ae.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let de=0;de<B.locationSize;de++)g(B.location+de);i.bindBuffer(i.ARRAY_BUFFER,U);for(let de=0;de<B.locationSize;de++)b(B.location+de,ee/B.locationSize,X,G,xe*te,(Ve+ee/B.locationSize*de)*te,ce)}else{if(H.isInstancedBufferAttribute){for(let ae=0;ae<B.locationSize;ae++)m(B.location+ae,H.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ae=0;ae<B.locationSize;ae++)g(B.location+ae);i.bindBuffer(i.ARRAY_BUFFER,U);for(let ae=0;ae<B.locationSize;ae++)b(B.location+ae,ee/B.locationSize,X,G,ee*te,ee/B.locationSize*ae*te,ce)}}else if(N!==void 0){let G=N[j];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(B.location,G);break;case 3:i.vertexAttrib3fv(B.location,G);break;case 4:i.vertexAttrib4fv(B.location,G);break;default:i.vertexAttrib1fv(B.location,G)}}}}x()}function E(){P();for(let R in n){let L=n[R];for(let F in L){let C=L[F];for(let O in C){let q=C[O];for(let N in q)h(q[N].object),delete q[N];delete C[O]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let F in L){let C=L[F];for(let O in C){let q=C[O];for(let N in q)h(q[N].object),delete q[N];delete C[O]}}delete n[R.id]}function v(R){for(let L in n){let F=n[L];for(let C in F){let O=F[C];if(O[R.id]===void 0)continue;let q=O[R.id];for(let N in q)h(q[N].object),delete q[N];delete O[R.id]}}}function M(R){for(let L in n){let F=n[L],C=R.isInstancedMesh===!0?R.id:0,O=F[C];if(O!==void 0){for(let q in O){let N=O[q];for(let j in N)h(N[j].object),delete N[j];delete O[q]}delete F[C],Object.keys(F).length===0&&delete n[L]}}}function P(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function c_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function l_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Rn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==vn&&v!==on&&!M&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:S}}function h_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new On,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,b=x*4,y=m.clippingState||null;c.value=y,y=h(p,d,b,f);for(let E=0;E!==b;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,p!==!0||g===null){let m=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ba=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ca(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:_s});r.uniforms.tEquirect.value=t;let a=new et(s,r),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=wt),new br(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ep=256,u_=3,d_=20,jp=256,Kp=16,f_=3,p_=new D,m_=new ze,wr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new br(1,10,null),this._boxMesh=new et(new xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=p_}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(m_));let g=new br(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ep,Oh(e))}_fromTexture(e,t){e.mapping===ys||e.mapping===vr?this._setSize(e.image.length===0?Ep:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Tp(e,!1,!1),n=Math.log2(e)-u_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Tp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ys||e.mapping===vr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=wp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=g_(),this._integrationMaterial=b_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Kp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-f_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(jp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=x_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Tp(i,e,t){return new Ba(i,{minFilter:Tn,generateMipmaps:e,type:pn,colorSpace:Xt,depthBuffer:t})}function ka(i,e,t){return new Kn({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:fn,blending:_s,depthTest:!1,depthWrite:!1})}function g_(){return ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function b_(){return ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x_(){return ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function wp(){return ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ap(){return ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function __(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===yr||f===sc)if(e.has(d)){let p=e.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Ba(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===yr||f===sc,_=f===ys||f===vr;if(p||_){let g=t.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new wr(i)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return p&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new wr(i)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===yr?d.mapping=ys:f===sc&&(d.mapping=vr),d}function c(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function l(d){let f=d.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function v_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&as("WebGLRenderer: "+n+" extension not supported."),s}}}function y_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let g in _)e.update(_[g],i.ARRAY_BUFFER)}function u(p){let _=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let x=_!==null?_.array.length:g.array.length/3-1,b=g.count>=65535?na:ta,y=new b(Math.ceil(x/3)*6,1),E=y.array;if(_!==null){let v=_.array;m=_.version;for(let M=0,P=0;M<x;M+=3){let w=v[M+0],R=v[M+1],L=v[M+2];E[P++]=w,E[P++]=R,E[P++]=R,E[P++]=L,E[P++]=L,E[P++]=w}}else{m=g.version;for(let v=0,M=0;v<x;v+=3){let P=v+0,w=v+1,R=v+2;E[M++]=P,E[M++]=w,E[M++]=w,E[M++]=R,E[M++]=R,E[M++]=P}}y.version=m;let S=r.get(p);S&&e.remove(S),r.set(p,y)}function d(p){let _=r.get(p);if(_){let g=p.index;g!==null&&_.version<g.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function M_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function S_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,e,t){let n=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let P=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*E*4*u),v=new $r(S,y,E,u);v.type=on,v.needsUpdate=!0;let M=b*4;for(let w=0;w<u;w++){let R=g[w],L=m[w],F=x[w],C=y*E*4*w;for(let O=0;O<R.count;O++){let q=O*M;f===!0&&(s.fromBufferAttribute(R,O),S[C+q+0]=s.x,S[C+q+1]=s.y,S[C+q+2]=s.z,S[C+q+3]=0),p===!0&&(s.fromBufferAttribute(L,O),S[C+q+4]=s.x,S[C+q+5]=s.y,S[C+q+6]=s.z,S[C+q+7]=0),_===!0&&(s.fromBufferAttribute(F,O),S[C+q+8]=s.x,S[C+q+9]=s.y,S[C+q+10]=s.z,S[C+q+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new pe(y,E)},n.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function T_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var w_={[bh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[_h]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function A_(i,e,t,n,s,r){let a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new gt;h.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let u=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new et(h,u),f=new gs(-1,1,1,-1,0,1),p=null,_=null,g=!1,m,x=null,b=[],y=!1;this.setSize=function(E,S){a.setSize(E,S),o!==null&&o.setSize(E,S),c!==null&&c.setSize(E,S);for(let v=0;v<b.length;v++){let M=b[v];M.setSize&&M.setSize(E,S)}},this.setEffects=function(E){b=E,y=b.length>0&&b[0].isRenderPass===!0;let S=a.width,v=a.height;b.length>0&&o===null&&(o=new Sn(S,v,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(S,v,{type:pn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(P=>P.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new vi(S,v),r===!0&&(l.format=Ai,l.type=Ss)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let P=0;P<b.length;P++){let w=b[P];w.setSize&&w.setSize(S,v),M&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(E,S){if(g||E.toneMapping===Zn&&b.length===0)return!1;if(x=S,S!==null){let v=S.width,M=S.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return y===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=Zn,!0},this.hasRenderPass=function(){return y},this.end=function(E,S){E.toneMapping=m,g=!0;let v=a,M=o;for(let P=0;P<b.length;P++){let w=b[P];w.enabled!==!1&&(w.render(E,M,v,S),w.needsSwap!==!1&&(v=M,M=M===o?c:o))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,u.defines={},rt.getTransfer(p)===xt&&(u.defines.SRGB_TRANSFER="");let P=w_[_];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(x),E.render(d,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Jp=new $t,Yp=new vi(1,1),Zp=new la(1),$p=new $r,Qp=new Uo,em=new ca,Rp=[],Cp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jc(i,e){let t=Cp[e];t===void 0&&(t=new Int32Array(e),Cp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function L_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),Kt(t,n)}}function D_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),Kt(t,n)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Pp.set(n),i.uniformMatrix4fv(this.addr,!1,Pp),Kt(t,n)}}function F_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function O_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Yc(i){return i.version===0&&(i.compareFunction=Dh,i.needsUpdate=!0),i}function V_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Yc(Yp):r=Jp,t.setTexture2D(e||r,s)}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qp,s)}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Yc(Zp):r=em,t.setTextureCube(e||r,s)}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$p,s)}function j_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return F_;case 35667:case 35671:return U_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return X_}}function K_(i,e){i.uniform1fv(this.addr,e)}function J_(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Y_(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function $_(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q_(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function ov(i,e){i.uniform3uiv(this.addr,e)}function cv(i,e){i.uniform4uiv(this.addr,e)}function lv(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Yc(Yp):a=Jp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hv(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qp,r[a])}function uv(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Yc(Zp):a=em;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function dv(i,e,t){let n=this.cache,s=e.length,r=Jc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$p,r[a])}function fv(i){switch(i){case 5126:return K_;case 35664:return J_;case 35665:return Y_;case 35666:return Z_;case 35674:return $_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return av;case 36295:return ov;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return dv}}var $h=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=j_(t.type)}},Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fv(t.type)}},eu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Yh=/(\w+)(\])?(\[|\.)?/g;function Dp(i,e){i.seq.push(e),i.map[e.id]=e}function pv(i,e,t){let n=i.name,s=n.length;for(Yh.lastIndex=0;;){let r=Yh.exec(n),a=Yh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dp(t,l===void 0?new $h(o,i,e):new Qh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new eu(o),Dp(t,u)),t=u}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);pv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Np(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var mv=37297,gv=0;function bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Fp=new Ye;function xv(i){rt._getMatrix(Fp,rt.workingColorSpace,i);let e=`mat3( ${Fp.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+bv(i.getShaderSource(e),o)}else return r}function _v(i,e){let t=xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vv={[bh]:"Linear",[xh]:"Reinhard",[_h]:"Cineon",[Ra]:"ACESFilmic",[yh]:"AgX",[Mh]:"Neutral",[vh]:"Custom"};function yv(i,e){let t=vv[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jc=new D;function Mv(){rt.getLuminanceCoefficients(jc);let i=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function Ev(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oa(i){return i!==""}function Op(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(wv,Av)}function Av(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return tu(t)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(i){return i.replace(Rv,Cv)}function Cv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Pv={[xs]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Iv(i){return Pv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lv={[vr]:"ENVMAP_MODE_REFRACTION"};function Dv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nv={[gh]:"ENVMAP_BLENDING_MULTIPLY",[ep]:"ENVMAP_BLENDING_MIX",[tp]:"ENVMAP_BLENDING_ADD"};function Fv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Nv[i.combine]||"ENVMAP_BLENDING_NONE"}function Uv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Iv(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dv(t),u=Fv(t),d=Sv(t),f=Ev(r),p=s.createProgram(),_,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oa).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Oa).join(`
`),g.length>0&&(g+=`
`)):(_=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),g=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?st.tonemapping_pars_fragment:"",t.toneMapping!==Zn?yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),Mv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),a=tu(a),a=Op(a,t),a=Bp(a,t),o=tu(o),o=Op(o,t),o=Bp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=m+_+a,b=m+g+o,y=Np(s,s.VERTEX_SHADER,x),E=Np(s,s.FRAGMENT_SHADER,b);s.attachShader(p,y),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function S(w){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(y)||"",F=s.getShaderInfoLog(E)||"",C=R.trim(),O=L.trim(),q=F.trim(),N=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,E);else{let B=Up(s,y,"vertex"),H=Up(s,E,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+B+`
`+H)}else C!==""?Be("WebGLProgram: Program Info Log:",C):(O===""||q==="")&&(j=!1);j&&(w.diagnostics={runnable:N,programLog:C,vertexShader:{log:O,prefix:_},fragmentShader:{log:q,prefix:g}})}s.deleteShader(y),s.deleteShader(E),v=new Tr(s,p),M=Tv(s,p)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,mv)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=E,this}var Ov=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}};function Bv(i){return i===ji||i===Da||i===Na}function kv(i,e,t,n,s,r){let a=new Qr,o=new nu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,M,P,w,R,L){let F=w.fog,C=R.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,N=e.get(v.envMap||O,q),j=d[v.type],B=n.precision;v.precision!==null&&(B=n.getMaxPrecision(v.precision),B!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",B,"instead."));let H=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,G=H!==void 0?H.length:0,ee=0;C.morphAttributes.position!==void 0&&(ee=1),C.morphAttributes.normal!==void 0&&(ee=2),C.morphAttributes.color!==void 0&&(ee=3);let le,U,X,te;if(j){let Ce=ei[j];le=Ce.vertexShader,U=Ce.fragmentShader}else{le=v.vertexShader,U=v.fragmentShader;let Ce=o.getVertexShaderStage(v),_t=o.getFragmentShaderStage(v);o.update(v,Ce,_t),X=Ce.id,te=_t.id}let ce=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),xe=R.isInstancedMesh===!0,Ve=R.isBatchedMesh===!0,de=!!v.map,De=!!v.matcap,Ue=!!N,Z=Ue&&N.isPMREMTexture===!0,ue=!!v.aoMap,he=!!v.lightMap,be=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,Xe=!!v.displacementMap,k=!!v.emissiveMap,oe=!!v.metalnessMap,Re=!!v.roughnessMap,Ge=v.anisotropy>0,V=v.clearcoat>0,ft=v.diffuseRoughness>0,ot=v.dispersion>0,Mt=v.retroreflectivity>0,Te=v.iridescence>0,Ft=v.sheen>0,We=v.transmission>0,Je=Ge&&!!v.anisotropyMap,I=V&&!!v.clearcoatMap,T=V&&!!v.clearcoatNormalMap,J=V&&!!v.clearcoatRoughnessMap,fe=ft&&!!v.diffuseRoughnessMap,re=Te&&!!v.iridescenceMap,ve=Te&&!!v.iridescenceThicknessMap,we=Ft&&!!v.sheenColorMap,ne=Ft&&!!v.sheenRoughnessMap,ie=!!v.specularMap,Me=!!v.specularColorMap,z=!!v.specularIntensityMap,se=We&&!!v.transmissionMap,Q=We&&!!v.thicknessMap,Se=!!v.gradientMap,ge=!!v.alphaMap,ye=v.alphaTest>0,ke=!!v.alphaHash,it=!!v.extensions,me=Zn;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(me=i.toneMapping);let He=Z?N.isCompressedCubeTexture?N.image[0].mipmaps:N.mipmaps:null,tt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:U,defines:v.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:B,batching:Ve,batchingColor:Ve&&R._colorsTexture!==null,instancing:xe,instancingColor:xe&&R.instanceColor!==null,instancingMorph:xe&&R.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:De,envMap:Ue,envMapMode:Ue&&N.mapping,envMapPMREM:Z,envMapMaxLod:Z?He.length-1:null,envMapSize:Z?He[0].width:null,aoMap:ue,lightMap:he,bumpMap:be,normalMap:_e,displacementMap:Xe,emissiveMap:k,normalMapObjectSpace:_e&&v.normalMapType===rp,normalMapTangentSpace:_e&&v.normalMapType===Vc,packedNormalMap:_e&&v.normalMapType===Vc&&Bv(v.normalMap.format),metalnessMap:oe,roughnessMap:Re,anisotropy:Ge,anisotropyMap:Je,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:J,diffuseRoughness:ft,diffuseRoughnessMap:fe,dispersion:ot,retroreflection:Mt,iridescence:Te,iridescenceMap:re,iridescenceThicknessMap:ve,sheen:Ft,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:Me,specularIntensityMap:z,transmission:We,transmissionMap:se,thicknessMap:Q,gradientMap:Se,opaque:v.transparent===!1&&v.blending===_r&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:ye,alphaHash:ke,combine:v.combine,mapUv:de&&f(v.map.channel),aoMapUv:ue&&f(v.aoMap.channel),lightMapUv:he&&f(v.lightMap.channel),bumpMapUv:be&&f(v.bumpMap.channel),normalMapUv:_e&&f(v.normalMap.channel),displacementMapUv:Xe&&f(v.displacementMap.channel),emissiveMapUv:k&&f(v.emissiveMap.channel),metalnessMapUv:oe&&f(v.metalnessMap.channel),roughnessMapUv:Re&&f(v.roughnessMap.channel),anisotropyMapUv:Je&&f(v.anisotropyMap.channel),clearcoatMapUv:I&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:re&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(v.sheenRoughnessMap.channel),specularMapUv:ie&&f(v.specularMap.channel),specularColorMapUv:Me&&f(v.specularColorMap.channel),specularIntensityMapUv:z&&f(v.specularIntensityMap.channel),transmissionMapUv:se&&f(v.transmissionMap.channel),thicknessMapUv:Q&&f(v.thicknessMap.channel),alphaMapUv:ge&&f(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(_e||Ge),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(de||ge),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ee,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:k&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function _(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)M.push(P),M.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(g(M,v),m(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function m(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function x(v){let M=d[v.type],P;if(M){let w=ei[M];P=yp.clone(w.uniforms)}else P=v.uniforms;return P}function b(v,M){let P=h.get(M);return P!==void 0?++P.usedTimes:(P=new Uv(i,M,v,s),l.push(P),h.set(M,P)),P}function y(v){if(--v.usedTimes===0){let M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function S(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:S}}function zv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,g,m){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=g,x.group=m),e++,x}function c(d,f,p,_,g,m,x){x.reversedDepth===!0&&(g=-g);let b=o(d,f,p,_,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function l(d,f,p,_,g,m){let x=o(d,f,p,_,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||Gv),n.length>1&&n.sort(f||Gp),s.length>1&&s.sort(f||Gp)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Hv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hp,i.set(n,[a])):s>=r.length?(a=new Hp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Wv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qv=0;function Xv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jv(i){let e=new Vv,t=Wv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new qe,a=new qe;function o(l){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,x=0,b=0,y=0,E=0,S=0,v=0,M=0,P=0,w=0;l.sort(Xv);for(let L=0,F=l.length;L<F;L++){let C=l[L],O=C.color,q=C.intensity,N=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ji?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*q,u+=O.g*q,d+=O.b*q;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],q);w++}else if(C.isSunLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,G=t.get(C);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[p]=G,n.sunShadowMap[p]=j;let ee=H.getViewportCount();for(let le=0;le<ee;le++)n.sunShadowMatrix[_+le]=H.getMatrix(le),n.sunShadowCascade[_+le]=H._cascadeData[le];_+=ee,p++}n.sun[f]=B,f++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,G=t.get(C);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[g]=G,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=C.shadow.matrix,E++}n.directional[g]=B,g++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(O).multiplyScalar(q),B.distance=N,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[x]=B;let H=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,H.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[x]=H.matrix,C.castShadow){let G=t.get(C);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,v++}x++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(O).multiplyScalar(q),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=B,b++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let H=C.shadow,G=t.get(C);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=B,m++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(q),B.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[y]=B,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==b||R.hemiLength!==y||R.numSunShadows!==p||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==M||R.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+M-P,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,R.sunLength=f,R.directionalLength=g,R.pointLength=m,R.spotLength=x,R.rectAreaLength=b,R.hemiLength=y,R.numSunShadows=p,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=M,R.numLightProbes=w,n.version=qv++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){let y=l[x];if(y.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Vp(i){let e=new jv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Kv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vp(i),e.set(s,[o])):r>=a.length?(o=new Vp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$v=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Wp=new qe,Ua=new D,Zh=new D;function Qv(i,e,t){let n=new qi,s=new pe,r=new pe,a=new yt,o=new jo,c=new Ko,l={},h=t.maxTextureSize,u={[Yn]:fn,[fn]:Yn,[Ht]:Ht},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Jv,fragmentShader:Yv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new gt;p.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new et(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let m=this.type;this.render=function(S,v,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Ff&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);let P=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(_s),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=m!==this.type;F&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=S.length;C<O;C++){let q=S[C],N=q.shadow;if(N===void 0){Be("WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let j=N.getFrameExtents();s.multiply(j),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,N.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(N.camera._reversedDepth=B,N.map===null||F===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===xr){if(q.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Sn(s.x,s.y,{format:ji,type:pn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),N.map.texture.name=q.name+".shadowMap",N.map.depthTexture=new vi(s.x,s.y,on),N.map.depthTexture.name=q.name+".shadowMapDepth",N.map.depthTexture.format=bi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt}else q.isPointLight?(N.map=new Ba(s.x),N.map.depthTexture=new la(s.x,zn)):(N.map=new Sn(s.x,s.y),N.map.depthTexture=new vi(s.x,s.y,zn)),N.map.depthTexture.name=q.name+".shadowMap",N.map.depthTexture.format=bi,this.type===xs?(N.map.depthTexture.compareFunction=B?Lh:Ih,N.map.depthTexture.minFilter=wt,N.map.depthTexture.magFilter=wt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Bt,N.map.depthTexture.magFilter=Bt);N.camera.updateProjectionMatrix()}N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y)&&N.map.setSize(s.x,s.y);let H=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();q.isPointLight!==!0&&N.updateMatrices(q,M);let G=(N.camera.layers.mask&4294967294)!==0?N.camera.layers:M.layers;for(let ee=0;ee<H;ee++){let le=N.getCamera(ee);if(q.isPointLight){let U=N.camera,X=N.matrix,te=q.distance||U.far;te!==U.far&&(U.far=te,U.updateProjectionMatrix()),Ua.setFromMatrixPosition(q.matrixWorld),U.position.copy(Ua),Zh.copy(U.position),Zh.add(Zv[ee]),U.up.copy($v[ee]),U.lookAt(Zh),U.updateMatrixWorld(),X.makeTranslation(-Ua.x,-Ua.y,-Ua.z),Wp.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Wp,U.coordinateSystem,U.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)i.setRenderTarget(N.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(N.map),i.clear());let U=N.getViewport(ee);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),L.viewport(a)}n=N.getFrustum(ee),y(v,M,le,q,G,this.type)}N.isPointLightShadow!==!0&&this.type===xr&&x(N,M),N.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(P,w,R)};function x(S,v){let M=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(s.x,s.y,{format:ji,type:pn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,M,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,M,f,_,null)}function b(S,v,M,P){let w=null,R=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=M.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let L=w.uuid,F=v.uuid,C=l[L];C===void 0&&(C={},l[L]=C);let O=C[F];O===void 0&&(O=w.clone(),C[F]=O,v.addEventListener("dispose",E)),w=O}if(w.visible=v.visible,w.wireframe=v.wireframe,P===xr?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:u[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=i.properties.get(w);L.light=M}return w}function y(S,v,M,P,w,R){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===xr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let C=e.update(S),O=S.material;if(Array.isArray(O)){let q=C.groups;for(let N=0,j=q.length;N<j;N++){let B=q[N],H=O[B.materialIndex];if(H&&H.visible){let G=b(S,H,P,R);S.onBeforeShadow(i,S,v,M,C,G,B),i.renderBufferDirect(M,null,C,G,S,B),S.onAfterShadow(i,S,v,M,C,G,B)}}}else if(O.visible){let q=b(S,O,P,R);S.onBeforeShadow(i,S,v,M,C,q,null),i.renderBufferDirect(M,null,C,q,S,null),S.onAfterShadow(i,S,v,M,C,q,null)}}let F=S.children;for(let C=0,O=F.length;C<O;C++)y(F[C],v,M,P,w,R)}function E(S){S.target.removeEventListener("dispose",E);for(let M in l){let P=l[M],w=S.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}function ey(i,e){function t(){let z=!1,se=new yt,Q=null,Se=new yt(0,0,0,0);return{setMask:function(ge){Q!==ge&&!z&&(i.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){z=ge},setClear:function(ge,ye,ke,it,me){me===!0&&(ge*=it,ye*=it,ke*=it),se.set(ge,ye,ke,it),Se.equals(se)===!1&&(i.clearColor(ge,ye,ke,it),Se.copy(se))},reset:function(){z=!1,Q=null,Se.set(-1,0,0,0)}}}function n(){let z=!1,se=!1,Q=null,Se=null,ge=null;return{setReversed:function(ye){if(se!==ye){let ke=e.get("EXT_clip_control");ye?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),se=ye;let it=ge;ge=null,this.setClear(it)}},getReversed:function(){return se},setTest:function(ye){ye?ae(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ye){Q!==ye&&!z&&(i.depthMask(ye),Q=ye)},setFunc:function(ye){if(se&&(ye=mp[ye]),Se!==ye){switch(ye){case Ao:i.depthFunc(i.NEVER);break;case Ro:i.depthFunc(i.ALWAYS);break;case Co:i.depthFunc(i.LESS);break;case Qs:i.depthFunc(i.LEQUAL);break;case Po:i.depthFunc(i.EQUAL);break;case Io:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Do:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ye}},setLocked:function(ye){z=ye},setClear:function(ye){ge!==ye&&(ge=ye,se&&(ye=1-ye),i.clearDepth(ye))},reset:function(){z=!1,Q=null,Se=null,ge=null,se=!1}}}function s(){let z=!1,se=null,Q=null,Se=null,ge=null,ye=null,ke=null,it=null,me=null;return{setTest:function(He){z||(He?ae(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(He){se!==He&&!z&&(i.stencilMask(He),se=He)},setFunc:function(He,tt,Ce){(Q!==He||Se!==tt||ge!==Ce)&&(i.stencilFunc(He,tt,Ce),Q=He,Se=tt,ge=Ce)},setOp:function(He,tt,Ce){(ye!==He||ke!==tt||it!==Ce)&&(i.stencilOp(He,tt,Ce),ye=He,ke=tt,it=Ce)},setLocked:function(He){z=He},setClear:function(He){me!==He&&(i.clearStencil(He),me=He)},reset:function(){z=!1,se=null,Q=null,Se=null,ge=null,ye=null,ke=null,it=null,me=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,b=null,y=null,E=null,S=null,v=null,M=new ze(0,0,0),P=0,w=!1,R=null,L=null,F=null,C=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,j=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=j>=2);let H=null,G={},ee=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),U=new yt().fromArray(ee),X=new yt().fromArray(le);function te(z,se,Q,Se){let ge=new Uint8Array(4),ye=i.createTexture();i.bindTexture(z,ye),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<Q;ke++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(se+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ye}let ce={};ce[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Qs),be(!1),_e(hh),ae(i.CULL_FACE),ue(_s);function ae(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function xe(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Ve(z,se){return d[z]!==se?(i.bindFramebuffer(z,se),d[z]=se,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function de(z,se){let Q=p,Se=!1;if(z){Q=f.get(se),Q===void 0&&(Q=[],f.set(se,Q));let ge=z.textures;if(Q.length!==ge.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,ke=ge.length;ye<ke;ye++)Q[ye]=i.COLOR_ATTACHMENT0+ye;Q.length=ge.length,Se=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Se=!0);Se&&i.drawBuffers(Q)}function De(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Ue={[vs]:i.FUNC_ADD,[Of]:i.FUNC_SUBTRACT,[Bf]:i.FUNC_REVERSE_SUBTRACT};Ue[kf]=i.MIN,Ue[zf]=i.MAX;let Z={[Gf]:i.ZERO,[Hf]:i.ONE,[Vf]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[Jf]:i.SRC_ALPHA_SATURATE,[jf]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Wf]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[Kf]:i.ONE_MINUS_DST_COLOR,[Xf]:i.ONE_MINUS_DST_ALPHA,[Yf]:i.CONSTANT_COLOR,[Zf]:i.ONE_MINUS_CONSTANT_COLOR,[$f]:i.CONSTANT_ALPHA,[Qf]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(z,se,Q,Se,ge,ye,ke,it,me,He){if(z===_s){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),z!==Uf){if(z!==m||He!==w){if((x!==vs||E!==vs)&&(i.blendEquation(i.FUNC_ADD),x=vs,E=vs),He)switch(z){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFunc(i.ONE,i.ONE);break;case dh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",z);break}else switch(z){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dh:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",z);break}b=null,y=null,S=null,v=null,M.set(0,0,0),P=0,m=z,w=He}return}ge=ge||se,ye=ye||Q,ke=ke||Se,(se!==x||ge!==E)&&(i.blendEquationSeparate(Ue[se],Ue[ge]),x=se,E=ge),(Q!==b||Se!==y||ye!==S||ke!==v)&&(i.blendFuncSeparate(Z[Q],Z[Se],Z[ye],Z[ke]),b=Q,y=Se,S=ye,v=ke),(it.equals(M)===!1||me!==P)&&(i.blendColor(it.r,it.g,it.b,me),M.copy(it),P=me),m=z,w=!1}function he(z,se){z.side===Ht?xe(i.CULL_FACE):ae(i.CULL_FACE);let Q=z.side===fn;se&&(Q=!Q),be(Q),z.blending===_r&&z.transparent===!1?ue(_s):ue(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Se=z.stencilWrite;o.setTest(Se),Se&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),k(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(z){R!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),R=z)}function _e(z){z!==Df?(ae(i.CULL_FACE),z!==L&&(z===hh?i.cullFace(i.BACK):z===Nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),L=z}function Xe(z){z!==F&&(N&&i.lineWidth(z),F=z)}function k(z,se,Q){z?(ae(i.POLYGON_OFFSET_FILL),(C!==se||O!==Q)&&(C=se,O=Q,a.getReversed()&&(se=-se,Q=-Q),i.polygonOffset(se,Q))):xe(i.POLYGON_OFFSET_FILL)}function oe(z){z?ae(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Re(z){z===void 0&&(z=i.TEXTURE0+q-1),H!==z&&(i.activeTexture(z),H=z)}function Ge(z,se,Q){Q===void 0&&(H===null?Q=i.TEXTURE0+q-1:Q=H);let Se=G[Q];Se===void 0&&(Se={type:void 0,texture:void 0},G[Q]=Se),(Se.type!==z||Se.texture!==se)&&(H!==Q&&(i.activeTexture(Q),H=Q),i.bindTexture(z,se||ce[z]),Se.type=z,Se.texture=se)}function V(){let z=G[H];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Te(){try{i.texSubImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Ft(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function Je(){try{i.texStorage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function I(){try{i.texStorage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function T(){try{i.texImage2D(...arguments)}catch(z){Ke("WebGLState:",z)}}function J(){try{i.texImage3D(...arguments)}catch(z){Ke("WebGLState:",z)}}function fe(z){return u[z]!==void 0?u[z]:i.getParameter(z)}function re(z,se){u[z]!==se&&(i.pixelStorei(z,se),u[z]=se)}function ve(z){U.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),U.copy(z))}function we(z){X.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function ne(z,se){let Q=l.get(se);Q===void 0&&(Q=new WeakMap,l.set(se,Q));let Se=Q.get(z);Se===void 0&&(Se=i.getUniformBlockIndex(se,z.name),i.uniformBlockBinding(se,Se,Se),Q.set(z,Se))}function ie(z,se,Q){let ge=l.get(se).get(z);c[ge]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,Q),c[ge]=Q)}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,G={},d={},c={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,b=null,y=null,E=null,S=null,v=null,M=new ze(0,0,0),P=0,w=!1,R=null,L=null,F=null,C=null,O=null,U.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:xe,bindFramebuffer:Ve,drawBuffers:de,useProgram:De,setBlending:ue,setMaterial:he,setFlipSided:be,setCullFace:_e,setLineWidth:Xe,setPolygonOffset:k,setScissorTest:oe,activeTexture:Re,bindTexture:Ge,unbindTexture:V,compressedTexImage2D:ft,compressedTexImage3D:ot,texImage2D:T,texImage3D:J,pixelStorei:re,getParameter:fe,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Je,texStorage3D:I,texSubImage2D:Mt,texSubImage3D:Te,compressedTexSubImage2D:Ft,compressedTexSubImage3D:We,scissor:ve,viewport:we,reset:Me}}function ty(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pe,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(I=>p.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,T){return g?new OffscreenCanvas(I,T):nr("canvas")}function x(I,T,J){let fe=1,re=Je(I);if((re.width>J||re.height>J)&&(fe=J/Math.max(re.width,re.height)),fe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ve=Math.floor(fe*re.width),we=Math.floor(fe*re.height);d===void 0&&(d=m(ve,we));let ne=T?m(ve,we):d;return ne.width=ve,ne.height=we,ne.getContext("2d").drawImage(I,0,0,ve,we),Be("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ve+"x"+we+")."),ne}else return"data"in I&&Be("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),I;return I}function b(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(I,T,J,fe,re,ve=!1){if(I!==null){if(i[I]!==void 0)return i[I];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let we;fe&&(we=e.get("EXT_texture_norm16"),we||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=T;if(T===i.RED&&(J===i.FLOAT&&(ne=i.R32F),J===i.HALF_FLOAT&&(ne=i.R16F),J===i.UNSIGNED_BYTE&&(ne=i.R8),J===i.UNSIGNED_SHORT&&we&&(ne=we.R16_EXT),J===i.SHORT&&we&&(ne=we.R16_SNORM_EXT)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ne=i.R8UI),J===i.UNSIGNED_SHORT&&(ne=i.R16UI),J===i.UNSIGNED_INT&&(ne=i.R32UI),J===i.BYTE&&(ne=i.R8I),J===i.SHORT&&(ne=i.R16I),J===i.INT&&(ne=i.R32I)),T===i.RG&&(J===i.FLOAT&&(ne=i.RG32F),J===i.HALF_FLOAT&&(ne=i.RG16F),J===i.UNSIGNED_BYTE&&(ne=i.RG8),J===i.UNSIGNED_SHORT&&we&&(ne=we.RG16_EXT),J===i.SHORT&&we&&(ne=we.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ne=i.RG8UI),J===i.UNSIGNED_SHORT&&(ne=i.RG16UI),J===i.UNSIGNED_INT&&(ne=i.RG32UI),J===i.BYTE&&(ne=i.RG8I),J===i.SHORT&&(ne=i.RG16I),J===i.INT&&(ne=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),J===i.UNSIGNED_INT&&(ne=i.RGB32UI),J===i.BYTE&&(ne=i.RGB8I),J===i.SHORT&&(ne=i.RGB16I),J===i.INT&&(ne=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),J===i.UNSIGNED_INT&&(ne=i.RGBA32UI),J===i.BYTE&&(ne=i.RGBA8I),J===i.SHORT&&(ne=i.RGBA16I),J===i.INT&&(ne=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_SHORT&&we&&(ne=we.RGB16_EXT),J===i.SHORT&&we&&(ne=we.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),T===i.RGBA){let ie=ve?Yr:rt.getTransfer(re);J===i.FLOAT&&(ne=i.RGBA32F),J===i.HALF_FLOAT&&(ne=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ne=ie===xt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&we&&(ne=we.RGBA16_EXT),J===i.SHORT&&we&&(ne=we.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(I,T){let J;return I?T===null||T===zn||T===Ss?J=i.DEPTH24_STENCIL8:T===on?J=i.DEPTH32F_STENCIL8:T===Sr&&(J=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zn||T===Ss?J=i.DEPTH_COMPONENT24:T===on?J=i.DEPTH_COMPONENT32F:T===Sr&&(J=i.DEPTH_COMPONENT16),J}function M(I,T){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==wt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function P(I){let T=new WeakRef(I);n.get(I).__ref=T,p.add(T),_.register(I,T,T)}function w(I){let T=n.get(I).__ref;T!==void 0&&(p.delete(T),_.unregister(T))}function R(I){F(I.target)}function L(I){C(I.target)}function F(I){I.removeEventListener("dispose",R),w(I),q(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function C(I){I.removeEventListener("dispose",L),w(I),j(I)}function O(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):F(T))}p.clear(),u.clear()}function q(I){let T=n.get(I);if(T.__webglInit===void 0)return;let J=I.source,fe=f.get(J);if(fe){let re=fe[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(I),Object.keys(fe).length===0&&f.delete(J)}n.remove(I)}function N(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let J=I.source,fe=f.get(J);delete fe[T.__cacheKey],a.memory.textures--}function j(I){let T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let J=I.depthTexture;if(J&&J.renderTarget===I&&F(J),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let ve=0;ve<T.__webglFramebuffer[re].length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[re][ve]);else i.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)i.deleteFramebuffer(T.__webglFramebuffer[re]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let fe=I.textures;for(let re=0,ve=fe.length;re<ve;re++){let we=n.get(fe[re]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),a.memory.textures--),n.remove(fe[re])}n.remove(I)}let B=0;function H(){B=0}function G(){return B}function ee(I){B=I}function le(){let I=B;return I>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,I}function U(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function X(I,T){let J=n.get(I);if(I.isVideoTexture&&Ft(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){let fe=I.image;if(fe===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{he(J,I,T);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function te(I,T){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){he(J,I,T);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function ce(I,T){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){he(J,I,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function ae(I,T){let J=n.get(I);if(I.version>0&&J.__version!==I.version){be(J,I,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}let xe={[qn]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[er]:i.MIRRORED_REPEAT},Ve={[Bt]:i.NEAREST,[rc]:i.NEAREST_MIPMAP_NEAREST,[Ms]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},de={[op]:i.NEVER,[Dh]:i.ALWAYS,[cp]:i.LESS,[Ih]:i.LEQUAL,[lp]:i.EQUAL,[Lh]:i.GEQUAL,[hp]:i.GREATER,[up]:i.NOTEQUAL};function De(I,T){if(T.type===on&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wt||T.magFilter===Mr||T.magFilter===Ms||T.magFilter===Tn||T.minFilter===wt||T.minFilter===Mr||T.minFilter===Ms||T.minFilter===Tn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,xe[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,xe[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,xe[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ve[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ve[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==Ms&&T.minFilter!==Tn||T.type===on&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(I,T){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",R),P(T));let fe=T.source,re=f.get(fe);re===void 0&&(re={},f.set(fe,re));let ve=U(T);if(ve!==I.__cacheKey){re[ve]===void 0&&(re[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),re[ve].usedTimes++;let we=re[I.__cacheKey];we!==void 0&&(re[I.__cacheKey].usedTimes--,we.usedTimes===0&&N(T)),I.__cacheKey=ve,I.__webglTexture=re[ve].texture}return J}function Z(I,T,J){return Math.floor(Math.floor(I/J)/T)}function ue(I,T,J,fe){let ve=I.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,fe,T.data);else{ve.sort((z,se)=>z.start-se.start);let we=0;for(let z=1;z<ve.length;z++){let se=ve[we],Q=ve[z],Se=se.start+se.count,ge=Z(Q.start,T.width,4),ye=Z(se.start,T.width,4);Q.start<=Se+1&&ge===ye&&Z(Q.start+Q.count-1,T.width,4)===ge?se.count=Math.max(se.count,Q.start+Q.count-se.start):(++we,ve[we]=Q)}ve.length=we+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let z=0,se=ve.length;z<se;z++){let Q=ve[z],Se=Math.floor(Q.start/4),ge=Math.ceil(Q.count/4),ye=Se%T.width,ke=Math.floor(Se/T.width),it=ge,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,ye,ke,it,me,J,fe,T.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function he(I,T,J){let fe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=i.TEXTURE_3D);let re=Ue(I,T),ve=T.source;t.bindTexture(fe,I.__webglTexture,i.TEXTURE0+J);let we=n.get(ve);if(ve.version!==we.__version||re===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let me=rt.getPrimaries(rt.workingColorSpace),He=T.colorSpace===Gn?null:rt.getPrimaries(T.colorSpace),tt=T.colorSpace===Gn||me===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ie=x(T.image,!1,s.maxTextureSize);ie=We(T,ie);let Me=r.convert(T.format,T.colorSpace),z=r.convert(T.type),se=S(T.internalFormat,Me,z,T.normalized,T.colorSpace,T.isVideoTexture);De(fe,T);let Q,Se=T.mipmaps,ge=T.isVideoTexture!==!0,ye=we.__version===void 0||re===!0,ke=ve.dataReady,it=M(T,ie);if(T.isDepthTexture)se=v(T.format===Ai,T.type),ye&&(ge?t.texStorage2D(i.TEXTURE_2D,1,se,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,Me,z,null));else if(T.isDataTexture)if(Se.length>0){ge&&ye&&t.texStorage2D(i.TEXTURE_2D,it,se,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)Q=Se[me],ge?ke&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Q.width,Q.height,Me,z,Q.data):t.texImage2D(i.TEXTURE_2D,me,se,Q.width,Q.height,0,Me,z,Q.data);T.generateMipmaps=!1}else ge?(ye&&t.texStorage2D(i.TEXTURE_2D,it,se,ie.width,ie.height),ke&&ue(T,ie,Me,z)):t.texImage2D(i.TEXTURE_2D,0,se,ie.width,ie.height,0,Me,z,ie.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ge&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,se,Se[0].width,Se[0].height,ie.depth);for(let me=0,He=Se.length;me<He;me++)if(Q=Se[me],T.format!==Rn)if(Me!==null)if(ge){if(ke)if(T.layerUpdates.size>0){let tt=Wh(Q.width,Q.height,T.format,T.type);for(let Ce of T.layerUpdates){let _t=Q.data.subarray(Ce*tt/Q.data.BYTES_PER_ELEMENT,(Ce+1)*tt/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ce,Q.width,Q.height,1,Me,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Q.width,Q.height,ie.depth,Me,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,se,Q.width,Q.height,ie.depth,0,Q.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ge?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Q.width,Q.height,ie.depth,Me,z,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,se,Q.width,Q.height,ie.depth,0,Me,z,Q.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ge&&ye&&t.texStorage2D(i.TEXTURE_2D,it,se,Se[0].width,Se[0].height);for(let me=0,He=Se.length;me<He;me++)Q=Se[me],T.format!==Rn?Me!==null?ge?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Q.width,Q.height,Me,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,me,se,Q.width,Q.height,0,Q.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?ke&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Q.width,Q.height,Me,z,Q.data):t.texImage2D(i.TEXTURE_2D,me,se,Q.width,Q.height,0,Me,z,Q.data)}else if(T.isDataArrayTexture)if(ge){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,se,ie.width,ie.height,ie.depth),ke)if(T.layerUpdates.size>0){let me=Wh(ie.width,ie.height,T.format,T.type);for(let He of T.layerUpdates){let tt=ie.data.subarray(He*me/ie.data.BYTES_PER_ELEMENT,(He+1)*me/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,He,ie.width,ie.height,1,Me,z,tt)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Me,z,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,ie.width,ie.height,ie.depth,0,Me,z,ie.data);else if(T.isData3DTexture)ge?(ye&&t.texStorage3D(i.TEXTURE_3D,it,se,ie.width,ie.height,ie.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Me,z,ie.data)):t.texImage3D(i.TEXTURE_3D,0,se,ie.width,ie.height,ie.depth,0,Me,z,ie.data);else if(T.isFramebufferTexture){if(ye)if(ge)t.texStorage2D(i.TEXTURE_2D,it,se,ie.width,ie.height);else{let me=ie.width,He=ie.height;for(let tt=0;tt<it;tt++)t.texImage2D(i.TEXTURE_2D,tt,se,me,He,0,Me,z,null),me>>=1,He>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ie.parentNode!==me){me.appendChild(ie),u.add(T),me.onpaint=He=>{let tt=He.changedElements;for(let Ce of u)tt.includes(Ce.image)&&(Ce.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let tt=i.RGBA,Ce=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Ce,_t,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(ge&&ye){let me=Je(Se[0]);t.texStorage2D(i.TEXTURE_2D,it,se,me.width,me.height)}for(let me=0,He=Se.length;me<He;me++)Q=Se[me],ge?ke&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Me,z,Q):t.texImage2D(i.TEXTURE_2D,me,se,Me,z,Q);T.generateMipmaps=!1}else if(ge){if(ye){let me=Je(ie);t.texStorage2D(i.TEXTURE_2D,it,se,me.width,me.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,z,ie)}else t.texImage2D(i.TEXTURE_2D,0,se,Me,z,ie);b(T)&&T.mipmapsAutoUpdate===!0&&y(fe),we.__version=ve.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function be(I,T,J){if(T.image.length!==6)return;let fe=Ue(I,T),re=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);let ve=n.get(re);if(re.version!==ve.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);let we=rt.getPrimaries(rt.workingColorSpace),ne=T.colorSpace===Gn?null:rt.getPrimaries(T.colorSpace),ie=T.colorSpace===Gn||we===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,z=T.image[0]&&T.image[0].isDataTexture,se=[];for(let Ce=0;Ce<6;Ce++)!Me&&!z?se[Ce]=x(T.image[Ce],!0,s.maxCubemapSize):se[Ce]=z?T.image[Ce].image:T.image[Ce],se[Ce]=We(T,se[Ce]);let Q=se[0],Se=r.convert(T.format,T.colorSpace),ge=r.convert(T.type),ye=S(T.internalFormat,Se,ge,T.normalized,T.colorSpace),ke=T.isVideoTexture!==!0,it=ve.__version===void 0||fe===!0,me=re.dataReady,He=M(T,Q);De(i.TEXTURE_CUBE_MAP,T);let tt;if(T.isDepthTexture){if(ye=v(T.format===Ai,T.type),it)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,Q.width,Q.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,Q.width,Q.height,0,Se,ge,null)}else if(Me){ke&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ye,Q.width,Q.height);for(let Ce=0;Ce<6;Ce++){tt=se[Ce].mipmaps;for(let _t=0;_t<tt.length;_t++){let Jt=tt[_t];T.format!==Rn?Se!==null?ke?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t,0,0,Jt.width,Jt.height,Se,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t,ye,Jt.width,Jt.height,0,Jt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t,0,0,Jt.width,Jt.height,Se,ge,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t,ye,Jt.width,Jt.height,0,Se,ge,Jt.data)}}}else{if(tt=T.mipmaps,ke&&it){tt.length>0&&He++;let Ce=Je(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ye,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(z){ke?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,se[Ce].width,se[Ce].height,Se,ge,se[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,se[Ce].width,se[Ce].height,0,Se,ge,se[Ce].data);for(let _t=0;_t<tt.length;_t++){let Pi=tt[_t].image[Ce].image;ke?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t+1,0,0,Pi.width,Pi.height,Se,ge,Pi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t+1,ye,Pi.width,Pi.height,0,Se,ge,Pi.data)}}else{ke?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Se,ge,se[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,Se,ge,se[Ce]);for(let _t=0;_t<tt.length;_t++){let Jt=tt[_t];ke?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t+1,0,0,Se,ge,Jt.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,_t+1,ye,Se,ge,Jt.image[Ce])}}}b(T)&&T.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ve.__version=re.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function _e(I,T,J,fe,re,ve){let we=r.convert(J.format,J.colorSpace),ne=r.convert(J.type),ie=S(J.internalFormat,we,ne,J.normalized,J.colorSpace),Me=n.get(T),z=n.get(J);if(z.__renderTarget=T,!Me.__hasExternalTextures){let se=Math.max(1,T.width>>ve),Q=Math.max(1,T.height>>ve);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ve,ie,se,Q,T.depth,0,we,ne,null):t.texImage2D(re,ve,ie,se,Q,0,we,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Te(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,re,z.__webglTexture,0,Mt(T)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,re,z.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(I,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let fe=T.depthTexture,re=fe&&fe.isDepthTexture?fe.type:null,ve=v(T.stencilBuffer,re),we=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(T),ve,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(T),ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,I)}else{let fe=T.textures;for(let re=0;re<fe.length;re++){let ve=fe[re],we=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),ie=S(ve.internalFormat,we,ne,ve.normalized,ve.colorSpace);Te(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(T),ie,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(T),ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ie,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(I,T,J){let fe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(T.depthTexture);re.__renderTarget=T;let ve=fe?T.depthTexture.image[0]:T.depthTexture.image;(!re.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),fe?ae(T.depthTexture,0):X(T.depthTexture,0);let we=re.__webglTexture,ne=Mt(T),ie=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,Me=T.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===bi)Te(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,ie,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Me,ie,we,0);else if(T.depthTexture.format===Ai)Te(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,ie,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Me,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(I){let T=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let fe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){let re=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",re)};fe.addEventListener("dispose",re),T.__depthDisposeCallback=re}T.__boundDepthTexture=fe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let fe=0;fe<6;fe++)k(T.__webglFramebuffer[fe],I,fe);else I.texture.mipmaps.length>0?k(T.__webglFramebuffer[0],I,0):k(T.__webglFramebuffer,I,0);else if(J){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=i.createRenderbuffer(),Xe(T.__webglDepthbuffer[fe],I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Xe(T.__webglDepthbuffer,I,!1);else{let re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(I,T,J){let fe=n.get(I);T!==void 0&&_e(fe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&oe(I)}function Ge(I){let T=I.texture,J=n.get(I),fe=n.get(T);I.addEventListener("dispose",L),P(I);let re=I.textures,ve=I.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=T.version,a.memory.textures++),ve){J.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(T.mipmaps.length>0){J.__webglFramebuffer[ne]=[];for(let ie=0;ie<T.mipmaps.length;ie++)J.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else J.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ne=0;ne<T.mipmaps.length;ne++)J.__webglFramebuffer[ne]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(we)for(let ne=0,ie=re.length;ne<ie;ne++){let Me=n.get(re[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Te(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ie=re[ne];J.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ne]);let Me=r.convert(ie.format,ie.colorSpace),z=r.convert(ie.type),se=S(ie.internalFormat,Me,z,ie.normalized,ie.colorSpace,I.isXRRenderTarget===!0),Q=Mt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,se,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,J.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),De(i.TEXTURE_CUBE_MAP,T);for(let ne=0;ne<6;ne++)if(T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)_e(J.__webglFramebuffer[ne][ie],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else _e(J.__webglFramebuffer[ne],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);b(T)?y(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ne=0,ie=re.length;ne<ie;ne++){let Me=re[ne],z=n.get(Me),se=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,z.__webglTexture),De(se,Me),_e(J.__webglFramebuffer,I,Me,i.COLOR_ATTACHMENT0+ne,se,0),b(Me)&&y(se)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,fe.__webglTexture),De(ne,T),T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)_e(J.__webglFramebuffer[ie],I,T,i.COLOR_ATTACHMENT0,ne,ie);else _e(J.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,ne,0);b(T)?y(ne):T.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&oe(I)}function V(I){let T=I.textures;for(let J=0,fe=T.length;J<fe;J++){let re=T[J];if(b(re)&&re.mipmapsAutoUpdate===!0){let ve=E(I),we=n.get(re).__webglTexture;t.bindTexture(ve,we),y(ve),t.unbindTexture()}}}let ft=[];function ot(I){if(I.samples>0){if(Te(I)===!1){let T=I.textures,J=I.width,fe=I.height,re=i.COLOR_BUFFER_BIT,ve=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(I),ne=T.length>1;if(ne)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);let z=n.get(T[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,J,fe,0,0,J,fe,re,i.NEAREST),c===!0&&(ft.length=0,ft.push(i.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&ft.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,we.__webglColorRenderbuffer[Me]);let z=n.get(T[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Mt(I){return Math.min(s.maxSamples,I.samples)}function Te(I){let T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ft(I){let T=a.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function We(I,T){let J=I.colorSpace,fe=I.format,re=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==Xt&&J!==Gn&&(rt.getTransfer(J)===xt?(fe!==Rn||re!==vn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",J)),T}function Je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=H,this.getTextureUnits=G,this.setTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=ae,this.rebindTextures=Re,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Te,this.dispose=O}function ny(i,e){function t(n,s=Gn){let r,a=rt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Th)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===Rn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===uc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===La)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===xc||n===_c||n===vc||n===yc||n===Da||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===xc)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Fc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ic)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oc||n===Bc||n===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oc)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zc||n===Gc||n===Na||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kn({vertexShader:iy,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ru=class extends Xn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new su,m={},x=t.getContextAttributes(),b=null,y=null,E=[],S=[],v=new pe,M=null,P=null,w=new qt;w.viewport=new yt;let R=new qt;R.viewport=new yt;let L=[w,R],F=new nc,C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=E[U];return X===void 0&&(X=new rr,E[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=E[U];return X===void 0&&(X=new rr,E[U]=X),X.getGripSpace()},this.getHand=function(U){let X=E[U];return X===void 0&&(X=new rr,E[U]=X),X.getHandSpace()};function q(U){let X=S.indexOf(U.inputSource);if(X===-1)return;let te=E[X];te!==void 0&&(te.update(U.inputSource,U.frame,l||a),te.dispatchEvent({type:U.type,data:U.inputSource}))}function N(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",j);for(let U=0;U<E.length;U++){let X=S[U];X!==null&&(S[U]=null,E[U].disconnect(X))}C=null,O=null,g.reset();for(let U in m)delete m[U];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),P!==null){let U=P.camera;U.fov=P.fov,U.zoom=P.zoom,U.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",N),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ce=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Ai:bi,ce=x.stencil?Ss:zn);let xe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:Rn,type:vn,depthTexture:new vi(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(U){for(let X=0;X<U.removed.length;X++){let te=U.removed[X],ce=S.indexOf(te);ce>=0&&(S[ce]=null,E[ce].disconnect(te))}for(let X=0;X<U.added.length;X++){let te=U.added[X],ce=S.indexOf(te);if(ce===-1){for(let xe=0;xe<E.length;xe++)if(xe>=S.length){S.push(te),ce=xe;break}else if(S[xe]===null){S[xe]=te,ce=xe;break}if(ce===-1)break}let ae=E[ce];ae&&ae.connect(te)}}function B(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let X=U.near,te=U.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(te=g.depthFar)),F.near=R.near=w.near=X,F.far=R.far=w.far=te,(C!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,O=F.far),F.layers.mask=U.layers.mask|6,w.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let ce=U.parent,ae=F.cameras;B(F,ce);for(let xe=0;xe<ae.length;xe++)B(ae[xe],ce);F.projectionMatrix.copy(w.projectionMatrix),F.projectionMatrixInverse.copy(w.projectionMatrixInverse),P===null&&U.isPerspectiveCamera&&(P={camera:U,fov:U.fov,zoom:U.zoom}),H(U,F,ce)};function H(U,X,te){te===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(te.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ls*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(U){return m[U]};let G=null;function ee(U,X){if(h=X.getViewerPose(l||a),p=X,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;te.length!==F.cameras.length&&(F.cameras.length=0,ce=!0);for(let de=0;de<te.length;de++){let De=te[de],Ue=null;if(f!==null)Ue=f.getViewport(De);else{let ue=u.getViewSubImage(d,De);Ue=ue.viewport,de===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let Z=L[de];Z===void 0&&(Z=new qt,Z.layers.enable(de),Z.viewport=new yt,L[de]=Z),Z.matrix.fromArray(De.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(De.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),de===0&&(F.matrix.copy(Z.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ce===!0&&F.cameras.push(Z)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let de=u.getDepthInformation(te[0]);de&&de.isValid&&de.texture&&g.init(de,s.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let de=0;de<te.length;de++){let De=te[de].camera;if(De){let Ue=m[De];Ue||(Ue=new ha,m[De]=Ue);let Z=u.getCameraImage(De);Ue.sourceTexture=Z}}}}for(let te=0;te<E.length;te++){let ce=S[te],ae=E[te];ce!==null&&ae!==void 0&&ae.update(ce,X,l||a)}G&&G(U,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),p=null}let le=new qp;le.setAnimationLoop(ee),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}},ry=new qe,tm=new Ye;tm.set(-1,0,0,0,1,0,0,0,1);function ay(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Gh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,x,b):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),b=x.envMap,y=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(ry.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tm),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,x,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=b*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oy(i,e,t,n){let s={},r={};function a(x,b){let y=b.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,b){let y=s[x.id];y===void 0&&(p(x),y=c(x),s[x.id]=y,x.addEventListener("dispose",g));let E=b.program;n.updateUBOMapping(x,E);let S=e.render.frame;r[x.id]!==S&&(l(x),r[x.id]=S)}function c(x){let b=i.createBuffer(),y=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(x){let b=s[x.id],y=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,v=y.length;S<v;S++){let M=y[S];if(Array.isArray(M))for(let P=0,w=M.length;P<w;P++)h(M[P],S,P,E);else h(M,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,b,y,E){if(d(x,b,y,E)===!0){let S=x.__offset,v=x.value;if(Array.isArray(v)){let M=0;for(let P=0;P<v.length;P++){let w=v[P],R=_(w,!0);u(w,x.__data,M),M+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function u(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function d(x,b,y,E){let S=x.value,v=b+"_"+y;if(Array.isArray(S)){E[v]===void 0&&(E[v]=[]);let M=E[v],P=!1;for(let w=0;w<S.length;w++)f(S[w],M,w)===!0&&(P=!0);return P}return f(S,E,v)}function f(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let E=b[y];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function p(x){let b=x.uniforms,y=0,E=16;for(let v=0,M=b.length;v<M;v++){let P=Array.isArray(b[v])?b[v]:[b[v]];for(let w=0,R=P.length;w<R;w++){let L=P[w],F=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(b[v])||Array.isArray(L.value),O=y;for(let N=0,j=F.length;N<j;N++){let B=F[N],H=_(B,C),G=y%E,ee=G%H.boundary,le=G+ee;y+=ee,le!==0&&E-le<H.storage&&(y+=E-le),N===0&&(O=y),y+=H.storage}let q=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new q((y-O)/Float32Array.BYTES_PER_ELEMENT),L.__offset=O}}let S=y%E;return S>0&&(y+=E-S),x.__size=y,x.__cache={},this}function _(x,b){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(x){let b=x.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}var cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qn=null;function ly(){return Qn===null&&(Qn=new jn(cy,16,16,ji,pn),Qn.name="DFG_LUT",Qn.minFilter=wt,Qn.magFilter=wt,Qn.wrapS=mn,Qn.wrapT=mn,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}var Kc=class{constructor(e={}){let{canvas:t=dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=f,g=new Set([dc,uc,hc]),m=new Set([vn,zn,Sr,Ss,oc,cc]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,S=null,v=[],M=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,L=null,F=null,C=null,O=null;this._outputColorSpace=Tt;let q=0,N=0,j=null,B=-1,H=null,G=new yt,ee=new yt,le=null,U=new ze(0),X=0,te=t.width,ce=t.height,ae=1,xe=null,Ve=null,de=new yt(0,0,te,ce),De=new yt(0,0,te,ce),Ue=!1,Z=new qi,ue=new Oo,he=!1,be=!1,_e=new qe,Xe=new D,k=new yt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ge(){return j===null?ae:1}let V=n;function ft(A,W){return t.getContext(A,W)}let ot,Mt,Te,Ft,We,Je,I,T,J,fe,re,ve,we,ne,ie,Me,z,se,Q,Se,ge,ye,ke;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),V===null){let W="webgl2";if(V=ft(W,A),V===null)throw ft(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(A){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ke("WebGLRenderer: "+A.message),A}function it(){ot=new v_(V),ot.init(),ge=new ny(V,ot),Mt=new l_(V,ot,e,ge),Te=new ey(V,ot),Mt.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),F=V.createFramebuffer(),C=V.createFramebuffer(),O=V.createFramebuffer(),Ft=new S_(V),We=new zv,Je=new ty(V,ot,Te,We,Mt,ge,Ft),I=new __(w),T=new T0(V),ye=new o_(V,T),J=new y_(V,T,Ft,ye),fe=new T_(V,J,T,ye,Ft),se=new E_(V,Mt,Je),ie=new h_(We),re=new kv(w,I,ot,Mt,ye,ie),ve=new ay(w,We),we=new Hv,ne=new Kv(ot),z=new a_(w,I,Te,fe,p,c),Me=new Qv(w,fe,Mt),ke=new oy(V,Ft,Mt,Te),Q=new c_(V,ot,Ft),Se=new M_(V,ot,Ft),Ft.programs=re.programs,w.capabilities=Mt,w.extensions=ot,w.properties=We,w.renderLists=we,w.shadowMap=Me,w.state=Te,w.info=Ft}_!==vn&&(P=new A_(_,t.width,t.height,o,s,r));let me=new ru(w,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize(te,ce,!1))},this.getSize=function(A){return A.set(te,ce)},this.setSize=function(A,W,$=!0){if(me.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,ce=W,t.width=Math.floor(A*ae),t.height=Math.floor(W*ae),$===!0&&(t.style.width=A+"px",t.style.height=W+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(te*ae,ce*ae).floor()},this.setDrawingBufferSize=function(A,W,$){te=A,ce=W,ae=$,t.width=Math.floor(A*$),t.height=Math.floor(W*$),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(_===vn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,W,$,K){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,W,$,K),Te.viewport(G.copy(de).multiplyScalar(Ge()).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,W,$,K){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,W,$,K),Te.scissor(ee.copy(De).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Te.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){xe=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,$=!0){let K=0;if(A){let Y=!1;if(j!==null){let Ae=j.texture.format;Y=g.has(Ae)}if(Y){let Ae=j.texture.type,Le=m.has(Ae),Ee=z.getClearColor(),Ie=z.getClearAlpha(),Oe=Ee.r,$e=Ee.g,lt=Ee.b;Le?(x[0]=Oe,x[1]=$e,x[2]=lt,x[3]=Ie,V.clearBufferuiv(V.COLOR,0,x)):(b[0]=Oe,b[1]=$e,b[2]=lt,b[3]=Ie,V.clearBufferiv(V.COLOR,0,b))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),z.dispose(),we.dispose(),ne.dispose(),Je.dispose(),We.dispose(),I.dispose(),fe.dispose(),J.dispose(),ye.dispose(),ke.dispose(),re.dispose(),me.dispose(),me.removeEventListener("sessionstart",Wu),me.removeEventListener("sessionend",qu),Yi.stop()};function He(A){A.preventDefault(),Zr("WebGLRenderer: Context Lost."),R=!0}function tt(){Zr("WebGLRenderer: Context Restored."),R=!1;let A=Ft.autoReset,W=Me.enabled,$=Me.autoUpdate,K=Me.needsUpdate,Y=Me.type;it(),Ft.autoReset=A,Me.enabled=W,Me.autoUpdate=$,Me.needsUpdate=K,Me.type=Y}function Ce(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){let W=A.target;W.removeEventListener("dispose",_t),Jt(W)}function Jt(A){Pi(A),We.remove(A)}function Pi(A){let W=We.get(A).programs;W!==void 0&&(W.forEach(function($){re.releaseProgram($)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,$,K,Y,Ae){W===null&&(W=oe);let Le=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ee=Em(A,W,$,K,Y);Te.setMaterial(K,Le);let Ie=$.index,Oe=1;if(K.wireframe===!0){if(Ie=J.getWireframeAttribute($),Ie===void 0)return;Oe=2}let $e=$.drawRange,lt=$.attributes.position,Ne=$e.start*Oe,ht=($e.start+$e.count)*Oe;Ae!==null&&(Ne=Math.max(Ne,Ae.start*Oe),ht=Math.min(ht,(Ae.start+Ae.count)*Oe)),Ie!==null?(Ne=Math.max(Ne,0),ht=Math.min(ht,Ie.count)):lt!=null&&(Ne=Math.max(Ne,0),ht=Math.min(ht,lt.count));let kt=ht-Ne;if(kt<0||kt===1/0)return;ye.setup(Y,K,Ee,$,Ie);let At,St=Q;if(Ie!==null&&(At=T.get(Ie),St=Se,St.setIndex(At)),Y.isMesh)K.wireframe===!0?(Te.setLineWidth(K.wireframeLinewidth*Ge()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Y.isLine){let tn=K.linewidth;tn===void 0&&(tn=1),Te.setLineWidth(tn*Ge()),Y.isLineSegments?St.setMode(V.LINES):Y.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Y.isPoints?St.setMode(V.POINTS):Y.isSprite&&St.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let tn=Y._multiDrawStarts,Fe=Y._multiDrawCounts,ln=Y._multiDrawCount,bt=Ie?T.get(Ie).bytesPerElement:1,Zi=We.get(K).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)Zi.setValue(V,"_gl_DrawID",nn),St.render(tn[nn]/bt,Fe[nn])}else if(Y.isInstancedMesh)St.renderInstances(Ne,kt,Y.count);else if($.isInstancedBufferGeometry){let tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Fe=Math.min($.instanceCount,tn);St.renderInstances(Ne,kt,Fe)}else St.render(Ne,kt)};function Vu(A,W,$,K){L!==null&&A.isNodeMaterial&&L.setObject(K,A),he===!0&&ie.setState(A,$,!1),A.transparent===!0&&A.side===Ht&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Ir(A,W,K),A.side=Yn,A.needsUpdate=!0,Ir(A,W,K),A.side=Ht):Ir(A,W,K)}this.compile=function(A,W,$=null){$===null&&($=A),L!==null&&L.renderStart(A,W,$),S=ne.get($),S.init(W),M.push(S),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),be=this.localClippingEnabled,he=ie.init(this.clippingPlanes,be),he===!0&&ie.setGlobalState(this.clippingPlanes,W),L!==null&&Me.render(S.state.shadowsArray,$,W);let K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){let Ee=Ae[Le];Vu(Ee,$,W,Y),K.add(Ee)}else Vu(Ae,$,W,Y),K.add(Ae)}),S=M.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(A,W,$=null){let K=this.compile(A,W,$);return new Promise(Y=>{function Ae(){if(K.forEach(function(Le){let Ie=We.get(Le).currentProgram;(Ie===void 0||Ie.isReady())&&K.delete(Le)}),K.size===0){Y(A);return}setTimeout(Ae,10)}ot.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let hl=null;function Mm(A){hl&&hl(A)}function Wu(){Yi.stop()}function qu(){Yi.start()}let Yi=new qp;Yi.setAnimationLoop(Mm),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(A){hl=A,me.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},me.addEventListener("sessionstart",Wu),me.addEventListener("sessionend",qu),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(A,W);let $=me.enabled===!0&&me.isPresenting===!0,K=P!==null&&(j===null||$)&&P.begin(w,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(W),W=me.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,j),S=ne.get(A,M.length),S.init(W),S.state.textureUnits=Je.getTextureUnits(),M.push(S),_e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ue.setFromArrayCamera(W):Z.setFromProjectionMatrix(_e,An,W.reversedDepth),be=this.localClippingEnabled,he=ie.init(this.clippingPlanes,be),E=we.get(A,v.length),E.init(),v.push(E),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){let Le=w.xr.getDepthSensingMesh();Le!==null&&ul(Le,W,-1/0,w.sortObjects)}ul(A,W,0,w.sortObjects),E.finish(),L!==null&&L.updateLights(S.state.lightsArray),w.sortObjects===!0&&E.sort(xe,Ve),Re=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Re&&z.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),he===!0&&ie.beginShadows();let Y=S.state.shadowsArray;if(Me.render(Y,A,W),he===!0&&ie.endShadows(),(K&&P.hasRenderPass())===!1){let Le=E.opaque,Ee=E.transmissive;if(S.setupLights(),W.isArrayCamera){let Ie=W.cameras;if(Ee.length>0)for(let Oe=0,$e=Ie.length;Oe<$e;Oe++){let lt=Ie[Oe];ju(Le,Ee,A,lt)}Re&&z.render(A);for(let Oe=0,$e=Ie.length;Oe<$e;Oe++){let lt=Ie[Oe];Xu(E,A,lt,lt.viewport)}}else Ee.length>0&&ju(Le,Ee,A,W),Re&&z.render(A),Xu(E,A,W)}j!==null&&N===0&&(Je.updateMultisampleRenderTarget(j),Je.updateRenderTargetMipmap(j)),K&&P.end(w),A.isScene===!0&&A.onAfterRender(w,A,W),ye.resetDefaultState(),B=-1,H=null,M.pop(),M.length>0?(S=M[M.length-1],Je.setTextureUnits(S.state.textureUnits),he===!0&&ie.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,L!==null&&L.renderEnd()};function ul(A,W,$,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let Le=W.isArrayCamera?ue:Z;if(!A.frustumCulled||A.intersectsFrustum(Le)){K&&k.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);let Ee=fe.update(A),Ie=A.material;Ie.visible&&E.push(A,Ee,Ie,$,k.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){let Le=W.isArrayCamera?ue:Z;if(!A.frustumCulled||A.intersectsFrustum(Le)){let Ee=fe.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),k.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),k.copy(Ee.boundingSphere.center)),k.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ie)){let Oe=Ee.groups;for(let $e=0,lt=Oe.length;$e<lt;$e++){let Ne=Oe[$e],ht=Ie[Ne.materialIndex];ht&&ht.visible&&E.push(A,Ee,ht,$,k.z,Ne,W)}}else Ie.visible&&E.push(A,Ee,Ie,$,k.z,null,W)}}}let Ae=A.children;for(let Le=0,Ee=Ae.length;Le<Ee;Le++)ul(Ae[Le],W,$,K)}function Xu(A,W,$,K){let{opaque:Y,transmissive:Ae,transparent:Le}=A;S.setupLightsView($),he===!0&&ie.setGlobalState(w.clippingPlanes,$),K&&Te.viewport(G.copy(K)),Y.length>0&&Ha(Y,W,$),Ae.length>0&&Ha(Ae,W,$),Le.length>0&&Ha(Le,W,$),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ju(A,W,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let Ne=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Sn(1,1,{generateMipmaps:!0,type:Ne?pn:vn,minFilter:Tn,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Ae=S.state.transmissionRenderTarget[K.id],Le=K.viewport||G;Ae.setSize(Le.z*w.transmissionResolutionScale,Le.w*w.transmissionResolutionScale);let Ee=w.getRenderTarget(),Ie=w.getActiveCubeFace(),Oe=w.getActiveMipmapLevel();w.setRenderTarget(Ae),w.getClearColor(U),X=w.getClearAlpha(),X<1&&w.setClearColor(16777215,.5),w.clear(),Re&&z.render($);let $e=w.toneMapping;w.toneMapping=Zn;let lt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),he===!0&&ie.setGlobalState(w.clippingPlanes,K),Ha(A,$,K),Je.updateMultisampleRenderTarget(Ae),Je.updateRenderTargetMipmap(Ae),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ht=0,kt=W.length;ht<kt;ht++){let At=W[ht],{object:St,geometry:tn,material:Fe,group:ln}=At;if(Fe.side===Ht&&St.layers.test(K.layers)){let bt=Fe.side;Fe.side=fn,Fe.needsUpdate=!0,Ku(St,$,K,tn,Fe,ln),Fe.side=bt,Fe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Je.updateMultisampleRenderTarget(Ae),Je.updateRenderTargetMipmap(Ae))}w.setRenderTarget(Ee,Ie,Oe),w.setClearColor(U,X),lt!==void 0&&(K.viewport=lt),w.toneMapping=$e}function Ha(A,W,$){let K=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ae=A.length;Y<Ae;Y++){let Le=A[Y],{object:Ee,geometry:Ie,group:Oe}=Le,$e=Le.material;$e.allowOverride===!0&&K!==null&&($e=K),Ee.layers.test($.layers)&&Ku(Ee,W,$,Ie,$e,Oe)}}function Ku(A,W,$,K,Y,Ae){L!==null&&Y.isNodeMaterial&&L.setObject(A,Y),A.onBeforeRender(w,W,$,K,Y,Ae),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(w,W,$,K,A,Ae),Y.transparent===!0&&Y.side===Ht&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,w.renderBufferDirect($,W,K,Y,A,Ae),Y.side=Yn,Y.needsUpdate=!0,w.renderBufferDirect($,W,K,Y,A,Ae),Y.side=Ht):w.renderBufferDirect($,W,K,Y,A,Ae),A.onAfterRender(w,W,$,K,Y,Ae)}function Ju(A){let W=0;for(let $ of A)$.texture!==null&&W++;return W}function Ir(A,W,$){W.isScene!==!0&&(W=oe);let K=We.get(A),Y=S.state.lights,Ae=S.state.shadowsArray,Le=Y.state.version,Ee=re.getParameters(A,Y.state,Ae,W,$,S.state.lightProbeGridArray),Ie=re.getProgramCacheKey(Ee),Oe=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;let $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=I.get(A.envMap||K.environment,$e),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",_t),Oe=new Map,K.programs=Oe,K.programVariants=new Map);let lt=Oe.get(Ie);if(lt!==void 0){if(K.currentProgram===lt&&K.lightsStateVersion===Le)return Zu(A,Ee),lt}else Ee.uniforms=re.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,$,Ee),A.onBeforeCompile(Ee,w),lt=re.acquireProgram(Ee,Ie),Oe.set(Ie,lt),K.uniforms=Ee.uniforms;let Ne=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ie.uniform),Zu(A,Ee),K.needsLights=wm(A),K.lightsStateVersion=Le,K.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.sunLights.value=Y.state.sun,Ne.sunLightShadows.value=Y.state.sunShadow,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ne.sunShadowCascade.value=Y.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.numLightProbeGrids=Ju(S.state.lightProbeGridArray),K.currentProgram=lt,K.uniformsList=null,lt}function Sm(A,W,$,K,Y){let Ae=We.get(A),Le=Ae.currentProgram.id+","+K+","+Y,Ee=Ae.programVariants.get(Le);return Ee===void 0?(Ee=Ir(A,W,$),Ae.programVariants.set(Le,Ee)):(Ae.currentProgram=Ee,Ae.uniformsList=null,Ae.outputColorSpace=K,Ae.toneMapping=Y),Ee}function Yu(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Tr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Zu(A,W){let $=We.get(A);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Em(A,W,$,K,Y){W.isScene!==!0&&(W=oe),Je.resetTextureUnits();let Ae=W.fog,Le=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Ee=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rt.workingColorSpace,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Oe=I.get(K.envMap||Le,Ie),$e=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!$.morphAttributes.position,ht=!!$.morphAttributes.normal,kt=!!$.morphAttributes.color,At=Zn;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=w.toneMapping);let St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=St!==void 0?St.length:0,Fe=We.get(K),ln=S.state.lights;if(he===!0&&(be===!0||A!==H)){let Ct=A===H&&K.id===B;ie.setState(K,A,Ct)}let bt=!1,Zi=!1;K.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==ln.state.version||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==Oe||K.fog===!0&&Fe.fog!==Ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ie.numPlanes||Fe.numIntersection!==ie.numIntersection)||Fe.vertexAlphas!==$e||Fe.vertexTangents!==lt||Fe.morphTargets!==Ne||Fe.morphNormals!==ht||Fe.morphColors!==kt||Fe.morphTargetsCount!==tn||Fe.numLightProbeGrids!==Ju(S.state.lightProbeGridArray)?bt=!0:(Fe.outputColorSpace!==Ee||Fe.toneMapping!==At)&&(Zi=!0):(bt=!0,Fe.__version=K.version);let nn=Fe.currentProgram;(bt===!0||Zi===!0)&&(nn=Zi===!0?Sm(K,W,Y,Ee,At):Ir(K,W,Y),L&&K.isNodeMaterial&&L.onUpdateProgram(K,nn,Fe));let Va=!1,Ii=!1,$i=!1,pt=nn.getUniforms(),en=Fe.uniforms;if(Te.useProgram(nn.program)&&(Va=!0,Ii=!0,$i=!0),K.id!==B&&(B=K.id,Ii=!0),Va||H!==A){Te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pt.setValue(V,"projectionMatrix",A.projectionMatrix),pt.setValue(V,"viewMatrix",A.matrixWorldInverse);let Yt=pt.map.cameraPosition;Yt!==void 0&&Yt.setValue(V,Xe.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&pt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Ii=!0,$i=!0)}if(Fe.needsLights&&(ln.state.sunShadowMap.length>0&&pt.setValue(V,"sunShadowMap",ln.state.sunShadowMap,Je),ln.state.directionalShadowMap.length>0&&pt.setValue(V,"directionalShadowMap",ln.state.directionalShadowMap,Je),ln.state.spotShadowMap.length>0&&pt.setValue(V,"spotShadowMap",ln.state.spotShadowMap,Je),ln.state.pointShadowMap.length>0&&pt.setValue(V,"pointShadowMap",ln.state.pointShadowMap,Je)),Y.isSkinnedMesh){pt.setOptional(V,Y,"bindMatrix"),pt.setOptional(V,Y,"bindMatrixInverse");let Ct=Y.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(V,"boneTexture",Ct.boneTexture,Je))}Y.isBatchedMesh&&(pt.setOptional(V,Y,"batchingTexture"),pt.setValue(V,"batchingTexture",Y._matricesTexture,Je),pt.setOptional(V,Y,"batchingIdTexture"),pt.setValue(V,"batchingIdTexture",Y._indirectTexture,Je),pt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(V,"batchingColorTexture",Y._colorsTexture,Je));let Ln=$.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&se.update(Y,$,nn),(Ii||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,pt.setValue(V,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(en.envMapIntensity.value=W.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=ly()),Ii){if(pt.setValue(V,"toneMappingExposure",w.toneMappingExposure),Fe.needsLights&&Tm(en,$i),Ae&&K.fog===!0&&ve.refreshFogUniforms(en,Ae),ve.refreshMaterialUniforms(en,K,ae,ce,S.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Ct=y,Yt=0;for(let si of S.state.lightProbeGridArray)si.texture!==null&&(Ct.textures[Yt]=si.texture,Ct.min[Yt]=si.boundingBox.min,Ct.max[Yt]=si.boundingBox.max,Ct.resolution[Yt]=si.resolution,Yt++);for(let si in Ct)Ct[si].length=Yt;en.probesSH.value=Ct.textures,en.probesMin.value=Ct.min,en.probesMax.value=Ct.max,en.probesResolution.value=Ct.resolution}Tr.upload(V,Yu(Fe),en,Je)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Tr.upload(V,Yu(Fe),en,Je),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pt.setValue(V,"center",Y.center),pt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(V,"normalMatrix",Y.normalMatrix),pt.setValue(V,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){let Ct=K.uniformsGroups;for(let Yt=0,si=Ct.length;Yt<si;Yt++){let Qu=Ct[Yt];ke.update(Qu,nn),ke.bind(Qu,nn)}}return nn}function Tm(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function wm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,$){let K=We.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=W,We.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let $=We.get(A);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,$=0){j=A,q=W,N=$;let K=null,Y=!1,Ae=!1;if(A){let Ee=We.get(A);if(Ee.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(V.FRAMEBUFFER,Ee.__webglFramebuffer),G.copy(A.viewport),ee.copy(A.scissor),le=A.scissorTest,Te.viewport(G),Te.scissor(ee),Te.setScissorTest(le),B=-1;return}else if(Ee.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(Ee.__hasExternalTextures)Je.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let $e=A.depthTexture;if(Ee.__boundDepthTexture!==$e){if($e!==null&&We.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ae=!0);let Oe=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[W])?K=Oe[W][$]:K=Oe[W],Y=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?K=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?K=Oe[$]:K=Oe,G.copy(A.viewport),ee.copy(A.scissor),le=A.scissorTest}else G.copy(de).multiplyScalar(ae).floor(),ee.copy(De).multiplyScalar(ae).floor(),le=Ue;if($!==0&&(K=F),Te.bindFramebuffer(V.FRAMEBUFFER,K)&&Te.drawBuffers(A,K),Te.viewport(G),Te.scissor(ee),Te.setScissorTest(le),Y){let Ee=We.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ee.__webglTexture,$)}else if(Ae){let Ee=W;for(let Ie=0;Ie<A.textures.length;Ie++){let Oe=We.get(A.textures[Ie]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ie,Oe.__webglTexture,$,Ee)}}else if(A!==null&&$!==0){let Ee=We.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ee.__webglTexture,$)}B=-1};function $u(A){let W=We.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=Mt.textureFormatReadable(A.format),W.__typeReadable=Mt.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,$,K,Y,Ae,Le,Ee=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){Te.bindFramebuffer(V.FRAMEBUFFER,Ie);try{let Oe=A.textures[Ee],$e=Oe.format,lt=Oe.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee);let Ne=$u(Oe);if(Ne.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&$>=0&&$<=A.height-Y&&V.readPixels(W,$,K,Y,ge.convert($e),ge.convert(lt),Ae)}finally{let Oe=j!==null?We.get(j).__webglFramebuffer:null;Te.bindFramebuffer(V.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,W,$,K,Y,Ae,Le,Ee=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(W>=0&&W<=A.width-K&&$>=0&&$<=A.height-Y){Te.bindFramebuffer(V.FRAMEBUFFER,Ie);let Oe=A.textures[Ee],$e=Oe.format,lt=Oe.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee);let Ne=$u(Oe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ht),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),V.readPixels(W,$,K,Y,ge.convert($e),ge.convert(lt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let kt=j!==null?We.get(j).__webglFramebuffer:null;Te.bindFramebuffer(V.FRAMEBUFFER,kt);let At=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pp(V,At,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ht),V.deleteSync(At),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,$=0){let K=Math.pow(2,-$),Y=Math.floor(A.image.width*K),Ae=Math.floor(A.image.height*K),Le=W!==null?W.x:0,Ee=W!==null?W.y:0;Je.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,Le,Ee,Y,Ae),Te.unbindTexture()},this.copyTextureToTexture=function(A,W,$=null,K=null,Y=0,Ae=0){let Le,Ee,Ie,Oe,$e,lt,Ne,ht,kt,At=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if($!==null)Le=$.max.x-$.min.x,Ee=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,$e=$.min.y,lt=$.isBox3?$.min.z:0;else{let pt=Math.pow(2,-Y);Le=Math.floor(At.width*pt),Ee=Math.floor(At.height*pt),A.isDataArrayTexture?Ie=At.depth:A.isData3DTexture?Ie=Math.floor(At.depth*pt):Ie=1,Oe=0,$e=0,lt=0}K!==null?(Ne=K.x,ht=K.y,kt=K.z):(Ne=0,ht=0,kt=0);let St=ge.convert(W.format),tn=ge.convert(W.type),Fe;W.isData3DTexture?(Je.setTexture3D(W,0),Fe=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Je.setTexture2DArray(W,0),Fe=V.TEXTURE_2D_ARRAY):(Je.setTexture2D(W,0),Fe=V.TEXTURE_2D),Te.activeTexture(V.TEXTURE0),Te.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),Te.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Te.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let ln=Te.getParameter(V.UNPACK_ROW_LENGTH),bt=Te.getParameter(V.UNPACK_IMAGE_HEIGHT),Zi=Te.getParameter(V.UNPACK_SKIP_PIXELS),nn=Te.getParameter(V.UNPACK_SKIP_ROWS),Va=Te.getParameter(V.UNPACK_SKIP_IMAGES);Te.pixelStorei(V.UNPACK_ROW_LENGTH,At.width),Te.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At.height),Te.pixelStorei(V.UNPACK_SKIP_PIXELS,Oe),Te.pixelStorei(V.UNPACK_SKIP_ROWS,$e),Te.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);let Ii=A.isDataArrayTexture||A.isData3DTexture,$i=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let pt=We.get(A),en=We.get(W),Ln=We.get(pt.__renderTarget),Ct=We.get(en.__renderTarget);Te.bindFramebuffer(V.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Te.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Yt=0;Yt<Ie;Yt++)Ii&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(A).__webglTexture,Y,lt+Yt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(W).__webglTexture,Ae,kt+Yt)),V.blitFramebuffer(Oe,$e,Oe+Le,$e+Ee,Ne,ht,Ne+Le,ht+Ee,V.DEPTH_BUFFER_BIT,V.NEAREST);Te.bindFramebuffer(V.READ_FRAMEBUFFER,null),Te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||We.has(A)){let pt=We.get(A),en=We.get(W);Te.bindFramebuffer(V.READ_FRAMEBUFFER,C),Te.bindFramebuffer(V.DRAW_FRAMEBUFFER,O);for(let Ln=0;Ln<Ie;Ln++)Ii?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pt.__webglTexture,Y,lt+Ln):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pt.__webglTexture,Y),$i?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,Ae,kt+Ln):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,Ae),Y!==0?V.blitFramebuffer(Oe,$e,Oe+Le,$e+Ee,Ne,ht,Ne+Le,ht+Ee,V.COLOR_BUFFER_BIT,V.NEAREST):$i?V.copyTexSubImage3D(Fe,Ae,Ne,ht,kt+Ln,Oe,$e,Le,Ee):V.copyTexSubImage2D(Fe,Ae,Ne,ht,Oe,$e,Le,Ee);Te.bindFramebuffer(V.READ_FRAMEBUFFER,null),Te.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else $i?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Fe,Ae,Ne,ht,kt,Le,Ee,Ie,St,tn,At.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Fe,Ae,Ne,ht,kt,Le,Ee,Ie,St,At.data):V.texSubImage3D(Fe,Ae,Ne,ht,kt,Le,Ee,Ie,St,tn,At):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,Ne,ht,Le,Ee,St,tn,At.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,Ne,ht,At.width,At.height,St,At.data):V.texSubImage2D(V.TEXTURE_2D,Ae,Ne,ht,Le,Ee,St,tn,At);Te.pixelStorei(V.UNPACK_ROW_LENGTH,ln),Te.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bt),Te.pixelStorei(V.UNPACK_SKIP_PIXELS,Zi),Te.pixelStorei(V.UNPACK_SKIP_ROWS,nn),Te.pixelStorei(V.UNPACK_SKIP_IMAGES,Va),Ae===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(Fe),Te.unbindTexture()},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){q=0,N=0,j=null,Te.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};function im(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new gt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=nm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let p=nm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function nm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Ot(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){let _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function ou(i,e){if(e===Ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Er||e===Fa){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Er)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function sm(i){let e=new Map,t=new Map,n=i.clone();return rm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function rm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)rm(i.children[n],e.children[n],t)}var Zc=class extends kn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new $c(t,at.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $c(t,at.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ru(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=wi.extractUrlBase(e);a=wi.resolveURL(l,this.path)}else a=wi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ps(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hm){try{a[at.KHR_BINARY_GLTF]=new Cu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:a[u]=new du;break;case at.KHR_DRACO_MESH_COMPRESSION:a[u]=new Pu(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:a[u]=new Iu;break;case at.KHR_MESH_QUANTIZATION:a[u]=new Lu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function hy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wa(h),l.distance=u;break;case"spot":l=new Ta(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},du=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(r,r)}return Promise.all(s)}},mu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},gu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Xt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},_u=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},vu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],Xt),Promise.all(s)}},yu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Mu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],Xt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(s)}},Su=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Dt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Tu=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},wu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Au=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},$c=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Ru=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let _=new qe,g=new D,m=new It,x=new D(1,1,1),b=new an(p.geometry,p.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,_.compose(g,m,x));let y=null;for(let E in c)if(E==="_COLOR_0"){let S=c[E];b.instanceColor=new _i(S.array,S.itemSize,S.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let v=b.geometry;y=new gt,y.name=v.name;for(let M in v.attributes)y.setAttribute(M,v.attributes[M]);for(let M in v.morphAttributes)y.morphAttributes[M]=v.morphAttributes[M];v.index!==null&&y.setIndex(v.index),y.morphTargetsRelative=v.morphTargetsRelative;for(let M of v.groups)y.addGroup(M.start,M.count,M.materialIndex);v.boundingBox!==null&&(y.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(y.boundingSphere=v.boundingSphere.clone()),y.drawRange.start=v.drawRange.start,y.drawRange.count=v.drawRange.count,y.userData=Object.assign({},v.userData),b.geometry=y}let S=c[E];y.setAttribute(E,new _i(S.array,S.itemSize,S.normalized))}Lt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},hm="glTF",za=12,am={JSON:1313821514,BIN:5130562},Cu=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-za,r=new DataView(e,za),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===am.JSON){let l=new Uint8Array(e,za+a,o);this.content=n.decode(l)}else if(c===am.BIN){let l=za+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Nu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Nu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Rr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let _=f.attributes[p],g=c[p];g!==void 0&&(_.normalized=g)}u(f)},o,l,Xt,d)})})}},Iu=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Qc=class extends Jn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,_=p-l,g=-2*f+3*d,m=f-d,x=1-g,b=m-d+u;for(let y=0;y!==o;y++){let E=a[_+y+o],S=a[_+y+c]*h,v=a[p+y+o],M=a[p+y]*h;r[y]=x*E+b*S+g*v+m*M}return r}},uy=new It,Du=class extends Qc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return uy.fromArray(r).normalize().toArray(r),r}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},om={9728:Bt,9729:wt,9984:rc,9985:Mr,9986:Ms,9987:Tn},cm={33071:mn,33648:er,10497:qn},cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dy={CUBICSPLINE:void 0,LINEAR:cs,STEP:os},lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function Ts(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ni(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function py(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function my(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gy(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hu(t.attributes):e=i.indices+":"+hu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+hu(i.targets[n]);return e}function hu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function by(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xy=new qe,Uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new ms(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Aa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ps(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ts(r,o,s),ni(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(wi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=cu[s.type],o=Rr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ot(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=cu[s.type],l=Rr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,g;if(f&&f!==u){let m=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(x);b||(_=new l(o,m*f,s.count*f/h),b=new or(_,f/h),t.cache.add(x,b)),g=new cr(b,c,d%f/h,p)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),g=new Ot(_,c,p);if(s.sparse!==void 0){let m=cu.SCALAR,x=Rr[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new x(a[1],b,s.sparse.count*m),S=new l(a[2],y,s.sparse.count*c);o!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let v=0,M=E.length;v<M;v++){let P=E[v];if(g.setX(P,S[v*c]),c>=2&&g.setY(P,S[v*c+1]),c>=3&&g.setZ(P,S[v*c+2]),c>=4&&g.setW(P,S[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=om[d.magFilter]||wt,h.minFilter=om[d.minFilter]||Tn,h.wrapS=cm[d.wrapS]||qn,h.wrapT=cm[d.wrapT]||qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==wt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let m=new $t(g);m.needsUpdate=!0,f(m)}),t.load(wi.resolveURL(d,r.path),_,void 0,p)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),ni(d,a),d.userData.mimeType=a.mimeType||by(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ur,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new hr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ze}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){let u=s[at.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);let h=r.alphaMode||lu.OPAQUE;if(h===lu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new pe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qt){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ts(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return lm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=gy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=lm(new gt,l,t),l.mode===Cn.TRIANGLE_STRIP?d=d.then(f=>ou(f,Fa)):l.mode===Cn.TRIANGLE_FAN&&(d=d.then(f=>ou(f,Er))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?fy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let _=h[f],g=a[f],m,x=l[f];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0){let b=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=b&&y?new ia(_,x):new et(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Cn.LINES)m=new ra(_,x);else if(g.mode===Cn.LINE_STRIP)m=new us(_,x);else if(g.mode===Cn.LINE_LOOP)m=new aa(_,x);else if(g.mode===Cn.POINTS)m=new oa(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&my(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ni(m,r),g.extensions&&Ts(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ts(s,u[0],r),u[0];let d=new ct;r.extensions&&Ts(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt($n.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new gs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ni(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sa(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],_=f.target,g=_.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,x=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],_=u[3],g=u[4],m=[];for(let b=0,y=d.length;b<y;b++){let E=d[b],S=f[b],v=p[b],M=_[b],P=g[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let w=n._createAnimationTracks(E,S,v,M,P);if(w)for(let R=0;R<w.length;R++)m.push(w[R])}let x=new Ma(r,void 0,m);return ni(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xy)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new lr:l.length>1?h=new ct:l.length===1?h=l[0]:h=new Lt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ni(h,r),r.extensions&&Ts(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),ni(r,n),n.extensions&&Ts(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(sm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ki[r.path]===Ki.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ki[r.path]){case Ki.weights:h=Si;break;case Ki.rotation:h=Ei;break;case Ki.translation:case Ki.scale:h=Xi;break;default:switch(n.itemSize){case 1:h=Si;break;case 2:case 3:default:h=Xi;break}break}let u=s.interpolation!==void 0?dy[s.interpolation]:cs,d=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let _=new h(c[f]+"."+Ki[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Fu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ei?Du:Qc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _y(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let h=Fu(Rr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=Fu(Rr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new gn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function lm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Nu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return rt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),ni(i,e),_y(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?py(i,e.targets,t):i})}var um=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var x=new Uint8Array(m.length),b=0;b<m.length;++b){var y=m.charCodeAt(b);x[b]=y>96?y-97:y>64?y-39:y+4}for(var E=0,b=0;b<m.length;++b)x[E++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,E)}function c(m,x,b,y,E,S,v){var M=m.exports.sbrk,P=y+3&-4,w=M(P*E),R=M(S.length),L=new Uint8Array(m.exports.memory.buffer);L.set(S,R);var F=x(w,y,E,R,S.length);if(F==0&&v&&v(w,P,E),b.set(L.subarray(w,w+y*E)),M(w-M(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var x={object:new Worker(m),pending:0,requests:{}};return x.object.onmessage=function(b){var y=b.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function p(m){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),b=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(b),E=u.length;E<m;++E)u[E]=f(y);for(var E=m;E<u.length;++E)u[E].object.postMessage({});u.length=m,URL.revokeObjectURL(y)}function _(m,x,b,y,E){for(var S=u[0],v=1;v<u.length;++v)u[v].pending<S.pending&&(S=u[v]);return new Promise(function(M,P){var w=new Uint8Array(b),R=++d;S.pending+=m,S.requests[R]={resolve:M,reject:P},S.object.postMessage({id:R,count:m,size:x,source:w,mode:y,filter:E},[w.buffer])})}function g(m){var x=m.data;self.ready.then(function(b){if(!x.id)return self.close();try{var y=new Uint8Array(x.count*x.size);c(b,b.exports[x.mode],y,x.count,x.size,x.source,b.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,x,b,y,E){c(r,r.exports.meshopt_decodeVertexBuffer,m,x,b,y,r.exports[l[E]])},decodeIndexBuffer:function(m,x,b,y){c(r,r.exports.meshopt_decodeIndexBuffer,m,x,b,y)},decodeIndexSequence:function(m,x,b,y){c(r,r.exports.meshopt_decodeIndexSequence,m,x,b,y)},decodeGltfBuffer:function(m,x,b,y,E,S){c(r,r.exports[h[E]],m,x,b,y,r.exports[l[S]])},decodeGltfBufferAsync:function(m,x,b,y,E){return u.length>0?_(m,x,b,h[y],l[E]):a.then(function(){var S=new Uint8Array(m*x);return c(r,r.exports[h[y]],S,m,x,b,r.exports[l[E]]),S})}}})();var el=class extends Sa{constructor(e){super(e),this.type=pn}parse(e){let a=function(M,P){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(P||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(P||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(P||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(P||""))}},u=function(M,P,w){P=P||1024;let L=M.pos,F=-1,C=0,O="",q=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));for(;0>(F=q.indexOf(`
`))&&C<P&&L<M.byteLength;)O+=q,C+=q.length,L+=128,q=String.fromCharCode.apply(null,new Uint16Array(M.subarray(L,L+128)));return-1<F?(w!==!1&&(M.pos+=C+F+1),O+q.slice(0,F)):!1},d=function(M){let P=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,q;for((M.pos>=M.byteLength||!(O=u(M)))&&a(1,"no header found"),(q=O.match(P))||a(3,"bad initial token"),C.valid|=1,C.programtype=q[1],C.string+=O+`
`;O=u(M),O!==!1;){if(C.string+=O+`
`,O.charAt(0)==="#"){C.comments+=O+`
`;continue}if((q=O.match(w))&&(C.gamma=parseFloat(q[1])),(q=O.match(R))&&(C.exposure=parseFloat(q[1])),(q=O.match(L))&&(C.valid|=2,C.format=q[1]),(q=O.match(F))&&(C.valid|=4,C.height=parseInt(q[1],10),C.width=parseInt(q[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},f=function(M,P,w){let R=P;if(R<8||R>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);R!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*P*w);L.length||a(4,"unable to allocate buffer space");let F=0,C=0,O=4*R,q=new Uint8Array(4),N=new Uint8Array(O),j=w;for(;j>0&&C<M.byteLength;){C+4>M.byteLength&&a(1),q[0]=M[C++],q[1]=M[C++],q[2]=M[C++],q[3]=M[C++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=R)&&a(3,"bad rgbe scanline format");let B=0,H;for(;B<O&&C<M.byteLength;){H=M[C++];let ee=H>128;if(ee&&(H-=128),(H===0||B+H>O)&&a(3,"bad scanline data"),ee){let le=M[C++];for(let U=0;U<H;U++)N[B++]=le}else N.set(M.subarray(C,C+H),B),B+=H,C+=H}let G=R;for(let ee=0;ee<G;ee++){let le=0;L[F]=N[ee+le],le+=R,L[F+1]=N[ee+le],le+=R,L[F+2]=N[ee+le],le+=R,L[F+3]=N[ee+le],F+=4}j--}return L},p=function(M,P,w,R){let L=M[P+3],F=Math.pow(2,L-128)/255;w[R+0]=M[P+0]*F,w[R+1]=M[P+1]*F,w[R+2]=M[P+2]*F,w[R+3]=1},_=function(M,P,w,R){let L=M[P+3],F=Math.pow(2,L-128)/255;w[R+0]=Wi.toHalfFloat(Math.min(M[P+0]*F,65504)),w[R+1]=Wi.toHalfFloat(Math.min(M[P+1]*F,65504)),w[R+2]=Wi.toHalfFloat(Math.min(M[P+2]*F,65504)),w[R+3]=Wi.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let m=d(g),x=m.width,b=m.height,y=f(g.subarray(g.pos),x,b),E,S,v;switch(this.type){case on:v=y.length/4;let M=new Float32Array(v*4);for(let w=0;w<v;w++)p(y,w*4,M,w*4);E=M,S=on;break;case pn:v=y.length/4;let P=new Uint16Array(v*4);for(let w=0;w<v;w++)_(y,w*4,P,w*4);E=P,S=pn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:b,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:S,colorSpace:Xt,minFilter:wt,magFilter:wt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var tl=class{constructor(e,t){this.progress=e,this.event=t,this.bytes=new Map,this.jobs=new Map,this.models=new Map,this.loadedBytes=0,this.manifest=null}async init(){let e=await fetch("./game-assets.json");if(!e.ok)throw Error(`game-assets.json: HTTP ${e.status}`);this.manifest=await e.json();let[t,n,s,r]=await Promise.all([this.texture("asphalt-color.jpg",!0),this.texture("asphalt-normal.jpg"),this.texture("asphalt-rough.jpg"),this.fetch("sunset.hdr")]);this.road={color:t,normal:n,rough:s};let a=new el().parse(r);this.hdr=new jn(a.data,a.width,a.height,a.format,a.type),this.hdr.flipY=!0,this.hdr.magFilter=this.hdr.minFilter=wt,this.hdr.mapping=yr,this.hdr.colorSpace=Xt,this.hdr.needsUpdate=!0}async fetch(e){if(this.jobs.has(e))return this.jobs.get(e);let t=(async()=>{let n=this.manifest.files[e];if(!n)throw Error(`Unlisted local asset: ${e}`);this.progress(e,this.loadedBytes);let s=await fetch(new URL(n.path,document.baseURI));if(!s.ok)throw Error(`${e}: HTTP ${s.status}`);let r;if(s.body?.getReader){let a=s.body.getReader(),o=[],c=0;for(;;){let{value:h,done:u}=await a.read();if(u)break;o.push(h),c+=h.length,this.loadedBytes+=h.length,this.progress(e,this.loadedBytes)}r=new Uint8Array(c);let l=0;for(let h of o)r.set(h,l),l+=h.length}else r=new Uint8Array(await s.arrayBuffer()),this.loadedBytes+=r.length;if(r.length!==n.bytes)throw Error(`${e}: size mismatch (${r.length}/${n.bytes})`);if(crypto.subtle&&Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",r))).map(o=>o.toString(16).padStart(2,"0")).join("")!==n.sha256)throw Error(`${e}: SHA-256 mismatch`);return this.bytes.set(e,r.buffer),this.event("asset-loaded",`${e}: ${r.length} bytes`),r.buffer})();return this.jobs.set(e,t),t}async texture(e,t=!1){let n=await this.fetch(e),s=URL.createObjectURL(new Blob([n],{type:"image/jpeg"}));try{let r=await new ms().loadAsync(s);return r.wrapS=r.wrapT=qn,r.colorSpace=t?Tt:Gn,r}finally{URL.revokeObjectURL(s)}}async model(e){if(!this.models.has(e)){let t=(async()=>{let n=new Zc;n.setMeshoptDecoder(um);let{scene:s}=await n.parseAsync(await this.fetch(e),"");return s})();this.models.set(e,t)}return this.models.get(e)}};var Ga=new D;function Pn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ga.copy(e),Ga[n]=0,Ga.normalize();let l=.5*a/(a+o),h=1-Ga.angleTo(i)/c;return Math.sign(Ga[t])===1?h*l:o/(a+o)+l+l*(1-h)}var In=class i extends xn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,_=new D,g=.5/a;for(let m=0,x=0;m<u.length;m+=3,x+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),f[x+0]=Pn(_,l,"z","y",r,n),f[x+1]=1-Pn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[x+0]=1-Pn(_,l,"z","y",r,n),f[x+1]=1-Pn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[x+0]=1-Pn(_,l,"x","z",r,e),f[x+1]=Pn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-Pn(_,l,"x","z",r,e),f[x+1]=1-Pn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-Pn(_,l,"x","y",r,e),f[x+1]=1-Pn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[x+0]=Pn(_,l,"x","y",r,e),f[x+1]=1-Pn(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ji=Math.PI*2,je=(i,e,t)=>[i/255,e/255,t/255],dm=(i,e)=>i.map(t=>Math.min(1,t*e)),Ri=(i,e,t)=>i+(e-i)*t,Ou=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],il=i=>{let e=Math.hypot(...i)||1;return i.map(t=>t/e)},Bu=(i,e)=>i.map((t,n)=>t-e[n]);function sl(i,e,t,n,s=!1){let r=(o,c)=>{let l=Bu(e[Math.min(e.length-1,o+1)][c],e[Math.max(0,o-1)][c]),h=Bu(e[o][Math.min(e[o].length-1,c+1)],e[o][Math.max(0,c-1)]);return il(Ou(l,h)).map(u=>s?-u:u)},a=(o,c)=>{let l=e[o][c],h=typeof t=="function"?t(l):t;i.data.push(...l,...r(o,c),...h,n)};for(let o=0;o<e.length-1;o++)for(let c=0;c<e[o].length-1;c++)for(let[l,h]of[[o,c],[o+1,c],[o+1,c+1],[o,c],[o+1,c+1],[o,c+1]])a(l,h)}function fm(i,e,t){let n=0;for(;n<i.length-2&&e>i[n+1][0];)n++;let s=i[n],r=i[n+1],a=Math.max(0,Math.min(1,(e-s[0])/(r[0]-s[0]))),o=a*a*(3-2*a);return Ri(s[t],r[t],o)}function ii(i,e,t,n,s,r=2){let a=il(Bu(t,e)),o=il(Ou(a,Math.abs(a[1])>.9?[1,0,0]:[0,1,0])),c=il(Ou(a,o)),l=d=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,p])=>d.map((_,g)=>_+n*(o[g]*f+c[g]*p))),h=l(e),u=l(t);for(let d=0;d<4;d++){let f=(d+1)%4;i.quad(h[d],u[d],u[f],h[f],s,r)}}function nl(i,e,t,n,s,r,a=32){for(let o=0;o<a;o++){let c=o*Ji/a,l=(o+1)*Ji/a,h=(u,d)=>[e,u*Math.cos(d),u*Math.sin(d)];i.quad(h(t,c),h(n,c),h(n,l),h(t,l),s,r)}}function pm(i,e,t,n,s=!0){if(t>=2&&t!==5)return vy(i,e,t,n);let r=t;t===5&&(t=1);let a=new i,o=hn[t],c=n?1.14:1.04,l=t===0?[[-2.43,.87,.67],[-1.47,1.02,.79],[-.3,.96,.76],[1.47,1,.69],[2.43,.82,.52]]:[[-2.4,.88,.71],[-1.42,1,.8],[-.2,.95,.78],[1.43,.99,.73],[2.43,.85,.56]],h=[],u=s?52:24;for(let v=0;v<=u;v++){let M=Ri(-2.43,2.43,v/u),P=fm(l,M,1)*c,w=fm(l,M,2),R=.19,L=w;for(let C of o.wheelZ){let O=Math.abs(M-C);O<.48&&(R=Math.max(R,.44+Math.sqrt(.48*.48-O*O))),O<.57&&(L=Math.max(L,.44+Math.sqrt(.57*.57-O*O)))}let F=[-1,-1,-.96,-.82,-.56,0,.56,.82,.96,1,1];h.push(F.map((C,O)=>{let q=Math.abs(C),N=Math.max(0,(q-.55)/.45),j=O===0||O===10?R:Ri(w+.035*(1-q*q),L,N*N);return[C*P,j,M]}))}sl(a,h,v=>dm(e,.68+.32*Math.min(1,(v[1]-.15)/.65)),2);for(let v of[0,h.length-1]){let M=h[v];for(let P=1;P<M.length-2;P++)a.tri([0,.22,M[0][2]],M[P],M[P+1],e,2)}a.box(0,.18,0,1.78,.1,4.25,je(17,22,27),8);let d=t===0?[-.85,.2]:[-1.02,-.05],f=o.roof,p=[-.71,.79,-1.55],_=[.71,.79,-1.55],g=[-.64,f-.04,d[0]],m=[.64,f-.04,d[0]],x=[-.62,f,d[1]],b=[.62,f,d[1]],y=[-.78,.75,1.14],E=[.78,.75,1.14];function S(v,M,P,w,R,L,F=.025){let C=[],O=s?6:3,q=s?12:8;for(let N=0;N<=O;N++){let j=N/O,B=v.map((G,ee)=>Ri(G,w[ee],j)),H=M.map((G,ee)=>Ri(G,P[ee],j));C.push(Array.from({length:q+1},(G,ee)=>{let le=ee/q;return[Ri(B[0],H[0],le),Ri(B[1],H[1],le)+F*Math.sin(le*Math.PI),Ri(B[2],H[2],le)]}))}sl(a,C,L,R)}S(p,_,m,g,3,je(26,45,57)),S(g,m,b,x,2,e,.045),S(x,b,E,y,3,je(31,52,63)),a.quad(p,g,x,y,je(25,42,53),3),a.quad(_,E,b,m,je(25,42,53),3);for(let[v,M]of[[p,g],[_,m],[x,y],[b,E],[g,x],[m,b]])ii(a,v,M,.025,e);for(let v of[-1,1])ii(a,[v*.71,.82,-.58],[v*.64,f-.015,-.48],.021,je(16,23,29),8),a.sphere(v*1.035,.91,.42,.13,.055,.15,e,2,12,6),ii(a,[v*.77,.79,.4],[v*1.02,.89,.42],.023,je(20,28,35),8),a.box(v*.67,.57,2.429,.39,.052,.025,je(221,238,246),4),a.box(v*.68,.64,-2.435,.45,.047,.025,je(232,24,28),4),a.box(v*.67,.31,2.44,.38,.14,.025,je(13,19,24),8),a.box(v*.65,.27,-2.44,.16,.105,.04,je(88,98,108),6),a.box(v*(c*.96),.26,0,.06,.08,1.95,je(23,28,34),8),a.box(v*(c*.94),.73,-.23,.028,.027,.19,je(89,103,112),6),ii(a,[v*.39,.76,.85],[v*.33,.62,1.92],.012,dm(e,.65));if(a.box(0,.365,2.442,.85,.16,.022,je(12,18,23),8),a.box(0,.4,-2.444,1.27,.16,.022,je(17,22,27),8),a.box(0,.58,-2.45,.48,.105,.028,je(151,160,163),6),t===0)for(let v=0;v<7;v++)a.box(-.42+v*.14,.79,-1.85,.045,.018,.3,je(20,28,34),8);return r===5&&(a.box(0,.74,0,2.04,.21,2.5,je(235,239,241),2),a.box(0,1.43,-.1,1.12,.1,.33,je(33,40,48),8)),a.done()}function vy(i,e,t,n){let s=hn[t],r=new i,a=s.width+(n?.18:0),o=s.length,c=je(20,28,36),l=je(23,42,55),h=je(232,237,239);if(s.kind==="bike"){ii(r,[0,.4,-.8],[0,.72,.35],.075,je(86,99,111),6),ii(r,[0,.72,.35],[0,.43,.83],.045,je(137,151,163),6),r.sphere(0,.82,.12,.26,.22,.44,e,2,16,8),r.box(0,.85,-.42,.45,.1,.62,c,7),ii(r,[-.34,1.05,.6],[.34,1.05,.6],.03,je(110,122,132),6),r.box(0,.68,1.01,.3,.22,.06,h,4),r.box(0,.72,-1,.23,.09,.07,je(225,28,24),4),r.sphere(0,1.14,-.18,.22,.32,.23,je(41,52,69),7,12,6),r.sphere(0,1.55,.05,.22,.24,.23,e,2,16,8),r.box(0,1.58,.24,.34,.1,.04,je(20,33,44),3);for(let u of[-1,1])ii(r,[u*.17,1.2,-.08],[u*.33,1.05,.57],.055,c,7),ii(r,[u*.18,.92,-.4],[u*.28,.43,-.04],.075,c,7);return r.done()}if(r.box(0,.44,0,a*.94,.25,o*.95,c,8),s.kind==="bus"){r.box(0,1.72,0,a,2.45,o,e,2),r.box(0,2.89,0,a*.98,.13,o*.98,h,2),r.box(0,2.09,o/2+.012,a*.88,1.09,.03,l,3),r.box(0,2.17,-o/2-.012,a*.85,.88,.03,l,3);for(let u of[-1,1])for(let d=-o/2+.6;d<o/2-.4;d+=.88)r.box(u*(a/2+.013),2.22,d,.03,.92,.73,l,3);for(let u of[-1,1])r.box(u*(a/2+.02),1.25,0,.035,.16,o*.97,h,2)}else if(s.kind==="truck"){r.box(0,1.6,o*.3,a,2,o*.35,e,2),r.box(0,2.03,o*.478,a*.86,.73,.035,l,3),r.box(0,1.7,-o*.17,a*1.02,2.25,o*.58,je(204,215,220),6);for(let u=-o*.43;u<o*.1;u+=.3)for(let d of[-1,1])r.box(d*a*.515,1.7,u,.025,2,.025,je(153,167,180),6)}else{let u=s.kind==="ambulance"?h:e;r.box(0,1.62,-.37,a,2,o*.76,u,2),r.box(0,1.21,o*.35,a*.96,1.5,o*.3,u,2),r.box(0,1.69,o*.505,a*.82,.64,.025,l,3);for(let d of[-1,1]){r.box(d*a*.49,1.76,o*.31,.03,.66,.96,l,3),r.box(d*a*.505,1.28,0,.03,.22,o*.94,s.kind==="ambulance"?e:je(232,234,218),2);for(let f=-o*.37;f<o*.16;f+=.7)r.box(d*a*.505,.91,f,.035,.65,.58,je(135,150,161),6)}if(s.kind==="ambulance")for(let d of[-1,1])r.box(d*a*.508,2.03,-.62,.04,.58,.16,je(49,145,107),4),r.box(d*a*.51,2.03,-.62,.045,.16,.58,je(49,145,107),4);if(s.kind==="fire"){for(let d of[-1,1])r.box(d*.46,2.72,-.12,.09,.12,o*.86,je(153,170,185),6);for(let d=-o*.4;d<o*.38;d+=.35)r.box(0,2.72,d,.95,.07,.07,je(190,202,213),6)}r.box(0,s.roof+.025,.35,a*.67,.12,.34,c,8)}for(let u of[-1,1])r.box(u*a*.34,.74,o/2+.025,.34,.12,.035,je(225,239,242),4),r.box(u*a*.34,.74,-o/2-.025,.3,.12,.035,je(227,28,30),4),r.box(u*(a*.57),1.93,o*.38,.16,.3,.2,c,8);return r.box(0,.52,o/2+.03,a*1.02,.2,.19,je(109,124,138),6),r.done()}function ku(i,e,t=!0){let n=new i,s=t?40:20,a=[[-.165,.34],[-.15,.405],[-.11,.43],[.11,.43],[.15,.405],[.165,.34]].map(([o,c])=>Array.from({length:s+1},(l,h)=>[o,c*Math.cos(h*Ji/s),c*Math.sin(h*Ji/s)]));sl(n,a,je(25,28,31),7,!0);for(let o of[-1,1]){let c=o*.167;nl(n,c,.285,.34,je(24,27,30),7,s),nl(n,c,.258,.285,je(153,163,173),6,s),nl(n,o*.14,0,.258,je(49,55,62),6,s);let l=e===0?5:10;for(let h=0;h<l;h++){let u=h*Ji/l,d=(f,p)=>[o*.175,f*Math.cos(p),f*Math.sin(p)];n.quad(d(.07,u-.2),d(.26,u-.065),d(.26,u+.065),d(.07,u+.2),e===0?je(177,188,199):je(91,103,116),6)}nl(n,o*.18,0,.069,je(122,134,145),6,16);for(let h=0;h<(t?5:0);h++){let u=h*Ji/5;n.sphere(o*.185,.043*Math.cos(u),.043*Math.sin(u),.009,.009,.009,je(207,213,218),6,6,3)}}if(e===0)for(let o of[-.068,.068])for(let c=0;c<s;c++){let l=c*Ji/s,h=(c+1)*Ji/s,u=(d,f)=>[d,.431*Math.cos(f),.431*Math.sin(f)];n.quad(u(o-.009,l),u(o+.009,l),u(o+.009,h),u(o-.009,h),je(10,12,15),7)}return n.done()}function mm(i,e,t,n){if(n===0)return null;if(e>=2&&e!==5){let o=new i,c=hn[e],l=je(26,34,43);return c.kind==="bike"?o.box(0,n===1?.98:1.1,.72,.42,n===1?.18:.35,.09,je(35,56,72),3):(o.box(0,.34,c.length/2+.08,c.width*1.06,.13,.28,l,8),n===2&&o.box(0,c.roof+.11,-c.length*.2,c.width*.8,.21,1.1,l,8)),o.done()}let s=new i,r=t?1.19:1.08,a=je(27,33,40);s.box(0,.16,2.37,r*2,.055,.33,a,8);for(let o of[-1,1])s.box(o*r,.19,0,.08,.065,2.2,a,8);s.box(0,.18,-2.33,1.7,.16,.36,a,8);for(let o=-2;o<=2;o++)s.box(o*.25,.19,-2.44,.025,.19,.35,a,8);if(n===1)s.box(0,.79,-2.31,r*1.9,.07,.19,a,8);else{for(let c of[-1,1])ii(s,[c*.65,.72,-2.05],[c*.65,1.18,-2.15],.027,a,8);let o=[];for(let c=0;c<=4;c++){let l=-2.36+c*.09;o.push(Array.from({length:17},(h,u)=>{let d=Ri(-r,r,u/16);return[d,1.2+.022*Math.cos(c*Math.PI/4)+.035*(d/r)**2,l]}))}sl(s,o,a,8);for(let c of[-1,1])s.box(c*r,1.24,-2.18,.025,.18,.43,a,8)}return s.done()}function gm(i){i.updateMatrixWorld(!0);let e=new ct,t=[];e.name="External concept car";for(let n of["WheelFrontL","WheelFrontR","WheelRearL","WheelRearR"]){let s=i.getObjectByName(n);if(!s)throw Error(`GLB is missing wheel: ${n}`);let r=s.getWorldPosition(new D),a=new D(1,0,0).transformDirection(s.matrixWorld),o=new It().setFromAxisAngle(new D(0,1,0),Math.atan2(a.z,a.x)),c=new ct,l=new ct;c.position.copy(r),e.add(c),c.add(l),e.updateMatrixWorld(!0);for(let h of[...s.children])(/BrakePad/.test(h.name)?c:l).attach(h),h.position.applyQuaternion(o),h.quaternion.premultiply(o);s.removeFromParent(),t.push({outer:c,spin:l,front:n.startsWith("WheelFront")})}return{root:e,units:t}}function rl(i){i.updateWorldMatrix(!0,!0);let e=i.matrixWorld.clone().invert(),t=new Map,n=[];i.traverse(s=>{if(!s.isMesh||Array.isArray(s.material)||s.isSkinnedMesh)return;let r=s.geometry,a=new qe().multiplyMatrices(e,s.matrixWorld),o=new gt;for(let[c,l]of[["position",3],["normal",3],["uv",2],["uv1",2]]){let h=r.getAttribute(c),u=r.getAttribute("position").count,d=new Float32Array(u*l);if(h)for(let f=0;f<u;f++)for(let p=0;p<l;p++)d[f*l+p]=h.getComponent(f,p);o.setAttribute(c,new Ot(d,l))}r.index?o.setIndex(new Ot(new Uint32Array(r.index.array),1)):o.setIndex(Array.from({length:r.getAttribute("position").count},(c,l)=>l)),o.applyMatrix4(a),t.has(s.material)||t.set(s.material,[]),t.get(s.material).push(o),n.push(s)});for(let s of n)s.removeFromParent();for(let[s,r]of t){let a=im(r,!1);if(!a)throw Error("Could not merge rigid model parts");let o=new et(a,s);o.name=`Merged ${s.name}`,i.add(o),r.forEach(c=>c.dispose())}for(let s of new Set(n.map(r=>r.geometry)))s.dispose()}var al=Math.PI*2,ol=Array.from({length:9},(i,e)=>{let t=e===2?new Dt({metalness:.6,roughness:.25,clearcoat:1,clearcoatRoughness:.18,vertexColors:!0}):new Ze({vertexColors:!0,metalness:e===6?.85:0,roughness:e===6?.3:e===7?.82:.7});return e===3&&(t.transparent=!0,t.opacity=.55,t.depthWrite=!1,t.roughness=.08,t.metalness=.25,t.side=Ht),e===4&&(t.emissive.set(16777215),t.emissiveIntensity=.3),t.userData.shared=!0,t}),Cr=class{constructor(){this.data=[],this.count=0,this.vertices=null}tri(e,t,n,s,r=0){let a=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],o=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],c=[a[1]*o[2]-a[2]*o[1],a[2]*o[0]-a[0]*o[2],a[0]*o[1]-a[1]*o[0]],l=Math.hypot(...c)||1;c=c.map(h=>h/l);for(let[h,u]of[e,t,n].entries())this.data.push(...u,...c,...Array.isArray(s[0])?s[h]:s,r);return this}quad(e,t,n,s,r,a=0){return Array.isArray(r[0])?this.tri(e,t,n,[r[0],r[1],r[2]],a).tri(e,n,s,[r[0],r[2],r[3]],a):this.tri(e,t,n,r,a).tri(e,n,s,r,a)}box(e,t,n,s,r,a,o,c=0){let l=e-s/2,h=e+s/2,u=t-r/2,d=t+r/2,f=n-a/2,p=n+a/2;return this.quad([l,u,f],[l,d,f],[h,d,f],[h,u,f],o,c),this.quad([h,u,p],[h,d,p],[l,d,p],[l,u,p],o,c),this.quad([l,u,p],[l,d,p],[l,d,f],[l,u,f],o,c),this.quad([h,u,f],[h,d,f],[h,d,p],[h,u,p],o,c),this.quad([l,d,f],[l,d,p],[h,d,p],[h,d,f],o,c),this.quad([l,u,p],[l,u,f],[h,u,f],[h,u,p],o,c),this}cylinder(e,t,n,s,r,a,o=0,c=9){for(let l=0;l<c;l++){let h=l*al/c,u=(l+1)*al/c,d=[e+s*Math.cos(h),t,n+s*Math.sin(h)],f=[e+s*Math.cos(u),t,n+s*Math.sin(u)],p=[d[0],t+r,d[2]],_=[f[0],t+r,f[2]];this.quad(d,p,_,f,a,o),this.tri([e,t+r,n],_,p,a,o)}return this}sphere(e,t,n,s,r,a,o,c=0,l=9,h=5){for(let u=0;u<h;u++){let d=Math.PI*u/h,f=Math.PI*(u+1)/h;for(let p=0;p<l;p++){let _=p*al/l,g=(p+1)*al/l,m=(x,b)=>[e+s*Math.sin(x)*Math.cos(b),t+r*Math.cos(x),n+a*Math.sin(x)*Math.sin(b)];this.quad(m(d,_),m(d,g),m(f,g),m(f,_),o,c)}}return this}done(){this.count=this.data.length/10,this.bytes=this.data.length*4;let e=new Map;for(let t=0;t<this.data.length;t+=10){let n=this.data[t+9];e.has(n)||e.set(n,[]),e.get(n).push(...this.data.slice(t,t+10))}this.object=new ct;for(let[t,n]of e){if(t===9)continue;let s=[],r=[],a=[],o=[];for(let h=0;h<n.length;h+=10){s.push(...n.slice(h,h+3)),r.push(...n.slice(h+3,h+6));let u=new ze().setRGB(n[h+6],n[h+7],n[h+8],Tt);a.push(u.r,u.g,u.b),o.push(n[h]/2,n[h+2]/2)}let c=new gt;c.setAttribute("position",new Qe(s,3)),c.setAttribute("normal",new Qe(r,3)),c.setAttribute("color",new Qe(a,3)),c.setAttribute("uv",new Qe(o,2));let l=new et(c,ol[t]||ol[0]);l.castShadow=!0,l.receiveShadow=!0,this.object.add(l)}return this.data=[],this}dispose(){this.object?.traverse(e=>e.geometry?.dispose())}},ws=class extends Cr{box(e,t,n,s,r,a,o,c=0){if(Math.min(s,r,a)<.09)return super.box(e,t,n,s,r,a,o,c);let l=new In(s,r,a,2,Math.min(.1,s*.1,r*.1,a*.1));l.index&&(l=l.toNonIndexed()),l.translate(e,t,n);let h=l.getAttribute("position"),u=l.getAttribute("normal");for(let d=0;d<h.count;d++)this.data.push(h.getX(d),h.getY(d),h.getZ(d),u.getX(d),u.getY(d),u.getZ(d),...o,c);return l.dispose(),this}sphere(e,t,n,s,r,a,o,c=0,l=16,h=8){let u=new yi(1,Math.max(20,l),Math.max(12,h)).toNonIndexed();u.scale(s,r,a),u.translate(e,t,n);let d=u.getAttribute("position"),f=u.getAttribute("normal");for(let p=0;p<d.count;p++)this.data.push(d.getX(p),d.getY(p),d.getZ(p),f.getX(p),f.getY(p),f.getZ(p),...o,c);return u.dispose(),this}};function Pr(i,{textures:e=!1,keepShared:t=!1}={}){let n=new Set,s=new Set,r=new Set;i.traverse(a=>{a.isInstancedMesh&&a.dispose(),a.geometry&&!(t&&a.geometry.userData.shared)&&n.add(a.geometry);for(let o of[].concat(a.material||[]))if((!o.userData.shared||e)&&s.add(o),e)for(let c of Object.values(o))c?.isTexture&&r.add(c)}),n.forEach(a=>a.dispose()),s.forEach(a=>a.dispose()),r.forEach(a=>a.dispose())}var zu=[14953769,1795786,16299033,2397810],yy=i=>{let e=new ze(zu[i]).getRGB(new ze,Tt);return[e.r,e.g,e.b]};function My(i,e,t=!1){let n=ut(i),s=new ct,r=n.width+(t?.18:0),a=n.length,o=new Dt({color:zu[e],metalness:.5,roughness:.26,clearcoat:1,clearcoatRoughness:.18}),c=new Dt({color:15066844,metalness:.25,roughness:.3,clearcoat:.7}),l=new Ze({color:1515044,roughness:.7}),h=new Ze({color:10463402,metalness:.9,roughness:.28}),u=new Dt({color:7642281,metalness:.12,roughness:.09,transparent:!0,opacity:.42,depthWrite:!1,side:Ht}),d=new Qt({color:15213348}),f=new Qt({color:15986904}),p=n.kind==="ambulance"?c:o;function _(x,b,y,E,S,v,M=p,P=!0){let w=P&&Math.min(E,S,v)>.085?new In(E,S,v,2,Math.min(.1,E*.12,S*.12,v*.12)):new xn(E,S,v),R=new et(w,M);return R.position.set(x,b,y),s.add(R),R}let g=(x,b,y,E=h)=>{let S=new D(...b).sub(new D(...x)),v=new et(new Bn(y,y,S.length(),12),E);v.position.fromArray(x).addScaledVector(S,.5),v.quaternion.setFromUnitVectors(new D(0,1,0),S.normalize()),s.add(v)};function m(x,b=-a/2,y=a/2,E=1.5){let S=new fr;S.moveTo(b,.42);for(let P of n.wheelZ.filter(w=>w>b+n.radius&&w<y-n.radius).sort((w,R)=>w-R)){let w=n.radius+.09;S.lineTo(P-w,.42),S.lineTo(P-w,n.radius),S.absarc(P,n.radius,w,Math.PI,0,!0),S.lineTo(P+w,.42)}S.lineTo(y,.42),S.lineTo(y,E),S.lineTo(b,E),S.closePath();let v=new _a(S,{depth:.08,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1,curveSegments:16}),M=new et(v,p);M.rotation.y=-Math.PI/2,M.position.x=x*r/2+(x>0,.04),s.add(M)}if(_(0,.43,0,r*.86,.2,a*.96,l),n.kind==="bus"){for(let x of[-1,1]){m(x,-a/2,a/2,1.55),_(x*r/2,1.64,0,.08,.12,a,c),_(x*r/2,2.83,0,.08,.16,a,p);for(let b=-a/2+.5;b<a/2-.3;b+=.86)_(x*r/2,2.22,b,.035,1.08,.72,u,!1),_(x*r/2,2.22,b+.42,.075,1.16,.075,l,!1),_(x*r*.3,1.05,b,.4,.45,.44,l),_(x*r*.3,1.35,b-.12,.42,.5,.12,l);_(x*(r/2+.015),1.24,0,.05,.14,a*.98,c,!1)}_(0,2.94,0,r+.02,.18,a,c),_(0,2.19,a/2-.02,r*.9,1.12,.05,u,!1),_(0,2.19,-a/2,r*.9,1.1,.05,u,!1),_(0,1.1,a/2,r,.9,.16,p),_(0,1.1,-a/2,r,.9,.16,p),_(0,2.72,a/2+.035,1.35,.22,.045,l,!1);for(let x of[-.6,-.3,0,.3,.6])_(x,2.72,a/2+.061,.18,.05,.02,f,!1);for(let x of[-1,1])_(x*(r/2+.04),1.97,a*.25,.04,1.2,.92,u,!1);_(0,3.06,-.7,r*.65,.15,1.65,h)}else{let x=n.kind==="truck"?a*.12:a*.04,b=a/2-.08;for(let y of[-1,1])m(y,x,b,1.45),_(y*r*.48,1.94,(x+b)/2,.035,.91,b-x-.18,u,!1),_(y*r*.48,2.43,(x+b)/2,.12,.12,b-x,p),_(y*r*.48,1.94,x+.07,.12,1,.12,p),_(y*r*.48,1.94,b-.02,.13,1,.12,p),_(y*r*.47,1.3,x+.4,.055,.04,.28,h,!1),g([y*r*.46,1.95,b-.2],[y*r*.62,1.95,b-.15],.03),_(y*r*.62,1.9,b-.15,.14,.34,.2,l);_(0,2.48,(x+b)/2,r,.18,b-x+.12,p),_(0,1.94,b,r*.88,.92,.04,u,!1),_(0,1.13,b,r,.62,.24,p),_(0,1.05,b+.135,r*.5,.27,.03,l,!1);for(let y of[.96,1.04,1.12])_(0,y,b+.155,r*.48,.02,.025,h,!1);_(0,.73,b+.16,r*.96,.18,.2,h),_(0,1.55,x+.07,r*.8,.1,.4,l);for(let y of[-1,1]){_(y*r*.25,1.05,(x+b)/2,.52,.4,.5,l),_(y*r*.25,1.35,(x+b)/2-.12,.52,.55,.15,l);let E=-a/2;m(y,E,x-.08,1.5)}if(n.kind==="truck"){_(0,1.78,-a*.2,r*1.01,2.24,a*.59,h);for(let y of[-1,1])for(let E=-a*.48;E<a*.08;E+=.22)_(y*r*.513,1.78,E,.025,2.03,.028,c,!1);for(let y of[-r*.25,r*.25])_(y,1.78,-a*.5-.035,r*.48,2.1,.04,c,!1),g([y,1.05,-a*.5-.065],[y,2.55,-a*.5-.065],.018)}else{_(0,2.07,-a*.23,r,1.22,a*.54,p),_(0,2.69,-a*.23,r,.15,a*.54,c);for(let y of[-1,1])if(_(y*r*.51,1.34,-a*.22,.045,.18,a*.58,n.kind==="ambulance"?o:c,!1),n.kind==="ambulance"){let E=new Ze({color:3052138,roughness:.4});_(y*r*.512,2.13,-.7,.025,.56,.18,E,!1),_(y*r*.514,2.13,-.7,.025,.18,.58,E,!1),_(y*r*.51,2.24,-a*.35,.03,.43,.72,u,!1)}else for(let E=-a*.38;E<a*.04;E+=.85){_(y*r*.51,1.92,E,.04,.9,.73,h,!1);for(let S=1.55;S<2.4;S+=.09)_(y*r*.518,S,E,.02,.018,.7,l,!1)}if(n.kind==="fire"){for(let y of[-1,1])g([y*.48,2.85,-a*.44],[y*.48,2.85,a*.36],.05);for(let y=-a*.42;y<a*.35;y+=.3)g([-.48,2.85,y],[.48,2.85,y],.026);for(let y of[-1,1])_(y*r*.54,.94,-a*.32,.16,.28,.65,h)}}}for(let x of[-1,1])_(x*r*.34,.91,a/2+.03,.35,.14,.04,f,!1),_(x*r*.34,.8,-a/2-.03,.3,.13,.04,d,!1);return _(0,.98,-a/2-.015,r*.96,1.05,.12,p),_(0,.52,-a/2-.08,r*.98,.16,.2,h),s.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!1)}),rl(s),s}var cl=class{constructor(e){this.assets=e,this.templates=new Map}async load(e){if(this.templates.has(`${e}:0`))return;let t=await this.assets.model(e);for(let n of[0,1,5]){let s=t.clone(!0);if(n===1)for(let o of["BodyRoofPanel","BodyWindowsRearSides","BodyRearwindow","BodyDoorRWindow","BodyDoorLWindow","BodyDoorRWindowGasket","BodyDoorLWindowGasket"])s.getObjectByName(o)?.removeFromParent();let{root:r,units:a}=gm(s);for(let o of a)rl(o.spin);rl(s),s.position.y=.004,r.add(s);for(let[o,c]of a.sort((l,h)=>l.outer.position.z-h.outer.position.z||l.outer.position.x-h.outer.position.x).entries())c.outer.name=`axle-${o}`,c.spin.name=`roll-${o}`;r.traverse(o=>{if(o.geometry&&(o.geometry.userData.shared=!0),!!o.isMesh){o.castShadow=!0,o.receiveShadow=!1;for(let c of[].concat(o.material))c.userData.shared=!0,c.name?.startsWith("Paint 1")&&(c.clearcoat=1,c.clearcoatRoughness=.18,c.normalScale?.set(.1,.1)),c.name==="Glass"&&(c.transmission=0,c.transparent=!0,c.opacity=.35,c.depthWrite=!1,c.roughness=.06)}}),this.templates.set(`${e}:${n}`,r)}}create(e,t,n=!1){let s=ut(e.model),r=new ct,a=new ct,o=[],c=[];r.add(a);let l=[0,1,5].includes(e.model);if(l){let h=this.templates.get(`${n?"concept-rival.glb":t}:${e.model}`).clone(!0);r.add(h),h.traverse(u=>{u.isMesh&&u.material.name==="Paint 1 Carmine"&&(u.material=u.material.clone(),u.material.userData={},u.material.color.set(zu[e.color]))});for(let u=0;u<4;u++){let d=h.getObjectByName(`axle-${u}`),f=h.getObjectByName(`roll-${u}`),p=d.position.z>0,_=d.position.clone();if(e.parts.tyres===1){for(let m of[...f.children])f.remove(m);let g=ku(Cr,1,!n).object;g.scale.setScalar(s.radius/.43),f.add(g)}o.push({outer:d,spin:f,front:p,rest:_})}if(h.scale.x=e.parts.body?1.1:1,a.add(...h.children.filter(u=>!u.name.startsWith("axle-")).slice()),a.scale.x=e.parts.body?1.1:1,e.model===5){let u=new Ze({color:14935775,metalness:.3,roughness:.3});for(let d of[-1,1]){let f=new et(new In(.035,.16,1.3,2,.015),u);f.position.set(d*1.03,.72,-.05),a.add(f)}}}else{let h=[1,4,5].includes(e.model)?pm(ws,yy(e.color),e.model,e.parts.body,!n).object:My(e.model,e.color,!!e.parts.body);a.add(h);let u=ku(Cr,e.parts.tyres,!n).object;for(let d of ai(e.model,e.parts.body)){let f=new ct,p=new ct,_=u.clone(!0);_.scale.setScalar(s.radius/.43),p.add(_),f.add(p),f.position.set(d.x,s.radius+.01,d.z),r.add(f),o.push({outer:f,spin:p,front:d.z>0,rest:f.position.clone()})}}if(l&&e.parts.aero){let h=new Ze({color:1514784,metalness:.25,roughness:.48}),u=(d,f,p,_,g,m)=>{let x=new et(new In(_,g,m,2,Math.min(.025,g*.4,_*.4,m*.4)),h);x.position.set(d,f,p),a.add(x)};u(0,.17,2.29,1.72,.035,.19),u(0,.21,-2.2,1.7,.05,.25);for(let d of[-1,1])u(d*1.025,.25,-.04,.055,.055,2.5);if(e.parts.aero===2){u(0,1.1,-1.94,1.86,.06,.35);for(let d of[-1,1])u(d*.94,1.14,-1.94,.025,.23,.38),u(d*.52,.87,-1.94,.055,.43,.07)}}else{let h=mm(ws,e.model,e.parts.body,e.parts.aero);h&&a.add(h.object)}if(s.emergency){let h=new Ze({color:1910836,roughness:.25}),u=new et(new In(s.width*.6,.13,.3,2,.04),h);u.position.set(0,s.roof+.04,0),a.add(u);for(let d of[-1,1]){let f=new Ze({color:d<0?15278883:1534719,emissive:d<0?16716049:1137663,emissiveIntensity:.02,metalness:.15,roughness:.18}),p=new et(new In(.3,.13,.28,2,.035),f);p.position.set(d*.38,s.roof+.11,0),a.add(p),c.push(p)}}return r.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!1)}),{root:r,body:a,wheels:o,lights:c,external:l,setup:JSON.parse(JSON.stringify(e)),modelName:l?n?"concept-rival.glb":t:`original-${s.kind}`}}animate(e,t,n=!1){let s=ut(e.setup.model),r=s.kind==="bike"?-2.1:1;e.body.rotation.z=n?0:(t.roll||0)*r,e.body.rotation.x=n?0:t.pitch||0;for(let[a,o]of e.wheels.entries()){let c=t.flatVisual?.[a]||0,l=1-c*.45;o.spin.rotation.x=t.wheelAngle||0,o.outer.rotation.y=o.front?-(t.motionSteer||0)*.035:0,o.outer.scale.y=l,o.outer.position.y=o.rest.y-s.radius*(1-l)}for(let[a,o]of e.lights.entries())o.material.emissiveIntensity=t.siren&&t.phase==="race"&&(Math.floor(t.time*5)+a)%2===0?2:.02}dispose(e){e&&Pr(e.root,{keepShared:!0})}};var Rt=(i,e,t)=>[i/255,e/255,t/255];function bm(i){let e=new i,t=24,n=8;for(let f=0;f<t;f++)for(let p=0;p<n;p++){let _=(g,m)=>{let x=.51+.14*Math.cos(m);return[x*Math.cos(g),.17+.14*Math.sin(m),x*Math.sin(g)]};e.quad(_(f*Math.PI*2/t,p*Math.PI*2/n),_((f+1)*Math.PI*2/t,p*Math.PI*2/n),_((f+1)*Math.PI*2/t,(p+1)*Math.PI*2/n),_(f*Math.PI*2/t,(p+1)*Math.PI*2/n),Rt(23,27,31),7)}e.done();let s=new i().sphere(0,.55,0,.85,.62,.76,Rt(128,132,129),0,9,5).done(),r=new i().box(0,.65,0,1.3,1.3,1.3,Rt(153,102,62));for(let f of[.13,1.16])r.box(0,f,.66,1.35,.1,.05,Rt(104,68,43));for(let f of[-.54,.54])r.box(f,.65,.68,.12,1.28,.06,Rt(196,145,90));r.done();let a=new i;for(let f of[-1,1])a.box(f*.8,.4,0,.12,.8,.12,Rt(109,125,139),6),a.box(f*.8,.08,0,.52,.12,.55,Rt(39,46,54),7);for(let f=0;f<8;f++)a.box(-.96+f*.275,.83,0,.275,.45,.13,f%2?Rt(233,235,222):Rt(222,72,39),0);a.done();let o=[Rt(237,177,55),Rt(63,139,177),Rt(129,176,111)].map(f=>new i().box(0,0,0,.39,.53,.24,f).done()),c=[Rt(218,173,133),Rt(153,102,72),Rt(102,75,55)].map(f=>{let p=new i().sphere(0,0,0,.18,.21,.18,f,0,10,6);for(let _ of[-1,1])p.box(_*.065,.04,.171,.025,.025,.02,Rt(29,31,35));return p.done()}),l=new i().box(0,-.2,0,.14,.4,.15,Rt(45,56,74)).box(0,-.42,.035,.17,.1,.24,Rt(37,43,50),7).done(),h=new i().box(0,-.18,0,.11,.36,.12,Rt(225,186,148)).done(),u=new i().box(0,.9,0,.14,1.15,.15,Rt(199,219,226),6).box(-.17,1.5,0,.15,.42,.15,Rt(199,219,226),6).box(.17,1.5,0,.15,.42,.15,Rt(199,219,226),6).box(0,1.34,0,.4,.14,.15,Rt(199,219,226),6).done(),d=new i().sphere(0,0,0,.26,.26,.26,Rt(255,190,46),4,8,4).done();return{obstacles:{tyre:e,rock:s,crate:r,barrier:a},shirts:o,heads:c,leg:l,arm:h,wrench:u,warning:d}}var Sy=mt("C01");function xm(i,e=Sy,{game:t=!1,serviceGap:n=()=>!1,sceneryClear:s=()=>!0}={}){let r=e,a=U=>t&&r.repairFractions.some(X=>Math.abs((U-X*r.length+r.length*1.5)%r.length-r.length/2)<31),o=new ct;o.name="C01 \u2014 full closed circuit";let c=new Ze({map:i.color,normalMap:i.normal,roughnessMap:i.rough,normalScale:new pe(.3,.3),roughness:1,metalness:0}),l=new Ze({color:6318155,roughness:1,vertexColors:!0}),h=new Ze({color:14933971,roughness:.85}),u=new Ze({color:9710883,roughness:.8}),d=new Ze({color:10263956,roughness:.96}),f=new Ze({color:8752529,metalness:.8,roughness:.36}),p=new Ze({color:2699058,metalness:.4,roughness:.52}),_=new Ze({color:3494235,metalness:.35,roughness:.18}),g=new xn(1,1,1),m=(U,X,te,ce=0)=>{let ae=dt(r,X,te);return U.position.set(ae.x,ae.y+ce,ae.z),U.rotation.y=ae.yaw,U};function x(U,X,te,ce,ae,xe,Ve){if(!s(dt(r,U,X),Math.max(ce,xe)/2+4))return;let de=m(new et(g,Ve),U,X,te);return de.scale.set(ce,ae,xe),de.receiveShadow=!0,o.add(de),de}function b(U,X,te,ce,ae,xe){let Ve=Math.max(1,Math.ceil((X-U)/2)),de=[],De=[],Ue=[];for(let he=0;he<=Ve;he++){let be=U+(X-U)*he/Ve;for(let _e of[te,ce]){let Xe=dt(r,be,_e);de.push(Xe.x,Xe.y+ae,Xe.z),De.push((_e+r.halfWidth)/2,be/2)}}for(let he=0;he<Ve;he++){let be=he*2;Ue.push(be,be+1,be+2,be+1,be+3,be+2)}let Z=new gt;Z.setAttribute("position",new Qe(de,3)),Z.setAttribute("uv",new Qe(De,2)),Z.setIndex(Ue),Z.computeVertexNormals();let ue=new et(Z,xe);return ue.receiveShadow=!0,o.add(ue),ue}for(let U=0;U<r.length;U+=70){b(U,Math.min(U+70,r.length),-r.halfWidth,r.halfWidth,.003,c);for(let X of[-1,1])b(U,Math.min(U+70,r.length),X*(r.halfWidth-.35)-.07,X*(r.halfWidth-.35)+.07,.009,h)}let y=new an(g,h,Math.ceil(r.length/2)*2),E=[],S=new qe,v=new It,M=new D(.7,.085,1.98),P=new D(0,1,0),w=0;for(let U=1;U<r.length;U+=2)for(let X of[-1,1]){if(n(U,X))continue;let te=dt(r,U,X*(r.halfWidth+.12));v.setFromAxisAngle(P,te.yaw),S.compose(new D(te.x,te.y+.035,te.z),v,M),y.setMatrixAt(w++,S),Math.floor(U/2)%2===0&&E.push(S.clone())}y.count=w,y.receiveShadow=!0,o.add(y);let R=new an(g,u,E.length);E.forEach((U,X)=>R.setMatrixAt(X,U)),R.receiveShadow=!0,o.add(R);let L=new Ze({color:1118223,transparent:!0,opacity:.19,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(let U of[270,490,720,1060])for(let X of[-1,1])b(U,U+70,X*1.2-.1,X*1.2+.1,.013,L);let F=new an(g,f,Math.ceil(r.length/8)*2);w=0;let C=[],O=[];for(let U of[-1,1]){for(let X=0;X<r.length;X+=4){if(a(X)||n(X,U))continue;let te=C.length/3;for(let ce of[X,Math.min(X+4,r.length)])for(let ae of[.58,.69,.79,.9]){let xe=dt(r,ce,U*(r.halfWidth+1.4+(ae===.69||ae===.79?.07:0)));C.push(xe.x,xe.y+ae,xe.z)}for(let ce=0;ce<3;ce++){let ae=te+ce;O.push(ae,ae+4,ae+1,ae+1,ae+4,ae+5)}}for(let X=0;X<r.length;X+=8){if(a(X)||n(X,U))continue;let te=dt(r,X,U*(r.halfWidth+1.5));v.setFromAxisAngle(P,te.yaw),S.compose(new D(te.x,te.y+.45,te.z),v,new D(.12,.9,.16)),F.setMatrixAt(w++,S)}}F.count=w;let q=new gt;q.setAttribute("position",new Qe(C,3)),q.setIndex(O),q.computeVertexNormals();let N=f.clone();N.side=Ht,o.add(new et(q,N),F);let j=new fs(2800,2800,44,44);j.rotateX(-Math.PI/2);let B=[],H=j.getAttribute("position");for(let U=0;U<H.count;U++){let X=H.getX(U),te=H.getZ(U),ce=.84+.12*Math.sin(X*.047)*Math.cos(te*.039)+.05*Math.sin(X*.32+te*.1);B.push(ce,ce,ce),H.setY(U,t&&r.id==="C02"?-4:-.09)}j.setAttribute("color",new Qe(B,3)),j.computeVertexNormals();let G=new et(j,l);G.receiveShadow=!0,o.add(G);for(let U=0;U<7;U++){let X=65+U*15;x(X,24,2.5,13,5,13,d),x(X,24,5.25,15,.45,14,p),x(X,17.47,1.75,.08,3.2,10,p),x(X,17.4,3.95,.1,1.05,10,_);for(let te=0;te<9;te++)x(X,17.38,.35+te*.29,.04,.025,9.5,f);x(X,17,5.35,.2,.25,13,u)}b(40,180,r.halfWidth+1.7,32,.001,d),b(40,180,r.halfWidth+2.5,r.halfWidth+2.62,.009,h);for(let U=0;U<6;U++)for(let X=0;X<4;X++)x(390+U*9,-25-X*2,.45+X*.8,1.8,.25,8,d),x(390+U*9,-25-X*2,.7+X*.8,1.2,.3,7.6,X%2?u:p);for(let U=0;U<4;U++)x(1050+U*35,-33,3.1,8,6.2,14,d);let ee=new Map;for(let U of[...o.children])U.isMesh&&!U.isInstancedMesh&&U.geometry===g&&(U.updateMatrix(),ee.has(U.material)||ee.set(U.material,[]),ee.get(U.material).push(U.matrix.clone()),o.remove(U));for(let[U,X]of ee){let te=new an(g,U,X.length);X.forEach((ce,ae)=>te.setMatrixAt(ae,ce)),te.receiveShadow=!0,o.add(te)}let le=dt(r,0);return{root:o,road:c,center:le}}var Ey=new D(0,1,0),Ci=(i,e,t)=>new D(i.x,i.y,i.z).lerp(new D(e.x,e.y,e.z),t),Gu=new WeakMap;function Hu(i,e){Gu.has(i)||Gu.set(i,Object.values(i.edges).filter(n=>!n.main).flatMap(n=>{let s=Math.ceil(n.length/6);return Array.from({length:s+1},(r,a)=>vt(n,n.length*a/s))}));let t=1/0;for(let n of Gu.get(i))t=Math.min(t,Math.hypot(e.x-n.x,e.z-n.z));return t}function _m(i,e){let t=new ct;t.name="Emergency service roads";let n=B=>new Ze({color:B,roughness:.72,metalness:.08}),s=n(15265e3),r=n(9344653),a=n(3767733),o=n(15243956),c=new Dt({color:3629683,roughness:.15,metalness:.25,clearcoat:.6}),l=n(3710064),h=n(2438722),u=n(15054155),d=new Ze({map:i.color,normalMap:i.normal,roughnessMap:i.rough,normalScale:new pe(.3,.3),roughness:1}),f=new In(1,1,1,2,.06),p=new yi(1,12,8),_=new Bn(1,1,1,10);function g(B,H,G,ee,le,U,X,te){let ce=new et(f,te);return ce.position.set(H,G,ee),ce.scale.set(le,U,X),ce.castShadow=!0,ce.receiveShadow=!0,B.add(ce),ce}function m(B,H,G,ee,le){let U=Math.ceil(B.length/3),X=[],te=[],ce=[];for(let Ve=0;Ve<=U;Ve++)for(let de of[H,G]){let De=vt(B,B.length*Ve/U,de);X.push(De.x,De.y+ee,De.z),te.push((de+B.width)/2,B.length*Ve/U/2)}for(let Ve=0;Ve<U;Ve++){let de=Ve*2;ce.push(de,de+1,de+2,de+1,de+3,de+2)}let ae=new gt;ae.setAttribute("position",new Qe(X,3)),ae.setAttribute("uv",new Qe(te,2)),ae.setIndex(ce),ae.computeVertexNormals();let xe=new et(ae,le);xe.name="service-road-"+B.id,xe.receiveShadow=!0,t.add(xe)}for(let B of Object.values(e.edges))if(!B.main){m(B,-B.width-2,B.width+2,-.13,r),m(B,-B.width,B.width,.016,d);for(let H of[-1,1])m(B,H*(B.width-.5)-.08,H*(B.width-.5)+.08,.025,s);if(e.courseId==="C02")for(let H=12;H<B.length;H+=24){let G=vt(B,H);g(t,G.x,(G.y-4)/2,G.z,.8,G.y+4,.8,r)}}let x=e.sites.map(B=>{let H=vt(e.edges[B.scene.edge],B.scene.d),G=new ct;if(G.position.set(H.x-H.tz*18,H.y,H.z+H.tx*18),G.rotation.y=H.yaw-Math.PI/2,t.add(G),g(G,0,.05,0,28,.2,23,r),e.courseId==="C02")for(let U of[-11,11])for(let X of[-8,8])g(G,U,-(H.y+4)/2,X,.8,H.y+4,.8,r);g(G,0,3.8,0,13,7.6,10,s),g(G,0,7.8,0,13.8,.35,10.8,h),g(G,0,1.6,-5.08,2.1,3.2,.12,a);for(let U of[-4,0,4])for(let X of[2.5,5.5])(U||X>3)&&g(G,U,X,-5.1,2,1.5,.12,c);let ee=[];for(let U=0;U<3;U++){let X=new ct;X.position.set((U-1)*3.8,2.9+(U===1?2.8:0),-5.6);for(let[te,ce,ae]of[[1.05,2.4,14962972],[.72,1.8,16750631],[.38,1.3,16772483]]){let xe=new et(new va([new pe(0,0),new pe(te*.7,ce*.12),new pe(te,ce*.28),new pe(te*.55,ce*.62),new pe(0,ce)],12),new Qt({color:ae,transparent:!0,opacity:.93,depthWrite:!1}));xe.position.z=-(1.05-te)*.85,X.add(xe)}G.add(X),ee.push(X)}let le=new ct;le.position.set(H.x,H.y+.04,H.z),le.rotation.y=H.yaw,g(le,0,0,0,9,.025,12,l);for(let U of[-1,1])g(le,U*4.2,.025,0,.15,.03,11,s);return t.add(le),{group:G,flames:ee,pad:le,pose:H}}),b=e.hospitals.map(B=>{let H=vt(e.edges[B.edge],B.d),G=new ct,ee=B.id==="hospital-0"?a:o;if(G.position.set(H.x-H.tz*19,H.y,H.z+H.tx*19),G.rotation.y=H.yaw-Math.PI/2,t.add(G),g(G,0,.03,0,31,.15,23,r),e.courseId==="C02")for(let U of[-13,13])for(let X of[-8,8])g(G,U,-(H.y+4)/2,X,.8,H.y+4,.8,r);g(G,0,4,0,18,8,12,s),g(G,0,8.2,0,18.8,.5,12.8,ee),g(G,0,1.8,-6.1,3.6,3.6,.15,c);for(let U of[-6,-3,3,6])for(let X of[2.5,5.8])g(G,U,X,-6.12,1.6,1.6,.14,c);g(G,0,6.3,-6.25,2.1,2.1,.18,ee),g(G,0,6.3,-6.4,1.4,.35,.06,s),g(G,0,6.3,-6.4,.35,1.4,.06,s);let le=new ct;return le.position.set(H.x,H.y+.04,H.z),le.rotation.y=H.yaw,g(le,0,0,0,9,.03,12,ee),t.add(le),{group:G,pose:H}});t.updateMatrixWorld(!0);let y=new Map;t.traverse(B=>{B.isMesh&&B.geometry===f&&(y.has(B.material)||y.set(B.material,[]),y.get(B.material).push(B))});for(let[B,H]of y){let G=new an(f,B,H.length);H.forEach((ee,le)=>{G.setMatrixAt(le,ee.matrixWorld),ee.removeFromParent()}),G.castShadow=G.receiveShadow=!0,t.add(G)}function E(B){let H=new ct,G=n(B),ee=n(15317905),le=[];g(H,0,1.05,0,.52,.64,.32,G);let U=new et(p,ee);U.scale.setScalar(.23),U.position.y=1.62,H.add(U);for(let X of[-1,1])for(let te of[!1,!0]){let ce=new ct,ae=new et(_,te?G:h);ae.scale.set(.09,te?.54:.62,.09),ae.position.y=-(te?.27:.31),ce.position.set(X*(te?.35:.15),te?1.28:.76,0),ce.add(ae),H.add(ce),le.push(ce)}return t.add(H),{root:H,limbs:le}}let S=E(4361610),v=E(9288548),M=E(3498382),P=E(14921553),w=new an(_,new Ze({color:8968703,roughness:.12,transparent:!0,opacity:.8}),20);w.instanceMatrix.setUsage(Wc),t.add(w);let R=new an(p,new Qt({color:13037823,transparent:!0,opacity:.7}),24);R.instanceMatrix.setUsage(Wc),t.add(R);let L=new qe,F=new It,C=[],O=new Set(["FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"]);function q(B,H){let G=B.missions?.active,ee=Li(B);C=[],w.visible=R.visible=!1;for(let de of[S,v,M,P])de.root.visible=!1;for(let[de,De]of x.entries())for(let[Ue,Z]of De.flames.entries()){let ue=G?.kind==="fire"&&G.site===de&&G.fires[Ue]>0;if(Z.visible=ue,ue){let he=Math.max(.02,G.fires[Ue]/2.5);Z.scale.set(he,he*(1+Math.sin(B.time*9+Ue)*.06),he),G.stage==="FIRE_ACTION"&&C.push({id:"fire-"+Ue,label:"\u3072\u3092 \u306A\u304C\u304A\u3057",point:Z.getWorldPosition(new D).add(new D(0,.7,0))})}}if(!G)return;let le=G.stage==="HANDOFF"||G.stage==="SUCCESS"&&G.kind==="ambulance",U=le?b[G.hospital]:x[G.site],X=U.group.position.clone(),te=U.pose,ce={x:X.x+te.tz*6,y:te.y+.05,z:X.z-te.tx*6},ae={x:X.x+te.tz*4,y:te.y+.05,z:X.z-te.tx*4},xe={x:ee.x-ee.tz*2,y:ee.y+.05,z:ee.z+ee.tx*2};function Ve(de,De,Ue=!0){de.root.visible=!0,de.root.position.copy(De),de.root.rotation.y=Math.atan2(ce.x-xe.x,ce.z-xe.z),de.limbs.forEach((Z,ue)=>Z.rotation.x=Ue?Math.sin(B.time*7)*(ue%2?-.55:.55):0)}if(G.kind==="ambulance"){if(G.stage==="PATIENT_WAIT"&&(Ve(v,Ci(ce,ce,0),!1),C.push({id:"patient",label:"\u3072\u3068\u3092 \u30BF\u30C3\u30C1",point:v.root.position.clone().add(new D(0,1,0))})),G.stage==="BOARDING"){let de=G.animation/5;Ve(S,Ci(xe,ce,Math.min(1,de/.45))),de>.45?(Ve(S,Ci(ce,xe,(de-.45)/.55)),Ve(v,Ci(ce,xe,(de-.45)/.55)),v.root.position.x+=te.tz*.6,v.root.position.z-=te.tx*.6):Ve(v,Ci(ce,ce,0),!1)}if(G.stage==="HANDOFF"){let de=G.animation/5;de<.94&&(Ve(S,Ci(xe,ae,de)),Ve(v,Ci(xe,ae,de)),v.root.position.x+=te.tz*.6,v.root.position.z-=te.tx*.6)}}if(G.kind==="police"&&H&&["SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"].includes(G.stage)){let de={x:H.x-H.tz*2,y:H.y+.05,z:H.z+H.tx*2};Ve(P,Ci(de,de,0),!1),G.stage==="SUSPECT_STOPPED"&&C.push({id:"suspect",label:"\u304F\u308B\u307E\u3092 \u30BF\u30C3\u30C1",point:new D(H.x,H.y+1.2,H.z)}),G.stage==="POLICE_CHECK"&&Ve(M,Ci(xe,de,Math.min(1,G.animation/3)))}if(G.stage==="FIRE_ACTION"&&G.holding>=0&&G.fires[G.holding]>0){let de=x[G.site].flames[G.holding].getWorldPosition(new D).add(new D(0,.8,0)),De=new D(ee.x-ee.tz*1.4,ee.y+1.7,ee.z+ee.tx*1.4),Ue=Z=>De.clone().lerp(de,Z).add(new D(0,Math.sin(Z*Math.PI)*2,0));for(let Z=0;Z<20;Z++){let ue=Ue(Z/20),he=Ue((Z+1)/20),be=he.clone().sub(ue);F.setFromUnitVectors(Ey,be.clone().normalize()),L.compose(ue.add(he).multiplyScalar(.5),F,new D(.09,be.length(),.09)),w.setMatrixAt(Z,L)}for(let Z=0;Z<24;Z++){let ue=(B.time*1.7+Z/24)%1,he=Ue(ue);he.x+=Math.sin(Z*7+B.time*8)*.18,he.z+=Math.cos(Z*3+B.time*9)*.18,L.compose(he,new It,new D(.08,.08,.08)),R.setMatrixAt(Z,L)}w.instanceMatrix.needsUpdate=R.instanceMatrix.needsUpdate=!0,w.visible=R.visible=!0,w.computeBoundingSphere(),R.computeBoundingSphere()}if(G.kind==="fire"&&G.stage==="SUCCESS"){let de=1.1-G.celebration,De=x[G.site].group.position;for(let Ue=0;Ue<24;Ue++){let Z=Ue/24*Math.PI*2,ue=1+de*4;L.compose(new D(De.x+Math.cos(Z)*ue,De.y+3+Math.sin(de*Math.PI)*3,De.z+Math.sin(Z)*ue),new It,new D(.1,.16,.1)),R.setMatrixAt(Ue,L)}R.instanceMatrix.needsUpdate=!0,R.visible=!0,R.computeBoundingSphere()}}function N(B,H){let G=B.missions?.active;if(!G||!O.has(G.stage))return null;if(G.kind==="police"&&H){let te=Li(B),ce=new D(te.x,te.y,te.z).add(new D(H.x,H.y,H.z)).multiplyScalar(.5);return{eye:ce.clone().add(new D(-H.tz*18,9,H.tx*18)),aim:ce.clone().add(new D(0,1.2,0)),fov:48}}let ee=G.kind==="ambulance"&&(G.stage==="HANDOFF"||G.stage==="SUCCESS"),le=ee?b[G.hospital]:x[G.site],U=le.pose,X=le.group.position.clone();return{eye:X.clone().add(new D(U.tz*25,9,-U.tx*25)),aim:X.clone().add(new D(0,3,0)),fov:43}}function j(B,H,G){return C.map(ee=>{let le=ee.point.clone().project(B);return{...ee,x:(le.x*.5+.5)*H,y:(-.5*le.y+.5)*G,visible:le.z>-1&&le.z<1&&Math.abs(le.x)<1.1&&Math.abs(le.y)<1.1}})}return{root:t,sites:x,hospitals:b,frame:q,workView:N,targets:j}}function vm(i,e=[]){let n=i.bounds.minX-140,s=i.bounds.minZ-140,r=i.bounds.maxX-i.bounds.minX+280,a=i.bounds.maxZ-i.bounds.minZ+280,o=Math.ceil(r/8),c=Math.ceil(a/8),l=r/o,h=a/c,u=[...i.table.filter((b,y)=>y%3===0),...e],d=new Float32Array((o+1)*(c+1)),f=[],p=[],_=[];for(let b=0;b<=c;b++)for(let y=0;y<=o;y++){let E=n+y*l,S=s+b*h,v=u[0],M=1/0;for(let O of u){let q=(O.x-E)**2+(O.z-S)**2;q<M&&(M=q,v=O)}M=Math.sqrt(M);let P=Math.sin(E*.027)*Math.cos(S*.024),w=Math.min(y*l,(o-y)*l,b*h,(c-b)*h),R=$n.smoothstep(w,0,60),L=v.y-3.6-M*.045+Math.max(0,M-25)*.1*(.5+.5*P),F=-4+(L+4)*R;d[b*(o+1)+y]=F,f.push(E,F,S);let C=new ze(6450770).multiplyScalar(.9+P*.08);p.push(C.r,C.g,C.b)}for(let b=0;b<c;b++)for(let y=0;y<o;y++){let E=b*(o+1)+y,S=E+o+1;_.push(E,S,E+1,E+1,S,S+1)}let g=new gt;g.setAttribute("position",new Qe(f,3)),g.setAttribute("color",new Qe(p,3)),g.setIndex(_),g.computeVertexNormals();let m=new et(g,new Ze({vertexColors:!0,roughness:1}));m.name="mountain-terrain",m.receiveShadow=!0;function x(b,y){let E=$n.clamp((b-n)/l,0,o-1e-6),S=$n.clamp((y-s)/h,0,c-1e-6),v=Math.floor(E),M=Math.floor(S),P=E-v,w=S-M,R=M*(o+1)+v,L=d[R],F=d[R+1],C=d[R+o+1],O=d[R+o+2];return P+w<=1?L+P*(F-L)+w*(C-L):O+(1-P)*(C-O)+(1-w)*(F-O)}return{mesh:m,heightAt:x}}function ym(i,e){let t=Vt(e.id),n=(P,w)=>Hu(t,P)>w+9,s=new Map,a=xm(i,e,{game:!0,serviceGap:(P,w)=>{let R=Math.round(P/2)*2+":"+w;return s.has(R)||s.set(R,Hu(t,dt(e,P,w*(e.halfWidth+1.5)))<8),s.get(R)},sceneryClear:n}),o=a.root,c=new xn(1,1,1),l=new Map,h=new Ze({color:10133144,roughness:.9}),u=new Ze({color:8950417,metalness:.8,roughness:.34}),d=new Ze({color:3690330,metalness:.35,roughness:.2}),f=new Ze({color:2568504,roughness:.8}),p=new Ze({color:3375719,roughness:.8}),_=new Ze({color:14803929,roughness:.85}),g=new Qt({color:16303194}),m=new D(0,1,0);function x(P,w,R,L,F,C,O,q=c){let N=dt(e,P,w);if(!n(N,Math.max(L,C)/2+3))return;let j=new It().setFromAxisAngle(m,N.yaw),B=new qe;B.compose(new D(N.x,N.y+R,N.z),j,new D(L,F,C));let H=O.uuid+q.uuid;l.has(H)||l.set(H,{mat:O,geometry:q,matrices:[]}),l.get(H).matrices.push(B)}function b(P,w,R,L,F,C){let O=[],q=[],N=Math.ceil((w-P)/3);for(let H=0;H<=N;H++)for(let G of[R,L]){let ee=dt(e,P+(w-P)*H/N,G);O.push(ee.x,ee.y+(typeof F=="function"?F(G,ee):F),ee.z)}for(let H=0;H<N;H++){let G=H*2;q.push(G,G+1,G+2,G+1,G+3,G+2)}let j=new gt;j.setAttribute("position",new Qe(O,3)),j.setIndex(q),j.computeVertexNormals();let B=new et(j,C);B.receiveShadow=!0,o.add(B)}for(let P of e.repairFractions){let w=P*e.length,R=e.halfWidth;b(w-30,w+30,R-.1,R+5,.008,p),x(w,R+8,1.55,4,3.1,12,h),x(w,R+5.2,3.2,6,.15,13,u);for(let L of[-12,12])x(w+L,R+4,1.6,.12,3.2,.12,u);for(let L=0;L<6;L++)x(w+L*4-10,R+2.7,.035,.22,.025,1.6,_);x(w-24,R+3,2.5,1.7,1,.1,p)}let y=new yi(1,10,7),E=new Bn(.6,.8,1,8),S=[3427893,4941118,5666120].map(P=>new Ze({color:P,roughness:1})),v=new Ze({color:6705734,roughness:1});if(e.theme==="city"){let P=[10593697,12826786,7834513].map(w=>new Ze({color:w,roughness:.83}));for(let w=10,R=0;w<e.length;w+=31,R++)for(let L of[-1,1]){let F=8+R*7%6*3,C=L*(e.halfWidth+19);x(w,C,F/2,9,F,17,P[R%3]),x(w,C,F+.1,9.6,.35,17.5,f);for(let O=2;O<F;O+=2.7)for(let q=-5;q<=5;q+=2.5)x(w+q,C-L*4.56,O,.06,1.3,1.4,d);x(w,L*(e.halfWidth+1.9),3,.12,6,.12,u),x(w,L*(e.halfWidth+.4),5.9,3,.1,.5,u)}for(let w of e.crossings){let R=w*e.length;for(let L=-e.halfWidth;L<e.halfWidth;L+=1.5)x(R,L,.025,.8,.025,5,_);for(let L of[-1,1])x(R-7,L*(e.halfWidth+2),1.8,.12,3.6,.12,u),x(R-7,L*(e.halfWidth+2),3.5,1,.8,.1,g);b(R-3,R+3,e.halfWidth,e.halfWidth+24,-.015,a.road)}}else if(e.theme==="mountain"){let P=Object.values(t.edges).filter(L=>!L.main).flatMap(L=>{let F=Math.ceil(L.length/6);return Array.from({length:F+1},(C,O)=>vt(L,L.length*O/F))}),w=vm(e,P);o.add(w.mesh);let R=new Ze({color:6450770,roughness:1,side:Ht});for(let L=0;L<e.length;L+=35)for(let F of[-1,1])b(L,Math.min(L+35,e.length),F*(e.halfWidth+.6),F*(e.halfWidth+20),(C,O)=>{let q=$n.smoothstep(Math.abs(C)-e.halfWidth,0,18);return-.02+(w.heightAt(O.x,O.z)-O.y)*q},R);for(let L=0,F=0;L<e.length;L+=38,F++)for(let C of[-1,1]){let O=C*(e.halfWidth+27),q=dt(e,L,O),N=w.heightAt(q.x,q.z)-q.y;x(L,O,N+2.6,.5,5.2,.5,v,E),x(L,O,N+6.2,3,4,3,S[F%3],y)}if(e.tunnel)for(let L=e.tunnel[0]*e.length;L<e.tunnel[1]*e.length;L+=4){for(let F of[-1,1])x(L,F*(e.halfWidth+1),2.8,.6,5.6,4.1,h);x(L,0,5.7,e.halfWidth*2+2,.5,4.1,h),Math.floor(L/4)%4===0&&x(L,0,5.4,3,.05,.2,g)}}else{for(let P=180,w=0;P<e.length;P+=32,w++)for(let R of[-1,1]){let L=R*(e.halfWidth+20+w%3*6);x(P,L,1.5,.35,3,.35,v,E),x(P,L,4,2.8,3.3,2.8,S[w%3],y)}if(e.theme==="grandprix")for(let P=180;P<e.length;P+=240)for(let w=0;w<6;w++)x(P,-e.halfWidth-11-w*1.7,.5+w*.65,1.7,.4,33,h),x(P,-e.halfWidth-11-w*1.7,.8+w*.65,1.2,.25,32,w%2?f:p)}for(let P=0;P<4;P++)for(let w=0;w<12;w++)x(P*.7,-e.halfWidth+(w+.5)*e.halfWidth/6,.03,e.halfWidth/6,.015,.7,(P+w)%2?_:f);for(let{mat:P,geometry:w,matrices:R}of l.values()){let L=new an(w,P,R.length);R.forEach((F,C)=>L.setMatrixAt(C,F)),L.receiveShadow=!0,o.add(L)}let M=_m(i,t);return o.add(M.root),{...a,graph:t,missions:M}}var ll=class{constructor(e,{event:t,progress:n,failure:s}){if(this.canvas=e,this.event=t,this.failure=s,this.quality=Dn[new URLSearchParams(location.search).get("quality")]?new URLSearchParams(location.search).get("quality"):"standard",this.assets=new tl(n,t),this.factory=new cl(this.assets),this.frame=0,this.qualityChanges=0,this.gl=e.getContext("webgl2",{alpha:!1,antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"default"}),!this.gl)throw Error("WebGL 2 \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3002\u52D5\u4F5C\u8A3A\u65AD\u3067iPadOS\u30FBSafari\u306E\u72B6\u614B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u539F\u56E0\u3092GPU\u6545\u969C\u3068\u306F\u65AD\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002");this.renderer=new Kc({canvas:e,context:this.gl,antialias:!0}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=Ra,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.type=xs,this.renderer.debug.onShaderError=(r,a,o,c)=>{this.shaderError=[r.getProgramInfoLog(a),r.getShaderInfoLog(o),r.getShaderInfoLog(c)].filter(Boolean).join(`
`),this.shaderStage=r.getShaderParameter(o,r.COMPILE_STATUS)&&r.getShaderParameter(c,r.COMPILE_STATUS)?"program-link-failed":"shader-compile-failed",s(this.shaderStage,this.shaderError)},this.camera=new qt(62,1,.1,1500),this.world=new ar,this.world.fog=new ea(11379347,.0014),this.garage=new ar,this.rivalCars=[],this.playerKey="",this.cameraInitial=!0,this.sun=new bs(16769722,3),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:.5,far:55}),this.sun.shadow.bias=-8e-5,this.sun.shadow.normalBias=.015,this.event("context-created",this.gl.getParameter(this.gl.VERSION)),this.configure()}async init(e){await this.assets.init(),this.configure(),await Promise.all([this.factory.load(Dn[this.quality].model),this.factory.load("concept-rival.glb")]),this.environment();let t=new et(new Bn(6.5,6.5,.15,72),new Ze({color:5594460,metalness:.35,roughness:.48}));t.position.y=-.09,t.receiveShadow=!0,this.garage.add(t),this.actors=bm(ws);for(let n of[...Object.values(this.actors.obstacles),...this.actors.shirts,...this.actors.heads,this.actors.arm,this.actors.leg,this.actors.wrench,this.actors.warning])n.object.traverse(s=>{s.geometry&&(s.geometry.userData.shared=!0)});if(this.eventRoot=new ct,this.world.add(this.eventRoot),this.eventObjects=new Map,this.setVehicle(e),this.garage.add(this.player.root),this.camera.position.set(6.2,3.1,8.5),this.camera.lookAt(0,.65,0),this.garage.add(this.sun,this.sun.target),await this.renderer.compileAsync(this.garage,this.camera),this.shaderError)throw Error(this.shaderError);this.ready=!0}environment(){let e=new wr(this.renderer);this.environmentTarget=e.fromEquirectangular(this.assets.hdr),e.dispose();for(let t of[this.world,this.garage])t.environment=this.environmentTarget.texture,t.environmentIntensity=.8,t.background=this.assets.hdr,t.backgroundIntensity=.9,t.backgroundRotation.y=.55,t.environmentRotation.y=.55}configure(){let e=Dn[this.quality];if(this.pixelBudget=e.pixels,this.renderer.shadowMap.enabled=!0,this.sun.shadow.mapSize.width!==e.shadow&&(this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.sun.shadow.mapSize.set(e.shadow,e.shadow),this.assets.road)for(let t of Object.values(this.assets.road))t.anisotropy=e.anisotropy;this.resize()}resize(){let[e,t]=Bd(innerWidth,innerHeight,this.pixelBudget,this.renderer.capabilities.maxTextureSize);(e!==this.canvas.width||t!==this.canvas.height)&&this.renderer.setSize(e,t,!1)}async setQuality(e,t){!Dn[e]||e===this.quality||(await this.factory.load(Dn[e].model),this.quality=e,this.configure(),this.playerKey="",this.setVehicle(t),this.event("quality-changed",e),await this.renderer.compileAsync(this.player.root.parent||this.garage,this.camera))}setVehicle(e){let t=JSON.stringify([e.model,e.color,e.parts,this.quality]);if(t===this.playerKey)return;let n=this.player;this.player=this.factory.create(e,Dn[this.quality].model),this.playerKey=t,n?.root.removeFromParent(),this.factory.dispose(n),this.cameraInitial=!0}setCourse(e){if(this.course?.track.id===e)return;this.course&&(this.course.root.removeFromParent(),Pr(this.course.root));let t=mt(e),n=ym(this.assets.road,t);this.course={...n,track:t},this.world.add(n.root),n.root.updateMatrixWorld(!0),this.event("course-build",e)}prepare(e,t=!1){this.setVehicle(e),t&&this.setCourse(e.courseId)}ensureRivals(e,t){let n=JSON.stringify([e.model,t.map(s=>s.c)]);if(this.rivalKey!==n){for(let s of this.rivalCars)s.root.removeFromParent(),this.factory.dispose(s);this.rivalCars=t.map(s=>{let r={model:e.model,color:s.c,parts:{tyres:1,body:0,aero:1}},a=this.factory.create(r,Dn[this.quality].model,!0);return this.world.add(a.root),a}),this.rivalKey=n}}positioned(e,t,n,s){let r=n&&t.road?Li(t):dt(this.course.track,t.z,t.offset??t.l),a=ut(e.setup.model);return e.root.position.set(r.x,r.y+.012+(n&&!s?(t.bounce||0)*.4:0),r.z),e.root.rotation.set(r.pitch,r.yaw-(t.motionSteer||0)*.014,0,"YXZ"),this.factory.animate(e,t,s),n&&a.kind==="bike"&&t.fallTimer>0&&(e.body.rotation.z=Math.sin((.9-t.fallTimer)/.9*Math.PI)),r}eventObject(e,t){if(!this.eventObjects.has(e)){let s=t();this.eventObjects.set(e,s),this.eventRoot.add(s)}let n=this.eventObjects.get(e);return n.visible=!0,n}events(e,t){for(let a of this.eventObjects.values())a.visible=!1;let n=this.course.track,s=(a,o)=>dt(n,a,o),r=a=>Math.hypot(a.x-t.x,a.z-t.z)<220;for(let[a,o]of e.obstacles.entries()){let c=s(o.distance,o.offset);if(!r(c))continue;let l=this.eventObject(`obstacle-${a}-${o.type}`,()=>this.actors.obstacles[o.type].object.clone(!0));l.position.set(c.x,c.y+.02,c.z),l.rotation.set(c.pitch,c.yaw,0,"YXZ")}for(let[a,o]of e.pedestrians.entries()){if(!["warning","crossing","safe"].includes(o.phase))continue;let c=s(o.distance,o.offset);if(!r(c))continue;let l=this.eventObject(`person-${a}`,()=>{let u=new ct,d=this.actors.shirts[a%3].object.clone(!0),f=this.actors.heads[a%3].object.clone(!0);d.position.y=.94,f.position.y=1.46,u.add(d,f),u.userData.limbs=[];for(let p of[-1,1])for(let[_,g,m]of[[this.actors.leg,p*.12,.55],[this.actors.arm,p*.25,1.18]]){let x=_.object.clone(!0);x.position.set(g,m,0),u.add(x),u.userData.limbs.push(x)}return u});l.position.set(c.x,c.y,c.z),l.rotation.y=c.yaw+(o.side>0?Math.PI/2:-Math.PI/2);let h=o.phase==="crossing"?Math.sin(e.time*7+a)*.55:0;if(l.userData.limbs.forEach((u,d)=>u.rotation.x=h*(d%3===0?1:-1)),o.phase==="warning"){let u=s(o.distance-7,n.halfWidth+2);this.eventObject(`warning-${a}`,()=>this.actors.warning.object.clone(!0)).position.set(u.x,u.y+3.5,u.z)}}for(let[a,o]of n.repairFractions.entries()){let c=s(o*n.length,n.halfWidth+3);if(!r(c))continue;let l=this.eventObject(`repair-${a}`,()=>this.actors.wrench.object.clone(!0));l.position.set(c.x,c.y+.04,c.z),l.rotation.y=c.yaw+(e.repairTimer>0?e.time*2:0)}}draw(e,t,{garage:n,tab:s,yaw:r,rect:a,reduced:o,dt:c}){this.resize();let l=this.renderer,h=this.camera;this.setVehicle(e),l.setViewport(0,0,this.canvas.width,this.canvas.height),l.setScissorTest(!1),l.setClearColor(857893),l.clear();let u,d;if(n&&s!=="course"){u=this.garage,this.player.root.parent!==u&&u.add(this.player.root),this.player.root.position.set(0,.012,0),this.player.root.rotation.set(0,r,0),this.factory.animate(this.player,{wheelAngle:0,phase:"menu"},o);let p=ut(e.model),_=Math.max(1,p.length/4.86,p.roof/1.5),g=this.canvas.width/innerWidth,m=this.canvas.height/innerHeight,x=Math.max(1,Math.floor(a.width*g)),b=Math.max(1,Math.floor(a.height*m)),y=Math.floor(a.left*g),E=Math.floor(this.canvas.height-a.bottom*m);l.setViewport(y,E,x,b),l.setScissor(y,E,x,b),l.setScissorTest(!0),h.aspect=x/b,h.fov=x/b>1.5?28:38,h.far=160,h.position.set(6.2*_,3.1*_,8.5*_),h.lookAt(0,Math.max(.65,p.roof*.43),0),d=new D}else if(this.setCourse(e.courseId),u=this.world,n){this.player.root.visible=!1,this.rivalCars.forEach(S=>S.root.visible=!1),this.eventRoot.visible=!1;let p=this.canvas.width/innerWidth,_=this.canvas.height/innerHeight,g=Math.max(1,Math.floor(a.width*p)),m=Math.max(1,Math.floor(a.height*_));l.setViewport(Math.floor(a.left*p),Math.floor(this.canvas.height-a.bottom*_),g,m),l.setScissor(Math.floor(a.left*p),Math.floor(this.canvas.height-a.bottom*_),g,m),l.setScissorTest(!0),this.course.missions.frame(e,null),this.suspectCar&&(this.suspectCar.root.visible=!1);let x=new dn().setFromObject(this.course.missions.root),b=this.course.track.bounds,y={...b,minX:Math.min(b.minX,x.min.x),maxX:Math.max(b.maxX,x.max.x),minZ:Math.min(b.minZ,x.min.z),maxZ:Math.max(b.maxZ,x.max.z)},E=id({...this.course.track,bounds:y},g/m,r);h.aspect=g/m,h.fov=40,h.far=E.far,h.position.fromArray(E.eye),h.lookAt(...E.aim),d=new D(...E.aim)}else{this.player.root.parent!==u&&u.add(this.player.root),this.player.root.visible=!0,this.eventRoot.visible=!0;let p=this.positioned(this.player,e,!0,o);this.ensureRivals(e,t);for(let[S,v]of t.entries()){let M=dt(this.course.track,v.z,v.l),P=this.rivalCars[S];P.root.visible=Math.hypot(M.x-p.x,M.z-p.z)<220,P.root.visible&&this.positioned(P,{...v,offset:v.l,phase:"race",time:e.time},!1,o)}this.events(e,p),e.cameraOffset+=(e.offset-e.cameraOffset)*(1-Math.exp(-c*3.9));let _=e.missions?.active,g=null;if(_?.kind==="police"){this.suspectCar||(this.suspectCar=this.factory.create({model:0,color:3,parts:{tyres:1,body:0,aero:1}},Dn[this.quality].model,!0),this.world.add(this.suspectCar.root)),g=vt(this.course.graph.edges["loop-"+_.site],_.suspect.d,_.suspect.offset||0);let S=this.suspectCar;S.root.visible=!0,S.root.position.set(g.x,g.y+.012,g.z),S.root.rotation.set(g.pitch,g.yaw,0,"YXZ"),this.factory.animate(S,{phase:"race",wheelAngle:_.suspect.d/ut(0).radius,v:_.suspect.speed,motionSteer:_.stage==="SUSPECT_STOPPING"?_.suspect.motionSteer:0,time:e.time},o)}else this.suspectCar&&(this.suspectCar.root.visible=!1);this.course.missions.frame(e,g);let m=this.course.missions.workView(e,g);this.workCamera=!!m;let x=Math.max(3.45,ut(e.model).roof+2.1),b=Math.max(10.5,ut(e.model).length*2),y=e.road?{eye:[p.x-p.tx*b,p.y+x,p.z-p.tz*b],aim:[p.x+p.tx*13,p.y+1.15,p.z+p.tz*13]}:nd(this.course.track,e.z,e.cameraOffset,x,b),E=m?m.eye:new D(...y.eye);this.cameraInitial||m||this.wasWorkCamera!==!!m?h.position.copy(E):h.position.lerp(E,1-Math.exp(-c*6)),this.wasWorkCamera=!!m,this.cameraInitial=!1,h.aspect=this.canvas.width/this.canvas.height,h.fov=m?m.fov:62+(o?0:Math.min(3,e.v/20)+(e.boost>0?3:0)),h.far=900,m?h.lookAt(m.aim):h.lookAt(...y.aim),d=this.player.root.position.clone()}this.sun.parent!==u&&u.add(this.sun,this.sun.target),this.sun.target.position.copy(d),this.sun.position.copy(d).add(new D(-8,12,5)),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),h.updateProjectionMatrix();let f=u.fog;if(n&&s==="course"&&(u.fog=null),l.render(u,h),u.fog=f,l.setScissorTest(!1),l.setViewport(0,0,this.canvas.width,this.canvas.height),this.player.root.visible=!0,this.frame++,!n){let p=this.player.root.position.clone().add(new D(0,.6,0)).project(h),_=e.road?vt(this.course.graph.edges[e.road.edge],e.road.d,0,e.road.direction):dt(this.course.track,e.z),g=new D(_.x,_.y+.6,_.z).project(h);this.screen={player:[p.x,p.y],laneCenter:[g.x,g.y]},this.workTargets=this.course.missions.targets(h,innerWidth,innerHeight).map(({point:m,...x})=>x)}}lose(){this.ready=!1;for(let e of[this.world,this.garage])e.environment=null,Pr(e,{textures:!0});for(let e of this.factory.templates.values())Pr(e,{textures:!0});ol.forEach(e=>e.dispose()),this.environmentTarget?.dispose(),this.environmentTarget=null,this.assets.hdr?.dispose(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null}async restore(){if(this.environment(),await this.renderer.compileAsync(this.player.root.parent||this.garage,this.camera),this.gl.getError()!==this.gl.NO_ERROR)throw Error("WebGL error while restoring resources");this.ready=!0}stats(){let e=new Set,t=0;for(let n of[this.world,this.garage,...this.factory.templates.values()])n.traverse(s=>{if(s.geometry&&!e.has(s.geometry)){e.add(s.geometry),t+=s.geometry.index?.array.byteLength||0;for(let r of Object.values(s.geometry.attributes))t+=r.array?.byteLength||r.data?.array.byteLength||0}});return{engine:`Three.js r${"187"} / WebGL 2`,quality:this.quality,pixelBudget:this.pixelBudget,qualityChanges:this.qualityChanges,drawCalls:this.renderer.info.render.calls,vertices:this.renderer.info.render.triangles*3,meshBytes:t,modelCacheSize:this.factory.templates.size,bufferSize:[this.canvas.width,this.canvas.height],sceneCourse:this.course?.track.id,assetBytes:this.assets.loadedBytes,assetModel:this.player?.modelName,rendererResources:{...this.renderer.info.memory},wheels:this.player?.wheels.map(n=>({front:n.front,steering:n.outer.rotation.y,angle:n.spin.rotation.x,center:n.outer.position.toArray()})),workCamera:this.workCamera||!1,workTargets:this.workTargets||[],contextLost:this.gl.isContextLost()}}};var Ut=window.raceDiagnostics;async function Ty(){Ut.event("module-started");let i=k=>document.getElementById(k),e=i("world"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=!1,s=0,r=0,a=16.7,o=0,c=!0,l="vehicle",h,u=!1,d=[],f=new URLSearchParams(location.search).get("adaptive")!=="off",p=_l(),_=k=>{i("asset-loading").hidden=!k,i("start").disabled=k};try{Ut.event("context-create"),h=new ll(e,{event:(k,oe="")=>Ut.event(k,oe),progress:(k,oe)=>{i("asset-loading-text").textContent=`\u304F\u308B\u307E\u3068 \u30B3\u30FC\u30B9\u3092 \u3058\u3085\u3093\u3073\u3057\u3066\u3044\u307E\u3059\u2026 ${(oe/1e6).toFixed(1)} MB`},failure:(k,oe)=>{n=!1,Ut.failure(k,oe)}}),Ut.graphics({engine:"Three.js r187",webgl:h.gl.getParameter(h.gl.VERSION),actualContext:h.gl.getContextAttributes(),maxViewport:Array.from(h.gl.getParameter(h.gl.MAX_VIEWPORT_DIMS)),maxRenderbuffer:h.gl.getParameter(h.gl.MAX_RENDERBUFFER_SIZE)})}catch(k){_(!1),Ut.failure("context-unavailable",k.message);return}let g=k=>'<svg viewBox="0 0 96 36" aria-hidden="true"><path d="M8 24 14 16 31 13 43 5 66 7 77 15 90 19 91 28H8Z"/><circle cx="26" cy="28" r="7"/><circle cx="75" cy="28" r="7"/></svg>';document.querySelector(".models").innerHTML=hn.map((k,oe)=>`<button class="vehicle-choice" data-model="${oe}" aria-pressed="${oe===0}">${g(k.label)}<span>${k.label}</span><small>${k.name}</small></button>`).join("");let m=document.createElement("p");m.id="vehicle-performance",m.className="vehicle-performance",document.querySelector(".vehicle-group").append(m),i("course-list").innerHTML=Wa.map(k=>`<button class="course-choice" data-course="${k.id}" aria-pressed="${k.id==="C01"}"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="${fl(k)}"/></svg><strong>${k.icon} ${k.name}</strong><span>${"\u2605".repeat(k.difficulty)} \u30FB ${k.length}m</span></button>`).join("");let x=hn.map((k,oe)=>Rd(oe)),b=vl(x[0].color,0,x[0].parts),y=wd(b,()=>b.phase==="race"&&!oi(b)&&!b.road?.turnTimer);Ad(document.body);let E=-.24,S=null,v=null,M={player:[0,0],laneCenter:[0,0]},P=()=>b.phase==="menu"||b.phase==="finish",w=()=>P()&&n;function R(){let k=hn[b.model];i("garage-car-name").textContent=l==="course"?mt(b.courseId).label:k.name,i("garage-car-type").textContent=l==="course"?`\u3080\u305A\u304B\u3057\u3055 ${"\u2605".repeat(mt(b.courseId).difficulty)}`:k.label,i("vehicle-performance").textContent=`\u306F\u3084\u3055 ${Math.round(k.top*3.6)} km/h \u30FB \u304B\u305D\u304F ${"\u25CF".repeat(Math.round(k.accel*3))} \u30FB \u307E\u304C\u308A\u3084\u3059\u3055 ${"\u25CF".repeat(Math.round(k.turn/2))}`,i("siren").hidden=!k.emergency,e.setAttribute("aria-label",P()?`${k.name}\u306E3D\u30D7\u30EC\u30D3\u30E5\u30FC`:"3D\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC\u30EC\u30FC\u30B9");for(let oe of document.querySelectorAll("[data-model]"))oe.setAttribute("aria-pressed",String(Number(oe.dataset.model)===b.model));for(let oe of document.querySelectorAll("[data-color]")){let Re=Number(oe.dataset.color)===b.color;oe.classList.toggle("selected",Re),oe.setAttribute("aria-pressed",String(Re))}for(let oe of document.querySelectorAll("[data-part]"))oe.setAttribute("aria-pressed",String(Number(oe.dataset.value)===b.parts[oe.dataset.part]));i("garage-preview").setAttribute("aria-label",`${Cd(b)}\u3002\u5DE6\u53F3\u306B\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u56DE\u8EE2`),i("selected-course").textContent=`${mt(b.courseId).icon} ${mt(b.courseId).name} \u30FB 2\u3057\u3085\u3046`;for(let oe of document.querySelectorAll("[data-course]"))oe.setAttribute("aria-pressed",String(oe.dataset.course===b.courseId));for(let oe of document.querySelectorAll("[data-ai]"))oe.setAttribute("aria-pressed",String(oe.dataset.ai===b.aiDifficulty));document.querySelector(".preview-hint").textContent=l==="course"?"\u2194 \u3086\u3073\u3067 \u30B3\u30FC\u30B9\u3092 \u307E\u308F\u3057\u3066\u307F\u3088\u3046":"\u2194 \u3086\u3073\u3067 \u304F\u308B\u307E\u3092 \u307E\u308F\u3057\u3066\u307F\u3088\u3046",h.prepare(b,l==="course")}function L(){x[b.model]=Fs(b),R()}Ut.observe(()=>({phase:b.phase,elapsed:b.time,seed:b.seed,...Sd(b),rank:b.rank,distance:Math.round(b.z),offset:Number(b.offset.toFixed(2)),speed:Number(b.v.toFixed(1)),steering:[b.steerL,b.steerR],model:hn[b.model].name,courseId:b.courseId,aiDifficulty:b.aiDifficulty,rivals:p.map(k=>({distance:k.z,speed:k.speed,offset:k.l,overtaking:k.overtaking,penaltyTime:k.penaltyTime,flatMask:[...k.flatMask]})),courseLength:mt(b.courseId).length,checkpoints:b.checkpointsPassed,sceneCourse:h.course?.track.id,kind:ut(b.model).kind,wheelCount:ai(b.model).length,siren:b.siren,brake:b.brake,parts:{...b.parts},screen:M,garage:P(),garageYaw:Number(E.toFixed(2)),modelCacheSize:h.factory.templates.size,color:b.color,flatMask:[...b.flatMask],flatVisual:[...b.flatVisual],repairTimer:b.repairTimer,repairProgress:b.repairProgress,penaltyTime:b.penaltyTime,stopTimer:b.stopTimer,fallTimer:b.fallTimer,obstaclePreview:b.obstacles.map(k=>({distance:k.distance,offset:k.offset,type:k.type,hit:k.hit})),pedestrians:b.pedestrians.map(k=>({distance:k.distance,offset:k.offset,phase:k.phase,hit:k.hit})),frames:r,frameMs:Number(a.toFixed(1)),...kd(d),...h.stats()}));let F=null,C=null,O=!0,q=null;function N(){if(!O)try{if(!F){let k=window.AudioContext||window.webkitAudioContext;if(!k)return;F=new k;let oe=F.createOscillator(),Re=F.createBiquadFilter(),Ge=F.createGain();oe.type="sawtooth",oe.frequency.value=55,Re.type="lowpass",Re.frequency.value=150,Ge.gain.value=0,oe.connect(Re),Re.connect(Ge),Ge.connect(F.destination),oe.start(),C={o:oe,f:Re,g:Ge};let V=F.createOscillator(),ft=F.createGain();V.type="sine",ft.gain.value=0,V.connect(ft),ft.connect(F.destination),V.start(),q={o:V,g:ft}}F.resume().catch(k=>Ut.event("audio-unavailable",k.message))}catch(k){Ut.event("audio-unavailable",k.message),O=!0;let oe=null;i("sound").textContent="\u{1F507}"}}function j(k=540){if(!(!F||O))try{let oe=F.createOscillator(),Re=F.createGain(),Ge=F.currentTime;oe.type="sine",oe.frequency.value=k,Re.gain.setValueAtTime(.001,Ge),Re.gain.exponentialRampToValueAtTime(.08,Ge+.014),Re.gain.exponentialRampToValueAtTime(.001,Ge+.19),oe.connect(Re),Re.connect(F.destination),oe.start(Ge),oe.stop(Ge+.21)}catch{}}function B(){if(!(!F||O))try{let k=Math.floor(F.sampleRate*.32),oe=F.createBuffer(1,k,F.sampleRate),Re=oe.getChannelData(0);for(let ft=0;ft<k;ft++)Re[ft]=(Math.random()*2-1)*(1-ft/k);let Ge=F.createBufferSource(),V=F.createGain();Ge.buffer=oe,V.gain.value=.035,Ge.connect(V),V.connect(F.destination),Ge.start()}catch{}}function H(){if(!C)return;let k=!O&&b.siren&&ut(b.model).emergency&&b.phase==="race";q.g.gain.setTargetAtTime(k?.025:0,F.currentTime,.1),q.o.frequency.setTargetAtTime(650+230*Math.sin(b.time*4.5),F.currentTime,.08);let oe=!O&&(b.phase==="race"||b.phase==="countdown");C.o.frequency.setTargetAtTime(55+b.v*2.7+(b.boost>0?35:0),F.currentTime,.16),C.f.frequency.setTargetAtTime(150+b.v*14,F.currentTime,.12),C.g.gain.setTargetAtTime(oe?.019:0,F.currentTime,.15)}let G=Ed(b,{clearControls:X,muted:()=>O,beep:j,event:(k,oe)=>Ut.event(k,oe)});function ee(){let k=mt(b.courseId);b.lap=Math.min(2,1+(b.ledger?b.ledger.laps:Math.floor(b.z/k.length))),b.rank=Ui(b,p),i("lap").textContent=`${b.lap} / 2`,i("rank").textContent=`${b.rank} / 5`,i("time").textContent=(b.time+b.penaltyTime).toFixed(1)+"s",i("speed").textContent=String(Math.round(b.v*3.6)).padStart(3,"0"),i("progressbar").style.width=Math.min(100,100*b.z/(k.length*2))+"%",i("boostmeter").style.width=b.charge+"%",i("mini-map-path").setAttribute("d",fl(k)),i("mini-map-pits").innerHTML=k.repairFractions.map(V=>{let ft=qa(k,V*k.length);return`<rect x="${ft.x-2.2}" y="${ft.y-2.2}" width="4.4" height="4.4" fill="#75e8a2"/>`}).join("");let oe=qa(k,b.z);i("mini-map-car").setAttribute("cx",oe.x),i("mini-map-car").setAttribute("cy",oe.y),i("race-course").textContent=k.label,i("boost").disabled=b.charge<60||b.phase!=="race"||Wt(b)||b.brake||b.repairTimer>0||b.stopTimer>0||b.fallTimer>0,i("penalty-time").textContent=`+${b.penaltyTime}\u3073\u3087\u3046`;let Re=Wt(b);i("condition").hidden=!Re&&b.repairTimer===0,i("condition-text").textContent=b.repairTimer>0?`\u{1F527} \u3057\u3085\u3046\u308A ${Math.ceil(b.repairTimer)}`:`\u{1F6DE} \u30D1\u30F3\u30AF ${b.flatMask.filter(Boolean).length}`,i("repair-progress").style.width=`${b.repairProgress*100}%`;let Ge=b.pedestrians.some(V=>V.phase==="warning"||V.phase==="crossing");i("pedestrian-warning").hidden=!Ge,G.update(),i("forced-stop").hidden=b.stopTimer<=0,i("forced-stop").textContent=`\u270B \u3042\u3093\u305C\u3093 \u304B\u304F\u306B\u3093 ${Math.ceil(b.stopTimer)}`}let le=0;function U(k){i("toast").textContent=k,i("toast").classList.add("show"),le=performance.now()+1250}function X(){y.clear(),Di(b),S=null;for(let k of["left","right"])i(k).classList.remove("is-down")}function te(){let{color:k,model:oe,parts:Re}=Fs(b),Ge=b.courseId,V=b.aiDifficulty;Object.assign(b,vl(k,oe,Re,Ge,Math.floor(Math.random()*2147483647),V),{phase:"countdown"}),h.setCourse(b.courseId),document.body.classList.remove("in-garage"),i("modal").classList.remove("paused"),e.setAttribute("aria-label","3D\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC\u30EC\u30FC\u30B9"),p.splice(0,p.length,..._l(b.model,b.aiDifficulty,b.courseId)),i("modal").classList.add("hidden"),i("countdown").classList.add("visible"),i("pause").textContent="\u2161",ee(),N()}function ce(){b.phase="finish",document.body.classList.add("in-garage"),i("modal").classList.remove("paused"),R(),X(),i("modal").classList.remove("hidden"),i("kicker").textContent="\u{1F3C1} FINISH",i("title").innerHTML=b.heroClear?"\u{1F31F} <em>HERO CLEAR!</em>":b.rank===1?"\u{1F3C6} <em>WINNER!</em>":"\u{1F3C1} <em>FINISH!</em>",i("subtitle").textContent=`${b.heroClear?"\u304A\u3057\u3054\u3068 2 / 2 \u30FB 2\u3057\u3085\u3046 \u305F\u3063\u305B\u3044\uFF01\u3000":""}${b.rank}\u3044 / 5\u3060\u3044\u3000 ${(b.time+b.penaltyTime).toFixed(1)}\u3073\u3087\u3046\uFF08\u30DA\u30CA\u30EB\u30C6\u30A3 +${b.penaltyTime}\uFF09`,i("choose").textContent="\u3059\u304D\u306A \u304F\u308B\u307E\u3092 \u3048\u3089\u3093\u3067\u306D",i("start").textContent="\u21BB \u3082\u3046\u3044\u3061\u3069 \u30EC\u30FC\u30B9",i("instructions").textContent=b.penaltyTime>0?"\u3064\u304E\u306F \u3072\u3068\u306B \u307F\u3061\u3092 \u3086\u305A\u308D\u3046\uFF01":"\u3055\u3044\u3054\u307E\u3067 \u306F\u3057\u308C\u305F\u306D\uFF01",j(770)}let ae="race";function xe(){b.phase==="race"||b.phase==="countdown"?(ae=b.phase,G.cancelSpeech(),i("modal").classList.add("paused"),b.phase="pause",X(),i("pause").textContent="\u25B6",i("countdown").classList.remove("visible"),i("modal").classList.remove("hidden"),i("kicker").textContent="\u3072\u3068\u3084\u3059\u307F",i("title").innerHTML="\u23F8 <em>\u304A\u3084\u3059\u307F</em>",i("subtitle").textContent="\u3058\u3085\u3093\u3073\u304C \u3067\u304D\u305F\u3089 \u3064\u3065\u3051\u3088\u3046",i("choose").textContent="\u304F\u308B\u307E\u306E \u3044\u308D\u3082 \u304B\u3048\u3089\u308C\u308B\u3088\uFF01",i("start").textContent="\u25B6 \u3064\u3065\u304D\u304B\u3089",i("instructions").textContent="\u25C0 \u25B6 \u3067 \u307E\u304C\u308B \uFF0F \u306F\u306A\u3059\u3068 \u305D\u306E\u3070\u3092 \u30AD\u30FC\u30D7"):b.phase==="pause"&&Ve(),H()}function Ve(){!n||document.hidden||(b.phase=ae,i("modal").classList.remove("paused"),X(),b.prev=0,i("modal").classList.add("hidden"),i("pause").textContent="\u2161",i("countdown").classList.toggle("visible",b.phase==="countdown"),ee(),N())}function de(k){for(let oe=k;oe>0;oe-=.05){let Re=Od(b,p,Math.min(.05,oe));Re==="contact"&&(U("\u3060\u3044\u3058\u3087\u3046\u3076\uFF01 \u306F\u3057\u308D\u3046\uFF01"),j(230)),Re==="recovered"&&U("\u30B3\u30FC\u30B9\u306B \u3082\u3069\u3063\u305F\u3088\uFF01"),Re==="bike-recovered"&&U("\u3060\u3044\u3058\u3087\u3046\u3076\uFF01 \u306F\u3057\u308D\u3046\uFF01"),Re==="puncture"&&(U("\u{1F6DE} \u30D1\u30F3\u30AF\uFF01 \u307F\u3069\u308A\u306E \u3057\u3085\u3046\u308A\u3078"),B()),Re==="repair-start"&&(X(),U("\u{1F527} \u3057\u3085\u3046\u308A \u3059\u308B\u3088\uFF01"),j(540)),Re==="repaired"&&(U("\u2728 \u306A\u304A\u3063\u305F\u3088\uFF01"),j(880)),Re==="crossing-warning"&&j(460),Re==="safe-crossing"&&(U("\u{1F44D} \u3042\u3093\u305C\u3093\u306B \u3068\u304A\u308C\u305F\u306D"),j(740)),Re==="pedestrian-contact"&&(X(),U("\u270B \u3068\u307E\u3063\u3066 \u3042\u3093\u305C\u3093\u3092 \u304B\u304F\u306B\u3093"),j(240)),Re==="finish"&&ce()}b.phase==="countdown"&&(i("countdown").textContent=b.count>1?Math.min(3,Math.ceil(b.count)):"GO!"),b.phase==="race"&&i("countdown").classList.remove("visible"),ee()}function De(){n&&!document.hidden&&!s&&(s=requestAnimationFrame(Z))}function Ue(){s&&cancelAnimationFrame(s),s=0,b.prev=0}function Z(k){if(s=0,!(!n||document.hidden||h.gl.isContextLost()))try{let oe=b.prev?(k-b.prev)/1e3:0,Re=Math.min(.2,oe);if(b.prev=k,oe>0&&(d.push(oe*1e3),d.length>180&&d.shift(),a+=(Math.min(oe*1e3,1e3)-a)*.03,o=a>45?o+Math.min(oe,1):Math.max(0,o-Re)),de(b.phase==="countdown"?Math.min(oe,.5):Re),H(),h.draw(b,p,{garage:P(),tab:l,yaw:E,rect:i("garage-preview").getBoundingClientRect(),reduced:t,dt:Re}),G.draw(P()?[]:h.workTargets),e.dispatchEvent(new Event("race-frame")),M=h.screen||M,i("toast").classList.contains("show")&&k>le&&i("toast").classList.remove("show"),c||r%120===0){let Ge=h.gl.getError();if(Ge!==h.gl.NO_ERROR)throw Error("WebGL error "+Ge);c&&(c=!1,Ut.event("running","First PBR frame rendered without WebGL errors."))}r++,f&&o>3&&h.quality!=="low"?(o=0,ue(h.quality==="high"?"standard":"low",!0)):De()}catch(oe){n=!1,Ue(),_(!1),Ut.failure("render-failed",oe.message)}}async function ue(k,oe=!1){if(!(!n||u||!Dn[k]||k===h.quality)){u=!0,n=!1,X(),Ue(),_(!0);try{await h.setQuality(k,b),h.prepare(b,l==="course"),oe&&(h.qualityChanges++,Ut.event("quality-reduced",k));for(let Re of document.querySelectorAll("[data-quality]"))Re.setAttribute("aria-pressed",String(Re.dataset.quality===k));n=!0,c=!0,b.prev=0,o=0,d=[],De()}catch(Re){Ut.failure("quality-load-failed",Re.message)}finally{u=!1,_(!1)}}}for(let k of document.querySelectorAll("[data-color]"))k.addEventListener("click",()=>{w()&&(b.color=Number(k.dataset.color),L())});for(let k of document.querySelectorAll("[data-model]"))k.addEventListener("click",()=>{if(!w())return;x[b.model]=Fs(b);let oe=Fs(x[Number(k.dataset.model)]);b.model=oe.model,b.color=oe.color,b.parts=oe.parts,E=-.24,R()});for(let k of document.querySelectorAll("[data-part]"))k.addEventListener("click",()=>{w()&&(b.parts[k.dataset.part]=Number(k.dataset.value),L())});function he(k){l=k,i("vehicle-options").hidden=k!=="vehicle",i("course-options").hidden=k!=="course";for(let oe of document.querySelectorAll("[data-garage-tab]"))oe.setAttribute("aria-selected",String(oe.dataset.garageTab===k));R()}for(let k of document.querySelectorAll("[data-garage-tab]"))k.addEventListener("click",()=>he(k.dataset.garageTab));for(let k of document.querySelectorAll("[data-course]"))k.addEventListener("click",()=>{w()&&(b.courseId=k.dataset.course,R())});for(let k of document.querySelectorAll("[data-ai]"))k.addEventListener("click",()=>{!w()||!Fr[k.dataset.ai]||(b.aiDifficulty=k.dataset.ai,R())});let be=i("garage-preview");be.addEventListener("pointerdown",k=>{if(w()){k.preventDefault(),S={id:k.pointerId,x:k.clientX};try{be.setPointerCapture(k.pointerId)}catch{}}}),be.addEventListener("pointermove",k=>{!S||k.pointerId!==S.id||(E+=(k.clientX-S.x)*.009,S.x=k.clientX)});for(let k of["pointerup","pointercancel","lostpointercapture"])be.addEventListener(k,()=>{S=null});be.addEventListener("keydown",k=>{w()&&(k.key==="ArrowLeft"||k.key==="ArrowRight")&&(k.preventDefault(),E+=k.key==="ArrowLeft"?-.15:.15)}),i("garage-help").addEventListener("click",()=>i("help").click()),i("start").addEventListener("click",()=>{n&&(b.phase==="pause"?Ve():te())}),i("pause").addEventListener("click",xe),y.bind(i("left"),"steerL"),y.bind(i("right"),"steerR"),i("pit-guide").addEventListener("click",()=>{b.pitAssist=!0,U("\u{1F527} \u307F\u3069\u308A\u306E \u3057\u3085\u3046\u308A\u3078 \u3044\u3053\u3046")}),y.bind(i("brake"),"brake"),i("siren").addEventListener("click",()=>{ut(b.model).emergency&&(b.siren=!b.siren,i("siren").setAttribute("aria-pressed",String(b.siren)),N())}),i("garage-return").addEventListener("click",()=>{X(),b.phase="menu",b.v=0,b.boost=0,b.siren=!1,b.prev=0,document.body.classList.add("in-garage"),i("modal").classList.remove("paused"),i("title").innerHTML="\u307C\u304F\u306E <em>GRAND RACE</em>",i("kicker").textContent="\u304D\u307F\u3060\u3051\u306E \u30DE\u30B7\u30F3\u3092 \u3064\u304F\u308D\u3046",i("subtitle").textContent="\u304F\u308B\u307E\u3068 \u30D1\u30FC\u30C4\u3092 \u3048\u3089\u3093\u3067\u3001\u30B5\u30FC\u30AD\u30C3\u30C8\u3078\uFF01",i("start").textContent="\u25B6 \u30EC\u30FC\u30B9 \u30B9\u30BF\u30FC\u30C8\uFF01",R(),ee(),H()});function _e(){Ud(b)&&(U("\u26A1 \u30BF\u30FC\u30DC\uFF01"),j(700),ee())}i("boost").addEventListener("pointerdown",k=>{k.preventDefault(),_e()}),i("sound").addEventListener("click",()=>{O=!O,O&&G.cancelSpeech(),i("sound").textContent=O?"\u{1F507}":"\u{1F50A}",N()}),addEventListener("keydown",k=>{if(i("diagnostics").classList.contains("hidden")&&["ArrowLeft","ArrowRight","ArrowDown"," ","Escape"].includes(k.key)){if(b.phase!=="race"&&b.phase!=="countdown"&&k.key!=="Escape"||(k.preventDefault(),k.repeat&&k.key==="Escape"))return;b.phase==="race"&&(k.key==="ArrowLeft"&&y.key("steerL",!0),k.key==="ArrowRight"&&y.key("steerR",!0),k.key==="ArrowDown"&&y.key("brake",!0),k.key===" "&&_e()),k.key==="Escape"&&xe()}}),addEventListener("keyup",k=>{k.key==="ArrowLeft"&&y.key("steerL",!1),k.key==="ArrowRight"&&y.key("steerR",!1),k.key==="ArrowDown"&&y.key("brake",!1)});function Xe(){X(),(b.phase==="race"||b.phase==="countdown")&&xe(),Ue(),F&&F.suspend().catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.hidden?Xe():(b.prev=0,De())}),addEventListener("pagehide",Xe),addEventListener("pageshow",()=>{b.prev=0,De()}),addEventListener("blur",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&xe()}),addEventListener("race-support-open",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&xe()}),addEventListener("race-fatal",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&xe(),Ue()});for(let k of document.querySelectorAll("[data-quality]"))k.setAttribute("aria-pressed",String(k.dataset.quality===h.quality)),k.addEventListener("click",()=>ue(k.dataset.quality));i("auto-quality").checked=f,i("auto-quality").addEventListener("change",()=>{f=i("auto-quality").checked,o=0}),i("loading-help").addEventListener("click",()=>i("help").click()),e.addEventListener("webglcontextcreationerror",k=>Ut.event("context-create-error",k.statusMessage||"No status message")),e.addEventListener("webglcontextlost",k=>{k.preventDefault(),n=!1,h.lose(),Xe(),_(!1),Ut.failure("context-lost","WebGL context lost; GPU resources released during the lost generation. Waiting for restoration.")}),e.addEventListener("webglcontextrestored",async()=>{try{Ut.event("context-restoring"),await h.restore(),n=!0,c=!0,i("unsupported").classList.remove("visible"),b.prev=0,Ut.event("context-restored","PBR resources restored; race stays paused until a tap."),De()}catch(k){Ut.failure("context-restore-failed",k.message)}}),_(!0);try{await h.init(b),n=!0,ee(),R(),_(!1),De()}catch(k){_(!1),Ut.failure(h.shaderStage||"asset-or-scene-failed",h.shaderError||k.message);return}"serviceWorker"in navigator&&window.isSecureContext&&navigator.serviceWorker.register("./service-worker.js").catch(k=>Ut.event("offline-unavailable",k.message))}Ty().catch(i=>Ut.failure("startup-failed",i.message));
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
/* Third-party licenses
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


MIT License

Copyright (c) 2016-2026 Arseny Kapoulkine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
