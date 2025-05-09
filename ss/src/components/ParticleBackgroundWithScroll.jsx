import React, { useEffect, useRef } from 'react';

const ParticleBackgroundWithScroll = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1
      });
    }

    const updateParticles = () => {
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', overflowX: 'auto' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'black',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          width: '300%',
          height: '100vh',
          background: 'rgba(255,255,255,0.05)',
        }}
      >
        <div style={{
          flex: '0 0 33.33%',
          padding: '40px',
          boxSizing: 'border-box',
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
        }}>
          <h1>Welcome</h1>
          <p>This is block 1.</p>
        </div>
        <div style={{
          flex: '0 0 33.33%',
          padding: '40px',
          boxSizing: 'border-box',
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
        }}>
          <h1>About</h1>
          <p>This is block 2.</p>
        </div>
        <div style={{
          flex: '0 0 33.33%',
          padding: '40px',
          boxSizing: 'border-box',
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
        }}>
          <h1>More</h1>
          <p>This is block 3.</p>
        </div>
      </div>
    </div>
  );
};

export default ParticleBackgroundWithScroll;
