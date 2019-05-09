import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {

    return(
        <div className="header-container">

            <div className="header-image">
                <ImageThumbnail />
            </div>
        
            <div className="header-content">
                <div>
                    <HeaderTitle />
                </div>
                
                <div>
                    <HeaderContent />
                </div>   
            </div>

        </div>
    )
}


export default HeaderContainer
