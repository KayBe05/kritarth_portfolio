const App = {
  // --- UTILITY FUNCTIONS ---
  utils: {
    debounce(func, delay = 100) {
      let timeout;
      return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    }
  },

  // --- STATE & CONFIG ---
  config: {
    header: null,
    backToTopButton: null,
    navLinks: [],
    sections: [],
  },

  // --- INITIALIZATION ---
  init() {
    // Wait for the DOM to be ready before running any scripts
    document.addEventListener('DOMContentLoaded', () => {
      console.log("App Initialized");

      // Cache DOM elements for reuse
      this.config.header = document.getElementById('header');
      this.config.navLinks = document.querySelectorAll('.nav-link');
      this.config.sections = document.querySelectorAll('section[id]');

      // Initialize all modules
      this.ui.init();
      this.navigation.init();
      this.portfolio.init();
      this.contactForm.init();
      this.animations.init();
      this.errorHandling.init();

      // Setup a single, consolidated scroll listener
      window.addEventListener('scroll', this.utils.debounce(this.handleScroll, 100));
    });
  },

  // --- MODULES ---

  /**
   * UI Components (Preloader, Back to Top, etc.)
   */
  ui: {
    init() {
      this.setupPreloader();
      this.setupBackToTop();
      this.setupHeroTypingEffect();
      this.setupSkillTagsEffect();
    },

    setupPreloader() {
      const preloader = document.createElement('div');
      preloader.className = 'preloader';
      preloader.innerHTML = '<div class="loader"></div>';
      document.body.prepend(preloader);

      // Use 'DOMContentLoaded' for a faster perceived load time
      window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
          preloader.classList.add('hidden');
          // Remove from DOM after transition
          preloader.addEventListener('transitionend', () => preloader.remove());
        }, 300);
      });
    },

    setupBackToTop() {
      const button = document.createElement('a');
      button.className = 'back-to-top';
      button.href = '#';
      button.setAttribute('aria-label', 'Scroll to top');
      button.innerHTML = '<i class="fas fa-arrow-up"></i>';
      document.body.appendChild(button);

      button.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      App.config.backToTopButton = button; // Store reference for scroll handler
    },

    setupHeroTypingEffect() {
      const heroTitle = document.querySelector('.hero-title');
      if (!heroTitle) return;

      // Show title immediately for good UX, then add animation
      heroTitle.style.opacity = '1';
      setTimeout(() => {
        heroTitle.classList.add('typing-animation');
      }, 100);
    },

    setupSkillTagsEffect() {
      const container = document.querySelector('.skills-container'); // Delegate from a parent
      if (!container) return;

      // Event delegation is more performant than adding listeners to each tag
      container.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('skill-tag')) {
          e.target.style.transform = 'translateY(-5px)';
        }
      });

      container.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('skill-tag')) {
          e.target.style.transform = 'translateY(0)';
        }
      });
    }
  },

  /**
   * Scroll-based Animations (using IntersectionObserver)
   */
  animations: {
    init() {
      this.setupScrollAnimations();
      this.initSkillBars();
    },

    setupScrollAnimations() {
      const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial, .about-content, #skills .skills-container');

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'animate');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      }, {
        rootMargin: '0px 0px -100px 0px' // Trigger when element is 100px into view
      });

      animatedElements.forEach(el => observer.observe(el));
    },

    initSkillBars() {
      document.querySelectorAll('.skill-level').forEach(skill => {
        skill.style.setProperty('--skill-width', skill.dataset.value);
      });
    }
  },

  /**
   * Navigation Logic
   */
  navigation: {
    init() {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');

      if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
          const isActive = hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
          hamburger.setAttribute('aria-expanded', isActive);
        });

        App.config.navLinks.forEach(link => {
          link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
          });
        });
      }

      this.setupSmoothScrolling();
      App.highlightNavOnScroll(); // Initial call
    },

    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            const headerHeight = App.config.header ? App.config.header.offsetHeight : 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  },

  /**
   * Portfolio Data & Popup Logic
   */
  portfolio: {
    allProjects: [
      {
        id: 'youtube-clone',
        title: 'YouTube Clone',
        category: 'Frontend Development',
        image: 'proj-photos/youtube/youtube-github.png',
        description: 'A fully responsive YouTube clone built with modern web technologies, featuring video playback, search functionality, and responsive design.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        liveLink: 'project.html?id=youtube-clone',
      },
      {
        id: 'portfolio-website',
        title: 'Portfolio Website',
        category: 'Full Stack Development',
        image: 'proj-photos/portfolio/hero.png',
        description: 'A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and interactive elements.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations'],
        liveLink: 'project.html?id=portfolio-website',
      },
      {
        id: 'ecommerce-platform',
        title: 'E-commerce Platform',
        category: 'Full Stack Development',
        image: 'proj-photos/ecommerce1.png',
        description: 'A comprehensive e-commerce platform with shopping cart, payment integration, user authentication, and admin dashboard.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
        liveLink: 'project.html?id=ecommerce-app',
      },
      {
        id: 'disaster-management',
        title: 'Disaster Management System',
        category: 'Web Design',
        image: 'proj-photos/diaps/diaps-landing.png',
        description: 'A comprehensive disaster management system for emergency response coordination and resource management.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
        liveLink: 'https://github.com/KayBe05/disaster-management',
      },
      {
        id: 'cloud-collab',
        title: 'Cloud Collaboration Platform',
        category: 'Cloud Computing',
        image: 'proj-photos/cloud-collab/cloud-collab-github.png',
        description: 'A cloud-based collaboration platform enabling real-time document sharing, editing, and team communication.',
        technologies: ['AWS', 'React', 'Node.js', 'WebSocket', 'MongoDB'],
        liveLink: '#',
      },
      {
        id: 'todoApp',
        title: 'Dynamic To-Do App',
        category: 'Frontend Web Development',
        image: 'proj-photos/to-do-app/home.png',
        description: "A clean, interactive To-Do app with animations, filters, and persistent storage using vanilla JS.",
        technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
        liveLink: 'project.html?id=todoApp',
      },
      // Add more projects here
      {
        id: 'weather-app',
        title: 'Weather Forecast App',
        category: 'API Integration',
        image: '/api/placeholder/600/400',
        description: 'A weather application with real-time forecasts, location-based weather data, and interactive maps.',
        technologies: ['JavaScript', 'OpenWeather API', 'Geolocation', 'Chart.js'],
        liveLink: '#',
      },
      {
        id: 'task-manager',
        title: 'Task Management System',
        category: 'Full Stack Development',
        image: '/api/placeholder/600/400',
        description: 'A comprehensive task management system with project tracking, team collaboration, and deadline management.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Socket.io'],
        liveLink: '#',
      },
      {
        id: 'blog-platform',
        title: 'Blog Platform',
        category: 'Full Stack Development',
        image: '/api/placeholder/600/400',
        description: 'A modern blogging platform with rich text editor, comment system, and user authentication.',
        technologies: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
        liveLink: '#',
      }
    ],

    init() {
      this.popup = document.getElementById('projectsPopup');
      this.popupGrid = document.getElementById('popupProjectsGrid');
      const showAllBtn = document.getElementById('showAllProjectsBtn');
      const closeBtn = document.getElementById('closePopup');

      if (!this.popup || !showAllBtn || !closeBtn || !this.popupGrid) return;

      showAllBtn.addEventListener('click', () => this.open());
      closeBtn.addEventListener('click', () => this.close());
      this.popup.addEventListener('click', (e) => {
        if (e.target === this.popup) this.close();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.popup.classList.contains('active')) {
          this.close();
        }
      });
    },

    open() {
      this.populate();
      this.popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    },

    close() {
      this.popup.classList.remove('active');
      document.body.style.overflow = '';
    },

    populate() {
      this.popupGrid.innerHTML = this.allProjects.map(project => `
                <div class="popup-project-item">
                    <img src="${project.image}" alt="${project.title}" class="popup-project-image" loading="lazy">
                    <div class="popup-project-content">
                        <h3 class="popup-project-title">${project.title}</h3>
                        <p class="popup-project-category">${project.category}</p>
                        <p class="popup-project-description">${project.description}</p>
                        <div class="popup-project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="popup-project-links">
                            <a href="${project.liveLink}" class="popup-project-btn" ${project.liveLink.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                <i class="fas fa-external-link-alt"></i> View
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');
    }
  },

  /**
   * Contact Form Validation and Submission
   */
  contactForm: {
    init() {
      const form = document.getElementById('contact-form'); // Assuming one main form
      if (!form) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validate(form)) {
          console.log('Form is valid and ready to be submitted.');
          this.showSuccessMessage(form);
          form.reset();
        }
      });
    },

    validate(form) {
      let isValid = true;
      form.querySelectorAll('input[required], textarea[required]').forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          // Add validation feedback (e.g., add a class)
        }
      });
      return isValid;
    },

    showSuccessMessage(form) {
      const message = document.createElement('div');
      message.className = 'success-message';
      message.textContent = 'Thank you! Your message has been sent.';
      form.appendChild(message);

      setTimeout(() => {
        message.style.opacity = '0';
        message.addEventListener('transitionend', () => message.remove());
      }, 5000);
    }
  },

  /**
   * Basic Error Handling
   */
  errorHandling: {
    init() {
      // Handle broken images by replacing them with a placeholder
      document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
          console.error('Image failed to load:', this.src);
          this.src = 'data:image/svg+xml;base64,...'; // Placeholder SVG
          this.alt = 'Image not found';
        });
      });
    }
  },

  // --- GLOBAL EVENT HANDLERS ---

  /**
   * A single handler for all scroll-related effects.
   */
  handleScroll() {
    const scrollY = window.scrollY;

    // 1. Toggle header 'scrolled' class
    if (this.config.header) {
      this.config.header.classList.toggle('scrolled', scrollY > 50);
    }

    // 2. Toggle 'back to top' button visibility
    if (this.config.backToTopButton) {
      this.config.backToTopButton.classList.toggle('visible', scrollY > 300);
    }

    // 3. Highlight active nav link
    this.highlightNavOnScroll();
  },

  /**
   * Updates the active navigation link based on scroll position.
   */
  highlightNavOnScroll() {
    let currentSectionId = '';
    const offset = (this.config.header ? this.config.header.offsetHeight : 70) + 20;

    this.config.sections.forEach(section => {
      const sectionTop = section.offsetTop - offset;
      if (window.scrollY >= sectionTop) {
        currentSectionId = section.getAttribute('id');
      }
    });

    this.config.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
};

// Start the application
App.init();