import React from 'react';
import './lawyersInfo.css'
const LawyersInfo = (props) => {
    const { name,img,about}= props.lawyer;
    return (
        <div className="col text-center ">
            <div className="card lawyer">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title ">{name}</h5>
                    <p className="card-text ">{about}</p>
                    <div className="">
                        <button className="btn btn-warning" >Experiences</button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyersInfo;