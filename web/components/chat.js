import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'
import MessageList from './message-list';
import Composer from './composer';

class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typing: false
    }
  }

  componentDidMount() {

    this.socket = io('http://75b2db1e.ngrok.io');

    this.socket.on('message', function(msg) {
      console.log('Received ' + msg.text)

      var newMessages = this.state.messages
      newMessages.push({
        class: 'bot',
        text: msg.text
      })

      this.setState({
        messages: newMessages,
        typing: false
      })
    }.bind(this));

    this.socket.on('typing', function(msg) {
      this.setState({
        messages: this.state.messages,
        typing: true
      })
    });
  }

  render() {
    return (
      <div className="chat">
        <div className="header">
          <h1>Pozi</h1>
        </div>
        <MessageList messages={this.state.messages} typing={this.state.typing}/>
        <Composer onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }

  onSubmit(text) {

    var newMessages = this.state.messages
    newMessages.push({
      class: 'you',
      text: text
    })

    this.setState({
      messages: newMessages,
      typing: this.state.typing
    })

    this.socket.emit('message', {text: text})
  }
}

module.exports = Chat
