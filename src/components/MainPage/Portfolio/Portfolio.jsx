import React, { useContext } from 'react';
import './Portfolio.css';
import useTranslation from '../../../hooks/useTranslation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Portfolio() {
  const { language } = useContext(CurrentUserContext);
  const { LINKS_NAMES, MAIN_CONTENT, IS_RIGTH_TO_LEFT } =
    useTranslation(language);
  const navigationLinksClassNames = `portfolio__navigation-list-link ${
    IS_RIGTH_TO_LEFT
      ? 'portfolio__navigation-list-link_type_rtl'
      : 'portfolio__navigation-list-link_type_ltr'
  }`;
  return (
    <section className="portfolio">
      <a
        href={MAIN_CONTENT.PORTFOLIO_GITHUB_LINK}
        className="portfolio__link-git"
        target="_blank"
        rel="noopener noreferrer"
      >
        {LINKS_NAMES.GITHUB}
      </a>
      <div className="portfolio__navigation">
        <h4 className="portfolio__navigation-list-title">
          {MAIN_CONTENT.PORTFOLIO_TITLE}
        </h4>
        <ul className="portfolio__navigation-list">
          <li className="portfolio__navigation-list-item">
            <a
              href={MAIN_CONTENT.PORTFOLIO_SITE_STATIC_LINK}
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {MAIN_CONTENT.PORTFOLIO_SITE_STATIC}
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href={MAIN_CONTENT.PORTFOLIO_SITE_ADAPTIVE_LINK}
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {MAIN_CONTENT.PORTFOLIO_SITE_ADAPTIVE}
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href={MAIN_CONTENT.PORTFOLIO_SITE_SINGLE_PAGE_LINK}
              className={navigationLinksClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {MAIN_CONTENT.PORTFOLIO_SITE_SINGLE_PAGE}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
