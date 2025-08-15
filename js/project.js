// Project data - matches your portfolio section
const projects = {
  "youtube-clone": {
    title: "YouTube Clone",
    category: "Frontend Development",
    image: "proj-photos/youtube.png",
    description: "A pixel-perfect clone of YouTube's interface featuring responsive design, video thumbnails, and interactive elements. Built with modern HTML5, CSS3, and vanilla JavaScript to showcase frontend development skills.",
    shortDescription: "A modern, responsive YouTube interface clone with interactive features and smooth animations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Flexbox", "Grid"],
    features: [
      "Responsive video grid layout",
      "Interactive sidebar navigation",
      "Custom video player controls",
      "Search functionality",
      "Mobile-first design approach",
      "Smooth animations and transitions"
    ],
    github: "https://github.com/yourusername/youtube-clone",
    demo: "https://your-youtube-clone-demo.com",
    // Additional data for new sections
    timeline: [
      { phase: "Research & Planning", duration: "Week 1", description: "Analyzed YouTube's UI components and planned the project structure" },
      { phase: "Layout Development", duration: "Week 2", description: "Created responsive grid layout and navigation structure" },
      { phase: "Interactive Features", duration: "Week 3", description: "Implemented video player controls and search functionality" },
      { phase: "Testing & Optimization", duration: "Week 4", description: "Cross-browser testing and performance optimization" }
    ],
    challenges: [
      {
        problem: "Complex grid layout responsiveness",
        solution: "Used CSS Grid with flexible column sizing and media queries for optimal viewing on all devices"
      },
      {
        problem: "Video thumbnail loading performance",
        solution: "Implemented lazy loading and optimized image formats to reduce initial load time"
      }
    ],
    metrics: [
      { label: "Page Load Time", value: "1.2s", description: "Average load time across all devices" },
      { label: "Performance Score", value: "95", description: "Lighthouse performance rating" },
      { label: "Browser Support", value: "98%", description: "Cross-browser compatibility" },
      { label: "Mobile Responsive", value: "100%", description: "Mobile-first design approach" }
    ],
    codeSnippets: [
      {
        title: "Responsive Grid Layout",
        language: "css",
        code: `.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.video-item {
  transition: transform 0.3s ease;
}

.video-item:hover {
  transform: translateY(-5px);
}`
      },
      {
        title: "Video Player Controls",
        language: "javascript",
        code: `const videoPlayer = {
  init() {
    this.setupControls();
    this.handleEvents();
  },
  
  setupControls() {
    const playBtn = document.querySelector('.play-btn');
    const progressBar = document.querySelector('.progress-bar');
    
    playBtn.addEventListener('click', this.togglePlay);
    progressBar.addEventListener('click', this.seek);
  }
};`
      }
    ],
    gallery: [
      { image: "proj-photos/youtube/youtube-github.png", caption: "Desktop View - Full Layout" },
      { image: "proj-photos/youtube-mobile.png", caption: "Mobile View - Responsive Design" },
      { image: "proj-photos/youtube-player.png", caption: "Custom Video Player" }
    ],
    architecture: {
      layers: [
        { name: "HTML Structure", description: "Semantic HTML5 elements" },
        { name: "CSS Styling", description: "Modern CSS3 with Grid & Flexbox" },
        { name: "JavaScript Logic", description: "Vanilla JS for interactions" },
        { name: "Responsive Design", description: "Mobile-first approach" }
      ]
    },
    lessons: [
      "CSS Grid is incredibly powerful for complex layouts but requires careful planning",
      "Performance optimization is crucial for media-heavy applications",
      "Mobile-first design approach saves development time and ensures better UX"
    ],
    relatedProjects: [
      { id: "portfolio-website", title: "Portfolio Website", image: "proj-photos/portfolio1.png" },
      { id: "ecommerce-app", title: "E-commerce Platform", image: "proj-photos/ecommerce1.png" }
    ]
  },

  "portfolio-website": {
    title: "Portfolio Website",
    category: "Full Stack Development",
    image: "proj-photos/portfolio/github.png",
    description: "A modern, interactive portfolio website featuring smooth animations, dynamic content management, and a responsive design. Built with React frontend and Node.js backend to showcase full-stack development capabilities.",
    shortDescription: "An interactive portfolio showcasing full-stack development skills with modern design and smooth animations.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "CSS3", "JavaScript"],
    features: [
      "Dynamic project showcase",
      "Contact form with backend validation",
      "Admin dashboard for content management",
      "SEO optimized",
      "Progressive Web App (PWA)",
      "Dark/Light theme toggle"
    ],
    github: "https://github.com/yourusername/portfolio-website",
    demo: "https://your-portfolio-demo.com",
    timeline: [
      { phase: "Design & Planning", duration: "Week 1", description: "UI/UX design and project architecture planning" },
      { phase: "Frontend Development", duration: "Week 2-3", description: "React components and responsive design implementation" },
      { phase: "Backend Development", duration: "Week 4", description: "Node.js API and database integration" },
      { phase: "Testing & Deployment", duration: "Week 5", description: "Testing, optimization, and deployment" }
    ],
    challenges: [
      {
        problem: "Complex state management across components",
        solution: "Implemented React Context API for global state management and component communication"
      },
      {
        problem: "SEO optimization for single-page application",
        solution: "Added React Helmet for dynamic meta tags and implemented server-side rendering"
      }
    ],
    metrics: [
      { label: "Performance Score", value: "96", description: "Lighthouse performance rating" },
      { label: "SEO Score", value: "100", description: "Search engine optimization" },
      { label: "Accessibility", value: "98", description: "WCAG compliance rating" },
      { label: "Load Time", value: "0.8s", description: "First contentful paint" }
    ],
    codeSnippets: [
      {
        title: "React Context for Theme Management",
        language: "javascript",
        code: `const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};`
      }
    ],
    gallery: [
      { image: "proj-photos/portfolio/hero.png", caption: "Home Page - Hero Section" },
      { image: "proj-photos/portfolio/gallery.png", caption: "Projects Gallery" },
      { image: "proj-photos/portfolio/contact.png", caption: "Contact Form" }
    ],
    architecture: {
      layers: [
        { name: "React Frontend", description: "Component-based UI with hooks" },
        { name: "Node.js Backend", description: "RESTful API with Express" },
        { name: "MongoDB Database", description: "Document-based data storage" },
        { name: "Authentication", description: "JWT-based security" }
      ]
    },
    lessons: [
      "React Context API is perfect for managing global state in medium-sized applications",
      "Progressive Web App features significantly improve user experience",
      "Proper SEO implementation is crucial for portfolio visibility"
    ],
    relatedProjects: [
      { id: "youtube-clone", title: "YouTube Clone", image: "proj-photos/youtube/youtube-github.png" },
      { id: "todoApp", title: "Dynamic To-Do App", image: "proj-photos/to-do-app/home.png" }
    ]
  },

  "ecommerce-app": {
    title: "E-commerce Platform",
    category: "Full Stack Development",
    image: "proj-photos/ecommerce1.png",
    description: "A complete e-commerce solution with user authentication, shopping cart, payment integration, and admin dashboard. Features include product catalog, order management, and secure payment processing.",
    shortDescription: "A comprehensive e-commerce platform with secure payments, user management, and administrative tools.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment processing",
      "Order tracking and history",
      "Admin dashboard for inventory management"
    ],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.com",
    // Additional data for new sections
    timeline: [
      { phase: "Requirements Analysis", duration: "Week 1", description: "Market research and feature planning" },
      { phase: "Database Design", duration: "Week 2", description: "Schema design and API planning" },
      { phase: "Frontend Development", duration: "Week 3-4", description: "React components and user interface" },
      { phase: "Backend & Integration", duration: "Week 5-6", description: "API development and payment integration" },
      { phase: "Testing & Launch", duration: "Week 7", description: "Quality assurance and deployment" }
    ],
    challenges: [
      {
        problem: "Secure payment processing implementation",
        solution: "Integrated Stripe API with proper error handling and PCI compliance measures"
      },
      {
        problem: "Complex inventory management system",
        solution: "Implemented real-time inventory tracking with automatic stock updates and low-stock alerts"
      }
    ],
    metrics: [
      { label: "Transaction Success", value: "99.7%", description: "Payment completion rate" },
      { label: "Page Load Speed", value: "1.5s", description: "Average page load time" },
      { label: "Security Rating", value: "A+", description: "Security headers score" },
      { label: "Mobile Users", value: "68%", description: "Mobile traffic percentage" }
    ],
    codeSnippets: [
      {
        title: "Stripe Payment Integration",
        language: "javascript",
        code: `const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount, currency = 'usd') => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency,
      metadata: { orderId: generateOrderId() }
    });
    
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error('Payment processing failed');
  }
};`
      }
    ],
    gallery: [
      { image: "proj-photos/ecommerce-home.png", caption: "Homepage - Product Showcase" },
      { image: "proj-photos/ecommerce-cart.png", caption: "Shopping Cart Interface" },
      { image: "proj-photos/ecommerce-admin.png", caption: "Admin Dashboard" }
    ],
    architecture: {
      layers: [
        { name: "React Frontend", description: "User interface and shopping experience" },
        { name: "Express API", description: "RESTful backend services" },
        { name: "MongoDB", description: "Product and user data storage" },
        { name: "Stripe Integration", description: "Secure payment processing" },
        { name: "JWT Authentication", description: "User session management" }
      ]
    },
    lessons: [
      "Payment security requires careful implementation and regular security audits",
      "Real-time inventory management is crucial for customer satisfaction",
      "Mobile-first design is essential for e-commerce success"
    ],
    relatedProjects: [
      { id: "youtube-clone", title: "YouTube Clone", image: "proj-photos/youtube.png" },
      { id: "portfolio-website", title: "Portfolio Website", image: "proj-photos/portfolio1.png" }
    ]
  },

  "todoApp": {
    title: "Dynamic To-Do App",
    category: "Frontend Web Development",
    image: "proj-photos/to-do-app/github.png",
    description: "A dynamic and interactive To-Do list application that allows users to add, edit, complete, delete, and filter tasks in a visually engaging UI. Built using vanilla JavaScript, HTML5, and CSS3 with smooth UI transitions and localStorage persistence.",
    shortDescription: "A clean, interactive To-Do app with animations, filters, and persistent storage using vanilla JS.",
    technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    features: [
      "Add new tasks",
      "Mark tasks as completed",
      "Edit existing tasks inline",
      "Delete tasks",
      "Filter tasks (All / Active / Completed)",
      "Clear all completed tasks",
      "Persistent storage using localStorage",
      "Responsive and animated UI"
    ],
    github: "https://github.com/KayBe05/Dynamic-To-Do-APP",
    demo: "https://kaybe05.github.io/Dynamic-To-Do-APP/",
    timeline: [
      {
        phase: "Planning & Design",
        duration: "1 Week",
        description: "Designed UI layout and defined app behavior"
      },
      {
        phase: "Core Development",
        duration: "2 Week",
        description: "Implemented add/edit/delete tasks and state filtering"
      },
      {
        phase: "UI Enhancements",
        duration: "1 Week",
        description: "Added animations, icons, and refined responsive styles"
      }
    ],
    challenges: [
      {
        problem: "Inline editing of tasks without breaking event bindings",
        solution: "Used DOM manipulation and event delegation to dynamically attach input handlers"
      },
      {
        problem: "Persisting complex task state (editing, completion) across refresh",
        solution: "Used structured localStorage JSON objects and state syncing logic"
      }
    ],
    metrics: [
      {
        label: "Performance Score",
        value: "100",
        description: "Lighthouse performance rating"
      },
      {
        label: "Accessibility",
        value: "96",
        description: "Based on semantic tags and contrast use"
      },
      {
        label: "Load Time",
        value: "0.4s",
        description: "Instant load due to static hosting"
      }
    ],
    codeSnippets: [
      {
        title: "Task Object LocalStorage Management",
        language: "javascript",
        code: "function updateLocalStorage(tasks) {\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction getTasksFromLocalStorage() {\n  return JSON.parse(localStorage.getItem(\"tasks\")) || [];\n}"
      }
    ],
    gallery: [
      {
        image: "proj-photos/to-do-app/home.png",
        caption: "Main interface"
      },
      {
        image: "proj-photos/to-do-app/editing.png",
        caption: "Editing tasks inline"
      },
      {
        image: "proj-photos/to-do-app/filters.png",
        caption: "Filter controls"
      }
    ],
    architecture: {
      layers: [
        {
          name: "HTML Structure",
          description: "Defines layout with semantic elements"
        },
        {
          name: "CSS Styling",
          description: "Custom styling, animations, and responsiveness"
        },
        {
          name: "JavaScript Logic",
          description: "Handles task CRUD, filtering, and localStorage persistence"
        }
      ]
    },
    lessons: [
      "Vanilla JS can effectively handle dynamic UI interactions without frameworks",
      "localStorage is powerful for lightweight app persistence",
      "Well-structured modular code improves readability and maintenance"
    ],
    relatedProjects: [
      {
        id: "portfolio-website",
        title: "Portfolio Website",
        image: "proj-photos/portfolio/hero.png"
      },
      {
        id: "calendar-planner",
        title: "Calendar Planner App",
        image: "proj-photos/calendar/calendar-github.png"
      }
    ]
  }

};

