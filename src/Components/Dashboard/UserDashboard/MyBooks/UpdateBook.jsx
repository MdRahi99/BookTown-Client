import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Title from '../../../../Hooks/Title';
import useAuth from '../../../../Hooks/useAuth';

const UpdateBook = ({ bookDetails }) => {
    Title('Update Book')

    const { author, desc, email, img, name, price, rating, _id } = bookDetails;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleUpdateForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const author = form.author.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const desc = form.desc.value;
        const info = { email, img, name, author, rating, price, desc };
        console.log(info)
        fetch(`https://book-town-server.vercel.app/update-book/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                    navigate('/dashboard/my-books')
                }
            })
    }

    return (
        <div className='flex flex-col w-full gap-8 lg:gap-20 p-10 lg:p-20 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-wallPoet p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>Update Book</h1>
            <form
                onSubmit={handleUpdateForm}
                className='flex flex-col gap-4'
            >
                <input type="text" name="img" defaultValue={img} placeholder="Enter book image url here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="name" defaultValue={name} placeholder="Enter book name here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="author" defaultValue={author} placeholder="Enter book author name here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="rating" defaultValue={rating} placeholder="Enter book rating here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="price" defaultValue={price} placeholder="Enter book price here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <textarea name="desc" defaultValue={desc} className="textarea textarea-accent w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter book description here"></textarea>

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default UpdateBook;