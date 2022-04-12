import './sass/main.scss';
import './js/modal';
import { arrForLocalStorage, LOCALSTORAGE_KEY_FOR_WATCHED, LOCALSTORAGE_KEY_FOR_QUEUE, addToLocalStorageWhenStart } from "./js/localStorage";
import { searchForm, entryKeyWords } from './js/keyword-search';

addToLocalStorageWhenStart();

searchForm.addEventListener('submit', entryKeyWords);
