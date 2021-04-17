import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './servicesInfo.css'
const ServicesInfo = (props) => {
    const { _id,name, img, about, price } = props.service;
    const history =useHistory()
    const handleBookNow=(id)=>{
        console.log(id)
        history.push(`/book/${id}`)
    }
    return (
        <div className="col text-center containerCls">
            <div className="card cardImage mainCard">
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title ">{name}</h5>
                    <p className="card-text ">{about}</p>
                    <div className="overlay text"><h3>{price}$</h3>
                      {
                       <Link to={`/book/${_id}`}>
                       <button className="btn btn-warning" onClick={()=>handleBookNow(_id)} >Book Now</button>  
                       </Link>
                     }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServicesInfo;