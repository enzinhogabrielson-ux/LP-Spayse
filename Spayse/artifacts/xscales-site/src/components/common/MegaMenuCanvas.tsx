import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
}

export default function MegaMenuCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 240;
    let height = 240;

    // Set high-DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const nodes: Point3D[] = [];
    const numNodes = 25;
    const colors = ['#C9A84C', '#1E4FA0', 'rgba(255, 255, 255, 0.4)'];

    // Generate random nodes on a sphere
    for (let i = 0; i < numNodes; i++) {
      const phi = Math.acos(-1 + (2 * i) / numNodes);
      const theta = Math.sqrt(numNodes * Math.PI) * phi;

      const r = 80; // Radius of the sphere
      nodes.push({
        x: r * Math.cos(theta) * Math.sin(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(phi),
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let angleX = 0;
    let angleY = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Center of canvas
      const cx = width / 2;
      const cy = height / 2;

      angleY += 0.003;
      angleX += 0.001;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Rotate and project nodes
      const projectedNodes = nodes.map((node) => {
        // Rotate Y
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;

        // Rotate X
        let y2 = node.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.y * sinX;

        // Perspective projection
        const fov = 250;
        const scale = fov / (fov + z2);

        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale: scale,
          color: node.color,
          radius: node.radius,
        };
      });

      // Sort by depth (Z-index)
      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connections
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 45) { // Only connect nearby nodes
            const opacity = (1 - dist / 45) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach((node) => {
        const r = node.radius * node.scale;
        if (r < 0) return;

        // Glow
        if (node.color === '#C9A84C' || node.color === '#1E4FA0') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, r * 3, 0, Math.PI * 2);
          ctx.fillStyle = node.color.replace(')', ', 0.15)').replace('rgb', 'rgba'); // Hacky opacity for hex won't work perfectly, let's use globalAlpha
          
          ctx.save();
          ctx.globalAlpha = 0.2;
          ctx.fillStyle = node.color;
          ctx.fill();
          ctx.restore();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[240px] overflow-hidden rounded-xl bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.03)] shadow-inner">
      <div className="absolute inset-0 rounded-xl" style={{ background: 'radial-gradient(circle at center, rgba(30,79,160,0.15) 0%, transparent 70%)' }}></div>
      <canvas ref={canvasRef} className="block relative z-10" />
    </div>
  );
}
