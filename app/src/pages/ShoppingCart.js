import React from "react";
import './ShoppingCart.css'
import Backdrop from "./components/Backdrop/Backdrop"
import Message from "./components/Message/message"

export default class ShoppingCart extends React.Component {
	constructor(props){
		super();
		this.state = {
			shoppingCart: props.shoppingCart,
            user_name: props.userName,
            msgShown: false
		}
	}

	submitRequest(item){
		console.log('-----------------')
		console.log(this.state.user_name)
		console.log(item.quantity)
		const requestOptions = {
			    method: 'POST',
			    headers: { 'Content-Type': 'application/json' },
			    body: JSON.stringify({shop_name: item.shop_name, user_name: this.state.user_name, product_name: item.product_name, quantity: item.quantity})
			};
			console.log(requestOptions.body)
			fetch('https://gentle-ravine-17514.herokuapp.com/requests', requestOptions)
			    .then(response => response.json())
			    .then(data => console.log(data));
	}

	submitRequests(){
		this.state.shoppingCart.forEach(item =>
            this.submitRequest(item))
        this.msgToggleButtonClickHandler()    
            
    }
    
    bckdrpClickHandler = () => {
        this.setState({msgShown: false});
    }

    msgToggleButtonClickHandler = () => {
        this.setState((prevState) => {
            return {msgShown: !prevState.msgShown};
        })
    };

    render() {

        let bckdrp;
        let mesg;
        if (this.state.msgShown) {
            bckdrp= <Backdrop click={this.bckdrpClickHandler} />
            mesg=<Message text={'Request sent!'}/>
        }

        return (
            <div>
                {mesg}
                {bckdrp}
                <div id="backgr"  
                    style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
                    <div className='cart'>   
                        <h1>Shopping Cart</h1>
                        <h2> {this.state.shoppingCart.length} items in the cart</h2>
                        <div className='cartlist'>
                                {this.props.shoppingCart.map(item => 
                                    <div className='cartitem'><p> {item.product_name} </p><div className='spacer'></div><p>x{item.quantity}</p></div> )}   	
                        </div>
                        <p className='cartbtn' onClick={this.submitRequests.bind(this)}> Request items </p>
                    </div>
                </div>
            </div>
        );
    }
} 