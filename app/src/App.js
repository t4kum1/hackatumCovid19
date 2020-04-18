import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js'
import ShopList from './pages/ShopList.js'
import ProductList from './pages/ProductList.js'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isBusiness: false,
      name: '',
      id: -1,
      selectedShop: ''
    }
  }

  update(props){
    this.setState({isBusiness: this.props.isBusiness, name: this.props.name});
    console.log(this.state);
  }

  updateSelectedShop(name){
    this.setState({selectedShop: name})
    console.log('updated shop')
  }

  render(){
    return (
     <HashRouter>
        <div>
          <Route path='/' render={(props) => <LoginPage update={this.update.bind(this)} {...props} />}/>
          <Route path='/home'>
            <ShopList updateSelectedShop={this.updateSelectedShop.bind(this)}/> 
          </Route>
          <Route path='/shop'>
            <ProductList shop={this.state.selectedShop}/> 
          </Route>
        </div>
    </HashRouter>
    );
  }
}

export default App;
