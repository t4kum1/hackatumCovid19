import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"

const sidebar = props => {
    let barClasses = 'sidebar';
    let clientBusinesslist = <ul>
                                <Link to='/home'><li><a href="/">Buy</a></li></Link>
                                <Link to='/shoppingcart'><li><a href="/">Shopping cart</a></li></Link>
                            </ul>
    if(props.show) {
        barClasses= 'sidebar open';
    }

    if(props.business) {
        clientBusinesslist = <ul>
                                <Link to='/home'><li><a href="/">Buy</a></li></Link>
                                <Link to='/shoppingcart'><li><a href="/">Shopping cart</a></li></Link>
                                <Link to='/requestlist'><li><a href="/">Requests</a></li></Link>
                                <Link to='/stocklist'><li><a href="/">Stock</a></li></Link>
                            </ul>    
    }


    return (
        <nav className={barClasses}>
            {clientBusinesslist}
        </nav>
    );
};

export default sidebar;