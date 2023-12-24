class SlideView {
  slides = document.querySelectorAll('.slide');
  btnLeft = document.querySelector('.slider__btn--left');
  btnRight = document.querySelector('.slider__btn--right');
  dots = document.querySelector('.dots');

  initView() {
    this.goToSlide(0);
    this.createDots(this.dots);
    this.activateDot(0);
  }

  goToSlide(curPos) {
    this.slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - curPos) * 100}%)`)
    );
  }

  sldieHandler(handler) {
    let curSlidePos = 0;
    let maxSlide = this.slides.length;

    this.btnLeft.addEventListener('click', function () {
      if (curSlidePos === 0) {
        curSlidePos = maxSlide - 1;
      } else {
        curSlidePos--;
      }
      //   console.log(curSlidePos);
      handler(curSlidePos);
    });

    this.btnRight.addEventListener('click', function () {
      if (curSlidePos === maxSlide - 1) {
        curSlidePos = 0;
      } else {
        curSlidePos++;
      }
      //   console.log(curSlidePos);
      handler(curSlidePos);
    });

    this.dots.addEventListener('click', function (e) {
      if (!e) return;

      if (e.target.classList.contains('dots__dot')) {
        // console.log(e.target.dataset.slide);
        handler(e.target.dataset.slide);
      }
    });
  }

  createDots(dom) {
    this.slides.forEach(function (_, i) {
      dom.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  activateDot(sw) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${sw}"]`)
      .classList.add('dots__dot--active');
  }
}

export default new SlideView();
