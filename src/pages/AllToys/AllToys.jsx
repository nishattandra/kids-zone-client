import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const [toys, settoys]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy').then(res=> res.json()).then(data => settoys(data))
    },[])
    console.log(toys)
    return (
        <div>
                    hello
        </div>
    );
};

export default AllToys;