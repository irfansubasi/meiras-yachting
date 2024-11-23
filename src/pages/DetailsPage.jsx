import '../styles/DetailsPage.css';
import ContactForm from '../components/ContactForm';
import { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useLoading } from '../contexts/LoadingContext';
import { Helmet } from 'react-helmet';

export default function DetailsPage({ req }) {
  const { i18n, t } = useTranslation();
  const [currentYacht, setCurrentYacht] = useState({
    features: {
      tr: [],
      en: [],
    },
    name: '',
    length: 0,
    people: 0,
    ...(req === 'rent' && { cabin: 0 }),
    images: 0,
  });
  const { id } = useParams();

  const [images, setImages] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const { loading, setLoading } = useLoading();

  const thumbnailRef = useRef(null);
  const manualScroll = useRef(false);

  const backendURL = 'https://meirasyachting-backend-production.up.railway.app';

  useEffect(() => {
    const fetchYachts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          req === 'rent'
            ? `${backendURL}/yachts/${id}`
            : `${backendURL}/brokerage/${id}`
        );
        const data = response.data;
        setCurrentYacht(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchYachts();
  }, [id, setLoading, req]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const imageCount = currentYacht.images;
    const imagePaths = [];
    const folder = req === 'rent' ? 'yachtspics' : 'brokerage';
    for (let i = 1; i <= imageCount; i++) {
      imagePaths.push(`/assets/${folder}/${currentYacht._id}/${i}.webp`);
    }
    setImages(imagePaths);
  }, [currentYacht, req]);

  useEffect(() => {
    if (manualScroll.current && thumbnailRef.current) {
      const activeThumbnail = thumbnailRef.current.children[activeIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }

    manualScroll.current = false;
  }, [activeIndex]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    manualScroll.current = true;
    setActiveIndex(newIndex);
  };
  const slides = images.map((src, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={src}
    >
      <img src={src} alt={`Yacht image ${index + 1}`} className="img-fluid" />
    </CarouselItem>
  ));

  const features = currentYacht.features[i18n.language];
  const isOdd = features.length % 2 !== 0;

  return (
    <>
      <Helmet>
        <title>{`Meiras Yachting - ${currentYacht.name}`}</title>
        <meta
          name="description"
          content={`${currentYacht.name}. Akdeniz ve Ege'de lüks bir deneyim için bu yatı keşfedin.`}
        />
        <meta
          name="keywords"
          content={`yat ${currentYacht.name}, lüks yat, yat kiralama, yat`}
        />
        <meta
          property="og:title"
          content={`Meiras Yachting - ${currentYacht.name}`}
        />
        <meta
          property="og:description"
          content={`${currentYacht.name}. Akdeniz ve Ege'de lüks bir deneyim için bu yatı keşfedin.`}
        />
        <meta
          property="og:image"
          content={`https://meirasyachting.com/assets/rent-header.webp`}
        />
        <meta
          property="og:url"
          content={`https://meirasyachting.com/rent/${currentYacht._id}`}
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Meiras Yachting - ${currentYacht.name}`}
        />
        <meta
          name="twitter:description"
          content={`${currentYacht.name}. Akdeniz ve Ege'de lüks bir deneyim için bu yatı keşfedin.`}
        />
        <meta
          name="twitter:image"
          content={`https://meirasyachting.com/assets/rent-header.webp`}
        />
      </Helmet>
      {loading && (
        <div className="loading-container">
          <img className="loading" src="../../assets/loading.png" />
        </div>
      )}
      {!loading && (
        <main>
          <section className="details-section container">
            <h4 className="fw-semibold mb-4">
              {currentYacht.name.toUpperCase()}
            </h4>
            <div className="row">
              <div className="carousel-container col-md-12 col-lg-6">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                  />

                  <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                  />
                </Carousel>
                <div className="thumbnail-indicators-container">
                  <div className="thumbnail-indicators" ref={thumbnailRef}>
                    {images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        className={`indicator-thumbnail img-fluid ${
                          activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => goToIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="yacht-details col-lg-6 col-md-12">
                <div className="headings d-flex align-items-center justify-content-around">
                  <div className="heading-item">
                    <img src="../../assets/length.svg" alt="length" />
                    <span className="item-text">{currentYacht.length} M</span>
                  </div>

                  <div className="vertical-divider"></div>
                  <div className="heading-item">
                    <img src="../../assets/people.svg" alt="people" />
                    <span className="item-text">
                      {currentYacht.people}{' '}
                      {t('rent.card.people').toUpperCase()}
                    </span>
                  </div>

                  {req === 'rent' && (
                    <>
                      <div className="vertical-divider"></div>
                      <div className="heading-item">
                        <img src="../../assets/cabin.svg" alt="cabin" />
                        <span className="item-text">
                          {currentYacht.cabin}{' '}
                          {t('rent.card.cabin').toUpperCase()}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="features d-flex justify-content-center align-items-center">
                  <ul
                    className={
                      req === 'brokerage'
                        ? 'features-list-brokerage'
                        : 'features-list'
                    }
                  >
                    {currentYacht.features[i18n.language].map((feat, index) => (
                      <li className="features-list-item" key={index}>
                        {feat}
                      </li>
                    ))}
                    {isOdd && <li className="features-list-item empty"></li>}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="form-section container ">
            <img
              className="details-logo"
              src="../../assets/footer-logo.png"
              alt="logo"
            />
            <div className="form-div d-flex justify-content-center">
              <ContactForm />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
