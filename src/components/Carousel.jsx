import { baseUrlImage } from "../helpers/urls";
import defaultImg from "../images/defaultImage.png";
const Carousel = ({ movie, setCover }) => {
  return (
    <div className="carousel__movie" onClick={() => setCover(movie)}>
      <img
        src={
          movie.backdrop_path
            ? `${baseUrlImage}/w500${movie.backdrop_path}`
            : defaultImg
        }
        alt={movie.title}
        className="carousel__movie-image"
      />
    </div>
  );
};

export default Carousel;
