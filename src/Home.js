import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import {s} from "./Signup";
import {c} from "./Login";
import './App.css';
class Home extends Component {
   onLo=()=>{
        this.props.history.push('/');
      }
    render() {

        return (
        <div class="h">
        <div class="bo">
    <Button variant="contained" color="primary" onClick={this.onLo} >Logout</Button><br/><br/><br/>
   Hello
        </div>
        </div>
        );
    }
}
export default (Home);