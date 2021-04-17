import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './userSidebar.css'
const UserSidebar = () => {
  const {id} = useParams()
  return (
    <div class="sidenav">
      <Link to="/bookingList"><p>Booking List</p></Link>
      <Link to="/review"><p>Add Review</p></Link>
    </div>
  );
};

export default UserSidebar;