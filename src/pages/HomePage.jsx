import '../styles/HomePage.css';
import '../styles/Buttons.css';
import Form from '../components/ContactForm';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
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
                Unutulmaz Bir Deneyim İçin
                <br />
                Yatlarımızı Keşfedin
              </p>
              <button className="btn btn-primary">Keşfet</button>
            </div>
          </div>
        </section>
        <section className="info-col">
          <div className="container text-center text-white">
            <div className="row p-5 m-5">
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <svg
                    className="info-svg"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.785 49.5491C11.4418 49.5491 0.631958 38.7393 0.631958 25.4038C0.631958 12.0683 11.4418 1.25073 24.785 1.25073C38.1283 1.25073 48.9381 12.0606 48.9381 25.4038"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M24.785 1.25073V5.00425"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M24.785 45.8033V49.5491"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M7.7038 8.32263L10.3616 10.9804"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M0.631958 25.4038H4.38548"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M45.1846 25.4038H48.9303"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M7.7038 42.4773L10.3616 39.8273"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M39.2085 10.9804L41.8585 8.32263"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M35.2141 14.9749L27.0543 23.1347"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M22.6324 23.0259L18.4592 18.9304"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M27.9868 25.4037C27.9868 27.1756 26.5491 28.6133 24.7773 28.6133C23.0054 28.6133 21.5677 27.1756 21.5677 25.4037C21.5677 23.6319 23.0054 22.1942 24.7773 22.1942C26.5491 22.1942 27.9868 23.6319 27.9868 25.4037Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M30.1084 33.9833V31.9473H37.4755V34.7061L30.3959 43.5109V46.9613H37.4755"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M40.9881 31.9473V39.4543H47.0575"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M47.6559 31.9473V46.9613"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <p>7/24 Destek</p>
                <span>Her Durumda Yanınızdayız</span>
              </div>
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <svg
                    className="info-svg"
                    viewBox="0 0 46 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4207 41.5134C12.4207 35.6538 17.1689 30.8978 23.0362 30.8978C28.8958 30.8978 33.6518 35.6461 33.6518 41.5134H12.4207Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.0363 30.9055C26.414 30.9055 29.1523 28.1673 29.1523 24.7896C29.1523 21.4118 26.414 18.6736 23.0363 18.6736C19.6585 18.6736 16.9203 21.4118 16.9203 24.7896C16.9203 28.1673 19.6585 30.9055 23.0363 30.9055Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.9929 17.4534C17.0834 15.6039 19.8267 14.4771 22.8341 14.4771C25.8261 14.4771 28.5616 15.5883 30.6443 17.4224"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0036 14.0849C28.194 12.887 29.8091 9.32965 28.6112 6.13932C27.4133 2.94899 23.856 1.33381 20.6657 2.5317C17.4753 3.7296 15.8601 7.28696 17.058 10.4773C18.2559 13.6676 21.8133 15.2828 25.0036 14.0849Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.5044 31.1155C32.0665 29.7012 34.1414 28.8463 36.4106 28.8463C41.2832 28.8463 45.231 32.7941 45.231 37.6667H35.4703"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.4929 23.756C41.4929 26.5614 39.216 28.8384 36.4105 28.8384C33.6051 28.8384 31.3281 26.5614 31.3281 23.756C31.3281 20.9506 33.6051 18.6736 36.4105 18.6736C39.216 18.6736 41.4929 20.9506 41.4929 23.756Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.4748 31.1155C13.9128 29.7012 11.8378 28.8463 9.56863 28.8463C4.69605 28.8463 0.748245 32.7941 0.748245 37.6667H10.5089"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.47849 23.756C4.47849 26.5614 6.75547 28.8384 9.5609 28.8384C12.3663 28.8384 14.6433 26.5614 14.6433 23.756C14.6433 20.9506 12.3663 18.6736 9.5609 18.6736C6.75547 18.6736 4.47849 20.9506 4.47849 23.756Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Profesyonel Ekip</p>
                <span>Profesyonel Çözümler</span>
              </div>
              <div className="info-col-box col-lg-4 col-md-12 p-4 border">
                <div className="info-icon col-6">
                  <svg
                    className="info-svg"
                    viewBox="0 0 47 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1033 52.5824C21.2259 52.7553 22.3829 52.8418 23.5572 52.8418C35.9567 52.8418 46.0075 42.7748 46.0075 30.3553C46.0075 17.9358 35.9567 7.86877 23.5572 7.86877C11.1577 7.86877 1.10692 17.9358 1.10692 30.3553C1.10692 39.0385 6.01145 46.5629 13.1955 50.3164"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3764 8.47416V6.13903C18.3764 3.26767 20.6905 0.949829 23.5572 0.949829C26.424 0.949829 28.7381 3.26767 28.7381 6.13903V8.47416"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.9189 19.9769L18.3764 25.1661L13.1956 40.7337L28.7381 35.5445L33.9189 19.9769Z"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3764 25.1661L28.7381 35.5445"
                      stroke="white"
                      strokeWidth="0.777126"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p>Lokasyon Seçenekleri</p>
                <span>Marmaris, Bodrum, Göcek</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mini-contact p-5">
          <div className="container">
            <Form />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
