import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { fetchNews } from './fetchNews.js';
import newsCardTemplate from '../templates/newsCard.hbs';
Swiper.use([Navigation, Pagination]);

renderNews();

export async function renderNews() {
        try {
            const news = await fetchNews();
            console.log(news.results);
          renderNewsCard(news.results);  
          const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            keyboard: {
              enabled: true,
              onlyInViewport: true,
            },
            autoHeigth: true,
            slidesPerView: 2,
            spaseBetween: 30,
          });
        }
        catch (error) {
            alert('error');
        }
}
    
function renderNewsCard(data) {
    const listElement = document.querySelector('.news__container');
  listElement.innerHTML = newsCardTemplate(data);
  
    
}
function onFetchError() {  //ошибка и очистка формы
    textError.textContent = 'Search result not successful. Enter the correct movie name and try again';
    searchForm.reset();
}

