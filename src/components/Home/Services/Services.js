import React, { useEffect, useState } from 'react';
import realEstate from '../../../images/real-estate.png';
import divorce from '../../../images/divorce.png';
import insurance from '../../../images/insurance.png';
import ServicesInfo from './ServicesInfo';
const Services = () => {
   const [allServices,setAllServices] =useState([])
    const url = `http://localhost:5000/services`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
        // setProduct(productsData)

    }, [])
    // const services = [
    //     {
    //         name: 'Real-Estate-Cases',
    //         about: 'Our lawyers will Solve your problem with no doubt',
    //         img: realEstate,
    //         price: 90
    //     },
    //     {
    //         name: 'Divorce',
    //         about: 'Our lawyers will Solve your problem with no doubt',
    //         img: divorce,
    //         price: 90
    //     },
    //     {
    //         name: 'Insurance',
    //         about: 'Our lawyers will Solve your problem with no doubt',
    //         img: insurance,
    //         price: 90
    //     }
    // ]
    return (
        <div className="container">
            <div>
                <h2 style={{color: '#008CBA'}} className=" text-center p-4 mb-3 ">Services We Offer</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-5 mb-4 background ">
                {
                    allServices.map(service => <ServicesInfo service={service}> key={service._id}</ServicesInfo>)
                }
            </div>
        </div>

    );
};

export default Services;