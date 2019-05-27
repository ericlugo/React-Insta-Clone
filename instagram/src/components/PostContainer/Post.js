import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './postHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = (props) => {
  let postData = props.post;
  return (
    <section className='card post'>
      <PostHeader thumbnailUrl={props.post.thumbnailUrl} username={postData.username} />
      <img src={props.post.imageUrl} alt='content' className='post-image' />
      <CommentSection likes={props.post.likes} timestamp={props.post.timestamp} comments={props.post.comments} />
    </section>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }),
};

export default Post;
