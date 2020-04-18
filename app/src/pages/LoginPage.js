import React from "react";
import Login from "./components/Login";
import tachyons from 'tachyons';

export default class LoginPage extends React.Component {
	constructor(props){
		super();
		this.state = {
			update: props.update,
			login: {name: '', pwd: ''},
			signUp: {isBusiness: '', name: '', pwd: '', sells: '', addr: '', test: ''},
			users: []
		}
	}

	handleLogin(){
		fetch('https://gentle-ravine-17514.herokuapp.com/users')
      	.then(response=> response.json())
      	.then(users => {console.log(users)});
	}

	handleSignUp(){
		if (this.state.signUp.isBusiness === 'business'){

		}else{
			const requestOptions = {
			    method: 'POST',
			    headers: { 'Content-Type': 'application/json' },
			    body: JSON.stringify({user_name: this.state.signUp.name, address: this.state.signUp.addr })
			};
			console.log(requestOptions.body)
			fetch('https://gentle-ravine-17514.herokuapp.com/users', requestOptions)
			    .then(response => response.json())
			    .then(data => console.log(data));
		}	  	
	}

	handleLoginNameChange(e){
		this.setState({login: {name: e.target.value, 'pwd': this.state.login.pwd}})
		console.log(this.state)
	}

	handleLoginPwdChange(e){
		this.setState({login: {name: this.state.login.name, pwd: e.target.value}})
		console.log(this.state)
	}

	handleSignUpNameChange(e){
		this.setState({signUp: {isBusiness: this.state.signUp.isBusiness, name: e.target.value, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: this.state.signUp.sells}})
		console.log(this.state)
	}

	handleSignUpPwdChange(e){
		this.setState({signUp: {isBusiness: this.state.signUp.isBusiness, name: this.state.signUp.name, pwd: e.target.value, addr:this.state.signUp.addr, sells: this.state.signUp.sells}})
		console.log(this.state)
	}

	handleSignUpIsBusinessChange(e){
		this.setState({signUp: {isBusiness: e.target.value, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: this.state.signUp.sells}})
		console.log(this.state)
	}

	handleSignUpSellsChange(e){
		this.setState({signUp: {isBusiness: this.state.isBusiness, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: e.target.value}})
		console.log(this.state)
	}

	handleSignUpAddressChange(e){
		this.setState({signUp: {isBusiness: this.state.isBusiness, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:e.target.value, sells: this.state.signUp.sells}})
		console.log(this.state)
	}

	handleSignUpIsBusinessChange(e){
		this.setState({signUp: {isBusiness: e.target.value, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: this.state.signUp.sells}})
		console.log(this.state)
	}
	
    render() {
        return (
        	<div id="container" className="bg-light-blue" 
        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh'}}>
	            <div className="bg-silver" style = {{alignSelf: 'center', padding: '5px'}}>
	            	<h1> Login </h1>
	            	<form action = "">
	  					<input type="text" name="name" placeholder="Name" value={this.state.login.name} onChange={this.handleLoginNameChange.bind(this)} /><br />
	            		<input type="text" name="pwd" placeholder="Password" value={this.state.login.pwd} onChange={this.handleLoginPwdChange.bind(this)} /><br />
	            	</form>
	            	<button onClick={this.handleLogin.bind(this)}> Submit </button>
	            </div>
	            <div className="bg-silver" style={{alignSelf: 'center', padding: '5px'}}>
	            	<h1> SignUp </h1>
	            	<form>
  						<input type="text" name="name" placeholder="Name" value={this.state.signUp.name} onChange={this.handleSignUpNameChange.bind(this)} /><br />
	            		<input type="text" name="pwd" placeholder="Password" value={this.state.signUp.pwd} onChange={this.handleSignUpPwdChange.bind(this)} /><br />
	  					
	  					<input type="text" name="sells" placeholder="What do you sell?" value={this.state.signUp.sells} onChange={this.handleSignUpSellsChange.bind(this)} /><br />
	  					<input type="text" name="addr" placeholder="Address" value={this.state.signUp.addr} onChange={this.handleSignUpAddressChange.bind(this)} /><br />
	            		<input type="radio" value="business" checked={this.state.signUp.isBusiness === 'business'} onChange={this.handleSignUpIsBusinessChange.bind(this)}/>
	            		<input type="radio" value="client" checked={this.state.signUp.isBusiness === 'client'} onChange={this.handleSignUpIsBusinessChange.bind(this)}/>
	            	</form>
	            	<button onClick={this.handleSignUp.bind(this)}> Submit </button>
	            </div> 
	           </div>
        );
    }
} 