import React from 'react';

import './message.css';

const Backdrop = props => {


    return (
        <div className="message">
            <p className='msg'>{props.text}</p>
        </div>
    );
};

export default Backdrop;