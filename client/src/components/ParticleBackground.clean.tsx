import React, { useEffect, useRef, useCallback, useState } from 'react';

// Interfaces
interface TrailPoint {
  x: number;
  y: number;
  hue: number;
  alpha: number;
}

interface BaseParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  hue: number;
  alpha: number;
  trail: TrailPoint[];
  sizeDirection: number;
}

interface Particle extends BaseParticle {
  isFirework?: boolean;
  friction?: number;
  gravity?: number;
  shrink?: number;
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  hue: number;
  alpha: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  hue: number;
  lineWidth: number;
  vx: number;
  vy: number;
  friction: number;
  gravity: number;
  shrink: number;
  baseX?: number;
  baseY?: number;
  density?: number;
  size?: number;
  sizeDirection?: number;
  trail?: TrailPoint[];
}

const ParticleBackground: React.FC = () => {
  // Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const dustParticles = useRef<DustParticle[]>([]);
  const ripples = useRef<Ripple[]>([]);
  const fireworkParticles = useRef<Particle[]>([]);
  const techRipples = useRef<Ripple[]>([]);
  const frameCount = useRef(0);
  const autoDrift = useRef(true);
  
  // State
  const [mousePos, setMousePos] = useState<{x: number | null; y: number | null}>({x: null, y: null});
  const backgroundHue = useRef(0);

  // Utility functions
  const randomInRange = (min: number, max: number): number => 
    Math.random() * (max - min) + min;

  // Adjust particle count based on screen size
  const adjustParticleCount = useCallback((canvas: HTMLCanvasElement): number => {
    const heightConditions = [200, 300, 400, 500, 600];
    const widthConditions = [450, 600, 900, 1200, 1600];
    const particlesForHeight = [40, 60, 70, 90, 110];
    const particlesForWidth = [40, 50, 70, 90, 110];

    let numParticles = 130;

    for (let i = 0; i < heightConditions.length; i++) {
      if (canvas.height < heightConditions[i]) {
        numParticles = particlesForHeight[i];
        break;
      }
    }

    for (let i = 0; i < widthConditions.length; i++) {
      if (canvas.width < widthConditions[i]) {
        numParticles = Math.min(numParticles, particlesForWidth[i]);
        break;
      }
    }
    return numParticles;
  }, []);

  // Create particles
  const createParticles = useCallback((canvas: HTMLCanvasElement): Particle[] => {
    const numParticles = adjustParticleCount(canvas);
    return Array.from({ length: numParticles }, () => {
      const baseSpeed = randomInRange(0.3, 0.8);
      const angle = Math.random() * Math.PI * 2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      return {
        x,
        y,
        vx: Math.cos(angle) * baseSpeed,
        vy: Math.sin(angle) * baseSpeed,
        size: randomInRange(1, 4),
        baseX: x,
        baseY: y,
        density: randomInRange(1, 31),
        hue: Math.random() * 360,
        alpha: 1,
        sizeDirection: Math.random() < 0.5 ? -1 : 1,
        trail: [],
        isFirework: false,
        friction: 0.95,
        gravity: 0.2,
        shrink: 0.95
      };
    });
  }, [adjustParticleCount]);

  // Create dust particles
  const createDustParticles = useCallback((canvas: HTMLCanvasElement): DustParticle[] => {
    return Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      size: randomInRange(0.5, 2),
      baseX: Math.random() * canvas.width,
      baseY: Math.random() * canvas.height,
      density: randomInRange(1, 31),
      hue: Math.random() * 360,
      alpha: 0.5
    }));
  }, []);

  // Event handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos({ x, y });
    
    // Add tech ripple with all required properties
    techRipples.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 30,
      alpha: 0.5,
      hue: 0,
      lineWidth: 1,
      vx: 0,
      vy: 0,
      friction: 0.95,
      gravity: 0.2,
      shrink: 0.95,
      baseX: x,
      baseY: y
    });
    
    autoDrift.current = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({x: null, y: null});
    autoDrift.current = true;
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Add ripple with all required properties
    ripples.current.push({
      x: clickX,
      y: clickY,
      radius: 0,
      maxRadius: 60,
      alpha: 0.5,
      hue: 0,
      lineWidth: 1,
      vx: 0,
      vy: 0,
      friction: 0.95,
      gravity: 0.2,
      shrink: 0.95,
      baseX: clickX,
      baseY: clickY
    });

    // Add firework particles
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = randomInRange(1, 3);
      fireworkParticles.current.push({
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: randomInRange(2, 4),
        baseX: clickX,
        baseY: clickY,
        density: randomInRange(1, 31),
        hue: Math.random() * 360,
        alpha: 1,
        sizeDirection: 1,
        trail: [],
        isFirework: true,
        friction: 0.95,
        gravity: 0.2,
        shrink: 0.97
      });
    }
  }, []);

  // Drawing functions
  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    backgroundHue.current = (backgroundHue.current + 0.2) % 360;
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `hsl(${backgroundHue.current}, 40%, 15%)`);
    gradient.addColorStop(1, `hsl(${(backgroundHue.current + 120) % 360}, 40%, 25%)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const updateAndDrawParticle = useCallback((p: Particle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): boolean => {
    // Calculate distance from mouse
    const dist = mousePos.x !== null && mousePos.y !== null 
      ? (mousePos.x - p.x) ** 2 + (mousePos.y - p.y) ** 2 
      : 0;

    // Apply mouse interaction
    if (dist < 10000) { // 100px radius
      const angle = Math.atan2((mousePos.y || 0) - p.y, (mousePos.x || 0) - p.x);
      const force = (1 - dist / 10000) * 2;
      p.vx -= Math.cos(angle) * force * 0.1;
      p.vy -= Math.sin(angle) * force * 0.1;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;

    // Apply friction
    p.vx *= p.friction || 0.95;
    p.vy *= p.friction || 0.95;

    // Apply gravity if it's a firework
    if (p.isFirework) {
      p.vy += p.gravity || 0.2;
    }

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;

    // Keep in bounds
    p.x = Math.max(0, Math.min(canvas.width, p.x));
    p.y = Math.max(0, Math.min(canvas.height, p.y));

    // Draw the particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.alpha})`;
    ctx.fill();

    return p.alpha > 0.01; // Remove if too transparent
  }, [mousePos.x, mousePos.y]);

  const updateAndDrawDust = useCallback((d: DustParticle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Update position
    d.x += d.vx;
    d.y += d.vy;

    // Wrap around edges
    if (d.x < 0) d.x = canvas.width;
    if (d.x > canvas.width) d.x = 0;
    if (d.y < 0) d.y = canvas.height;
    if (d.y > canvas.height) d.y = 0;

    // Draw the dust particle
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${d.hue}, 100%, 80%, ${d.alpha})`;
    ctx.fill();
  }, []);

  const updateAndDrawRipple = useCallback((r: Ripple, ctx: CanvasRenderingContext2D): boolean => {
    r.radius += 1;
    r.alpha = 1 - (r.radius / r.maxRadius);
    
    if (r.alpha <= 0) return false;
    
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `hsla(${r.hue}, 100%, 60%, ${r.alpha})`;
    ctx.lineWidth = r.lineWidth;
    ctx.stroke();
    
    return true;
  }, []);

  const connectParticles = useCallback((
    ctx: CanvasRenderingContext2D, 
    canvas: HTMLCanvasElement, 
    particlesArray: Particle[]
  ) => {
    const maxDistance = 100;
    const gridSize = maxDistance / 2;
    const grid: Map<string, Particle[]> = new Map();
    
    // Populate grid
    particlesArray.forEach(p => {
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });
    
    // Check connections
    particlesArray.forEach(p1 => {
      const x = Math.floor(p1.x / gridSize);
      const y = Math.floor(p1.y / gridSize);
      
      // Check adjacent grid cells
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const key = `${x + i},${y + j}`;
          const cell = grid.get(key) || [];
          
          cell.forEach(p2 => {
            if (p1 === p2) return;
            
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              const opacity = 1 - (distance / maxDistance);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(${(p1.hue + p2.hue) / 2}, 100%, 60%, ${opacity * 0.5})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      }
    });
  }, []);

  // Canvas setup and initialization
  const resizeCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }, []);

  // Initialize particles
  const initializeParticles = useCallback((canvas: HTMLCanvasElement) => {
    particles.current = createParticles(canvas);
    dustParticles.current = createDustParticles(canvas);
  }, [createParticles, createDustParticles]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initial setup
    resizeCanvas();
    initializeParticles(canvas);

    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove as any);
    canvas.addEventListener('mouseleave', handleMouseLeave as any);
    canvas.addEventListener('click', handleClick as any);
    
    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      drawBackground(ctx, canvas);
      frameCount.current++;
      
      // Update and draw particles
      connectParticles(ctx, canvas, particles.current);
      
      // Update and draw main particles
      particles.current = particles.current.filter(p => 
        updateAndDrawParticle(p, ctx, canvas)
      );
      
      // Update and draw firework particles
      fireworkParticles.current = fireworkParticles.current.filter(p => 
        updateAndDrawParticle(p, ctx, canvas)
      );
      
      // Update and draw dust particles
      dustParticles.current.forEach(d => 
        updateAndDrawDust(d, ctx, canvas)
      );
      
      // Update and draw ripples
      ripples.current = ripples.current.filter(r => 
        updateAndDrawRipple(r, ctx)
      );
      
      // Update and draw tech ripples
      techRipples.current = techRipples.current.filter(r => 
        updateAndDrawRipple(r, ctx)
      );
      
      // Request next frame
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove as any);
      canvas.removeEventListener('mouseleave', handleMouseLeave as any);
      canvas.removeEventListener('click', handleClick as any);
    };
  }, [resizeCanvas, initializeParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        display: 'block'
      }}
    />
  );
};

export default ParticleBackground;
