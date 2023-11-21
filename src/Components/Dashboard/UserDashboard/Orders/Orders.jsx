import useOrders from '../../../../Hooks/useOrders';
import OrdersList from './OrdersList';

const Orders = () => {

    const [orders] = useOrders();

    return (
        <div>
            {
                orders.length > 0 ?
                    <OrdersList orders={orders} />
                    :
                    <div className='w-full lg:w-1/2 text-center mb-10 lg:mb-0 mt-28 mx-auto p-8 border-4 border-black'>
                        <h1 className='text-3xl font-playFair font-bold mb-8'>You haven't any Orders!!!</h1>
                    </div>
            }
        </div>
    );
};

export default Orders;