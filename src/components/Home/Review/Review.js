import React, { useEffect, useState } from 'react';
import ReviewInfo from './ReviewInfo';


const Review = () => {
    const [reviews,setReviews]=useState([])
   
    useEffect(() => {

        fetch(`http://localhost:5000/reviewsData`)
            .then(response => response.json())
            .then(result => setReviews(result))
    },[] )
    return (
        <div className="container mt-4">
            <div>
                <h2 style={{color: '#008CBA'}} className=" text-center p-4 mb-3 "> Our Clients' Words</h2>
            </div>
            <div className="row">
                {
                    reviews.map(review => <ReviewInfo review={review} key={review._id}></ReviewInfo>)
                }
            </div>

        </div>
    );
};

export default Review;