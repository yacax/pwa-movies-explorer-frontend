import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NotFoundPage.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useTranslation from '../../hooks/useTranslation';

function NotFoundPage({ lastPath }) {
  const { language } = React.useContext(CurrentUserContext);
  const { NOT_FOUND_PAGE } = useTranslation(language);
  const navigate = useNavigate();

  const goBack = () => {
    if (lastPath) {
      navigate(lastPath);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="not-found-page">
      <h3 className="not-found-page__title">{NOT_FOUND_PAGE.TITLE}</h3>
      <p className="not-found-page__text">{NOT_FOUND_PAGE.TEXT} </p>
      <button className="not-found-page__link" type="button" onClick={goBack}>
        {NOT_FOUND_PAGE.LINK}
      </button>
    </div>
  );
}

NotFoundPage.propTypes = {
  lastPath: PropTypes.string,
};

NotFoundPage.defaultProps = {
  lastPath: '/',
};

export default NotFoundPage;
