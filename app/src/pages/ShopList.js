import React from "react";
import { Redirect } from "react-router-dom";

export default class ShopList extends React.Component {
    constructor(props){
    	super();
    	this.state = {
    		shops: [],
    		selected: '',
    		updateSelectedShop: props.updateSelectedShop
    	}
    }

    componentDidMount(){
    	fetch('https://gentle-ravine-17514.herokuapp.com/shops')
      	.then(response=> response.json())
      	.then(shops =>  this.setState({shops: shops.shops}));
    }

    handleClick(name){
    	this.setState({selected: name});
    	console.log(this.state.updateSelectedShop)
    	this.state.updateSelectedShop(name)
    }

    render() {
    	if (this.state.selected.length === 0){
    		return (
	        	<div style = {{display: 'grid', gridTemplateColumns: '1fr'}}>
	            	{this.state.shops.map((shop, i) =>
	            		<button key={i} onClick={() => this.handleClick(shop.shop_name)}> 
	            			Name: {shop.shop_name}, Type: {shop.sells}, Address: {shop.address} 
	            		</button>)}
	            </div>
	        );
    	}else{
    		return <Redirect to={'/Shop'} />
    	}
        
    }
} 