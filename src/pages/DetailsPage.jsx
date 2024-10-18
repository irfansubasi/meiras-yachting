import '../styles/DetailsPage.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselControl, CarouselItem } from 'reactstrap';

export default function DetailsPage() {
  const location = useLocation();
  const { currentYacht } = location.state;

  const [images, setImages] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const thumbnailRef = useRef(null);
  const manualScroll = useRef(false);

  useEffect(() => {
    const imageCount = currentYacht.images; // Max resim sayısı
    const imagePaths = [];
    for (let i = 1; i <= imageCount; i++) {
      imagePaths.push(`/assets/yachtspics/${currentYacht._id}/${i}.webp`);
    }
    setImages(imagePaths);
  }, [currentYacht._id, currentYacht.images]);

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

  return (
    <>
      <Nav />
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
                    {currentYacht.people} MİSAFİR
                  </span>
                </div>

                <div className="vertical-divider"></div>
                <div className="heading-item">
                  <img src="../../assets/cabin.svg" alt="cabin" />
                  <span className="item-text">{currentYacht.cabin} KABİN</span>
                </div>
              </div>
              <div className="features d-flex justify-content-center align-items-center">
                <ul className="features-list">
                  {currentYacht.features.map((feat, index) => (
                    <li className="features-list-item" key={index}>
                      {feat}
                    </li>
                  ))}
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
      <Footer />
    </>
  );
}
