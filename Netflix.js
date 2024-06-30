// Highlight the active link in the navigation bar
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Slider effect for movie thumbnails
const row = document.querySelector('.row');
let isDown = false;
let startX;
let scrollLeft;

row.addEventListener('mousedown', (e) => {
    isDown = true;
    row.classList.add('active');
    startX = e.pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
});

row.addEventListener('mouseleave', () => {
    isDown = false;
    row.classList.remove('active');
});

row.addEventListener('mouseup', () => {
    isDown = false;
    row.classList.remove('active');
});

row.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - row.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    row.scrollLeft = scrollLeft - walk;
});
