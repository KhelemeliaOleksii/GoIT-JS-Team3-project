import { headerHomeHTMLContent } from './headerHomeHTML';
import { headerLibraryHTMLContent } from './headerLibraryHTML';

const header = document.querySelector('#header');

export function renderHeaderHome() {
  header.classList.add('main-header-img');
  header.innerHTML = headerHomeHTMLContent;
}

export function renderHeaderLibrary() {
  header.classList.add('library-header-img');
  header.innerHTML = headerLibraryHTMLContent;
}
