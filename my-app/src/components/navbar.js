// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import './navbar.css';
import './css/sb-admin-2.min.css';

import Topnav from './Topnav';

// import {Button} from './Button';

function Navbar() {
    // const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // window.addEventListener('resize', showButton);
    return (
        <>
        <div id="wrapper">
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link to="/" class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fab fa-typo3"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">COVID APP</div>
                </Link>

                {/* Divider */}
                <hr class="sidebar-divider my-0"></hr>

                {/* Nav Item - Dashboard */}
                <li class="nav-item active">
                    <Link to="/" class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span>
                    </Link>
                </li>

                <hr class="sidebar-divider my-0"></hr>

                <li className="nav-item">
                    <Link to="/statistics" class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Statistics</span>
                    </Link>
                </li>

                <hr class="sidebar-divider my-0"></hr>

                {/* Heading */}
                <div class="sidebar-heading">
                    Forms
                </div>

                <li className="nav-item">
                    <Link to="/feedback" class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Feedback</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Register</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/consultant" class="nav-link">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Consultant</span>
                    </Link>
                </li>

                <hr class="sidebar-divider d-none d-md-block"></hr>

                {/* Sidebar Toggler (Sidebar) */}
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                {/* Sidebar Message */}
                <div class="sidebar-card d-none d-lg-flex">
                    <img class="sidebar-card-illustration mb-2" src="../../public/img/undraw_rocket.svg" alt="..."></img>
                    <p class="text-center mb-2"><strong>CVD Pro</strong> is packed with premium features, advanced statistics, and more!</p>
                    <Link class="btn btn-success btn-sm" to="/pro">Upgrade to Pro!</Link>
                </div>
            </ul>
            {/* End of wrapper */}

            <Topnav />

        </div>
        </>
    );
}
 
export default Navbar;