import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/ContactPage.css';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="main-contact">
          <div className="container">
            <div className="form-container d-flex justify-content-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
