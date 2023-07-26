import React from 'react';

const Loader = () => {
    return (
        <div className='flex items-center justify-center'>
            <progress className="progress progress-success w-64 mx-auto my-20"></progress>
        </div>
    );
};

export default Loader;