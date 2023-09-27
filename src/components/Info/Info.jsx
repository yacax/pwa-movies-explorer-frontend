import React from 'react';
import PropTypes from 'prop-types';
import './Info.css';
import { BASE_ERROR_MESAGE } from '../../utils/constants';

function Info({ isOpen, infoMessage, isMessageType }) {
  return (
    <div
      className={`info ${isMessageType ? 'info_type_positive' : ''}  ${
        isOpen ? 'info_is-open' : ''
      }`}
    >
      <p className={`info__text ${isMessageType ? 'info__text_positive' : ''}`}>
        {infoMessage}
      </p>
    </div>
  );
}

Info.propTypes = {
  isOpen: PropTypes.bool,
  infoMessage: PropTypes.string,
  isMessageType: PropTypes.bool,
};

Info.defaultProps = {
  isOpen: false,
  infoMessage: BASE_ERROR_MESAGE,
  isMessageType: false,
};

export default Info;
