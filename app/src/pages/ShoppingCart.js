import React from "react";

export default class ShoppingCart extends React.Component {
	constructor(props){
		super();
		this.state = {
			shoppingCart: props.shoppingCart,
			user_name: props.userName
		}
	}

	submitRequest(item){
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
	}

    render() {
    	console.log(this.state.shoppingCart)
        return (
            <div>
            	<h1>A</h1>
            	{this.state.shoppingCart.map(item => 
            		<p> {item.product_name}: {item.quantity} </p>)}
            	<button onClick={this.submitRequests.bind(this)}> Request items on list </button>
            </div>
        );
    }
} 