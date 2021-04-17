import React from 'react';
import Footer from '../../Shared/Foooter/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Lawyers from '../Lawyers/Lawyers';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
                <Header></Header>
                <AboutUs></AboutUs>
                <Services></Services>
                <Lawyers></Lawyers>
                <Review></Review>
                <Footer></Footer>
        </div>
    );
};

export default Home;