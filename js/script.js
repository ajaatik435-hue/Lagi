// Hero Slider Functionality
function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    let currentSlide = 0;

    function showSlide(index) {
        const slides = slider.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slider.querySelectorAll('.slide').length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide);
}

// Profile Reveal Animation Functionality
function initProfileReveal() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.style.opacity = 0;
        profile.style.transform = 'translateY(20px)';
        setTimeout(() => {
            profile.style.transition = 'opacity 0.5s, transform 0.5s';
            profile.style.opacity = 1;
            profile.style.transform = 'translateY(0)';
        }, 500);
    });
}

// Drag to Scroll Functionality
function initDragToScroll() {
    const sections = ['.pembina', '.organisasi', '.liputan'];
    sections.forEach(selector => {
        const section = document.querySelector(selector);
        let isDown = false;
        let startX;
        let scrollLeft;

        section.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - section.offsetLeft;
            scrollLeft = section.scrollLeft;
        });

        section.addEventListener('mouseleave', () => {
            isDown = false;
        });

        section.addEventListener('mouseup', () => {
            isDown = false;
        });

        section.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - section.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            section.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize all functionalities
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initProfileReveal();
    initDragToScroll();
});