import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostContainer = (props) => {
  let posts = props.posts;
  return (
    <div className='post-container'>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostContainer;
