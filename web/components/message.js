import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    var message = this.props.message

    return <div className={'message ' + message.class}>
    {this.renderContents()}
    </div>
  }

  renderContents() {
    var message = this.props.message
    var attachment = message.attachment
    var attachmentType = (attachment) ? attachment.type : 'none'

    if (attachmentType.match('image.*') && attachment.data) {
      return <img src={attachment.data}/>
    } else if (attachmentType.match('image.*') && attachment.url) {
      return <img src={attachment.url}/>
    } else if (!attachmentType.match('none.*')) {
      return <span><img src="images/file.png"/> {attachment.name}</span>
    } else {
      return message.text
    }
  }
}

module.exports = Message
