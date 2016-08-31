import React from 'react';
import ReactDOM from 'react-dom';

class MessageList extends React.Component {

  render() {

    var typing = (this.props.typing) ? <div className="typing">...</div> : null

    return <div className="messages">
      <div className="list">
        {this.props.messages.map((message, index) => (
          <div className={'message ' + message.class} key={index}>{message.text}</div>
        ))}
        { typing }
      </div>
    </div>
  }
}

module.exports = MessageList
