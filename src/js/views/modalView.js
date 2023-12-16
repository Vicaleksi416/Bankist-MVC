class ModalView {
  modal = document.querySelector('.modal');
  overlay = document.querySelector('.overlay');
  btnCloseModal = document.querySelector('.btn--close-modal');
  btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  doc = document;

  openModalFn(e) {
    // e.preventDefault();
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  closeModalFn() {
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  openModalHandler(handler) {
    this.btnsOpenModal.forEach(btn => btn.addEventListener('click', handler));
  }

  closeModalHandler(handler) {
    this.modal.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--close-modal');

      if (!btn) return;

      handler();
    });

    this.overlay.addEventListener('click', function (e) {
      handler();
    });

    this.doc.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        // console.log(e);
        handler();
      }
    });
  }
}

export default new ModalView();
