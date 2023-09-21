import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';

function Info({ isOpen, infoMessage, infoType }) {
  return (
    <div
      className={`info ${infoType ? 'info_type_positive' : ''}  ${
        isOpen ? 'info_is-open' : ''
      }`}
    >
      <p className={`info__text ${infoType ? 'info__text_positive' : ''}`}>
        {infoMessage}
      </p>
    </div>
  );
}

Info.propTypes = {
  isOpen: PropTypes.bool,
  infoMessage: PropTypes.string,
  infoType: PropTypes.bool,
};

Info.defaultProps = {
  isOpen: false,
  infoMessage: 'Something went wrong! Please try again',
  infoType: true,
};

export default Info;
