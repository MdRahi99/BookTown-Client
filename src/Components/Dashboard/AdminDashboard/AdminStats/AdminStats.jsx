import React from 'react';

const AdminStats = ({ stats }) => {
    const {revenue, users, products, orders} = stats;

    return (
        <div className="stats shadow w-full rounded-xl">

            <div className="stat place-items-center bg-orange-500 text-white">
                <div className="stat-title text-white">Revenue</div>
                <div className="stat-value">${revenue}</div>
            </div>

            <div className="stat place-items-center bg-cyan-500 text-white">
                <div className="stat-title text-white">Users</div>
                <div className="stat-value">{users}</div>
            </div>

            <div className="stat place-items-center bg-sky-500 text-white">
                <div className="stat-title text-white">Books</div>
                <div className="stat-value">{products}</div>
            </div>

            <div className="stat place-items-center bg-green-500 text-white">
                <div className="stat-title text-white">Orders</div>
                <div className="stat-value">{orders}</div>
            </div>

        </div>
    );
};

export default AdminStats;