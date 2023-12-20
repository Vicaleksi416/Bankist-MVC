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

{
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlidePos = 0;
  const maxSlide = slides.length;

  const goToSlide = function (curPos) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - curPos) * 100}%)`)
    );
  };
  goToSlide(0);

  //next
  btnLeft.addEventListener('click', function () {
    if (curSlidePos === 0) {
      curSlidePos = maxSlide - 1;
    } else {
      curSlidePos--;
    }

    goToSlide(curSlidePos);
    activateDot(curSlidePos);
  });

  // last
  btnRight.addEventListener('click', function () {
    if (curSlidePos === maxSlide - 1) {
      curSlidePos = 0;
    } else {
      curSlidePos++;
    }

    goToSlide(curSlidePos);
    activateDot(curSlidePos);
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
      .querySelector(`[data-slide="${sw}"]`)
      .classList.add('dots__dot--active');
  };
  activateDot(0);
}
