class NavView {
  nav = document.querySelector('.nav');
  header = document.querySelector('.header');
  navHeight = this.nav.getBoundingClientRect();

  hover(e, opacity) {
    const link = e.target;
    // console.log(link);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }

  hoverHandler(handler) {
    this.nav.addEventListener('mouseover', function (e) {
      const link = e.target.closest('.nav__link');

      if (!link) return;
      // console.log('y');
      handler(e, 0.5);
    });
    this.nav.addEventListener('mouseout', function (e) {
      const link = e.target.closest('.nav__link');

      if (!link) return;
      // console.log('n');
      handler(e, 1);
    });
  }

  stickyNav(entries) {
    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) {
      this.nav.classList.add('sticky');
    } else {
      this.nav.classList.remove('sticky');
    }
  }

  observeHandler(handler) {
    const headerObserver = new IntersectionObserver(handler, {
      root: null,
      threshold: 0,
      rootMargin: `-${this.navHeight.height}px`,
    });

    headerObserver.observe(this.header);
  }
}

export default new NavView();
