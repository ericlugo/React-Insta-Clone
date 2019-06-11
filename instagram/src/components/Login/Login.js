import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false,
    };
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const password = '';
    const username = rememberMe ? localStorage.getItem('username') : '';
    this.setState({ username, password, rememberMe });
  }
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };
  login = (event) => {
    localStorage.setItem('rememberMe', this.state.rememberMe);
    localStorage.setItem('username', this.state.rememberMe ? this.state.username : '');
    localStorage.setItem('loggedIn', this.state.username ? true : false);
  };

  render() {
    return (
      <form className='login-form' onSubmit={this.login}>
        <label>
          Username:
          <input name='username' type='text' value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name='password' type='text' value={this.state.password} onChange={this.handleChange} />
        </label>
        <label>
          <input name='rememberMe' type='checkbox' checked={this.state.rememberMe} onChange={this.handleChange} />
          Remember Me
        </label>
        <button type='submit' onClick={this.login}>
          Login
        </button>
      </form>
    );
  }
}

export default Login;
