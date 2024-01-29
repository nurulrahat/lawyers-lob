import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import BookingListInfo from './BookingListInfo';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookedData, setBookedData] = useState([])
    // let productId =sessionStorage.getItem('productId');
    useEffect(() => {
        fetch('http://localhost:5000/bookedData?eml=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => res.json())
            .then(data => setBookedData(data))
    }, [loggedInUser.email])

    console.log(bookedData[0])
    console.log(loggedInUser)
    return (
        <div className="row">
            <div className="col-3">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-9 bg-info">
            <div className="container text-light">
            {

            }
            <h3>User: {loggedInUser.name}</h3>
            <table className="table table-hover mt-5">
                <thead>
                    <tr className="text-light">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookedData.map(booked => <BookingListInfo bookedData={booked} key={booked._id} ></BookingListInfo>)
                    }
                </tbody>
            </table>

        </div>
            </div>
        </div>
    );
};

export default BookingList;