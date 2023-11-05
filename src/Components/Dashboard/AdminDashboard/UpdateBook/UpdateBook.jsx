import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Title from '../../../../Hooks/Title';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useImageUpload from '../../../../Hooks/useImageUpload';
import BookAddForm from '../../../Shared/BookAddForm/BookAddForm';

const UpdateBook = ({ bookDetails }) => {
    Title('Update Book');

    const title = 'Update Book';

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const { uploadImage } = useImageUpload();

    const onSubmit = async (data) => {
        const { name, author, rating, price, desc } = data;

        const imgURL = await uploadImage(data.img[0]);

        if (imgURL) {
            const newItems = { name, email: bookDetails.email, author, rating, price: parseFloat(price), desc, img: imgURL }

            axiosSecure.put(`/update-admin-book/${bookDetails._id}`, newItems)
                .then(data => {
                    if (data.data.modifiedCount > 0) {
                        reset();
                        Swal.fire({
                            title: 'Updated Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        navigate('/dashboard/all-admin-books')
                    }
                })
        }
    }

    return (
        <BookAddForm
            title={title}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            bookDetails={bookDetails} />
    );
};

export default UpdateBook;