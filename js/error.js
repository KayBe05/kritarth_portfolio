// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  hamburger.setAttribute('aria-expanded', false);
}));

// Search functionality
const searchData = [
  { title: 'Home', url: 'index.html#hero', description: 'Welcome page and introduction' },
  { title: 'About Me', url: 'index.html#about', description: 'Learn more about Kritarth' },
  { title: 'Skills', url: 'index.html#skills', description: 'Technical and soft skills' },
  { title: 'Experience', url: 'index.html#experience', description: 'Work experience and roles' },
  { title: 'Education', url: 'index.html#education', description: 'Educational background' },
  { title: 'Projects', url: 'index.html#portfolio', description: 'Portfolio of completed projects' },
  { title: 'Certifications', url: 'index.html#certifications', description: 'Professional certifications' },
  { title: 'Contact', url: 'contact.html', description: 'Get in touch' },
  { title: 'HTML5', url: 'index.html#skills', description: 'Advanced HTML5 skills' },
  { title: 'CSS3', url: 'index.html#skills', description: 'Advanced CSS3 skills' },
  { title: 'JavaScript', url: 'index.html#skills', description: 'JavaScript programming' },
  { title: 'AWS', url: 'index.html#skills', description: 'Amazon Web Services' },
  { title: 'Cloud Computing', url: 'index.html#skills', description: 'Cloud computing expertise' },
  { title: 'Youtube Clone', url: 'index.html#portfolio', description: 'Web development project' },
  { title: 'Cloud Collab Platform', url: 'index.html#portfolio', description: 'Cloud computing project' },
  { title: 'Disaster Management', url: 'index.html#portfolio', description: 'Web application project' }
];

function performSearch() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResults');

  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }

  const results = searchData.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsContainer.innerHTML = `
                    <div class="search-result">
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <p>No results found for "${query}"</p>
                            <p>Try searching for: projects, skills, about, contact, certifications</p>
                        </div>
                    </div>
                `;
  } else {
    resultsContainer.innerHTML = results.map(result => `
                    <div class="search-result">
                        <a href="${result.url}">
                            <h4>${result.title}</h4>
                            <p>${result.description}</p>
                        </a>
                    </div>
                `).join('');
  }
}

// Search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

// Real-time search
document.getElementById('searchInput').addEventListener('input', function () {
  if (this.value.length >= 2) {
    performSearch();
  } else {
    document.getElementById('searchResults').innerHTML = '';
  }
});

// Animate error elements on load
window.addEventListener('load', () => {
  const errorIcon = document.querySelector('.error-icon');
  const errorTitle = document.querySelector('.error-title');
  const errorSubtitle = document.querySelector('.error-subtitle');

  setTimeout(() => {
    errorIcon.style.transform = 'scale(1)';
    errorIcon.style.opacity = '1';
  }, 300);

  setTimeout(() => {
    errorTitle.style.transform = 'translateY(0)';
    errorTitle.style.opacity = '1';
  }, 600);

  setTimeout(() => {
    errorSubtitle.style.transform = 'translateY(0)';
    errorSubtitle.style.opacity = '1';
  }, 900);
});

// Auto-redirect option (uncomment if needed)
// setTimeout(() => {
//     if (confirm('Would you like to be redirected to the home page?')) {
//         window.location.href = 'index.html';
//     }
// }, 10000); // Redirect after 10 seconds