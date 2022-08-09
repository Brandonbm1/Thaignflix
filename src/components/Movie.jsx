import { Link } from "react-router-dom";

export default function Movie({ movie, className }) {
  return (
    <Link to="#" className={className}>
      <img src={movie.src} alt={movie.id} className="search__movie" />
    </Link>
  );
}
