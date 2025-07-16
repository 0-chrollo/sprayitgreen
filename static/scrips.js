const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});





































const videoWrapper = document.getElementById('video-wrapper');
const video = document.getElementById('video-element');


function playVideo() {
    overlay.classList.add('is-hidden');
    video.classList.remove('is-blurred');
    video.controls = true;
    video.play().catch(error => {
        console.error("Video play failed:", error);
        overlay.classList.remove('is-hidden');
        video.controls = false;
    });
}

overlay.addEventListener('click', playVideo);

video.addEventListener('pause', () => {
    if (!video.ended && video.controls) {
        overlay.classList.remove('is-hidden');
        video.controls = false;
    }
});

video.addEventListener('ended', () => {
    overlay.classList.remove('is-hidden');
    video.classList.add('is-blurred');
    video.controls = false;
    video.currentTime = 0;
});

video.controls = false;