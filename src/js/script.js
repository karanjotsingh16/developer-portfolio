var typed = new Typed('#element', {
    strings: ['Web Developer', 'Android App Developer', 'Graphic Designer'],
    typeSpeed: 50,
});
var typed = new Typed('#skills', {
    strings: ['HTML', 'CSS', 'JavaScript','NodeJs','ReactJs','Java',],
    typeSpeed: 50,
});

function mehtiana(){
    window.location.href="http://www.mountcarmelmehtiana.org/";
}
function kakkon(){
    window.location.href="http://www.mountcarmelhsp.org/";
}
function techburner(){
    window.location.href="https://www.youtube.com/channel/UCXUJJNoP1QupwsYIWFXmsZg";
}



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

 function onLoadFunctions() {
       document.body.style.zoom = "75%";  
  }



