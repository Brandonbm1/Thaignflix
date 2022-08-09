import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import breakingBad from "../images/breaking_bad.jpg";

// NEXT MOVIES IN CARTEL
export default function Series() {
  const coverData = {
    image: breakingBad,
    title: "Breaking Bad",
  };
  return (
    <div className="container">
      <Cover data={coverData} />
      <CarouselLayout title="Ultimas series" />
    </div>
  );
}
