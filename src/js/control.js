'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--opem--modal');

// function openModal(e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// }

// function closeModal() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

// btnCloseModal.addEventListener('click', closeModal);

import view from './views/view.js';

// view.openModal(view.openModalFn);

const init = function () {
  view.closeModal(view.closeModalFn);
  view.openModal(view.openModalFn);
  view._detectKeyDown();
};

init();
