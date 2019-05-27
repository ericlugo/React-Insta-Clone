import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Branding = (props) => {
  return (
    <div className='branding'>
      <FontAwesomeIcon className='icon' icon={['fab', 'instagram']} />
      <span className='logotype' />
    </div>
  );
};

export default Branding;
