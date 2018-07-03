import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { default as Home } from './pages/Home/index';
import { default as ParallaxDemo } from './pages/ParallaxDemo/index';
import { default as Oztinate } from './pages/Oztinate/index';

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path='/parallax-demo' component={ParallaxDemo}/>
            <Route path='/oztinate' component={Oztinate}/>
            <Route path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
