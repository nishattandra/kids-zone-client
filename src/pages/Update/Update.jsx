import React from 'react';
import {useLoaderData} from 'react-router-dom'
import useTitle from '../../hooks/useTitle';
const Update = () => {

    useTitle('Update Toy')
    
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const quantity = form.quantity.value;
        const price = parseInt(form.price.value);
        const details = form.details.value;

        const newToy = { quantity, price, details}
        fetch(`http://localhost:5000/updatetoy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className=" p-24">
            <h3 className='text-4xl font-bold text-center mb-16'>Add A <span className='text-orange-500'>Toy</span></h3>
            <form onSubmit={handleUpdate}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form toy price and rating */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;