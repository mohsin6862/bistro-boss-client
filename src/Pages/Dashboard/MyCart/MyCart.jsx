import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../Hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
const MyCart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id)=>{
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            
            fetch(`http://localhost:3000/cart/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )

                }
            })
            }
          })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase w-full flex font-semibold justify-evenly h-[100px] items-center '>
                <h1 className=' text-xl   '>Total Order: {cart?.length}</h1>
                <h1 className=' text-xl   '>Total Price: ${totalPrice}</h1>
                <button className='btn btn-secondary bg-[#D1A054] btn-sm border border-[#D1A054] hover:bg-amber-600 hover:border-[#D1A054]'>Pay</button>
            </div>

            <div>
                <div className="overflow-hidden">
                <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>

                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((row, index) => <tr key={row._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td className='text-end'>{row.price}</td>
                                    <th>
                                        <button onClick={()=> handleDelete(row._id)} className="btn btn-ghost text-white btn-md bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>
                                )
                            }


                        </tbody>
                        {/* foot */}


                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
