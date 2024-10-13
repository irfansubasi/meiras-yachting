import { Form, Input, Label, Button } from 'reactstrap';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/RentPage.css';
import { useEffect, useState } from 'react';
import RentCard from '../components/RentCard';
import { useLoading } from '../contexts/LoadingContext';

export default function RentPage() {
  const [yachts, setYachts] = useState([]);
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
            <section className="rent-section">
              <div className="categories p-5 bg-white position-absolute shadow-sm">
                <Form>
                  <div className="checkbox-group">
                    <Input
                      type="checkbox"
                      className="custom-checkbox"
                      id="gulet"
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
                    />
                    <Label className="custom-label" htmlFor="yelkenli" check>
                      Yelkenli
                    </Label>
                  </div>
                  <Button className="btn btn-primary">Tümünü Gör</Button>
                </Form>
              </div>
              {yachts.map((element, index) => (
                <RentCard key={index} elementID={element._id} />
              ))}
            </section>
          </main>
        </>
      )}
    </>
  );
}
