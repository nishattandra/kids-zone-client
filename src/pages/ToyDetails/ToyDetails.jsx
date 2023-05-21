import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    const {name, seller, email, details, photo, rating, price, quantity} = toy;
    return (
        <div className="card w-[500px] bg-base-100 shadow-xl mx-auto my-10">
            <figure><img src={photo} /></figure>
            <div className="card-body">
                <h2 className="card-title flex justify-center">
                    {name}
                </h2>
                <p className='font-bold'>Seller: {seller}</p>
                <p>Email: {email}</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Price: ${price}</div>
                    <div className="badge badge-outline">Quantity: {quantity}</div>
                    <div className="badge badge-outline">Ratings: {rating}</div>
                </div>
                <p><span className='font-bold'>Description:</span> {details}</p>
            </div>
        </div>
    );
};

export default ToyDetails;