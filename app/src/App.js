import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import ToolBar from "./pages/components/Toolbar/Toolbar"
import Sidebar from "./pages/components/Sidebar/Sidebar"
import Backdrop from "./pages/components/Backdrop/Backdrop"

import LoginPage from './pages/LoginPage.js'
import ShopList from './pages/ShopList.js'
import ProductList from './pages/ProductList.js'
//import Request from './pages/Request'
import RequestList from './pages/RequestList'
//import Item from './pages/Item'
import ShoppingCart from './pages/ShoppingCart'
import StockList from './pages/StockList'
//import AddProduct from './pages/AddProductPage'
import SignUpPage from './pages/SignUpPage'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isBusiness: false,
      name: '',
      id: -1,
      selectedShop: '',
      sidebarOpened: false,
      loggedIn: false,
      shoppingCart: []
    }
  }

  sidebarToggleButtonClickHandler = () => {
    this.setState((prevState) => {
        return {sidebarOpened: !prevState.sidebarOpened};
    })
};

backdropClickHandler = () => {
  this.setState({sidebarOpened: false});
}

unlockSidebarHandler = () => {
  this.setState({loggedIn: true});
}

  update(new_val){
    console.log(new_val)
    this.setState({isBusiness: new_val.isBusiness, name: new_val.name, loggedIn: true});
    console.log(this.state);
  }

  updateSelectedShop(name){
    this.setState({selectedShop: name})
    console.log('updated shop')
  }

  addToCart(item, quantity){
    item.quantity = quantity.value;
    this.state.shoppingCart.push(item);
    console.log('added item')
    console.log(item)
  }

  render(){
    let bdrop;
    if (this.state.sidebarOpened) {
        bdrop= <Backdrop click={this.backdropClickHandler} />
    }
    console.log(this.state.name)
    return (
     <HashRouter>
        <div style={{height:'100%'}}>
          <ToolBar sidebarUnlocked={this.state.loggedIn} sidebarClickHandler={this.sidebarToggleButtonClickHandler} business={this.state.isBusiness}  />
          <Sidebar show={this.state.sidebarOpened} business={this.state.isBusiness} />
          {bdrop}
          <Switch>
            <Route path='/' exact render={(props) => <LoginPage update={this.update.bind(this)} {...props} />}/>
            <Route path='/home'>
              <ShopList updateSelectedShop={this.updateSelectedShop.bind(this)}/> 
            </Route>
            <Route path='/signup' exact render={(props) => <SignUpPage update={this.update.bind(this)} {...props} />}/>
            <Route path='/shop'>
              <ProductList shop={this.state.selectedShop} addToCart={this.addToCart.bind(this)}/> 
            </Route>
            <Route path='/shoppingcart'>
              <ShoppingCart shoppingCart={this.state.shoppingCart} />
            </Route>
            <Route path='/requestlist'>
              <RequestList shopName={this.state.name} />
            </Route>
            <Route path='/stocklist'>
              <StockList shopName={this.state.name}/>
            </Route>
          </Switch>  
        </div>
    </HashRouter>
    );
  }
}

export default App;
