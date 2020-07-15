import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import {s} from "./Signup";
import {c} from "./Login";
import './App.css';
class Home extends Component {
   onLo=()=>{
        this.props.history.push('/c');
      }
    render() {

        return (
        <div class="h">
        <div class="bo">
    <Button variant="contained" color="primary" onClick={this.onLo} >Logout</Button><br/><br/><br/>
    <p>Name :{s.obj.name[c]}<br/>
    Year:{s.obj.Year[c]} <br/>
    Department:{s.obj.Dept[c]}<br/>
    Roll no:{s.obj.Rno[c]}<br/>
    </p>
          Hello {s.obj.name[c]}
        </div>
        </div>
        );
    }
}
export default (Home);