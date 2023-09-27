import React, { useContext } from 'react';
import './NavTab.css';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import useTranslation from '../../../hooks/useTranslation';

function NavTab() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li>
          <a href="#about" className="navtab__link">
            {translation.linksNames.aboutProject}
          </a>
        </li>
        <li>
          <a href="#tech" className="navtab__link">
            {translation.linksNames.aboutTech}
          </a>
        </li>
        <li>
          <a href="#student" className="navtab__link">
            {translation.linksNames.aboutStudent}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
