import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import '../Navigation/Navigation.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();
  const user = React.useContext(CurrentUserContext);
  const isMain = location.pathname === `/${user.language}/`;
  const [isPopup, setIsPopup] = useState(false);

  const popupNavigationHandler = () => {
    setIsPopup(!isPopup);
  };

  return (
    <header className={`header ${!isMain ? 'header_logged' : ''}`}>
      <div className="header__base">
        <NavLink to={`/${user.language}/`} className="header__logo" />
        <Navigation isPopup={isPopup} closePopup={popupNavigationHandler} />
        {user.isLoggedIn && (
          <input
            type="button"
            className={`header__menu-open-button ${
              isMain ? 'header__menu-open-button_color_white' : ''
            }`}
            name="header__menu-open-button"
            onClick={popupNavigationHandler}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
