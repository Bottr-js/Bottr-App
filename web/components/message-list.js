import React from 'react';
import ReactDOM from 'react-dom';

class MessageList extends React.Component {

  render() {
    return <ul className="messages">
    {this.props.messages.map(message => (
      <li key={message}>{message}</li>
    ))}
    </ul>
  }
}

module.exports = MessageList
