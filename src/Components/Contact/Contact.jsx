import React from 'react';

const Contact = () => {

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;;
        const desc = form.desc.value;
        const info = { name, email, desc };
        console.log(info)
        fetch('http://localhost:5000/contact-info', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Form Submitted Successfully!')
                    form.reset();
                }
            })
    }

    return (
        <div className='flex flex-col gap-8 lg:gap-20 p-10 lg:p-20 bg-[#e0f3ee] rounded-2xl'>
            <h1 className='text-xl lg:text-3xl rounded-xl text-center bg-[#b7e7da] font-wallPoet p-2 lg:p-4 w-full lg:w-80 uppercase mx-auto'>Contact Us</h1>
            <form
                onSubmit={handleForm}
                className='flex flex-col gap-4'
            >
                <input type="text" name="name" placeholder="Enter your name here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />
                <input type="email" name="email" placeholder="Enter your email here" className="input input-bordered input-accent w-full max-w-2xl mx-auto rounded-xl" />
                <textarea name="desc" className="textarea textarea-accent w-full max-w-2xl mx-auto rounded-xl" placeholder="Enter your topic here"></textarea>
                <button className="btn btn-outline btn-accent w-full lg:w-80 mx-auto rounded-xl">Submit</button>
            </form>
        </div>
    );
};

export default Contact;