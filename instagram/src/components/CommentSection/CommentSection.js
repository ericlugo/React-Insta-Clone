import React from 'react';
import Moment from 'moment';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CommentSection = (props) => {
  return (
    <section className='comment-section'>
      <div className='reaction-bar'>
        <span>
          <FontAwesomeIcon icon={['far', 'heart']} />
          <FontAwesomeIcon icon={['far', 'comment']} />
          <FontAwesomeIcon icon={['far', 'share-square']} />
        </span>
        <FontAwesomeIcon icon={['far', 'bookmark']} />
      </div>
      <p className='like-counter'>{props.likes} likes</p>
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <p className='timestamp'>{Moment(props.timestamp, 'MMMM-Do-YYYY, hh-mm-ss a').fromNow()}</p>
      <form>
        <input type='text' placeholder='Add a comment...' />
      </form>
    </section>
  );
};

export default CommentSection;
