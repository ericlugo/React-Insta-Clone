import React from 'react';
import styled from 'styled-components';

const CommentEntry = styled.p`
  font-size: 1.6rem;
  text-align: left;
  padding: 0.8rem 1.6rem 0;
  span {
    font-weight: 600;
  }
`;

const Comment = (props) => {
  return (
    <CommentEntry>
      <span>{props.comment.username}</span> {props.comment.text}
    </CommentEntry>
  );
};

export default Comment;
