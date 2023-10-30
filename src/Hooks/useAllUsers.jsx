import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {

    const token = localStorage.getItem('BookTown-Access-Token')

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://book-town-server.vercel.app/users', {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        }
    });

    return [users, refetch]
};

export default useAllUsers;