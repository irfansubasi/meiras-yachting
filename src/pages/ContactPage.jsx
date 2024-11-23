import '../styles/ContactPage.css';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Meiras Yachting ile iletişime geçin. Yat kiralama, satış ve özel hizmetlerimiz hakkında bilgi almak için bizimle hemen bağlantı kurun."
        />
        <meta
          name="keywords"
          content="Meiras Yachting iletişim, yat kiralama iletişim, lüks yat hizmetleri, Akdeniz yat turları, Ege yat turları, iletişim bilgileri, müşteri desteği"
        />
        <meta property="og:title" content="Meiras Yachting - İletişim" />
        <meta
          property="og:description"
          content="Meiras Yachting ile iletişime geçin. Yat kiralama, satış ve özel hizmetlerimiz hakkında bilgi almak için bizimle hemen bağlantı kurun."
        />
        <meta property="og:url" content="https://meirasyachting.com/contact" />
        <meta
          property="og:image"
          content="https://meirasyachting.com/assets/contact-bg.webp"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meiras Yachting - İletişim" />
        <meta
          name="twitter:description"
          content="Meiras Yachting ile iletişime geçin. Yat kiralama, satış ve özel hizmetlerimiz hakkında bilgi almak için bizimle hemen bağlantı kurun."
        />
        <meta
          name="twitter:image"
          content="https://meirasyachting.com/assets/contact-bg.webp"
        />
      </Helmet>
      <main>
        <section className="main-contact">
          <div className="container">
            <div className="form-container d-flex justify-content-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
