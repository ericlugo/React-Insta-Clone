import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Post from './Post';

const PostWrapper = styled.div`
  margin-top: 1.6rem;
`;

const PostContainer = (props) => {
  let posts = props.posts;
  return (
    <PostWrapper>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </PostWrapper>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostContainer;
