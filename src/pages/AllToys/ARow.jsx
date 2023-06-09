import React from 'react';
import { Link } from 'react-router-dom';

const ARow = ({ toy }) => {
    const {_id, category, name, seller, price, quantity } = toy;
    return (
        <tr>
            <th>{seller}</th>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td> <Link to={`/singletoy/${_id}`}><button className="btn bg-gray-500">View Details</button></Link></td>
        </tr>
    );
};

export default ARow;