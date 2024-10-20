import { useTranslation } from 'react-i18next';
import '../styles/Header.css';
export default function Header({ page }) {
  const { t } = useTranslation();

  if (page === 'home') {
    return (
      <header className="home-header">
        <div className="slogan container">
          <h1 className="span-head">{t('home.welcome1')}</h1>
          <h1>{t('home.welcome2')}</h1>
        </div>
      </header>
    );
  } else {
    let styleType = {
      position: 'relative',
      height: '55vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };

    if (page === 'about') {
      styleType = {
        ...styleType,
        backgroundPosition: 'bottom',
        backgroundImage: "url('../assets/about-header.webp')",
      };
    } else if (page === 'rent') {
      styleType = {
        ...styleType,
        backgroundImage: "url('../assets/rent-header.webp')",
      };
    } else if (page === 'services') {
      styleType = {
        ...styleType,
        backgroundImage: "url('../assets/services-header.webp')",
      };
    } else if (page === 'brokerage') {
      styleType = {
        ...styleType,
        backgroundImage: "url('../assets/brokerage-header.webp')",
      };
    }

    return <header className="header" style={styleType}></header>;
  }
}
