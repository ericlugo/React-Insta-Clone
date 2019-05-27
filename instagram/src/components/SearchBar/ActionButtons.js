import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionButtons = (props) => {
  return (
    <div className='action'>
      <FontAwesomeIcon className='icon' icon={['far', 'compass']} />
      <FontAwesomeIcon className='icon' icon={['far', 'heart']} />
      <FontAwesomeIcon className='icon' icon={['far', 'user']} />
    </div>
  );
};

export default ActionButtons;
