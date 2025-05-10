import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // ----- Reimplement needed parts from attached_assets/main.js -----
    const particles: any[] = [];
    const fireworkParticles: any[] = [];
    const dustParticles: any[] = [];
    const ripples: any[] = [];
    const techRipples: any[] = [];
    
    // Mouse state object
    const mouse = (() => {
      let state = { x: null as number | null, y: null as number | null };
      return {
        get x() {
          return state.x;
        },
        get y() {
          return state.y;
        },
        set({ x, y }: { x: number; y: number }) {
          state = { x, y };
        },
        reset() {
          state = { x: null, y: null };
        }
      };
    })();
    
    // Global state variables
    let backgroundHue = 0;
    let frameCount = 0;
    let autoDrift = true;
    
    // Dynamically adjust particle count based on canvas size
    function adjustParticleCount() {
      const particleConfig = {
        heightConditions: [200, 300, 400, 500, 600],
        widthConditions: [450, 600, 900, 1200, 1600],
        particlesForHeight: [40, 60, 70, 90, 110],
        particlesForWidth: [40, 50, 70, 90, 110]
      };
    
      let numParticles = 130;
    
      // Check height and pick suitable particle count
      for (let i = 0; i < particleConfig.heightConditions.length; i++) {
        if (canvas.height < particleConfig.heightConditions[i]) {
          numParticles = particleConfig.particlesForHeight[i];
          break;
        }
      }
    
      // Check width and try to lower particle count if needed
      for (let i = 0; i < particleConfig.widthConditions.length; i++) {
        if (canvas.width < particleConfig.widthConditions[i]) {
          numParticles = Math.min(
            numParticles,
            particleConfig.particlesForWidth[i]
          );
          break;
        }
      }
    
      return numParticles;
    }
    
    // Particle Class implementation
    class Particle {
      isFirework: boolean;
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;
      alpha: number;
      sizeDirection: number;
      trail: any[];
      
      constructor(x: number, y: number, isFirework = false) {
        const baseSpeed = isFirework
          ? Math.random() * 2 + 1
          : Math.random() * 0.5 + 0.3;
        
        this.isFirework = isFirework;
        this.x = x;
        this.y = y;
        this.vx = Math.cos(Math.random() * Math.PI * 2) * baseSpeed;
        this.vy = Math.sin(Math.random() * Math.PI * 2) * baseSpeed;
        this.size = isFirework ? Math.random() * 2 + 2 : Math.random() * 3 + 1;
        this.hue = Math.random() * 360;
        this.alpha = 1;
        this.sizeDirection = Math.random() < 0.5 ? -1 : 1;
        this.trail = [];
      }
    
      update(mouse: { x: number | null; y: number | null }) {
        const dist =
          mouse.x !== null ? (mouse.x - this.x) ** 2 + (mouse.y - this.y) ** 2 : 0;
    
        if (!this.isFirework) {
          const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;
    
          if (mouse.x === null && autoDrift) {
            this.vx += (Math.random() - 0.5) * 0.03;
            this.vy += (Math.random() - 0.5) * 0.03;
          }
    
          if (dist) {
            const sqrtDist = Math.sqrt(dist);
            this.vx += ((mouse.x! - this.x) / sqrtDist) * force * 0.1;
            this.vy += ((mouse.y! - this.y) / sqrtDist) * force * 0.1;
          }
    
          this.vx *= mouse.x !== null ? 0.99 : 0.998;
          this.vy *= mouse.x !== null ? 0.99 : 0.998;
        } else {
          this.alpha -= 0.02;
        }
    
        this.x += this.vx;
        this.y += this.vy;
    
        if (this.x <= 0 || this.x >= canvas.width - 1) this.vx *= -0.9;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -0.9;
    
        this.size += this.sizeDirection * 0.1;
        if (this.size > 4 || this.size < 1) this.sizeDirection *= -1;
    
        this.hue = (this.hue + 0.3) % 360;
    
        if (
          frameCount % 2 === 0 &&
          (Math.abs(this.vx) > 0.1 || Math.abs(this.vy) > 0.1)
        ) {
          this.trail.push({
            x: this.x,
            y: this.y,
            hue: this.hue,
            alpha: this.alpha
          });
          if (this.trail.length > 15) this.trail.shift();
        }
      }
    
      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(
          0,
          `hsla(${this.hue}, 80%, 60%, ${Math.max(this.alpha, 0)})`
        );
        gradient.addColorStop(
          1,
          `hsla(${this.hue + 30}, 80%, 30%, ${Math.max(this.alpha, 0)})`
        );
    
        ctx.fillStyle = gradient;
        ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
        ctx.shadowColor = `hsl(${this.hue}, 80%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
    
        if (this.trail.length > 1) {
          ctx.beginPath();
          ctx.lineWidth = 1.5;
          for (let i = 0; i < this.trail.length - 1; i++) {
            const { x: x1, y: y1, hue: h1, alpha: a1 } = this.trail[i];
            const { x: x2, y: y2 } = this.trail[i + 1];
            ctx.strokeStyle = `hsla(${h1}, 80%, 60%, ${Math.max(a1, 0)})`;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
          }
          ctx.stroke();
        }
      }
    
      isDead() {
        return this.isFirework && this.alpha <= 0;
      }
    }
    
    // DustParticle implementation
    class DustParticle {
      x: number;
      y: number;
      size: number;
      hue: number;
      vx: number;
      vy: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.hue = Math.random() * 360;
        this.vx = (Math.random() - 0.5) * 0.05;
        this.vy = (Math.random() - 0.5) * 0.05;
      }
    
      update() {
        this.x = (this.x + this.vx + canvas.width) % canvas.width;
        this.y = (this.y + this.vy + canvas.height) % canvas.height;
        this.hue = (this.hue + 0.1) % 360;
      }
    
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `hsla(${this.hue}, 30%, 70%, 0.3)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Ripple implementation 
    class Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      hue: number;
      
      constructor(x: number, y: number, hue = 0, maxRadius = 30) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = maxRadius;
        this.alpha = 0.5;
        this.hue = hue;
      }
    
      update() {
        this.radius += 1.5;
        this.alpha -= 0.01;
        this.hue = (this.hue + 5) % 360;
      }
    
      draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = `hsla(${this.hue}, 80%, 60%, ${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    
      isDone() {
        return this.alpha <= 0;
      }
    }
    
    // Create initial particles
    function createParticles() {
      particles.length = 0;
      dustParticles.length = 0;
    
      const numParticles = adjustParticleCount();
      for (let i = 0; i < numParticles; i++) {
        particles.push(
          new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
        );
      }
      for (let i = 0; i < 200; i++) {
        dustParticles.push(new DustParticle());
      }
    }
    
    // Draw shifting background gradient
    function drawBackground() {
      backgroundHue = (backgroundHue + 0.2) % 360;
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `hsl(${backgroundHue}, 40%, 15%)`);
      gradient.addColorStop(1, `hsl(${(backgroundHue + 120) % 360}, 40%, 25%)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawFlowerOfLifeGrid();
    }
    
    // Draw a subtle Flower of Life pattern on the background
    function drawFlowerOfLifeGrid() {
      const radius = Math.max(canvas.width, canvas.height) / 18;
      const step = radius * Math.sin(Math.PI / 3);
      const cols = Math.ceil(canvas.width / radius) + 2;
      const rows = Math.ceil(canvas.height / step) + 2;
      ctx.save();
      ctx.globalAlpha = 0.13;
      ctx.strokeStyle = `hsl(${(backgroundHue + 30) % 360}, 30%, 60%)`;
      ctx.lineWidth = 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * radius + ((row % 2) * radius) / 2;
          const y = row * step;
          drawFlowerOfLife(x, y, radius * 0.5);
        }
      }
      ctx.restore();
    }
    
    // Draw a Flower of Life figure with 7 overlapping circles
    function drawFlowerOfLife(cx: number, cy: number, r: number) {
      // Main circle
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
      // Surrounding circles
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    
    // Connect nearby particles with lines to form a web
    function connectParticles() {
      const gridSize = 120;
      const grid = new Map();
    
      particles.forEach((p) => {
        const key = `${Math.floor(p.x / gridSize)},${Math.floor(p.y / gridSize)}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(p);
      });
    
      ctx.lineWidth = 1.5;
      particles.forEach((p) => {
        const gridX = Math.floor(p.x / gridSize);
        const gridY = Math.floor(p.y / gridSize);
    
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${gridX + dx},${gridY + dy}`;
            if (grid.has(key)) {
              grid.get(key).forEach((neighbor: any) => {
                if (neighbor !== p) {
                  const diffX = neighbor.x - p.x;
                  const diffY = neighbor.y - p.y;
                  const dist = diffX * diffX + diffY * diffY;
                  if (dist < 10000) {
                    ctx.strokeStyle = `hsla(${
                      (p.hue + neighbor.hue) / 2
                    }, 80%, 60%, ${1 - Math.sqrt(dist) / 100})`;
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
    }
    
    // Main animation loop
    function animate() {
      drawBackground();
    
      // Update and draw all entities
      [dustParticles, particles, ripples, techRipples, fireworkParticles].forEach(
        (arr) => {
          for (let i = arr.length - 1; i >= 0; i--) {
            const obj = arr[i];
            obj.update(mouse);
            obj.draw(ctx);
            if (obj.isDone?.() || obj.isDead?.()) arr.splice(i, 1);
          }
        }
      );
    
      connectParticles();
    
      frameCount++;
      requestAnimationFrame(animate);
    }
    
    // Handle mouse events
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.set({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
    
    canvas.addEventListener('mouseout', () => {
      mouse.reset();
    });
    
    canvas.addEventListener('click', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add ripple effect
      ripples.push(new Ripple(x, y, Math.random() * 360, 50));
      
      // Add firework particles
      for (let i = 0; i < 30; i++) {
        fireworkParticles.push(new Particle(x, y, true));
      }
    });
    
    // Initialize particles and start animation
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', () => {});
      canvas.removeEventListener('mouseout', () => {});
      canvas.removeEventListener('click', () => {});
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed left-0 top-0 w-full h-full z-1 pointer-events-auto"
    />
  );
}
