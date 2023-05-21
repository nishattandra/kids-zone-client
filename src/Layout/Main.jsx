import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <hr className="h-px mx-auto bg-orange-200 border-0"></hr>
            <Outlet></Outlet>
            <hr className="h-px  mx-auto bg-orange-200 border-0"></hr>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;