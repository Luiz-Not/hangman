export const getWordSelector = state => state.store.word;
export const getRightLettersSelector = state => state.store.rightLetters;
export const getWrongLettersSelector = state => state.store.wrongLetters;
export const getWrongLettersLengthSelector = state => getWrongLettersSelector(state).length
