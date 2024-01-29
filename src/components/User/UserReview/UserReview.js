import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidebar/UserSidebar';


const UserReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewData, setReviewData] = useState({});

    const handleReview = (event) => {
        
        let name = document.getElementById('name').value;
        let occupation = document.getElementById('occupation').value;
        let review = document.getElementById('review').value;
        const reviewDetails = {
            name:name,
            email: loggedInUser.email,
            occupation:occupation,
            review: review
        }
        setReviewData(reviewDetails)
        const uri = `http://localhost:5000/addreview`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        }).then(res => alert('Review added successfully'))

    }
    console.log(reviewData)
    return (
        <div className="row">
            <div className="col-3">
                <UserSidebar></UserSidebar>
            </div>
            <div className="col-9">
                <h2>Please Review our services</h2>
                <form onSubmit={handleReview}>
                    <div class="form-outline  w-25">
                        <label class="form-label" htmlFor="typeText"></label>Your Name
                        <input type="text" id="name" class="form-control" />
                    </div>
                    <div class="form-outline  w-25">
                        <label class="form-label" htmlFor="typeText"></label>Your Occupation
                        <input type="text" id="occupation" class="form-control" />
                    </div>

                    <div class="form-outline w-50">
                        <label class="form-label" htmlFor="textAreaExample">Review</label>
                        <textarea class="form-control" id="review" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
            </div>


        </div>
    );
};

export default UserReview;