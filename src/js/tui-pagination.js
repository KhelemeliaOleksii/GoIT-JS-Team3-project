import { fetchPopularFilms } from './API/apiFetchPopularFilms';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { markupGalleryWithPagination } from './markupGallery';
import Pagination from 'tui-pagination';
import sprite from '../images/sprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
  totalItemsHome: null,
};

export const initPagination = ({ page, itemsPerPage, totalItems }) => {
  const options = {
    page,
    itemsPerPage,
    totalItems,
    visiblePages: 7,
    centerAlign: true,
    usageStatistics: false,

    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
      currentPage: '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(document.querySelector('.tui-pagination'), options);
  paginationSettings.pagination = pagination;

  pagination.on('afterMove', async ({ page }) => {
    try {
      const response = await fetchPopularFilms(page);
      const formattedData = formattingData(response.results, genres);
      markupGalleryWithPagination(formattedData);
    } catch (error) {
      console.log(error);
    }
  });

  return pagination;
};
