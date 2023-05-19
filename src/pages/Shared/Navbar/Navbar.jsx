import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../../assets/images/logo/logo.png'
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const navItems = <>
        <li> <NavLink className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : ' font-bold')} to='/'>Home</NavLink> </li>
        <li> <NavLink className={({ isActive }) => (isActive ? 'text-orange-600 font-bold' : 'font-bold')} to='/blogs'>Blogs</NavLink> </li>
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
                <img className='md:w-20 sm: w-12' src={img} alt="" />
                <h2 className="btn btn-ghost normal-case text-3xl font-bold mr-0">KIDs<span className=' text-orange-600'>ZOne</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {isHovering && (
                    <h4 className='font-extrabold mr-2'>{user.displayName}</h4>
                )}
                {
                    user && <img onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut} style={{ width: '40px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                }
                {user?.email ?
                    <button className="btn btn-active btn-primary ml-2" onClick={handleLogOut}>LogOut</button>
                    :
                    <Link to='/login'>
                        <button className="btn btn-active bg-orange-600 border-0 mr-5">Sign In</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;