import React from "react";

export default class RegisterShop extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                            name="shopname"
                            placeholder="Shop Name"
                    /> 
                    <br></br>
                    <input 
                            name="shoptype"
                            placeholder="Shop Type"
                    /> 
                    <br></br>
                    <input 
                            name="address"
                            placeholder="Address"
                    /> 
                    <br></br>
                    <input 
                            name="fromOpeningHours"
                            placeholder="Open from"
                    />
                    <input 
                            name="toOpeningHours"
                            placeholder="To"
                    />
                    <br></br>  
                    Does your shop deliver items?
                    <br></br>
                    <div>
                    Yes <input type="checkbox" name="yesOption"/> 
                    No  <input type="checkbox" name="noOption"/> 
                    </div>
                    <br></br>
                    <br></br>
                    <button type="submit">Register</button>

                </form>
            </div>    
        );
    }
} 