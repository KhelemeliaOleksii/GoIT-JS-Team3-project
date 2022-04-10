import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '1a27ac166727ac0de96a34161208f474';

export async function fetchFilmsByKeywords(keyWords) { 
    const { data: response } = await axios.get(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyWords}`)
    return await response;
}