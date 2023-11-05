import React from 'react';
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';
import useBooks from '../../../../Hooks/useBooks';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const BooksList = ({ books }) => {

    const [, refetch] = useBooks();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Cancel`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/delete-admin-book/${_id}`)
                        .then(data => {
                            if (data.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Deleted Successfully!!!',
                                    confirmButtonText: 'Ok'
                                })
                            }
                        })
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            const { _id, name, author, price } = book;
                            return <tr key={_id}>
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>${price}</td>
                                <td className=''><FaEdit className='ml-4 text-xl text-orange-600 hover:text-orange-700' /></td>
                                <td><button onClick={()=>handleDelete(_id)}>
                                    <AiFillDelete className='ml-4 text-xl text-orange-600 hover:text-orange-700' />
                                </button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksList;