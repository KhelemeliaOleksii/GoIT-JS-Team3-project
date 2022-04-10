export const arrForLocalStorage = [];
export const LOCALSTORAGE_KEY_FOR_WATCHED = "films-for-watched";
export const LOCALSTORAGE_KEY_FOR_QUEUE = "films-for-queue";

export function addToLocalStorrageWhenStart() {
    if (localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED) === null) {
        const jsonArrWatchedFilms = JSON.stringify(arrForLocalStorage);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, jsonArrWatchedFilms);
    };
    if (localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE) === null) {
        const jsonArrQueueFilms = JSON.stringify(arrForLocalStorage);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, jsonArrQueueFilms);
    };    
};
export function addToLocalStorageWatchedFilm(objFilm) {
    let arrFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED));
    arrFromLS.push(objFilm);
    localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, JSON.stringify(arrFromLS));
};
export function addToLocalStorageQueueFilm(objFilm) {
    let arrFromLS = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE));
    arrFromLS.push(objFilm);
    localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, JSON.stringify(arrFromLS));
};
export function getWatchedFilmFromLocalStorage() {
    const watchedFilmsArray = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_WATCHED));
    return watchedFilmsArray
};
export function getQueueFilmFromLocalStorage() {
    const queueFilmsArray = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FOR_QUEUE));
    return queueFilmsArray
};
export function removeWatchedFilmFromLocalStorage({id}) {
    const watchedFilmsArray = getWatchedFilmFromLocalStorage();    
    for (let i = 0; i <= watchedFilmsArray.length; i += 1){
        if (watchedFilmsArray[i].id === id) {            
        watchedFilmsArray.splice(i, 1);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_WATCHED, JSON.stringify(watchedFilmsArray));
        };
    };    
};
export function removeQueueFilmFromLocalStorage() {
    const queueFilmsArray = getQueueFilmFromLocalStorage();
    for (let i = 0; i <= queueFilmsArray.length; i += 1){
        if (queueFilmsArray[i].id === id) {            
        queueFilmsArray.splice(i, 1);
        localStorage.setItem(LOCALSTORAGE_KEY_FOR_QUEUE, JSON.stringify(queueFilmsArray));
        };
    };    
};