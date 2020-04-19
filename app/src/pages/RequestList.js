import React from "react";
import './RequestList.css'

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
            <div id="backgr"  
        		style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
				<div className='requestBox'>
					<h1>Pending requests</h1>
						<div className='reqlist'>
						{this.state.requests.filter(request => request.shop_name === this.state.shop_name)
							.map(request => {
								return(
									<div className='request'>
										<p className='implabel'>{request.product_name}</p> <p> Desired Quantity:</p> <p className='implabel'> {request.request_quantity} </p> <p> Available: </p> <p className='implabel'> {request.product_quantity} </p>
									</div>)
							}
						)}
					</div>
				</div>	
            </div>
        );
    }
} 