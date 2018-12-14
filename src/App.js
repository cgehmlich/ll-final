import React, { Component } from 'react';
import './App.css';
import Heading from './Header.jsx';
import Player from './player.jsx';
import LoginPage from './Signin.jsx';
import RegisterPage from './Signup.jsx';

class App extends Component {
  render() {
    return (
      <div>  
          <Heading/>
          <LoginPage/>
          <RegisterPage/>
      </div>
    );
  }
}

export default App;
