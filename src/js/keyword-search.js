import { fetchFilmsByKeywords } from './fetchFilmsByKeywords.js';

export const searchForm = document.querySelector('#header__search-form'); // форма ввода
const textError= document.querySelector('#header__container-msg'); // поле для отображения текста ошибки

//searchForm.addEventListener('submit', entryKeyWords); слушателя перенесли в index.js

export async function entryKeyWords() {
    event.preventDefault();
    textError.textContent = '';
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
            renderFilms(films);
        }
        catch (error) {
            onFetchError();
        }
    }


function renderFilms(films)
{
    console.log(films.results); //передача результатов на отрисовку
}
function onFetchError() {  //ошибка и очистка формы
    textError.textContent = 'Search result not successful. Enter the correct movie name and try again';
    searchForm.reset();
}