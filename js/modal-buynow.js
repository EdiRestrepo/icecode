(() => {
  const refs = {
    openMenuBtn: document.querySelector("[buy-now-open]"),
    closeMenuBtn: document.querySelector("[buy-now-close]"),
    menu: document.querySelector("[buy-now]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("is-hidden");
  }
})();