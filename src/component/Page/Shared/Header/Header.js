import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import logo from '../../../../assets/img/logo.png'




const Header = () => {
    // const { user, logout } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logout()
    //         .then()
    //         .catch()
    // }

    const menuItems = <>
        <li className='font-semibold'>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Foods</Link>
            <Link to={'/'}>Blog</Link>
           
            {/* {
                user?.email ?
                    <>
                        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
                        <li className='font-semibold'>
                            <button onClick={handleLogOut} className='btn-ghost'>Logout</button>
                        </li>
                    </>
                    :
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
            } */}

        </li>
    </>
    return (
        <div className="navbar h-20 mb-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
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
                <button className="btn btn-outline btn-warning">My Review</button>
            </div>
        </div>
    );
};

export default Header;