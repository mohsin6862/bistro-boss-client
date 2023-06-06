
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {SignInWithGoogle}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.form?.pathname || '/'
  const  handleGoogle =()=>{
    SignInWithGoogle()
    .then(result=>{
        const loggedUser = result.user
        console.log(loggedUser)
        const savedUser = {name : loggedUser.displayName, email: loggedUser.email}
        fetch('http://localhost:3000/users',{
                    method:"POST",
                    headers:{
                        "content-type": "application/json"
                    },
                    body:JSON.stringify(savedUser)
                })
                .then(res => res.json())
                .then(() => {
                  
                        navigate(from, { replace: true })
                    
                })
         
            })
      


  }
    return (
        <div className='my-3'>
            <div className="divider">Login with Google</div>
           <div className='w-full text-center'>
           <button onClick={handleGoogle} className=" btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
           </div>
        </div>
    );
};

export default SocialLogin;