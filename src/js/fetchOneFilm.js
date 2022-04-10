
export default function fetchCountries(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=70c5c640dcd47438a9460ce1b8e1a5b1&language=en-US`).then(response => {
        return response.json()
    })};
