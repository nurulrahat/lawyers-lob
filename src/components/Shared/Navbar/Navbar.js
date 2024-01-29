import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


import './navbar.css'
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <Link to="/home"><h2 className="text-light logoCls">Lawyers Lobbying </h2></Link> 
            
         <nav>
             <Link to="/home">Home</Link>
             <Link to="/userDashboard">UserDashBoard</Link>
             <Link to="/admin">Admin </Link>
             <Link to="/login"> Log In</Link>
             <Link className='bg-info'>{loggedInUser.name}</Link>

         
         </nav>
     </div>
    );
};

export default Navbar;