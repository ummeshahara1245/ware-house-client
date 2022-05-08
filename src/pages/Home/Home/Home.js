import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import './Home.css';
import Banner from '../../Banner/Banner';
import Testimonials from '../../Testimonials/Testimonials';
import Offer from '../../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services />
            <Gallery />
            <Offer/>
            <br />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;