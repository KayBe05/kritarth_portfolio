// Utility functions
const utils = {
  // Debounce function to limit frequent execution
  debounce: (func, delay) => {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  },

  // Animate elements when they come into view
  animateOnScroll: () => {
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    animateElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add('fade-in');
      }
    });
  }
};

// DOM manipulation for UI components
const ui = {
  // Initialize and handle the preloader
  preloader: {
    init: () => {
      const preloader = document.createElement('div');
      preloader.className = 'preloader';
      preloader.innerHTML = '<div class="loader"></div>';
      document.body.appendChild(preloader);

      // Remove preloader when page is fully loaded
      window.addEventListener('load', () => {
        // Check if all images are loaded
        const images = document.querySelectorAll('img');
        let loadedImages = 0;

        const imageLoaded = () => {
          loadedImages++;
          if (loadedImages >= images.length) {
            setTimeout(() => {
              preloader.classList.add('hidden');
              setTimeout(() => preloader.remove(), 500);
            }, 500);
          }
        };

        if (images.length === 0) {
          preloader.classList.add('hidden');
          setTimeout(() => preloader.remove(), 500);
        } else {
          images.forEach(img => {
            if (img.complete) {
              imageLoaded();
            } else {
              img.addEventListener('load', imageLoaded);
              img.addEventListener('error', imageLoaded); // Handle error too
            }
          });
        }
      });
    }
  },

  // Create and manage back to top button
  backToTop: {
    init: () => {
      const backToTopButton = document.createElement('a');
      backToTopButton.className = 'back-to-top';
      backToTopButton.setAttribute('href', '#');
      backToTopButton.setAttribute('aria-label', 'Scroll to top');
      backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
      document.body.appendChild(backToTopButton);

      backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // Update visibility on scroll
      window.addEventListener('scroll', utils.debounce(() => {
        if (window.scrollY > 300) {
          backToTopButton.classList.add('visible');
        } else {
          backToTopButton.classList.remove('visible');
        }
      }, 100));
    }
  },

  // Initialize hero section typing effect
  heroTypingEffect: {
    init: () => {
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        const titleText = heroTitle.innerHTML;
        const typingSpeed = 50; // milliseconds per character

        // Only do typing animation on homepage
        if (window.location.pathname === '/' || window.location.pathname.includes('index')) {
          // Clear the title and prepare for typing animation
          heroTitle.innerHTML = '';
          let charIndex = 0;

          // Function to type the title character by character
          function typeTitle() {
            if (charIndex < titleText.length) {
              heroTitle.innerHTML += titleText.charAt(charIndex);
              charIndex++;
              setTimeout(typeTitle, typingSpeed);
            }
          }

          // Start typing animation after a short delay
          setTimeout(typeTitle, 500);
        }
      }
    }
  },

  // Add hover effects to skill tags
  skillTagsEffect: {
    init: () => {
      const skillTags = document.querySelectorAll('.skill-tag');

      skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function () {
          this.style.transform = 'translateY(-5px)';
        });

        tag.addEventListener('mouseleave', function () {
          this.style.transform = 'translateY(0)';
        });
      });
    }
  }
};

// Skills animation
function animateSkills() {
  const skillsSection = document.querySelector('#skills');
  const skillsContainer = document.querySelector('.skills-container');

  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Function to animate when scrolling
  function checkScroll() {
    if (isInViewport(skillsSection)) {
      skillsContainer.classList.add('animate');
      // Remove scroll listener once animation is triggered
      window.removeEventListener('scroll', checkScroll);
    }
  }

  // Listen for scroll event
  window.addEventListener('scroll', checkScroll);

  // Check on initial load too
  checkScroll();
}

// Initialize skill bars with their data-value property
function initSkillBars() {
  const skillLevels = document.querySelectorAll('.skill-level');
  skillLevels.forEach(skill => {
    skill.style.setProperty('--skill-width', skill.getAttribute('data-value'));
  });
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  initSkillBars();
  animateSkills();

  // Add hover effect to skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      const icon = this.querySelector('.skill-icon');
      icon.style.transform = 'rotate(10deg) scale(1.2)';
    });

    item.addEventListener('mouseleave', function () {
      const icon = this.querySelector('.skill-icon');
      icon.style.transform = '';
    });
  });
});

