import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"

const sidebar = props => {
    /*
    <li><a href="/">Buy</a></li>
    */
    let barClasses = 'sidebar';
    let clientBusinesslist = <ul>
                                <Link to='/home'>Buy</Link><br></br>
                                <Link to='/shoppingcart'>Shopping Cart</Link><br></br>
                            </ul>
    if(props.show) {
        barClasses= 'sidebar open';
    }

    if(props.business) {
        clientBusinesslist = <ul>
                                <Link to='/home'>Buy</Link><br></br>
                                <Link to='/shoppingcart'>Shopping Cart</Link><br></br>
                                <Link to='/requestlist'>Requests</Link><br></br>
                                <Link to='/stocklist'>Stock</Link><br></br>
                            </ul>    
    }


    return (
        <nav className={barClasses}>
            {clientBusinesslist}
        </nav>
    );
};

export default sidebar;