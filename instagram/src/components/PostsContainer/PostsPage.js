import React from 'react';
import dummyData from '../../assets/dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: '',
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }
  handleInput = (event) => {
    this.setState({ filter: event.target.value });
  };
  postFilter() {
    if (this.state.filter === '') return this.state.posts;
    else return this.state.posts.filter((post) => post.username.includes(this.state.filter));
  }
  render() {
    return (
      <div>
        <SearchBar handleInput={this.handleInput} />
        <PostContainer posts={this.postFilter()} />
      </div>
    );
  }
}

export default PostsPage;
