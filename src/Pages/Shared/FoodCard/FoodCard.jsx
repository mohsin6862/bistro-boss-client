import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price,_id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location= useLocation()
    const [,refetch]=useCart()

    const handleAddTOCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {foodId:_id,image,name,price,recipe,email:user?.email}
            fetch('http://localhost:3000/cart',{
                method:"POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                
                    }
                })
        }
        else{
            Swal.fire({
                title: 'You hav to login to added cart',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Please LogIn!'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{ state:{from:location}} )
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                <p className='absolute bg-black bg-opacity-80 rounded top-12 right-12 p-2 text-white'>${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='py-5'>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => { handleAddTOCart(item) }} className='btn btn-outline btn-error border-0 border-b-4'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;