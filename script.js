// Selecciones DOM
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const cards = document.querySelectorAll('.card');

// Función para manejar el menú hamburguesa
function toggleMenu() {
    navUl.classList.toggle('active');
}

// Función para animar las tarjetas
function animateCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);
document.addEventListener('DOMContentLoaded', animateCards);

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (navUl.classList.contains('active') && !e.target.closest('nav')) {
        navUl.classList.remove('active');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});