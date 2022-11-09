import React, { useEffect, useState } from 'react';

const ReviewRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, customer, service, message,UserImg} = order;
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
                                <img src={UserImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${message}</span>
            </td>
            {/* <td>Purple</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th> */}
        </tr>
    );
};

export default ReviewRow;