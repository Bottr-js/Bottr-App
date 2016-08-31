import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'
import MessageList from './message-list';
import Composer from './composer';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: []
    }
  }

  componentDidMount() {

    this.socket = io('https://75b2db1e.ngrok.io');

    this.socket.on('message', function(msg) {
      console.log('Received ' + msg.text)

      var newMessages = this.state.messages
      newMessages.push('Bot: ' + msg.text)

      this.setState({
        messages: newMessages
      })
    }.bind(this));

    this.socket.on('typing', function(msg) {
      console.log('Typing')
    });
  }

  render() {
    return (
      <div className="chat">
        <div className="header">
          <h1>Pozi</h1>
        </div>
        <MessageList messages={this.state.messages}/>
        <Composer onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }

  onSubmit(text) {

    var newMessages = this.state.messages
    newMessages.push('You: ' + text)

    this.setState({
      messages: newMessages
    })

    this.socket.emit('message', {text: text})
  }
}

module.exports = Chat
