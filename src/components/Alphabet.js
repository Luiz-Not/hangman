import React from 'react'
import { connect } from 'react-redux'
import './Alphabet.css'
import { setLetter } from '../redux/actions'
import alphabet from '../alphabet'
import { getWrongLettersSelector, getRightLettersSelector } from '../redux/selectors'

class Alphabet extends React.Component {
  render() {
    const { setLetter, wrongLetters, rightLetters } = this.props
    return (
      <div className="alphabet">
        {alphabet.map(letter => {
          let letterClass = rightLetters.includes(letter) ? 'letter-right' : ''
          if (letterClass === '') {
            letterClass = wrongLetters.includes(letter) ? 'letter-wrong' : ''
          }
          return (
            <span key={letter} onClick={() => !letterClass && setLetter(letter)} className={letterClass}>
              {letter}
            </span>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  wrongLetters: getWrongLettersSelector(state),
  rightLetters: getRightLettersSelector(state)
})

export default connect(
  mapStateToProps,
  { setLetter }
)(Alphabet)
