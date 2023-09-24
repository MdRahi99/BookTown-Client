import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const data = useLoaderData();
    const {name} = data;
    console.log(data)

    return (
        <div>
            {name}
        </div>
    );
};

export default BookDetails;