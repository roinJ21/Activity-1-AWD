document.addEventListener('DOMContentLoaded', () => {
    // Form Validation: It ennsures all fields are filled before submission
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Audio Playback: It plays background music on any first interaction of user
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.2;
    document.addEventListener('click', () => {
        audio.play();
    }, { once: true });

    // Image Gallery: Allows clicking images to view larger in modal
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    galleryImgs.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth Scrolling: Scrolls smoothly to sections on nav link clicks
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Theme Toggle: Switches between light and dark themes and with icon 
    const html = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');

    if (!html.getAttribute('data-theme')) {
        html.setAttribute('data-theme', 'light');
        toggleBtn.textContent = '🌙';
    } else {
        const initialTheme = html.getAttribute('data-theme');
        toggleBtn.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
    }
    toggleBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
});