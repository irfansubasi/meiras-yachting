import footerLogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="brand-socials d-flex flex-column py-5">
          <img src={footerLogo} alt="Meiras Yachting" />
          <div className="socials d-flex flex-column mt-5 align-items-start">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/meirasyachting/"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
              <span>meirasyachting</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+905444136378"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="xl" />
              <span>+90 (544) 413 63 78</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:meirasyachting@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
              <span>meirasyachting@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="site-map d-flex">
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/rent">Yat Kiralama</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/services">Hizmetlerimiz</Link>
            </li>
            <li>
              <Link to="/">Brokerage</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="copyright">
        <p className="text-center mt-4">
          Copyright © {year} - All rights reserved
          <br />
          designed by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/meirasdesign/"
          >
            Meiras Design
          </a>
          &nbsp;| developed by&nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linktr.ee/irfansubasi"
          >
            irfansubasi
          </a>
        </p>
      </span>
    </footer>
  );
}
