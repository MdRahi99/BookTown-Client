import React from 'react';

const Categories = ({ categories, handleCategory }) => {

    return (
        <div className='flex lg:flex-row flex-col gap-8 lg:items-center justify-around mb-12 border-[#b3b4b4] rounded p-2'>
            {
                categories.map(data => {
                    const { _id, category } = data;
                    return (
                        <button key={_id} onClick={() => handleCategory(category)} className='px-4 py-2 font-semibold font-roboto rounded-xl border-y-2 w-full hover:bg-black hover:text-white border-black'>
                            {category}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default Categories;