// Get project ID from URL
function getProjectId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Update hero section
function updateHeroSection(project) {
  if (!project) return;

  document.getElementById('hero-title').textContent = project.title;
  document.getElementById('hero-subtitle').textContent = project.category;
  document.getElementById('hero-description').textContent = project.shortDescription || project.description;

  const heroButtons = document.getElementById('hero-buttons');
  heroButtons.innerHTML = `
    <a href="${project.github}" class="hero-btn primary" target="_blank">
      <i class="fab fa-github"></i>
      View Source Code
    </a>
    <a href="${project.demo}" class="hero-btn secondary" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      Live Demo
    </a>
  `;
}

function renderTimeline(timeline) {
  if (!timeline || timeline.length === 0) return '';

  return `
    <div class="project-timeline">
      <h3 class="section-title">Project Timeline & Process</h3>
      <div class="timeline-container">
        ${timeline.map((item, index) => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h4>${item.phase}</h4>
              <span class="timeline-duration">${item.duration}</span>
              <p>${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render challenge
function renderChallenges(challenges) {
  if (!challenges || challenges.length === 0) return '';

  return `
    <div class="challenges-section">
      <h3 class="section-title">Challenges & Solutions</h3>
      ${challenges.map(item => `
        <div class="challenge-solution-pair">
          <div class="challenge-item">
            <h4>
              <i class="fas fa-exclamation-triangle"></i>
              Challenge
            </h4>
            <p>${item.problem}</p>
          </div>
          <div class="solution-item">
            <h4>
              <i class="fas fa-lightbulb"></i>
              Solution
            </h4>
            <p>${item.solution}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render performance metrics
function renderMetrics(metrics) {
  if (!metrics || metrics.length === 0) return '';

  return `
    <div class="metrics-section">
      <h3 class="section-title">Performance Metrics</h3>
      <div class="metrics-grid">
        ${metrics.map(metric => `
          <div class="metric-card">
            <div class="metric-number">${metric.value}</div>
            <div class="metric-label">${metric.label}</div>
            <div class="metric-description">${metric.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render technical architecture
function renderArchitecture(architecture) {
  if (!architecture || !architecture.layers) return '';

  const layerIcons = [
    'fas fa-desktop',      // Frontend
    'fas fa-server',       // Backend  
    'fas fa-database',     // Database
    'fas fa-shield-alt',   // Security/Auth
    'fas fa-credit-card'   // Payment/Integration
  ];

  return `
    <div class="architecture-section">
      <h3 class="section-title">Technical Architecture</h3>
      <div class="architecture-diagram">
        ${architecture.layers.map((layer, index) => `
          <div class="architecture-layer">
            <h4>${layer.name}</h4>
            <p>${layer.description}</p>
          </div>
          ${index < architecture.layers.length - 1 ? '<div class="architecture-arrow">↓</div>' : ''}
        `).join('')}
      </div>
    </div>
  `;
}

// Render code snippets
function renderCodeSnippets(codeSnippets) {
  if (!codeSnippets || codeSnippets.length === 0) return '';

  return `
    <div class="code-showcase-section">
      <h3 class="section-title">Code Examples</h3>
      ${codeSnippets.map(snippet => `
        <div class="code-showcase">
          <div class="code-header">
            <h4><i class="fas fa-code"></i>${snippet.title}</h4>
            <span class="code-language">${snippet.language.toUpperCase()}</span>
          </div>
          <div class="code-content">
            <pre><code>${escapeHtml(snippet.code)}</code></pre>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Render image gallery
function renderGallery(gallery) {
  if (!gallery || gallery.length === 0) return '';

  return `
    <div class="gallery-section">
      <h3 class="section-title"><i class="fas fa-images"></i> Project Gallery</h3>
      <div class="gallery-grid">
        ${gallery.map(item => `
          <div class="gallery-item">
            <img src="${item.image}" alt="${item.caption}" class="gallery-image" loading="lazy">
            <div class="gallery-overlay">
              <i class="fas fa-eye"></i>
              <p>${item.caption}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render lessons learned
function renderLessons(lessons) {
  if (!lessons || lessons.length === 0) return '';

  return `
    <div class="lessons-section">
      <h3 class="section-title"><i class="fas fa-graduation-cap"></i> Lessons Learned</h3>
      <div class="lessons-container">
        ${lessons.map((lesson, index) => `
          <div class="lesson-item">
            <div class="lesson-icon">
              <i class="fas fa-star" style = "color: #16c79a;"></i>
            </div>
            <div class="lesson-content">
              <span class="lesson-number">${String(index + 1).padStart(2, '0')}</span>
              <p>${lesson}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render related projects
function renderRelatedProjects(relatedProjects) {
  if (!relatedProjects || relatedProjects.length === 0) return '';

  return `
    <div class="related-projects">
      <h3 class="section-title">Related Projects</h3>
      <div class="related-grid">
        ${relatedProjects.map(project => `
          <div class="related-card">
            <img src="${project.image}" alt="${project.title}" class="related-image">
            <div class="related-content">
              <h4>${project.title}</h4>
              <a href="project.html?id=${project.id}" class="related-link">View Project</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Add intersection observer for animations
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe animated elements
  document.querySelectorAll('.timeline-item, .challenge-solution-pair, .architecture-layer').forEach(el => {
    observer.observe(el);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Delay to ensure all elements are rendered
  setTimeout(initializeAnimations, 100);
});

// Render project details
function renderProject(project) {
  const container = document.getElementById('project-details');

  if (!project) {
    container.innerHTML = `
      <div class="not-found">
        <h2><i class="fas fa-exclamation-triangle"></i> Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been moved.</p>
        <a href="index.html#portfolio" class="back-btn">
          <i class="fas fa-arrow-left"></i>
          Back to Portfolio
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="project-content">
      <div class="project-image-container">
        <img src="${project.image}" alt="${project.title}" class="project-image">
      </div>
      
      <div class="project-details">
        <h2 class="section-title">About This Project</h2>
        <p class="description">${project.description}</p>
        
        <h3 class="section-title">Technologies Used</h3>
        <div class="tech-stack">
          ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
        </div>
        
        <div class="features">
          <h3>Key Features</h3>
          <ul class="features-list">
            ${project.features.map(feature => `
              <li>
                <i class="fas fa-check-circle"></i>
                ${feature}
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    ${renderTimeline(project.timeline)}
    ${renderChallenges(project.challenges)}
    ${renderArchitecture(project.architecture)}
    ${renderCodeSnippets(project.codeSnippets)}
    ${renderGallery(project.gallery)}
    ${renderMetrics(project.metrics)}
    ${renderLessons(project.lessons)}
    ${renderRelatedProjects(project.relatedProjects)}
    
    <div class="project-links">
      <a href="${project.github}" class="project-link github-link" target="_blank">
        <i class="fab fa-github"></i>
        View Source Code
      </a>
      <a href="${project.demo}" class="project-link demo-link" target="_blank">
        <i class="fas fa-external-link-alt"></i>
        Live Demo
      </a>
    </div>
  `;
}

// Initialize page
const projectId = getProjectId();
const project = projects[projectId];

updateHeroSection(project);
renderProject(project);

// Update page title
if (project) {
  document.title = `${project.title} - Project Details`;
}

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function (m) { return map[m]; });
}
