import React, { useEffect, useRef } from 'react';
import './styles.scss';

type Splot = {
  x: number;
  y: number;
  r: number;
  spX: number;
  spY: number;
};

const LiquidLights: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const arrRef = useRef<Splot[]>([]);
  // const cntRef = useRef(0);
  const requestRef = useRef<number>();

  // Grayscale color: random shade from white (255) to black (0)
  const rndCol = () => {
    const val = Math.floor(Math.random() * 256); // 0 to 255
    return `rgb(${val}, ${val}, ${val})`;
  };

  const rng = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const resize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);
      canvas.style.position = 'absolute';
      canvas.style.left = `${(window.innerWidth - w) * 0.01}px`;
      canvas.style.top = `${(window.innerHeight - h) * 0.01}px`;
    }
  };

  const draw = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const _w = w * 0.5;
    const _h = h * 0.5;

    const splot: Splot = {
      x: rng(_w - 900, _w + 900),
      y: rng(_h - 900, _h + 900),
      r: rng(20, 80),
      spX: rng(-1, 1),
      spY: rng(-1, 1),
    };

    arrRef.current.push(splot);
    if (arrRef.current.length > 100) {
      arrRef.current.shift();
    }

    ctx.clearRect(0, 0, w, h);

    arrRef.current.forEach((splot) => {
      const color = rndCol();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(splot.x, splot.y, splot.r, 0, Math.PI * 2);
      ctx.shadowBlur = 80;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowColor = color;
      ctx.globalCompositeOperation = 'lighter';
      ctx.fill();

      splot.x += splot.spX;
      splot.y += splot.spY;
      splot.r *= 0.96;
    });
  };

//   const animate = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     cntRef.current++;
//     if (cntRef.current % 6 === 0) {
//       draw(ctx, canvas.width, canvas.height);
//     }
//     requestRef.current = requestAnimationFrame(animate);
//   };

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        draw(ctx, canvas.width, canvas.height);
        requestRef.current = requestAnimationFrame(animate);
    };

  useEffect(() => {
    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="canv" style={{ zIndex: -1 }} />;
};

// Credits:
// https://codepen.io/tmrDevelops/pen/rVNxVQ?editors=0010
// ChatGPT

export default LiquidLights;
