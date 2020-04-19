import React from "react";
//import tachyons from 'tachyons';
import './ProductList.css'
import Backdrop from "./components/Backdrop/Backdrop"
import Message from "./components/Message/message"

export default class ProductList extends React.Component {
    constructor(props){
    	super()
    	this.state = {
    		products: [],
			addToCart: props.addToCart,
			msgShown: false
			
    	}
    }

    componentDidMount(){
    	fetch('https://gentle-ravine-17514.herokuapp.com/products')
      	.then(response=> response.json())
      	.then(products =>  this.setState({products: products.products}));
	}
	
	bckdrpClickHandler = () => {
        this.setState({msgShown: false});
    }

    msgToggleButtonClickHandler = () => {
        this.setState((prevState) => {
            return {msgShown: !prevState.msgShown};
        })
    };

    render(props) {
		let bckdrp;
        let mesg;
        if (this.state.msgShown) {
            bckdrp= <Backdrop click={this.bckdrpClickHandler} />
            mesg=<Message text={'Item added to cart!'}/>
		}
		
    	return (
			<div>
                {mesg}
                {bckdrp}
				<div id="backgr"  
					style={{display: 'flex', justifyContent: 'space-around', height: '100vh', background: 'linear-gradient(to right, #eb8c34 0%, #eb5234 100%)'}}>
					<div className="container">	
						<h1 className="shopname"> Welcome to {this.props.shop} </h1>
						<div className="listgrid">
							<h2 className='amountlabel'>{this.state.products.filter(product => product.shop_name === this.props.shop).length} products found</h2>
							<div className='grid'>
								{this.state.products.filter(product => product.shop_name === this.props.shop)
									.map((product, i) => {return (
										<div className='product' style={{display: 'clock'}}>
											<div className='fakeImg' />
											<p className='itemname' key={i}> {product.product_name} </p>
											<p className='price'>50 €</p>
											<p className='addtocart' onClick={() => this.state.addToCart(product)}> Add to Cart </p>
										</div>)}
								)}
							</div>	
						</div>
					</div>
				</div>
			</div>
    	)
    }
} 