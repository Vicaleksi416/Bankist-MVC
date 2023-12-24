'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// // for (let i = 0; i < btnsOpenModal.length; i++)
// //   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// // Button scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function () {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// // Page navigation
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

// // Operation tabs
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabsContainer.addEventListener('click', function (e) {
//   const clickedTab = e.target.closest('.operations__tab');

//   if (!clickedTab) return;

//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   clickedTab.classList.add('operations__tab--active');

//   tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//   document
//     .querySelector(`.operations__content--${clickedTab.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// // Menu fade animation

// const nav = document.querySelector('.nav');
// const handleHover = function (e, opacity) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// // Sticky Navigation

// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect();
// // console.log(navHeight); // 90px

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight.height}px`,
// });
// headerObserver.observe(header);

// // Revealing Sections

// const allSections = document.querySelectorAll('.section');

// const revealSection = function (entries, _) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
//   else entry.target.classList.add('section--hidden');
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.2,
// });

// allSections.forEach(function (section) {
//   // section.classList.add('section--hidden');
//   sectionObserver.observe(section);
// });

// // Lazy loading Image
// const imgTarget = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observe) {
//   const [entry] = entries;
//   // console.log(enrty);

//   if (!entry.isIntersecting) return;

//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '-200px',
// });

// imgTarget.forEach(img => imgObserver.observe(img));

// Slides

// const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');

// let curSlidePos = 0;
// const maxSlide = slides.length;

// const goToSlide = function (curPos) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${(i - curPos) * 100}%)`)
//   );
// };
// goToSlide(0);

// //next
// btnLeft.addEventListener('click', function () {
//   if (curSlidePos === 0) {
//     curSlidePos = maxSlide - 1;
//   } else {
//     curSlidePos--;
//   }

//   goToSlide(curSlidePos);
//   activateDot(curSlidePos);
// });

// // last
// btnRight.addEventListener('click', function () {
//   if (curSlidePos === maxSlide - 1) {
//     curSlidePos = 0;
//   } else {
//     curSlidePos++;
//   }

//   goToSlide(curSlidePos);
//   activateDot(curSlidePos);
// });

// // Dots

// const dots = document.querySelector('.dots');

// const createDots = function () {
//   slides.forEach(function (_, i) {
//     dots.insertAdjacentHTML(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`
//     );
//   });
// };
// createDots();

// dots.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     const { slide } = e.target.dataset; //destructuring
//     const slideTo = e.target.dataset.slide;
//     goToSlide(slideTo);
//     activateDot(slideTo);
//   }
// });
// v;
// const activateDot = function (sw) {
//   document
//     .querySelectorAll('.dots__dot')
//     .forEach(dot => dot.classList.remove('dots__dot--active'));

//   document
//     .querySelector(`[data-slide="${sw}"]`)
//     .classList.add('dots__dot--active');
// };
activateDot(0);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// DOM Select, Create and Delete w/ Style, Attributes and Classes
/*
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); //returns NodeList

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //returns Collenction

console.log(document.getElementsByClassName('btn')); //returns Colletion

// Creating and Inserting Elements
//EX: .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analyitucs.'
message.innerHTML =
  'We use cookies for improved functionality and analyitucs. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); //insert at the head
// ↑↓ cannot co-exist
header.append(message); //insert at the end

// header.prepend(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // empty, not defined by ourselves
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// CSS custom properties AKA CSS variables

document.documentElement.style.setProperty('--color-primary', 'grey');

// Attibutes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

console.log(logo.designer); //not a standar property
console.log(logo.getAttribute('designer'));

logo.alt = 'Bankist logo right here';
console.log(logo.alt);
logo.setAttribute('company', 'Bankist'); //check inspect

console.log(logo.src); //absolute src
console.log(logo.getAttribute('src')); //relative src
//same as the href attribute
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.versionNumber); //data-version-number="3.6"

// Classes
logo.classList.add('_', '__');
logo.classList.remove('_', '__');
logo.classList.toggle('_');
logo.classList.contains('_'); // not includes
//but don't use
// logo.className = 'dontUse'
*/

