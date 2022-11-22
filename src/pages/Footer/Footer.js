import "./Footer.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <section className="footer__top__item">
            <div className="logo-container">
              <h3 className="footer__top__item__title">Introduce</h3>
            </div>
            <ul className="contact-info">
              <li className="contact-info__item">Phone: 0999999999</li>
              <li className="contact-info__item">Email: webdemo@abc.com</li>
              <li className="contact-info__item">
                Address: Linh Trung, TP Thủ Đức
              </li>
            </ul>
            <div className="social-link--container">
              <a href="https://www.facebook.com/" className="social-link">
                <i
                  className="fa-brands fa-facebook-f"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="https://www.instagram.com/" className="social-link">
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a href="https://www.youtube.com/" className="social-link">
                <i
                  className="fa-brands fa-youtube"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </section>
          <section className="footer__top__item about-us">
            <h3 className="footer__top__item__title">About us</h3>
            <ul>
              <li>
                <Link to="notfound">Introduce</Link>
              </li>
              <li>
                <Link to="notfound">Member</Link>
              </li>
              <li>
                <Link to="notfound">Recruit</Link>
              </li>
            </ul>
          </section>
          <section className="footer__top__item support">
            <h3 className="footer__top__item__title">Help</h3>
            <ul>
              <li>
                <Link to="setting">Contact</Link>
              </li>
              <li>
                <Link to="notfound">Security</Link>
              </li>
              <li>
                <Link to="notfound">Rules</Link>
              </li>
            </ul>
          </section>
          <section className="footer__top__item company">
            <h3 className="footer__top__item__title">
              Lorem ipsum dolor sit amet, consectetur adip ABC
            </h3>
            <ul>
              <li>Lorem ipsum: 0999999999</li>
              <li>Lorem dolor: 22/02/2022</li>
              <li>Lorem ips dolor sit amet al n the card title</li>
            </ul>
          </section>
        </div>
        <div className="footer__bottom">
          <p>
            © 2022 - 2023 ELorem ips dolor sit amet - All rights reserved.
            Designed by ABC
          </p>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
