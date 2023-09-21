import React from 'react';
import './Promo.css';
import useTranslation from '../../../hooks/useTranslation';

function Promo() {
  const translation = useTranslation();
  return (
    <section className="promo">
      <h1 className="promo__title">{translation.mainContent.promo}</h1>
    </section>
  );
}

export default Promo;
