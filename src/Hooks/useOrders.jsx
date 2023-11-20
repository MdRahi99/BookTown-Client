import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useOrders = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/payment-info/${user?.email}`);
                return res.data;
            } else {
                return [];
            }
        }
    })

    return [orders, refetch]
};

export default useOrders;