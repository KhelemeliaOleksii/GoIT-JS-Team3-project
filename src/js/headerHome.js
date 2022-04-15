import { headerHomeHTMLContent } from './headerHomeHTML';
import { headerLibraryHTMLContent } from './headerLibraryHTML';
import { addListenersHeaderHome } from './addListnersHeaderHome';

export function renderHeaderHome() {
  const header = document.querySelector('#header');
  header.classList.add('main-header-img');
  header.innerHTML = headerHomeHTMLContent;
  addListenersHeaderHome();
}

export function renderHeaderLibrary() {
  const header = document.querySelector('#header');
  header.classList.add('library-header-img');
  header.innerHTML = headerLibraryHTMLContent;
  addListenersHeaderHome();
}
