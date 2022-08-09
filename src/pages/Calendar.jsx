import Cover from "../components/Cover";
import CarouselLayout from "../components/CarouselLayout";
import bojackHorseman from "../images/bojack_horseman.jpg";

// NEXT MOVIES IN CARTEL
export default function Calendar() {
  const coverData = {
    image: bojackHorseman,
    title: "bojack horseman",
  };
  return (
    <div className="container">
      <Cover data={coverData} />
      <CarouselLayout title="Proximos Estrenos" />
    </div>
  );
}
