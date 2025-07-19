import React, { useEffect, useRef, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  twinkleSpeed: number;
  constellation?: string;
}

interface Constellation {
  name: string;
  stars: number[];
  connections: [number, number][];
}

export default function StarMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const constellations: Constellation[] = [
    {
      name: 'Большая Медведица',
      stars: [0, 1, 2, 3, 4, 5, 6],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0]]
    },
    {
      name: 'Кассиопея',
      stars: [7, 8, 9, 10, 11],
      connections: [[7, 8], [8, 9], [9, 10], [10, 11]]
    },
    {
      name: 'Орион',
      stars: [12, 13, 14, 15, 16, 17, 18],
      connections: [[12, 13], [13, 14], [14, 15], [15, 16], [16, 17], [17, 18]]
    }
  ];

  const generateStars = (width: number, height: number): Star[] => {
    const newStars: Star[] = [];
    
    // Создаём звёзды для созвездий
    const constellationPositions = [
      // Большая Медведица
      { x: width * 0.2, y: height * 0.25 },
      { x: width * 0.25, y: height * 0.22 },
      { x: width * 0.3, y: height * 0.2 },
      { x: width * 0.35, y: height * 0.18 },
      { x: width * 0.4, y: height * 0.22 },
      { x: width * 0.45, y: height * 0.28 },
      { x: width * 0.5, y: height * 0.32 },
      
      // Кассиопея
      { x: width * 0.7, y: height * 0.15 },
      { x: width * 0.73, y: height * 0.12 },
      { x: width * 0.76, y: height * 0.16 },
      { x: width * 0.79, y: height * 0.11 },
      { x: width * 0.82, y: height * 0.14 },
      
      // Орион
      { x: width * 0.6, y: height * 0.6 },
      { x: width * 0.58, y: height * 0.55 },
      { x: width * 0.62, y: height * 0.52 },
      { x: width * 0.65, y: height * 0.58 },
      { x: width * 0.68, y: height * 0.62 },
      { x: width * 0.63, y: height * 0.67 },
      { x: width * 0.59, y: height * 0.65 }
    ];

    constellationPositions.forEach((pos, index) => {
      newStars.push({
        id: index,
        x: pos.x,
        y: pos.y,
        size: Math.random() * 3 + 2,
        brightness: Math.random() * 0.5 + 0.7,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        constellation: index < 7 ? 'Большая Медведица' : index < 12 ? 'Кассиопея' : 'Орион'
      });
    });

    // Добавляем случайные звёзды
    for (let i = constellationPositions.length; i < 150; i++) {
      newStars.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random() * 0.4 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }

    return newStars;
  };

  const drawStar = (ctx: CanvasRenderingContext2D, star: Star, time: number, mouseDistance: number) => {
    const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7;
    const proximityGlow = Math.max(0, 1 - mouseDistance / 100);
    const alpha = star.brightness * twinkle + proximityGlow * 0.3;
    
    ctx.save();
    ctx.globalAlpha = alpha;
    
    // Основная звезда
    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.5, star.constellation ? '#fbbf24' : '#e5deff');
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size * (1 + proximityGlow * 0.5), 0, Math.PI * 2);
    ctx.fill();
    
    // Эффект мерцания
    if (proximityGlow > 0.1) {
      ctx.globalAlpha = proximityGlow * 0.5;
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  };

  const drawConstellation = (ctx: CanvasRenderingContext2D, constellation: Constellation) => {
    ctx.save();
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    constellation.connections.forEach(([startId, endId]) => {
      const startStar = stars[startId];
      const endStar = stars[endId];
      
      if (startStar && endStar) {
        ctx.beginPath();
        ctx.moveTo(startStar.x, startStar.y);
        ctx.lineTo(endStar.x, endStar.y);
        ctx.stroke();
      }
    });
    
    ctx.restore();
  };

  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем созвездия
    constellations.forEach(constellation => {
      drawConstellation(ctx, constellation);
    });

    // Рисуем звёзды
    stars.forEach(star => {
      const distance = Math.sqrt(
        Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2)
      );
      drawStar(ctx, star, time * 0.001, distance);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      setStars(generateStars(rect.width, rect.height));
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (stars.length > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [stars, mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
}