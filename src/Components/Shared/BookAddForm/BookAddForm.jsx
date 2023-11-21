import React from 'react';

const BookAddForm = ({register, handleSubmit, onSubmit, bookDetails, title}) => {

    return (
        <div className='flex flex-col w-full gap-8 lg:gap-16 p-10 lg:p-10 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-playFair p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>{title}</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4'
            >
                <input type="file" name="img" className="input p-2 w-full max-w-2xl mx-auto rounded-xl"
                    {...register("img")} />

                <input type="text" name="name" placeholder="Enter book name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                defaultValue={bookDetails? bookDetails.name:''}
                    {...register("name", { required: true, maxLength: 120 })} />

                <input type="text" name="author" placeholder="Enter book author name here" className="input w-full max-w-2xl mx-auto rounded-xl"
                defaultValue={bookDetails? bookDetails.author:''}
                    {...register("author", { required: true })} />

                <input type="text" name="rating" placeholder="Enter book rating here" className="input w-full max-w-2xl mx-auto rounded-xl"
                defaultValue={bookDetails? bookDetails.rating:''}
                    {...register("rating", { required: true })} />

                <input type="text" name="price" placeholder="Enter book price here" className="input w-full max-w-2xl mx-auto rounded-xl"
                defaultValue={bookDetails? bookDetails.price:''}
                    {...register("price", { required: true })} />

                <textarea name="desc" className="textarea w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter book description here"
                defaultValue={bookDetails? bookDetails.desc:''}
                    {...register("desc", { required: true })}></textarea>

                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default BookAddForm;