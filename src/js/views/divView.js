class DivView {
  _parentElement = document.querySelector('.operations');
  tabsContainer = document.querySelector('.operations__tab-container');
  tabs = document.querySelectorAll('.operations__tab');
  tabsContent = document.querySelectorAll('.operations__content');

  imgTarget = document.querySelectorAll('img[data-src]');

  switchTabsFn(e) {
    this.tabs.forEach(t => t.classList.remove('operations__tab--active'));
    e.classList.add('operations__tab--active');

    this.tabsContent.forEach(c =>
      c.classList.remove('operations__content--active')
    );
    document
      .querySelector(`.operations__content--${e.dataset.tab}`)
      .classList.add('operations__content--active');
  }

  switchHanler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const clickedTab = e.target.closest('.operations__tab');

      if (!clickedTab) return;

      handler(clickedTab);
    });
  }

  loadImg(entries) {
    const [entry] = entries;
    // console.log(enrty);

    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  }

  observeHandler(handler) {
    const imgObserver = new IntersectionObserver(handler, {
      root: null,
      threshold: 0,
      rootMargin: '-200px',
    });

    this.imgTarget.forEach(img => imgObserver.observe(img));
  }
}

export default new DivView();
