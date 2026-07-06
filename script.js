// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
    });
});

// Blob follow mouse animation
const blob1 = document.querySelector('.blob-1');
const blob2 = document.querySelector('.blob-2');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Animate blobs smoothly towards mouse
    blob1.animate({
        left: `${x}px`,
        top: `${y}px`
    }, { duration: 3000, fill: "forwards" });

    // Blob 2 moves slightly opposite/delayed
    blob2.animate({
        right: `${window.innerWidth - x}px`,
        bottom: `${window.innerHeight - y}px`
    }, { duration: 4000, fill: "forwards" });
});

// Add scroll event listener for navbar blur effect enhancement
let navTicking = false;
window.addEventListener('scroll', () => {
    if (!navTicking) {
        navTicking = true;
        requestAnimationFrame(() => {
            const nav = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                nav.style.boxShadow = 'var(--glass-shadow)';
                nav.style.borderBottom = '1px solid var(--glass-border)';
            } else {
                nav.style.boxShadow = 'none';
                nav.style.borderBottom = 'none';
            }
            navTicking = false;
        });
    }
}, { passive: true });

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden-section');
    observer.observe(section);
});
