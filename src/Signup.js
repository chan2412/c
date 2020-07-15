import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './App.css';
export var s={
  "arr":["bc","a","3"],
  "pass":["z","y","c"],
  "obj":{"name":["a","b","c"],"Year":[1,2,3],"Dept":["CSE","EEE","ECE"],"Rno":[1,2,3]}
}
class Signup extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      n: '',
      p:'',
      a:'',
      b:'',
      c:'',
      d:'',
      x:0,
      type:'Signup',
    };
  }
    na= event => {this.setState({ n: event.target.value });
  };
 pa=event=>
 {
    this.setState({ p: event.target.value });
 }; 
 ca=event=>
 {
    this.setState({ c: event.target.value });
 };
  da=event=>
 {
    this.setState({ d: event.target.value });
 };
aa=event=>
 {
    this.setState({ a: event.target.value });
 };
 ba=event=>
 {
    this.setState({ b: event.target.value });
 };
  onAddItem = () => {
    var x=this.state.n;
    var y=this.state.p;
    var k=this.state.a;
    var l=this.state.b;
    var m=this.state.c;
    var n=this.state.d;

s.arr.push(x);
s.pass.push(y);
s.obj.name.push(k);
s.obj.Year.push(l);
s.obj.Dept.push(m);
s.obj.Rno.push(n);
    alert("successfully signed up");
    this.setState({n:'',p:'',a:'',b:'',c:'',d:''});
  };
 onLo=()=>{
  this.props.history.push('/c');
 }
  render() {
  return (
    <div class="h"><div class="bo">
     <h1>{this.state.type}</h1>
    <Button variant="contained" color="primary" >Signup</Button> &emsp;&emsp;&emsp;
    <Button variant="contained" color="primary" onClick={this.onLo} >Login</Button><br/><br/><br/>
  <TextField id='ff' style={{color:"white"}} label="Username" variant="outlined" type="text" borderColor="coral" value={this.state.n}
          onChange={this.na} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Password" variant="outlined" type="password" borderColor="coral" value={this.state.p}
          onChange={this.pa} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Name" variant="outlined" type="text" borderColor="coral" value={this.state.a}
          onChange={this.aa} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Year" variant="outlined" type="number" borderColor="coral" value={this.state.b}
          onChange={this.ba} /><br/><br/>   
            <TextField id='ff' style={{color:"white"}} label="Department" variant="outlined" type="text" borderColor="coral" value={this.state.c}
          onChange={this.ca} /><br/><br/>
          <TextField id='ff' style={{color:"white"}} label="Roll no" variant="outlined" min="5999999999" max="9999999999" type="number"  borderColor="coral" value={this.state.d}
          onChange={this.da} /><br/><br/>  
        <Button variant="contained" color="primary" onClick={this.onAddItem} disabled={!this.state.b}>{this.state.type}</Button>
        <br/><br/>
        
  </div> </div>
  );
}
}
export default (Signup);
