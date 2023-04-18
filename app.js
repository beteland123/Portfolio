const hum = document.querySelector(".hamburger-menu");
const back = document.querySelector(".back");
const works = document.querySelector(".works");
const div = document.querySelector(".works");
const about = document.querySelector(".about-section");
const contact = document.querySelector(".about-contact")
const menuNav = document.querySelector(".mainu-nav");
const navItems = document.querySelectorAll(".nav-item");
const cardwork2=document.querySelector(".cardwok-2");
const cardwork1=document.querySelector(".cardwok-1");
const toolbar=document.querySelector(".toolbar");

hum.addEventListener("click", function() {
  // toggle the "active" class on the hamburger button
  hum.classList.toggle("active");
  menuNav.classList.toggle("show");
   back.classList.toggle('mobile');
   toolbar.classList.toggle('mobile');
   works.classList.toggle('mobile-hide');
   contact.classList.toggle('mobile-hide');
   about.classList.toggle('mobile-hide');
   back.classList.toggle('blue');
});

for (const list of navItems) {
  list.addEventListener('click', function(event) {
    menuNav.classList.toggle('show'); // corrected class name
    back.classList.toggle('back');
    console.log(menuNav)
  });
}