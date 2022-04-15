import { headerHomeHTMLContent } from './headerHomeHTML'
import { headerLibraryHTMLContent } from './headerLibraryHTML'

export function renderHeaderHome () {
    const header = document.querySelector('#header');
    
    header.classList.add('main-header-img');
    header.innerHTML = headerHomeHTMLContent;
};

export function renderHeaderLibrary () {
    const header = document.querySelector('#header');
    header.classList.add('main-header-img');
    header.innerHTML = headerLibraryHTMLContent;
};

