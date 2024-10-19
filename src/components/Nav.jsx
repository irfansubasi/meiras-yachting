import { useTranslation } from 'react-i18next';
import navLogo from '../assets/nav-logo.png';
import '../styles/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function Nav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white p-2 px-5 shadow">
      <Link className="navbar-brand" to="/">
        <img
          src={navLogo}
          alt="Meiras Yachting"
          className="d-inline-block align-text-top navbar-logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              {t('navbar.home')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              {t('navbar.about')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rent">
              {t('navbar.rent')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/services">
              {t('navbar.services')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/brokerage">
              {t('navbar.brokerage')}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              {t('navbar.contact')}
            </NavLink>
          </li>
        </ul>
        <div className="switch-lang">
          <button
            className={i18n.language === 'tr' ? '' : 'lang-inactive'}
            onClick={() => changeLanguage('tr')}
          >
            TR
          </button>
          <div className="lang-divider"></div>
          <button
            className={i18n.language === 'en' ? '' : 'lang-inactive'}
            onClick={() => changeLanguage('en')}
          >
            ENG
          </button>
        </div>
      </div>
    </nav>
  );
}
