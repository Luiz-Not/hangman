import React from 'react'
import Gallows from './Gallows'
import Word from './Word'
import Alphabet from './Alphabet'

import { setWord } from '../redux/actions'
import { connect } from 'react-redux'

class Page extends React.Component {
  componentDidMount() {
    const { setWord, word } = this.props
    setWord(word)
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <Gallows />
          <Word />
        </div>
        <div className="row">
          <Alphabet />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { setWord }
)(Page)