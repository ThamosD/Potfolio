// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-times');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevels = entry.target.querySelectorAll('.skill-level span');
            skillLevels.forEach(skill => {
                const width = skill.style.width;
                skill.style.width = '0';
                setTimeout(() => {
                    skill.style.width = width;
                }, 300);
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add current year to footer if needed
document.addEventListener('DOMContentLoaded', () => {
    // You can add dynamic year updates here if needed
    console.log('Portfolio loaded successfully!');
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(100, 255, 218, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        }
    });
});
