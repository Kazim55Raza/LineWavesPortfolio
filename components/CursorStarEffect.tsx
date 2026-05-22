'use client';

import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  id: number;
}

export default function CursorStarEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const starsRef = useRef<Star[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const idRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Randomly create new stars around cursor
      if (Math.random() > 0.7) {
        const newStar: Star = {
          x: e.clientX + (Math.random() - 0.5) * 50,
          y: e.clientY + (Math.random() - 0.5) * 50,
          size: Math.random() * 2 + 0.5,
          opacity: 1,
          id: idRef.current++,
        };
        starsRef.current.push(newStar);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(15, 23, 42, 0)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current = starsRef.current.filter((star) => {
        // Fade out
        star.opacity -= 0.02;

        if (star.opacity <= 0) return false;

        // Move towards cursor slightly
        const dx = mousePos.current.x - star.x;
        const dy = mousePos.current.y - star.y;
        star.x += dx * 0.05;
        star.y += dy * 0.05;

        // Draw star with glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 3
        );
        gradient.addColorStop(0, `rgba(52, 211, 153, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(45, 212, 191, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(45, 212, 191, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          star.x - star.size * 2,
          star.y - star.size * 2,
          star.size * 4,
          star.size * 4
        );

        // Draw bright center
        ctx.fillStyle = `rgba(226, 232, 240, ${star.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      setStars([...starsRef.current]);
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 50 }}
    />
  );
}
