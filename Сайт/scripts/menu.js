const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const mainContent = document.querySelector('.main');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('nav-active');
});
