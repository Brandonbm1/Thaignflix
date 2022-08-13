// import { useEffect, useState } from "react";
import CarouselLayout from "../components/CarouselLayout";
import Cover from "../components/Cover";
import { useEffect, useState } from "react";
import { useMovie } from "../helpers/useMovie";
import { popularMoviesUrl, load } from "../helpers/urls";
// Peliculas recomendadas
const Principal = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { loadMovies } = useMovie();

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    const data = await loadMovies(popularMoviesUrl);
    const results = data.results;
    setPopularMovies(results);
    setCoverData(results[0]);
  };
  const loadCover = (movie) => {
    setCoverData(movie);
  };

  return (
    <div className="container">
      <Cover data={coverData} />
      {popularMovies && (
        <CarouselLayout
          title="peliculas recomendadas"
          movies={popularMovies}
          setCover={loadCover}
        />
      )}
    </div>
  );
};

export default Principal;
