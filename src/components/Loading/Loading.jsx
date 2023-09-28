import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Loading.css';
import Preloader from '../Preloader/Preloader';
import useTranslation from '../../hooks/useTranslation';

function Loading({ language }) {
  const { LOADING } = useTranslation(language);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? '' : `${prevDots}.`));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading">
      <div className="loading__container">
        <Preloader />
        <p className="loading__text">
          {LOADING.TEXT}
          {dots}
        </p>
      </div>
    </div>
  );
}

Loading.propTypes = {
  language: PropTypes.string,
};

Loading.defaultProps = {
  language: 'EN',
};

export default Loading;
