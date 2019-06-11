import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';

const PostCard = styled.section`
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  color: #000000;
  display: block;
  position: relative;
  margin: 1.6rem auto 3.2rem;
  max-width: 60rem;
`;
const PostImage = styled.div`
  img {
    height: 60rem;
    width: 100%;
  }
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
    };
  }
  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <PostCard>
        <PostHeader thumbnailUrl={this.props.post.thumbnailUrl} username={this.props.post.username} />
        <PostImage>
          <img src={this.props.post.imageUrl} alt='content' />
        </PostImage>
        <LikeSection incrementLikes={this.incrementLikes} likes={this.state.likes} />
        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
      </PostCard>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
  }),
};

export default Post;
