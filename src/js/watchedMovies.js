import fetchCountries  from './fetchOneFilm';
import cardHBS from '../templates/card.hbs';
import { getWatchedFilmFromLocalStorage } from './localStorage'

const listRef = document.querySelector('.film-card__list')
const watchedButtonRef = document.querySelector('#header__btn--watched')
const queueButtonRef = document.querySelector('#header__btn--queue')

watchedButtonRef.addEventListener('click', markupWatchedMovies)

// Імітація роботи localStorage

// const ids = [27, 14, 15, 100, 28, 24, 5, 13, 64, 55, 76, 87, 98, 11, 19, 20]
// localStorage.setItem('films-for-watched', JSON.stringify(ids))  

// Малює галерею

function markupWatchedMovies(e) {
    e.preventDefault();
    listRef.innerHTML = '';

    // забираю id

    const localId = getWatchedFilmFromLocalStorage()

    // вішаю класи активної кнопки

    watchedButtonRef.classList.remove("transparent-btn")
    queueButtonRef.classList.add("transparent-btn")

    // якщо немає фільмів

    if(localId === null) {
        return alert(
            "watch the movie and add to watched list"
        )
    }
    
    // добавляю фільми у розмітку

    localId.map(id => {
        fetchCountries(id)
        .then(movie => {
            const markup = cardHBS(movie)
            listRef.insertAdjacentHTML('beforeend', markup)
        })
    })
}