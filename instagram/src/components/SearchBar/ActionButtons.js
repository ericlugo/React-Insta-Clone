import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Action = styled.div`
  .icon {
    font-size: 2.4rem;
    margin: 1.2rem;
  }
`;

const actionButtons = (props) => {
  return (
    <Action>
      <FontAwesomeIcon className='icon' icon={['far', 'compass']} />
      <FontAwesomeIcon className='icon' icon={['far', 'heart']} />
      <FontAwesomeIcon className='icon' icon={['far', 'user']} />
    </Action>
  );
};

export default actionButtons;
