import { FaReact, FaSass, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { useState } from "react";
// ABOUT THIS PROJECT AND HIS OWNER
export default function Info() {
  const [mail, setMail] = useState("");
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMail("");
  };
  return (
    <section className="container">
      <main className="info__container">
        <div className="info">
          <div className="info__cover">
            <h3 className="info__title">Thaignflix</h3>
            <p className="info__description">
              Esta es una practica con <b>React</b>js simulando la UI de
              Netflix, la cual consume la api de{" "}
              <a href="https://www.themoviedb.org/" target="_blank">
                The Movie db
              </a>{" "}
              la cual nos trae diferentes tipos de peliculas segun la
              solicitemos. &#x1F60E;
            </p>
          </div>
          <div className="info__tecnologies">
            <h4 className="info__subtitle">Tecnologías usadas</h4>
            <div className="info__tecnologies-container">
              <div className="info__tecnologies-link info__tecnologies-link-react">
                <FaReact className="info__tecnologies-item info__tecnologies-item-react" />
              </div>
              <div className="info__tecnologies-link info__tecnologies-link-sass">
                <FaSass className="info__tecnologies-item info__tecnologies-item-sass" />
              </div>
              <div className="info__tecnologies-link info__tecnologies-link-js">
                <SiJavascript className="info__tecnologies-item info__tecnologies-item-js" />
              </div>
              <div className="info__tecnologies-link info__tecnologies-link-css">
                <IoLogoCss3 className="info__tecnologies-item info__tecnologies-item-css" />
              </div>
              <div className="info__tecnologies-link info__tecnologies-link-html">
                <IoLogoHtml5 className="info__tecnologies-item info__tecnologies-item-html" />
              </div>
            </div>
          </div>
        </div>
        <footer className="info__footer">
          <div className="info__social">
            <div className="info__contact">
              <h6 className="info__footer-title">Contactame</h6>
              <form className="info__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="info__form-input"
                  placeholder="Escribe tu email"
                  value={mail}
                  onChange={handleChange}
                />
                <button className="info__form-button">Enviar</button>
              </form>
            </div>
            <button className="info__portfolio">Portafolio</button>
            <div className="info__social-links">
              <a
                href="https://github.com/Brandonbm1/thaignflix"
                target="_blank"
                className="info__social-link info__social-link-github"
              >
                <FaGithub className="info__social-links-item info__social-links-item-github" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="info__social-link info__social-link-linkedin"
              >
                <FaLinkedin className="info__social-links-item info__social-links-item-linkedin" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </section>
  );
}
