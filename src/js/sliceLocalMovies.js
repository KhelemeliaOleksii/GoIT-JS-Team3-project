import { getQueueFilmFromLocalStorage, getWatchedFilmFromLocalStorage } from './localStorage'

export function getSlicedArrayOfMovies(renderPage, typeOfMovie) {
    let getLocalMovies = []
    const moviePerPage = 20

    if(typeOfMovie === 'queue') {
        getLocalMovies = getQueueFilmFromLocalStorage()
    } else if(typeOfMovie === 'watched') {
        getLocalMovies = getWatchedFilmFromLocalStorage()
    }

    const startSlice = (renderPage - 1) * moviePerPage
    const endSlice = startSlice + moviePerPage

    const slicedArray = getLocalMovies.slice(startSlice, endSlice)

    return slicedArray
}

export function settingsForPagination(renderPage, typeOfMovie) {
    let getLocalMovies = []

    if(typeOfMovie === 'queue') {
        getLocalMovies = getQueueFilmFromLocalStorage()
    } else if(typeOfMovie === 'watched') {
        getLocalMovies = getWatchedFilmFromLocalStorage()
    }

    const countOfArray = getLocalMovies.length
    const moviePerPage = 20

    return {
            page: renderPage,
            totalCountItem: countOfArray,
            itemPerPage: moviePerPage,
            ancestorID: "film-list__section",
            insertPlace: "beforeEnd",
        }
}