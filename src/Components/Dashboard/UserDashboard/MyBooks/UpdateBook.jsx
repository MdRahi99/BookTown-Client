import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Title from '../../../../Hooks/Title';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateBook = ({ bookDetails }) => {
    Title('Update Book')

    const { author, desc, email, img, name, price, rating, _id } = bookDetails;
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const formData = new FormData();
        const { name, author, rating, price, desc } = data;
        formData.append('image', data.img[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const newItems = { name, email, author, rating, price: parseFloat(price), desc, img: imgURL }

                    axiosSecure.put(`/update-book/${_id}`, newItems)
                        .then(data => {
                            if (data.data.modifiedCount > 0) {
                                reset();
                                Swal.fire({
                                    title: 'Updated Successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                                navigate('/dashboard/my-books')
                            }
                        })
                }
            })
    }

    return (
        <div className='flex flex-col w-full gap-8 lg:gap-16 p-10 lg:p-10 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-wallPoet p-2 lg:p-4 w-full uppercase mx-auto'>Update a Book</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <input type="file" name="img" className="input p-2 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("img")} />

                <input type="text" name="name" placeholder="Enter book name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    defaultValue={name}
                    {...register("name", { required: true, maxLength: 120 })} />

                <input type="text" name="author" placeholder="Enter book author name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    defaultValue={author}
                    {...register("author", { required: true })} />

                <input type="text" name="rating" placeholder="Enter book rating here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    defaultValue={rating}
                    {...register("rating", { required: true })} />

                <input type="text" name="price" placeholder="Enter book price here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    defaultValue={price}
                    {...register("price", { required: true })} />

                <textarea name="desc" className="textarea w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter book description here"
                    defaultValue={desc}
                    {...register("desc", { required: true })}></textarea>

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default UpdateBook;