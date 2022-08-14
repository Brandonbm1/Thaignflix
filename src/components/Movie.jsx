import { baseUrlImage } from "../helpers/urls";
import defaultImg from "../images/defaultImage2.jpg";
import { useRef } from "react";

export default function Movie({ movie }) {
  const movieContainer = useRef(null);

  const removeActive = () => {
    movieContainer.current.classList.remove("active");
    movieContainer.current.childNodes[0].classList.remove("active");
    movieContainer.current.childNodes[1].classList.remove("active");
  };

  const toggleActive = () => {
    movieContainer.current.classList.toggle("active");
    movieContainer.current.childNodes[0].classList.toggle("active");
    movieContainer.current.childNodes[1].classList.toggle("active");
  };

  return (
    <div
      className="search__movieList "
      onClick={toggleActive}
      onMouseLeave={removeActive}
      ref={movieContainer}
    >
      <div className="search__movieList-front ">
        <img
          src={
            movie?.poster_path
              ? `${baseUrlImage}/w500${movie?.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          className="search__movie"
        />
      </div>
      <section className="search__movieList-back ">
        <h3 className="search__movie-title">{movie.title}</h3>
        <hr />
        <p className="search__movie-overview">{movie.overview}</p>
        <a className="search__button" href="#">
          ver ahora
        </a>
      </section>
    </div>
  );
}
