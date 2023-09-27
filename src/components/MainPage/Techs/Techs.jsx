import React, { useContext } from 'react';
import './Techs.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import useTranslation from '../../../hooks/useTranslation';

function Techs() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <SectionTemplate title={translation.mainContent.aboutTech} id="tech">
      <div className="techs">
        <h3 className="techs__header">
          {translation.mainContent.aboutTechTitle}
        </h3>
        <p className="techs__text">
          {translation.mainContent.aboutTechSubtitle}
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">
            {translation.mainContent.aboutTechFirstColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechSecondColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechThirdColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechFourthColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechFifthColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechSixthColumnTitle}
          </li>
          <li className="techs__list-item">
            {translation.mainContent.aboutTechSeventhColumnTitle}
          </li>
        </ul>
      </div>
    </SectionTemplate>
  );
}

export default Techs;
