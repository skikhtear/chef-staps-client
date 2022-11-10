import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update-Review')
    const oldReviews = useLoaderData();
    console.log(oldReviews);
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState(oldReviews);

    const handleUpdateReview = event => {
        event.preventDefault();

        fetch(`http://localhost:5000/reviews/${oldReviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div className='flex justify-center' >
            <form onSubmit={handleUpdateReview}>
                <h2 className="text-5xl font-bold ">Update Review </h2>
                <div className='flex justify-center my-11'>
                    {user?.photoURL ?
                        <img className='rounded-full' src={user?.photoURL} alt="" style={{ height: '70px' }} />
                        : <FaUser></FaUser>
                    }
                </div>
                <div className='w-3/1'>
                    <input onChange={handleInputChange} name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full mb-5 input-bordered bg-warning text-black" readOnly />
                    <input onChange={handleInputChange} defaultValue={oldReviews.customer} name="Name" type="text" placeholder="Name" className="input  w-full mb-5  input-bordered" readOnly/>
                </div>
                <textarea onChange={handleInputChange} defaultValue={oldReviews.message} name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <div className='flex justify-center mt-5'>
                 <input className='btn' type="submit" value="Post Review" /> 
                </div>

            </form>
        </div>
    );
};

export default UpdateReview;