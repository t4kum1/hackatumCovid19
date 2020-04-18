import React from "react";
import './Barbutton.css';

const barbutton = props =>(
    <button className="button" onClick={props.click}>
        <div className="button_line" />
        <div className="button_line" />
        <div className="button_line" />
    </button>
);

export default barbutton;