import React from 'react';
import { Outlet } from 'react-router-dom';
import UserProfile from '../../Components/UserDashboard/UserProfile/UserProfile';

const ProfileLayout = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-2 m-2 rounded-2xl bg-slate-200 p-2'>
           <div className='col-span-1'><UserProfile></UserProfile></div>
           <div className='col-span-3'><Outlet></Outlet></div>
        </div>
    );
};

export default ProfileLayout;