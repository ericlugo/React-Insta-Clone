import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser, faComment, faShareSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './components/SearchBar/SearchBar';
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
      posts: dummyData,
    };
  }
  render() {
    // console.log(dummyData);
    // console.log(this.state.posts);
    return (
      <div className='App'>
        <SearchBar /* key='searchBar' */ />
        <PostContainer /* key='postContainer' */ posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
