import React from 'react';
import './Header.css';

var moment = require('moment');
moment().format();


const HeaderTitle = () => {

    return (
        <div className="header-title">
            <h2>Lambda School</h2>
            <h3>@LambdaSchool <span>&#183;</span> {moment().format("Do MMM")}</h3>
        </div>
    )
}

export default HeaderTitle