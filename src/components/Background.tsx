'use client';
import React, { useEffect, useRef, useCallback } from 'react';

class Pixel {
  // ... (omitting the full class for brevity, but it's the same as your JS provided)
  // Just ensure to add types for constructor arguments
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  color: string;
  speed: number;
  size: number;
  sizeStep: number;
  minSize: number;
  maxSizeInteger: number;
  maxSize: number;
  delay: number;
  counter: number;
  counterStep: number;
  isIdle: boolean;
  isReverse: boolean;
  isShimmer: boolean;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, x: number, y: number, color: string, speed: number, delay: number) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) this.isShimmer = true;
    if (this.isShimmer) this.shimmer();
    else this.size += this.sizeStep;
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) this.isIdle = true;
    else this.size -= 0.1;
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) this.isReverse = true;
    else if (this.size <= this.minSize) this.isReverse = false;
    if (this.isReverse) this.size -= this.speed;
    else this.size += this.speed;
  }
}

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixels = useRef<Pixel[]>([]);
  const animationFrameId = useRef<number>(0);
  const timePrevious = useRef<number>(performance.now());
  
  const gap = 5;
  const speed = 0.035; // 35 * 0.001 throttle
  const colors = ["#475569", "#334155", "#1e293b"];

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.parentElement!.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    pixels.current = [];
    
    const getDistanceToCanvasCenter = (x: number, y: number) => {
        const dx = x - canvas.width / 2;
        const dy = y - canvas.height / 2;
        return Math.sqrt(dx * dx + dy * dy);
    };

    for (let x = 0; x < canvas.width; x += gap) {
      for (let y = 0; y < canvas.height; y += gap) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = getDistanceToCanvasCenter(x, y);
        pixels.current.push(new Pixel(canvas, ctx, x, y, color, speed, delay));
      }
    }
  }, []);

  const animate = useCallback((fnName: 'appear' | 'disappear') => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const timeNow = performance.now();
    const timePassed = timeNow - timePrevious.current;
    const timeInterval = 1000 / 60;

    if (timePassed >= timeInterval) {
        timePrevious.current = timeNow - (timePassed % timeInterval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < pixels.current.length; i++) {
            pixels.current[i][fnName]();
        }
    }

    if (fnName === 'disappear' && pixels.current.every(p => p.isIdle)) {
      // stop if all are idle
    } else {
      animationFrameId.current = requestAnimationFrame(() => animate(fnName));
    }
  }, []);

  useEffect(() => {
    init();
    const handleResize = () => {
        cancelAnimationFrame(animationFrameId.current!);
        init();
        animate('appear');
    };
    
    animate('appear');
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current!);
    };
  }, [init, animate]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 opacity-40">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default Background;