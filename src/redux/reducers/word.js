import { SET_RIGHT_LETTER, SET_WRONG_LETTER } from "../actionTypes";

const initialState = {
  word: 'arrombado',
  rightLetters: [],
  wrongLetters: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_RIGHT_LETTER: {
      const { letter } = action.payload;
      return {
        ...state,
        rightLetters: [...state.rightLetters, letter]
      };
    }
    case SET_WRONG_LETTER: {
      const { letter } = action.payload;
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, letter]
      };
    }
    default:
      return state;
  }
}
