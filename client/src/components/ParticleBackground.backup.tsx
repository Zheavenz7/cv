import React, { useEffect, useRef, useCallback, useState } from 'react';

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
      const baseSpeed = Math.random() * 0.5 + 0.3;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        vx: Math.cos(angle) * baseSpeed,
        vy: Math.sin(angle) * baseSpeed,
        size: Math.random() * 3 + 1,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
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
    return Array.from({ length: 200 }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        size: Math.random() * 1.5 + 0.5,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
        hue: Math.random() * 360,
        alpha: 0.5
      };
    });
  }, []);

  // Handle mouse move
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

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setMousePos({x: null, y: null});
    autoDrift.current = true;
  }, []);

  // Handle click
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
      const speed = Math.random() * 2 + 1;
      fireworkParticles.current.push({
        x: clickX,
        y: clickY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 2,
        baseX: clickX,
        baseY: clickY,
        density: Math.random() * 30 + 1,
        hue: Math.random() * 360,
        alpha: 1,
        sizeDirection: 1,
        trail: [],
        isFirework: true,
        friction: 0.95,
        gravity: 0.2,
        shrink: 0.95
      });
    }
  }, []);

  // Draw background with gradient
  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    backgroundHue.current = (backgroundHue.current + 0.2) % 360;
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, `hsl(${backgroundHue.current}, 40%, 15%)`);
    gradient.addColorStop(1, `hsl(${(backgroundHue.current + 120) % 360}, 40%, 25%)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  // Update and draw a particle
  const updateAndDrawParticle = useCallback((p: Particle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Calculate distance from mouse
    const dist = mousePos.x !== null && mousePos.y !== null 
      ? (mousePos.x - p.x) ** 2 + (mousePos.y - p.y) ** 2 
      : 0;

    if (!p.isFirework) {
      // Apply force from mouse
      const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;

      // Gentle random movement when mouse is not present
      if (mousePos.x === null && autoDrift.current) {
        p.vx += (Math.random() - 0.5) * 0.03;
        p.vy += (Math.random() - 0.5) * 0.03;
      }

      // Apply mouse force
      if (dist && mousePos.x !== null && mousePos.y !== null) {
        const sqrtDist = Math.sqrt(dist);
        p.vx += ((mousePos.x - p.x) / sqrtDist) * force * 0.1;
        p.vy += ((mousePos.y - p.y) / sqrtDist) * force * 0.1;
      }

      // Damping
      p.vx *= mousePos.x !== null ? 0.99 : 0.998;
      p.vy *= mousePos.y !== null ? 0.99 : 0.998;
    } else {
      // Firework particles fade out
      p.alpha -= 0.02;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Bounce off edges
    if (p.x <= 0 || p.x >= canvas.width - 1) p.vx *= -0.9;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -0.9;

    // Pulsing size
    p.size += p.sizeDirection * 0.1;
    if (p.size > 4 || p.size < 1) p.sizeDirection *= -1;

    // Update hue
    p.hue = (p.hue + 0.3) % 360;

    // Update trail
    if (frameCount.current % 2 === 0 && (Math.abs(p.vx) > 0.1 || Math.abs(p.vy) > 0.1)) {
      p.trail.push({
        x: p.x,
        y: p.y,
        hue: p.hue,
        alpha: p.alpha
      });
      if (p.trail.length > 15) p.trail.shift();
    }

    // Draw particle
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${Math.max(p.alpha, 0)})`);
    gradient.addColorStop(1, `hsla(${p.hue + 30}, 80%, 30%, ${Math.max(p.alpha, 0)})`);

    ctx.fillStyle = gradient;
    ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
    ctx.shadowColor = `hsl(${p.hue}, 80%, 60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw trail
    if (p.trail.length > 1) {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      
      for (let i = 0; i < p.trail.length - 1; i++) {
        const alpha = (i / p.trail.length) * p.alpha * 0.7;
        ctx.strokeStyle = `hsla(${p.trail[i].hue}, 80%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p.trail[i].x, p.trail[i].y);
        ctx.lineTo(p.trail[i + 1].x, p.trail[i + 1].y);
        ctx.stroke();
      }
    }

    return p.alpha > 0;
  }, [mousePos.x, mousePos.y]);

  // Update and draw dust particles
  const updateAndDrawDust = useCallback((d: DustParticle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    d.x += d.vx;
    d.y += d.vy;

    // Wrap around edges
    if (d.x < -10) d.x = canvas.width + 10;
    if (d.x > canvas.width + 10) d.x = -10;
    if (d.y < -10) d.y = canvas.height + 10;
    if (d.y > canvas.height + 10) d.y = -10;

    // Draw dust
    ctx.fillStyle = `hsla(${d.hue}, 60%, 80%, 0.1)`;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  // Update and draw ripple
  const updateAndDrawRipple = useCallback((r: Ripple, ctx: CanvasRenderingContext2D) => {
    r.radius += 1;
    r.alpha = 1 - (r.radius / r.maxRadius);
    
    if (r.alpha <= 0) return false;
    
    ctx.strokeStyle = `hsla(${r.hue}, 80%, 60%, ${r.alpha * 0.5})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.stroke();
    
    return true;
  }, []);

  // Refs for animation and state
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const frameCount = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const autoDrift = useRef({ x: 0, y: 0 });
  
  // Particle arrays
  const particles = useRef<Particle[]>([]);
  const fireworkParticles = useRef<Particle[]>([]);
  const dustParticles = useRef<DustParticle[]>([]);
  const ripples = useRef<Ripple[]>([]);
  const techRipples = useRef<Ripple[]>([]);
  
  // Canvas context reference
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  
  // Initialize canvas
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        setCtx(context);
        
        // Set initial canvas size
        const resizeCanvas = () => {
          const dpr = window.devicePixelRatio || 1;
          const rect = canvas.getBoundingClientRect();
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          context.scale(dpr, dpr);
          
          // Recreate particles on resize
          particles.current = createParticles(canvas);
          dustParticles.current = createDustParticles(canvas);
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        return () => {
          window.removeEventListener('resize', resizeCanvas);
        };
      }
    }
  }, []);
  
  // Animation loop
  const animate = useCallback(() => {
    if (!ctx || !canvasRef.current) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Draw background
    drawBackground(ctx, canvasRef.current);
    
    // Update and draw particles
    updateParticles();
    connectParticles(ctx, canvasRef.current, particles.current);
    
    // Update and draw dust particles
    updateDustParticles();
    
    // Update and draw firework particles
    updateFireworkParticles();
    
    // Update and draw ripples
    updateRipples();
    
    // Update and draw tech ripples
    updateTechRipples();
    
    // Continue animation loop
    animationFrameId.current = requestAnimationFrame(animate);
  }, [ctx]);
  
  // Start animation when component mounts
  useEffect(() => {
    if (ctx) {
      animationFrameId.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, ctx]);
  
  // Mouse event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  // Mouse event handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePos.current = { x: -1000, y: -1000 };
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create firework explosion
    const hue = Math.random() * 360;
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      
      fireworkParticles.current.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        hue,
        isFirework: true,
        alpha: 1,
        friction: 0.95,
        gravity: 0.2,
        shrink: Math.random() * 0.02 + 0.01
      });
    }
    
    // Create ripple effect
    ripples.current.push({
      x,
      y,
      radius: 5,
      alpha: 1,
      hue,
      lineWidth: 2,
      vx: 0,
      vy: 0,
      friction: 1,
      gravity: 0,
      shrink: 0
    });
  }, []);

  // Background drawing function
  const drawBackground = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(1, '#16213e');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle noise
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      if (Math.random() > 0.9) {
        const value = Math.floor(Math.random() * 10) - 5;
        data[i] += value;     // R
        data[i + 1] += value; // G
        data[i + 2] += value; // B
      }
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, []);

  // Particle creation functions
  const createParticles = useCallback((canvas: HTMLCanvasElement): Particle[] => {
    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      
      particles.push({
        x,
        y,
        size,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
        vx: 0,
        vy: 0,
        hue: Math.random() * 360
      });
    }
    
    return particles;
  }, []);

  const createDustParticles = useCallback((canvas: HTMLCanvasElement): DustParticle[] => {
    const dustParticles: DustParticle[] = [];
    const dustCount = Math.floor((canvas.width * canvas.height) / 20000);
    
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        density: Math.random() * 30 + 1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.1,
        hue: 0
      });
    }

    return dustParticles;
  }, []);

  const connectParticles = useCallback((ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, particles: Particle[]) => {
    const gridSize = 120;
    const grid = new Map<string, Particle[]>();

    particles.forEach((p) => {
      if (p.isFirework) return;
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });

    ctx.lineWidth = 1.5;
    
    // Draw connections between nearby particles
    particles.forEach((p) => {
      if (p.isFirework) return;
      
      const gridX = Math.floor(p.x / gridSize);
      const gridY = Math.floor(p.y / gridSize);

      // Check neighboring grid cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${gridX + dx},${gridY + dy}`;
          const cell = grid.get(key);
          if (cell) {
            cell.forEach((neighbor) => {
              if (neighbor !== p) {
                const dx = neighbor.x - p.x;
                const dy = neighbor.y - p.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100*100
                  const dist = Math.sqrt(distSq);
                  ctx.strokeStyle = `hsla(${(p.hue + neighbor.hue) / 2}, 80%, 60%, ${1 - dist / 100})`;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(neighbor.x, neighbor.y);
                  ctx.stroke();
                }
              }
            });
          }
        }
      }
    });
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles.current = createParticles(canvas);
      dustParticles.current = createDustParticles(canvas);
    };
    
    resizeCanvas();
    
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = createParticles(canvas);
    }
    
    if (dustParticles.current.length === 0) {
      dustParticles.current = createDustParticles(canvas);
    }

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
  }, [createDustParticles, createParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto"
    />
  );
    const gridSize = 120;
    const grid = new Map<string, Particle[]>();

    // Group particles into grid
    particles.forEach((p) => {
      if (p.isFirework) return;
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });

    ctx.lineWidth = 1.5;
    
    // Draw connections between nearby particles
    particles.forEach((p) => {
      if (p.isFirework) return;
      
      const gridX = Math.floor(p.x / gridSize);
      const gridY = Math.floor(p.y / gridSize);

      // Check neighboring grid cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${gridX + dx},${gridY + dy}`;
          const cell = grid.get(key);
          if (cell) {
            cell.forEach((neighbor) => {
              if (neighbor !== p) {
                const dx = neighbor.x - p.x;
                const dy = neighbor.y - p.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100*100
                  const dist = Math.sqrt(distSq);
                  ctx.strokeStyle = `hsla(${(p.hue + neighbor.hue) / 2}, 80%, 60%, ${1 - dist / 100})`;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(neighbor.x, neighbor.y);
                  ctx.stroke();
                }
              }
            });
          }
        }
      }
    });
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles.current = createParticles(canvas);
      dustParticles.current = createDustParticles(canvas);
    };
    
    resizeCanvas();
    
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = createParticles(canvas);
    }
    
    if (dustParticles.current.length === 0) {
      dustParticles.current = createDustParticles(canvas);
    }

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
  }, [createDustParticles, createParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto"
    />
  );
    const gridSize = 120;
    const grid = new Map<string, Particle[]>();

    // Group particles into grid
    particles.forEach((p) => {
      if (p.isFirework) return;
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });

    ctx.lineWidth = 1.5;
    
    // Draw connections between nearby particles
    particles.forEach((p) => {
      if (p.isFirework) return;
      
      const gridX = Math.floor(p.x / gridSize);
      const gridY = Math.floor(p.y / gridSize);

      // Check neighboring grid cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${gridX + dx},${gridY + dy}`;
          const cell = grid.get(key);
          if (cell) {
            cell.forEach((neighbor) => {
              if (neighbor !== p) {
                const dx = neighbor.x - p.x;
                const dy = neighbor.y - p.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100*100
                  const dist = Math.sqrt(distSq);
                  ctx.strokeStyle = `hsla(${(p.hue + neighbor.hue) / 2}, 80%, 60%, ${1 - dist / 100})`;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(neighbor.x, neighbor.y);
                  ctx.stroke();
                }
              }
            });
          }
        }
      }
    });
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles.current = createParticles(canvas);
      dustParticles.current = createDustParticles(canvas);
    };
    
    resizeCanvas();
    
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = createParticles(canvas);
    }
    
    if (dustParticles.current.length === 0) {
      dustParticles.current = createDustParticles(canvas);
    }

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
  }, [createDustParticles, createParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto"
    />
  );
    const gridSize = 120;
    const grid = new Map<string, Particle[]>();

    // Group particles into grid
    particles.forEach((p) => {
      if (p.isFirework) return;
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });

    ctx.lineWidth = 1.5;
    
    // Draw connections between nearby particles
    particles.forEach((p) => {
      if (p.isFirework) return;
      
      const gridX = Math.floor(p.x / gridSize);
      const gridY = Math.floor(p.y / gridSize);

      // Check neighboring grid cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${gridX + dx},${gridY + dy}`;
          const cell = grid.get(key);
          if (cell) {
            cell.forEach((neighbor) => {
              if (neighbor !== p) {
                const dx = neighbor.x - p.x;
                const dy = neighbor.y - p.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100*100
                  const dist = Math.sqrt(distSq);
                  ctx.strokeStyle = `hsla(${(p.hue + neighbor.hue) / 2}, 80%, 60%, ${1 - dist / 100})`;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(neighbor.x, neighbor.y);
                  ctx.stroke();
                }
              }
            });
          }
        }
      }
    });
  }, []);

  // Update and draw a particle
  const updateAndDrawParticle = useCallback((p: Particle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Calculate distance from mouse
    const dist = mousePos.x !== null && mousePos.y !== null 
      ? (mousePos.x - p.x) ** 2 + (mousePos.y - p.y) ** 2 
      : 0;

    if (!p.isFirework) {
      // Apply force from mouse
      const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;

      // Gentle random movement when mouse is not present
      if (mousePos.x === null && autoDrift.current) {
        p.vx += (Math.random() - 0.5) * 0.03;
        p.vy += (Math.random() - 0.5) * 0.03;
      }

      // Apply mouse force
      if (dist && mousePos.x !== null && mousePos.y !== null) {
        const sqrtDist = Math.sqrt(dist);
        p.vx += ((mousePos.x - p.x) / sqrtDist) * force * 0.1;
        p.vy += ((mousePos.y - p.y) / sqrtDist) * force * 0.1;
      }

      // Damping
      p.vx *= mousePos.x !== null ? 0.99 : 0.998;
      p.vy *= mousePos.y !== null ? 0.99 : 0.998;
    } else {
      // Firework particles fade out
      p.alpha -= 0.02;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Bounce off edges
    if (p.x <= 0 || p.x >= canvas.width - 1) p.vx *= -0.9;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -0.9;

    // Pulsing size
    p.size += p.sizeDirection * 0.1;
    if (p.size > 4 || p.size < 1) p.sizeDirection *= -1;

    // Update hue
    p.hue = (p.hue + 0.3) % 360;

    // Update trail
    if (frameCount.current % 2 === 0 && (Math.abs(p.vx) > 0.1 || Math.abs(p.vy) > 0.1)) {
      p.trail.push({
        x: p.x,
        y: p.y,
        hue: p.hue,
        alpha: p.alpha
      });
      if (p.trail.length > 15) p.trail.shift();
    }

    // Draw particle
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${Math.max(p.alpha, 0)})`);
    gradient.addColorStop(1, `hsla(${p.hue + 30}, 80%, 30%, ${Math.max(p.alpha, 0)})`);

    ctx.fillStyle = gradient;
    ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
    ctx.shadowColor = `hsl(${p.hue}, 80%, 60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw trail
    if (p.trail.length > 1) {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      
      for (let i = 0; i < p.trail.length - 1; i++) {
        const alpha = (i / p.trail.length) * p.alpha * 0.7;
        ctx.strokeStyle = `hsla(${p.trail[i].hue}, 80%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p.trail[i].x, p.trail[i].y);
        ctx.lineTo(p.trail[i + 1].x, p.trail[i + 1].y);
        ctx.stroke();
      }
    }

    return p.alpha > 0;
  }, [mousePos.x, mousePos.y]);

  // Update and draw dust particles
  const updateAndDrawDust = useCallback((d: DustParticle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    d.x += d.vx;
    d.y += d.vy;

    // Wrap around edges
    if (d.x < -10) d.x = canvas.width + 10;
    if (d.x > canvas.width + 10) d.x = -10;
    if (d.y < -10) d.y = canvas.height + 10;
    if (d.y > canvas.height + 10) d.y = -10;

    // Draw dust
    ctx.fillStyle = `hsla(${d.hue}, 60%, 80%, 0.1)`;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  // Update and draw ripple
  const updateAndDrawRipple = useCallback((r: Ripple, ctx: CanvasRenderingContext2D) => {
    r.radius += 1;
    r.alpha = 1 - (r.radius / r.maxRadius);
    
    if (r.alpha <= 0) return false;
    
    ctx.strokeStyle = `hsla(${r.hue}, 80%, 60%, ${r.alpha * 0.5})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.stroke();
    
    return true;
  }, []);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles.current = createParticles(canvas);
      dustParticles.current = createDustParticles(canvas);
    };
    
    resizeCanvas();
    
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = createParticles(canvas);
    }
    
    if (dustParticles.current.length === 0) {
      dustParticles.current = createDustParticles(canvas);
    }

    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [createDustParticles, createParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);
  
  return (
    <canvas
      ref={canvasRef}
}

// Update position
p.x += p.vx;
p.y += p.vy;
      const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key)?.push(p);
    });

    ctx.lineWidth = 1.5;
    
    // Draw connections between nearby particles
    particles.forEach((p) => {
      if (p.isFirework) return;
      
      const gridX = Math.floor(p.x / gridSize);
      const gridY = Math.floor(p.y / gridSize);

      // Check neighboring grid cells
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${gridX + dx},${gridY + dy}`;
          const cell = grid.get(key);
          if (cell) {
            cell.forEach((neighbor) => {
              if (neighbor !== p) {
                const dx = neighbor.x - p.x;
                const dy = neighbor.y - p.y;
                const distSq = dx * dx + dy * dy;
                if (distSq < 10000) { // 100*100
                  const dist = Math.sqrt(distSq);
                  ctx.strokeStyle = `hsla(${(p.hue + neighbor.hue) / 2}, 80%, 60%, ${1 - dist / 100})`;
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(neighbor.x, neighbor.y);
                  ctx.stroke();
                }
              }
            });
          }
        }
      }
    });
  }, []);

  // Update and draw a particle
  const updateAndDrawParticle = useCallback((p: Particle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    // Calculate distance from mouse
    const dist = mousePos.x !== null && mousePos.y !== null 
      ? (mousePos.x - p.x) ** 2 + (mousePos.y - p.y) ** 2 
      : 0;

    if (!p.isFirework) {
      // Apply force from mouse
      const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;

      // Gentle random movement when mouse is not present
      if (mousePos.x === null && autoDrift.current) {
        p.vx += (Math.random() - 0.5) * 0.03;
        p.vy += (Math.random() - 0.5) * 0.03;
      }

      // Apply mouse force
      if (dist && mousePos.x !== null && mousePos.y !== null) {
        const sqrtDist = Math.sqrt(dist);
        p.vx += ((mousePos.x - p.x) / sqrtDist) * force * 0.1;
        p.vy += ((mousePos.y - p.y) / sqrtDist) * force * 0.1;
      }

      // Damping
      p.vx *= mousePos.x !== null ? 0.99 : 0.998;
      p.vy *= mousePos.y !== null ? 0.99 : 0.998;
    } else {
      // Firework particles fade out
      p.alpha -= 0.02;
    }

    // Update position
    p.x += p.vx;
    p.y += p.vy;
    
    // Bounce off edges
    if (p.x <= 0 || p.x >= canvas.width - 1) p.vx *= -0.9;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -0.9;

    // Pulsing size
    p.size += p.sizeDirection * 0.1;
    if (p.size > 4 || p.size < 1) p.sizeDirection *= -1;

    // Update hue
    p.hue = (p.hue + 0.3) % 360;

    // Update trail
    if (frameCount.current % 2 === 0 && (Math.abs(p.vx) > 0.1 || Math.abs(p.vy) > 0.1)) {
      p.trail.push({
        x: p.x,
        y: p.y,
        hue: p.hue,
        alpha: p.alpha
      });
      if (p.trail.length > 15) p.trail.shift();
    }

    // Draw particle
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    gradient.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${Math.max(p.alpha, 0)})`);
    gradient.addColorStop(1, `hsla(${p.hue + 30}, 80%, 30%, ${Math.max(p.alpha, 0)})`);

    ctx.fillStyle = gradient;
    ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
    ctx.shadowColor = `hsl(${p.hue}, 80%, 60%)`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw trail
    if (p.trail.length > 1) {
      ctx.beginPath();
      ctx.lineWidth = 1.5;
      
      for (let i = 0; i < p.trail.length - 1; i++) {
        const alpha = (i / p.trail.length) * p.alpha * 0.7;
        ctx.strokeStyle = `hsla(${p.trail[i].hue}, 80%, 60%, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p.trail[i].x, p.trail[i].y);
        ctx.lineTo(p.trail[i + 1].x, p.trail[i + 1].y);
        ctx.stroke();
      }
    }

    return p.alpha > 0;
  }, [mousePos.x, mousePos.y]);

  // Update and draw dust particles
  const updateAndDrawDust = useCallback((d: DustParticle, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    d.x += d.vx;
    d.y += d.vy;

    // Wrap around edges
    if (d.x < -10) d.x = canvas.width + 10;
    if (d.x > canvas.width + 10) d.x = -10;
    if (d.y < -10) d.y = canvas.height + 10;
    if (d.y > canvas.height + 10) d.y = -10;

    // Draw dust
    ctx.fillStyle = `hsla(${d.hue}, 60%, 80%, 0.1)`;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  // Update and draw ripple
  const updateAndDrawRipple = useCallback((r: Ripple, ctx: CanvasRenderingContext2D) => {
    r.radius += 1;
    r.alpha = 1 - (r.radius / r.maxRadius);
    
    if (r.alpha <= 0) return false;
    
    ctx.strokeStyle = `hsla(${r.hue}, 80%, 60%, ${r.alpha * 0.5})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.stroke();
    
    return true;
  }, []);
  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles.current = createParticles(canvas);
      dustParticles.current = createDustParticles(canvas);
    };
    
    resizeCanvas();
    
    // Initialize particles
    if (particles.current.length === 0) {
      particles.current = createParticles(canvas);
    }
    
    if (dustParticles.current.length === 0) {
      dustParticles.current = createDustParticles(canvas);
    }

    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('click', handleClick);
    
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
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('click', handleClick);
    };
  }, [createDustParticles, createParticles, drawBackground, connectParticles, 
      handleClick, handleMouseLeave, handleMouseMove, updateAndDrawDust, 
      updateAndDrawParticle, updateAndDrawRipple]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-auto"
    />
  );
}
