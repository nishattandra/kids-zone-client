import React, { useEffect } from 'react';
import img from '../../../assets/images/banner/1.png'
import { BsArrowRight } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Banner = () => {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="hero" >
            <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
                <img src={img} className="max-w-sm rounded-lg " data-aos="zoom-in-up" />
                <div className='w-1/2' data-aos="fade-down">
                    <h1 className="text-5xl font-bold">The Largest <br /> Animal <span className='text-orange-600'>Toys</span>  <br /> MarketPlace.</h1>
                    <p className="py-6 font-semibold text-gray-950">Here we provide our best services. We have recently updated toys based on animal, also we have old collection. Please pay a visit to our toy shop.</p>
                    <button className="btn bg-orange-600 border-0">Explore More <span className='ml-3'><BsArrowRight></BsArrowRight></span></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;