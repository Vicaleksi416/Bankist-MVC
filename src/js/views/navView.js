class HoverView {
  nav = document.querySelector('.nav');

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
}

export default new HoverView();
