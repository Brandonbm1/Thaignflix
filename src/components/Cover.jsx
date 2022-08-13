import { useEffect } from "react";
import { useState } from "react";
import { baseUrlImage } from "../helpers/urls";
const Cover = ({ data }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    renderCover();
  }, [data]);

  const renderCover = () => {
    if (data) {
      data.title ? setTitle(data.title) : setTitle(data.name);
      setOverview(data.overview);
      setImage(baseUrlImage + data.backdrop_path);
    }
  };

  return (
    <header className="cover">
      {data && (
        <div
          className="cover__container"
          style={{ backgroundImage: `url(${image})` }}
        >
          <section className="cover__info">
            <div className="cover__text">
              <h3 className="cover__title">{title}</h3>
              <p className="cover__description">{overview}</p>
            </div>
          </section>
        </div>
      )}
    </header>
  );
};

export default Cover;
