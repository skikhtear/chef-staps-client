import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { _id, serviceName, customer, service, message,UserImg} = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost btn-outline btn-warning'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                                <img src={UserImg} alt=""  className='rounded-full'/>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{message}</span>
            </td>
            <td>
                <Link to={`/updatereviews/${_id}`}>
                    <button className='btn btn-ghost btn-outline btn-warning'>Update</button>
                </Link>
            </td>
            
        </tr>
    );
};

export default ReviewRow;