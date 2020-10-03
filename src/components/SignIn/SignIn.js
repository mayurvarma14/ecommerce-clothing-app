import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import './SignIn.scss';

import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onsSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <Input
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
