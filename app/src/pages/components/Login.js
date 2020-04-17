import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        name="username"
                        placeholder="Username"
                    />
                    <br></br>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
            </div>

        );
    }
} 