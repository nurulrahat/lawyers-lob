import React from 'react';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import UserReview from '../UserReview/UserReview';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserDashBoard = () => {
    return (
        <div className="row">
            <div className="col-3">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-9">
                
            </div>


        </div>
    );
};

export default UserDashBoard;