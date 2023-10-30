import React from 'react';
import Title from '../../Hooks/Title';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
    Title('Dashboard')

    const isadmin = false;

    return (
        <div>
            {
                isadmin ?
                    <>
                        <AdminDashboard />
                    </>
                    :
                    <>
                        <UserDashboard />
                    </>
            }
        </div>
    );
};

export default Dashboard;