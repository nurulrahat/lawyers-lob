import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const [admin,setAdmin]=useState()
    const handleReview = (event) => {
        event.preventDefault()
        let name = document.getElementById('name').value;
        let role = document.getElementById('role').value;
        let email = document.getElementById('email').value;
        const adminDetails = {
            name:name,
            role: role,
            email:email   
        }
        setAdmin(adminDetails)
        const uri = `http://localhost:5000/addAdmin`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminDetails)
        }).then(res => alert('Review added successfully'))

    }
    console.log(admin)
    return (
        <div style={{ backgroundColor: "#008CBA", height: "1000px" }} className="row justify-content-around">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <div className="col-9">
                    <h2>Add An Admin</h2>
                    <form onSubmit={handleReview}>
                        <div class="form-outline  w-25">
                            <label class="form-label" htmlFor="typeText"></label>Name
                        <input type="text" id="name" class="form-control" />
                        </div>
                        <div class="form-outline  w-25">
                            <label class="form-label" htmlFor="typeText"></label>Role
                        <input type="text" id="role" class="form-control" />
                        </div>
                        <div class="form-outline  w-25">
                            <label class="form-label" htmlFor="typeText"></label>Email
                        <input type="email" id="email" class="form-control" />
                        </div>

                        <button type="submit" class="btn btn-primary mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;