import React from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <h1>{t('news')}</h1>
      <button onClick={() => changeLanguage("en")}>
        English
      </button>
      <button onClick={() => changeLanguage("uk")}>
        Українська
      </button>
    </div>
  );
}

