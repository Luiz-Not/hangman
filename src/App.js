import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import './App.css';
import Page from './components/Page'
import Form from './components/Form'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hangman/:id" children={<Hangman />} />
          <Route path="/" children={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <Form />
}

function  Hangman() {
  let { id } = useParams()
  return <Page word={id} />
}
