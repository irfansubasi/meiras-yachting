import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import BrokerageCard from '../components/BrokerageCard';
import { useLoading } from '../contexts/LoadingContext';
import '../styles/RentPage.css';
import { Helmet } from 'react-helmet';

export default function BrokeragePage() {
  const { t, i18n } = useTranslation();
  const [yachts, setYachts] = useState([]);

  const backendURL = 'https://meirasyachtingapi.koyeb.app';

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchYachts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${backendURL}/brokerage/`);
        const data = await response.json();
        setYachts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchYachts();
  }, [setLoading]);

  return (
    <>
      {loading && (
        <div className="loading-container">
          <img className="loading" src="../../assets/loading.png" />
        </div>
      )}
      {!loading && (
        <>
          <Helmet>
            <meta
              name="description"
              content="Meiras Yachting Kataloğu: Lüks yatlarımızı keşfedin. Akdeniz ve Ege'de yat satın alma için en iyi seçenekleri bulun."
            />
            <meta
              name="keywords"
              content="yat kataloğu, lüks yat modelleri, yat satın alma seçenekleri, yat, Meiras Yachting katalog, Akdeniz yatlar, Ege yatlar"
            />
            <meta property="og:title" content="Meiras Yachting - Brokerage" />
            <meta
              property="og:description"
              content="Meiras Yachting Kataloğu: Lüks yatlarımızı keşfedin. Akdeniz ve Ege'de yat satın alma için en iyi seçenekleri bulun."
            />
            <meta
              property="og:url"
              content="https://meirasyachting.com/brokerage"
            />
            <meta
              property="og:image"
              content="https://meirasyachting.com/assets/brokerage-header.webp"
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Meiras Yachting - Brokerage" />
            <meta
              name="twitter:description"
              content="Meiras Yachting Kataloğu: Lüks yatlarımızı keşfedin. Akdeniz ve Ege'de yat satın alma için en iyi seçenekleri bulun."
            />
            <meta
              name="twitter:image"
              content="https://meirasyachting.com/assets/brokerage-header.webp"
            />
          </Helmet>
          <Header page="brokerage" />
          <main>
            <div className="brokerage-heading p-4 bg-white position-absolute shadow-sm">
              <h2>{t('brokerage.h1')}</h2>
              <h4>{t('brokerage.h2')}</h4>
            </div>
            <section className="catalog-section container d-flex justify-content-center">
              {yachts.map((element, index) => (
                <div className="temp-card mb-4" key={index}>
                  <BrokerageCard
                    elementID={element._id}
                    name={element.name}
                    type={element.type[i18n.language]}
                    length={element.length}
                    people={element.people}
                    cabin={element.cabin}
                  />
                </div>
              ))}
            </section>
          </main>
        </>
      )}
    </>
  );
}
