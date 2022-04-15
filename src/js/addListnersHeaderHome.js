import { entryKeyWords, clearErrorField } from './keyword-search';
import { renderHeaderHome, renderHeaderLibrary } from './headerHome';

export function addListenersHeaderHome() {
  const searchForm = document.querySelector('#header__search-form');
  const headerLinkLogo = document.querySelector('#header__link--home');
  const headerHomeButton = document.querySelector('#header__btn--home');
  const headerLibraryButton = document.querySelector('#header__btn--library');

  searchForm.addEventListener('submit', entryKeyWords);
  searchForm.addEventListener('click', clearErrorField);
  headerLinkLogo.addEventListener('click', renderHeaderHome);
  headerHomeButton.addEventListener('click', renderHeaderHome);
  headerLibraryButton.addEventListener('click', renderHeaderLibrary);
  //Додати слухачів  на LIBRARY, HOME, LOGO
}

// import { getWatchedFilms } from './getWatchedFilms';
// import { getPopularFilms } from './getPopularFilms';

// const homeHeader = document.querySelector('#header__search-form');
// const libraryHeader = document.querySelector('#library');

// const headerBox = document.querySelector('.header-js');
// // const visuallyHiddenHeaderBoxLib = document.querySelector('.library-header-img');

// function renderHomeHeader() {
//   if (homeHeader.classList.contains('visually-hidden')) {
//     homeHeader.classList.remove('visually-hidden');
//     headerBox.classList.remove('library-header-img');
//     headerBox.classList.add('main-header-img');
//     libraryHeader.classList.add('visually-hidden');
//   }
//   getPopularFilms();
//   // return;
// }

// function renderOnClickLibrary() {
//   if (libraryHeader.classList.contains('visually-hidden')) {
//     libraryHeader.classList.remove('visually-hidden');
//     headerBox.classList.remove('main-header-img');
//     headerBox.classList.add('library-header-img');
//     homeHeader.classList.add('visually-hidden');
//   }
//   return;
//   // getWatchedFilms();
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
