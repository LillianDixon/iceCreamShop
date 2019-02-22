import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home"
import Menu from "./pages/menu"
import History from "./pages/history"
import Catering from "./pages/catering"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/history" component={History} />
              <Route path="/catering" component={Catering} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
