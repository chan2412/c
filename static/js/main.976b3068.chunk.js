(this.webpackJsonplog=this.webpackJsonplog||[]).push([[0],{37:function(e,t,a){},51:function(e,t,a){e.exports=a(62)},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=(a(56),a(18)),i=a(19),s=a(22),u=a(20),m=a(44),p=a(9),h=a(92),b=a(93),d=(a(37),{arr:["bc","a","3"],pass:["z","y","c"],obj:{name:["a","b","c"],Year:[1,2,3],Dept:["CSE","EEE","ECE"],Rno:[1,2,3]}}),E=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).na=function(e){n.setState({n:e.target.value})},n.pa=function(e){n.setState({p:e.target.value})},n.ca=function(e){n.setState({c:e.target.value})},n.da=function(e){n.setState({d:e.target.value})},n.aa=function(e){n.setState({a:e.target.value})},n.ba=function(e){n.setState({b:e.target.value})},n.onAddItem=function(){var e=n.state.n,t=n.state.p,a=n.state.a,r=n.state.b,l=n.state.c,o=n.state.d;d.arr.push(e),d.pass.push(t),d.obj.name.push(a),d.obj.Year.push(r),d.obj.Dept.push(l),d.obj.Rno.push(o),alert("successfully signed up"),n.setState({n:"",p:"",a:"",b:"",c:"",d:""})},n.onLo=function(){n.props.history.push("/")},n.state={n:"",p:"",a:"",b:"",c:"",d:"",x:0,type:"Signup"},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement("div",{class:"bo"},r.a.createElement("h1",null,this.state.type),r.a.createElement(b.a,{variant:"contained",color:"primary"},"Signup")," \u2003\u2003\u2003",r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onLo},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Username",variant:"outlined",type:"text",borderColor:"coral",value:this.state.n,onChange:this.na}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Password",variant:"outlined",type:"password",borderColor:"coral",value:this.state.p,onChange:this.pa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Name",variant:"outlined",type:"text",borderColor:"coral",value:this.state.a,onChange:this.aa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Year",variant:"outlined",type:"number",borderColor:"coral",value:this.state.b,onChange:this.ba}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Department",variant:"outlined",type:"text",borderColor:"coral",value:this.state.c,onChange:this.ca}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Roll no",variant:"outlined",min:"5999999999",max:"9999999999",type:"number",borderColor:"coral",value:this.state.d,onChange:this.da}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onAddItem,disabled:!this.state.b},this.state.type),r.a.createElement("br",null),r.a.createElement("br",null))," ")}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).na=function(e){n.setState({n:e.target.value})},n.pa=function(e){n.setState({p:e.target.value})},n.onAddItem=function(){for(var e=n.state.n,t=n.state.p,a=0,r=0;r<d.arr.length;r++)if(e===d.arr[r]&&t===d.pass[r]){a=1;break}r,0===a?alert("wrong password"):n.props.history.push("/Home"),n.setState({n:"",p:""})},n.onSi=function(){n.props.history.push("/Signup")},n.state={n:"",p:"",x:0,type:"Login"},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement("div",{class:"bo"},r.a.createElement("h1",null,this.state.type),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onSi},"Signup")," \u2003\u2003\u2003",r.a.createElement(b.a,{variant:"contained",color:"primary"},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Username",variant:"outlined",type:"text",borderColor:"coral",value:this.state.n,onChange:this.na}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{id:"ff",style:{color:"white"},label:"Password",variant:"outlined",type:"password",borderColor:"coral",value:this.state.p,onChange:this.pa}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onAddItem,disabled:!this.state.p},this.state.type))," ")}}]),a}(n.Component),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onLo=function(){e.props.history.push("/")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{class:"h"},r.a.createElement("div",{class:"bo"},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:this.onLo},"Logout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Hello"))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:v}),r.a.createElement(p.a,{exact:!0,path:"/Login",component:v}),r.a.createElement(p.a,{exact:!0,path:"/Home",component:f}),r.a.createElement(p.a,{exact:!0,path:"/Signup",component:E})),"Hello world"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.976b3068.chunk.js.map