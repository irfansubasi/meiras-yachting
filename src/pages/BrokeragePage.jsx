import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import BrokerageCard from '../components/BrokerageCard';
import { useLoading } from '../contexts/LoadingContext';
import '../styles/RentPage.css';

export default function BrokeragePage() {
  const { t, i18n } = useTranslation();
  const [yachts, setYachts] = useState([]);

  const backendURL = 'https://meirasyachting-backend-production.up.railway.app';

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
