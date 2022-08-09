// import { useEffect, useState } from "react";
import CarouselLayout from "../components/CarouselLayout";
import Cover from "../components/Cover";
import peakyBlinders from "../images/peaky_blinders.jpeg";
// import { fetchingData } from "../movies";

// Peliculas recomendadas
const Principal = () => {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const data = await fetchingData();
  //   setData(data);
  // };
  // const getImage = async () => {

  // }
  // useEffect(() => {
  //   getData();
  // }, []);
  const coverData = {
    image: peakyBlinders,
    title: "peaky blinders",
  };
  return (
    <div className="container">
      <Cover data={coverData} />
      <CarouselLayout title="peliculas recomendadas" />
    </div>
  );
};

export default Principal;
