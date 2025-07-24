// Header scroll effect
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
  });
}

// Scroll to top button
const scrollTopBtn = document.querySelector('.terms-scroll-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Terms card hover effects
const termsCards = document.querySelectorAll('.terms-card');

termsCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    const icon = this.querySelector('.terms-icon-wrapper');
    if (icon) {
      icon.style.transform = 'rotate(360deg) scale(1.1)';
    }
  });

  card.addEventListener('mouseleave', function () {
    const icon = this.querySelector('.terms-icon-wrapper');
    if (icon) {
      icon.style.transform = 'rotate(0) scale(1)';
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Animation trigger on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Initial animation on page load
  setTimeout(() => {
    fadeElements.forEach(element => {
      element.classList.add('visible');
    });
  }, 100);
  
  // Scroll indicator functionality
  const scrollIndicator = document.getElementById('scrollIndicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const termsSection = document.querySelector('.terms-section');
      if (termsSection) {
        termsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Parallax effect for shapes
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
      const speed = index * 0.1 + 0.2;
      shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
    });

    // Fade out hero content on scroll
    const heroContent = document.querySelector('.terms-hero-content');
    if (heroContent) {
      const opacity = 1 - (scrollY / 500);
      heroContent.style.opacity = opacity > 0 ? opacity : 0;
    }
  });

  // Initialize GSAP animations
  if (typeof gsap !== 'undefined') {
    gsap.from('.terms-title', {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.terms-subtitle', {
      duration: 1.2,
      y: 30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.5
    });

    gsap.from('.terms-date', {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: 'power2.out',
      delay: 0.8
    });
  }
});