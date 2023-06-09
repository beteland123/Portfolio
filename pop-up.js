const workCardContainer = document.querySelector('.main-projects');

const works = [
  {
    title: 'Tonic',
    description:
       'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: 'img/Snapshoot.png',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['CANOPY', 'BACK END DEV', '2015'],
    source: 'https://github.com/beteland123',
    live_demo: 'https://github.com/beteland123',
  },
  {
    title: ' Multi-Post Stories',
    description:
         'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: 'img/Snapshoot2.png',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['CANOPY', 'BACK END DEV', '2015'],
    source: 'https://github.com/beteland123',
    live_demo: 'https://github.com/beteland123',
  },
  {
    title: 'FACEBOOK 360',
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: 'img/Snapshoot3.svg',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['FACEBOOK', 'FULL STACK Dev', '2015'],
    source: 'https://github.com/beteland123',
    live_demo: 'https://github.com/beteland123',
  },
  {
    title: 'Multi-Post Stories',
    description:
         'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: 'img/Snapshoot.png',
    lang_list: ['html', 'css', 'javascript'],
    breadcrumbs: ['CANOPY', 'BACK END DEV', '2015'],
    source: 'https://github.com/beteland123',
    live_demo: 'https://github.com/beteland123',
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
