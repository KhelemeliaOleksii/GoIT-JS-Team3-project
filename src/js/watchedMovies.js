import { getWatchedFilmFromLocalStorage } from './localStorage'
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';

const watchedButtonRef = document.querySelector('#header__btn--watched')
const queueButtonRef = document.querySelector('#header__btn--queue')
const pagginationButtonRef = document.querySelectorAll('.pagination__button__current')
const modalRef = document.querySelector('.modal-movie')
const moviePerPage = 20

if(watchedButtonRef != undefined) {
    watchedButtonRef.addEventListener('click', markupWatchedMovies)
}

export function markupWatchedMovies() {
    const watchedFilmsFromLocal = getWatchedFilmFromLocalStorage()

    // вішаю класи на кнопки watched, queue

    watchedButtonRef.classList.remove("transparent-btn")
    queueButtonRef.classList.add("transparent-btn")

    // беру активну кнопку пагінації і забираю з неї число, а потім за допомогаю слайсу отримаю потрібні 20 фільмів

    const pageNumber = pagginationButtonRef.innerHTML
    const startSlice = (pageNumber - 1) * moviePerPage
    const endSlice = startSlice + moviePerPage

    const slicedArrayOfMovies = watchedFilmsFromLocal.slice(startSlice, endSlice)

    // відображаю ці 20 фільмів

    const formattedData = formattingData(slicedArrayOfMovies, genres);
    markupGalleryWithPagination(formattedData);
}
  