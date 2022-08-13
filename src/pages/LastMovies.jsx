import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import { useState, useEffect } from "react";
import { useMovie } from "../helpers/useMovie";
import { lastMoviesUrl } from "../helpers/urls";
// Ultimas peliculas
export default function LastMovies() {
  const [lastMovies, setLastMovies] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { loadMovies } = useMovie();
  useEffect(() => {
    loadLastMovies();
  }, []);
  const loadLastMovies = async () => {
    const data = await loadMovies(lastMoviesUrl);
    const results = data.results;
    setLastMovies(results);
    setCoverData(results[0]);
  };
  const loadCover = (movie) => {
    setCoverData(movie);
  };

  return (
    <div className="container">
      <Cover data={coverData} />
      {lastMovies && (
        <CarouselLayout
          title="ultimas peliculas"
          movies={lastMovies}
          setCover={setCoverData}
        />
      )}
    </div>
  );
}
