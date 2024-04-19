import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import dataEN from "./datafile/data.json";

const resources = {
    en: {
        translation: dataEN,
    },
};

i18next.use(initReactI18next).init({
    resources,
    lng: "en", 
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
