import React, {Component} from 'react';

export default class Chatbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.currentUser,
            content: ''
        };
    }

    handleOnContent(event) {
        this.setState({content: event.target.value})
    };

    handleOnEnter(event) {
        if (event.key === "Enter") {
            this.props.handleSendMessage(this.state);
            this.setState({content:''});
        }
    };

    render() {
        return (
            <div className="chatbar">
                <input 
                    className="chatbar-message"
                    placeholder="Press Enter to send"
                    value={this.state.content}
                    onChange={this.handleOnContent.bind(this)}
                    onKeyDown={this.handleOnEnter.bind(this)}
                />
            </div>
        )}
}