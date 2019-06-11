import React from 'react';
import Moment from 'moment';
import styled from 'styled-components';

const Timestamp = styled.p`
  color: #999999;
  font-size: 1.2rem;
  margin-left: 1.6rem;
  padding: 0.8rem 0;
  text-align: left;
  text-transform: uppercase;
`;

const TimeStamp = (props) => {
  return <Timestamp>{Moment(props.timestamp, 'MMMM-Do-YYYY, hh-mm-ss a').fromNow()}</Timestamp>;
};

export default TimeStamp;
