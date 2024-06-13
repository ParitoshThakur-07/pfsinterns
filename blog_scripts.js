document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });

            window.scrollTo(0, 0);  // Scroll to the top of the page
        });
    });

    // Show home section by default
    document.getElementById('home').style.display = 'block';
});
