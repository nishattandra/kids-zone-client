import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr className="h-px  mx-auto bg-orange-700 border-0"></hr>
            <Outlet></Outlet>
            <hr className="h-px  mx-auto bg-orange-700 border-0"></hr>
            <Footer></Footer>
        </div>
    );
};

export default Main;