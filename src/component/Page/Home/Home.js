import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Service from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Gallery></Gallery>
            <About></About>
        </div>
    );
};

export default Home;