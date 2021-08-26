// import React, {useState} from '../node_modules/react';
import {Link} from '../../node_modules/react-router-dom/Link';


function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        CVD <i className="fab fa-typo3"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;