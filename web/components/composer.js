import React from 'react';
import ReactDOM from 'react-dom';

class Composer extends React.Component {

  render() {
    return <form action="" onSubmit={this.onSubmit.bind(this)}>
      <input ref="text" autoComplete="off"/><button>Send</button>
    </form>
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.refs.text.value)
  }
}

module.exports = Composer
