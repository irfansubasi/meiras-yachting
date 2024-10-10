import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import Header from '../components/Header';
import Nav from '../components/Nav';
import '../styles/RentPage.css';

export default function RentPage() {
  return (
    <>
      <Nav />
      <Header page="rent" />
      <main>
        <div className="categories p-5 bg-white position-absolute">
          <Form>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Gulet</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Motoryat</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Katamaran</Label>
            </FormGroup>
            <FormGroup check inline>
              <Input type="checkbox" />
              <Label check>Yelkenli</Label>
            </FormGroup>
            <Button>Tümünü Görüntüle</Button>
          </Form>
        </div>
      </main>
    </>
  );
}
