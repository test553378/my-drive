var fd={C01:[{gate:328.125,side:1,access:{lead:30,tail:15},exit:{lead:260,tail:50}},{gate:940.625,side:1,access:{lead:30,tail:15},exit:{lead:180,tail:80}},{gate:1268.75,side:1,access:{lead:30,tail:15},exit:{lead:260,tail:80}}],C02:[{gate:399.609375,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:80}},{gate:670.3125,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:80}},{gate:1134.375,side:-1,access:{lead:30,tail:15},exit:{lead:50,tail:50}}],C03:[{gate:539.0625,side:-1,access:{lead:30,tail:15},exit:{lead:120,tail:80}},{gate:1066.40625,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:120}},{gate:1417.96875,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:80}}],C04:[{gate:433.59375,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:120}},{gate:737.109375,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:120}},{gate:1401.953125,side:-1,access:{lead:30,tail:15},exit:{lead:260,tail:80}}]};var hn=Object.freeze([{id:"V01",name:"NOVA R",label:"\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC",kind:"sport",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.1,length:4.86,radius:.384,top:44,accel:1.05,turn:6.5,brake:24},{id:"V01-S",name:"AERO S",label:"\u30B9\u30DD\u30FC\u30C4\u30AB\u30FC",kind:"sport",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.08,length:4.86,radius:.384,top:42,accel:1.15,turn:7,brake:25},{id:"V02",name:"HAULER",label:"\u30C8\u30E9\u30C3\u30AF",kind:"truck",wheelZ:[-1.85,1.65],roof:2.55,width:2.32,length:6.2,radius:.5,top:34,accel:.73,turn:4.8,brake:17},{id:"V03",name:"CITY LINK",label:"\u30D0\u30B9",kind:"bus",wheelZ:[-2.5,2.4],roof:2.95,width:2.4,length:7.8,radius:.51,top:32,accel:.64,turn:4.2,brake:15},{id:"V04",name:"PULSE",label:"\u30D0\u30A4\u30AF",kind:"bike",wheelZ:[-.8,.83],roof:1.7,width:.78,length:2.25,radius:.34,top:43,accel:1.3,turn:8.1,brake:26,wheels:2},{id:"V05",name:"GUARD",label:"\u30D1\u30C8\u30AB\u30FC",kind:"patrol",wheelZ:[-1.3140624,1.4856806],roof:1.24,width:2.08,length:4.86,radius:.384,top:45,accel:1.17,turn:7.3,brake:26,emergency:!0},{id:"V06",name:"LIFELINE",label:"\u304D\u3085\u3046\u304D\u3085\u3046\u3057\u3083",kind:"ambulance",wheelZ:[-1.6,1.6],roof:2.65,width:2.23,length:5.8,radius:.46,top:37,accel:.82,turn:5.4,brake:20,emergency:!0},{id:"V07",name:"BRAVE",label:"\u3057\u3087\u3046\u307C\u3046\u3057\u3083",kind:"fire",wheelZ:[-1.95,1.85],roof:2.65,width:2.38,length:6.5,radius:.51,top:35,accel:.7,turn:4.6,brake:17,emergency:!0}]),ct=i=>hn[i]||hn[0];function oi(i,e=0){let t=ct(i),n=t.width*.46+(e?.1:0);return t.wheelZ.flatMap(s=>t.wheels===2?[{x:0,z:s}]:[{x:-n,z:s},{x:n,z:s}])}var Wm=[{id:"C01",name:"\u306F\u3058\u3081\u3066 \u30B5\u30FC\u30AD\u30C3\u30C8",label:"\u521D\u7D1A\u30B5\u30FC\u30AD\u30C3\u30C8",difficulty:1,length:1400,halfWidth:9.7,theme:"circuit",color:"#6bcd95",icon:"\u{1F3C1}",points:[[0,0,0],[0,260,0],[110,350,0],[260,300,0],[300,130,0],[230,0,0],[100,-60,0]],tunnel:null,crossings:[]},{id:"C02",name:"\u30DE\u30A6\u30F3\u30C6\u30F3",label:"\u30DE\u30A6\u30F3\u30C6\u30F3\u30B3\u30FC\u30B9",difficulty:2,length:1650,halfWidth:7.5,theme:"mountain",color:"#85bfde",icon:"\u26F0",points:[[0,0,0],[0,300,20],[-160,360,45],[-300,280,55],[-300,130,40],[-220,100,32],[-160,170,25],[-210,250,33],[-120,270,24],[-80,160,10],[-100,-20,0]],tunnel:[.13,.21],crossings:[]},{id:"C03",name:"\u30B7\u30C6\u30A3",label:"\u30B7\u30C6\u30A3\u30B3\u30FC\u30B9",difficulty:2,length:1500,halfWidth:8.5,theme:"city",color:"#f5b77d",icon:"\u{1F3D9}",points:[[0,0,0],[0,250,0],[-100,300,0],[-160,240,0],[-230,240,0],[-260,150,0],[-190,110,0],[-200,30,0],[-310,-10,0],[-250,-130,0],[-60,-130,0],[50,-60,0]],tunnel:null,crossings:[.23,.56,.84]},{id:"C04",name:"\u30B0\u30E9\u30F3\u30D7\u30EA",label:"\u30B0\u30E9\u30F3\u30D7\u30EA\u30B5\u30FC\u30AD\u30C3\u30C8",difficulty:3,length:1850,halfWidth:8,theme:"grandprix",color:"#de9dd7",icon:"\u{1F3C6}",points:[[0,0,0],[0,420,0],[-100,500,0],[-260,480,0],[-310,370,0],[-230,300,0],[-290,220,0],[-220,140,0],[-290,70,0],[-300,-100,0],[-180,-180,0],[-80,-100,0]],tunnel:null,crossings:[]}],md=(i,e)=>(i%e+e)%e,yl=(i,e,t)=>i+(e-i)*t,qm=(i,e,t,n,s)=>.5*(2*e+(-i+t)*s+(2*i-5*e+4*t-n)*s*s+(-i+3*e-3*t+n)*s*s*s);function Xm(i,e,t=1){let n=i.length,s=Math.floor(e)%n,r=e-Math.floor(e),a=[i[md(s-1,n)],i[s],i[(s+1)%n],i[(s+2)%n]],o=c=>qm(a[0][c]||0,a[1][c]||0,a[2][c]||0,a[3][c]||0,r);return{x:o(0)*t,y:o(2),z:o(1)*t}}function pd(i,e){let t=i.length*48,n=[],s=0;for(let r=0;r<=t;r++){let a=Xm(i,r/t*i.length,e);if(r){let o=n[r-1];s+=Math.hypot(a.x-o.x,a.y-o.y,a.z-o.z)}n.push({...a,d:s})}return{list:n,length:s}}function jm(i){let e=pd(i.points,1),t=pd(i.points,i.length/e.length),n=t.list.map(o=>({...o,d:o.d/t.length*i.length})),s=n.map(o=>o.x),r=n.map(o=>o.z),a=n.map(o=>o.y);return{...i,table:n,bounds:{minX:Math.min(...s),maxX:Math.max(...s),minZ:Math.min(...r),maxZ:Math.max(...r),minY:Math.min(...a),maxY:Math.max(...a)},repairFractions:[.12,.46,.79],checkpointCount:8}}var Ya=Wm.map(jm),bt=i=>Ya.find(e=>e.id===i)||Ya[0];function ns(i,e){let t=md(e,i.length),n=i.table,s=0,r=n.length-1;for(;r-s>1;){let l=s+r>>1;n[l].d>t?r=l:s=l}let a=n[s],o=n[r],c=(t-a.d)/(o.d-a.d||1);return{x:yl(a.x,o.x,c),y:yl(a.y,o.y,c),z:yl(a.z,o.z,c)}}var Km=i=>Math.atan2(Math.sin(i),Math.cos(i));function Qe(i,e,t=0){let n=typeof i=="string"?bt(i):i,s=ns(n,e),r=ns(n,e-1),a=ns(n,e+1),o=Math.hypot(a.x-r.x,a.z-r.z)||1,c=(a.x-r.x)/o,l=(a.z-r.z)/o,h=(a.y-r.y)/o,u=ns(n,e-5),d=ns(n,e+5),f=Km(Math.atan2(d.x-a.x,d.z-a.z)-Math.atan2(r.x-u.x,r.z-u.z))/6;return{...s,x:s.x-l*t,z:s.z+c*t,tx:c,tz:l,yaw:Math.atan2(c,l),pitch:-Math.atan(h),grade:h,curvature:f}}function Za(i,e){let t=ns(i,e),n=i.bounds,s=n.maxX-n.minX,r=n.maxZ-n.minZ,a=80/Math.max(s,r);return{x:50+(t.x-(n.minX+n.maxX)/2)*a,y:50+(t.z-(n.minZ+n.maxZ)/2)*a}}function Ml(i){return Array.from({length:97},(e,t)=>{let n=Za(i,t/96*i.length);return`${t?"L":"M"}${n.x.toFixed(2)},${n.y.toFixed(2)}`}).join(" ")+" Z"}function gd(i,e,t,n=3.45,s=10.5){let r=Qe(i,e,t),a=Qe(i,e+12,t*.35),o=ns(i,e-s);return{eye:[r.x-r.tx*s,Math.max(r.y+n,o.y+2),r.z-r.tz*s],aim:[r.x+r.tx*16+(a.x-r.x-r.tx*12)*.25,r.y+1+(a.y-r.y)*.4,r.z+r.tz*16+(a.z-r.z-r.tz*12)*.25]}}function bd(i,e,t=0){let n=i.bounds,s=[(n.minX+n.maxX)/2,(n.minY+n.maxY)/2,(n.minZ+n.maxZ)/2],r=Math.hypot(n.maxX-n.minX,n.maxY-n.minY,n.maxZ-n.minZ)/2+i.halfWidth+12,a=Math.atan(Math.tan(20*Math.PI/180)*Math.min(1,e)),o=r/Math.sin(a)*1.1,c=o/Math.hypot(1,.95);return{eye:[s[0]+Math.sin(t+.6)*c,s[1]+c*.95,s[2]+Math.cos(t+.6)*c],aim:s,far:o+r*2+50}}var Sl=new Map,Jm=Math.PI*2,$a=30,Ds=(i,e)=>(i%e+e)%e,Fr=i=>Math.atan2(Math.sin(i),Math.cos(i)),is=(i,e,t)=>i+(e-i)*t,_d=(i,e)=>Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z);function Ym(i,e=!1){let t=[],n=0,s=a=>e?i[Ds(a,i.length)]:i[Math.max(0,Math.min(i.length-1,a))],r=(i.length-(e?0:1))*24;for(let a=0;a<=r;a++){let o=a/r*(i.length-(e?0:1)),c=Math.min(Math.floor(o),i.length-1),l=o-c,h=[s(c-1),s(c),s(c+1),s(c+2)],u={};for(let d of["x","y","z"])u[d]=.5*(2*h[1][d]+(-h[0][d]+h[2][d])*l+(2*h[0][d]-5*h[1][d]+4*h[2][d]-h[3][d])*l*l+(-h[0][d]+3*h[1][d]-3*h[2][d]+h[3][d])*l*l*l);a&&(n+=_d(u,t[a-1])),t.push({...u,d:n})}return{table:t,length:n}}var Qa=i=>(i=Math.max(0,Math.min(1,i)),i*i*i*(10+i*(-15+6*i)));function wl(i,e=200){let t=[],n=0;for(let s=0;s<=e;s++){let r=i(s/e);s&&(n+=_d(r,t[s-1])),t.push({...r,d:n})}return{table:t,length:n}}function Zm(i){let e=0;for(let t=1;t<i.table.length-1;t++){let n=i.table[t-1],s=i.table[t],r=i.table[t+1],a=Math.hypot(s.x-n.x,s.z-n.z),o=Math.hypot(r.x-s.x,r.z-s.z),c=Math.hypot(r.x-n.x,r.z-n.z);e=Math.max(e,2*Math.abs((s.x-n.x)*(r.z-n.z)-(s.z-n.z)*(r.x-n.x))/(a*o*c||1e-12))}return e}function vd(i,e,t,n,s,r){let a=[i,{x:i.x+t.x*s,y:i.y+(t.grade||0)*s,z:i.z+t.z*s},{x:i.x+t.x*s*2,y:i.y+(t.grade||0)*s*2,z:i.z+t.z*s*2},{x:e.x-n.x*r*2,y:e.y-(n.grade||0)*r*2,z:e.z-n.z*r*2},{x:e.x-n.x*r,y:e.y-(n.grade||0)*r,z:e.z-n.z*r},e];return wl(o=>{let c=1-o,l=[c**5,5*c**4*o,10*c**3*o*o,10*c*c*o**3,5*c*o**4,o**5],h={};for(let u of["x","y","z"])h[u]=a.reduce((d,f,m)=>d+f[u]*l[m],0);return h},200)}function $m(i,e,t,n,s=()=>!0){let r=[];for(let a of[15,30,50,80,120,180,260])for(let o of[15,30,50,80,120,180,260]){let c=vd(i,e,t,n,a,o);Zm(c)<1/18&&s(c)&&r.push({...c,controls:{lead:a,tail:o}})}if(r.sort((a,o)=>a.length-o.length),!r.length)throw Error("Cannot fit a smooth full-width service road");return r[0]}function xd(i,e){return{length:i.length+e.length,controls:e.controls||i.controls,table:[...i.table,...e.table.slice(1).map(t=>({...t,d:t.d+i.length}))]}}function Qm(i,e,t,n,s){let r=(x,b,y,E,S,v)=>s?vd(b,y,E,S,s[x].lead,s[x].tail):$m(b,y,E,S,v),a=x=>x.table.filter((b,y)=>y%5===0).every(b=>Math.min(...i.table.filter((y,E)=>E%6===0).map(y=>Math.hypot(b.x-y.x,b.z-y.z)))>i.halfWidth+2),o=e.side*(i.halfWidth+4),c=80,l=60,h=wl(x=>{let b=e.gate+c*x,y=Qe(i,b,o*Qa(x*c/60));return{x:y.x,y:y.y,z:y.z,mainStation:b}}),u=h.table.at(-1),d=Qe(i,e.gate+c,o),f=xd(h,r("access",u,t,{x:d.tx,z:d.tz,grade:d.grade},{x:e.hubRight.x,z:e.hubRight.z},a)),m=wl(x=>{let b=n.station-l+l*x,y=Qe(i,b,o*(1-Qa(x)));return{x:y.x,y:y.y,z:y.z,mainStation:b}}),_=m.table[0],g=Qe(i,n.station-l,o),p=r("exit",t,_,{x:-e.anchor.tx,z:-e.anchor.tz},{x:g.tx,z:g.tz,grade:g.grade},a);return{access:{...f,mouthWidth:i.halfWidth,taperLength:h.length,parallelLength:h.length,uvStation:e.gate},exit:{...xd(p,m),endMouthWidth:i.halfWidth,parallelStart:p.length,taperLength:m.length,uvStation:n.station-p.length-m.length}}}function Ni(i,e){return i.mouthWidth?is(i.mouthWidth,i.width,Qa(e/i.taperLength)):i.endMouthWidth?is(i.width,i.endMouthWidth,Qa((e-i.parallelStart)/i.taperLength)):i.width}function eo(i){let e=ct(i);return e.emergency?e.kind==="patrol"?"police":e.kind:null}function Ls(i,e){if(e=i.closed?Ds(e,i.length):Math.max(0,Math.min(i.length,e)),i.main)return Qe(i.track,i.station+e);let t=i.table,n=0,s=t.length-1;for(;s-n>1;){let c=n+s>>1;t[c].d>e?s=c:n=c}let r=t[n],a=t[s],o=(e-r.d)/(a.d-r.d||1);return{x:is(r.x,a.x,o),y:is(r.y,a.y,o),z:is(r.z,a.z,o),...Number.isFinite(r.contactStation)&&Number.isFinite(a.contactStation)?{contactStation:is(r.contactStation,a.contactStation,o)}:{},...Number.isFinite(r.mainStation)&&Number.isFinite(a.mainStation)?{mainStation:is(r.mainStation,a.mainStation,o)}:{}}}function pt(i,e,t=0,n=1){if(i.main){let f=Qe(i.track,i.station+e,t*n);return{...f,tx:f.tx*n,tz:f.tz*n,yaw:Fr(f.yaw+(n<0?Math.PI:0)),pitch:f.pitch*n,grade:f.grade*n}}let s=Ls(i,e),r=Ls(i,e-.6),a=Ls(i,e+.6),o=Math.hypot(a.x-r.x,a.z-r.z)||1,c=(a.x-r.x)/o*n,l=(a.z-r.z)/o*n,h=Ls(i,e-3),u=Ls(i,e+3),d=Fr(Math.atan2(u.x-a.x,u.z-a.z)-Math.atan2(r.x-h.x,r.z-h.z))/4.8;return{...s,x:s.x-l*t,z:s.z+c*t,tx:c,tz:l,yaw:Math.atan2(c,l),grade:(a.y-r.y)/o*n,pitch:-Math.atan((a.y-r.y)/o)*n,curvature:d}}function eg(i,e){let{gate:t,side:n}=e,s=Qe(i,t),r=Qe(i,t+80),a={x:-s.tz*n,z:s.tx*n},o={x:-r.tz*n,z:r.tx*n},c={x:r.x+o.x*280+r.tx*80,y:s.y,z:r.z+o.z*280+r.tz*80},l={x:c.x+r.tx*48,y:s.y,z:c.z+r.tz*48},h={gate:t,side:n,p:s,r:a,anchor:r,hubRight:o,hubPose:c,center:l};return h.paths=Qm(i,h,c,{...Qe(i,t-$a),station:t-$a},e),h}function Rl(i){if(Sl.has(i))return Sl.get(i);let e=bt(i),t=fd[e.id].map(l=>eg(e,l)),n={},s={},r=[0,...t.flatMap(l=>[l.gate-$a,l.gate])].sort((l,h)=>l-h);r.forEach((l,h)=>n["n"+h]={id:"n"+h,...Qe(e,l),station:l,ports:[]});let a=l=>{s[l.id]=l,n[l.from].ports.push({edge:l.id,direction:1}),n[l.to].ports.push({edge:l.id,direction:-1})};r.forEach((l,h)=>a({id:"main-"+h,main:!0,track:e,station:l,from:"n"+h,to:"n"+(h+1)%r.length,length:(r[h+1]??e.length)-l,width:e.halfWidth})),t.forEach((l,h)=>{l.id="site-"+h,l.index=h,l.entry="n"+r.indexOf(l.gate),l.merge="n"+r.indexOf(l.gate-$a),l.hub="hub-"+h;let u=l.p,d=l.hubPose;n[l.hub]={id:l.hub,...d,ports:[]};let f=l.paths,m=f.access;a({id:"access-"+h,...m,from:l.entry,to:l.hub,width:6,site:h});let _=Array.from({length:96},(g,p)=>{let x=p/96*Jm;return{x:d.x+l.hubRight.x*48*Math.sin(x)+l.anchor.tx*(48-48*Math.cos(x)),y:d.y,z:d.z+l.hubRight.z*48*Math.sin(x)+l.anchor.tz*(48-48*Math.cos(x))}});a({id:"loop-"+h,...Ym(_,!0),closed:!0,from:l.hub,to:l.hub,width:6,site:h}),a({id:"exit-"+h,...f.exit,from:l.hub,to:l.merge,width:6,site:h}),l.scene={edge:"loop-"+h,d:s["loop-"+h].length*.25}});for(let l of Object.values(s).filter(h=>!h.main))for(let h of l.table){if(Number.isFinite(h.mainStation))continue;let u=null,d=(e.halfWidth+l.width+3)**2;for(let f of e.table){if(Math.abs(f.y-h.y)>1)continue;let m=(h.x-f.x)**2+(h.z-f.z)**2;m<d&&(d=m,u=f)}if(u){let f=t[l.site].gate;h.contactStation=f+(u.d-f+e.length*1.5)%e.length-e.length/2}}let o=[0,2].map((l,h)=>({id:"hospital-"+h,index:h,site:l,edge:"loop-"+l,d:s["loop-"+l].length*.69,label:h?"\u3082\u3082\u306E \u3073\u3087\u3046\u3044\u3093":"\u3042\u304A\u3044 \u3073\u3087\u3046\u3044\u3093",color:h?"#ef8baf":"#75c7ef"})),c={courseId:i,key:i+":candidates",kind:"all",sceneSites:t.map(l=>l.index),track:e,nodes:n,edges:s,sites:t,hospitals:o};return Sl.set(i,c),c}var El=new WeakMap,Tl=new Map;function tg(i){let e=bt(i);if(!Tl.has(e.id)){let t={id:"main-0",main:!0,track:e,station:0,from:"n0",to:"n0",length:e.length,width:e.halfWidth};Tl.set(e.id,{courseId:e.id,key:e.id+":main",kind:null,track:e,edges:{"main-0":t},nodes:{n0:{id:"n0",...Qe(e,0),station:0,ports:[{edge:"main-0",direction:1},{edge:"main-0",direction:-1}]}},sceneSites:[],sites:[],hospitals:[]})}return Tl.get(e.id)}function Rt(i){let e=eo(i.model),t=e&&i.missions?.plan?.length&&i.missions.plan.every(f=>f.kind===e);if(!t)return tg(i.courseId);let n=Rl(i.courseId),s=t?[...new Set(i.missions.plan.map(f=>f.site))].sort():[],r=t&&e==="ambulance"?[...new Set(i.missions.plan.map(f=>f.hospital))].sort():[],a=new Set([...s,...r.map(f=>n.hospitals[f].site)]),o=n.courseId+":"+(t?e:"main")+":"+s.join(",")+":"+r.join(",");El.has(n)||El.set(n,new Map);let c=El.get(n);if(c.has(o))return c.get(o);let l=Object.fromEntries(Object.values(n.edges).filter(f=>f.main||a.has(f.site)).map(f=>[f.id,f])),h=new Set(Object.values(l).flatMap(f=>[f.from,f.to])),u=Object.fromEntries([...h].map(f=>[f,{...n.nodes[f],ports:n.nodes[f].ports.filter(m=>l[m.edge])}])),d={...n,key:o,kind:t?e:null,sceneSites:s,nodes:u,edges:l,sites:n.sites.filter(f=>a.has(f.index)),hospitals:n.hospitals.filter(f=>r.includes(f.index))};return c.set(o,d),d}function to(i){let e=Rt(i),t=e.edges[i.road?.edge];if(!t)return null;if(t.main)return{station:Ds(t.station+i.road.d,e.track.length),offset:i.offset*i.road.direction};let n=pt(t,i.road.d,i.offset,i.road.direction),s=n.mainStation??n.contactStation;if(!Number.isFinite(s)){let o=t.mouthWidth&&i.road.d<t.parallelLength+35?t.uvStation+80:t.endMouthWidth&&i.road.d>t.parallelStart-35?t.uvStation+t.length-60:null;if(o===null)return null;let c=1/0;for(let l=o-35;l<=o+35;l+=2){let h=Qe(e.track,l),u=Math.hypot(n.x-h.x,n.z-h.z);u<c&&(c=u,s=l)}}let r=Qe(e.track,s),a=-(n.x-r.x)*r.tz+(n.z-r.z)*r.tx;return Math.abs(n.y-r.y)<1&&Math.hypot(n.x-r.x,n.z-r.z)<e.track.halfWidth+ct(i.model).width*.5?{station:Ds(s,e.track.length),offset:a}:null}function Fi(i){if(!i.road)return Qe(i.courseId,i.z,i.offset);let e=pt(Rt(i).edges[i.road.edge],i.road.d,i.offset,i.road.direction);return i.road.turnTimer>0&&(e.yaw=Fr(e.yaw+Math.PI*(1-i.road.turnTimer/.65)),e.tx=Math.sin(e.yaw),e.tz=Math.cos(e.yaw)),e}function Cl(i){let e=Rt(i).edges[i.road.edge];return e.main?Ds(e.station+i.road.d,bt(i.courseId).length):null}function Ur(i,e){let t=i.edges[e.edge],n=i.nodes[e.direction>0?t.to:t.from],s=pt(t,e.d,0,e.direction);return n.ports.filter(r=>!(r.edge===t.id&&r.direction===-e.direction)).map(r=>{let a=i.edges[r.edge],o=r.direction>0?Math.min(18,a.length):Math.max(0,a.length-18),c=Ls(a,o),l=Math.atan2(c.x-n.x,c.z-n.z);return{...r,angle:Fr(l-s.yaw)}}).filter(r=>Math.abs(r.angle)<2.9)}function yd(i,e,t){let n=i.edges[e.edge],s=i.edges[t.edge];if(!n.main)return 0;let r=i.sites.find(a=>a.index===s.site);return r?s.id.startsWith("access-")&&e.direction===1&&t.direction===1?r.side:s.id.startsWith("exit-")&&e.direction===-1&&t.direction===-1?-r.side:0:0}function Md(i,e){let t=Ur(i,e),n=i.edges[e.edge];return t.find(s=>n.main&&i.edges[s.edge].main&&s.direction===e.direction)||t.find(s=>n.closed&&s.edge===e.edge&&s.direction===e.direction)||t.sort((s,r)=>Math.abs(s.angle)-Math.abs(r.angle))[0]}function ng(i,e,t=0){let n=Ur(i,e),s=i.edges[e.edge],r=e.direction>0?s.to:s.from;if(e.intent?.node===r){let c=n.find(l=>l.edge===e.intent.edge&&l.direction===e.intent.direction);if(c)return c}let a=Md(i,e);if(!t)return a;let o=n.find(c=>yd(i,e,c)===t);return o||n.filter(c=>Al(i,e,c)===(t>0?"right":"left")).sort((c,l)=>Math.abs(l.angle)-Math.abs(c.angle))[0]||a}function Sd(i,e,t=()=>{}){let n=Rt(i),s=e;for(let r=0;s>1e-8&&r<12;r++){let a=i.road,o=n.edges[a.edge],c=a.d,l=a.direction>0?o.length-a.d:a.d,h=Math.min(s,Math.max(0,l));if(a.d+=h*a.direction,s-=h,o.main&&t(o,c,a.d,a.direction),h<l-1e-7)break;let u=Fi(i),d=ng(n,a,Number(i.steerR)-Number(i.steerL));if(!d){i.v=0;break}let f=n.edges[d.edge];if((a.intent?.node===(a.direction>0?o.to:o.from)||!f.main)&&(a.intent=null),o.main&&f.main&&a.direction===d.direction){a.edge=d.edge,a.d=d.direction>0?0:f.length,i.onMain=!0;continue}let m=pt(f,d.direction>0?0:f.length,0,d.direction),_=u.x-m.x,g=u.z-m.z,p=Math.max(0,_*m.tx+g*m.tz);a.edge=d.edge,a.direction=d.direction,a.d=d.direction>0?p:f.length-p,i.offset=Math.max(-Ni(f,d.direction>0?0:f.length)+1.5,Math.min(Ni(f,d.direction>0?0:f.length)-1.5,-_*m.tz+g*m.tx)),i.onMain=!!f.main,i.onMain&&(a.joinedTravel=0)}}function Ed(i){let e=i.missions?.active;return i.phase!=="race"||!e||["DONE","AUTO_STOP","FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPING","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"].includes(e.stage)||i.road.turnTimer>0?!1:(i.road.intent=null,i.road.turnTimer=.65,i.v=0,i.steerL=i.steerR=!1,i.steerV=0,!0)}function Td(i,e){return i.road.turnTimer<=0?!1:(i.road.turnTimer=Math.max(0,i.road.turnTimer-e),i.road.turnTimer||(i.road.direction*=-1,i.offset*=-1),!0)}function ig(i,e,t,n,s){i.paths||(i.paths=new Map);let r=[e,t,n,s].join(":");if(i.paths.has(r))return i.paths.get(r);let a=[{edge:e,direction:t,cost:0,path:[]}],o=new Set,c=null;for(;a.length;){a.sort((f,m)=>f.cost-m.cost);let l=a.shift(),h=l.edge+":"+l.direction;if(o.has(h))continue;o.add(h);let u=i.edges[l.edge],d={edge:u.id,d:l.direction>0?u.length:0,direction:l.direction};for(let f of Ur(i,d)){let m=i.edges[f.edge],_=[...l.path,f];if(m.id===n&&f.direction===s){c={cost:l.cost,path:_};break}a.push({edge:m.id,direction:f.direction,cost:l.cost+m.length,path:_})}if(c)break}return i.paths.set(r,c),c}function Al(i,e,t){let n=Md(i,e);if(!t||!n||t.edge===n.edge&&t.direction===n.direction)return"straight";let s=yd(i,e,t);return s?s>0?"right":"left":Fr(t.angle-n.angle)<0?"right":"left"}function wd(i,e){if(!e||!i.road)return null;let t=Rt(i),n=i.road,s=t.edges[n.edge],r=t.edges[e.edge];if(!s||!r)return null;let a=[];for(let _ of[n.direction,-n.direction]){if(s.id===r.id&&(!e.direction||e.direction===_)){let g=(e.d-n.d)*_;s.closed&&(g=Ds(g,s.length)),g>=-.1&&a.push({cost:Math.max(0,g),direction:_,path:[]})}for(let g of[1,-1]){if(e.direction&&e.direction!==g)continue;let p=ig(t,s.id,_,r.id,g);p&&a.push({cost:(_>0?s.length-n.d:n.d)+p.cost+(g>0?e.d:r.length-e.d),direction:_,path:p.path})}}a.sort((_,g)=>_.cost-g.cost);let o=a[0];if(!o)return null;let c=Ur(t,n),l=o.path[0]||(s.closed?{edge:s.id,direction:o.direction}:null),h=l&&c.find(_=>_.edge===l.edge&&_.direction===l.direction),u=o.direction!==n.direction,d={...n,d:o.direction>0?s.length:0,direction:o.direction},f=o.direction>0?s.length-n.d:n.d,m=null;if(!u)for(let _ of o.path){let g=Ur(t,d).find(b=>b.edge===_.edge&&b.direction===_.direction),p=Al(t,d,g);if(p!=="straight"){let b=t.edges[d.edge];m={node:d.direction>0?b.to:b.from,edge:_.edge,direction:_.direction,turn:p,distance:f};break}let x=t.edges[_.edge];f+=x.length,d={edge:x.id,d:_.direction>0?x.length:0,direction:_.direction}}return{...o,uTurn:u,turn:Al(t,n,h),remaining:n.direction>0?s.length-n.d:n.d,target:pt(r,e.d),upcoming:m}}function Ad(i,e){let t=i.road,n=Number(i.steerR)-Number(i.steerL);if(t){if(i.steerL&&i.steerR){t.intent=null;return}if(n)if(e?.upcoming&&!e.uTurn&&e.upcoming.distance<140){let s=e.upcoming.turn==="right"?1:-1;t.intent=n===s?{...e.upcoming}:null}else t.intent=null}}function no(i,e,t){if(!e||!t||!i.road)return[];let n=Rt(i),s=i.road,r=n.edges[s.edge];if(!r)return[];let a=e.direction||(e.uTurn?-s.direction:s.direction),o=[];if(!e.path.length){let c=Number.isFinite(e.cost)&&e.cost>0?e.cost:r.closed?r.length:Math.max(0,12-(s.joinedTravel||0));return[{edge:r,start:s.d,end:s.d+c*a}]}return o.push({edge:r,start:s.d,end:a>0?r.length:0}),e.path.forEach((c,l)=>{let h=n.edges[c.edge];o.push({edge:h,start:c.direction>0?0:h.length,end:l===e.path.length-1?t.d:c.direction>0?h.length:0})}),o}function Rd(i){let e=Object.values(i.edges).flatMap(d=>Array.from({length:25},(f,m)=>pt(d,d.length*m/24))),t=e.map(d=>d.x),n=e.map(d=>d.z),s=Math.min(...t),r=Math.max(...t),a=Math.min(...n),o=Math.max(...n),c=88/Math.max(r-s,o-a),l=d=>({x:50+(d.x-(s+r)/2)*c,y:50+(d.z-(a+o)/2)*c}),h=(d,f=0,m=d.length)=>{let _=Math.max(1,Math.ceil(Math.abs(m-f)/8));return Array.from({length:_+1},(g,p)=>{let x=l(pt(d,f+(m-f)*p/_));return`${p?"L":"M"}${x.x.toFixed(2)},${x.y.toFixed(2)}`}).join(" ")},u=d=>h(d);return{project:l,path:u,segment:h,main:Object.values(i.edges).filter(d=>d.main).map(u).join(" "),branches:Object.values(i.edges).filter(d=>!d.main).map(u).join(" ")}}var Cd=i=>{let e=i>>>0;return()=>(e=Math.imul(1664525,e)+1013904223>>>0,e/4294967296)};function Pd(i,e=12345){let t=bt(i),n=Cd(e+17),s=t.difficulty===1?[.3,.66]:t.theme==="city"?[.3,.4,.66,.94]:[.27,.37,.62,.89],r=["tyre","rock","crate","barrier"],a=[];for(let o=0;o<2;o++)s.forEach((c,l)=>{let h=r[(l+o)%4],u=h==="barrier"?1.1:h==="rock"?.85:.65;a.push({id:`${i}-${o}-${l}`,type:h,distance:t.length*(o+c),offset:(l%2?1:-1)*(t.halfWidth*.52+n()*.3),radius:u,severity:h==="rock"?1.15:.95,hit:!1})});return a}function io(i){return Cd(i)}var sg={5:"police",6:"ambulance",7:"fire"},rg=new Set(["AUTO_STOP","FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPING","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"]),wn=i=>!!i.missions?.active&&rg.has(i.missions.active.stage),ag={fire:"\u304B\u3058\u3060\uFF01 \u3052\u3093\u3070\u3078 \u3080\u304B\u304A\u3046",ambulance:"\u3072\u3068\u3092 \u305F\u3059\u3051\u3088\u3046",police:"\u306B\u3052\u308B \u304F\u308B\u307E\u3092 \u304A\u3044\u304B\u3051\u3088\u3046"};function Ld(i){let e=sg[i.model];if(!e){i.missions=null,i.road=null,i.ledger=null,i.heroClear=!1,i.onMain=!0;return}let t=Rl(i.courseId),n=io(i.seed+8001),s=[...t.sites],r=[];for(let a=0;a<2;a++){let o=s.splice(Math.floor(n()*s.length),1)[0],c=ct(i.model),l=c.top*3+c.top**2/(2*c.brake)+35+n()*30;r.push({id:`${i.courseId}-${e}-${a}-${o.index}`,lap:a,kind:e,site:o.index,dispatchAt:Math.max(25,o.gate-l),fireCount:n()>.5?3:2,hospital:Math.floor(n()*t.hospitals.length),escapeStart:n()*t.edges["loop-"+o.index].length})}i.missions={plan:r,active:null,completed:[],notice:null,serial:0},i.road={edge:"main-0",d:0,direction:1,turnTimer:0},i.onMain=!0,i.ledger={laps:0,next:1,blocked:0},i.heroClear=!1}function Or(i,e){i.missions.notice={id:++i.missions.serial,text:e}}function Ui(i,e){let t=i.missions?.active;t&&(e===void 0||t.pointer===e)&&(t.pointer=null,t.holding=-1)}function Pl(i,e,t){let n=i.missions?.active;return i.phase!=="race"||n?.stage!=="FIRE_ACTION"||n.fires[e]===void 0||n.fires[e]<=0||n.pointer!==null?!1:(n.pointer=t,n.holding=e,!0)}function Dd(i){let e=i.missions?.active;return i.phase!=="race"||!e?!1:e.stage==="PATIENT_WAIT"?(e.stage="BOARDING",e.animation=0,!0):e.stage==="SUSPECT_STOPPED"?(e.stage="POLICE_CHECK",e.animation=0,!0):!1}function ci(i){let e=i.missions?.active;if(!e||e.kind!==eo(i.model)||i.phase==="menu"||i.phase==="finish")return null;let t=Rt(i),n=t.sites.find(s=>s.index===e.site);if(e.stage==="RETURN_TO_TRACK"||e.stage==="DONE"){let s=t.sites.find(a=>a.index===t.edges[i.road.edge]?.site)||n;return{edge:Object.values(t.edges).find(a=>a.main&&a.from===s.merge).id,d:12,direction:1,label:"\u307B\u3093\u305B\u3093\u3078 \u3082\u3069\u308D\u3046"}}return e.stage==="DRIVE_TO_HOSPITAL"||e.stage==="HANDOFF"||e.stage==="AUTO_STOP"&&e.stopRole==="hospital"?{...t.hospitals.find(s=>s.index===e.hospital)}:e.kind==="police"?{edge:"loop-"+e.site,d:e.suspect.d,label:e.stage==="CHASE_LOOP"?"\u30B5\u30A4\u30EC\u30F3\u3067 \u3064\u304B\u307E\u3048\u3088\u3046":"\u306B\u3052\u308B \u304F\u308B\u307E\u3092 \u304A\u304A\u3046"}:{...n.scene,label:e.kind==="fire"?"\u304B\u3058\u306E \u3052\u3093\u3070":"\u305F\u3059\u3051\u308B \u3072\u3068"}}function ss(i){let e=i.missions?.active;if(!e||e.kind!==eo(i.model)||i.phase==="menu"||i.phase==="finish")return null;if(e?.stage==="CHASE_LOOP"&&i.road.edge==="loop-"+e.site){let t=Rt(i).edges[i.road.edge];return{uTurn:i.road.direction<0,turn:"straight",remaining:t.length-i.road.d,cost:0,target:pt(t,e.suspect.d),path:[]}}if(e?.stage==="RETURN_TO_TRACK"&&i.onMain){let t=Rt(i).edges[i.road.edge];return{uTurn:i.road.direction<0,turn:"straight",remaining:1/0,cost:12-(i.road.joinedTravel||0),target:pt(t,Math.min(t.length,i.road.d+20)),path:[]}}return wd(i,ci(i))}function Nd(i,e){let t=i.missions;if(!t||t.active||i.ledger.laps>=2||!i.onMain)return!1;let n=t.plan[i.ledger.laps];return t.completed.includes(n.id)||e<n.dispatchAt?!1:(t.active={...n,stage:"DRIVE_TO_SCENE",animation:0,holding:-1,pointer:null,fires:Array(n.fireCount).fill(2.5),patientOnboard:!1,suspect:{d:n.escapeStart,speed:ct(i.model).top*.75,stopped:!1,offset:0},celebration:0},i.siren=n.kind!=="police",Or(i,ag[n.kind]),!0)}function Id(i){let e=i.missions,t=e.active;e.completed.includes(t.id)||(e.completed.push(t.id),t.stage="SUCCESS",t.celebration=1.1,t.holding=-1,t.pointer=null,i.siren=!1,Or(i,t.kind==="ambulance"?"\u3073\u3087\u3046\u3044\u3093\u306B \u3068\u3069\u3051\u305F\u306D\uFF01":"\u304A\u3057\u3054\u3068 \u305B\u3044\u3053\u3046\uFF01"))}function Fd(i,e){let t=i.missions,n=t?.active;if(n){if(n.kind==="police"&&!n.suspect.stopped){n.stage==="SUSPECT_STOPPING"&&(n.suspect.speed=Math.max(0,n.suspect.speed-ct(i.model).brake*e));let s=Rt(i).edges["loop-"+n.site];n.suspect.d=(n.suspect.d+n.suspect.speed*e)%s.length,n.stage==="SUSPECT_STOPPING"&&n.suspect.speed===0&&(n.suspect.stopped=!0)}if(n.stage==="DRIVE_TO_SCENE"&&i.road.edge==="loop-"+n.site&&n.kind==="police"&&(n.stage="CHASE_LOOP"),n.stage==="CHASE_LOOP"&&i.siren&&i.road.edge==="loop-"+n.site){let s=Rt(i).edges[i.road.edge],r=pt(s,i.road.d,i.offset,i.road.direction),a=pt(s,n.suspect.d),o=Math.abs(i.road.d-n.suspect.d);Math.min(o,s.length-o)<11&&Math.hypot(r.x-a.x,r.z-a.z)<10&&(n.stage="SUSPECT_STOPPING",n.parkingSide=Math.sign(i.offset*i.road.direction)||-1,i.boost=0)}if(n.stage==="SUSPECT_STOPPING"){let s=1-Math.exp(-e*4),r=n.suspect.offset;n.suspect.offset+=(-n.parkingSide*2.1-n.suspect.offset)*s,n.suspect.motionSteer=(n.suspect.offset-r)/Math.max(e,.001),i.offset+=(n.parkingSide*2.1*i.road.direction-i.offset)*s}n.stage==="SUSPECT_STOPPING"&&n.suspect.stopped&&i.v<.05&&Math.abs(i.offset*i.road.direction-n.parkingSide*2.1)<.08&&Math.abs(n.suspect.offset+n.parkingSide*2.1)<.08&&(n.stage="SUSPECT_STOPPED",n.animation=0),n.stage==="FIRE_ACTION"&&n.holding>=0&&(n.fires[n.holding]=Math.max(0,n.fires[n.holding]-e),n.fires[n.holding]||Ui(i),n.fires.every(s=>s===0)&&Id(i)),["BOARDING","HANDOFF","POLICE_CHECK"].includes(n.stage)&&(n.animation+=e,n.animation>=5&&(n.stage==="BOARDING"?(n.patientOnboard=!0,n.stage="DRIVE_TO_HOSPITAL",Or(i,"\u3073\u3087\u3046\u3044\u3093\u3078 \u306F\u3053\u307C\u3046")):(n.stage==="HANDOFF"&&(n.patientOnboard=!1),Id(i)))),n.stage==="SUCCESS"&&(n.celebration=Math.max(0,n.celebration-e),n.celebration===0&&(n.stage="RETURN_TO_TRACK",Or(i,"\u3084\u3058\u308B\u3057\u3092 \u307F\u3066 \u307B\u3093\u305B\u3093\u3078"))),n.stage==="DONE"&&(t.active=null,Or(i,"\u307B\u3093\u305B\u3093\u306B \u3082\u3069\u3063\u305F\u3088\uFF01"))}}function Ud(i){let e=i.missions?.active;if(!e||!["DRIVE_TO_SCENE","DRIVE_TO_HOSPITAL","AUTO_STOP"].includes(e.stage)||e.kind==="police")return null;let t=ci(i),n=Rt(i).edges[i.road.edge];if(t.edge!==n.id)return null;let s=(t.d-i.road.d)*i.road.direction;return n.closed&&(s=(s%n.length+n.length)%n.length),s<Math.max(20,i.v*i.v/(2*ct(i.model).brake)+8)?(e.stage!=="AUTO_STOP"&&(e.stopRole=e.stage==="DRIVE_TO_HOSPITAL"?"hospital":"scene"),e.stage="AUTO_STOP",s):null}function Od(i){let e=i.missions?.active;e?.stage==="AUTO_STOP"&&(i.v=0,i.steerV=0,i.steerL=i.steerR=!1,Ui(i),e.stage=e.stopRole==="hospital"?"HANDOFF":e.kind==="fire"?"FIRE_ACTION":"PATIENT_WAIT",e.animation=0)}var og={fire:"\u{1F692}",ambulance:"\u{1F691}",police:"\u{1F693}"},cg={AUTO_STOP:"\u270B \u3042\u3093\u305C\u3093\u306B \u3068\u307E\u308B\u3088",FIRE_ACTION:"\u{1F4A6} \u3072\u3092 \u306A\u304C\u304A\u3057\uFF01 \u305C\u3093\u3076 \u3051\u305D\u3046",PATIENT_WAIT:"\u{1F44B} \u3072\u3068\u3092 \u30BF\u30C3\u30C1\u3057\u3066 \u305F\u3059\u3051\u3088\u3046",BOARDING:"\u{1F691} \u3044\u3063\u3057\u3087\u306B \u304F\u308B\u307E\u3078 \u306E\u308D\u3046",HANDOFF:"\u{1F3E5} \u3073\u3087\u3046\u3044\u3093\u3078 \u3042\u3093\u306A\u3044\u3059\u308B\u3088",SUSPECT_STOPPING:"\u270B \u3042\u3093\u305C\u3093\u306B \u3068\u307E\u308B\u3088",SUSPECT_STOPPED:"\u{1F693} \u3068\u307E\u3063\u305F \u304F\u308B\u307E\u3092 \u30BF\u30C3\u30C1",POLICE_CHECK:"\u{1F46E} \u304A\u307E\u308F\u308A\u3055\u3093\u304C \u304B\u304F\u306B\u3093\u3059\u308B\u3088",SUCCESS:"\u{1F31F} \u304A\u3057\u3054\u3068 \u305B\u3044\u3053\u3046\uFF01",RETURN_TO_TRACK:"\u{1F3C1} \u3084\u3058\u308B\u3057\u3067 \u307B\u3093\u305B\u3093\u3078 \u3082\u3069\u308D\u3046"};function Bd(i){let e=Rt(i),t=i.missions?.active,n=ss(i);return{activeRoads:{key:e.key,kind:e.kind,edges:Object.keys(e.edges),sceneSites:e.sceneSites,hospitals:e.hospitals.map(s=>s.index)},road:i.road?{...i.road}:null,onMain:i.onMain,ledger:i.ledger?{...i.ledger}:null,heroClear:i.heroClear||!1,mission:i.missions?{completed:i.missions.completed.length,plan:i.missions.plan.map(s=>({...s})),active:t?{...t,fires:[...t.fires],suspect:{...t.suspect}}:null,navigation:n?{uTurn:n.uTurn,turn:n.turn,remaining:n.remaining,cost:n.cost,upcoming:n.upcoming,target:ci(i)}:null}:null}}function kd(i,{clearControls:e,muted:t,beep:n,event:s}){let r=g=>document.getElementById(g),a=new Map,o=!1,c="",l=null,h=0,u=null;function d(){window.speechSynthesis?.cancel()}function f(g){if(n(650),t()||!window.speechSynthesis||!window.SpeechSynthesisUtterance)return;let p=speechSynthesis.getVoices().find(x=>x.localService&&/^ja(?:-|_)/i.test(x.lang));if(p)try{d();let x=new SpeechSynthesisUtterance(g);x.voice=p,x.lang=p.lang,x.rate=.85,speechSynthesis.speak(x)}catch(x){s("radio-unavailable",x.message)}}r("uturn").addEventListener("click",()=>{Ed(i)&&(e(),n(470))});function m(){let g=i.missions,p=g?.active,x=wn(i),b=!!g&&i.phase!=="menu"&&i.phase!=="finish";g!==u&&(h=0,u=g),x&&!o&&e(),o=x,document.body.classList.toggle("mission-working",b&&x),r("mission-hud").hidden=!b,r("mission-count").textContent=`\u{1F31F} \u304A\u3057\u3054\u3068 ${g?.completed.length||0} / 2`,r("uturn").hidden=!b||!p||x||p.stage==="DONE",r("uturn").disabled=i.phase!=="race"||i.road?.turnTimer>0,r("siren").setAttribute("aria-pressed",String(i.siren));let y=ss(i),E=g?.notice;E&&E.id!==h&&i.phase==="race"&&(h=E.id,r("radio-message").textContent=`\u{1F4FB} ${E.text}`,f(E.text)),E||(r("radio-message").textContent="\u{1F3C1} \u306F\u3057\u308A\u306A\u304C\u3089 \u304A\u3057\u3054\u3068 \u3057\u3088\u3046");let S=y?.uTurn?"\u21B6":y?.upcoming?.turn==="left"&&y.upcoming.distance<160?"\u2B05":y?.upcoming?.turn==="right"&&y.upcoming.distance<160?"\u27A1":"\u2B06";r("mission-arrow").textContent=x?p?.stage==="SUCCESS"?"\u{1F31F}":og[p?.kind]||"\u270B":p?S:"\u{1F3C1}",r("mission-instruction").textContent=x||p?.stage==="RETURN_TO_TRACK"?cg[p.stage]||"":p?`${ci(i)?.label||""}${y?.uTurn?"\u3000\u30E6\u30FC\u30BF\u30FC\u30F3 \u3057\u3088\u3046":y?.upcoming?.distance<160?"\u3000"+(y.upcoming.turn==="right"?"\u307F\u304E\u3078":"\u3072\u3060\u308A\u3078"):""}`:"\u3064\u304E\u306E \u304A\u3057\u3054\u3068\u3092 \u307E\u3068\u3046";let v=b?Rt(i).key:"";if(v!==c&&(c=v,l=b?Rd(Rt(i)):null),r("mini-map-branches").setAttribute("d",l?.branches||""),r("mini-map-heading").style.display=l?"":"none",r("mini-map-target").style.display=l&&p?"":"none",r("mini-map-hospitals").innerHTML="",r("mini-map-route").setAttribute("d",""),l){let M=Rt(i);r("mini-map-path").setAttribute("d",l.main);let I=Fi(i),w=l.project(I);if(r("mini-map-car").setAttribute("cx",w.x),r("mini-map-car").setAttribute("cy",w.y),r("mini-map-heading").setAttribute("transform",`translate(${w.x} ${w.y}) rotate(${Math.atan2(I.tx,-I.tz)*180/Math.PI})`),r("mini-map-pits").innerHTML=M.track.repairFractions.map(R=>{let D=Object.values(M.edges).find(C=>C.main&&R*M.track.length>=C.station&&R*M.track.length<C.station+C.length),L=l.project(pt(D,R*M.track.length-D.station));return`<rect x="${L.x-1.5}" y="${L.y-1.5}" width="3" height="3" fill="#75e8a2"/>`}).join(""),r("mini-map-hospitals").innerHTML=M.hospitals.map(R=>{let D=l.project(pt(M.edges[R.edge],R.d));return`<text x="${D.x}" y="${D.y}" fill="${R.color}" font-size="8" text-anchor="middle">H</text>`}).join(""),p){let R=ci(i),D=l.project(pt(M.edges[R.edge],R.d));if(r("mini-map-target").setAttribute("cx",D.x),r("mini-map-target").setAttribute("cy",D.y),y){let L=no(i,y,R).map(C=>l.segment(C.edge,C.start,C.end));r("mini-map-route").setAttribute("d",L.join(" "))}}}}function _(g){let p=new Set;for(let x of g||[]){if(!x.visible||i.phase!=="race"||!wn(i))continue;p.add(x.id);let b=a.get(x.id);if(!b){b=document.createElement("button"),b.className="mission-target",b.dataset.target=x.id,b.setAttribute("aria-label",x.label),b.innerHTML="<span>\u{1F446}</span>",r("mission-targets").append(b),a.set(x.id,b),b.addEventListener("pointerdown",S=>{if(S.preventDefault(),x.id.startsWith("fire-")&&Pl(i,Number(x.id.slice(5)),S.pointerId)){try{b.setPointerCapture(S.pointerId)}catch{}b.classList.add("holding")}});let E=S=>{Ui(i,S.pointerId),b.classList.remove("holding")};for(let S of["pointerup","pointercancel","lostpointercapture"])b.addEventListener(S,E);b.addEventListener("click",()=>{x.id.startsWith("fire-")||Dd(i)}),b.addEventListener("keydown",S=>{x.id.startsWith("fire-")&&!S.repeat&&(S.key===" "||S.key==="Enter")&&(S.preventDefault(),Pl(i,Number(x.id.slice(5)),"keyboard"))}),b.addEventListener("keyup",()=>{Ui(i,"keyboard"),b.classList.remove("holding")}),b.addEventListener("blur",()=>Ui(i))}b.hidden=!1,b.style.left=x.x+"px",b.style.top=x.y+"px";let y=i.missions?.active?.fires[Number(x.id.slice(5))];b.style.setProperty("--work-progress",x.id.startsWith("fire-")?`${100*(1-y/2.5)}%`:"0%")}for(let[x,b]of a)p.has(x)||(b.hidden=!0,b.classList.remove("holding"))}return{update:m,draw:_,cancelSpeech:d}}var Vt=Object.freeze({impactThreshold:16,topFactor:.6,accelFactor:.65,handlingFactor:.68,repairSeconds:3,drift:.35,repairLead:170}),Ns=Object.freeze({penaltySeconds:10,stopSeconds:3,warningSeconds:1.2,minimumReactionSeconds:2,pedestrianSpeed:3.2});function Oi(i,e,t,n,s){let r=ct(n),a=s.radius||.3;if(s.distance<Math.min(i,e)-r.length/2-a||s.distance>Math.max(i,e)+r.length/2+a)return null;let o=r.width/2+a-Math.abs(t-s.offset);return o<=0?null:{strength:Math.max(.05,Math.min(1,o/Math.min(r.width,a*2)))}}function zd(i,e){let t=oi(i.model,i.parts.body),n=0,s=1/0;return t.forEach((r,a)=>{let o=(i.z+r.z-e.distance)**2+(i.offset-r.x-e.offset)**2;o<s&&(s=o,n=a)}),n}var qt=i=>i.flatMask.some(Boolean);function Br(i){let e=oi(i.model).length;return Object.assign(i,{flatMask:Array(e).fill(!1),flatVisual:Array(e).fill(0),damageSide:0,damageAge:0,repairTimer:0,repairProgress:0,pitAssist:!1,pitExit:!1,stopTimer:0,penaltyTime:0}),i}function Bi(i,e){let t=Math.floor(e/i.length),n;for(let s=t;s<=t+1;s++)for(let r of i.repairFractions){let a=(s+r)*i.length,o=a-e;o>=-22&&(!n||o<n.delta)&&(n={center:a,delta:o,offset:i.halfWidth+2.5})}return n}function Fs(i,e,t){let n=Bi(i,e);return!!n&&Math.abs(n.delta)<=26&&t>=i.halfWidth-.5&&t<=i.halfWidth+5}function Us(i,e,t,n=Vt){if(t<n.impactThreshold)return"contact";let s=zd(i,e);if(i.flatMask[s])return"contact";i.flatMask[s]=!0,i.damageAge=0,i.boost=0,i.v=Math.min(i.v,ct(i.model).top*n.topFactor),i.pitAssist=!0;let r=oi(i.model,i.parts.body)[s];return i.damageSide=r.x<0?1:r.x>0?-1:0,ct(i.model).kind==="bike"&&(i.fallTimer=.9,i.roll=.8),"puncture"}function Os(i,e,t=Vt){i.damageAge+=e,i.stopTimer=Math.max(0,i.stopTimer-e);let n=null;return i.repairTimer>0&&(i.repairTimer=Math.max(0,i.repairTimer-e),i.repairProgress=1-i.repairTimer/t.repairSeconds,i.repairTimer===0&&(i.flatMask.fill(!1),i.flatVisual.fill(0),i.damageSide=0,i.pitAssist=!1,i.pitExit=!0,i.roll=0,i.pitch=0,n="repaired")),i.flatVisual=i.flatVisual.map((s,r)=>{let a=i.flatMask[r]?i.repairTimer>0?1-i.repairProgress:1:0;return s+(a-s)*Math.min(1,e*7)}),n}function Bs(i,e,t=Vt){let n=Bi(e,i.z);return qt(i)&&i.repairTimer<=0&&n&&Math.abs(n.delta)<=22&&Math.abs(i.offset-n.offset)<1.6?(i.repairTimer=t.repairSeconds,i.repairProgress=0,i.v=0,i.steerV=0,i.boost=0,!0):!1}function ki(i,e){if(i.phase!=="finish")return 1+e.filter(s=>s.z>i.z).length;let t=bt(i.courseId).length*2,n=i.time+i.penaltyTime;return 1+e.filter(s=>(s.finishTime??i.time+(s.penaltyTime||0)+Math.max(0,t-s.z)/Math.max(1,s.speed||s.v||1))<n-.001).length}function Hd(i,e=()=>i.phase==="race"){let t=new Map,n=new Set,s=new Map;function r(l){i[l]=n.has(l)||[...t.values()].includes(l),s.get(l)?.classList.toggle("is-down",i[l])}function a(l,h){s.set(h,l),l.addEventListener("pointerdown",d=>{if(d.preventDefault(),!!e()){t.set(d.pointerId,h),r(h);try{l.setPointerCapture(d.pointerId)}catch{}}});let u=d=>{let f=t.get(d.pointerId);t.delete(d.pointerId),f&&r(f)};for(let d of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(d,u)}function o(l,h){h&&e()?n.add(l):n.delete(l),r(l)}function c(){let l=new Set([...s.keys(),...n,...t.values()]);t.clear(),n.clear();for(let h of l)r(h)}return{bind:a,key:o,clear:c}}function Gd(i){let e=-1/0,t=n=>n.target.closest?.("canvas,button,[data-game-surface]");i.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&t(n)&&(e=performance.now())},{passive:!0}),i.addEventListener("dblclick",n=>{t(n)&&performance.now()-e<900&&n.preventDefault()}),i.addEventListener("contextmenu",n=>{t(n)&&!n.target.closest("textarea")&&n.preventDefault()})}var so=Object.freeze({tyres:["\u30B9\u30DD\u30FC\u30C4","\u30B9\u30EA\u30C3\u30AF"],body:["\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9","\u30EF\u30A4\u30C9"],aero:["\u306A\u3057","\u30B9\u30C8\u30EA\u30FC\u30C8","\u30EC\u30FC\u30B7\u30F3\u30B0"]});function ro(i={}){let e=(t,n)=>Number.isInteger(i[t])&&i[t]>=0&&i[t]<so[t].length?i[t]:n;return{tyres:e("tyres",0),body:e("body",0),aero:e("aero",1)}}function Vd(i=0){return{model:i,color:[0,1,2,3,0,1,0,0][i]||0,parts:ro()}}function ks(i){return{model:Number.isInteger(i.model)&&hn[i.model]?i.model:0,color:Math.max(0,Math.min(3,Number.isInteger(i.color)?i.color:0)),parts:ro(i.parts)}}function Wd(i){let e=ks(i);return`${hn[e.model].name} / ${so.tyres[e.parts.tyres]} / ${so.body[e.parts.body]} / ${so.aero[e.parts.aero]}`}function qd(i,e=12345){let t=bt(i),n=io(e+31),s=[];for(let r=0;r<2;r++)t.crossings.forEach((a,o)=>s.push({id:`ped-${r}-${o}`,distance:(r+a)*t.length,side:n()>.5?1:-1,delay:n()*.6,enabled:n()>.15,phase:"waiting",elapsed:0,offset:0,hit:!1,rewarded:!1}));return s}function kr(i,e,{activate:t=!0}={}){let n=bt(i.courseId),s=ct(i.model),r=null;for(let a of i.pedestrians){let o=a.distance-i.z,c=i.v*Ns.minimumReactionSeconds+i.v*i.v/(2*s.brake)+12,l=c+Math.max(55,i.v*2.2);if(a.phase==="waiting"){if(!t)continue;if(a.offset=a.side*(n.halfWidth+2),!a.enabled){a.phase="skipped";continue}if(o<c){a.phase="skipped";continue}o<l&&(a.phase="warning",a.elapsed=0,r="crossing-warning")}else if(a.phase==="warning")a.elapsed+=e,a.elapsed>=Ns.warningSeconds+a.delay&&(a.phase="crossing",a.elapsed=0);else if(a.phase==="crossing"){a.elapsed+=e;let h=a.elapsed*Ns.pedestrianSpeed;a.offset=a.side*(n.halfWidth+2-h),h>2*(n.halfWidth+2)&&(a.phase="safe",a.offset=-a.side*(n.halfWidth+3))}a.phase==="safe"&&!a.hit&&!a.rewarded&&i.z>a.distance+8&&(a.rewarded=!0,r="safe-crossing")}return r}function zs(i,e){for(let t of i.pedestrians)if(!(t.phase!=="crossing"||t.hit||i.v<=.5)&&Oi(e,i.z,i.offset,i.model,{distance:t.distance,offset:t.offset,radius:.3}))return t.hit=!0,t.phase="safe",t.offset=-t.side*(bt(i.courseId).halfWidth+3),i.penaltyTime+=Ns.penaltySeconds,i.stopTimer=Ns.stopSeconds,i.v=0,i.boost=0,i.steerV=0,"pedestrian-contact";return null}var Hs=(i,e,t)=>Math.max(e,Math.min(t,i)),zr=Object.freeze({easy:{label:"\u304B\u3093\u305F\u3093",top:.8,acceleration:6,grip:18,brake:.82,preview:1.35,precision:.48,passDistance:28,lateral:2.8},normal:{label:"\u3075\u3064\u3046",top:.985,acceleration:10,grip:28,brake:.94,preview:1.1,precision:.23,passDistance:38,lateral:3.7},hard:{label:"\u3080\u305A\u304B\u3057\u3044",top:1,acceleration:13,grip:38,brake:1,preview:1,precision:.08,passDistance:46,lateral:4.5}}),lg=i=>zr[i]||zr.normal,hg=[{name:"straight",top:1,acceleration:.95,grip:.94},{name:"corner",top:.975,acceleration:1,grip:1.18},{name:"accelerator",top:.985,acceleration:1.2,grip:1},{name:"steady",top:.96,acceleration:1.05,grip:1.08}];function Xd(i=0,e="normal",t="C01"){return[125,87,51,20].map((n,s)=>{let r={z:n,model:i,courseId:t,difficulty:zr[e]?e:"normal",personality:s,v:0,speed:0,l:[-3.4,3.1,-4.3,4.4][s],c:[1,2,3,1][s],wheelAngle:0,roll:0,pitch:0,motionSteer:0,brake:!1,boost:0,fallTimer:0,parts:{tyres:1,body:0,aero:1},struck:[],overtaking:!1};return Br(r),r})}function Il(i,e,t,n=38){let s=Math.abs(Qe(i,e).curvature);return Math.min(t,Math.sqrt(n/Math.max(1e-5,s)))}var ug=(i,e,t)=>(e-i+t*1.5)%t-t/2;function ao(i,e,t){let n=bt(i.courseId),s=[...e.filter(r=>r.finishTime===void 0).map(r=>({z:r.z,l:r.l,speed:r.speed||0,model:r.model??i.model,self:r})),...i.phase==="race"&&i.onMain!==!1?[{z:i.z,l:i.offset,speed:i.v,model:i.model}]:[]];for(let r of e){if(r.finishTime!==void 0){r.speed=r.v=0;continue}r.model??(r.model=i.model),r.courseId=n.id,r.parts??(r.parts={tyres:1,body:0,aero:1}),r.flatMask||Br(r),r.struck??(r.struck=[]),r.time=i.time,r.pedestrians=i.pedestrians,r.boost=0;let a=ct(r.model),o=lg(r.difficulty||i.aiDifficulty),c=hg[r.personality||0],l=r.z,h=r.l,u=r.speed||r.v||0;if(Os(r,t),r.fallTimer=Math.max(0,(r.fallTimer||0)-t),r.stopTimer>0||r.repairTimer>0||r.fallTimer>0){r.speed=r.v=0;continue}let d=n.halfWidth-a.width/2-.65,f=Qe(n,r.z),m=Qe(n,r.z+u*1.3+18),_=Math.abs(f.curvature)>Math.abs(m.curvature)?f:m,g=-Math.sign(_.curvature)*Math.min(d*.48,Math.abs(_.curvature)*180)+Math.sin(r.z*.015+(r.personality||0)*1.9)*o.precision,p=a.top*o.top*c.top,x=a.brake*o.brake,b=Math.max(35,u*u/(2*x)*o.preview+u*.5);for(let F=0;F<=b;F+=8){let j=Il(n,r.z+F,a.top,o.grip*c.grip);p=Math.min(p,Math.sqrt(j*j+2*x*F))}let y=s.filter(F=>F.self!==r).map(F=>({...F,gap:ug(r.z,F.z,n.length),width:(a.width+ct(F.model).width)/2+.6})),E=F=>y.every(j=>j.gap>28||j.gap<-12||Math.abs(j.l-F)>j.width);r.overtaking=!1;let S=y.filter(F=>F.gap>0&&F.gap<o.passDistance&&Math.abs(F.l-r.l)<F.width).sort((F,j)=>F.gap-j.gap)[0];if(S&&S.speed<p+.5){let F=[S.l-S.width-.45,S.l+S.width+.45].filter(j=>Math.abs(j)<=d&&E(j)).sort((j,k)=>Math.abs(j-r.l)-Math.abs(k-r.l));F.length&&(g=F[0],r.overtaking=!0),(S.gap<Math.max(9,u*.55)||!F.length)&&(p=Math.min(p,Math.sqrt(Math.max(0,S.speed**2+2*x*Math.max(0,S.gap-a.length-3)))))}let v=y.find(F=>F.gap<0&&F.gap>-o.passDistance&&F.speed>u+2&&Math.abs(F.l-r.l)<F.width);if(v&&!r.overtaking){let F=[v.l-v.width-.35,v.l+v.width+.35].filter(j=>Math.abs(j)<=d&&E(j)).sort((j,k)=>Math.abs(j-r.l)-Math.abs(k-r.l));F.length&&(g=F[0])}for(let F of i.obstacles){let j=F.distance-r.z;if(!(j<=0||j>Math.max(36,u*2.5))&&Math.abs(g-F.offset)<a.width/2+F.radius+.6){let k=[F.offset-a.width/2-F.radius-1,F.offset+a.width/2+F.radius+1].filter(z=>Math.abs(z)<=d&&E(z));k.length?g=k.sort((z,B)=>Math.abs(z-r.l)-Math.abs(B-r.l))[0]:p=Math.min(p,Math.sqrt(2*x*Math.max(0,j-a.length-2)))}}for(let F of i.pedestrians){let j=F.distance-r.z;(F.phase==="warning"||F.phase==="crossing")&&j>-a.length&&j<b+35&&(p=Math.min(p,Math.sqrt(2*x*Math.max(0,j-a.length/2-4))))}let M=Bi(n,r.z);qt(r)?(p=Math.min(p,a.top*Vt.topFactor),M&&M.delta<170&&(g=M.delta<40?M.offset:Math.min(d,M.offset))):r.pitExit&&(g=0,Math.abs(r.l)<.5&&(r.pitExit=!1));let I=qt(r)||r.pitExit?n.halfWidth+3:d,w=Hs(g,-I,I),R=Math.min(o.lateral,a.turn)*(qt(r)?Vt.handlingFactor:1),D=r.l+Hs(w-r.l,-R*t,R*t);y.some(F=>Math.abs(F.gap)<Math.max(18,Math.abs(F.speed-u))&&Math.abs(D-F.l)<F.width&&Math.abs(D-F.l)<Math.abs(r.l-F.l))||(r.l=D),r.motionSteer=t?(r.l-h)/t:0;let C=o.acceleration*c.acceleration*(a.accel/ct(0).accel)*(qt(r)?Vt.accelFactor:1);r.speed=Hs(u+Hs(p-u,-x*t,C*t),0,a.top),r.brake=p<u-.5,r.v=r.speed,r.offset=r.l;let G=Hs(1+f.curvature*r.l,.8,1.25),q=r.speed*t;r.z=Math.min(n.length*2,r.z+q/G),r.wheelAngle=((r.wheelAngle||0)+q/a.radius)%(Math.PI*2),r.roll=-r.motionSteer*.013,r.pitch=Hs(-(r.speed-u)*.0025/Math.max(t,.001),-.06,.045);for(let[F,j]of i.obstacles.entries()){if(r.struck.includes(F))continue;let k=Oi(l,r.z,r.l,r.model,j);k&&(r.struck.push(F),Us(r,j,r.speed*k.strength*j.severity),r.speed=r.v)}zs(r,l),r.speed=r.v,Bs(r,n)&&(r.speed=0),r.z>=n.length*2&&(r.finishTime=i.time+r.penaltyTime,r.speed=r.v=0)}}var rs=(i,e,t)=>Math.max(e,Math.min(t,i));function dg(i,e,t,n,s){if(s<0)return;let r=bt(i.courseId),a=i.ledger,o=r.length/8,c=e.station+t,l=e.station+n;for(;a.next<8&&c<a.next*o+1e-7&&l>=a.next*o-1e-7;)a.next++;if(l>=r.length-1e-7&&c<r.length-1e-7){let h=i.missions.completed.includes(i.missions.plan[a.laps]?.id);a.next===8&&h?(a.laps++,a.next=1,i.z=a.laps*r.length):a.blocked++}else a.laps<2&&(i.z=Math.max(i.z,a.laps*r.length+Math.min(l,a.next*o-.001)));i.checkpointsPassed=a.laps*8+a.next-1}function jd(i,e,t=to(i)){if(!t)return null;let n=i.z,s=i.offset;i.z=i.ledger.laps*bt(i.courseId).length+t.station,i.offset=t.offset;let r=e();return i.z=n,i.offset=s,r}function Kd(i,e,t){let n=rs(Number.isFinite(t)?t:0,0,.05),s=bt(i.courseId),r=ct(i.model);if(i.phase==="countdown")return i.count-=n,i.count<=-.26&&(i.phase="race"),null;if(i.phase!=="race")return null;let a=to(i),o=Cl(i),c=i.v,l=i.offset,h=i.road.edge;i.time+=n,i.boost=Math.max(0,i.boost-n),i.charge=Math.min(100,i.charge+n*12);let u=Os(i,n);a?jd(i,()=>{u=kr(i,n)||u}):u=kr(i,n,{activate:!1})||u,i.onMain&&i.road.direction===1&&Nd(i,o)&&(u="mission-dispatch"),Fd(i,n);let d=Td(i,n),f=Rt(i).edges[i.road.edge],m=pt(f,i.road.d,0,i.road.direction),_=wn(i),g=Ud(i),p=i.stopTimer>0||i.repairTimer>0||d,x=r.top*(1-rs(m.grade,-.15,.25)*.55)+(i.boost>0?18:0);for(let E=0;E<Math.max(25,i.v*i.v/(2*r.brake));E+=8){let S=pt(f,i.road.d+E*i.road.direction);x=Math.min(x,Math.sqrt(38/Math.max(1e-5,Math.abs(S.curvature)))+(i.boost>0?8:0))}if(qt(i)&&(x=Math.min(x,r.top*Vt.topFactor)),g!==null&&(x=Math.min(x,Math.sqrt(2*r.brake*Math.max(0,g-3)))),(i.brake||p||_&&i.missions.active.stage!=="AUTO_STOP")&&(x=0),p?i.v=0:x<i.v?i.v=Math.max(x,i.v-r.brake*n*(i.missions.active?.stage==="SUSPECT_STOPPING"?1.5:1)):i.v+=(x-i.v)*(1-Math.exp(-n*r.accel*(qt(i)?Vt.accelFactor:1))),!_&&!d&&!p){let E=Number(i.steerR)-Number(i.steerL),S=E*r.turn*(.5+i.v/r.top*.5)*(qt(i)?Vt.handlingFactor:1);(E||i.steerL&&i.steerR)&&Ad(i,ss(i)),i.steerV=E?i.steerV+(S-i.steerV)*(1-Math.exp(-n*10)):0,i.offset+=(i.steerV+(qt(i)?i.damageSide*Vt.drift:0))*n*Math.min(1,i.v/6);let v=i.ledger.laps*s.length+(Cl(i)||0),M=i.onMain?Bi(s,v):null;if(qt(i)&&i.pitAssist&&M&&M.delta<Vt.repairLead&&!E&&i.road.direction===1){let R=Math.min(7.95,s.halfWidth-1.6),D=rs((40-M.delta)/30,0,1),L=R+(M.offset-R)*D;i.offset+=rs((L-i.offset)*(1-Math.exp(-n*2.6)),-r.turn*n*1.1,r.turn*n*1.1)}i.pitExit&&!E&&i.onMain&&(i.offset*=Math.exp(-n*3),Math.abs(i.offset)<.5&&(i.pitExit=!1));let w=i.onMain&&(qt(i)&&M&&M.delta<45&&M.delta>-26||Fs(s,v,i.offset)||i.pitExit)?s.halfWidth+4.5:Ni(f,i.road.d)-r.width/2-.35;i.offset=rs(i.offset,-w,w)}else i.steerV=0,i.steerL=i.steerR=!1;!d&&i.v>0&&Sd(i,i.v*n,(...E)=>dg(i,...E)),i.onMain&&i.road.direction===1&&i.missions.active?.stage==="RETURN_TO_TRACK"&&(i.road.joinedTravel=(i.road.joinedTravel||0)+i.v*n,i.road.joinedTravel>=12&&(i.missions.active.stage="DONE")),g!==null&&g<3.5&&i.v<.5&&Od(i),i.motionSteer=_&&i.missions.active.stage!=="SUSPECT_STOPPING"?0:rs((i.offset-l)/Math.max(n,.001),-r.turn,r.turn),i.roll+=(-i.motionSteer*.013-i.roll)*(1-Math.exp(-n*7)),i.pitch+=(rs(-(i.v-c)/Math.max(n,.001)*.0025,-.06,.045)-i.pitch)*(1-Math.exp(-n*7)),i.wheelAngle=(i.wheelAngle+i.v*n/r.radius)%(Math.PI*2),i.bounce=Math.sin(i.road.d*.85)*Math.min(.018,i.v*4e-4);let b=to(i);a&&b&&jd(i,()=>{let E=(b.station-a.station+s.length*1.5)%s.length-s.length/2,S=i.z-E;for(let v of i.obstacles){if(v.hit)continue;let M=Oi(S,i.z,i.offset,i.model,v);M&&(v.hit=!0,u=Us(i,v,i.v*M.strength*v.severity),i.v*=.8)}u=zs(i,S)||u,i.onMain&&Bs(i,s)&&(u="repair-start")});let y=b?i.ledger.laps*s.length+b.station:i.z;if(ao({...i,onMain:!!b,z:y,offset:b?.offset??i.offset*i.road.direction},e,n),b&&!_)for(let E of e){let S=(E.z-y+s.length*1.5)%s.length-s.length/2;Math.abs(S)<(r.length+4.86)*.4&&Math.abs(E.l-b.offset)<r.width/2+1.05&&i.time-i.hit>2&&E.finishTime===void 0&&(i.hit=i.time,i.v*=.8,u="contact")}return i.lap=Math.min(2,i.ledger.laps+1),i.rank=ki(i,e),i.ledger.laps===2&&i.missions.completed.length===2?(i.heroClear=!0,i.phase="finish",i.z=s.length*2,i.steerL=i.steerR=!1,i.rank=ki(i,e),"finish"):u}var fg=1400,oS=fg*2,pg=9.7,Jd=pg-1.75,Yd=Math.PI*2,cS=ct(0).radius,li=(i,e,t)=>Math.max(e,Math.min(t,i));function Ll(i=0,e="normal",t="C01"){return Xd(i,e,t)}function Dl(i=0,e=0,t={},n="C01",s=12345,r="normal"){let a=bt(n),o=Qe(a,0),c={phase:"menu",z:0,offset:0,v:0,steerL:!1,steerR:!1,steerV:0,motionSteer:0,boost:0,charge:100,time:0,lap:1,rank:5,color:i,model:e,parts:ro(t),courseId:a.id,aiDifficulty:r,brake:!1,siren:!1,fallTimer:0,prev:0,roll:0,pitch:0,camX:o.x,camZ:o.z,camH:3.45,cameraOffset:0,hit:-20,count:3.2,wheelAngle:0,bounce:0,checkpointsPassed:0,nextCheckpoint:a.length/8,outTime:0,recoverTimer:0};return Br(c),c.seed=s,c.obstacles=Pd(a.id,s),c.pedestrians=qd(a.id,s),Ld(c),c}function Zd(i){return i.phase!=="race"||wn(i)||i.charge<60||i.boost>0||i.brake||qt(i)||i.repairTimer>0||i.stopTimer>0||i.fallTimer>0?!1:(i.charge=0,i.boost=2.55,!0)}function mg(i,e,t){let n=i.z,s=Math.min(n+t,e.length*2),r=e.length/e.checkpointCount;if(n>i.nextCheckpoint+3)return i.z=Math.max(0,i.nextCheckpoint-.2),i.offset=0,i.v*=.5,"recovered";for(i.z=s;i.nextCheckpoint<=s+1e-5&&i.nextCheckpoint>=n-1e-5;){if(Math.abs(i.offset)>e.halfWidth+.5&&!Fs(e,i.nextCheckpoint,i.offset))return i.z=i.nextCheckpoint-.2,i.offset=0,i.v*=.5,"recovered";i.checkpointsPassed++,i.nextCheckpoint+=r}return null}function $d(i,e,t){if(i.missions)return Kd(i,e,t);let n=li(Number.isFinite(t)?t:0,0,.05),s=bt(i.courseId),r=ct(i.model);if(i.phase==="countdown")return i.count-=n,i.count<=-.26&&(i.phase="race"),null;if(i.phase!=="race")return null;let a=i.z,o=i.offset;i.time+=n,i.boost=Math.max(0,i.boost-n),i.charge=Math.min(100,i.charge+n*12),i.recoverTimer=Math.max(0,i.recoverTimer-n);let c=Os(i,n);c=kr(i,n)||c,r.kind==="bike"&&Math.abs(i.roll)>.65&&i.fallTimer<=0&&(i.fallTimer=.9);let l=i.fallTimer>0;l&&(i.fallTimer=Math.max(0,i.fallTimer-n),i.roll*=Math.exp(-n*5),i.fallTimer===0&&(i.roll=0,l=!1,c="bike-recovered"));let h=i.stopTimer>0||i.repairTimer>0||l,u=Qe(s,i.z),d=Number(i.steerR)-Number(i.steerL),f=i.v,m=qt(i),_=Bi(s,i.z);if(h)i.v=0,i.steerV=0,i.motionSteer=0,i.repairTimer>0&&(i.wheelAngle=(i.wheelAngle+n*3)%Yd);else{let g=Fs(s,i.z,i.offset),p=Math.abs(i.offset)>s.halfWidth-.5&&!g,x=r.top*(1-li(u.grade,-.15,.25)*.55)+(i.boost>0?18:0);for(let w=0;w<=i.v*i.v/(2*r.brake);w+=8){let R=Il(s,i.z+w,r.top,38);x=Math.min(x,Math.sqrt(R*R+2*r.brake*w)+(i.boost>0?8:0))}m&&(x=Math.min(x,r.top*Vt.topFactor)),p&&(x*=.55),i.brake&&(x=0),i.brake?i.v=Math.max(0,i.v-r.brake*n):i.v+=(x-i.v)*(1-Math.exp(-n*r.accel*(m?Vt.accelFactor:1)));let b=d*r.turn*(.5+i.v/r.top*.5)*(m?Vt.handlingFactor:1);i.steerV=d?i.steerV+(b-i.steerV)*(1-Math.exp(-n*10)):0,i.offset+=(i.steerV+(m?i.damageSide*Vt.drift:0))*n*Math.min(1,i.v/6);let y=m&&i.pitAssist&&_&&_.delta<Vt.repairLead;if(!d&&y&&i.v>0){let w=Math.min(Jd,s.halfWidth-1.6),R=li((40-_.delta)/30,0,1),D=w+(_.offset-w)*R;i.offset+=li((D-i.offset)*(1-Math.exp(-n*2.6)),-r.turn*n*1.1,r.turn*n*1.1)}i.pitExit&&!d&&i.v>0&&(i.offset*=Math.exp(-n*3),Math.abs(i.offset)<.5&&(i.pitExit=!1));let E=m&&_&&_.delta<45&&_.delta>-26||g||i.pitExit||i.repairTimer>0,S=s.difficulty===1&&!E?Jd:s.halfWidth+4.5;i.offset=li(i.offset,-S,S),i.outTime=Math.abs(i.offset)>s.halfWidth+1&&!Fs(s,i.z,i.offset)&&!i.pitExit?i.outTime+n:0,i.outTime>.85&&(i.offset=0,i.v*=.5,i.outTime=0,i.recoverTimer=.6,c="recovered");let v=li(1+u.curvature*i.offset,.8,1.25),M=Math.min(i.v*n/v,s.length*2-i.z);c=mg(i,s,M)||c,i.wheelAngle=(i.wheelAngle+M*v/r.radius)%Yd,i.motionSteer=n?li((i.offset-o)/n,-r.turn,r.turn):0,i.roll+=(-i.motionSteer*.013-i.roll)*(1-Math.exp(-n*7));let I=n>0?(i.v-f)/n:0;i.pitch+=(li(-I*.0025,-.06,.045)-i.pitch)*(1-Math.exp(-n*7)),i.bounce=Math.sin(i.z*.85)*Math.min(.018,i.v*4e-4);for(let w of i.obstacles){if(w.hit)continue;let R=Oi(a,i.z,i.offset,i.model,w);if(R){w.hit=!0;let D=i.v*R.strength*w.severity;i.v*=.8,c=Us(i,w,D),i.hit=i.time}}c=zs(i,a)||c,Bs(i,s)&&(c="repair-start")}ao(i,e,n);for(let g of e){let p=((g.z-i.z+s.length/2)%s.length+s.length)%s.length-s.length/2;!h&&Math.abs(p)<(r.length+4.86)*.4&&Math.abs(g.l-i.offset)<r.width/2+1.05&&i.time-i.hit>2&&g.finishTime===void 0&&(i.hit=i.time,i.v*=.8,i.offset=li(i.offset+(i.offset>g.l?.4:-.4),-s.halfWidth-4,s.halfWidth+4),c="contact")}return i.lap=Math.min(2,1+Math.floor(i.z/s.length)),i.rank=ki(i,e),i.z>=s.length*2&&i.checkpointsPassed>=s.checkpointCount*2?(i.phase="finish",i.steerL=i.steerR=!1,i.rank=ki(i,e),"finish"):c}var Nn=Object.freeze({high:{label:"\u9AD8\u753B\u8CEA",pixels:145e4,shadow:2048,model:"concept-high.glb",transmission:0,anisotropy:8},standard:{label:"\u6A19\u6E96",pixels:95e4,shadow:1024,model:"concept-mobile.glb",transmission:0,anisotropy:4},low:{label:"\u8EFD\u91CF",pixels:48e4,shadow:512,model:"concept-mobile.glb",transmission:0,anisotropy:2}});function Qd(i,e,t,n=4096){let s=Math.min(1.6,Math.sqrt(t/(i*e)),n/i,n/e);return[Math.max(1,Math.floor(i*s)),Math.max(1,Math.floor(e*s))]}function ef(i){let e=i.filter(n=>n>0).sort((n,s)=>n-s);if(!e.length)return{fps:0,p95:0};let t=e.reduce((n,s)=>n+s,0)/e.length;return{fps:Number((1e3/t).toFixed(1)),p95:Number(e[Math.min(e.length-1,Math.floor(e.length*.95))].toFixed(1))}}var Kf=0,Sh=1,Jf=2;var Ms=1,Yf=2,yr=3,Qn=0,fn=1,Ut=2,Ss=0,Mr=1,Eh=2,Th=3,wh=4,Zf=5;var Es=100,$f=101,Qf=102,ep=103,tp=104,np=200,ip=201,sp=202,rp=203,Ah=204,Rh=205,ap=206,op=207,cp=208,lp=209,hp=210,up=211,dp=212,fp=213,pp=214,Oo=0,Bo=1,ko=2,ir=3,zo=4,Ho=5,Go=6,Vo=7,Ch=0,mp=1,gp=2,ei=0,Ph=1,Ih=2,Lh=3,Na=4,Dh=5,Nh=6,Fh=7,oh="attached",bp="detached",Uh=300,Ts=301,Sr=302,Er=303,pc=304,Kn=1e3,mn=1001,sr=1002,zt=1003,mc=1004;var ws=1005;var wt=1006,Tr=1007;var Tn=1008;var vn=1009,Oh=1010,Bh=1011,wr=1012,gc=1013,Hn=1014,on=1015,pn=1016,bc=1017,xc=1018,As=1020,kh=35902,zh=35899,Hh=1021,Gh=1022,Cn=1023,xi=1026,Ci=1027,_c=1028,vc=1029,Yi=1030,yc=1031;var Mc=1033,Fa=33776,Ua=33777,Oa=33778,Ba=33779,Sc=35840,Ec=35841,Tc=35842,wc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,ka=37490,Lc=37491,Dc=37808,Nc=37809,Fc=37810,Uc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,qc=37820,Xc=37821,jc=36492,Kc=36494,Jc=36495,Yc=36283,Zc=36284,za=36285,$c=36286;var us=2300,ds=2301,Fo=2302,ch=2303,lh=2400,hh=2401,uh=2402,xp=2500;var Vh=0,Ha=1,Ar=2,_p=3200;var Qc=0,vp=1,Gn="",Tt="srgb",jt="srgb-linear",ta="linear",_t="srgb";var Uo=7680;var yp=519,Mp=512,Sp=513,Ep=514,Wh=515,Tp=516,wp=517,qh=518,Xh=519,jh=35044,Rs=35048;var Kh="300 es",Rn=2e3,rr=2001;function gg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ap(){let i=ar("canvas");return i.style.display="block",i}var tf={},or=null;function na(...i){let e="THREE."+i.shift();or?or("log",e,...i):console.log(e,...i)}function Rp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Rp(i);let e="THREE."+i.shift();if(or)or("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Rp(i);let e="THREE."+i.shift();if(or)or("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in tf||(tf[e]=!0,ke(...i))}function Cp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pp={[Oo]:Oo,[ko]:Go,[zo]:zo,[ir]:Ho,[Bo]:Bo,[Go]:ko,[Vo]:Vo,[Ho]:ir},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nf=1234567,Zr=Math.PI/180,fs=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Jh(i,e){return(i%e+e)%e}function xg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _g(i,e,t){return i!==e?(t-i)/(e-i):0}function $r(i,e,t){return(1-t)*i+t*e}function vg(i,e,t,n){return $r(i,e,1-Math.exp(-t*n))}function yg(i,e=1){return e-Math.abs(Jh(i,e*2)-e)}function Mg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tg(i,e){return i+Math.random()*(e-i)}function wg(i){return i*(.5-Math.random())}function Ag(i){i!==void 0&&(nf=i);let e=nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rg(i){return i*Zr}function Cg(i){return i*fs}function Pg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ig(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lg(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function el(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zh(i,e){if(e.constructor===Float32Array)return i;let t=el(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function $h(i,e){if(e.constructor===Float32Array)return i;let t=el(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ti={DEG2RAD:Zr,RAD2DEG:fs,generateUUID:Vn,clamp:it,euclideanModulo:Jh,mapLinear:xg,inverseLerp:_g,lerp:$r,damp:vg,pingpong:yg,smoothstep:Mg,smootherstep:Sg,randInt:Eg,randFloat:Tg,randFloatSpread:wg,seededRandom:Ag,degToRad:Rg,radToDeg:Cg,isPowerOfTwo:Pg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:Lg,normalize:$h,denormalize:Zh},su=class su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var fe=su,Ct=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(u!==_||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),b=Math.sin(x);p=Math.sin(p*x)/b,o=Math.sin(o*x)/b,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+_*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+_*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var N=ru,Nl=new N,sf=new Ct,au=class au{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],x=s[1],b=s[4],y=s[7],E=s[2],S=s[5],v=s[8];return r[0]=a*_+o*x+c*E,r[3]=a*g+o*b+c*S,r[6]=a*p+o*y+c*v,r[1]=l*_+h*x+u*E,r[4]=l*g+h*b+u*S,r[7]=l*p+h*y+u*v,r[2]=d*_+f*x+m*E,r[5]=d*g+f*b+m*S,r[8]=d*p+f*y+m*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var Ze=au,Fl=new Ze,rf=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dg(){let i={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jt]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:rf,fromXYZ:af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),i}var lt=Dg();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,Wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=ar("canvas")),Gs.width=e.width,Gs.height=e.height;let s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ng=0,cr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ul(s[a].image)):r.push(Ul(s[a]))}else r=Ul(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Fg=0,Ol=new N,Qt=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mn,s=mn,r=wt,a=Tn,o=Cn,c=vn,l=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Vn(),this.name="",this.source=new cr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ol).x}get height(){return this.source.getSize(Ol).y}get depth(){return this.source.getSize(Ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Uh;Qt.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(f+1)/2,E=(p+1)/2,S=(h+d)/4,v=(u+_)/4,M=(m+g)/4;return b>y&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=v/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=S/s,r=M/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=M/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var Mt=ou,qo=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fc=class fc{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ug,e,Og)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),zi.crossVectors(n,yn),zi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),zi.crossVectors(n,yn)),zi.normalize(),oo.crossVectors(yn,zi),s[0]=zi.x,s[4]=oo.x,s[8]=yn.x,s[1]=zi.y,s[5]=oo.y,s[9]=yn.y,s[2]=zi.z,s[6]=oo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],b=n[7],y=n[11],E=n[15],S=s[0],v=s[4],M=s[8],I=s[12],w=s[1],R=s[5],D=s[9],L=s[13],C=s[2],G=s[6],q=s[10],F=s[14],j=s[3],k=s[7],z=s[11],B=s[15];return r[0]=a*S+o*w+c*C+l*j,r[4]=a*v+o*R+c*G+l*k,r[8]=a*M+o*D+c*q+l*z,r[12]=a*I+o*L+c*F+l*B,r[1]=h*S+u*w+d*C+f*j,r[5]=h*v+u*R+d*G+f*k,r[9]=h*M+u*D+d*q+f*z,r[13]=h*I+u*L+d*F+f*B,r[2]=m*S+_*w+g*C+p*j,r[6]=m*v+_*R+g*G+p*k,r[10]=m*M+_*D+g*q+p*z,r[14]=m*I+_*L+g*F+p*B,r[3]=x*S+b*w+y*C+E*j,r[7]=x*v+b*R+y*G+E*k,r[11]=x*M+b*D+y*q+E*z,r[15]=x*I+b*L+y*F+E*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],x=c*f-l*d,b=o*f-l*u,y=o*d-c*u,E=a*f-l*h,S=a*d-c*h,v=a*u-o*h;return t*(_*x-g*b+p*y)-n*(m*x-g*E+p*S)+s*(m*b-_*E+p*v)-r*(m*y-_*S+g*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=t*o-n*a,b=t*c-s*a,y=t*l-r*a,E=n*c-s*o,S=n*l-r*o,v=s*l-r*c,M=h*_-u*m,I=h*g-d*m,w=h*p-f*m,R=u*g-d*_,D=u*p-f*_,L=d*p-f*g,C=x*L-b*D+y*R+E*w-S*I+v*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/C;return e[0]=(o*L-c*D+l*R)*G,e[1]=(s*D-n*L-r*R)*G,e[2]=(_*v-g*S+p*E)*G,e[3]=(d*S-u*v-f*E)*G,e[4]=(c*w-a*L-l*I)*G,e[5]=(t*L-s*w+r*I)*G,e[6]=(g*y-m*v-p*b)*G,e[7]=(h*v-d*y+f*b)*G,e[8]=(a*D-o*w+l*M)*G,e[9]=(n*w-t*D-r*M)*G,e[10]=(m*S-_*y+p*x)*G,e[11]=(u*y-h*S-f*x)*G,e[12]=(o*I-a*R-c*M)*G,e[13]=(t*R-n*I+s*M)*G,e[14]=(_*b-m*E-g*x)*G,e[15]=(h*E-u*b+d*x)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,x=c*l,b=c*h,y=c*u,E=n.x,S=n.y,v=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+y)*E,s[2]=(m-b)*E,s[3]=0,s[4]=(f-y)*S,s[5]=(1-(d+p))*S,s[6]=(g+x)*S,s[7]=0,s[8]=(m+b)*v,s[9]=(g-x)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),c=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Fn.copy(this);let l=1/a,h=1/o,u=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Rn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===rr)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Rn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===Rn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===rr)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fc.prototype.isMatrix4=!0;var We=fc,Vs=new N,Fn=new We,Ug=new N(0,0,0),Og=new N(1,1,1),zi=new N,oo=new N,yn=new N,of=new We,cf=new Ct,_i=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cf.setFromEuler(this),this.setFromQuaternion(cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bg=0,lf=new N,Ws=new Ct,hi=new We,co=new N,Hr=new N,kg=new N,zg=new Ct,hf=new N(1,0,0),uf=new N(0,1,0),df=new N(0,0,1),ff={type:"added"},Hg={type:"removed"},qs={type:"childadded",child:null},Bl={type:"childremoved",child:null},Nt=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new _i,n=new Ct,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ze}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(df,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Hr,co,this.up):hi.lookAt(co,Hr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(hi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ff),qs.child=e,this.dispatchEvent(qs),qs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ff),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new N(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gg={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Jh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=kl(a,r,e+1/3),this.g=kl(a,r,e),this.b=kl(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return lt.workingToColorSpace(an.copy(this),e),Math.round(it(an.r*255,0,255))*65536+Math.round(it(an.g*255,0,255))*256+Math.round(it(an.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Tt){lt.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(lo);let n=$r(Hi.h,lo.h,t),s=$r(Hi.s,lo.s,t),r=$r(Hi.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new ze;ze.NAMES=Ip;var ra=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var hr=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new N,ui=new N,zl=new N,di=new N,Xs=new N,js=new N,pf=new N,Hl=new N,Gl=new N,Vl=new N,Wl=new Mt,ql=new Mt,Xl=new Mt,Xi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Un.subVectors(s,t),ui.subVectors(n,t),zl.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(ui),c=Un.dot(zl),l=ui.dot(ui),h=ui.dot(zl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(a,di.y),c.addScaledVector(o,di.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wl.setScalar(0),ql.setScalar(0),Xl.setScalar(0),Wl.fromBufferAttribute(e,t),ql.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wl,r.x),a.addScaledVector(ql,r.y),a.addScaledVector(Xl,r.z),a}static isFrontFacing(e,t,n,s){return Un.subVectors(n,t),ui.subVectors(e,t),Un.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Un.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,n),js.subVectors(r,n),Hl.subVectors(e,n);let c=Xs.dot(Hl),l=js.dot(Hl);if(c<=0&&l<=0)return t.copy(n);Gl.subVectors(e,s);let h=Xs.dot(Gl),u=js.dot(Gl);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Xs,a);Vl.subVectors(e,r);let f=Xs.dot(Vl),m=js.dot(Vl);if(m>=0&&f<=m)return t.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(js,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(pf,o);let p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Xs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),uo.subVectors(this.max,Gr),Ks.subVectors(e.a,Gr),Js.subVectors(e.b,Gr),Ys.subVectors(e.c,Gr),Gi.subVectors(Js,Ks),Vi.subVectors(Ys,Js),as.subVectors(Ks,Ys);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-as.z,as.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,as.z,0,-as.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-as.y,as.x,0];return!jl(t,Ks,Js,Ys,uo)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Ks,Js,Ys,uo))?!1:(fo.crossVectors(Gi,Vi),t=[fo.x,fo.y,fo.z],jl(t,Ks,Js,Ys,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,ho=new dn,Ks=new N,Js=new N,Ys=new N,Gi=new N,Vi=new N,as=new N,Gr=new N,uo=new N,fo=new N,os=new N;function jl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){os.fromArray(i,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),h=n.dot(os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gi=Vg();function Vg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Wg(i){Math.abs(i)>65504&&ke("DataUtils.toHalfFloat(): Value out of range."),i=it(i,-65504,65504),gi.floatView[0]=i;let e=gi.uint32View[0],t=e>>23&511;return gi.baseTable[t]+((e&8388607)>>gi.shiftTable[t])}function qg(i){let e=i>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[e]+(i&1023)]+gi.exponentTable[e],gi.floatView[0]}var ji=class{static toHalfFloat(e){return Wg(e)}static fromHalfFloat(e){return qg(e)}},Wt=new N,po=new fe,Xg=0,Dt=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jh,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=e!==void 0?el(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$h(e,this.array)}};var aa=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oa=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jg=new dn,Vr=new N,Kl=new N,gn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Kl)),this.expandByPoint(Vr.copy(e.center).sub(Kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kg=0,An=new We,Jl=new Nt,Zs=new N,Mn=new dn,Wr=new dn,$t=new N,mt=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gg(e)?oa:aa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Mn.min,Wr.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,Wr.max),Mn.expandByPoint($t)):(Mn.expandByPoint(Wr.min),Mn.expandByPoint(Wr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Zs.fromBufferAttribute(e,l),$t.add(Zs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new N,c[I]=new N;let h=new N,u=new N,d=new N,f=new fe,m=new fe,_=new fe,g=new N,p=new N;function x(I,w,R){l[I]=l[w]=l[R]=1,h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),u.sub(h),d.sub(h),m.sub(f),_.sub(f);let D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(D),o[I].add(g),o[w].add(g),o[R].add(g),c[I].add(p),c[w].add(p),c[R].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,w=b.length;I<w;++I){let R=b[I],D=R.start,L=R.count;for(let C=D,G=D+L;C<G;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let y=new N,E=new N,S=new N,v=new N;function M(I){S.fromBufferAttribute(s,I),v.copy(S);let w=o[I];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),E.crossVectors(v,w);let D=E.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,w=n.count;I<w;++I)l[I]&&M(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Dt(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ur=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=mf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Vn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var un=new N,dr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?el(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Zh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$h(e,this.data.array)}},Yl=new N,Jg=new N,Yg=new Ze,Bn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Yl.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yg.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zg=0,bn=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Mr,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Rh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new N,Zl=new N,mo=new N,go=new N,ps=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),go.copy(this.origin).sub(Zl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=go.dot(this.direction),c=-go.dot(mo),l=go.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zl).addScaledVector(mo,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,x=n.y-a.y,b=n.z-a.z,y=Math.abs(c),E=Math.abs(l),S=Math.abs(h),v,M,I,w,R,D,L,C,G,q,F,j;if(y>=E&&y>=S?(I=c,D=u,G=m,j=p,c>=0?(v=l,M=h,w=d,R=f,L=_,C=g,q=x,F=b):(v=h,M=l,w=f,R=d,L=g,C=_,q=b,F=x)):E>=S?(I=l,D=d,G=_,j=x,l>=0?(v=h,M=c,w=f,R=u,L=g,C=m,q=b,F=p):(v=c,M=h,w=u,R=f,L=m,C=g,q=p,F=b)):(I=h,D=f,G=g,j=b,h>=0?(v=c,M=l,w=u,R=d,L=m,C=_,q=p,F=x):(v=l,M=c,w=d,R=u,L=_,C=m,q=x,F=p)),I===0)return null;let k=v/I,z=M/I,B=1/I,Q=w-k*D,le=R-z*D,U=L-k*G,X=C-z*G,te=q-k*j,ue=F-z*j,oe=te*X-ue*U,_e=Q*ue-le*te,et=U*le-X*Q;if(s){if(oe<0||_e<0||et<0)return null}else if((oe<0||_e<0||et<0)&&(oe>0||_e>0||et>0))return null;let ge=oe+_e+et;if(ge===0)return null;let Ue=B*(oe*D+_e*G+et*j);return(ge>0?Ue<0:Ue>0)?null:this.at(Ue/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gf=new We,cs=new ps,bo=new gn,bf=new N,xo=new N,_o=new N,vo=new N,$l=new N,yo=new N,xf=new N,Mo=new N,Ye=class extends Nt{constructor(e=new mt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&($l.fromBufferAttribute(u,e),a?yo.addScaledVector($l,h):yo.addScaledVector($l.sub(t),h))}t.add(yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(bo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(bo,bf)===null||cs.origin.distanceToSquared(bf)>(e.far-e.near)**2))&&(gf.copy(r).invert(),cs.copy(e.ray).applyMatrix4(gf),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=b;y<E;y+=3){let S=o.getX(y),v=o.getX(y+1),M=o.getX(y+2);s=So(this,p,e,n,l,h,u,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let x=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=So(this,a,e,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,E=b;y<E;y+=3){let S=y,v=y+1,M=y+2;s=So(this,p,e,n,l,h,u,S,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let x=g,b=g+1,y=g+2;s=So(this,a,e,n,l,h,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function $g(i,e,t,n,s,r,a,o){let c;if(e.side===fn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Qn,o),c===null)return null;Mo.copy(o),Mo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Mo);return l<t.near||l>t.far?null:{distance:l,point:Mo.clone(),object:i}}function So(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,xo),i.getVertexPosition(c,_o),i.getVertexPosition(l,vo);let h=$g(i,e,t,n,xo,_o,vo,xf);if(h){let u=new N;Xi.getBarycoord(xf,xo,_o,vo,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,o,c,l,u,new fe)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,o,c,l,u,new fe)),a&&(h.normal=Xi.getInterpolatedAttribute(a,o,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};Xi.getNormal(xo,_o,vo,d.normal),h.face=d,h.barycoord=u}return h}var qr=new Mt,_f=new Mt,vf=new Mt,Qg=new Mt,yf=new We,Eo=new N,Ql=new gn,Mf=new We,eh=new ps,ca=class extends Ye{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),e.ray.intersectsSphere(Ql)!==!1&&(Mf.copy(s).invert(),eh.copy(e.ray).applyMatrix4(Mf),!(this.boundingBox!==null&&eh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;_f.fromBufferAttribute(s.attributes.skinIndex,e),vf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(t.x,t.y,t.z,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=vf.getComponent(r);if(a!==0){let o=_f.getComponent(r);yf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qg.copy(qr).applyMatrix4(yf),a)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},fr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yn=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=zt,h=zt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sf=new We,e0=new We,la=class i{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:e0;Sf.multiplyMatrices(o,t[r]),Sf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yn(t,e,e,Cn,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(ke("Skeleton: No bone found with UUID:",r),a=new fr),this.bones.push(a),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},vi=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new We,Ef=new We,To=[],Tf=new dn,t0=new We,Xr=new Ye,jr=new gn,en=class extends Ye{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Tf.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Tf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),jr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Ef.multiplyMatrices(n,$s),Xr.matrixWorld=Ef,Xr.raycast(e,To);for(let a=0,o=To.length;a<o;a++){let c=To[a];c.instanceId=r,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(s*this.count),s,this.count,_c,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new gn,n0=new fe(.5,.5),wo=new N,Ki=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],x=r[12],b=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,p-m,E-x).normalize(),s[1].setComponents(l+a,f+h,p+m,E+x).normalize(),s[2].setComponents(l+o,f+u,p+_,E+b).normalize(),s[3].setComponents(l-o,f-u,p-_,E-b).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,p-g,E-y).normalize();else if(s[4].setComponents(l-c,f-d,p-g,E-y).normalize(),t===Rn)s[5].setComponents(l+c,f+d,p+g,E+y).normalize();else if(t===rr)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=n0.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wf=new We,jo=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];wf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ki),n[s].setFromProjectionMatrix(wf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ki),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var pr=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ko=new N,Jo=new N,Af=new We,Kr=new ps,Ao=new gn,th=new N,Rf=new N,ms=class extends Nt{constructor(e=new mt,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ko.fromBufferAttribute(t,s-1),Jo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(Jo);e.setAttribute("lineDistance",new Je(n,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Af.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(Af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){let p=h.getX(_),x=h.getX(_+1),b=Ro(this,e,Kr,c,p,x,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Ro(this,e,Kr,c,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){let p=Ro(this,e,Kr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Ro(this,e,Kr,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ro(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Ko.fromBufferAttribute(o,s),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Ko,Jo,th,Rf)>n)return;th.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(th);if(!(l<e.near||l>e.far))return{distance:l,point:Rf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cf=new N,Pf=new N,ha=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new Je(n,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},mr=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},If=new We,dh=new ps,Co=new gn,Po=new N,da=class extends Nt{constructor(e=new mt,t=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;If.copy(s).invert(),dh.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){let g=l.getX(m);Po.fromBufferAttribute(u,g),Lf(Po,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Po.fromBufferAttribute(u,m),Lf(Po,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lf(i,e,t,n,s,r,a){let o=dh.distanceSqToPoint(i);if(o<t){let c=new N;dh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var fa=class extends Qt{constructor(e=[],t=Ts,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var yi=class extends Qt{constructor(e,t,n=Hn,s,r,a,o=zt,c=zt,l,h=xi,u=1){if(h!==xi&&h!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},pa=class extends yi{constructor(e,t=Hn,n=Ts,s,r,a=zt,o=zt,c,l=xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ma=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xn=class i extends mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(_,g,p,x,b,y,E,S,v,M,I){let w=y/v,R=E/M,D=y/2,L=E/2,C=S/2,G=v+1,q=M+1,F=0,j=0,k=new N;for(let z=0;z<q;z++){let B=z*R-L;for(let Q=0;Q<G;Q++){let le=Q*w-D;k[_]=le*x,k[g]=B*b,k[p]=C,l.push(k.x,k.y,k.z),k[_]=0,k[g]=0,k[p]=S>0?1:-1,h.push(k.x,k.y,k.z),u.push(Q/v),u.push(1-z/M),F+=1}}for(let z=0;z<M;z++)for(let B=0;B<v;B++){let Q=d+B+G*z,le=d+B+G*(z+1),U=d+(B+1)+G*(z+1),X=d+(B+1)+G*z;c.push(Q,le,X),c.push(le,U,X),j+=6}o.addGroup(f,j,I),f+=j,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var kn=class i extends mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function x(){let y=new N,E=new N,S=0,v=(t-e)/n;for(let M=0;M<=r;M++){let I=[],w=M/r,R=w*(t-e)+e;for(let D=0;D<=s;D++){let L=D/s,C=L*c+o,G=Math.sin(C),q=Math.cos(C);E.x=R*G,E.y=-w*n+g,E.z=R*q,u.push(E.x,E.y,E.z),y.set(G,v,q).normalize(),d.push(y.x,y.y,y.z),f.push(L,1-w),I.push(m++)}_.push(I)}for(let M=0;M<s;M++)for(let I=0;I<r;I++){let w=_[I][M],R=_[I+1][M],D=_[I+1][M+1],L=_[I][M+1];(e>0||I!==0)&&(h.push(w,R,L),S+=3),(t>0||I!==r-1)&&(h.push(R,D,L),S+=3)}l.addGroup(p,S,0),p+=S}function b(y){let E=m,S=new fe,v=new N,M=0,I=y===!0?e:t,w=y===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let R=m;for(let D=0;D<=s;D++){let C=D/s*c+o,G=Math.cos(C),q=Math.sin(C);v.x=I*q,v.y=g*w,v.z=I*G,u.push(v.x,v.y,v.z),d.push(0,w,0),S.x=G*.5+.5,S.y=q*.5*w+.5,f.push(S.x,S.y),m++}for(let D=0;D<s;D++){let L=E+D,C=R+D;y===!0?h.push(C,C+1,L):h.push(C+1,C,L),M+=3}l.addGroup(p,M,y===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new fe:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,c=new We;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},gr=class extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yo=class extends gr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Df=new N,Nf=new N,nh=new Qh,ih=new Qh,sh=new Qh,Zo=class extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Nf.subVectors(s[0],s[1]).add(s[0]),l=Nf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Df.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Df),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),nh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),ih.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),sh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ih.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),sh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(nh.calc(c),ih.calc(c),sh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ff(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function i0(i,e){let t=1-i;return t*t*e}function s0(i,e){return 2*(1-i)*i*e}function r0(i,e){return i*i*e}function Qr(i,e,t,n){return i0(i,e)+s0(i,t)+r0(i,n)}function a0(i,e){let t=1-i;return t*t*t*e}function o0(i,e){let t=1-i;return 3*t*t*i*e}function c0(i,e){return 3*(1-i)*i*i*e}function l0(i,e){return i*i*i*e}function ea(i,e,t,n,s){return a0(i,e)+o0(i,t)+c0(i,n)+l0(i,s)}var ga=class extends En{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,s.x,r.x,a.x,o.x),ea(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends En{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,s.x,r.x,a.x,o.x),ea(e,s.y,r.y,a.y,o.y),ea(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends En{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends En{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends En{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends En{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(e,s.x,r.x,a.x),Qr(e,s.y,r.y,a.y),Qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ff(o,c.x,l.x,h.x,u.x),Ff(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:Yo,CatmullRomCurve3:Zo,CubicBezierCurve:ga,CubicBezierCurve3:$o,EllipseCurve:gr,LineCurve:ba,LineCurve3:Qo,QuadraticBezierCurve:xa,QuadraticBezierCurve3:ec,SplineCurve:_a}),tc=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new fh[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},va=class extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ba(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ga(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new gr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends va{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new va().fromJSON(s))}return this}};function h0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=m0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return ya(r,a,t,o,c,l,0),a}function Lp(i,e,t,n,s){let r;if(s===w0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Uf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Uf(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(Sa(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(br(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ya(i,e,t,n,s,r,a){if(!i)return;!a&&r&&v0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?d0(i,n,s,r):u0(i)){e.push(c.i,i.i,l.i),Sa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=f0(gs(i),e),ya(i,e,t,n,s,r,2)):a===2&&p0(i,e,t,n,s,r):ya(gs(i),e,t,n,s,r,1);break}}}function u0(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Jr(s,o,r,c,a,l,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function d0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),_=Math.max(o,c,l),g=Math.max(h,u,d),p=ph(f,m,e,t,n),x=ph(_,g,e,t,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=p&&y&&y.z<=x;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Jr(o,h,c,u,l,d,b.x,b.y)&&Lt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Jr(o,h,c,u,l,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&Jr(o,h,c,u,l,d,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&Jr(o,h,c,u,l,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function f0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!br(n,s)&&Np(n,t,t.next,s)&&Ma(n,s)&&Ma(s,n)&&(e.push(n.i,t.i,s.i),Sa(t),Sa(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function p0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&S0(a,o)){let c=Fp(a,o);a=gs(a,a.next),c=gs(c,c.next),ya(a,e,t,n,s,r,0),ya(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function m0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Lp(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(M0(l))}s.sort(g0);for(let r=0;r<s.length;r++)t=b0(s[r],t);return t}function g0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function b0(i,e){let t=x0(i,e);if(!t)return e;let n=Fp(t,i);return gs(n,n.next),gs(t,t.next)}function x0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(br(i,t))return t;do{if(br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Dp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ma(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&_0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function _0(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function v0(i,e,t,n){let s=i;do s.z===0&&(s.z=ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,y0(s)}function y0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Dp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Jr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Dp(i,e,t,n,s,r,a,o)}function S0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!E0(i,e)&&(Ma(i,e)&&Ma(e,i)&&T0(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||br(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function br(i,e){return i.x===e.x&&i.y===e.y}function Np(i,e,t,n){let s=Lo(Lt(i,e,t)),r=Lo(Lt(i,e,n)),a=Lo(Lt(t,n,i)),o=Lo(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&Io(i,t,e)||r===0&&Io(i,n,e)||a===0&&Io(t,i,n)||o===0&&Io(t,e,n))}function Io(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lo(i){return i>0?1:i<0?-1:0}function E0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Np(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ma(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function T0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fp(i,e){let t=mh(i.i,i.x,i.y),n=mh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Uf(i,e,t,n){let s=mh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function w0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var gh=class{static triangulate(e,t,n=2){return h0(e,t,n)}},Xn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Of(e),Bf(n,e);let a=e.length;t.forEach(Of);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Bf(n,t[c]);let o=gh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Of(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ea=class i extends mt{constructor(e=new Mi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:A0,b,y=!1,E,S,v,M;if(p){b=p.getSpacedPoints(h),y=!0,d=!1;let Z=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,Z),S=new N,v=new N,M=new N}d||(g=0,f=0,m=0,_=0);let I=o.extractPoints(l),w=I.shape,R=I.holes;if(!Xn.isClockWise(w)){w=w.reverse();for(let Z=0,ne=R.length;Z<ne;Z++){let he=R[Z];Xn.isClockWise(he)&&(R[Z]=he.reverse())}}function L(Z){let he=10000000000000001e-36,me=Z[0];for(let de=1;de<=Z.length;de++){let He=de%Z.length,O=Z[He],re=O.x-me.x,Ee=O.y-me.y,Oe=re*re+Ee*Ee,V=Math.max(Math.abs(O.x),Math.abs(O.y),Math.abs(me.x),Math.abs(me.y)),ut=he*V*V;if(Oe<=ut){Z.splice(He,1),de--;continue}me=O}}L(w),R.forEach(L);let C=R.length,G=w;for(let Z=0;Z<C;Z++){let ne=R[Z];w=w.concat(ne)}function q(Z,ne,he){return ne||je("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ne,he)}let F=w.length;function j(Z,ne,he){let me,de,He,O=Z.x-ne.x,re=Z.y-ne.y,Ee=he.x-Z.x,Oe=he.y-Z.y,V=O*O+re*re,ut=O*Oe-re*Ee;if(Math.abs(ut)>Number.EPSILON){let ot=Math.sqrt(V),vt=Math.sqrt(Ee*Ee+Oe*Oe),we=ne.x-re/ot,Bt=ne.y+O/ot,qe=he.x-Oe/vt,Ke=he.y+Ee/vt,P=((qe-we)*Oe-(Ke-Bt)*Ee)/(O*Oe-re*Ee);me=we+O*P-Z.x,de=Bt+re*P-Z.y;let T=me*me+de*de;if(T<=2)return new fe(me,de);He=Math.sqrt(T/2)}else{let ot=!1;O>Number.EPSILON?Ee>Number.EPSILON&&(ot=!0):O<-Number.EPSILON?Ee<-Number.EPSILON&&(ot=!0):Math.sign(re)===Math.sign(Oe)&&(ot=!0),ot?(me=-re,de=O,He=Math.sqrt(V)):(me=O,de=re,He=Math.sqrt(V/2))}return new fe(me/He,de/He)}let k=[];for(let Z=0,ne=G.length,he=ne-1,me=Z+1;Z<ne;Z++,he++,me++)he===ne&&(he=0),me===ne&&(me=0),k[Z]=j(G[Z],G[he],G[me]);let z=[],B,Q=k.concat();for(let Z=0,ne=C;Z<ne;Z++){let he=R[Z];B=[];for(let me=0,de=he.length,He=de-1,O=me+1;me<de;me++,He++,O++)He===de&&(He=0),O===de&&(O=0),B[me]=j(he[me],he[He],he[O]);z.push(B),Q=Q.concat(B)}let le;if(g===0)le=Xn.triangulateShape(G,R);else{let Z=[],ne=[];for(let he=0;he<g;he++){let me=he/g,de=f*Math.cos(me*Math.PI/2),He=m*Math.sin(me*Math.PI/2)+_;for(let O=0,re=G.length;O<re;O++){let Ee=q(G[O],k[O],He);_e(Ee.x,Ee.y,-de),me===0&&Z.push(Ee)}for(let O=0,re=C;O<re;O++){let Ee=R[O];B=z[O];let Oe=[];for(let V=0,ut=Ee.length;V<ut;V++){let ot=q(Ee[V],B[V],He);_e(ot.x,ot.y,-de),me===0&&Oe.push(ot)}me===0&&ne.push(Oe)}}le=Xn.triangulateShape(Z,ne)}let U=le.length,X=m+_;for(let Z=0;Z<F;Z++){let ne=d?q(w[Z],Q[Z],X):w[Z];y?(v.copy(E.normals[0]).multiplyScalar(ne.x),S.copy(E.binormals[0]).multiplyScalar(ne.y),M.copy(b[0]).add(v).add(S),_e(M.x,M.y,M.z)):_e(ne.x,ne.y,0)}for(let Z=1;Z<=h;Z++)for(let ne=0;ne<F;ne++){let he=d?q(w[ne],Q[ne],X):w[ne];y?(v.copy(E.normals[Z]).multiplyScalar(he.x),S.copy(E.binormals[Z]).multiplyScalar(he.y),M.copy(b[Z]).add(v).add(S),_e(M.x,M.y,M.z)):_e(he.x,he.y,u/h*Z)}for(let Z=g-1;Z>=0;Z--){let ne=Z/g,he=f*Math.cos(ne*Math.PI/2),me=m*Math.sin(ne*Math.PI/2)+_;for(let de=0,He=G.length;de<He;de++){let O=q(G[de],k[de],me);_e(O.x,O.y,u+he)}for(let de=0,He=R.length;de<He;de++){let O=R[de];B=z[de];for(let re=0,Ee=O.length;re<Ee;re++){let Oe=q(O[re],B[re],me);y?_e(Oe.x,Oe.y+b[h-1].y,b[h-1].x+he):_e(Oe.x,Oe.y,u+he)}}}te(),ue();function te(){let Z=s.length/3;if(d){let ne=0,he=F*ne;for(let me=0;me<U;me++){let de=le[me];et(de[2]+he,de[1]+he,de[0]+he)}ne=h+g*2,he=F*ne;for(let me=0;me<U;me++){let de=le[me];et(de[0]+he,de[1]+he,de[2]+he)}}else{for(let ne=0;ne<U;ne++){let he=le[ne];et(he[2],he[1],he[0])}for(let ne=0;ne<U;ne++){let he=le[ne];et(he[0]+F*h,he[1]+F*h,he[2]+F*h)}}n.addGroup(Z,s.length/3-Z,0)}function ue(){let Z=s.length/3,ne=0;oe(G,ne),ne+=G.length;for(let he=0,me=R.length;he<me;he++){let de=R[he];oe(de,ne),ne+=de.length}n.addGroup(Z,s.length/3-Z,1)}function oe(Z,ne){let he=Z.length;for(;--he>=0;){let me=he,de=he-1;de<0&&(de=Z.length-1);for(let He=0,O=h+g*2;He<O;He++){let re=F*He,Ee=F*(He+1),Oe=ne+me+re,V=ne+de+re,ut=ne+de+Ee,ot=ne+me+Ee;ge(Oe,V,ut,ot)}}}function _e(Z,ne,he){c.push(Z),c.push(ne),c.push(he)}function et(Z,ne,he){Ue(Z),Ue(ne),Ue(he);let me=s.length/3,de=x.generateTopUV(n,s,me-3,me-2,me-1);Le(de[0]),Le(de[1]),Le(de[2])}function ge(Z,ne,he,me){Ue(Z),Ue(ne),Ue(me),Ue(ne),Ue(he),Ue(me);let de=s.length/3,He=x.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);Le(He[0]),Le(He[1]),Le(He[3]),Le(He[1]),Le(He[2]),Le(He[3])}function Ue(Z){s.push(c[Z*3+0]),s.push(c[Z*3+1]),s.push(c[Z*3+2])}function Le(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return R0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fh[s.type]().fromJSON(s)),new i(n,e.options)}},A0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,c),new fe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new fe(a,1-c),new fe(l,1-u),new fe(d,1-m),new fe(_,1-p)]:[new fe(o,1-c),new fe(h,1-u),new fe(f,1-m),new fe(g,1-p)]}};function R0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ta=class i extends mt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new N,d=new fe,f=new N,m=new N,_=new N,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){let b=n+x*h*s,y=Math.sin(b),E=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*E,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let v=c[3*S+0]*y,M=c[3*S+1],I=c[3*S+0]*E;l.push(v,M,I)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let y=b+x*e.length,E=y,S=y+e.length,v=y+e.length+1,M=y+1;r.push(E,S,M),r.push(v,M,S)}this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var bs=class i extends mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let b=0;b<l;b++){let y=b*u-r;m.push(y,-x,0),_.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let b=x+l*p,y=x+l*(p+1),E=x+1+l*(p+1),S=x+1+l*p;f.push(b,y,S),f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var wa=class i extends mt{constructor(e=new Mi([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(a,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Xn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];Xn.isClockWise(x)===!0&&(m[g]=x.reverse())}let _=Xn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){let x=_[g],b=x[0]+u,y=x[1]+u,E=x[2]+u;n.push(b,y,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return C0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function C0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Si=class i extends mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let x=[],b=p/n,y=a+b*o,E=e*Math.cos(y),S=Math.sqrt(e*e-E*E),v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let I=M/t,w=s+I*r;u.x=-S*Math.cos(w),u.y=E,u.z=S*Math.sin(w),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(I+v,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let b=h[p][x+1],y=h[p][x],E=h[p+1][x],S=h[p+1][x+1];(p!==0||a>0)&&f.push(b,y,S),(p!==n-1||c<Math.PI)&&f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kf(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=Cs(i[t]);for(let s in n)e[s]=n[s]}return e}function kf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function P0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Up={clone:Cs,merge:cn},I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=L0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},nc=class extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$e=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ft=class extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ic=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function D0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function zf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function N0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var $n=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rc=class extends $n{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hh:r=e,o=2*t-n;break;case uh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:a=e,c=2*n-t;break;case uh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+x*a[l+E]+b*a[c+E]+y*a[u+E];return r}},ac=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},oc=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cc=class extends $n{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),_=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let _=a[l+m],g=a[c+m],p=f*d+m*2,x=u[p],b=u[p+1],y=e*d+m*2,E=h[y],S=h[y+1],v=U0(n,t,x,E,s);r[m]=Op(v,_,b,S,g)}return r}};function Op(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function F0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function U0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Op(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=F0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Yr(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break;case ch:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return ch}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Yr(this.settings)&&(Hf(this.settings.inTangents,e),Hf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Yr(this.settings)&&(Gf(this.settings.inTangents,e),Gf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){je("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&bg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Gf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ds;var Ei=class extends _n{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=us;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Aa.prototype.ValueTypeName="color";var Ti=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ti.prototype.ValueTypeName="number";var lc=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ct.slerpFlat(r,0,a,l-o,a,l,c);return r}},wi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}};wi.prototype.ValueTypeName="quaternion";wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends _n{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=us;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ji.prototype.ValueTypeName="vector";var Ra=class{constructor(e="",t=-1,n=[],s=xp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(B0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=D0(c);c=zf(c,1,h),l=zf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ti(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function O0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ti;case"vector":case"vector2":case"vector3":case"vector4":return Ji;case"color":return Aa;case"quaternion":return wi;case"bool":case"boolean":return Ei;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function B0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=O0(i.type);if(i.times===void 0){let n=[],s=[];N0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Yr(i.settings)&&(t.settings={inTangents:qi(i.settings.inTangents,Float32Array),outTangents:qi(i.settings.outTangents,Float32Array)}),t}var jn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Vf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Vf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Vf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var hc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new hc,zn=class{constructor(e){this.manager=e!==void 0?e:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};zn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},bh=class extends Error{constructor(e,t){super(e),this.response=t}},xs=class extends zn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=jn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=mi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let S=0,v=h.length;S<v;S++){let M=h[S];M.onProgress&&M.onProgress(E)}p.enqueue(y),x()}},b=>{p.error(b)})}}});return new Response(g)}else throw new bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{jn.add(`file:${e}`,l);let h=mi[e];delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qs=new WeakMap,uc=class extends zn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Qs.get(a);u===void 0&&(u=[],Qs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=ar("img");function c(){h(),t&&t(this);let u=Qs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),jn.remove(`image:${e}`);let d=Qs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),jn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Ca=class extends zn{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Yn,o=new xs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):je(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new Yn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:mn,e.wrapT=t.wrapT!==void 0?t.wrapT:mn,e.magFilter=t.magFilter!==void 0?t.magFilter:wt,e.minFilter=t.minFilter!==void 0?t.minFilter:wt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Tn),t.mipmapCount===1&&(e.minFilter=wt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},_s=class extends zn{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,a=new uc(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xr=class extends Nt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var rh=new We,Wf=new N,qf=new N,_r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===rr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=new N,No=new Ct,qn=new N,Pa=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,No,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Do,No,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wi=new N,Xf=new fe,jf=new fe,Xt=class extends Pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,jf),t.subVectors(jf,Xf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xh=class extends _r{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ia=class extends xr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_h=class extends _r{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},La=class extends xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vs=class extends Pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vh=class extends _r{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ri=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ah=new WeakMap,Da=class extends zn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=jn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{ah.has(a)===!0?(s&&s(ah.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return jn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ah.set(c,l),jn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});jn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=-90,tr=1,vr=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new Xt(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new Xt(er,tr,e,t);o.layers=this.layers,this.add(o);let c=new Xt(er,tr,e,t);c.layers=this.layers,this.add(c);let l=new Xt(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},dc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var tu="\\[\\]\\.:\\/",k0=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",z0="[^"+tu.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",nu),G0=/(WCOD+)?/.source.replace("WCOD",z0),V0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),q0=new RegExp("^"+H0+G0+V0+W0+"$"),X0=["material","materials","bones","map"],yh=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(k0,"")}static parseTrackName(e){let t=q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);X0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=yh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uS=new Float32Array(1);var cu=class cu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};cu.prototype.isMatrix2=!0;var Mh=cu;function iu(i,e,t,n){let s=j0(n);switch(t){case Hh:return i*e;case _c:return i*e/s.components*s.byteLength;case vc:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case yc:return i*e*2/s.components*s.byteLength;case Gh:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case Mc:return i*e*4/s.components*s.byteLength;case Fa:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case wc:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Tc:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case ka:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jc:case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j0(i){switch(i){case vn:case Oh:return{byteLength:1,components:1};case wr:case Bh:case pn:return{byteLength:2,components:1};case bc:case xc:return{byteLength:2,components:4};case Hn:case gc:case on:return{byteLength:4,components:1};case kh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function am(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function K0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
#endif`,sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cb=`#ifdef USE_IRIDESCENCE
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
#endif`,lb=`#ifdef USE_BUMPMAP
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xb=`#define PI 3.141592653589793
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
} // validated`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fb=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,Xb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sx=`#if defined( USE_POINTS_UV )
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
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
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
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
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
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,xx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dx=`float getShadowMask() {
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
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ox=`#ifdef USE_SKINNING
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
#endif`,Bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform float backgroundBlurriness;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`#include <common>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define LAMBERT
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
}`,d_=`#define MATCAP
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
}`,f_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
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
}`,g_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,x_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,y_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,S_=`uniform vec3 diffuse;
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
}`,E_=`#include <common>
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
}`,T_=`uniform vec3 color;
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
}`,w_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:J0,alphahash_pars_fragment:Y0,alphamap_fragment:Z0,alphamap_pars_fragment:$0,alphatest_fragment:Q0,alphatest_pars_fragment:eb,aomap_fragment:tb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:sb,begin_vertex:rb,beginnormal_vertex:ab,bsdfs:ob,iridescence_fragment:cb,bumpmap_pars_fragment:lb,clipping_planes_fragment:hb,clipping_planes_pars_fragment:ub,clipping_planes_pars_vertex:db,clipping_planes_vertex:fb,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:bb,common:xb,defaultnormal_vertex:_b,displacementmap_pars_vertex:vb,displacementmap_vertex:yb,emissivemap_fragment:Mb,emissivemap_pars_fragment:Sb,colorspace_fragment:Eb,colorspace_pars_fragment:Tb,envmap_fragment:wb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Rb,envmap_pars_vertex:Cb,envmap_physical_pars_fragment:zb,envmap_vertex:Pb,fog_vertex:Ib,fog_pars_vertex:Lb,fog_fragment:Db,fog_pars_fragment:Nb,gradientmap_pars_fragment:Fb,lightmap_pars_fragment:Ub,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Bb,lights_pars_begin:kb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Xb,lights_fragment_begin:jb,lights_fragment_maps:Kb,lights_fragment_end:Jb,lightprobes_pars_fragment:Yb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:ex,map_fragment:tx,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ax,morphinstance_vertex:ox,morphcolor_vertex:cx,morphnormal_vertex:lx,morphtarget_pars_vertex:hx,morphtarget_vertex:ux,normal_fragment_begin:dx,normal_fragment_maps:fx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:xx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:vx,iridescence_pars_fragment:yx,opaque_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:Ex,project_vertex:Tx,dithering_fragment:wx,dithering_pars_fragment:Ax,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Ix,shadowmap_vertex:Lx,shadowmask_pars_fragment:Dx,skinbase_vertex:Nx,skinning_pars_vertex:Fx,skinning_vertex:Ux,skinnormal_vertex:Ox,specularmap_fragment:Bx,specularmap_pars_fragment:kx,tonemapping_fragment:zx,tonemapping_pars_fragment:Hx,transmission_fragment:Gx,transmission_pars_fragment:Vx,uv_pars_fragment:Wx,uv_pars_vertex:qx,uv_vertex:Xx,worldpos_vertex:jx,background_vert:Kx,background_frag:Jx,backgroundCube_vert:Yx,backgroundCube_frag:Zx,cube_vert:$x,cube_frag:Qx,depth_vert:e_,depth_frag:t_,distance_vert:n_,distance_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:c_,meshbasic_frag:l_,meshlambert_vert:h_,meshlambert_frag:u_,meshmatcap_vert:d_,meshmatcap_frag:f_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:b_,meshphysical_vert:x_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:y_,points_vert:M_,points_frag:S_,shadow_vert:E_,shadow_frag:T_,sprite_vert:w_,sprite_frag:A_},Pe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:cn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:cn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:cn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ze(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:cn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:cn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:cn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:cn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:cn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:cn([Pe.common,Pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:cn([Pe.lights,Pe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ii.physical={uniforms:cn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var tl={r:0,b:0,g:0},R_=new We,om=new Ze;om.set(-1,0,0,0,1,0,0,0,1);function C_(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function m(x){let b=!1,y=f(x);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,b){let y=f(b);y&&y.isCubeTexture?(l===void 0&&(l=new Ye(new xn(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Cs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,S,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(R_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(om),l.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ye(new bs(2,2),new Zn({name:"BackgroundMaterial",uniforms:Cs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,b){x.getRGB(tl,eu(i)),t.buffers.color.setClear(tl.r,tl.g,tl.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:_,dispose:p}}function P_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(R,D,L,C,G){let q=!1,F=u(R,C,L,D);r!==F&&(r=F,l(r.object)),q=f(R,C,L,G),q&&m(R,C,L,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(R,D,L,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,D,L,C){let G=C.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let F=R.isInstancedMesh===!0?R.id:0,j=q[F];j===void 0&&(j={},q[F]=j);let k=j[L.id];k===void 0&&(k={},j[L.id]=k);let z=k[G];return z===void 0&&(z=d(c()),k[G]=z),z}function d(R){let D=[],L=[],C=[];for(let G=0;G<t;G++)D[G]=0,L[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:C,object:R,attributes:{},index:null}}function f(R,D,L,C){let G=r.attributes,q=D.attributes,F=0,j=L.getAttributes();for(let k in j)if(j[k].location>=0){let B=G[k],Q=q[k];if(Q===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),B===void 0||B.attribute!==Q||Q&&B.data!==Q.data)return!0;F++}return r.attributesNum!==F||r.index!==C}function m(R,D,L,C){let G={},q=D.attributes,F=0,j=L.getAttributes();for(let k in j)if(j[k].location>=0){let B=q[k];B===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(B=R.instanceColor));let Q={};Q.attribute=B,B&&B.data&&(Q.data=B.data),G[k]=Q,F++}r.attributes=G,r.attributesNum=F,r.index=C}function _(){let R=r.newAttributes;for(let D=0,L=R.length;D<L;D++)R[D]=0}function g(R){p(R,0)}function p(R,D){let L=r.newAttributes,C=r.enabledAttributes,G=r.attributeDivisors;L[R]=1,C[R]===0&&(i.enableVertexAttribArray(R),C[R]=1),G[R]!==D&&(i.vertexAttribDivisor(R,D),G[R]=D)}function x(){let R=r.newAttributes,D=r.enabledAttributes;for(let L=0,C=D.length;L<C;L++)D[L]!==R[L]&&(i.disableVertexAttribArray(L),D[L]=0)}function b(R,D,L,C,G,q,F){F===!0?i.vertexAttribIPointer(R,D,L,G,q):i.vertexAttribPointer(R,D,L,C,G,q)}function y(R,D,L,C){_();let G=C.attributes,q=L.getAttributes(),F=D.defaultAttributeValues;for(let j in q){let k=q[j];if(k.location>=0){let z=G[j];if(z===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),z!==void 0){let B=z.normalized,Q=z.itemSize,le=e.get(z);if(le===void 0)continue;let U=le.buffer,X=le.type,te=le.bytesPerElement,ue=X===i.INT||X===i.UNSIGNED_INT||z.gpuType===gc;if(z.isInterleavedBufferAttribute){let oe=z.data,_e=oe.isInterleavedBuffer===!0?oe.stride:oe.itemSize,et=z.offset;if(oe.isInstancedInterleavedBuffer||oe.isInstancedBufferAttribute){for(let ge=0;ge<k.locationSize;ge++)p(k.location+ge,oe.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<k.locationSize;ge++)g(k.location+ge);i.bindBuffer(i.ARRAY_BUFFER,U);for(let ge=0;ge<k.locationSize;ge++)b(k.location+ge,Q/k.locationSize,X,B,_e*te,(et+Q/k.locationSize*ge)*te,ue)}else{if(z.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe,z.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let oe=0;oe<k.locationSize;oe++)g(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,U);for(let oe=0;oe<k.locationSize;oe++)b(k.location+oe,Q/k.locationSize,X,B,Q*te,Q/k.locationSize*oe*te,ue)}}else if(F!==void 0){let B=F[j];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(k.location,B);break;case 3:i.vertexAttrib3fv(k.location,B);break;case 4:i.vertexAttrib4fv(k.location,B);break;default:i.vertexAttrib1fv(k.location,B)}}}}x()}function E(){I();for(let R in n){let D=n[R];for(let L in D){let C=D[L];for(let G in C){let q=C[G];for(let F in q)h(q[F].object),delete q[F];delete C[G]}}delete n[R]}}function S(R){if(n[R.id]===void 0)return;let D=n[R.id];for(let L in D){let C=D[L];for(let G in C){let q=C[G];for(let F in q)h(q[F].object),delete q[F];delete C[G]}}delete n[R.id]}function v(R){for(let D in n){let L=n[D];for(let C in L){let G=L[C];if(G[R.id]===void 0)continue;let q=G[R.id];for(let F in q)h(q[F].object),delete q[F];delete G[R.id]}}}function M(R){for(let D in n){let L=n[D],C=R.isInstancedMesh===!0?R.id:0,G=L[C];if(G!==void 0){for(let q in G){let F=G[q];for(let j in F)h(F[j].object),delete F[j];delete G[q]}delete L[C],Object.keys(L).length===0&&delete n[D]}}}function I(){w(),a=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function I_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function L_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Cn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==vn&&v!==on&&!M&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:E,samples:S}}function D_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,b=x*4,y=p.clippingState||null;c.value=y,y=h(m,d,b,f);for(let E=0;E!==b;++E)y[E]=t[E];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,y=f;b!==_;++b,y+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Wa=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ss});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=wt),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},kp=256,N_=3,F_=20,cm=256,lm=16,U_=3,O_=new N,B_=new ze,Cr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vr(1,10,null),this._boxMesh=new Ye(new xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=O_}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,m=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(B_));let g=new vr(n,s,h);return g.position.copy(o),g.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=m,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kp,Yh(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===Sr?this._setSize(e.image.length===0?kp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zp(e,!1,!1),n=Math.log2(e)-N_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===Sr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=k_(),this._integrationMaterial=z_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lm);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-U_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(cm*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=H_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function zp(i,e,t){return new Wa(i,{minFilter:Tn,generateMipmaps:e,type:pn,colorSpace:jt,depthBuffer:t})}function qa(i,e,t){return new Zn({name:i,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:fn,blending:Ss,depthTest:!1,depthWrite:!1})}function k_(){return qa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cm}u

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
	`)}function z_(){return qa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lm}},`

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
	`)}function H_(){return qa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F_}
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
	`)}function Hp(){return qa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gp(){return qa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function G_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Er||f===pc)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Wa(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Er||f===pc,_=f===Ts||f===Sr;if(m||_){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Cr(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return m&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new Cr(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Er?d.mapping=Ts:f===pc&&(d.mapping=Sr),d}function c(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function V_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function W_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let _=r.get(m);_&&(e.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(m){let _=m.attributes;for(let g in _)e.update(_[g],i.ARRAY_BUFFER)}function u(m){let _=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let x=_!==null?_.array.length:g.array.length/3-1,b=g.count>=65535?oa:aa,y=new b(Math.ceil(x/3)*6,1),E=y.array;if(_!==null){let v=_.array;p=_.version;for(let M=0,I=0;M<x;M+=3){let w=v[M+0],R=v[M+1],D=v[M+2];E[I++]=w,E[I++]=R,E[I++]=R,E[I++]=D,E[I++]=D,E[I++]=w}}else{p=g.version;for(let v=0,M=0;v<x;v+=3){let I=v+0,w=v+1,R=v+2;E[M++]=I,E[M++]=w,E[M++]=w,E[M++]=R,E[M++]=R,E[M++]=I}}y.version=p;let S=r.get(m);S&&e.remove(S),r.set(m,y)}function d(m){let _=r.get(m);if(_){let g=m.index;g!==null&&_.version<g.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let _=s[m].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function q_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function X_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function j_(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let I=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*E*4*u),v=new ia(S,y,E,u);v.type=on,v.needsUpdate=!0;let M=b*4;for(let w=0;w<u;w++){let R=g[w],D=p[w],L=x[w],C=y*E*4*w;for(let G=0;G<R.count;G++){let q=G*M;f===!0&&(s.fromBufferAttribute(R,G),S[C+q+0]=s.x,S[C+q+1]=s.y,S[C+q+2]=s.z,S[C+q+3]=0),m===!0&&(s.fromBufferAttribute(D,G),S[C+q+4]=s.x,S[C+q+5]=s.y,S[C+q+6]=s.z,S[C+q+7]=0),_===!0&&(s.fromBufferAttribute(L,G),S[C+q+8]=s.x,S[C+q+9]=s.y,S[C+q+10]=s.z,S[C+q+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new fe(y,E)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function K_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var J_={[Ph]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Lh]:"CINEON_TONE_MAPPING",[Na]:"ACES_FILMIC_TONE_MAPPING",[Nh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function Y_(i,e,t,n,s,r){let a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new mt;h.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Je([0,2,0,0,2,0],2));let u=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ye(h,u),f=new vs(-1,1,1,-1,0,1),m=null,_=null,g=!1,p,x=null,b=[],y=!1;this.setSize=function(E,S){a.setSize(E,S),o!==null&&o.setSize(E,S),c!==null&&c.setSize(E,S);for(let v=0;v<b.length;v++){let M=b[v];M.setSize&&M.setSize(E,S)}},this.setEffects=function(E){b=E,y=b.length>0&&b[0].isRenderPass===!0;let S=a.width,v=a.height;b.length>0&&o===null&&(o=new Sn(S,v,{type:pn,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(S,v,{type:pn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&b.some(I=>I.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new yi(S,v),r===!0&&(l.format=Ci,l.type=As)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let I=0;I<b.length;I++){let w=b[I];w.setSize&&w.setSize(S,v),M&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(l)}},this.begin=function(E,S){if(g||E.toneMapping===ei&&b.length===0)return!1;if(x=S,S!==null){let v=S.width,M=S.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return y===!1&&E.setRenderTarget(a),p=E.toneMapping,E.toneMapping=ei,!0},this.hasRenderPass=function(){return y},this.end=function(E,S){E.toneMapping=p,g=!0;let v=a,M=o;for(let I=0;I<b.length;I++){let w=b[I];w.enabled!==!1&&(w.render(E,M,v,S),w.needsSwap!==!1&&(v=M,M=M===o?c:o))}if(m!==E.outputColorSpace||_!==E.toneMapping){m=E.outputColorSpace,_=E.toneMapping,u.defines={},lt.getTransfer(m)===_t&&(u.defines.SRGB_TRANSFER="");let I=J_[_];I&&(u.defines[I]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(x),E.render(d,f),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var hm=new Qt,um=new yi(1,1),dm=new pa(1),fm=new ia,pm=new Xo,mm=new fa,Vp=[],Wp=[],qp=new Float32Array(16),Xp=new Float32Array(9),jp=new Float32Array(4);function Pr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Vp[s];if(r===void 0&&(r=new Float32Array(s),Vp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sl(i,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;jp.set(n),i.uniformMatrix2fv(this.addr,!1,jp),Jt(t,n)}}function nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),Jt(t,n)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;qp.set(n),i.uniformMatrix4fv(this.addr,!1,qp),Jt(t,n)}}function sv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function rl(i){return i.version===0&&(i.compareFunction=Xh,i.needsUpdate=!0),i}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=rl(um):r=hm,t.setTexture2D(e||r,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pm,s)}function pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=rl(dm):r=mm,t.setTextureCube(e||r,s)}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fm,s)}function gv(i){switch(i){case 5126:return Z_;case 35664:return $_;case 35665:return Q_;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return cv;case 36294:return lv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function bv(i,e){i.uniform1fv(this.addr,e)}function xv(i,e){let t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function _v(i,e){let t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function vv(i,e){let t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function yv(i,e){let t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mv(i,e){let t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sv(i,e){let t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ev(i,e){i.uniform1iv(this.addr,e)}function Tv(i,e){i.uniform2iv(this.addr,e)}function wv(i,e){i.uniform3iv(this.addr,e)}function Av(i,e){i.uniform4iv(this.addr,e)}function Rv(i,e){i.uniform1uiv(this.addr,e)}function Cv(i,e){i.uniform2uiv(this.addr,e)}function Pv(i,e){i.uniform3uiv(this.addr,e)}function Iv(i,e){i.uniform4uiv(this.addr,e)}function Lv(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=rl(um):a=hm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Dv(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pm,r[a])}function Nv(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=rl(dm):a=mm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Fv(i,e,t){let n=this.cache,s=e.length,r=sl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fm,r[a])}function Uv(i){switch(i){case 5126:return bv;case 35664:return xv;case 35665:return _v;case 35666:return vv;case 35674:return yv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return Ev;case 35667:case 35671:return Tv;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Fv}}var uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gv(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},lu=/(\w+)(\])?(\[|\.)?/g;function Kp(i,e){i.seq.push(e),i.map[e.id]=e}function Ov(i,e,t){let n=i.name,s=n.length;for(lu.lastIndex=0;;){let r=lu.exec(n),a=lu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Kp(t,l===void 0?new uu(o,i,e):new du(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new fu(o),Kp(t,u)),t=u}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Ov(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Jp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Bv=37297,kv=0;function zv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Yp=new Ze;function Hv(i){lt._getMatrix(Yp,lt.workingColorSpace,i);let e=`mat3( ${Yp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zv(i.getShaderSource(e),o)}else return r}function Gv(i,e){let t=Hv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Vv={[Ph]:"Linear",[Ih]:"Reinhard",[Lh]:"Cineon",[Na]:"ACESFilmic",[Nh]:"AgX",[Fh]:"Neutral",[Dh]:"Custom"};function Wv(i,e){let t=Vv[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nl=new N;function qv(){lt.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Va(i){return i!==""}function $p(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(i){return i.replace(Jv,Yv)}function Yv(i,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pu(t)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(i){return i.replace(Zv,$v)}function $v(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Qv={[Ms]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function ey(i){return Qv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ty={[Sr]:"ENVMAP_MODE_REFRACTION"};function ny(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ty[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iy={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function sy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":iy[i.combine]||"ENVMAP_BLENDING_NONE"}function ry(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=ey(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ny(t),u=sy(t),d=Xv(t),f=jv(r),m=s.createProgram(),_,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Va).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Va).join(`
`),g.length>0&&(g+=`
`)):(_=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),g=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?at.tonemapping_pars_fragment:"",t.toneMapping!==ei?Wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Gv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),a=pu(a),a=$p(a,t),a=Qp(a,t),o=pu(o),o=$p(o,t),o=Qp(o,t),a=em(a),o=em(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=p+_+a,b=p+g+o,y=Jp(s,s.VERTEX_SHADER,x),E=Jp(s,s.FRAGMENT_SHADER,b);s.attachShader(m,y),s.attachShader(m,E),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(w){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(m)||"",D=s.getShaderInfoLog(y)||"",L=s.getShaderInfoLog(E)||"",C=R.trim(),G=D.trim(),q=L.trim(),F=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,E);else{let k=Zp(s,y,"vertex"),z=Zp(s,E,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+C+`
`+k+`
`+z)}else C!==""?ke("WebGLProgram: Program Info Log:",C):(G===""||q==="")&&(j=!1);j&&(w.diagnostics={runnable:F,programLog:C,vertexShader:{log:G,prefix:_},fragmentShader:{log:q,prefix:g}})}s.deleteShader(y),s.deleteShader(E),v=new Rr(s,m),M=Kv(s,m)}let v;this.getUniforms=function(){return v===void 0&&S(this),v};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,Bv)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=E,this}var ay=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gu(e),t.set(e,n)),n}},gu=class{constructor(e){this.id=ay++,this.code=e,this.usedTimes=0}};function oy(i){return i===Yi||i===ka||i===za}function cy(i,e,t,n,s,r){let a=new sa,o=new mu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,I,w,R,D){let L=w.fog,C=R.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||G,q),j=d[v.type],k=n.precision;v.precision!==null&&(k=n.getMaxPrecision(v.precision),k!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",k,"instead."));let z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,B=z!==void 0?z.length:0,Q=0;C.morphAttributes.position!==void 0&&(Q=1),C.morphAttributes.normal!==void 0&&(Q=2),C.morphAttributes.color!==void 0&&(Q=3);let le,U,X,te;if(j){let Ce=ii[j];le=Ce.vertexShader,U=Ce.fragmentShader}else{le=v.vertexShader,U=v.fragmentShader;let Ce=o.getVertexShaderStage(v),yt=o.getFragmentShaderStage(v);o.update(v,Ce,yt),X=Ce.id,te=yt.id}let ue=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),_e=R.isInstancedMesh===!0,et=R.isBatchedMesh===!0,ge=!!v.map,Ue=!!v.matcap,Le=!!F,Z=Le&&F.isPMREMTexture===!0,ne=!!v.aoMap,he=!!v.lightMap,me=!!v.bumpMap&&v.wireframe===!1,de=!!v.normalMap,He=!!v.displacementMap,O=!!v.emissiveMap,re=!!v.metalnessMap,Ee=!!v.roughnessMap,Oe=v.anisotropy>0,V=v.clearcoat>0,ut=v.diffuseRoughness>0,ot=v.dispersion>0,vt=v.retroreflectivity>0,we=v.iridescence>0,Bt=v.sheen>0,qe=v.transmission>0,Ke=Oe&&!!v.anisotropyMap,P=V&&!!v.clearcoatMap,T=V&&!!v.clearcoatNormalMap,J=V&&!!v.clearcoatRoughnessMap,pe=ut&&!!v.diffuseRoughnessMap,ce=we&&!!v.iridescenceMap,ve=we&&!!v.iridescenceThicknessMap,Ae=Bt&&!!v.sheenColorMap,ie=Bt&&!!v.sheenRoughnessMap,se=!!v.specularMap,Me=!!v.specularColorMap,H=!!v.specularIntensityMap,ae=qe&&!!v.transmissionMap,ee=qe&&!!v.thicknessMap,Se=!!v.gradientMap,xe=!!v.alphaMap,ye=v.alphaTest>0,Ge=!!v.alphaHash,st=!!v.extensions,be=ei;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(be=i.toneMapping);let Ve=Z?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,nt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:U,defines:v.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:k,batching:et,batchingColor:et&&R._colorsTexture!==null,instancing:_e,instancingColor:_e&&R.instanceColor!==null,instancingMorph:_e&&R.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:Ue,envMap:Le,envMapMode:Le&&F.mapping,envMapPMREM:Z,envMapMaxLod:Z?Ve.length-1:null,envMapSize:Z?Ve[0].width:null,aoMap:ne,lightMap:he,bumpMap:me,normalMap:de,displacementMap:He,emissiveMap:O,normalMapObjectSpace:de&&v.normalMapType===vp,normalMapTangentSpace:de&&v.normalMapType===Qc,packedNormalMap:de&&v.normalMapType===Qc&&oy(v.normalMap.format),metalnessMap:re,roughnessMap:Ee,anisotropy:Oe,anisotropyMap:Ke,clearcoat:V,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:J,diffuseRoughness:ut,diffuseRoughnessMap:pe,dispersion:ot,retroreflection:vt,iridescence:we,iridescenceMap:ce,iridescenceThicknessMap:ve,sheen:Bt,sheenColorMap:Ae,sheenRoughnessMap:ie,specularMap:se,specularColorMap:Me,specularIntensityMap:H,transmission:qe,transmissionMap:ae,thicknessMap:ee,gradientMap:Se,opaque:v.transparent===!1&&v.blending===Mr&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:ye,alphaHash:Ge,combine:v.combine,mapUv:ge&&f(v.map.channel),aoMapUv:ne&&f(v.aoMap.channel),lightMapUv:he&&f(v.lightMap.channel),bumpMapUv:me&&f(v.bumpMap.channel),normalMapUv:de&&f(v.normalMap.channel),displacementMapUv:He&&f(v.displacementMap.channel),emissiveMapUv:O&&f(v.emissiveMap.channel),metalnessMapUv:re&&f(v.metalnessMap.channel),roughnessMapUv:Ee&&f(v.roughnessMap.channel),anisotropyMapUv:Ke&&f(v.anisotropyMap.channel),clearcoatMapUv:P&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(v.sheenRoughnessMap.channel),specularMapUv:se&&f(v.specularMap.channel),specularColorMapUv:Me&&f(v.specularColorMap.channel),specularIntensityMapUv:H&&f(v.specularIntensityMap.channel),transmissionMapUv:ae&&f(v.transmissionMap.channel),thicknessMapUv:ee&&f(v.thicknessMap.channel),alphaMapUv:xe&&f(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(de||Oe),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(ge||xe),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&de===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:oe,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Q,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:O&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:st&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&v.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function _(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)M.push(I),M.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(M,v),p(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function g(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function p(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function x(v){let M=d[v.type],I;if(M){let w=ii[M];I=Up.clone(w.uniforms)}else I=v.uniforms;return I}function b(v,M){let I=h.get(M);return I!==void 0?++I.usedTimes:(I=new ry(i,M,v,s),l.push(I),h.set(M,I)),I}function y(v){if(--v.usedTimes===0){let M=l.indexOf(v);l[M]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function S(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:S}}function ly(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function im(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,g,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function c(d,f,m,_,g,p,x){x.reversedDepth===!0&&(g=-g);let b=o(d,f,m,_,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function l(d,f,m,_,g,p){let x=o(d,f,m,_,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||hy),n.length>1&&n.sort(f||nm),s.length>1&&s.sort(f||nm)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function uy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new im,i.set(n,[a])):s>=r.length?(a=new im,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var py=0;function my(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gy(i){let e=new dy,t=fy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new We,a=new We;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,x=0,b=0,y=0,E=0,S=0,v=0,M=0,I=0,w=0;l.sort(my);for(let D=0,L=l.length;D<L;D++){let C=l[D],G=C.color,q=C.intensity,F=C.distance,j=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Yi?j=C.shadow.map.texture:j=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=G.r*q,u+=G.g*q,d+=G.b*q;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],q);w++}else if(C.isSunLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,B=t.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=B,n.sunShadowMap[m]=j;let Q=z.getViewportCount();for(let le=0;le<Q;le++)n.sunShadowMatrix[_+le]=z.getMatrix(le),n.sunShadowCascade[_+le]=z._cascadeData[le];_+=Q,m++}n.sun[f]=k,f++}else if(C.isDirectionalLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,B=t.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=C.shadow.matrix,E++}n.directional[g]=k,g++}else if(C.isSpotLight){let k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(G).multiplyScalar(q),k.distance=F,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[x]=k;let z=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,z.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[x]=z.matrix,C.castShadow){let B=t.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=j,v++}x++}else if(C.isRectAreaLight){let k=e.get(C);k.color.copy(G).multiplyScalar(q),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[b]=k,b++}else if(C.isPointLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let z=C.shadow,B=t.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=k,p++}else if(C.isHemisphereLight){let k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(q),k.groundColor.copy(C.groundColor).multiplyScalar(q),n.hemi[y]=k,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==g||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==b||R.hemiLength!==y||R.numSunShadows!==m||R.numDirectionalShadows!==E||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==M||R.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=b,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+M-I,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=w,R.sunLength=f,R.directionalLength=g,R.pointLength=p,R.spotLength=x,R.rectAreaLength=b,R.hemiLength=y,R.numSunShadows=m,R.numDirectionalShadows=E,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=M,R.numLightProbes=w,n.version=py++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){let y=l[x];if(y.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function sm(i){let e=new gy(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function by(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sm(i),e.set(s,[o])):r>=a.length?(o=new sm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`,vy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],yy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],rm=new We,Ga=new N,hu=new N;function My(i,e,t){let n=new Ki,s=new fe,r=new fe,a=new Mt,o=new ic,c=new sc,l={},h=t.maxTextureSize,u={[Qn]:fn,[fn]:Qn,[Ut]:Ut},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:xy,fragmentShader:_y}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ye(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(S,v,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Yf&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let I=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ss),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=p!==this.type;L&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=S.length;C<G;C++){let q=S[C],F=q.shadow;if(F===void 0){ke("WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let j=F.getFrameExtents();s.multiply(j),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,F.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=k,F.map===null||L===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===yr){if(q.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Sn(s.x,s.y,{format:Yi,type:pn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),F.map.texture.name=q.name+".shadowMap",F.map.depthTexture=new yi(s.x,s.y,on),F.map.depthTexture.name=q.name+".shadowMapDepth",F.map.depthTexture.format=xi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt}else q.isPointLight?(F.map=new Wa(s.x),F.map.depthTexture=new pa(s.x,Hn)):(F.map=new Sn(s.x,s.y),F.map.depthTexture=new yi(s.x,s.y,Hn)),F.map.depthTexture.name=q.name+".shadowMap",F.map.depthTexture.format=xi,this.type===Ms?(F.map.depthTexture.compareFunction=k?qh:Wh,F.map.depthTexture.minFilter=wt,F.map.depthTexture.magFilter=wt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=zt,F.map.depthTexture.magFilter=zt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let z=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();q.isPointLight!==!0&&F.updateMatrices(q,M);let B=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:M.layers;for(let Q=0;Q<z;Q++){let le=F.getCamera(Q);if(q.isPointLight){let U=F.camera,X=F.matrix,te=q.distance||U.far;te!==U.far&&(U.far=te,U.updateProjectionMatrix()),Ga.setFromMatrixPosition(q.matrixWorld),U.position.copy(Ga),hu.copy(U.position),hu.add(vy[Q]),U.up.copy(yy[Q]),U.lookAt(hu),U.updateMatrixWorld(),X.makeTranslation(-Ga.x,-Ga.y,-Ga.z),rm.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),F._frustum.setFromProjectionMatrix(rm,U.coordinateSystem,U.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(F.map),i.clear());let U=F.getViewport(Q);a.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),D.viewport(a)}n=F.getFrustum(Q),y(v,M,le,q,B,this.type)}F.isPointLightShadow!==!0&&this.type===yr&&x(F,M),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(I,w,R)};function x(S,v){let M=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(s.x,s.y,{format:Yi,type:pn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(v,null,M,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(v,null,M,f,_,null)}function b(S,v,M,I){let w=null,R=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=M.isPointLight===!0?c:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let D=w.uuid,L=v.uuid,C=l[D];C===void 0&&(C={},l[D]=C);let G=C[L];G===void 0&&(G=w.clone(),C[L]=G,v.addEventListener("dispose",E)),w=G}if(w.visible=v.visible,w.wireframe=v.wireframe,I===yr?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:u[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let D=i.properties.get(w);D.light=M}return w}function y(S,v,M,I,w,R){if(S.visible===!1)return;if(S.layers.test(w)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===yr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let C=e.update(S),G=S.material;if(Array.isArray(G)){let q=C.groups;for(let F=0,j=q.length;F<j;F++){let k=q[F],z=G[k.materialIndex];if(z&&z.visible){let B=b(S,z,I,R);S.onBeforeShadow(i,S,v,M,C,B,k),i.renderBufferDirect(M,null,C,B,S,k),S.onAfterShadow(i,S,v,M,C,B,k)}}}else if(G.visible){let q=b(S,G,I,R);S.onBeforeShadow(i,S,v,M,C,q,null),i.renderBufferDirect(M,null,C,q,S,null),S.onAfterShadow(i,S,v,M,C,q,null)}}let L=S.children;for(let C=0,G=L.length;C<G;C++)y(L[C],v,M,I,w,R)}function E(S){S.target.removeEventListener("dispose",E);for(let M in l){let I=l[M],w=S.target.uuid;w in I&&(I[w].dispose(),delete I[w])}}}function Sy(i,e){function t(){let H=!1,ae=new Mt,ee=null,Se=new Mt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!H&&(i.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){H=xe},setClear:function(xe,ye,Ge,st,be){be===!0&&(xe*=st,ye*=st,Ge*=st),ae.set(xe,ye,Ge,st),Se.equals(ae)===!1&&(i.clearColor(xe,ye,Ge,st),Se.copy(ae))},reset:function(){H=!1,ee=null,Se.set(-1,0,0,0)}}}function n(){let H=!1,ae=!1,ee=null,Se=null,xe=null;return{setReversed:function(ye){if(ae!==ye){let Ge=e.get("EXT_clip_control");ye?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ae=ye;let st=xe;xe=null,this.setClear(st)}},getReversed:function(){return ae},setTest:function(ye){ye?oe(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(ye){ee!==ye&&!H&&(i.depthMask(ye),ee=ye)},setFunc:function(ye){if(ae&&(ye=Pp[ye]),Se!==ye){switch(ye){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case ko:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=ye}},setLocked:function(ye){H=ye},setClear:function(ye){xe!==ye&&(xe=ye,ae&&(ye=1-ye),i.clearDepth(ye))},reset:function(){H=!1,ee=null,Se=null,xe=null,ae=!1}}}function s(){let H=!1,ae=null,ee=null,Se=null,xe=null,ye=null,Ge=null,st=null,be=null;return{setTest:function(Ve){H||(Ve?oe(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Ve){ae!==Ve&&!H&&(i.stencilMask(Ve),ae=Ve)},setFunc:function(Ve,nt,Ce){(ee!==Ve||Se!==nt||xe!==Ce)&&(i.stencilFunc(Ve,nt,Ce),ee=Ve,Se=nt,xe=Ce)},setOp:function(Ve,nt,Ce){(ye!==Ve||Ge!==nt||st!==Ce)&&(i.stencilOp(Ve,nt,Ce),ye=Ve,Ge=nt,st=Ce)},setLocked:function(Ve){H=Ve},setClear:function(Ve){be!==Ve&&(i.clearStencil(Ve),be=Ve)},reset:function(){H=!1,ae=null,ee=null,Se=null,xe=null,ye=null,Ge=null,st=null,be=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,x=null,b=null,y=null,E=null,S=null,v=null,M=new ze(0,0,0),I=0,w=!1,R=null,D=null,L=null,C=null,G=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=j>=2);let z=null,B={},Q=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),U=new Mt().fromArray(Q),X=new Mt().fromArray(le);function te(H,ae,ee,Se){let xe=new Uint8Array(4),ye=i.createTexture();i.bindTexture(H,ye),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ee;Ge++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ae+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ye}let ue={};ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(ir),me(!1),de(Sh),oe(i.CULL_FACE),ne(Ss);function oe(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function _e(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function et(H,ae){return d[H]!==ae?(i.bindFramebuffer(H,ae),d[H]=ae,H===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),H===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function ge(H,ae){let ee=m,Se=!1;if(H){ee=f.get(ae),ee===void 0&&(ee=[],f.set(ae,ee));let xe=H.textures;if(ee.length!==xe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ge=xe.length;ye<Ge;ye++)ee[ye]=i.COLOR_ATTACHMENT0+ye;ee.length=xe.length,Se=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ee)}function Ue(H){return _!==H?(i.useProgram(H),_=H,!0):!1}let Le={[Es]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};Le[ep]=i.MIN,Le[tp]=i.MAX;let Z={[np]:i.ZERO,[ip]:i.ONE,[sp]:i.SRC_COLOR,[Ah]:i.SRC_ALPHA,[hp]:i.SRC_ALPHA_SATURATE,[cp]:i.DST_COLOR,[ap]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[lp]:i.ONE_MINUS_DST_COLOR,[op]:i.ONE_MINUS_DST_ALPHA,[up]:i.CONSTANT_COLOR,[dp]:i.ONE_MINUS_CONSTANT_COLOR,[fp]:i.CONSTANT_ALPHA,[pp]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(H,ae,ee,Se,xe,ye,Ge,st,be,Ve){if(H===Ss){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(oe(i.BLEND),g=!0),H!==Zf){if(H!==p||Ve!==w){if((x!==Es||E!==Es)&&(i.blendEquation(i.FUNC_ADD),x=Es,E=Es),Ve)switch(H){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",H);break}else switch(H){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",H);break}b=null,y=null,S=null,v=null,M.set(0,0,0),I=0,p=H,w=Ve}return}xe=xe||ae,ye=ye||ee,Ge=Ge||Se,(ae!==x||xe!==E)&&(i.blendEquationSeparate(Le[ae],Le[xe]),x=ae,E=xe),(ee!==b||Se!==y||ye!==S||Ge!==v)&&(i.blendFuncSeparate(Z[ee],Z[Se],Z[ye],Z[Ge]),b=ee,y=Se,S=ye,v=Ge),(st.equals(M)===!1||be!==I)&&(i.blendColor(st.r,st.g,st.b,be),M.copy(st),I=be),p=H,w=!1}function he(H,ae){H.side===Ut?_e(i.CULL_FACE):oe(i.CULL_FACE);let ee=H.side===fn;ae&&(ee=!ee),me(ee),H.blending===Mr&&H.transparent===!1?ne(Ss):ne(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Se=H.stencilWrite;o.setTest(Se),Se&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),O(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(H){R!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),R=H)}function de(H){H!==Kf?(oe(i.CULL_FACE),H!==D&&(H===Sh?i.cullFace(i.BACK):H===Jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=H}function He(H){H!==L&&(F&&i.lineWidth(H),L=H)}function O(H,ae,ee){H?(oe(i.POLYGON_OFFSET_FILL),(C!==ae||G!==ee)&&(C=ae,G=ee,a.getReversed()&&(ae=-ae,ee=-ee),i.polygonOffset(ae,ee))):_e(i.POLYGON_OFFSET_FILL)}function re(H){H?oe(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Ee(H){H===void 0&&(H=i.TEXTURE0+q-1),z!==H&&(i.activeTexture(H),z=H)}function Oe(H,ae,ee){ee===void 0&&(z===null?ee=i.TEXTURE0+q-1:ee=z);let Se=B[ee];Se===void 0&&(Se={type:void 0,texture:void 0},B[ee]=Se),(Se.type!==H||Se.texture!==ae)&&(z!==ee&&(i.activeTexture(ee),z=ee),i.bindTexture(H,ae||ue[H]),Se.type=H,Se.texture=ae)}function V(){let H=B[z];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function vt(){try{i.texSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function we(){try{i.texSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function Bt(){try{i.compressedTexSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function Ke(){try{i.texStorage2D(...arguments)}catch(H){je("WebGLState:",H)}}function P(){try{i.texStorage3D(...arguments)}catch(H){je("WebGLState:",H)}}function T(){try{i.texImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function J(){try{i.texImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function pe(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function ce(H,ae){u[H]!==ae&&(i.pixelStorei(H,ae),u[H]=ae)}function ve(H){U.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),U.copy(H))}function Ae(H){X.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),X.copy(H))}function ie(H,ae){let ee=l.get(ae);ee===void 0&&(ee=new WeakMap,l.set(ae,ee));let Se=ee.get(H);Se===void 0&&(Se=i.getUniformBlockIndex(ae,H.name),i.uniformBlockBinding(ae,Se,Se),ee.set(H,Se))}function se(H,ae,ee){let xe=l.get(ae).get(H);c[xe]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,xe,ee),c[xe]=ee)}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},z=null,B={},d={},c={},f=new WeakMap,m=[],_=null,g=!1,p=null,x=null,b=null,y=null,E=null,S=null,v=null,M=new ze(0,0,0),I=0,w=!1,R=null,D=null,L=null,C=null,G=null,U.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:_e,bindFramebuffer:et,drawBuffers:ge,useProgram:Ue,setBlending:ne,setMaterial:he,setFlipSided:me,setCullFace:de,setLineWidth:He,setPolygonOffset:O,setScissorTest:re,activeTexture:Ee,bindTexture:Oe,unbindTexture:V,compressedTexImage2D:ut,compressedTexImage3D:ot,texImage2D:T,texImage3D:J,pixelStorei:ce,getParameter:pe,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:Ke,texStorage3D:P,texSubImage2D:vt,texSubImage3D:we,compressedTexSubImage2D:Bt,compressedTexSubImage3D:qe,scissor:ve,viewport:Ae,reset:Me}}function Ey(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,_=new FinalizationRegistry(P=>m.delete(P)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,T){return g?new OffscreenCanvas(P,T):ar("canvas")}function x(P,T,J){let pe=1,ce=Ke(P);if((ce.width>J||ce.height>J)&&(pe=J/Math.max(ce.width,ce.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ve=Math.floor(pe*ce.width),Ae=Math.floor(pe*ce.height);d===void 0&&(d=p(ve,Ae));let ie=T?p(ve,Ae):d;return ie.width=ve,ie.height=Ae,ie.getContext("2d").drawImage(P,0,0,ve,Ae),ke("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ve+"x"+Ae+")."),ie}else return"data"in P&&ke("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function b(P){return P.generateMipmaps}function y(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(P,T,J,pe,ce,ve=!1){if(P!==null){if(i[P]!==void 0)return i[P];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ae;pe&&(Ae=e.get("EXT_texture_norm16"),Ae||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=T;if(T===i.RED&&(J===i.FLOAT&&(ie=i.R32F),J===i.HALF_FLOAT&&(ie=i.R16F),J===i.UNSIGNED_BYTE&&(ie=i.R8),J===i.UNSIGNED_SHORT&&Ae&&(ie=Ae.R16_EXT),J===i.SHORT&&Ae&&(ie=Ae.R16_SNORM_EXT)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.R8UI),J===i.UNSIGNED_SHORT&&(ie=i.R16UI),J===i.UNSIGNED_INT&&(ie=i.R32UI),J===i.BYTE&&(ie=i.R8I),J===i.SHORT&&(ie=i.R16I),J===i.INT&&(ie=i.R32I)),T===i.RG&&(J===i.FLOAT&&(ie=i.RG32F),J===i.HALF_FLOAT&&(ie=i.RG16F),J===i.UNSIGNED_BYTE&&(ie=i.RG8),J===i.UNSIGNED_SHORT&&Ae&&(ie=Ae.RG16_EXT),J===i.SHORT&&Ae&&(ie=Ae.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RG8UI),J===i.UNSIGNED_SHORT&&(ie=i.RG16UI),J===i.UNSIGNED_INT&&(ie=i.RG32UI),J===i.BYTE&&(ie=i.RG8I),J===i.SHORT&&(ie=i.RG16I),J===i.INT&&(ie=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),J===i.UNSIGNED_INT&&(ie=i.RGB32UI),J===i.BYTE&&(ie=i.RGB8I),J===i.SHORT&&(ie=i.RGB16I),J===i.INT&&(ie=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),J===i.UNSIGNED_INT&&(ie=i.RGBA32UI),J===i.BYTE&&(ie=i.RGBA8I),J===i.SHORT&&(ie=i.RGBA16I),J===i.INT&&(ie=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_SHORT&&Ae&&(ie=Ae.RGB16_EXT),J===i.SHORT&&Ae&&(ie=Ae.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),T===i.RGBA){let se=ve?ta:lt.getTransfer(ce);J===i.FLOAT&&(ie=i.RGBA32F),J===i.HALF_FLOAT&&(ie=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ie=se===_t?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Ae&&(ie=Ae.RGBA16_EXT),J===i.SHORT&&Ae&&(ie=Ae.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(P,T){let J;return P?T===null||T===Hn||T===As?J=i.DEPTH24_STENCIL8:T===on?J=i.DEPTH32F_STENCIL8:T===wr&&(J=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hn||T===As?J=i.DEPTH_COMPONENT24:T===on?J=i.DEPTH_COMPONENT32F:T===wr&&(J=i.DEPTH_COMPONENT16),J}function M(P,T){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==zt&&P.minFilter!==wt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){let T=new WeakRef(P);n.get(P).__ref=T,m.add(T),_.register(P,T,T)}function w(P){let T=n.get(P).__ref;T!==void 0&&(m.delete(T),_.unregister(T))}function R(P){L(P.target)}function D(P){C(P.target)}function L(P){P.removeEventListener("dispose",R),w(P),q(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function C(P){P.removeEventListener("dispose",D),w(P),j(P)}function G(){for(let P of m){let T=P.deref();T!==void 0&&(T.isRenderTarget===!0?C(T):L(T))}m.clear(),u.clear()}function q(P){let T=n.get(P);if(T.__webglInit===void 0)return;let J=P.source,pe=f.get(J);if(pe){let ce=pe[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&F(P),Object.keys(pe).length===0&&f.delete(J)}n.remove(P)}function F(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let J=P.source,pe=f.get(J);delete pe[T.__cacheKey],a.memory.textures--}function j(P){let T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();let J=P.depthTexture;if(J&&J.renderTarget===P&&L(J),P.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(T.__webglFramebuffer[ce]))for(let ve=0;ve<T.__webglFramebuffer[ce].length;ve++)i.deleteFramebuffer(T.__webglFramebuffer[ce][ve]);else i.deleteFramebuffer(T.__webglFramebuffer[ce]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ce])}else{if(Array.isArray(T.__webglFramebuffer))for(let ce=0;ce<T.__webglFramebuffer.length;ce++)i.deleteFramebuffer(T.__webglFramebuffer[ce]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ce=0;ce<T.__webglColorRenderbuffer.length;ce++)T.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ce]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let pe=P.textures;for(let ce=0,ve=pe.length;ce<ve;ce++){let Ae=n.get(pe[ce]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(pe[ce])}n.remove(P)}let k=0;function z(){k=0}function B(){return k}function Q(P){k=P}function le(){let P=k;return P>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function U(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function X(P,T){let J=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){let pe=P.image;if(pe===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{he(J,P,T);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function te(P,T){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){he(J,P,T);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function ue(P,T){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){he(J,P,T);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function oe(P,T){let J=n.get(P);if(P.version>0&&J.__version!==P.version){me(J,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}let _e={[Kn]:i.REPEAT,[mn]:i.CLAMP_TO_EDGE,[sr]:i.MIRRORED_REPEAT},et={[zt]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},ge={[Mp]:i.NEVER,[Xh]:i.ALWAYS,[Sp]:i.LESS,[Wh]:i.LEQUAL,[Ep]:i.EQUAL,[qh]:i.GEQUAL,[Tp]:i.GREATER,[wp]:i.NOTEQUAL};function Ue(P,T){if(T.type===on&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===wt||T.magFilter===Tr||T.magFilter===ws||T.magFilter===Tn||T.minFilter===wt||T.minFilter===Tr||T.minFilter===ws||T.minFilter===Tn)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,_e[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,_e[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,_e[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,et[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,et[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zt||T.minFilter!==ws&&T.minFilter!==Tn||T.type===on&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Le(P,T){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",R),I(T));let pe=T.source,ce=f.get(pe);ce===void 0&&(ce={},f.set(pe,ce));let ve=U(T);if(ve!==P.__cacheKey){ce[ve]===void 0&&(ce[ve]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ce[ve].usedTimes++;let Ae=ce[P.__cacheKey];Ae!==void 0&&(ce[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&F(T)),P.__cacheKey=ve,P.__webglTexture=ce[ve].texture}return J}function Z(P,T,J){return Math.floor(Math.floor(P/J)/T)}function ne(P,T,J,pe){let ve=P.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,pe,T.data);else{ve.sort((H,ae)=>H.start-ae.start);let Ae=0;for(let H=1;H<ve.length;H++){let ae=ve[Ae],ee=ve[H],Se=ae.start+ae.count,xe=Z(ee.start,T.width,4),ye=Z(ae.start,T.width,4);ee.start<=Se+1&&xe===ye&&Z(ee.start+ee.count-1,T.width,4)===xe?ae.count=Math.max(ae.count,ee.start+ee.count-ae.start):(++Ae,ve[Ae]=ee)}ve.length=Ae+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let H=0,ae=ve.length;H<ae;H++){let ee=ve[H],Se=Math.floor(ee.start/4),xe=Math.ceil(ee.count/4),ye=Se%T.width,Ge=Math.floor(Se/T.width),st=xe,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,ye,Ge,st,be,J,pe,T.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function he(P,T,J){let pe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=i.TEXTURE_3D);let ce=Le(P,T),ve=T.source;t.bindTexture(pe,P.__webglTexture,i.TEXTURE0+J);let Ae=n.get(ve);if(ve.version!==Ae.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let be=lt.getPrimaries(lt.workingColorSpace),Ve=T.colorSpace===Gn?null:lt.getPrimaries(T.colorSpace),nt=T.colorSpace===Gn||be===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let se=x(T.image,!1,s.maxTextureSize);se=qe(T,se);let Me=r.convert(T.format,T.colorSpace),H=r.convert(T.type),ae=S(T.internalFormat,Me,H,T.normalized,T.colorSpace,T.isVideoTexture);Ue(pe,T);let ee,Se=T.mipmaps,xe=T.isVideoTexture!==!0,ye=Ae.__version===void 0||ce===!0,Ge=ve.dataReady,st=M(T,se);if(T.isDepthTexture)ae=v(T.format===Ci,T.type),ye&&(xe?t.texStorage2D(i.TEXTURE_2D,1,ae,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ae,se.width,se.height,0,Me,H,null));else if(T.isDataTexture)if(Se.length>0){xe&&ye&&t.texStorage2D(i.TEXTURE_2D,st,ae,Se[0].width,Se[0].height);for(let be=0,Ve=Se.length;be<Ve;be++)ee=Se[be],xe?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ee.width,ee.height,Me,H,ee.data):t.texImage2D(i.TEXTURE_2D,be,ae,ee.width,ee.height,0,Me,H,ee.data);T.generateMipmaps=!1}else xe?(ye&&t.texStorage2D(i.TEXTURE_2D,st,ae,se.width,se.height),Ge&&ne(T,se,Me,H)):t.texImage2D(i.TEXTURE_2D,0,ae,se.width,se.height,0,Me,H,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,ae,Se[0].width,Se[0].height,se.depth);for(let be=0,Ve=Se.length;be<Ve;be++)if(ee=Se[be],T.format!==Cn)if(Me!==null)if(xe){if(Ge)if(T.layerUpdates.size>0){let nt=iu(ee.width,ee.height,T.format,T.type);for(let Ce of T.layerUpdates){let yt=ee.data.subarray(Ce*nt/ee.data.BYTES_PER_ELEMENT,(Ce+1)*nt/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,Ce,ee.width,ee.height,1,Me,yt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,se.depth,Me,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,ae,ee.width,ee.height,se.depth,0,ee.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ee.width,ee.height,se.depth,Me,H,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,ae,ee.width,ee.height,se.depth,0,Me,H,ee.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xe&&ye&&t.texStorage2D(i.TEXTURE_2D,st,ae,Se[0].width,Se[0].height);for(let be=0,Ve=Se.length;be<Ve;be++)ee=Se[be],T.format!==Cn?Me!==null?xe?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,ee.width,ee.height,Me,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,be,ae,ee.width,ee.height,0,ee.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ee.width,ee.height,Me,H,ee.data):t.texImage2D(i.TEXTURE_2D,be,ae,ee.width,ee.height,0,Me,H,ee.data)}else if(T.isDataArrayTexture)if(xe){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,st,ae,se.width,se.height,se.depth),Ge)if(T.layerUpdates.size>0){let be=iu(se.width,se.height,T.format,T.type);for(let Ve of T.layerUpdates){let nt=se.data.subarray(Ve*be/se.data.BYTES_PER_ELEMENT,(Ve+1)*be/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,se.width,se.height,1,Me,H,nt)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,H,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,se.width,se.height,se.depth,0,Me,H,se.data);else if(T.isData3DTexture)xe?(ye&&t.texStorage3D(i.TEXTURE_3D,st,ae,se.width,se.height,se.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,H,se.data)):t.texImage3D(i.TEXTURE_3D,0,ae,se.width,se.height,se.depth,0,Me,H,se.data);else if(T.isFramebufferTexture){if(ye)if(xe)t.texStorage2D(i.TEXTURE_2D,st,ae,se.width,se.height);else{let be=se.width,Ve=se.height;for(let nt=0;nt<st;nt++)t.texImage2D(i.TEXTURE_2D,nt,ae,be,Ve,0,Me,H,null),be>>=1,Ve>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),se.parentNode!==be){be.appendChild(se),u.add(T),be.onpaint=Ve=>{let nt=Ve.changedElements;for(let Ce of u)nt.includes(Ce.image)&&(Ce.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let nt=i.RGBA,Ce=i.RGBA,yt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Ce,yt,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(xe&&ye){let be=Ke(Se[0]);t.texStorage2D(i.TEXTURE_2D,st,ae,be.width,be.height)}for(let be=0,Ve=Se.length;be<Ve;be++)ee=Se[be],xe?Ge&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Me,H,ee):t.texImage2D(i.TEXTURE_2D,be,ae,Me,H,ee);T.generateMipmaps=!1}else if(xe){if(ye){let be=Ke(se);t.texStorage2D(i.TEXTURE_2D,st,ae,be.width,be.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,H,se)}else t.texImage2D(i.TEXTURE_2D,0,ae,Me,H,se);b(T)&&T.mipmapsAutoUpdate===!0&&y(pe),Ae.__version=ve.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function me(P,T,J){if(T.image.length!==6)return;let pe=Le(P,T),ce=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+J);let ve=n.get(ce);if(ce.version!==ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+J);let Ae=lt.getPrimaries(lt.workingColorSpace),ie=T.colorSpace===Gn?null:lt.getPrimaries(T.colorSpace),se=T.colorSpace===Gn||Ae===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Me=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let Ce=0;Ce<6;Ce++)!Me&&!H?ae[Ce]=x(T.image[Ce],!0,s.maxCubemapSize):ae[Ce]=H?T.image[Ce].image:T.image[Ce],ae[Ce]=qe(T,ae[Ce]);let ee=ae[0],Se=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),ye=S(T.internalFormat,Se,xe,T.normalized,T.colorSpace),Ge=T.isVideoTexture!==!0,st=ve.__version===void 0||pe===!0,be=ce.dataReady,Ve=M(T,ee);Ue(i.TEXTURE_CUBE_MAP,T);let nt;if(T.isDepthTexture){if(ye=v(T.format===Ci,T.type),st)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,ee.width,ee.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,ee.width,ee.height,0,Se,xe,null)}else if(Me){Ge&&st&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ye,ee.width,ee.height);for(let Ce=0;Ce<6;Ce++){nt=ae[Ce].mipmaps;for(let yt=0;yt<nt.length;yt++){let Yt=nt[yt];T.format!==Cn?Se!==null?Ge?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt,0,0,Yt.width,Yt.height,Se,Yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt,ye,Yt.width,Yt.height,0,Yt.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt,0,0,Yt.width,Yt.height,Se,xe,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt,ye,Yt.width,Yt.height,0,Se,xe,Yt.data)}}}else{if(nt=T.mipmaps,Ge&&st){nt.length>0&&Ve++;let Ce=Ke(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ye,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(H){Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ae[Ce].width,ae[Ce].height,Se,xe,ae[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,ae[Ce].width,ae[Ce].height,0,Se,xe,ae[Ce].data);for(let yt=0;yt<nt.length;yt++){let Li=nt[yt].image[Ce].image;Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt+1,0,0,Li.width,Li.height,Se,xe,Li.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt+1,ye,Li.width,Li.height,0,Se,xe,Li.data)}}else{Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Se,xe,ae[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,Se,xe,ae[Ce]);for(let yt=0;yt<nt.length;yt++){let Yt=nt[yt];Ge?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt+1,0,0,Se,xe,Yt.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,yt+1,ye,Se,xe,Yt.image[Ce])}}}b(T)&&T.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ve.__version=ce.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function de(P,T,J,pe,ce,ve){let Ae=r.convert(J.format,J.colorSpace),ie=r.convert(J.type),se=S(J.internalFormat,Ae,ie,J.normalized,J.colorSpace),Me=n.get(T),H=n.get(J);if(H.__renderTarget=T,!Me.__hasExternalTextures){let ae=Math.max(1,T.width>>ve),ee=Math.max(1,T.height>>ve);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ve,se,ae,ee,T.depth,0,Ae,ie,null):t.texImage2D(ce,ve,se,ae,ee,0,Ae,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),we(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ce,H.__webglTexture,0,vt(T)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ce,H.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(P,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let pe=T.depthTexture,ce=pe&&pe.isDepthTexture?pe.type:null,ve=v(T.stencilBuffer,ce),Ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;we(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(T),ve,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(T),ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,P)}else{let pe=T.textures;for(let ce=0;ce<pe.length;ce++){let ve=pe[ce],Ae=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),se=S(ve.internalFormat,Ae,ie,ve.normalized,ve.colorSpace);we(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(T),se,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(T),se,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,se,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function O(P,T,J){let pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(T.depthTexture);ce.__renderTarget=T;let ve=pe?T.depthTexture.image[0]:T.depthTexture.image;(!ce.__webglTexture||ve.width!==T.width||ve.height!==T.height)&&(ve.width=T.width,ve.height=T.height,T.depthTexture.needsUpdate=!0),pe?oe(T.depthTexture,0):X(T.depthTexture,0);let Ae=ce.__webglTexture,ie=vt(T),se=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,Me=T.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===xi)we(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,se,Ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Me,se,Ae,0);else if(T.depthTexture.format===Ci)we(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,se,Ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,Me,se,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(P){let T=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let pe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){let ce=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ce)};pe.addEventListener("dispose",ce),T.__depthDisposeCallback=ce}T.__boundDepthTexture=pe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(J)for(let pe=0;pe<6;pe++)O(T.__webglFramebuffer[pe],P,pe);else P.texture.mipmaps.length>0?O(T.__webglFramebuffer[0],P,0):O(T.__webglFramebuffer,P,0);else if(J){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=i.createRenderbuffer(),He(T.__webglDepthbuffer[pe],P,!1);else{let ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ve)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),He(T.__webglDepthbuffer,P,!1);else{let ce=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ve)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(P,T,J){let pe=n.get(P);T!==void 0&&de(pe.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&re(P)}function Oe(P){let T=P.texture,J=n.get(P),pe=n.get(T);P.addEventListener("dispose",D),I(P);let ce=P.textures,ve=P.isWebGLCubeRenderTarget===!0,Ae=ce.length>1;if(Ae||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=T.version,a.memory.textures++),ve){J.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(T.mipmaps.length>0){J.__webglFramebuffer[ie]=[];for(let se=0;se<T.mipmaps.length;se++)J.__webglFramebuffer[ie][se]=i.createFramebuffer()}else J.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ie=0;ie<T.mipmaps.length;ie++)J.__webglFramebuffer[ie]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ie=0,se=ce.length;ie<se;ie++){let Me=n.get(ce[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&we(P)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ie=0;ie<ce.length;ie++){let se=ce[ie];J.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ie]);let Me=r.convert(se.format,se.colorSpace),H=r.convert(se.type),ae=S(se.internalFormat,Me,H,se.normalized,se.colorSpace,P.isXRRenderTarget===!0),ee=vt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,J.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),He(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,T);for(let ie=0;ie<6;ie++)if(T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)de(J.__webglFramebuffer[ie][se],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else de(J.__webglFramebuffer[ie],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);b(T)?y(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ae){for(let ie=0,se=ce.length;ie<se;ie++){let Me=ce[ie],H=n.get(Me),ae=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,H.__webglTexture),Ue(ae,Me),de(J.__webglFramebuffer,P,Me,i.COLOR_ATTACHMENT0+ie,ae,0),b(Me)&&y(ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ie=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,pe.__webglTexture),Ue(ie,T),T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)de(J.__webglFramebuffer[se],P,T,i.COLOR_ATTACHMENT0,ie,se);else de(J.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ie,0);b(T)?y(ie):T.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&re(P)}function V(P){let T=P.textures;for(let J=0,pe=T.length;J<pe;J++){let ce=T[J];if(b(ce)&&ce.mipmapsAutoUpdate===!0){let ve=E(P),Ae=n.get(ce).__webglTexture;t.bindTexture(ve,Ae),y(ve),t.unbindTexture()}}}let ut=[];function ot(P){if(P.samples>0){if(we(P)===!1){let T=P.textures,J=P.width,pe=P.height,ce=i.COLOR_BUFFER_BIT,ve=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(P),ie=T.length>1;if(ie)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let H=n.get(T[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,J,pe,0,0,J,pe,ce,i.NEAREST),c===!0&&(ut.length=0,ut.push(i.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&ut.push(ve),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);let H=n.get(T[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function vt(P){return Math.min(s.maxSamples,P.samples)}function we(P){let T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(P){let T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function qe(P,T){let J=P.colorSpace,pe=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==jt&&J!==Gn&&(lt.getTransfer(J)===_t?(pe!==Cn||ce!==vn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",J)),T}function Ke(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=z,this.getTextureUnits=B,this.setTextureUnits=Q,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=oe,this.rebindTextures=Ee,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=de,this.useMultisampledRTT=we,this.dispose=G}function Ty(i,e){function t(n,s=Gn){let r,a=lt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Cn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Fa||n===Ua||n===Oa||n===Ba)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Ec||n===Tc||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===ka||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ka)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Vc||n===Wc||n===qc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Kc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Zc||n===za||n===$c)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
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

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:wy,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new bu,p={},x=t.getContextAttributes(),b=null,y=null,E=[],S=[],v=new fe,M=null,I=null,w=new Xt;w.viewport=new Mt;let R=new Xt;R.viewport=new Mt;let D=[w,R],L=new dc,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let X=E[U];return X===void 0&&(X=new lr,E[U]=X),X.getTargetRaySpace()},this.getControllerGrip=function(U){let X=E[U];return X===void 0&&(X=new lr,E[U]=X),X.getGripSpace()},this.getHand=function(U){let X=E[U];return X===void 0&&(X=new lr,E[U]=X),X.getHandSpace()};function q(U){let X=S.indexOf(U.inputSource);if(X===-1)return;let te=E[X];te!==void 0&&(te.update(U.inputSource,U.frame,l||a),te.dispatchEvent({type:U.type,data:U.inputSource}))}function F(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",j);for(let U=0;U<E.length;U++){let X=S[U];X!==null&&(S[U]=null,E[U].disconnect(X))}C=null,G=null,g.reset();for(let U in p)delete p[U];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(v.width,v.height,!1),I!==null){let U=I.camera;U.fov=I.fov,U.zoom=I.zoom,U.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",F),s.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,ue=null,oe=null;x.depth&&(oe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?Ci:xi,ue=x.stencil?As:Hn);let _e={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:Cn,type:vn,depthTexture:new yi(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(U){for(let X=0;X<U.removed.length;X++){let te=U.removed[X],ue=S.indexOf(te);ue>=0&&(S[ue]=null,E[ue].disconnect(te))}for(let X=0;X<U.added.length;X++){let te=U.added[X],ue=S.indexOf(te);if(ue===-1){for(let _e=0;_e<E.length;_e++)if(_e>=S.length){S.push(te),ue=_e;break}else if(S[_e]===null){S[_e]=te,ue=_e;break}if(ue===-1)break}let oe=E[ue];oe&&oe.connect(te)}}function k(U,X){X===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(X.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let X=U.near,te=U.far;g.texture!==null&&(g.depthNear>0&&(X=g.depthNear),g.depthFar>0&&(te=g.depthFar)),L.near=R.near=w.near=X,L.far=R.far=w.far=te,(C!==L.near||G!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,G=L.far),L.layers.mask=U.layers.mask|6,w.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let ue=U.parent,oe=L.cameras;k(L,ue);for(let _e=0;_e<oe.length;_e++)k(oe[_e],ue);L.projectionMatrix.copy(w.projectionMatrix),L.projectionMatrixInverse.copy(w.projectionMatrixInverse),I===null&&U.isPerspectiveCamera&&(I={camera:U,fov:U.fov,zoom:U.zoom}),z(U,L,ue)};function z(U,X,te){te===null?U.matrix.copy(X.matrixWorld):(U.matrix.copy(te.matrixWorld),U.matrix.invert(),U.matrix.multiply(X.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(X.projectionMatrix),U.projectionMatrixInverse.copy(X.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=fs*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(U){c=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(U){return p[U]};let B=null;function Q(U,X){if(h=X.getViewerPose(l||a),m=X,h!==null){let te=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ue=!1;te.length!==L.cameras.length&&(L.cameras.length=0,ue=!0);for(let ge=0;ge<te.length;ge++){let Ue=te[ge],Le=null;if(f!==null)Le=f.getViewport(Ue);else{let ne=u.getViewSubImage(d,Ue);Le=ne.viewport,ge===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let Z=D[ge];Z===void 0&&(Z=new Xt,Z.layers.enable(ge),Z.viewport=new Mt,D[ge]=Z),Z.matrix.fromArray(Ue.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ue.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Le.x,Le.y,Le.width,Le.height),ge===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ue===!0&&L.cameras.push(Z)}let oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let ge=u.getDepthInformation(te[0]);ge&&ge.isValid&&ge.texture&&g.init(ge,s.renderState)}if(oe&&oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let ge=0;ge<te.length;ge++){let Ue=te[ge].camera;if(Ue){let Le=p[Ue];Le||(Le=new ma,p[Ue]=Le);let Z=u.getCameraImage(Ue);Le.sourceTexture=Z}}}}for(let te=0;te<E.length;te++){let ue=S[te],oe=E[te];ue!==null&&oe!==void 0&&oe.update(ue,X,l||a)}B&&B(U,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}let le=new am;le.setAnimationLoop(Q),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}},Ry=new We,gm=new Ze;gm.set(-1,0,0,0,1,0,0,0,1);function Cy(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,eu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,b,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),b=x.envMap,y=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Py(i,e,t,n){let s={},r={};function a(x,b){let y=b.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,b){let y=s[x.id];y===void 0&&(m(x),y=c(x),s[x.id]=y,x.addEventListener("dispose",g));let E=b.program;n.updateUBOMapping(x,E);let S=e.render.frame;r[x.id]!==S&&(l(x),r[x.id]=S)}function c(x){let b=i.createBuffer(),y=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(x){let b=s[x.id],y=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,v=y.length;S<v;S++){let M=y[S];if(Array.isArray(M))for(let I=0,w=M.length;I<w;I++)h(M[I],S,I,E);else h(M,S,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,b,y,E){if(d(x,b,y,E)===!0){let S=x.__offset,v=x.value;if(Array.isArray(v)){let M=0;for(let I=0;I<v.length;I++){let w=v[I],R=_(w,!0);u(w,x.__data,M),M+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function u(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function d(x,b,y,E){let S=x.value,v=b+"_"+y;if(Array.isArray(S)){E[v]===void 0&&(E[v]=[]);let M=E[v],I=!1;for(let w=0;w<S.length;w++)f(S[w],M,w)===!0&&(I=!0);return I}return f(S,E,v)}function f(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let E=b[y];if(typeof x=="number"||typeof x=="boolean"){if(E!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(E.equals(x)===!1)return E.copy(x),!0}}return!1}function m(x){let b=x.uniforms,y=0,E=16;for(let v=0,M=b.length;v<M;v++){let I=Array.isArray(b[v])?b[v]:[b[v]];for(let w=0,R=I.length;w<R;w++){let D=I[w],L=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(b[v])||Array.isArray(D.value),G=y;for(let F=0,j=L.length;F<j;F++){let k=L[F],z=_(k,C),B=y%E,Q=B%z.boundary,le=B+Q;y+=Q,le!==0&&E-le<z.storage&&(y+=E-le),F===0&&(G=y),y+=z.storage}let q=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new q((y-G)/Float32Array.BYTES_PER_ELEMENT),D.__offset=G}}let S=y%E;return S>0&&(y+=E-S),x.__size=y,x.__cache={},this}function _(x,b){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(x){let b=x.target;b.removeEventListener("dispose",g),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Ly(){return ni===null&&(ni=new Yn(Iy,16,16,Yi,pn),ni.name="DFG_LUT",ni.minFilter=wt,ni.magFilter=wt,ni.wrapS=mn,ni.wrapT=mn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var il=class{constructor(e={}){let{canvas:t=Ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,g=new Set([Mc,yc,vc]),p=new Set([vn,Hn,wr,As,bc,xc]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,S=null,v=[],M=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,R=!1,D=null,L=null,C=null,G=null;this._outputColorSpace=Tt;let q=0,F=0,j=null,k=-1,z=null,B=new Mt,Q=new Mt,le=null,U=new ze(0),X=0,te=t.width,ue=t.height,oe=1,_e=null,et=null,ge=new Mt(0,0,te,ue),Ue=new Mt(0,0,te,ue),Le=!1,Z=new Ki,ne=new jo,he=!1,me=!1,de=new We,He=new N,O=new Mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Oe(){return j===null?oe:1}let V=n;function ut(A,W){return t.getContext(A,W)}let ot,vt,we,Bt,qe,Ke,P,T,J,pe,ce,ve,Ae,ie,se,Me,H,ae,ee,Se,xe,ye,Ge;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),V===null){let W="webgl2";if(V=ut(W,A),V===null)throw ut(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}st()}catch(A){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),je("WebGLRenderer: "+A.message),A}function st(){ot=new V_(V),ot.init(),xe=new Ty(V,ot),vt=new L_(V,ot,e,xe),we=new Sy(V,ot),vt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),L=V.createFramebuffer(),C=V.createFramebuffer(),G=V.createFramebuffer(),Bt=new X_(V),qe=new ly,Ke=new Ey(V,ot,we,qe,vt,xe,Bt),P=new G_(w),T=new K0(V),ye=new P_(V,T),J=new W_(V,T,Bt,ye),pe=new K_(V,J,T,ye,Bt),ae=new j_(V,vt,Ke),se=new D_(qe),ce=new cy(w,P,ot,vt,ye,se),ve=new Cy(w,qe),Ae=new uy,ie=new by(ot),H=new C_(w,P,we,pe,m,c),Me=new My(w,pe,vt),Ge=new Py(V,Bt,vt,we),ee=new I_(V,ot,Bt),Se=new q_(V,ot,Bt),Bt.programs=ce.programs,w.capabilities=vt,w.extensions=ot,w.properties=qe,w.renderLists=Ae,w.shadowMap=Me,w.state=we,w.info=Bt}_!==vn&&(I=new Y_(_,t.width,t.height,o,s,r));let be=new xu(w,V);this.xr=be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(te,ue,!1))},this.getSize=function(A){return A.set(te,ue)},this.setSize=function(A,W,$=!0){if(be.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,ue=W,t.width=Math.floor(A*oe),t.height=Math.floor(W*oe),$===!0&&(t.style.width=A+"px",t.style.height=W+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(te*oe,ue*oe).floor()},this.setDrawingBufferSize=function(A,W,$){te=A,ue=W,oe=$,t.width=Math.floor(A*$),t.height=Math.floor(W*$),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(_===vn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,W,$,K){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,W,$,K),we.viewport(B.copy(ge).multiplyScalar(Oe()).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,W,$,K){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,W,$,K),we.scissor(Q.copy(Ue).multiplyScalar(Oe()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){we.setScissorTest(Le=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,$=!0){let K=0;if(A){let Y=!1;if(j!==null){let Re=j.texture.format;Y=g.has(Re)}if(Y){let Re=j.texture.type,De=p.has(Re),Te=H.getClearColor(),Ie=H.getClearAlpha(),Be=Te.r,tt=Te.g,dt=Te.b;De?(x[0]=Be,x[1]=tt,x[2]=dt,x[3]=Ie,V.clearBufferuiv(V.COLOR,0,x)):(b[0]=Be,b[1]=tt,b[2]=dt,b[3]=Ie,V.clearBufferiv(V.COLOR,0,b))}else K|=V.COLOR_BUFFER_BIT}W&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),H.dispose(),Ae.dispose(),ie.dispose(),Ke.dispose(),qe.dispose(),P.dispose(),pe.dispose(),J.dispose(),ye.dispose(),Ge.dispose(),ce.dispose(),be.dispose(),be.removeEventListener("sessionstart",id),be.removeEventListener("sessionend",sd),Qi.stop()};function Ve(A){A.preventDefault(),na("WebGLRenderer: Context Lost."),R=!0}function nt(){na("WebGLRenderer: Context Restored."),R=!1;let A=Bt.autoReset,W=Me.enabled,$=Me.autoUpdate,K=Me.needsUpdate,Y=Me.type;st(),Bt.autoReset=A,Me.enabled=W,Me.autoUpdate=$,Me.needsUpdate=K,Me.type=Y}function Ce(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){let W=A.target;W.removeEventListener("dispose",yt),Yt(W)}function Yt(A){Li(A),qe.remove(A)}function Li(A){let W=qe.get(A).programs;W!==void 0&&(W.forEach(function($){ce.releaseProgram($)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,$,K,Y,Re){W===null&&(W=re);let De=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Te=Hm(A,W,$,K,Y);we.setMaterial(K,De);let Ie=$.index,Be=1;if(K.wireframe===!0){if(Ie=J.getWireframeAttribute($),Ie===void 0)return;Be=2}let tt=$.drawRange,dt=$.attributes.position,Ne=tt.start*Be,ft=(tt.start+tt.count)*Be;Re!==null&&(Ne=Math.max(Ne,Re.start*Be),ft=Math.min(ft,(Re.start+Re.count)*Be)),Ie!==null?(Ne=Math.max(Ne,0),ft=Math.min(ft,Ie.count)):dt!=null&&(Ne=Math.max(Ne,0),ft=Math.min(ft,dt.count));let Gt=ft-Ne;if(Gt<0||Gt===1/0)return;ye.setup(Y,K,Te,$,Ie);let At,St=ee;if(Ie!==null&&(At=T.get(Ie),St=Se,St.setIndex(At)),Y.isMesh)K.wireframe===!0?(we.setLineWidth(K.wireframeLinewidth*Oe()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Y.isLine){let nn=K.linewidth;nn===void 0&&(nn=1),we.setLineWidth(nn*Oe()),Y.isLineSegments?St.setMode(V.LINES):Y.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Y.isPoints?St.setMode(V.POINTS):Y.isSprite&&St.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let nn=Y._multiDrawStarts,Fe=Y._multiDrawCounts,ln=Y._multiDrawCount,xt=Ie?T.get(Ie).bytesPerElement:1,es=qe.get(K).currentProgram.getUniforms();for(let sn=0;sn<ln;sn++)es.setValue(V,"_gl_DrawID",sn),St.render(nn[sn]/xt,Fe[sn])}else if(Y.isInstancedMesh)St.renderInstances(Ne,Gt,Y.count);else if($.isInstancedBufferGeometry){let nn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Fe=Math.min($.instanceCount,nn);St.renderInstances(Ne,Gt,Fe)}else St.render(Ne,Gt)};function nd(A,W,$,K){D!==null&&A.isNodeMaterial&&D.setObject(K,A),he===!0&&se.setState(A,$,!1),A.transparent===!0&&A.side===Ut&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,Nr(A,W,K),A.side=Qn,A.needsUpdate=!0,Nr(A,W,K),A.side=Ut):Nr(A,W,K)}this.compile=function(A,W,$=null){$===null&&($=A),D!==null&&D.renderStart(A,W,$),S=ie.get($),S.init(W),M.push(S),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),me=this.localClippingEnabled,he=se.init(this.clippingPlanes,me),he===!0&&se.setGlobalState(this.clippingPlanes,W),D!==null&&Me.render(S.state.shadowsArray,$,W);let K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Re=Y.material;if(Re)if(Array.isArray(Re))for(let De=0;De<Re.length;De++){let Te=Re[De];nd(Te,$,W,Y),K.add(Te)}else nd(Re,$,W,Y),K.add(Re)}),S=M.pop(),D!==null&&D.renderEnd(),K},this.compileAsync=function(A,W,$=null){let K=this.compile(A,W,$);return new Promise(Y=>{function Re(){if(K.forEach(function(De){let Ie=qe.get(De).currentProgram;(Ie===void 0||Ie.isReady())&&K.delete(De)}),K.size===0){Y(A);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let _l=null;function km(A){_l&&_l(A)}function id(){Qi.stop()}function sd(){Qi.start()}let Qi=new am;Qi.setAnimationLoop(km),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){_l=A,be.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},be.addEventListener("sessionstart",id),be.addEventListener("sessionend",sd),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(A,W);let $=be.enabled===!0&&be.isPresenting===!0,K=I!==null&&(j===null||$)&&I.begin(w,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(W),W=be.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,W,j),S=ie.get(A,M.length),S.init(W),S.state.textureUnits=Ke.getTextureUnits(),M.push(S),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ne.setFromArrayCamera(W):Z.setFromProjectionMatrix(de,Rn,W.reversedDepth),me=this.localClippingEnabled,he=se.init(this.clippingPlanes,me),E=Ae.get(A,v.length),E.init(),v.push(E),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let De=w.xr.getDepthSensingMesh();De!==null&&vl(De,W,-1/0,w.sortObjects)}vl(A,W,0,w.sortObjects),E.finish(),D!==null&&D.updateLights(S.state.lightsArray),w.sortObjects===!0&&E.sort(_e,et),Ee=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Ee&&H.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),he===!0&&se.beginShadows();let Y=S.state.shadowsArray;if(Me.render(Y,A,W),he===!0&&se.endShadows(),(K&&I.hasRenderPass())===!1){let De=E.opaque,Te=E.transmissive;if(S.setupLights(),W.isArrayCamera){let Ie=W.cameras;if(Te.length>0)for(let Be=0,tt=Ie.length;Be<tt;Be++){let dt=Ie[Be];ad(De,Te,A,dt)}Ee&&H.render(A);for(let Be=0,tt=Ie.length;Be<tt;Be++){let dt=Ie[Be];rd(E,A,dt,dt.viewport)}}else Te.length>0&&ad(De,Te,A,W),Ee&&H.render(A),rd(E,A,W)}j!==null&&F===0&&(Ke.updateMultisampleRenderTarget(j),Ke.updateRenderTargetMipmap(j)),K&&I.end(w),A.isScene===!0&&A.onAfterRender(w,A,W),ye.resetDefaultState(),k=-1,z=null,M.pop(),M.length>0?(S=M[M.length-1],Ke.setTextureUnits(S.state.textureUnits),he===!0&&se.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,D!==null&&D.renderEnd()};function vl(A,W,$,K){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let De=W.isArrayCamera?ne:Z;if(!A.frustumCulled||A.intersectsFrustum(De)){K&&O.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);let Te=pe.update(A),Ie=A.material;Ie.visible&&E.push(A,Te,Ie,$,O.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){let De=W.isArrayCamera?ne:Z;if(!A.frustumCulled||A.intersectsFrustum(De)){let Te=pe.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),O.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),O.copy(Te.boundingSphere.center)),O.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Ie)){let Be=Te.groups;for(let tt=0,dt=Be.length;tt<dt;tt++){let Ne=Be[tt],ft=Ie[Ne.materialIndex];ft&&ft.visible&&E.push(A,Te,ft,$,O.z,Ne,W)}}else Ie.visible&&E.push(A,Te,Ie,$,O.z,null,W)}}}let Re=A.children;for(let De=0,Te=Re.length;De<Te;De++)vl(Re[De],W,$,K)}function rd(A,W,$,K){let{opaque:Y,transmissive:Re,transparent:De}=A;S.setupLightsView($),he===!0&&se.setGlobalState(w.clippingPlanes,$),K&&we.viewport(B.copy(K)),Y.length>0&&Ka(Y,W,$),Re.length>0&&Ka(Re,W,$),De.length>0&&Ka(De,W,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ad(A,W,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[K.id]===void 0){let Ne=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[K.id]=new Sn(1,1,{generateMipmaps:!0,type:Ne?pn:vn,minFilter:Tn,samples:Math.max(4,vt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Re=S.state.transmissionRenderTarget[K.id],De=K.viewport||B;Re.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);let Te=w.getRenderTarget(),Ie=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(Re),w.getClearColor(U),X=w.getClearAlpha(),X<1&&w.setClearColor(16777215,.5),w.clear(),Ee&&H.render($);let tt=w.toneMapping;w.toneMapping=ei;let dt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),S.setupLightsView(K),he===!0&&se.setGlobalState(w.clippingPlanes,K),Ka(A,$,K),Ke.updateMultisampleRenderTarget(Re),Ke.updateRenderTargetMipmap(Re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ft=0,Gt=W.length;ft<Gt;ft++){let At=W[ft],{object:St,geometry:nn,material:Fe,group:ln}=At;if(Fe.side===Ut&&St.layers.test(K.layers)){let xt=Fe.side;Fe.side=fn,Fe.needsUpdate=!0,od(St,$,K,nn,Fe,ln),Fe.side=xt,Fe.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ke.updateMultisampleRenderTarget(Re),Ke.updateRenderTargetMipmap(Re))}w.setRenderTarget(Te,Ie,Be),w.setClearColor(U,X),dt!==void 0&&(K.viewport=dt),w.toneMapping=tt}function Ka(A,W,$){let K=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Re=A.length;Y<Re;Y++){let De=A[Y],{object:Te,geometry:Ie,group:Be}=De,tt=De.material;tt.allowOverride===!0&&K!==null&&(tt=K),Te.layers.test($.layers)&&od(Te,W,$,Ie,tt,Be)}}function od(A,W,$,K,Y,Re){D!==null&&Y.isNodeMaterial&&D.setObject(A,Y),A.onBeforeRender(w,W,$,K,Y,Re),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(w,W,$,K,A,Re),Y.transparent===!0&&Y.side===Ut&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,w.renderBufferDirect($,W,K,Y,A,Re),Y.side=Qn,Y.needsUpdate=!0,w.renderBufferDirect($,W,K,Y,A,Re),Y.side=Ut):w.renderBufferDirect($,W,K,Y,A,Re),A.onAfterRender(w,W,$,K,Y,Re)}function cd(A){let W=0;for(let $ of A)$.texture!==null&&W++;return W}function Nr(A,W,$){W.isScene!==!0&&(W=re);let K=qe.get(A),Y=S.state.lights,Re=S.state.shadowsArray,De=Y.state.version,Te=ce.getParameters(A,Y.state,Re,W,$,S.state.lightProbeGridArray),Ie=ce.getProgramCacheKey(Te),Be=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;let tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=P.get(A.envMap||K.environment,tt),K.envMapRotation=K.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",yt),Be=new Map,K.programs=Be,K.programVariants=new Map);let dt=Be.get(Ie);if(dt!==void 0){if(K.currentProgram===dt&&K.lightsStateVersion===De)return hd(A,Te),dt}else Te.uniforms=ce.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,$,Te),A.onBeforeCompile(Te,w),dt=ce.acquireProgram(Te,Ie),Be.set(Ie,dt),K.uniforms=Te.uniforms;let Ne=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=se.uniform),hd(A,Te),K.needsLights=Vm(A),K.lightsStateVersion=De,K.needsLights&&(Ne.ambientLightColor.value=Y.state.ambient,Ne.lightProbe.value=Y.state.probe,Ne.sunLights.value=Y.state.sun,Ne.sunLightShadows.value=Y.state.sunShadow,Ne.directionalLights.value=Y.state.directional,Ne.directionalLightShadows.value=Y.state.directionalShadow,Ne.spotLights.value=Y.state.spot,Ne.spotLightShadows.value=Y.state.spotShadow,Ne.rectAreaLights.value=Y.state.rectArea,Ne.ltc_1.value=Y.state.rectAreaLTC1,Ne.ltc_2.value=Y.state.rectAreaLTC2,Ne.pointLights.value=Y.state.point,Ne.pointLightShadows.value=Y.state.pointShadow,Ne.hemisphereLights.value=Y.state.hemi,Ne.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ne.sunShadowCascade.value=Y.state.sunShadowCascade,Ne.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ne.spotLightMatrix.value=Y.state.spotLightMatrix,Ne.spotLightMap.value=Y.state.spotLightMap,Ne.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.numLightProbeGrids=cd(S.state.lightProbeGridArray),K.currentProgram=dt,K.uniformsList=null,dt}function zm(A,W,$,K,Y){let Re=qe.get(A),De=Re.currentProgram.id+","+K+","+Y,Te=Re.programVariants.get(De);return Te===void 0?(Te=Nr(A,W,$),Re.programVariants.set(De,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=K,Re.toneMapping=Y),Te}function ld(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Rr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function hd(A,W){let $=qe.get(A);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.batchingColor=W.batchingColor,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.instancingMorph=W.instancingMorph,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}function Hm(A,W,$,K,Y){W.isScene!==!0&&(W=re),Ke.resetTextureUnits();let Re=W.fog,De=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Te=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:lt.workingColorSpace,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Be=P.get(K.envMap||De,Ie),tt=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,dt=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ne=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,Gt=!!$.morphAttributes.color,At=ei;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(At=w.toneMapping);let St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nn=St!==void 0?St.length:0,Fe=qe.get(K),ln=S.state.lights;if(he===!0&&(me===!0||A!==z)){let It=A===z&&K.id===k;se.setState(K,A,It)}let xt=!1,es=!1;K.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==ln.state.version||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==Be||K.fog===!0&&Fe.fog!==Re||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==se.numPlanes||Fe.numIntersection!==se.numIntersection)||Fe.vertexAlphas!==tt||Fe.vertexTangents!==dt||Fe.morphTargets!==Ne||Fe.morphNormals!==ft||Fe.morphColors!==Gt||Fe.morphTargetsCount!==nn||Fe.numLightProbeGrids!==cd(S.state.lightProbeGridArray)?xt=!0:(Fe.outputColorSpace!==Te||Fe.toneMapping!==At)&&(es=!0):(xt=!0,Fe.__version=K.version);let sn=Fe.currentProgram;(xt===!0||es===!0)&&(sn=es===!0?zm(K,W,Y,Te,At):Nr(K,W,Y),D&&K.isNodeMaterial&&D.onUpdateProgram(K,sn,Fe));let Ja=!1,Di=!1,ts=!1,gt=sn.getUniforms(),tn=Fe.uniforms;if(we.useProgram(sn.program)&&(Ja=!0,Di=!0,ts=!0),K.id!==k&&(k=K.id,Di=!0),Ja||z!==A){we.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),gt.setValue(V,"projectionMatrix",A.projectionMatrix),gt.setValue(V,"viewMatrix",A.matrixWorldInverse);let Zt=gt.map.cameraPosition;Zt!==void 0&&Zt.setValue(V,He.setFromMatrixPosition(A.matrixWorld)),vt.logarithmicDepthBuffer&&gt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&gt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Di=!0,ts=!0)}if(Fe.needsLights&&(ln.state.sunShadowMap.length>0&&gt.setValue(V,"sunShadowMap",ln.state.sunShadowMap,Ke),ln.state.directionalShadowMap.length>0&&gt.setValue(V,"directionalShadowMap",ln.state.directionalShadowMap,Ke),ln.state.spotShadowMap.length>0&&gt.setValue(V,"spotShadowMap",ln.state.spotShadowMap,Ke),ln.state.pointShadowMap.length>0&&gt.setValue(V,"pointShadowMap",ln.state.pointShadowMap,Ke)),Y.isSkinnedMesh){gt.setOptional(V,Y,"bindMatrix"),gt.setOptional(V,Y,"bindMatrixInverse");let It=Y.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),gt.setValue(V,"boneTexture",It.boneTexture,Ke))}Y.isBatchedMesh&&(gt.setOptional(V,Y,"batchingTexture"),gt.setValue(V,"batchingTexture",Y._matricesTexture,Ke),gt.setOptional(V,Y,"batchingIdTexture"),gt.setValue(V,"batchingIdTexture",Y._indirectTexture,Ke),gt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(V,"batchingColorTexture",Y._colorsTexture,Ke));let Dn=$.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ae.update(Y,$,sn),(Di||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,gt.setValue(V,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(tn.envMapIntensity.value=W.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=Ly()),Di){if(gt.setValue(V,"toneMappingExposure",w.toneMappingExposure),Fe.needsLights&&Gm(tn,ts),Re&&K.fog===!0&&ve.refreshFogUniforms(tn,Re),ve.refreshMaterialUniforms(tn,K,oe,ue,S.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let It=y,Zt=0;for(let ai of S.state.lightProbeGridArray)ai.texture!==null&&(It.textures[Zt]=ai.texture,It.min[Zt]=ai.boundingBox.min,It.max[Zt]=ai.boundingBox.max,It.resolution[Zt]=ai.resolution,Zt++);for(let ai in It)It[ai].length=Zt;tn.probesSH.value=It.textures,tn.probesMin.value=It.min,tn.probesMax.value=It.max,tn.probesResolution.value=It.resolution}Rr.upload(V,ld(Fe),tn,Ke)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Rr.upload(V,ld(Fe),tn,Ke),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&gt.setValue(V,"center",Y.center),gt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(V,"normalMatrix",Y.normalMatrix),gt.setValue(V,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){let It=K.uniformsGroups;for(let Zt=0,ai=It.length;Zt<ai;Zt++){let dd=It[Zt];Ge.update(dd,sn),Ge.bind(dd,sn)}}return sn}function Gm(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Vm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,W,$){let K=qe.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=W,qe.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let $=qe.get(A);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,$=0){j=A,q=W,F=$;let K=null,Y=!1,Re=!1;if(A){let Te=qe.get(A);if(Te.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(V.FRAMEBUFFER,Te.__webglFramebuffer),B.copy(A.viewport),Q.copy(A.scissor),le=A.scissorTest,we.viewport(B),we.scissor(Q),we.setScissorTest(le),k=-1;return}else if(Te.__webglFramebuffer===void 0)Ke.setupRenderTarget(A);else if(Te.__hasExternalTextures)Ke.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let tt=A.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&qe.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Re=!0);let Be=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[W])?K=Be[W][$]:K=Be[W],Y=!0):A.samples>0&&Ke.useMultisampledRTT(A)===!1?K=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?K=Be[$]:K=Be,B.copy(A.viewport),Q.copy(A.scissor),le=A.scissorTest}else B.copy(ge).multiplyScalar(oe).floor(),Q.copy(Ue).multiplyScalar(oe).floor(),le=Le;if($!==0&&(K=L),we.bindFramebuffer(V.FRAMEBUFFER,K)&&we.drawBuffers(A,K),we.viewport(B),we.scissor(Q),we.setScissorTest(le),Y){let Te=qe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,$)}else if(Re){let Te=W;for(let Ie=0;Ie<A.textures.length;Ie++){let Be=qe.get(A.textures[Ie]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,$,Te)}}else if(A!==null&&$!==0){let Te=qe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Te.__webglTexture,$)}k=-1};function ud(A){let W=qe.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=vt.textureFormatReadable(A.format),W.__typeReadable=vt.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,$,K,Y,Re,De,Te=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){we.bindFramebuffer(V.FRAMEBUFFER,Ie);try{let Be=A.textures[Te],tt=Be.format,dt=Be.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Te);let Ne=ud(Be);if(Ne.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-K&&$>=0&&$<=A.height-Y&&V.readPixels(W,$,K,Y,xe.convert(tt),xe.convert(dt),Re)}finally{let Be=j!==null?qe.get(j).__webglFramebuffer:null;we.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,W,$,K,Y,Re,De,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(W>=0&&W<=A.width-K&&$>=0&&$<=A.height-Y){we.bindFramebuffer(V.FRAMEBUFFER,Ie);let Be=A.textures[Te],tt=Be.format,dt=Be.type;A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Te);let Ne=ud(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(W,$,K,Y,xe.convert(tt),xe.convert(dt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Gt=j!==null?qe.get(j).__webglFramebuffer:null;we.bindFramebuffer(V.FRAMEBUFFER,Gt);let At=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Cp(V,At,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ft),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ft),V.deleteSync(At),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,$=0){let K=Math.pow(2,-$),Y=Math.floor(A.image.width*K),Re=Math.floor(A.image.height*K),De=W!==null?W.x:0,Te=W!==null?W.y:0;Ke.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,De,Te,Y,Re),we.unbindTexture()},this.copyTextureToTexture=function(A,W,$=null,K=null,Y=0,Re=0){let De,Te,Ie,Be,tt,dt,Ne,ft,Gt,At=A.isCompressedTexture?A.mipmaps[Re]:A.image;if($!==null)De=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ie=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,tt=$.min.y,dt=$.isBox3?$.min.z:0;else{let gt=Math.pow(2,-Y);De=Math.floor(At.width*gt),Te=Math.floor(At.height*gt),A.isDataArrayTexture?Ie=At.depth:A.isData3DTexture?Ie=Math.floor(At.depth*gt):Ie=1,Be=0,tt=0,dt=0}K!==null?(Ne=K.x,ft=K.y,Gt=K.z):(Ne=0,ft=0,Gt=0);let St=xe.convert(W.format),nn=xe.convert(W.type),Fe;W.isData3DTexture?(Ke.setTexture3D(W,0),Fe=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ke.setTexture2DArray(W,0),Fe=V.TEXTURE_2D_ARRAY):(Ke.setTexture2D(W,0),Fe=V.TEXTURE_2D),we.activeTexture(V.TEXTURE0),we.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),we.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),we.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);let ln=we.getParameter(V.UNPACK_ROW_LENGTH),xt=we.getParameter(V.UNPACK_IMAGE_HEIGHT),es=we.getParameter(V.UNPACK_SKIP_PIXELS),sn=we.getParameter(V.UNPACK_SKIP_ROWS),Ja=we.getParameter(V.UNPACK_SKIP_IMAGES);we.pixelStorei(V.UNPACK_ROW_LENGTH,At.width),we.pixelStorei(V.UNPACK_IMAGE_HEIGHT,At.height),we.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),we.pixelStorei(V.UNPACK_SKIP_ROWS,tt),we.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);let Di=A.isDataArrayTexture||A.isData3DTexture,ts=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let gt=qe.get(A),tn=qe.get(W),Dn=qe.get(gt.__renderTarget),It=qe.get(tn.__renderTarget);we.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),we.bindFramebuffer(V.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Zt=0;Zt<Ie;Zt++)Di&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,Y,dt+Zt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(W).__webglTexture,Re,Gt+Zt)),V.blitFramebuffer(Be,tt,Be+De,tt+Te,Ne,ft,Ne+De,ft+Te,V.DEPTH_BUFFER_BIT,V.NEAREST);we.bindFramebuffer(V.READ_FRAMEBUFFER,null),we.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||qe.has(A)){let gt=qe.get(A),tn=qe.get(W);we.bindFramebuffer(V.READ_FRAMEBUFFER,C),we.bindFramebuffer(V.DRAW_FRAMEBUFFER,G);for(let Dn=0;Dn<Ie;Dn++)Di?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gt.__webglTexture,Y,dt+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gt.__webglTexture,Y),ts?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,tn.__webglTexture,Re,Gt+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tn.__webglTexture,Re),Y!==0?V.blitFramebuffer(Be,tt,Be+De,tt+Te,Ne,ft,Ne+De,ft+Te,V.COLOR_BUFFER_BIT,V.NEAREST):ts?V.copyTexSubImage3D(Fe,Re,Ne,ft,Gt+Dn,Be,tt,De,Te):V.copyTexSubImage2D(Fe,Re,Ne,ft,Be,tt,De,Te);we.bindFramebuffer(V.READ_FRAMEBUFFER,null),we.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ts?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Fe,Re,Ne,ft,Gt,De,Te,Ie,St,nn,At.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Fe,Re,Ne,ft,Gt,De,Te,Ie,St,At.data):V.texSubImage3D(Fe,Re,Ne,ft,Gt,De,Te,Ie,St,nn,At):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Re,Ne,ft,De,Te,St,nn,At.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Re,Ne,ft,At.width,At.height,St,At.data):V.texSubImage2D(V.TEXTURE_2D,Re,Ne,ft,De,Te,St,nn,At);we.pixelStorei(V.UNPACK_ROW_LENGTH,ln),we.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),we.pixelStorei(V.UNPACK_SKIP_PIXELS,es),we.pixelStorei(V.UNPACK_SKIP_ROWS,sn),we.pixelStorei(V.UNPACK_SKIP_IMAGES,Ja),Re===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&V.generateMipmap(Fe),we.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&Ke.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ke.setTextureCube(A,0):A.isData3DTexture?Ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ke.setTexture2DArray(A,0):Ke.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){q=0,F=0,j=null,we.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function xm(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new mt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0,f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=bm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);let m=bm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function bm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Dt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let _=h.getComponent(d,m);o.setComponent(d+u,m,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function vu(i,e){if(e===Vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ar||e===Ha){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ar)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function _m(i){let e=new Map,t=new Map,n=i.clone();return vm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)vm(i.children[n],e.children[n],t)}var al=class extends zn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new ol(t,ht.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ol(t,ht.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Hu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(e);a=Ri.resolveURL(l,this.path)}else a=Ri.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Tm){try{a[ht.KHR_BINARY_GLTF]=new Gu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ju(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:a[u]=new Tu;break;case ht.KHR_DRACO_MESH_COMPRESSION:a[u]=new Vu(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:a[u]=new Wu;break;case ht.KHR_MESH_QUANTIZATION:a[u]=new qu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Dy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Ot(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eu=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],jt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ys(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new La(h),l.distance=u;break;case"spot":l=new Ia(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Tu=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},wu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(r,r)}return Promise.all(s)}},Ru=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Cu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Iu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Tt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Lu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Du=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],jt),Promise.all(s)}},Nu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Fu=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],jt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Tt)),Promise.all(s)}},Uu=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ot(this.parser,e,this.name)!==null?Ft:null}extendMaterialParams(e,t){let n=Ot(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Bu=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ku=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},zu=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ol=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Hu=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Pn.TRIANGLES&&l.mode!==Pn.TRIANGLE_STRIP&&l.mode!==Pn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let _=new We,g=new N,p=new Ct,x=new N(1,1,1),b=new en(m.geometry,m.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,E),c.SCALE&&x.fromBufferAttribute(c.SCALE,E),b.setMatrixAt(E,_.compose(g,p,x));let y=null;for(let E in c)if(E==="_COLOR_0"){let S=c[E];b.instanceColor=new vi(S.array,S.itemSize,S.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){let v=b.geometry;y=new mt,y.name=v.name;for(let M in v.attributes)y.setAttribute(M,v.attributes[M]);for(let M in v.morphAttributes)y.morphAttributes[M]=v.morphAttributes[M];v.index!==null&&y.setIndex(v.index),y.morphTargetsRelative=v.morphTargetsRelative;for(let M of v.groups)y.addGroup(M.start,M.count,M.materialIndex);v.boundingBox!==null&&(y.boundingBox=v.boundingBox.clone()),v.boundingSphere!==null&&(y.boundingSphere=v.boundingSphere.clone()),y.drawRange.start=v.drawRange.start,y.drawRange.count=v.drawRange.count,y.userData=Object.assign({},v.userData),b.geometry=y}let S=c[E];y.setAttribute(E,new vi(S.array,S.itemSize,S.normalized))}Nt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Tm="glTF",Xa=12,ym={JSON:1313821514,BIN:5130562},Gu=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Xa,r=new DataView(e,Xa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===ym.JSON){let l=new Uint8Array(e,Xa+a,o);this.content=n.decode(l)}else if(c===ym.BIN){let l=Xa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ju[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ju[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ir[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(f)},o,l,jt,d)})})}},Wu=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},qu=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},cl=class extends $n{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,_=m-l,g=-2*f+3*d,p=f-d,x=1-g,b=p-d+u;for(let y=0;y!==o;y++){let E=a[_+y+o],S=a[_+y+c]*h,v=a[m+y+o],M=a[m+y]*h;r[y]=x*E+b*S+g*v+p*M}return r}},Ny=new Ct,Xu=class extends cl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ny.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mm={9728:zt,9729:wt,9984:mc,9985:Tr,9986:ws,9987:Tn},Sm={33071:mn,33648:sr,10497:Kn},yu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ju={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fy={CUBICSPLINE:void 0,LINEAR:ds,STEP:us},Mu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qn})),i.DefaultMaterial}function Ps(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Oy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function By(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ky(i){let e,t=i.extensions&&i.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Su(t.attributes):e=i.indices+":"+Su(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Su(i.targets[n]);return e}function Su(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ku(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Hy=new We,Ju=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new _s(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Da(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ps(r,o,s),si(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ri.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yu[s.type],o=Ir[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Dt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=yu[s.type],l=Ir[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(x);b||(_=new l(o,p*f,s.count*f/h),b=new ur(_,f/h),t.cache.add(x,b)),g=new dr(b,c,d%f/h,m)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),g=new Dt(_,c,m);if(s.sparse!==void 0){let p=yu.SCALAR,x=Ir[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new x(a[1],b,s.sparse.count*p),S=new l(a[2],y,s.sparse.count*c);o!==null&&(g=new Dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let v=0,M=E.length;v<M;v++){let I=E[v];if(g.setX(I,S[v*c]),c>=2&&g.setY(I,S[v*c+1]),c>=3&&g.setZ(I,S[v*c+2]),c>=4&&g.setW(I,S[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Mm[d.magFilter]||wt,h.minFilter=Mm[d.minFilter]||Tn,h.wrapS=Sm[d.wrapS]||Kn,h.wrapT=Sm[d.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==wt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,m){t.parse(d,f,m)})});else{if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){let p=new Qt(g);p.needsUpdate=!0,f(p)}),t.load(Ri.resolveURL(d,r.path),_,void 0,m)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),si(d,a),d.userData.mimeType=a.mimeType||zy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new mr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new pr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $e}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){let u=s[ht.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],jt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||Mu.OPAQUE;if(h===Mu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Mu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&a!==Ht&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),si(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Em(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=ky(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Em(new mt,l,t),l.mode===Pn.TRIANGLE_STRIP?d=d.then(f=>vu(f,Ha)):l.mode===Pn.TRIANGLE_FAN&&(d=d.then(f=>vu(f,Ar))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Uy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let _=h[f],g=a[f],p,x=l[f];if(g.mode===Pn.TRIANGLES||g.mode===Pn.TRIANGLE_STRIP||g.mode===Pn.TRIANGLE_FAN||g.mode===void 0){let b=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");b&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=b&&y?new ca(_,x):new Ye(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Pn.LINES)p=new ha(_,x);else if(g.mode===Pn.LINE_STRIP)p=new ms(_,x);else if(g.mode===Pn.LINE_LOOP)p=new ua(_,x);else if(g.mode===Pn.POINTS)p=new da(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&By(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),si(p,r),g.extensions&&Ps(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];let d=new rt;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(ti.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new vs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new la(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let b=0,y=d.length;b<y;b++){let E=d[b],S=f[b],v=m[b],M=_[b],I=g[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let w=n._createAnimationTracks(E,S,v,M,I);if(w)for(let R=0;R<w.length;R++)p.push(w[R])}let x=new Ra(r,void 0,p);return si(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new N().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new fr:l.length>1?h=new rt:l.length===1?h=l[0]:h=new Nt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),si(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),si(r,n),n.extensions&&Ps(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(_m(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof Qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Zi[r.path]===Zi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Zi[r.path]){case Zi.weights:h=Ti;break;case Zi.rotation:h=wi;break;case Zi.translation:case Zi.scale:h=Ji;break;default:switch(n.itemSize){case 1:h=Ti;break;case 2:case 3:default:h=Ji;break}break}let u=s.interpolation!==void 0?Fy[s.interpolation]:ds,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let _=new h(c[f]+"."+Zi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ku(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof wi?Xu:cl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gy(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){let h=Ku(Ir[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=Ku(Ir[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new gn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Em(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=ju[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return lt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),si(i,e),Gy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Oy(i,e.targets,t):i})}var wm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var y=p.charCodeAt(b);x[b]=y>96?y-97:y>64?y-39:y+4}for(var E=0,b=0;b<p.length;++b)x[E++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,E)}function c(p,x,b,y,E,S,v){var M=p.exports.sbrk,I=y+3&-4,w=M(I*E),R=M(S.length),D=new Uint8Array(p.exports.memory.buffer);D.set(S,R);var L=x(w,y,E,R,S.length);if(L==0&&v&&v(w,I,E),b.set(D.subarray(w,w+y*E)),M(w-M(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var y=b.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),b=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(b),E=u.length;E<p;++E)u[E]=f(y);for(var E=p;E<u.length;++E)u[E].object.postMessage({});u.length=p,URL.revokeObjectURL(y)}function _(p,x,b,y,E){for(var S=u[0],v=1;v<u.length;++v)u[v].pending<S.pending&&(S=u[v]);return new Promise(function(M,I){var w=new Uint8Array(b),R=++d;S.pending+=p,S.requests[R]={resolve:M,reject:I},S.object.postMessage({id:R,count:p,size:x,source:w,mode:y,filter:E},[w.buffer])})}function g(p){var x=p.data;self.ready.then(function(b){if(!x.id)return self.close();try{var y=new Uint8Array(x.count*x.size);c(b,b.exports[x.mode],y,x.count,x.size,x.source,b.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,b,y,E){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,b,y,r.exports[l[E]])},decodeIndexBuffer:function(p,x,b,y){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,b,y)},decodeIndexSequence:function(p,x,b,y){c(r,r.exports.meshopt_decodeIndexSequence,p,x,b,y)},decodeGltfBuffer:function(p,x,b,y,E,S){c(r,r.exports[h[E]],p,x,b,y,r.exports[l[S]])},decodeGltfBufferAsync:function(p,x,b,y,E){return u.length>0?_(p,x,b,h[y],l[E]):a.then(function(){var S=new Uint8Array(p*x);return c(r,r.exports[h[y]],S,p,x,b,r.exports[l[E]]),S})}}})();var ll=class extends Ca{constructor(e){super(e),this.type=pn}parse(e){let a=function(M,I){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(I||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(I||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(I||""))}},u=function(M,I,w){I=I||1024;let D=M.pos,L=-1,C=0,G="",q=String.fromCharCode.apply(null,new Uint16Array(M.subarray(D,D+128)));for(;0>(L=q.indexOf(`
`))&&C<I&&D<M.byteLength;)G+=q,C+=q.length,D+=128,q=String.fromCharCode.apply(null,new Uint16Array(M.subarray(D,D+128)));return-1<L?(w!==!1&&(M.pos+=C+L+1),G+q.slice(0,L)):!1},d=function(M){let I=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},G,q;for((M.pos>=M.byteLength||!(G=u(M)))&&a(1,"no header found"),(q=G.match(I))||a(3,"bad initial token"),C.valid|=1,C.programtype=q[1],C.string+=G+`
`;G=u(M),G!==!1;){if(C.string+=G+`
`,G.charAt(0)==="#"){C.comments+=G+`
`;continue}if((q=G.match(w))&&(C.gamma=parseFloat(q[1])),(q=G.match(R))&&(C.exposure=parseFloat(q[1])),(q=G.match(D))&&(C.valid|=2,C.format=q[1]),(q=G.match(L))&&(C.valid|=4,C.height=parseInt(q[1],10),C.width=parseInt(q[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},f=function(M,I,w){let R=I;if(R<8||R>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);R!==(M[2]<<8|M[3])&&a(3,"wrong scanline width");let D=new Uint8Array(4*I*w);D.length||a(4,"unable to allocate buffer space");let L=0,C=0,G=4*R,q=new Uint8Array(4),F=new Uint8Array(G),j=w;for(;j>0&&C<M.byteLength;){C+4>M.byteLength&&a(1),q[0]=M[C++],q[1]=M[C++],q[2]=M[C++],q[3]=M[C++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=R)&&a(3,"bad rgbe scanline format");let k=0,z;for(;k<G&&C<M.byteLength;){z=M[C++];let Q=z>128;if(Q&&(z-=128),(z===0||k+z>G)&&a(3,"bad scanline data"),Q){let le=M[C++];for(let U=0;U<z;U++)F[k++]=le}else F.set(M.subarray(C,C+z),k),k+=z,C+=z}let B=R;for(let Q=0;Q<B;Q++){let le=0;D[L]=F[Q+le],le+=R,D[L+1]=F[Q+le],le+=R,D[L+2]=F[Q+le],le+=R,D[L+3]=F[Q+le],L+=4}j--}return D},m=function(M,I,w,R){let D=M[I+3],L=Math.pow(2,D-128)/255;w[R+0]=M[I+0]*L,w[R+1]=M[I+1]*L,w[R+2]=M[I+2]*L,w[R+3]=1},_=function(M,I,w,R){let D=M[I+3],L=Math.pow(2,D-128)/255;w[R+0]=ji.toHalfFloat(Math.min(M[I+0]*L,65504)),w[R+1]=ji.toHalfFloat(Math.min(M[I+1]*L,65504)),w[R+2]=ji.toHalfFloat(Math.min(M[I+2]*L,65504)),w[R+3]=ji.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=d(g),x=p.width,b=p.height,y=f(g.subarray(g.pos),x,b),E,S,v;switch(this.type){case on:v=y.length/4;let M=new Float32Array(v*4);for(let w=0;w<v;w++)m(y,w*4,M,w*4);E=M,S=on;break;case pn:v=y.length/4;let I=new Uint16Array(v*4);for(let w=0;w<v;w++)_(y,w*4,I,w*4);E=I,S=pn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:b,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S,colorSpace:jt,minFilter:wt,magFilter:wt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var hl=class{constructor(e,t){this.progress=e,this.event=t,this.bytes=new Map,this.jobs=new Map,this.models=new Map,this.loadedBytes=0,this.manifest=null}async init(){let e=await fetch("./game-assets.json");if(!e.ok)throw Error(`game-assets.json: HTTP ${e.status}`);this.manifest=await e.json();let[t,n,s,r]=await Promise.all([this.texture("asphalt-color.jpg",!0),this.texture("asphalt-normal.jpg"),this.texture("asphalt-rough.jpg"),this.fetch("sunset.hdr")]);this.road={color:t,normal:n,rough:s};let a=new ll().parse(r);this.hdr=new Yn(a.data,a.width,a.height,a.format,a.type),this.hdr.flipY=!0,this.hdr.magFilter=this.hdr.minFilter=wt,this.hdr.mapping=Er,this.hdr.colorSpace=jt,this.hdr.needsUpdate=!0}async fetch(e){if(this.jobs.has(e))return this.jobs.get(e);let t=(async()=>{let n=this.manifest.files[e];if(!n)throw Error(`Unlisted local asset: ${e}`);this.progress(e,this.loadedBytes);let s=await fetch(new URL(n.path,document.baseURI));if(!s.ok)throw Error(`${e}: HTTP ${s.status}`);let r;if(s.body?.getReader){let a=s.body.getReader(),o=[],c=0;for(;;){let{value:h,done:u}=await a.read();if(u)break;o.push(h),c+=h.length,this.loadedBytes+=h.length,this.progress(e,this.loadedBytes)}r=new Uint8Array(c);let l=0;for(let h of o)r.set(h,l),l+=h.length}else r=new Uint8Array(await s.arrayBuffer()),this.loadedBytes+=r.length;if(r.length!==n.bytes)throw Error(`${e}: size mismatch (${r.length}/${n.bytes})`);if(crypto.subtle&&Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",r))).map(o=>o.toString(16).padStart(2,"0")).join("")!==n.sha256)throw Error(`${e}: SHA-256 mismatch`);return this.bytes.set(e,r.buffer),this.event("asset-loaded",`${e}: ${r.length} bytes`),r.buffer})();return this.jobs.set(e,t),t}async texture(e,t=!1){let n=await this.fetch(e),s=URL.createObjectURL(new Blob([n],{type:"image/jpeg"}));try{let r=await new _s().loadAsync(s);return r.wrapS=r.wrapT=Kn,r.colorSpace=t?Tt:Gn,r}finally{URL.revokeObjectURL(s)}}async model(e){if(!this.models.has(e)){let t=(async()=>{let n=new al;n.setMeshoptDecoder(wm);let{scene:s}=await n.parseAsync(await this.fetch(e),"");return s})();this.models.set(e,t)}return this.models.get(e)}};var ja=new N;function In(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;ja.copy(e),ja[n]=0,ja.normalize();let l=.5*a/(a+o),h=1-ja.angleTo(i)/c;return Math.sign(ja[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Ln=class i extends xn{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new N,l=new N,h=new N(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,_=new N,g=.5/a;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[x+0]=In(_,l,"z","y",r,n),f[x+1]=1-In(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[x+0]=1-In(_,l,"z","y",r,n),f[x+1]=1-In(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[x+0]=1-In(_,l,"x","z",r,e),f[x+1]=In(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-In(_,l,"x","z",r,e),f[x+1]=1-In(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-In(_,l,"x","y",r,e),f[x+1]=1-In(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[x+0]=In(_,l,"x","y",r,e),f[x+1]=1-In(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var $i=Math.PI*2,Xe=(i,e,t)=>[i/255,e/255,t/255],Am=(i,e)=>i.map(t=>Math.min(1,t*e)),Pi=(i,e,t)=>i+(e-i)*t,Yu=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],dl=i=>{let e=Math.hypot(...i)||1;return i.map(t=>t/e)},Zu=(i,e)=>i.map((t,n)=>t-e[n]);function fl(i,e,t,n,s=!1){let r=(o,c)=>{let l=Zu(e[Math.min(e.length-1,o+1)][c],e[Math.max(0,o-1)][c]),h=Zu(e[o][Math.min(e[o].length-1,c+1)],e[o][Math.max(0,c-1)]);return dl(Yu(l,h)).map(u=>s?-u:u)},a=(o,c)=>{let l=e[o][c],h=typeof t=="function"?t(l):t;i.data.push(...l,...r(o,c),...h,n)};for(let o=0;o<e.length-1;o++)for(let c=0;c<e[o].length-1;c++)for(let[l,h]of[[o,c],[o+1,c],[o+1,c+1],[o,c],[o+1,c+1],[o,c+1]])a(l,h)}function Rm(i,e,t){let n=0;for(;n<i.length-2&&e>i[n+1][0];)n++;let s=i[n],r=i[n+1],a=Math.max(0,Math.min(1,(e-s[0])/(r[0]-s[0]))),o=a*a*(3-2*a);return Pi(s[t],r[t],o)}function ri(i,e,t,n,s,r=2){let a=dl(Zu(t,e)),o=dl(Yu(a,Math.abs(a[1])>.9?[1,0,0]:[0,1,0])),c=dl(Yu(a,o)),l=d=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,m])=>d.map((_,g)=>_+n*(o[g]*f+c[g]*m))),h=l(e),u=l(t);for(let d=0;d<4;d++){let f=(d+1)%4;i.quad(h[d],u[d],u[f],h[f],s,r)}}function ul(i,e,t,n,s,r,a=32){for(let o=0;o<a;o++){let c=o*$i/a,l=(o+1)*$i/a,h=(u,d)=>[e,u*Math.cos(d),u*Math.sin(d)];i.quad(h(t,c),h(n,c),h(n,l),h(t,l),s,r)}}function Cm(i,e,t,n,s=!0){if(t>=2&&t!==5)return Vy(i,e,t,n);let r=t;t===5&&(t=1);let a=new i,o=hn[t],c=n?1.14:1.04,l=t===0?[[-2.43,.87,.67],[-1.47,1.02,.79],[-.3,.96,.76],[1.47,1,.69],[2.43,.82,.52]]:[[-2.4,.88,.71],[-1.42,1,.8],[-.2,.95,.78],[1.43,.99,.73],[2.43,.85,.56]],h=[],u=s?52:24;for(let v=0;v<=u;v++){let M=Pi(-2.43,2.43,v/u),I=Rm(l,M,1)*c,w=Rm(l,M,2),R=.19,D=w;for(let C of o.wheelZ){let G=Math.abs(M-C);G<.48&&(R=Math.max(R,.44+Math.sqrt(.48*.48-G*G))),G<.57&&(D=Math.max(D,.44+Math.sqrt(.57*.57-G*G)))}let L=[-1,-1,-.96,-.82,-.56,0,.56,.82,.96,1,1];h.push(L.map((C,G)=>{let q=Math.abs(C),F=Math.max(0,(q-.55)/.45),j=G===0||G===10?R:Pi(w+.035*(1-q*q),D,F*F);return[C*I,j,M]}))}fl(a,h,v=>Am(e,.68+.32*Math.min(1,(v[1]-.15)/.65)),2);for(let v of[0,h.length-1]){let M=h[v];for(let I=1;I<M.length-2;I++)a.tri([0,.22,M[0][2]],M[I],M[I+1],e,2)}a.box(0,.18,0,1.78,.1,4.25,Xe(17,22,27),8);let d=t===0?[-.85,.2]:[-1.02,-.05],f=o.roof,m=[-.71,.79,-1.55],_=[.71,.79,-1.55],g=[-.64,f-.04,d[0]],p=[.64,f-.04,d[0]],x=[-.62,f,d[1]],b=[.62,f,d[1]],y=[-.78,.75,1.14],E=[.78,.75,1.14];function S(v,M,I,w,R,D,L=.025){let C=[],G=s?6:3,q=s?12:8;for(let F=0;F<=G;F++){let j=F/G,k=v.map((B,Q)=>Pi(B,w[Q],j)),z=M.map((B,Q)=>Pi(B,I[Q],j));C.push(Array.from({length:q+1},(B,Q)=>{let le=Q/q;return[Pi(k[0],z[0],le),Pi(k[1],z[1],le)+L*Math.sin(le*Math.PI),Pi(k[2],z[2],le)]}))}fl(a,C,D,R)}S(m,_,p,g,3,Xe(26,45,57)),S(g,p,b,x,2,e,.045),S(x,b,E,y,3,Xe(31,52,63)),a.quad(m,g,x,y,Xe(25,42,53),3),a.quad(_,E,b,p,Xe(25,42,53),3);for(let[v,M]of[[m,g],[_,p],[x,y],[b,E],[g,x],[p,b]])ri(a,v,M,.025,e);for(let v of[-1,1])ri(a,[v*.71,.82,-.58],[v*.64,f-.015,-.48],.021,Xe(16,23,29),8),a.sphere(v*1.035,.91,.42,.13,.055,.15,e,2,12,6),ri(a,[v*.77,.79,.4],[v*1.02,.89,.42],.023,Xe(20,28,35),8),a.box(v*.67,.57,2.429,.39,.052,.025,Xe(221,238,246),4),a.box(v*.68,.64,-2.435,.45,.047,.025,Xe(232,24,28),4),a.box(v*.67,.31,2.44,.38,.14,.025,Xe(13,19,24),8),a.box(v*.65,.27,-2.44,.16,.105,.04,Xe(88,98,108),6),a.box(v*(c*.96),.26,0,.06,.08,1.95,Xe(23,28,34),8),a.box(v*(c*.94),.73,-.23,.028,.027,.19,Xe(89,103,112),6),ri(a,[v*.39,.76,.85],[v*.33,.62,1.92],.012,Am(e,.65));if(a.box(0,.365,2.442,.85,.16,.022,Xe(12,18,23),8),a.box(0,.4,-2.444,1.27,.16,.022,Xe(17,22,27),8),a.box(0,.58,-2.45,.48,.105,.028,Xe(151,160,163),6),t===0)for(let v=0;v<7;v++)a.box(-.42+v*.14,.79,-1.85,.045,.018,.3,Xe(20,28,34),8);return r===5&&(a.box(0,.74,0,2.04,.21,2.5,Xe(235,239,241),2),a.box(0,1.43,-.1,1.12,.1,.33,Xe(33,40,48),8)),a.done()}function Vy(i,e,t,n){let s=hn[t],r=new i,a=s.width+(n?.18:0),o=s.length,c=Xe(20,28,36),l=Xe(23,42,55),h=Xe(232,237,239);if(s.kind==="bike"){ri(r,[0,.4,-.8],[0,.72,.35],.075,Xe(86,99,111),6),ri(r,[0,.72,.35],[0,.43,.83],.045,Xe(137,151,163),6),r.sphere(0,.82,.12,.26,.22,.44,e,2,16,8),r.box(0,.85,-.42,.45,.1,.62,c,7),ri(r,[-.34,1.05,.6],[.34,1.05,.6],.03,Xe(110,122,132),6),r.box(0,.68,1.01,.3,.22,.06,h,4),r.box(0,.72,-1,.23,.09,.07,Xe(225,28,24),4),r.sphere(0,1.14,-.18,.22,.32,.23,Xe(41,52,69),7,12,6),r.sphere(0,1.55,.05,.22,.24,.23,e,2,16,8),r.box(0,1.58,.24,.34,.1,.04,Xe(20,33,44),3);for(let u of[-1,1])ri(r,[u*.17,1.2,-.08],[u*.33,1.05,.57],.055,c,7),ri(r,[u*.18,.92,-.4],[u*.28,.43,-.04],.075,c,7);return r.done()}if(r.box(0,.44,0,a*.94,.25,o*.95,c,8),s.kind==="bus"){r.box(0,1.72,0,a,2.45,o,e,2),r.box(0,2.89,0,a*.98,.13,o*.98,h,2),r.box(0,2.09,o/2+.012,a*.88,1.09,.03,l,3),r.box(0,2.17,-o/2-.012,a*.85,.88,.03,l,3);for(let u of[-1,1])for(let d=-o/2+.6;d<o/2-.4;d+=.88)r.box(u*(a/2+.013),2.22,d,.03,.92,.73,l,3);for(let u of[-1,1])r.box(u*(a/2+.02),1.25,0,.035,.16,o*.97,h,2)}else if(s.kind==="truck"){r.box(0,1.6,o*.3,a,2,o*.35,e,2),r.box(0,2.03,o*.478,a*.86,.73,.035,l,3),r.box(0,1.7,-o*.17,a*1.02,2.25,o*.58,Xe(204,215,220),6);for(let u=-o*.43;u<o*.1;u+=.3)for(let d of[-1,1])r.box(d*a*.515,1.7,u,.025,2,.025,Xe(153,167,180),6)}else{let u=s.kind==="ambulance"?h:e;r.box(0,1.62,-.37,a,2,o*.76,u,2),r.box(0,1.21,o*.35,a*.96,1.5,o*.3,u,2),r.box(0,1.69,o*.505,a*.82,.64,.025,l,3);for(let d of[-1,1]){r.box(d*a*.49,1.76,o*.31,.03,.66,.96,l,3),r.box(d*a*.505,1.28,0,.03,.22,o*.94,s.kind==="ambulance"?e:Xe(232,234,218),2);for(let f=-o*.37;f<o*.16;f+=.7)r.box(d*a*.505,.91,f,.035,.65,.58,Xe(135,150,161),6)}if(s.kind==="ambulance")for(let d of[-1,1])r.box(d*a*.508,2.03,-.62,.04,.58,.16,Xe(49,145,107),4),r.box(d*a*.51,2.03,-.62,.045,.16,.58,Xe(49,145,107),4);if(s.kind==="fire"){for(let d of[-1,1])r.box(d*.46,2.72,-.12,.09,.12,o*.86,Xe(153,170,185),6);for(let d=-o*.4;d<o*.38;d+=.35)r.box(0,2.72,d,.95,.07,.07,Xe(190,202,213),6)}r.box(0,s.roof+.025,.35,a*.67,.12,.34,c,8)}for(let u of[-1,1])r.box(u*a*.34,.74,o/2+.025,.34,.12,.035,Xe(225,239,242),4),r.box(u*a*.34,.74,-o/2-.025,.3,.12,.035,Xe(227,28,30),4),r.box(u*(a*.57),1.93,o*.38,.16,.3,.2,c,8);return r.box(0,.52,o/2+.03,a*1.02,.2,.19,Xe(109,124,138),6),r.done()}function $u(i,e,t=!0){let n=new i,s=t?40:20,a=[[-.165,.34],[-.15,.405],[-.11,.43],[.11,.43],[.15,.405],[.165,.34]].map(([o,c])=>Array.from({length:s+1},(l,h)=>[o,c*Math.cos(h*$i/s),c*Math.sin(h*$i/s)]));fl(n,a,Xe(25,28,31),7,!0);for(let o of[-1,1]){let c=o*.167;ul(n,c,.285,.34,Xe(24,27,30),7,s),ul(n,c,.258,.285,Xe(153,163,173),6,s),ul(n,o*.14,0,.258,Xe(49,55,62),6,s);let l=e===0?5:10;for(let h=0;h<l;h++){let u=h*$i/l,d=(f,m)=>[o*.175,f*Math.cos(m),f*Math.sin(m)];n.quad(d(.07,u-.2),d(.26,u-.065),d(.26,u+.065),d(.07,u+.2),e===0?Xe(177,188,199):Xe(91,103,116),6)}ul(n,o*.18,0,.069,Xe(122,134,145),6,16);for(let h=0;h<(t?5:0);h++){let u=h*$i/5;n.sphere(o*.185,.043*Math.cos(u),.043*Math.sin(u),.009,.009,.009,Xe(207,213,218),6,6,3)}}if(e===0)for(let o of[-.068,.068])for(let c=0;c<s;c++){let l=c*$i/s,h=(c+1)*$i/s,u=(d,f)=>[d,.431*Math.cos(f),.431*Math.sin(f)];n.quad(u(o-.009,l),u(o+.009,l),u(o+.009,h),u(o-.009,h),Xe(10,12,15),7)}return n.done()}function Pm(i,e,t,n){if(n===0)return null;if(e>=2&&e!==5){let o=new i,c=hn[e],l=Xe(26,34,43);return c.kind==="bike"?o.box(0,n===1?.98:1.1,.72,.42,n===1?.18:.35,.09,Xe(35,56,72),3):(o.box(0,.34,c.length/2+.08,c.width*1.06,.13,.28,l,8),n===2&&o.box(0,c.roof+.11,-c.length*.2,c.width*.8,.21,1.1,l,8)),o.done()}let s=new i,r=t?1.19:1.08,a=Xe(27,33,40);s.box(0,.16,2.37,r*2,.055,.33,a,8);for(let o of[-1,1])s.box(o*r,.19,0,.08,.065,2.2,a,8);s.box(0,.18,-2.33,1.7,.16,.36,a,8);for(let o=-2;o<=2;o++)s.box(o*.25,.19,-2.44,.025,.19,.35,a,8);if(n===1)s.box(0,.79,-2.31,r*1.9,.07,.19,a,8);else{for(let c of[-1,1])ri(s,[c*.65,.72,-2.05],[c*.65,1.18,-2.15],.027,a,8);let o=[];for(let c=0;c<=4;c++){let l=-2.36+c*.09;o.push(Array.from({length:17},(h,u)=>{let d=Pi(-r,r,u/16);return[d,1.2+.022*Math.cos(c*Math.PI/4)+.035*(d/r)**2,l]}))}fl(s,o,a,8);for(let c of[-1,1])s.box(c*r,1.24,-2.18,.025,.18,.43,a,8)}return s.done()}function Im(i){i.updateMatrixWorld(!0);let e=new rt,t=[];e.name="External concept car";for(let n of["WheelFrontL","WheelFrontR","WheelRearL","WheelRearR"]){let s=i.getObjectByName(n);if(!s)throw Error(`GLB is missing wheel: ${n}`);let r=s.getWorldPosition(new N),a=new N(1,0,0).transformDirection(s.matrixWorld),o=new Ct().setFromAxisAngle(new N(0,1,0),Math.atan2(a.z,a.x)),c=new rt,l=new rt;c.position.copy(r),e.add(c),c.add(l),e.updateMatrixWorld(!0);for(let h of[...s.children])(/BrakePad/.test(h.name)?c:l).attach(h),h.position.applyQuaternion(o),h.quaternion.premultiply(o);s.removeFromParent(),t.push({outer:c,spin:l,front:n.startsWith("WheelFront")})}return{root:e,units:t}}function pl(i){i.updateWorldMatrix(!0,!0);let e=i.matrixWorld.clone().invert(),t=new Map,n=[];i.traverse(s=>{if(!s.isMesh||Array.isArray(s.material)||s.isSkinnedMesh)return;let r=s.geometry,a=new We().multiplyMatrices(e,s.matrixWorld),o=new mt;for(let[c,l]of[["position",3],["normal",3],["uv",2],["uv1",2]]){let h=r.getAttribute(c),u=r.getAttribute("position").count,d=new Float32Array(u*l);if(h)for(let f=0;f<u;f++)for(let m=0;m<l;m++)d[f*l+m]=h.getComponent(f,m);o.setAttribute(c,new Dt(d,l))}r.index?o.setIndex(new Dt(new Uint32Array(r.index.array),1)):o.setIndex(Array.from({length:r.getAttribute("position").count},(c,l)=>l)),o.applyMatrix4(a),t.has(s.material)||t.set(s.material,[]),t.get(s.material).push(o),n.push(s)});for(let s of n)s.removeFromParent();for(let[s,r]of t){let a=xm(r,!1);if(!a)throw Error("Could not merge rigid model parts");let o=new Ye(a,s);o.name=`Merged ${s.name}`,i.add(o),r.forEach(c=>c.dispose())}for(let s of new Set(n.map(r=>r.geometry)))s.dispose()}var ml=Math.PI*2,gl=Array.from({length:9},(i,e)=>{let t=e===2?new Ft({metalness:.6,roughness:.25,clearcoat:1,clearcoatRoughness:.18,vertexColors:!0}):new $e({vertexColors:!0,metalness:e===6?.85:0,roughness:e===6?.3:e===7?.82:.7});return e===3&&(t.transparent=!0,t.opacity=.55,t.depthWrite=!1,t.roughness=.08,t.metalness=.25,t.side=Ut),e===4&&(t.emissive.set(16777215),t.emissiveIntensity=.3),t.userData.shared=!0,t}),Lr=class{constructor(){this.data=[],this.count=0,this.vertices=null}tri(e,t,n,s,r=0){let a=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],o=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],c=[a[1]*o[2]-a[2]*o[1],a[2]*o[0]-a[0]*o[2],a[0]*o[1]-a[1]*o[0]],l=Math.hypot(...c)||1;c=c.map(h=>h/l);for(let[h,u]of[e,t,n].entries())this.data.push(...u,...c,...Array.isArray(s[0])?s[h]:s,r);return this}quad(e,t,n,s,r,a=0){return Array.isArray(r[0])?this.tri(e,t,n,[r[0],r[1],r[2]],a).tri(e,n,s,[r[0],r[2],r[3]],a):this.tri(e,t,n,r,a).tri(e,n,s,r,a)}box(e,t,n,s,r,a,o,c=0){let l=e-s/2,h=e+s/2,u=t-r/2,d=t+r/2,f=n-a/2,m=n+a/2;return this.quad([l,u,f],[l,d,f],[h,d,f],[h,u,f],o,c),this.quad([h,u,m],[h,d,m],[l,d,m],[l,u,m],o,c),this.quad([l,u,m],[l,d,m],[l,d,f],[l,u,f],o,c),this.quad([h,u,f],[h,d,f],[h,d,m],[h,u,m],o,c),this.quad([l,d,f],[l,d,m],[h,d,m],[h,d,f],o,c),this.quad([l,u,m],[l,u,f],[h,u,f],[h,u,m],o,c),this}cylinder(e,t,n,s,r,a,o=0,c=9){for(let l=0;l<c;l++){let h=l*ml/c,u=(l+1)*ml/c,d=[e+s*Math.cos(h),t,n+s*Math.sin(h)],f=[e+s*Math.cos(u),t,n+s*Math.sin(u)],m=[d[0],t+r,d[2]],_=[f[0],t+r,f[2]];this.quad(d,m,_,f,a,o),this.tri([e,t+r,n],_,m,a,o)}return this}sphere(e,t,n,s,r,a,o,c=0,l=9,h=5){for(let u=0;u<h;u++){let d=Math.PI*u/h,f=Math.PI*(u+1)/h;for(let m=0;m<l;m++){let _=m*ml/l,g=(m+1)*ml/l,p=(x,b)=>[e+s*Math.sin(x)*Math.cos(b),t+r*Math.cos(x),n+a*Math.sin(x)*Math.sin(b)];this.quad(p(d,_),p(d,g),p(f,g),p(f,_),o,c)}}return this}done(){this.count=this.data.length/10,this.bytes=this.data.length*4;let e=new Map;for(let t=0;t<this.data.length;t+=10){let n=this.data[t+9];e.has(n)||e.set(n,[]),e.get(n).push(...this.data.slice(t,t+10))}this.object=new rt;for(let[t,n]of e){if(t===9)continue;let s=[],r=[],a=[],o=[];for(let h=0;h<n.length;h+=10){s.push(...n.slice(h,h+3)),r.push(...n.slice(h+3,h+6));let u=new ze().setRGB(n[h+6],n[h+7],n[h+8],Tt);a.push(u.r,u.g,u.b),o.push(n[h]/2,n[h+2]/2)}let c=new mt;c.setAttribute("position",new Je(s,3)),c.setAttribute("normal",new Je(r,3)),c.setAttribute("color",new Je(a,3)),c.setAttribute("uv",new Je(o,2));let l=new Ye(c,gl[t]||gl[0]);l.castShadow=!0,l.receiveShadow=!0,this.object.add(l)}return this.data=[],this}dispose(){this.object?.traverse(e=>e.geometry?.dispose())}},Is=class extends Lr{box(e,t,n,s,r,a,o,c=0){if(Math.min(s,r,a)<.09)return super.box(e,t,n,s,r,a,o,c);let l=new Ln(s,r,a,2,Math.min(.1,s*.1,r*.1,a*.1));l.index&&(l=l.toNonIndexed()),l.translate(e,t,n);let h=l.getAttribute("position"),u=l.getAttribute("normal");for(let d=0;d<h.count;d++)this.data.push(h.getX(d),h.getY(d),h.getZ(d),u.getX(d),u.getY(d),u.getZ(d),...o,c);return l.dispose(),this}sphere(e,t,n,s,r,a,o,c=0,l=16,h=8){let u=new Si(1,Math.max(20,l),Math.max(12,h)).toNonIndexed();u.scale(s,r,a),u.translate(e,t,n);let d=u.getAttribute("position"),f=u.getAttribute("normal");for(let m=0;m<d.count;m++)this.data.push(d.getX(m),d.getY(m),d.getZ(m),f.getX(m),f.getY(m),f.getZ(m),...o,c);return u.dispose(),this}};function Dr(i,{textures:e=!1,keepShared:t=!1}={}){let n=new Set,s=new Set,r=new Set;i.traverse(a=>{a.isInstancedMesh&&a.dispose(),a.geometry&&!(t&&a.geometry.userData.shared)&&n.add(a.geometry);for(let o of[].concat(a.material||[]))if((!o.userData.shared||e)&&s.add(o),e)for(let c of Object.values(o))c?.isTexture&&r.add(c)}),n.forEach(a=>a.dispose()),s.forEach(a=>a.dispose()),r.forEach(a=>a.dispose())}var Qu=[14953769,1795786,16299033,2397810],Wy=i=>{let e=new ze(Qu[i]).getRGB(new ze,Tt);return[e.r,e.g,e.b]};function qy(i,e,t=!1){let n=ct(i),s=new rt,r=n.width+(t?.18:0),a=n.length,o=new Ft({color:Qu[e],metalness:.5,roughness:.26,clearcoat:1,clearcoatRoughness:.18}),c=new Ft({color:15066844,metalness:.25,roughness:.3,clearcoat:.7}),l=new $e({color:1515044,roughness:.7}),h=new $e({color:10463402,metalness:.9,roughness:.28}),u=new Ft({color:7642281,metalness:.12,roughness:.09,transparent:!0,opacity:.42,depthWrite:!1,side:Ut}),d=new Ht({color:15213348}),f=new Ht({color:15986904}),m=n.kind==="ambulance"?c:o;function _(x,b,y,E,S,v,M=m,I=!0){let w=I&&Math.min(E,S,v)>.085?new Ln(E,S,v,2,Math.min(.1,E*.12,S*.12,v*.12)):new xn(E,S,v),R=new Ye(w,M);return R.position.set(x,b,y),s.add(R),R}let g=(x,b,y,E=h)=>{let S=new N(...b).sub(new N(...x)),v=new Ye(new kn(y,y,S.length(),12),E);v.position.fromArray(x).addScaledVector(S,.5),v.quaternion.setFromUnitVectors(new N(0,1,0),S.normalize()),s.add(v)};function p(x,b=-a/2,y=a/2,E=1.5){let S=new Mi;S.moveTo(b,.42);for(let I of n.wheelZ.filter(w=>w>b+n.radius&&w<y-n.radius).sort((w,R)=>w-R)){let w=n.radius+.09;S.lineTo(I-w,.42),S.lineTo(I-w,n.radius),S.absarc(I,n.radius,w,Math.PI,0,!0),S.lineTo(I+w,.42)}S.lineTo(y,.42),S.lineTo(y,E),S.lineTo(b,E),S.closePath();let v=new Ea(S,{depth:.08,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:2,steps:1,curveSegments:16}),M=new Ye(v,m);M.rotation.y=-Math.PI/2,M.position.x=x*r/2+(x>0,.04),s.add(M)}if(_(0,.43,0,r*.86,.2,a*.96,l),n.kind==="bus"){for(let x of[-1,1]){p(x,-a/2,a/2,1.55),_(x*r/2,1.64,0,.08,.12,a,c),_(x*r/2,2.83,0,.08,.16,a,m);for(let b=-a/2+.5;b<a/2-.3;b+=.86)_(x*r/2,2.22,b,.035,1.08,.72,u,!1),_(x*r/2,2.22,b+.42,.075,1.16,.075,l,!1),_(x*r*.3,1.05,b,.4,.45,.44,l),_(x*r*.3,1.35,b-.12,.42,.5,.12,l);_(x*(r/2+.015),1.24,0,.05,.14,a*.98,c,!1)}_(0,2.94,0,r+.02,.18,a,c),_(0,2.19,a/2-.02,r*.9,1.12,.05,u,!1),_(0,2.19,-a/2,r*.9,1.1,.05,u,!1),_(0,1.1,a/2,r,.9,.16,m),_(0,1.1,-a/2,r,.9,.16,m),_(0,2.72,a/2+.035,1.35,.22,.045,l,!1);for(let x of[-.6,-.3,0,.3,.6])_(x,2.72,a/2+.061,.18,.05,.02,f,!1);for(let x of[-1,1])_(x*(r/2+.04),1.97,a*.25,.04,1.2,.92,u,!1);_(0,3.06,-.7,r*.65,.15,1.65,h)}else{let x=n.kind==="truck"?a*.12:a*.04,b=a/2-.08;for(let y of[-1,1])p(y,x,b,1.45),_(y*r*.48,1.94,(x+b)/2,.035,.91,b-x-.18,u,!1),_(y*r*.48,2.43,(x+b)/2,.12,.12,b-x,m),_(y*r*.48,1.94,x+.07,.12,1,.12,m),_(y*r*.48,1.94,b-.02,.13,1,.12,m),_(y*r*.47,1.3,x+.4,.055,.04,.28,h,!1),g([y*r*.46,1.95,b-.2],[y*r*.62,1.95,b-.15],.03),_(y*r*.62,1.9,b-.15,.14,.34,.2,l);_(0,2.48,(x+b)/2,r,.18,b-x+.12,m),_(0,1.94,b,r*.88,.92,.04,u,!1),_(0,1.13,b,r,.62,.24,m),_(0,1.05,b+.135,r*.5,.27,.03,l,!1);for(let y of[.96,1.04,1.12])_(0,y,b+.155,r*.48,.02,.025,h,!1);_(0,.73,b+.16,r*.96,.18,.2,h),_(0,1.55,x+.07,r*.8,.1,.4,l);for(let y of[-1,1]){_(y*r*.25,1.05,(x+b)/2,.52,.4,.5,l),_(y*r*.25,1.35,(x+b)/2-.12,.52,.55,.15,l);let E=-a/2;p(y,E,x-.08,1.5)}if(n.kind==="truck"){_(0,1.78,-a*.2,r*1.01,2.24,a*.59,h);for(let y of[-1,1])for(let E=-a*.48;E<a*.08;E+=.22)_(y*r*.513,1.78,E,.025,2.03,.028,c,!1);for(let y of[-r*.25,r*.25])_(y,1.78,-a*.5-.035,r*.48,2.1,.04,c,!1),g([y,1.05,-a*.5-.065],[y,2.55,-a*.5-.065],.018)}else{_(0,2.07,-a*.23,r,1.22,a*.54,m),_(0,2.69,-a*.23,r,.15,a*.54,c);for(let y of[-1,1])if(_(y*r*.51,1.34,-a*.22,.045,.18,a*.58,n.kind==="ambulance"?o:c,!1),n.kind==="ambulance"){let E=new $e({color:3052138,roughness:.4});_(y*r*.512,2.13,-.7,.025,.56,.18,E,!1),_(y*r*.514,2.13,-.7,.025,.18,.58,E,!1),_(y*r*.51,2.24,-a*.35,.03,.43,.72,u,!1)}else for(let E=-a*.38;E<a*.04;E+=.85){_(y*r*.51,1.92,E,.04,.9,.73,h,!1);for(let S=1.55;S<2.4;S+=.09)_(y*r*.518,S,E,.02,.018,.7,l,!1)}if(n.kind==="fire"){for(let y of[-1,1])g([y*.48,2.85,-a*.44],[y*.48,2.85,a*.36],.05);for(let y=-a*.42;y<a*.35;y+=.3)g([-.48,2.85,y],[.48,2.85,y],.026);for(let y of[-1,1])_(y*r*.54,.94,-a*.32,.16,.28,.65,h)}}}for(let x of[-1,1])_(x*r*.34,.91,a/2+.03,.35,.14,.04,f,!1),_(x*r*.34,.8,-a/2-.03,.3,.13,.04,d,!1);return _(0,.98,-a/2-.015,r*.96,1.05,.12,m),_(0,.52,-a/2-.08,r*.98,.16,.2,h),s.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!1)}),pl(s),s}var bl=class{constructor(e){this.assets=e,this.templates=new Map}async load(e){if(this.templates.has(`${e}:0`))return;let t=await this.assets.model(e);for(let n of[0,1,5]){let s=t.clone(!0);if(n===1)for(let o of["BodyRoofPanel","BodyWindowsRearSides","BodyRearwindow","BodyDoorRWindow","BodyDoorLWindow","BodyDoorRWindowGasket","BodyDoorLWindowGasket"])s.getObjectByName(o)?.removeFromParent();let{root:r,units:a}=Im(s);for(let o of a)pl(o.spin);pl(s),s.position.y=.004,r.add(s);for(let[o,c]of a.sort((l,h)=>l.outer.position.z-h.outer.position.z||l.outer.position.x-h.outer.position.x).entries())c.outer.name=`axle-${o}`,c.spin.name=`roll-${o}`;r.traverse(o=>{if(o.geometry&&(o.geometry.userData.shared=!0),!!o.isMesh){o.castShadow=!0,o.receiveShadow=!1;for(let c of[].concat(o.material))c.userData.shared=!0,c.name?.startsWith("Paint 1")&&(c.clearcoat=1,c.clearcoatRoughness=.18,c.normalScale?.set(.1,.1)),c.name==="Glass"&&(c.transmission=0,c.transparent=!0,c.opacity=.35,c.depthWrite=!1,c.roughness=.06)}}),this.templates.set(`${e}:${n}`,r)}}create(e,t,n=!1){let s=ct(e.model),r=new rt,a=new rt,o=[],c=[];r.add(a);let l=[0,1,5].includes(e.model);if(l){let h=this.templates.get(`${n?"concept-rival.glb":t}:${e.model}`).clone(!0);r.add(h),h.traverse(u=>{u.isMesh&&u.material.name==="Paint 1 Carmine"&&(u.material=u.material.clone(),u.material.userData={},u.material.color.set(Qu[e.color]))});for(let u=0;u<4;u++){let d=h.getObjectByName(`axle-${u}`),f=h.getObjectByName(`roll-${u}`),m=d.position.z>0,_=d.position.clone();if(e.parts.tyres===1){for(let p of[...f.children])f.remove(p);let g=$u(Lr,1,!n).object;g.scale.setScalar(s.radius/.43),f.add(g)}o.push({outer:d,spin:f,front:m,rest:_})}if(h.scale.x=e.parts.body?1.1:1,a.add(...h.children.filter(u=>!u.name.startsWith("axle-")).slice()),a.scale.x=e.parts.body?1.1:1,e.model===5){let u=new $e({color:14935775,metalness:.3,roughness:.3});for(let d of[-1,1]){let f=new Ye(new Ln(.035,.16,1.3,2,.015),u);f.position.set(d*1.03,.72,-.05),a.add(f)}}}else{let h=[1,4,5].includes(e.model)?Cm(Is,Wy(e.color),e.model,e.parts.body,!n).object:qy(e.model,e.color,!!e.parts.body);a.add(h);let u=$u(Lr,e.parts.tyres,!n).object;for(let d of oi(e.model,e.parts.body)){let f=new rt,m=new rt,_=u.clone(!0);_.scale.setScalar(s.radius/.43),m.add(_),f.add(m),f.position.set(d.x,s.radius+.01,d.z),r.add(f),o.push({outer:f,spin:m,front:d.z>0,rest:f.position.clone()})}}if(l&&e.parts.aero){let h=new $e({color:1514784,metalness:.25,roughness:.48}),u=(d,f,m,_,g,p)=>{let x=new Ye(new Ln(_,g,p,2,Math.min(.025,g*.4,_*.4,p*.4)),h);x.position.set(d,f,m),a.add(x)};u(0,.17,2.29,1.72,.035,.19),u(0,.21,-2.2,1.7,.05,.25);for(let d of[-1,1])u(d*1.025,.25,-.04,.055,.055,2.5);if(e.parts.aero===2){u(0,1.1,-1.94,1.86,.06,.35);for(let d of[-1,1])u(d*.94,1.14,-1.94,.025,.23,.38),u(d*.52,.87,-1.94,.055,.43,.07)}}else{let h=Pm(Is,e.model,e.parts.body,e.parts.aero);h&&a.add(h.object)}if(s.emergency){let h=new $e({color:1910836,roughness:.25}),u=new Ye(new Ln(s.width*.6,.13,.3,2,.04),h);u.position.set(0,s.roof+.04,0),a.add(u);for(let d of[-1,1]){let f=new $e({color:d<0?15278883:1534719,emissive:d<0?16716049:1137663,emissiveIntensity:.02,metalness:.15,roughness:.18}),m=new Ye(new Ln(.3,.13,.28,2,.035),f);m.position.set(d*.38,s.roof+.11,0),a.add(m),c.push(m)}}return r.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!1)}),{root:r,body:a,wheels:o,lights:c,external:l,setup:JSON.parse(JSON.stringify(e)),modelName:l?n?"concept-rival.glb":t:`original-${s.kind}`}}animate(e,t,n=!1){let s=ct(e.setup.model),r=s.kind==="bike"?-2.1:1;e.body.rotation.z=n?0:(t.roll||0)*r,e.body.rotation.x=n?0:t.pitch||0;for(let[a,o]of e.wheels.entries()){let c=t.flatVisual?.[a]||0,l=1-c*.45;o.spin.rotation.x=t.wheelAngle||0,o.outer.rotation.y=o.front?-(t.motionSteer||0)*.035:0,o.outer.scale.y=l,o.outer.position.y=o.rest.y-s.radius*(1-l)}for(let[a,o]of e.lights.entries())o.material.emissiveIntensity=t.siren&&t.phase==="race"&&(Math.floor(t.time*5)+a)%2===0?2:.02}dispose(e){e&&Dr(e.root,{keepShared:!0})}};var Pt=(i,e,t)=>[i/255,e/255,t/255];function Lm(i){let e=new i,t=24,n=8;for(let f=0;f<t;f++)for(let m=0;m<n;m++){let _=(g,p)=>{let x=.51+.14*Math.cos(p);return[x*Math.cos(g),.17+.14*Math.sin(p),x*Math.sin(g)]};e.quad(_(f*Math.PI*2/t,m*Math.PI*2/n),_((f+1)*Math.PI*2/t,m*Math.PI*2/n),_((f+1)*Math.PI*2/t,(m+1)*Math.PI*2/n),_(f*Math.PI*2/t,(m+1)*Math.PI*2/n),Pt(23,27,31),7)}e.done();let s=new i().sphere(0,.55,0,.85,.62,.76,Pt(128,132,129),0,9,5).done(),r=new i().box(0,.65,0,1.3,1.3,1.3,Pt(153,102,62));for(let f of[.13,1.16])r.box(0,f,.66,1.35,.1,.05,Pt(104,68,43));for(let f of[-.54,.54])r.box(f,.65,.68,.12,1.28,.06,Pt(196,145,90));r.done();let a=new i;for(let f of[-1,1])a.box(f*.8,.4,0,.12,.8,.12,Pt(109,125,139),6),a.box(f*.8,.08,0,.52,.12,.55,Pt(39,46,54),7);for(let f=0;f<8;f++)a.box(-.96+f*.275,.83,0,.275,.45,.13,f%2?Pt(233,235,222):Pt(222,72,39),0);a.done();let o=[Pt(237,177,55),Pt(63,139,177),Pt(129,176,111)].map(f=>new i().box(0,0,0,.39,.53,.24,f).done()),c=[Pt(218,173,133),Pt(153,102,72),Pt(102,75,55)].map(f=>{let m=new i().sphere(0,0,0,.18,.21,.18,f,0,10,6);for(let _ of[-1,1])m.box(_*.065,.04,.171,.025,.025,.02,Pt(29,31,35));return m.done()}),l=new i().box(0,-.2,0,.14,.4,.15,Pt(45,56,74)).box(0,-.42,.035,.17,.1,.24,Pt(37,43,50),7).done(),h=new i().box(0,-.18,0,.11,.36,.12,Pt(225,186,148)).done(),u=new i().box(0,.9,0,.14,1.15,.15,Pt(199,219,226),6).box(-.17,1.5,0,.15,.42,.15,Pt(199,219,226),6).box(.17,1.5,0,.15,.42,.15,Pt(199,219,226),6).box(0,1.34,0,.4,.14,.15,Pt(199,219,226),6).done(),d=new i().sphere(0,0,0,.26,.26,.26,Pt(255,190,46),4,8,4).done();return{obstacles:{tyre:e,rock:s,crate:r,barrier:a},shirts:o,heads:c,leg:l,arm:h,wrench:u,warning:d}}var Xy=bt("C01");function Dm(i,e=Xy,{game:t=!1,serviceGap:n=()=>!1,sceneryClear:s=()=>!0}={}){let r=e,a=U=>t&&r.repairFractions.some(X=>Math.abs((U-X*r.length+r.length*1.5)%r.length-r.length/2)<31),o=new rt;o.name="C01 \u2014 full closed circuit";let c=new $e({map:i.color,normalMap:i.normal,roughnessMap:i.rough,normalScale:new fe(.3,.3),roughness:1,metalness:0}),l=new $e({color:6318155,roughness:1,vertexColors:!0}),h=new $e({color:14933971,roughness:.85}),u=new $e({color:9710883,roughness:.8}),d=new $e({color:10263956,roughness:.96}),f=new $e({color:8752529,metalness:.8,roughness:.36}),m=new $e({color:2699058,metalness:.4,roughness:.52}),_=new $e({color:3494235,metalness:.35,roughness:.18}),g=new xn(1,1,1),p=(U,X,te,ue=0)=>{let oe=Qe(r,X,te);return U.position.set(oe.x,oe.y+ue,oe.z),U.rotation.y=oe.yaw,U};function x(U,X,te,ue,oe,_e,et){if(!s(Qe(r,U,X),Math.max(ue,_e)/2+4))return;let ge=p(new Ye(g,et),U,X,te);return ge.scale.set(ue,oe,_e),ge.receiveShadow=!0,o.add(ge),ge}function b(U,X,te,ue,oe,_e,et=()=>!1){let ge=Math.max(1,Math.ceil((X-U)/2)),Ue=[],Le=[],Z=[];for(let me=0;me<=ge;me++){let de=U+(X-U)*me/ge;for(let He of[te,ue]){let O=Qe(r,de,He);Ue.push(O.x,O.y+oe,O.z),Le.push((He+r.halfWidth)/2,de/2)}}for(let me=0;me<ge;me++){if(et(U+(X-U)*(me+.5)/ge))continue;let de=me*2;Z.push(de,de+1,de+2,de+1,de+3,de+2)}let ne=new mt;ne.setAttribute("position",new Je(Ue,3)),ne.setAttribute("uv",new Je(Le,2)),ne.setIndex(Z),ne.computeVertexNormals();let he=new Ye(ne,_e);return he.receiveShadow=!0,o.add(he),he}for(let U=0;U<r.length;U+=70){b(U,Math.min(U+70,r.length),-r.halfWidth,r.halfWidth,.003,c);for(let X of[-1,1])b(U,Math.min(U+70,r.length),X*(r.halfWidth-.35)-.07,X*(r.halfWidth-.35)+.07,.009,h,te=>n(te,X))}let y=new en(g,h,Math.ceil(r.length/2)*2),E=[],S=new We,v=new Ct,M=new N(.7,.085,1.98),I=new N(0,1,0),w=0;for(let U=1;U<r.length;U+=2)for(let X of[-1,1]){if(n(U,X))continue;let te=Qe(r,U,X*(r.halfWidth+.12));v.setFromAxisAngle(I,te.yaw),S.compose(new N(te.x,te.y+.035,te.z),v,M),y.setMatrixAt(w++,S),Math.floor(U/2)%2===0&&E.push(S.clone())}y.count=w,y.receiveShadow=!0,o.add(y);let R=new en(g,u,E.length);E.forEach((U,X)=>R.setMatrixAt(X,U)),R.receiveShadow=!0,o.add(R);let D=new $e({color:1118223,transparent:!0,opacity:.19,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(let U of[270,490,720,1060])for(let X of[-1,1])b(U,U+70,X*1.2-.1,X*1.2+.1,.013,D);let L=new en(g,f,Math.ceil(r.length/8)*2);w=0;let C=[],G=[];for(let U of[-1,1]){for(let X=0;X<r.length;X+=4){if(a(X)||n(X,U))continue;let te=C.length/3;for(let ue of[X,Math.min(X+4,r.length)])for(let oe of[.58,.69,.79,.9]){let _e=Qe(r,ue,U*(r.halfWidth+1.4+(oe===.69||oe===.79?.07:0)));C.push(_e.x,_e.y+oe,_e.z)}for(let ue=0;ue<3;ue++){let oe=te+ue;G.push(oe,oe+4,oe+1,oe+1,oe+4,oe+5)}}for(let X=0;X<r.length;X+=8){if(a(X)||n(X,U))continue;let te=Qe(r,X,U*(r.halfWidth+1.5));v.setFromAxisAngle(I,te.yaw),S.compose(new N(te.x,te.y+.45,te.z),v,new N(.12,.9,.16)),L.setMatrixAt(w++,S)}}L.count=w;let q=new mt;q.setAttribute("position",new Je(C,3)),q.setIndex(G),q.computeVertexNormals();let F=f.clone();F.side=Ut,o.add(new Ye(q,F),L);let j=new bs(2800,2800,44,44);j.rotateX(-Math.PI/2);let k=[],z=j.getAttribute("position");for(let U=0;U<z.count;U++){let X=z.getX(U),te=z.getZ(U),ue=.84+.12*Math.sin(X*.047)*Math.cos(te*.039)+.05*Math.sin(X*.32+te*.1);k.push(ue,ue,ue),z.setY(U,t&&r.id==="C02"?-4:-.09)}j.setAttribute("color",new Je(k,3)),j.computeVertexNormals();let B=new Ye(j,l);B.receiveShadow=!0,o.add(B);for(let U=0;U<7;U++){let X=65+U*15;x(X,24,2.5,13,5,13,d),x(X,24,5.25,15,.45,14,m),x(X,17.47,1.75,.08,3.2,10,m),x(X,17.4,3.95,.1,1.05,10,_);for(let te=0;te<9;te++)x(X,17.38,.35+te*.29,.04,.025,9.5,f);x(X,17,5.35,.2,.25,13,u)}b(40,180,r.halfWidth+1.7,32,.001,d),b(40,180,r.halfWidth+2.5,r.halfWidth+2.62,.009,h);for(let U=0;U<6;U++)for(let X=0;X<4;X++)x(390+U*9,-25-X*2,.45+X*.8,1.8,.25,8,d),x(390+U*9,-25-X*2,.7+X*.8,1.2,.3,7.6,X%2?u:m);for(let U=0;U<4;U++)x(1050+U*35,-33,3.1,8,6.2,14,d);let Q=new Map;for(let U of[...o.children])U.isMesh&&!U.isInstancedMesh&&U.geometry===g&&(U.updateMatrix(),Q.has(U.material)||Q.set(U.material,[]),Q.get(U.material).push(U.matrix.clone()),o.remove(U));for(let[U,X]of Q){let te=new en(g,U,X.length);X.forEach((ue,oe)=>te.setMatrixAt(oe,ue)),te.receiveShadow=!0,o.add(te)}let le=Qe(r,0);return{root:o,road:c,center:le}}var jy=new N(0,1,0),Ii=(i,e,t)=>new N(i.x,i.y,i.z).lerp(new N(e.x,e.y,e.z),t),ed=new WeakMap;function td(i,e){ed.has(i)||ed.set(i,Object.values(i.edges).filter(n=>!n.main).flatMap(n=>{let s=Math.ceil(n.length/6);return Array.from({length:s+1},(r,a)=>({...pt(n,n.length*a/s),width:Ni(n,n.length*a/s)}))}));let t=1/0;for(let n of ed.get(i))t=Math.min(t,Math.hypot(e.x-n.x,e.z-n.z)-n.width);return t}function Nm(i,e){let t=new rt;t.name="Emergency service roads";let n=k=>new $e({color:k,roughness:.72,metalness:.08}),s=n(15265e3),r=n(9344653),a=n(3767733),o=n(15243956),c=new Ft({color:3629683,roughness:.15,metalness:.25,clearcoat:.6}),l=n(3710064),h=n(2438722),u=n(15054155),d=new $e({map:i.color,normalMap:i.normal,roughnessMap:i.rough,normalScale:new fe(.3,.3),roughness:1}),f=new Ln(1,1,1,2,.06),m=new Si(1,12,8),_=new kn(1,1,1,10);function g(k,z,B,Q,le,U,X,te){let ue=new Ye(f,te);return ue.position.set(z,B,Q),ue.scale.set(le,U,X),ue.castShadow=!0,ue.receiveShadow=!0,k.add(ue),ue}function p(k,z,B,Q,le,U=!1){let X=Math.ceil(k.length/3),te=[],ue=[],oe=[];for(let ne=0;ne<=X;ne++)for(let he of[z,B]){let me=k.length*ne/X,de=Ni(k,me),He=typeof he=="function"?he(de):he,O=He,re=pt(k,me);if(le===d&&Number.isFinite(re.mainStation)){let Oe=Qe(e.track,re.mainStation),V=-(re.x-Oe.x)*Oe.tz+(re.z-Oe.z)*Oe.tx,ut=Math.max(.5,re.tx*Oe.tx+re.tz*Oe.tz);O=e.sites.find(vt=>vt.index===k.site).side>0?Math.min(de,Math.max(He,(e.track.halfWidth-V-.06)/ut)):Math.max(-de,Math.min(He,(-e.track.halfWidth-V+.06)/ut))}let Ee=pt(k,me,O);te.push(Ee.x,Ee.y+Q,Ee.z),ue.push((O+de)/2,(Ee.mainStation??(k.uvStation||0)+me)/2)}for(let ne=0;ne<X;ne++){let he=k.length*(ne+.5)/X,me=pt(k,he);if(Number.isFinite(me.mainStation)){let He=Qe(e.track,me.mainStation);if(U){let O=typeof z=="function"?z(Ni(k,he)):z,re=pt(k,he,O);if(Math.hypot(re.x-He.x,re.z-He.z)<e.track.halfWidth+.2)continue}}let de=ne*2;oe.push(de,de+1,de+2,de+1,de+3,de+2)}let _e=[...new Set(oe)],et=new Map(_e.map((ne,he)=>[ne,he])),ge=_e.flatMap(ne=>te.slice(ne*3,ne*3+3)),Ue=_e.flatMap(ne=>ue.slice(ne*2,ne*2+2));te.length=0,te.push(...ge),ue.length=0,ue.push(...Ue);for(let ne=0;ne<oe.length;ne++)oe[ne]=et.get(oe[ne]);let Le=new mt;Le.setAttribute("position",new Je(te,3)),Le.setAttribute("uv",new Je(ue,2)),Le.setIndex(oe),Le.computeVertexNormals();let Z=new Ye(Le,le);Z.name="service-road-"+k.id,Z.receiveShadow=!0,t.add(Z)}for(let k of Object.values(e.edges))if(!k.main){p(k,z=>-z-2,z=>z+2,-.13,r),p(k,z=>-z,z=>z,.003,d);for(let z of[-1,1])p(k,B=>z*(B-.5)-.08,B=>z*(B-.5)+.08,.025,s,!0);if(e.courseId==="C02")for(let z=12;z<k.length;z+=24){let B=pt(k,z);g(t,B.x,(B.y-4)/2,B.z,.8,B.y+4,.8,r)}}let x=[];for(let k of e.sites.filter(z=>e.kind!=="police"&&e.sceneSites.includes(z.index))){let z=pt(e.edges[k.scene.edge],k.scene.d),B=new rt;if(B.name=(e.kind==="fire"?"fire-site-":"rescue-site-")+k.index,B.position.set(z.x-z.tz*18,z.y,z.z+z.tx*18),B.rotation.y=z.yaw-Math.PI/2,t.add(B),g(B,0,.05,0,28,.2,23,r),e.courseId==="C02")for(let U of[-11,11])for(let X of[-8,8])g(B,U,-(z.y+4)/2,X,.8,z.y+4,.8,r);g(B,0,3.8,0,13,7.6,10,s),g(B,0,7.8,0,13.8,.35,10.8,h),g(B,0,1.6,-5.08,2.1,3.2,.12,a);for(let U of[-4,0,4])for(let X of[2.5,5.5])(U||X>3)&&g(B,U,X,-5.1,2,1.5,.12,c);let Q=[];for(let U=0;U<(e.kind==="fire"?3:0);U++){let X=new rt;X.position.set((U-1)*3.8,2.9+(U===1?2.8:0),-5.6);for(let[te,ue,oe]of[[1.05,2.4,14962972],[.72,1.8,16750631],[.38,1.3,16772483]]){let _e=new Ye(new Ta([new fe(0,0),new fe(te*.7,ue*.12),new fe(te,ue*.28),new fe(te*.55,ue*.62),new fe(0,ue)],12),new Ht({color:oe,transparent:!0,opacity:.93,depthWrite:!1}));_e.position.z=-(1.05-te)*.85,X.add(_e)}B.add(X),Q.push(X)}let le=new rt;le.position.set(z.x,z.y+.04,z.z),le.rotation.y=z.yaw,g(le,0,0,0,9,.025,12,l);for(let U of[-1,1])g(le,U*4.2,.025,0,.15,.03,11,s);t.add(le),x[k.index]={group:B,flames:Q,pad:le,pose:z}}let b=[];for(let k of e.hospitals){let z=pt(e.edges[k.edge],k.d),B=new rt,Q=k.id==="hospital-0"?a:o;if(B.name=k.id,B.position.set(z.x-z.tz*19,z.y,z.z+z.tx*19),B.rotation.y=z.yaw-Math.PI/2,t.add(B),g(B,0,.03,0,31,.15,23,r),e.courseId==="C02")for(let U of[-13,13])for(let X of[-8,8])g(B,U,-(z.y+4)/2,X,.8,z.y+4,.8,r);g(B,0,4,0,18,8,12,s),g(B,0,8.2,0,18.8,.5,12.8,Q),g(B,0,1.8,-6.1,3.6,3.6,.15,c);for(let U of[-6,-3,3,6])for(let X of[2.5,5.8])g(B,U,X,-6.12,1.6,1.6,.14,c);g(B,0,6.3,-6.25,2.1,2.1,.18,Q),g(B,0,6.3,-6.4,1.4,.35,.06,s),g(B,0,6.3,-6.4,.35,1.4,.06,s);let le=new rt;le.position.set(z.x,z.y+.04,z.z),le.rotation.y=z.yaw,g(le,0,0,0,9,.03,12,Q),t.add(le),b[k.index]={group:B,pose:z}}t.updateMatrixWorld(!0);let y=new Map;t.traverse(k=>{k.isMesh&&k.geometry===f&&(y.has(k.material)||y.set(k.material,[]),y.get(k.material).push(k))});for(let[k,z]of y){let B=new en(f,k,z.length);z.forEach((Q,le)=>{B.setMatrixAt(le,Q.matrixWorld),Q.removeFromParent()}),B.castShadow=B.receiveShadow=!0,t.add(B)}function E(k){let z=new rt,B=n(k),Q=n(15317905),le=[];g(z,0,1.05,0,.52,.64,.32,B);let U=new Ye(m,Q);U.scale.setScalar(.23),U.position.y=1.62,z.add(U);for(let X of[-1,1])for(let te of[!1,!0]){let ue=new rt,oe=new Ye(_,te?B:h);oe.scale.set(.09,te?.54:.62,.09),oe.position.y=-(te?.27:.31),ue.position.set(X*(te?.35:.15),te?1.28:.76,0),ue.add(oe),z.add(ue),le.push(ue)}return t.add(z),{root:z,limbs:le}}let S=E(4361610),v=E(9288548),M=E(3498382),I=E(14921553),w=new en(_,new $e({color:8968703,roughness:.12,transparent:!0,opacity:.8}),20);w.instanceMatrix.setUsage(Rs),t.add(w);let R=new en(m,new Ht({color:13037823,transparent:!0,opacity:.7}),24);R.instanceMatrix.setUsage(Rs),t.add(R);let D=new We,L=new Ct,C=[],G=new Set(["FIRE_ACTION","PATIENT_WAIT","BOARDING","HANDOFF","SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"]);function q(k,z){let B=k.missions?.active,Q=Fi(k);C=[],w.visible=R.visible=!1;for(let ge of[S,v,M,I])ge.root.visible=!1;for(let[ge,Ue]of x.entries())for(let[Le,Z]of(Ue?.flames||[]).entries()){let ne=B?.kind==="fire"&&B.site===ge&&B.fires[Le]>0;if(Z.visible=ne,ne){let he=Math.max(.02,B.fires[Le]/2.5);Z.scale.set(he,he*(1+Math.sin(k.time*9+Le)*.06),he),B.stage==="FIRE_ACTION"&&C.push({id:"fire-"+Le,label:"\u3072\u3092 \u306A\u304C\u304A\u3057",point:Z.getWorldPosition(new N).add(new N(0,.7,0))})}}if(!B)return;let le=B.stage==="HANDOFF"||B.stage==="SUCCESS"&&B.kind==="ambulance",U=le?b[B.hospital]:x[B.site],X=U?.group.position.clone()||new N(Q.x,Q.y,Q.z),te=U?.pose||Q,ue={x:X.x+te.tz*6,y:te.y+.05,z:X.z-te.tx*6},oe={x:X.x+te.tz*4,y:te.y+.05,z:X.z-te.tx*4},_e={x:Q.x-Q.tz*2,y:Q.y+.05,z:Q.z+Q.tx*2};function et(ge,Ue,Le=!0){ge.root.visible=!0,ge.root.position.copy(Ue),ge.root.rotation.y=Math.atan2(ue.x-_e.x,ue.z-_e.z),ge.limbs.forEach((Z,ne)=>Z.rotation.x=Le?Math.sin(k.time*7)*(ne%2?-.55:.55):0)}if(B.kind==="ambulance"){if(B.stage==="PATIENT_WAIT"&&(et(v,Ii(ue,ue,0),!1),C.push({id:"patient",label:"\u3072\u3068\u3092 \u30BF\u30C3\u30C1",point:v.root.position.clone().add(new N(0,1,0))})),B.stage==="BOARDING"){let ge=B.animation/5;et(S,Ii(_e,ue,Math.min(1,ge/.45))),ge>.45?(et(S,Ii(ue,_e,(ge-.45)/.55)),et(v,Ii(ue,_e,(ge-.45)/.55)),v.root.position.x+=te.tz*.6,v.root.position.z-=te.tx*.6):et(v,Ii(ue,ue,0),!1)}if(B.stage==="HANDOFF"){let ge=B.animation/5;ge<.94&&(et(S,Ii(_e,oe,ge)),et(v,Ii(_e,oe,ge)),v.root.position.x+=te.tz*.6,v.root.position.z-=te.tx*.6)}}if(B.kind==="police"&&z&&["SUSPECT_STOPPED","POLICE_CHECK","SUCCESS"].includes(B.stage)){let ge={x:z.x-z.tz*2,y:z.y+.05,z:z.z+z.tx*2};et(I,Ii(ge,ge,0),!1),B.stage==="SUSPECT_STOPPED"&&C.push({id:"suspect",label:"\u304F\u308B\u307E\u3092 \u30BF\u30C3\u30C1",point:new N(z.x,z.y+1.2,z.z)}),B.stage==="POLICE_CHECK"&&et(M,Ii(_e,ge,Math.min(1,B.animation/3)))}if(B.stage==="FIRE_ACTION"&&B.holding>=0&&B.fires[B.holding]>0){let ge=x[B.site].flames[B.holding].getWorldPosition(new N).add(new N(0,.8,0)),Ue=new N(Q.x-Q.tz*1.4,Q.y+1.7,Q.z+Q.tx*1.4),Le=Z=>Ue.clone().lerp(ge,Z).add(new N(0,Math.sin(Z*Math.PI)*2,0));for(let Z=0;Z<20;Z++){let ne=Le(Z/20),he=Le((Z+1)/20),me=he.clone().sub(ne);L.setFromUnitVectors(jy,me.clone().normalize()),D.compose(ne.add(he).multiplyScalar(.5),L,new N(.09,me.length(),.09)),w.setMatrixAt(Z,D)}for(let Z=0;Z<24;Z++){let ne=(k.time*1.7+Z/24)%1,he=Le(ne);he.x+=Math.sin(Z*7+k.time*8)*.18,he.z+=Math.cos(Z*3+k.time*9)*.18,D.compose(he,new Ct,new N(.08,.08,.08)),R.setMatrixAt(Z,D)}w.instanceMatrix.needsUpdate=R.instanceMatrix.needsUpdate=!0,w.visible=R.visible=!0,w.computeBoundingSphere(),R.computeBoundingSphere()}if(B.kind==="fire"&&B.stage==="SUCCESS"){let ge=1.1-B.celebration,Ue=x[B.site].group.position;for(let Le=0;Le<24;Le++){let Z=Le/24*Math.PI*2,ne=1+ge*4;D.compose(new N(Ue.x+Math.cos(Z)*ne,Ue.y+3+Math.sin(ge*Math.PI)*3,Ue.z+Math.sin(Z)*ne),new Ct,new N(.1,.16,.1)),R.setMatrixAt(Le,D)}R.instanceMatrix.needsUpdate=!0,R.visible=!0,R.computeBoundingSphere()}}function F(k,z){let B=k.missions?.active;if(!B||!G.has(B.stage))return null;if(B.kind==="police"&&z){let te=Fi(k),ue=new N(te.x,te.y,te.z).add(new N(z.x,z.y,z.z)).multiplyScalar(.5);return{eye:ue.clone().add(new N(-z.tz*18,9,z.tx*18)),aim:ue.clone().add(new N(0,1.2,0)),fov:48}}let Q=B.kind==="ambulance"&&(B.stage==="HANDOFF"||B.stage==="SUCCESS"),le=Q?b[B.hospital]:x[B.site],U=le.pose,X=le.group.position.clone();return{eye:X.clone().add(new N(U.tz*25,9,-U.tx*25)),aim:X.clone().add(new N(0,3,0)),fov:43}}function j(k,z,B){return C.map(Q=>{let le=Q.point.clone().project(k);return{...Q,x:(le.x*.5+.5)*z,y:(-.5*le.y+.5)*B,visible:le.z>-1&&le.z<1&&Math.abs(le.x)<1.1&&Math.abs(le.y)<1.1}})}return{root:t,sites:x,hospitals:b,frame:q,workView:F,targets:j}}function Fm(i,e=250,t=14){let n=ss(i),s=ci(i);if(!n||!s||n.uTurn||wn(i)||i.phase!=="race")return{nav:n,points:[]};let r=no(i,n,s),a=[],o=0,c=8;for(let l of r){let h=Math.abs(l.end-l.start),u=Math.sign(l.end-l.start)||1;for(;c<=o+h&&c<=e;){let d=l.start+(c-o)*u;a.push({...pt(l.edge,d,0,u),distance:c,edge:l.edge.id}),c+=t}if(o+=h,o>e)break}return{nav:n,points:a}}function Um(){let i=new rt;i.name="Road mission guidance";let e=new Mi;e.moveTo(0,3.4),e.lineTo(-2.1,.6),e.lineTo(-.9,.6),e.lineTo(-.9,-2.4),e.lineTo(.9,-2.4),e.lineTo(.9,.6),e.lineTo(2.1,.6),e.closePath();let t=new wa(e);t.rotateX(Math.PI/2);let n=new Ht({color:16777215,side:Ut,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,toneMapped:!1}),s=new en(t,n,24);s.instanceMatrix.setUsage(Rs),s.frustumCulled=!1,i.add(s);let r=new Float32Array(516),a=[];for(let p=0;p<85;p++){let x=p*2;a.push(x,x+1,x+2,x+1,x+3,x+2)}let o=new mt;o.setAttribute("position",new Dt(r,3).setUsage(Rs)),o.setIndex(a);let c=new Ye(o,new Ht({color:2877690,transparent:!0,opacity:.45,depthWrite:!1,side:Ut,toneMapped:!1}));c.frustumCulled=!1,i.add(c);let l=new rt;l.name="Ground U-turn",i.add(l);for(let p=0;p<9;p++){let x=new Ye(t,n),b=p*Math.PI/8;x.position.set(-2.5*Math.cos(b),.08,2.5*Math.sin(b)),x.rotation.y=b,x.scale.setScalar(.4),l.add(x)}let h=new We,u=new Ct,d=new N,f=new ze,m=new N(0,1,0),_={visible:!1,count:0,uTurn:!1,edges:[]};function g(p){let{nav:x,points:b}=Fm(p),y=p.phase==="race"&&!!ci(p)&&!wn(p);if(i.visible=y,l.visible=y&&!!x?.uTurn,s.count=b.length,c.visible=b.length>1,l.visible){let S=pt(Rt(p).edges[p.road.edge],p.road.d,0,p.road.direction);l.position.set(S.x+S.tx*8,S.y+.08,S.z+S.tz*8),l.rotation.y=S.yaw}for(let S=0;S<b.length;S++){let v=b[S],M=x.upcoming&&Math.abs(v.distance-x.upcoming.distance)<45,I=M?1.15+.5*(1-Math.min(160,x.upcoming.distance)/160):1;u.setFromAxisAngle(m,v.yaw),u.multiply(new Ct().setFromAxisAngle(new N(1,0,0),v.pitch||0)),h.compose(new N(v.x,v.y+.065,v.z),u,d.set(I,I,I)),s.setMatrixAt(S,h),s.setColorAt(S,f.set(M?16770647:4648959))}s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0);let E=Fm(p,250,3).points;for(let S=0;S<E.length;S++){let v=E[S];for(let M=0;M<2;M++){let I=M?.45:-.45,w=(S*2+M)*3;r[w]=v.x-v.tz*I,r[w+1]=v.y+.045,r[w+2]=v.z+v.tx*I}}o.setDrawRange(0,Math.max(0,E.length-1)*6),o.attributes.position.needsUpdate=!0,_={visible:y,count:b.length,uTurn:l.visible,edges:[...new Set(b.map(S=>S.edge))],upcoming:x?.upcoming||null}}return{root:i,update:g,stats:()=>_}}function Om(i,e=[]){let n=i.bounds.minX-140,s=i.bounds.minZ-140,r=i.bounds.maxX-i.bounds.minX+280,a=i.bounds.maxZ-i.bounds.minZ+280,o=Math.ceil(r/8),c=Math.ceil(a/8),l=r/o,h=a/c,u=[...i.table.filter((b,y)=>y%3===0),...e],d=new Float32Array((o+1)*(c+1)),f=[],m=[],_=[];for(let b=0;b<=c;b++)for(let y=0;y<=o;y++){let E=n+y*l,S=s+b*h,v=u[0],M=1/0;for(let G of u){let q=(G.x-E)**2+(G.z-S)**2;q<M&&(M=q,v=G)}M=Math.sqrt(M);let I=Math.sin(E*.027)*Math.cos(S*.024),w=Math.min(y*l,(o-y)*l,b*h,(c-b)*h),R=ti.smoothstep(w,0,60),D=v.y-3.6-M*.045+Math.max(0,M-25)*.1*(.5+.5*I),L=-4+(D+4)*R;d[b*(o+1)+y]=L,f.push(E,L,S);let C=new ze(6450770).multiplyScalar(.9+I*.08);m.push(C.r,C.g,C.b)}for(let b=0;b<c;b++)for(let y=0;y<o;y++){let E=b*(o+1)+y,S=E+o+1;_.push(E,S,E+1,E+1,S,S+1)}let g=new mt;g.setAttribute("position",new Je(f,3)),g.setAttribute("color",new Je(m,3)),g.setIndex(_),g.computeVertexNormals();let p=new Ye(g,new $e({vertexColors:!0,roughness:1}));p.name="mountain-terrain",p.receiveShadow=!0;function x(b,y){let E=ti.clamp((b-n)/l,0,o-1e-6),S=ti.clamp((y-s)/h,0,c-1e-6),v=Math.floor(E),M=Math.floor(S),I=E-v,w=S-M,R=M*(o+1)+v,D=d[R],L=d[R+1],C=d[R+o+1],G=d[R+o+2];return I+w<=1?D+I*(L-D)+w*(C-D):G+(1-I)*(C-G)+(1-w)*(L-G)}return{mesh:p,heightAt:x}}function Bm(i,e,t=Rt({courseId:e.id})){let n=(w,R)=>td(t,w)>R+3,s=new Map,a=Dm(i,e,{game:!0,serviceGap:(w,R)=>{let D=Math.round(w/2)*2+":"+R;return s.has(D)||s.set(D,td(t,Qe(e,w,R*(e.halfWidth+1.5)))<2),s.get(D)},sceneryClear:n}),o=a.root,c=new xn(1,1,1),l=new Map,h=new $e({color:10133144,roughness:.9}),u=new $e({color:8950417,metalness:.8,roughness:.34}),d=new $e({color:3690330,metalness:.35,roughness:.2}),f=new $e({color:2568504,roughness:.8}),m=new $e({color:3375719,roughness:.8}),_=new $e({color:14803929,roughness:.85}),g=new Ht({color:16303194}),p=new N(0,1,0);function x(w,R,D,L,C,G,q,F=c){let j=Qe(e,w,R);if(!n(j,Math.max(L,G)/2+3))return;let k=new Ct().setFromAxisAngle(p,j.yaw),z=new We;z.compose(new N(j.x,j.y+D,j.z),k,new N(L,C,G));let B=q.uuid+F.uuid;l.has(B)||l.set(B,{mat:q,geometry:F,matrices:[]}),l.get(B).matrices.push(z)}function b(w,R,D,L,C,G){let q=[],F=[],j=Math.ceil((R-w)/3);for(let B=0;B<=j;B++)for(let Q of[D,L]){let le=Qe(e,w+(R-w)*B/j,Q);q.push(le.x,le.y+(typeof C=="function"?C(Q,le):C),le.z)}for(let B=0;B<j;B++){let Q=B*2;F.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}let k=new mt;k.setAttribute("position",new Je(q,3)),k.setIndex(F),k.computeVertexNormals();let z=new Ye(k,G);z.receiveShadow=!0,o.add(z)}for(let w of e.repairFractions){let R=w*e.length,D=e.halfWidth;b(R-30,R+30,D-.1,D+5,.008,m),x(R,D+8,1.55,4,3.1,12,h),x(R,D+5.2,3.2,6,.15,13,u);for(let L of[-12,12])x(R+L,D+4,1.6,.12,3.2,.12,u);for(let L=0;L<6;L++)x(R+L*4-10,D+2.7,.035,.22,.025,1.6,_);x(R-24,D+3,2.5,1.7,1,.1,m)}let y=new Si(1,10,7),E=new kn(.6,.8,1,8),S=[3427893,4941118,5666120].map(w=>new $e({color:w,roughness:1})),v=new $e({color:6705734,roughness:1});if(e.theme==="city"){let w=[10593697,12826786,7834513].map(R=>new $e({color:R,roughness:.83}));for(let R=10,D=0;R<e.length;R+=31,D++)for(let L of[-1,1]){let C=8+D*7%6*3,G=L*(e.halfWidth+19);x(R,G,C/2,9,C,17,w[D%3]),x(R,G,C+.1,9.6,.35,17.5,f);for(let q=2;q<C;q+=2.7)for(let F=-5;F<=5;F+=2.5)x(R+F,G-L*4.56,q,.06,1.3,1.4,d);x(R,L*(e.halfWidth+1.9),3,.12,6,.12,u),x(R,L*(e.halfWidth+.4),5.9,3,.1,.5,u)}for(let R of e.crossings){let D=R*e.length;for(let L=-e.halfWidth;L<e.halfWidth;L+=1.5)x(D,L,.025,.8,.025,5,_);for(let L of[-1,1])x(D-7,L*(e.halfWidth+2),1.8,.12,3.6,.12,u),x(D-7,L*(e.halfWidth+2),3.5,1,.8,.1,g);b(D-3,D+3,e.halfWidth,e.halfWidth+24,-.015,a.road)}}else if(e.theme==="mountain"){let w=Object.values(t.edges).filter(L=>!L.main).flatMap(L=>{let C=Math.ceil(L.length/6);return Array.from({length:C+1},(G,q)=>pt(L,L.length*q/C))}),R=Om(e,w);o.add(R.mesh);let D=new $e({color:6450770,roughness:1,side:Ut});for(let L=0;L<e.length;L+=35)for(let C of[-1,1])b(L,Math.min(L+35,e.length),C*(e.halfWidth+.6),C*(e.halfWidth+20),(G,q)=>{let F=ti.smoothstep(Math.abs(G)-e.halfWidth,0,18);return-.02+(R.heightAt(q.x,q.z)-q.y)*F},D);for(let L=0,C=0;L<e.length;L+=38,C++)for(let G of[-1,1]){let q=G*(e.halfWidth+27),F=Qe(e,L,q),j=R.heightAt(F.x,F.z)-F.y;x(L,q,j+2.6,.5,5.2,.5,v,E),x(L,q,j+6.2,3,4,3,S[C%3],y)}if(e.tunnel)for(let L=e.tunnel[0]*e.length;L<e.tunnel[1]*e.length;L+=4){for(let C of[-1,1])x(L,C*(e.halfWidth+1),2.8,.6,5.6,4.1,h);x(L,0,5.7,e.halfWidth*2+2,.5,4.1,h),Math.floor(L/4)%4===0&&x(L,0,5.4,3,.05,.2,g)}}else{for(let w=180,R=0;w<e.length;w+=32,R++)for(let D of[-1,1]){let L=D*(e.halfWidth+20+R%3*6);x(w,L,1.5,.35,3,.35,v,E),x(w,L,4,2.8,3.3,2.8,S[R%3],y)}if(e.theme==="grandprix")for(let w=180;w<e.length;w+=240)for(let R=0;R<6;R++)x(w,-e.halfWidth-11-R*1.7,.5+R*.65,1.7,.4,33,h),x(w,-e.halfWidth-11-R*1.7,.8+R*.65,1.2,.25,32,R%2?f:m)}for(let w=0;w<4;w++)for(let R=0;R<12;R++)x(w*.7,-e.halfWidth+(R+.5)*e.halfWidth/6,.03,e.halfWidth/6,.015,.7,(w+R)%2?_:f);for(let{mat:w,geometry:R,matrices:D}of l.values()){let L=new en(R,w,D.length);D.forEach((C,G)=>L.setMatrixAt(G,C)),L.receiveShadow=!0,o.add(L)}let M=Nm(i,t);o.add(M.root);let I=Um();return o.add(I.root),{...a,graph:t,missions:M,guidance:I}}var xl=class{constructor(e,{event:t,progress:n,failure:s}){if(this.canvas=e,this.event=t,this.failure=s,this.quality=Nn[new URLSearchParams(location.search).get("quality")]?new URLSearchParams(location.search).get("quality"):"standard",this.assets=new hl(n,t),this.factory=new bl(this.assets),this.frame=0,this.qualityChanges=0,this.gl=e.getContext("webgl2",{alpha:!1,antialias:!0,depth:!0,stencil:!1,preserveDrawingBuffer:!1,powerPreference:"default"}),!this.gl)throw Error("WebGL 2 \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u4F5C\u6210\u3067\u304D\u307E\u305B\u3093\u3002\u52D5\u4F5C\u8A3A\u65AD\u3067iPadOS\u30FBSafari\u306E\u72B6\u614B\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u539F\u56E0\u3092GPU\u6545\u969C\u3068\u306F\u65AD\u5B9A\u3067\u304D\u307E\u305B\u3093\u3002");this.renderer=new il({canvas:e,context:this.gl,antialias:!0}),this.renderer.setPixelRatio(1),this.renderer.outputColorSpace=Tt,this.renderer.toneMapping=Na,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.type=Ms,this.renderer.debug.onShaderError=(r,a,o,c)=>{this.shaderError=[r.getProgramInfoLog(a),r.getShaderInfoLog(o),r.getShaderInfoLog(c)].filter(Boolean).join(`
`),this.shaderStage=r.getShaderParameter(o,r.COMPILE_STATUS)&&r.getShaderParameter(c,r.COMPILE_STATUS)?"program-link-failed":"shader-compile-failed",s(this.shaderStage,this.shaderError)},this.camera=new Xt(62,1,.1,1500),this.world=new hr,this.world.fog=new ra(11379347,.0014),this.garage=new hr,this.rivalCars=[],this.playerKey="",this.cameraInitial=!0,this.sun=new ys(16769722,3),this.sun.castShadow=!0,Object.assign(this.sun.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:.5,far:55}),this.sun.shadow.bias=-8e-5,this.sun.shadow.normalBias=.015,this.event("context-created",this.gl.getParameter(this.gl.VERSION)),this.configure()}async init(e){await this.assets.init(),this.configure(),await Promise.all([this.factory.load(Nn[this.quality].model),this.factory.load("concept-rival.glb")]),this.environment();let t=new Ye(new kn(6.5,6.5,.15,72),new $e({color:5594460,metalness:.35,roughness:.48}));t.position.y=-.09,t.receiveShadow=!0,this.garage.add(t),this.actors=Lm(Is);for(let n of[...Object.values(this.actors.obstacles),...this.actors.shirts,...this.actors.heads,this.actors.arm,this.actors.leg,this.actors.wrench,this.actors.warning])n.object.traverse(s=>{s.geometry&&(s.geometry.userData.shared=!0)});if(this.eventRoot=new rt,this.world.add(this.eventRoot),this.eventObjects=new Map,this.setVehicle(e),this.garage.add(this.player.root),this.camera.position.set(6.2,3.1,8.5),this.camera.lookAt(0,.65,0),this.garage.add(this.sun,this.sun.target),await this.renderer.compileAsync(this.garage,this.camera),this.shaderError)throw Error(this.shaderError);this.ready=!0}environment(){let e=new Cr(this.renderer);this.environmentTarget=e.fromEquirectangular(this.assets.hdr),e.dispose();for(let t of[this.world,this.garage])t.environment=this.environmentTarget.texture,t.environmentIntensity=.8,t.background=this.assets.hdr,t.backgroundIntensity=.9,t.backgroundRotation.y=.55,t.environmentRotation.y=.55}configure(){let e=Nn[this.quality];if(this.pixelBudget=e.pixels,this.renderer.shadowMap.enabled=!0,this.sun.shadow.mapSize.width!==e.shadow&&(this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.sun.shadow.mapSize.set(e.shadow,e.shadow),this.assets.road)for(let t of Object.values(this.assets.road))t.anisotropy=e.anisotropy;this.resize()}resize(){let[e,t]=Qd(innerWidth,innerHeight,this.pixelBudget,this.renderer.capabilities.maxTextureSize);(e!==this.canvas.width||t!==this.canvas.height)&&this.renderer.setSize(e,t,!1)}async setQuality(e,t){!Nn[e]||e===this.quality||(await this.factory.load(Nn[e].model),this.quality=e,this.configure(),this.playerKey="",this.setVehicle(t),this.event("quality-changed",e),await this.renderer.compileAsync(this.player.root.parent||this.garage,this.camera))}setVehicle(e){let t=JSON.stringify([e.model,e.color,e.parts,this.quality]);if(t===this.playerKey)return;let n=this.player;this.player=this.factory.create(e,Nn[this.quality].model),this.playerKey=t,n?.root.removeFromParent(),this.factory.dispose(n),this.cameraInitial=!0}setCourse(e,t={courseId:e}){let n=Rt(t);if(this.course?.graph===n)return;this.course&&(this.course.root.removeFromParent(),Dr(this.course.root));let s=bt(e),r=Bm(this.assets.road,s,n);this.course={...r,track:s},this.world.add(r.root),r.root.updateMatrixWorld(!0),this.event("course-build",e)}prepare(e,t=!1){this.setVehicle(e),t&&this.setCourse(e.courseId,e.phase==="menu"||e.phase==="finish"?{...e,missions:null,road:null}:e)}ensureRivals(e,t){let n=JSON.stringify([e.model,t.map(s=>s.c)]);if(this.rivalKey!==n){for(let s of this.rivalCars)s.root.removeFromParent(),this.factory.dispose(s);this.rivalCars=t.map(s=>{let r={model:e.model,color:s.c,parts:{tyres:1,body:0,aero:1}},a=this.factory.create(r,Nn[this.quality].model,!0);return this.world.add(a.root),a}),this.rivalKey=n}}positioned(e,t,n,s){let r=n&&t.road?Fi(t):Qe(this.course.track,t.z,t.offset??t.l),a=ct(e.setup.model);return e.root.position.set(r.x,r.y+.012+(n&&!s?(t.bounce||0)*.4:0),r.z),e.root.rotation.set(r.pitch,r.yaw-(t.motionSteer||0)*.014,0,"YXZ"),this.factory.animate(e,t,s),n&&a.kind==="bike"&&t.fallTimer>0&&(e.body.rotation.z=Math.sin((.9-t.fallTimer)/.9*Math.PI)),r}eventObject(e,t){if(!this.eventObjects.has(e)){let s=t();this.eventObjects.set(e,s),this.eventRoot.add(s)}let n=this.eventObjects.get(e);return n.visible=!0,n}events(e,t){for(let a of this.eventObjects.values())a.visible=!1;let n=this.course.track,s=(a,o)=>Qe(n,a,o),r=a=>Math.hypot(a.x-t.x,a.z-t.z)<220;for(let[a,o]of e.obstacles.entries()){let c=s(o.distance,o.offset);if(!r(c))continue;let l=this.eventObject(`obstacle-${a}-${o.type}`,()=>this.actors.obstacles[o.type].object.clone(!0));l.position.set(c.x,c.y+.02,c.z),l.rotation.set(c.pitch,c.yaw,0,"YXZ")}for(let[a,o]of e.pedestrians.entries()){if(!["warning","crossing","safe"].includes(o.phase))continue;let c=s(o.distance,o.offset);if(!r(c))continue;let l=this.eventObject(`person-${a}`,()=>{let u=new rt,d=this.actors.shirts[a%3].object.clone(!0),f=this.actors.heads[a%3].object.clone(!0);d.position.y=.94,f.position.y=1.46,u.add(d,f),u.userData.limbs=[];for(let m of[-1,1])for(let[_,g,p]of[[this.actors.leg,m*.12,.55],[this.actors.arm,m*.25,1.18]]){let x=_.object.clone(!0);x.position.set(g,p,0),u.add(x),u.userData.limbs.push(x)}return u});l.position.set(c.x,c.y,c.z),l.rotation.y=c.yaw+(o.side>0?Math.PI/2:-Math.PI/2);let h=o.phase==="crossing"?Math.sin(e.time*7+a)*.55:0;if(l.userData.limbs.forEach((u,d)=>u.rotation.x=h*(d%3===0?1:-1)),o.phase==="warning"){let u=s(o.distance-7,n.halfWidth+2);this.eventObject(`warning-${a}`,()=>this.actors.warning.object.clone(!0)).position.set(u.x,u.y+3.5,u.z)}}for(let[a,o]of n.repairFractions.entries()){let c=s(o*n.length,n.halfWidth+3);if(!r(c))continue;let l=this.eventObject(`repair-${a}`,()=>this.actors.wrench.object.clone(!0));l.position.set(c.x,c.y+.04,c.z),l.rotation.y=c.yaw+(e.repairTimer>0?e.time*2:0)}}draw(e,t,{garage:n,tab:s,yaw:r,rect:a,reduced:o,dt:c}){this.resize();let l=this.renderer,h=this.camera;this.setVehicle(e),l.setViewport(0,0,this.canvas.width,this.canvas.height),l.setScissorTest(!1),l.setClearColor(857893),l.clear();let u,d;if(n&&s!=="course"){u=this.garage,this.player.root.parent!==u&&u.add(this.player.root),this.player.root.position.set(0,.012,0),this.player.root.rotation.set(0,r,0),this.factory.animate(this.player,{wheelAngle:0,phase:"menu"},o);let m=ct(e.model),_=Math.max(1,m.length/4.86,m.roof/1.5),g=this.canvas.width/innerWidth,p=this.canvas.height/innerHeight,x=Math.max(1,Math.floor(a.width*g)),b=Math.max(1,Math.floor(a.height*p)),y=Math.floor(a.left*g),E=Math.floor(this.canvas.height-a.bottom*p);l.setViewport(y,E,x,b),l.setScissor(y,E,x,b),l.setScissorTest(!0),h.aspect=x/b,h.fov=x/b>1.5?28:38,h.far=160,h.position.set(6.2*_,3.1*_,8.5*_),h.lookAt(0,Math.max(.65,m.roof*.43),0),d=new N}else{let m=n?{...e,missions:null,road:null}:e;if(this.setCourse(e.courseId,m),this.course.guidance.update(m),u=this.world,n){this.player.root.visible=!1,this.rivalCars.forEach(v=>v.root.visible=!1),this.eventRoot.visible=!1;let _=this.canvas.width/innerWidth,g=this.canvas.height/innerHeight,p=Math.max(1,Math.floor(a.width*_)),x=Math.max(1,Math.floor(a.height*g));l.setViewport(Math.floor(a.left*_),Math.floor(this.canvas.height-a.bottom*g),p,x),l.setScissor(Math.floor(a.left*_),Math.floor(this.canvas.height-a.bottom*g),p,x),l.setScissorTest(!0),this.course.missions.frame(m,null),this.suspectCar&&(this.suspectCar.root.visible=!1);let b=new dn().setFromObject(this.course.missions.root),y=this.course.track.bounds,E={...y,minX:Math.min(y.minX,b.min.x),maxX:Math.max(y.maxX,b.max.x),minZ:Math.min(y.minZ,b.min.z),maxZ:Math.max(y.maxZ,b.max.z)},S=bd({...this.course.track,bounds:E},p/x,r);h.aspect=p/x,h.fov=40,h.far=S.far,h.position.fromArray(S.eye),h.lookAt(...S.aim),d=new N(...S.aim)}else{this.player.root.parent!==u&&u.add(this.player.root),this.player.root.visible=!0,this.eventRoot.visible=!0;let _=this.positioned(this.player,e,!0,o);this.ensureRivals(e,t);for(let[v,M]of t.entries()){let I=Qe(this.course.track,M.z,M.l),w=this.rivalCars[v];w.root.visible=Math.hypot(I.x-_.x,I.z-_.z)<220,w.root.visible&&this.positioned(w,{...M,offset:M.l,phase:"race",time:e.time},!1,o)}this.events(e,_),e.cameraOffset+=(e.offset-e.cameraOffset)*(1-Math.exp(-c*3.9));let g=e.missions?.active,p=null;if(g?.kind==="police"){this.suspectCar||(this.suspectCar=this.factory.create({model:0,color:3,parts:{tyres:1,body:0,aero:1}},Nn[this.quality].model,!0),this.world.add(this.suspectCar.root)),p=pt(this.course.graph.edges["loop-"+g.site],g.suspect.d,g.suspect.offset||0);let v=this.suspectCar;v.root.visible=!0,v.root.position.set(p.x,p.y+.012,p.z),v.root.rotation.set(p.pitch,p.yaw,0,"YXZ"),this.factory.animate(v,{phase:"race",wheelAngle:g.suspect.d/ct(0).radius,v:g.suspect.speed,motionSteer:g.stage==="SUSPECT_STOPPING"?g.suspect.motionSteer:0,time:e.time},o)}else this.suspectCar&&(this.suspectCar.root.visible=!1);this.course.missions.frame(e,p);let x=this.course.missions.workView(e,p);this.workCamera=!!x;let b=Math.max(3.45,ct(e.model).roof+2.1),y=Math.max(10.5,ct(e.model).length*2),E=e.road?{eye:[_.x-_.tx*y,_.y+b,_.z-_.tz*y],aim:[_.x+_.tx*13,_.y+1.15,_.z+_.tz*13]}:gd(this.course.track,e.z,e.cameraOffset,b,y),S=x?x.eye:new N(...E.eye);this.cameraInitial||x||this.wasWorkCamera!==!!x?h.position.copy(S):h.position.lerp(S,1-Math.exp(-c*6)),this.wasWorkCamera=!!x,this.cameraInitial=!1,h.aspect=this.canvas.width/this.canvas.height,h.fov=x?x.fov:62+(o?0:Math.min(3,e.v/20)+(e.boost>0?3:0)),h.far=900,x?h.lookAt(x.aim):h.lookAt(...E.aim),d=this.player.root.position.clone()}}this.sun.parent!==u&&u.add(this.sun,this.sun.target),this.sun.target.position.copy(d),this.sun.position.copy(d).add(new N(-8,12,5)),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),h.updateProjectionMatrix();let f=u.fog;if(n&&s==="course"&&(u.fog=null),l.render(u,h),u.fog=f,l.setScissorTest(!1),l.setViewport(0,0,this.canvas.width,this.canvas.height),this.player.root.visible=!0,this.frame++,!n){let m=this.player.root.position.clone().add(new N(0,.6,0)).project(h),_=e.road?pt(this.course.graph.edges[e.road.edge],e.road.d,0,e.road.direction):Qe(this.course.track,e.z),g=new N(_.x,_.y+.6,_.z).project(h);this.screen={player:[m.x,m.y],laneCenter:[g.x,g.y]},this.workTargets=this.course.missions.targets(h,innerWidth,innerHeight).map(({point:p,...x})=>x)}}lose(){this.ready=!1;for(let e of[this.world,this.garage])e.environment=null,Dr(e,{textures:!0});for(let e of this.factory.templates.values())Dr(e,{textures:!0});gl.forEach(e=>e.dispose()),this.environmentTarget?.dispose(),this.environmentTarget=null,this.assets.hdr?.dispose(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null}async restore(){if(this.environment(),await this.renderer.compileAsync(this.player.root.parent||this.garage,this.camera),this.gl.getError()!==this.gl.NO_ERROR)throw Error("WebGL error while restoring resources");this.ready=!0}stats(){let e=new Set,t=0;for(let n of[this.world,this.garage,...this.factory.templates.values()])n.traverse(s=>{if(s.geometry&&!e.has(s.geometry)){e.add(s.geometry),t+=s.geometry.index?.array.byteLength||0;for(let r of Object.values(s.geometry.attributes))t+=r.array?.byteLength||r.data?.array.byteLength||0}});return{engine:`Three.js r${"187"} / WebGL 2`,quality:this.quality,pixelBudget:this.pixelBudget,qualityChanges:this.qualityChanges,drawCalls:this.renderer.info.render.calls,vertices:this.renderer.info.render.triangles*3,meshBytes:t,modelCacheSize:this.factory.templates.size,bufferSize:[this.canvas.width,this.canvas.height],sceneCourse:this.course?.track.id,activeRoads:this.course?{key:this.course.graph.key,kind:this.course.graph.kind,edges:Object.keys(this.course.graph.edges),sceneSites:this.course.graph.sceneSites,hospitals:this.course.graph.hospitals.map(n=>n.index)}:null,roadGuidance:this.course?.guidance.stats(),assetBytes:this.assets.loadedBytes,assetModel:this.player?.modelName,rendererResources:{...this.renderer.info.memory},wheels:this.player?.wheels.map(n=>({front:n.front,steering:n.outer.rotation.y,angle:n.spin.rotation.x,center:n.outer.position.toArray()})),workCamera:this.workCamera||!1,workTargets:this.workTargets||[],contextLost:this.gl.isContextLost()}}};var kt=window.raceDiagnostics;async function Ky(){kt.event("module-started");let i=O=>document.getElementById(O),e=i("world"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=!1,s=0,r=0,a=16.7,o=0,c=!0,l="vehicle",h,u=!1,d=[],f=new URLSearchParams(location.search).get("adaptive")!=="off",m=Ll(),_=O=>{i("asset-loading").hidden=!O,i("start").disabled=O};try{kt.event("context-create"),h=new xl(e,{event:(O,re="")=>kt.event(O,re),progress:(O,re)=>{i("asset-loading-text").textContent=`\u304F\u308B\u307E\u3068 \u30B3\u30FC\u30B9\u3092 \u3058\u3085\u3093\u3073\u3057\u3066\u3044\u307E\u3059\u2026 ${(re/1e6).toFixed(1)} MB`},failure:(O,re)=>{n=!1,kt.failure(O,re)}}),kt.graphics({engine:"Three.js r187",webgl:h.gl.getParameter(h.gl.VERSION),actualContext:h.gl.getContextAttributes(),maxViewport:Array.from(h.gl.getParameter(h.gl.MAX_VIEWPORT_DIMS)),maxRenderbuffer:h.gl.getParameter(h.gl.MAX_RENDERBUFFER_SIZE)})}catch(O){_(!1),kt.failure("context-unavailable",O.message);return}let g=O=>'<svg viewBox="0 0 96 36" aria-hidden="true"><path d="M8 24 14 16 31 13 43 5 66 7 77 15 90 19 91 28H8Z"/><circle cx="26" cy="28" r="7"/><circle cx="75" cy="28" r="7"/></svg>';document.querySelector(".models").innerHTML=hn.map((O,re)=>`<button class="vehicle-choice" data-model="${re}" aria-pressed="${re===0}">${g(O.label)}<span>${O.label}</span><small>${O.name}</small></button>`).join("");let p=document.createElement("p");p.id="vehicle-performance",p.className="vehicle-performance",document.querySelector(".vehicle-group").append(p),i("course-list").innerHTML=Ya.map(O=>`<button class="course-choice" data-course="${O.id}" aria-pressed="${O.id==="C01"}"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="${Ml(O)}"/></svg><strong>${O.icon} ${O.name}</strong><span>${"\u2605".repeat(O.difficulty)} \u30FB ${O.length}m</span></button>`).join("");let x=hn.map((O,re)=>Vd(re)),b=Dl(x[0].color,0,x[0].parts),y=Hd(b,()=>b.phase==="race"&&!wn(b)&&!b.road?.turnTimer);Gd(document.body);let E=-.24,S=null,v=null,M={player:[0,0],laneCenter:[0,0]},I=()=>b.phase==="menu"||b.phase==="finish",w=()=>I()&&n;function R(){let O=hn[b.model];i("garage-car-name").textContent=l==="course"?bt(b.courseId).label:O.name,i("garage-car-type").textContent=l==="course"?`\u3080\u305A\u304B\u3057\u3055 ${"\u2605".repeat(bt(b.courseId).difficulty)}`:O.label,i("vehicle-performance").textContent=`\u306F\u3084\u3055 ${Math.round(O.top*3.6)} km/h \u30FB \u304B\u305D\u304F ${"\u25CF".repeat(Math.round(O.accel*3))} \u30FB \u307E\u304C\u308A\u3084\u3059\u3055 ${"\u25CF".repeat(Math.round(O.turn/2))}`,i("siren").hidden=!O.emergency,e.setAttribute("aria-label",I()?`${O.name}\u306E3D\u30D7\u30EC\u30D3\u30E5\u30FC`:"3D\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC\u30EC\u30FC\u30B9");for(let re of document.querySelectorAll("[data-model]"))re.setAttribute("aria-pressed",String(Number(re.dataset.model)===b.model));for(let re of document.querySelectorAll("[data-color]")){let Ee=Number(re.dataset.color)===b.color;re.classList.toggle("selected",Ee),re.setAttribute("aria-pressed",String(Ee))}for(let re of document.querySelectorAll("[data-part]"))re.setAttribute("aria-pressed",String(Number(re.dataset.value)===b.parts[re.dataset.part]));i("garage-preview").setAttribute("aria-label",`${Wd(b)}\u3002\u5DE6\u53F3\u306B\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u56DE\u8EE2`),i("selected-course").textContent=`${bt(b.courseId).icon} ${bt(b.courseId).name} \u30FB 2\u3057\u3085\u3046`;for(let re of document.querySelectorAll("[data-course]"))re.setAttribute("aria-pressed",String(re.dataset.course===b.courseId));for(let re of document.querySelectorAll("[data-ai]"))re.setAttribute("aria-pressed",String(re.dataset.ai===b.aiDifficulty));document.querySelector(".preview-hint").textContent=l==="course"?"\u2194 \u3086\u3073\u3067 \u30B3\u30FC\u30B9\u3092 \u307E\u308F\u3057\u3066\u307F\u3088\u3046":"\u2194 \u3086\u3073\u3067 \u304F\u308B\u307E\u3092 \u307E\u308F\u3057\u3066\u307F\u3088\u3046",h.prepare(b,l==="course")}function D(){x[b.model]=ks(b),R()}kt.observe(()=>({phase:b.phase,elapsed:b.time,seed:b.seed,...Bd(b),rank:b.rank,distance:Math.round(b.z),offset:Number(b.offset.toFixed(2)),speed:Number(b.v.toFixed(1)),steering:[b.steerL,b.steerR],model:hn[b.model].name,courseId:b.courseId,aiDifficulty:b.aiDifficulty,rivals:m.map(O=>({distance:O.z,speed:O.speed,offset:O.l,overtaking:O.overtaking,penaltyTime:O.penaltyTime,flatMask:[...O.flatMask]})),courseLength:bt(b.courseId).length,checkpoints:b.checkpointsPassed,sceneCourse:h.course?.track.id,kind:ct(b.model).kind,wheelCount:oi(b.model).length,siren:b.siren,brake:b.brake,parts:{...b.parts},screen:M,garage:I(),garageYaw:Number(E.toFixed(2)),modelCacheSize:h.factory.templates.size,color:b.color,flatMask:[...b.flatMask],flatVisual:[...b.flatVisual],repairTimer:b.repairTimer,repairProgress:b.repairProgress,penaltyTime:b.penaltyTime,stopTimer:b.stopTimer,fallTimer:b.fallTimer,obstaclePreview:b.obstacles.map(O=>({distance:O.distance,offset:O.offset,type:O.type,hit:O.hit})),pedestrians:b.pedestrians.map(O=>({distance:O.distance,offset:O.offset,phase:O.phase,hit:O.hit})),frames:r,frameMs:Number(a.toFixed(1)),...ef(d),...h.stats()}));let L=null,C=null,G=!0,q=null;function F(){if(!G)try{if(!L){let O=window.AudioContext||window.webkitAudioContext;if(!O)return;L=new O;let re=L.createOscillator(),Ee=L.createBiquadFilter(),Oe=L.createGain();re.type="sawtooth",re.frequency.value=55,Ee.type="lowpass",Ee.frequency.value=150,Oe.gain.value=0,re.connect(Ee),Ee.connect(Oe),Oe.connect(L.destination),re.start(),C={o:re,f:Ee,g:Oe};let V=L.createOscillator(),ut=L.createGain();V.type="sine",ut.gain.value=0,V.connect(ut),ut.connect(L.destination),V.start(),q={o:V,g:ut}}L.resume().catch(O=>kt.event("audio-unavailable",O.message))}catch(O){kt.event("audio-unavailable",O.message),G=!0;let re=null;i("sound").textContent="\u{1F507}"}}function j(O=540){if(!(!L||G))try{let re=L.createOscillator(),Ee=L.createGain(),Oe=L.currentTime;re.type="sine",re.frequency.value=O,Ee.gain.setValueAtTime(.001,Oe),Ee.gain.exponentialRampToValueAtTime(.08,Oe+.014),Ee.gain.exponentialRampToValueAtTime(.001,Oe+.19),re.connect(Ee),Ee.connect(L.destination),re.start(Oe),re.stop(Oe+.21)}catch{}}function k(){if(!(!L||G))try{let O=Math.floor(L.sampleRate*.32),re=L.createBuffer(1,O,L.sampleRate),Ee=re.getChannelData(0);for(let ut=0;ut<O;ut++)Ee[ut]=(Math.random()*2-1)*(1-ut/O);let Oe=L.createBufferSource(),V=L.createGain();Oe.buffer=re,V.gain.value=.035,Oe.connect(V),V.connect(L.destination),Oe.start()}catch{}}function z(){if(!C)return;let O=!G&&b.siren&&ct(b.model).emergency&&b.phase==="race";q.g.gain.setTargetAtTime(O?.025:0,L.currentTime,.1),q.o.frequency.setTargetAtTime(650+230*Math.sin(b.time*4.5),L.currentTime,.08);let re=!G&&(b.phase==="race"||b.phase==="countdown");C.o.frequency.setTargetAtTime(55+b.v*2.7+(b.boost>0?35:0),L.currentTime,.16),C.f.frequency.setTargetAtTime(150+b.v*14,L.currentTime,.12),C.g.gain.setTargetAtTime(re?.019:0,L.currentTime,.15)}let B=kd(b,{clearControls:X,muted:()=>G,beep:j,event:(O,re)=>kt.event(O,re)});function Q(){let O=bt(b.courseId);b.lap=Math.min(2,1+(b.ledger?b.ledger.laps:Math.floor(b.z/O.length))),b.rank=ki(b,m),i("lap").textContent=`${b.lap} / 2`,i("rank").textContent=`${b.rank} / 5`,i("time").textContent=(b.time+b.penaltyTime).toFixed(1)+"s",i("speed").textContent=String(Math.round(b.v*3.6)).padStart(3,"0"),i("progressbar").style.width=Math.min(100,100*b.z/(O.length*2))+"%",i("boostmeter").style.width=b.charge+"%",i("mini-map-path").setAttribute("d",Ml(O)),i("mini-map-pits").innerHTML=O.repairFractions.map(V=>{let ut=Za(O,V*O.length);return`<rect x="${ut.x-2.2}" y="${ut.y-2.2}" width="4.4" height="4.4" fill="#75e8a2"/>`}).join("");let re=Za(O,b.z);i("mini-map-car").setAttribute("cx",re.x),i("mini-map-car").setAttribute("cy",re.y),i("race-course").textContent=O.label,i("boost").disabled=b.charge<60||b.phase!=="race"||qt(b)||b.brake||b.repairTimer>0||b.stopTimer>0||b.fallTimer>0,i("penalty-time").textContent=`+${b.penaltyTime}\u3073\u3087\u3046`;let Ee=qt(b);i("condition").hidden=!Ee&&b.repairTimer===0,i("condition-text").textContent=b.repairTimer>0?`\u{1F527} \u3057\u3085\u3046\u308A ${Math.ceil(b.repairTimer)}`:`\u{1F6DE} \u30D1\u30F3\u30AF ${b.flatMask.filter(Boolean).length}`,i("repair-progress").style.width=`${b.repairProgress*100}%`;let Oe=b.pedestrians.some(V=>V.phase==="warning"||V.phase==="crossing");i("pedestrian-warning").hidden=!Oe,B.update(),i("forced-stop").hidden=b.stopTimer<=0,i("forced-stop").textContent=`\u270B \u3042\u3093\u305C\u3093 \u304B\u304F\u306B\u3093 ${Math.ceil(b.stopTimer)}`}let le=0;function U(O){i("toast").textContent=O,i("toast").classList.add("show"),le=performance.now()+1250}function X(){y.clear(),Ui(b),S=null;for(let O of["left","right"])i(O).classList.remove("is-down")}function te(){let{color:O,model:re,parts:Ee}=ks(b),Oe=b.courseId,V=b.aiDifficulty;Object.assign(b,Dl(O,re,Ee,Oe,Math.floor(Math.random()*2147483647),V),{phase:"countdown"}),h.setCourse(b.courseId,b),document.body.classList.remove("in-garage"),i("modal").classList.remove("paused"),e.setAttribute("aria-label","3D\u30B9\u30FC\u30D1\u30FC\u30AB\u30FC\u30EC\u30FC\u30B9"),m.splice(0,m.length,...Ll(b.model,b.aiDifficulty,b.courseId)),i("modal").classList.add("hidden"),i("countdown").classList.add("visible"),i("pause").textContent="\u2161",Q(),F()}function ue(){b.phase="finish",document.body.classList.add("in-garage"),i("modal").classList.remove("paused"),R(),X(),i("modal").classList.remove("hidden"),i("kicker").textContent="\u{1F3C1} FINISH",i("title").innerHTML=b.heroClear?"\u{1F31F} <em>HERO CLEAR!</em>":b.rank===1?"\u{1F3C6} <em>WINNER!</em>":"\u{1F3C1} <em>FINISH!</em>",i("subtitle").textContent=`${b.heroClear?"\u304A\u3057\u3054\u3068 2 / 2 \u30FB 2\u3057\u3085\u3046 \u305F\u3063\u305B\u3044\uFF01\u3000":""}${b.rank}\u3044 / 5\u3060\u3044\u3000 ${(b.time+b.penaltyTime).toFixed(1)}\u3073\u3087\u3046\uFF08\u30DA\u30CA\u30EB\u30C6\u30A3 +${b.penaltyTime}\uFF09`,i("choose").textContent="\u3059\u304D\u306A \u304F\u308B\u307E\u3092 \u3048\u3089\u3093\u3067\u306D",i("start").textContent="\u21BB \u3082\u3046\u3044\u3061\u3069 \u30EC\u30FC\u30B9",i("instructions").textContent=b.penaltyTime>0?"\u3064\u304E\u306F \u3072\u3068\u306B \u307F\u3061\u3092 \u3086\u305A\u308D\u3046\uFF01":"\u3055\u3044\u3054\u307E\u3067 \u306F\u3057\u308C\u305F\u306D\uFF01",j(770)}let oe="race";function _e(){b.phase==="race"||b.phase==="countdown"?(oe=b.phase,B.cancelSpeech(),i("modal").classList.add("paused"),b.phase="pause",X(),i("pause").textContent="\u25B6",i("countdown").classList.remove("visible"),i("modal").classList.remove("hidden"),i("kicker").textContent="\u3072\u3068\u3084\u3059\u307F",i("title").innerHTML="\u23F8 <em>\u304A\u3084\u3059\u307F</em>",i("subtitle").textContent="\u3058\u3085\u3093\u3073\u304C \u3067\u304D\u305F\u3089 \u3064\u3065\u3051\u3088\u3046",i("choose").textContent="\u304F\u308B\u307E\u306E \u3044\u308D\u3082 \u304B\u3048\u3089\u308C\u308B\u3088\uFF01",i("start").textContent="\u25B6 \u3064\u3065\u304D\u304B\u3089",i("instructions").textContent="\u25C0 \u25B6 \u3067 \u307E\u304C\u308B \uFF0F \u306F\u306A\u3059\u3068 \u305D\u306E\u3070\u3092 \u30AD\u30FC\u30D7"):b.phase==="pause"&&et(),z()}function et(){!n||document.hidden||(b.phase=oe,i("modal").classList.remove("paused"),X(),b.prev=0,i("modal").classList.add("hidden"),i("pause").textContent="\u2161",i("countdown").classList.toggle("visible",b.phase==="countdown"),Q(),F())}function ge(O){for(let re=O;re>0;re-=.05){let Ee=$d(b,m,Math.min(.05,re));Ee==="contact"&&(U("\u3060\u3044\u3058\u3087\u3046\u3076\uFF01 \u306F\u3057\u308D\u3046\uFF01"),j(230)),Ee==="recovered"&&U("\u30B3\u30FC\u30B9\u306B \u3082\u3069\u3063\u305F\u3088\uFF01"),Ee==="bike-recovered"&&U("\u3060\u3044\u3058\u3087\u3046\u3076\uFF01 \u306F\u3057\u308D\u3046\uFF01"),Ee==="puncture"&&(U("\u{1F6DE} \u30D1\u30F3\u30AF\uFF01 \u307F\u3069\u308A\u306E \u3057\u3085\u3046\u308A\u3078"),k()),Ee==="repair-start"&&(X(),U("\u{1F527} \u3057\u3085\u3046\u308A \u3059\u308B\u3088\uFF01"),j(540)),Ee==="repaired"&&(U("\u2728 \u306A\u304A\u3063\u305F\u3088\uFF01"),j(880)),Ee==="crossing-warning"&&j(460),Ee==="safe-crossing"&&(U("\u{1F44D} \u3042\u3093\u305C\u3093\u306B \u3068\u304A\u308C\u305F\u306D"),j(740)),Ee==="pedestrian-contact"&&(X(),U("\u270B \u3068\u307E\u3063\u3066 \u3042\u3093\u305C\u3093\u3092 \u304B\u304F\u306B\u3093"),j(240)),Ee==="finish"&&ue()}b.phase==="countdown"&&(i("countdown").textContent=b.count>1?Math.min(3,Math.ceil(b.count)):"GO!"),b.phase==="race"&&i("countdown").classList.remove("visible"),Q()}function Ue(){n&&!document.hidden&&!s&&(s=requestAnimationFrame(Z))}function Le(){s&&cancelAnimationFrame(s),s=0,b.prev=0}function Z(O){if(s=0,!(!n||document.hidden||h.gl.isContextLost()))try{let re=b.prev?(O-b.prev)/1e3:0,Ee=Math.min(.2,re);if(b.prev=O,re>0&&(d.push(re*1e3),d.length>180&&d.shift(),a+=(Math.min(re*1e3,1e3)-a)*.03,o=a>45?o+Math.min(re,1):Math.max(0,o-Ee)),ge(b.phase==="countdown"?Math.min(re,.5):Ee),z(),h.draw(b,m,{garage:I(),tab:l,yaw:E,rect:i("garage-preview").getBoundingClientRect(),reduced:t,dt:Ee}),B.draw(I()?[]:h.workTargets),e.dispatchEvent(new Event("race-frame")),M=h.screen||M,i("toast").classList.contains("show")&&O>le&&i("toast").classList.remove("show"),c||r%120===0){let Oe=h.gl.getError();if(Oe!==h.gl.NO_ERROR)throw Error("WebGL error "+Oe);c&&(c=!1,kt.event("running","First PBR frame rendered without WebGL errors."))}r++,f&&o>3&&h.quality!=="low"?(o=0,ne(h.quality==="high"?"standard":"low",!0)):Ue()}catch(re){n=!1,Le(),_(!1),kt.failure("render-failed",re.message)}}async function ne(O,re=!1){if(!(!n||u||!Nn[O]||O===h.quality)){u=!0,n=!1,X(),Le(),_(!0);try{await h.setQuality(O,b),h.prepare(b,l==="course"),re&&(h.qualityChanges++,kt.event("quality-reduced",O));for(let Ee of document.querySelectorAll("[data-quality]"))Ee.setAttribute("aria-pressed",String(Ee.dataset.quality===O));n=!0,c=!0,b.prev=0,o=0,d=[],Ue()}catch(Ee){kt.failure("quality-load-failed",Ee.message)}finally{u=!1,_(!1)}}}for(let O of document.querySelectorAll("[data-color]"))O.addEventListener("click",()=>{w()&&(b.color=Number(O.dataset.color),D())});for(let O of document.querySelectorAll("[data-model]"))O.addEventListener("click",()=>{if(!w())return;x[b.model]=ks(b);let re=ks(x[Number(O.dataset.model)]);b.model=re.model,b.color=re.color,b.parts=re.parts,E=-.24,R()});for(let O of document.querySelectorAll("[data-part]"))O.addEventListener("click",()=>{w()&&(b.parts[O.dataset.part]=Number(O.dataset.value),D())});function he(O){l=O,i("vehicle-options").hidden=O!=="vehicle",i("course-options").hidden=O!=="course";for(let re of document.querySelectorAll("[data-garage-tab]"))re.setAttribute("aria-selected",String(re.dataset.garageTab===O));R()}for(let O of document.querySelectorAll("[data-garage-tab]"))O.addEventListener("click",()=>he(O.dataset.garageTab));for(let O of document.querySelectorAll("[data-course]"))O.addEventListener("click",()=>{w()&&(b.courseId=O.dataset.course,R())});for(let O of document.querySelectorAll("[data-ai]"))O.addEventListener("click",()=>{!w()||!zr[O.dataset.ai]||(b.aiDifficulty=O.dataset.ai,R())});let me=i("garage-preview");me.addEventListener("pointerdown",O=>{if(w()){O.preventDefault(),S={id:O.pointerId,x:O.clientX};try{me.setPointerCapture(O.pointerId)}catch{}}}),me.addEventListener("pointermove",O=>{!S||O.pointerId!==S.id||(E+=(O.clientX-S.x)*.009,S.x=O.clientX)});for(let O of["pointerup","pointercancel","lostpointercapture"])me.addEventListener(O,()=>{S=null});me.addEventListener("keydown",O=>{w()&&(O.key==="ArrowLeft"||O.key==="ArrowRight")&&(O.preventDefault(),E+=O.key==="ArrowLeft"?-.15:.15)}),i("garage-help").addEventListener("click",()=>i("help").click()),i("start").addEventListener("click",()=>{n&&(b.phase==="pause"?et():te())}),i("pause").addEventListener("click",_e),y.bind(i("left"),"steerL"),y.bind(i("right"),"steerR"),i("pit-guide").addEventListener("click",()=>{b.pitAssist=!0,U("\u{1F527} \u307F\u3069\u308A\u306E \u3057\u3085\u3046\u308A\u3078 \u3044\u3053\u3046")}),y.bind(i("brake"),"brake"),i("siren").addEventListener("click",()=>{ct(b.model).emergency&&(b.siren=!b.siren,i("siren").setAttribute("aria-pressed",String(b.siren)),F())}),i("garage-return").addEventListener("click",()=>{X(),b.phase="menu",b.v=0,b.boost=0,b.siren=!1,b.prev=0,document.body.classList.add("in-garage"),i("modal").classList.remove("paused"),i("title").innerHTML="\u307C\u304F\u306E <em>GRAND RACE</em>",i("kicker").textContent="\u304D\u307F\u3060\u3051\u306E \u30DE\u30B7\u30F3\u3092 \u3064\u304F\u308D\u3046",i("subtitle").textContent="\u304F\u308B\u307E\u3068 \u30D1\u30FC\u30C4\u3092 \u3048\u3089\u3093\u3067\u3001\u30B5\u30FC\u30AD\u30C3\u30C8\u3078\uFF01",i("start").textContent="\u25B6 \u30EC\u30FC\u30B9 \u30B9\u30BF\u30FC\u30C8\uFF01",R(),Q(),z()});function de(){Zd(b)&&(U("\u26A1 \u30BF\u30FC\u30DC\uFF01"),j(700),Q())}i("boost").addEventListener("pointerdown",O=>{O.preventDefault(),de()}),i("sound").addEventListener("click",()=>{G=!G,G&&B.cancelSpeech(),i("sound").textContent=G?"\u{1F507}":"\u{1F50A}",F()}),addEventListener("keydown",O=>{if(i("diagnostics").classList.contains("hidden")&&["ArrowLeft","ArrowRight","ArrowDown"," ","Escape"].includes(O.key)){if(b.phase!=="race"&&b.phase!=="countdown"&&O.key!=="Escape"||(O.preventDefault(),O.repeat&&O.key==="Escape"))return;b.phase==="race"&&(O.key==="ArrowLeft"&&y.key("steerL",!0),O.key==="ArrowRight"&&y.key("steerR",!0),O.key==="ArrowDown"&&y.key("brake",!0),O.key===" "&&de()),O.key==="Escape"&&_e()}}),addEventListener("keyup",O=>{O.key==="ArrowLeft"&&y.key("steerL",!1),O.key==="ArrowRight"&&y.key("steerR",!1),O.key==="ArrowDown"&&y.key("brake",!1)});function He(){X(),(b.phase==="race"||b.phase==="countdown")&&_e(),Le(),L&&L.suspend().catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.hidden?He():(b.prev=0,Ue())}),addEventListener("pagehide",He),addEventListener("pageshow",()=>{b.prev=0,Ue()}),addEventListener("blur",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&_e()}),addEventListener("race-support-open",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&_e()}),addEventListener("race-fatal",()=>{X(),(b.phase==="race"||b.phase==="countdown")&&_e(),Le()});for(let O of document.querySelectorAll("[data-quality]"))O.setAttribute("aria-pressed",String(O.dataset.quality===h.quality)),O.addEventListener("click",()=>ne(O.dataset.quality));i("auto-quality").checked=f,i("auto-quality").addEventListener("change",()=>{f=i("auto-quality").checked,o=0}),i("loading-help").addEventListener("click",()=>i("help").click()),e.addEventListener("webglcontextcreationerror",O=>kt.event("context-create-error",O.statusMessage||"No status message")),e.addEventListener("webglcontextlost",O=>{O.preventDefault(),n=!1,h.lose(),He(),_(!1),kt.failure("context-lost","WebGL context lost; GPU resources released during the lost generation. Waiting for restoration.")}),e.addEventListener("webglcontextrestored",async()=>{try{kt.event("context-restoring"),await h.restore(),n=!0,c=!0,i("unsupported").classList.remove("visible"),b.prev=0,kt.event("context-restored","PBR resources restored; race stays paused until a tap."),Ue()}catch(O){kt.failure("context-restore-failed",O.message)}}),_(!0);try{await h.init(b),n=!0,Q(),R(),_(!1),Ue()}catch(O){_(!1),kt.failure(h.shaderStage||"asset-or-scene-failed",h.shaderError||O.message);return}"serviceWorker"in navigator&&window.isSecureContext&&navigator.serviceWorker.register("./service-worker.js").catch(O=>kt.event("offline-unavailable",O.message))}Ky().catch(i=>kt.failure("startup-failed",i.message));
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
