import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import logo from '../../../../assets/img/logo.png'
import { FaUser } from "react-icons/fa";




const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }

    const menuItems = <>
        <li className='font-semibold'>
            <Link to={'/'}>Home</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/blogs'}>Blog</Link>
           
        </li>
    </>
    return (
        <div className="navbar h-20 mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                    
                </div>
                <img src={logo} alt="" className='w-20 rounded' />
                <Link className="btn btn-ghost normal-case text-xl">
                    <p className='font-bold '>Chef Steps</p>
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                
            </div>
            <div className="navbar-end">
                {user?.photoURL ?
                    <img src={user?.photoURL} alt=""  style={{ height: '50px' }} className='rounded-full mr-5'/>
                    : <FaUser className='mr-4'></FaUser>
                }

                {
                    user?.uid ?
                        <>
                            <span className='mr-4'>{user?.displayName}</span>
                            <button className="btn btn-outline btn-warning font-semibold align-middle" onClick={handleLogOut}>Logout</button>
                        </>
                        :
                        <>
                            <Link to='/login' className='mr-4'>Login</Link>
                            <Link to='/signup' className='mr-4'>Signup</Link>
                        </>
                }
                <Link to={'/myreviews'}><button className="btn btn-outline btn-warning ml-5">My Review</button></Link>
            </div>
        </div>
    );
};

export default Header;