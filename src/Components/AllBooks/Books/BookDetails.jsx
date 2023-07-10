import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { _id, img, name, author, rating, price } = bookDetails;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default BookDetails;