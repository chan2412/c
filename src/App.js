import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
class App extends Component {
    render() {
        return (
             <Router>
        <div><Link to="/" > Login</Link>
        <Link to="/Signup">Signup</Link>
          <Switch>
            <Route exact path="/" component={Login} ></Route>
            <Route exact path="/Login" component={Login} ></Route>
            <Route exact path="/Home" component={Home} ></Route>
            <Route exact path="/Signup" component={Signup} ></Route>
          </Switch>
          Hello world
        </div>
      </Router>
        );
    }
}
export default (App);