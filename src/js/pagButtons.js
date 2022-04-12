import { createElement } from "./custom-create-element";
import { Pagination } from './pagination';

const filmContainerRef = document.querySelector('.film-list__container');

const buttonsListRef = document.createElement('ul');
buttonsListRef.classList.add('pagination__buttons-list');
buttonsListRef.classList.add('list-no-ls');

    const paginationButtonNames = [
        "prevPage",
        "firstPage",
        "pageSetterFirst",
        "twiceBefore",
        "onceBefore",
        "currentPage",
        "onceAfter",
        "twiceAfter",
        "pageSetterSecond",
        "lastpage",
        "nextPage"
    ]

    const paginationButtonRefs = [];
    const listItemsRef = [];
    for (let index = 0; index < paginationButtonNames.length; index++) {
      
        listItemsRef.push(createElement('li', {
            classList: 'list-item',
            childNodes: [createElement('button', {classList: "pagination__button", id: paginationButtonNames[index]})]
        }))  
        // paginationButtonRefs.push(document.querySelector(`#${paginationButtonNames[index]}`));      
    }
    // console.log(paginationButtonRefs)
    console.log(listItemsRef)
    listItemsRef[0].childNodes[0].classList.add('pagination__button__prev');
    listItemsRef[10].childNodes[0].classList.add('pagination__button__next');
    listItemsRef[5].childNodes[0].classList.add('pagination__button__current');
/*
    prevPageBtnRef.classList.add('pagination__button__prev');
    nextPageBtnRef.classList.add('pagination__button__next');
    currentPageBtnRef.classList.add('pagination__button__current');
*/
buttonsListRef.append(...listItemsRef);
filmContainerRef.append(buttonsListRef)


///////////////////// Это по идее функции Саши Барановского ////////////////
    const handlePageChange = currentPage => {
      getPopularMovies(currentPage).then(({ data }) => {
        renderMovieList(data.results);
      });
    };
////////////но без нее не будет рисоваться из-за ссылок ниже ///////////////
/*
    const moviePagination = new Pagination({
    total: 150,
    onChange(value) {
      handlePageChange(value);
      listItemsRef[3].childNodes[0].textContent = value - 2;
      listItemsRef[4].childNodes[0].textContent = value - 1;
      listItemsRef[5].childNodes[0].textContent = value;
      listItemsRef[6].childNodes[0].textContent = value + 1;
      listItemsRef[7].childNodes[0].textContent = value + 2;
    },
  });

    listItemsRef[0].childNodes[0]..addEventListener('click', () => {
      moviePagination.prevPage();
    });
    listItemsRef[10].childNodes[0].addEventListener('click', () => {
      moviePagination.nextPage();
    });

    listItemsRef[1].childNodes[0].addEventListener('click', )
    listItemsRef[9].childNodes[0].addEventListener('click', )

    listItemsRef[3].childNodes[0].addEventListener('click', () => {
      moviePagination.onceBefore();
    });
    listItemsRef[4].childNodes[0].addEventListener('click', () => {
      moviePagination.twiceBefore();
    });
    listItemsRef[6].childNodes[0].addEventListener('click', () => {
      moviePagination.onceAfter();
    });
    listItemsRef[7].childNodes[0].addEventListener('click', () => {
      moviePagination.twiceAfter();
    });
*/
  // currentPageBtnRef.addEventListener('click', )
// pageSetterFirstBtnRef.addEventListener('click', )
// pageSetterSecondBtnRef.addEventListener('click', )
