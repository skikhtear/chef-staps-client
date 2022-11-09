import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';



const PostReview = () => {
    const { _id,name  } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.Name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const UserImg = user?.photoURL || <FaUser></FaUser>;

        const review = {
            service: _id,
            serviceName:name,
            customer: userName,
            email,
            message,
            UserImg
        }

        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('chef-steps')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Post Review successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='flex justify-center' >
            <form onSubmit={handlePlaceReview}>
                <h2 className="text-5xl font-bold ">Please Review </h2>
                <div className='flex justify-center my-11'>
                    {user?.photoURL ?
                        <img className='rounded-full' src={user?.photoURL} alt=""style={{ height: '70px' }} />
                        : <FaUser></FaUser>
                    }
                </div>
                <div className='w-3/1'>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full mb-5 input-bordered" readOnly />
                    <input name="Name" type="text" placeholder="Name" className="input  w-full mb-5  input-bordered" />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <div className='flex justify-center mt-5'>
                    {
                        user?.email ? <input className='btn' type="submit" value="Post Review" /> :
                            <Link to="/login"><input className='btn' value="Post Review" /></Link>
                    }
                  </div>
                 
            </form>
        </div>
    );
};

export default PostReview;