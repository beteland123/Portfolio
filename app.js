const hamburgerMenu = document.querySelector('.menu-icon');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const mobileClose = document.querySelector('.mobile-menu-close');

hamburgerMenu.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'flex';
});

mobileClose.addEventListener('click', () => {
  // show the mobile menu
  document.querySelector('.mobile-menu').style.display = 'none';
});

// close menu on click mobile-nav-item
mobileNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});











/*const hum = document.querySelector('.hamburger-menu');
const back = document.querySelector('.logop');
const works = document.querySelector('.works');
const about = document.querySelector('.about-section');
const contact = document.querySelector('.about-contact');
const menuNav = document.querySelector('.hidden');
const navItems = document.querySelectorAll('.nav-item');
const toolbar = document.querySelector('.toolbar');
const body = document.querySelector('body');
const headline = document.querySelector('.headline');
const closeIcon = document.querySelector('.close i');

hum.addEventListener('click', () => {
  hum.classList.toggle('in-active');
  menuNav.classList.toggle('show');
  back.classList.toggle('mobile');
  toolbar.classList.toggle('mobile');
  works.classList.toggle('mobile-hide');
  contact.classList.toggle('mobile-hide');
  about.classList.toggle('mobile-hide');
  body.classList.toggle('blue');
  headline.classList.toggle('head');
  closeIcon.classList.toggle('show');

});




navItems.forEach((e) => {
  e.addEventListener('click', () => {
    hum.classList.toggle('in-active');
    menuNav.classList.toggle('show');
    back.classList.toggle('mobile');
    toolbar.classList.toggle('mobile');
    works.classList.toggle('mobile-hide');
    contact.classList.toggle('mobile-hide');
    about.classList.toggle('mobile-hide');
    body.classList.toggle('blue');
    headline.classList.toggle('head');
    closeIcon.classList.toggle('show');
  });
});*/