import { fetchPopularFilms } from './API/apiFetchPopularFilms';
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { pagination, Pagination } from './paginationRenderer'

getPopularFilms();

export async function getPopularFilms(renderPage=1) {
  try {
    // Получаем ответ от axios
    const { results } = await fetchPopularFilms(renderPage);

    const formattedData = formattingData(results, genres);
    markupGalleryWithPagination(formattedData);
    pagination(renderPage)
  } catch (error) {
    console.log('Error on markup', error);
  }
}
