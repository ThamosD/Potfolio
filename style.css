:root {
    --primary: #00ff9d;
    --secondary: #0066ff;
    --accent: #ff00d4;
    --dark: #0a0a14;
    --dark-lighter: #151522;
    --text: #f0f0f0;
    --shadow: rgba(0, 255, 157, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--dark);
    color: var(--text);
    overflow-x: hidden;
    perspective: 1000px;
    min-height: 100vh;
    transform-style: preserve-3d;
}

/* 3D Container for depth */
.world-container {
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    min-height: 100vh;
}

/* 3D Floating Navigation */
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 2rem;
    transform-style: preserve-3d;
    transform: translateZ(50px);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(10, 10, 20, 0.9);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(0, 255, 157, 0.2),
                0 0 20px rgba(0, 255, 157, 0.1);
    transform: translateY(0) rotateX(0);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    border: 1px solid rgba(0, 255, 157, 0.3);
}

nav:hover {
    transform: translateY(-5px) rotateX(5deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7),
                0 0 0 2px rgba(0, 102, 255, 0.4),
                0 0 30px rgba(0, 102, 255, 0.3);
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transform: translateZ(30px);
    text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    transform-style: preserve-3d;
}

.nav-links a:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease;
}

.nav-links a:hover {
    color: var(--primary);
    transform: translateZ(20px);
}

.nav-links a:hover:before {
    transform: scaleX(1);
    transform-origin: left;
}

.menu-toggle {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* 3D Hero Section with Impossible Floating */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
}

.hero:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(0, 102, 255, 0.1), transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(255, 0, 212, 0.1), transparent 50%);
    z-index: -1;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    padding: 2rem;
    transform-style: preserve-3d;
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateZ(0) rotateY(0deg); }
    25% { transform: translateZ(20px) rotateY(2deg); }
    75% { transform: translateZ(20px) rotateY(-2deg); }
}

.hero h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 4.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 20px rgba(0, 255, 157, 0.5);
    transform: translateZ(100px);
}

.hero h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    color: #aaa;
    transform: translateZ(80px);
}

.hero p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    transform: translateZ(60px);
}

.btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    color: var(--dark);
    text-decoration: none;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.3);
    transform: translateZ(50px);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--accent), var(--primary));
    transition: left 0.5s ease;
    z-index: -1;
}

.btn:hover {
    transform: translateZ(50px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 255, 157, 0.5),
                0 0 30px rgba(255, 0, 212, 0.5);
}

.btn:hover:before {
    left: 0;
}

/* 3D Sections with Impossible Perspective */
section {
    padding: 6rem 2rem;
    position: relative;
    transform-style: preserve-3d;
}

.section-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 4rem;
    transform: translateZ(60px);
    position: relative;
}

.section-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
    box-shadow: 0 0 15px var(--primary);
}

/* About Section with Impossible Tilt */
.about-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
    background: rgba(21, 21, 34, 0.8);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border: 1px solid rgba(0, 255, 157, 0.1);
    position: relative;
    overflow: hidden;
}

.about-content:hover {
    transform: rotateY(5deg) rotateX(2deg) translateZ(30px);
}

.about-content:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 157, 0.05) 0%, transparent 70%);
    z-index: -1;
}

.about p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    transform: translateZ(40px);
}

.location {
    display: inline-flex;
    align-items: center;
    margin-top: 1.5rem;
    padding: 0.8rem 1.5rem;
    background: rgba(0, 102, 255, 0.1);
    border-radius: 50px;
    transform: translateZ(30px);
    border: 1px solid rgba(0, 102, 255, 0.3);
}

.location i {
    margin-right: 10px;
    color: var(--secondary);
    font-size: 1.2rem;
}

/* Skills Section with 3D Bars */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 4rem;
    transform-style: preserve-3d;
}

.skill {
    padding: 1.5rem;
    background: rgba(21, 21, 34, 0.8);
    border-radius: 15px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border: 1px solid rgba(0, 255, 157, 0.1);
    position: relative;
    overflow: hidden;
}

.skill:hover {
    transform: translateZ(30px) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7),
                0 0 20px rgba(0, 255, 157, 0.2);
}

.skill h3 {
    margin-bottom: 1rem;
    color: var(--primary);
    transform: translateZ(20px);
}

.skill-level {
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transform-style: preserve-3d;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
}

