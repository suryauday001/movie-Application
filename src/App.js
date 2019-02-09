import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.css';
import './scss/materialdesignicons.css'
import { Route, Link, Switch } from 'react-router-dom';
import Loginform from './pages/loginform';
import MovieList from './pages/movielist';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Loginform} />
          <Route path="/movies" component={MovieList} />
        </Switch>
      </React.Fragment>

    );
  }
}
export default App;
