import React from 'react';


const ReviewCard = ({ review }) => {
    console.log(review);

    const { UserImg, message, customer, serviceName, email } = review;

    return (
        <div className=''>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <img className='rounded-full border-2' src={UserImg } alt="" style={{ height: '70px' }} />
                    <h2 className="card-title">{customer}</h2>
                    <h5>Mail:{email}</h5>
                    <h3>{serviceName}</h3>
                    <p>{message}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewCard;