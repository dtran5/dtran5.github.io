//Navbar change on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const windowPosition = window.scrollY > 0;
  const windowWidth = window.innerWidth;

  // if (windowWidth < 991.98) {
  //     nav.classList.toggle('scroll-active-medium', windowPosition)
  // } else {
  // nav.classList.toggle('scroll-active', windowPosition)

  if (windowWidth < 991.98) {
    nav.classList.remove("scroll-active");
    nav.classList.remove("navbar-custom");
    nav.classList.add("navbar-custom-medium-active");
    nav.classList.toggle("scroll-active-medium", windowPosition);
    nav.classList.toggle("navbar-custom-medium", windowPosition);
  } else {
    nav.classList.remove("scroll-active-medium");
    nav.classList.add("navbar-custom");
    nav.classList.toggle("scroll-active", windowPosition);
  }
});

//Smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');

//About Section
const aboutMeDiv = document.getElementById("about__more-info");

// buttonTest.addEventListener("click", () => {
//   aboutMeDiv.classList.toggle("about__more-info--active");
// });

//Improvement Section
const improvementBtn1 = document.getElementById("improvement__btn-1");
const improvementBtn2 = document.getElementById("improvement__btn-2");
const improvementBtn3 = document.getElementById("improvement__btn-3");
const improvementBtn4 = document.getElementById("improvement__btn-4");
const improvementBtn5 = document.getElementById("improvement__btn-5");
const improvementBtn6 = document.getElementById("improvement__btn-6");

const improvementDiv1 = document.getElementById("improvement__more-info-1");
const improvementDiv2 = document.getElementById("improvement__more-info-2");
const improvementDiv3 = document.getElementById("improvement__more-info-3");
const improvementDiv4 = document.getElementById("improvement__more-info-4");
const improvementDiv5 = document.getElementById("improvement__more-info-5");
const improvementDiv6 = document.getElementById("improvement__more-info-6");

improvementBtn1.addEventListener("click", () => {
  improvementDiv1.classList.toggle("improvement__more-info--active");
});
improvementBtn2.addEventListener("click", () => {
  improvementDiv2.classList.toggle("improvement__more-info--active");
});
improvementBtn3.addEventListener("click", () => {
  improvementDiv3.classList.toggle("improvement__more-info--active");
});
improvementBtn4.addEventListener("click", () => {
  improvementDiv4.classList.toggle("improvement__more-info--active");
});
improvementBtn5.addEventListener("click", () => {
  improvementDiv5.classList.toggle("improvement__more-info--active");
});
improvementBtn6.addEventListener("click", () => {
  improvementDiv6.classList.toggle("improvement__more-info--active");
});
