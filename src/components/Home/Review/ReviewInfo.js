import React from 'react';

const ReviewInfo = (props) => {
    const { name, occupation, review } = props.review;
    return (
     
            <div className="col-md-4 d-flex justify-content-center">
                <div class="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                    <div class="card-header">{occupation}</div>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{review}</p>
                    </div>
                </div>
            </div>
       

    );
};

export default ReviewInfo;