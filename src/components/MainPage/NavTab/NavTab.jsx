import React from 'react';
import './NavTab.css';
import useTranslation from '../../../hooks/useTranslation';

function NavTab() {
  const translation = useTranslation();
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
