class ScrollView {
  doc = document;
  btnScrollTo = document.querySelector('.btn--scroll-to');
  nav = document.querySelector('.nav');

  scroll(id) {
    const section = document.querySelector(`${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  scrollHandler(handler) {
    this.btnScrollTo.addEventListener('click', function () {
      handler('#section--1');
    });

    this.doc.addEventListener('click', function (e) {
      e.preventDefault();
      const link = e.target.closest('.nav__link');

      if (!link) return;

      const id = e.target.getAttribute('href');
      handler(id);
    });
  }
}

export default new ScrollView();
