import { refs } from './refs';

refs.galleryList.addEventListener('click', onCardClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropModalFilm.addEventListener('click', onBackdropClose);

function onCardClick(e) {
  e.preventDefault();
  // console.log(e.target.nodeName);
  if (e.target.nodeName === 'IMG' || e.target.nodeName === 'P') {
    refs.modal.classList.toggle('is-hidden');
  }
}
//----- Закриття модалки
function onCloseModal() {
  refs.modal.classList.toggle('is-hidden');
}
//-----
function onBackdropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
