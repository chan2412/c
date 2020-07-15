import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
class App extends Component {
    render() {
        return (
             <Router>
          <Switch>
            <Route exact path="/c" component={Login} ></Route>
            <Route exact path="/Login" component={Login} ></Route>
            <Route exact path="/Home" component={Home} ></Route>
            <Route exact path="/Signup" component={Signup} ></Route>
          </Switch>
      </Router>
        );
    }
}
export default (App);