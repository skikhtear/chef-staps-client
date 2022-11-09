import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ReviewRow from './ReviewRow';


const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('chef-steps')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this comment');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('chef-steps')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('chef-steps')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setReviews(newOrders);
                }
            })
    }

    return (
        <div>
            <div className='flex justify-center my-16'>
                <h1 className='text-5xl font-bold'>My Reviews</h1>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            reviews.map(order => <ReviewRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;