import '../styles/HomePage.css';
import '../styles/Buttons.css';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clockSVG from '../assets/clock.svg';
import groupSVG from '../assets/group.svg';
import compassSVG from '../assets/compass.svg';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Header page="home" />
      <main>
        <section className="discover p-4">
          <div className="container d-flex justify-content-center align-items-center">
            <div className="box my-4 bg-white d-flex flex-column justify-content-center align-items-center">
              <div className="p-1">
                <svg
                  className="yacht-svg img-fluid"
                  viewBox="0 0 85 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_15_56)">
                    <path
                      d="M45.2269 57.9292C40.3914 49.4656 39.2331 39.3384 40.1854 29.6646C41.1222 20.1483 43.9714 10.9278 46.8323 1.79189C46.875 1.65742 46.7118 1.54985 46.6029 1.63821C29.8925 15.0194 17.9049 34.0712 13.2249 54.825C12.8829 56.3463 12.9295 57.9484 13.4737 59.4121C15.4172 64.6448 21.5743 63.934 25.9006 61.9478C36.8853 56.8996 44.5506 46.4382 48.7719 35.2161C52.8455 24.3859 54.1049 12.7604 55.236 1.24634C55.2516 1.09267 55.477 1.08498 55.4926 1.2425C57.5527 19.9869 60.4913 40.6869 71.41 56.039C72.3118 57.3106 71.5655 59.0548 70.0107 59.2854C63.5776 60.2458 56.4566 60.3265 50.2567 58.2058"
                      stroke="#092649"
                      strokeWidth="0.702542"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.992401 68.4981C5.39642 72.4745 12.4825 72.1863 18.2664 70.3614C24.0464 68.5365 29.4183 65.4477 35.4394 64.5372C43.7537 63.2809 52.0176 66.3275 60.1687 68.3214C68.3198 70.3153 77.8509 71.0107 84.3461 65.9548"
                      stroke="#092649"
                      strokeWidth="0.702542"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M11.0326 78.1566C16.4745 79.3553 19.4986 78.4524 23.1524 77.2768C26.8101 76.0974 30.1374 74.0151 33.8612 73.0738C41.2505 71.2028 48.9041 74.0304 56.2195 76.1742C63.5349 78.318 72.0514 79.6204 78.2862 75.2791"
                      stroke="#092649"
                      strokeWidth="0.702542"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_56">
                      <rect
                        width="83.6025"
                        height="77.9821"
                        fill="white"
                        transform="translate(0.860229 0.931274)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="lead text-center py-4">
                {t('home.discover1')}
                <br />
                {t('home.discover2')}
              </p>
              <Link to="/rent" className="btn btn-primary">
                {t('home.discover-btn')}
              </Link>
            </div>
          </div>
        </section>
        <section className="info-col">
          <div className="container text-center text-white">
            <div className="row p-5 m-5">
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <img src={clockSVG} alt="clock" />
                </div>
                <p>{t('home.info1-p')}</p>
                <span>{t('home.info1-span')}</span>
              </div>
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <img src={groupSVG} alt="group" />
                </div>
                <p>{t('home.info2-p')}</p>
                <span>{t('home.info2-span')}</span>
              </div>
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <img src={compassSVG} alt="compass" />
                </div>
                <p>{t('home.info3-p')}</p>
                <span>{t('home.info3-span')}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mini-contact p-5">
          <div className="container d-flex justify-content-center">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
