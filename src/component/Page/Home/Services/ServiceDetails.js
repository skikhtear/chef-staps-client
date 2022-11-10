import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import PostReview from '../../Review/PostReview';
import Review from '../../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {name,picture,price,detail } = service;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price</div>
                        <div className="badge badge-outline">${price}</div>
                    </div>
                </div>
            </div>
            <PostReview></PostReview>
            <Review></Review>
        </div>
    );
};

export default ServiceDetails;