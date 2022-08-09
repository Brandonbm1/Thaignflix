import { FaReact, FaSass, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";

// ABOUT THIS PROJECT AND HIS OWNER
export default function Info() {
  return (
    <section className="container">
      <main className="info__container">
        <div className="info">
          <div className="info__cover">
            <h3 className="info__title">Thaignflix</h3>
            <p className="info__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              autem obcaecati, reprehenderit velit laboriosam rem exercitationem
              doloribus id perferendis qui. Quam dolorem eos enim laborum
              deserunt est magnam quia quibusdam? Velit hic debitis doloremque
              assumenda reiciendis veniam! Nobis ut non, magni delectus porro
              cupiditate. Explicabo doloremque repellat adipisci, fuga iusto
              voluptatum repellendus vel sit nam quod hic illum quaerat autem.
            </p>
          </div>
          <div className="info__tecnologies">
            <h4 className="info__subtitle">Tecnologías usadas</h4>
            <div className="info__tecnologies-container">
              <a
                href="http://"
                className="info__tecnologies-link info__tecnologies-link-react"
              >
                <FaReact className="info__tecnologies-item info__tecnologies-item-react" />
              </a>
              <a
                href="http://"
                className="info__tecnologies-link info__tecnologies-link-sass"
              >
                <FaSass className="info__tecnologies-item info__tecnologies-item-sass" />
              </a>
              <a
                href="http://"
                className="info__tecnologies-link info__tecnologies-link-js"
              >
                <SiJavascript className="info__tecnologies-item info__tecnologies-item-js" />
              </a>
              <a
                href="http://"
                className="info__tecnologies-link info__tecnologies-link-css"
              >
                <IoLogoCss3 className="info__tecnologies-item info__tecnologies-item-css" />
              </a>
              <a
                href="http://"
                className="info__tecnologies-link info__tecnologies-link-html"
              >
                <IoLogoHtml5 className="info__tecnologies-item info__tecnologies-item-html" />
              </a>
            </div>
          </div>
        </div>
        <footer className="info__footer">
          <div className="info__social">
            <div className="info__contact">
              <h6 className="info__footer-title">Contactame</h6>
              <form className="info__form">
                <input
                  type="email"
                  className="info__form-input"
                  placeholder="Escribe tu email y me contactare contigo"
                />
                <button className="info__form-button">Enviar</button>
              </form>
            </div>
            <button className="info__portfolio">Portafolio</button>
            <div className="info__social-links">
              <a
                href="https://www.github.com"
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
