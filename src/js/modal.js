import '../sass/main.scss';
import fetchOneFilm from './fetchOneFilm';
import modalHbs from '../templates/modal.hbs'
const filmCardEl = document.querySelector(".film-card__list")
const backdrop = document.querySelector(".backdrop")
import { chekFilmByIdWatched, addToLocalStorageWatchedFilm, removeWatchedFilmFromLocalStorage, addToLocalStorageQueueFilm, removeQueueFilmFromLocalStorage, chekFilmByIdQueue } from "./localStorage"
let obj
let id


filmCardEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  //console.log(event);
  const { target } = event;
  // Чи попав ти в картку?
  const areYouMissCard = !target.closest(".film-card__link");
  if (areYouMissCard) {
    console.log("you miss");
    return;
  }
  backdrop.innerHTML = ""

  const idFilm = target.closest(".film-card__item").dataset.id;

  fetchOneFilm(idFilm).then(res => {
    id = idFilm,
    obj = res,
    backdrop.style.backgroundImage = `linear-gradient(to right, rgba(47,48,58,0.4), rgba(47,48,58,0.4)),url(https://image.tmdb.org/t/p/original/${res.backdrop_path}`
    const markup = modalHbs(res)
    backdrop.insertAdjacentHTML("beforeend", markup)
    checkFilmLocalWatched(idFilm)
    checkFilmLocalQueue(idFilm)
    toggleModal()
    closeBtnModal()
    document.addEventListener("keydown", closeEscModal)
  })
}

function closeBtnModal() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.addEventListener("click", toggleModal)
}

function closeEscModal(event) {
  if (event.code === "Escape") {
    toggleModal()
  }
};

function toggleModal() {
  backdrop.classList.toggle('visually-hidden')
  removeEvent()
}

function removeEvent() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.removeEventListener("click", toggleModal)
  document.removeEventListener("keydown", closeEscModal)
}


function checkFilmLocalWatched(idFilm) {
  const watchedBtnEl = document.querySelector("[data-btn-watched]")
  watchedBtnEl.addEventListener("click", ToLocalStorageWatched)
  const flag = chekFilmByIdWatched(idFilm)
  flag ? watchedBtnEl.textContent = 'ADDED TO WATCHED' : watchedBtnEl.textContent = ' ADD TO WATCHED'
  flag ? watchedBtnEl.classList.add("active") : watchedBtnEl.classList.remove("active")
}

function ToLocalStorageWatched() {
  const queueBtnEl = document.querySelector("[data-btn-queue]");
  const flag = chekFilmByIdWatched(id);
  console.log(flag);
  flag ? removeWatchedFilmFromLocalStorage(obj) : addToLocalStorageWatchedFilm(obj);
  if (!flag && chekFilmByIdQueue(id)) {
    removeQueueFilmFromLocalStorage(obj)
    queueBtnEl.textContent = 'ADD TO QUEUE'
  }
  checkFilmLocalWatched(id);
}


function checkFilmLocalQueue(idFilm) {
  const queueBtnEl = document.querySelector("[data-btn-queue]")
  queueBtnEl.addEventListener("click", ToLocalStorageQueue)
  const flag = chekFilmByIdQueue(idFilm)
  flag ? queueBtnEl.textContent = 'ADDED TO QUEUE' : queueBtnEl.textContent = ' ADD TO QUEUE'
  flag ? queueBtnEl.classList.add("active") : queueBtnEl.classList.remove("active")

}

function ToLocalStorageQueue() {
  const watchedBtnEl = document.querySelector("[data-btn-watched]")
  const flag = chekFilmByIdQueue(id)
  flag ? removeQueueFilmFromLocalStorage(obj) : addToLocalStorageQueueFilm(obj)
  if (!flag && chekFilmByIdWatched(id)) {
    removeWatchedFilmFromLocalStorage(obj)
    watchedBtnEl.textContent = 'ADD TO WATCHED'
  }
  checkFilmLocalQueue(id)
}





