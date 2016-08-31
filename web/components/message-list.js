import React from 'react';
import ReactDOM from 'react-dom';

class MessageList extends React.Component {

  render() {
    return <div className="messages">
      <div className="list">
      {this.props.messages.map(message => (
        <div className="message" key={message}>{message}</div>
      ))}
      </div>
    </div>
  }
}

module.exports = MessageList
