import { Form, Input, Label, Button } from 'reactstrap';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/RentPage.css';
import { useEffect, useState } from 'react';
import RentCard from '../components/RentCard';
import { useLoading } from '../contexts/LoadingContext';

export default function RentPage() {
  const [yachts, setYachts] = useState([]);

  const [selectedTypes, setSelectedTypes] = useState({
    gulet: false,
    motoryat: false,
    katamaran: false,
    yelkenli: false,
  });

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchYachts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/yachts');
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

  const filteredYachts = yachts.filter((yacht) => {
    if (Object.values(selectedTypes).every((value) => !value)) {
      return true;
    }
    return selectedTypes[yacht.type];
  });
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
          <Nav />
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
                      Gulet
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
                      Motoryat
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
                      Katamaran
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
                      Yelkenli
                    </Label>
                  </div>
                  <Button
                    className="btn btn-primary see-all"
                    onClick={handleShowAll}
                  >
                    Tümünü Gör
                  </Button>
                </Form>
              </div>
              <section className="catalog-section">
                <div className="row">
                  {filteredYachts.map((element, index) => (
                    <div className="col-xl-3 col-md-6 mb-4" key={index}>
                      <RentCard
                        elementID={element._id}
                        name={element.name}
                        type={element.type}
                        length={element.length}
                        people={element.people}
                        cabin={element.cabin}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
