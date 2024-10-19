import Header from '../components/Header';
import verticalLogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/AboutPage.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Header page="about" />
      <main>
        <section className="about-section" style={{ height: '115vh' }}>
          <div className="container about-us">
            <div className="about-container">
              <div className="about-box">
                <img
                  className="about-logo img-fluid"
                  src={verticalLogo}
                  alt="meiras"
                />
                <div className="m-auto explain d-flex flex-column align-items-center">
                  <h3>{t('about.about-us')}</h3>
                  <p className="lead">{t('about.description')}</p>
                </div>
              </div>
              <div className="about-socials">
                <h4 className="border-bottom border-2">{t('about.contact')}</h4>
                <div className="social-box row">
                  <div className="col-lg-4 col-sm-12">
                    <a
                      href="https://www.instagram.com/meirasyachting/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon size="2x" icon={faInstagram} />
                      <span>meirasyachting</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <a
                      href="https://wa.me/+905444136378/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon size="2x" icon={faWhatsapp} />
                      <span>+90 (544) 413 63 78</span>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <a
                      href="mailto:meirasyachting@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon size="2x" icon={faEnvelope} />
                      <span>meirasyachting@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
