import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

import PropTypes from 'prop-types';

import React from 'react';

export function Icon({ icon, isActive, }) {

  return (
    <FontAwesomeIcon style={{
      width: 30,
      height: 38,
    }} color={isActive ? 'rgba(67, 149, 57, 0.5)' : '#999'} icon={icon} />
  );

}

Icon.propTypes = {
  icon: PropTypes.any,
  isActive: PropTypes.bool,
};
