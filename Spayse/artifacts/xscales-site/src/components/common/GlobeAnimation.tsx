import React, { useEffect, useRef } from 'react';

export default function GlobeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      canvas.width = rect.width * DPR;
      canvas.height = rect.height * DPR;
    }
    resize();
    window.addEventListener('resize', resize);
    
    let observer: ResizeObserver | null = null;
    if (window.ResizeObserver) {
      observer = new ResizeObserver(resize);
      observer.observe(canvas);
    }

    const C = {
      cyan:[125,211,252], cyanB:[186,230,253], cyanD:[56,120,170],
      gold:[232,201,106], goldD:[201,168,76], white:[240,248,255]
    };
    const rgba=(c: number[],a: number)=>`rgba(${c[0]},${c[1]},${c[2]},${a})`;

    function sph(lat: number,lon: number,r=1){const φ=lat*Math.PI/180,λ=lon*Math.PI/180;return [r*Math.cos(φ)*Math.cos(λ),r*Math.sin(φ),r*Math.cos(φ)*Math.sin(λ)];}
    function rot(p: number[],ry: number,rx: number){const [x,y,z]=p;const cy=Math.cos(ry),sy=Math.sin(ry);const x1=x*cy+z*sy,z1=-x*sy+z*cy;const cx=Math.cos(rx),sx=Math.sin(rx);return [x1,y*cx-z1*sx,y*sx+z1*cx];}

    const CONT=[[50,-100,28,42],[30,-95,12,22],[60,-135,12,15],[25,-105,10,18],[-10,-60,22,16],[-30,-62,12,10],[5,-70,8,10],[52,15,14,20],[45,10,8,16],[60,25,10,15],[5,20,25,22],[-10,25,18,16],[-25,25,10,12],[30,45,10,14],[50,90,22,48],[30,100,16,28],[20,78,12,14],[35,125,8,10],[0,115,6,16],[-6,130,5,12],[-25,135,10,18],[72,-42,10,14]];
    function isLand(lat: number,lon: number){for(const [cLat,cLon,rLat,rLon] of CONT){let d=lon-cLon;while(d>180)d-=360;while(d<-180)d+=360;if(((lat-cLat)/rLat)**2+(d/rLon)**2<1)return 1;}return 0;}

    const LAND: {lat: number, lon: number}[] = [];
    const N=2400;
    for(let i=0;i<N;i++){
      const y=1-(i/(N-1))*2;
      const theta=i*2.399963229728653;
      const lat=Math.asin(y)*180/Math.PI;
      const lon=((theta*180/Math.PI)%360)-180;
      if(isLand(lat,lon)) LAND.push({lat,lon});
    }

    const CITIES=[
      {lat:-23.5,lon:-46.6},{lat:40.7,lon:-74.0},{lat:51.5,lon:-0.1},
      {lat:50.1,lon:8.7},{lat:25.2,lon:55.3},{lat:22.3,lon:114.2},
      {lat:1.35,lon:103.8},{lat:35.7,lon:139.7},{lat:-33.9,lon:151.2},
      {lat:25.8,lon:-80.2},{lat:-26.2,lon:28.0},{lat:19.1,lon:72.9},
      {lat:19.4,lon:-99.1},{lat:-34.6,lon:-58.4}
    ];

    const MERID: number[][][]=[],PARAL: number[][][]= [];
    for(let lon=-150;lon<=180;lon+=30){const arc=[];for(let lat=-85;lat<=85;lat+=4)arc.push([lat,lon]);MERID.push(arc);}
    for(let lat=-60;lat<=60;lat+=30){const arc=[];for(let lon=-180;lon<=180;lon+=4)arc.push([lat,lon]);PARAL.push(arc);}

    let arcs: any[] =[];
    function newArc(now: number){let a=Math.floor(Math.random()*CITIES.length),b=Math.floor(Math.random()*CITIES.length);while(b===a)b=Math.floor(Math.random()*CITIES.length);return {from:CITIES[a],to:CITIES[b],start:now+Math.random()*800,dur:2200+Math.random()*1400};}

    const PART: any[] =[];
    for(let i=0;i<80;i++){PART.push({angle:Math.random()*Math.PI*2,r:1.15+Math.random()*0.55,y:(Math.random()-0.5)*2.2,size:0.6+Math.random()*2,speed:0.2+Math.random()*0.5,phase:Math.random()*Math.PI*2,gold:Math.random()<0.25});}

    const T0=performance.now();
    let animationFrameId: number;

    function draw(now: number){
      if (!canvas || !ctx) return;
      const W=canvas.width,H=canvas.height;
      if(W===0||H===0){animationFrameId = requestAnimationFrame(draw);return;}
      const cx=W/2,cy=H/2,R=Math.min(W,H)*0.34;
      const t=(now-T0)/1000;
      ctx.clearRect(0,0,W,H);

      // halo
      const halo=ctx.createRadialGradient(cx,cy,R*0.6,cx,cy,R*2.2);
      halo.addColorStop(0,'rgba(56,120,170,0.35)');
      halo.addColorStop(0.5,'rgba(20,50,90,0.15)');
      halo.addColorStop(1,'rgba(3,6,13,0)');
      ctx.fillStyle=halo;ctx.fillRect(0,0,W,H);

      const ry=t*0.12, rx=-0.35;

      // atmosphere
      const atm=ctx.createRadialGradient(cx,cy,R*0.95,cx,cy,R*1.35);
      atm.addColorStop(0,'rgba(125,211,252,0)');
      atm.addColorStop(0.4,'rgba(125,211,252,0.35)');
      atm.addColorStop(0.7,'rgba(56,120,170,0.15)');
      atm.addColorStop(1,'rgba(3,6,13,0)');
      ctx.fillStyle=atm;ctx.beginPath();ctx.arc(cx,cy,R*1.35,0,Math.PI*2);ctx.fill();

      // inner sphere
      ctx.fillStyle='rgba(6,14,30,0.95)';
      ctx.beginPath();ctx.arc(cx,cy,R*0.995,0,Math.PI*2);ctx.fill();

      ctx.lineWidth=0.8*DPR;
      for(const arc of MERID){
        ctx.beginPath();let started=false;
        for(const [lat,lon] of arc){const p=rot(sph(lat,lon,1),ry,rx);if(p[2]<-0.02){started=false;continue;}const px=cx+p[0]*R,py=cy-p[1]*R;if(!started){ctx.moveTo(px,py);started=true;}else ctx.lineTo(px,py);}
        ctx.strokeStyle='rgba(125,211,252,0.08)';ctx.stroke();
      }
      for(const arc of PARAL){
        ctx.beginPath();let started=false;
        for(const [lat,lon] of arc){const p=rot(sph(lat,lon,1),ry,rx);if(p[2]<-0.02){started=false;continue;}const px=cx+p[0]*R,py=cy-p[1]*R;if(!started){ctx.moveTo(px,py);started=true;}else ctx.lineTo(px,py);}
        ctx.strokeStyle='rgba(125,211,252,0.09)';ctx.stroke();
      }

      // land dots
      for(const d of LAND){
        const p=rot(sph(d.lat,d.lon,1),ry,rx);
        if(p[2]<0) continue;
        const px=cx+p[0]*R, py=cy-p[1]*R;
        const depth=p[2];
        const size=(0.8+depth)*DPR;
        const spark=(Math.sin(t*1.8+(d.lat+d.lon))+1)*0.5;
        const bright=0.35+depth*0.5+spark*0.15;
        ctx.fillStyle=rgba(C.cyan,Math.min(bright,0.95));
        ctx.beginPath();ctx.arc(px,py,size,0,Math.PI*2);ctx.fill();
      }

      // cities
      for(const city of CITIES){
        const p=rot(sph(city.lat,city.lon,1),ry,rx);
        if(p[2]<0) continue;
        const px=cx+p[0]*R, py=cy-p[1]*R;
        const pulse=(Math.sin(t*2+city.lat)+1)*0.5;
        ctx.beginPath();ctx.arc(px,py,(2+pulse*1.5)*DPR,0,Math.PI*2);
        ctx.fillStyle=rgba(C.gold,0.9);ctx.fill();
        ctx.beginPath();ctx.arc(px,py,1.1*DPR,0,Math.PI*2);
        ctx.fillStyle=rgba(C.white,1);ctx.fill();
      }

      // arcs
      while(arcs.length<10) arcs.push(newArc(now));
      arcs=arcs.filter(a=>now<a.start+a.dur);
      for(const arc of arcs){
        const local=(now-arc.start)/arc.dur;
        if(local<0) continue;
        const pA=sph(arc.from.lat,arc.from.lon,1),pB=sph(arc.to.lat,arc.to.lon,1);
        const d=Math.max(-1,Math.min(1,pA[0]*pB[0]+pA[1]*pB[1]+pA[2]*pB[2]));
        const ang=Math.acos(d);
        const h=0.15+ang*0.22;
        const pts=[];
        for(let i=0;i<=40;i++){
          const s=i/40;
          const a1=Math.sin((1-s)*ang)/Math.sin(ang);
          const a2=Math.sin(s*ang)/Math.sin(ang);
          let x=pA[0]*a1+pB[0]*a2,y=pA[1]*a1+pB[1]*a2,z=pA[2]*a1+pB[2]*a2;
          const L=Math.sqrt(x*x+y*y+z*z);x/=L;y/=L;z/=L;
          const lift=Math.sin(s*Math.PI)*h;const r=1+lift;
          pts.push(rot([x*r,y*r,z*r],ry,rx));
        }
        let alpha;
        if(local<0.2) alpha=local/0.2;
        else if(local>0.75) alpha=1-(local-0.75)/0.25;
        else alpha=1;
        const head=Math.min(1,local*1.3);
        const endIdx=Math.floor(head*40);
        ctx.lineWidth=1.2*DPR;ctx.lineCap='round';
        ctx.beginPath();
        for(let i=0;i<=endIdx;i++){const p=pts[i];const px=cx+p[0]*R,py=cy-p[1]*R;if(i===0) ctx.moveTo(px,py);else ctx.lineTo(px,py);}
        ctx.strokeStyle=rgba(C.gold,0.55*alpha);ctx.stroke();
        if(endIdx>=0 && endIdx<pts.length){
          const p=pts[endIdx];const px=cx+p[0]*R,py=cy-p[1]*R;
          ctx.beginPath();ctx.arc(px,py,6*DPR,0,Math.PI*2);ctx.fillStyle=rgba(C.gold,0.35*alpha);ctx.fill();
          ctx.beginPath();ctx.arc(px,py,2.2*DPR,0,Math.PI*2);ctx.fillStyle=rgba(C.white,0.95*alpha);ctx.fill();
        }
        if(local<0.35){
          const pS=rot(pA,ry,rx);if(pS[2]>=0){const sx=cx+pS[0]*R,sy=cy-pS[1]*R;const rR=(local/0.35)*14*DPR;ctx.beginPath();ctx.arc(sx,sy,rR,0,Math.PI*2);ctx.strokeStyle=rgba(C.gold,(1-local/0.35)*0.6);ctx.lineWidth=1*DPR;ctx.stroke();}
        }
        if(local>0.7 && local<0.95){
          const pT=rot(pB,ry,rx);if(pT[2]>=0){const tx=cx+pT[0]*R,ty=cy-pT[1]*R;const rR=((local-0.7)/0.25)*12*DPR;ctx.beginPath();ctx.arc(tx,ty,rR,0,Math.PI*2);ctx.strokeStyle=rgba(C.gold,(1-(local-0.7)/0.25)*0.7);ctx.lineWidth=1.2*DPR;ctx.stroke();}
        }
      }

      // rim glow
      ctx.save();
      const rim=ctx.createRadialGradient(cx,cy,R*0.92,cx,cy,R*1.02);
      rim.addColorStop(0,'rgba(125,211,252,0)');
      rim.addColorStop(0.6,'rgba(125,211,252,0.4)');
      rim.addColorStop(1,'rgba(125,211,252,0)');
      ctx.globalCompositeOperation='lighter';
      ctx.fillStyle=rim;ctx.beginPath();ctx.arc(cx,cy,R*1.02,0,Math.PI*2);ctx.fill();
      ctx.restore();

      // particles
      for(const p of PART){
        const a=p.angle+t*p.speed*0.1;
        const x=cx+Math.cos(a)*R*p.r;
        const y=cy+p.y*R*0.9+Math.sin(t*0.5+p.phase)*2*DPR;
        const tw=(Math.sin(t*2+p.phase)+1)*0.5;
        ctx.beginPath();ctx.arc(x,y,p.size*DPR,0,Math.PI*2);
        ctx.fillStyle=rgba(p.gold?C.gold:C.cyan,0.15+tw*0.55);ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    }
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
