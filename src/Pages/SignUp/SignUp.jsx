import React from 'react';
import { Helmet } from 'react-helmet-async';
import signupLogo from '../../assets/others/authentication2.png'
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | SignUp</title>

            </Helmet>
            
            <div className="bimg flex lg:flex-row-reverse">
            <div className="w-1/2">
                {/* Login Form */}
                <div className="flex items-center justify-center h-screen">
                    <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
                        <h2 className="text-2xl mb-6">Sign Up</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="email"
                                placeholder="Enter Your Email"
                                name='email'
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                name='password'
                                placeholder="Enter Your Password"
                            />
                        </div>
             
                     
                        <div className="flex items-center justify-between">
                          
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " > Sign Up</button>
                         
                        </div>
                            <p className='text-center mt-5'><small>Already have an account? <Link to='/login'><span className='text-blue-500 hover:text-blue-700'>Please Login</span></Link></small></p>
                    </form>
                </div>
            </div>
            <div className="w-1/2">
                {/* Image */}
              
                <div
                    className=" my-16"
                    
                />
                <img src={signupLogo} alt="" />
            </div>
        </div>
        </div>
    );
};

export default SignUp;