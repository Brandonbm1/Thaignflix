import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Carousel from "./Carousel";
import { movies } from "../helpers/imagesCarousel";
import { useEffect, useState, useRef } from "react";

const CarouselLayout = ({ title }) => {
  const numberPages = Math.ceil(movies.length / 5);
  const [controlList, setControlList] = useState([]);
  const row = useRef(null);
  const renderControls = () => {
    const newControlList = [];
    for (let i = 0; i < numberPages; i++) {
      const newControl = { id: i };
      newControlList.push(newControl);
    }
    setControlList(newControlList);
  };
  useEffect(() => {
    renderControls();
  }, []);
  const moveCarousel = (indicator, id) => {
    if (row.current) {
      const activeControl = document.querySelector(".carousel__control.active");
      if (indicator === "+") {
        if (activeControl.nextSibling) {
          row.current.scrollLeft += row.current.offsetWidth;
          activeControl.nextSibling.classList.add("active");
          activeControl.classList.remove("active");
        } else {
          activeControl.classList.remove("active");
          document.getElementById("0").classList.add("active");
          row.current.scrollLeft = 0;
        }
      } else {
        if (indicator === "-") {
          if (activeControl.previousSibling) {
            row.current.scrollLeft -= row.current.offsetWidth;
            activeControl.previousSibling.classList.add("active");
            activeControl.classList.remove("active");
          } else {
            activeControl.classList.remove("active");
            document
              .getElementById(`${numberPages - 1}`)
              .classList.add("active");
            row.current.scrollLeft =
              row.current.offsetWidth * (numberPages - 1);
          }
        } else if (indicator === "*") {
          row.current.scrollLeft = id * row.current.offsetWidth;
        }
      }
    }
  };

  const moveCorouselHeader = (e) => {
    moveCarousel("*", e.target.id);
    document
      .querySelector(".carousel__control.active")
      .classList.remove("active");

    e.target.classList.add("active");
  };

  return (
    <section className="carousel">
      <div className="carousel__header">
        <h3 className="carousel__title">{title}</h3>
        <div className="carousel__controls">
          {controlList &&
            controlList.map((control) => {
              return (
                <button
                  className={
                    control.id === 0
                      ? "carousel__control active"
                      : "carousel__control"
                  }
                  key={control.id}
                  id={control.id}
                  onClick={moveCorouselHeader}
                />
              );
            })}
        </div>
      </div>
      <div className="carousel__body">
        <button
          role="button"
          className="carousel__arrow carousel__arrow-left"
          onClick={() => moveCarousel("-")}
        >
          <GoChevronLeft />
        </button>

        <Carousel row={row} />

        <button
          role="button"
          className="carousel__arrow carousel__arrow-right"
          onClick={() => moveCarousel("+")}
        >
          <GoChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CarouselLayout;
