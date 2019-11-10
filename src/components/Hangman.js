import React from 'react'
import { connect } from 'react-redux'
import './Hangman.css'
import { getWrongLettersLengthSelector } from '../redux/selectors'

class HangMan extends React.Component {
  render() {
    const { wrongLettersLength } = this.props
    return (
      <div className="hangman">
        {wrongLettersLength > 0 && <div className="hangman-head"></div>}
        {wrongLettersLength > 1 && <div className="hangman-body"></div>}
        {wrongLettersLength > 2 && <div className="hangman-left-arm"></div>}
        {wrongLettersLength > 3 && <div className="hangman-right-arm"></div>}
        {wrongLettersLength > 4 && <div className="hangman-left-leg"></div>}
        {wrongLettersLength > 5 && <div className="hangman-right-leg"></div>}
      </div>
    )
    
  }
}

const mapStateToProps = state => ({
  wrongLettersLength: getWrongLettersLengthSelector(state)
})

export default connect(mapStateToProps)(HangMan)
