import React, { Component } from 'react';
import './App.css';
import Heading from './Header.jsx';
import Player from './Player.jsx';
import LoginPage from './Signin.jsx';
import RegisterPage from './Signup.jsx';
import User from './User.jsx';
import Room from './RoomComp.jsx';

class App extends Component {
  render() {
    return (
      <div>  
          <Heading/>
          <User/>
          <Player/>
          <LoginPage/>
          <RegisterPage/>
          <Room/>
      </div>
    );
  }
}

export default App;
