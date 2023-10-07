import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function Menu() {
  const { language } = useContext(CurrentUserContext);
  const { NAVIGATION_TEXTS } = useTranslation(language);
  return (
    <div className="menu">
      <NavLink
        to={`/${language}/movies`}
        className={({ isActive }) =>
          `menu__link  menu__link_logged ${isActive ? 'menu__link_active' : ''}`
        }
      >
        {NAVIGATION_TEXTS.NAVIGATION_MOVIES}
      </NavLink>
      <NavLink
        to={`/${language}/saved-movies`}
        className={({ isActive }) =>
          `menu__link  menu__link_logged ${isActive ? 'menu__link_active' : ''}`
        }
      >
        {NAVIGATION_TEXTS.NAVIGATION_SAVED_MOVIES}
      </NavLink>
      <NavLink
        to={`/${language}/profile`}
        className="menu__button  menu__button_logged"
      >
        {NAVIGATION_TEXTS.NAVIGATION_PROFILE}
      </NavLink>
    </div>
  );
}

export default Menu;
