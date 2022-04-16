import { fetchPopularFilms } from './API/apiFetchPopularFilms';
import { genres } from './genres';
import { formattingData } from './formattingData';
import { markupGalleryWithPagination } from './markupGallery';
import { initPagination, paginationSettings } from './tui-pagination';

export async function getPopularFilms(renderPage) {
  try {
    // Получаем ответ от axios
    const { page, results, total_results: totalItems } = await fetchPopularFilms(renderPage);

    initPagination({
      page,
      itemsPerPage: results.length,
      totalItems: 10000,
    });
    paginationSettings.totalItemsHome = totalItems;

    const formattedData = formattingData(results, genres);
    markupGalleryWithPagination(formattedData);
  } catch (error) {
    console.log('Error on markup', error);
  }
}

getPopularFilms(paginationSettings.startPage);
