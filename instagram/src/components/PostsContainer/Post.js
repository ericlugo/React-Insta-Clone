import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';

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
      <section className='card post'>
        <PostHeader thumbnailUrl={this.props.post.thumbnailUrl} username={this.props.post.username} />
        <img src={this.props.post.imageUrl} alt='content' className='post-image' />
        <LikeSection incrementLikes={this.incrementLikes} likes={this.state.likes} />
        <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp} />
      </section>
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
