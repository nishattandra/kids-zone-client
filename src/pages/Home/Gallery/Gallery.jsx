import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/images/gallery/1.png'
import img2 from '../../../assets/images/gallery/2.png'
import img3 from '../../../assets/images/gallery/3.png'
import img4 from '../../../assets/images/gallery/4.png'
import img5 from '../../../assets/images/gallery/5.png'
import img6 from '../../../assets/images/gallery/6.png'
import img7 from '../../../assets/images/gallery/7.png'
import img8 from '../../../assets/images/gallery/8.png'

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center m-10 text-4xl font-bold text-orange-600'>Toys Gallery</h1>
            <Marquee>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img1} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Teddy Bear</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img2} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Horse</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img3} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Dinosaur</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img4} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Dog</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img5} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Cat</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img6} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Unicorn</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img7} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Pikachu</h2>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mr-4 border-2  border-orange-400 p-4">
                    <figure><img className='w-64 h-48' src={img8} /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto">Whale</h2>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Gallery;