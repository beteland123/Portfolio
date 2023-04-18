const hum = document.querySelector('.hamburger-menu');
const back = document.querySelector('.back');
const works = document.querySelector('.works');
const about = document.querySelector('.about-section');
const contact = document.querySelector('.about-contact');
const menuNav = document.querySelector('.hidden');
const navItems = document.querySelectorAll('.nav-item');
const toolbar = document.querySelector('.toolbar');
const body = document.querySelector('body');
const headline = document.querySelector('.headline');

hum.addEventListener('click', () => {
  // toggle the "active" class on the hamburger button
  hum.classList.toggle('active');
  menuNav.classList.toggle('show');
  back.classList.toggle('mobile');
  toolbar.classList.toggle('mobile');
  works.classList.toggle('mobile-hide');
  contact.classList.toggle('mobile-hide');
  about.classList.toggle('mobile-hide');
  body.classList.toggle('blue');
  headline.classList.toggle('head');
});

for (const list of navItems) {
  list.addEventListener('click', () => {
	hum.classList.toggle('active');
	menuNav.classList.toggle('show');
	back.classList.toggle('mobile');
	toolbar.classList.toggle('mobile');
	works.classList.toggle('mobile-hide');
	contact.classList.toggle('mobile-hide');
	about.classList.toggle('mobile-hide');
	body.classList.toggle('blue');
	headline.classList.toggle('head');
  });
}

