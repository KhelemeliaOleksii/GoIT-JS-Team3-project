import { headerHomeHTMLContent } from './headerHomeHTML';
import { headerLibraryHTMLContent } from './headerLibraryHTML';
import { addListenersHeaderHome } from './addListnersHeaderHome';

export function renderHeaderHome() {
  const header = document.querySelector('#header');
  header.classList.add('main-header-img');
  header.innerHTML = headerHomeHTMLContent;
}

// Render header on button click

export function renderHeaderHomeOnClick() {
  const header = document.querySelector('#header');
  if (header.classList.contains('library-header-img')) {
    header.classList.remove('library-header-img');
    header.classList.add('main-header-img');
    header.innerHTML = headerHomeHTMLContent;
  }
  addListenersHeaderHome();
}

export function renderHeaderLibraryOnClick() {
  const header = document.querySelector('#header');
  if (header.classList.contains('main-header-img')) {
    header.classList.remove('main-header-img');
    header.classList.add('library-header-img');
    header.innerHTML = headerLibraryHTMLContent;
  }
  addListenersHeaderHome();
}
