import React from 'react';
import './Footer.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function Footer() {
  const { language } = React.useContext(CurrentUserContext);
  const { FOOTER_TEXT } = useTranslation(language);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">{FOOTER_TEXT.COPYRIGHT_TEXT}</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {currentYear}</p>
        <nav className="footer__navigation">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__navigation-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {FOOTER_TEXT.FOOTRE_LINK_TEXT}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yacax"
              className="footer__navigation-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
