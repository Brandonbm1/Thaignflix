import { baseUrl, apiKey, searchMoviesUrl } from "./urls";

export const useMovie = () => {
  const loadMovies = async (url) => {
    const response = await fetch(`${baseUrl}/${url}/${apiKey}`);
    return await response.json();
  };
  const getMovieDetails = async (url, id) => {
    const response = await fetch(`${baseUrl}/${url}/${id}${apiKey}`);
    return await response.json();
  };

  const searchMovies = async (query) => {
    try {
      if (query) {
        const url = `${baseUrl}/${searchMoviesUrl}/${apiKey}&query=${query}`;
        const response = await fetch(url);
        return await response.json();
      }
    } catch (error) {
      return false;
    }
  };

  return {
    loadMovies,
    getMovieDetails,
    searchMovies,
  };
};
