import axios from "axios";
const BASE_URL = 'https://newsdata.io';
const API_KEY = 'pub_6451178968eb073f6a2af3b33da7af3050a2';

export async function fetchNews() { 
    const { data: response } = await axios.get(`${BASE_URL}/api/1/news?apikey=${API_KEY}&q=films&language=en`)
    return await response;
}