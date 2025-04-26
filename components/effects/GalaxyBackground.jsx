"use client";
import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = canvas.parentElement;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const galaxyColors = ["#ffffff", "#d8b4fe", "#9f7aea", "#c084fc", "#a855f7"];

    const stars = Array.from({ length: 2000 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.05,
      dy: (Math.random() - 0.5) * 0.05,
      color: galaxyColors[Math.floor(Math.random() * galaxyColors.length)],
    }));

    let shootingStars = [];

    const createShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        dx: 6 + Math.random() * 2,
        dy: 2 + Math.random(),
        length: 120,
        alpha: 1,
      });
    };

    setInterval(() => {
      if (Math.random() < 0.4) createShootingStar();
    }, 3000);

    // Nebulas (now slowly moving too)
    const nebulas = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 150 + Math.random() * 150,
      dx: (Math.random() - 0.5) * 0.01,
      dy: (Math.random() - 0.5) * 0.01,
      color: galaxyColors[Math.floor(Math.random() * galaxyColors.length)],
    }));

    const drawNebula = (nebula) => {
      const gradient = ctx.createRadialGradient(
        nebula.x,
        nebula.y,
        0,
        nebula.x,
        nebula.y,
        nebula.radius
      );
      gradient.addColorStop(0, `${nebula.color}11`);
      gradient.addColorStop(0.5, `${nebula.color}05`);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // No black background anymore — transparency
      // ctx.fillStyle = "black";
      // ctx.fillRect(0, 0, width, height);

      // Move nebulas slightly
      for (const nebula of nebulas) {
        nebula.x += nebula.dx;
        nebula.y += nebula.dy;

        if (nebula.x < -nebula.radius) nebula.x = width + nebula.radius;
        if (nebula.x > width + nebula.radius) nebula.x = -nebula.radius;
        if (nebula.y < -nebula.radius) nebula.y = height + nebula.radius;
        if (nebula.y > height + nebula.radius) nebula.y = -nebula.radius;

        drawNebula(nebula);
      }

      // Move stars slowly
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

      // Shooting stars
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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default GalaxyBackground;
