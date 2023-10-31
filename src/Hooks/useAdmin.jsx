import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user, logOut } = useContext(AuthContext);
    const token = localStorage.getItem('BookTown-Access-Token')

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://book-town-server.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logOut();
            }
            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;