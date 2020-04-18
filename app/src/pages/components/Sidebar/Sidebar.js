import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"

const sidebar = props => {
    /*
    <li><a href="/">Buy</a></li>
    */
    let barClasses = 'sidebar';
    let clientBusinesslist = <ul>
                                <Link to='/home'>Buy</Link>
                                <Link to='/shoppingcart'>Shopping cart</Link>
                            </ul>
    if(props.show) {
        barClasses= 'sidebar open';
    }

    if(props.business) {
        clientBusinesslist = <ul>
                                <Link to='/home'>Buy</Link>
                                <Link to='/shoppingcart'>Shopping cart</Link>
                                <Link to='/requestlist'>Requests</Link>
                                <Link to='/stocklist'>Stock</Link>
                            </ul>    
    }


    return (
        <nav className={barClasses}>
            {clientBusinesslist}
        </nav>
    );
};

export default sidebar;