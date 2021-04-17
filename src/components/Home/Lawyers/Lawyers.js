import React from 'react';
import lwr1 from '../../../images/lawer-1.jpg';
import lwr2 from '../../../images/lawers2.jpg';
import lwr3 from '../../../images/layers3.jpg';
import LawyersInfo from './LawyersInfo';
const Lawyers = () => {
    const lawyers=[
        {
            name: 'Dr. Ebrahim',
            img:lwr1,
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt. '

        },
        {
            name: 'Dr. Abdul Aziz',
            img:lwr2,
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt. '

        },
        {
            name: 'Dr. Mostafa',
            img:lwr3,
            about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, incidunt. '

        },
    ]
    return (
        <div className="container">
        <div>
            <h2 style={{color: '#008CBA'}} className=" text-center p-4 mb-3 ">Our Lawyers</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-5 mb-4 background ">
            {
                lawyers.map(lawyer => <LawyersInfo lawyer={lawyer}></LawyersInfo>)
            }
        </div>
    </div>
    );
};

export default Lawyers;