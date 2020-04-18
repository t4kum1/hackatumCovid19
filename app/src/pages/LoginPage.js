import React from "react";
import Login from "./components/Login";
import tachyons from 'tachyons';
import { Redirect,Link } from "react-router-dom";

import './LoginPage.css'


export default class LoginPage extends React.Component {
	constructor(props){
		super();
		this.state = {
			update: props.update,
			login: {name: '', pwd: ''},
			signUp: {isBusiness: 'client', name: '', pwd: '', sells: '', addr: '', test: ''},
			users: [],
			shops: [],
			loggedIn: false
		}
	}

	handleLogin(){
		fetch('https://gentle-ravine-17514.herokuapp.com/users')
      	.then(response=> response.json())
      	.then(users =>  this.setState({users: users.users}));

      	fetch('https://gentle-ravine-17514.herokuapp.com/shops')
      	.then(response=> response.json())
      	.then(shops =>  this.setState({shops: shops.shops}));
	}


	handleLoginNameChange(e){
		this.setState({login: {name: e.target.value, 'pwd': this.state.login.pwd}})
		//console.log(this.state)
	}

	handleLoginPwdChange(e){
		this.setState({login: {name: this.state.login.name, pwd: e.target.value}})
		//console.log(this.state)
	}

	
	
    render(props) {
    	if (!this.state.loggedIn){
    		console.log(this.state.users)
    		var matching_users = this.state.users.filter(user => (user.user_name === this.state.login.name));
    		if (matching_users.length > 0){
    			console.log('logging in as customer');
    			this.props.update({isBusiness: false, name: matching_users[0].user_name})
    			this.setState({loggedIn: true})
    		}

    		var matching_shops = this.state.shops.filter(shop => shop.shop_name === this.state.login.name);
    		if (matching_shops.length > 0){
    			console.log('logging in as customer');
    		  	this.props.update({isBusiness: true, name: matching_shops[0].user_name})
    		  	this.setState({loggedIn: true})
    		}
    	}else{
    		return <Redirect to={'/home'} />
    	} 
    	

        return (
        	<div id="container"  
        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
	            <div className="loginBox" style = {{alignSelf: 'center', padding: '20px'}}>
	            	<h1 style={{color:'#eb8c34'}}> Login </h1>
	            	<form action = "">
	  					<input type="text" name="name" placeholder="Name" value={this.state.login.name} onChange={this.handleLoginNameChange.bind(this)} /><br />
	            		<input type="password" name="pwd" placeholder="Password" value={this.state.login.pwd} onChange={this.handleLoginPwdChange.bind(this)} /><br />
	            	</form>
                    <br></br>
	            	<button onClick={this.handleLogin.bind(this)} > Login </button>
                    <br/>
                    <br/>
                    <div className='signupText'>Don't have an account? <Link to='/signup'><a href="/">Click here to sign up</a></Link></div>
	            </div>
	           </div>
        );
    }
} 