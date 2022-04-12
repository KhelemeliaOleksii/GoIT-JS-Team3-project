import { fetchPopularFilms } from './API/apiPopularFilms';
import { renderListCard } from './renderFilmList';
import { genres } from './genres';
import { formattingData } from './formatedData';
import filmCardTemplate from '../templates/card.hbs';

async function getPopularMoviesData(renderPage) {
  try {
    // Получаем ответ от axios
    const { results } = await fetchPopularFilms(renderPage);

    const formattedData = formattingData(results, genres);
    renderListCard(formattedData);
  } catch (error) {
    console.log('Error', error);
  }
}

getPopularMoviesData();
