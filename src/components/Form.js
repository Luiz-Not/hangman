import React from 'react'
import { withRouter } from 'react-router-dom'

class Form extends React.Component {
  state = {
    word: ''
  }

  handleClick = () => {
    const { history } = this.props
    const { word } = this.state
    if (word) {
      history.push(`/hangman/${window.btoa(word.toLowerCase())}`)
    }
  }

  handleChange = event => {
    this.setState({ word: event.target.value.replace(/[^A-Za-z]/ig, '') })
  }

  render() {
    const { word } = this.state
    return (
      <div className="row">
        <input type="text" name="word" value={word} onChange={this.handleChange} />
        <button onClick={this.handleClick}>OK</button>
      </div>
    )
  }
}

export default withRouter(Form)
