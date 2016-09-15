import io from 'socket.io-client'
import EventEmitter from 'events'

//FIXME: Implement events for when message list changes
class ChatSession extends EventEmitter {

  constructor() {

    super()

    this.socket = io(window.location.href)

    this.socket.on('message', function(msg) {
      this.emit('message', {
        class: 'bot',
        text: msg.text,
        attachment: msg.attachment
      })
    }.bind(this));

    this.socket.on('typing', function(msg) {
      this.emit('typing')
    }.bind(this));
  }

  send(item) {
    if (item instanceof File) {
      this.sendFile(item)
    } else {
      this.sendText(item)
    }
  }

  sendText(text) {
    this.socket.emit('message', {text: text})
    this.emit('message', {
      class: 'you',
      text: text
    })
  }

  sendFile(file) {

    var reader = new FileReader()

    reader.onload = function(e) {

      this.emit('message', {
        class: 'you',
        attachment: {
          name: file.name,
          type: file.type,
          data: e.target.result
        }
      })

      this.socket.emit('message', {
        attachments: [
        {
          type: file.type,
          data: e.target.result
        }
      ]})

    }.bind(this)

    reader.readAsDataURL(file)
  }
}

module.exports = ChatSession
