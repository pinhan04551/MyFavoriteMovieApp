const TMDB_BASE_URL = "https://api.themoviedb.org/3"
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p"
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const TMDB_API_KEY = "caed06ee74fedc1cd76dfc242e6b979e";

const ENDPOINTS = {
    NOW_PLAYING_MOVIES: "/movie/now_playing",
    UPCOMING_MOVIES: "/movie/upcoming",
    GENRES: "/genre/movie/list",
    MOVIE: "/movie",
}

const APPEND_TO_RESPONSE = {
    VIDEOS:'videos',
    CREDITS:'credits',
    RECOMMENDATIONS:"recommendations",
    SIMILAR:"similar",
}

export { TMDB_BASE_URL, TMDB_IMAGE_BASE_URL, TMDB_API_KEY, ENDPOINTS, APPEND_TO_RESPONSE, YOUTUBE_BASE_URL}