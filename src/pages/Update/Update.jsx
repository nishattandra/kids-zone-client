import React, { useEffect, useState } from 'react';
import {useLoaderData, useParams} from 'react-router-dom'
import useTitle from '../../hooks/useTitle';
import { toast } from 'react-toastify';
const Update = () => {
    const toy = useLoaderData()
    // console.log(toy)
    useTitle('Update Toy')
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const quantity = form.quantity.value;
        const price = parseInt(form.price.value);
        const details = form.details.value;

        const newToy = { quantity, price, details}
        fetch(`https://assignment-11-server-six-plum.vercel.app/updatetoy/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully')
                }
            })
    }
    return (
        <div className=" p-24 w-5/6 mx-auto">
            <h3 className='text-4xl font-bold text-center mb-16'>Update</h3>
            <form onSubmit={handleUpdate}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={toy.quantity} type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form toy price and rating */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={toy.price} type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={toy.details} type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <input type="submit" value="Update Toy" className=" btn bg-orange-600 border-0 w-1/2 " />
                </div>
            </form>
        </div>
    );
};

export default Update;