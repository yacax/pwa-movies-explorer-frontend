import React, { useState, useEffect } from 'react';
import './Loading.css';
import Preloader from '../Preloader/Preloader';

function Loading() {
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
        <p className="loading__text">Loading{dots}</p>
      </div>
    </div>
  );
}

export default Loading;
