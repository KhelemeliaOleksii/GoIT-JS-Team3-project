import './sass/main.scss';
import './js/modal';
import { arrForLocalStorage, LOCALSTORAGE_KEY_FOR_WATCHED, LOCALSTORAGE_KEY_FOR_QUEUE, addToLocalStorіageWhenStart } from "./js/localStorage";
import { searchForm, entryKeyWords } from './js/keyword-search';


//addToLocalStorrageWhenStart();
searchForm.addEventListener('submit', entryKeyWords);
