import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    console.log(user)
    const [toys, settoys] = useState([])
    useEffect(() => {
        // fetch(`localhost:5000/mytoy?email=${user?.email}`).then(res=> res.json())
        fetch(`http://localhost:5000/mytoy?email=${user?.email}`).then(res => res.json())
            .then(data => {
                settoys(data)
                // console.log(`http://localhost:5000/mytoy?email=${user?.email}`)
            })
    }, [])
    console.log(toys)
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy =>
                                <tr>
                                    <td>
                                        <img className='w-8' src={toy?.photo} alt="" />
                                    </td>
                                    <td>
                                        {toy?.name}
                                    </td>
                                    <td>
                                        {toy?.seller}
                                    </td>
                                    <th>
                                        <Link to={`/updatetoy/${toy._id}`}><button className="btn btn-ghost btn-xs">update</button></Link>
                                        <button className="btn btn-ghost btn-xs">delete</button>
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