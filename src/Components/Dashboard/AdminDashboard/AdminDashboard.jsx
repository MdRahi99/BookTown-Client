import React from 'react';
import Title from '../../../Hooks/Title';
import AdminStats from './AdminStats/AdminStats';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AdminDashboard = () => {

    Title('Admin Dashboard');
    const [axiosSecure] = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })

    return (
        <div className='bg-white rounded-2xl w-full p-4'>
            <AdminStats stats={stats} />
        </div>
    );
};

export default AdminDashboard;