// import { Pagination } from './pagination';

// const parentIcludesPagButtons = document.querySelector('#gallary')
// const movieListRef = document.querySelector('#gallary #gallary') // or what will you suggest


export const moviePagination = new Pagination({
    total: 150,
    onChange(value) {
      handlePageChange(value);
      currentPageRef.textContent = value;
    },
  });