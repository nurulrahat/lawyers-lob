import React from 'react';
import UserSidebar from '../UserSidebar/UserSidebar';

const UserReview = () => {
    return (
        <div className="row">
        <div className="col-3">
            <UserSidebar></UserSidebar>
        </div>
        <div className="col-9">
            <h2>Please Review our services</h2>
        </div>


    </div>
    );
};

export default UserReview;