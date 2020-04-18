import React from "react";

export default class ShoppingCart extends React.Component {
    render(props) {
    	console.log(this.props)
        return (
            <div>
            	<h1>A</h1>
            	{this.props.shoppingCart.map(item => 
            		<p> {item.product_name} </p>)}
            </div>
        );
    }
} 