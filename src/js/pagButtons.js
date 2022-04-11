// import { createElement } from "./custom-create-element";
// import { moviePagination } from "./paginationInterface"

const filmContainerRef = document.querySelector('.film-list__container');

const buttonsListRef = document.createElement('ul')
buttonsListRef.classList.add('pagination__buttons-list')

/*
const paginationButtonRefs = {
    prevPage: document.createElement('button'),
    firstPage: document.createElement('button'),
    pageSetterFirst: document.createElement('button'),
    twiceBefore: document.createElement('button'),
    onceBefore: document.createElement('button'),
    currentPage: document.createElement('button'),
    onceAfter: document.createElement('button'),
    twiceAfter: document.createElement('button'),
    pageSetterSecond: document.createElement('button'),
    lastpage: document.createElement('button'),
    nextPage: document.createElement('button')
  }
*/
/*
    const paginationButtonRefs = [
        prevPage,
        firstPage,
        pageSetterFirst,
        twiceBefore,
        onceBefore,
        currentPage,
        onceAfter,
        twiceAfter,
        pageSetterSecond,
        lastpage,
        nextPage
    ]
*/
/*
    const listItem = createElement('li', {
        classList: 'list-item',
        childNodes: [createElement('button', {classlist: 'pagination__button'})]
    })
*/

///////////////////////////////
///////////////////////////////
///////////////////////////////
const prevPageListItem = document.createElement('li');
const firstPageListItem = document.createElement('li');
const pageSetterFirstListItem = document.createElement('li');
const twiceBeforeListItem = document.createElement('li');
const onceBeforeListItem = document.createElement('li');
const currentPageListItem = document.createElement('li');
const onceAfterListItem = document.createElement('li');
const twiceAfterListItem = document.createElement('li');
const pageSetterSecondListItem = document.createElement('li');
const lastpageListItem = document.createElement('li');
const nextPageListItem = document.createElement('li');


const prevPageBtnRef = document.createElement('button');
const firstPageBtnRef = document.createElement('button');
const pageSetterFirstBtnRef = document.createElement('button');
const twiceBeforeBtnRef = document.createElement('button');
const onceBeforeBtnRef = document.createElement('button');
const currentPageBtnRef = document.createElement('button');
const onceAfterBtnRef = document.createElement('button');
const twiceAfterBtnRef = document.createElement('button');
const pageSetterSecondBtnRef = document.createElement('button');
const lastpageBtnRef = document.createElement('button');
const nextPageBtnRef = document.createElement('button');

prevPageBtnRef.classList.add('pagination__button');
firstPageBtnRef.classList.add('pagination__button');
pageSetterFirstBtnRef.classList.add('pagination__button');
twiceBeforeBtnRef.classList.add('pagination__button');
onceBeforeBtnRef.classList.add('pagination__button');
currentPageBtnRef.classList.add('pagination__button');
onceAfterBtnRef.classList.add('pagination__button');
twiceAfterBtnRef.classList.add('pagination__button');
pageSetterSecondBtnRef.classList.add('pagination__button');
lastpageBtnRef.classList.add('pagination__button');
nextPageBtnRef.classList.add('pagination__button');

prevPageBtnRef.classList.add('pagination__button__prev');
nextPageBtnRef.classList.add('pagination__button__next');
currentPageBtnRef.classList.add('pagination__button__current');

buttonsListRef.classList.add('list-no-ls');
buttonsListRef.classList.add('pagination__buttons-list');

prevPageListItem.append(prevPageBtnRef);
firstPageListItem.append(firstPageBtnRef);
pageSetterFirstListItem.append(pageSetterFirstBtnRef);
twiceBeforeListItem.append(twiceBeforeBtnRef);
onceBeforeListItem.append(onceBeforeBtnRef);
currentPageListItem.append(currentPageBtnRef);
onceAfterListItem.append(onceAfterBtnRef);
twiceAfterListItem.append(twiceAfterBtnRef);
pageSetterSecondListItem.append(pageSetterSecondBtnRef);
lastpageListItem.append(lastpageBtnRef);
nextPageListItem.append(nextPageBtnRef);

buttonsListRef.append(prevPageListItem, firstPageListItem, pageSetterFirstListItem, twiceBeforeListItem, onceBeforeListItem, currentPageListItem, onceAfterListItem, twiceAfterListItem, pageSetterSecondListItem, lastpageListItem, nextPageListItem); 
filmContainerRef.append(buttonsListRef)
///////////////////////////////
///////////////////////////////
///////////////////////////////
/*
prevPageBtnRef.addEventListener('click', () => {
    moviePagination.prevPage();
  });
nextPageBtnRef.addEventListener('click', () => {
    moviePagination.nextPage();
  });

firstPageBtnRef.addEventListener('click', )
lastpageBtnRef.addEventListener('click', )

// currentPageBtnRef.addEventListener('click', )
// pageSetterFirstBtnRef.addEventListener('click', )
// pageSetterSecondBtnRef.addEventListener('click', )

twiceBeforeBtnRef.addEventListener('click', () => {
    moviePagination.onceBefore();
  });
onceBeforeBtnRef.addEventListener('click', () => {
    moviePagination.twiceBefore();
  });
onceAfterBtnRef.addEventListener('click', () => {
    moviePagination.onceAfter();
  });
twiceAfterBtnRef.addEventListener('click', () => {
    moviePagination.twiceAfter();
  });

*/
