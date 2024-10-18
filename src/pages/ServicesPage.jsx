import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ServicesPage.css';
import foodSVG from '../../public/assets/food.svg';
import planeSVG from '../../public/assets/plane.svg';
import clothingSVG from '../../public/assets/clothing.svg';
import gearSVG from '../../public/assets/gear.svg';

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <Header page="services" />
      <main className="mb-4">
        <section className="services" style={{ height: '50vh' }}>
          <div className="container position-absolute">
            <div className="row services-boxes">
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={foodSVG} alt="food" />
                  <p className="service-box-head">Kumanya Hizmetleri</p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    Bütün ihtiyaçlarınızı profesyonel ekibimiz ile sizin
                    talepleriniz doğrultusunda karşılıyoruz.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={planeSVG} alt="plane" />
                  <p className="service-box-head">VIP Transfer</p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    Havaalanı veya şehirlerarası transfer ihtiyacınızda lüks
                    araçlarımız ile yanınızdayız.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img
                    className="services-svg"
                    src={clothingSVG}
                    alt="clothing"
                  />
                  <p className="service-box-head">Çamaşır Hizmeti</p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    İstenmeyen durumların tatil keyfinizi kaçırmaması için
                    express ve normal kuru temizleme hizmetimiz mevcuttur.
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-md-12 d-flex">
                <div className="services-box">
                  <img className="services-svg" src={gearSVG} alt="gear" />
                  <p className="service-box-head">Teknik Servis</p>
                  <div className="border w-50 my-4"></div>
                  <p className="service-box-body">
                    Kusursuz ve sorunsuz bir tatil keyfi için hizmetinizdeyiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-exp">
          <div className="row">
            <div className="col-lg-8 col-md-12 exp-row-body order-2 order-lg-1">
              <h3>Kumanya Hizmetleri</h3>
              <div className="border my-5 w-25"></div>
              <p>
                Yerel lezzetlerden dünya mutfaklarına kadar geniş bir ürün
                yelpazesi sunuyoruz.
                <br />
                <br />
                Hızlı ve güvenilir teslimat hizmetimiz sayesinde, talep
                ettiğiniz ürünler en kısa sürede yatınıza ulaştırılır.
                <br />
                <br />
                Yat kiralama hizmetlerimizde, her ayrıntının sizin için
                düşünüldüğünü bilmenin rahatlığıyla, sadece denizin ve tatilin
                keyfini çıkarın. Kumanya hizmetlerimizle ilgili daha fazla bilgi
                almak ve özel taleplerinizi iletmek için bizimle iletişime
                geçebilirsiniz.
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
              <h3>VIP Transfer</h3>
              <div
                className="border my-5 w-25"
                style={{ borderColor: '#092649' }}
              ></div>
              <p>
                Havaalanı veya şehirlerarası transfer ihtiyacınızda
                hizmetinizdeyiz.
                <br />
                <br />
                VIP transfer hizmetimiz, özel karşılama ve uğurlama
                hizmetleriyle başlar.
                <br />
                <br />
                Gizlilik ve güvenlik en ön planda tutulur.
                <br />
                <br />
                VIP transfer hizmetimizle, yat kiralama deneyiminize prestij ve
                konfor katıyoruz. Ayrıcalıklı hizmetlerimizden faydalanmak ve
                daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 exp-row-body order-2 order-lg-1">
              <h3>Teknik Servis</h3>
              <div className="border my-5 w-25"></div>
              <p>
                Tatiliniz boyunca ortaya çıkabilecek teknik aksaklıklar için
                hızlı müdahale garantisi sunuyoruz.
                <br />
                <br />
                Teknenizin kışlık bakımlarını deneyimli iş ortaklarımızla
                birlikte gidermekteyiz.
                <br />
                <br />
                Yat kiralama hizmetlerimizde sunduğumuz teknik servis desteği
                ile her zaman yanınızdayız. Daha fazla bilgi almak ve
                taleplerinizi iletmek için bizimle iletişime geçebilirsiniz.
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
              <h3>Çamaşır Hizmeti</h3>
              <div
                className="border my-5 w-25"
                style={{ borderColor: '#092649' }}
              ></div>
              <p>
                Misafirlerimizin konforunu ön planda tutarak, yatlarımızda
                konakladığınız süre boyunca çamaşır hizmeti sunuyoruz.
                <br />
                <br />
                Express ve kuru temizleme seçeneklerimizle, kıyafetleriniz her
                zaman temiz ve düzenli.
                <br />
                <br />
                Tatilinizi keyifle geçirirken, çamaşır işlerinizle biz
                ilgilenelim.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
