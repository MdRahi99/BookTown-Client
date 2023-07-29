import React from 'react';

const Categories = ({ categories, handleCategory }) => {

    return (
        <div className='flex lg:flex-row flex-col gap-4 lg:items-center justify-around mb-12 border-x-0 lg:border-y-2 border-[#b3b4b4] rounded p-2'>
            {
                categories.map(data => {
                    const { _id, category } = data;
                    return (
                        <button key={_id} onClick={() => handleCategory(category)} className='px-4 py-2 font-semibold font-roboto border-b-2 lg:border-b-0 w-full lg:border-x-2 hover:bg-black hover:text-white border-[#b3b4b4]'>
                            {category}
                        </button>
                    )
                })
            }
        </div>
    );
};

export default Categories;