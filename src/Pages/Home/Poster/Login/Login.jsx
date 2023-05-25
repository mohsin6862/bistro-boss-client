import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../../../assets/others/authentication1.png'
import './Login.css'
const Login = () => {
    const handleLogin =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

    }
    return (
        
        <div>
            
            <div className="bimg flex lg:flex-row-reverse">
            <div className="w-1/2">
                {/* Login Form */}
                <div className="flex items-center justify-center h-screen">
                    <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
                        <h2 className="text-2xl mb-6">Login</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="email"
                                placeholder="Enter Your Email"
                                name='email'
                            />
                        </div>
                        <div className="mb-6">
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
                          
                            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Log IN" />
                            <a
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-1/2">
                {/* Image */}
              
                <div
                    className=" my-16"
                    
                />
                <img src={loginImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Login;