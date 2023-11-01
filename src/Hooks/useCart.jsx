import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Components/Shared/Loader/Loader';

const useCart = () => {

    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('BookTown-Access-Token')

    if (!user) {
        return [[], () => { }];
    }
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://book-town-server.vercel.app/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    })

    return [cart, refetch]
};

export default useCart;