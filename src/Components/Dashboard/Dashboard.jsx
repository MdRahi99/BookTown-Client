import React from 'react';
import Title from '../../Hooks/Title';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    Title('Dashboard')

    const [isAdmin] = useAdmin();

    return (
        <div>
            {
                isAdmin ?
                    <AdminDashboard />
                    :
                    <UserDashboard />
            }
        </div>
    );
};

export default Dashboard;