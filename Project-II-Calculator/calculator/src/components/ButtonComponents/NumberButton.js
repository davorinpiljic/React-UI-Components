import React from 'react';
import './Button.css';


const NumberButton = props => {
    return(
        <div>
            <button style={props.buttonStyle}>{props.text}</button>
        </div>
    )
}

export default NumberButton

const buttonStyle = {
    color: 'white',
    backgroundColor: "red",
}