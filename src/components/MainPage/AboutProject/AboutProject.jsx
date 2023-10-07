import React, { useContext } from 'react';
import './AboutProject.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import useTranslation from '../../../hooks/useTranslation';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function AboutProject() {
  const { language } = useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <SectionTemplate title={translation.MAIN_CONTENT.ABOUT_PROJECT} id="about">
      <div className="about-project">
        <table className="about-project__table">
          <thead>
            <tr>
              <th className="about-project__table-header">
                {translation.MAIN_CONTENT.ABOUT_PROJECT_FIRST_COLUMN_TITLE}
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
                {translation.MAIN_CONTENT.ABOUT_PROJECT_FIRST_COLUMN_TEXT}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="about-project__table">
          <thead>
            <tr>
              <th className="about-project__table-header">
                {translation.MAIN_CONTENT.ABOUT_PROJECT_SECOND_COLUMN_TITLE}
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
                {translation.MAIN_CONTENT.ABOUT_PROJECT_SECOND_COLUMN_TEXT}
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="about-project__gant-container">
          <li
            className="about-project__gant about-project__gant_color_green"
            data-content={translation.MAIN_CONTENT.FIRST_GANT_COMMENT}
          >
            {translation.MAIN_CONTENT.FIRST_GANT_PART}
          </li>
          <li
            className="about-project__gant about-project__gant_color_grey"
            data-content={translation.MAIN_CONTENT.SECOND_GANT_COMMENT}
          >
            {translation.MAIN_CONTENT.SECOND_GANT_PART}
          </li>
        </ul>
      </div>
    </SectionTemplate>
  );
}

export default AboutProject;
