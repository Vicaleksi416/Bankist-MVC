'use strict';

import modalView from './views/modalView.js';
import scrollView from './views/scrollView.js';
import navView from './views/navView.js';

const controlCloseModal = function () {
  modalView.closeModalFn();
};

const controlOpenModal = function () {
  modalView.openModalFn();
};

const controlScroll = function (id) {
  scrollView.scroll(id);
};

const controlHover = function (e, opacity) {
  navView.hover(e, opacity);
};

const init = function () {
  scrollView.scrollHandler(controlScroll);
  modalView.openModalHandler(controlOpenModal);
  modalView.closeModalHandler(controlCloseModal);
  navView.hoverHandler(controlHover);
};

init();
