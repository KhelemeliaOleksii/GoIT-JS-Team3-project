import { fetchPopularFilms } from './API/apiFetchPopularFilms';
import { markupGalleryWithPagination } from './markupGallery';
import { genres } from './genres';
import { formattingData } from './formattingData';

getPopularFilms();

export async function getPopularFilms(renderPage) {
  try {
    // Получаем ответ от axios
    const { results } = await fetchPopularFilms(renderPage);

    const formattedData = formattingData(results, genres);
    markupGalleryWithPagination(formattedData);
  } catch (error) {
    console.log('Error on markup', error);
  }
}
