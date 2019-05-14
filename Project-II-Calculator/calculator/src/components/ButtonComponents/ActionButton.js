import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div>
            <button style={props.buttonStyle} className="Action-button">{props.text}</button>
        </div>
    )
}

export default ActionButton
