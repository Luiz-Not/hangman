import React from 'react';
import './App.css';
import Gallows from './components/Gallows'
import Word from './components/Word'
import Alphabet from './components/Alphabet'

function App() {
  return (
    <div className="App">
      <div className="row">
        <Gallows />
        <Word />
      </div>
      <div className="row">
        <Alphabet />
      </div>
    </div>
  );
}

export default App;
