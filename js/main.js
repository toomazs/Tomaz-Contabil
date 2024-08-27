const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('div img', {
      distance: '100px',
      origin: 'bottom',
      opacity: 0,
      duration: 1000,
      easing: 'ease-in-out',
    });
  });
