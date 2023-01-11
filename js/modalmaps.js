(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-maps]"),
      closeModalBtn: document.querySelector("[data-modal-close-maps]"),
      modal: document.querySelector("[data-modal-maps]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();