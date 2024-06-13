document.addEventListener('DOMContentLoaded', (event) => {
    const menu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menu.addEventListener('click', () => {
        navMenu.classList.toggle('showing');
    });
});
