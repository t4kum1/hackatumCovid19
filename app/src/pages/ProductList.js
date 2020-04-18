import React from "react";
//import tachyons from 'tachyons';

export default class ProductList extends React.Component {
    constructor(){
    	super()
    	this.state = {
    		products: []
    	}
    }

    componentDidMount(){
    	fetch('https://gentle-ravine-17514.herokuapp.com/products')
      	.then(response=> response.json())
      	.then(products =>  this.setState({products: products.products}));
    }

    render(props) {
    	return (
    		<div>
    			<h1> Welcome to {this.props.shop} </h1>
    			{this.state.products.filter(product => product.shop_name === this.props.shop)
    				.map((product, i) => <p key={i}> Name: {product.product_name} </p>
    			
    			)}
    		</div>
    	)
    }
} 