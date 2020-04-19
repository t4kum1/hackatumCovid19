import React from "react";
import './StockList.css'

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
    		<div id="backgr"  
        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
				<div className='stockBox'>	
					<h1> This is your inventory,  {this.state.name} </h1>
					<h2> You have {this.state.products.length} products</h2>
					<div className='liststock'>
						{this.state.products.filter(product => product.shop_name === this.state.name)
							.map((product, i) => {return (
								<div className='stockitem'><p key={i}> {product.product_name} </p><div className='spacer'></div><p>x{product.quantity}</p></div>
							)}
						)}
					</div>	
				</div>
				<div className='additemBox'>
					<h2 className='addLabel'>Add item</h2>
					<input type="text" name="name" placeholder="Product Name" value={this.state.addItem} onChange={this.handleAddItemChange.bind(this)} /><br />
					<input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleQuantityChange.bind(this)} /><br />
					<br/>
					<p className='additembtn' onClick={this.addItem.bind(this) }> Add Item </p>
				</div>
    		</div>
    	)
    }
} 