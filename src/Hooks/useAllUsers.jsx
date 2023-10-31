import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const useAllUsers = () => {

    const { logOut } = useContext(AuthContext);

    const token = localStorage.getItem('BookTown-Access-Token')

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://book-town-server.vercel.app/users', {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                logOut();
            }
            return res.json();
        }
    });

    return [users, refetch]
};

export default useAllUsers;