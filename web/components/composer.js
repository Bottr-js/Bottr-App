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
 // FIXME: Drag and drop for desktop enviroments
 // FIXME: Disable file button when text is sent
  render() {
    return <form className="composer" action="" onSubmit={this.onSubmit.bind(this)}>
      <input ref="text"
      placeholder="Enter Your Message"
      value={this.state.text}
      onChange={this.updateState.bind(this)}
      autoComplete="off"/>
      <input className="hidden" ref="file" type="file"/>
      <div onClick={this.onSendFile.bind(this)}>File</div>
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

  onSendFile() {
    this.refs.file.click()
    //FIXME: Trigger send on file change to something not ""
  }
}

module.exports = Composer
