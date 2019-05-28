import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser, faComment, faShareSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './assets/dummy-data';
import './App.sass';

library.add(
  faInstagram,
  faCompass,
  faHeart,
  faUser,
  faComment,
  faShareSquare,
  faBookmark,
  faSearch,
  faEllipsisH,
  // more icons can go here as needed
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({
      posts: dummyData,
    });
  }
  render() {
    return (
      <div className='App'>
        <SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
