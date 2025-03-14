import axios from "axios"

// url da api = movie/now_playing?api_key=d99da9780d5e7fd91e7ca99cc28e418f
// base url = https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})


export default api;
