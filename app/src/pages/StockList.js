import React from "react";

export default class StockList extends React.Component {
    constructor(props){
    	console.log(props)
    	super()
    	this.state = {
    		products: [],
    		name: props.shopName,
    		addItem: '',
    		quantity: 0
    	}
    	this.loadProducts.bind(this);
    }

    loadProducts(){
    	fetch('https://gentle-ravine-17514.herokuapp.com/products')
      	.then(response=> response.json())
      	.then(products =>  this.setState({products: products.products}));
    }

    componentDidMount(){
    	this.loadProducts();
    }

    addItem(){
        console.log(this.state.name)
    	if (this.state.addItem.length > 0){
    		const requestOptions = {
			    method: 'POST',
			    headers: { 'Content-Type': 'application/json' },
			    body: JSON.stringify({shop_name: this.state.name, product_name: this.state.addItem, quantity:  this.state.quantity})
			};
			console.log(requestOptions.body)
			fetch('https://gentle-ravine-17514.herokuapp.com/products', requestOptions)
			    .then(response => response.json())
			    .then(data => console.log(data));
			this.setState({addItem: ''})
			this.state.products.push({shop_name: this.state.name, product_name: this.state.addItem, quantity:  this.state.quantity})
    	}
    	
    }

    handleAddItemChange(e){
    	this.setState({addItem: e.target.value})
    }

    handleQuantityChange(e){
    	this.setState({quantity: e.target.value})
    }

    render() {
    	console.log(this.state)
    	return (
    		<div>
    			<h1>A</h1>
    			<h1> This is your inventory,  {this.state.name} </h1>
    			{this.state.products.filter(product => product.shop_name === this.state.name)
    				.map((product, i) => {return (
    						<p key={i}> Name: 	{product.product_name}, quantity: {product.quantity} </p>
  					)}
    			)}
    			<input type="text" name="name" placeholder="Name" value={this.state.addItem} onChange={this.handleAddItemChange.bind(this)} /><br />
    			<input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleQuantityChange.bind(this)} /><br />
    			<button onClick={this.addItem.bind(this) }> Add Item </button>
    		</div>
    	)
    }
} 