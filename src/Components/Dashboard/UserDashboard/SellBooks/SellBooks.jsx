import Swal from 'sweetalert2';
import Title from '../../../../Hooks/Title';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const SellBooks = () => {
    Title('Sell Book')

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

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
                    const newItems = { name, email: user?.email, author, rating, price: parseFloat(price), desc, img: imgURL }

                    axiosSecure.post('/add-book', newItems)
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
            })
    }

    return (
        <div className='flex flex-col w-full gap-8 lg:gap-16 p-10 lg:p-10 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-wallPoet p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>Add a Book</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <input type="file" name="img" className="input p-2 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("img")} />

                <input type="text" name="name" placeholder="Enter book name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    {...register("name", { required: true, maxLength: 120 })} />

                <input type="text" name="author" placeholder="Enter book author name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    {...register("author", { required: true })} />

                <input type="text" name="rating" placeholder="Enter book rating here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    {...register("rating", { required: true })} />

                <input type="text" name="price" placeholder="Enter book price here" className="input w-full max-w-2xl mx-auto rounded-xl"
                    {...register("price", { required: true })} />

                <textarea name="desc" className="textarea w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter book description here"
                    {...register("desc", { required: true })}></textarea>

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default SellBooks;