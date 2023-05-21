import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RiDeleteBin5Fill} from 'react-icons/ri';
import {  GrUpdate } from 'react-icons/gr';


const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    // console.log(user)
    const [toys, settoys] = useState([])
    useEffect(() => {
        fetch(`https://assignment-11-server-six-plum.vercel.app/mytoy?email=${user?.email}`).then(res => res.json())
            .then(data => {
                settoys(data)
            })
    }, [])
    const handleSort = (value)=>{
        fetch(`https://assignment-11-server-six-plum.vercel.app/sortmytoy?email=${user?.email}&sort=${value}`).then(res => res.json())
        .then(data => {
            settoys(data)
        })
    }
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://assignment-11-server-six-plum.vercel.app/deletetoy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successful');
                        const remaining = toys.filter(toy => toy._id !== id);
                        settoys(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-10'>
            <div className='space-x-5 w-96 mx-auto'>
                <button onClick={()=>handleSort(1)} className="btn bg-gray-500">Low to High</button>
                <button onClick={()=>handleSort(-1)} className="btn btn-accent">High to low</button>
            </div>
            <div className="overflow-x-auto w-full mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy =>
                                <tr key={toy._id}>
                                    <td>
                                        <img className='w-8' src={toy?.photo} alt="" />
                                    </td>
                                    <td>
                                        {toy?.name}
                                    </td>
                                    <td>
                                        {toy?.seller}
                                    </td>
                                    <td>
                                        {toy?.email}
                                    </td>
                                    <td>
                                        {toy?.category}
                                    </td>
                                    <td>
                                        {toy?.price}
                                    </td>
                                    <td>
                                        {toy?.rating}
                                    </td>
                                    <td>
                                        {toy?.quantity}
                                    </td>
                                    <td className='text-sm'>
                                        {toy?.details.slice(0, 40)}
                                    </td>
                                    <th>
                                        <Link to={`/updatetoy/${toy._id}`}><button className="btn btn-ghost btn-xs"><GrUpdate className='text-blue-500-600' style={{ height: '24px', width: '24px' }}></GrUpdate></button></Link>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-ghost btn-xs"><RiDeleteBin5Fill className='text-red-600' style={{ height: '24px', width: '24px' }}></RiDeleteBin5Fill></button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;