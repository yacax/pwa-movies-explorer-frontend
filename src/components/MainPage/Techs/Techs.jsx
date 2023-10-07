import React, { useContext } from 'react';
import './Techs.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import useTranslation from '../../../hooks/useTranslation';

function Techs() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <SectionTemplate title={translation.MAIN_CONTENT.ABOUT_TECH} id="tech">
      <div className="techs">
        <h3 className="techs__header">
          {translation.MAIN_CONTENT.ABOUT_TECH_TITLE}
        </h3>
        <p className="techs__text">
          {translation.MAIN_CONTENT.ABOUT_TECH_SUBTITLE}
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_FIRST_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_SECOND_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_THIRD_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_FOURTH_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_FIFTH_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_SIXTH_COLUMN_TITLE}
          </li>
          <li className="techs__list-item">
            {translation.MAIN_CONTENT.ABOUT_TECH_SEVENTH_COLUMN_TITLE}
          </li>
        </ul>
      </div>
    </SectionTemplate>
  );
}

export default Techs;