// Smooth Scrolling
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//the old way
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log('s1', s1coords);

  //examples
  console.log('scbtn', e.target.getBoundingClientRect());
  console.log('Curent scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'hieght/widdth viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //examples end

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

//the new way, but only works on modern browsers
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
*/

// Event Handlers
/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Here is heading 1');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
*/

// Bubbling and Capturing (Propagating)
/*
//Once a certain event was created, it should have pass it down all the way from DOM → <html> → <body> → <section> → <p> → <a>, and it's called "Capturing Phase". Whenever a certain event reaches the target (ie. click on eventLisrtener or <a>), it's enter the "Target Phase" and runs the attached callback funcion(), then travel all the back to the document root agin, so called "Bubbling Phase" NOTE: This does NOT happens on some types on events
*/

// Event Propagation
/*
//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER');
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV');
    console.log('LINK', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  true
);
//EventTarget().prototype.Eventhandler('type', callback(e), phase)
*/

// Event Delegation: Implementing Page Navigation (smoooth scrolling)
/*
//basic way, but if contains 1,000 el, it creates 1,000 copy of f()
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href'); //relative, instead of this.href
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//event delegation
//Add the event listener to the common parent element; determent originated event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  //matching the class/id
  if (e.target.classList.contains('nav__link')) {
    // console.log('link');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
*/

// DOM Traversing
/*
//select an element based on another element
const h1 = document.querySelector('h1');

//Going downwards: child element
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'yellow';

//Going upwards: parent element
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--color-primary-opacity)';
// h1.closest('h1').style.background = 'white';

//Going sideways: sibling element
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); //both quite useless
console.log(h1.nextSibling);

console.log(h1.parentElement.children); //goiinig up then down
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

// Tabbed Component
/*
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
*/

// Passing Arguments to Event Handlers
/*
const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function (e) {
  // console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener('mouseout', function (e) {
  // console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

const handleHover = function (e, op) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = op;
    });
    logo.style.opacity = op;
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
*/

// Sticky Navigation: The Scroll Event
/*
const navInitialCoord = section1.getBoundingClientRect();
console.log(navInitialCoord);

window.addEventListener('scroll', function () {
  // console.log(window.scrollY);

  if (window.scrollY > navInitialCoord.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

// Sticky Navigation: Intersection Observer API
/*
const obsOptionsEx = {
  root: null,
  threshold: 0.1,
};

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const observerEx = new IntersectionObserver(obsCallback, obsOptionsEx);
// observerEx.observe(section1);

const ezObserve = new IntersectionObserver(function (entries, _) {
  entries.forEach(entry => console.log(entry));
}, obsOptionsEx);
// ezObserve.observe(section1);

//

const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshol: 0,
});
headerObserver.observe(header);
*/

// more Intersection Observer API: Revealing Element
/*
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  // if (!entry.isIntersecting) return;
  // entry.target.classList.remove('section--hidden');
  // observer.unobserve(entry.target);

  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
  else entry.target.classList.add('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
*/

// even more Intersection Observer API: Lazy Loading Images
/*
const imgTarget = document.querySelectorAll('img[data-src]');
// console.log(imgTarget);

const loadImg = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTarget.forEach(img => imgObserver.observe(img));
*/

// Slider Component
/*
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlidePos = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.87)';
slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));
// 0%, 100%, 200%, 300%

const goToSlide = function (curPos) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - curPos) * 100}%)`)
  );
};

goToSlide(0);

// // next slide
// btnRight.addEventListener('click', function () {
//   if (curSlidePos === maxSlide - 1) {
//     curSlidePos = 0;
//   } else {
//     curSlidePos++;
//   }

//   goToSlide(curSlidePos);
// });
// // previous slide
// btnLeft.addEventListener('click', function () {
//   if (curSlidePos === 0) {
//     curSlidePos = maxSlide - 1;
//   } else {
//     curSlidePos--;
//   }
//   goToSlide(curSlidePos);
// });

const nextSlide = function () {
  if (curSlidePos === maxSlide - 1) {
    curSlidePos = 0;
  } else {
    curSlidePos++;
  }

  goToSlide(curSlidePos);
  activateDot(curSlidePos);
};

const preSlide = function () {
  if (curSlidePos === 0) {
    curSlidePos = maxSlide - 1;
  } else {
    curSlidePos--;
  }

  goToSlide(curSlidePos);
  activateDot(curSlidePos);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', preSlide);

document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === 'ArrowLeft') preSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Dots
const dots = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (_, i) {
    dots.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

dots.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset; //destructuring
    const slideTo = e.target.dataset.slide;
    goToSlide(slideTo);
    activateDot(slideTo);
  }
});

const activateDot = function (sw) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${sw}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);
*/

//////////////////////////////
//////////////////////////////
//////////////////////////////

// Lifecycle DOM Event
/*
// DOM content loaded: it fires by the document as soon as the HTML completely parsed(which means the HTML has been downloaded and convert to the DOM tree)

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOMO trre biult', e);
});

// Load Event: it was fired by the window as soon as not only the HTML is parseed, but also all the images and exterrnal resources like CSS

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// Before Unload Event: is created immediately before user is about to leave the page

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/
