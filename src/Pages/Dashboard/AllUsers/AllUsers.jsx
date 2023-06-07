import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUsersSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:3000/users')
        return res.json()
    })
    const handleAdmin = (user)=>{
        fetch(`http://localhost:3000/users/admin/${user._id}`,{
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDelete = ()=>{

    }
    return (
        <div className=''>
            <h1 className='text-2xl font-bold text-center m-4'>Total Users: {users.length}</h1>


            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                
                      {
                        users.map((user,index)=>    <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role == "admin"?  'admin' : <button onClick={()=> handleAdmin(user)} className="btn btn-ghost text-white btn-md bg-amber-600"><FaUsersSlash></FaUsersSlash></button>}</td>
                            <td><button onClick={()=> handleDelete(user._id)} className="btn btn-ghost text-white btn-md bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                      }
                     
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;