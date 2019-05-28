import React from 'react';

const CommentInput = (props) => {
  return (
    <form className='input-wrapper'>
      <input className='comment-input' type='text' placeholder='Add a comment...' value={props.comment} onChange={props.handleInput} />
      <button className='comment-submit' type='submit' onClick={props.addNewComment}>
        Post
      </button>
    </form>
  );
};

export default CommentInput;
