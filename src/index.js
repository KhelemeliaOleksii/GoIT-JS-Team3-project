import './sass/main.scss';
import './js/pagButtons';
import './js/header-home';
import './js/getPopularFilms';
import './js/modal';
import './js/keyword-search';
import './js/homeButtonListeners';
import {
  arrForLocalStorage,
  LOCALSTORAGE_KEY_FOR_WATCHED,
  LOCALSTORAGE_KEY_FOR_QUEUE,
  addToLocalStorageWhenStart,
} from './js/localStorage';

addToLocalStorageWhenStart();
