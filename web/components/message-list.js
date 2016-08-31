import React from 'react';
import ReactDOM from 'react-dom';

class MessageList extends React.Component {

  render() {
    return <div className="messages">
      <div className="list">
      {this.props.messages.map((message, index) => (
        <div className={'message ' + message.class} key={index}>{message.text}</div>
      ))}
      </div>
    </div>
  }
}

module.exports = MessageList
