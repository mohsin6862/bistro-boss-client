import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { FaShoppingBasket } from 'react-icons/fa';
import useCart from '../../../Hooks/useCart';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [cart] = useCart()

    const handleLogout = () => {
        LogOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    const navItems = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li>  <Link to="/dashboard/mycart">
            <button className="flex gap-2">
                <FaShoppingBasket></FaShoppingBasket>
                <div className="badge badge-error">+{cart?.length || 0}</div>
            </button>

        </Link>

        </li>

        {
            user ? <>   <li onClick={handleLogout}><Link >Log out</Link></li></> : <><li><Link to="/login">Log In</Link></li>
            </>
        }
        {user &&
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>}
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-20  h-20 max-w-6xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss </a>
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
        </div>
    );
};

export default NavBar;