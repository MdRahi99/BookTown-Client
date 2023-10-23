import React from 'react';

const CartInfo = ({book}) => {
    
    const {_id, category, name, img, price, author, email} = book;

    return (
        <div>
            <h1 className='text-2xl font-bold'>{category}</h1>
           <div className='flex items-center justify-between'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{author}</p>
                <p>{price}</p>
            </div>
           </div>
        </div>
    );
};

export default CartInfo;