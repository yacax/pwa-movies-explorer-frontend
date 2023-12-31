import React from 'react';
import './Techs.css';
import SectionTemplate from '../SectionTemplate/SectionTemplate';

function Techs() {
  return (
    <SectionTemplate
      title="Технологии"
      id="tech"
    >
      <div className="techs">
        <h3 className="techs__header">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list-item">HTML</li>
          <li className="techs__list-item">CSS</li>
          <li className="techs__list-item">JS</li>
          <li className="techs__list-item">React</li>
          <li className="techs__list-item">Git</li>
          <li className="techs__list-item">Express.js</li>
          <li className="techs__list-item">mongoDB</li>
        </ul>
      </div>

    </SectionTemplate>
  );
}

export default Techs;
