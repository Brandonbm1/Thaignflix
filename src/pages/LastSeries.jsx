import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import { popularSeriesUrl } from "../helpers/urls";
import { useState, useEffect } from "react";
import { useMovie } from "../helpers/useMovie";

// NEXT MOVIES IN CARTEL
export default function PopularSeries() {
  const [popularSeries, setPopularSeries] = useState([]);
  const [coverData, setCoverData] = useState(null);
  const { loadMovies } = useMovie();
  useEffect(() => {
    loadPopularSeries();
  }, []);

  const loadPopularSeries = async () => {
    const data = await loadMovies(popularSeriesUrl);
    const results = data.results;
    setPopularSeries(results);
    setCoverData(results[0]);
  };
  const loadCover = (movie) => {
    setCoverData(movie);
  };

  return (
    <div className="container">
      <Cover data={coverData} />
      {popularSeries && (
        <CarouselLayout
          title="Ultimas series"
          movies={popularSeries}
          setCover={loadCover}
        />
      )}
    </div>
  );
}
