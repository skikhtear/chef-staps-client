import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://chef-steps-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='text-center mb-12'>
                <h2 className="text-5xl font-semibold">Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-20'>
                <Link to={'/services'} ><button className="btn btn-outline btn-warning font-semibold">All Services</button></Link>
            </div>
        </div>
        
    );
};

export default Service;