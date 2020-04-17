import React from "react";

export default class AddProduct extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        name="productname"
                        placeholder="Item Name"
                    />
                    <br></br>
                    <input 
                        name="itemtype"
                        placeholder="Type of item"
                    />
                    <br></br>
                    <input 
                        name="description"
                        placeholder="Item description"
                    />
                    <br></br>
                    <input 
                        name="quantity"
                        placeholder="Quantity"
                    />
                    <br></br>
                    <input 
                        name="price"
                        placeholder="Price"
                    />
                    <br></br>
                    <br></br>
                    <label for="itemImage">Upload image of item:</label>
                    <br></br>
                    <input type="file" id="itemImage" name="itemImage"/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button type="submit">Add item</button>
                </form>
            </div>

        );
    }
} 