import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TypingIndicator from './typing-indicator';
import Message from './message';

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
        <ReactCSSTransitionGroup transitionName="fadeInUp" transitionEnterTimeout={500} transitionLeaveTimeout={1}>
          {this.props.messages.map((message, index) => (
            <Message key={index} message={message}/>
          ))}
          { typing }
        </ReactCSSTransitionGroup>
      </div>
    </div>
  }
}

module.exports = MessageList
