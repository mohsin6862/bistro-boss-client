import React from 'react';
import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaStar, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content uppercase">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard//payment-history"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                           
                            <li><NavLink to="/dashboard//reservation"><FaCalendarAlt></FaCalendarAlt> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard//add-review"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to="/dashboard//home"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/dashboard//payment-history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart <span><div className="badge badge-error">+{cart?.length || 0}</div></span></NavLink></li>
                                <li><NavLink to="/dashboard//reservation"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard//add-review"><FaStar></FaStar> Add Review</NavLink></li>
                            </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><FaBars></FaBars> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;