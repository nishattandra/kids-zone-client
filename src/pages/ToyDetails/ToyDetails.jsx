import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData()
    const {name, seller, email, details, photo, rating, price, quantity} = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={photo} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p>Seller: {seller}</p>
                <p>{email}</p>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: {price}</div>
                    <div className="badge badge-outline">Quantity: {quantity}</div>
                    <div className="badge badge-outline">Rating: {rating}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;