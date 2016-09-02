import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TypingIndicator from './typing-indicator';

class MessageList extends React.Component {

  componentDidUpdate() {
    var node = this.refs.list;

    var messageMargin = 10
    if (node.scrollHeight > (node.clientHeight + messageMargin)) {
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    var typing = (this.props.typing) ? <TypingIndicator/> : null

    return <div className="messages">
      <div ref="list" className="list">
        <ReactCSSTransitionGroup transitionName="fadeInUp" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.props.messages.map((message, index) => (
            <div className={'message ' + message.class} key={index}>{message.text}</div>
          ))}
        </ReactCSSTransitionGroup>
        { typing }
      </div>
    </div>
  }
}

module.exports = MessageList
