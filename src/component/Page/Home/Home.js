import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Service from './Services/Services';

const Home = () => {
    useTitle('Home')
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