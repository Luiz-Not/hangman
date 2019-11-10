import { SET_RIGHT_LETTER, SET_WRONG_LETTER } from "./actionTypes";
import { getWordSelector, getRightLettersSelector, getWrongLettersLengthSelector } from "./selectors"

export const setLetter = letter => async (dispatch, getState) => {
  const state = getState()
  const word = getWordSelector(state)
  const wrongLettersLength = getWrongLettersLengthSelector(state)

  console.log('unca setletter', letter)

  if (wrongLettersLength === 6) {
    return false
  }

  if (word.includes(letter)) {
    await dispatch(setRightLetter(letter))
    dispatch(checkWin())
  } else {
    await dispatch(setWrongLetter(letter))
    dispatch(checkLose())
  }
}

const setRightLetter = letter => ({
  type: SET_RIGHT_LETTER,
  payload: {
    letter
  }
})

const setWrongLetter = letter => ({
  type: SET_WRONG_LETTER,
  payload: {
    letter
  }
})

const checkWin = () => (dispatch, getState) => {
  const state = getState()
  const word = getWordSelector(state)
  const rightLetters = getRightLettersSelector(state)
  const result = Array.prototype.every.call(word, letter => rightLetters.includes(letter))

  if (result) {
    setTimeout(() => {
      alert('Ganhou arrombado')
    }, 0)
    
  }
}

const checkLose = () => (dispatch, getState) => {
  const state = getState()
  const wrongLettersLength = getWrongLettersLengthSelector(state)

  if (wrongLettersLength === 6) {
    setTimeout(() => {
      alert('Perdeu miseravel')
    }, 0)
  }
}

