const elements = document.querySelectorAll('.scroll-appear');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', function () {
    // Código para el observador (si lo tienes)
    elements.forEach(el => observer.observe(el));

    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Verifica que el elemento del menú y el toggle se hayan encontrado
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active'); // Agrega o quita la clase 'active'
        });
    } else {
        console.error('Menu toggle or menu not found');
    }
});


