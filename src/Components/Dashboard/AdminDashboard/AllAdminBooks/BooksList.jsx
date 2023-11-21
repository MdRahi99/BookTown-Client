import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';
import { MdLibraryBooks } from "@react-icons/all-files/md/MdLibraryBooks";
import { HiOutlineBadgeCheck } from "@react-icons/all-files/hi/HiOutlineBadgeCheck";
import useBooks from '../../../../Hooks/useBooks';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

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

    const handleFeatured = (_id) => {
        Swal.fire({
            title: 'Are you sure you want to add this as a featured book?',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Cancel`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.put(`/add-feature/${_id}`)
                        .then(data => {
                            if (data.data.modifiedCount > 0) {
                                refetch();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'Added as a Featured Book!!!',
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
                console.error("Error added as a featured book:", error);
            });
    }

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
                            const { _id, name, author, featured, price } = book;
                            return <tr key={_id}>
                                <th>{index + 1}</th>
                                <td className='flex items-center justify-between'>{name}
                                    {
                                        !featured ?
                                            <button onClick={() => handleFeatured(_id)} title='Add as a featured book'>
                                                <MdLibraryBooks className='text-2xl text-sky-600 hover:text-blue-800' />
                                            </button>
                                            :
                                            <HiOutlineBadgeCheck  className='text-2xl text-sky-600' />
                                    }
                                </td>
                                <td>{author}</td>
                                <td>${price}</td>

                                <td><Link to={`/dashboard/admin-book-details/${_id}`}>
                                    <FaEdit className='ml-4 text-xl text-orange-600 hover:text-orange-700' /></Link></td>

                                <td><button onClick={() => handleDelete(_id)}>
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