import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from '../../Components/Dashboard/Profile/Profile';

const ProfileLayout = () => {
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-2 m-2 rounded-2xl bg-slate-200 p-2'>
           <div className='col-span-1'><Profile /></div>
           <div className='col-span-3'><Outlet></Outlet></div>
        </div>
    );
};

export default ProfileLayout;