import React from 'react';
import img1 from '../../../assets/images/banner/3.png'
import img2 from '../../../assets/images/banner/2.png'
import { BsArrowRight } from 'react-icons/bs';

const About = () => {
    return (
        <div>
            <h3 className='text-4xl  font-bold text-center mt-16'>About <span className='text-orange-500'>Us</span></h3>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img2} className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-2/3 border-8 border-white " />
                    </div>
                    <div className='lg:w-1/2 space-y-5 mt-8 p-4'>
                        <h1 className="text-5xl font-bold">We are qualified &  experience in this field</h1>
                        <p className="py-6">Toy, plaything, usually for an infant or child, and often an instrument used in a game. Toys, playthings, and games survive from the most remote past and from a great variety of cultures. The ball, kite, and yo-yo are assumed to be the oldest objects specifically designed as toys.</p>
                        <p className="py-6">Here we provide the latest toys with oldest one. We cordially welcome you and your's child in our toy shop. Hope you like it. If you have any doubt, please contact us.</p>
                        <button className="btn bg-orange-600 border-0">Get More Info <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;