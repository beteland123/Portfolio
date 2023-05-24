const workCardContainer = document.querySelector('.main-projects');

const works = [
  {
    title: 'Tech womens',
    description:
       ' It showcase what I have learned about HTML,CSS and javaScript with DOM manipulation to create dynamic content. ',
    details:
      'A joyfull program, that belives in women to learn technology and develope softwares with people around the world!',
    featured_image: 'img/tech-women.PNG',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['Front END DEV', '2023'],
    source: 'https://github.com/beteland123/My-first-capstone-project',
    live_demo: 'https://beteland123.github.io/My-first-capstone-project/',
  },
  {
    title: ' Todo list App',
    description:
         'A todo list app designed to list a task to be done.This project is called To do list which is developed for the purpose of design a website with webpack bundling and for practicing what I have learned about ES6 and dynamic website',
    details:
        'Users can add new task, delete competed ones, and make edit if the task needs to be changed.',
    featured_image: 'img/cap-to-dolist.PNG',
    lang_list: ['html', 'css', 'javascript', 'WebPack'],
    breadcrumbs: ['Front-end', '2023'],
    source: 'https://github.com/beteland123/Todo-list',
    live_demo: 'https://beteland123.github.io/Todo-list/',
  },
  {
    title: 'Awseome Books',
    description:
    'This project is called awesome books, which allows users to add and remove books in local storage.',
    details:
        'It follows JavaScript best practice using ES6 and Dom manipulation to render the page dynamically and to redirect the page with out going to open new page. ',
    featured_image: 'img/as.PNG',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['FACEBOOK', 'FrontEnd', '2023'],
    source: 'https://github.com/beteland123/Awesome-books-with-ES6',
    live_demo: 'https://github.com/beteland123/Awesome-books-with-ES6',
  },
  {
    title: 'Tech womens',
    description:
       ' A website for an online webprogramming course for females.It showcase what I have learned about HTML,CSS and javaScript with DOM manipulation to create dynamic content. ',
    details:
      'A joyfull program, that belives in women to learn technology and develope softwares with people around the world!',
    featured_image: 'img/tech3.PNG',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['Front END DEV', '2023'],
    source: 'https://github.com/beteland123/My-first-capstone-project',
    live_demo: 'https://beteland123.github.io/My-first-capstone-project/',
  },
];

const workCardShouldReverse = (index) => {
  if (index % 2 === 0) {
    return 'row-reverse card';
  }
  return 'card';
};

const breadcrumbsHtml = (workObj, key, bread = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const breadcrumb in workObj[key].breadcrumbs) {
    if (breadcrumb) {
      bread += `<li>${workObj[key].breadcrumbs[breadcrumb]}</li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return bread;
};

const languageHtml = (workObj, key, langList = '') => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang) {
      langList += `<li><span>${workObj[key].lang_list[lang]}</span></li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
};

let workCard = '';

const appendWorks = (works) => {
  for (let i = 0; i < works.length; i += 1) {
    workCard += ` <section class="cardwok-1 ${workCardShouldReverse(i)}">
      <img src="${works[i].featured_image}" alt="${works[i].title}" />
      <div class="card work-card">
        <h3 class="font-style">${works[i].title}</h3>
        <div class="card-highlights work-period"> 
          <ul>
            ${breadcrumbsHtml(works, i)} 
          </ul>
        </div>
        <p class="font-style card-description">
          ${works[i].description}
        </p>
        <ul class="card-languages">
          ${languageHtml(works, i)}
        </ul>
        <button type="button" data-work="${i}" class="btn project-button">
          See Project
        </button>
      </div>
    </section>`;
  }
};

appendWorks(works);

workCardContainer.innerHTML = workCard;
const seeProjectButtons = document.querySelectorAll('.project-button');
const closeModal = document.querySelector('.modal-close');

const showWorkModal = (work) => { // fetch the work from the works object
  const workDetails = works[work];
  document.querySelector('.modal-title').innerHTML = workDetails.title; // insert title to the modal
  document.querySelector('.featured-image').src = workDetails.featured_image;// insert image to the modal
  document.querySelector('.modal-description').innerHTML = workDetails.details; // insert description to the modal
  document.querySelector('.work-modal-breadcrumbs > ul').innerHTML = breadcrumbsHtml(works, work); // add the breadcrumbs to the modal
  document.querySelector('.work-modal-languages > ul').innerHTML = languageHtml(works, work);// add the languages to the modal
  document.querySelector('#work-modal-live-demo').href = workDetails.live_demo;// add live demo link
  document.querySelector('#work-modal-source').href = workDetails.source;// add source link
  document.querySelector('.modal').style.display = 'flex';// show the modal with transition
};
const dataPoped = document.querySelector('.body');
seeProjectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    showWorkModal(event.target.dataset.work);
    document.querySelector('.modal').style.display = 'flex';
    window.scrollTo(0, 0);
    dataPoped.style.overflow = 'hidden';
    event.stopPropagation();
  }, false);
});

closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
  dataPoped.style.overflow = 'visible';
});
