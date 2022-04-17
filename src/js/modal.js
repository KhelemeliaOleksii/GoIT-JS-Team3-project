import '../sass/main.scss';
import {fetchOneFilm,fetchVideo} from './fetchOneFilm';
import modalHbs from '../templates/modal.hbs'
import iframe from '../templates/iframe.hbs'
const filmCardEl = document.querySelector(".film-card__list")
const backdrop = document.querySelector(".backdrop")
import { chekFilmByIdWatched, addToLocalStorageWatchedFilm, removeWatchedFilmFromLocalStorage,
   addToLocalStorageQueueFilm, removeQueueFilmFromLocalStorage, chekFilmByIdQueue } from "./localStorage"
let obj
let id


filmCardEl.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  const { target } = event;

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
    backdrop.insertAdjacentHTML("afterbegin", markup)
    createIframeElment()
    const imgEl = document.querySelector(".modal-movie__youtube")
    fetchVideo(idFilm).then(res =>{
      if (!res.results[0]) {
        imgEl.classList.add('visually-hidden')
      }
     })
    imgEl.addEventListener("click",renderPlayerVideo)
    checkFilmLocalWatched(idFilm)
    checkFilmLocalQueue(idFilm)
    toggleModal()
    closeBtnModal()
    document.addEventListener("keydown", closeEscModal)
  })
  backdrop.addEventListener("click",closeClickMiss)
}

function closeBtnModal() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.addEventListener("click", toggleModal)
}
function closeClickMiss(event) {
  if (event.target.classList.value ==="backdrop") {
    toggleModal()  
  }
    
}

function closeEscModal(event) {
  if (event.code === "Escape") {
    toggleModal()
    document.querySelector(".wrapp-iframe").innerHTML=""
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
  flag ? watchedBtnEl.textContent = 'Remove from WATCHED' : watchedBtnEl.textContent = ' ADD TO WATCHED'
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
  flag ? queueBtnEl.textContent = 'Remove from queue' : queueBtnEl.textContent = ' ADD TO QUEUE'
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
function createIframeElment(params) {
  const divIframeEl = document.createElement("div")
  divIframeEl.classList.add("wrapp-iframe")
  divIframeEl.classList.add("visually-hidden")
  backdrop.append( divIframeEl)
}


  function renderPlayerVideo(event) {
    const click = event.target.classList.contains("modal-movie__youtube");
    if (!click) {
      return
    }
    const video = fetchVideo(id).then(res =>{showVideo(res.results[0])})
    console.log(video);
  }

function showVideo(params) {
  const iframeEL = document.querySelector(".wrapp-iframe")
  iframeEL.innerHTML=""
  const data = iframe(params)
  iframeEL.insertAdjacentHTML("beforeend", data)
  iframeEL.classList.remove("visually-hidden")
  document.querySelector(".close-video").addEventListener("click",closeVideo) 
  document.querySelector(".video-iframe")
}

function closeVideo(params) {
  document.querySelector(".wrapp-iframe").innerHTML=""
  document.querySelector(".wrapp-iframe").classList.add("visually-hidden")
}

