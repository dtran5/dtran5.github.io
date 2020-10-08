//Navbar change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const windowPosition = window.scrollY > 0;
    const windowWidth = window.innerWidth

    // if (windowWidth < 991.98) {
    //     nav.classList.toggle('scroll-active-medium', windowPosition)
    // } else {
        // nav.classList.toggle('scroll-active', windowPosition)
    
    if (windowWidth < 991.98) {
        nav.classList.remove('scroll-active')
        nav.classList.remove('navbar-custom')
        nav.classList.add('navbar-custom-medium-active')
        nav.classList.toggle('scroll-active-medium', windowPosition)
        nav.classList.toggle('navbar-custom-medium', windowPosition)
    } else {
        nav.classList.remove('scroll-active-medium')
        nav.classList.add('navbar-custom')
        nav.classList.toggle('scroll-active', windowPosition)
    }
    
    
})



//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]')