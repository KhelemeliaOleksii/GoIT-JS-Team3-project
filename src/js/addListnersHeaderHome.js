import {entryKeyWords, clearErrorField} from './keyword-search'

export function addListenersHeaderHome() {
    const searchForm = document.querySelector('#header__search-form');
    
    searchForm.addEventListener('submit', entryKeyWords);
    searchForm.addEventListener('click', clearErrorField);
    //Додати слухачів  на LIBRARY, HOME, LOGO
}

