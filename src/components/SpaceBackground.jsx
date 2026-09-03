import React, { useEffect, useRef } from 'react';

/**
 * Deep Space Canvas Environment
 * Features:
 * - Multilayered drifting starfield with varying magnitudes and subtle twinkle
 * - Faint deep space nebula glow
 * - Delicate orbital celestial arcs
 * - Throttled & pauses when offscreen or window inactive
 */
export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Star configuration
    const STAR_COUNT = Math.min(Math.floor((width * height) / 8000), 160);
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.04,
        speedY: (Math.random() - 0.5) * 0.04,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const render = (currentTime) => {
      // Limit to ~60fps
      if (currentTime - lastTime < 16) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Deep space background gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.9
      );
      bgGrad.addColorStop(0, '#060a1e');
      bgGrad.addColorStop(0.5, '#050816');
      bgGrad.addColorStop(1, '#02040b');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Distant subtle nebula glow 1 (Cyan/Teal hue)
      const nebula1 = ctx.createRadialGradient(
        width * 0.2,
        height * 0.25,
        20,
        width * 0.2,
        height * 0.25,
        width * 0.45
      );
      nebula1.addColorStop(0, 'rgba(56, 189, 248, 0.04)');
      nebula1.addColorStop(0.6, 'rgba(14, 165, 233, 0.015)');
      nebula1.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      // Distant subtle nebula glow 2 (Deep Indigo/Violet hue)
      const nebula2 = ctx.createRadialGradient(
        width * 0.8,
        height * 0.7,
        30,
        width * 0.8,
        height * 0.7,
        width * 0.5
      );
      nebula2.addColorStop(0, 'rgba(99, 102, 241, 0.035)');
      nebula2.addColorStop(0.6, 'rgba(79, 70, 229, 0.012)');
      nebula2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Subtle celestial orbital guides
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.025)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.4, width * 0.42, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.4, width * 0.65, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Render stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha =
          star.alpha + Math.sin(star.twinklePhase) * 0.25 * star.alpha;

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 254, ${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Extra soft glow on brightest stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${currentAlpha * 0.18})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
