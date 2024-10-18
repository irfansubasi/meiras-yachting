import Nav from '../components/Nav';

export default function SoonPage() {
  return (
    <>
      <Nav />
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100 position-relative"
        style={{ backgroundColor: '#35465C' }}
      >
        <p
          style={{ fontSize: '5rem', fontFamily: 'Montserrat', zIndex: '999' }}
          className="fw-bold text-white mt-5 text-center"
        >
          Çok yakında!
        </p>
      </div>
    </>
  );
}
