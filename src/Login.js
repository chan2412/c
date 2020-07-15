import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import {s} from "./Signup";
import './App.css';
export var c=0;

class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      n: '',
      p:'',
      x:0,
      type:'Login',
    };
  }
    na= event => {this.setState({ n: event.target.value });
  };
 pa=event=>
 {
    this.setState({ p: event.target.value });
 };
  onAddItem = () => {
    var x=this.state.n;
    var y=this.state.p;

    var f=0;
    for(var z=0;z<s.arr.length;z++){
    if(x===s.arr[z] && y===s.pass[z])
    {
     f=1;
     break;
    }
  }c=z;
    if(f===0)
    {
       alert("wrong password");
    }
    else
       this.props.history.push('/Home');
     this.setState({n:'',p:''});
  };
onSi=()=>{
     this.props.history.push('/Signup');
  }
  render() {
  return (
    <div class="h">
    <AppBar  style={{alignItems:"center",fontSize:"20px"}} color="primary">STUDENT FORM</AppBar><div class="bo"><h1>{this.state.type}</h1>
    <Button variant="contained" color="primary" onClick={this.onSi}>Signup</Button> &emsp;&emsp;&emsp;
    <Button variant="contained" color="primary" >Login</Button><br/><br/><br/>
  <TextField id='ff' style={{color:"white"}} label="Username" variant="outlined" type="text" borderColor="coral" value={this.state.n}
          onChange={this.na} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Password" variant="outlined" type="password" borderColor="coral" value={this.state.p}
          onChange={this.pa} /><br/><br/>
        <Button variant="contained" color="primary" onClick={this.onAddItem} disabled={!this.state.p}>{this.state.type}</Button>
  </div> </div>
  );
}
}
export default Login;

