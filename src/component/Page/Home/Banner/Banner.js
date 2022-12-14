import React from 'react';
import banner1 from '../../../../assets/img/banner/banner1.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${banner1})` }} data-aos="fade-up">
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Chef Steps</h1>
                    <p className="mb-5 font-semibold text-xl">βA recipe has no soul. You, as the cook, must bring soul to the recipe.β</p>
                    <p className="mb-5 font-semibold text-xl">βTo me, food is as much about the moment, the occasion, the location and the company as it is about the taste.β</p>
                    <button className="btn btn-outline btn-warning font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;