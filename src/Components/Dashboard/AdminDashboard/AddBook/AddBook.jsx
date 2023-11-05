import React from 'react';
import Title from '../../../../Hooks/Title';
import BookAddForm from '../../../Shared/BookAddForm/BookAddForm';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import useImageUpload from '../../../../Hooks/useImageUpload';
import Swal from 'sweetalert2';

const AddBook = () => {

    Title('Add Book');

    const title = 'Add Book';

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const { uploadImage } = useImageUpload();

    const onSubmit = async (data) => {
        const { name, author, rating, price, desc } = data;

        const imgURL = await uploadImage(data.img[0]);

        if (imgURL) {
            const newItems = { name, email: user?.email, author, rating, price: parseFloat(price), desc, img: imgURL };

            axiosSecure.post('/add-admin-book', newItems)
                .then(data => {
                    if (data.data.insertedId) {
                        reset();
                        Swal.fire({
                            title: 'Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })
        }
    }


    return (
        <BookAddForm
            title={title}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit} />
    );
};

export default AddBook;