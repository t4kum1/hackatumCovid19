import React from "react";
import { Redirect } from "react-router-dom";
import './ShopList.css'

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
    	//console.log(this.state.updateSelectedShop)
    	this.state.updateSelectedShop(name)
    }

    render(props) {
    	if (this.state.selected.length === 0){
    		return (
				<div id="container"  
        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
					<div className="shopBox" style = {{}}>
						{this.state.shops.map((shop, i) => {
							return(<div className='shop' key={i} onClick={() => this.handleClick(shop.shop_name)}> 
								<div className="logo"></div>
								<div className="text">
									<h3>{shop.shop_name}</h3> 
									<p>Type: {shop.sells}</p> <p>Address: {shop.address}</p> 
								</div>	
							</div>)})}
					</div>
				</div>	
	        );
    	}else{
    		return <Redirect to={'/Shop'} />
    	}
        
    }
} 