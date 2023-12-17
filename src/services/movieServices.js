const key = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular : `${baseUrl}/movie/popular?api_key=${key}`
}

export default endpoints;