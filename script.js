// DOM Elements
const loadingScreen = document.querySelector('.loading-screen');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const backToTopBtn = document.querySelector('.back-to-top');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioGrid = document.querySelector('.portfolio-grid');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const statNumbers = document.querySelectorAll('.stat-number');
const contactForm = document.getElementById('contactForm');

// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: " Coffee Lounge – Full-Stack Web Application",
        category: "ai",
        description: "An online system where users can browse coffee items, register/login, place orders, and admins can manage products, customers, and orders using frontend, backend, and database integration.",
        image: "img/coffee.jpeg",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        link: "https://mahiuddin-developer.github.io/Coffee-lounge_E-commerce-project-version2/ "
    },
    {
        id: 2,
        title: "E-commerce  Buzz Buy– Full-Stack Web Application  ",
        category: "web",
        description: "Full-featured online shopping platform with AI recommendations.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        link: "https://mahiuddin-developer.github.io/Full-stack-web-project/ "
    },
    {
        id: 3,
        title: "Cat & dog image classification AI",
        category: "AI",
        description: "Developed a CNN-based AI model using TensorFlow to accurately classify images of cats and dogs.",
        image: "img/CNN.jpg",
        tags: ["Python", "CNN", "Tensorflow", ],
        link: "#"
    },
    {
        id: 4,
        title: "Predict Potato price",
        category: "AI",
        description: "Developed an Artificial Neural Network (ANN) model using Python and Pandas to predict potato prices based on historical data for accurate forecasting.",
        image: "img/ANN.jpg",
        tags: ["ANN", "Python", "Pandas", ],
        link: "#"
    },
    {
        id: 5,
        title: "Heart disease Prediction using AI",
        category: "AI",
        description: "Built an AI-based model to predict heart disease risk using patient health data for early detection and improved diagnosis.",
        image: "img/Heart.png",
        tags: ["Python", "Pandas", "ML","Deep Learning"],
        link: "#"
    },
    {
        id: 6,
        title: "Sentiment Analysis",
        category: "ai",
        description: "NLP model for sentiment analysis of social media posts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        tags: ["Python", "NLP", "BERT", "Transformers"],
        link: "#"
    }
];

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Add hover effects for cursor
const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .skill-category, .timeline-content, .info-card, .research-card, .interest-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.opacity = '0.5';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.opacity = '1';
    });
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Update icon
    if (document.body.classList.contains('light-theme')) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
    
    // Save preference
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Load theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.className = 'fas fa-sun';
}

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typing Effect
const typingText = document.querySelector('.typing-text');
const roles = [ 'Web Developer', 'ML/AI Researcher', ];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

// Initialize Portfolio
function initializePortfolio() {
    portfolioGrid.innerHTML = '';
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item show`;
        portfolioItem.dataset.category = item.category;
        
        // Create tags HTML
        const tagsHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <div class="portfolio-content">
                <span class="portfolio-category">${item.category.toUpperCase()}</span>
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <div class="portfolio-tags">
                    ${tagsHTML}
                </div>
                <a href="${item.link}" class="portfolio-link">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Portfolio Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.add('show');
                }, 10);
            } else {
                item.classList.remove('show');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animate Skill Bars on Scroll
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
    });
}

// Animate Statistics
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '+');
                clearInterval(timer);
            } else {
                const value = Math.floor(current);
                stat.textContent = value + (stat.textContent.includes('%') ? '%' : '+');
            }
        }, 16);
    });
}

// Scroll Animations
function handleScrollAnimations() {
    // Animate skill bars when in viewport
    const skillsSection = document.querySelector('.skills');
    if (isInViewport(skillsSection)) {
        animateSkillBars();
    }
    
    // Animate stats when in viewport
    const statsContainer = document.querySelector('.stats-container');
    if (isInViewport(statsContainer)) {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            if (stat.textContent === '0' || stat.textContent === '0+') {
                animateStats();
            }
        });
    }
    
    // Animate portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show');
        }
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-content');
    timelineItems.forEach((item, index) => {
        if (isInViewport(item)) {
            item.style.transitionDelay = `${index * 0.2}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
    
    // Animate interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach((card, index) => {
        if (isInViewport(card)) {
            card.style.transitionDelay = `${index * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Check if element is in viewport
function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"][placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        showNotification(`Thank you, ${name}! Your message has been sent.`, 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// Create particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: var(--primary);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            opacity: ${Math.random() * 0.5 + 0.1};
            animation: float ${duration}s linear infinite ${delay}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            100% { transform: translateY(-100vh) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typing effect
    setTimeout(type, 1000);
    
    // Initialize portfolio
    initializePortfolio();
    
    // Create particles
    createParticles();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        updateActiveNavLink();
    });
    
    // Initial check for animations
    handleScrollAnimations();
    
    // Initialize skill bars with 0 width
    skillProgressBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    // Initialize timeline items
    const timelineItems = document.querySelectorAll('.timeline-content');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Initialize interest cards
    const interestCards = document.querySelectorAll('.interest-card');
    interestCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Add mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.transform = `translate(${moveX * (index + 1)}px, ${moveY * (index + 1)}px)`;
    });
});