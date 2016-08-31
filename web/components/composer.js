import React from 'react';
import ReactDOM from 'react-dom';

class Composer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  render() {
    return <form action="" onSubmit={this.onSubmit.bind(this)}>
      <input ref="text" value={this.state.text} onChange={this.updateState.bind(this)} autoComplete="off"/>
      <button>Send</button>
    </form>
  }

  updateState(e) {
    this.setState({text: e.target.value});
  }

  clearInput() {
    this.setState({text: ''});
    ReactDOM.findDOMNode(this.refs.text).focus();
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.refs.text.value)
    this.clearInput()
  }
}

module.exports = Composer
