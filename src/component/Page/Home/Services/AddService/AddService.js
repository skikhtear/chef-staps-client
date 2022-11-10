import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useLoaderData,  } from 'react-router-dom';
import { AuthContext } from '../../../../../Contexts/AuthProvider';




const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.Name.value;
        const detail = form.detail.value;
        const picture = form.picture.value;
        const price = form.price.value;

        const service = {
            name: userName,
            detail,
            picture,
            price
        }


        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('chef-steps')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Added service successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='flex justify-center' >
            <form onSubmit={handleAddService}>
                <h2 className="text-5xl font-bold ">Please Review </h2>
                <div className='w-3/1'>
                    <input name='picture'type="text"  placeholder='Photo url' className="input  w-full mb-5  input-bordered" />
                    <input name="Name" type="text" placeholder="Service name" className="input  w-full mb-5  input-bordered" />
                    <input name="price" type="text" placeholder="Price" className="input  w-full mb-5  input-bordered" />
                    <textarea name="detail" className="textarea textarea-bordered h-24 w-full" placeholder="Service details" required></textarea>

                </div>
                
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

export default AddService;