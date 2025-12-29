// 3D Mouse Movement Parallax
document.addEventListener('mousemove', (e) => {
    const world = document.getElementById('world');
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    
    world.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateZ(0)';
            
            // Animate skill bars if it's a skill element
            if (entry.target.classList.contains('skill')) {
                const skillLevel = entry.target.querySelector('.skill-level span');
                if (skillLevel) {
                    const width = skillLevel.style.width;
                    skillLevel.style.width = '0';
                    setTimeout(() => {
                        skillLevel.style.width = width;
                    }, 300);
                }
            }
            
            // Animate progress bars if it's a learning card
            if (entry.target.classList.contains('learning-card')) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    const width = progressBar.style.width;
                    progressBar.style.width = '0';
                    setTimeout(() => {
                        progressBar.style.width = width;
                        progressBar.style.transition = 'width 1.5s ease-out';
                    }, 300);
                }
            }
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill, .learning-card, .project-card, .contact-card, .tool-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateZ(50px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Floating elements animation
document.querySelectorAll('.floating-element').forEach((el, index) => {
    el.style.animationDelay = `${index * 5}s`;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add floating element dynamically
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
    const sizes = [8, 10, 12, 15];
    
    for (let i = 0; i < 6; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Random position
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const duration = 15 + Math.random() * 15;
        const delay = Math.random() * 20;
        
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.background = color;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.boxShadow = `0 0 20px ${color}`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `-${delay}s`;
        
        floatingContainer.appendChild(element);
    }
}

// Initialize floating elements on load
window.addEventListener('load', () => {
    createFloatingElements();
    
    // Reset world transform on load
    document.getElementById('world').style.transform = 'rotateY(0deg) rotateX(0deg)';
    
    // Animate hero section
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'float 6s ease-in-out infinite';
});

// Add window resize handler to reset 3D effects
window.addEventListener('resize', () => {
    document.getElementById('world').style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add touch support for mobile parallax
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    if (window.innerWidth > 768) { // Only on larger screens
        const world = document.getElementById('world');
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        const x = (window.innerWidth / 2 - touchX) / 100;
        const y = (window.innerHeight / 2 - touchY) / 100;
        
        world.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

// Add loading animation for page
window.addEventListener('load', () => {
    // Add a slight delay to ensure everything is loaded
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Set initial opacity to 0 for fade-in effect
document.body.style.opacity = '0';

// Add active state to navigation links based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active,
    .mobile-nav-links a.active {
        color: var(--primary) !important;
    }
    
    .nav-links a.active:before,
    .mobile-nav-links a.active:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, var(--primary), var(--accent));
        transform: scaleX(1) !important;
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});
