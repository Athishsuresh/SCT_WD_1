// script.js

document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('contactButton').addEventListener('click', function () {
    const contactForm = document.getElementById('contactForm');
    contactForm.classList.toggle('hidden');
});
