class ScrollView {
  doc = document;
  btnScrollTo = document.querySelector('.btn--scroll-to');
  nav = document.querySelector('.nav');
  allSections = document.querySelectorAll('.section');
  logo = document.querySelector('.nav__logo');

  scrollTo(href) {
    if (href === '') return;
    const section = document.querySelector(`${href}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToHandler(handler) {
    this.btnScrollTo.addEventListener('click', function () {
      handler('#section--1');
    });

    this.doc.addEventListener('click', function (e) {
      e.preventDefault();
      const link = e.target.closest('.nav__link');

      if (!link) return;

      const href = e.target.getAttribute('href');
      handler(href);
    });

    this.logo.addEventListener('click', function (e) {
      const href = e.target.getAttribute('href');
      handler(href);
    });
  }

  revealSections(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
    } else {
      entry.target.classList.add('section--hidden');
    }
  }

  observeHandler(handler) {
    const sectionObserver = new IntersectionObserver(handler, {
      root: null,
      threshold: 0.2,
    });

    this.allSections.forEach(section => {
      sectionObserver.observe(section);
    });
  }
}

export default new ScrollView();
