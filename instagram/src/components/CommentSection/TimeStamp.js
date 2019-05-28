import React from 'react';
import Moment from 'moment';

const TimeStamp = (props) => {
  return <p className='timestamp'>{Moment(props.timestamp, 'MMMM-Do-YYYY, hh-mm-ss a').fromNow()}</p>;
};

export default TimeStamp;
