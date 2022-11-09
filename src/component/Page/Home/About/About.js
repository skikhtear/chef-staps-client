import React from 'react';
import img from '../../../../assets/img/about-img.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-black rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt='' className='w-1/3'/>
                <div>
                    <h1 className="text-5xl font-bold">About</h1>
                    <p className="py-6">Chef steps Service brings people together. Whether around the family dinner table or in an extravagant dining room, we create moments of dining luxury, personalized and presented by a team of talented, professionally-trained chefs who delight in sharing culinary excellence. The value we create comes from the care we take to listen and attend to the culinary needs and desires or our clients, and the way we work together to satisfy those preferences.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;