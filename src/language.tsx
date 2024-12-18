import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Home: "Home",
          Calendar: "Calendar",
          AutoSelect: "AutoSelect",
          Table: "Table",
          Menu: "Menu",
          Timeline: "Timeline",
          Language: "Language",
          LEARNING: "LEARNING",
          H1:"Hello there",
          p:"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
          bu:"Get Started"
        }
      },
      id: {
        translation: {
          Home: "Beranda",
          Calendar: "Kalender",
          AutoSelect: "AutoPilih",
          Table: "Tabel",
          Menu: "Menu",
          Timeline: "Linimasa",
          Language: "Bahasa",
          LEARNING: "BELAJAR",
          H1:"Hallo Semua",
          p:"Provident cupiditate voluptatem et in. Quaerat fugiat ut diasumsikan kecuali latihan kuasi. Dalam deleniti eaque aut repudiandae et a id nisi.",
          bu:"Mulai Sekarang"
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Language to use if key is missing
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
