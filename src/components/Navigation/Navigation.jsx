import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';
import PropTypes from 'prop-types';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import LanguagePanel from '../LanguagePanel/LanguagePanel';
import useTranslation from '../../hooks/useTranslation';

function Navigation({ isPopup, closePopup }) {
  const user = React.useContext(CurrentUserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isMain = location.pathname === '/';
  const { navigationTexts } = useTranslation(user.language);

  const loginHandler = () => {
    navigate('/signin');
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
              to="/"
              className={({ isActive }) => toDoNavLinkClass(isActive)}
            >
              {navigationTexts.navigationMainPage}
            </NavLink>
          )}
          <NavLink
            to="/movies"
            className={({ isActive }) => toDoNavLinkClass(isActive)}
          >
            {navigationTexts.navigationMovies}
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) => toDoNavLinkClass(isActive)}
          >
            {navigationTexts.navigationSavedMovies}
          </NavLink>
          <NavLink
            to="/profile"
            className={`navigation__button navigation__button_logged ${
              isPopup ? 'navigation__button_popup' : ''
            }`}
          >
            {navigationTexts.navigationProfile}
          </NavLink>
          {isPopup && (
            <button
              type="button"
              className="navigation__close-popup-button"
              name="popup-close-button"
              aria-label={navigationTexts.closePopup}
              value=""
              onClick={closePopup}
            />
          )}
        </div>
      ) : (
        <>
          <NavLink to="/signup" className="navigation__link">
            {navigationTexts.signUp}
          </NavLink>
          <LanguagePanel />
          <input
            type="button"
            className="navigation__button"
            onClick={loginHandler}
            value={navigationTexts.signIn}
          />
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
