import { useState, useEffect } from "react";
import Movie from "../components/Movie.jsx";
import { useMovie } from "../helpers/useMovie";
import { useDebounce } from "../hooks/useDebounce.js";
// import { useSearchParams } from "react-router-dom";
//SEARCH A MOVIE
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { searchMovies } = useMovie();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const searchedMovies = await searchMovies(searchMoviesUrl, movies);
  //   // // console.log(searchedMovies.results);
  //   // setMovies(searchedMovies.results);
  //   // setSearchParams(e.target.value);
  //   // console.log(e.target);
  //   const results = await searchMovies(searchTerm);
  //   setMovies(results.results);
  // };
  // useEffect(() => {
  //   handleSubmit();
  // }, [searchParams]);

  const handleSearchMovie = async () => {
    const response = await searchMovies(searchTerm);
    response ? setMovies(response.results) : setMovies([]);
  };

  const debouncedSearch = useDebounce(searchTerm, 300);
  useEffect(() => {
    if (debouncedSearch) {
      setIsSearching(true);
      handleSearchMovie();
    }
  }, [searchTerm]);

  return (
    <section className="container">
      <div className="search__container">
        <form className="search">
          <h2 className="search__title">Search</h2>
          <input
            type="text"
            placeholder="Title, people, genres"
            value={searchTerm}
            onChange={handleChange}
            className="search__input"
            id="text"
          />
        </form>
        <h3 className="search__title-found">
          {movies?.length > 0 ? "Peliculas" : "No se encontraron peliculas"}
        </h3>
        <main className="search__grid">
          {isSearching &&
            movies?.map((movie, index) => {
              return (
                <Movie
                  movie={movie}
                  className="search__movieList"
                  key={index}
                />
              );
            })}
        </main>
      </div>
    </section>
  );
}
