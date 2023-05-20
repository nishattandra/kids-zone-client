import React from 'react';
import img1 from '../../../assets/images/latest/1.png'
import img2 from '../../../assets/images/latest/2.png'
import img3 from '../../../assets/images/latest/3.png'
import img4 from '../../../assets/images/latest/4.png'
import img5 from '../../../assets/images/latest/5.png'
import img6 from '../../../assets/images/latest/6.png'
import img7 from '../../../assets/images/latest/7.png'
import img8 from '../../../assets/images/latest/8.png'
import img9 from '../../../assets/images/latest/9.png'
import img10 from '../../../assets/images/latest/10.png'
import img11 from '../../../assets/images/latest/11.png'
import img12 from '../../../assets/images/latest/12.png'
import img13 from '../../../assets/images/latest/13.png'
import img14 from '../../../assets/images/latest/14.png'
import img15 from '../../../assets/images/latest/15.png'

const LatestProducts = () => {
    return (
        <div className='border-1 bg-orange-100 py-10 mb-16'>
            <h1 className='text-center m-10 text-4xl font-bold'>Latest <span className=' text-orange-500'>Products</span> </h1>
            <div className="carousel rounded-box">
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img1} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img13} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img2} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img12} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img5} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img14} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img7} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img8} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img9} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img10} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img11} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img4} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img3} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img6} />
                </div>
                <div className="carousel-item border-1 border-gray-400">
                    <img className='h-72 w-80' src={img15} />
                </div>
            </div>
        </div>
    );
};

export default LatestProducts;