import NewApiFilmsByKeywords from './fetchFilmsByKeywords.js';
import { markupGalleryWithPagination } from './markupGallery.js';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { turnOnLoader, turnOffLoader } from './spinnerExample';
import { renderPagination } from './paginationRenderer'

const filmWrapper = document.querySelector('#film-list__section');
const newApiFilmsByKeywords = new NewApiFilmsByKeywords();
export function clearErrorField() {
    const textError = document.querySelector('#header__container-msg');
    textError.textContent = '';
}

export function clickSearchButton(event) {
    event.preventDefault();
    const { elements: { input } } = event.currentTarget;
    const filmCardList = document.querySelector('.film-card__list');
    turnOnLoader();
    filmCardList.innerHTML = '';
    newApiFilmsByKeywords.pageNum = 1;
    setTimeout(() => {
        entryKeyWords(input);
    }, 2000);
}

export async function entryKeyWords(input) {
    const textError = document.querySelector('#header__container-msg');
    const searchForm = document.querySelector('#header__search-form');
    clearErrorField();

    const keyWord = input.value.trim();
    if (keyWord === '') {
        textError.textContent = 'The input field is empty. Please enter a valid value';
        //        filmWrapper.style.display = 'none';
        searchForm.reset();

        const settings = {
            page: 1,
            totalCountItem: 0,
            itemPerPage: 20,
            ancestorID: "film-list__section",
            insertPlace: "beforeEnd",
        }
        renderPagination(settings);

        turnOffLoader();
        return;
    }
    newApiFilmsByKeywords.query = keyWord;
    try {
        const { results, total_results } = await newApiFilmsByKeywords.fetchFilmsByKeywords();
        if (results.length === 0) {
            const settings = {
                page: 1,
                totalCountItem: 0,
                itemPerPage: 20,
                ancestorID: "film-list__section",
                insertPlace: "beforeEnd",
            }
            renderPagination(settings);

            turnOffLoader();
            onFetchError();
            return;
        }
        filmWrapper.style.display = 'block';
        const formattedData = formattingData(results, genres);
        markupGalleryWithPagination(formattedData);
        createPagination(total_results);
        searchForm.reset();
    }
    catch (error) {
        console.log('Error');
    }
    turnOffLoader();
}

function onFetchError() {
    const textError = document.querySelector('#header__container-msg');
    const searchForm = document.querySelector('#header__search-form');
    filmWrapper.style.display = 'none';
    textError.textContent = 'Search result not successful. Enter the correct movie name and try again';
    searchForm.reset();

}
function createPagination(total_results) {
    const settings =
    {
        page: newApiFilmsByKeywords.pageNum,
        totalCountItem: total_results,
        itemPerPage: 20,
        ancestorID: "film-list__section",
        insertPlace: "beforeEnd",
    }
    renderPagination(settings);
    const paginationWrapper = document.querySelector('#pagination-button__list-container');
    paginationWrapper.addEventListener('click', paginationListenerKeyword);
}

async function paginationListenerKeyword(event) {
    try {
        event.preventDefault();
        const { target } = event;
        if (!target.classList.contains('pagination-button--active')) {
            return;
        }
        const nextPage = target.getAttribute('data-pageNumber');
        newApiFilmsByKeywords.pageNum = nextPage;
        const { results, total_results } = await newApiFilmsByKeywords.fetchFilmsByKeywords();
        const formattedData = formattingData(results, genres);
        markupGalleryWithPagination(formattedData);
        createPagination(total_results);
    }
    catch (error) {
        onFetchError();
    }
}



