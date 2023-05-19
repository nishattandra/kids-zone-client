import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/logo/logo.png'

const Navbar = () => {

    const navItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/about'>Blog</Link> </li>
        {/* {user?.email ? <li><button onClick={handleLogOut}>LogOut</button></li>
    : 
    <li> <Link to='/login'>Login</Link> </li>} */}
    </>
    return (
        <div className="navbar h-28 mb-2 rounded-lg border-b-orange-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className='w-20' to='/'> <img src={img} alt="" /></Link>
                <h2 className="btn btn-ghost normal-case text-3xl font-bold mr-0">Kids<span className=' text-orange-600'>Zone</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;