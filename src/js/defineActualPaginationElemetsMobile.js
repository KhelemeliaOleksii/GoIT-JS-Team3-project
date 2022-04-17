import debounce from 'lodash.debounce';
import markupGalleryWithPagination from './markupGallery'
import axios from 'axios';
import BASE_URL from './API/apiFetchPopularFilms'
import API_KEY from './API/apiFetchPopularFilms'
window.addEventListener('scroll', debounce(infinityScroll, 100));


async function fetchFilmsList(page) {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    return response.data;
  }

fetchFilmsList(query, page)
.then(({ data }) => {
    markupGalleryWithPagination(data.hits);
    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page > totalPages) {
        loadMoreButton.classList.add('visualy-hidden');        
  }
})
.catch(error => console.log(error));

function infinityScroll() {
    const windowHeight = window.innerHeight;
    const galleryPageHeight = gallery.offsetHeight;
    const yOffset = window.pageYOffset;
    const y = yOffset + windowHeight;
  
    if (y >= galleryPageHeight) {
      page += 1;
  
      fetchFilmsList(query, page)
        .then(({ data }) => {
          renderGallery(data);
          markupGalleryWithPagination(data);
           })
        .catch(error => console.log(error));
    }
  }