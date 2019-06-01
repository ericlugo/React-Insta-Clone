import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LikeSection = (props) => {
  return (
    <div className='like-section'>
      <div className='feedback-bar'>
        <span>
          <FontAwesomeIcon onClick={props.incrementLikes} icon={['far', 'heart']} />
          <FontAwesomeIcon icon={['far', 'comment']} />
          <FontAwesomeIcon icon={['far', 'share-square']} />
        </span>
        <FontAwesomeIcon icon={['far', 'bookmark']} />
      </div>
      <p className='like-counter'>{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
