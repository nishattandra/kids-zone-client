import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr className='bg-orange-500' />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;