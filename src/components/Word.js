import React from 'react'
import { connect } from 'react-redux'
import './Word.css'
import { getWordSelector, getRightLettersSelector } from '../redux/selectors'

class Word extends React.Component {
  render() {
    const { word, rightLetters } = this.props
    return (
      <div className="word">
        {Array.prototype.map.call(word, (letter, index) => {
          return (
            <span key={`${letter}-${index}`}>
              {rightLetters.includes(letter) ? letter : ' '}
            </span>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  word: getWordSelector(state),
  rightLetters: getRightLettersSelector(state)
})

export default connect(mapStateToProps)(Word)
