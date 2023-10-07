import React, { useContext } from 'react';
import './Promo.css';
import useTranslation from '../../../hooks/useTranslation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Promo() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <section className="promo">
      <h1 className="promo__title">{translation.MAIN_CONTENT.PROMO}</h1>
    </section>
  );
}

export default Promo;
