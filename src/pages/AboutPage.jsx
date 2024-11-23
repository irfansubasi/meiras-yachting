import Header from '../components/Header';
import verticalLogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/AboutPage.css';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Meiras Yachting hakkında bilgi edinin. Akdeniz ve Ege'de yat kiralama ve satış hizmetlerinde neden öncü olduğumuzu öğrenin."
        />
        <meta
          name="keywords"
          content="Meiras Yachting, hakkında, yat kiralama, lüks yat, yat satış, Akdeniz, Ege, lüks yat hizmetleri"
        />
        <meta property="og:title" content="Meiras Yachting - Hakkımızda" />
        <meta
          property="og:description"
          content="Meiras Yachting hakkında bilgi edinin. Akdeniz ve Ege'de yat kiralama ve satış hizmetlerinde neden öncü olduğumuzu öğrenin."
        />
        <meta property="og:url" content="https://meirasyachting.com/about" />
        <meta
          property="og:image"
          content="https://meirasyachting.com/assets/about-header.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meiras Yachting - Hakkımızda" />
        <meta
          name="twitter:description"
          content="Meiras Yachting hakkında bilgi edinin. Akdeniz ve Ege'de yat kiralama ve satış hizmetlerinde neden öncü olduğumuzu öğrenin."
        />
        <meta
          name="twitter:image"
          content="https://meirasyachting.com/assets/about-header.webp"
        />
      </Helmet>
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
