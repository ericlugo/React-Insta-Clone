import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeedbackBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.8rem;
  svg {
    font-size: 2.4rem;
    margin: 0.8rem;
  }
`;
const LikeCounter = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 1.6rem;
  text-align: left;
`;

const LikeSection = (props) => {
  return (
    <div>
      <FeedbackBar>
        <span>
          <FontAwesomeIcon onClick={props.incrementLikes} icon={['far', 'heart']} />
          <FontAwesomeIcon icon={['far', 'comment']} />
          <FontAwesomeIcon icon={['far', 'share-square']} />
        </span>
        <FontAwesomeIcon icon={['far', 'bookmark']} />
      </FeedbackBar>
      <LikeCounter>{props.likes} likes</LikeCounter>
    </div>
  );
};

export default LikeSection;
