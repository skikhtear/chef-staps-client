import React,{useEffect,useState} from 'react';
import useTitle from '../../../../Hooks/useTitle';
import { Spinner } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://chef-steps-server.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <Spinner animation="border" variant="success" />
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
        </div>
    );
};

export default AllServices;