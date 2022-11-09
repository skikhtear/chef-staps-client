import React from 'react';
import banner1 from '../../../../assets/img/banner/banner1.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${banner1})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Chef Steps</h1>
                    <p className="mb-5 font-semibold text-xl">“A recipe has no soul. You, as the cook, must bring soul to the recipe.”</p>
                    <p className="mb-5 font-semibold text-xl">“To me, food is as much about the moment, the occasion, the location and the company as it is about the taste.”</p>
                    <button className="btn btn-outline btn-warning font-semibold">Get Started</button>
                </div>
            </div>
        </div>

        // <div className="carousel w-full">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src={banner1} alt='' className="w-full  rounded" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src={banner2} alt='' className="w-full  rounded" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src={banner3} alt='' className="w-full  rounded" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
            
        // </div>
    );
};

export default Banner;