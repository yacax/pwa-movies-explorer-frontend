import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LanguagePanel from '../LanguagePanel/LanguagePanel';
import useTranslation from '../../hooks/useTranslation';

function Navigation({ isPopup, closePopup }) {
  const user = React.useContext(CurrentUserContext);
  const { language } = user;
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === `/${language}/`;
  const { NAVIGATION_TEXTS } = useTranslation(language);

  const loginHandler = () => {
    navigate(`/${language}/signin`);
  };

  const navigationType = !isPopup ? 'navigation__menu' : 'navigation__popup';

  const toDoNavLinkClass = (isActive) => {
    const baseClass = 'navigation__link navigation__link_logged';
    const activeClass = isActive ? 'navigation__link_active' : '';
    const popupClass = isPopup ? 'navigation__link_popup' : '';
    const mainClass = isMain && !isPopup ? 'navigation__link_color_white' : '';

    return `${baseClass} ${activeClass} ${popupClass} ${mainClass}`;
  };

  return (
    <nav className={`navigation ${user.isLoggedIn ? 'navigation_logged' : ''}`}>
      {user.isLoggedIn ? (
        <div className={navigationType}>
          {isPopup && (
            <NavLink
              to={`/${language}/`}
              className={({ isActive }) => toDoNavLinkClass(isActive)}
            >
              {NAVIGATION_TEXTS.NAVIGATION_MAIN_PAGE}
            </NavLink>
          )}
          <NavLink
            to={`/${language}/movies`}
            className={({ isActive }) => toDoNavLinkClass(isActive)}
          >
            {NAVIGATION_TEXTS.NAVIGATION_MOVIES}
          </NavLink>
          <NavLink
            to={`/${language}/saved-movies`}
            className={({ isActive }) => toDoNavLinkClass(isActive)}
          >
            {NAVIGATION_TEXTS.NAVIGATION_SAVED_MOVIES}
          </NavLink>
          <NavLink
            to={`/${language}/profile`}
            className={`navigation__button navigation__button_logged ${
              isPopup ? 'navigation__button_popup' : ''
            }`}
          >
            {NAVIGATION_TEXTS.NAVIGATION_PROFILE}
          </NavLink>
          <LanguagePanel isPopup={isPopup} />

          {isPopup && (
            <button
              type="button"
              className="navigation__close-popup-button"
              name="popup-close-button"
              aria-label={NAVIGATION_TEXTS.closePopup}
              value=""
              onClick={closePopup}
            />
          )}
        </div>
      ) : (
        <>
          <NavLink to={`/${language}/signUp`} className="navigation__link">
            {NAVIGATION_TEXTS.SIGN_UP}
          </NavLink>
          <input
            type="button"
            className="navigation__button"
            onClick={loginHandler}
            value={NAVIGATION_TEXTS.SIGN_IN}
          />
          <LanguagePanel />
        </>
      )}
    </nav>
  );
}

Navigation.propTypes = {
  isPopup: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Navigation;
