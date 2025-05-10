// TL;DR of all inline comments:
// Particles magnetize to mouse position; hue shifting lines connect the particles and the mouse position
// Particle amount changes based on canvas size
// Particles gain momentum from mouse movement and bounce off the edges of the canvas
// Click to create a particle "explosion", clicking rapidly makes it more intense
// Try collecting some particles with the mouse, then clicking rapidly as the particles rotate around the mouse
// Dust particles created to add background texture; they do not interact with the mouse
// Background gradient shifts hues

// Grab the canvas element from the DOM
const canvas = document.getElementById("canvas");
// Get a 2D drawing context from the canvas
const ctx = canvas.getContext("2d");

// Arrays to hold various particle types
// (General particles, fireworks, dusty background, and ripples)
const particles = [];
const fireworkParticles = [];
const dustParticles = [];
const ripples = [];
const techRipples = [];

// A simple mouse state object to track the user's cursor
const mouse = (() => {
  let state = { x: null, y: null };
  return {
    get x() {
      return state.x;
    },
    get y() {
      return state.y;
    },
    set({ x, y }) {
      // Update the mouse position whenever the user moves the cursor
      state = { x, y };
    },
    reset() {
      // Clear mouse position when it leaves the canvas
      state = { x: null, y: null };
    }
  };
})();

// Some global state variables for background shifting and frame counting
let backgroundHue = 0;
let frameCount = 0;
let autoDrift = true; // If true, particles gently drift on their own

