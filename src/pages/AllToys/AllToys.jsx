import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ARow from './ARow';

const AllToys = () => {
    useTitle('All Toys')
    const [toys, settoys] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-six-plum.vercel.app/alltoy').then(res => res.json()).then(data => settoys(data))
    }, [])
    const handleSearch = (event) =>{
        event.preventDefault()
        const search = event.target.search.value;
        const searched = toys.filter(toy => toy.name.toLowerCase().includes(search.toLowerCase()))
        settoys(searched)
    }
    return (
        <div className="overflow-x-auto w-4/5 mx-auto space-y-3 my-10">
            <form onSubmit={handleSearch} className='space-y-3 mt-5'>
                <div className="form-control">
                    <input type="text" name='search' placeholder="Search Text" className="input input-bordered" />
                </div>
                <div className="form-control">
                <input type="submit" value="Search" className=" btn bg-orange-600 border-0 w-1/2 mx-auto" />
                </div>
            </form>
            <table className="table table-zebra w-full mt-5">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <ARow key={toy._id} toy={toy}></ARow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;