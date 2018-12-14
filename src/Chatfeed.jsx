import React, {Component} from 'react';
import Message from './Chatmessage.jsx';

export default class MessageList extends Component {
    render() {
        return (
            <main className="messages">
                {this.props.messages.map(function(message) {
                    return <Message message={message} key={message.id}/>
                })}
            </main>
        )
    }
}