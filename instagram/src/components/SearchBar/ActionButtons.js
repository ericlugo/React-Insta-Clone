import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionButtons = (props) => {
  return (
    <div className='action-buttons'>
      <FontAwesomeIcon icon={['far', 'compass']} />
      <FontAwesomeIcon icon={['far', 'heart']} />
      <FontAwesomeIcon icon={['far', 'user']} />
    </div>
  );
};

export default ActionButtons;
