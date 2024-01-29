import React from 'react';
import lawyer1 from '../../../images/lawer-1.jpg'
import './aboutUs.css'
const AboutUs = () => {
    return (
        <div className="container">
            <div>
                <h2 style={{ color: '#008CBA' }} className=" text-center p-4 mb-3 ">What Our Clients to Us</h2>
            </div>
            <div className=" row text-center text-md-left d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <img className="w-75" src={lawyer1} alt="" />
                </div>
                <div className="col-md-6">
                    <div>
                        {/* <h4 className="text-secondary">“I don’t need lawyers who win at all costs, I really need them to win, but calculate the costs.”</h4>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma doling tresniu eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia doloren sit amet, consecto adipisci
                    
                </p> */}
                        <iframe width="560" height="315"  className='rounded border border-primary' src="https://www.youtube.com/embed/nmElLx_RZA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <a href="https://www.youtube.com/@bettercallamish" target='_blank'>
                    <button className="btn btn-primary" > Watch More</button>
                    </a>
                       
                    </div>
                </div>

            </div>
            <hr className="breaking-line"></hr>
        </div>
    );
};

export default AboutUs;