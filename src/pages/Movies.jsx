import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import interestellar from "../images/interestellar.jpg";

// Ultimas peliculas
export default function Calendar() {
  const coverData = {
    image: interestellar,
    title: "interestellar",
  };

  return (
    <div className="container">
      <Cover data={coverData} />
      <CarouselLayout title="ultimas peliculas" />
    </div>
  );
}
