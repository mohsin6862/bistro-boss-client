import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import signupLogo from '../../assets/others/authentication2.png'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser, UpdateProfileInfo} = useContext(AuthContext)
    const navigate = useNavigate()
     const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const newUser = result.user
            console.log(newUser)
            UpdateProfileInfo(result.user,data.name,data.photoURL)
            .then(()=>{
                console.log("user created successfully")
                reset()
                Swal.fire({
                    title: 'Sign Up Successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate('/')
            })

        })
        .catch(error=>{
            console.log(error.message)
        })
    
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | SignUp</title>

            </Helmet>

            <div className="bimg flex lg:flex-row-reverse">
                <div className="w-1/2">
                    {/* Login Form */}
                    <div className="flex items-center justify-center h-screen">
                        <form  onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
                            <h2 className="text-2xl mb-6">Sign Up</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                               
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name='name'
                                     {...register("name" ,{ required: true })}
                                />
                                 {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    PhotoURL
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                               
                                    type="text"
                                    placeholder="Enter Your Photo URL"
                                    name='name'
                                     {...register("photoURL" ,{ required: true })}
                                />
                                 {errors.name && <span className="text-red-600">PhotoURL is required</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none text-gray-100 focus:shadow-outline"
                                    {...register("email" ,{ required: true })}
                                    type="email"
                                    placeholder="Enter Your Email"
                                    name='email'
                                   
                                />
                                  {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none text-gray-100 focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    name='password'
                                    placeholder="Enter Your Password"
                                     {...register("password",
                                     {
                                         required: true,
                                         minLength: 8,
                                         pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])/
                                        
                                        
                                        })}
                                />
                                  {errors.name && <span className="text-red-600">Password is required</span>}
                                  {errors.password?.type === 'minLength' && <p className="text-red-600">Password must have to 6 Character</p>}
                                  
                                  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have atleast 1 uppercase 1 lowarcase and a digit</p>}
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