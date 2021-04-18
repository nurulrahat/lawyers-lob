import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css'
const SideBar = () => {
    return (
        <div class="sidenav">

            <div class="sidenav">
                <Link to="/addAdmin"><p>Add Admin</p></Link>
                <Link to="/admin"><p>Manage</p></Link>
            </div>
        </div>
    );
};

export default SideBar;