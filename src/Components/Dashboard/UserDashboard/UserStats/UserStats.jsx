import React from 'react';
import useCart from '../../../../Hooks/useCart';
import useOrders from '../../../../Hooks/useOrders';
import useMyBooks from '../../../../Hooks/useMyBooks';

const UserStats = () => {

    const [cart] = useCart();
    const [orders] = useOrders();
    const [myBooks] = useMyBooks();
    const price = orders.reduce((acc, order) => acc + order.totalPrice, 0);
    console.log(orders);

    return (
        <div className="stats shadow w-full rounded-xl">

            <div className="stat place-items-center bg-orange-500 text-white">
                <div className="stat-title text-white">Expenditure</div>
                <div className="stat-value">${price}</div>
            </div>

            <div className="stat place-items-center bg-cyan-500 text-white">
                <div className="stat-title text-white">Cart Items</div>
                <div className="stat-value">{cart.length}</div>
            </div>

            <div className="stat place-items-center bg-sky-500 text-white">
                <div className="stat-title text-white">Total Orders</div>
                <div className="stat-value">{orders.length}</div>
            </div>

            <div className="stat place-items-center bg-green-500 text-white">
                <div className="stat-title text-white">My Books</div>
                <div className="stat-value">{myBooks.length}</div>
            </div>

        </div>
    );
};

export default UserStats;