.skill-level span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 10px;
    text-align: right;
    padding-right: 10px;
    color: var(--dark);
    font-weight: 600;
    line-height: 20px;
    position: relative;
    overflow: hidden;
    transform: translateZ(10px);
    box-shadow: 0 0 10px var(--primary);
    animation: fillSkill 1.5s ease-out forwards;
}

@keyframes fillSkill {
    from { width: 0; }
    to { width: 100%; }
}

.tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background: rgba(21, 21, 34, 0.8);
    border-radius: 15px;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 102, 255, 0.1);
}

.tool-item:hover {
    transform: translateZ(30px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7),
                0 0 20px rgba(0, 102, 255, 0.3);
    border-color: rgba(0, 102, 255, 0.5);
}

.tool-item i {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--secondary);
}

/* Learning Section with 3D Cards */
.learning-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
    transform-style: preserve-3d;
}

.learning-card {
    padding: 2.5rem 2rem;
    background: rgba(21, 21, 34, 0.8);
    border-radius: 20px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border: 1px solid rgba(255, 0, 212, 0.1);
    position: relative;
    overflow: hidden;
}

.learning-card:hover {
    transform: translateZ(50px) rotateY(10deg) rotateX(5deg);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8),
                0 0 30px rgba(255, 0, 212, 0.3);
}

.learning-card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--accent), var(--primary));
    box-shadow: 0 0 15px var(--accent);
}

.learning-icon {
    font-size: 3rem;
    color: var(--accent);
    margin-bottom: 1.5rem;
    transform: translateZ(30px);
}

.learning-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text);
    transform: translateZ(25px);
}

.learning-card p {
    margin-bottom: 1.5rem;
    color: #aaa;
    transform: translateZ(20px);
}

.progress {
    height: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.8rem;
    transform: translateZ(15px);
}

.progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--primary));
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 10px var(--accent);
}

.progress-text {
    font-size: 0.9rem;
    color: #aaa;
    transform: translateZ(10px);
    display: block;
}

/* Projects Section with Impossible 3D Cards */
.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
    transform-style: preserve-3d;
}

.project-card {
    padding: 2.5rem;
    background: rgba(21, 21, 34, 0.9);
    border-radius: 20px;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border: 1px solid rgba(0, 255, 157, 0.1);
    position: relative;
    overflow: hidden;
}

.project-card:hover {
    transform: translateZ(60px) rotateY(-10deg) rotateX(5deg);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9),
                0 0 40px rgba(0, 255, 157, 0.3);
}

.project-card.featured {
    border-color: rgba(255, 0, 212, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7),
                0 0 20px rgba(255, 0, 212, 0.2);
}

.project-card.featured:hover {
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9),
                0 0 40px rgba(255, 0, 212, 0.4);
}

.project-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 0.3rem 1rem;
    background: linear-gradient(45deg, var(--accent), var(--primary));
    color: var(--dark);
    font-weight: 600;
    border-radius: 20px;
    font-size: 0.8rem;
    transform: translateZ(40px);
}

.project-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: var(--primary);
    transform: translateZ(30px);
}

.project-description {
    margin-bottom: 1.5rem;
    color: #ccc;
    transform: translateZ(25px);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-bottom: 1.5rem;
    transform: translateZ(20px);
}

.tech-tag {
    padding: 0.4rem 1rem;
    background: rgba(0, 102, 255, 0.2);
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid rgba(0, 102, 255, 0.4);
}

.project-learn {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    color: #aaa;
    transform: translateZ(15px);
}

.project-link {
    display: inline-flex;
    align-items: center;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    color: var(--dark);
    text-decoration: none;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    transform: translateZ(30px);
    position: relative;
    overflow: hidden;
}

.project-link:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--accent), var(--primary));
    transition: left 0.5s ease;
}

.project-link:hover {
    transform: translateZ(30px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 255, 157, 0.4);
}

.project-link:hover:before {
    left: 0;
}

.project-link i, .project-link .fab {
    margin-left: 10px;
    position: relative;
    z-index: 1;
}

/* Contact Section with 3D Hover */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem;
    max-width: 1000px;
    margin: 3rem auto 0;
    transform-style: preserve-3d;
}

