import {entryKeyWords, clearErrorField} from './keyword-search'

export function addListersHeaderHome(isItFirstStart = true) {
    const searchForm = document.querySelector('#header__search-form');
    if (!isItFirstStart) {
        searchForm.removeEventListener('submit', entryKeyWords);
        searchForm.removeEventListener('click', clearErrorField);
        
    }
    searchForm.addEventListener('submit', entryKeyWords);
    searchForm.addEventListener('click', clearErrorField);
    
}

