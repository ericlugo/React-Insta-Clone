import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
`;
const CommentInputField = styled.input`
  background-color: #ffffff;
  border: none;
  color: #999999;
  font-size: 1.6rem;
  padding: 1.6rem;
  width: 90%;
`;
const CommentSubmit = styled.button`
  background-color: #fafafa;
  border-left: 1px solid #e6e6e6;
  color: #999999;
  font-size: 1.6rem;
  padding: 1.6rem;
`;

const CommentInput = (props) => {
  return (
    <InputWrapper>
      <CommentInputField type='text' placeholder='Add a comment...' value={props.comment} onChange={props.handleInput} />
      <CommentSubmit type='submit' onClick={props.addNewComment}>
        Post
      </CommentSubmit>
    </InputWrapper>
  );
};

export default CommentInput;
