import React, { Component } from 'react';
import './App.css';
import Heading from './Header.jsx';
import Player from './Player.jsx';
import LoginPage from './Signin.jsx';
import RegisterPage from './Signup.jsx';
import User from './User.jsx';
import Room from './RoomComp.jsx';
import Chatbar from './Chatbar.jsx';
import Message from './Chatmessage.jsx';
import MessageList from './Chatfeed.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "USER" },
      messages: [],
      numberOfOnlineUsers: 0
    };
    this.ws = new WebSocket('ws://0.0.0.0:3001');
  }

  handleSendMessage = (newMessage) => {
    this.setState({currentUser: {name: newMessage.username}});
    newMessage.type = "postMessage";
    this.ws.send(JSON.stringify(newMessage));
  };

  componentDidMount() {
    this.ws.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      switch (newMessage.type) {
        case "incomingMessage":
          const messages = this.state.messages.concat(newMessage);
          this.setState({messages});
          break;
        case "numberOfOnlineUsers":
          this.setState({numberOfOnlineUsers: newMessage.content});
          break;
        default:
          throw new Error("Unknown type: " + newMessage.type);
      }
    }
  }

  render() {
    return (
      <div>  
          <Heading/>
          <User/>
          <Player/>
          <LoginPage/>
          <RegisterPage/>
          <Room/>
          <Chatbar/>
          <Message/>
          <MessageList/>
      </div>
    );
  }
}

export default App;
