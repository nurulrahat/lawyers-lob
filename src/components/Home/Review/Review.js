import React from 'react';
import ReviewInfo from './ReviewInfo';


const Review = () => {
    const reviews = [
        {
            name: 'MD Daud',
            occupation: 'Businessman',
            details: 'lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. '
        },
        {
            name: 'MD Daud',
            occupation: 'Businessman',
            details: 'lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. '
        },
        {
            name: 'MD Daud',
            occupation: 'Businessman',
            details: 'lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. '
        },
    ];
    return (
        <div className="container mt-4">
            <div>
                <h2 style={{color: '#008CBA'}} className=" text-center p-4 mb-3 "> Our Clients' Words</h2>
            </div>
            <div className="row">
                {
                    reviews.map(review => <ReviewInfo review={review}></ReviewInfo>)
                }
            </div>

        </div>
    );
};

export default Review;