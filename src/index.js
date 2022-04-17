import './sass/main.scss';
import './js/renderHeaderHomeStart';
import './js/getPopularFilms';

//import './js/header-home';
import './js/modal';
import './js/localStorage';

// import './js/spinner';
//import './js/annoying';
import {renderPagination} from './js/paginationRenderer';
const ancestor = document.querySelector('#film-list__section');

const settings = { 
    page : 1,
    totalCountItem : 10,
    itemPerPage : 20,
    ancestorID : "film-list__section",
    insertPlace : "beforeEnd",
  }

//createPaginationButtonsContainer("beforeEnd", "film-list__section")
// console.log(getPageNumber('arrow'));