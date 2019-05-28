import React from 'react';
import Comment from './Comment';
import TimeStamp from './TimeStamp';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
    };
  }
  handleInput = (event) => {
    this.setState({ comment: event.target.value });
  };
  addNewComment = (event) => {
    event.preventDefault();
    let comment = { username: 'anonymous', text: this.state.comment };
    let comments = this.state.comments.slice();
    comments.push(comment);
    this.setState({ comments, comment: '' });
  };
  render() {
    return (
      <section className='comment-section'>
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <TimeStamp timestamp={this.props.timestamp} />
        <CommentInput comment={this.state.comment} handleInput={this.handleInput} addNewComment={this.addNewComment} />
      </section>
    );
  }
}

export default CommentSection;
