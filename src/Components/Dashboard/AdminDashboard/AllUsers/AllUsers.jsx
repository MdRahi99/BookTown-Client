import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../../../../Hooks/Title';
import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';
import { FaUserShield } from '@react-icons/all-files/fa/FaUserShield';
import Swal from 'sweetalert2';
import useAllUsers from '../../../../Hooks/useAllusers';

const AllUsers = () => {

    Title('All Users');

    const [users, refetch] = useAllUsers();

    const handleUpdate = (user) => {
        fetch(`https://book-town-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    title: `${user.name} is Admin Now`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }
    const handleDelete = (user) => {
        fetch(`https://book-town-server.vercel.app/users/${user._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: `User: ${user.name} Deleted Successfully`,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    return (
        <div>
            <h1 className='p-4 text-center border-b-4 rounded text-2xl font-bold border-black mb-6 w-full lg:w-1/2 mx-auto'>Total User: {users.length}</h1>
            <div className="overflow-x-auto flex items-center justify-center">
                <table className="table w-full lg:w-3/4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ?
                                                'Admin'
                                                :
                                                <button onClick={() => handleUpdate(user)} className='text-2xl text-orange-600 font-bold hover:text-orange-800' title='Role'>
                                                    <FaUserShield />
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className='text-2xl text-orange-600 font-bold hover:text-orange-800' title='Delete'>
                                            <AiOutlineDelete />
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;