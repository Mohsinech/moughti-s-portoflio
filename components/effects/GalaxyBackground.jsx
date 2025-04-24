'use client';
import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const galaxyColors = ['#ffffff', '#aaaaff', '#d8b4fe', '#9f7aea']; // white, light blue, violet, purple
    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
      color: galaxyColors[Math.floor(Math.random() * galaxyColors.length)],
    }));

    let shootingStars = [];

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        dx: 6 + Math.random() * 2,
        dy: 2 + Math.random(),
        length: 150,
        alpha: 1,
      });
    };

    setInterval(() => {
      if (Math.random() < 0.5) createShootingStar();
    }, 2500);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (const star of stars) {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      }

      // Draw shooting stars
      shootingStars = shootingStars.filter((s) => s.alpha > 0);
      for (const s of shootingStars) {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length, s.y - s.length * 0.4);
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        s.x += s.dx;
        s.y += s.dy;
        s.alpha -= 0.01;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default GalaxyBackground;
