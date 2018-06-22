import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { default as Home } from './pages/Home/index';
import { default as ParallaxDemo } from './pages/ParallaxDemo/index';


class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path='/parallax-demo' component={ParallaxDemo}/>
            <Route path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
