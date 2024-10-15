import '../styles/DetailsPage.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';
import axios from 'axios';

export default function DetailsPage() {
  const location = useLocation();
  const { currentYacht } = location.state;

  const [images, setImages] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const thumbnailRef = useRef(null);
  const manualScroll = useRef(false);

  useEffect(() => {
    // Yatın ID'sine göre resimleri backend'den çek
    axios
      .get(`http://localhost:5000/api/yacht-images/${currentYacht._id}`)
      .then((response) => {
        setImages(response.data.images);
      })
      .catch((error) => {
        console.error('Error fetching yacht images:', error);
      });
  }, [currentYacht._id]);

  useEffect(() => {
    // Sadece manualScroll true olduğunda çalışacak
    if (manualScroll.current && thumbnailRef.current) {
      const activeThumbnail = thumbnailRef.current.children[activeIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: 'smooth',
          inline: 'center', // Ortada konumlandır
        });
      }
    }
    // Kaydırma tamamlandıktan sonra manualScroll'u sıfırlıyoruz
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
    manualScroll.current = true; // Sadece kullanıcı tıklamasıyla değiştiğinde true yapıyoruz
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

  return (
    <>
      <Nav />
      <main>
        <section className="details-section container">
          <h1>{currentYacht.name.toUpperCase()}</h1>
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
            <div className="yacht-details col-lg-6 col-md-12 d-flex flex-column">
              <div className="headings d-flex align-items-center justify-content-around">
                <div className="heading-item">
                  <img src="../../assets/length.svg" alt="length" />
                  <span className="fs-5">{currentYacht.length} M</span>
                </div>

                <div className="vertical-divider"></div>
                <div className="heading-item">
                  <img src="../../assets/people.svg" alt="people" />
                  <span className="fs-5">{currentYacht.people} MİSAFİR</span>
                </div>

                <div className="vertical-divider"></div>
                <div className="heading-item">
                  <img src="../../assets/cabin.svg" alt="cabin" />
                  <span className="fs-5">{currentYacht.cabin} KABİN</span>
                </div>
              </div>
              <div className="features d-flex justify-content-center">
                <ul className="features-list">
                  {currentYacht.features.map((feat, index) => (
                    <li className="features-list-item" key={index}>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="extra-info d-flex justify-content-center column-gap-5">
                <div className="info-item">
                  <img src="../../assets/type.svg" alt="type" />
                  <div className="info-divider"></div>
                  <p>{currentYacht.type.toUpperCase()}</p>
                </div>
                <div className="info-item">
                  <img src="../../assets/location.svg" alt="location" />
                  <div className="info-divider"></div>
                  <p>{currentYacht.location.toUpperCase()}</p>
                </div>
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
          <div className="form-div">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
