import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyBookDetails = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            ok
        </div>
    );
};

export default MyBookDetails;