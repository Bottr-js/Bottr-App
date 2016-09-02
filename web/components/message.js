import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    if (this.props.message.hasOwnProperty('attachment')) {
      return <div className={'message ' + this.props.message.class}>
      <img src={this.props.message.attachment.data}/>
      </div>
    } else {
      return <div className={'message ' + this.props.message.class}>
      {this.props.message.text}
      </div>
    }
  }
}

module.exports = Message
