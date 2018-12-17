import React, {Component} from 'react';
import Chatbar from './Chatbar.jsx';

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <span className="message-username">{this.props.message.username}</span>
                <span className="message-content">{this.props.message.content}</span>
            </div>
        );
    }
}