// Dynamically adjust the number of particles based on canvas size
function adjustParticleCount() {
  const particleConfig = {
    heightConditions: [200, 300, 400, 500, 600],
    widthConditions: [450, 600, 900, 1200, 1600],
    particlesForHeight: [40, 60, 70, 90, 110],
    particlesForWidth: [40, 50, 70, 90, 110]
  };

  let numParticles = 130;

  // Check the height and pick a suitable particle count
  for (let i = 0; i < particleConfig.heightConditions.length; i++) {
    if (canvas.height < particleConfig.heightConditions[i]) {
      numParticles = particleConfig.particlesForHeight[i];
      break;
    }
  }

  // Check the width and try to lower the particle count if needed
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

// Particle class handles both "normal" and "firework" particles
// I ended up combining them to avoid duplicating similar code
class Particle {
  constructor(x, y, isFirework = false) {
    const baseSpeed = isFirework
      ? Math.random() * 2 + 1 // fireworks move faster
      : Math.random() * 0.5 + 0.3; // regular particles move slowly

    // Assign various properties to give each particle some randomness
    Object.assign(this, {
      isFirework,
      x,
      y,
      vx: Math.cos(Math.random() * Math.PI * 2) * baseSpeed,
      vy: Math.sin(Math.random() * Math.PI * 2) * baseSpeed,
      size: isFirework ? Math.random() * 2 + 2 : Math.random() * 3 + 1,
      hue: Math.random() * 360,
      alpha: 1,
      sizeDirection: Math.random() < 0.5 ? -1 : 1,
      trail: []
    });
  }

  update(mouse) {
    // Calculate distance from mouse to apply interactive forces (if any)
    const dist =
      mouse.x !== null ? (mouse.x - this.x) ** 2 + (mouse.y - this.y) ** 2 : 0;

    if (!this.isFirework) {
      // Apply a force pushing particles away or toward the mouse if it's on screen
      const force = dist && dist < 22500 ? (22500 - dist) / 22500 : 0;

      // If mouse is not present and autoDrift is true, particles gently meander
      if (mouse.x === null && autoDrift) {
        this.vx += (Math.random() - 0.5) * 0.03;
        this.vy += (Math.random() - 0.5) * 0.03;
      }

      if (dist) {
        const sqrtDist = Math.sqrt(dist);
        // Slightly nudge particles toward the mouse position
        this.vx += ((mouse.x - this.x) / sqrtDist) * force * 0.1;
        this.vy += ((mouse.y - this.y) / sqrtDist) * force * 0.1;
      }

      // Dampen velocities a bit so they don't run off too wildly
      this.vx *= mouse.x !== null ? 0.99 : 0.998;
      this.vy *= mouse.x !== null ? 0.99 : 0.998;
    } else {
      // Firework particles fade out over time
      this.alpha -= 0.02;
    }

    // Update particle position
    this.x += this.vx;
    this.y += this.vy;

    // Bounce particles off canvas edges with a bit of energy loss
    if (this.x <= 0 || this.x >= canvas.width - 1) this.vx *= -0.9;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -0.9;

    // Make the particle pulse in size just a bit
    this.size += this.sizeDirection * 0.1;
    if (this.size > 4 || this.size < 1) this.sizeDirection *= -1;

    // Cycle through hue to create a shifting color effect
    this.hue = (this.hue + 0.3) % 360;

    // Leave a trail of previous positions to create a motion blur effect
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

  draw(ctx) {
    // Draw a gradient-based circle to represent the particle
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
    // Add a slight glow if the screen is large
    ctx.shadowBlur = canvas.width > 900 ? 10 : 0;
    ctx.shadowColor = `hsl(${this.hue}, 80%, 60%)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw the particle's trail as a faint line
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
    // Firework particles "die" when they fade out
    return this.isFirework && this.alpha <= 0;
  }
}

// Dust particles are static, background-like elements to add depth and interest
class DustParticle {
  constructor() {
    Object.assign(this, {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.5,
      hue: Math.random() * 360,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05
    });
  }

  update() {
    // Wrap around the edges so dust just cycles across the screen
    this.x = (this.x + this.vx + canvas.width) % canvas.width;
    this.y = (this.y + this.vy + canvas.height) % canvas.height;
    // Slowly shift hue for a subtle shimmering effect
    this.hue = (this.hue + 0.1) % 360;
  }

  draw(ctx) {
    // Draw faint circles
    ctx.fillStyle = `hsla(${this.hue}, 30%, 70%, 0.3)`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Ripples expand outward from a point and fade out, used for click and mouse effects
class Ripple {
  constructor(x, y, hue = 0, maxRadius = 30) {
    Object.assign(this, { x, y, radius: 0, maxRadius, alpha: 0.5, hue });
  }

  update() {
    // Ripples grow in radius and fade in alpha
    this.radius += 1.5;
    this.alpha -= 0.01;
    this.hue = (this.hue + 5) % 360;
  }

  draw(ctx) {
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

// Create initial sets of particles whenever we resize the canvas
function createParticles() {
  particles.length = 0;
  dustParticles.length = 0;

  const numParticles = adjustParticleCount();
  // Scatter some normal particles randomly around the canvas
  for (let i = 0; i < numParticles; i++) {
    particles.push(
      new Particle(Math.random() * canvas.width, Math.random() * canvas.height)
    );
  }
  // Add a bunch of dust particles to give some "texture" to the background
  for (let i = 0; i < 200; i++) {
    dustParticles.push(new DustParticle());
  }
}

// Keep canvas full size to fill the browser window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
}

// Draw a shifting background gradient
function drawBackground() {
  backgroundHue = (backgroundHue + 0.2) % 360;
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, `hsl(${backgroundHue}, 40%, 15%)`);
  gradient.addColorStop(1, `hsl(${(backgroundHue + 120) % 360}, 40%, 25%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawFlowerOfLifeGrid();
}

// Tekent een subtiel Flower of Life patroon op de achtergrond
function drawFlowerOfLifeGrid() {
  const radius = Math.max(canvas.width, canvas.height) / 18; // schaal met scherm
  const step = radius * Math.sin(Math.PI / 3); // verticale stap
  const cols = Math.ceil(canvas.width / radius) + 2;
  const rows = Math.ceil(canvas.height / step) + 2;
  ctx.save();
  ctx.globalAlpha = 0.13; // subtiele transparantie
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

// Teken een Flower of Life figuur met 7 overlappende cirkels
function drawFlowerOfLife(cx, cy, r) {
  // Hoofd-cirkel
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  // Omringende cirkels
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
  }
}


// Connect nearby particles with lines to form a kind of web or network
// I partitioned the space into grids to avoid checking every particle against every other particle.
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
          grid.get(key).forEach((neighbor) => {
            if (neighbor !== p) {
              const diffX = neighbor.x - p.x;
              const diffY = neighbor.y - p.y;
              const dist = diffX * diffX + diffY * diffY;
              if (dist < 10000) {
                // Use a hue mix of the two particles for the line color
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

// Main animation loop: draw background, update & draw all entities, and connect particles
function animate() {
  drawBackground();

  // Update and draw all entities. Loop backwards in case we remove items.
  [dustParticles, particles, ripples, techRipples, fireworkParticles].forEach(
    (arr) => {
      for (let i = arr.length - 1; i >= 0; i--) {
        const obj = arr[i];
        // Pass mouse because some objects depend on mouse position
        obj.update(mouse);
        obj.draw(ctx);
        // Remove done or dead objects to free up resources
        if (obj.isDone?.() || obj.isDead?.()) arr.splice(i, 1);
      }
    }
  );

  connectParticles();
  frameCount++;
  requestAnimationFrame(animate);
}

// Mousemove: set mouse position and add a ripple effect
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.set({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  techRipples.push(new Ripple(mouse.x, mouse.y));
  autoDrift = false; // Stop auto drifting when user actively moves the mouse
});

// Mouse leaves: reset mouse position and re-enable auto drift
canvas.addEventListener("mouseleave", () => {
  mouse.reset();
  autoDrift = true;
});

// Click to create a ripple and firework-like explosion at the click point
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  ripples.push(new Ripple(clickX, clickY, 0, 60));

  // Add some spark-like particles shooting out
  for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    const particle = new Particle(clickX, clickY, true);
    particle.vx = Math.cos(angle) * speed;
    particle.vy = Math.sin(angle) * speed;
    fireworkParticles.push(particle);
  }
});

// Whenever the window is resized, adjust canvas and particles
window.addEventListener("resize", resizeCanvas);

// ---- CARD NAVIGATION LOGIC ----
const app = document.getElementById('app');

// Structuur van de kaarten
const structure = {
  start: {
    cards: [
      { label: 'Start', next: 'main' }
    ],
    back: false
  },
  main: {
    cards: [
      { label: 'Kaart 1', next: 'kaart1' },
      { label: 'Kaart 2', next: 'kaart2' },
      { label: 'Kaart 3', next: 'kaart3' },
      { label: 'Kaart 4', next: 'kaart4' }
    ],
    back: true
  },
  kaart1: {
    cards: [
      { label: 'Kaart 1A', next: 'kaart1a' },
      { label: 'Kaart 1B', next: 'kaart1b' }
    ],
    back: true
  },
  kaart2: {
    cards: [
      { label: 'Kaart 2A', next: 'kaart2a' },
      { label: 'Kaart 2B', next: 'kaart2b' }
    ],
    back: true
  },
  kaart3: {
    cards: [
      { label: 'Kaart 3A', next: 'kaart3a' },
      { label: 'Kaart 3B', next: 'kaart3b' }
    ],
    back: true
  },
  kaart4: {
    cards: [
      { label: 'Kaart 4A', next: 'kaart4a' },
      { label: 'Kaart 4B', next: 'kaart4b' }
    ],
    back: true
  },
  // Laatste kaarten (blanco of met tekst)
  kaart1a: { cards: [{ label: 'Dit is Kaart 1A', next: null }], back: true },
  kaart1b: { cards: [{ label: 'Dit is Kaart 1B', next: null }], back: true },
  kaart2a: { cards: [{ label: 'Dit is Kaart 2A', next: null }], back: true },
  kaart2b: { cards: [{ label: 'Dit is Kaart 2B', next: null }], back: true },
  kaart3a: { cards: [{ label: 'Dit is Kaart 3A', next: null }], back: true },
  kaart3b: { cards: [{ label: 'Dit is Kaart 3B', next: null }], back: true },
  kaart4a: { cards: [{ label: 'Dit is Kaart 4A', next: null }], back: true },
  kaart4b: { cards: [{ label: 'Dit is Kaart 4B', next: null }], back: true },
};

let current = 'start';

function renderCards(state) {
  const conf = structure[state];
  // Verzamel alle unieke kaartkeys behalve huidige
  const allKeys = Object.keys(structure);
  // Hamburger menu met ALTIJD alle links
  const toplinks = `
    <div class="toplinks">
      <button id="hamburger-menu" aria-label="Open menu">&#9776;</button>
      <div class="nav-links">
        ${allKeys.map(k => `<a href="#" class="goto-card" data-goto="${k}">${k}</a>`).join('')}
      </div>
    </div>
  `;
  app.innerHTML = `
    <header class="app-header">
      <h1>Particle Magnet Canvas</h1>
    </header>
    ${toplinks}
    <div class="cards">
      ${conf.cards.map(card => `
        <div class="card" data-next="${card.next}">
          <span class="card-label">${card.label}</span>
        </div>
      `).join('')}
    </div>
    ${conf.back ? '<a href="#" id="backlink" style="display:block;text-align:center;margin-top:2vmin;color:#fff;font-size:2vmin;text-decoration:underline;">Terug naar Start</a>' : ''}
    <footer class="app-footer">
      &copy; 2025 Particle Magnet Canvas
    </footer>
  `;

  // Hamburger menu event listeners na elke render toevoegen
  const hamburger = document.getElementById('hamburger-menu');
  const toplinksDiv = document.querySelector('.toplinks');
  // Verwijder oude event handler als die bestaat
  if (window._hamburgerDocHandler) {
    document.removeEventListener('click', window._hamburgerDocHandler);
    window._hamburgerDocHandler = null;
  }
  if (hamburger && toplinksDiv) {
    hamburger.onclick = function(e) {
      toplinksDiv.classList.toggle('menu-open');
      e.stopPropagation();
    };
    window._hamburgerDocHandler = function(e) {
      if (toplinksDiv.classList.contains('menu-open') && !toplinksDiv.contains(e.target)) {
        toplinksDiv.classList.remove('menu-open');
      }
    };
    document.addEventListener('click', window._hamburgerDocHandler);
  }
}



// Event delegation voor kaarten, terug-link en dropdown-menu
app.addEventListener('click', function(e) {
  // Dropdown menu knop
  if (e.target.classList.contains('dropdown-btn')) {
    const dropdown = e.target.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
      // Sluit andere open menu's
      document.querySelectorAll('.dropdown.open').forEach(d => {
        if (d !== dropdown) d.classList.remove('open');
      });
    }
    e.stopPropagation();
    e.preventDefault();
    return;
  }
  // Dropdown menu link
  if (e.target.classList.contains('goto-card')) {
    const goto = e.target.dataset.goto;
    if (goto) {
      current = goto;
      renderCards(current);
      e.preventDefault();
      return;
    }
  }
  // Card click
  const card = e.target.closest('.card');
  if (card && card.dataset.next && !e.target.classList.contains('dropdown-btn')) {
    if (card.dataset.next) {
      current = card.dataset.next;
      renderCards(current);
    }
  }
  // Terug naar Start
  if (e.target.id === 'backlink') {
    current = 'start';
    renderCards(current);
    e.preventDefault();
  }
});
// Sluit dropdown bij klik buiten kaart
window.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu functionaliteit
  const hamburger = document.getElementById('hamburger-menu');
  const toplinks = document.querySelector('.toplinks');
  if (hamburger && toplinks) {
    hamburger.addEventListener('click', function(e) {
      toplinks.classList.toggle('menu-open');
      e.stopPropagation();
    });
    // Sluit menu bij klik buiten menu
    document.addEventListener('click', function(e) {
      if (toplinks.classList.contains('menu-open') && !toplinks.contains(e.target)) {
        toplinks.classList.remove('menu-open');
      }
    });
  }

  document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
});

// Startscherm tonen
renderCards(current);

// Initialize everything
resizeCanvas();
animate();
