import '../sass/main.scss';
import fetchOneFilm from './fetchOneFilm';
import modalHbs from '../templates/modal.hbs'
const filmCardEl = document.querySelector(".film-card__list")
const backdrop = document.querySelector(".backdrop")
import {addToLocalStorageWatchedFilm, removeWatchedFilmFromLocalStorage } from "./localStorage"
let obj 

filmCardEl.addEventListener("click",openModal)

function openModal(e) {
  e.preventDefault();
  backdrop.innerHTML = ""
   const idFilm = e.target.dataset.id
    fetchOneFilm(idFilm).then(res =>{
    obj = res
    backdrop.style.backgroundImage = `linear-gradient(to right, rgba(47,48,58,0.4), rgba(47,48,58,0.4)),url(https://image.tmdb.org/t/p/original/${res.backdrop_path}`
    const marcup = modalHbs(res)
    backdrop.insertAdjacentHTML("beforeend", marcup)
    checkFilmLocal(12)
    toggleModal()   
    closeBtnModal()
    document.addEventListener("keydown",closeEscModal)
    addBtnWatched()
   })     
}

function closeBtnModal() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.addEventListener("click",toggleModal) 
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
  closeButtonEl.removeEventListener("click",toggleModal)
  document.removeEventListener("keydown",closeEscModal)
}

//  function addBtnWatched(id) {
//    const watchedBtnEl = document.querySelector("[data-btn-watched]")
//    watchedBtnEl.addEventListener("click",addTextBtn)
   
//  }
//  function checkFilmLocal(id) {
//   const watchedBtnEl = document.querySelector("[data-btn-watched]")
//   const flag = 
//   flag? watchedBtnEl.textContent = 'Добавленно' : watchedBtnEl.textContent = ' НЕ Добавленно' 
//  }
//  function addTextBtn(params) {
//    console.log(obj);
//   const watchedBtnEl = document.querySelector("[data-btn-watched]")
//   const flag = 
//   flag? watchedBtnEl.textContent = 'Добавленно' : watchedBtnEl.textContent = ' НЕ Добавленно'
//   flag? removeWatchedFilmFromLocalStorage(obj) : addToLocalStorageWatchedFilm(obj)
   
//  }




 
