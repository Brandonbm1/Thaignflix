import React from "react";

const Cover = ({ data }) => {
  const { image, title } = data;
  return (
    <header className="cover">
      <div
        className="cover__container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <section className="cover__info">
          <div className="cover__text">
            <h3 className="cover__title">{title}</h3>
            <p className="cover__description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              exercitationem consequuntur accusamus quisquam vero quidem totam
              ratione asperiores minus laborum autem alias rem animi et corporis
              nostrum dolores ut eaque incidunt voluptatem, distinctio tempore
              enim. Sed impedit laboriosam laborum facilis quam itaque a libero?
              Cum vel atque porro, nisi doloribus minus placeat culpa
            </p>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Cover;
