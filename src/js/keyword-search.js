import { fetchFilmsByKeywords } from './fetchFilmsByKeywords.js';
import { markupGalleryWithPagination } from './markupGallery.js';
import { genres } from './genres';
import { formattingData } from './formattingData';

// Функція обробник очищення поля для повідомлень
export function clearErrorField() { 
    const textError= document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    textError.textContent = '';
}

// Функція обробки пошукового запросу
export async function entryKeyWords(event) {
    const textError= document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    const searchForm = document.querySelector('#header__search-form'); // форма ввода
    event.preventDefault();
    clearErrorField();
    const { elements: { input } } = event.currentTarget;
    const keyWord = input.value.trim();
    if (keyWord === '') { 
        textError.textContent = 'The input field is empty. Please enter a valid value';
        searchForm.reset();
        return;
    }
        try {
            const films = await fetchFilmsByKeywords(keyWord);
            if (films.results.length===0) {
                onFetchError();
                return;
            }
            const formattedData = formattingData(films.results, genres);
            markupGalleryWithPagination(formattedData); //передача результатов на отрисовку
            searchForm.reset();
        }
        catch (error) {
            onFetchError();
        }
    }

function onFetchError() {  //ошибка и очистка формы
    const textError= document.querySelector('#header__container-msg'); // поле для отображения текста ошибки
    const searchForm = document.querySelector('#header__search-form'); // форма ввода
    textError.textContent = 'Search result not successful. Enter the correct movie name and try again';
    searchForm.reset();
}