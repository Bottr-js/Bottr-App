import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MessageList extends React.Component {

  componentDidUpdate() {
    var node = this.refs.list;

    if (node.scrollHeight > (node.clientHeight + 10)) {
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    var typing = (this.props.typing) ? <div className="message typing">...</div> : null

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
