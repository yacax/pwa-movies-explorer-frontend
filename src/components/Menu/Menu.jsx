import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function Menu() {
  const { language } = useContext(CurrentUserContext);
  const { navigationTexts } = useTranslation(language);
  return (
    <div className="menu">
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `menu__link  menu__link_logged ${isActive ? 'menu__link_active' : ''}`
        }
      >
        {navigationTexts.navigationMovies}
      </NavLink>
      <NavLink
        to="/saved-movies"
        className={({ isActive }) =>
          `menu__link  menu__link_logged ${isActive ? 'menu__link_active' : ''}`
        }
      >
        {navigationTexts.navigationSavedMovies}
      </NavLink>
      <NavLink to="/profile" className="menu__button  menu__button_logged">
        {navigationTexts.navigationProfile}
      </NavLink>
    </div>
  );
}

export default Menu;
