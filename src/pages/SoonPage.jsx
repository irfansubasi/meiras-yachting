import { useTranslation } from 'react-i18next';

export default function SoonPage() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center vh-100 position-relative"
        style={{ backgroundColor: '#35465C' }}
      >
        <p
          style={{ fontSize: '5rem', fontFamily: 'Montserrat', zIndex: '999' }}
          className="fw-bold text-white mt-5 text-center"
        >
          {t('soon')}
        </p>
      </div>
    </>
  );
}
