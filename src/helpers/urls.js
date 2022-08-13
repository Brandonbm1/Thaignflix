export const baseUrl = "https://api.themoviedb.org/3";
export const baseUrlImage = "https://image.tmdb.org/t/p/w500";
export const popularMoviesUrl = "movie/popular";
export const nextMoviesUrl = "movie/upcoming";
export const lastMoviesUrl = "movie/now_playing";
export const popularSeriesUrl = "tv/popular";
export const apiKey = "?api_key=3027119f10c132982a421854abed7380";

export const getMovieDetails = "/movie";
export const getSerieDetails = "/tv";

export const searchMoviesUrl = "search/movie";

export const load = async (movie_id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=3027119f10c132982a421854abed7380&language=en-US`
  );
  const data = await response.json();
  // console.log(data);
};
