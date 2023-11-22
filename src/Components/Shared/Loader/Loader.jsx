import React from 'react';

const Loader = () => {
    return (
        <div className='flex mx-auto items-center justify-center h-96'>
            <progress className="progress progress-success w-20 mx-auto h-20 rounded-full my-20"></progress>
        </div>
    );
};

export default Loader;