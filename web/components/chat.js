import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import MessageList from './message-list'
import Composer from './composer'
import ChatSession from './chat-session'
import Dropzone from 'react-dropzone'

// FIXME:
// - Update open to use dropzone
// - dropzone hover effect
// - and to generate preview
class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typing: false
    }

    this.session = new ChatSession()
  }

  componentDidMount() {

    var messages = this.state.messages

    this.session.on('message', function(message) {

      messages.push(message)

      this.setState({
        messages: messages,
        typing: this.props.typing && message.class !== 'bot'
      })

    }.bind(this))

    this.session.on('typing', function(msg) {
      this.setState({
        typing: true
      })
    }.bind(this));
  }

  render() {
    return (
      <Dropzone className="chat" onDrop={this.onUpload.bind(this)}>
        <div className="header">
          <h1>Bottr</h1>
        </div>
        <MessageList messages={this.state.messages} typing={this.state.typing}/>
        <Composer onSubmit={this.onSubmit.bind(this)} onUpload={this.onUpload.bind(this)}/>
      </Dropzone>
    )
  }

  onSubmit(text) {
    this.session.send(text)
  }

  onUpload(files) {
     for (var i = 0, f; f = files[i]; i++) {
       this.session.send(f)
     }
  }
}

module.exports = Chat