// Navigation functionality
const navigation = {
  init: () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    // Get header by id first (for better performance), fallback to querySelector
    const header = document.getElementById('header') || document.querySelector('#header');

    // Enhanced navigation setup
    if (hamburger) {
      hamburger.setAttribute('aria-label', 'Toggle navigation menu');
      hamburger.setAttribute('aria-expanded', 'false');

      // Toggle mobile menu with accessibility attributes
      hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (hamburger) {
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
        navMenu.classList.remove('active');
      });
    });

    // Header scroll effect - trigger at 50px instead of 100px for quicker visual feedback
    window.addEventListener('scroll', utils.debounce(() => {
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }, 100));

    // Active navigation highlighting based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function highlightNavOnScroll() {
      let scrollPosition = window.scrollY + 150; // Adding offset for header

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          if (navLink) {
            navLink.classList.add('active');
          }
        }
      });
    }

    // Initial call to set active link on page load
    highlightNavOnScroll();

    // Update active link on scroll with debounce for performance
    window.addEventListener('scroll', utils.debounce(highlightNavOnScroll, 100));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Skip empty anchors
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();

          // Get header height dynamically for accurate scrolling
          const headerHeight = header ? header.offsetHeight : 70;

          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

const allProjects = [
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
    id: 'banking-dashboard',
    title: 'Banking Dashboard',
    category: 'API Integration',
    image: '/api/placeholder/600/400',
    description: 'A modern banking dashboard with transaction management, account overview, and financial analytics.',
    technologies: ['React', 'Chart.js', 'REST API', 'JWT Authentication'],
    liveLink: 'oh.html',
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
];

