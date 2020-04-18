import React from "react";

export default class RequestList extends React.Component {
    constructor(props){
    	super();
    	this.state = {
    		shop_name: props.shopName,
    		requests: []
    	}
    }

    componentDidMount(){
    	fetch('https://gentle-ravine-17514.herokuapp.com/requests')
      	.then(response=> response.json())
      	.then(requests =>  this.setState({requests: requests.requests}));
    }

    render() {
    	console.log(this.state.shop_name)
        return (
            <div>
            	{this.state.requests.filter(request => request.shop_name === this.state.shop_name)
            		.map(request => {
            			return(
            				<div>
            					<h1> A </h1>
            					<p> Name: {request.product_name}, Desired Quantity: {request.request_quantity}, Available: {request.product_quantity} </p>
            				</div>)
            		}
            	)}
            </div>
        );
    }
} 