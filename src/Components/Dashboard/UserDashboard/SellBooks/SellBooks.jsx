import Swal from 'sweetalert2';
import Title from '../../../../Hooks/Title';
import useAuth from '../../../../Hooks/useAuth';

const SellBooks = () => {
    Title('Sell Book')

    const {user} = useAuth();

    const handleForm = (e) => {
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
        fetch('https://book-town-server.vercel.app/add-book', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                    form.reset();
                }
            })
    }

    return (
        <div className='flex flex-col w-full gap-8 lg:gap-20 p-10 lg:p-20 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-wallPoet p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>Add a Book</h1>
            <form
                onSubmit={handleForm}
                className='flex flex-col gap-4'
            >
                <input type="text" name="img" placeholder="Enter book image url here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="name" placeholder="Enter book name here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="author" placeholder="Enter book author name here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="rating" placeholder="Enter book rating here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <input type="text" name="price" placeholder="Enter book price here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />

                <textarea name="desc" className="textarea textarea-accent w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter book description here"></textarea>

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default SellBooks;