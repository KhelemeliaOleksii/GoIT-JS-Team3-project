import { createElement } from './custom-create-element';
import { Pagination } from './pagination';


//////////////////////
const listItemsRef = [];
const paginationButtonsRef = Object.create(null); // like = {};
const filmContainerRef = document.querySelector('.film-list__container');
const buttonsListRef = document.createElement('ul');

// names of Buttons to creation // Иимена создаваемых кнопок
const paginationButtonNames = [
  'prevPage',
  'firstPage',
  'pageSeterFirst',
  'twiceBefore',
  'onceBefore',
  'currentPage',
  'onceAfter',
  'twiceAfter',
  'pageSeterSecond',
  'lastPage',
  'nextPage',
];
createPagButtons();
export const pagination = (currentPage) => {
  pagButtonDecorator(currentPage);   
  pagVisuallyHandler(currentPage);
  
  };
       

export const moviePagination = new Pagination({
  total: 500,
  onChange(currentPage) {
    pagination(currentPage);    
  },
});

// creation (in the memory) list items contained button with ID like a name in inputed array
export function createPagButtons() {
  for (let index = 0; index < paginationButtonNames.length; index++) {
    const btn = createElement('button', {
      classList: 'pagination__button',
      id: paginationButtonNames[index],
    });
    const btnName = paginationButtonNames[index]; // Add reference for current button into ref list
    paginationButtonsRef[btnName] = btn;
    listItemsRef.push(
      createElement('li', {
        // Add list items with created buttons
        classList: 'list-item',
        childNodes: [btn],
      }),
    );
  }

  buttonsListRef.append(...listItemsRef); // listItemsRef = [];
  filmContainerRef.append(buttonsListRef);
  buttonsListRef.classList.add('pagination__buttons-list');
  buttonsListRef.classList.add('list-no-ls');
    paginationButtonsRef.pageSeterFirst.textContent = '...';
    paginationButtonsRef.pageSeterSecond.textContent = '...';
}

export function pagButtonDecorator(page = 1, total = 500) {
  paginationButtonsRef.prevPage.classList.add('pagination__button__prev');
  paginationButtonsRef.nextPage.classList.add('pagination__button__next');
  paginationButtonsRef.currentPage.classList.add('pagination__button__current');

  paginationButtonsRef.prevPage.classList.add('visually-hidden');
  paginationButtonsRef.firstPage.classList.add('visually-hidden');
  paginationButtonsRef.pageSeterFirst.classList.add('visually-hidden');
  paginationButtonsRef.twiceBefore.classList.add('visually-hidden');
  paginationButtonsRef.onceBefore.classList.add('visually-hidden');

  paginationButtonsRef.firstPage.textContent = 1;
  paginationButtonsRef.twiceBefore.textContent = `${page - 2}`;
  paginationButtonsRef.onceBefore.textContent = `${page - 1}`;
  paginationButtonsRef.currentPage.textContent = page;
  paginationButtonsRef.onceAfter.textContent = `${page + 1}`;
  paginationButtonsRef.twiceAfter.textContent = `${page + 2}`;
  paginationButtonsRef.lastPage.textContent = moviePagination.total;
  filmContainerRef.append(buttonsListRef)
}

/*
function pagVisuallyHandler(page, total = 500) {
  pagVisuallyChecker(paginationButtonsRef.firstPage, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.twiceBefore, page, total, 2);
  pagVisuallyChecker(paginationButtonsRef.onceBefore, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.onceAfter, page, total, 1);
  pagVisuallyChecker(paginationButtonsRef.twiceAfter, page, total, 2);
  pagVisuallyChecker(paginationButtonsRef.lastPage, page, total, 1);
}
function pagVisuallyChecker(btn, page, total, condition) {
  if (page <= condition || page >= total - condition) btn.classList.add('visually-hidden');
  if (page > condition || page < total - condition) btn.classList.remove('visually-hidden');
}*/
function pagVisuallyHandler(page, total = 500) {
  if (page <= 1) paginationButtonsRef.prevPage.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.firstPage.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.pageSeterFirst.classList.add('visually-hidden');
  if (page <= 2) paginationButtonsRef.twiceBefore.classList.add('visually-hidden');
  if (page <= 1) paginationButtonsRef.onceBefore.classList.add('visually-hidden');
  if (page > total-1) paginationButtonsRef.onceAfter.classList.add('visually-hidden');
  if (page > total-2) paginationButtonsRef.twiceAfter.classList.add('visually-hidden');
  if (page > total-2) paginationButtonsRef.pageSeterSecond.classList.add('visually-hidden');
  if (page > total-1) paginationButtonsRef.lastPage.classList.add('visually-hidden');
  if (page > total-1) paginationButtonsRef.nextPage.classList.add('visually-hidden');
  if (page > 1 ) paginationButtonsRef.prevPage.classList.remove('visually-hidden');
  if (page > 1 ) paginationButtonsRef.firstPage.classList.remove('visually-hidden');
  if (page > 1 ) paginationButtonsRef.pageSeterFirst.classList.remove('visually-hidden');
  if (page > 2 ) paginationButtonsRef.twiceBefore.classList.remove('visually-hidden');
  if (page > 1) paginationButtonsRef.onceBefore.classList.remove('visually-hidden');
  if (page < total-1) paginationButtonsRef.onceAfter.classList.remove('visually-hidden');
  if (page < total-2) paginationButtonsRef.twiceAfter.classList.remove('visually-hidden');
  if (page < total-2) paginationButtonsRef.pageSeterSecond.classList.remove('visually-hidden');
  if (page < total-1 ) paginationButtonsRef.lastPage.classList.remove('visually-hidden');
  if (page < total-1 ) paginationButtonsRef.nextPage.classList.remove('visually-hidden');
}
//////////////////// Add Event Listener //////////////////////////////////

buttonsListRef.addEventListener('click', event => {
  if (event.target === paginationButtonsRef.prevPage) {
    moviePagination.prevPage();
  }
  if (event.target === paginationButtonsRef.nextPage) {
    moviePagination.nextPage();
  }
  //////////////////////////////////////////////////
  if (event.target === paginationButtonsRef.onceBefore) {
    moviePagination.onceBefore();
  }
  if (event.target === paginationButtonsRef.twiceBefore) {
    moviePagination.twiceBefore();
  }
  if (event.target === paginationButtonsRef.onceAfter) {
    moviePagination.onceAfter();
  }
  if (event.target === paginationButtonsRef.twiceAfter) {
    moviePagination.twiceAfter();
  }
  ////////////////////////////////////////////////////
  //   if (event.target === paginationButtonsRef.currentPage) {moviePagination.prevPage();}
  //   if (event.target === ) {moviePagination.prevPage();}
  //   if (event.target === ) {moviePagination.prevPage();}
});
