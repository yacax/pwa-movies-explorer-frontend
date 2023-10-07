import React from 'react';
import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';
import SectionTemplate from '../SectionTemplate/SectionTemplate';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import useTranslation from '../../../hooks/useTranslation';

function AboutMe() {
  const { language } = React.useContext(CurrentUserContext);
  const translation = useTranslation(language);
  return (
    <SectionTemplate
      title={translation.MAIN_CONTENT.ABOUT_STUDENT}
      id="student"
    >
      <div className="about-me">
        <img
          className="about-me__avatar"
          src={avatar}
          alt={translation.MAIN_CONTENT.ABOUT_STUDENT_ALT}
        />
        <div className="about-me__summary">
          <h2 className="about-me__title">
            {translation.MAIN_CONTENT.ABOUT_STUDENT_TITLE}
          </h2>
          <h3 className="about-me__subtitle">
            {translation.MAIN_CONTENT.ABOUT_STUDENT_SUBTITLE}
          </h3>
          <p className="about-me__text">
            {translation.MAIN_CONTENT.ABOUT_STUDENT_TEXT}
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}

export default AboutMe;
