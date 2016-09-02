import React from 'react';
import ReactDOM from 'react-dom';

class Composer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

 // FIXME: Paperclip icon for file
 // FIXME: Trigger file prompt on click
 // FIXME: Drag and drop for desktop enviroments
  render() {
    return <form className="composer" action="" onSubmit={this.onSubmit.bind(this)}>
      <input ref="text"
      placeholder="Enter Your Message"
      value={this.state.text}
      onChange={this.updateState.bind(this)}
      autoComplete="off"/>
      <div>File</div>
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
