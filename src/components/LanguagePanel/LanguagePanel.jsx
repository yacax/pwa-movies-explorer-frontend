import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LanguagePanel.css';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGES_NAMES,
} from '../../utils/constants';
import usePath from '../../hooks/usePath';

function LanguagePanel({ isPopup }) {
  const navigate = useNavigate();

  const location = useLocation();
  const { language } = React.useContext(CurrentUserContext);

  const [isLanguagePopup, setIsLanguagePopup] = useState(false);
  const { pathWithoutLanguage } = usePath();
  const languagePanelButtonClassNames = `language-panel__button ${
    location.pathname !== `/${language}/` || isPopup
      ? 'language-panel__button_style_black'
      : ''
  }`;

  const handleLanguageChange = (newLang) => {
    setIsLanguagePopup(false);
    const newPath = `/${newLang}${pathWithoutLanguage}`;
    navigate(newPath);
  };

  return (
    <div className={`language-panel ${isPopup ? 'language-panel_popup' : ''}`}>
      <button
        type="button"
        className={languagePanelButtonClassNames}
        onClick={() => setIsLanguagePopup(!isLanguagePopup)}
      >
        {LANGUAGES_NAMES[language] || 'English'}
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
            className={languagePanelButtonClassNames}
            onClick={() => handleLanguageChange(item)}
          >
            {LANGUAGES_NAMES[item]}
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
