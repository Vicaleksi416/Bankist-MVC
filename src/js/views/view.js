class View {
  modal = document.querySelector('.modal');
  overlay = document.querySelector('.overlay');
  btnCloseModal = document.querySelector('.btn--close-modal');
  btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  doc = document;

  openModalFn(e) {
    e.preventDefault();
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  closeModalFn() {
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  _detectKeyDown(fn) {}

  openModal(fn) {
    this.btnsOpenModal.forEach(btn =>
      btn.addEventListener('click', fn.bind(this))
    );
  }

  closeModal(fn) {
    this.btnCloseModal.addEventListener('click', fn.bind(this));
    this.overlay.addEventListener('click', fn.bind(this));
    this.doc.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        console.log('I need to fix this later');
        fn.bind(this); //this points NOT to the document
      }
    });
  }
}

export default new View();
