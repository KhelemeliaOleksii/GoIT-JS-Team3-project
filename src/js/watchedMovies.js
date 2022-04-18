import {getSlicedArrayOfMovies, settingsForPagination} from './sliceLocalMovies'
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { renderPagination } from './paginationRenderer'

export function getWatchedMovies(renderPage) {
    const watchedButtonRef = document.querySelector('#header__btn--watched')
    const queueButtonRef = document.querySelector('#header__btn--queue')

    watchedButtonRef.classList.remove("transparent-btn")
    queueButtonRef.classList.add("transparent-btn")

    const arrayOfLocalMovies = getSlicedArrayOfMovies(renderPage = 1, 'watched')

    // const formattedData = formattingData(arrayOfLocalMovies, genres);
    markupGalleryWithPagination(arrayOfLocalMovies);

    const settings = settingsForPagination(renderPage = 1, 'watched')
    renderPagination(settings);

    const paginationWrapper = document.querySelector('#pagination-button__list-container');
    paginationWrapper.addEventListener('click', paginationListener);
}

function paginationListener(event) {
    event.preventDefault();
    const { target } = event;

    if (!target.classList.contains('pagination-button--active')) {
        return;
    }

    const nextPage = target.getAttribute('data-pageNumber');
    getWatchedMovies(nextPage);
} 