import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/img/instagram_logo.png';

const Branding = styled.div`
  align-items: flex-end;
  display: flex;
  padding: 1rem;
  .icon {
    border-right: 1px solid black;
    box-sizing: content-box;
    font-size: 2.4rem;
    padding-right: 1.2rem;
  }
`;
const Logotype = styled.span`
  background: url('${logo}') no-repeat center;
  background-size: contain;
  display: inline-block;
  height: 3.3rem;
  margin: 0 0 -0.9rem 1.2rem;
  width: 11.4rem;
`;

const branding = (props) => {
  return (
    <Branding logo={logo}>
      <FontAwesomeIcon className='icon' icon={['fab', 'instagram']} />
      <Logotype img={'../assets/img/instagram_logo.png'} />
    </Branding>
  );
};

export default branding;
