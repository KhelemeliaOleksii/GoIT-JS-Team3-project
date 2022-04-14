// const homeHeader = document.querySelector('#library');
// const libraryHeader = document.querySelector('#header');

const headerBox = document.querySelector('.header-js');
const visuallyHiddenHeaderBox = document.querySelector('.visually-hidden');
const visuallyHiddenHeaderBoxLib = document.querySelector('.library-header-img');

// function renderHomeHeader() {
//   if (homeHeader.classList.contains('visually-hidden')) {
//     homeHeader.remove('visually-hidden');
//   }
//   libraryHeader.classList.add('visually-hidden');
// }

// function renderOnClickLibrary() {
//   if (libraryHeader.classList.contains('visually-hidden')) {
//     libraryHeader.remove('visually-hidden');
//   }
//   homeHeader.classList.add('visually-hidden');
// }

// function renderOnClickHome(event) {
//   event.preventDefault();
//   renderHomeHeader();
// }

// document.getElementById('header__link--home').addEventListener('click', renderOnClickHome, false);
// document.getElementById('header__btn--home').addEventListener('click', renderOnClickHome, false);
// document
//   .getElementById('header__btn--library')
//   .addEventListener('click', renderOnClickLibrary, false);

// // вешаем слушателя на кнопку library
headerLibBtn.addEventListener('click', renderHeaderLib);
// // вешаем слушателя на кнопку home
headerHomeBtn.addEventListener('click', renderHeaderHome);

// удаляем хедер home, убираем класс visually-hidden для отрисовки хедера library
function renderHeaderLib() {
  clearHeaderBox();
  // alert('перейти в library?');
  headerBox.classList.add('visually-hidden');
  visuallyHiddenHeaderBoxLib.classList.remove('visually-hidden');
}

function renderHeaderHome() {
  // alert('перейти в home?');
  clearHeaderBox();
  visuallyHiddenHeaderBoxLib.classList.add('visually-hidden');
  visuallyHiddenHeaderBox.remove('visually-hidden');
}

// удаляет отрисовку header
function clearHeaderBox() {
  headerBox.innerHTML = '';
}

// // вешаем слушателя на кнопку library
headerLibBtn.addEventListener('click', renderHeaderLib);
// // вешаем слушателя на кнопку home
headerHomeBtn.addEventListener('click', renderHeaderHome);
