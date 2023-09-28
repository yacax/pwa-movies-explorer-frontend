import React, { useContext } from 'react';
import './Portfolio.css';
import useTranslation from '../../../hooks/useTranslation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Portfolio() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  const navigationLinksClassNames = `portfolio__navigation-list-link ${
    language === 'עבר'
      ? 'portfolio__navigation-list-link_type_rtl'
      : 'portfolio__navigation-list-link_type_ltr'
  }`;
  return (
    <section className="portfolio">
      <a
        href="https://github.com/yacax"
        className="portfolio__link-git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {translation.linksNames.github}
      </a>
      <div className="portfolio__navigation">
        <h4 className="portfolio__navigation-list-title">
          {translation.mainContent.portfolioTitle}
        </h4>
        <ul className="portfolio__navigation-list">
          <li className="portfolio__navigation-list-item">
            <a
              href="https://github.com/yacax/how-to-learn"
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translation.mainContent.portfolioSiteStatic}
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href="https://yacax.github.io/russian-travel/"
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translation.mainContent.portfolioSiteAdaptive}
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href="https://yacax.nomoreparties.sbs/"
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {translation.mainContent.portfolioSiteSinglePage}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
