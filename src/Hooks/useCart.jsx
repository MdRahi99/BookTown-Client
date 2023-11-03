import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/carts?email=${user.email}`);
                return res.data;
            } else {
                return [];
            }
        }
    })

    return [cart, refetch]
};

export default useCart;