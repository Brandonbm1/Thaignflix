import { useState, useEffect } from "react";
import Movie from "../components/Movie.jsx";
import { useMovie } from "../helpers/useMovie";
import { useDebounce } from "../hooks/useDebounce.js";
import InfiniteScroll from "react-infinite-scroll-component";
//SEARCH A MOVIE
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);

  const { searchMovies } = useMovie();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearchMovie = async (mode) => {
    if (debouncedSearch) {
      const response = await searchMovies(debouncedSearch, page);
      setMovies(
        mode === "page"
          ? (prevMovies) => prevMovies.concat(response.results)
          : response.results
      );
      setIsSearching(false);
      return;
    }
    setMovies([]);
  };

  useEffect(() => {
    setIsSearching(true);
    handleSearchMovie("search");
  }, [debouncedSearch]);

  useEffect(() => {
    setIsSearching(true);
    handleSearchMovie("page");
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={page === movies.total_pages ? false : true}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<h4>loading.....</h4>}
      endMessage={
        <p style={{ textAlign: "center", color: "white" }}>
          <b>Yay! you've seen it all </b>
        </p>
      }
    >
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
            {movies?.map((movie, index) => {
              return <Movie movie={movie} key={index} />;
            })}
          </main>
        </div>
      </section>
    </InfiniteScroll>
  );
}
