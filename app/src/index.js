import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import LoginPage from './pages/LoginPage';
import RegisterShop from './pages/RegisterShopPage';
import AddProduct from './pages/AddProductPage';



ReactDOM.render((
  <HashRouter>
      <div>
        <Route path='/' component={LoginPage}/>
      </div>
  </HashRouter>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
