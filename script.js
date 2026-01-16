document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidad Menú Hamburguesa (Móvil)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    menuToggle.addEventListener('click', () => {
        // Alternar clase para mostrar/ocultar menú
        navLinks.classList.toggle('nav-active');
        
        // Alternar icono entre barras y X (opcional si usas iconos específicos)
        menuToggle.classList.toggle('toggle');
    });

    // Cerrar menú al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    // Scroll suave para navegadores antiguos (Safari viejo, etc.)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});