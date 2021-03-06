import React from "react";
import './Toolbar.css';
import BarButton from '../Sidebar/Barbutton';
import {Link} from 'react-router-dom';

const navbar = props => {
    let btn;
    let items= ''
    if(props.sidebarUnlocked) {
        btn=<div className="sidebarbtn"><BarButton click={props.sidebarClickHandler}/></div>;
        items=<ul>
                <Link to='/home'>
                    <li><a href="/">Buy</a></li>
                </Link>
                <Link to='/shoppingcart'>
                    <li><a href="/">Shopping Cart</a></li>
                </Link>
                    
               </ul>
    }

    if(props.business) {
        items=<ul>
                <Link to='/home'>
                    <li>Buy</li>
                </Link>
                <Link to='/shoppingcart'>
                    <li>Shopping Cart</li>
                </Link>
                <Link to='/requestlist'>
                    <li>Requests</li>
                </Link>
                <Link to='/stocklist'> 
                    <li>Stock</li>
                </Link>
              </ul>
    }
    return (
        <header className="toolbar">
            <nav className="navi">
                {btn}
                <div className="navi_logo"><Link to ='/'><a>LOCKDOWNSHOPPING</a></Link></div>
                <div className="placeholder"></div>
                <div className="navi_items">
                    {items}
                </div>
            </nav>
        </header>
    );
};

export default navbar;