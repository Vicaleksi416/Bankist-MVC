'use strict';

import modalView from './views/modalView.js';
import scrollView from './views/scrollView.js';
import navView from './views/navView.js';
import divView from './views/divView.js';
import slideView from './views/slideView.js';

const controlCloseModal = function () {
  modalView.closeModalFn();
};

const controlOpenModal = function () {
  modalView.openModalFn();
};

const controlScroll = function (id) {
  scrollView.scrollTo(id);
};

const controlHover = function (e, opacity) {
  navView.hover(e, opacity);
};

const controlStickNav = function (e) {
  navView.stickyNav(e);
};

const controlSwitch = function (e) {
  divView.switchTabsFn(e);
};

const controlReveal = function (e) {
  scrollView.revealSections(e);
};

const controlSlide = function (page) {
  slideView.goToSlide(page);
};

const init = function () {
  scrollView.scrollToHandler(controlScroll);
  scrollView.observeHandler(controlReveal);

  modalView.openModalHandler(controlOpenModal);
  modalView.closeModalHandler(controlCloseModal);

  navView.hoverHandler(controlHover);
  navView.observeHandler(controlStickNav);

  divView.switchHanler(controlSwitch);

  slideView.initView();
  slideView.sldieHandler(controlSlide);
};

init();
