// NoiseAbstraction.tsx
import React, { useEffect, useRef } from 'react';
import SimplexNoise from 'simplex-noise';

import './styles.scss';

interface HSLA {
  h: number;
  s: number;
  l: number;
  a: number;
  toString(): string;
}

class HSLAColor implements HSLA {
  constructor(public h = 0, public s = 0, public l = 0, public a = 0) {}
  toString() {
    return `hsla(${this.h},${this.s * 100}%,${this.l * 100}%,${this.a})`;
  }
}

interface Particle {
  x: number;
  y: number;
  pastX: number;
  pastY: number;
  color: HSLA;
}

const Configs = {
  backgroundColor: '#eee9e9',
  particleNum: 1000,
  step: 5,
  base: 1000,
  zInc: 0.001,
};

const NoiseAbstraction: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const simplexRef = useRef<SimplexNoise>(new SimplexNoise());
  const hueBaseRef = useRef(0);
  const zoffRef = useRef(0);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const centerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    contextRef.current = context;
    context.lineWidth = 0.3;
    context.lineCap = 'round';
    context.lineJoin = 'round';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerRef.current.x = canvas.width / 2;
      centerRef.current.y = canvas.height / 2;
    };

    const onClick = () => {
      context.save();
      context.globalAlpha = 0.8;
      context.fillStyle = Configs.backgroundColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();

      simplexRef.current = new SimplexNoise();
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('click', onClick);
    resize();

    const particles: Particle[] = [];
    for (let i = 0; i < Configs.particleNum; i++) {
      particles[i] = initParticle(canvas.width, canvas.height);
    }
    particlesRef.current = particles;

    requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', onClick);
    };
  }, []);

  function initParticle(width: number, height: number): Particle {
    const x = width * Math.random();
    const y = height * Math.random();
    const color = new HSLAColor();
    color.h = hueBaseRef.current + (Math.atan2(centerRef.current.y - y, centerRef.current.x - x) * 180) / Math.PI;
    color.s = 1;
    color.l = 0.5;
    color.a = 0;

    return {
      x,
      y,
      pastX: x,
      pastY: y,
      color,
    };
  }

  function getNoise(x: number, y: number, z: number): number {
    const octaves = 4;
    const fallout = 0.5;
    let amp = 1;
    let f = 1;
    let sum = 0;

    const noise = simplexRef.current;

    for (let i = 0; i < octaves; i++) {
      amp *= fallout;
      sum += amp * ((noise.noise3D(x * f, y * f, z * f) + 1) * 0.5);
      f *= 2;
    }

    return sum;
  }

  function update() {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const { width, height } = canvas;
    const step = Configs.step;
    const base = Configs.base;
    const particles = particlesRef.current;

    for (let p of particles) {
      p.pastX = p.x;
      p.pastY = p.y;

      const angle = Math.PI * 6 * getNoise(p.x / base * 1.75, p.y / base * 1.75, zoffRef.current);
      p.x += Math.cos(angle) * step;
      p.y += Math.sin(angle) * step;

      if (p.color.a < 1) p.color.a += 0.003;

      context.beginPath();
      context.strokeStyle = p.color.toString();
      context.moveTo(p.pastX, p.pastY);
      context.lineTo(p.x, p.y);
      context.stroke();

      if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
        Object.assign(p, initParticle(width, height));
      }
    }

    hueBaseRef.current += 0.1;
    zoffRef.current += Configs.zInc;

    requestAnimationFrame(update);
  }

  return <canvas id="c" ref={canvasRef} style={{ display: 'block' }} />;
};

// Credits:
// https://codepen.io/akm2/pen/AxGzJb?editors=1010
// ChatGPT

export default NoiseAbstraction;
