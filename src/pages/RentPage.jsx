import { Form, Input, Label, Button } from 'reactstrap';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/RentPage.css';

export default function RentPage() {
  return (
    <>
      <Nav />
      <Header page="rent" />
      <main>
        <section className="rent-section">
          <div className="categories p-5 bg-white position-absolute">
            <Form>
              <div className="checkbox-group">
                <Input type="checkbox" className="custom-checkbox" id="gulet" />
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
        </section>
      </main>
    </>
  );
}
