import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="header-titles">
                <span className='header-title-small'>React & Node</span>
                <span className='header-title-large'>Blog</span>
                <img src="https://storage.googleapis.com/dream-machines-output/1681365e-a212-425f-9e82-d51c3c42ec49/0_0.png" alt="background" className="header-image" />
            </div>
        </div>
    );
};

export default Header;