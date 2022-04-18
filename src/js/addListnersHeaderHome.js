import { clickSearchButton, clearErrorField } from './keyword-search';
import { renderHeaderHomeOnClick, renderHeaderLibraryOnClick } from './headerHome';
import { watchedMoviesFirstPage } from './watchedMovies';
import { queueMoviesFirstPage } from './queueMovies';

export function addListenersHeaderHome() {
  const searchForm = document.querySelector('#header__search-form');
  const headerLinkLogo = document.querySelector('#header__link--home');
  const headerHomeButton = document.querySelector('#header__btn--home');
  const headerLibraryButton = document.querySelector('#header__btn--library');

  searchForm.addEventListener('submit', clickSearchButton);
  searchForm.addEventListener('click', clearErrorField);

  //Додати слухачів  на LIBRARY, HOME, LOGO
  headerLinkLogo.addEventListener('click', renderHeaderHomeOnClick);
  headerHomeButton.addEventListener('click', renderHeaderHomeOnClick);
  headerLibraryButton.addEventListener('click', renderHeaderLibraryOnClick);
}

export function addListenersHeaderLibrary() {
  const headerLinkLogo = document.querySelector('#header__link--home');
  const headerHomeButton = document.querySelector('#header__btn--home');
  const headerLibraryButton = document.querySelector('#header__btn--library');
  const headerLibraryWatched = document.querySelector('#header__btn--watched');
  const headerLibraryQueue = document.querySelector('#header__btn--queue');

  //Додати слухачів  на LIBRARY, HOME, LOGO
  headerLinkLogo.addEventListener('click', renderHeaderHomeOnClick);
  headerHomeButton.addEventListener('click', renderHeaderHomeOnClick);
  headerLibraryButton.addEventListener('click', renderHeaderLibraryOnClick);

  // // Add library buttons listener
  headerLibraryQueue.addEventListener('click', queueMoviesFirstPage);
  headerLibraryWatched.addEventListener('click', watchedMoviesFirstPage);
}
