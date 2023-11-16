import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAllPayments from '../../../../Hooks/useAllPayments';

const PaymentsList = ({ payments }) => {

    const [, refetch] = useAllPayments();
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
                    axiosSecure.delete(`/delete-payment/${_id}`)
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

    const handleUpdate = (_id) => {
        Swal.fire({
            title: 'Are you sure you want to Update Status',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            denyButtonText: `Cancel`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Updated Successfully!!!',
                        confirmButtonText: 'Ok'
                    })
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
            .catch(error => {
                console.error("Error Updating Books:", error);
            });
    };

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Name</th>
                        <th>Customer Name</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Transaction Id</th>
                        <th>Payment</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((payment, index) => {
                            const { _id, name, firstName, lastName, paid, transactionId, phone, postcode, address, price } = payment;
                            return <tr key={_id}>
                                <th>{index + 1}</th>
                                <td className='font-bold'>{name}</td>
                                <td>{firstName + lastName}</td>
                                <td>${price}</td>
                                <td>{`${postcode}, ${address}`}</td>
                                <td>{phone}</td>
                                <td>{transactionId}</td>
                                <td>
                                    {
                                        paid ?
                                            <span className='bg-green-500 py-1 px-2 font-bold text-white rounded-lg'>Paid</span>
                                            :
                                            <span className='bg-red-500 py-1 px-2 font-bold text-white rounded-lg'>Pending</span>
                                    }
                                </td>

                                <td>
                                    <button onClick={() => handleUpdate()}>
                                        <FaEdit className='ml-4 text-xl text-orange-600 hover:text-orange-700' /></button>
                                </td>

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

export default PaymentsList;