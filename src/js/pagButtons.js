import { createElement } from "./custom-create-element";
import { getPopularFilms } from "./getPopularFilms";
import { markupGalleryWithPagination } from './markupGallery';
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

    listItemsRef[2].childNodes[0].textContent = '...';
    listItemsRef[8].childNodes[0].textContent = '...';
    // listItemsRef[0].childNodes[0].textContent = &#129128;
    // listItemsRef[10].childNodes[0].textContent = &#129130;

buttonsListRef.append(...listItemsRef);
filmContainerRef.append(buttonsListRef)

    const handlePageChange = currentPage => {
      getPopularFilms(currentPage).then(({ data }) => {
        markupGalleryWithPagination(data.results);
      });
    };
// /*
    const moviePagination = new Pagination({
    total: 500,
    onChange(value) {
      handlePageChange(value);
      listItemsRef[1].childNodes[0].textContent = 1;
      listItemsRef[3].childNodes[0].textContent = `${value - 2}`;
      listItemsRef[4].childNodes[0].textContent = `${value - 1}`;
      listItemsRef[5].childNodes[0].textContent = value;
      listItemsRef[6].childNodes[0].textContent = `${value + 1}`;
      listItemsRef[7].childNodes[0].textContent = `${value + 2}`;
      listItemsRef[9].childNodes[0].textContent = moviePagination.total;
      //////////
      if (value <= 2) {listItemsRef[3].childNodes[0].classList.add('visually-hidden')}
      if (value > 2) {listItemsRef[3].childNodes[0].classList.remove('visually-hidden')}
      if (value <= 1) {
        listItemsRef[4].childNodes[0].classList.add('visually-hidden');
        listItemsRef[2].childNodes[0].classList.add('visually-hidden');
        listItemsRef[1].childNodes[0].classList.add('visually-hidden');
        listItemsRef[0].childNodes[0].classList.add('visually-hidden');
      }
      if (value > 1) {listItemsRef[4].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[2].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[1].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[0].childNodes[0].classList.remove('visually-hidden')
    }
      ///////////////////////////////////////////////////////////////////
      if (value >= this.total) {listItemsRef[6].childNodes[0].classList.add('visually-hidden')
      listItemsRef[8].childNodes[0].classList.add('visually-hidden')
      listItemsRef[9].childNodes[0].classList.add('visually-hidden')
      listItemsRef[10].childNodes[0].classList.add('visually-hidden')
    }
      if (value < this.total) {listItemsRef[6].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[8].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[9].childNodes[0].classList.remove('visually-hidden')
        listItemsRef[10].childNodes[0].classList.remove('visually-hidden')
    }
      if (value >= this.total-1) {listItemsRef[7].childNodes[0].classList.add('visually-hidden')}
      if (value < this.total-1) {listItemsRef[7].childNodes[0].classList.remove('visually-hidden')}
    },
  });

    listItemsRef[0].childNodes[0].addEventListener('click', () => {
      moviePagination.prevPage();
    });
    listItemsRef[10].childNodes[0].addEventListener('click', () => {
      moviePagination.nextPage();
    });

    listItemsRef[1].childNodes[0].addEventListener('click',() => {
      moviePagination.firstPage();
    });
    listItemsRef[9].childNodes[0].addEventListener('click', () => {
      moviePagination.lastPage();
    });

    listItemsRef[3].childNodes[0].addEventListener('click', () => {
      moviePagination.twiceBefore();
      // moviePagination.prevPage();
      // moviePagination.prevPage();
    });
    listItemsRef[4].childNodes[0].addEventListener('click', () => {
   
      moviePagination.onceBefore();
      // moviePagination.prevPage();
      
    });
    listItemsRef[6].childNodes[0].addEventListener('click', () => {
      moviePagination.onceAfter();
      // moviePagination.nextPage();
    });
    listItemsRef[7].childNodes[0].addEventListener('click', () => {
      moviePagination.twiceAfter();
      // moviePagination.nextPage();
      // moviePagination.nextPage();
    });
// */
 