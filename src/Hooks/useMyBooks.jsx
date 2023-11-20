import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMyBooks = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: myBooks = [] } = useQuery({
        queryKey: ['myBooks', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/my-books?email=${user?.email}`);
                return res.data;
            } else {
                return [];
            }
        }
    })

    return [myBooks, refetch]
};

export default useMyBooks;