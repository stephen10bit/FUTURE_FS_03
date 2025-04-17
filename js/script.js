document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
        });
    }
});

// Add scroll event for nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Theme Toggle Functionality
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

// Check for saved theme or prefer color scheme
const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
html.setAttribute('data-theme', savedTheme);

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

function filterProducts(category) {
    // Filter logic here
}
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
  
    // Filter function
    function filterProducts(category) {
      productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
  
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
      });
    }
  
    // Event listeners for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filter;
        filterProducts(filterValue);
        
        // Optional: Save filter preference
        localStorage.setItem('activeFilter', filterValue);
      });
    });
  
    // Optional: Load saved filter preference
    const savedFilter = localStorage.getItem('activeFilter') || 'all';
    filterProducts(savedFilter);
  });

  // particle-network.js
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.particle-network');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random positioning
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
    }
  });

  // mouse-follow.js
document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    const particles = [];
    const particleCount = 15;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'mouse-particle';
      hero.appendChild(particle);
      particles.push({
        element: particle,
        x: 0,
        y: 0,
        delay: i * 0.1
      });
    }
    
    // Update positions
    document.addEventListener('mousemove', (e) => {
      particles.forEach((particle, i) => {
        setTimeout(() => {
          particle.x += (e.clientX - particle.x) * 0.1;
          particle.y += (e.clientY - particle.y) * 0.1;
          particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        }, i * 30);
      });
    });
  });