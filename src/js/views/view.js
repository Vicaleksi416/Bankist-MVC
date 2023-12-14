class View {
  modal = document.querySelector('.modal');
  overlay = document.querySelector('.overlay');
  btnCloseModal = document.querySelector('.btn--close-modal');
  btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  openModalFn(e) {
    e.preventDefault();
    this.modal.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
  }

  closeModalFn() {
    this.modal.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  openModal(fn) {
    this.btnsOpenModal.forEach(btn =>
      btn.addEventListener('click', fn.bind(this))
    );
  }

  closeModal(fn) {
    this.btnCloseModal.addEventListener('click', fn.bind(this));
    this.overlay.addEventListener('click', fn.bind(this));
  }
}

export default new View();
