import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'
import MessageList from './message-list';
import Composer from './composer';

//FIXME: Tidy up
class Chat extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      typing: false
    }
  }

  componentDidMount() {

    this.socket = io('http://localhost:3000');

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
        <Composer onSubmit={this.onSubmit.bind(this)} onUpload={this.onUpload.bind(this)}/>
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

  onUpload(files) {

     for (var i = 0, f; f = files[i]; i++) {

       if (!f.type.match('image.*')) {
         console.error("Pozi App doesn't support abitary uploads just yet")
         continue;
       }

       var type = f.type
       var reader = new FileReader()
       var chat = this

       reader.onload = (function(theFile) {
         return function(e) {

           var newMessages = chat.state.messages
           newMessages.push({
             class: 'you',
             attachment: {
               type: type,
               data: e.target.result
             }
           })

           chat.setState({
             messages: newMessages,
             typing: chat.state.typing
           })
         };
       })(f);

       // Read in the image file as a data URL.
       reader.readAsDataURL(f);
     }
  }
}

module.exports = Chat
