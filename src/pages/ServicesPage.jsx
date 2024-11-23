import Header from '../components/Header';
import '../styles/ServicesPage.css';
import foodSVG from '../../public/assets/food.svg';
import planeSVG from '../../public/assets/plane.svg';
import clothingSVG from '../../public/assets/clothing.svg';
import gearSVG from '../../public/assets/gear.svg';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Meiras Yachting'in sunduğu yat kiralama, yat satışı ve özel tur hizmetleriyle Akdeniz ve Ege'de lüks bir deneyim yaşayın."
        />
        <meta
          name="keywords"
          content="yat kiralama hizmetleri, lüks yat kiralama, özel yat turları, yat satışı, Akdeniz yat turları, Ege yat kiralama, Meiras Yachting hizmetler"
        />
        <meta property="og:title" content="Meiras Yachting - Hizmetlerimiz" />
        <meta
          property="og:description"
          content="Meiras Yachting'in sunduğu yat kiralama, yat satışı ve özel tur hizmetleriyle Akdeniz ve Ege'de lüks bir deneyim yaşayın."
        />
        <meta property="og:url" content="https://meirasyachting.com/services" />
        <meta
          property="og:image"
          content="https://meirasyachting.com/assets/services-header.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meiras Yachting - Hizmetlerimiz" />
        <meta
          name="twitter:description"
          content="Meiras Yachting'in sunduğu yat kiralama, yat satışı ve özel tur hizmetleriyle Akdeniz ve Ege'de lüks bir deneyim yaşayın."
        />
        <meta
          name="twitter:image"
          content="https://meirasyachting.com/assets/services-header.webp"
        />
      </Helmet>
      <Header page="services" />
      <main className="mb-4">
        <section className="services" style={{ height: '50vh' }}>
          <div className="container position-absolute">
            <div className="row services-boxes">
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={foodSVG} alt="food" />
                  <p className="service-box-head">
                    {t('services.food.food-h')}
                  </p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    {t('services.food.food-p')}
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={planeSVG} alt="plane" />
                  <p className="service-box-head">{t('services.vip.vip-h')}</p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">{t('services.vip.vip-p')}</p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img
                    className="services-svg"
                    src={clothingSVG}
                    alt="clothing"
                  />
                  <p className="service-box-head">
                    {t('services.cloth.cloth-h')}
                  </p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    {t('services.cloth.cloth-p')}
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={gearSVG} alt="gear" />
                  <p className="service-box-head">
                    {t('services.technical.technical-h')}
                  </p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    {t('services.technical.technical-p')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-exp">
          <div className="row">
            <div className="col-lg-8 col-md-12 exp-row-body order-2 order-lg-1">
              <h3>{t('services.food.food-h')}</h3>
              <div className="border my-5 w-25"></div>
              <p>
                {t('services.food.food-desc1')}
                <br />
                <br />
                {t('services.food.food-desc2')}
                <br />
                <br />
                {t('services.food.food-desc3')}
              </p>
            </div>
            <div className="col-lg-4 col-md-12 exp-row-img order-1 order-lg-2"></div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-12 exp-row-img"
              style={{ backgroundImage: "url('../assets/vip-service.webp')" }}
            ></div>
            <div
              className="col-lg-8 col-md-12 exp-row-body"
              style={{ backgroundColor: '#ffffff', color: '#092649' }}
            >
              <h3>{t('services.vip.vip-h')}</h3>
              <div
                className="border my-5 w-25"
                style={{ borderColor: '#092649' }}
              ></div>
              <p>
                {t('services.vip.vip-desc1')}
                <br />
                <br />
                {t('services.vip.vip-desc2')}
                <br />
                <br />
                {t('services.vip.vip-desc3')}
                <br />
                <br />
                {t('services.vip.vip-desc4')}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 exp-row-body order-2 order-lg-1">
              <h3>{t('services.technical.technical-h')}</h3>
              <div className="border my-5 w-25"></div>
              <p>
                {t('services.technical.technical-desc1')}
                <br />
                <br />
                {t('services.technical.technical-desc2')}
                <br />
                <br />
                {t('services.technical.technical-desc3')}
              </p>
            </div>
            <div
              className="col-lg-4 col-md-12 exp-row-img order-1 order-lg-2"
              style={{
                backgroundImage: "url('../assets/technical-service.webp')",
              }}
            ></div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-12 exp-row-img"
              style={{ backgroundImage: "url('../assets/cloth-service.webp')" }}
            ></div>
            <div
              className="col-lg-8 col-md-12 exp-row-body"
              style={{ backgroundColor: '#ffffff', color: '#092649' }}
            >
              <h3>{t('services.cloth.cloth-h')}</h3>
              <div
                className="border my-5 w-25"
                style={{ borderColor: '#092649' }}
              ></div>
              <p>
                {t('services.cloth.cloth-desc1')}
                <br />
                <br />
                {t('services.cloth.cloth-desc2')}
                <br />
                <br />
                {t('services.cloth.cloth-desc3')}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
