import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Branding = (props) => {
  return (
    <div className='branding'>
      <FontAwesomeIcon className='instagram-icon' icon={['fab', 'instagram']} />
      <span className='instagram-logotype' />
    </div>
  );
};

export default Branding;
