import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jumbotron from './components/Jumbotron.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Saved from './components/Saved.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Jumbotron />
          <Nav />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
