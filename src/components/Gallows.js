import React from 'react'
import './Gallows.css'
import Hangman from './Hangman'

class Gallows extends React.Component {
  render() {
    return(
      <div className="gallows">
        <Hangman />
      </div>
    )
  }
}

export default Gallows
