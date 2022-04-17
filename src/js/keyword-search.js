import  NewApiFilmsByKeywords  from './fetchFilmsByKeywords.js';
import { markupGalleryWithPagination } from './markupGallery.js';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { showSpinner, hideSpinner } from './spinner';
import {  renderPagination } from './paginationRenderer'

const newApiFilmsByKeywords = new NewApiFilmsByKeywords();
// Функція обробник очищення поля для повідомлень
export function clearErrorField() {
    const textError = document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    textError.textContent = '';
}

export function clickSearchButton(event) {
    event.preventDefault();
    const { elements: { input } } = event.currentTarget;
    const filmCardList = document.querySelector('.film-card__list');
    showSpinner();
    filmCardList.innerHTML = '';
    setTimeout(() => {
        entryKeyWords(input);
    }, 2000);
}
// Функція обробки пошукового запросу
export async function entryKeyWords(input) {
    const textError = document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    const searchForm = document.querySelector('#header__search-form'); // форма ввода
    clearErrorField();
    hideSpinner();
    const keyWord = input.value.trim();
    if (keyWord === '') {
        textError.textContent = 'The input field is empty. Please enter a valid value';
        searchForm.reset();
        return;
    }
    newApiFilmsByKeywords.query = keyWord;
    try {
        const films = await newApiFilmsByKeywords.fetchFilmsByKeywords();
        if (films.results.length === 0) {
            onFetchError();
            return;
        }
        const formattedData = formattingData(films.results, genres);
        markupGalleryWithPagination(formattedData); //передача результатов на отрисовку
        createPagination();

    }
    catch (error) {
        onFetchError();
    }
}

function onFetchError() {  //ошибка и очистка формы
    const textError = document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    const searchForm = document.querySelector('#header__search-form'); // форма ввода
    textError.textContent = 'Search result not successful. Enter the correct movie name and try again';
    searchForm.reset();
}
function createPagination() { 
    const settings =
        {
            page: newApiFilmsByKeywords.pageNum,
            totalCountItem: 500,
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
        const nextPage = target.getAttribute('data-pageNumber');
        newApiFilmsByKeywords.pageNum = nextPage;
        console.log(newApiFilmsByKeywords.page);
        const films = await newApiFilmsByKeywords.fetchFilmsByKeywords();
        const formattedData = formattingData(films.results, genres);
        markupGalleryWithPagination(formattedData); 
        createPagination();
    }
    catch(error) { 
        onFetchError();
    } 
} 