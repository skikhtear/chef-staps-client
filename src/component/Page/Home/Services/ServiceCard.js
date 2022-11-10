import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, picture, price,detail } = service;
    return (
        <div className="card card-compact w-96 bg-neutral-content shadow-xl" data-aos="flip-up">
            <figure>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
                
            </figure>
            <div className="card-body">
                <h2 className="card-title text-black">{name}</h2>
                <p className='text-black'>{detail.slice(0, 99)}...</p>
                <p className='text-2xl text-black font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-warning">Service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;