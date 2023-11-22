import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useState } from 'react';

const useBooks = () => {

    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: books = [], isLoading} = useQuery({
        queryKey: ['books', search, asc],
        queryFn: async () => {
            const res = await axiosSecure.get(`/books-details?search=${search}&sort=${asc ? 'asc' : 'desc'}`);
            return res.data;
        }
    })

    return [books, isLoading, refetch, asc, setAsc, setSearch]
};

export default useBooks;