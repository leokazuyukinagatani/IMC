const AlertError = {
  element: document.querySelector('.alert-error'),
  close(){
    AlertError.element.classList.remove('open');

  },
  open() {
    AlertError.element.classList.add('open');
  }
}


export { AlertError };