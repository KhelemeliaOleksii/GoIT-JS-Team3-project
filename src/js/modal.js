import '../sass/main.scss';
import fetchOneFilm from './fetchOneFilm';
import modalHbs from '../js/modal.hbs'
const filmCardEl = document.querySelector(".film-card__list")
const backdrop = document.querySelector(".backdrop")


filmCardEl.addEventListener("click",openModal)

function openModal(e) {
  e.preventDefault();
  backdrop.innerHTML = ""
   const idFilm = e.target.dataset.id
    fetchOneFilm(idFilm).then(res =>{
    backdrop.style.backgroundImage = `linear-gradient(to right, rgba(47,48,58,0.4), rgba(47,48,58,0.4)),url(https://image.tmdb.org/t/p/original/${res.backdrop_path}`
    const marcup = modalHbs(res)
    backdrop.insertAdjacentHTML("beforeend", marcup)
    toggleModal()   
    closeBtnModal()
   })   
}

function closeBtnModal() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.addEventListener("click",toggleModal)
  
}

function toggleModal() {
  backdrop.classList.toggle('visually-hidden')
  removeEvent()   
}

function removeEvent() {
  const closeButtonEl = document.querySelector(".modal-movie__close")
  closeButtonEl.removeEventListener("click",toggleModal)
  
}