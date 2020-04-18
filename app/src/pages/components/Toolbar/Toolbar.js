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
                    <li><a href="/">Shopping cart</a></li>
                </Link>
                    
               </ul>
    }

    if(props.business) {
        items=<ul>
                <Link to='/home'>
                    <li><a href="/">Buy</a></li>
                </Link>
                <Link to='/shoppingcart'>
                    <li><a href="/">Shopping cart</a></li>
                </Link>
                <Link to='/requestlist'>
                    <li><a href="/">Requests</a></li>
                </Link>
                <Link to='/stocklist'> 
                    <li><a href="/">Stock</a></li>
                </Link>
              </ul>
    }
    return (
        <header className="toolbar">
            <nav className="navi">
                {btn}
                <div className="navi_logo"><a href ="/">LOCKDOWNSHOPPING</a></div>
                <div className="placeholder"></div>
                <div className="navi_items">
                    {items}
                </div>
            </nav>
        </header>
    );
};

export default navbar;