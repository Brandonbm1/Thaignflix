import { useState } from "react";
import Movie from "../components/Movie.jsx";
import { movies } from "../helpers/imagesCarousel.js";

//SEARCH A MOVIE
export default function Search() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <section className="container">
      <div className="search__container">
        <header className="search">
          <h2 className="search__title">Search</h2>
          <input
            type="text"
            placeholder="Title, people, genres"
            value={input}
            onChange={handleChange}
            className="search__input"
          />
        </header>
        <h3 className="search__title-found">
          {movies.length > 0 ? "Peliculas" : "No se encontraron peliculas"}
        </h3>
        <main className="search__grid">
          {movies.map((movie, index) => {
            return (
              <Movie movie={movie} className="search__movieList" key={index} />
            );
          })}
        </main>
      </div>
    </section>
  );
}
