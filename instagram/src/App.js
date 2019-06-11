import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser, faComment, faShareSquare, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import PostsPage from './components/PostsContainer/PostsPage';
import LoginPage from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

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

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
