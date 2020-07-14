import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './App.css';
var name=['a','b','c'];
var pass=['z','y','x'];
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      n: '',
      p:'',
      x:0,
      type:'Signup',
    };
  }
    na= event => {
    this.setState({ n: event.target.value });
  };
 pa=event=>
 {
    this.setState({ p: event.target.value });
 };
  onAddItem = () => {
    var x=this.state.n;
    var y=this.state.p;
   if(this.state.type==="Signup")
   { 

name.push(x);
pass.push(y);
    alert("successfully signed up");
    this.setState({n:'',p:''});
  }
else{
    var f=0;
    for(var z=0;z<name.length;z++){
    if(x===name[z] && y===pass[z])
    {
     f=1;
    }}
    if(f===0)
    {
       alert("wrong password");
    }
    else
       alert("logged in");
     this.setState({n:'',p:''});
   }
  };
 onLo=()=>{
  
  this.setState({type:"Login"});
 }
onSi=()=>{
     this.setState({type:"Signup"});
  }
  render() {
  return (
    <div class="h"><div class="bo"><h1>{this.state.type}</h1>
    <Button variant="contained" color="primary" onClick={this.onSi}>Signup</Button> 
    <Button variant="contained" color="primary" onClick={this.onLo} >Login</Button>
  <TextField id='ff' style={{color:"white"}} label="Username" variant="outlined" type="text" borderColor="coral" value={this.state.n}
          onChange={this.na} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Password" variant="outlined" type="password" borderColor="coral" value={this.state.p}
          onChange={this.pa} /><br/><br/>
        <Button variant="contained" color="primary" onClick={this.onAddItem} disabled={!this.state.p}>{this.state.type}</Button>
        
  </div> </div>
  );
}
}
export default App;
