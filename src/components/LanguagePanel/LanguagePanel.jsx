import React, { useState } from 'react';
import './LanguagePanel.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../../utils/constants';

function LanguagePanel() {
  const { language, changeLanguage } = React.useContext(CurrentUserContext);
  const [isLanguagePopup, setIsLanguagePopup] = useState(false);

  const handleLanguageChange = (item) => {
    changeLanguage(item);
    setIsLanguagePopup(false);
  };

  return (
    <div className="language-panel">
      <button
        type="button"
        className="language-panel__button"
        onClick={() => setIsLanguagePopup(!isLanguagePopup)}
      >
        {language || 'EN'}
      </button>
      <div
        className={`language-panel__list ${
          isLanguagePopup ? 'language-panel__list_active' : ''
        }`}
      >
        {SUPPORTED_LANGUAGES.filter((item) =>
          language ? item !== language : item !== DEFAULT_LANGUAGE
        ).map((item) => (
          <button
            key={item}
            type="button"
            className="language-panel__button"
            onClick={() => handleLanguageChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguagePanel;
