//Navbar change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const windowPosition = window.scrollY > 0;

    nav.classList.toggle('scroll-active', windowPosition)
    
})



//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]')