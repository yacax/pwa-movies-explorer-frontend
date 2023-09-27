import React, { useContext } from 'react';
import './AboutProject.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import useTranslation from '../../../hooks/useTranslation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function AboutProject() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <SectionTemplate title={translation.mainContent.aboutProject} id="about">
      <div className="about-project">
        <table className="about-project__table">
          <thead>
            <tr>
              <th className="about-project__table-header">
                {translation.mainContent.aboutProjectFirstColumnTitle}
              </th>
            </tr>
          </thead>
          <tbody className="about-project__table-body">
            <tr className="about-project__table-row">
              <td className="about-project__table-cell about-project__table-cell_type_empty">
                <span className="about-project__hidden-element">space</span>
              </td>
            </tr>
            <tr className="about-project__table-row">
              <td className="about-project__table-cell">
                {translation.mainContent.aboutProjectFirstColumnText}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="about-project__table">
          <thead>
            <tr>
              <th className="about-project__table-header">
                {translation.mainContent.aboutProjectSecondColumnTitle}
              </th>
            </tr>
          </thead>
          <tbody className="about-project__table-body">
            <tr className="about-project__table-row">
              <td className="about-project__table-cell about-project__table-cell_type_empty">
                <span className="about-project__hidden-element">space</span>
              </td>
            </tr>
            <tr className="about-project__table-row">
              <td className="about-project__table-cell">
                {translation.mainContent.aboutProjectSecondColumnText}
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="about-project__gant-container">
          <li
            className="about-project__gant about-project__gant_color_green"
            data-content={translation.mainContent.firstGantComment}
          >
            {translation.mainContent.firstGantPart}
          </li>
          <li
            className="about-project__gant about-project__gant_color_grey"
            data-content={translation.mainContent.secondGantComment}
          >
            {translation.mainContent.secondGantPart}
          </li>
        </ul>
      </div>
    </SectionTemplate>
  );
}

export default AboutProject;