.contact-card {
    display: block;
    padding: 3rem 2rem;
    background: rgba(21, 21, 34, 0.8);
    border-radius: 20px;
    text-decoration: none;
    color: var(--text);
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border: 1px solid rgba(0, 102, 255, 0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.contact-card:hover {
    transform: translateZ(60px) scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8),
                0 0 30px rgba(0, 102, 255, 0.3);
    border-color: rgba(0, 102, 255, 0.5);
}

.contact-icon {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--secondary);
    transform: translateZ(40px);
}

.contact-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    transform: translateZ(35px);
}

.contact-card p {
    margin-bottom: 1.5rem;
    color: #aaa;
    transform: translateZ(30px);
}

.contact-cta {
    display: inline-block;
    padding: 0.7rem 1.5rem;
    background: rgba(0, 102, 255, 0.2);
    border-radius: 20px;
    font-weight: 600;
    color: var(--secondary);
    transform: translateZ(25px);
    border: 1px solid rgba(0, 102, 255, 0.4);
}

/* 3D Footer */
footer {
    padding: 4rem 2rem;
    background: rgba(10, 10, 20, 0.9);
    border-top: 1px solid rgba(0, 255, 157, 0.1);
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    transform: translateZ(40px);
}

.footer-logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
}

.footer-text {
    margin-bottom: 2rem;
    color: #aaa;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.footer-links a {
    color: var(--text);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--primary);
}

/* Impossible Floating Elements */
.floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    transform-style: preserve-3d;
}

.floating-element {
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 20px var(--primary);
    animation: floatAround 15s infinite linear;
    transform-style: preserve-3d;
}

.floating-element:nth-child(2) {
    background: var(--secondary);
    box-shadow: 0 0 20px var(--secondary);
    width: 15px;
    height: 15px;
    animation-delay: -5s;
    animation-duration: 20s;
}

.floating-element:nth-child(3) {
    background: var(--accent);
    box-shadow: 0 0 20px var(--accent);
    width: 8px;
    height: 8px;
    animation-delay: -10s;
    animation-duration: 18s;
}

@keyframes floatAround {
    0% {
        transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
    }
    25% {
        transform: translate3d(100vw, 50vh, 100px) rotateX(180deg) rotateY(90deg);
    }
    50% {
        transform: translate3d(50vw, 100vh, -100px) rotateX(360deg) rotateY(180deg);
    }
    75% {
        transform: translate3d(0, 50vh, 150px) rotateX(540deg) rotateY(270deg);
    }
    100% {
        transform: translate3d(0, 0, 0) rotateX(720deg) rotateY(360deg);
    }
}

/* Mouse Movement Parallax */
.parallax-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.layer-1 {
    background: radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.05), transparent 50%);
    transform: translateZ(-500px);
}

.layer-2 {
    background: radial-gradient(circle at 80% 20%, rgba(255, 0, 212, 0.05), transparent 50%);
    transform: translateZ(-300px);
}

/* Mobile Navigation */
.mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 20, 0.95);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    transform: translateY(-100%);
    transition: transform 0.5s ease;
    transform-style: preserve-3d;
}

.mobile-nav.active {
    transform: translateY(0);
}

.mobile-nav-links {
    list-style: none;
    text-align: center;
    transform-style: preserve-3d;
}

.mobile-nav-links li {
    margin: 2rem 0;
    transform-style: preserve-3d;
}

.mobile-nav-links a {
    color: var(--text);
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 0.5rem 2rem;
    display: block;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
}

.mobile-nav-links a:hover {
    color: var(--primary);
    transform: translateZ(30px);
}

.close-menu {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    color: var(--text);
    cursor: pointer;
    transform: translateZ(50px);
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero h1 {
        font-size: 3.5rem;
    }
    
    .hero h2 {
        font-size: 1.8rem;
    }
    
    .nav-links {
        display: none;
    }
    
    .menu-toggle {
        display: block;
    }
    
    .skills-container, .learning-grid, .projects-container, .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.8rem;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .hero, section {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    .hero-content, .about-content, .skill, .learning-card, .project-card, .contact-card {
        padding: 1.5rem;
    }
}

/* Sub-title for sections */
.sub-title {
    font-size: 1.8rem;
    text-align: center;
    margin: 3rem 0 2rem;
    color: var(--primary);
    transform: translateZ(40px);
}

/* Tools section specific */
.tools-section {
    margin-top: 4rem;
}
