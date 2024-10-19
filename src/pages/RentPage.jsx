import { Form, Input, Label, Button } from 'reactstrap';
import Header from '../components/Header';
import '../styles/RentPage.css';
import { useEffect, useState } from 'react';
import RentCard from '../components/RentCard';
import { useLoading } from '../contexts/LoadingContext';
import { useTranslation } from 'react-i18next';

export default function RentPage() {
  const { t, i18n } = useTranslation();
  const [yachts, setYachts] = useState([]);

  const [selectedTypes, setSelectedTypes] = useState({
    gulet: false,
    motoryat: false,
    katamaran: false,
    yelkenli: false,
  });

  const backendURL = 'https://meirasyachting-backend-production.up.railway.app';

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchYachts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${backendURL}/yachts/`);
        const data = await response.json();
        setYachts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchYachts();
  }, [setLoading]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedTypes((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const filteredYachts = yachts
    .filter((yacht) => {
      if (Object.values(selectedTypes).every((value) => !value)) {
        return true;
      }
      return selectedTypes[yacht.type.tr];
    })
    .sort((a, b) => b.length - a.length);

  const handleShowAll = () => {
    setSelectedTypes({
      gulet: true,
      motoryat: true,
      katamaran: true,
      yelkenli: true,
    });
  };

  return (
    <>
      {loading && (
        <div className="loading-container">
          <img className="loading" src="../../assets/loading.png" />
        </div>
      )}
      {!loading && (
        <>
          <Header page="rent" />
          <main>
            <section className="rent-section container">
              <div className="categories p-5 bg-white position-absolute shadow-sm">
                <Form>
                  <div className="checkbox-group">
                    <Input
                      type="checkbox"
                      className="custom-checkbox"
                      id="gulet"
                      checked={selectedTypes.gulet}
                      onChange={handleCheckboxChange}
                    />
                    <Label check className="custom-label" htmlFor="gulet">
                      {t('rent.filter.filter1')}
                    </Label>
                  </div>
                  <div className="checkbox-group">
                    <Input
                      type="checkbox"
                      className="custom-checkbox"
                      id="motoryat"
                      checked={selectedTypes.motoryat}
                      onChange={handleCheckboxChange}
                    />
                    <Label className="custom-label" htmlFor="motoryat" check>
                      {t('rent.filter.filter2')}
                    </Label>
                  </div>
                  <div className="checkbox-group">
                    <Input
                      className="custom-checkbox"
                      id="katamaran"
                      type="checkbox"
                      checked={selectedTypes.katamaran}
                      onChange={handleCheckboxChange}
                    />
                    <Label className="custom-label" htmlFor="katamaran" check>
                      {t('rent.filter.filter3')}
                    </Label>
                  </div>
                  <div className="checkbox-group">
                    <Input
                      className="custom-checkbox"
                      id="yelkenli"
                      type="checkbox"
                      checked={selectedTypes.yelkenli}
                      onChange={handleCheckboxChange}
                    />
                    <Label className="custom-label" htmlFor="yelkenli" check>
                      {t('rent.filter.filter4')}
                    </Label>
                  </div>
                  <Button
                    className="btn btn-primary see-all"
                    onClick={handleShowAll}
                  >
                    {t('rent.filter.button')}
                  </Button>
                </Form>
              </div>
            </section>
            <section className="catalog-section container">
              <div className="row">
                {filteredYachts.map((element, index) => (
                  <div className="col-xl-3 col-md-6 mb-4" key={index}>
                    <RentCard
                      elementID={element._id}
                      name={element.name}
                      type={element.type[i18n.language]}
                      length={element.length}
                      people={element.people}
                      cabin={element.cabin}
                    />
                  </div>
                ))}
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
