import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr className=" h-1  mx-auto bg-orange-400 border-0"></hr>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;