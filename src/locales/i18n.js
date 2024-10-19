import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationTR from './tr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    tr: { translation: translationTR },
  },
  lng: localStorage.getItem('language') || 'tr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