// Portfolio popup functionality
const portfolioPopup = {
  init: () => {
    const showAllBtn = document.getElementById('showAllProjectsBtn');
    const popup = document.getElementById('projectsPopup');
    const closeBtn = document.getElementById('closePopup');
    const popupGrid = document.getElementById('popupProjectsGrid');

    if (showAllBtn) {
      showAllBtn.addEventListener('click', () => {
        portfolioPopup.openPopup();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        portfolioPopup.closePopup();
      });
    }

    // Close popup when clicking outside content
    if (popup) {
      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          portfolioPopup.closePopup();
        }
      });
    }

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && popup.classList.contains('active')) {
        portfolioPopup.closePopup();
      }
    });
  },

  openPopup: () => {
    const popup = document.getElementById('projectsPopup');
    const popupGrid = document.getElementById('popupProjectsGrid');

    // Populate projects
    portfolioPopup.populateProjects();

    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  },

  closePopup: () => {
    const popup = document.getElementById('projectsPopup');
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  },

  populateProjects: () => {
    const popupGrid = document.getElementById('popupProjectsGrid');
    popupGrid.innerHTML = '';

    allProjects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'popup-project-item';

      projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="popup-project-image" loading="lazy">
                <div class="popup-project-content">
                    <h3 class="popup-project-title">${project.title}</h3>
                    <p class="popup-project-category">${project.category}</p>
                    <p class="popup-project-description">${project.description}</p>
                    <div class="popup-project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="popup-project-links">
                        <a href="${project.liveLink}" class="popup-project-btn" ${project.liveLink.startsWith('http') ? 'target="_blank"' : ''}>
                            <i class="fas fa-external-link-alt"></i> View
                        </a>
                    </div>
                </div>
            `;

      popupGrid.appendChild(projectElement);
    });
  }
};

// Add portfolioPopup initialization to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // ... your existing code ...

  // Initialize portfolio popup
  portfolioPopup.init();
});

// Contact form handling
const contactForm = {
  init: () => {
    const contactForms = document.querySelectorAll('form[id^="contact"]');

    contactForms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Reset previous validation styling
        const inputs = this.querySelectorAll('input, textarea');
        inputs.forEach(input => {
          input.style.borderColor = '#ddd';
        });

        // Get form values
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData.entries());

        // Validate form
        let isValid = true;
        let firstInvalidField = null;

        inputs.forEach(input => {
          // Check required fields
          if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
            if (!firstInvalidField) firstInvalidField = input;
          }

          // Validate email format
          if (input.type === 'email' && input.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
              isValid = false;
              input.style.borderColor = 'red';
              if (!firstInvalidField) firstInvalidField = input;
            }
          }
        });

        if (!isValid) {
          // Focus the first invalid field
          if (firstInvalidField) {
            firstInvalidField.focus();
          }
          return;
        }

        // In a real scenario, you would send this data to a server
        console.log('Form submitted with values:', formValues);

        // Create and show success message
        const existingMessage = form.querySelector('.success-message');

        // Remove existing message if present
        if (existingMessage) {
          existingMessage.remove();
        }

        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        successMessage.style.cssText = `
          background-color: var(--accent-color);
          color: white;
          padding: 12px;
          border-radius: 4px;
          margin-top: 10px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        `;

        form.appendChild(successMessage);

        // Trigger reflow to enable transition
        setTimeout(() => {
          successMessage.style.opacity = '1';
        }, 10);

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.style.opacity = '0';
          setTimeout(() => {
            form.removeChild(successMessage);
          }, 500);
        }, 5000);

        // Reset form
        this.reset();
      });

      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('input', function () {
          if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = 'red';
          } else if (input.type === 'email' && input.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
              input.style.borderColor = 'red';
            } else {
              input.style.borderColor = '#16c79a'; // valid color
            }
          } else {
            input.style.borderColor = '#16c79a'; // valid color
          }
        });

        // Reset validation on input
        input.addEventListener('input', function () {
          input.style.borderColor = '#ddd';
        });
      });
    });
  }
};

// Error handling functionality - Only for broken links and images
const errorHandling = {
  init: () => {
    // Handle broken links
    errorHandling.handleBrokenLinks();
    // Handle broken images
    errorHandling.handleBrokenImages();
  },

  // Function to check if a resource exists
  checkResource: (url) => {
    return fetch(url, { method: 'HEAD' })
      .then(response => response.ok)
      .catch(() => false);
  },

  // Function to handle broken links
  handleBrokenLinks: () => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');

      // Skip external links, anchors, and mailto links
      if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      link.addEventListener('click', function (e) {
        // For internal links, check if they exist
        if (!href.startsWith('#')) {
          e.preventDefault();

          errorHandling.checkResource(href)
            .then(exists => {
              if (exists) {
                window.location.href = href;
              } else {
                console.error('Page not found:', href);
                window.location.href = 'error.html';
              }
            })
            .catch(() => {
              console.error('Error checking resource:', href);
              window.location.href = 'error.html';
            });
        }
      });
    });
  },

  // Function to handle broken images
  handleBrokenImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.addEventListener('error', function () {
        console.error('Image failed to load:', this.src);
        // Replace with placeholder image
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
        this.alt = 'Image not found';
      });
    });
  }
};

// Security measures to prevent inspection and copying
const security = {
  init: () => {
    // Disable keyboard shortcuts used for developer tools and other functions
    document.onkeydown = function (e) {
      if (e.keyCode == 123) { // Disable F12
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Disable Ctrl+Shift+I
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Disable Ctrl+Shift+C
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Disable Ctrl+Shift+J
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Disable Ctrl+U
        return false;
      }
      if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) { // Disable Ctrl+S
        return false;
      }
    };

    // Disable right-click with an alert
    document.addEventListener('contextmenu', function (e) {
      alert("Sorry, right click is disabled!");
      e.preventDefault();
    });
  }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize error handling for broken links and images only
  errorHandling.init();

  // Initialize UI components
  ui.preloader.init();
  ui.backToTop.init();
  ui.heroTypingEffect.init();
  ui.skillTagsEffect.init();

  // Initialize functionality
  navigation.init();
  portfolio.init();
  contactForm.init();

  // Initialize security measures
  security.init();

  // Run animations on scroll
  utils.animateOnScroll();
  window.addEventListener('scroll', utils.debounce(utils.animateOnScroll, 100));

  // Add animate-on-scroll class to elements
  document.querySelectorAll('.service-card, .portfolio-item, .testimonial, .about-content')
    .forEach(el => el.classList.add('animate-on-scroll'));
});