import React from 'react';
import {AiFillDelete} from '@react-icons/all-files/ai/AiFillDelete';

const BooksList = ({ books }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => {
                            const {name, author, price} = book;
                            return <tr>
                                <th>{index + 1}</th>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td>${price}</td>
                                <td><AiFillDelete className=' text-xl text-orange-600 hover:text-orange-700' /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksList;