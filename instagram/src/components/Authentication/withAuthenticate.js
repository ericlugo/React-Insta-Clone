import React from 'react';

const withAuthenticate = (PostsPage) => (LoginPage) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }
    componentDidMount() {
      this.setState({
        loggedIn: localStorage.getItem('username') ? true : false,
      });
    }
    render() {
      return this.state.loggedIn ? <PostsPage /> : <LoginPage />;
    }
  };

export default withAuthenticate;
