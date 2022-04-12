import fetchCountries  from './fetchOneFilm';
import cardHBS from '../templates/card.hbs';
import { getQueueFilmFromLocalStorage } from './localStorage'

const listRef = document.querySelector('.film-card__list')
const queueButtonRef = document.querySelector('#header__btn--queue')
const watchedButtonRef = document.querySelector('#header__btn--watched')

queueButtonRef.addEventListener('click', markupQueueMovies)

// Імітація роботи localStorage

// const ids = [27, 14, 15, 100, 28, 24, 5, 13, 64, 55, 76, 87, 98, 11, 19, 20]
// const ids2 = [12, 123, 534, 65, 677]
// localStorage.setItem('films-for-queue', JSON.stringify(ids)) 
// localStorage.setItem('films-for-watched', JSON.stringify(ids2))  

// Малює галерею

function markupQueueMovies(e) {
    e.preventDefault();
    listRef.innerHTML = '';

     // забираю id

    const localId = getQueueFilmFromLocalStorage()
    
    // вішаю класи активної кнопки

    watchedButtonRef.classList.add("transparent-btn")
    queueButtonRef.classList.remove("transparent-btn")
    
    // якщо немає фільмів
    
    if(localId === null) {
        return alert(
            "add movie to queue list"
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