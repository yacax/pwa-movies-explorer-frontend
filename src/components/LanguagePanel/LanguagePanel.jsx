import React, { useState } from 'react';
import './LanguagePanel.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../../utils/constants';

function LanguagePanel({ isPopup }) {
  const location = useLocation();
  const { language, changeLanguage } = React.useContext(CurrentUserContext);
  const [isLanguagePopup, setIsLanguagePopup] = useState(false);

  const handleLanguageChange = (item) => {
    changeLanguage(item);
    setIsLanguagePopup(false);
  };

  return (
    <div className={`language-panel ${isPopup ? 'language-panel_popup' : ''}`}>
      <button
        type="button"
        className={`language-panel__button ${
          location.pathname !== '/' ? 'language-panel__button_style_black' : ''
        }`}
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
            className={`language-panel__button ${
              location.pathname !== '/'
                ? 'language-panel__button_style_black'
                : ''
            }`}
            onClick={() => handleLanguageChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

LanguagePanel.propTypes = {
  isPopup: PropTypes.bool,
};

LanguagePanel.defaultProps = {
  isPopup: false,
};

export default LanguagePanel;
