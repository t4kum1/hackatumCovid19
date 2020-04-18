import React from "react";
//import tachyons from 'tachyons';
import './SignUpPage.css'
import { Redirect,Link } from "react-router-dom";

export default class SignUpPage extends React.Component {
    constructor(props){
		super();
		this.state = {
			update: props.update,
			signUp: {isBusiness: '', name: '', pwd: '', sells: '', addr: '', test: '',shopname:''},
			users: [], 
			loggedIn: false
		}
    }

    handleSignUpNameChange(e){
		this.setState({signUp: {isBusiness: this.state.signUp.isBusiness, name: e.target.value, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: this.state.signUp.sells, shopname:this.state.signUp.shopname}})
		console.log(this.state)
	}

	handleSignUpPwdChange(e){
		this.setState({signUp: {isBusiness: this.state.signUp.isBusiness, name: this.state.signUp.name, pwd: e.target.value, addr:this.state.signUp.addr, sells: this.state.signUp.sells, shopname:this.state.signUp.shopname}})
		console.log(this.state)
	}

	handleSignUpSellsChange(e){
		this.setState({signUp: {isBusiness: this.state.isBusiness, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: e.target.value, shopname:this.state.signUp.shopname}})
		console.log(this.state)
	}

	handleSignUpAddressChange(e){
		this.setState({signUp: {isBusiness: this.state.isBusiness, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:e.target.value, sells: this.state.signUp.sells, shopname:this.state.signUp.shopname}})
		console.log(this.state)
	}

	handleSignUpIsBusinessChange(e){
		this.setState({signUp: {isBusiness: e.target.value, name: this.state.signUp.name, pwd: this.state.signUp.pwd, addr:this.state.signUp.addr, sells: this.state.signUp.sells, shopname:this.state.signUp.shopname}})
        console.log(this.state)
        if (this.state.signUp.isBusiness === 'client'){
            document.getElementsByClassName('businessForm')[0].style.display= 'inline-block'
        } else {
            document.getElementsByClassName('businessForm')[0].style.display= 'none'
        }
    }
    

    handleSignUp(){
		if (this.state.signUp.isBusiness === 'business'){
			const requestOptions = {
			    method: 'POST',
			    headers: { 'Content-Type': 'application/json' },
			    body: JSON.stringify({shop_name: this.state.signUp.name, address: this.state.signUp.addr, sells: this.state.signUp.sells })
			};
			console.log(requestOptions.body)
			fetch('https://gentle-ravine-17514.herokuapp.com/shops', requestOptions)
			    .then(response => response.json())
			    .then(data => console.log(data));
			this.state.update({isBusiness: true, name: this.state.name})	
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
			this.state.update({isBusiness: false, name: this.state.name})	
		}	

		this.setState({loggedIn: true})  

	}
    
    
    render() {
    	if (!this.state.loggedIn){
	        return (
	            <div id="container"  
	        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
	                <div className="signupbox" style={{alignSelf: 'center', padding: '20px'}}>
		            	<h1 style={{color:'#eb8c34'}}> Sign Up </h1>
		            	<form>
	  						<input type="text" name="name" placeholder="Name" value={this.state.signUp.name} onChange={this.handleSignUpNameChange.bind(this)} /><br />
		            		<input type="password" name="pwd" placeholder="Password" value={this.state.signUp.pwd} onChange={this.handleSignUpPwdChange.bind(this)} /><br />
		  					<input type="text" name="addr" placeholder="Address" value={this.state.signUp.addr} onChange={this.handleSignUpAddressChange.bind(this)} /><br />
	                        <br></br>
	                        Do you want to use this app for selling purposes?
	                        <br></br>
	                        <label htmlFor='business'>Yes: </label>
		            		<input type="radio" name='business' value="business" checked={this.state.signUp.isBusiness === 'business'} onChange={this.handleSignUpIsBusinessChange.bind(this)}/>
	                        <label htmlFor='client'>No: </label>
		            		<input type="radio" name='client' value="client" checked={this.state.signUp.isBusiness === 'client'} onChange={this.handleSignUpIsBusinessChange.bind(this)}/>
		            	</form>
	                    <form className="businessForm" style={{display:'none'}}>
	                        <input type="text" name="sells" placeholder="What do you sell?" value={this.state.signUp.sells} onChange={this.handleSignUpSellsChange.bind(this)} /><br />
	                        <br></br>
	                    </form>
	                    <br></br>
		            	<button onClick={this.handleSignUp.bind(this)}> Submit </button>
		            </div> 
	            </div>    
        	);
        }else return <Redirect to={'/home'} />
    }    
}    