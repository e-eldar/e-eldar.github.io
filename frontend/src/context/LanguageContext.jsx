import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { languages, translations } from '../data/translations.js';

const LanguageContext = createContext(null);
const storageKey = 'eldar_portfolio_lang';

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem(storageKey) || 'sl');

  useEffect(() => {
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    languages,
    t: key => getNested(translations[lang] || translations.sl, key) || getNested(translations.sl, key) || key,
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
