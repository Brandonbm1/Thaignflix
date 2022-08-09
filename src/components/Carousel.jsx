import { movies } from "../helpers/imagesCarousel";
import Movie from "./Movie";
import { Link } from "react-router-dom";
const Carousel = ({ row }) => {
  return (
    <div className="carousel__container" ref={row}>
      <div className="carousel__movieList">
        {movies.map((movie) => {
          return (
            <div className="carousel__movie" key={movie.id}>
              <Link to="#" className="carousel__movie">
                <img
                  src={movie.src}
                  alt={movie.id}
                  className="carousel__movie-image"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
