import React, { useContext, useEffect, useState } from 'react';
import './book.css'
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { id } = useParams();
    console.log(id)

    console.log(loggedInUser)
    const [selectedService, setSelectedService] = useState({})
    useEffect(() => {

        fetch(`http://localhost:5000/book/${id}`)
            .then(response => response.json())
            .then(result => setSelectedService(result))
    }, [id])
    console.log(selectedService)
    const handleBooking = (paymentId) => {
        sessionStorage.setItem('serviceId', id)
        console.log('serviceId stored', id)
        const bookDate = document.getElementById('date').value;
        const userName = document.getElementById('name').value;
        const bookingDetails = {
            name: selectedService.name,
            about: selectedService.about,
            price: selectedService.price,
            email: loggedInUser.email,
            user: userName,
            date: bookDate,
            status:'pending',
            paymentDetails:paymentId
        }
        console.log(bookingDetails)
        const url = `http://localhost:5000/insertBooking`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        }).then(res => console.log('ordered database response successfully'))
    }
    return (
        <div className="row">
            <div className="col-3">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-9 text-center">
                <div className="container text-primary">
                    <h1>Book Your Service</h1>
                    <div className="cardCls" >
                        <h3 className="">{selectedService.name}</h3>
                        <h5 className="">{selectedService.about}</h5>
                        <h5 className="">{selectedService.price}$</h5>
                        <label htmlFor="date">Booking Date</label>
                        <input type="date" name="date" id="date" />
                        <input type="text" name="name" id="name" placeholder="your name.." />
                        <h3>Pay Here </h3>
                        <PaymentProcess handleBookingInfo={handleBooking}></PaymentProcess>
                        <br/>
                        {/* <button className="btn btn-primary" onClick={handleBooking}>Book</button> */}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Book;